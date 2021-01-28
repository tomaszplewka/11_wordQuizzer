<?php
require('../core/init.php');
// Use namespaces
use WordQuizzer\Database;
// Handle data
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if ($_SERVER["REQUEST_METHOD"] == "GET" && $contentType === "application/json") {
    // Initialize db
    $db = new Database();
    // Initialize vars
    $quizName = $quizType = $quizAnswers = $quizQuestions = $userID = '';
    $quizName_err = $quizType_err = $quizAnswers_err = $quizQuestions_err = $db_err = '';
    $output = [
        "data" => ["php_error" => false, "msg" => '', "fields" => []],
        "db" => ["php_error" => false, "msg" => '', "field" => "db"],
        "session" => ["loggedIn" => true, "msg" => '', "field" => "session"],
        "user" => ["id" => null]
    ];
    // Fetch data based on user's status
    if (isset($_SESSION["user_loggedIn"]) && ($_SESSION["user_loggedIn"] === true)) {
        // User is logged in
        $id = $_SESSION["user_id"];
        $user = $_SESSION["user_name"];
        $sql = "SELECT * FROM quiz WHERE user_id = :id ORDER BY created_at DESC";
        if ($db->queryDB($sql)) {
            $db->bind(":id", $id);
            $output["data"]["fields"] = $db->resultAll();
            $output["data"]["msg"] = "Data fetched for user " . $user;
            $output["user"]["id"] = $id;
        } else {
            $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
            $output["db"]["php_error"] = true;
            $output["db"]["msg"] = $db_err;
        }
    } else {
        // Guest mode
        $output["session"]["loggedIn"] = false;
        $output["session"]["msg"] = "This user is not logged in";
        // Fetch data
        $sql = "SELECT * FROM quiz WHERE user_id IS NULL ORDER BY created_at";
        if ($db->queryDB($sql)) {
            $output["data"]["fields"] = $db->resultAll();
            $output["data"]["msg"] = "Data fetched in guest mode.";
        } else {
            $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
            $output["db"]["php_error"] = true;
            $output["db"]["msg"] = $db_err;
        }
    }
    // Close connection
    unset($db);
    // Send back the output to front-end
    echo json_encode($output);
} else {
    header("Location: index.php");
}
