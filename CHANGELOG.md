#### 更新日志
#### 2020-04-08
* AT24Cxx、BH1750、MAX44009、PCF8574、MCP23017、TCA9548A、OLED支持自定义SDA&SCL管脚
* 添加 examples/Arduino库例程/AT24Cxx/AT24C256数据储存与读取测试(软件模拟I2C).mix
* 添加 examples/Arduino库例程/BH1750/BH1750_串口打印光照度值(软件模拟I2C).mix
* 添加 examples/Arduino库例程/MAX44009/MAX44009光照度传感器_串口打印光照度值(软件模拟I2C).mix
* 添加 examples/Arduino库例程/PCF8574/PCF8574管脚测试(软件模拟I2C).mix
* 添加 examples/Arduino库例程/MCP23017/MCP23017管脚输出测试(软件模拟I2C).mix
* 添加 examples/Arduino库例程/TCA9548 I2C扩展/TCA9548 I2C扩展_测试(软件模拟I2C).mix
* 添加 examples/Arduino库例程/OLED/OLED_移动位图(软件模拟I2C).mix

#### 2020-04-07
* BMP180、BMP280、TCS34725、AHT10、HTU21D、LM75、MLX90614支持自定义SDA&SCL管脚
* 添加 examples/Arduino库例程/BMP180/BMP180大气压强传感器_串口打印温度、高度和大气压强(软件模拟I2C).mix
* 添加 examples/Arduino库例程/BMP280/BMP280大气压强传感器_串口打印温度、高度和大气压强(软件模拟I2C).mix
* 添加 examples/Arduino库例程/TCS34725/TCS34725颜色传感器_串口打印RGBW值(软件模拟I2C).mix
* 添加 examples/Arduino库例程/AHT10/AHT10温湿度传感器_串口打印温度和湿度(软件模拟I2C).mix
* 添加 examples/Arduino库例程/HTU21D温湿度传感器/HTU21D温湿度传感器_串口打印温度和湿度(软件模拟I2C).mix
* 添加 examples/Arduino库例程/LM75温度传感器/LM75温度传感器串口打印温度(软件模拟I2C).mix
* 添加 examples/Arduino库例程/MLX90614红外测温传感器/MLX90614红外测温传感器_串口打印环境和目标物体温度(软件模拟I2C).mix

#### 2020-04-06
* 添加 ML8511紫外线传感器(添加详细说明)
* 添加 examples/Arduino库例程/ML8511紫外线传感器/ML8511紫外线传感器_串口打印输出电压_紫外线强度.mix
* 添加 文档/手册/ML8511英文手册.pdf
* 添加 MCP9808温度传感器(添加详细说明)
* 添加 examples/Arduino库例程/MCP9808温度传感器/MCP9808温度传感器_串口打印温度和测量分辨率(软件模拟I2C).mix
* 添加 examples/Arduino库例程/MCP9808温度传感器/MCP9808温度传感器_串口打印温度和测量分辨率(硬件I2C).mix
* 添加 文档/手册/MCP9808英文手册.pdf
* 修复 INA219双向电流/电源监控传感器使用软件模拟I2C时无法读取数据的bug
* 添加 examples/Arduino库例程/nRF24L01无线通信/nrf24L01发送布尔型数据.mix
* 添加 examples/Arduino库例程/nRF24L01无线通信/nrf24L01接收布尔型数据.mix

#### 2020-04-05
* 添加 GP2Y1010AU0F粉尘传感器(添加详细说明)
* 添加 examples/Arduino库例程/GP2Y1010AU0F粉尘传感器/GP2Y1010AU0F粉尘传感器_串口打印获取和计算的数据.mix
* 添加 文档/手册/GP2Y1010AU0F英文手册.PDF
* 添加 文档/手册/GP2Y1010AU设计参考指南及原理.pdf
* 添加 反正切函数模块(atan2(y, x))
* 更新 导入Arduino库到Mixly(测试版).bat和导入Arduino库到Mixly(常规版).bat，新的导入库步骤请阅读文件夹下的文档
* 删除 address.txt和address_arduino.txt，此次更新后，需要在文件夹下自己新建address.txt和address_arduino.txt

#### 2020-04-04
* 添加 INA219双向电流/电源监控传感器(添加详细说明)
* 添加 examples/Arduino库例程/INA219电量监测模块/INA219电量监测模块_串口打印_电压_电流_功率值(软件模拟I2C).mix
* 添加 examples/Arduino库例程/INA219电量监测模块/INA219电量监测模块_串口打印_电压_电流_功率值(硬件I2C).mix
* 添加 文档/手册/INA219英文手册.pdf
* 修复 Mixly中 位运算模块 与Arduino库中 位操作模块 名字冲突的bug

#### 2020-04-03
* 调整 Libraries_for_Mixly的一件更新功能(参考Mixly官方)，避免用户下载时出现unlink of file的情况
* 修复 时钟模块中AT24C32使用软件模拟I2C时无法设置地址的bug
* 添加 X9Cxxx数字电位器模块(添加详细说明)
* 添加 examples/Arduino库例程/RTC时钟模块/AT24C32/AT24C32写入数组_读取数组(软件模拟I2C).mix
* 添加 examples/Arduino库例程/RTC时钟模块/AT24C32/AT24C32写入数组_读取数组(硬件I2C).mix
* 添加 examples/Arduino库例程/X9Cxxx数字电位器/X9Cxxx数字电位器图形块测试.mix

