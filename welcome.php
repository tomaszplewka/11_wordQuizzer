<?php
// Start session
session_start();
// Load config
require_once("config/config.php");
// Load helper functions
// require_once("helpers/system_helper.php");
// require_once("helpers/format_helper.php");
// require_once("helpers/db_helper.php");
// Use namespaces
use WordQuizzer\Database;
use WordQuizzer\Template;
// Load dependencies
require_once(realpath("vendor/autoload.php"));

// Check if user is logged in first
if (!(isset($_SESSION["user_loggedIn"]) && $_SESSION["user_loggedIn"] === true)) {
    // User not logged in - redirect to index or login page and show a message saying that he/she is not logged in
    header("Location: index.php");
    exit;
}

// $db = new Database();
$welcome = new Template(realpath("templates/welcome.php"));

$welcome->username = $_SESSION["user_name"];
// $index->heading = 'Welcome to wordRiddler!';

echo $welcome->output();