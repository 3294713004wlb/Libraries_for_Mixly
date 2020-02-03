// SQW/OUT pin mode using a DS1307 RTC connected via I2C.
//
// According to the data sheet (http://datasheets.maxim-ic.com/en/ds/DS1307.pdf), the
// DS1307's SQW/OUT pin can be set to low, high, 1Hz, 4.096kHz, 8.192kHz, or 32.768kHz.
//
// This sketch reads the state of the pin, then iterates through the possible values at
// 5 second intervals.
//

// NOTE:
// You must connect a pull up resistor (~10kohm) from the SQW pin up to VCC.  Without
// this pull up the wave output will not work!

#include "RTClib.h"

RTC_DS3231 rtc;

int mode_index = 0;

Ds3231SqwPinMode modes[] = { DS3231_OFF, DS3231_SquareWave1Hz, DS3231_SquareWave1kHz, DS3231_SquareWave4kHz, DS3231_SquareWave8kHz};


void print_mode() {
  Ds3231SqwPinMode mode = rtc.readSqwPinMode();

  Serial.print("Sqw Pin Mode: ");
  switch(mode) {
  case DS3231_OFF:                         Serial.println("DS3231_OFF");                  break;
  case DS3231_SquareWave1Hz:               Serial.println("DS3231_SquareWave1Hz");        break;
  case DS3231_SquareWave1kHz:              Serial.println("DS3231_SquareWave1kHz");       break;
  case DS3231_SquareWave4kHz:              Serial.println("DS3231_SquareWave4kHz");       break;
  case DS3231_SquareWave8kHz:              Serial.println("DS3231_SquareWave8kHz");       break;
  default:                                 Serial.println("UNKNOWN");                     break;
  }
}

void setup () {

#ifndef ESP8266
  while (!Serial); // for Leonardo/Micro/Zero
#endif

  Serial.begin(57600);
  if (! rtc.begin()) {
    Serial.println("Couldn't find RTC");
    while (1);
  }

  print_mode();
}

void loop () {
  rtc.writeSqwPinMode(modes[mode_index++]);
  print_mode();

  if (mode_index > 4) {
    mode_index = 0;
  }

  delay(5000);
}
