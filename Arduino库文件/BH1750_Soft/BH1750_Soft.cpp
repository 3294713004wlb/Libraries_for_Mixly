/*

  This is a library for the BH1750_SoftFVI Digital Light Sensor breakout board.

  The BH1750_Soft board uses I2C for communication. Two pins are required to
  interface to the device. Configuring the I2C bus is expected to be done
  in user code. The BH1750_Soft library doesn't do this automatically.

  Written by Christopher Laws, March, 2013.

*/

#include "BH1750_Soft.h"
#include <SoftwareWire.h>
// Define milliseconds delay for ESP8266 platform
#if defined(ESP8266)

  #include <pgmspace.h>
  #define _delay_ms(ms) delayMicroseconds((ms) * 1000)

// Use _delay_ms from utils for AVR-based platforms
#elif defined(__avr__)
  #include <util/delay.h>

// Use Wiring's delay for compability with another platforms
#else
  #define _delay_ms(ms) delay(ms)
#endif


// Legacy Wire.write() function fix
#if (ARDUINO >= 100)
  #define __wire_write(d) _wire->write(d)
#else
  #define __wire_write(d) _wire->send(d)
#endif


// Legacy Wire.read() function fix
#if (ARDUINO >= 100)
  #define __wire_read() _wire->read()
#else
  #define __wire_read() _wire->receive()
#endif


/**
 * Constructor
 * @params addr Sensor address (0x76 or 0x72, see datasheet)
 *
 * On most sensor boards, it was 0x76
 */
BH1750_Soft::BH1750_Soft() {}


/**
 * Configure sensor
 * @param mode Measurement mode
 */
bool BH1750_Soft::begin(Mode mode, byte addr, SoftwareWire *theWire) {
  _wire = theWire;
  BH1750_Soft_I2CADDR = addr;

  // I2C is expected to be initialized outside this library

  // Configure sensor in specified mode
  return configure(mode);

}


/**
 * Configure BH1750_Soft with specified mode
 * @param mode Measurement mode
 */
bool BH1750_Soft::configure(Mode mode) {

  // default transmission result to a value out of normal range
  byte ack = 5;

  // Check measurement mode is valid
  switch (mode) {

    case BH1750_Soft::CONTINUOUS_HIGH_RES_MODE:
    case BH1750_Soft::CONTINUOUS_HIGH_RES_MODE_2:
    case BH1750_Soft::CONTINUOUS_LOW_RES_MODE:
    case BH1750_Soft::ONE_TIME_HIGH_RES_MODE:
    case BH1750_Soft::ONE_TIME_HIGH_RES_MODE_2:
    case BH1750_Soft::ONE_TIME_LOW_RES_MODE:

      // Send mode to sensor
      _wire->beginTransmission(BH1750_Soft_I2CADDR);
      __wire_write((uint8_t)BH1750_Soft_MODE);
      ack = _wire->endTransmission();

      // Wait a few moments to wake up
      _delay_ms(10);
      break;

    default:
      // Invalid measurement mode
      Serial.println(F("[BH1750_Soft] ERROR: Invalid mode"));
      break;

  }

  // Check result code
  switch (ack) {
    case 0:
      BH1750_Soft_MODE = mode;
      return true;
    case 1: // too long for transmit buffer
      Serial.println(F("[BH1750_Soft] ERROR: too long for transmit buffer"));
      break;
    case 2: // received NACK on transmit of address
      Serial.println(F("[BH1750_Soft] ERROR: received NACK on transmit of address"));
      break;
    case 3: // received NACK on transmit of data
      Serial.println(F("[BH1750_Soft] ERROR: received NACK on transmit of data"));
      break;
    case 4: // other error
      Serial.println(F("[BH1750_Soft] ERROR: other error"));
      break;
    default:
      Serial.println(F("[BH1750_Soft] ERROR: undefined error"));
      break;
  }

  return false;

}

/**
 * Configure BH1750_Soft MTreg value
 * MT reg = Measurement Time register
 * @param MTreg a value between 32 and 254. Default: 69
 * @return bool true if MTReg successful set
 * 		false if MTreg not changed or parameter out of range
 */
