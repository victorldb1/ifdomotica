$(document).ready(function(){
	//imagem 1
  	$("#btn_lamp1").click(function(){
    	if($("#state_lamp1").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp1").attr("src","images/luz_acesa.png");
    		$("#btn_lamp1").html("Apagar");
    	}
    	else {
    		$("#state_lamp1").attr("src","images/luz_apagada.png");
    		$("#btn_lamp1").html("Acender");
    	}
    });
  	//imagem 2
  	$("#btn_lamp2").click(function(){
    	if($("#state_lamp2").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp2").attr("src","images/luz_acesa.png");
    		$("#btn_lamp2").html("Apagar");
    	}
    	else {
    		$("#state_lamp2").attr("src","images/luz_apagada.png");
    		$("#btn_lamp2").html("Acender");
    	}
    });
  	//imagem 3
  	$("#btn_lamp3").click(function(){
    	if($("#state_lamp3").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp3").attr("src","images/luz_acesa.png");
    		$("#btn_lamp3").html("Apagar");
    	}
    	else {
    		$("#state_lamp3").attr("src","images/luz_apagada.png");
    		$("#btn_lamp3").html("Acender");
    	}
    });
    //imagem 4
  	$("#btn_lamp4").click(function(){
    	if($("#state_lamp4").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp4").attr("src","images/luz_acesa.png");
    		$("#btn_lamp4").html("Apagar");
    	}
    	else {
    		$("#state_lamp4").attr("src","images/luz_apagada.png");
    		$("#btn_lamp4").html("Acender");
    	}
    });
    //imagem 5
  	$("#btn_lamp5").click(function(){
    	if($("#state_lamp5").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp5").attr("src","images/luz_acesa.png");
    		$("#btn_lamp5").html("Apagar");
    	}
    	else {
    		$("#state_lamp5").attr("src","images/luz_apagada.png");
    		$("#btn_lamp5").html("Acender");
    	}
    });
    //imagem 6
  	$("#btn_lamp6").click(function(){
    	if($("#state_lamp6").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp6").attr("src","images/luz_acesa.png");
    		$("#btn_lamp6").html("Apagar");
    	}
    	else {
    		$("#state_lamp6").attr("src","images/luz_apagada.png");
    		$("#btn_lamp6").html("Acender");
    	}
    });
    //imagem 7
  	$("#btn_lamp7").click(function(){
    	if($("#state_lamp7").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp7").attr("src","images/luz_acesa.png");
    		$("#btn_lamp7").html("Apagar");
    	}
    	else {
    		$("#state_lamp7").attr("src","images/luz_apagada.png");
    		$("#btn_lamp7").html("Acender");
    	}
    });
    //imagem 8
  	$("#btn_lamp8").click(function(){
    	if($("#state_lamp8").attr("src") == "images/luz_apagada.png"){
    		$("#state_lamp8").attr("src","images/luz_acesa.png");
    		$("#btn_lamp8").html("Apagar");
    	}
    	else {
    		$("#state_lamp8").attr("src","images/luz_apagada.png");
    		$("#btn_lamp8").html("Acender");
    	}
    });

    var trataBotoes(java.awt.event.ActionEvent evt) {                             
        javax.swing.JButton generico = (javax.swing.JButton) evt.getSource();
        
        if (generico.getText().equals("Ligar"))
        {
            generico.setText("Desligar");
            ArduinoBLL.ligaDispositivo(generico.getName());
            jTextField1.setText(ArduinoBLL.mostraBits(ArduinoBLL.getDisplay()));
        }
        else
        {
            generico.setText("Ligar");
            ArduinoBLL.desligaDispositivo(generico.getName());
            jTextField1.setText(ArduinoBLL.mostraBits(ArduinoBLL.getDisplay()));
        }
    }                            

    private void jButton9ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        ArduinoBLL.setDisplay(0);
        jTextField1.setText(ArduinoBLL.mostraBits(ArduinoBLL.getDisplay()));
        jButton1.setText("Ligar");
        jButton2.setText("Ligar");
        jButton3.setText("Ligar");
        jButton4.setText("Ligar");
        jButton5.setText("Ligar");
        jButton6.setText("Ligar");
        jButton7.setText("Ligar");
        jButton8.setText("Ligar");
    }
    
    //CLASSE!!!!

    function ArduinoBLL() {
        var display = 0, flag, _display, _flag, _x, _n;
        
        this.setDisplay = function(_display) {display = _display;}
        this.getDisplay = function() {return display;}
        
        this.setFlag = function(_flag) {flag = _flag; }
        this.getFlag = function() { return flag; }
        
        this.mostraBits = function(_x){
            var retorno = "";
            var aux = 128;
            
            for (var i=0; i<8; ++i){
                if ( (_x&aux) != 0)  retorno += "1";
                else                 retorno += "0";
                aux = aux >> 1;
            }
            return retorno;
        }
        
        this.ligaDispositivo = function(_n){
            var aux = 1 << (Integer.parseInt(_n)-1);
            display = display | aux;
        }
        
        this.desligaDispositivo = function(_n){
            var aux = 1 << (Integer.parseInt(_n)-1);
            display = display & ~aux;
        }
    }


    $("#display").html("");


});