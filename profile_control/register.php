<?php
require_once "../db_connect.php";
$query = "SELECT id, name FROM countries";
$stmt = $sql->prepare($query);

// die(print_r($stmt));
$stmt->execute();
$countries = $stmt->fetchAll();
// $countries = $stmt->fetch(PDO::FETCH_ASSOC);
// die(print_r($countries));
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
          <form class="register_form" action="save_profile.php" method="post">
            <input type="text" name="name" placeholder="Userame"
                required/><?php echo($_POST['nameErr']); ?>
            <input type="text" name="email" placeholder="Email address"
                required/><?php echo($_POST['emailErr']); ?>
            <input type="password" name="password" placeholder="Password"
                required/><?php echo($_POST['passErr']); ?>
            <input type="password" name="repeat_password" placeholder="Repeat password" required/>

            <select name="country_id">
                <?php foreach($countries as $country): ?>
                    <option value="<?= $country['id']; ?>"><?= $country['name']; ?></option>
                <?php endforeach; ?>
            </select>

            <button>Create</button>
            <p class="message">Already registered? <a href="login.html">Sign In</a></p>
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
