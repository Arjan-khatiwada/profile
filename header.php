<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    
    <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="header.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

</head>
<body style=" background-color:rgb(3, 3, 3);">
    <!-- for navbar -->
    <header>
        <nav>
            <ul id = "mainbar">
                <li><a href = "index.php"><img src="images/logo.jpg">ARJAN</a></li>   
                <li id = "hide"><a href = "index.php" >Home</a></li>    
                <li id = "hide"><a href = "about_me.php" >About Me</a></li> 
                <li id = "hide"><a href = "exprence.php" >exprence</a></li> 
                <li id = "hide"><a href = "contact.php" >Contact</a></li> 
                <li id = "menu" onclick = "showSidebar()"><a href = "#"><i class = "fa fa-bars" style="font-size: 20px;"></i></a></li>
            </ul>
            
            <ul class = "sidebar">
                <li onclick = "hideSidebar()"><a href = "#" ><i class = "btn-close" style="font-size: 20px;" ></i></a></li>   
                <li><a href = "index.php" >Home</a></li>    
                <li><a href = "about_me.php" >About me</a></li>   
                <li ><a href = "contact.php" >Contact</a></li> 
                <li ><a href = "resume.php" >Resume</a></li> 

             
                
            </ul>        
        </nav>
    </header>

    
