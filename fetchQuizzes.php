<?php
// Start session
session_start();
// Load config
require_once("config/config.php");
// Use namespaces
use WordQuizzer\Database;
// Load dependencies
require_once(realpath("vendor/autoload.php"));
// Initialize db
$db = new Database();
// 
// Define and initialize vars
$quizName = $quizType = $quizAnswers = $quizQuestions = $userID = '';
$quizName_err = $quizType_err = $quizAnswers_err = $quizQuestions_err = $db_err = '';
$output =
    [
        "data" => [
            "php_error" => false,
            "msg" => '',
            "fields" => []
        ],  "db" => [
            "php_error" => false,
            "msg" => ''
        ],  "session" => [
            "loggedIn" => true,
            "msg" => ''
        ]
    ];
// 
// session_unset();
// Check if user is logged in, if not redirect to login page
if (!isset($_SESSION["user_loggedIn"]) && !($_SESSION["user_loggedIn"] === true)) {
    $output["session"]["loggedIn"] = false;
    $output["session"]["msg"] = "This user is not logged in";
    echo json_encode($output);
    exit;
}
// W RAMACH ERROR HANDLING -- JEZELI TUTAJ JEST JAKIS BLAD -- SERVER IS DOWN -- SHOW MESSAGE TO A USER IN A FORM OF WHOLE SCREEN WRAPPER
$sql = "SELECT * FROM quiz ORDER BY created_at DESC";
if ($db->queryDB($sql)) {
    $output["data"]["fields"] = $db->resultAll();
    $output["data"]["msg"] = "Data fetched.";
    echo json_encode($output);
    exit;
} else {
    // TUTAJ HANDLE DB ERROR
}
