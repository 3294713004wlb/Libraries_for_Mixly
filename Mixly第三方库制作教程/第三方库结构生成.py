import os

libraries_name = "lib_morse_keyboard" #用于定义存放 Arduino库文件 的目录名
block_name = "USB_morse_keyboard" #用于定义block&generator下文件和xml文件的文件名
name = "USB鼠标键盘模拟" #用于定义存放所有文件夹的目录名

dir = os.getcwd()+ "\\Mixly库目录" #用于定义生成的文件夹要存放的位置
print(dir)

os.chdir(dir)
os.mkdir(dir + "\\" + name)
dir = dir + "\\" + name
os.chdir(dir)
os.mkdir(dir + "\\generator")
os.mkdir(dir + "\\block")
os.mkdir(dir + "\\language")
os.mkdir(dir + "\\media")
os.mkdir(dir + "\\companypin")
os.mkdir(dir + "\\hardware")
os.mkdir(dir + "\\" + libraries_name)

os.mkdir(dir + "\\language\\" + block_name)
os.mkdir(dir + "\\media\\" + block_name)
os.mkdir(dir + "\\companypin\\" + block_name)
os.mkdir(dir + "\\hardware\\arduino")

xml = open(block_name + ".xml", 'w')
xml.write("<!--\n")
xml.write("type=\"company\"\n")
xml.write("block=\"block/" + block_name + ".js\"\n")
xml.write("generator=\"generator/" + block_name + ".js\" \n")
xml.write("language=\"language/" + block_name + "/\"\n")
xml.write("media=\"media/" + block_name + "\"\n")
xml.write("pin=\"companypin/" + block_name + "\"\n")
xml.write("lib=\"" + libraries_name + "\"\n")
xml.write("hardware=\"hardware/arduino\" \n")
xml.write("-->\n")
xml.write("<!--\n")
xml.write("Author:\n")
xml.write("Date:\n")
xml.write("E-mail:\n")
xml.write("-->\n")
xml.write("<script type=\"text/javascript\" src=\"../../blocks/company/" + block_name + ".js\"></script>\n")
xml.write("<script type=\"text/javascript\" src=\"../../generators/arduino/company/" + block_name + ".js\"></script>")
xml.close()

dir_generator = dir + "\\generator"
dir_block = dir + "\\block"
dir_language = dir + "\\language\\" + block_name
dir_companypin = dir + "\\companypin\\" + block_name

os.chdir(dir_generator)
generator = open(block_name + ".js", 'w')
generator.write("\'use strict\';\n")
generator.write("goog.provide(\'Blockly.Arduino." + block_name + "\');\n")
generator.write("goog.require(\'Blockly.Arduino\');\n")
generator.close()

os.chdir(dir_block)
block = open(block_name + ".js", 'w')
block.write("\'use strict\';\n")
block.write("goog.provide(\'Blockly.Blocks." + block_name + "\');\n")
block.write("goog.require(\'Blockly.Blocks\');\n")
block.close()

os.chdir(dir_language)
language = open("zh-hans.js", 'w')
language.close()
language = open("zh-hant.js", 'w')
language.close()
language = open("spa.js", 'w')
language.close()
language = open("en.js", 'w')
language.close()

os.chdir(dir_companypin)
companypin = open("pin.js", 'w')
companypin.close()
