<?php
require('core/init.php');
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
        "questions" => ["php_error" => false, "msg" => '', "fields" => []],
        "answers" => ["php_error" => false, "msg" => '', "fields" => []],
        "data" => ["php_error" => false, "msg" => '', "fields" => "data"],
        "db" => ["php_error" => false, "msg" => '', "fields" => "db"],
        "session" => ["loggedIn" => true, "msg" => '', "fields" => "session"]
    ];
    //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));
    // Decode json data
    $decoded = json_decode($content, true);
    // If json_decode failed, the JSON is invalid.
    if (is_array($decoded)) {
        $sqlQ = "SELECT question_ID, quiz_ID, question, word FROM questions WHERE quiz_ID = :id";
        $id = $decoded["ID"];
        // Fetch questions
        if ($db->queryDB($sqlQ)) {
            $db->bind(":id", $id);
            $output["questions"]["fields"] = $db->resultAll();
            $output["questions"]["msg"] = "Questions fetched.";
            // Fetch answers
            $sqlA = '';
            for ($i = 1; $i <= count($output["questions"]["fields"]); $i++) {
                $bindParam = ":qID_" . $i;
                $sqlA .= "{$bindParam},";
            }
            $sqlA = rtrim($sqlA, ',');
            $sql = "SELECT * FROM answers WHERE question_ID IN";
            $sql .= " (" . $sqlA . ")";
            if ($db->queryDB($sql)) {
                for ($i = 1; $i <= count($output["questions"]["fields"]); $i++) {
                    $bindParam = ":qID_" . $i;
                    $db->bind($bindParam, $output["questions"]["fields"][$i - 1]["question_ID"]);
                }
                $output["answers"]["fields"] = $db->resultAll();
                $output["answers"]["msg"] = "Answers fetched.";
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
