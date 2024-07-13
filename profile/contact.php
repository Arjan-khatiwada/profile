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


include("header.php");
?>
<main>
<div class="container pt-5 px-5 " style="color:white;display: flex; flex-wrap: nowrap; justify-content: center;">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                            <div class="col-lg-12 text-center">
                                <h2 class="section-heading text-uppercase">Contact Me</h2>
                                <h3 class="section-subheading ">Get in touch with me.</h3>
                            </div>
                    </div>
                    <form method="POST" style="display: flex; flex-direction: column;" >
                        <div class="col-md-6" style="align-self: center">
                            
                                <div class="form-group">
                                    <input class="form-control" id="name" name="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="email" name="email"type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="email" name="subject"type="text" placeholder="Subject *" required="required" data-validation-required-message="Please enter your email address.">
                                    <p class="help-block text-danger"></p>
                                </div>

                                <div class="form-group">
                                    <textarea class="form-control" id="message" name="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                        </div>
                        <div class="clearfix"></div>
                            <div class="col-lg-12 text-center">
                                <div id="success"></div>
                                <input class="btn btn-primary btn-xl " type="submit" name="SendMessage" value="Send Message">
                            </div>
                        </div>
                    </form>
                    
                        
                
                </div>
            </div>
        </div>
    </div>
</main>
    

<?php
    include('footer1.php');