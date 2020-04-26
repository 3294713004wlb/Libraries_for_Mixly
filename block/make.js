'use strict';
goog.provide('Blockly.Blocks.make');

goog.require('Blockly.Blocks');


Blockly.Blocks.make_test_2020_01_16= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("测试");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['make_sharp'] = {
  init: function() {
    try{
      if(!Blockly.Arduino.make_block)
      {
        Blockly.Arduino.make_block = 'this.setColour(90);';
      }
      eval(Blockly.Arduino.make_block);
      Blockly.Arduino.make_block_select = '0';
    }catch(exception){
        //console.warn(exception);
        //打印：Unexpected token ILLEGAL
        var make_block_length = Blockly.Arduino.make_block;
        if(make_block_length.length >= 1)
          Blockly.Arduino.make_block_select = '1';
        else
          Blockly.Arduino.make_block_select = '0';
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
    //eval(Blockly.Arduino.make_block);
  },
  onchange: function(){
    if(Blockly.Arduino.make_block_select == '1' && Blockly.Arduino.make_generator_select == '1')
      this.setWarningText("block/xxx.js、generator/xxx.js下代码均存在错误，请修改！");
      //this.setTooltip("block/xxx、generator/xxx.js下代码均存在错误，请修改！");
    else if(Blockly.Arduino.make_block_select == '1' && Blockly.Arduino.make_generator_select != '1')
      this.setWarningText("block/xxx.js下代码存在错误，请修改！");
      //this.setTooltip("block/xxx.js下代码均存在错误，请修改！");
    else if(Blockly.Arduino.make_block_select != '1' && Blockly.Arduino.make_generator_select == '1')
      this.setWarningText("generator/xxx.js下代码存在错误，请修改！");
      //this.setTooltip("generator/xxx.js下代码存在错误，请修改！");
    else
      this.setWarningText(null);
  }
  //,
  //onchange: function(){
    //this.init(); 
    //eval(Blockly.Arduino.make_block);
    //this.setColour(Blockly.Arduino.main_color);
  //}
};
/*
Blockly.Blocks['make_main'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("名字：")
        .appendField(new Blockly.FieldTextInput("make_main"), "main_0");
    this.appendStatementInput("main_1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("输入")
        .appendField(new Blockly.FieldDropdown([["自动的","automatic"], ["外部的","external"], ["内联的","inline"]]), "input_drop");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["无连接","sharp_1"], ["↑上端连接","sharp_2"], ["↓下端连接","sharp_3"], ["↕上下端连接","sharp_4"], ["←左端连接","sharp_5"]]), "sharp");
    this.appendValueInput("main_2", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("提示信息：");
    this.appendValueInput("main_3", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("帮助信息：");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("块颜色：")
        .appendField(new Blockly.FieldAngle(165), "angle_name");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
*/

Blockly.Blocks['make_main'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("代码区显示:")
      .appendField(new Blockly.FieldCheckbox("true"), "main_show_is_true");
  //this.appendDummyInput()
  //    .appendField("使用显示界面中块")
  //    .appendField(new Blockly.FieldDropdown([["1","1"],["2","2"],["3","3"],["4","4"],["5","5"]]), "type");
  this.appendDummyInput()
      .appendField("名字:")
      .appendField(new Blockly.FieldTextInput("make_main"), "main_0");
  this.appendDummyInput()
      .appendField("block/xxx.js:");
  this.appendStatementInput("main_1")
      .setCheck("make_input");
  this.appendDummyInput()
      .appendField("输入类型:")
      .appendField(new Blockly.FieldDropdown([["自动","automatic"], ["外部输入","external"], ["单行输入","inline"]]), "input_drop");
  this.appendDummyInput()
      .appendField("接口类型:")
      .appendField(new Blockly.FieldDropdown([["无连接口","sharp_1"], ["上连接口","sharp_2"], ["下连接口","sharp_3"], ["上下连接口","sharp_4"], ["左连接口","sharp_5"]]), "sharp");
  this.appendValueInput("main_2")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("提示信息:");
  this.appendValueInput("main_3")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("帮助信息:");
  this.appendValueInput("main_4")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("块颜色:");
  this.appendDummyInput()  
      .appendField("generator/xxx.js:");
  this.appendStatementInput("make_generator_code_data")
      .setCheck("make_input_code");
  this.setColour(20);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks['make_main_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle(90), "main_color");
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
  //,
  //onchange: function(){
    
  //}
};

Blockly.Blocks.make_color_define= {
  init: function() {
  this.appendDummyInput()
      .appendField("\"#")
      .appendField(new Blockly.FieldTextInput("8A2BE2"), "data")
      .appendField("\"");
  this.setOutput(true, null);
  this.setColour("#8A2BE2");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//var xml = '';
//var block_js = '';
//var generator_js = '';
Blockly.Blocks['make_main_show_code'] = {
  init: function() {
    this.appendDummyInput('EMPTY1')
        .appendField("xxx.xml:");
    this.appendDummyInput('EMPTY2')
        .appendField(new Blockly.FieldTextArea(""), "xml_code");
    this.appendDummyInput('EMPTY3')
        .appendField("block/xxx.js:");
    this.appendDummyInput('EMPTY4')
        .appendField(new Blockly.FieldTextArea(""), "block_code");
    this.appendDummyInput('EMPTY5')
        .appendField("generator/xxx.js:");
    this.appendDummyInput('EMPTY6')
        .appendField(new Blockly.FieldTextArea(""), "generator_code");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
  //,
  //onchange: function(){
    //测试失败
    /*
    if(xml != Blockly.Arduino.make_xml_code || block_js != Blockly.Arduino.make_block_code || generator_code != Blockly.Arduino.make_generator_code)
    {
      //this.removeInput('EMPTY1');
      //this.removeInput('EMPTY2');
      //this.removeInput('EMPTY3');
      //this.removeInput('EMPTY4');
      //this.removeInput('EMPTY5');
      //this.removeInput('EMPTY6');
      var input1 = this.appendDummyInput('EMPTY1');
      input1.appendField("XML:");
      var input2 = this.appendDummyInput('EMPTY2');
      input2.appendField(new Blockly.FieldTextArea(Blockly.Arduino.make_xml_code), "xml_code");
      var input3 = this.appendDummyInput('EMPTY3');
      input3.appendField("Block Definition:");
      var input4 = this.appendDummyInput('EMPTY4');
      input4.appendField(new Blockly.FieldTextArea(Blockly.Arduino.make_block_code), "block_code");
      var input5 = this.appendDummyInput('EMPTY5');
      input5.appendField("Generator stub:");
      var input6 = this.appendDummyInput('EMPTY6');
      input6.appendField(new Blockly.FieldTextArea(Blockly.Arduino.make_generator_code), "generator_code");
      this.setColour(Blockly.Arduino.main_color);
      xml = Blockly.Arduino.make_xml_code;
      block_js = Blockly.Arduino.make_block_code;
      generator_code = Blockly.Arduino.make_generator_code;
    }
    */
  
    //var input2 = this.appendDummyInput('EMPTY2');
    //this.setFieldValue(Blockly.Arduino.make_xml_code,"xml_code");
    //var input4 = this.appendDummyInput('EMPTY4');
    //this.setFieldValue(Blockly.Arduino.make_block_code,"block_code");
    //var input6 = this.appendDummyInput('EMPTY6');
    //this.setFieldValue(Blockly.Arduino.make_generator_code,"generator_code");
    //this.setColour(Blockly.Arduino.main_color);

    //if (!this.workspace) {
      // Block has been deleted.
    //  return;
    //}
   
    //this.setFieldValue(Blockly.Arduino.make_xml_code,"xml_code");
    //this.setFieldValue(Blockly.Arduino.make_block_code,"block_code");
    //this.setFieldValue(Blockly.Arduino.make_generator_code,"generator_code");
    //this.setColour(Blockly.Arduino.main_color);
  //}
  ,
  onchange: function() {
    var xml = Blockly.Arduino.make_xml_code;
    var block_js = Blockly.Arduino.make_block_code;
    var generator_js = Blockly.Arduino.make_generator_code;
    //xml = xml.substring(0,xml.length - 2);
    block_js = block_js.substring(0,block_js.length - 1);
    generator_js = generator_js.substring(0,generator_js.length - 1);
    this.setFieldValue(xml,"xml_code");
    this.setFieldValue(block_js,"block_code");
    this.setFieldValue(generator_js,"generator_code");
    this.setColour(Blockly.Arduino.main_color);
  }
};

Blockly.Blocks['make_main_show_code_test'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("1#");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextArea(""), "test_1");
    this.appendDummyInput()
        .appendField("2#");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextArea(""), "test_2");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange:function(){
    this.setFieldValue(Blockly.Arduino.statements_main_1,"test_1");
    this.setFieldValue(Blockly.Arduino.statements_statement_input_data,"test_2");
    this.setColour(Blockly.Arduino.main_color);
  }
};

Blockly.Blocks['make_value_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("值输入:")
        .appendField(new Blockly.FieldTextInput("NAME"), "dummy_input_data");
    this.appendStatementInput("statement_input_data")
        .setCheck("make_type")
        .appendField("添加域")
        .appendField(new Blockly.FieldDropdown([["左对齐","left"], ["右对齐","right"], ["中心对齐","centre"]]), "statement_input_dropdown_data");
    this.appendValueInput("make_value_input_type")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("类型:");
    this.setPreviousStatement(true, "make_input");
    this.setNextStatement(true, "make_input");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'make_main') {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到外观块下面");
    }
  }
};

Blockly.Blocks['make_statement_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("声明输入:")
        .appendField(new Blockly.FieldTextInput("NAME"), "dummy_input_data");
    this.appendStatementInput("statement_input_data")
        .setCheck("make_type")
        .appendField("添加域")
        .appendField(new Blockly.FieldDropdown([["左对齐","left"], ["右对齐","right"], ["中心对齐","centre"]]), "statement_input_dropdown_data");
    this.appendValueInput("make_statement_input_type")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("类型:");
    this.setPreviousStatement(true, "make_input");
    this.setNextStatement(true, "make_input");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'make_main') {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到外观块下面");
    }
  }
};

