<?php
$title = "contact Me";
 if($_SERVER['REQUEST_METHOD'] == 'POST'){
     if(isset($_POST['SendMessage'])){
        //  print_r($_POST );
        //  print_r($_SERVER);
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $to = "arjan.khatiwada425@gmail.com";
        if (empty($name)) {
            $errors[] = 'Name is empty';
        }
     
        if (empty($email)) {
            $errors[] = 'Email is empty';
        } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Email is invalid';
        }
     
        if (empty($message)) {
            $errors[] = 'Message is empty';
        }
        if (mail ($to, $subject, $message, $email)) {
            $success = "Message sent successfully";
            header("location: index.php");

        } 
        else 
        {
         $errors[] = 'Message failed to send';
        }

    
    }
}
?>