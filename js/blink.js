// Como o johnny five é um módulo Node.js, ele é carregado como qualquer outro
var five = require('johnny-five'); // Instanciamos uma placa, que neste caso será a do Arduino que se comunicará com o computador 

var board = new five.Board();

// O evento de ready é disparado quando a comunicação é estabelecida entre o processo Node.js e o Arduino 
board.on('ready', function() { // Instanciamos um led no pino 13 
	var led1 = new five.Led(2);
	var led2 = new five.Led(3);
	var led3 = new five.Led(4);
	var led4 = new five.Led(5);
	var led5 = new five.Led(6);
	var led6 = new five.Led(7);
	var led7 = new five.Led(8);
	var led8 = new five.Led(9);
	
    // Chamamos o método blink do led que recebe a duração da fase que piscará em milissegundos 
    $("#btn_all").click(function(){
    	led1.on();
    	led2.off();
    	led3.off();
    	led4.off();
    	led5.off();
    	led6.off();
    	led7.off();
    	led8.off(); 
    });

    
});