Blockly.Blocks['make_dummy_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("模拟输入:");
        //.appendField(new Blockly.FieldTextInput("NAME"), "dummy_input_data");
    this.appendStatementInput("statement_input_data")
        .setCheck("make_type")
        .appendField("添加域")
        .appendField(new Blockly.FieldDropdown([["左对齐","left"], ["右对齐","right"], ["中心对齐","centre"]]), "statement_input_dropdown_data");
    this.setPreviousStatement(true, "make_input");
    this.setNextStatement(true, "make_input");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'make_main') {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到外观块下面");
    }
  }
};

Blockly.Blocks['make_type_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("文本:")
        .appendField(new Blockly.FieldTextInput(""), "type_text_data");
    this.setPreviousStatement(true, "make_type");
    this.setNextStatement(true, "make_type");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && (surround_parent.type == 'make_value_input' | surround_parent.type == 'make_statement_input' | surround_parent.type == 'make_dummy_input')) {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到输入块下面");
    }
  }
};

Blockly.Blocks['make_type_text_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("文本输入:")
        .appendField(new Blockly.FieldTextInput("data"), "type_text_data")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("NAME"), "type_text_name");
    this.setPreviousStatement(true, "make_type");
    this.setNextStatement(true, "make_type");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && (surround_parent.type == 'make_value_input' | surround_parent.type == 'make_statement_input' | surround_parent.type == 'make_dummy_input')) {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到输入块下面");
    }
  }
};

