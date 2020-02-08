#include <Color.h>

/***************************************************
 * This library is free to use!
 * - Padmal
 ***************************************************/
// Constructors are as follows
// Color((unsigned int[]){S0, S1, S2, S3, LED}, SENSOR_OUT);
// Color((unsigned int[]){S0, S1, S2, S3, LED}, SENSOR_OUT, Frequency);

Color color_1((unsigned int[]) {2, 3, 4, 5, 6}, 7);

void setup() {
  Serial.begin(9600);
  delay(100);
  Serial.println("Printing raw values...");
}

void loop() {
  int Blue = color_1.blue();
  int Red = color_1.red();
  int Green = color_1.green();
  int White = color_1.white();

  String disp = String("Blue :\t" + String(Blue) + "\tRed :\t" + String(Red) + "\tGreen :\t" + String(Green));
  Serial.print(disp);
  Serial.print("\tWhite :\t");
  Serial.println(White);
  delay(250);
}
