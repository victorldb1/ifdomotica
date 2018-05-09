int number = 0, i=9;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600); 
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT); 
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT); 
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT); 
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available() > 0){
    number = Serial.read()-'0';
    Serial.println(number);
    i--;
    switch(i){
      case 8: if(number == 1) digitalWrite(9, HIGH); else if(number==0) digitalWrite(9, LOW);
        break;
      case 7: if(number == 1) digitalWrite(8, HIGH); else if(number==0) digitalWrite(8, LOW);
        break;
      case 6: if(number == 1) digitalWrite(7, HIGH); else if(number==0) digitalWrite(7, LOW);
        break;
      case 5: if(number == 1) digitalWrite(6, HIGH); else if(number==0) digitalWrite(6, LOW);
        break;
      case 4: if(number == 1) digitalWrite(5, HIGH); else if(number==0) digitalWrite(5, LOW);
        break;
      case 3: if(number == 1) digitalWrite(4, HIGH); else if(number==0) digitalWrite(4, LOW);
        break;
      case 2: if(number == 1) digitalWrite(3, HIGH); else if(number==0) digitalWrite(3, LOW);
        break;
      case 1: if(number == 1) digitalWrite(2, HIGH); else if(number==0) digitalWrite(2, LOW);
        break;   
      case 0: i = 9;
        break;
    }
  }
}
