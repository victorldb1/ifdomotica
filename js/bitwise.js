var _n, _x, display=0, _display;

function setDisplay(_display) {display = _display;}
function getDisplay() {return display;}

function mostraBits(_x){
    var retorno = "";
    var aux = 128;
    for (var i=0; i<8; ++i){
        if ( (_x&aux) != 0)
            retorno += "1";
        else
            retorno += "0";
        aux = aux >> 1;
    }
    $("#display").html(retorno);
}

function ligaDispositivo(_n){
    var aux = 1 << (parseInt(_n)-1);
    display = display | aux;
}
function desligaDespositivo(_n){
    var aux = 1 << (parseInt(_n)-1);
    display = display & ~aux;
}

$(document).ready(function(){
    //ALL
    $("#btn_all").click(function(){
            $("#state_lamp1").attr("src","images/luz_apagada.png");
            $("#state_lamp2").attr("src","images/luz_apagada.png");
            $("#state_lamp3").attr("src","images/luz_apagada.png");
            $("#state_lamp4").attr("src","images/luz_apagada.png");
            $("#state_lamp5").attr("src","images/luz_apagada.png");
            $("#state_lamp6").attr("src","images/luz_apagada.png");
            $("#state_lamp7").attr("src","images/luz_apagada.png");
            $("#state_lamp8").attr("src","images/luz_apagada.png");

            $("#btn_lamp1").html("Acender");
            $("#btn_lamp2").html("Acender");
            $("#btn_lamp3").html("Acender");
            $("#btn_lamp4").html("Acender");
            $("#btn_lamp5").html("Acender");
            $("#btn_lamp6").html("Acender");
            $("#btn_lamp7").html("Acender");
            $("#btn_lamp8").html("Acender");
            setDisplay(0);
            mostraBits();
    });    
	//imagem 1
  	$("#btn_lamp1").click(function(){
    	if($("#state_lamp1").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp1").attr("src","images/luz_acesa.png");
    		$("#btn_lamp1").html("Apagar");
            ligaDispositivo(1);
            mostraBits(getDisplay());
    	}
    	else {
    		$("#state_lamp1").attr("src","images/luz_apagada.png");
    		$("#btn_lamp1").html("Acender");
            desligaDespositivo(1);
            mostraBits(getDisplay());
    	}
    });
  	//imagem 2
  	$("#btn_lamp2").click(function(){
    	if($("#state_lamp2").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp2").attr("src","images/luz_acesa.png");
    		$("#btn_lamp2").html("Apagar");
            ligaDispositivo(2);
            mostraBits(getDisplay());
    	}
    	else {
    		$("#state_lamp2").attr("src","images/luz_apagada.png");
    		$("#btn_lamp2").html("Acender");
            desligaDespositivo(2);
            mostraBits(getDisplay());
    	}
    });
  	//imagem 3
  	$("#btn_lamp3").click(function(){
    	if($("#state_lamp3").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp3").attr("src","images/luz_acesa.png");
    		$("#btn_lamp3").html("Apagar");
            ligaDispositivo(3);
            mostraBits(getDisplay());

    	}
    	else {
    		$("#state_lamp3").attr("src","images/luz_apagada.png");
    		$("#btn_lamp3").html("Acender");
            desligaDespositivo(3);
            mostraBits(getDisplay());
    	}
    });
    //imagem 4
  	$("#btn_lamp4").click(function(){
    	if($("#state_lamp4").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp4").attr("src","images/luz_acesa.png");
    		$("#btn_lamp4").html("Apagar");            
            ligaDispositivo(4);
            mostraBits(getDisplay());

    	}
    	else {
    		$("#state_lamp4").attr("src","images/luz_apagada.png");
    		$("#btn_lamp4").html("Acender");
            desligaDespositivo(4);
            mostraBits(getDisplay());
    	}
    });
    //imagem 5
  	$("#btn_lamp5").click(function(){
    	if($("#state_lamp5").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp5").attr("src","images/luz_acesa.png");
    		$("#btn_lamp5").html("Apagar");
            ligaDispositivo(5);
            mostraBits(getDisplay());

    	}
    	else {
    		$("#state_lamp5").attr("src","images/luz_apagada.png");
    		$("#btn_lamp5").html("Acender");
            desligaDespositivo(5);
            mostraBits(getDisplay());
    	}
    });
    //imagem 6
  	$("#btn_lamp6").click(function(){
    	if($("#state_lamp6").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp6").attr("src","images/luz_acesa.png");
    		$("#btn_lamp6").html("Apagar");
            ligaDispositivo(6);
            mostraBits(getDisplay());
    	}
    	else {
    		$("#state_lamp6").attr("src","images/luz_apagada.png");
    		$("#btn_lamp6").html("Acender");
            desligaDespositivo(6);
            mostraBits(getDisplay());
    	}
    });
    //imagem 7
  	$("#btn_lamp7").click(function(){
    	if($("#state_lamp7").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp7").attr("src","images/luz_acesa.png");
    		$("#btn_lamp7").html("Apagar");            
            ligaDispositivo(7);
            mostraBits(getDisplay());
    	}
    	else {
    		$("#state_lamp7").attr("src","images/luz_apagada.png");
    		$("#btn_lamp7").html("Acender");
            desligaDespositivo(7);
            mostraBits(getDisplay());
    	}
    });
    //imagem 8
  	$("#btn_lamp8").click(function(){
    	if($("#state_lamp8").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp8").attr("src","images/luz_acesa.png");
    		$("#btn_lamp8").html("Apagar");
            ligaDispositivo(8);
            mostraBits(getDisplay());
    	}
    	else {
    		$("#state_lamp8").attr("src","images/luz_apagada.png");
    		$("#btn_lamp8").html("Acender");
            desligaDespositivo(8);
            mostraBits(getDisplay());
    	}
    });
});