Blockly.Blocks['make_type_longtext_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("长文本输入:")
        .appendField(new Blockly.FieldTextArea("data"), "type_text_data")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("NAME"), "type_text_name");
    this.setPreviousStatement(true, "make_type");
    this.setNextStatement(true, "make_type");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && (surround_parent.type == 'make_value_input' | surround_parent.type == 'make_statement_input' | surround_parent.type == 'make_dummy_input')) {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到输入块下面");
    }
  }
};

Blockly.Blocks['make_type_num_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("数字输入:")
        .appendField(new Blockly.FieldTextInput("0"), "type_text_data")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("NAME"), "type_text_name");
    this.appendDummyInput()
        .appendField("最小:")
        .appendField(new Blockly.FieldTextInput("-1"), "type_num_min")
        .appendField(" 最大:")
        .appendField(new Blockly.FieldTextInput("1"), "type_num_max")
        .appendField("精度:")
        .appendField(new Blockly.FieldTextInput("1"), "type_num_precision");
    this.setPreviousStatement(true, "make_type");
    this.setNextStatement(true, "make_type");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && (surround_parent.type == 'make_value_input' | surround_parent.type == 'make_statement_input' | surround_parent.type == 'make_dummy_input')) {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到输入块下面");
    }
  }
};

Blockly.Blocks['make_type_angle_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("角度输入:")
        .appendField(new Blockly.FieldAngle(90), "type_angle_data")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("NAME"), "type_text_name");
    this.setPreviousStatement(true, "make_type");
    this.setNextStatement(true, "make_type");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && (surround_parent.type == 'make_value_input' | surround_parent.type == 'make_statement_input' | surround_parent.type == 'make_dummy_input')) {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到输入块下面");
    }
  }
};

