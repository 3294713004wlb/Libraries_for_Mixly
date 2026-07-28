# Mixly Third-party Libraries and Tutorial for Creating Third-party Libraries

## Note

Downloading or cloning the files in this repository cannot be updated with one click! You must first download the files from the [**Libraries_for_Mixly_simplify**](https://gitee.com/smilebrightly/Libraries_for_Mixly_simplify) repository!


## Installation Steps

- Download all files from the [**Libraries_for_Mixly_simplify**](https://gitee.com/smilebrightly/Libraries_for_Mixly_simplify) repository. Extract `Libraries_for_Mixly_simplify.zip`, then extract `Mixly_WIN.7z` and `Libraries_For_Mixly_Gitee.7z` found inside the zip.
- `Mixly_WIN.7z` is the Mixly update package; `Libraries_For_Mixly_Gitee.7z` is the third-party library update package. If you do not have the Mixly software, run `一件更新.bat` (One-click Update) inside the `Mixly_WIN` folder to get the latest version of Mixly. Run `一件更新.bat` inside the `Libraries_For_Mixly_Gitee` folder to get the latest Arduino and make libraries.


## Arduino Library Directory

```
|--Maker
​	|--Variables|Constants
​	|--Control
​	|--Math
​	|--Text
​	|--Arrays
​		|--One-dimensional Array
​		|--Two-dimensional Array
​	|--Communication
​		|--I2C Communication
​		|--SPI Communication
​		|--USB Keyboard/Mouse Simulation
​		|--nRF24L01 Wireless Communication
​		|--315MHZ/433MHZ Wireless Communication
​	|--Storage
​		|--AT24Cxx Memory
​	|--Sensors
​		|--Matrix Keyboard
​		|--Clock Modules
​			|--RTC Clock
​			|--Time & Date
​			|--AT24C32
​			|--DS1302
​			|--DS1307
​			|--DS3231
​			|--DS3234
​		|--Atmospheric Pressure Sensors
​			|--BMP180 Barometric Pressure Sensor
​			|--BMP280 Barometric Pressure Sensor
​		|--Color Sensors
​			|--TCS230 Color Sensor
​			|--TCS34725 Color Sensor
​		|--Temperature & Humidity Sensors
​			|--AHT10 Temperature & Humidity Sensor
​			|--SHT30 Temperature & Humidity Sensor
​			|--HTU21D Temperature & Humidity Sensor
​			|--LM75 Temperature Sensor
			|--MCP9808 Temperature Sensor
​			|--MLX90614 Infrared Temperature Sensor
​			|--MAX6675 K-type Thermocouple Temperature Sensor
​		|--Light Intensity Sensors
​			|--BH1750 Light Intensity Sensor
​			|--MAX44009 Light Intensity Sensor
			|--ML8511 UV Sensor
​		|--pulseSensor Heart Rate Sensor
​		|--Input/Output
​			|--PCF8574 8-bit IO Expansion
​			|--MCP23017 16-bit IO Expansion
​			|--74HC595 Shift Register
			|--PCF8591 AD Conversion Module
​		|--PAJ7620 Gesture Sensor
​		|--TCA9548 8-channel I2C Expansion Module
​		|--AS608 Optical Fingerprint Sensor
		|--INA219 Bi-directional Current/Power Monitoring Sensor
		|--GP2Y1010AU0F Dust Sensor
​	|--Displays
​		|--OLED Display
​		|--Nokia5110 Display
​		|--TFT Color Screen (128x128)
​		|--LCD12864 Display
​		|--MAX7219 8-digit Segment Display
​	|--Actuators
​		|--Stepper Motor
​		|--mini MP3 Player
		|--X9Cxxx Digital Potentiometer
​	|--Algorithms
​		|--Text Encryption
​		|--QR Code Generation
​		|--PID Control
​	|--Tools
​		|--Calculator
​		|--LCD Pattern Tool
​		|--Chinese Character Set Encoding Query Tool
​	|--Comments
```


## Make Library Directory

```
|--Mixly Library Creation
​	|--Display Interface
​	|--Input
​	|--Type
​	|--Color
​	|--Edit Generated Code
​	|--Define Block Appearance/Code
​	|--Utilities
​		|--Conversion Tool (block→block+zh_hans)
​		|--Mixly Library Creation (.mil)
​			|--Basic Blocks
​			|--Examples
​	|--Test
```


## Mixly Third-party Library Structure

```
|--Mixly Third-party Library
​	|--xxx.xml (Required)
​	|--block (Required)
​		|--xxx.js
​	|--generator (Required)
​		|--xxx.js
​	|--language (Optional)
​		|--xxx
​			|--zh-hans.js (Simplified Chinese)
​			|--zh-hant.js (Traditional Chinese)
​			|--spa.js (Spanish)
​			|--en.js (English)
​	|--media (Optional)
​		|--xxx
​			|--Images
​	|--companypin (Optional)
​		|--xxx
​			|--pin.js
​	|--xxx (Optional)
​		|--Library files (xxx.h and xxx.cpp)
​	|--hardware (Optional)
​		|--Some files
```


## Change Log

#### 2020-04-08
* Added support for custom SDA & SCL pins for AT24Cxx, BH1750, MAX44009, PCF8574, MCP23017, TCA9548A, and OLED.
* Added `examples/Arduino库例程/AT24Cxx/AT24C256数据储存与读取测试(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/BH1750/BH1750_串口打印光照度值(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/MAX44009/MAX44009光照度传感器_串口打印光照度值(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/PCF8574/PCF8574管脚测试(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/MCP23017/MCP23017管脚输出测试(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/TCA9548 I2C扩展/TCA9548 I2C扩展_测试(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/OLED/OLED_移动位图(软件模拟I2C).mix` (Software simulated I2C).

#### 2020-04-07
* Added support for custom SDA & SCL pins for BMP180, BMP280, TCS34725, AHT10, HTU21D, LM75, and MLX90614.
* Added `examples/Arduino库例程/BMP180/BMP180大气压强传感器_串口打印温度、高度和大气压强(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/BMP280/BMP280大气压强传感器_串口打印温度、高度和大气压强(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/TCS34725/TCS34725颜色传感器_串口打印RGBW值(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/AHT10/AHT10温湿度传感器_串口打印温度和湿度(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/HTU21D温湿度传感器/HTU21D温湿度传感器_串口打印温度和湿度(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/LM75温度传感器/LM75温度传感器串口打印温度(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/MLX90614红外测温传感器/MLX90614红外测温传感器_串口打印环境和目标物体温度(软件模拟I2C).mix` (Software simulated I2C).

#### 2020-04-06
* Added ML8511 UV Sensor (with detailed documentation).
* Added `examples/Arduino库例程/ML8511紫外线传感器/ML8511紫外线传感器_串口打印输出电压_紫外线强度.mix`.
* Added `文档/手册/ML8511英文手册.pdf` (English Manual).
* Added MCP9808 Temperature Sensor (with detailed documentation).
* Added `examples/Arduino库例程/MCP9808温度传感器/MCP9808温度传感器_串口打印温度和测量分辨率(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/MCP9808温度传感器/MCP9808温度传感器_串口打印温度和测量分辨率(硬件I2C).mix` (Hardware I2C).
* Added `文档/手册/MCP9808英文手册.pdf` (English Manual).
* Fixed a bug where INA219 Bi-directional Current/Power Monitoring Sensor could not read data when using software simulated I2C.
* Added `examples/Arduino库例程/nRF24L01无线通信/nrf24L01发送布尔型数据.mix` (Send boolean data).
* Added `examples/Arduino库例程/nRF24L01无线通信/nrf24L01接收布尔型数据.mix` (Receive boolean data).

#### 2020-04-05
* Added GP2Y1010AU0F Dust Sensor (with detailed documentation).
* Added `examples/Arduino库例程/GP2Y1010AU0F粉尘传感器/GP2Y1010AU0F粉尘传感器_串口打印获取和计算的数据.mix`.
* Added `文档/手册/GP2Y1010AU0F英文手册.PDF` (English Manual).
* Added `文档/手册/GP2Y1010AU设计参考指南及原理.pdf` (Design Reference Guide and Principle).
* Added Arctangent function block (`atan2(y, x)`).
* Updated `导入Arduino库到Mixly(测试版).bat` and `导入Arduino库到Mixly(常规版).bat`; please read the documentation in the folder for new import steps.
* Deleted `address.txt` and `address_arduino.txt`. After this update, you need to create these files yourself in the folder.

#### 2020-04-04
* Added INA219 Bi-directional Current/Power Monitoring Sensor (with detailed documentation).
* Added `examples/Arduino库例程/INA219电量监测模块/INA219电量监测模块_串口打印_电压_电流_功率值(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/INA219电量监测模块/INA219电量监测模块_串口打印_电压_电流_功率值(硬件I2C).mix` (Hardware I2C).
* Added `文档/手册/INA219英文手册.pdf` (English Manual).
* Fixed a bug regarding name conflict between the "Bitwise Operation" block in Mixly and the "Bit Operation" module in the Arduino library.

#### 2020-04-03
* Adjusted the one-click update function of `Libraries_for_Mixly` (referencing official Mixly) to avoid "unlink of file" errors during download.
* Fixed a bug where the address could not be set for AT24C32 in the Clock module when using software simulated I2C.
* Added X9Cxxx Digital Potentiometer module (with detailed documentation).
* Added `examples/Arduino库例程/RTC时钟模块/AT24C32/AT24C32写入数组_读取数组(软件模拟I2C).mix` (Software simulated I2C).
* Added `examples/Arduino库例程/RTC时钟模块/AT24C32/AT24C32写入数组_读取数组(硬件I2C).mix` (Hardware I2C).
* Added `examples/Arduino库例程/X9Cxxx数字电位器/X9Cxxx数字电位器图形块测试.mix`.

#### 2020-04-02
* Added Bit Operation module.
* Added `examples/Arduino库例程/综合例程/OLED&nRF24L01&HTU21D&BMP280_发送端.mix` (Sender side).
* Added `examples/Arduino库例程/综合例程/OLED&nRF24L01&HTU21D&BMP280_接收端.mix` (Receiver side).
* Added `examples/Arduino库例程/数学运算/位操作测试.mix` (Bit operation test).

#### 2020-03-27
* Optimized Variables/Constants modules to align with official Mixly.
* Added `导入Arduino库到Mixly(测试版).bat`; importing libraries via this method provides features not available in the regular import.

#### 2020-03-24
* Added PCF8591 AD Conversion module (with detailed documentation).
* Added `examples/Arduino库例程/PCF8591/PCF8591_串口打印模拟输入管脚值设置模拟输出管脚值.mix`.

#### 2020-03-19
* Added `第三方库结构生成.py` to make third-party library creation more convenient.

#### 2020-03-13
* Added Mixly Third-party Library Creation Tutorial.

#### 2020-02-18
* Fixed a bug where the `do-while` module generated incorrect code.
* Added `传感器/AS608光学指纹传感器` (currently missing detailed documentation).
* Added `examples/Arduino库例程/AS608光学指纹传感器/AS608_指纹录入、比对、删除和指纹库清空2020.02.17.mix`.
* Added `examples/make库例程/AS608光学指纹传感器/`.

#### 2020-02-15
* Rewrote all functional blocks under `maker/通信/nRF24L01无线通信` (original block code in `block` and `generator` is retained) (currently missing detailed documentation).
* Added `examples/Arduino库例程/nRF24L01无线通信/nrf24L01发送&接收测试_2020.02.15.mix`.
* Added `examples/Arduino库例程/nRF24L01无线通信/nrf24L01发送&接收_自动应答测试2020.02.15.mix`.
* Adjusted the block order under `maker/通信/USB鼠标键盘模拟`.
* Adjusted the block order under `maker/通信/315MHZ/433MHZ无线通信`.

#### 2020-02-11
* Added detailed instructions for `传感器/时钟模块/DS3231/基础` (Detailed in block init, concise in workspace) and Alarms 1 & 2.
* Added detailed instructions for `传感器/时钟模块/DS3234/基础` (Detailed in block init, concise in workspace) and Alarms 1 & 2.

#### 2020-02-06
* Added `导入Arduino库到Mixly.mat`.
* Cloned this project from GitHub to Gitee.

#### 2020-02-05
* Added `一件更新.mat` (referencing official Mixly).
* Added detailed instructions for `传感器/时钟模块/DS1307/基础` and `RAM` (Detailed in block init, concise in workspace).

#### 2020-02-04
* Fixed a bug where the DS1302 "Write Byte" block generated code that failed to compile.
* Added detailed instructions for `RTC时钟`, `时间&日期`, `AT24C32`, and `DS1302/基础` and `RAM` (Detailed in block init, concise in workspace).
* Added `examples/Arduino库例程/RTC时钟模块/DS1302/DS1302_写入和读取数据.mix`.

#### 2020-02-03
* Fixed a bug in the "Multi-line Comment" block where adding or reducing lines would delete all previous line data.
* Fixed a bug where RST and CLK pins were swapped during DS1302 initialization.
* Fixed compilation issues related to DS1302 (Cause: `ThreeWire` header must be above `RtcDS1302`).
* Added several DS1302 examples in `examples/Arduino库例程/RTC时钟模块/DS1302/` (Serial printing of current/future/custom time and date, and modifying time/date).
* Added `examples/Arduino库例程/数学运算/使用矩阵解二元一次方程组.mix` (Solving 2-variable linear equations using matrices).
* Added `examples/Arduino库例程/数学运算/使用矩阵解三元一次方程组.mix` (Solving 3-variable linear equations using matrices).
* Added "Get Row Count/Column Count" blocks for two-dimensional arrays.
