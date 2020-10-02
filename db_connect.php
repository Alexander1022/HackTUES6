<?php
$servername = "localhost";
$username = "covidnews";
$password = "covidnews";
$dbname = "CovidNews";
try {
	$conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
	$dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	echo "Connected successfully";
}catch(PDOException $e){
	echo "Connection failed: " . $e->getMessage();
}
?>
