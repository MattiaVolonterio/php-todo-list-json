<?php

header('Content-Type: application/json');

$filter_string = $_POST["filter"];

$toDoList_json = file_get_contents("../data/toDoList.json");
$toDoList_array = json_decode($toDoList_json, true);

$filtered_array = [];

if ($filter_string != "") {
    foreach ($toDoList_array as $item) {
        if (str_contains(strtolower($item["text"]), trim(strtolower($filter_string)))) {
            $filtered_array[] = $item;
        }
    };
} else {
    $filtered_array = $toDoList_array;
};

$json_result = json_encode($filtered_array);

echo $json_result;
