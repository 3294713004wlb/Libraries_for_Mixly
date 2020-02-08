/*
  ShiftRegister74HC595.h - Library for simplified control of 74HC595 shift registers.
  Created by Timo Denk (www.timodenk.com), Nov 2014.
  Additional information is available at http://shiftregister.simsso.de/
  Released into the public domain.
*/

#ifndef ShiftRegister74HC595_h
#define ShiftRegister74HC595_h

#include "Arduino.h"

class ShiftRegister74HC595 
{
public:
    ShiftRegister74HC595(int numberOfShiftRegisters, int serialDataPin, int clockPin, int latchPin);
    ~ShiftRegister74HC595();
    void setAll(const uint8_t * digitalValues);
#ifdef __AVR__
    void setAll_P(const uint8_t * digitalValuesProgmem); // Experimental, PROGMEM data
#endif
    uint8_t * getAll(); 
    void set(int pin, uint8_t value);
    void setNoUpdate(int pin, uint8_t value);
    void updateRegisters();
    void setAllLow();
    void setAllHigh(); 
    uint8_t get(int pin);

private:
    int _numberOfShiftRegisters;
    int _clockPin;
    int _serialDataPin;
    int _latchPin;
    uint8_t * _digitalValues;
};

#endif
