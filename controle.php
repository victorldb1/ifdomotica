<<<<<<< HEAD
<html>
<head>
	<title>Controle</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="css/bootstrap.min.css">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/bitwise.js"></script>

<?php

  //$port = fopen("COM4", "w");
  //fwrite($port, $byte);
  //fclose($port);
  $enviar = $_POST['bits'];

  if(!isset($enviar)){
    $byte = $_POST["dados_enviar"];
    echo $byte;
  }
?>

</head>
<body>
	<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
	    <a class="navbar-brand" href="index.html">
	    </a>
	    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	      <span class="navbar-toggler-icon"></span>
	    </button>
	    <div class="collapse navbar-collapse" id="navbarNav">
	    	<ul class="navbar-nav mr-auto">
	     		<li class="nav-item">
	       		<a class="nav-link" href="#">Início</a>
	     		</li>
	     		<li class="nav-item active">
	       		<a class="nav-link" href="#">Controle<span class="sr-only">(current)</span></a>
	     		</li>
	     	</ul>
	    </div>
		</nav>
	</header>
  	<main role="main">		
		  <div class="jumbotron col-12" style="margin-bottom: 0;">
      	<div class="container text-center">
      		<h4 class="display-4">Controle seus aparelhos eletrônicos</h4>
      	</div>
    	</div>
    	<div class="bg-secondary text-white">
    		<div class="container">

          <div class="row text-center">
            <div class="col-12">
              <form id="bits" method="post" action="">
                <input type="text" id="dados" name="dados_enviar" value=""/>
              
              <h4><label id="display"><?php echo $byte?>00000000</label></h4>
              <button type="button" id="btn_all" class="btn btn-outline-light btn-block">Apagar Tudo</button>
              <br/>
            </div>
          </div>
      				<!--.col-	.col-sm-	.col-md-	.col-lg-	.col-xl- -->
    			<div class="row text-center">

  					<div class="col-6 col-sm-6 col-md-3">
  						<h4>Lampada 1</h4>
        			<img src="images/luz_apagada.png" id="state_lamp1" class="img-fluid mx-auto d-block">
						  <button type="button" id="btn_lamp1" class="btn btn-outline-light btn-block">Acender</button>
  					</div>
  					<div class="col-6 col-sm-6 col-md-3">
  						<h4>Lampada 2</h4>
        			<img src="images/luz_apagada.png" id="state_lamp2" class="img-fluid mx-auto d-block">
						  <button type="button" id="btn_lamp2" class="btn btn-outline-light btn-block">Acender</button>
  					</div>
 					  <div class="col-6 col-sm-6 col-md-3">
  						<h4>Lampada 3</h4>
        			<img src="images/luz_apagada.png" id="state_lamp3" class="img-fluid mx-auto d-block">
						  <button type="button" id="btn_lamp3" class="btn btn-outline-light btn-block">Acender</button>
 					  </div>
  					<div class="col-6 col-sm-6 col-md-3">
  						<h4>Lampada 4</h4>
        			<img src="images/luz_apagada.png" id="state_lamp4" class="img-fluid mx-auto d-block">
						  <button type="button" id="btn_lamp4" class="btn btn-outline-light btn-block">Acender</button>
  					</div>
				  </div><br/>
				  <div class="row text-center">
  				  <div class="col-6 col-sm-6 col-md-3">
  					  <h4>Lampada 5</h4>
        			<img src="images/luz_apagada.png" id="state_lamp5" class="img-fluid mx-auto d-block">
						  <button type="button" id="btn_lamp5" class="btn btn-outline-light btn-block">Acender</button>
  					</div>
  					<div class="col-6 col-sm-6 col-md-3">
  						<h4>Lampada 6</h4>
        			<img src="images/luz_apagada.png" id="state_lamp6" class="img-fluid mx-auto d-block">
						  <button type="button" id="btn_lamp6" class="btn btn-outline-light btn-block">Acender</button>
  					</div>
 					  <div class="col-6 col-sm-6 col-md-3">
  						<h4>Lampada 7</h4>
        			<img src="images/luz_apagada.png" id="state_lamp7" class="img-fluid mx-auto d-block">
						  <button type="button" id="btn_lamp7" class="btn btn-outline-light btn-block">Acender</button>
 					  </div>
  					<div class="col-6 col-sm-6 col-md-3">
  						<h4>Lampada 8</h4>
        			<img src="images/luz_apagada.png" id="state_lamp8" class="img-fluid mx-auto d-block">
						  <button type="submit" id="btn_lamp8" class="btn btn-outline-light btn-block">Acender</button>
              </form>
  					</div>
				  </div>
        <br/>
			</div>
		</div>
	</main>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
=======
>>>>>>> parent of 45b99b6... att 8.2
