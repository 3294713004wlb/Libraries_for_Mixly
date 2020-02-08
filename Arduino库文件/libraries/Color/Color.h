#ifndef Color_h
#define Color_h

#define _0	0
#define _2 1
#define _20	2
#define _100 3

#include "Arduino.h"

class Color {
	public:
		Color(unsigned int *pins, int SENSOR, int FREQUENCY);
		Color(unsigned int *pins, int SENSOR);
		int red();
		int green();
		int blue();
		int white();
	private:
		void setFrequency(int S0, int S1);
		void getFrequency(int f);
		int setColor(int S2, int S3);
		unsigned int _pins[5] = {0, 0, 0, 0, 0};
		int _SENSOR;
};

#endif