Blockly.Blocks.make_type_dropdown= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("下拉框:")
      .appendField(new Blockly.FieldTextInput("NAME"), "type_text_name");
  this.appendStatementInput("type_dropdown_data")
      .setCheck("make_type_dropdown")  
      .appendField("设计为");
  this.setPreviousStatement(true, "make_type"); 
  this.setNextStatement(true, "make_type");
  this.setColour(120);
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && (surround_parent.type == 'make_value_input' | surround_parent.type == 'make_statement_input' | surround_parent.type == 'make_dummy_input')) {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到输入块下面");
    }
  }
};

Blockly.Blocks.make_type_dropdown_text= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("显示文本:")
      .appendField(new Blockly.FieldTextInput("data1"), "type_dropdown_text")
      .appendField(".")
      .appendField(new Blockly.FieldTextInput("NAME"), "type_text_name");
  this.setPreviousStatement(true, "make_type_dropdown"); 
  this.setNextStatement(true, "make_type_dropdown");
  this.setColour("#cc66cc");
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'make_type_dropdown') {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到下拉框图形块下面");
    }
  }
};

Blockly.Blocks.make_type_dropdown_image = {
  init: function() {
    this.appendDummyInput()
        .appendField("图片")
        .appendField(new Blockly.FieldTextInput("../../media/make/Logo_Mixly.png"), "type_image_place");
    this.appendDummyInput()
        .appendField("宽度:")
        .appendField(new Blockly.FieldTextInput("20"), "type_image_width")
        .appendField("高度:")
        .appendField(new Blockly.FieldTextInput("20"), "type_image_height")
        .appendField("替代文本:")
        .appendField(new Blockly.FieldTextInput("*"), "type_image_alt")
        //.appendField("翻转RTL:")
        //.appendField(new Blockly.FieldCheckbox("FALSE"), "type_image_rtl");
        .appendField(".")
        .appendField(new Blockly.FieldTextInput("NAME"), "type_text_name");
    this.setPreviousStatement(true, "make_type_dropdown");
    this.setNextStatement(true, "make_type_dropdown");
    this.setColour("#cc66cc");
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'make_type_dropdown') {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到下拉框图形块下面");
    }
  }
};

Blockly.Blocks['make_type_checkbox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("检查框:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "type_checkbox_data")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("NAME"), "type_text_name");
    this.setPreviousStatement(true, "make_type");
    this.setNextStatement(true, "make_type");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && (surround_parent.type == 'make_value_input' | surround_parent.type == 'make_statement_input' | surround_parent.type == 'make_dummy_input')) {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到输入块下面");
    }
  }
};

Blockly.Blocks['make_type_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("颜色")
        .appendField(new Blockly.FieldColour("#ff0000"), "type_color_data")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("NAME"), "type_text_name");
    this.setPreviousStatement(true, "make_type");
    this.setNextStatement(true, "make_type");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && (surround_parent.type == 'make_value_input' | surround_parent.type == 'make_statement_input' | surround_parent.type == 'make_dummy_input')) {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到输入块下面");
    }
  }
};

Blockly.Blocks['make_type_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("变量")
        .appendField(new Blockly.FieldTextInput("item"), "type_variable_data")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("NAME"), "type_text_name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['make_type_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("图片")
        .appendField(new Blockly.FieldTextInput("../../media/make/Logo_Mixly.png"), "type_image_place");
    this.appendDummyInput()
        .appendField("宽度:")
        .appendField(new Blockly.FieldTextInput("20"), "type_image_width")
        .appendField("高度:")
        .appendField(new Blockly.FieldTextInput("20"), "type_image_height")
        .appendField("替代文本:")
        .appendField(new Blockly.FieldTextInput("*"), "type_image_alt")
        //.appendField("翻转RTL:")
        //.appendField(new Blockly.FieldCheckbox("FALSE"), "type_image_rtl");
    this.setPreviousStatement(true, "make_type");
    this.setNextStatement(true, "make_type");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && (surround_parent.type == 'make_value_input' | surround_parent.type == 'make_statement_input' | surround_parent.type == 'make_dummy_input')) {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到输入块下面");
    }
  }
};

