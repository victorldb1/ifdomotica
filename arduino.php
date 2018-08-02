<?php
try{$port = fopen("COM4", "w");
fwrite($port, $_POST['display2']);
fclose($port);
} catch(Exception $e){}
header("location:controle.html");
?>