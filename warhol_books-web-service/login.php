<?php

require_once 'connection.php';

$value = json_decode(file_get_contents('php://input'));

$username = $value->username;
$password = $value->password;

$sql = "SELECT * FROM `user` WHERE `username` = ?";
$query = $conn->prepare($sql);
$query->bind_param("s", $username);

if ($query->execute()) {
    $result = $query->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        if (password_verify($password, $row['password'])) {
            $response['user_data'] = array(
                "user_id" => $row['user_id'],
                "full_name" => $row['full_name'],
                "address" => $row['address'],
                "phone_number" => $row['phone_number'],
                "username" => $row['username'],
                "password" => $row['password'],
                "balance" => $row['balance'],
                "message" => "success"
            );
        } else {
            $response['user_data'] = array(
                "message" => "failed",
            );
        }
    } else {
        $response['user_data'] = array(
            "message" => "no data",
        );
    }
}

$conn->close();

echo json_encode($response);
