int ledPin[] = {2,3,4,5,6,7,8,9,10,11};
String ledColor[] = {"yellow","yellow","green","green","red","red","green","green","yellow","yellow"};
int len = sizeof(ledPin);
void setup() {
  for (int i = 0; i < len; i++) {
    pinMode(ledPin[i], OUTPUT);
  }
}
void bat() {
  for (int i = 0; i < len; i++) {
    digitalWrite(ledPin[i], HIGH);
  }
}
void tat() {
  for (int i = 0; i < len; i++) {
    digitalWrite(ledPin[i], LOW);
  }
}
void nhapnhay() {
  for (int i = 0; i < 5; i++) {
    tat();
    delay(250);
    bat();
    delay(250);
  }
}
void sangrieng(int a) {
  switch (a) {
    case 0:
    for (int i = 0; i < len; i++) {
      tat();
      digitalWrite(ledPin[i], HIGH);
      delay(250);
    }
    break;
    case 1:
    for (int i = len-1; i > 0; i--) {
      tat();
      digitalWrite(ledPin[i], HIGH);
      delay(250);
    }
    break;
  }
}
void sangdan(int a) {
  tat();
  switch (a) {
    case 0:
    for (int i = 0; i < len; i++) {
      digitalWrite(ledPin[i], HIGH);
      delay(250);
    }
    break;
    case 1:
    for (int i = len-1; i > 0; i--) {
      digitalWrite(ledPin[i], HIGH);
      delay(250);
    }
    break;
  }
}
void sangtheomau(String c) {
  tat();
  for (int i = 0; i < len; i++) {
    if (ledColor[i] == c) {
      digitalWrite(ledPin[i], HIGH);
      delay(300);
    }
  }
}
void sangxeke(int a) {
  tat();
  switch (a) {
    case 0:
    for (int i = 0; i < len; i++) {
      if (i % 2 == 0) {
        digitalWrite(ledPin[i], HIGH);
        delay(250);
      }
    }
    break;
    case 1:
    for (int i = len-1; i > 0; i--) {
      if (i % 2 == 0) {
        digitalWrite(ledPin[i], HIGH);
        delay(250);
      }
    }
    break;
  }
}
void loop() {
  bat();
  delay(1000);
  tat();
  delay(1000);
  sangrieng(0);
  sangrieng(1);
  nhapnhay();
  sangdan(0);
  sangdan(1);
  sangtheomau("yellow");
  sangtheomau("green");
  sangtheomau("red");
  sangxeke(0);
  sangxeke(1);
}
