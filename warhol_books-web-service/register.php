<?php

require_once 'connection.php';

$value = json_decode(file_get_contents('php://input'));

$full_name = $value->full_name;
$address = $value->address;
$phone_number = $value->phone_number;
$username = $value->username;
$password = password_hash($value->password, PASSWORD_DEFAULT);
$balance = 0;

$sql = "INSERT INTO `user` (`full_name`, `address`, `phone_number`, `username`, `password`, `balance`) VALUES (?, ?, ?, ?, ?, ?)";
$query = $conn->prepare($sql);
$query->bind_param("sssssi", $full_name, $address, $phone_number, $username, $password, $balance);

if ($query->execute()) {
    $response["message"] = "success";
} else {
    $response["message"] = "failed";
}


$conn->close();

echo json_encode($response["message"]);
