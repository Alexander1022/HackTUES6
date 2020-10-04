<?php
// getting the countries
require_once "../db_connect.php";
$query = "SELECT id, name FROM countries";
$stmt = $sql->prepare($query);
$stmt->execute();
$countries = $stmt->fetchAll();
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $password = $confirm_password = "";
    $nameErr = $passErr = $cpassErr = "";

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Validate username
    $_REQUEST['username'] = test_input($_REQUEST['username']);
    if(empty($_POST["username"])){
        $nameErr = "Please enter a username.";
    } elseif (!preg_match("/^[a-zA-Z0-9-' ]*$/", $_REQUEST['username'])) {
        $nameErr = "Only letters and white space allowed";
    } else{
        $q = "SELECT id FROM profiles WHERE username = :username";

        if($stmt = $sql->prepare($q)){
            $stmt->bindParam(":username", $param_username, PDO::PARAM_STR);
            $param_username = trim($_REQUEST["username"]);
            if($stmt->execute()){
                if($stmt->rowCount() == 1){
                    $nameErr = "This username is already taken.";
                } else{
                    $username = $_REQUEST["username"];
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
            unset($stmt);
        }
    }

    // Validate email
    $_REQUEST['email'] = test_input($_REQUEST['email']);
    if(empty($_REQUEST["email"])){
        $emailErr = "Please enter an email.";
    } elseif (!filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
    } else{
        $q = "SELECT id FROM profiles WHERE email = :email";

        if($stmt = $sql->prepare($q)){
            $stmt->bindParam(":email", $_REQUEST["email"], PDO::PARAM_STR);
            if($stmt->execute()){
                if($stmt->rowCount() == 1){
                    $emailErr = "This email is already taken.";
                } else{
                    $email = $_REQUEST["email"];
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
            unset($stmt);
        }
    }

    // Validate password
    if(empty(trim($_REQUEST["password"]))){
        $passErr = "Please enter a password.";
    } elseif(strlen(trim($_REQUEST["password"])) < 8){
        $passErr = "Password must be atleast 8 characters.";
    } else{
        $password = trim($_REQUEST["password"]);
    }

    // Validate confirm password
    if(empty(trim($_REQUEST["confirm_password"]))){
        $cpassErr = "Please confirm password.";
    } else{
        $confirm_password = trim($_REQUEST["confirm_password"]);
        if(empty($passErr) && ($password != $confirm_password)){
            $cpassErr = "Password did not match.";
        }
    }

    if (empty($nameErr) && empty($emailErr) &&
        empty($passErr) && empty($cpassErr))
    {
        $q = "INSERT INTO profiles(username, email, password, country_id)
                            VALUES(:username, :email, :password, :country_id)";
        if ($stmt = $sql->prepare($q)) {
            $stmt->bindParam(':username', $username);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', hash('sha256',$password));
            $stmt->bindParam(':country_id', $_REQUEST['country_id']);

            if($stmt->execute()){
                header("location: login.php");
            } else{
                echo "Something went wrong. Please try again later.";
            }
        }
    }
}


?>



<!DOCTYPE html>
<html>
<head>
    <title>CovidNews - Register</title>
    <link rel="stylesheet" href="register.css">
</head>
<body>
    <div class="registration_page">
        <div class="form">
          <form class="register_form" action="<?php $_SERVER['PHP_SELF'] ?>" method="post">
            <input type="text" name="username" placeholder="Userame"
                required/><?php echo($nameErr); ?>
            <input type="text" name="email" placeholder="Email address"
                required/><?php echo($emailErr); ?>
            <input type="password" name="password" placeholder="Password"
                required/><?php echo($passErr); ?>
            <input type="password" name="confirm_password" placeholder="Confirm password"
                required/><?php echo ($cpassErr); ?>

            <select name="country_id">
                <?php foreach($countries as $country): ?>
                    <option value="<?= $country['id']; ?>"><?= $country['name']; ?></option>
                <?php endforeach; ?>
            </select>

            <button>Create</button>
            <p class="message">Already registered? <a href="login.php">Sign In</a></p>
          </form>
        </div>
    </div>
</body>
</html>

<script>
    $('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
</script>
