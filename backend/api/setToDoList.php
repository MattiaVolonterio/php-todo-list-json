<?php

// Recupero l'input
$input_text = $_POST['text'];

$object = [
    'isDone' => false,
    'text' => $input_text
];

// recupero l'array dal json
$to_do_list = file_get_contents("../data/toDoList.json");
$to_do_list_array = json_decode($to_do_list);

// aggiungo l'oggetto all'array
$to_do_list_array[] = $object;

// creo il nuovo json
$json_result = json_encode($to_do_list_array);

// salvo il nuovo json
file_put_contents("../data/toDoList.json", $json_result);

header('Content-Type: application/json');

echo $json_result;
