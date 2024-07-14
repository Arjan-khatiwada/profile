<!-- <head>
 <link  href="footer.css" rel = "stylesheet" >

</head> -->
<footer class="bg-body-tertiary text-center text-lg-start position-relative fixed-bottom " style="color:white;">
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Contact Info</h5>

        <ul class="list-unstyled mb-0">
          <li>
                   <div class="d-flex mb-1 pt-1 pb-1" style="background-size: 100%; background-repeat: no-repeat;">
                        <i class=" fa fa-map-marker fa-lg ms-1 me-2 mt-2" style="color: green; background-color: white;"></i>
                        <span class="text-wrap ms-2" style="color:white;">Budhiganga-1,puspalalchowk,Biratnagar</span>
                    </div>
          </li>
          <li>
                   <div class="d-flex mb-1 pt-1 pb-1" style="background-size: 100%; background-repeat: no-repeat;" style="color:white;">
                        <span><i class="id-color fa fa-phone fa-lg  mx-1" style="color:white;"></i>
                        <a href="tel:9817340169" >9817340169</a> / <a href="tel:9749236498">9749236498</a>
                        </span>
                    </div>
          </li>
          <li>
                   <div class="d-flex mb-1 pt-1 pb-1" style="background-size: 100%; background-repeat: no-repeat;">
                        <span>
                            <i class="id-color fab fa-google fa-lg mx-1" style="color:white;"></i>
                            <a href="mailto:arjan.khatiwada425@gmail.com">arjan.khatiwada425@gmail.com</a>
                        </span>
                    </div>
          </li>
         
        </ul>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Social Network</h5>

        <ul class="list-unstyled">
          <li>
            <div class="social-icons" style="background-size: 100%; background-repeat: no-repeat;">
                        <i class="fab fa-facebook fa-lg p-2" style="cursor: pointer;color: #3b5998;" onclick="confirmAction('leave this page', 'https://www.facebook.com/arjan.khatiwada.1')"></i>
                        <i class="fab fa-instagram fa-lg p-2" style="cursor: pointer;color: #ac2bac;" onclick="confirmAction('leave this page', 'https://www.instagram.com/arjan.khatiwada.1/')"></i>
                </div>
          </li>
        </ul>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2020 Copyright:
    <a class="text-white " href="#">Arjan Khatiwada</a>
  </div>
  <!-- Copyright -->
</footer>

 
 <script>
        function showSidebar(){
            const sidebar = document.querySelector('.sidebar');     //className: sidebar will appear on click.
            sidebar.style.display = "flex";                         
        }

        function hideSidebar(){
        const sidebar = document.querySelector('.sidebar');     //className: sidebar will close on click.
            sidebar.style.display = "none";                 
        }
        <?php
        if(isset($error)){
            echo $error;
        }
        ?>
           function confirmAction(action, url) {
        if (confirm("Are you sure you want to " + action + "?")) {
            window.location.href = url;
        }
        else {
            return false;
        }
    }
    </script>

    <?php 
        if(isset($extra_js)){
            echo $extra_js; 
        } 
    ?>
    </body>                                                                                                                
</html>