Blockly.Blocks.make_color= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldColour("#ff99ff"), "color_data");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(135);
  this.setTooltip("");
  this.setHelpUrl("");
  }
  //onchange:function(){
  //  this.setColour('"'+this.getFieldValue('color_data')+'"');
  //}
};


Blockly.Blocks['test_1'] = {
   init: function() {
    this.setColour(135);
    this.appendDummyInput("");
    this.itemCount_ = 3;
    this.updateShape_();
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['create_with_item']));
    this.setTooltip('');
  },
   mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
   domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
   decompose: function(workspace) {
    var containerBlock =
    Blockly.Block.obtain(workspace, 'create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
   compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    var i = 0;
    while (itemBlock) {
      connections[i] = itemBlock.valueConnection_;
      itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
      i++;
    }
    this.itemCount_ = i;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        this.getInput('ADD' + i).connection.connect(connections[i]);
      }
    }
  },
   saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
    }
  },
   updateShape_: function() {
    // Delete everything.
    if (this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else {
      var i = 0;
      while (this.getInput('ADD' + i)) {
        this.removeInput('ADD' + i);
        i++;
      }
    }
    // Rebuild block.
    if (this.itemCount_ == 0) {
      this.appendDummyInput('EMPTY')
      .appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
    } else {
      for (var i = 0; i < this.itemCount_; i++) {
        var input = this.appendValueInput('ADD' + i);
        if (i == 0) {
          input.appendField("");
        }
      }
    }
  }
};

Blockly.Blocks['create_with_item'] = {
   init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("item");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.contextMenu = false;
  }
};

Blockly.Blocks['create_with_container'] = {
   init: function() {
    this.setColour(135);
    this.appendDummyInput()
        .appendField("测试：");
    this.appendStatementInput('STACK');
    this.setTooltip("");
    this.contextMenu = false;
  }
};

