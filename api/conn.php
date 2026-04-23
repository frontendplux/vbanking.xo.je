<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'pygg');

// 🔌 CONNECT
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS);

// ❌ HANDLE ERROR
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 🛠️ CREATE DB (only if not exists)
$conn->query("CREATE DATABASE IF NOT EXISTS " . DB_NAME);

// 🎯 SELECT DB
$conn->select_db(DB_NAME);

// 🌍 IMPORTANT (for chat, emojis, etc)
$conn->set_charset("utf8mb4");