bool BH1750_Soft::setMTreg(byte MTreg) {
  //Bug: lowest value seems to be 32!
  if (MTreg <= 31 || MTreg > 254) {
    Serial.println(F("[BH1750_Soft] ERROR: MTreg out of range"));
    return false;
  }
  byte ack = 5;
  // Send MTreg and the current mode to the sensor
  //   High bit: 01000_MT[7,6,5]
  //    Low bit: 011_MT[4,3,2,1,0]
  _wire->beginTransmission(BH1750_Soft_I2CADDR);
  __wire_write((0b01000 << 3) | (MTreg >> 5));
  ack = _wire->endTransmission();
  _wire->beginTransmission(BH1750_Soft_I2CADDR);
  __wire_write((0b011 << 5 )  | (MTreg & 0b11111));
  ack = ack | _wire->endTransmission();
  _wire->beginTransmission(BH1750_Soft_I2CADDR);
  __wire_write(BH1750_Soft_MODE);
  ack = ack | _wire->endTransmission();

  // Wait a few moments to wake up
  _delay_ms(10);

  // Check result code
  switch (ack) {
    case 0:
      BH1750_Soft_MTreg = MTreg;
      // Delay for specific continuous mode to get valid values
    	switch (BH1750_Soft_MODE) {
    	  case BH1750_Soft::CONTINUOUS_LOW_RES_MODE:
      		_delay_ms(24 * BH1750_Soft_MTreg/(byte)BH1750_Soft_DEFAULT_MTREG);
      		break;
    	  case BH1750_Soft::CONTINUOUS_HIGH_RES_MODE:
    	  case BH1750_Soft::CONTINUOUS_HIGH_RES_MODE_2:
      		_delay_ms(180 * BH1750_Soft_MTreg/(byte)BH1750_Soft_DEFAULT_MTREG);
      		break;
    	  default:
          break;
  	  }
      return true;
    case 1: // too long for transmit buffer
      Serial.println(F("[BH1750_Soft] ERROR: too long for transmit buffer"));
      break;
    case 2: // received NACK on transmit of address
      Serial.println(F("[BH1750_Soft] ERROR: received NACK on transmit of address"));
      break;
    case 3: // received NACK on transmit of data
      Serial.println(F("[BH1750_Soft] ERROR: received NACK on transmit of data"));
      break;
    case 4: // other error
      Serial.println(F("[BH1750_Soft] ERROR: other error"));
      break;
    default:
      Serial.println(F("[BH1750_Soft] ERROR: undefined error"));
      break;
  }

  return false;
}

/**
 * Read light level from sensor
 * The return value range differs if the MTreg value is changed. The global
 * maximum value is noted in the square brackets.
 * @return Light level in lux (0.0 ~ 54612,5 [117758,203])
 * 	   -1 : no valid return value
 * 	   -2 : sensor not configured
 */
float BH1750_Soft::readLightLevel(bool maxWait) {

  if (BH1750_Soft_MODE == UNCONFIGURED) {
    Serial.println(F("[BH1750_Soft] Device is not configured!"));
    return -2.0;
  }

  // Measurement result will be stored here
  float level = -1.0;

  // Send mode to sensor
  _wire->beginTransmission(BH1750_Soft_I2CADDR);
  __wire_write((uint8_t)BH1750_Soft_MODE);
  _wire->endTransmission();

  // Wait for measurement to be taken.
  // Measurements have a maximum measurement time and a typical measurement
  // time. The maxWait argument determines which measurement wait time is
  // used when a one-time mode is being used. The typical (shorter)
  // measurement time is used by default and if maxWait is set to True then
  // the maximum measurement time will be used. See data sheet pages 2, 5
  // and 7 for more details.
  // A continuous mode measurement can be read immediately after re-sending
  // the mode command.

  switch (BH1750_Soft_MODE) {

    case BH1750_Soft::ONE_TIME_LOW_RES_MODE:
      maxWait ? _delay_ms(24 * BH1750_Soft_MTreg/(byte)BH1750_Soft_DEFAULT_MTREG) : _delay_ms(16 * BH1750_Soft_MTreg/(byte)BH1750_Soft_DEFAULT_MTREG);
      break;
    case BH1750_Soft::ONE_TIME_HIGH_RES_MODE:
    case BH1750_Soft::ONE_TIME_HIGH_RES_MODE_2:
      maxWait ? _delay_ms(180 * BH1750_Soft_MTreg/(byte)BH1750_Soft_DEFAULT_MTREG) :_delay_ms(120 * BH1750_Soft_MTreg/(byte)BH1750_Soft_DEFAULT_MTREG);
      break;
    default:
      break;
  }

  // Read two bytes from the sensor, which are low and high parts of the sensor
  // value
  if (2 == _wire->requestFrom((int)BH1750_Soft_I2CADDR, (int)2)) {
    unsigned int tmp = 0;
    tmp = __wire_read();
    tmp <<= 8;
    tmp |= __wire_read();
    level = tmp;
  }

  if (level != -1.0) {
    // Print raw value if debug enabled
    #ifdef BH1750_Soft_DEBUG
    Serial.print(F("[BH1750_Soft] Raw value: "));
    Serial.println(level);
    #endif

    if (BH1750_Soft_MTreg != BH1750_Soft_DEFAULT_MTREG) {
     level *= (float)((byte)BH1750_Soft_DEFAULT_MTREG/(float)BH1750_Soft_MTreg);
     // Print MTreg factor if debug enabled
     #ifdef BH1750_Soft_DEBUG
     Serial.print(F("[BH1750_Soft] MTreg factor: "));
     Serial.println( String((float)((byte)BH1750_Soft_DEFAULT_MTREG/(float)BH1750_Soft_MTreg)) );
     #endif
    }
    if (BH1750_Soft_MODE == BH1750_Soft::ONE_TIME_HIGH_RES_MODE_2 || BH1750_Soft_MODE == BH1750_Soft::CONTINUOUS_HIGH_RES_MODE_2) {
      level /= 2;
    }
    // Convert raw value to lux
    level /= BH1750_Soft_CONV_FACTOR;

    // Print converted value if debug enabled
    #ifdef BH1750_Soft_DEBUG
    Serial.print(F("[BH1750_Soft] Converted float value: "));
    Serial.println(level);
    #endif
  }

  return level;

}