Blockly.Blocks.make_o= {
  init: function() { 
  this.appendValueInput("u")
      .setCheck(null)  
      .appendField(new Blockly.FieldDropdown([[{"src":"../../media/make/Uno.jpg","width":150,"height":100,"alt":"uno"},"h"],[{"src":"../../media/make/nano.jpg","width":150,"height":100,"alt":"nano"},"g"],[{"src":"../../media/make/ProMini.jpg","width":150,"height":100,"alt":"promini"},"t"]]), "s");
    this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_simulat_arduino= {
  init: function() { 
  this.appendValueInput("make_simulat_arduino_setup")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[{"src":"../../media/make/uno.jpg","width":195,"height":150,"alt":"arduino_UNO"},"simulat_arduino_uno"],[{"src":"../../media/make/promini.jpg","width":195,"height":150,"alt":"arduino_ProMini"},"simulat_arduino_promini"],[{"src":"../../media/make/nano.jpg","width":195,"height":150,"alt":"arduino_nano"},"simulat_arduino_nano"]]), "NAME");
  this.appendValueInput("make_simulat_arduino_loop")
      .setCheck(null);
  this.setInputsInline(false);
  this.setColour("#33cc00");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_simulat_arduino_setup= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("初始化：");
  this.appendStatementInput("NAME")
      .setCheck(null);
    this.setOutput(true, null);
  this.setColour("#ff99ff");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_simulat_arduino_loop= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("反复执行：");
  this.appendStatementInput("NAME")
      .setCheck(null);
    this.setOutput(true, null);
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

/*
Blockly.Blocks.make_generator_code_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("输出代码：");
  this.appendStatementInput("make_generator_code_data")
      .setCheck(null);
  this.setColour("#ff99ff");
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange:function(){
    Blockly.Blocks['make_main_show_code'].onchange();
  }
};
*/


/*
Blockly.Blocks.make_generator_code_header_file= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("添加头文件 include<")
      .appendField(new Blockly.FieldTextInput("test"), "header_file_data")
      .appendField(".h>");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#3366ff");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
*/

Blockly.Blocks.make_generator_define_setup= {
  init: function() { 
  this.appendValueInput("definitions_data")
      .setCheck(null)  
      .appendField("Blockly.Arduino.")
      .appendField(new Blockly.FieldDropdown([["definitions","definitions"],["setups","setups"]]), "type")
      .appendField("_[")
      .appendField(new Blockly.FieldTextInput("'NAME'"), "definitions_name")
      .appendField("] =");
  this.setPreviousStatement(true, "make_input_code");
  this.setNextStatement(true, "make_input_code");
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_generator_define= {
  init: function() { 
  this.appendValueInput("definitions_data")
      .setCheck(null)  
      .appendField("Blockly.Arduino.definitions_[")
      .appendField(new Blockly.FieldTextInput("'NAME'"), "definitions_name")
      .appendField("] =");
  this.setPreviousStatement(true, "make_input_code");
  this.setNextStatement(true, "make_input_code");
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_generator_define_special= {
  init: function() { 
  this.appendValueInput("definitions_data")
      .setCheck(null)  
      .appendField("Blockly.Arduino.definitions_[")
      .appendField(new Blockly.FieldDropdown([["'include_'","'include_'+"],["'define_'","'define_'+"],["'var_declare_'","'var_declare_'+"],["'function_'","'function_'+"]]), "type")
      .appendField("+")
      .appendField(new Blockly.FieldTextInput("'NAME'"), "definitions_name")
      .appendField("] =");
  this.setPreviousStatement(true, "make_input_code");
  this.setNextStatement(true, "make_input_code");
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_generator_setup= {
  init: function() { 
  this.appendValueInput("setups_data")
      .setCheck(null)  
      .appendField("Blockly.Arduino.setups_[")
      .appendField(new Blockly.FieldTextInput("'NAME'"), "setups_name")
      .appendField("] = ");
  this.setPreviousStatement(true, "make_input_code");
  this.setNextStatement(true, "make_input_code");
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_generator_loop= {
  init: function() { 
  this.appendValueInput("loop_data")
      .setCheck(null)  
      .appendField("var code =");
  this.setPreviousStatement(true, "make_input_code");
  this.setNextStatement(true, "make_input_code");
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_generator_longtext= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextArea("''"), "make_generator_longtext_data");
  this.setOutput(true, "make_input_code");
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_generator_longtext_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextArea("//添加代码"), "make_generator_longtext_data");
  this.setPreviousStatement(true, "make_input_code");
  this.setNextStatement(true, "make_input_code");
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_generator_longtext_define= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("/*添加一段代码*/");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextArea("//添加代码"), "make_generator_longtext_data");
  this.setPreviousStatement(true, "make_input_code");
  this.setNextStatement(true, "make_input_code");
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

/*
Blockly.Blocks.make_generator_longtext_setup= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("setup:");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextArea("//添加代码"), "make_generator_longtext_data");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#3366ff");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
*/

Blockly.Blocks.make_generator_longtext_loop= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("loop:");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextArea("//添加代码"), "make_generator_longtext_data");
  this.setPreviousStatement(true, "make_input_code");
  this.setNextStatement(true, "make_input_code");
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_generator_text_input = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour("#6666cc");
    this.appendDummyInput("EMPTY0")
        .appendField("");
    this.appendDummyInput("EMPTY1")  
        .appendField("")
        .appendField(new Blockly.FieldTextInput("               "), "data1");
    this.appendDummyInput("EMPTY2")  
        .appendField("");
    this.itemCount_ = 0;
    this.updateShape_();
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setMutator(new Blockly.Mutator(['generator_text_create_with_item']));
    this.setTooltip("");
  },
  /**
   * Create XML to represent list inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
   mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
   domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
   decompose: function(workspace) {
    var containerBlock =
    Blockly.Block.obtain(workspace, 'generator_text_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'generator_text_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
   compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    var i = 0;
    while (itemBlock) {
      connections[i] = itemBlock.valueConnection_;
      itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
      i++;
    }
    this.itemCount_ = i;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        this.getInput('ADD' + i).connection.connect(connections[i]);
      }
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
   saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
   updateShape_: function() {
    // Delete everything.
    var j = 0;
    while (this.getInput('EMPTY' + j)) {
      //this.removeInput('EMPTY' + j);
      j++;
    }
    if(j >= 2)
    {
      var code = new Array(j - 1);
      for (var n = 0; n < j-1; n++) {
        code[n] = this.getFieldValue('data' + (n + 1));
      }
    }
    var k = 0;
    while (this.getInput('EMPTY' + k)) {
      this.removeInput('EMPTY' + k);
      k++;
    }
    // Rebuild block.
    if (this.itemCount_ == 0) {
      this.appendDummyInput("EMPTY0")
          .appendField("")
          .appendField(new Blockly.FieldTextInput("//添加一段代码"), "data1")
          .appendField("");
    } else {
      this.appendDummyInput("EMPTY0")
          .appendField("");
      var i = 1;
      //if(this.itemCount_ < (j-2))
      for (i = 1; i <= this.itemCount_; i++) {
        if(i <= j-1)
        {
          this.appendDummyInput("EMPTY"+i)  
              .appendField("")
              .appendField(new Blockly.FieldTextInput(code[i-1]), "data"+i);
        }
        else
        {
          this.appendDummyInput("EMPTY"+i)  
              .appendField("")
              .appendField(new Blockly.FieldTextInput("               "), "data"+i);
        }
      }
      //this.appendDummyInput("EMPTY"+i)  
      //    .appendField("");
    }
  }
};

Blockly.Blocks.make_generator_text_input_return = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour("#6666cc");
    this.appendDummyInput("EMPTY0")
        .appendField("");
    this.appendDummyInput("EMPTY1")  
        .appendField(new Blockly.FieldTextInput("               "), "data1");
    this.appendDummyInput("EMPTY2")  
        .appendField("");
    this.itemCount_ = 0;
    this.updateShape_();
    this.setInputsInline(false);
    this.setOutput(true, "make_input_code");
    this.setMutator(new Blockly.Mutator(['generator_text_create_with_item']));
    this.setTooltip("");
  },
  /**
   * Create XML to represent list inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
   mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
   domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
   decompose: function(workspace) {
    var containerBlock =
    Blockly.Block.obtain(workspace, 'generator_text_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'generator_text_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
   compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    var i = 0;
    while (itemBlock) {
      connections[i] = itemBlock.valueConnection_;
      itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
      i++;
    }
    this.itemCount_ = i;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        this.getInput('ADD' + i).connection.connect(connections[i]);
      }
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
   saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
   updateShape_: function() {
    // Delete everything.
    var j = 0;
    while (this.getInput('EMPTY' + j)) {
      //this.removeInput('EMPTY' + j);
      j++;
    }
    if(j >= 2)
    {
      var code = new Array(j - 1);
      for (var n = 0; n < j-1; n++) {
        code[n] = this.getFieldValue('data' + (n + 1));
      }
    }
    var k = 0;
    while (this.getInput('EMPTY' + k)) {
      this.removeInput('EMPTY' + k);
      k++;
    }
    // Rebuild block.
    if (this.itemCount_ == 0) {
      this.appendDummyInput("EMPTY0")
          .appendField("")
          .appendField(new Blockly.FieldTextInput("''"), "data1");
          //.appendField(";");
    } else {
      this.appendDummyInput("EMPTY0")
          .appendField("");
      var i = 1;
      //if(this.itemCount_ < (j-2))
      for (i = 1; i <= this.itemCount_; i++) {
        if(i <= j-1)
        {
          this.appendDummyInput("EMPTY"+i) 
              .appendField(new Blockly.FieldTextInput(code[i-1]), "data"+i);
          /*
          if(i == this.itemCount_)
          {
            this.appendDummyInput("EMPTY"+i)  
                //.appendField("")
                .appendField(new Blockly.FieldTextInput(code[i-1]), "data"+i);
                //.appendField(";");
          }
          else
          {
            this.appendDummyInput("EMPTY"+i)  
                //.appendField("")
                .appendField(new Blockly.FieldTextInput(code[i-1]), "data"+i);
          }
          */
        }
        else
        {
          /*
          if(i == this.itemCount_)
          {
            if(i == 1)
            {
              this.appendDummyInput("EMPTY"+i)  
                  //.appendField("")
                  .appendField(new Blockly.FieldTextInput("''"), "data"+i);
                  //.appendField(";");
            }
            else
            {
              this.appendDummyInput("EMPTY"+i)  
                  //.appendField("")
                  .appendField(new Blockly.FieldTextInput("+ ''"), "data"+i);
                  //.appendField(";");
            }
          }
          else
          {
          */
          if(i == 1)
          {
            this.appendDummyInput("EMPTY"+i)  
                //.appendField("")
                .appendField(new Blockly.FieldTextInput("''"), "data"+i);
          }
          else
          {
            this.appendDummyInput("EMPTY"+i)  
                //.appendField("")
                .appendField(new Blockly.FieldTextInput("+ ''"), "data"+i);
          }

          //}
        }
      }
      //this.appendDummyInput("EMPTY"+i)  
      //    .appendField("");
    }
  }
};

Blockly.Blocks['generator_text_create_with_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour("#6666cc");
    this.appendDummyInput()
    .appendField("添加一行代码");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.contextMenu = false;
  }
};

