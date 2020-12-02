<?php
// Start session
session_start();
// Load config
// require_once("config/config.php");
// Load helper functions
// require_once("helpers/system_helper.php");
// require_once("helpers/format_helper.php");
// require_once("helpers/db_helper.php");
// Use namespaces
use WordQuizzer\Database;
use WordQuizzer\Template;
use GuzzleHttp\Client;
// Load dependencies
require_once(realpath("vendor/autoload.php"));



// $db = new Database();
$index = new Template(realpath("templates/index.php"));

$index->set('title', 'wordRiddler');
$index->set('heading', 'Welcome to wordRiddler!');

echo $index->output();
 
// $client = new Client([
//     // Base URI is used with relative requests
//     'base_uri' => 'https://reqres.in',
// ]);
  
// $response = $client->request('GET', '/api/users', [
//     'query' => [
//         'page' => '2',
//     ]
// ]);
 
// //get status code using $response->getStatusCode();
 
// $body = $response->getBody();
// $arr_body = json_decode($body);
// print_r($arr_body);