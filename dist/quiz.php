<?php
require('../core/init.php');
// Use namespaces
use WordQuizzer\Database;
// Process POST data
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if ($_SERVER["REQUEST_METHOD"] == "POST" && $contentType === "application/json") {
    // Initialize db
    $db = new Database();
    // Initialize vars
    $quizName = $quizType = $quizAnswers = $quizQuestions = $userID = '';
    $quizName_err = $quizType_err = $quizAnswers_err = $quizQuestions_err = $db_err = '';
    $output = [
        "data" => ["php_error" => false, "msg" => '', "field" => []],
        "db" => ["php_error" => false, "msg" => '', "field" => "db"],
        "session" => ["loggedIn" => true, "msg" => '', "field" => "session"]
    ];
    // Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));
    // Decode json data
    $decoded = json_decode($content, true);
    //If json_decode failed, the JSON is invalid.
    if (is_array($decoded)) {
        try {
            // Begin transaction
            $db->transactionStart();
            // Set local var
            $finalScore = $decoded["finalScore"];
            $quizID = (int) $decoded["quizID"];
            $sql = "UPDATE quiz SET score = :finalScore, updated_at = now() WHERE quiz_id = :quizID";
            if ($db->queryDB($sql)) {
                // Bind
                $db->bind(":finalScore", $finalScore);
                $db->bind(":quizID", $quizID);
                if ($db->execute()) {
                    $db->transactionCommit();
                    $output["data"]["msg"] = "Quiz has been updated.";
                } else {
                    $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
                    $output["db"]["php_error"] = true;
                    $output["db"]["msg"] = $db_err;
                }
            } else {
                $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
                $output["db"]["php_error"] = true;
                $output["db"]["msg"] = $db_err;
            }
        } catch (\Throwable $th) {
            // Set output
            $db_err = "Database error: " . $db->errInfo() . " Please try again later.";
            $output["db"]["php_error"] = true;
            $output["db"]["msg"] = $db_err;
        }
    } else {
        $output["data"]["php_error"] = true;
        $output["data"]["msg"] = "Data is not correctly formatted.";
    }
    // Close connection
    unset($db);
    // Send back the output to front-end
    echo json_encode($output);
} else {
    header("Location: index.php");
}