Blockly.Blocks['generator_text_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour("#6666cc");
    this.appendDummyInput()
        .appendField("代码:");
    this.appendStatementInput('STACK');
    this.setTooltip("");
    this.contextMenu = false;
  }
};

Blockly.Blocks.make_block_to_zh_hans= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("代码输入(block文件夹下):");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextArea(""), "input_data");
  this.appendDummyInput()  
      .appendField("代码输出(block文件夹下):");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextArea(""), "block_data");
  this.appendDummyInput()  
      .appendField("代码输出(zh_hans文件夹下):");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextArea(""), "zh_hans_data");
  this.setColour(240);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.make_create_mil= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("创建Mixly库(.mil文件)");
  this.appendStatementInput("data")
      .setCheck("make_create_mil");
  this.setInputsInline(true);
  this.setPreviousStatement(true, "make_create_mil_1");
  this.setColour(20);
  this.setTooltip(
    "创建Mixly库(.mil文件)顺序:\n"
   +"①搭建出一个类似与示例的图形块\n"
   +"②在桌面上新建一个txt文档，将代码区生成的<!-- lib=\"\" --> ... </xml>(所有代码)拷贝到txt文档里；\n"
   +"③而后，用Mixly中的图形块拼出几个不同的图形块，注意，拼出来的这几个图形块之间不可以连在一起！\n"
   +"④返回代码区，复制loop函数里的<block> ... </block>(所有代码)；\n"
   +"其中<block> ... </block>的数量应该等于拼出的图形块数量+1(多出的一个是咱们第一步拼出的与示例相似的图形块的xml文件)\n"
   +"注释：<category> ... </category>代表一个界面，<block> ... </block>代表一个图形块；\n"
   +"⑤将复制出的<block> ... </block>放到<category> ... </category>的中间，也就是 ... 那个位置\n"
   +"⑥在所有图形块的<block> ... </block>都放到<category> ... </category>后，将这个txt文本另存为一个新的文本；\n"
   +"在保存时一定要注意编码，选择编码为UTF-8！(txt文档默认编码是ANSI，如果不修改编码，最后导入库时文字会出现乱码)\n"
   +"⑦将此txt文档的扩展名改为.mil，打开Mixly，点击导入库，就可以看到刚刚做出来的库"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_create_category= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("<category id = \"")
      .appendField(new Blockly.FieldTextInput("mixly_make_tool"), "id_data")
      .appendField("\"")
      .appendField("name = \"")
      .appendField(new Blockly.FieldTextInput("实用工具"), "name_data")
      .appendField("\"")
      .appendField("colour = \"")
      .appendField(new Blockly.FieldAngle(230), "colour_data")
      .appendField("\">");
  this.appendStatementInput("input_data")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField("</category>");
  this.setInputsInline(true);
  this.setPreviousStatement(true, "make_create_mil");
  this.setNextStatement(true, "make_create_mil");
  this.setColour(230);
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange: function(e) {
    var angle_colour_data = this.getFieldValue('colour_data');
    this.setColour(angle_colour_data-0);
    var surround_parent = this.getSurroundParent();
    if (surround_parent && (surround_parent.type == 'make_create_mil' | surround_parent.type == 'make_create_category')) {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到 创建Mixly库块或与此相同的块 下面");
    }
  }
};

Blockly.Blocks.make_create_show= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("代码区显示图形块的.xml文件");
  this.setInputsInline(true);
  this.setNextStatement(true, "make_create_mil_1");
  this.setColour(20);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_create_input= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextArea("<!--数据-->"), "input");
  this.setInputsInline(true);
  this.setPreviousStatement(true, "make_create_mil");
  this.setNextStatement(true, "make_create_mil");
  this.setColour(120);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};




/*
document.getElementById('button_test').onclick = function() {
  open_exe('file:///D:\\mixly\\杂项\\14，ATK-AS608指纹识别模块\\2，配套软件\\指纹模块测试上位机\\指纹测试.exe');
};
*/