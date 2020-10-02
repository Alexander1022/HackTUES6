<!DOCTYPE html>
<html>
<head>
    <title>CovidNews</title>
<head>
<body>
    <form method="post" action="/">
        Name: <input type="text" name="name" value="<?php echo $name;?>">
        E-mail: <input type="text" name="email" value="<?php echo $email;?>">
        Website: <input type="text" name="website" value="<?php echo $website;?>">
        Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
        Gender:
        <input type="radio" name="gender"
        <?php if (isset($gender) && $gender=="female") echo "checked";?>
        value="female">Female
        <input type="radio" name="gender"
        <?php if (isset($gender) && $gender=="male") echo "checked";?>
        value="male">Male
        <input type="radio" name="gender"
        <?php if (isset($gender) && $gender=="other") echo "checked";?>
        value="other">Other
        <input type="submit", name="submit" value="Submit">
    </form>
<body>
