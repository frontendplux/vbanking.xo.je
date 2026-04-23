<?php
class Auth {
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function Login($data){
        $email = trim($data['email'] ?? '');
        $pass  = trim($data['pass'] ?? '');

        if(empty($email) || empty($pass)){
            return ['success' => false, 'message' => "Enter all fields!"];
        }

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            return ['success' => false, 'message' => "Enter a valid Email Address"];
        }

        $smt = $this->conn->prepare("SELECT * FROM users WHERE email=? AND status='active' LIMIT 1");
        $smt->bind_param('s', $email);
        $smt->execute();
        $result = $smt->get_result();

        if($result->num_rows > 0){
            $row = $result->fetch_assoc();

            if(password_verify($pass, $row['password'])){
                
                $uid = bin2hex(random_bytes(16)); // secure token

                $update = $this->conn->prepare("UPDATE users SET uid=? WHERE id=? LIMIT 1");
                $update->bind_param('si', $uid, $row['id']);
                $update->execute();

                return [
                    'success' => true,
                    'message' => "Login successful!",
                    'data' => [
                        'id'  => $row['id'],
                        'uid' => $uid
                    ]
                ];
            }

            return ['success' => false, 'message' => "Invalid Email or Password!"];
        }

        return ['success' => false, 'message' => "Invalid Email or Password!"];
    }

   public function Login_phone($data){

    $phone = trim($data['phone'] ?? '');
    $pass  = trim($data['pass'] ?? '');

    if(empty($phone) || empty($pass)){
        return ['success' => false, 'message' => "Enter all fields!"];
    }

    // 🌍 International format (E.164)
    if(!preg_match('/^\+[1-9]\d{6,14}$/', $phone)){
        return ['success' => false, 'message' => "Invalid phone format (e.g. +2348012345678)"];
    }

    // 🔐 Safer query (only needed fields)
    $smt = $this->conn->prepare("
        SELECT id, password, status 
        FROM users 
        WHERE phone=? 
        LIMIT 1
    ");

    if(!$smt){
        return ['success' => false, 'message' => "Server error (prepare failed)"];
    }

    $smt->bind_param('s', $phone);
    $smt->execute();

    $result = $smt->get_result();

    if(!$result || $result->num_rows === 0){
        return ['success' => false, 'message' => "Invalid Phone or Password!"];
    }

    $row = $result->fetch_assoc();

    if($row['status'] !== 'active'){
        return ['success' => false, 'message' => "Account disabled"];
    }

    if(!password_verify($pass, $row['password'])){
        return ['success' => false, 'message' => "Invalid Phone or Password!"];
    }

    // 🔐 Secure session token
    $uid = bin2hex(random_bytes(32));

    $update = $this->conn->prepare("
        UPDATE users 
        SET uid=?, last_login=NOW() 
        WHERE id=? 
        LIMIT 1
    ");

    $update->bind_param('si', $uid, $row['id']);
    $update->execute();

    return [
        'success' => true,
        'message' => "Login successful!",
        'data' => [
            'id'  => $row['id'],
            'uid' => $uid
        ]
    ];
}


public function Signup($data){
    $firstname = trim($data['firstname'] ?? '');
    $lastname  = trim($data['lastname'] ?? '');
    $email     = trim($data['email'] ?? '');
    $phone     = trim($data['phone'] ?? '');
    $pass      = trim($data['pass'] ?? '');
    $referral  = trim($data['referral'] ?? '');

    // 🔴 validation
    if(empty($firstname) || empty($lastname) || empty($email) || empty($phone) || empty($pass)){
        return ['success' => false, 'message' => "All fields are required"];
    }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        return ['success' => false, 'message' => "Invalid email Address"];
    }

    if(!preg_match('/^\+[1-9]\d{6,14}$/', $phone)){
        return ['success' => false, 'message' => "Invalid phone format"];
    }

    if(strlen($pass) < 6){
        return ['success' => false, 'message' => "Weak password"];
    }

    // 🔍 check duplicate user
    $check = $this->conn->prepare("SELECT id, status, uid FROM users WHERE email=? OR phone=? LIMIT 1");
    $check->bind_param("ss", $email, $phone);
    $check->execute();
    $result = $check->get_result();

    // 🔐 secure password
    $hash = password_hash($pass, PASSWORD_BCRYPT);

    // 🔎 validate referral
    $ref_by = '';
    if(!empty($referral)){
        $refCheck = $this->conn->prepare("SELECT id FROM users WHERE ref_id=? LIMIT 1");
        $refCheck->bind_param("s", $referral);
        $refCheck->execute();
        $refResult = $refCheck->get_result();

        if($refResult->num_rows > 0){
            $ref_by = $referral;
        }
    }

    // 🧾 generate ref id + uid
    $ref_id = "REF-" . strtoupper(bin2hex(random_bytes(4)));
    $uid    = rand(100000,900000);

    // 🚨 IF USER EXISTS
    if($result->num_rows > 0){

        $row = $result->fetch_assoc();

        if($row['status'] === 'active'){
            return ['success' => false, 'message' => "User already exists"];
        }

        // ✅ UPDATE inactive user
        $stmt = $this->conn->prepare("
            UPDATE users SET 
                uid=?,
                ref_id=?,
                firstname=?,
                lastname=?,
                email=?,
                phone=?,
                password=?,
                referred_by=?,
                status='pending',
                created_at=NOW()
            WHERE id=?
        ");

        $stmt->bind_param(
            "ssssssssi",
            $uid,
            $ref_id,
            $firstname,
            $lastname,
            $email,
            $phone,
            $hash,
            $ref_by,
            $row['id']
        );

    } else {

        // 🆕 INSERT new user
        $stmt = $this->conn->prepare("
            INSERT INTO users 
            (uid, ref_id, firstname, lastname, email, phone, password, referred_by, status, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending', NOW())
        ");

        $stmt->bind_param(
            "ssssssss",
            $uid,
            $ref_id,
            $firstname,
            $lastname,
            $email,
            $phone,
            $hash,
            $ref_by
        );
    }

    // 🚀 execute
    if($stmt->execute()){
        // get correct user id
       $user_id = ($result->num_rows > 0) ? $row['id'] : $this->conn->insert_id;
        return [
            'success' => true,
            'message' => "Account processed successfully",
            'data' => [
                'user' => base64_encode($user_id),
                'email' => $email
            ]
        ];
    }

    return ['success' => false, 'message' => "Signup failed"];
}



public function verifyPasscode($data){

    $user_id = $data['user_id'] ?? null;
    $otp     = trim($data['otp'] ?? '');

    // 🔴 validation
    if(empty($user_id) || empty($otp)){
        return ['success' => false, 'message' => "Missing details"];
    }

    if(!preg_match('/^[0-9]{6}$/', $otp)){
        return ['success' => false, 'message' => "Invalid OTP format"];
    }

    // decode safely
    $decoded = base64_decode($user_id, true);
    if($decoded === false || !is_numeric($decoded)){
        return ['success' => false, 'message' => "Invalid user"];
    }

    $user_id = (int)$decoded;

    // 🔍 check user
    $stmt = $this->conn->prepare("
        SELECT id, uid, email
        FROM users
        WHERE id = ? AND uid = ? AND status='pending'
        LIMIT 1
    ");

    $stmt->bind_param("ii", $user_id, $otp);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows > 0){

        $row = $result->fetch_assoc();

        // 🔐 generate better uid
        $new_uid = bin2hex(random_bytes(6)); // safer than uniqid

        // ✅ activate user
        $activate = $this->conn->prepare("
            UPDATE users 
            SET uid = ?, status = 'active' 
            WHERE id = ?
        ");

        $activate->bind_param("si", $new_uid, $user_id);
        $activate->execute();

        return [
            'success' => true,
            'message' => "Account verified successfully",
            "data" => [
                'id' => $row['id'],
                'uid' => $new_uid // ✅ return updated uid
            ]
        ];
    }

    return ['success' => false, 'message' => "Incorrect OTP"];
}



// public function completeSetup($data, $files){

//     $user_id = $data['user'] ?? null;

//     if(empty($user_id)){
//         return ['success' => false, 'message' => "User not found"];
//     }

//     // 🔐 validate user id
//     if(!is_numeric($user_id)){
//         return ['success' => false, 'message' => "Invalid user"];
//     }

//     $profile_path = null;

//     // 📸 HANDLE IMAGE UPLOAD
//     if(isset($files['profile']) && $files['profile']['error'] === 0){

//         $file = $files['profile'];

//         $allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
//         $maxSize = 2 * 1024 * 1024; // 2MB

//         // ❌ type check
//         if(!in_array($file['type'], $allowedTypes)){
//             return ['success' => false, 'message' => "Invalid image type"];
//         }

//         // ❌ size check
//         // if($file['size'] > $maxSize){
//         //     return ['success' => false, 'message' => "Image too large"];
//         // }

//         // 🔐 generate safe filename
//         $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
//         $newName = 'profile_' . $user_id . '_' . time() . '.' . $ext;

//         $uploadDir = __DIR__ . "/../uploads/profile/";
        
//         if(!is_dir($uploadDir)){
//             mkdir($uploadDir, 0777, true);
//         }

//         $destination = $uploadDir . $newName;

//         if(!move_uploaded_file($file['tmp_name'], $destination)){
//             return ['success' => false, 'message' => "Upload failed"];
//         }

//         // save relative path
//         $profile_path = "uploads/profile/" . $newName;
//     }

//     // ✅ update user
//     if($profile_path){
//         $stmt = $this->conn->prepare("
//             UPDATE users 
//             SET profile = ? 
//             WHERE id = ?
//         ");
//         $stmt->bind_param("si", $newName, $user_id);
//     } else {
//         $stmt = $this->conn->prepare("
//             UPDATE users 
//             SET profile = profile 
//             WHERE id = ?
//         ");
//         $stmt->bind_param("i", $user_id);
//     }

//     if($stmt->execute()){
//         return [
//             'success' => true,
//             'message' => "Setup completed successfully",
//             'data' => [
//                 'profile' => $profile_path
//             ]
//         ];
//     }

//     return ['success' => false, 'message' => "Setup failed"];
// }


public function completeSetup($data, $files = []){

    $user_id = $data['user'] ?? null;

    if(empty($user_id) || !is_numeric($user_id)){
        return ['success' => false, 'message' => "Invalid user"];
    }

    $profile_path = null;

    // 📸 HANDLE IMAGE UPLOAD
    if(isset($files['profile']) && $files['profile']['error'] === 0){

        $file = $files['profile'];

        $allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
        $maxSize = 2 * 1024 * 1024; // 2MB

        // 🔐 REAL mime check (SECURE)
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $realType = finfo_file($finfo, $file['tmp_name']);

        if(!in_array($realType, $allowedTypes)){
            return ['success' => false, 'message' => "Invalid image"];
        }

        // ❌ size check
        if($file['size'] > $maxSize){
            return ['success' => false, 'message' => "Image too large"];
        }

        // 🔐 safe extension
        $ext = match($realType){
            'image/jpeg' => 'jpg',
            'image/png'  => 'png',
            'image/webp' => 'webp',
        };

        // 🔐 safe filename
        $newName = 'profile_' . $user_id . '_' . bin2hex(random_bytes(4)) . '.' . $ext;

        $uploadDir = __DIR__ . "/../uploads/profile/";

        if(!is_dir($uploadDir)){
            mkdir($uploadDir, 0777, true);
        }

        $destination = $uploadDir . $newName;

        if(!move_uploaded_file($file['tmp_name'], $destination)){
            return ['success' => false, 'message' => "Upload failed"];
        }

        $profile_path = "uploads/profile/" . $newName;
    }

    // ✅ update ONLY if image exists
    if($profile_path){
        $stmt = $this->conn->prepare("
            UPDATE users 
            SET profile = ? 
            WHERE id = ?
        ");
        $stmt->bind_param("si", $profile_path, $user_id);

        if(!$stmt->execute()){
            return ['success' => false, 'message' => "DB update failed"];
        }
    }

    return [
        'success' => true,
        'message' => "Setup completed successfully",
        'data' => [
            'profile' => $profile_path
        ]
    ];
}

}



?>