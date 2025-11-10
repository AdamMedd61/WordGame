<?php

header('Content-Type: application/json');


$apiUrl = "https://random-word-api.vercel.app/api?words=1&length=5";
$response = file_get_contents($apiUrl);

if ($response === FALSE) {
    echo json_encode(["error" => "Unable to fetch word"]);
    exit;
}

$words = json_decode($response, true);
$word = strtolower($words[0]);

echo json_encode(["word" => $word]);

?>