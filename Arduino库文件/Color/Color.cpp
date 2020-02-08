#include "Arduino.h"
#include "Color.h"

Color::Color(unsigned int *pins, int SENSOR, int FREQUENCY) {
	
	for (int i = 0; i < sizeof(pins); i++) {
		pinMode(pins[i], OUTPUT);
		_pins[i] = pins[i];
	}
	_SENSOR = SENSOR;
	pinMode(SENSOR, INPUT);
	getFrequency(FREQUENCY);
}

Color::Color(unsigned int *pins, int SENSOR) {
	
	for (int i = 0; i < sizeof(pins); i++) {
		pinMode(pins[i], OUTPUT);
		_pins[i] = pins[i];
	}
	_SENSOR = SENSOR;
	pinMode(SENSOR, INPUT);
	getFrequency(_20);
}

void Color::getFrequency(int f) {
	switch (f) {
		case _0:
			setFrequency(LOW, LOW);
			break;
		case _2:
			setFrequency(LOW, HIGH);
			break;
		case _20:
			setFrequency(HIGH, LOW);
			break;
		case _100:
			setFrequency(HIGH, HIGH);
			break;
		default:
			setFrequency(HIGH, LOW);
			break;
	}
}

void Color::setFrequency(int S0, int S1) {
	digitalWrite(_pins[0], S0);
	digitalWrite(_pins[1], S1);
}

int Color::red() {
	int color = setColor(LOW, LOW);
	return color;
}

int Color::green() {
	int color = setColor(HIGH, HIGH);
	return color;
}

int Color::blue() {
	int color = setColor(LOW, HIGH);
	return color;
}

int Color::white() {
	int color = setColor(HIGH, LOW);
	return color;
}

int Color::setColor(int S2, int S3) {
	digitalWrite(_pins[4], HIGH);
	digitalWrite(_pins[2], S2);
	digitalWrite(_pins[3], S3);
	int color = pulseIn(_SENSOR, LOW);
	digitalWrite(_pins[4], LOW);
	return color;
}