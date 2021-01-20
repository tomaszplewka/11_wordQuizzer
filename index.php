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
use WordQuizzer\Template;
// Autoload
require_once(realpath("vendor/autoload.php"));
// Instantiate template class
$index = new Template(realpath("src/index.php"));
// $index->title = 'wordRiddler';
// $index->heading = 'Welcome to wordRiddler!';
// session_unset();
echo $index->output();
// 
// Check if user is logged in first
// if (isset($_SESSION["user_loggedIn"]) && $_SESSION["user_loggedIn"] === true) {
//     // Redirect to welcome screen and show message saying that he/she is currently logged in as (here provide username or email)
//     // do the same when user clicks demo, log in, log out or register, if user manages somehow to land on these pages
//     // header("Location: welcome.php");
//     // exit;
// }
// // Check last page and act accordingly
// // && $_SESSION["last_page"]
// if (isset($_SESSION["last_page"])) {
//     // echo $_SESSION["last_page"];
//     // print_r(parse_url($_SESSION["last_page"], PHP_URL_PATH));
//     // print_r(explode("/", $_SESSION["last_page"]));
//     // $arr = explode("/", $_SESSION["last_page"]);
//     // echo end($arr);

//     // IN GENERAL, BASED ON WHERE USER COMES FROM, SHOW APPROPRIATE MESSAGE IN A FORM OF POP UP

// }
