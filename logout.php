<?php 
// Start session
session_start();
// Load config
require_once("config/config.php");
// Load dependencies
require_once(realpath("vendor/autoload.php"));
// 
$output = ["loggedOut" => false];
// 
// Check if a user was logged in
if (isset($_SESSION["user_loggedIn"]) && $_SESSION["user_loggedIn"] === true) {
    // user was logged in - log out
    // Unset all of the session variables.
    $_SESSION = array();
    // Finally, destroy the session.
    session_destroy();
    // Start new session
    session_start();
    // Store this page for later reference
    $_SESSION["last_page"] = $_SERVER["REQUEST_URI"];
    $_SESSION["was_loggedIn"] = true;
    // Send the response to front end
    $output["loggedOut"] = true;
    echo json_encode($output);
    exit;
} else {
    // user was not logged in - redirect to index or login page (see index.php for more info)

    // Store this page for later reference
    $_SESSION["last_page"] = $_SERVER["REQUEST_URI"];
    $_SESSION["was_loggedIn"] = false;
    // Send the response to front end
    echo json_encode($output);
    exit;
}