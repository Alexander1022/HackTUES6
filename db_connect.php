<?php
$servername = "localhost";
$username = "covidnews";
$password = "covidnews";
$dbname = "covidnews";

$sql = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
$sql->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
$sql->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

/* DEBUG METHOD
try {
	$sql = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
	$sql->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
	$sql->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	echo "Connected successfully";
}catch(PDOException $e){
	echo "Connection failed: " . $e->getMessage();
}
*/
