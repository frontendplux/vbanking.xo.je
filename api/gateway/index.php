<?php

function base64UrlEncode($data) {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

function generateJWT() {
    $privateKeyPath = __DIR__ . '/privatekey.pem'; // path to your key
    $clientId = 'b66dfc56957d3920a209ef0e3a1ca95a'; // same as Safehaven client_id
    $issuer = 'https://pygg.com.ng/'; // must match what you registered

    $now = time();

    // 🔥 JWT Header
    $header = [
        "alg" => "RS256",
        "typ" => "JWT"
    ];

    // 🔥 JWT Payload
    $payload = [
        "iss" => $issuer,
        "sub" => $clientId,
        "aud" => "https://api.sandbox.safehavenmfb.com",
        "iat" => $now,
        "exp" => $now + 300 // 5 minutes
    ];

    // Encode header & payload
    $base64Header = base64UrlEncode(json_encode($header));
    $base64Payload = base64UrlEncode(json_encode($payload));

    $data = $base64Header . "." . $base64Payload;

    // 🔐 Sign with private key
    $privateKey = openssl_pkey_get_private(file_get_contents($privateKeyPath));

    if (!$privateKey) {
        die("❌ Invalid private key");
    }

    openssl_sign($data, $signature, $privateKey, OPENSSL_ALGO_SHA256);

    $base64Signature = base64UrlEncode($signature);

    // Final JWT
    return $data . "." . $base64Signature;
}

// 🔥 Generate JWT
$jwt = generateJWT();

echo $jwt;