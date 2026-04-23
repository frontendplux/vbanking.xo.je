<?php
require_once __DIR__.'/../plugin/vendor/autoload.php';

$client = new \GuzzleHttp\Client();

$response = $client->post('https://api.safehavenmfb.com/oauth2/token', [
    'json' => [
        'grant_type' => 'client_credentials', // ✅ FIXED
        'client_assertion_type' => 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
        'client_id' => 'b66dfc56957d3920a209ef0e3a1ca95a',
        'client_assertion' => 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3B5Z2cuY29tLm5nLyIsInN1YiI6ImI2NmRmYzU2OTU3ZDM5MjBhMjA5ZWYwZTNhMWNhOTVhIiwiYXVkIjoiaHR0cHM6Ly9hcGkuc2FmZWhhdmVubWZiLmNvbSIsImlhdCI6MTc3Njc1NTY1NywiZXhwIjoxNzc2NzYyNDg2fQ.LraJ1QFZB9MutD_6mPFhg-Rt30dOiZmFGekxVOhcb0AyOmEsfw-fZBwHEGuYdJ9CVPXfE4NQ3JLjmimJnlrOiiH4eAH_ynfZ5PHi50gwA1nlYhWveqpmqNgH5YQYeTprCNnO2nN_65C3xHAKy2xcaruo4Xj_azUsnI5x5Ya1nUg',
    ],
    'headers' => [
        'Accept' => 'application/json',
    ],
]);

echo $response->getBody();