#### 2020-04-02
* 添加 位操作模块
* 添加 examples/Arduino库例程/综合例程/OLED&nRF24L01&HTU21D&BMP280_发送端.mix
* 添加 examples/Arduino库例程/综合例程/OLED&nRF24L01&HTU21D&BMP280_接收端.mix
* 添加 examples/Arduino库例程/数学运算/位操作测试.mix

#### 2020-03-27
* 优化 变量/常量模块，变量和常量可以和Mixly官方的一样啦
* 添加 导入Arduino库到Mixly(测试版).bat，使用此方式导入库将会有常规导入所没有的功能

#### 2020-03-24
* 添加 PCF8591 AD转换模块(添加详细说明)
* 添加 examples/Arduino库例程/PCF8591/PCF8591_串口打印模拟输入管脚值设置模拟输出管脚值.mix
* 添加 examples/Arduino库例程/PCF8591/PCF8591_串口打印模拟输入管脚值设置模拟输出管脚值.mix

#### 2020-03-19
* 添加 第三方库结构生成.py，制作第三方库更加方便

#### 2020-03-13
* 添加 Mixly第三方库制作教程

#### 2020-02-18
* 修复 do-while模块生成代码出错的bug
* 添加 模块在 传感器/AS608光学指纹传感器(暂时缺少详细说明)
* 添加 examples/Arduino库例程/AS608光学指纹传感器/AS608_指纹录入、比对、删除和指纹库清空2020.02.17.mix
* 添加 examples/make库例程/AS608光学指纹传感器/

#### 2020-02-15
* 重写 maker/通信/nRF24L01无线通信下 所有功能块(保留原来功能块在block和generator下代码)(暂时缺少详细说明)
* 添加 examples/Arduino库例程/nRF24L01无线通信/nrf24L01发送&接收测试_2020.02.15.mix
* 添加 examples/Arduino库例程/nRF24L01无线通信/nrf24L01发送&接收_自动应答测试2020.02.15.mix
* 调整 maker/通信/USB鼠标键盘模拟下 功能块顺序
* 调整 maker/通信/315MHZ/433MHZ无线通信下 功能块顺序

#### 2020-02-11
* 添加 说明在 传感器/时钟模块/DS3231/基础(块初始化 - 详细说明，块在工作区 - 简洁说明)
* 添加 说明在 传感器/时钟模块/DS3231/闹钟1(块初始化 - 详细说明，块在工作区 - 简洁说明)
* 添加 说明在 传感器/时钟模块/DS3231/闹钟2(块初始化 - 详细说明，块在工作区 - 简洁说明)
* 添加 说明在 传感器/时钟模块/DS3234/基础(块初始化 - 详细说明，块在工作区 - 简洁说明)
* 添加 说明在 传感器/时钟模块/DS3234/闹钟1(块初始化 - 详细说明，块在工作区 - 简洁说明)
* 添加 说明在 传感器/时钟模块/DS3234/闹钟2(块初始化 - 详细说明，块在工作区 - 简洁说明)

#### 2020-02-06
* 添加 导入Arduino库到Mixly.mat
* 克隆 GitHub上此项目到Gitee

#### 2020-02-05
* 添加 一键更新.mat(参考Mixly官方)
* 添加 说明在 传感器/时钟模块/DS1307/基础(块初始化 - 详细说明，块在工作区 - 简洁说明)
* 添加 说明在 传感器/时钟模块/DS1307/RAM(块初始化 - 详细说明，块在工作区 - 简洁说明)

#### 2020-02-04
* 修复 DS1302写入字节功能块 生成的代码无法通过编译的bug
* 添加 说明在 传感器/时钟模块/RTC时钟(块初始化 - 详细说明，块在工作区 - 简洁说明)
* 添加 说明在 传感器/时钟模块/时间&日期(块初始化 - 详细说明，块在工作区 - 简洁说明)
* 添加 说明在 传感器/时钟模块/AT24C32(块初始化 - 详细说明，块在工作区 - 简洁说明)
* 添加 说明在 传感器/时钟模块/DS1302/基础(块初始化 - 详细说明，块在工作区 - 简洁说明)
* 添加 说明在 传感器/时钟模块/DS1302/RAM(块初始化 - 详细说明，块在工作区 - 简洁说明)
* 添加 examples/Arduino库例程/RTC时钟模块/DS1302/DS1302_写入和读取数据.mix

#### 2020-02-03
* 修复 多行注释功能块 在添加或减少行数时会删除之前所有行数据的bug
* 修复 DS1302初始化时RST和CLK管脚颠倒的bug
* 修复 和DS1302有关程序无法编译的问题(原因:头文件ThreeWire需在RtcDS1302之上)
* 添加 examples/Arduino库例程/RTC时钟模块/DS1302/DS1302_串口打印当前时间和日期.mix
* 添加 examples/Arduino库例程/RTC时钟模块/DS1302/DS1302_串口打印当前和未来时间日期.mix
* 添加 examples/Arduino库例程/RTC时钟模块/DS1302/DS1302_串口打印自定义时间日期.mix
* 添加 examples/Arduino库例程/RTC时钟模块/DS1302/DS1302_修改时间或日期.mix
* 添加 examples/Arduino库例程/数学运算/使用矩阵解二元一次方程组.mix
* 添加 examples/Arduino库例程/数学运算/使用矩阵解三元一次方程组.mix
* 添加 二维数组获取行数/列数 功能块
