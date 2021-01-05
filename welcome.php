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
use GuzzleHttp\Client;
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

// use Psr\Http\Message\ResponseInterface;
// use GuzzleHttp\Exception\RequestException;

// $client = new Client();
  
// $response = $client->request("GET", "https://wordsapiv1.p.mashape.com/words/example", [
//     "headers" => [
//         "x-rapidapi-host" => "wordsapiv1.p.rapidapi.com",
// 		"x-rapidapi-key" => "f8a63bbfd2mshc496f00dfd1b54cp168d18jsn749a1f9f4065"
//     ]
// ]);
 
// //get status code using $response->getStatusCode();
 
// $body = $response->getBody();
// $arr_body = json_decode($body);
// print_r($arr_body);

// $promise = $client->requestAsync('GET', 'https://wordsapiv1.p.mashape.com/words/example', [
//     "headers" => [
//         "x-rapidapi-host" => "wordsapiv1.p.rapidapi.com",
// 		"x-rapidapi-key" => "f8a63bbfd2mshc496f00dfd1b54cp168d18jsn749a1f9f4065"
//     ]
// ]);
// $promise->then(
//     function (ResponseInterface $res) {
//         echo $res->getStatusCode() . "\n";
//     },
//     function (RequestException $e) {
//         echo $e->getMessage() . "\n";
//         echo $e->getRequest()->getMethod();
//     }
// );

// $promise->wait();

// $curl = curl_init();

// curl_setopt_array($curl, [
// 	CURLOPT_URL => "https://wordsapiv1.p.rapidapi.com/words/watch",
// 	CURLOPT_RETURNTRANSFER => true,
// 	CURLOPT_FOLLOWLOCATION => true,
// 	CURLOPT_ENCODING => "",
// 	CURLOPT_MAXREDIRS => 10,
// 	CURLOPT_TIMEOUT => 30,
// 	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
// 	CURLOPT_CUSTOMREQUEST => "GET",
// 	CURLOPT_HTTPHEADER => [
// 		"x-rapidapi-host: wordsapiv1.p.rapidapi.com",
// 		"x-rapidapi-key: f8a63bbfd2mshc496f00dfd1b54cp168d18jsn749a1f9f4065"
// 	],
// ]);

// $response = curl_exec($curl);
// $err = curl_error($curl);

// curl_close($curl);

// if ($err) {
// 	echo "cURL Error #:" . $err;
// } else {
// 	echo $response;
// }