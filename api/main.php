<?php

// 🔥 CORS HEADERS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// 🔥 HANDLE PREFLIGHT
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include __DIR__."/conn.php";
include __DIR__."/pages/auth.php"; 

$data = json_decode(file_get_contents('php://input'), true) ?? $_POST ?? [];

$action = $data['action'] ?? '';
$sub_action = $data['sub_action'] ?? '';

// default response (VERY IMPORTANT)
$response = [
    'success' => false,
    'message' => 'Invalid request'
];


switch ($action) {

    case 'auth':
        $auth = new Auth($conn);
        switch ($sub_action) {
            case 'email':
                $response = $auth->Login($data);
                break;

            case 'phone':
                $response = $auth->Login_phone($data);
                break;

            case 'signup-1':
                $response=$auth->Signup($data);
                break;

            case 'signup-2':
                 $response=$auth->verifyPasscode($data);
                break;

            case 'signup-3':
                 $response=$auth->completeSetup($data);
                break;

            default:
                $response = [
                    'success' => false,
                    'message' => 'Invalid login type'
                ];
                break;
        }
        break;

    default:
        $response = [
            'success' => false,
            'message' => 'Unknown action'
        ];
        break;
}

echo json_encode($response);
exit;