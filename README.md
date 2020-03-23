# Mixly的第三方库和第三方库制作教程

## 安装步骤

### 方法一：

- 在使用Arduino库之前，请先将此库下面名为 Arduino库文件 文件夹下的所有文件拷贝(或剪切)到mixly/arduino-1.x.x/libraries文件夹下！

- 如果mixly/arduino-1.x.x文件夹下无libraries文件夹，需先在此位置新建一名为 libraries 的文件夹，而后再执行步骤(1)

- 点击mixly中的导入库，选中Arduino库下的 Arduino.xml 文件，即可完成此库的导入

- Arduino库中一些功能块的示例程序放在了库中的examples/Arduino库例程文件夹下面

-  若想自己制作mixly中的图形块，点击mixly中的导入库，选中Arduino库下的 make.xml 文件，即可导入mixly第三方库制作库，具体的制作过程可以参考examples/make库例程下的文件

### 方法二：

-  修改 address.txt、address_arduino.txt中示例地址。找到Mixly的存放位置，拷贝此路径替换 address.txt 中示例路径，找到Arduino存放位置，拷贝此路径替换 address_arduino.txt 中的示例路径

-  拷贝目录下的 address.txt 、address_arduino.txt到C盘

-  运行 导入Arduino库到Mixly.bat， 当显示复制了xxx个文件时，说明导入库成功



## Arduino库目录

```
|--Maker
​	|--变量|常量
​	|--控制
​	|--数学
​	|--文本
​	|--数组
​		|--一维数组
​		|--二维数组
​	|--通信
​		|--I2C通信
​		|--SPI通信
​		|--USB键盘鼠标模拟
​		|--nRF24L01无线通信
​		|--315MHZ/433MHZ无线通信
​	|--储存
​		|--AT24Cxx储存器
​	|--传感器
​		|--矩阵键盘
​		|--时钟模块
​			|--RTC时钟
​			|--时间&日期
​			|--AT24C32
​			|--DS1302
​			|--DS1307
​			|--DS3231
​			|--DS3234
​		|--大气压强传感器
​			|--BMP180大气压强传感器
​			|--BMP280大气压强传感器
​		|--颜色传感器
​			|--TCS230颜色传感器
​			|--TCS34725颜色传感器
​		|--温湿度传感器
​			|--AHT10温湿度传感器
​			|--SHT30温湿度传感器
​			|--HTU21D温湿度传感器
​			|--LM75温度传感器
​			|--MLX90614红外测温传感器
​			|--MAX6675 K型热电偶 温度传感器
​		|--光照度传感器
​			|--BH1750光照度传感器
​			|--MAX44009光照度传感器
​		|--pulsesensor心率传感器
​		|--输入/输出
​			|--PCF8574 8位IO扩展
​			|--MCP23017 16位IO扩展
​			|--74HC595移位寄存器
​		|--PAJ7620手势传感器
​		|--TCA9548 8路I2C扩展模块
​		|--AS608光学指纹传感器
​	|--显示器
​		|--OLED显示屏
​		|--Nokia5110显示屏
​		|--TFT彩屏(128x128)
​		|--LCD12864显示屏
​		|--MAX7219 8位数码管
​	|--执行器
​		|--步进电机
​		|--mini MP3 Player
​	|--算法
​		|--加密文本
​		|--二维码生成
​		|--PID控制
​	|--工具
​		|--计算器
​		|--取模工具
​		|--汉字字符集编码查询工具
​	|--注释
```



## Make库目录

```
|--Mixly库制作
​	|--显示界面
​	|--输入
​	|--类型
​	|--颜色
​	|--编辑生成代码
​	|--定义块外观/代码
​	|--实用工具
​		|--转换工具(block→block+zh_hans)
​		|--Mixly库制作(.mil)
​			|--基础块
​			|--示例
​	|--测试
```



## Mixly第三方库结构

```
|--Mixly第三方库
​	|--xxx.xml (必须)
​	|--block (必须)
​		|--xxx.js
​	|--generator (必须)
​		|--xxx.js
​	|--language (非必须)
​		|--xxx
​			|--zh-hans.js (简体中文)
​			|--zh-hant.js (繁体中文)
​			|--spa.js (西班牙语)
​			|--en.js (英语)
​	|--media (非必须)
​		|--xxx
​			|--一些图片
​	|--companypin (非必须)
​		|--xxx
​			|--pin.js
​	|--xxx (非必须)
​		|--一些库文件(xxx.h和xxx.cpp)
​	|--hardware (非必须)
​		|--一些文件
```

