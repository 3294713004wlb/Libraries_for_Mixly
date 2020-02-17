'use strict';

goog.provide('Blockly.Arduino.Arduino');

goog.require('Blockly.Arduino');


//更改mixly中变量声明的图形块
Blockly.Blocks['variables_declare'] = {
  // Variable setter.
  init: function() {
    var DATATYPES = [["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["布尔","boolean"],["字符","char"],["无符号字符","unsigned char"],["字符串","String"],["字节","byte"],["字","word"]];

    this.setColour(Blockly.Blocks.variables.HUE);
    this.appendValueInput('VALUE', null)
        .appendField(Blockly.MIXLY_DECLARE)
        .appendField(new Blockly.FieldDropdown([["全局变量","global_variate"],["局部变量","local_variate"],["静态全局变量","static_global_variate"],["静态局部变量","static_local_variate"]]), "variables_type")
        .appendField(new Blockly.FieldTextInput('item'), 'VAR')
        .appendField(Blockly.MIXLY_AS)
      .appendField(new Blockly.FieldDropdown(DATATYPES), "TYPE")
      .appendField(Blockly.MIXLY_VALUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_VARIABLES_DECLARE);
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};





Blockly.Blocks.arduino_const_variate= {
  init: function() { 
  this.appendValueInput("const_variate_data")
      .setCheck(null)  
      .appendField("声明 常量")
      .appendField(new Blockly.FieldTextInput("num"), "const_variate_name")
      .appendField("为")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["布尔","boolean"],["字符","char"],["无符号字符","unsigned char"],["char *","char *"],["字符串","String"],["字节","byte"],["字","word"]]), "const_variate_type")
      .appendField("并赋值");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#cc66cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_const_variate_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("常量")
      .appendField(new Blockly.FieldTextInput("num"), "const_variate_name");
  this.setOutput(true, null);
  this.setColour("#cc66cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_define_global_variate= {
  init: function() { 
  this.appendValueInput("global_variate_data")
      .setCheck(null)  
      .appendField("声明 全局变量")
      .appendField(new Blockly.FieldTextInput("item"), "global_variate_name")
      .appendField("为")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["布尔","boolean"],["字符","char"],["无符号字符","unsigned char"],["char *","char *"],["字符串","String"],["字节","byte"],["字","word"]]), "global_variate_type")
      .appendField("并赋值");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(330);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.arduino_define_global_variate_0= {
  init: function() { 
  this.appendDummyInput() 
      .appendField("声明 全局变量")
      .appendField(new Blockly.FieldTextInput("item"), "global_variate_name")
      .appendField("为")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["布尔","boolean"],["字符","char"],["无符号字符","unsigned char"],["char *","char *"],["字符串","String"],["字节","byte"],["字","word"]]), "global_variate_type");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(330);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_define_static_global_variate'] = {
  init: function() {
    this.appendValueInput("static_variate_get_data")
        .setCheck(null)
        .appendField("声明 静态全局变量")
        .appendField(new Blockly.FieldTextInput("state1"), "static_variate_name")
        .appendField("为")
        .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["布尔","boolean"],["字符","char"],["无符号字符","unsigned char"],["字符串","String"],["字节","byte"],["字","word"]]), "static_variate_value")
        .appendField("并赋值");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9999ff");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_define_static_global_variate_1= {
  init: function() { 
  this.appendValueInput("static_variate_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldTextInput("state1"), "static_variate_name")
      .appendField("赋值为");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#9999ff");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_define_static_global_variate_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextInput("state1"), "static_variate_name");
  this.setOutput(true, null);
  this.setColour("#9999ff");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_define_static_local_variate'] = {
  init: function() {
    this.appendValueInput("static_variate_get_data")
        .setCheck(null)
        .appendField("声明 静态局部变量")
        .appendField(new Blockly.FieldTextInput("state2"), "static_variate_name")
        .appendField("为")
        .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["布尔","boolean"],["字符","char"],["无符号字符","unsigned char"],["字符串","String"],["字节","byte"],["字","word"]]), "static_variate_value")
        .appendField("并赋值");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff9966");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_define_static_local_variate_1= {
  init: function() { 
  this.appendValueInput("static_variate_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldTextInput("state2"), "static_variate_name")
      .appendField("赋值为");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#ff9966");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_define_static_local_variate_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextInput("state2"), "static_variate_name");
  this.setOutput(true, null);
  this.setColour("#ff9966");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_define_local_variate= {
  init: function() { 
  this.appendValueInput("local_variate_data")
      .setCheck(null)  
      .appendField("声明 局部变量")
      .appendField(new Blockly.FieldTextInput("state"), "local_variate_name")
      .appendField("为")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["布尔","boolean"],["字符","char"],["无符号字符","unsigned char"],["char *","char *"],["字符串","String"],["字节","byte"],["字","word"]]), "local_variate_type")
      .appendField("并赋值");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#ff6666");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_define_local_variate_0= {
  init: function() { 
  this.appendDummyInput() 
      .appendField("声明 局部变量")
      .appendField(new Blockly.FieldTextInput("state"), "local_variate_name")
      .appendField("为")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["布尔","boolean"],["字符","char"],["无符号字符","unsigned char"],["char *","char *"],["字符串","String"],["字节","byte"],["字","word"]]), "local_variate_type")
      .appendField("");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#ff6666");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_define_local_variate_1= {
  init: function() { 
  this.appendValueInput("local_variate_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldTextInput("state"), "local_variate_name")
      .appendField("赋值为");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#ff6666");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_define_local_variate_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextInput("state"), "local_variate_name");
  this.setOutput(true, null);
  this.setColour("#ff6666");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_define_local_variate_3= {
  init: function() { 
  this.appendValueInput("local_variate_data")
      .setCheck(null)  
      .appendField("")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["布尔","boolean"],["字符","char"],["无符号字符","unsigned char"],["char *","char *"],["字符串","String"],["字节","byte"],["字","word"]]), "local_variate_type")
      .appendField(new Blockly.FieldTextInput("state"), "local_variate_name")
      .appendField("赋值为");
  this.setOutput(true, null);
  this.setColour("#ff6666");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_define_local_variate_4= {
  init: function() { 
  this.appendValueInput("local_variate_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldTextInput("state"), "local_variate_name")
      .appendField("赋值为");
  this.setOutput(true, null);
  this.setColour("#ff6666");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//do-while循环
Blockly.Blocks.make_do_while= {
  init: function() { 
  this.appendStatementInput("input_data")
      .setCheck(null)  
      .appendField("执行");
  this.appendValueInput("select_data")
      .setCheck(null)  
      .appendField("重复")
      .appendField(new Blockly.FieldDropdown([["满足条件","true"],["不满足条件","false"]]), "type");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(120);
  this.setTooltip("do-while循环");
  this.setHelpUrl("");
  }
  /*,
  onchange: function() {
    var dropdown_type = this.getFieldValue('type');
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    if(dropdown_type != 'return')  
    {
      var legal = false;
      // Is the block nested in a control statement?
      var block = this;
      do {
        if (block.type == 'controls_repeat' ||
          block.type == 'controls_forEach' ||
          block.type == 'controls_for' ||
          block.type == 'controls_whileUntil') {
          legal = true;
        break;
      }
      block = block.getSurroundParent();
      } while (block);
      if (legal) {
        this.setWarningText(null);
      } else {
        this.setWarningText(Blockly.LANG_CONTROLS_FLOW_STATEMENTS_WARNING);
      }
    }
  }*/
};

//for
Blockly.Blocks.make_for= {
  init: function() { 
  this.appendValueInput("variate")
      .setCheck(null)  
      .appendField("for(");
  this.appendValueInput("judge")
      .setCheck(null)  
      .appendField(";");
  this.appendValueInput("operation")
      .setCheck(null)  
      .appendField(";");
  this.appendDummyInput()  
      .appendField(")");
  this.appendStatementInput("do")
      .setCheck(null)  
      .appendField("执行");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(120);
  this.setTooltip("for循环");
  this.setHelpUrl("");
  }
};

//return;
Blockly.Blocks.make_return= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["返回","return"],["跳出循环","break"],["跳到下一个循环","continue"]]), "type");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(120);
  this.setTooltip("return、break、continue");
  this.setHelpUrl("");
  }
};

//return+data
Blockly.Blocks.make_return_with_data= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField("返回");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(120);
  this.setTooltip("return data;");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.lists_create_with_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("初始化数组为 ")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["char *","char *"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[")
      .appendField(new Blockly.FieldTextInput("3"), "lists_create_length")
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.lists_create_with_1_change1= {
  init: function() { 
  this.appendValueInput("list_data")
      .setCheck(null)  
      .appendField("初始化数组为 ")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["char *","char *"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[");
  this.appendDummyInput()  
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.part_lists_create_with_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("创建局部数组为 ")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["char *","char *"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[")
      .appendField(new Blockly.FieldTextInput("3"), "lists_create_length")
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.part_lists_create_with_1_change1= {
  init: function() { 
  this.appendValueInput("list_data")
      .setCheck(null)  
      .appendField("创建局部数组为 ")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["char *","char *"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[");
  this.appendDummyInput()  
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.char_lists_create_with_1= {
  init: function() { 
  this.appendValueInput("list_data")
      .setCheck(null)  
      .appendField("初始化数组为 ")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["char *","char *"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[")
      .appendField("]并赋值");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.part_char_lists_create_with_1= {
  init: function() { 
  this.appendValueInput("list_data")
      .setCheck(null)  
      .appendField("创建局部数组为 ")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["char *","char *"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[")
      .appendField("]并赋值");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.part_lists_create_with = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["char *","char *"],["字符串","String"]]), "TYPE")
    .appendField(' ')
    .appendField(new Blockly.FieldTextInput('mylist'), 'VAR')
    .appendField('[')
    .appendField(']');
    this.itemCount_ = 3;
    this.updateShape_();
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
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
    Blockly.Block.obtain(workspace, 'lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'lists_create_with_item');
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
      .appendField("创建为空局部数组");
    } else {
      for (var i = 0; i < this.itemCount_; i++) {
        var input = this.appendValueInput('ADD' + i);
        if (i == 0) {
          input.appendField("创建局部数组为");
        }
      }
    }
  }
};

Blockly.Blocks['part_lists_create_with_text'] = {
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["char *","char *"],["字符串","String"]]), "TYPE")
    .appendField(' ')
    .appendField(new Blockly.FieldTextInput('mylist'), 'VAR')
    .appendField('[')
    .appendField(new Blockly.FieldTextInput("3"), "lists_num")
    .appendField(']')
    .appendField("从字符串")
    .appendField(this.newQuote_(true))
    .appendField(new Blockly.FieldTextInput('0,0,0'), 'TEXT')
    .appendField(this.newQuote_(false))
    .appendField("创建局部数组");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
  },
  newQuote_: function(open) {
    if (open == this.RTL) {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
    } else {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
    }
    return new Blockly.FieldImage(file, 12, 12, '"');
  }
};

Blockly.Blocks.lists_with_1_get_data= {
  init: function() { 
  this.appendValueInput("lists_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldTextInput("mylist"), "list_name")
      .appendField("[");
  this.appendDummyInput()  
      .appendField("]");
  this.appendValueInput("lists_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("赋值为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.lists_with_1_return_data= {
  init: function() { 
  this.appendValueInput("lists_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldTextInput("mylist"), "list_name")
      .appendField("[");
  this.appendDummyInput()  
      .appendField("]");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.lists_create_with_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("初始化二维数组为 ")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["char *","char *"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[")
      .appendField(new Blockly.FieldTextInput("3"), "lists_create_length_1")
      .appendField("][")
      .appendField(new Blockly.FieldTextInput("3"), "lists_create_length_2")
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.lists_create_with_2_change1= {
  init: function() { 
  this.appendValueInput("lists_data1")
      .setCheck(null)  
      .appendField("初始化二维数组为 ")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["char *","char *"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[");
  this.appendValueInput("lists_data2")
      .setCheck(null)  
      .appendField("][");
  this.appendDummyInput()  
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(240);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.part_lists_create_with_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("创建局部二维数组为 ")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["char *","char *"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[")
      .appendField(new Blockly.FieldTextInput("3"), "lists_create_length_1")
      .appendField("][")
      .appendField(new Blockly.FieldTextInput("3"), "lists_create_length_2")
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.part_lists_create_with_2_change1= {
  init: function() { 
  this.appendValueInput("lists_data1")
      .setCheck(null)  
      .appendField("创建局部二维数组为 ")
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["char *","char *"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[");
  this.appendValueInput("lists_data2")
      .setCheck(null)  
      .appendField("][");
  this.appendDummyInput()  
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(240);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.lists_create_with_2_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("初始化二维数组为");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[ ][ ]");
  this.appendStatementInput("lists_with_2_1_data")
      .setCheck(null)  
      .appendField("并赋值");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.part_lists_create_with_2_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("创建局部二维数组为");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[ ][ ]");
  this.appendStatementInput("lists_with_2_1_data")
      .setCheck(null)  
      .appendField("并赋值");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.lists_create_with_2_1_new_2019_10_18= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("初始化二维数组为");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[")
      .appendField(new Blockly.FieldTextInput("3"), "lists_num_1")
      .appendField("][")
      .appendField(new Blockly.FieldTextInput("3"), "lists_num_2")
      .appendField("]");
  this.appendStatementInput("lists_with_2_1_data")
      .setCheck(null)  
      .appendField("并赋值");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.part_lists_create_with_2_1_new_2019_10_18= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("创建局部二维数组为");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["字符","char"],["字节","byte"],["字符串","String"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[")
      .appendField(new Blockly.FieldTextInput("3"), "lists_num_1")
      .appendField("][")
      .appendField(new Blockly.FieldTextInput("3"), "lists_num_2")
      .appendField("]");
  this.appendStatementInput("lists_with_2_1_data")
      .setCheck(null)  
      .appendField("并赋值");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.lists_create_with_2_1_get_data = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput("");
    this.itemCount_ = 3;
    this.updateShape_();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setMutator(new Blockly.Mutator(['lists_create_with_2_create_with_item']));
    this.setTooltip("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'lists_create_with_2_1') 
    {
      this.setWarningText(null);
    }
    else if(surround_parent && surround_parent.type == 'part_lists_create_with_2_1') 
    {
      this.setWarningText(null);
    }
    else if(surround_parent && surround_parent.type == 'lists_create_with_2_1_new_2019_10_18') 
    {
      this.setWarningText(null);
    }
    else if(surround_parent && surround_parent.type == 'part_lists_create_with_2_1_new_2019_10_18') 
    {
      this.setWarningText(null);
    }
    else 
    {
      this.setWarningText("此块需放到 创建二维数组 图形块下面");
    }
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
    Blockly.Block.obtain(workspace, 'lists_create_with_2_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'lists_create_with_2_create_with_item');
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
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("");
    } else {
      for (var i = 0; i <= this.itemCount_; i++) {
        
        if (i > 0 && i< this.itemCount_) {
          var input = this.appendValueInput('ADD' + i);
          input.setAlign(Blockly.ALIGN_RIGHT)
          input.appendField(",");
        }
        if(i == 0)
        {
          var input = this.appendValueInput('ADD' + i);
          input.setAlign(Blockly.ALIGN_RIGHT);
          input.appendField("{");
        }
        else if(i == this.itemCount_)
        {
          var input = this.appendDummyInput('ADD' + i);
          input.setAlign(Blockly.ALIGN_RIGHT);
          input.appendField("}");
          /*
          var thisblock = this;
          var parent = thisblock.getParent();
          if(parent && thisblock.nextConnection)
          {
            var input = this.appendDummyInput('ADD' + i);
            input.setAlign(Blockly.ALIGN_RIGHT);
            input.appendField("},");
          }
          else
          {
            var input = this.appendDummyInput('ADD' + i);
            input.setAlign(Blockly.ALIGN_RIGHT);
            input.appendField("}");
          }
          */
        }
      }
    }
  }
};

Blockly.Blocks['lists_create_with_2_create_with_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['lists_create_with_2_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("文本");
    this.appendStatementInput('STACK');
    this.setTooltip("");
    this.contextMenu = false;
  }
};

//获取二维数组的行数与列数
Blockly.Blocks.lists_with_2_get_length= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("二维数组")
      .appendField(new Blockly.FieldTextInput("mylist"), "list_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["行数","row"],["列数","col"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(240);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.lists_with_2_get_data= {
  init: function() { 
  this.appendValueInput("lists_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldTextInput("mylist"), "list_name")
      .appendField("[");
  this.appendDummyInput()  
      .appendField("]");
  this.appendValueInput("lists_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("[");
  this.appendDummyInput()  
      .appendField("]");
  this.appendValueInput("lists_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("赋值为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.lists_with_2_return_data= {
  init: function() { 
  this.appendValueInput("lists_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldTextInput("mylist"), "list_name")
      .appendField("[");
  this.appendDummyInput()  
      .appendField("]");
  this.appendValueInput("lists_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("[");
  this.appendDummyInput()  
      .appendField("]");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(Blockly.Blocks.lists.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//变量定义
Blockly.Blocks.make_arduino_variate= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["整数","int"],["无符号整数","unsigned int"],["长整数","long"],["无符号长整数","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["单精度浮点数","float"],["双精度浮点数","double"],["布尔","boolean"],["字符","char"],["无符号字符","unsigned char"],["字符串","String"],["字节","byte"],["字","word"]]), "variate_type");
  this.setOutput(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//获取某个变量在内存中所占用的字节数
Blockly.Blocks.math_sizeof= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField("获取字节数");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip(
    "1.功能:\n"
   +"->以字节形式返回某个操作数的储存大小\n"
   +"2.语法:\n"
   +"->sizeof()\n"
   +"3.返回值:\n"
   +"常见:\n"
   +"->2 - 整数\n"
   +"->2 - 无符号整数\n"
   +"->4 - 长整数\n"
   +"->4 - 无符号长整数\n"
   +"->1 - uint8_t\n"
   +"->2 - uint16_t\n"
   +"->4 - uint32_t\n"
   +"->8 - uint64_t\n"
   +"->4 - 单精度浮点数\n"
   +"->4 - 双精度浮点数\n"
   +"->1 - 布尔\n"
   +"->1 - 字符\n"
   +"->1 - 无符号字符\n"
   +"->6 - 字符串\n"
   +"->1 - 字节\n"
   +"->2 - 字"
    );
  this.setHelpUrl("");
  }
};

/*
//取反
Blockly.Blocks.math_negation= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField("取反");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip("~");
  this.setHelpUrl("");
  }
};
*/

//加法
Blockly.Blocks.math_add = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([["连加","+"],["连减","-"],["连乘","×"],["连除","÷"]]), "math_add_type");
    this.itemCount_ = 3;
    this.updateShape_();
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setMutator(new Blockly.Mutator(['math_add_create_with_item']));
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
    Blockly.Block.obtain(workspace, 'math_add_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'math_add_create_with_item');
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
      this.appendDummyInput('EMPTY');
    } else {
      for (var i = 0; i < this.itemCount_; i++) {
        var input = this.appendValueInput('ADD' + i);
        if (i > 0) {
          var dropdown_math_add_type = this.getFieldValue('math_add_type');
          if(dropdown_math_add_type == '+')
          {
            input.setAlign(Blockly.ALIGN_RIGHT);
            input.appendField("+");
          }
          else if (dropdown_math_add_type == '-') 
          {
            input.setAlign(Blockly.ALIGN_RIGHT);
            input.appendField("-");
          }
          else if (dropdown_math_add_type == '×') 
          {
            input.setAlign(Blockly.ALIGN_RIGHT);
            input.appendField("×");
          }
          else
          {
            input.setAlign(Blockly.ALIGN_RIGHT);
            input.appendField("÷");
          }
        }
      }
    }
  }
};

Blockly.Blocks['math_add_create_with_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['math_add_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
        .appendField("文本");
    this.appendStatementInput('STACK');
    this.setTooltip("");
    this.contextMenu = false;
  }
};

Blockly.Blocks.math_operation= {
  init: function() { 
  this.appendValueInput("math_operation_output")
      .setCheck(null);
  this.appendValueInput("math_operation_input")
      .setCheck(null)  
      .appendField(new Blockly.FieldDropdown([["+=","+="],["-=","-="],["*=","*="],["/=","/="],["%=","%="]]), "math_operation_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.math_auto_add_minus= {
  init: function() { 
  this.appendValueInput("math_auto_add_minus_output")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["++","++"],["--","--"]]), "math_auto_add_minus_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.math_operation_1= {
  init: function() { 
  this.appendValueInput("math_operation_output")
      .setCheck(null);
  this.appendValueInput("math_operation_input")
      .setCheck(null)  
      .appendField(new Blockly.FieldDropdown([["+=","+="],["-=","-="],["*=","*="],["/=","/="],["%=","%="]]), "math_operation_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.math_auto_add_minus_1= {
  init: function() { 
  this.appendValueInput("math_auto_add_minus_output")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["++","++"],["--","--"]]), "math_auto_add_minus_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.math_map_float= {
  init: function() { 
  this.appendValueInput("x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("映射(小数)");
  this.appendValueInput("in_min")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("从 [");
  this.appendValueInput("in_max")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(",");
  this.appendValueInput("out_min")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("] 到 [");
  this.appendValueInput("out_max")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(",");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("]");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip(
      "1.功能:\n"
     +"->将一个小数从第一个区间映射到第二个区间，并返回映射之后的值，返回数据的类型为float\n"
     +"2.语法:\n"
     +"->float mapfloat(float x, float in_min, float in_max, float out_min, float out_max)\n"
     +"3.参数:\n"
     +"->x:输入的待映射的值\n"
     +"->in_min:输入区间上的最小值\n"
     +"->in_max:输入区间上的最大值\n"
     +"->out_min:输出区间上的最小值\n"
     +"->out_max:输出区间上的最大值\n"
     +"4.返回值:float型数据(映射之后的值)"
      );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.math_matrix= {
  init: function() { 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/矩阵运算.png", 25, 25, "*"))
      .appendField("矩阵运算 ");
  this.appendValueInput("output_matrix")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("=");
  this.appendValueInput("input_matrix_1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("input_matrix_1_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("[");
  this.appendValueInput("input_matrix_1_y")
      .setCheck(null)  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("][");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("]")
      .appendField(new Blockly.FieldDropdown([["+","+"],["-","-"],["×","×"]]), "math_matrix_type");
  this.appendValueInput("input_matrix_2")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("input_matrix_2_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("[");
  this.appendValueInput("input_matrix_2_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("][");
  this.appendDummyInput()  
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip(
    "1.功能:\n"
   +"->一个矩阵与另一个矩阵进行加、减、乘运算\n"
   +"2.语法:\n"
   +"->加 - void Add(float* A, float* B, int m, int n, float* C);\n"
   +"->减 - void Subtract(float* A, float* B, int m, int n, float* C);\n"
   +"->乘 - void Multiply(float* A, float* B, int m, int p, int n, float* C);\n"
   +"3.参数:\n"
   +"->A:矩阵运算的第一个矩阵\n"
   +"->B:矩阵运算的第二个矩阵\n"
   +"->m:矩阵A的行数\n"
   +"->p:矩阵B的行数&矩阵A的列数\n"
   +"->n:矩阵B的列数\n"
   +"->C:矩阵运算后的输出矩阵\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.math_matrix_Scale= {
  init: function() { 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/矩阵运算.png", 25, 25, "*"))
      .appendField("矩阵乘法 ");
  this.appendValueInput("input_matrix_1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("input_matrix_1_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("[");
  this.appendValueInput("input_matrix_1_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("][");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("] ×");
  this.appendValueInput("input_matrix_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip(
    "1.功能:\n"
   +"->矩阵与一个数做乘法运算\n"
   +"2.语法:\n"
   +"->void Scale(float* A, int m, int n, float k);\n"
   +"3.参数:\n"
   +"->A:输入矩阵&输出矩阵\n"
   +"->m:矩阵A的行数\n"
   +"->n:矩阵A的列数\n"
   +"->k:矩阵所乘的一个系数\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.math_matrix_copy= {
  init: function() { 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/矩阵运算.png", 25, 25, "*"))
      .appendField("矩阵复制 ");
  this.appendValueInput("output_matrix")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" = ");
  this.appendValueInput("input_matrix_1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("input_matrix_1_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("[");
  this.appendValueInput("input_matrix_1_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("][");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip(
    "1.功能:\n"
   +"->将一个矩阵中的数据拷贝到另一个矩阵\n"
   +"2.语法:\n"
   +"->void Copy(float* A, int n, int m, float* B);\n"
   +"3.参数:\n"
   +"->A:输入矩阵\n"
   +"->m:矩阵A的行数\n"
   +"->n:矩阵A的列数\n"
   +"->B:输出矩阵\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.math_matrix_Transpose= {
  init: function() { 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/矩阵运算.png", 25, 25, "*"))
      .appendField("矩阵转置 ");
  this.appendValueInput("output_matrix")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" = ");
  this.appendValueInput("input_matrix_1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("input_matrix_1_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("[");
  this.appendValueInput("input_matrix_1_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("][");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("]的转置");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip(
    "1.功能:\n"
   +"->将一个矩阵转置后赋值给另一个矩阵\n"
   +"2.语法:\n"
   +"->void Transpose(float* A, int m, int n, float* C);\n"
   +"3.参数:\n"
   +"->A:输入矩阵\n"
   +"->m:矩阵A的行数\n"
   +"->n:矩阵A的列数\n"
   +"->C:输出矩阵\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.math_matrix_Invert= {
  init: function() { 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/矩阵运算.png", 25, 25, "*"))
      .appendField("矩阵求逆 ");
  this.appendValueInput("input_matrix_1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("input_matrix_1_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("[");
  this.appendValueInput("input_matrix_1_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("][");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip(
    "1.功能:\n"
   +"->求一个矩阵的逆矩阵\n"
   +"2.语法:\n"
   +"->int Invert(float* A, int n);\n"
   +"3.参数:\n"
   +"->A:输入矩阵&输出矩阵\n"
   +"->n:矩阵A的行数&列数\n"
   +"4.返回值:int型数据(不使用返回值)\n"
   +"->0 - 该矩阵为奇异矩阵，无法求逆矩阵\n"
   +"->1 - 求解完成"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.math_matrix_Invert_change_2020_01_15= {
  init: function() { 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/矩阵运算.png", 25, 25, "*"))
      .appendField("矩阵求逆 ");
  this.appendValueInput("input_matrix_1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("input_matrix_1_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("[");
  this.appendValueInput("input_matrix_1_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("][");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("]");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("返回结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(240);
  this.setTooltip(
    "1.功能:\n"
   +"->求一个矩阵的逆矩阵，返回数据的类型为int\n"
   +"2.语法:\n"
   +"->int Invert(float* A, int n);\n"
   +"3.参数:\n"
   +"->A:输入矩阵&输出矩阵\n"
   +"->n:矩阵A的行数&列数\n"
   +"4.返回值:int型数据\n"
   +"->0 - 该矩阵为奇异矩阵，无法求逆矩阵\n"
   +"->1 - 求解完成"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.math_matrix_Print= {
  init: function() { 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/矩阵运算.png", 25, 25, "*"))
      .appendField("打印矩阵 ");
  this.appendValueInput("matrix_Print_data")
      .setCheck(null)  
      .appendField("注释信息:");
  this.appendValueInput("input_matrix_1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" ");
  this.appendValueInput("input_matrix_1_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("[");
  this.appendValueInput("input_matrix_1_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("][");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.math.HUE);
  this.setTooltip(
    "1.功能:\n"
   +"->串口打印某个矩阵中的数据\n"
   +"2.语法:\n"
   +"->void Print(float* A, int m, int n, String label);\n"
   +"3.参数:\n"
   +"->A:需要打印的矩阵\n"
   +"->m:矩阵A的行数\n"
   +"->n:矩阵A的列数\n"
   +"->label:对于矩阵A的注释信息\n"
   +"4.返回值:无"
   );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.link_text = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput("")
    .appendField('连接字符串 ');
    this.itemCount_ = 3;
    this.updateShape_();
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setMutator(new Blockly.Mutator(['link_text_create_with_item']));
    this.setTooltip("将几个字符串拼接成一个字符串");
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
    Blockly.Block.obtain(workspace, 'link_text_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'link_text_create_with_item');
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
      .appendField("无需要连接的字符串");
    } else {
      for (var i = 0; i < this.itemCount_; i++) {
        var input = this.appendValueInput('ADD' + i);
        if (i > 0) {
          input.setAlign(Blockly.ALIGN_RIGHT)
          input.appendField("+");
        }
      }
    }
  }
};

Blockly.Blocks['link_text_create_with_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['link_text_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput()
        .appendField("文本");
    this.appendStatementInput('STACK');
    this.setTooltip("");
    this.contextMenu = false;
  }
};

Blockly.Blocks.text_equalsIgnoreCase= {
  init: function() { 
  this.appendValueInput("text_equalsIgnoreCase_str1")
      .setCheck(null);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("比较");
  this.appendValueInput("text_equalsIgnoreCase_str2")
      .setCheck(null);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("(忽略大小写)");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(160);
  this.setTooltip("如果左边字符串与右边字符串相符(不限制大小写)，就返回TRUE");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.text_indexOf= {
  init: function() { 
  this.appendValueInput("text_indexOf_input_str1")
      .setCheck(null);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("返回");
  this.appendValueInput("text_indexOf_input_str2")
      .setCheck(null);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("的索引");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(160);
  this.setTooltip("返回提供的字符或字符串的索引，如果没有就返回-1");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.text_indexOf_1= {
  init: function() { 
  this.appendValueInput("text_indexOf_input_str1")
      .setCheck(null);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("从第");
  this.appendValueInput("text_indexOf_limit")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("个字符")
      .appendField(new Blockly.FieldDropdown([["向后查找","ahead"],["向前查找","back"]]), "text_indexOf_1_type")
      .appendField("  返回");
  this.appendValueInput("text_indexOf_input_str2")
      .setCheck(null);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("的索引");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(160);
  this.setTooltip("返回提供的字符或字符串的索引，如果没有就返回-1");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.text_setCharAt= {
  init: function() { 
  this.appendValueInput("text_setCharAt_input_data")
      .setCheck(null);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("中索引为");
  this.appendValueInput("text_setCharAt_find_data")
      .setCheck(null);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("的字符替换为");
  this.appendValueInput("text_setCharAt_replace_data")
      .setCheck(null);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(160);
  this.setTooltip("替换字符串中某个索引处的字符");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.text_toCharArray= {
  init: function() { 
  this.appendValueInput("text_toCharArray_input_data")
      .setCheck(null);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("正向取");
  this.appendValueInput("text_toCharArray_get_data")
      .setCheck(null);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("个字符 复制到字符数组");
  this.appendValueInput("text_toCharArray_output_data")
      .setCheck(null);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(160);
  this.setTooltip("从字符串0长度开始到给定的缓冲长度拷贝");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.text_substring_1= {
  init: function() { 
  this.appendValueInput("text_substring_input")
      .setCheck(null);
  this.appendValueInput("text_substring_select")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("返回自索引");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("开始之后的字符串");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(160);
  this.setTooltip("返回字符串中从某个索引开始之后的字符串");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_Split_string= {
  init: function() { 
  this.appendValueInput("Split_string_data")
      .setCheck(null)  
      .appendField("获取字符串");
  this.appendValueInput("Split_string_char")
      .setCheck(null)  
      .appendField("中字符");
  this.appendDummyInput()  
      .appendField("的")
      .appendField(new Blockly.FieldDropdown([["之前部分","true"],["之后部分","false"]]), "Split_string_front");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(160);
  this.setTooltip("返回字符串中某个字符之前或之后的字符串");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_String_Left= {
  init: function() { 
  this.appendValueInput("String_Left_data")
      .setCheck(null)  
      .appendField("截取字符串");
  this.appendValueInput("String_Left_char")
      .setCheck(null)  
      .appendField(" 从开始到第");
  this.appendDummyInput()  
      .appendField("个字符");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(160);
  this.setTooltip("截取字符串");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_search_i2c= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_6.png", 25, 25, "*"))
      .appendField("快速寻找设备的I2C地址（单独使用）");
  this.setInputsInline(true);
  this.setColour(140);
  this.setTooltip(
    "快速寻找设备的I2C地址（单独使用），串口输出获取的地址\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_i2c_begin_master= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_1.png", 20, 20, "*"))
      .appendField("初始化I2C 设备做主机");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化Wire库，并以Master(主机)的形式加入到I2C网络，只能调用一次\n"
   +"2.语法:\n"
   +"->void begin();\n"
   +"3.参数:无\n"
   +"4.返回值:无\n"
   +"5.I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_i2c_begin_slave= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_1.png", 20, 20, "*"))
      .appendField("初始化I2C 设备做从机");
  this.appendValueInput("i2c_address")
      .setCheck(null)  
      .appendField("地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化Wire库，并以Slaver(从机)的形式加入到I2C网络，只能调用一次\n"
   +"2.语法:\n"
   +"->void begin(uint8_t address);\n"
   +"3.参数:\n"
   +"->address:7位的器件地址(可选)\n"
   +"4.返回值:无\n"
   +"5.I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_i2c_begin_end_transmission= {
  init: function() { 
  this.appendDummyInput()  
      //.appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_1.png", 20, 20, "*"))
      .appendField("I2C发送数据");
  this.appendValueInput("i2c_address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("设备地址");
  this.appendStatementInput("transmission_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->I2C发送数据\n"
   +"2.语法:\n"
   +"->void beginTransmission(uint8_t address);\n"
   +"->添加数据\n"
   +"->uint8_t endTransmission(void);\n"
   +"3.参数:\n"
   +"->address:7位的器件地址(可选)\n"
   +"4.返回值:uint8_t型数据"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_i2c_begin_transmission= {
  init: function() { 
  this.appendValueInput("i2c_address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_1.png", 20, 20, "*"))
      .appendField("I2C开启数据发送")
      .appendField("地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->I2C开启数据发送，发送一个I2C开始字符\n"
   +"2.语法:\n"
   +"->void beginTransmission(uint8_t address);\n"
   +"3.参数:\n"
   +"->address:7位的器件地址(可选)\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_i2c_write= {
  init: function() { 
  this.appendValueInput("i2c_write_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_1.png", 20, 20, "*"))
      .appendField("I2C发送");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->I2C发送数据\n"
   +"2.语法:\n"
   +"->Wire.write(value);\n"
   +"或\n"
   +"->Wire.write(String);\n"
   +"3.参数:\n"
   +"->value:发送单字节\n"
   +"->String:发送字符串"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_i2c_end_transmission_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_1.png", 20, 20, "*"))
      .appendField("I2C结束数据发送")
      .appendField("");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->结束一个由beginTransmission()开始的并且由write()排列的从机的传输\n"
   +"2.语法:\n"
   +"->uint8_t endTransmission(void);\n"
   +"3.参数:无\n"
   +"4.返回值:uint8_t型数据(不使用返回值)\n"
   +"->0 - 成功\n"
   +"->1 - 数据溢出\n"
   +"->2 - 发送地址时从机接收到NACK\n"
   +"->3 - 发送数据时接收到NACK\n"
   +"->4 - 其他错误"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_i2c_end_transmission= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_1.png", 20, 20, "*"))
      .appendField("I2C结束数据发送 返回发送结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->结束一个由beginTransmission()开始的并且由write()排列的从机的传输\n"
   +"2.语法:\n"
   +"->uint8_t endTransmission(void);\n"
   +"3.参数:无\n"
   +"4.返回值:uint8_t型数据\n"
   +"->0 - 成功\n"
   +"->1 - 数据溢出\n"
   +"->2 - 发送地址时从机接收到NACK\n"
   +"->3 - 发送数据时接收到NACK\n"
   +"->4 - 其他错误"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_i2c_onReceive= {
  init: function() { 
  this.appendDummyInput()  
      //.appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_1.png", 20, 20, "*"))
      .appendField("I2C从机收到数据");
  this.appendValueInput("onReceive_length")
      .setCheck(null)  
      .appendField("字节数");
  this.appendStatementInput("i2c_onReceive_data")
      .setCheck(null)  
      .appendField("执行");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->从机接收到主机发来的数据时，执行此事件\n"
   +"2.语法:\n"
   +"->void onReceive( void (*)(int data) );\n"
   +"3.参数:\n"
   +"->data:从机接收到的数据的字节数"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_i2c_available= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_1.png", 20, 20, "*"))
      .appendField("I2C有数据可读？");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->用于统计主机读取从机发来数据时read缓冲区剩余的字节数\n"
   +"2.语法:\n"
   +"->virtual int available(void);\n"
   +"3.参数:无\n"
   +"4.返回值:int型数据"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_i2c_read= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_1.png", 20, 20, "*"))
      .appendField("I2C读取数据");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->用于在主机收到从机发来数据时，读取缓存区的数据\n"
   +"2.语法:\n"
   +"->virtual int read(void);\n"
   +"3.参数:无\n"
   +"4.返回值:int型数据"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_i2c_requestFrom= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_1.png", 20, 20, "*"))
      .appendField("I2C主机请求从机发送数据");
  this.appendValueInput("i2c_address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("地址");
  this.appendValueInput("data_length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("字节数");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->I2C主机请求从机一些字节的数据，这些字节可以被主机用read()或available()接收\n"
   +"2.语法:\n"
   +"->uint8_t requestFrom(int address, int length);\n"
   +"3.参数:\n"
   +"->address:7位的器件地址(可选)\n"
   +"->length:主机向从机请求数据的字节数\n"
   +"4.返回值:uint8_t型数据(不使用返回值)"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_i2c_onRequest= {
  init: function() { 
  this.appendDummyInput()  
      //.appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_1.png", 20, 20, "*"))
      .appendField("I2C从机收到主机数据请求");
  this.appendStatementInput("i2c_onRequest_data")
      .setCheck(null)  
      .appendField("执行");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->当I2C从机收到主机的数据请求时，执行此事件\n"
   +"2.语法:\n"
   +"->void onRequest( void (*)(void) );\n"
   +"3.参数:无\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_spi_begin_master= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_2.png", 20, 20, "*"))
      .appendField("初始化SPI")
      .appendField("设备做主机 SPI时钟分频器设为")
      .appendField(new Blockly.FieldDropdown([["DIV2","2"],["DIV4","4"],["DIV8","8"],["DIV16","16"],["DIV32","32"],["DIV64","64"],["DIV128","128"]]), "spi_begin_divider");
  this.appendValueInput("spi_slave_pin")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 从机管脚#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    //"1.功能:\n"
    "初始化SPI通信，设备做主机\n"
   //+"2.语法:\n"
   //+"static void begin();\n"
   //+"inline static void setClockDivider(uint8_t clockDiv)\n"
   //+"3.参数:\n"
   //+"clockDiv:"
   //+"4.返回值:无"
   +"SPI接线:\n"
   +"①Arduino Uno:\n"
   +"->MOSI - 11\n"
   +"->MISO - 12\n"
   +"->SCK - 13\n"
   +"②Arduino Mega2560:\n"
   +"->MOSI - 51\n"
   +"->MISO - 50\n"
   +"->SCK - 52\n"
   +"③Arduino Leonardo:\n"
   +"->MOSI - ICSP-4\n"
   +"->MISO - ICSP-1\n"
   +"->SCK - ICSP-3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_spi_begin_slave= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_2.png", 20, 20, "*"))
      .appendField("初始化SPI")
      .appendField("设备做从机");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "初始化SPI通信，设备做从机\n"
   +"SPI接线:\n"
   +"①Arduino Uno:\n"
   +"->MOSI - 11\n"
   +"->MISO - 12\n"
   +"->SCK - 13\n"
   +"②Arduino Mega2560:\n"
   +"->MOSI - 51\n"
   +"->MISO - 50\n"
   +"->SCK - 52\n"
   +"③Arduino Leonardo:\n"
   +"->MOSI - ICSP-4\n"
   +"->MISO - ICSP-1\n"
   +"->SCK - ICSP-3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_spi_transfer= {
  init: function() { 
  this.appendValueInput("slave_pin")
      .setCheck(null)  
      //.appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_2.png", 20, 20, "*"))
      .appendField("SPI发送数据 从机管脚#");
  this.appendStatementInput("transfer_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("SPI主机向从机发送数据");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_spi_transfer_1= {
  init: function() { 
  this.appendValueInput("transfer_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_2.png", 20, 20, "*"))
      .appendField("SPI发送");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("SPI发送数据");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_spi_transfer_2= {
  init: function() { 
  this.appendValueInput("transfer_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_2.png", 20, 20, "*"))
      .appendField("SPI发送");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 返回接收值");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("SPI发送数据并返回接收到的数据");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_spi_slave_interrupt= {
  init: function() { 
  this.appendValueInput("slave_interrupt_input")
      .setCheck(null)  
      //.appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_2.png", 20, 20, "*"))
      .appendField("SPI从机收到数据 获取寄存器数据");
  this.appendStatementInput("slave_interrupt_data")
      .setCheck(null)  
      .appendField("执行");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("SPI从机收到数据时，执行此事件");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_spi_slave_receive= {
  init: function() { 
  this.appendValueInput("slave_receive_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_2.png", 20, 20, "*"))
      .appendField("SPI从机获取寄存器数据");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("SPI从机获取寄存器中的数据");
  this.setHelpUrl("");
  }
};

//鼠标模拟开启或关闭
Blockly.Blocks.make_arduino_mouse_begin_end= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/键盘鼠标/鼠标_2.png", 20, 20, "*"))
      .appendField("USB鼠标模拟")
      .appendField(new Blockly.FieldDropdown([["开启","begin"],["关闭","end"]]), "type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->USB鼠标模拟开启或关闭\n"
   +"2.语法:\n"
   +"->开启 - void begin(void);\n"
   +"->关闭 - void end(void);\n"
   +"3.参数:无\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//操作鼠标，单击、按下、释放鼠标按键
Blockly.Blocks.make_arduino_mouse_click= {
  init: function() { 
  this.appendValueInput("click_location")
      .setCheck(null) 
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/键盘鼠标/鼠标_2.png", 20, 20, "*")) 
      .appendField(new Blockly.FieldDropdown([["点击","click"],["按下","press"],["释放","release"]]), "click_type")
      .appendField("鼠标");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->操作鼠标，单击、按下、释放鼠标按键\n"
   +"2.语法:\n"
   +"->单击 - void click(uint8_t b = MOUSE_LEFT);\n"
   +"->按下 - void press(uint8_t b = MOUSE_LEFT);\n"
   +"->释放 - void release(uint8_t b = MOUSE_LEFT);\n"
   +"3.参数:\n"
   +"b:鼠标上的某个按键\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//定义鼠标按键
Blockly.Blocks.make_arduino_mouse_click_location= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["左键","MOUSE_LEFT"],["中键","MOUSE_MIDDLE"],["右键","MOUSE_RIGHT"]]), "location_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip(
    "定义鼠标按键\n"
   +"左键 - MOUSE_LEFT - 1\n"
   +"右键 - MOUSE_RIGHT - 2\n"
   +"中键 - MOUSE_MIDDLE - 4\n"
   +"全部按键 - MOUSE_ALL - (MOUSE_LEFT | MOUSE_RIGHT | MOUSE_MIDDLE)\n"
    );
  this.setHelpUrl("");
  }
};

//移动鼠标
Blockly.Blocks.make_arduino_mouse_move= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/键盘鼠标/鼠标_2.png", 20, 20, "*"))
      .appendField("移动鼠标");
  this.appendValueInput("move_x")
      .setCheck(null)  
      .appendField("X偏移量");
  this.appendValueInput("move_y")
      .setCheck(null)  
      .appendField("Y偏移量");
  this.appendValueInput("move_wheel")
      .setCheck(null)  
      .appendField("滚轮偏移量");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->移动鼠标\n"
   +"2.语法:\n"
   +"->void move(signed char x, signed char y, signed char wheel = 0);\n"
   +"3.参数:\n"
   +"->x:横坐标方向上的偏移量\n"
   +"->y:纵坐标方向上的偏移量\n"
   +"->wheel:滚轮的偏移量\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//检测鼠标按键是否被按下
Blockly.Blocks.make_arduino_mouse_isPressed= {
  init: function() { 
  this.appendValueInput("type")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/键盘鼠标/鼠标_2.png", 20, 20, "*"))
      .appendField("鼠标");
  this.appendDummyInput()  
      .appendField("被按下？");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->检测鼠标某个按键是否被按下，返回数据的类型为boolean\n"
   +"2.语法:\n"
   +"->bool isPressed(uint8_t b = MOUSE_LEFT);\n"
   +"3.参数:\n"
   +"->b:鼠标上的某个按键\n"
   +"4.返回值:boolean型数据(按下|释放)"
    );
  this.setHelpUrl("");
  }
};

//键盘模拟开启或关闭
Blockly.Blocks.make_arduino_keyboard_begin_end= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/键盘鼠标/键盘_2.png", 20, 20, "*"))
      .appendField("USB键盘模拟")
      .appendField(new Blockly.FieldDropdown([["开启","begin"],["关闭","end"]]), "type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->USB键盘模拟开启或关闭\n"
   +"2.语法:\n"
   +"->开启 - void begin(void);\n"
   +"->关闭 - void end(void);\n"
   +"3.参数:无\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//定义键盘的按键类型
Blockly.Blocks.make_arduino_keyboard_key= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["左Ctrl键","KEY_LEFT_CTRL"],["左Shift键","KEY_LEFT_SHIFT"],["左ALT键","KEY_LEFT_ALT"],["左GUI键","KEY_LEFT_GUI"],["右Ctrl键","KEY_RIGHT_CTRL"],["右Shift键","KEY_RIGHT_SHIFT"],["右ALT键","KEY_RIGHT_ALT"],["右GUI键","KEY_RIGHT_GUI"],["方向键上","KEY_UP_ARROW"],["方向键下","KEY_DOWN_ARROW"],["方向键左","KEY_LEFT_ARROW"],["方向键右","KEY_RIGHT_ARROW"],["退格键","KEY_BACKSPACE"],["Tab键","KEY_TAB"],["Return(Enter)键","KEY_RETURN"],["Esc键","KEY_ESC"],["INSERT键","KEY_INSERT"],["Delete键","KEY_DELETE"],["PageUp键","KEY_PAGE_UP"],["PageDown键","KEY_PAGE_DOWN"],["Home键","KEY_HOME"],["End键","KEY_END"],["CapsLock键","KEY_CAPS_LOCK"],["F1键","KEY_F1"],["F2键","KEY_F2"],["F3键","KEY_F3"],["F4键","KEY_F4"],["F5键","KEY_F5"],["F6键","KEY_F6"],["F7键","KEY_F7"],["F8键","KEY_F8"],["F9键","KEY_F9"],["F10键","KEY_F10"],["F11键","KEY_F11"],["F12键","KEY_F12"]]), "key_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("定义键盘的按键类型");
  this.setHelpUrl("");
  }
};

//操作键盘，按下或释放某个按键
Blockly.Blocks.make_arduino_keyboard_press= {
  init: function() { 
  this.appendValueInput("key")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/键盘鼠标/键盘_2.png", 20, 20, "*"))
      .appendField(new Blockly.FieldDropdown([["按下","press"],["释放","release"]]), "type")
      .appendField("键盘上");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->操作键盘，按下或释放某个按键\n"
   +"2.语法:\n"
   +"->按下 - size_t press(uint8_t k);\n"
   +"->释放 - size_t release(uint8_t k);\n"
   +"3.参数:\n"
   +"->k:键盘上的某个按键\n"
   +"4.返回值:size_t型数据(不使用返回值)"
    );
  this.setHelpUrl("");
  }
};

//操作键盘，按下或释放某个按键，返回结果
Blockly.Blocks.make_arduino_keyboard_press_return= {
  init: function() { 
  this.appendValueInput("key")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/键盘鼠标/键盘_2.png", 20, 20, "*"))
      .appendField(new Blockly.FieldDropdown([["按下","press"],["释放","release"]]), "type")
      .appendField("键盘上");
  this.appendDummyInput()  
      .appendField("返回结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->操作键盘，按下或释放某个按键，返回数据的类型为size_t(2字节)\n"
   +"2.语法:\n"
   +"->按下 - size_t press(uint8_t k);\n"
   +"->释放 - size_t release(uint8_t k);\n"
   +"3.参数:\n"
   +"->k:键盘上的某个按键\n"
   +"4.返回值:size_t型数据\n"
   +"->1 - 成功\n"
   +"->0 - 失败"
    );
  this.setHelpUrl("");
  }
};

//操作键盘，释放键盘上所有按键
Blockly.Blocks.make_arduino_keyboard_releaseAll= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/键盘鼠标/键盘_2.png", 20, 20, "*"))
      .appendField("释放键盘上所有按键");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->操作键盘，释放键盘上所有按键\n"
   +"2.语法:\n"
   +"->void releaseAll(void);\n"
   +"3.参数:无\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//键盘向电脑发送字符
Blockly.Blocks.make_arduino_keyboard_write= {
  init: function() { 
  this.appendValueInput("write_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/键盘鼠标/键盘_2.png", 20, 20, "*"))
      .appendField("键盘发送字符");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->键盘向电脑发送字符\n"
   +"2.语法:\n"
   +"->size_t write(uint8_t k);\n"
   +"3.参数:\n"
   +"->k:键盘上的某个按键\n"
   +"4.返回值:size_t型数据(不使用返回值)"
    );
  this.setHelpUrl("");
  }
};

//键盘向电脑发送字符，返回结果
Blockly.Blocks.make_arduino_keyboard_write_return= {
  init: function() { 
  this.appendValueInput("write_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/键盘鼠标/键盘_2.png", 20, 20, "*"))
      .appendField("键盘发送字符");
  this.appendDummyInput()  
      .appendField("返回结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->键盘向电脑发送字符，返回数据的类型为size_t(2字节)\n\n"
   +"2.语法:\n"
   +"->size_t write(uint8_t k);\n"
   +"3.参数:\n"
   +"->k:键盘上的某个按键\n"
   +"4.返回值:size_t型数据\n"
   +"->1 - 成功\n"
   +"->0 - 失败"
    );
  this.setHelpUrl("");
  }
};

//键盘向电脑发送字符串
Blockly.Blocks.make_arduino_keyboard_print= {
  init: function() { 
  this.appendValueInput("print_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/键盘鼠标/键盘_2.png", 20, 20, "*"))
      .appendField("键盘发送")
      .appendField(new Blockly.FieldDropdown([["字符串","print"],["字符串(自动换行)","println"]]), "print_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->键盘向电脑发送字符串\n"
   +"2.语法:\n"
   +"->发送字符串 - print(String data);\n"
   +"->发送字符串(自动换行) - println(String data);\n"
   +"3.参数:\n"
   +"data:键盘上的某几个按键的组合"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks['keypad_4_4_start'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("定义一个4*4矩阵键盘");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("Keypad_4_4"), "keypad_name");
    //this.appendDummyInput();
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("1"), "keypad_1_1")
        .appendField(new Blockly.FieldTextInput("2"), "keypad_1_2")
        .appendField(new Blockly.FieldTextInput("3"), "keypad_1_3")
        .appendField(new Blockly.FieldTextInput("A"), "keypad_1_4");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("4"), "keypad_2_1")
        .appendField(new Blockly.FieldTextInput("5"), "keypad_2_2")
        .appendField(new Blockly.FieldTextInput("6"), "keypad_2_3")
        .appendField(new Blockly.FieldTextInput("B"), "keypad_2_4");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("7"), "keypad_3_1")
        .appendField(new Blockly.FieldTextInput("8"), "keypad_3_2")
        .appendField(new Blockly.FieldTextInput("9"), "keypad_3_3")
        .appendField(new Blockly.FieldTextInput("C"), "keypad_3_4");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("0"), "keypad_4_2")
        .appendField(new Blockly.FieldTextInput("#"), "keypad_4_3")
        .appendField(new Blockly.FieldTextInput("D"), "keypad_4_4")
        .appendField(new Blockly.FieldTextInput("*"), "keypad_4_1");
    //this.appendDummyInput();
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keypad_1_4_start'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("定义一个1*4矩阵键盘");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("Keypad_1_4"), "keypad_1_4_name");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("1"), "keypad_1_4_1_1")
        .appendField(new Blockly.FieldTextInput("2"), "keypad_1_4_1_2")
        .appendField(new Blockly.FieldTextInput("3"), "keypad_1_4_1_3")
        .appendField(new Blockly.FieldTextInput("4"), "keypad_1_4_1_4");
    //this.appendDummyInput();
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keypad_4_3_start'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("定义一个4*3矩阵键盘");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("Keypad_4_3"), "keypad_4_3_name");
    //this.appendDummyInput();
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("1"), "keypad_4_3_1_1")
        .appendField(new Blockly.FieldTextInput("2"), "keypad_4_3_1_2")
        .appendField(new Blockly.FieldTextInput("3"), "keypad_4_3_1_3")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("4"), "keypad_4_3_2_1")
        .appendField(new Blockly.FieldTextInput("5"), "keypad_4_3_2_2")
        .appendField(new Blockly.FieldTextInput("6"), "keypad_4_3_2_3")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("7"), "keypad_4_3_3_1")
        .appendField(new Blockly.FieldTextInput("8"), "keypad_4_3_3_2")
        .appendField(new Blockly.FieldTextInput("9"), "keypad_4_3_3_3")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("*"), "keypad_4_3_4_1")
        .appendField(new Blockly.FieldTextInput("0"), "keypad_4_3_4_2")
        .appendField(new Blockly.FieldTextInput("#"), "keypad_4_3_4_3")
    //this.appendDummyInput();
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Arduino_keypad_4_4_start'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("初始化矩阵键盘");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("KEYPAD_4_4"), "keypad_name");
    this.appendValueInput("keypad_row")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("行管脚#");
    this.appendValueInput("keypad_col")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("列管脚#");
    this.appendValueInput("keypad_type")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("键盘样式#");
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keypad_row_data'] = {
  init: function() {
    this.appendValueInput("keypad_row_1", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("1#");
    this.appendValueInput("keypad_row_2", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("2#");
    this.appendValueInput("keypad_row_3", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("3#");
    this.appendValueInput("keypad_row_4", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("4#");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keypad_col_data'] = {
  init: function() {
    this.appendValueInput("keypad_col_1", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("1#");
    this.appendValueInput("keypad_col_2", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("2#");
    this.appendValueInput("keypad_col_3", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("3#");
    this.appendValueInput("keypad_col_4", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("4#");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keypad_type_data'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("矩阵键盘按钮");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("1"), "keypad_1_1")
        .appendField(new Blockly.FieldTextInput("2"), "keypad_1_2")
        .appendField(new Blockly.FieldTextInput("3"), "keypad_1_3")
        .appendField(new Blockly.FieldTextInput("A"), "keypad_1_4");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("4"), "keypad_2_1")
        .appendField(new Blockly.FieldTextInput("5"), "keypad_2_2")
        .appendField(new Blockly.FieldTextInput("6"), "keypad_2_3")
        .appendField(new Blockly.FieldTextInput("B"), "keypad_2_4");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("7"), "keypad_3_1")
        .appendField(new Blockly.FieldTextInput("8"), "keypad_3_2")
        .appendField(new Blockly.FieldTextInput("9"), "keypad_3_3")
        .appendField(new Blockly.FieldTextInput("C"), "keypad_3_4");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("*"), "keypad_4_1")
        .appendField(new Blockly.FieldTextInput("0"), "keypad_4_2")
        .appendField(new Blockly.FieldTextInput("#"), "keypad_4_3")
        .appendField(new Blockly.FieldTextInput("D"), "keypad_4_4");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Arduino_keypad_4_3_start'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("初始化矩阵键盘");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("KEYPAD_4_3"), "keypad_name");
    this.appendValueInput("keypad_row")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("行管脚#");
    this.appendValueInput("keypad_col")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("列管脚#");
    this.appendValueInput("keypad_type")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("键盘样式#");
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keypad_4_3_row_data'] = {
  init: function() {
    this.appendValueInput("keypad_row_1", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("1#");
    this.appendValueInput("keypad_row_2", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("2#");
    this.appendValueInput("keypad_row_3", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("3#");
    this.appendValueInput("keypad_row_4", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("4#");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keypad_4_3_col_data'] = {
  init: function() {
    this.appendValueInput("keypad_col_1", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("1#");
    this.appendValueInput("keypad_col_2", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("2#");
    this.appendValueInput("keypad_col_3", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("3#");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keypad_4_3_type_data'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("矩阵键盘按钮");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("1"), "keypad_1_1")
        .appendField(new Blockly.FieldTextInput("2"), "keypad_1_2")
        .appendField(new Blockly.FieldTextInput("3"), "keypad_1_3");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("4"), "keypad_2_1")
        .appendField(new Blockly.FieldTextInput("5"), "keypad_2_2")
        .appendField(new Blockly.FieldTextInput("6"), "keypad_2_3");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("7"), "keypad_3_1")
        .appendField(new Blockly.FieldTextInput("8"), "keypad_3_2")
        .appendField(new Blockly.FieldTextInput("9"), "keypad_3_3");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("*"), "keypad_4_1")
        .appendField(new Blockly.FieldTextInput("0"), "keypad_4_2")
        .appendField(new Blockly.FieldTextInput("#"), "keypad_4_3");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Arduino_keypad_1_4_start'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("初始化矩阵键盘");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("KEYPAD_1_4"), "keypad_name");
    this.appendValueInput("keypad_row")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("行管脚#");
    this.appendValueInput("keypad_col")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("列管脚#");
    this.appendValueInput("keypad_type")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("键盘样式#");
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keypad_1_4_row_data'] = {
  init: function() {
    this.appendValueInput("keypad_row_1", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("1#");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keypad_1_4_col_data'] = {
  init: function() {
    this.appendValueInput("keypad_col_1", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("1#");
    this.appendValueInput("keypad_col_2", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("2#");
    this.appendValueInput("keypad_col_3", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("3#");
    this.appendValueInput("keypad_col_4", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("4#");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keypad_1_4_type_data'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("矩阵键盘按钮");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldTextInput("1"), "keypad_1_1")
        .appendField(new Blockly.FieldTextInput("2"), "keypad_1_2")
        .appendField(new Blockly.FieldTextInput("3"), "keypad_1_3")
        .appendField(new Blockly.FieldTextInput("4"), "keypad_1_4");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.keypad_n_n_type_data= {
  init: function() { 
  this.appendDummyInput('EMPTY1')
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput("4"), "keypad_row")
      .appendField("×")
      .appendField(new Blockly.FieldTextInput("4"), "keypad_col")
      .appendField("键盘按钮");
  this.appendDummyInput('EMPTY2')
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput(""), "keypad_1_1")
      .appendField(new Blockly.FieldTextInput(""), "keypad_1_2")
      .appendField(new Blockly.FieldTextInput(""), "keypad_1_3")
      .appendField(new Blockly.FieldTextInput(""), "keypad_1_4");
  this.appendDummyInput('EMPTY3')
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput(""), "keypad_2_1")
      .appendField(new Blockly.FieldTextInput(""), "keypad_2_2")
      .appendField(new Blockly.FieldTextInput(""), "keypad_2_3")
      .appendField(new Blockly.FieldTextInput(""), "keypad_2_4");
  this.appendDummyInput('EMPTY4')
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput(""), "keypad_3_1")
      .appendField(new Blockly.FieldTextInput(""), "keypad_3_2")
      .appendField(new Blockly.FieldTextInput(""), "keypad_3_3")
      .appendField(new Blockly.FieldTextInput(""), "keypad_3_4");
  this.appendDummyInput('EMPTY5')
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput(""), "keypad_4_1")
      .appendField(new Blockly.FieldTextInput(""), "keypad_4_2")
      .appendField(new Blockly.FieldTextInput(""), "keypad_4_3")
      .appendField(new Blockly.FieldTextInput(""), "keypad_4_4");
  this.setOutput(true, null);
  this.setColour(180);
  this.setTooltip("4×4矩阵键盘按键");
  this.setHelpUrl("");
  },
  onchange: function(){
    var text_keypad_row = this.getFieldValue('keypad_row');
    var text_keypad_col = this.getFieldValue('keypad_col');
    var p1 = 1;
    
    var p = 2;
    while (this.getInput('EMPTY' + p)) {
      p++;
    }
    if(p > 2)
    {
      while (this.getField('keypad_1_' + p1)) {
        p1++;
      }
    }

    if(p != text_keypad_row-0+2 || p1 != text_keypad_col-0+1)
    {
      var keypad_row = 4;
      var keypad_col = 4;
      keypad_row = text_keypad_row - 0;
      keypad_col = text_keypad_col - 0;
      if(keypad_row > 9) keypad_row = 4;
      if(keypad_col > 9) keypad_col = 4;
      // Delete everything.
      var i = 2;
      while (this.getInput('EMPTY' + i)) {
        this.removeInput('EMPTY' + i);
        i++;
      }
      // Rebuild blocks
      for (var i = 2; i <= keypad_row + 1;i++) {
        var input = this.appendDummyInput('EMPTY' + i);
        input.setAlign(Blockly.ALIGN_CENTRE);
        for(var j = 1;j < keypad_col;j++)
        {
          input.appendField(new Blockly.FieldTextInput(""), "keypad_"+ (i-1).toString() + "_" + j);
        }
        input.appendField(new Blockly.FieldTextInput(""), "keypad_"+ (i-1).toString() + "_" + text_keypad_col);
      }
      this.setTooltip(text_keypad_row + "×" + text_keypad_col + "矩阵键盘按键");
    }
  }
};

/*
Blockly.Blocks.keypad_n_n_row_col_data = {
  init: function() {
  this.appendDummyInput('EMPTY1')
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("(")
      .appendField(new Blockly.FieldTextInput("4"), "keypad_pin_num")
      .appendField("个)");
  this.appendValueInput("keypad_row_col_1")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("1#");
  this.appendValueInput("keypad_row_col_2")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("2#");
  this.appendValueInput("keypad_row_col_3")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("3#");
  this.appendValueInput("keypad_row_col_4")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("4#");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(330);
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange: function(){
    var pin_num = this.getFieldValue('keypad_pin_num');
    var p = 1;
    while (this.getInput('keypad_row_col_' + p)) {
      p++;
    }
    if(pin_num-0 != p-1)
    {
      // Delete everything.
      var i = 1;
      while (this.getInput('keypad_row_col_' + i)) {
        this.removeInput('keypad_row_col_' + i);
        i++;
      }

      if(pin_num-0 > 9) pin_num = "4";
      for (var i = 1; i <= pin_num - 0;i++) {
        var input = this.appendValueInput("keypad_row_col_" + i);
        input.setAlign(Blockly.ALIGN_RIGHT);
        input.appendField(i + "#");
      }
    }
  }
};
*/

Blockly.Blocks.keypad_n_n_start_1 = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("初始化矩阵键盘");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("KEYPAD_N_N"), "keypad_name");
    this.appendValueInput("keypad_row")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("行管脚#");
    this.appendValueInput("keypad_col")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("列管脚#");
    this.appendValueInput("keypad_type")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("键盘样式(数组)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.keypad_n_n_start = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("初始化矩阵键盘");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("KEYPAD_N_N"), "keypad_name");
    this.appendValueInput("keypad_row")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("行管脚#");
    this.appendValueInput("keypad_col")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("列管脚#");
    this.appendValueInput("keypad_type")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("键盘样式#");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("此图形块为测试图形块，暂时可以满足基本的使用");
 this.setHelpUrl("");
  }
};

//keypad管脚
Blockly.Blocks.keypad_n_n_row_col_data_1 = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(330);
    this.itemCount_ = 4;
    this.updateShape_();
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setMutator(new Blockly.Mutator(['keypad_create_with_item']));
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
    Blockly.Block.obtain(workspace, 'keypad_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'keypad_create_with_item');
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
    var i = 0;
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
    // Rebuild block.
    for (var i = 0; i < this.itemCount_; i++) {
      var input = this.appendValueInput('ADD' + i);
      input.setAlign(Blockly.ALIGN_RIGHT);
      input.appendField((i+1) + "#");
    }
  }
};

Blockly.Blocks['keypad_create_with_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(330);
    this.appendDummyInput()
    .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['keypad_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("管脚");
    this.appendStatementInput('STACK');
    this.setTooltip("");
    this.contextMenu = false;
  }
};

Blockly.Blocks['get_keypad_num'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("获取矩阵键盘")
        .appendField(new Blockly.FieldTextInput("KEYPAD_4_4"), "keypad_name")
        .appendField("按键数值");
    this.setInputsInline(true);
     this.setOutput(true, null);
    this.setColour(285);
 this.setTooltip("矩阵键盘获取按键值，返回数据的类型为char");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_keypad_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("矩阵键盘 ")
        .appendField(new Blockly.FieldTextInput("KEYPAD_4_4"), "keypad_name");
    this.appendValueInput("keypad_event_input")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("开始一个定时器 输入字符#");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("间隔")
        .appendField(new Blockly.FieldTextInput("1000"), "keypad_start_event_delay")
        .appendField("毫秒");
    this.appendStatementInput("keypad_event_data")
        .setCheck(null)
        .appendField("执行");
    this.setInputsInline(false);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['arduino_nrf24l01_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("初始化nRF24L01");
    this.appendValueInput("nrf24l01_pin")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("管脚#");
    this.appendValueInput("nrf24l01_send_channel")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("发送通道#");
    this.appendValueInput("nrf24l01_id")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("接收标识符#");
    this.appendValueInput("nrf24l01_send_num")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("发送字节数#");
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip(
    "MOSI - 11\n"
   +"MISO - 12\n"
   +"CLK -- 13\n"
   +"IRQ -- 可不接"
    );
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_nrf24l01_pin'] = {
  init: function() {
    this.appendValueInput("nrf24l01_pin_ce")
        .setCheck(null)
        .appendField("CE#");
    this.appendValueInput("nrf24l01_pin_csn")
        .setCheck(null)
        .appendField("CSN#");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_nrf24l01_send'] = {
  init: function() {
    this.appendValueInput("nrf24l01_send_data")
        .setCheck(null)
        .appendField("nRF24L01 发送数据#");
    this.appendValueInput("nrf24l01_send_rec_id")
        .setCheck(null)
        .appendField("接收端标识符#");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_while'] = {
  init: function() {
    this.appendValueInput("while_condition")
        .setCheck(null)
        .appendField("重复")
        .appendField(new Blockly.FieldDropdown([["满足条件","while_true"], ["不满足条件","while_false"]]), "while_is_true");
    this.appendStatementInput("while_carry_out")
        .setCheck(null)
        .appendField("执行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_nrf24l01_is_sending'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("nRF24L01 数据正在发送");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_define_variate'] = {
  init: function() {
    this.appendValueInput("variate_num")
        .setCheck(null)
        .appendField("声明")
        .appendField(new Blockly.FieldTextInput("adata"), "variate_name")
        .appendField("为")
        .appendField(new Blockly.FieldDropdown([["整型","int"], ["无符号整型","unsigned int"], ["长整型","long"], ["无符号长整型","unsigned long"], ["字符型","char"], ["无符号字符型","unsigned char"]]), "variate_type")
        .appendField("并赋值");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_nrf24l01_data_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("nRF24L01 接收数据准备好");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_if'] = {
  init: function() {
    this.appendValueInput("if_is_true")
        .setCheck(null)
        .appendField("如果");
    this.appendStatementInput("if_carry_out")
        .setCheck(null)
        .appendField("执行");
    this.appendDummyInput()
        .appendField("保存到");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["无符号整型","unsigned int"], ["无符号长整型","unsigned long"], ["无符号字符型","unsigned char"], ["整型","int"], ["长整型","long"], ["字符型","char"]]), "variate_type");
    this.appendDummyInput()
        .appendField("变量")
        .appendField(new Blockly.FieldTextInput("adata"), "variate_name");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_if_1'] = {
  init: function() {
    this.appendValueInput("if_is_true")
        .setCheck(null)
        .appendField("如果");
    this.appendValueInput("get_variate_1")
        .setCheck(null)
        .appendField("保存到")
        .appendField("变量");
    this.appendStatementInput("if_carry_out")
        .setCheck(null)
        .appendField("执行");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_nrf24l01_get_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("nRF24L01 获取数据");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nrf24l01_begin= {
  init: function() { 
  this.appendDummyInput()  
      //.appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("初始化nRF24L01");
  this.appendValueInput("nrf24l01_ce")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("CE#");
  this.appendValueInput("nrf24l01_csn")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("CSN#");
  this.appendStatementInput("nrf24l01_setting")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "SPI接线:\n"
   +"①Arduino Uno:\n"
   +"->MOSI - 11\n"
   +"->MISO - 12\n"
   +"->SCK - 13\n"
   +"②Arduino Mega2560:\n"
   +"->MOSI - 51\n"
   +"->MISO - 50\n"
   +"->SCK - 52\n"
   +"③Arduino Leonardo:\n"
   +"->MOSI - ICSP-4\n"
   +"->MISO - ICSP-1\n"
   +"->SCK - ICSP-3\n"
   +"IRQ -- 可不接"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nrf24l01_setRADDR= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01");
  this.appendValueInput("nrf24l01_set_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("设置本机接收标识符为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("nRF24L01设置本机接收标识符");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nrf24l01_payload= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01");
  this.appendValueInput("nrf24l01_set_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("设置一次收发的字节数为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("nRF24L01设置一次收发的字节数");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nrf24l01_payload_return= {
  init: function() { 
  this.appendDummyInput()  
      //.appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("获取 nRF24L01一次收发的字节数");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("获取nRF24L01一次收发的字节数，返回数据的类型为uint8_t");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nrf24l01_channel= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01");
  this.appendValueInput("nrf24l01_set_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("设置通信通道为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("nRF24L01设置通信通道");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nrf24l01_sendData= {
  init: function() { 
  this.appendValueInput("nrf24l01_send_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01发送数组");
  this.appendValueInput("nrf24l01_settaddr")
      .setCheck(null)  
      .appendField("接收端标识符");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("nRF24L01发送数据");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nrf24l01_isSending= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01 数据正在发送？");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("nRF24L01数据正在发送？返回数据的类型为boolean");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nrf24l01_dataReady= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01 已准备好接收数据？");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("nRF24L01准备好接收数据？返回数据的类型为boolean");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nrf24l01_getData= {
  init: function() { 
  this.appendValueInput("nrf24l01_get_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01接收数据 保存到数组");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("nRF24L01接收数据");
  this.setHelpUrl("");
  }
};

//初始化nRF24L01无线通信模块
Blockly.Blocks.make_arduino_rf24_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("初始化nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name");
  this.appendValueInput("ce")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" CE#");
  this.appendValueInput("csn")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("CSN#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 获取数据
Blockly.Blocks.make_arduino_rf24_get_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(new Blockly.FieldDropdown([["设备加入SPI网络？","isChipConnected"],["当前连接硬件是nRF24L01+?","isPVariant"],["接收到数据？","available"],["设备出现故障？","failureDetected"],["接收缓冲区已满？","rxFifoFull"],["最近一次写入时收到ACK数据包?","isAckPayloadAvailable"],["清空传输缓冲区，返回状态寄存器当前值","flush_tx"],["清空接收缓冲区，返回状态寄存器当前值","flush_rx"],["返回发送结果，设备进入STANDBY-I模式","txStandBy"],["获取当前配置的射频通道","getChannel"],["获取当前配置的射频功率","getPALevel"],["获取当前配置的空中波特率","getDataRate"],["获取当前配置的CRC校验的校验长度","getCRCLength"],["获取静态数据包长度","getPayloadSize"],["获取动态数据包长度","getDynamicPayloadSize"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 执行某些函数
Blockly.Blocks.make_arduino_rf24_do= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(new Blockly.FieldDropdown([["开始监听","startListening"],["停止监听","stopListening"],["串口打印设备详细信息","printDetails"],["设备进入掉电模式","powerDown"],["设备进入工作模式","powerUp"],["设备进入STANDBY-I模式","txStandBy"],["复用上次成功发送出的数据包","reUseTX"],["启用ACK数据包","enableAckPayload"],["启用动态数据包","enableDynamicPayloads"],["禁用动态数据包","disableDynamicPayloads"],["为选定的消息启用动态ACK","enableDynamicAck"],["禁用CRC校验","disableCRC"]]), "type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 打开发送管道
Blockly.Blocks.make_arduino_rf24_openWritingPipe= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 打开发送管道");
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("接收端地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 打开接收管道
Blockly.Blocks.make_arduino_rf24_openReadingPipe= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 打开接收管道");
  this.appendValueInput("number")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("管道编号");
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("接收端地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 接收管道编号
Blockly.Blocks.make_arduino_rf24_pipe_type= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 关闭接收管道
Blockly.Blocks.make_arduino_rf24_closeReadingPipe= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 关闭接收管道");
  this.appendValueInput("number")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("管道编号");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 接收到数据？ 保存接收管道编号到变量
Blockly.Blocks.make_arduino_rf24_available= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 接收到数据？");
  this.appendValueInput("pipe_num")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("获取接收管道编号到变量");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 设置地址宽度
Blockly.Blocks.make_arduino_rf24_setAddressWidth= {
  init: function() { 
  this.appendValueInput("width")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 地址宽度设为");
  this.appendDummyInput()  
      .appendField("字节");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 定义可用的地址宽度
Blockly.Blocks.make_arduino_rf24_AddressWidth_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["3","3"],["4","4"],["5","5"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 设置射频通道
Blockly.Blocks.make_arduino_rf24_setChannel= {
  init: function() { 
  this.appendValueInput("channel")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 射频通道设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 设置射频功率
Blockly.Blocks.make_arduino_rf24_setPALevel= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 射频功率设为")
      .appendField(new Blockly.FieldDropdown([["-18dBm","RF24_PA_MIN"],["-12dBm","RF24_PA_LOW"],["-6dBm","RF24_PA_HIGH"],["0dBm","RF24_PA_MAX"]]), "type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 设置空中波特率
Blockly.Blocks.make_arduino_rf24_setDataRate= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 空中波特率设为")
      .appendField(new Blockly.FieldDropdown([["250Kbps","RF24_250KBPS"],["1Mbps","RF24_1MBPS"],["2Mbps","RF24_2MBPS"]]), "type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 设置CRC校验的校验长度
Blockly.Blocks.make_arduino_rf24_setCRCLength= {
  init: function() { 
  this.appendValueInput("length")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" CRC校验的校验长度设为");
  this.appendDummyInput()  
      .appendField("字节");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 可设置的CRC校验的校验长度类型
Blockly.Blocks.make_arduino_rf24_setCRCLength_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["8","RF24_CRC_8"],["16","RF24_CRC_16"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 设置静态载荷的长度
Blockly.Blocks.make_arduino_rf24_setPayloadSize= {
  init: function() { 
  this.appendValueInput("length")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 静态数据包长度设为");
  this.appendDummyInput()  
      .appendField("字节");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 启用或禁用自动应答
Blockly.Blocks.make_arduino_rf24_setAutoAck_all= {
  init: function() { 
  this.appendValueInput("enable")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 自动应答");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//开启 - 关闭
Blockly.Blocks.make_arduino_open_close= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["开启","true"],["关闭","false"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 在某个管道上启用或禁用自动应答
Blockly.Blocks.make_arduino_rf24_setAutoAck= {
  init: function() { 
  this.appendValueInput("pipe")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 管道编号");
  this.appendValueInput("enable")
      .setCheck(null)  
      .appendField("自动应答");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 设置自动重发延时和发送次数
Blockly.Blocks.make_arduino_rf24_setRetries= {
  init: function() { 
  this.appendValueInput("delay")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 自动重发延时");
  this.appendValueInput("count")
      .setCheck(null)  
      .appendField("重发次数");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 屏蔽中断
Blockly.Blocks.make_arduino_rf24_maskIRQ= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 屏蔽中断");
  this.appendValueInput("tx_ok")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("传输完成中断");
  this.appendValueInput("tx_fail")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("传输失败中断");
  this.appendValueInput("rx_ready")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("接收到数据包中断");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 获取中断
Blockly.Blocks.make_arduino_rf24_whatHappened= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 清除中断");
  this.appendValueInput("tx_ok")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("获取 传输完成中断 到变量");
  this.appendValueInput("tx_fail")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("获取 传输失败中断 到变量");
  this.appendValueInput("rx_ready")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("获取 接收到数据包中断 到变量");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 发送数据
Blockly.Blocks.make_arduino_rf24_write= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name");
  this.appendValueInput("buf")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["发送","write"],["发送(自动重发)","writeFast"]]), "type");
  this.appendValueInput("len")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.appendValueInput("multicast")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("自动应答");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 发送数据，返回发送结果
Blockly.Blocks.make_arduino_rf24_write_return= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name");
  this.appendValueInput("buf")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["发送","write"],["发送(自动重发)","writeFast"]]), "type");
  this.appendValueInput("len")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.appendValueInput("multicast")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("自动应答");
  this.appendDummyInput()  
      .appendField("返回发送结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 发送数据(可设置超时时间)
Blockly.Blocks.make_arduino_rf24_writeBlocking= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name");
  this.appendValueInput("buf")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 发送(自动重发)");
  this.appendValueInput("len")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.appendValueInput("timeout")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("超时时间");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 发送数据(可设置超时时间)，返回发送结果
Blockly.Blocks.make_arduino_rf24_writeBlocking_return= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name");
  this.appendValueInput("buf")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 发送(自动重发)");
  this.appendValueInput("len")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.appendValueInput("timeout")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("超时时间");
  this.appendDummyInput()  
      .appendField("返回发送结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 写入ACK数据包
Blockly.Blocks.make_arduino_rf24_writeAckPayload= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name")
      .appendField(" 写入ACK数据包");
  this.appendValueInput("pipe")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("管道编号");
  this.appendValueInput("buf")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数据");
  this.appendValueInput("len")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 读取数据
Blockly.Blocks.make_arduino_rf24_read= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/2.4G.png", 25, 25, "*"))
      .appendField("nRF24L01")
      .appendField(new Blockly.FieldTextInput("radio"), "name");
  this.appendValueInput("buf")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 读取 保存数据到变量");
  this.appendValueInput("len")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 数据长度定义
Blockly.Blocks.make_arduino_rf24_length= {
  init: function() {
  var length_data = new Array();
  for(var i = 0;i < 33; i++)
  {
    length_data[i] = new Array();
    for(var j = 0;j < 2;j++)
    {
      length_data[i][j] = String(i);
    }
  }
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(length_data), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 射频通道定义
Blockly.Blocks.make_arduino_rf24_channel= {
  init: function() {
  var channel_data = new Array();
  for(var i = 0;i < 126; i++)
  {
    channel_data[i] = new Array();
    for(var j = 0;j < 2;j++)
    {
      channel_data[i][j] = String(i);
    }
  }
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(channel_data), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//nRF24L01无线通信模块 重发次数定义
Blockly.Blocks.make_arduino_rf24_count= {
  init: function() {
  var count_data = new Array();
  for(var i = 0;i < 16; i++)
  {
    count_data[i] = new Array();
    for(var j = 0;j < 2;j++)
    {
      count_data[i][j] = String(i);
    }
  }
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(count_data), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//初始化315/433MHZ无线通信模块的发送管脚
Blockly.Blocks.make_arduino_mhz_send_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("初始化315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name");
  this.appendValueInput("mhz_send_pin")
      .setCheck(null)  
      .appendField(" 发射管脚#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化315/433MHZ无线通信模块的发送管脚\n"
   +"2.语法:\n"
   +"->void enableTransmit(int nTransmitterPin);\n"
   +"3.参数:\n"
   +"->nTransmitterPin:数据发送管脚\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//初始化315/433MHZ无线通信模块的接收管脚
Blockly.Blocks.make_arduino_mhz_receive_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("初始化315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name");
  this.appendValueInput("mhz_receive_pin")
      .setCheck(null)  
      .appendField(" 接收管脚#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化315/433MHZ无线通信模块的接收管脚\n"
   +"2.语法:\n"
   +"->void enableReceive(int interrupt);\n"
   +"3.参数:\n"
   +"->interrupt:数据接收管脚(接arduino上的中断管脚)\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//初始化315/433MHZ无线通信模块的发送管脚和接收管脚
Blockly.Blocks.make_arduino_mhz_send_receive_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("初始化315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name");
  this.appendValueInput("mhz_send_pin")
      .setCheck(null)  
      .appendField(" 发射管脚#");
  this.appendValueInput("mhz_receive_pin")
      .setCheck(null)  
      .appendField(" 接收管脚#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化315/433MHZ无线通信模块的发送管脚和接收管脚\n"
   +"2.语法:\n"
   +"->void enableTransmit(int nTransmitterPin);\n"
   +"->void enableReceive(int interrupt);\n"
   +"3.参数:\n"
   +"->nTransmitterPin:数据发送管脚\n"
   +"->interrupt:数据接收管脚(接arduino上的中断管脚)\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//315/433MHZ无线通信模块设置脉冲长度
Blockly.Blocks.make_arduino_mhz_setPulseLength= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name");
  this.appendValueInput("mhz_pulselength")
      .setCheck(null)  
      .appendField(" 发送数据用脉冲长度设为");
  this.appendDummyInput()  
      .appendField("微秒");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->315/433MHZ无线通信模块设置发送数据时所用的脉冲长度，默认是350微秒\n"
   +"2.语法:\n"
   +"->void setPulseLength(int nPulseLength);\n"
   +"3.参数:\n"
   +"->nPulseLength:数据发送时所用的脉冲长度，默认是350微秒\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//315/433MHZ无线通信模块设置发送协议
Blockly.Blocks.make_arduino_mhz_setProtocol= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name");
  this.appendValueInput("mhz_protocol_type")
      .setCheck(null)  
      .appendField(" 使用协议");
  this.appendDummyInput()  
      .appendField("发送数据");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->315/433MHZ无线通信模块设置发送数据时所用的通信协议，默认使用协议1\n"
   +"2.语法:\n"
   +"->void setProtocol(int nProtocol);\n"
   +"3.参数:\n"
   +"->nProtocol:数据发送时所使用的协议，默认使用协议1\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//315/433MHZ无线通信模块 协议种类
Blockly.Blocks.make_arduino_mhz_setProtocol_type= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//315/433MHZ无线通信模块设置发送端数据发送重复次数
Blockly.Blocks.make_arduino_mhz_setRepeatTransmit= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name");
  this.appendValueInput("mhz_repeat_data")
      .setCheck(null)  
      .appendField(" 重发次数设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->315/433MHZ无线通信模块设置发送端数据发送重复次数，默认为10\n"
   +"2.语法:\n"
   +"->void setRepeatTransmit(int nRepeatTransmit);\n"
   +"3.参数:\n"
   +"->nRepeatTransmit:数据发送时的发送重复次数，默认为10\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//315/433MHZ无线通信模块设置接收数据允许误差
Blockly.Blocks.make_arduino_mhz_setReceiveTolerance= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name");
  this.appendValueInput("mhz_tolerance_data")
      .setCheck(null)  
      .appendField(" 接收允许误差设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->315/433MHZ无线通信模块设置接收数据允许误差，默认为60\n"
   +"2.语法:\n"
   +"->void setReceiveTolerance(int nPercent);\n"
   +"3.参数:\n"
   +"->nPercent:数据接收时的允许误差，默认为60\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//315/433MHZ无线通信模块发送十进制数据
Blockly.Blocks.make_arduino_mhz_send_decimal_code= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name");
  this.appendValueInput("mhz_send_data")
      .setCheck(null)  
      .appendField(" 发送十进制数据");
  this.appendValueInput("mhz_send_length")
      .setCheck(null)  
      .appendField(" 长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->315/433MHZ无线通信模块发送十进制数据，发送长度最大为24，若超出则将不会发送数据\n"
   +"2.语法:\n"
   +"->void send(unsigned long code, unsigned int length);\n"
   +"3.参数:\n"
   +"->code:要发送的十进制数据\n"
   +"->length:发送数据的长度，最大为24\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//315/433MHZ无线通信模块发送二进制数据
Blockly.Blocks.make_arduino_mhz_send_binary_code= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name");
  this.appendValueInput("mhz_send_data")
      .setCheck(null)  
      .appendField(" 发送二进制数据");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->315/433MHZ无线通信模块发送二进制数据，发送长度最大为24，若超出则将不会发送数据\n"
   +"2.语法:\n"
   +"->void send(const char* sCodeWord);\n"
   +"3.参数:\n"
   +"->sCodeWord:要发送的二进制数据\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//315/433MHZ无线通信模块发送三态码
Blockly.Blocks.make_arduino_mhz_send_tri_state_code= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name");
  this.appendValueInput("mhz_send_data")
      .setCheck(null)  
      .appendField(" 发送三态码");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->315/433MHZ无线通信模块发送三态码\n"
   +"2.语法:\n"
   +"->void sendTriState(const char* sCodeWord);\n"
   +"3.参数:\n"
   +"->sCodeWord:要发送的数据\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//315/433MHZ无线通信模块 接收到数据？
Blockly.Blocks.make_arduino_mhz_available= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name")
      .appendField(" 接收到数据？");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->315/433MHZ是否接收到数据，返回数据的类型为boolean\n"
   +"2.语法:\n"
   +"->bool available();\n"
   +"3.参数:无\n"
   +"4.返回值:boolean型数据\n"
   +"->true - 接收到数据\n"
   +"->false - 没有接收到数据"
    );
  this.setHelpUrl("");
  }
};

//315/433MHZ无线通信模块 接收数据
Blockly.Blocks.make_arduino_mhz_get_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["数据","getReceivedValue"],["比特数","getReceivedBitlength"],["脉冲长度","getReceivedDelay"],["通信协议","getReceivedProtocol"],["数据包","getReceivedRawdata"]]), "get_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->315/433MHZ无线通信模块 获取数据、比特数、脉冲长度、通信协议、数据包\n"
   +"2.语法:\n"
   +"->获取数据 - unsigned long getReceivedValue();\n"
   +"->获取比特数 - unsigned int getReceivedBitlength();\n"
   +"->获取脉冲长度 - unsigned int getReceivedDelay();\n"
   +"->获取通信协议 - unsigned int getReceivedProtocol();\n"
   +"->获取数据包 - unsigned int* getReceivedRawdata();\n"
   +"3.参数:无\n"
    );
  this.setHelpUrl("");
  }
};

//315/433MHZ无线通信模块 重置接收
Blockly.Blocks.make_arduino_mhz_resetAvailable= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_6.png", 25, 25, "*"))
      .appendField("315/433MHZ")
      .appendField(new Blockly.FieldTextInput("mySwitch"), "mhz_name")
      .appendField(" 重置接收");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(140);
  this.setTooltip(
    "1.功能:\n"
   +"->在每次使用mySwitch.available()接受完数据后，都需要用此函数重置一下接收，然后才可以接收下一串数据\n"
   +"2.语法:\n"
   +"->void resetAvailable();\n"
   +"3.参数:无\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//初始化74HC595的控制管脚
Blockly.Blocks['arduino_74hc595_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_3.png", 25, 25, "*"))
        .appendField("初始化74HC595")
        .appendField(new Blockly.FieldTextInput("hc"), "ic_74hc595_name");
    this.appendValueInput("ic_74hc595_num")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" 数目#");
    this.appendValueInput("ic_74hc595_data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("data#");
    this.appendValueInput("ic_74hc595_clock")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("clock#");
    this.appendValueInput("ic_74hc595_latch")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("latch#");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
 this.setTooltip("初始化74HC595的控制管脚");
 this.setHelpUrl("");
  }
};

//设置74HC595芯片中全部管脚的电平高低
Blockly.Blocks['arduino_74hc595_set_all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_3.png", 25, 25, "*"))
        .appendField("74HC595")
        .appendField(new Blockly.FieldTextInput("hc"), "ic_74hc595_name")
        .appendField(" 全部管脚设为")
        .appendField(new Blockly.FieldDropdown([["高电平","setAllHigh"], ["低电平","setAllLow"]]), "ic_74hc595_all_pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
 this.setTooltip("设置74HC595芯片中全部管脚的电平高低");
 this.setHelpUrl("");
  }
};

//设置74HC595芯片中其中一个管脚的电平高低
Blockly.Blocks['arduino_74hc595_set_one'] = {
  init: function() {
    this.appendValueInput("ic_74hc595_one_pin")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_3.png", 25, 25, "*"))
        .appendField("74HC595")
        .appendField(new Blockly.FieldTextInput("hc"), "ic_74hc595_name")
        .appendField(" 管脚#");
    this.appendDummyInput()
        .appendField("设为")
        .appendField(new Blockly.FieldDropdown([["高电平","HIGH"], ["低电平","LOW"]]), "ic_74hc595_one_pin_status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
 this.setTooltip("设置74HC595芯片中其中一个管脚的电平高低");
 this.setHelpUrl("");
  }
};

//设置74HC595芯片中其中一个管脚的电平高低
Blockly.Blocks['arduino_74hc595_set_one_change'] = {
  init: function() {
    this.appendValueInput("ic_74hc595_one_pin")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_3.png", 25, 25, "*"))
        .appendField("74HC595")
        .appendField(new Blockly.FieldTextInput("hc"), "ic_74hc595_name")
        .appendField(" 管脚#");
    this.appendValueInput("ic_74hc595_one_pin_status")
        .appendField("设为");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
 this.setTooltip("设置74HC595芯片中其中一个管脚的电平高低");
 this.setHelpUrl("");
  }
};

//设置74HC595芯片中各个管脚的电平高低（1个74HC595）
Blockly.Blocks['arduino_74hc595_1_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_3.png", 25, 25, "*"))
        .appendField("74HC595*1")
        .appendField(new Blockly.FieldTextInput("hc"), "ic_74hc595_name");
    this.appendValueInput("ic_74hc595_1_set_data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("设置管脚电平 芯片1#");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
 this.setTooltip("设置74HC595芯片中各个管脚的电平高低（1个74HC595）");
 this.setHelpUrl("");
  }
};

//设置74HC595芯片中各个管脚的电平高低（2个74HC595相连）
Blockly.Blocks['arduino_74hc595_2_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_3.png", 25, 25, "*"))
        .appendField("74HC595*2")
        .appendField(new Blockly.FieldTextInput("hc"), "ic_74hc595_name");
    this.appendValueInput("ic_74hc595_1_set_data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("设置管脚电平 芯片1#");
    this.appendValueInput("ic_74hc595_2_set_data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("芯片2#");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
 this.setTooltip("设置74HC595芯片中各个管脚的电平高低（2个74HC595相连）");
 this.setHelpUrl("");
  }
};

//设置74HC595芯片中各个管脚的电平高低（3个74HC595相连）
Blockly.Blocks['arduino_74hc595_3_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_3.png", 25, 25, "*"))
        .appendField("74HC595*3")
        .appendField(new Blockly.FieldTextInput("hc"), "ic_74hc595_name");
    this.appendValueInput("ic_74hc595_1_set_data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("设置管脚电平 芯片1#");
    this.appendValueInput("ic_74hc595_2_set_data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("芯片2#");
    this.appendValueInput("ic_74hc595_3_set_data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("芯片3#");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
 this.setTooltip("设置74HC595芯片中各个管脚的电平高低（3个74HC595相连）");
 this.setHelpUrl("");
  }
};

//设置74HC595芯片中各个管脚的电平高低
Blockly.Blocks['arduino_74hc595_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_1")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_2")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_3")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_4")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_5")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_6")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_7")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_8");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("设置74HC595芯片中各个管脚的电平高低");
 this.setHelpUrl("");
  }
};

//使用数组来设置74HC595芯片中全部管脚的电平高低
Blockly.Blocks['arduino_74hc595_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_3.png", 25, 25, "*"))
        .appendField("74HC595")
        .appendField(new Blockly.FieldTextInput("hc"), "ic_74hc595_name")
        .appendField(" 设置各管脚电平 使用数组")
        .appendField(new Blockly.FieldTextInput("mylist"), "ic_74hc595_everypin")
        .appendField("[ ]");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
 this.setTooltip("使用数组来设置74HC595芯片中全部管脚的电平高低");
 this.setHelpUrl("");
  }
};

//获取74HC595芯片中某个管脚的状态
Blockly.Blocks['arduino_74hc595_get'] = {
  init: function() {
    this.appendValueInput("ic_74hc595_get_data")
        .setCheck(null)
        //.appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_3.png", 25, 25, "*"))
        .appendField("74HC595")
        .appendField(new Blockly.FieldTextInput("hc"), "ic_74hc595_name")
        .appendField(" 获取管脚状态#");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(40);
 this.setTooltip("获取74HC595芯片中某个管脚的状态");
 this.setHelpUrl("");
  }
};

//初始化DS1307，默认时间为系统此时的时间
Blockly.Blocks.make_ds1307_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_3.png", 25, 25, "*"))
      .appendField("初始化DS1307")
      .appendField(new Blockly.FieldTextInput("rtc"), "ds1307_name");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("获取系统当前时间")
      .appendField(new Blockly.FieldCheckbox("true"), "ds1307_get_time_date");
  this.appendValueInput("ds1307_begin_year")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("年#");
  this.appendValueInput("ds1307_begin_month")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("月#");
  this.appendValueInput("ds1307_begin_day")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("日#");
  this.appendValueInput("ds1307_begin_hour")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("时#");
  this.appendValueInput("ds1307_begin_minute")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("分#");
  this.appendValueInput("ds1307_begin_second")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("秒#");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化DS1307，默认时间为系统此时的时间\n"
   +"SDA - A4\n"
   +"SCL - A5"
    );
  this.setHelpUrl("");
  }
};

//获取DS1307中的时间与日期
Blockly.Blocks.make_ds1307_get_time_date= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_3.png", 25, 25, "*"))
      .appendField("设置 时间&日期")
      .appendField(new Blockly.FieldTextInput("now"), "get_time_date_name");
  this.appendValueInput("get_time_date_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("为");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("获取DS1307中的时间与日期");
  this.setHelpUrl("");
  }
};

//返回DS1307中的时间与日期
Blockly.Blocks.make_ds1307_get_time_date_data= {
  init: function() { 
  this.appendDummyInput()  
      //.appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_3.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("rtc"), "ds1307_name")
      .appendField("现在时间和日期");
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("返回DS1307中的时间与日期");
  this.setHelpUrl("");
  }
};

//返回 时间&日期 中的年、月、日、时、分、秒
Blockly.Blocks.make_ds1307_get_time_date_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("获取 时间&日期")
      .appendField(new Blockly.FieldTextInput("now"), "timedate_name")
      .appendField(" 中的")
      .appendField(new Blockly.FieldDropdown([["年","year"],["月","month"],["日","day"],["时","hour"],["分","minute"],["秒","second"],["周","dayOfTheWeek"]]), "get_time_date_data");
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("返回 时间&日期 中的年、月、日、时、分、秒、周，返回数据的类型为uint8_t");
  this.setHelpUrl("");
  }
};

//设置DS1302中的年、月、日、时、分、秒
Blockly.Blocks.make_ds1307_set_time_date= {
  init: function() { 
  this.appendValueInput("set_time_date_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_3.png", 25, 25, "*"))
      .appendField("设置")
      .appendField(new Blockly.FieldTextInput("rtc"), "ds1307_name")
      .appendField("中的时间&日期为");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["年","RTC_YEAR"],["月","RTC_MONTH"],["日","RTC_DAY"],["时","RTC_HOUR"],["分","RTC_MINUTE"],["秒","RTC_SECOND"]]), "set_time_date_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("设置DS1307中的年、月、日、时、分、秒");
  this.setHelpUrl("");
  }
};

//初始化AT24C32
Blockly.Blocks.make_at24c32_begin= {
  init: function() { 
  this.appendValueInput("at24c32_begin_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("初始化AT24C32")
      .appendField(new Blockly.FieldTextInput("AT24C32"), "at24c32_name")
      .appendField("设备地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化AT24C32"
   +"SDA - A4\n"
   +"SCL - A5"
    );
  this.setHelpUrl("");
  }
};

//AT24C32指定地址写入数据，地址的范围是0-4096,数据的大小是一字节
Blockly.Blocks.make_at24c32_writemem= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))  
      .appendField(new Blockly.FieldTextInput("AT24C32"), "at24c32_name")
      .appendField("写入数据");
  this.appendValueInput("at24c32_writemem_area")
      .setCheck(null)  
      .appendField("地址");
  this.appendValueInput("at24c32_writemem_data")
      .setCheck(null)  
      .appendField("数据#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("AT24C32指定地址写入数据，地址的范围是0-4096,数据的大小是一字节");
  this.setHelpUrl("");
  }
};

//AT24C32指定地址写入数据，地址的范围是0-4096，数据为一字节，字节数必须要小于等于数组的大小
Blockly.Blocks.make_at24c32_writemem_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("AT24C32"), "at24c32_name")
      .appendField("写入数据");
  this.appendValueInput("at24c32_writemem_area")
      .setCheck(null)  
      .appendField("起始地址");
  this.appendValueInput("at24c32_writemem_data")
      .setCheck(null)  
      .appendField("数组");
  this.appendValueInput("at24c32_writemem_num")
      .setCheck(null)  
      .appendField("字节数");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("AT24C32指定地址写入数据，地址的范围是0-4096，数据为一字节，字节数必须要小于等于数组的大小");
  this.setHelpUrl("");
  }
};

//AT24C32指定地址读取数据，地址的范围是0-4096
Blockly.Blocks.make_at24c32_readmem= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("AT24C32"), "at24c32_name")
      .appendField("读取数据");
  this.appendValueInput("at24c32_readmem_area")
      .setCheck(null)  
      .appendField("地址");
  this.appendValueInput("at24c32_readmem_data")
      .setCheck(null)  
      .appendField("保存到变量");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("AT24C32指定地址读取数据，地址的范围是0-4096");
  this.setHelpUrl("");
  }
};

//AT24C32指定地址读取数据，地址的范围是0-4096，数据为一字节，字节数必须要小于等于数组的大小
Blockly.Blocks.make_at24c32_readmem_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("AT24C32"), "at24c32_name")
      .appendField("读取数据");
  this.appendValueInput("at24c32_readmem_area")
      .setCheck(null)  
      .appendField("起始地址");
  this.appendValueInput("at24c32_readmem_data")
      .setCheck(null)  
      .appendField("保存到数组");
  this.appendValueInput("at24c32_readmem_num")
      .setCheck(null)  
      .appendField("字节数");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("AT24C32指定地址读取数据，地址的范围是0-4096，数据为一字节，字节数必须要小于等于数组的大小");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_rtc_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_3.png", 25, 25, "*"))
      .appendField("初始化")
      .appendField("时钟模块(I2C)")
      .appendField(new Blockly.FieldDropdown([["DS1307","DS1307"],["DS3231","DS3231"],["PCF8523","PCF8523"]]), "rtc_type")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化时钟模块\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_rtc_adjust_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_3.png", 25, 25, "*"))
      .appendField("设置时钟模块")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name");
  this.appendValueInput("adjust_date")
      .setCheck(null)  
      .appendField(" 日期");
  this.appendValueInput("adjust_time")
      .setCheck(null)  
      .appendField("时间");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("设置时钟模块的日期与时间");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_get_system_date_time= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("获取烧录")
      .appendField(new Blockly.FieldDropdown([["日期","DATE"],["时间","TIME"]]), "get_system_data");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("获取烧录程序时的日期或时间");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_rtc_adjust_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_3.png", 25, 25, "*"))
      .appendField("设置时钟模块")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name");
  this.appendValueInput("adjust_year")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("年");
  this.appendValueInput("adjust_month")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("月");
  this.appendValueInput("adjust_day")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("日");
  this.appendValueInput("adjust_hour")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("时");
  this.appendValueInput("adjust_minute")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("分");
  this.appendValueInput("adjust_second")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("秒");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("设置时钟模块的日期与时间");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_rtc_adjust_3= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_3.png", 25, 25, "*"))
      .appendField("设置时钟模块")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name");
  this.appendValueInput("adjust_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["年","0"],["月","1"],["日","2"],["时","3"],["分","4"],["秒","5"]]), "adjust_type")
      .appendField("为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("设置时钟模块的年、月、日、时、分、秒");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_rtc_get_time_date_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("获取")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField("中的")
      .appendField(new Blockly.FieldDropdown([["年","year"],["月","month"],["日","day"],["时","hour"],["分","minute"],["秒","second"],["周","dayOfTheWeek"]]), "get_time_date_data");
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("获取时钟模块中的年、月、日、时、分、秒、周，返回数据的类型为uint8_t");
  this.setHelpUrl("");
  }
};

//获取DS1307中的时间与日期
Blockly.Blocks.make_rtc_get_time_date= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_3.png", 25, 25, "*"))
      .appendField("时间&日期")
      .appendField(new Blockly.FieldTextInput("now"), "get_time_date_name");
  this.appendValueInput("get_time_date_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 赋值为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("获取RTC中的时间与日期");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_calculate_date_time= {
  init: function() { 
  this.appendValueInput("future_day")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("future_hour")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("天 ");
  this.appendValueInput("future_minute")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("时 ");
  this.appendValueInput("future_second")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("分 ");
  this.appendDummyInput()  
      .appendField("秒");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("返回当前时间加xx天xx时xx分xx秒");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_calculate_date_time_1= {
  init: function() { 
  this.appendValueInput("future_second")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendDummyInput()  
      .appendField("秒");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("返回当前时间加xx秒");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_rtc_get_temperature= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("获取DS3231时钟模块")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField("中的温度");
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("获取DS3231时钟模块内部温度传感器中的温度");
  this.setHelpUrl("");
  }
};

/********** RTC时钟模块 **********/
/*
* 通用
*/
//RTC时间日期可读？ | RTC正在运行？
Blockly.Blocks.make_rtc_IsDateTimeValid_GetIsRunning= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("RTC时钟")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(new Blockly.FieldDropdown([["时间日期可读？","IsDateTimeValid"],["正在运行？","GetIsRunning"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->RTC时间日期可读？ | RTC正在运行？\n"
   +"2.语法:\n"
   +"->RTC时间日期可读？ - bool IsDateTimeValid()\n"
   +"->RTC正在运行？ - bool GetIsRunning()\n"
   +"3.参数:无\n"
   +"4.返回值:boolean型数据\n"
   +"->false - 无法获取时间日期|RTC不工作\n"
   +"->true - 可获取时间日期|RTC正在工作"
    );
  this.setHelpUrl("");
  }
};

//RTC时钟 设置运行状态
Blockly.Blocks.make_rtc_ds1302_SetIsRunning= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("RTC时钟")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      //.appendField(new Blockly.FieldDropdown([["写保护","SetIsWriteProtected"],["运行","SetIsRunning"]]), "type")
      .appendField(" 运行");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->RTC时钟 设置运行状态\n"
   +"2.语法:\n"
   +"->void SetIsRunning(bool isRunning)\n"
   +"3.参数:\n"
   +"->isRunning:true - 设备工作，false - 设备停止\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

/*
//设置RTC时钟的时间与日期
Blockly.Blocks.make_rtc_SetDateTime= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("设置RTC时钟")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name");
  this.appendValueInput("date")
      .setCheck(null)  
      .appendField(" 日期");
  this.appendValueInput("time")
      .setCheck(null)  
      .appendField("时间");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
*/

/*
//设置RTC时钟的时间与日期-1
Blockly.Blocks.make_rtc_SetDateTime_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("设置RTC时钟")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name");
  this.appendValueInput("year")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 年");
  this.appendValueInput("month")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("月");
  this.appendValueInput("day")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("日");
  this.appendValueInput("hour")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("时");
  this.appendValueInput("minute")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("分");
  this.appendValueInput("second")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("秒");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
*/

/*
//设置RTC时钟的时间与日期-3
Blockly.Blocks.make_rtc_SetDateTime_3= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))  
      .appendField("设置RTC时钟")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("时间与日期为 时间&日期")
      .appendField(new Blockly.FieldTextInput("now"), "rtcdatetime_name")
      .appendField("");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
*/

/*
//时间&日期赋值
Blockly.Blocks.make_RtcDateTime_get_time_date_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))  
      .appendField("时间&日期")
      .appendField(new Blockly.FieldTextInput("now"), "rtcdatetime_name")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 赋值为 RTC时钟")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField("当前时间与日期");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
*/

/*
//设置时间&日期的时间与日期
Blockly.Blocks.make_RtcDateTime_SetDateTime= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("时间&日期")
      .appendField(new Blockly.FieldTextInput("now"), "rtc_name")
      .appendField(" 赋值为");
  this.appendValueInput("date")
      .setCheck(null)  
      .appendField("日期");
  this.appendValueInput("time")
      .setCheck(null)  
      .appendField("时间");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
*/

/*
//设置时间&日期的时间与日期-1
Blockly.Blocks.make_RtcDateTime_SetDateTime_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("时间&日期")
      .appendField(new Blockly.FieldTextInput("now"), "rtc_name")
      .appendField(" 赋值为");
  this.appendValueInput("year")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("年");
  this.appendValueInput("month")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("月");
  this.appendValueInput("day")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("日");
  this.appendValueInput("hour")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("时");
  this.appendValueInput("minute")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("分");
  this.appendValueInput("second")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("秒");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
*/

/*
* RTC时钟
*/
//RTC时钟设置时间与日期
Blockly.Blocks.make_RTC_SetDateTime= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("RTC时钟")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 时间日期设为");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->RTC时钟 设置时间与日期\n"
   +"2.语法:\n"
   +"->void SetDateTime(const RtcDateTime& dt)\n"
   +"3.参数:\n"
   +"->dt:输入的时间与日期\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//调整RTC时钟的时间与日期
Blockly.Blocks.make_rtc_SetDateTime_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("RTC时钟")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["年","0"],["月","1"],["日","2"],["时","3"],["分","4"],["秒","5"]]), "type")
      .appendField("设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->RTC时钟 调整时间与日期\n"
   +"2.语法:\n"
   +"->int rtc_SetDateTime(int select_data, int data)\n"
   +"3.参数:\n"
   +"->select_data:筛选要调整的项目\n"
   +"->data:调整的数据\n"
   +"4.返回值:boolean型数据\n"
   +"->true - 设置成功\n"
   +"->false - 设置失败\n"
    );
  this.setHelpUrl("");
  }
};

//获取RTC时钟的时间和日期
Blockly.Blocks.make_rtc_get_now_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("RTC时钟")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 获取当前时间和日期");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->RTC时钟 获取当前时间和日期\n"
   +"2.语法:\n"
   +"->RtcDateTime GetDateTime()\n"
   +"3.参数:\n"
   +"->dt:输入的时间与日期\n"
   +"4.返回值:RtcDateTime型数据"
    );
  this.setHelpUrl("");
  }
};

//获取RTC时钟的年、月、日、时、分、秒、周
Blockly.Blocks.make_RtcDateTime_get_time_date= {
  init: function() { 
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))  
      .appendField("RTC时钟")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["年","Year"],["月","Month"],["日","Day"],["时","Hour"],["分","Minute"],["秒","Second"],["周","DayOfWeek"]]), "type");
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->RTC时钟 获取年、月、日、时、分、秒、周\n"
   +"2.语法:\n"
   +"->获取年 - uint16_t GetDateTime().Year()\n"
   +"->获取月 - uint8_t GetDateTime().Month()\n"
   +"->获取日 - uint8_t GetDateTime().Day()\n"
   +"->获取时 - uint8_t GetDateTime().Hour()\n"
   +"->获取分 - uint8_t GetDateTime().Minute()\n"
   +"->获取秒 - uint8_t GetDateTime().Second()\n"
   +"->获取周 - uint8_t GetDateTime().DayOfWeek()\n"
   +"3.参数:无\n"
   +"4.返回值:uint16_t或uint8_t型数据"
    );
  this.setHelpUrl("");
  }
};

/*
* 时间&日期
*/
//初始化时间&日期
Blockly.Blocks.make_DateTime_declare= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("声明类变量")
      .appendField(new Blockly.FieldTextInput("now"), "DateTime_name")
      .appendField("为 时间&日期 并赋值");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//时间&日期赋值
Blockly.Blocks.make_DateTime_set_data= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("时间&日期")
      .appendField(new Blockly.FieldTextInput("now"), "DateTime_name")
      .appendField("赋值为");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//获取时间&日期
Blockly.Blocks.make_DateTime_get_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("时间&日期")
      .appendField(new Blockly.FieldTextInput("now"), "DateTime_name");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//RtcDateTime时间与日期可读？
Blockly.Blocks.make_DateTime_IsValid= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("时间&日期")
      .appendField(new Blockly.FieldTextInput("now"), "DateTime_name")
      .appendField(" 时间日期可读？");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->RtcDateTime 时间与日期可读？\n"
   +"2.语法:\n"
   +"->bool IsValid() const;\n"
   +"3.参数:无\n"
   +"4.返回值:boolean型数据\n"
   +"->false - 无法获取时间日期\n"
   +"->true - 可获取时间日期"
    );
  this.setHelpUrl("");
  }
};

//获取RtcDateTime的时间与日期-1
Blockly.Blocks.make_DateTime_get_1= {
  init: function() { 
  this.appendValueInput("date")
      .setCheck(null)  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("日期");
  this.appendValueInput("time")
      .setCheck(null)  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("时间");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->RtcDateTime 获取的时间与日期\n"
   +"2.语法:\n"
   +"->RtcDateTime RtcDateTime(const char* date, const char* time);\n"
   +"3.参数:\n"
   +"date:日期数据\n"
   +"time:时间数据\n"
   +"4.返回值:RtcDateTime型数据"
    );
  this.setHelpUrl("");
  }
};

//获取RtcDateTime的时间与日期-2
Blockly.Blocks.make_DateTime_get_2= {
  init: function() { 
  this.appendValueInput("year")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("年");
  this.appendValueInput("month")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("月");
  this.appendValueInput("day")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("日");
  this.appendValueInput("hour")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("时");
  this.appendValueInput("minute")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("分");
  this.appendValueInput("second")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("秒");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->RtcDateTime 获取的时间与日期\n"
   +"2.语法:\n"
   +"RtcDateTime RtcDateTime(uint16_t year, uint8_t month, uint8_t dayOfMonth, uint8_t hour, uint8_t minute, uint8_t second)\n"
   +"3.参数:\n"
   +"year:年(2000 - 2100)\n"
   +"month:月(1 - 12)\n"
   +"dayOfMonth:日(1 - 31)\n"
   +"hour:时(0 - 23)\n"
   +"minute:分(0 - 59)\n"
   +"second:秒(0 - 59)\n"
   +"4.返回值:RtcDateTime型数据"
    );
  this.setHelpUrl("");
  }
};

//RtcDateTime增加或减少时间
Blockly.Blocks.make_DateTime_add_remove= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldDropdown([["+","+"],["-","-"]]), "type");
  this.appendValueInput("day")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("日");
  this.appendValueInput("hour")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("时");
  this.appendValueInput("minute")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("分");
  this.appendValueInput("second")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("秒");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->RtcDateTime 增加或减少时间\n"
   +"2.语法:\n"
   +"->增加时间 - void operator += (uint32_t seconds)\n"
   +"->减少时间 - void operator -= (uint32_t seconds)\n"
   +"3.参数:\n"
   +"seconds:需要增加的秒数\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//获取时间&日期的年、月、日、时、分、秒、周
Blockly.Blocks.make_RtcDateTime_get_time_date_2= {
  init: function() { 
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))  
      .appendField("时间&日期")
      .appendField(new Blockly.FieldTextInput("now"), "rtc_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["年","Year"],["月","Month"],["日","Day"],["时","Hour"],["分","Minute"],["秒","Second"],["周","DayOfWeek"]]), "type");
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->RtcDateTime 获取年、月、日、时、分、秒、周\n"
   +"2.语法:\n"
   +"->获取年 - uint16_t Year()\n"
   +"->获取月 - uint8_t Month()\n"
   +"->获取日 - uint8_t Day()\n"
   +"->获取时 - uint8_t Hour()\n"
   +"->获取分 - uint8_t Minute()\n"
   +"->获取秒 - uint8_t Second()\n"
   +"->获取周 - uint8_t DayOfWeek()\n"
   +"3.参数:无\n"
   +"4.返回值:uint16_t或uint8_t型数据"
    );
  this.setHelpUrl("");
  }
};

/*
* AT24C32
*/
//初始化AT24C32(使用硬件I2C)
Blockly.Blocks.make_rtc_at24c32_begin= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("初始化AT24C32")
      .appendField(new Blockly.FieldTextInput("RtcEeprom"), "eeprom_name")
      .appendField(" 地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化AT24C32存储器\n"
   +"2.语法:\n"
   +"->EepromAt24c32(T_WIRE_METHOD& wire, uint8_t addressBits = 0b111)\n"
   +"3.参数:\n"
   +"->wire:使用硬件I2C|软件模拟I2C\n"
   +"->addressBits:AT24C32存储器的地址\n"
   +"4.返回值:无\n"
   +"5.I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

//初始化AT24C32(使用软件模拟I2C)
Blockly.Blocks.make_rtc_at24c32_begin_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("初始化AT24C32")
      .appendField(new Blockly.FieldTextInput("RtcEeprom"), "eeprom_name");
  this.appendValueInput("sda")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" SDA#");
  this.appendValueInput("scl")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("SCL#");
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化AT24C32存储器\n"
   +"2.语法:\n"
   +"->EepromAt24c32(T_WIRE_METHOD& wire, uint8_t addressBits = 0b111)\n"
   +"3.参数:\n"
   +"->wire:使用硬件I2C|软件模拟I2C\n"
   +"->addressBits:AT24C32存储器的地址\n"
   +"4.返回值:无\n"
   +"5.I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

//AT24C32 地址
Blockly.Blocks.make_rtc_at24c32_address= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["0x50","0b000"],["0x51","0b001"],["0x52","0b010"],["0x53","0b011"],["0x54","0b100"],["0x55","0b101"],["0x56","0b110"],["0x57","0b111"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "AT24C32地址\n"
   +"0x50 - 0b000\n"
   +"0x51 - 0b001\n"
   +"0x52 - 0b010\n"
   +"0x53 - 0b011\n"
   +"0x54 - 0b100\n"
   +"0x55 - 0b101\n"
   +"0x56 - 0b110\n"
   +"0x57 - 0b111"
    );
  this.setHelpUrl("");
  }
};

//AT24C32 返回上次连接的错误码
Blockly.Blocks.make_rtc_at24c32_LastError= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("AT24C32")
      .appendField(new Blockly.FieldTextInput("RtcEeprom"), "eeprom_name")
      .appendField(" 返回上次连接的错误码");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->AT24C32 返回上次连接的错误码，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t LastError()\n"
   +"3.参数:无\n"
   +"4.返回值:uint8_t型数据\n"
   +"->0 - 成功\n"
   +"->1 - 数据溢出\n"
   +"->2 - 发送地址时从机接收到NACK\n"
   +"->3 - 发送数据时接收到NACK\n"
   +"->4 - 其他错误"
    );
  this.setHelpUrl("");
  }
};

//AT24C32 写入字节
Blockly.Blocks.make_rtc_at24c32_SetMemory_byte= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("AT24C32")
      .appendField(new Blockly.FieldTextInput("RtcEeprom"), "eeprom_name")
      .appendField(" 写入(字节) EEPROM 地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数值");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->AT24C32 写入字节\n"
   +"2.语法:\n"
   +"->void SetMemory(uint16_t memoryAddress, uint8_t value)\n"
   +"3.参数:\n"
   +"->memoryAddress:储存数据的地址(0 - 4095)\n"
   +"->value:需要储存数据\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//AT24C32 读取字节
Blockly.Blocks.make_rtc_at24c32_GetMemory_byte= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("AT24C32")
      .appendField(new Blockly.FieldTextInput("RtcEeprom"), "eeprom_name")
      .appendField(" 读取(字节) EEPROM 地址");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->AT24C32 读取字节，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t GetMemory(uint16_t memoryAddress)\n"
   +"3.参数:\n"
   +"->memoryAddress:数据的地址(0 - 4095)\n"
   +"4.返回值:uint8_t型数据"
    );
  this.setHelpUrl("");
  }
};

//AT24C32 写入字节数组
Blockly.Blocks.make_rtc_at24c32_SetMemory_list= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("AT24C32")
      .appendField(new Blockly.FieldTextInput("RtcEeprom"), "eeprom_name")
      .appendField(" 写入(字节数组) EEPROM 起始地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数据");
  this.appendValueInput("length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->AT24C32 写入字节数组，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t SetMemory(uint16_t memoryAddress, const uint8_t* pValue, uint8_t countBytes)\n"
   +"3.参数:\n"
   +"->memoryAddress:储存数据的地址(0 - 4095)\n"
   +"->pValue:需要储存的数组\n"
   +"->countBytes:数组的长度\n"
   +"4.返回值:uint8_t型数据(写入数据的实际个数)"
    );
  this.setHelpUrl("");
  }
};

//AT24C32时钟模块 读取字节数组
Blockly.Blocks.make_rtc_at24c32_GetMemory_list= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("AT24C32")
      .appendField(new Blockly.FieldTextInput("RtcEeprom"), "eeprom_name")
      .appendField(" 读取(字节数组) EEPROM 地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("保存到数组");
  this.appendValueInput("length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->AT24C32 读取字节数组，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t GetMemory(uint16_t memoryAddress, uint8_t* pValue, uint8_t countBytes)\n"
   +"3.参数:\n"
   +"->memoryAddress:数据的地址(0 - 4095)\n"
   +"->pValue:保存数据所用的数组\n"
   +"->countBytes:数组的长度\n"
   +"4.返回值:uint8_t型数据(读取数据的实际个数)(不使用返回值)"
    );
  this.setHelpUrl("");
  }
};

//AT24C32时钟模块 读取字节数组，返回读取结果
Blockly.Blocks.make_rtc_at24c32_GetMemory_list_return= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("AT24C32")
      .appendField(new Blockly.FieldTextInput("RtcEeprom"), "eeprom_name")
      .appendField(" 读取(字节数组) EEPROM 起始地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("保存到数组");
  this.appendValueInput("length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("返回读取结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->AT24C32 读取字节数组，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t GetMemory(uint16_t memoryAddress, uint8_t* pValue, uint8_t countBytes)\n"
   +"3.参数:\n"
   +"->memoryAddress:数据的地址(0 - 4095)\n"
   +"->pValue:保存数据所用的数组\n"
   +"->countBytes:数组的长度\n"
   +"4.返回值:uint8_t型数据(读取数据的实际个数)"
    );
  this.setHelpUrl("");
  }
};

/*
* DS1302
*/
//初始化DS1302时钟模块
Blockly.Blocks.make_rtc_ds1302_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("初始化DS1302")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name");
  this.appendValueInput("rst")
      .setCheck(null)  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(" RST#");
  this.appendValueInput("dat")
      .setCheck(null)  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("DAT#");
  this.appendValueInput("clk")
      .setCheck(null)  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("CLK#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化DS1302时钟模块\n"
   +"2.语法:\n"
   +"->RtcDS1302(T_WIRE_METHOD& wire)\n"
   +"->void Begin()\n"
   +"3.参数:\n"
   +"->wire:使用硬件I2C|软件模拟I2C\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//DS1302时钟模块 写保护？
Blockly.Blocks.make_rtc_ds1302_GetIsWriteProtected= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1302")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 写保护？");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1302时钟模块 写保护？，返回数据的类型为boolean\n"
   +"2.语法:\n"
   +"->bool GetIsWriteProtected()\n"
   +"3.参数:无\n"
   +"4.返回值:boolean型数据\n"
   +"->true - DS1302写保护开启，无法写入数据\n"
   +"->false - DS1302写保护关闭，可以写入数据"
    );
  this.setHelpUrl("");
  }
};

//DS1302时钟模块 设置写保护
Blockly.Blocks.make_rtc_ds1302_SetIsWriteProtected= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1302")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      //.appendField(new Blockly.FieldDropdown([["写保护","SetIsWriteProtected"],["运行","SetIsRunning"]]), "type")
      .appendField(" 写保护");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1302时钟模块 设置写保护\n"
   +"2.语法:\n"
   +"->void SetIsWriteProtected(bool isWriteProtected)\n"
   +"3.参数:\n"
   +"->isWriteProtected:true - 写保护开启，false - 写保护关闭\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//DS1302时钟模块 设置涓流充电功能
Blockly.Blocks.make_rtc_ds1302_SetTrickleChargeSettings= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1302")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 涓流充电功能")
      .appendField(new Blockly.FieldDropdown([["开启","1010"],["关闭","0101"]]), "type1")
      .appendField(" Vcc1和Vcc2之间")
      .appendField(new Blockly.FieldDropdown([["一个二极管","01"],["两个二极管(串联)","10"],["无二极管","11"]]), "type2")
      .appendField(new Blockly.FieldDropdown([["一个2K电阻","01"],["一个4K电阻","10"],["一个8K电阻","11"],["无电阻","00"]]), "type3");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1302时钟模块 设置涓流充电功能\n"
   +"2.语法:\n"
   +"->void SetTrickleChargeSettings(uint8_t setting)\n"
   +"3.参数:\n"
   +"->setting:输入工作模式\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//DS1302时钟模块 获取涓流充电设置
Blockly.Blocks.make_rtc_ds1302_GetTrickleChargeSettings= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1302")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 获取涓流充电设置");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1302时钟模块 获取涓流充电设置，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t GetTrickleChargeSettings()\n"
   +"3.参数:无\n"
   +"4.返回值:uint8_t型数据"
    );
  this.setHelpUrl("");
  }
};

//DS1302时钟模块 写入字节
Blockly.Blocks.make_rtc_ds1302_SetMemory_byte= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1302")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 写入(字节) RAM 地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数值");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1302时钟模块 写入字节\n"
   +"2.语法:\n"
   +"->void SetMemory(uint8_t memoryAddress, uint8_t value)\n"
   +"3.参数:\n"
   +"->memoryAddress:储存数据的地址(0 - 31)\n"
   +"->value:需要储存数据\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//DS1302时钟模块 读取字节
Blockly.Blocks.make_rtc_ds1302_GetMemory_byte= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1302")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 读取(字节) RAM 地址");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1302时钟模块 读取字节，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t GetMemory(uint8_t memoryAddress)\n"
   +"3.参数:\n"
   +"->memoryAddress:数据的地址(0 - 31)\n"
   +"4.返回值:uint8_t型数据"
    );
  this.setHelpUrl("");
  }
};

//DS1302时钟模块 写入字节数组
Blockly.Blocks.make_rtc_ds1302_SetMemory_list= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1302")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 写入(字节数组) RAM 数据");
  this.appendValueInput("length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1302时钟模块 写入字节数组，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t SetMemory(const uint8_t* pValue, uint8_t countBytes)\n"
   +"3.参数:\n"
   +"->pValue:需要储存的数组\n"
   +"->countBytes:数组的长度\n"
   +"4.返回值:uint8_t型数据(写入数据的实际个数)"
    );
  this.setHelpUrl("");
  }
};

//DS1302时钟模块 读取字节数组
Blockly.Blocks.make_rtc_ds1302_GetMemory_list= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1302")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 读取(字节数组) RAM 保存到数组");
  this.appendValueInput("length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1302时钟模块 读取字节数组，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t GetMemory(uint8_t* pValue, uint8_t countBytes)\n"
   +"3.参数:\n"
   +"->pValue:保存数据所用的数组\n"
   +"->countBytes:数组的长度\n"
   +"4.返回值:uint8_t型数据(读取数据的实际个数)(不使用返回值)"
    );
  this.setHelpUrl("");
  }
};

//DS1302时钟模块 读取字节数组，返回读取结果
Blockly.Blocks.make_rtc_ds1302_GetMemory_list_return= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1302")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 读取(字节数组) RAM 保存到数组");
  this.appendValueInput("length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("返回读取结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1302时钟模块 读取字节数组，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t GetMemory(uint8_t* pValue, uint8_t countBytes)\n"
   +"3.参数:\n"
   +"->pValue:保存数据所用的数组\n"
   +"->countBytes:数组的长度\n"
   +"4.返回值:uint8_t型数据(读取数据的实际个数)"
    );
  this.setHelpUrl("");
  }
};

/*
* DS1307
*/
//初始化DS1307、DS3231时钟模块(I2C)
Blockly.Blocks.make_rtc_ds1307_3231_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("初始化")
      .appendField(new Blockly.FieldDropdown([["DS1307","RtcDS1307"],["DS3231","RtcDS3231"]]), "rtc_type")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化DS1307、DS3231时钟模块\n"
   +"2.语法:\n"
   +"->初始化DS1307->RtcDS1307(T_WIRE_METHOD& wire)\n"
   +"->初始化DS3231->RtcDS3231(T_WIRE_METHOD& wire)\n"
   +"3.参数:\n"
   +"->wire:使用硬件I2C|软件模拟I2C\n"
   +"4.返回值:无\n"
   +"5.I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

//初始化DS1307、DS3231时钟模块(I2C)-可以定义管脚
Blockly.Blocks.make_rtc_ds1307_3231_begin_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("初始化")
      .appendField(new Blockly.FieldDropdown([["DS1307","RtcDS1307"],["DS3231","RtcDS3231"]]), "rtc_type")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name");
  this.appendValueInput("sda")
      .setCheck(null)  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(" SDA#");
  this.appendValueInput("scl")
      .setCheck(null)  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("SCL#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化DS1307、DS3231时钟模块\n"
   +"2.语法:\n"
   +"->初始化DS1307->RtcDS1307(T_WIRE_METHOD& wire)\n"
   +"->初始化DS3231->RtcDS3231(T_WIRE_METHOD& wire)\n"
   +"3.参数:\n"
   +"->wire:使用硬件I2C|软件模拟I2C\n"
   +"4.返回值:无\n"
   +"5.I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

//DS1307时钟模块 返回上次连接的错误码
Blockly.Blocks.make_rtc_ds1307_LastError= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1307")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 返回上次连接的错误码");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1307时钟模块 返回上次连接的错误码，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t LastError()\n"
   +"3.参数:无\n"
   +"4.返回值:uint8_t型数据\n"
   +"->0 - 成功\n"
   +"->1 - 数据溢出\n"
   +"->2 - 发送地址时从机接收到NACK\n"
   +"->3 - 发送数据时接收到NACK\n"
   +"->4 - 其他错误"
    );
  this.setHelpUrl("");
  }
};

//DS1307时钟模块 写入字节
Blockly.Blocks.make_rtc_ds1307_SetMemory_byte= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1307")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 写入(字节) RAM 地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数值");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1307时钟模块 写入字节\n"
   +"2.语法:\n"
   +"->void SetMemory(uint8_t memoryAddress, uint8_t value)\n"
   +"3.参数:\n"
   +"->memoryAddress:储存数据的地址(0 - 55)\n"
   +"->value:需要储存数据\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//DS1307时钟模块 读取字节
Blockly.Blocks.make_rtc_ds1307_GetMemory_byte= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1307")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 读取(字节) RAM 地址");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1307时钟模块 读取字节，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t GetMemory(uint8_t memoryAddress)\n"
   +"3.参数:\n"
   +"->memoryAddress:数据的地址(0 - 55)\n"
   +"4.返回值:uint8_t型数据"
    );
  this.setHelpUrl("");
  }
};

//DS1307时钟模块 写入字节数组
Blockly.Blocks.make_rtc_ds1307_SetMemory_list= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1307")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 写入(字节数组) RAM 起始地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数据");
  this.appendValueInput("length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1307时钟模块 写入字节数组，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t SetMemory(uint8_t memoryAddress, const uint8_t* pValue, uint8_t countBytes)\n"
   +"3.参数:\n"
   +"->memoryAddress:数据的起始地址\n"
   +"->pValue:需要储存的数组\n"
   +"->countBytes:数组的长度\n"
   +"4.返回值:uint8_t型数据(写入数据的实际个数)"
    );
  this.setHelpUrl("");
  }
};

//DS1307时钟模块 读取字节数组
Blockly.Blocks.make_rtc_ds1307_GetMemory_list= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1307")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 读取(字节数组) RAM 起始地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("保存到数组");
  this.appendValueInput("length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1307时钟模块 读取字节数组，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t GetMemory(uint8_t memoryAddress, uint8_t* pValue, uint8_t countBytes)\n"
   +"3.参数:\n"
   +"->memoryAddress:数据的起始地址\n"
   +"->pValue:保存数据所用的数组\n"
   +"->countBytes:数组的长度\n"
   +"4.返回值:uint8_t型数据(读取数据的实际个数)(不使用返回值)"
    );
  this.setHelpUrl("");
  }
};

//DS1307时钟模块 读取字节数组，返回读取结果
Blockly.Blocks.make_rtc_ds1307_GetMemory_list_return= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1307")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 读取(字节数组) RAM 起始地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("保存到数组");
  this.appendValueInput("length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("返回读取结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1307时钟模块 读取字节数组，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t GetMemory(uint8_t memoryAddress, uint8_t* pValue, uint8_t countBytes)\n"
   +"3.参数:\n"
   +"->memoryAddress:数据的起始地址\n"
   +"->pValue:保存数据所用的数组\n"
   +"->countBytes:数组的长度\n"
   +"4.返回值:uint8_t型数据(读取数据的实际个数)"
    );
  this.setHelpUrl("");
  }
};

//DS1307时钟模块 SQW管脚输出方波
Blockly.Blocks.make_rtc_ds1307_SetSquareWavePin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS1307")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" SQW管脚输出")
      .appendField(new Blockly.FieldDropdown([["1HZ方波","DS1307SquareWaveOut_1Hz"],["4.096kHZ方波","DS1307SquareWaveOut_4kHz"],["8.192kHZ方波","DS1307SquareWaveOut_8kHz"],["32.768kHZ方波","DS1307SquareWaveOut_32kHz"],["高电平","DS1307SquareWaveOut_High"],["低电平","DS1307SquareWaveOut_Low"]]), "type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS1307时钟模块 SQW管脚输出方波\n"
   +"2.语法:\n"
   +"->void SetSquareWavePin(DS1307SquareWaveOut pinMode)\n"
   +"3.参数:\n"
   +"->pinMode:输入SQW管脚的工作模式\n"
   +"- ->1HZ方波 - DS1307SquareWaveOut_1Hz\n"
   +"- ->4.096kHZ方波 - DS1307SquareWaveOut_4kHz\n"
   +"- ->8.192kHZ方波 - DS1307SquareWaveOut_8kHz\n"
   +"- ->32.768kHZ方波 - DS1307SquareWaveOut_32kHz\n"
   +"- ->高电平 - DS1307SquareWaveOut_High\n"
   +"- ->低电平 - DS1307SquareWaveOut_Low\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

/*
* DS3231
*/
//DS3231时钟模块 返回上次连接的错误码
Blockly.Blocks.make_rtc_ds3231_LastError= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 返回上次连接的错误码");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3231时钟模块 返回上次连接的错误码，返回数据的类型为uint8_t\n"
   +"2.语法:\n"
   +"->uint8_t LastError()\n"
   +"3.参数:无\n"
   +"4.返回值:uint8_t型数据\n"
   +"->0 - 成功\n"
   +"->1 - 数据溢出\n"
   +"->2 - 发送地址时从机接收到NACK\n"
   +"->3 - 发送数据时接收到NACK\n"
   +"->4 - 其他错误"
    );
  this.setHelpUrl("");
  }
};

//DS3231时钟模块 打开或关闭32KHZ管脚
Blockly.Blocks.make_rtc_ds3231_Enable32kHzPin= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 32KHZ管脚");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3231时钟模块 打开或关闭32KHZ管脚\n"
   +"2.语法:\n"
   +"->void Enable32kHzPin(bool enable)\n"
   +"3.参数:\n"
   +"->enable:打开(true)或关闭(false)\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//开-关
Blockly.Blocks.make_pin_on_off= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["开","true"],["关","false"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3231时钟模块 设置SQW管脚的输出模式
Blockly.Blocks.make_rtc_ds3231_SetSquareWavePin= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" SQW管脚")
      .appendField(new Blockly.FieldDropdown([["禁用","DS3231SquareWavePin_ModeNone"],["输出闹钟1告警","DS3231SquareWavePin_ModeAlarmOne"],["输出闹钟2告警","DS3231SquareWavePin_ModeAlarmTwo"],["输出闹钟1、2告警","DS3231SquareWavePin_ModeAlarmBoth"],["输出自定义方波","DS3231SquareWavePin_ModeClock"]]), "type")
      .appendField(" 电池备份方波使能");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3231时钟模块 设置SQW管脚的输出模式\n"
   +"2.语法:\n"
   +"->void SetSquareWavePin(DS3231SquareWavePinMode pinMode, bool enableWhileInBatteryBackup = true)\n"
   +"3.参数:\n"
   +"->pinMode:设置SQW管脚的输出模式\n"
   +"-->DS3231SquareWavePin_ModeNone - 禁用\n"
   +"-->DS3231SquareWavePin_ModeAlarmOne - 输出闹钟1告警\n"
   +"-->DS3231SquareWavePin_ModeAlarmTwo - 输出闹钟2告警\n"
   +"-->DS3231SquareWavePin_ModeAlarmBoth - 输出闹钟1、2告警\n"
   +"-->DS3231SquareWavePin_ModeClock - 输出自定义方波\n"
   +"->enableWhileInBatteryBackup:打开(true)或关闭(false)\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//DS3231时钟模块 设置SQW管脚的输出方波的频率
Blockly.Blocks.make_rtc_ds3231_SetSquareWavePinClockFrequency= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 输出方波频率设为")
      .appendField(new Blockly.FieldDropdown([["1HZ","DS3231SquareWaveClock_1Hz"],["1.024kHZ","DS3231SquareWaveClock_1kHz"],["4.096kHZ","DS3231SquareWaveClock_4kHz"],["8.192kHZ","DS3231SquareWaveClock_8kHz"]]), "type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3231时钟模块 设置SQW管脚输出方波的频率\n"
   +"2.语法:\n"
   +"->void SetSquareWavePinClockFrequency(DS3231SquareWaveClock freq)\n"
   +"3.参数:\n"
   +"->freq:设置SQW管脚输出方波频率\n"
   +"-->DS3231SquareWaveClock_1Hz - 1HZ\n"
   +"-->DS3231SquareWaveClock_1kHz - 1.024kHZ\n"
   +"-->DS3231SquareWaveClock_4kHz - 4.096kHZ\n"
   +"-->DS3231SquareWaveClock_8kHz - 8.192kHZ\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//DS3231时钟模块 设置闹钟1和闹钟2
Blockly.Blocks.make_rtc_ds3231_SetAlarm= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(new Blockly.FieldDropdown([["闹钟1","SetAlarmOne"],["闹钟2","SetAlarmTwo"]]), "type")
      .appendField("设为");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3231时钟模块 设置闹钟1和闹钟2\n"
   +"2.语法:\n"
   +"->设置闹钟1 - void SetAlarmOne(const DS3231AlarmOne& alarm)\n"
   +"->设置闹钟2 - void SetAlarmTwo(const DS3231AlarmTwo& alarm)\n"
   +"3.参数:\n"
   +"->alarm:设置闹钟的时间和工作模式\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//DS3231时钟模块 获取闹钟1的日、时、分、秒、工作模式
Blockly.Blocks.make_DS3231_getAlarm1data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 获取闹钟1")
      .appendField(new Blockly.FieldDropdown([["日","DayOf"],["时","Hour"],["分","Minute"],["秒","Second"],["工作模式","ControlFlags"]]), "type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3231时钟模块 获取闹钟1的日、时、分、秒、工作模式，返回数据类型为uint8_t(日、时、分、秒)，DS3231AlarmOneControl(工作模式)\n"
   +"2.语法:\n"
   +"->获取日 - uint8_t DayOf() const\n"
   +"->获取时 - uint8_t Hour() const\n"
   +"->获取分 - uint8_t Minute() const\n"
   +"->获取秒 - uint8_t Second() const\n"
   +"->获取工作模式 - DS3231AlarmOneControl ControlFlags()\n"
   +"3.参数:无\n"
   +"4.返回值:uint8_t/DS3231AlarmOneControl型数据"
    );
  this.setHelpUrl("");
  }
};

//DS3231时钟模块 获取闹钟2的日、时、分、工作模式
Blockly.Blocks.make_DS3231_getAlarm2data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 获取闹钟2")
      .appendField(new Blockly.FieldDropdown([["日","DayOf"],["时","Hour"],["分","Minute"],["工作模式","ControlFlags"]]), "type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3231时钟模块 获取闹钟2的日、时、分、工作模式，返回数据类型为uint8_t(日、时、分)，DS3231AlarmOneControl(工作模式)\n"
   +"2.语法:\n"
   +"->获取日 - uint8_t DayOf() const\n"
   +"->获取时 - uint8_t Hour() const\n"
   +"->获取分 - uint8_t Minute() const\n"
   +"->获取工作模式 - DS3231AlarmOneControl ControlFlags()\n"
   +"3.参数:无\n"
   +"4.返回值:uint8_t/DS3231AlarmOneControl型数据"
    );
  this.setHelpUrl("");
  }
};

//DS3231时钟模块 获取闹钟1、闹钟2的时间和工作模式
Blockly.Blocks.make_DS3231_getAlarm= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["闹钟1","GetAlarmOne"],["闹钟2","GetAlarmTwo"]]), "type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3231时钟模块 获取闹钟1、闹钟2的时间和工作模式，返回数据的类型为DS3231AlarmOne(闹钟1)，DS3231AlarmTwo(闹钟2)\n"
   +"2.语法:\n"
   +"->获取闹钟1 - DS3231AlarmOne GetAlarmOne()\n"
   +"->获取闹钟2 - DS3231AlarmTwo GetAlarmTwo()\n"
   +"3.参数:无\n"
   +"4.返回值:DS3231AlarmOne/DS3231AlarmTwo型数据"
    );
  this.setHelpUrl("");
  }
};

//DS3231时钟模块 允许其他闹钟再次告警
Blockly.Blocks.make_rtc_ds3231_LatchAlarmsTriggeredFlags= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 允许闹钟告警");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3231时钟模块 允许闹钟告警\n"
   +"2.语法:\n"
   +"->DS3231AlarmFlag LatchAlarmsTriggeredFlags()\n"
   +"3.参数:无\n"
   +"4.返回值:DS3231AlarmFlag型数据(不使用返回值)\n"
   +"->闹钟1告警 - DS3231AlarmFlag_Alarm1 - 0x01\n"
   +"->闹钟2告警 - DS3231AlarmFlag_Alarm2 - 0x02\n"
   +"->闹钟1、2告警 - DS3231AlarmFlag_AlarmBoth - 0x03"
    );
  this.setHelpUrl("");
  }
};

//DS3231时钟模块 返回上次告警信息，允许其他闹钟再次告警
Blockly.Blocks.make_rtc_ds3231_LatchAlarmsTriggeredFlags_return= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 返回上次告警信息 允许闹钟告警");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3231时钟模块 允许闹钟告警，返回数据的类型为DS3231AlarmFlag\n"
   +"2.语法:\n"
   +"->DS3231AlarmFlag LatchAlarmsTriggeredFlags()\n"
   +"3.参数:无\n"
   +"4.返回值:DS3231AlarmFlag型数据\n"
   +"->闹钟1告警 - DS3231AlarmFlag_Alarm1 - 0x01\n"
   +"->闹钟2告警 - DS3231AlarmFlag_Alarm2 - 0x02\n"
   +"->闹钟1、2告警 - DS3231AlarmFlag_AlarmBoth - 0x03"
    );
  this.setHelpUrl("");
  }
};

//DS3231时钟模块 获取温度
Blockly.Blocks.make_DS3231_getFloatDeg= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["温度(℃)","AsFloatDegC"],["温度(℉)","AsFloatDegF"]]), "type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3231时钟模块 获取温度，返回数据的类型为float\n"
   +"2.语法:\n"
   +"->获取温度(摄氏度) - float GetTemperature().AsFloatDegC()\n"
   +"->获取温度(华氏度) - float GetTemperature().AsFloatDegF()\n"
   +"3.参数:无\n"
   +"4.返回值:float型数据"
    );
  this.setHelpUrl("");
  }
};

/*
* DS3231闹钟1
*/
//DS3231闹钟1 声明
Blockly.Blocks.make_DS3231AlarmOne_declare= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("声明类变量")
      .appendField(new Blockly.FieldTextInput("alarm1"), "alarm_name")
      .appendField("为 DS3231闹钟1 并赋值");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3231闹钟1 赋值
Blockly.Blocks.make_DS3231AlarmOne_set= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231闹钟1")
      .appendField(new Blockly.FieldTextInput("alarm1"), "alarm_name")
      .appendField("赋值为");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3231闹钟1 取值
Blockly.Blocks.make_DS3231AlarmOne_get= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231闹钟1")
      .appendField(new Blockly.FieldTextInput("alarm1"), "alarm_name");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3231闹钟1 设置时间和工作模式
Blockly.Blocks.make_DS3231AlarmOne_set_time= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231闹钟1设置");
  this.appendValueInput("day")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("日");
  this.appendValueInput("hour")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("时");
  this.appendValueInput("minute")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("分");
  this.appendValueInput("second")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("秒");
  this.appendValueInput("flag")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("工作模式");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3231闹钟1 工作模式的类型
Blockly.Blocks.make_DS3231AlarmOne_flag_type= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["日、时、分、秒吻合时告警(DS3231闹钟1)","DS3231AlarmOneControl_HoursMinutesSecondsDayOfMonthMatch"],["时、分、秒、周吻合时告警(DS3231闹钟1)","DS3231AlarmOneControl_HoursMinutesSecondsDayOfWeekMatch"],["时、分、秒吻合时告警(DS3231闹钟1)","DS3231AlarmOneControl_HoursMinutesSecondsMatch"],["分、秒吻合时告警(DS3231闹钟1)","DS3231AlarmOneControl_MinutesSecondsMatch"],["秒吻合时告警(DS3231闹钟1)","DS3231AlarmOneControl_SecondsMatch"],["每秒告警一次(DS3231闹钟1)","DS3231AlarmOneControl_OncePerSecond"]]), "flag_type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3231闹钟1 获取日、时、分、秒、工作模式
Blockly.Blocks.make_DS3231AlarmOne_getAlarmdata= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231闹钟1")
      .appendField(new Blockly.FieldTextInput("alarm1"), "alarm_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["日","DayOf"],["时","Hour"],["分","Minute"],["秒","Second"],["工作模式","ControlFlags"]]), "type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

/*
* DS3231闹钟2
*/
//DS3231闹钟2 声明
Blockly.Blocks.make_DS3231AlarmTwo_declare= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("声明类变量")
      .appendField(new Blockly.FieldTextInput("alarm2"), "alarm_name")
      .appendField("为 DS3231闹钟2 并赋值");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3231闹钟2 赋值
Blockly.Blocks.make_DS3231AlarmTwo_set= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231闹钟2")
      .appendField(new Blockly.FieldTextInput("alarm2"), "alarm_name")
      .appendField("赋值为");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3231闹钟2 取值
Blockly.Blocks.make_DS3231AlarmTwo_get= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231闹钟2")
      .appendField(new Blockly.FieldTextInput("alarm2"), "alarm_name");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3231闹钟2 设置时间和工作模式
Blockly.Blocks.make_DS3231AlarmTwo_set_time= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231闹钟2设置");
  this.appendValueInput("day")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("日");
  this.appendValueInput("hour")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("时");
  this.appendValueInput("minute")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("分");
  this.appendValueInput("flag")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("工作模式");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3231闹钟2 工作模式的类型
Blockly.Blocks.make_DS3231AlarmTwo_flag_type= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["日、时、分吻合时告警(DS3231闹钟2)","DS3231AlarmTwoControl_HoursMinutesDayOfMonthMatch"],["时、分、周吻合时告警(DS3231闹钟2)","DS3231AlarmTwoControl_HoursMinutesDayOfWeekMatch"],["时、分吻合时告警(DS3231闹钟2)","DS3231AlarmTwoControl_HoursMinutesMatch"],["分吻合时告警(DS3231闹钟2)","DS3231AlarmTwoControl_MinutesMatch"],["每分钟告警一次(DS3231闹钟2)","DS3231AlarmTwoControl_OncePerMinute"]]), "flag_type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3231闹钟2 获取日、时、分、工作模式
Blockly.Blocks.make_DS3231AlarmTwo_getAlarmdata= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3231闹钟2")
      .appendField(new Blockly.FieldTextInput("alarm2"), "alarm_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["日","DayOf"],["时","Hour"],["分","Minute"],["工作模式","ControlFlags"]]), "type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

/*
* DS3234
*/
//初始化DS3234时钟模块(SPI)
Blockly.Blocks.make_rtc_ds3234_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("初始化DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name");
  this.appendValueInput("cs")
      .setCheck(null)  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(" CS#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

/*
* DS3234_test
*/
//DS3234时钟模块 打开或关闭32KHZ管脚
Blockly.Blocks.make_rtc_ds3234_Enable32kHzPin= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 32KHZ管脚");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3234时钟模块 打开或关闭32KHZ管脚\n"
   +"2.语法:\n"
   +"->void Enable32kHzPin(bool enable)\n"
   +"3.参数:\n"
   +"->enable:打开(true)或关闭(false)\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 设置SQW管脚的输出模式
Blockly.Blocks.make_rtc_ds3234_SetSquareWavePin= {
  init: function() { 
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" SQW管脚")
      .appendField(new Blockly.FieldDropdown([["禁用","DS3234SquareWavePin_ModeNone"],["电池备份方波使能","DS3234SquareWavePin_ModeBatteryBackup"],["输出闹钟1告警","DS3234SquareWavePin_ModeAlarmOne"],["输出闹钟2告警","DS3234SquareWavePin_ModeAlarmTwo"],["输出闹钟1、2告警","DS3234SquareWavePin_ModeAlarmBoth"],["输出自定义方波","DS3234SquareWavePin_ModeClock"]]), "type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3231时钟模块 设置SQW管脚的输出模式\n"
   +"2.语法:\n"
   +"->void SetSquareWavePin(DS3234SquareWavePinMode pinMode)\n"
   +"3.参数:\n"
   +"->pinMode:设置SQW管脚的输出模式\n"
   +"-->DS3234SquareWavePin_ModeNone - 禁用\n"
   +"-->DS3234SquareWavePin_ModeBatteryBackup - 电池备份方波使能\n"
   +"-->DS3234SquareWavePin_ModeAlarmOne - 输出闹钟1告警\n"
   +"-->DS3234SquareWavePin_ModeAlarmTwo - 输出闹钟2告警\n"
   +"-->DS3234SquareWavePin_ModeAlarmBoth - 输出闹钟1、2告警\n"
   +"-->DS3234SquareWavePin_ModeClock - 输出自定义方波\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 设置SQW管脚的输出方波的频率
Blockly.Blocks.make_rtc_ds3234_SetSquareWavePinClockFrequency= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 输出方波频率设为")
      .appendField(new Blockly.FieldDropdown([["1HZ","DS3234SquareWaveClock_1Hz"],["1.024kHZ","DS3234SquareWaveClock_1kHz"],["4.096kHZ","DS3234SquareWaveClock_4kHz"],["8.192kHZ","DS3234SquareWaveClock_8kHz"]]), "type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3234时钟模块 设置SQW管脚输出方波的频率\n"
   +"2.语法:\n"
   +"->void SetSquareWavePinClockFrequency(DS3234SquareWaveClock freq)\n"
   +"3.参数:\n"
   +"->freq:设置SQW管脚输出方波频率\n"
   +"-->DS3234SquareWaveClock_1Hz - 1HZ\n"
   +"-->DS3234SquareWaveClock_1kHz - 1.024kHZ\n"
   +"-->DS3234SquareWaveClock_4kHz - 4.096kHZ\n"
   +"-->DS3234SquareWaveClock_8kHz - 8.192kHZ\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 设置闹钟1和闹钟2
Blockly.Blocks.make_rtc_ds3234_SetAlarm= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(new Blockly.FieldDropdown([["闹钟1","SetAlarmOne"],["闹钟2","SetAlarmTwo"]]), "type")
      .appendField("设为");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3234时钟模块 设置闹钟1和闹钟2\n"
   +"2.语法:\n"
   +"->设置闹钟1 - void SetAlarmOne(const DS3234AlarmOne& alarm)\n"
   +"->设置闹钟2 - void SetAlarmTwo(const DS3234AlarmTwo& alarm)\n"
   +"3.参数:\n"
   +"->alarm:设置闹钟的时间和工作模式\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 获取闹钟1的日、时、分、秒、工作模式
Blockly.Blocks.make_DS3234_getAlarm1data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 获取闹钟1")
      .appendField(new Blockly.FieldDropdown([["日","DayOf"],["时","Hour"],["分","Minute"],["秒","Second"],["工作模式","ControlFlags"]]), "type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3234时钟模块 获取闹钟1的日、时、分、秒、工作模式，返回数据类型为uint8_t(日、时、分、秒)，DS3234AlarmOneControl(工作模式)\n"
   +"2.语法:\n"
   +"->获取日 - uint8_t DayOf() const\n"
   +"->获取时 - uint8_t Hour() const\n"
   +"->获取分 - uint8_t Minute() const\n"
   +"->获取秒 - uint8_t Second() const\n"
   +"->获取工作模式 - DS3234AlarmOneControl ControlFlags()\n"
   +"3.参数:无\n"
   +"4.返回值:uint8_t/DS3234AlarmOneControl型数据"
    );
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 获取闹钟2的日、时、分、工作模式
Blockly.Blocks.make_DS3234_getAlarm2data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 获取闹钟2")
      .appendField(new Blockly.FieldDropdown([["日","DayOf"],["时","Hour"],["分","Minute"],["工作模式","ControlFlags"]]), "type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3234时钟模块 获取闹钟2的日、时、分、工作模式，返回数据类型为uint8_t(日、时、分)，DS3234AlarmOneControl(工作模式)\n"
   +"2.语法:\n"
   +"->获取日 - uint8_t DayOf() const\n"
   +"->获取时 - uint8_t Hour() const\n"
   +"->获取分 - uint8_t Minute() const\n"
   +"->获取工作模式 - DS3234AlarmOneControl ControlFlags()\n"
   +"3.参数:无\n"
   +"4.返回值:uint8_t/DS3234AlarmOneControl型数据"
    );
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 获取闹钟1、闹钟2的时间和工作模式
Blockly.Blocks.make_DS3234_getAlarm= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["闹钟1","GetAlarmOne"],["闹钟2","GetAlarmTwo"]]), "type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3234时钟模块 获取闹钟1、闹钟2的时间和工作模式，返回数据的类型为DS3234AlarmOne(闹钟1)，DS3234AlarmTwo(闹钟2)\n"
   +"2.语法:\n"
   +"->获取闹钟1 - DS3234AlarmOne GetAlarmOne()\n"
   +"->获取闹钟2 - DS3234AlarmTwo GetAlarmTwo()\n"
   +"3.参数:无\n"
   +"4.返回值:DS3234AlarmOne/DS3234AlarmTwo型数据"
    );
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 允许其他闹钟再次告警
Blockly.Blocks.make_rtc_ds3234_LatchAlarmsTriggeredFlags= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 允许闹钟告警");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3234时钟模块 允许闹钟告警\n"
   +"2.语法:\n"
   +"->DS3234AlarmFlag LatchAlarmsTriggeredFlags()\n"
   +"3.参数:无\n"
   +"4.返回值:DS3234AlarmFlag型数据(不使用返回值)\n"
   +"->闹钟1告警 - DS3234AlarmFlag_Alarm1 - 0x01\n"
   +"->闹钟2告警 - DS3234AlarmFlag_Alarm2 - 0x02\n"
   +"->闹钟1、2告警 - DS3234AlarmFlag_AlarmBoth - 0x03"
    );
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 返回上次告警信息，允许其他闹钟再次告警
Blockly.Blocks.make_rtc_ds3234_LatchAlarmsTriggeredFlags_return= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 返回上次告警信息 允许闹钟告警");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3234时钟模块 允许闹钟告警，返回数据的类型为DS3234AlarmFlag\n"
   +"2.语法:\n"
   +"->DS3234AlarmFlag LatchAlarmsTriggeredFlags()\n"
   +"3.参数:无\n"
   +"4.返回值:DS3234AlarmFlag型数据\n"
   +"->闹钟1告警 - DS3234AlarmFlag_Alarm1 - 0x01\n"
   +"->闹钟2告警 - DS3234AlarmFlag_Alarm2 - 0x02\n"
   +"->闹钟1、2告警 - DS3234AlarmFlag_AlarmBoth - 0x03"
    );
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 获取温度
Blockly.Blocks.make_DS3234_getFloatDeg= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["温度(℃)","AsFloatDegC"],["温度(℉)","AsFloatDegF"]]), "type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->DS3234时钟模块 获取温度，返回数据的类型为float\n"
   +"2.语法:\n"
   +"->获取温度(摄氏度) - float GetTemperature().AsFloatDegC()\n"
   +"->获取温度(华氏度) - float GetTemperature().AsFloatDegF()\n"
   +"3.参数:无\n"
   +"4.返回值:float型数据"
    );
  this.setHelpUrl("");
  }
};

/*
* DS3234闹钟1
*/
//DS3234闹钟1 声明
Blockly.Blocks.make_DS3234AlarmOne_declare= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("声明类变量")
      .appendField(new Blockly.FieldTextInput("alarm1"), "alarm_name")
      .appendField("为 DS3234闹钟1 并赋值");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234闹钟1 赋值
Blockly.Blocks.make_DS3234AlarmOne_set= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234闹钟1")
      .appendField(new Blockly.FieldTextInput("alarm1"), "alarm_name")
      .appendField("赋值为");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234闹钟1 取值
Blockly.Blocks.make_DS3234AlarmOne_get= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234闹钟1")
      .appendField(new Blockly.FieldTextInput("alarm1"), "alarm_name");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234闹钟1 设置时间和工作模式
Blockly.Blocks.make_DS3234AlarmOne_set_time= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234闹钟1设置");
  this.appendValueInput("day")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("日");
  this.appendValueInput("hour")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("时");
  this.appendValueInput("minute")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("分");
  this.appendValueInput("second")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("秒");
  this.appendValueInput("flag")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("工作模式");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234闹钟1 工作模式的类型
Blockly.Blocks.make_DS3234AlarmOne_flag_type= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["日、时、分、秒吻合时告警(DS3234闹钟1)","DS3234AlarmOneControl_HoursMinutesSecondsDayOfMonthMatch"],["时、分、秒、周吻合时告警(DS3234闹钟1)","DS3234AlarmOneControl_HoursMinutesSecondsDayOfWeekMatch"],["时、分、秒吻合时告警(DS3234闹钟1)","DS3234AlarmOneControl_HoursMinutesSecondsMatch"],["分、秒吻合时告警(DS3234闹钟1)","DS3234AlarmOneControl_MinutesSecondsMatch"],["秒吻合时告警(DS3234闹钟1)","DS3234AlarmOneControl_SecondsMatch"],["每秒告警一次(DS3234闹钟1)","DS3234AlarmOneControl_OncePerSecond"]]), "flag_type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234闹钟1 获取日、时、分、秒、工作模式
Blockly.Blocks.make_DS3234AlarmOne_getAlarmdata= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234闹钟1")
      .appendField(new Blockly.FieldTextInput("alarm1"), "alarm_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["日","DayOf"],["时","Hour"],["分","Minute"],["秒","Second"],["工作模式","ControlFlags"]]), "type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

/*
* DS3234闹钟2
*/
//DS3234闹钟2 声明
Blockly.Blocks.make_DS3234AlarmTwo_declare= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("声明类变量")
      .appendField(new Blockly.FieldTextInput("alarm2"), "alarm_name")
      .appendField("为 DS3234闹钟2 并赋值");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234闹钟2 赋值
Blockly.Blocks.make_DS3234AlarmTwo_set= {
  init: function() { 
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234闹钟2")
      .appendField(new Blockly.FieldTextInput("alarm2"), "alarm_name")
      .appendField("赋值为");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234闹钟2 取值
Blockly.Blocks.make_DS3234AlarmTwo_get= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234闹钟2")
      .appendField(new Blockly.FieldTextInput("alarm2"), "alarm_name");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234闹钟2 设置时间和工作模式
Blockly.Blocks.make_DS3234AlarmTwo_set_time= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234闹钟2设置");
  this.appendValueInput("day")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("日");
  this.appendValueInput("hour")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("时");
  this.appendValueInput("minute")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("分");
  this.appendValueInput("flag")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("工作模式");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234闹钟2 工作模式的类型
Blockly.Blocks.make_DS3234AlarmTwo_flag_type= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["日、时、分吻合时告警(DS3234闹钟2)","DS3234AlarmTwoControl_HoursMinutesDayOfMonthMatch"],["时、分、周吻合时告警(DS3234闹钟2)","DS3234AlarmTwoControl_HoursMinutesDayOfWeekMatch"],["时、分吻合时告警(DS3234闹钟2)","DS3234AlarmTwoControl_HoursMinutesMatch"],["分吻合时告警(DS3234闹钟2)","DS3234AlarmTwoControl_MinutesMatch"],["每分钟告警一次(DS3234闹钟2)","DS3234AlarmTwoControl_OncePerMinute"]]), "flag_type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234闹钟2 获取日、时、分、工作模式
Blockly.Blocks.make_DS3234AlarmTwo_getAlarmdata= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234闹钟2")
      .appendField(new Blockly.FieldTextInput("alarm2"), "alarm_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["日","DayOf"],["时","Hour"],["分","Minute"],["工作模式","ControlFlags"]]), "type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

/*
* DS3234RAM
*/
//DS3234时钟模块 写入字节
Blockly.Blocks.make_rtc_ds3234_SetMemory_byte= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 写入(字节) RAM 地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数值");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 读取字节
Blockly.Blocks.make_rtc_ds3234_GetMemory_byte= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 读取(字节) RAM 地址");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 写入字节数组
Blockly.Blocks.make_rtc_ds3234_SetMemory_list= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 写入(字节数组) RAM 起始地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数据");
  this.appendValueInput("length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 读取字节数组
Blockly.Blocks.make_rtc_ds3234_GetMemory_list= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 读取(字节数组) RAM 起始地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("保存到数组");
  this.appendValueInput("length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//DS3234时钟模块 读取字节数组，返回读取结果
Blockly.Blocks.make_rtc_ds3234_GetMemory_list_return= {
  init: function() { 
  this.appendValueInput("address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/时钟_2.png", 25, 25, "*"))
      .appendField("DS3234")
      .appendField(new Blockly.FieldTextInput("rtc"), "rtc_name")
      .appendField(" 读取(字节数组) RAM 起始地址");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("保存到数组");
  this.appendValueInput("length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("返回读取结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//初始化PCF8574 IO扩展模块
Blockly.Blocks.make_arduino_pcf8574_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_1.png", 25, 25, "*"))
      .appendField("初始化PCF8574(I2C)")
      .appendField(new Blockly.FieldTextInput("expander"), "pcf8574_name");
  this.appendValueInput("pcf8574_address")
      .setCheck(null)  
      .appendField(" 地址");
  this.appendStatementInput("pcf8574_pin_type")
      .setCheck(null)  
      .appendField("定义管脚");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化PCF8574 IO扩展模块(I2C)\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

//PCF8574 IO扩展模块 管脚类型
Blockly.Blocks.make_arduino_pcf8574_pin_type= {
  init: function() { 
  this.appendValueInput("pcf8574_pin")
      .setCheck(null)  
      .appendField("管脚模式");
  this.appendDummyInput()  
      .appendField("设为")
      .appendField(new Blockly.FieldDropdown([["输出","OUTPUT"],["输入","INPUT"],["上拉输入","INPUT_PULLUP"]]), "pcf8574_pin_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("PCF8574 IO扩展模块 定义管脚类型");
  this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'make_arduino_pcf8574_begin') {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到PCF8574初始化块下面");
    }
  }
};

//PCF8574 IO扩展模块 数字输出管脚
Blockly.Blocks.make_arduino_pcf8574_digital_pin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"]]), "pin_data");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//PCF8574 IO扩展模块 数字输出管脚状态
Blockly.Blocks.make_arduino_pcf8574_digital_out_type= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["高","HIGH"],["低","LOW"]]), "output_data");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//PCF8574 IO扩展模块 数字输出
Blockly.Blocks.make_arduino_pcf8574_digitalWrite= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_1.png", 25, 25, "*"))
      .appendField("PCF8574")
      .appendField(new Blockly.FieldTextInput("expander"), "pcf8574_name");
  this.appendValueInput("pcf8574_pin")
      .setCheck(null)  
      .appendField(" 数字输出 管脚#");
  this.appendValueInput("pcf8574_out_data")
      .setCheck(null)  
      .appendField("设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("PCF8574 IO扩展模块 设置管脚的输出值");
  this.setHelpUrl("");
  }
};

//PCF8574 IO扩展模块 数字输入
Blockly.Blocks.make_arduino_pcf8574_digitalRead= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_1.png", 25, 25, "*"))
      .appendField("PCF8574")
      .appendField(new Blockly.FieldTextInput("expander"), "pcf8574_name");
  this.appendValueInput("pcf8574_pin")
      .setCheck(null)  
      .appendField(" 数字输入 管脚#");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("PCF8574 IO扩展模块 获取管脚的输入值");
  this.setHelpUrl("");
  }
};

//PCF8574 IO扩展模块 翻转管脚
Blockly.Blocks.make_arduino_pcf8574_toggle= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_1.png", 25, 25, "*"))
      .appendField("PCF8574")
      .appendField(new Blockly.FieldTextInput("expander"), "pcf8574_name");
  this.appendValueInput("pcf8574_pin")
      .setCheck(null)  
      .appendField(" 翻转管脚#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("PCF8574 IO扩展模块 翻转管脚的电平");
  this.setHelpUrl("");
  }
};

//PCF8574 IO扩展模块 设置各管脚电平
Blockly.Blocks.make_arduino_pcf8574_write= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_1.png", 25, 25, "*"))
      .appendField("PCF8574")
      .appendField(new Blockly.FieldTextInput("expander"), "pcf8574_name");
  this.appendValueInput("pcf8574_pin")
      .setCheck(null)  
      .appendField(" 各管脚电平设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("PCF8574 IO扩展模块 设置各管脚电平");
  this.setHelpUrl("");
  }
};

//PCF8574 IO扩展模块 设置全部管脚电平
Blockly.Blocks.make_arduino_pcf8574_set_clear= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_1.png", 25, 25, "*"))
      .appendField("PCF8574")
      .appendField(new Blockly.FieldTextInput("expander"), "pcf8574_name")
      .appendField(" 全部管脚设为")
      .appendField(new Blockly.FieldDropdown([["高电平","set"],["低电平","clear"]]), "set_clear_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("PCF8574 IO扩展模块 设置全部管脚电平");
  this.setHelpUrl("");
  }
};

//PCF8574 IO扩展模块 开启中断
Blockly.Blocks.make_arduino_pcf8574_enableInterrupt= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_1.png", 25, 25, "*"))
      .appendField("PCF8574")
      .appendField(new Blockly.FieldTextInput("expander"), "pcf8574_name");
  this.appendValueInput("pcf8574_int_pin")
      .setCheck(null)  
      .appendField(" 启用中断")
      .appendField("INT#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("PCF8574 IO扩展模块 开启中断");
  this.setHelpUrl("");
  }
};

//PCF8574 IO扩展模块 结束中断
Blockly.Blocks.make_arduino_pcf8574_disableInterrupt= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_1.png", 25, 25, "*"))
      .appendField("PCF8574")
      .appendField(new Blockly.FieldTextInput("expander"), "pcf8574_name")
      .appendField(" 禁用中断");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("PCF8574 IO扩展模块 结束中断");
  this.setHelpUrl("");
  }
};

//PCF8574 IO扩展模块 设置中断管脚
Blockly.Blocks.make_arduino_pcf8574_attachInterrupt= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_1.png", 25, 25, "*"))
      .appendField("PCF8574")
      .appendField(new Blockly.FieldTextInput("expander"), "pcf8574_name");
  this.appendValueInput("pcf8574_int_pin")
      .setCheck(null)  
      .appendField(" 中断 管脚#");
  this.appendDummyInput()  
      .appendField("模式")
      .appendField(new Blockly.FieldDropdown([["上升","RISING"],["下降","FALLING"],["改变","CHANGE"]]), "pcf8574_int_type");
  this.appendStatementInput("pcf8574_int_do")
      .setCheck(null)  
      .appendField("执行");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("PCF8574 IO扩展模块 设置中断管脚");
  this.setHelpUrl("");
  }
};

//PCF8574 IO扩展模块 取消中断管脚
Blockly.Blocks.make_arduino_pcf8574_detachInterrupt= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_1.png", 25, 25, "*"))
      .appendField("PCF8574")
      .appendField(new Blockly.FieldTextInput("expander"), "pcf8574_name");
  this.appendValueInput("pcf8574_int_pin")
      .setCheck(null)  
      .appendField(" 取消中断 管脚#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("PCF8574 IO扩展模块 取消中断管脚");
  this.setHelpUrl("");
  }
};

//初始化MCP23017 IO扩展模块
Blockly.Blocks.make_arduino_mcp23017_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_2.png", 25, 25, "*"))
      .appendField("初始化MCP23017(I2C)")
      .appendField(new Blockly.FieldTextInput("mcp"), "mcp23017_name");
  this.appendValueInput("mcp23017_address")
      .setCheck(null)  
      .appendField(" 地址");
  this.appendStatementInput("mcp23017_pin_type")
      .setCheck(null)  
      .appendField("定义管脚");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化MCP23017 IO扩展模块(I2C)\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

//MCP23017 IO扩展模块 设置管脚模式
Blockly.Blocks.make_arduino_mcp23017_pin_type= {
  init: function() { 
  this.appendValueInput("mcp23017_pin")
      .setCheck(null)  
      .appendField("管脚模式");
  this.appendDummyInput()  
      .appendField("设为")
      .appendField(new Blockly.FieldDropdown([["输出","OUTPUT"],["输入","INPUT"],["上拉输入","INPUT_PULLUP"]]), "mcp23017_pin_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("MCP23017 IO扩展模块 设置管脚模式");
  this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'make_arduino_mcp23017_begin') {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到MCP23017初始化块下面");
    }
  }
};

//MCP23017 IO扩展模块 数字管脚定义
Blockly.Blocks.make_arduino_mcp23017_digital_pin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["14","14"],["15","15"]]), "pin_data");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//MCP23017 IO扩展模块 输出状态定义
Blockly.Blocks.make_arduino_mcp23017_digital_out_type= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["高","HIGH"],["低","LOW"]]), "output_data");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//MCP23017 IO扩展模块 管脚输出状态定义
Blockly.Blocks.make_arduino_mcp23017_digitalWrite= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_2.png", 25, 25, "*"))
      .appendField("MCP23017")
      .appendField(new Blockly.FieldTextInput("mcp"), "mcp23017_name");
  this.appendValueInput("mcp23017_pin")
      .setCheck(null)  
      .appendField(" 数字输出 管脚#");
  this.appendValueInput("mcp23017_out_data")
      .setCheck(null)  
      .appendField("设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("MCP23017 IO扩展模块 设置管脚的输出值");
  this.setHelpUrl("");
  }
};

//MCP23017 IO扩展模块 管脚输入定义
Blockly.Blocks.make_arduino_mcp23017_digitalRead= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_2.png", 25, 25, "*"))
      .appendField("MCP23017")
      .appendField(new Blockly.FieldTextInput("mcp"), "mcp23017_name");
  this.appendValueInput("mcp23017_pin")
      .setCheck(null)  
      .appendField(" 数字输入 管脚#");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("MCP23017 IO扩展模块 获取管脚的输入值");
  this.setHelpUrl("");
  }
};

//MCP23017 IO扩展模块 设置各管脚的电平
Blockly.Blocks.make_arduino_mcp23017_write= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_2.png", 25, 25, "*"))
      .appendField("MCP23017")
      .appendField(new Blockly.FieldTextInput("mcp"), "mcp23017_name")
      .appendField(" 各管脚电平设为");
  this.appendValueInput("mcp23017_pinA")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("A(7 - 0):");
  this.appendValueInput("mcp23017_pinB")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("B(7 - 0):");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("MCP23017 IO扩展模块 设置各管脚的电平");
  this.setHelpUrl("");
  }
};

//MCP23017 IO扩展模块 启用中断
Blockly.Blocks.make_arduino_mcp23017_setupInterrupts= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_2.png", 25, 25, "*"))
      .appendField("MCP23017")
      .appendField(new Blockly.FieldTextInput("mcp"), "mcp23017_name")
      .appendField(" 启用中断");
  this.appendValueInput("mcp23017_mirroring")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("INTA和INTB联合工作？");
  this.appendValueInput("mcp23017_openDrain")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("中断输出配置为");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("MCP23017 IO扩展模块 启用中断");
  this.setHelpUrl("");
  }
};

//MCP23017 IO扩展模块 设置中断模式
Blockly.Blocks.make_arduino_mcp23017_setupInterrupts_mode= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["高电平有效","HIGH"],["低电平有效","LOW"],["开漏输出","open"]]), "mode");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("MCP23017 IO扩展模块 设置中断模式");
  this.setHelpUrl("");
  }
};

//MCP23017 IO扩展模块 设置中断管脚
Blockly.Blocks.make_arduino_mcp23017_attachInterrupt= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_2.png", 25, 25, "*"))
      .appendField("MCP23017")
      .appendField(new Blockly.FieldTextInput("mcp"), "mcp23017_name");
  this.appendValueInput("mcp23017_int_pin")
      .setCheck(null)  
      .appendField(" 中断管脚#");
  this.appendDummyInput()  
      .appendField("模式")
      .appendField(new Blockly.FieldDropdown([["上升","RISING"],["下降","FALLING"],["改变","CHANGE"]]), "mcp23017_int_type")
      .appendField(" 产生中断");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("MCP23017 IO扩展模块 设置中断管脚与中断产生的方式");
  this.setHelpUrl("");
  }
};

//MCP23017 IO扩展模块 获取最近一次的中断管脚和其数据
Blockly.Blocks.make_arduino_mcp23017_getLastInterrupt= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/输入输出/输入输出_2.png", 25, 25, "*"))
      .appendField("MCP23017")
      .appendField(new Blockly.FieldTextInput("mcp"), "mcp23017_name");
  this.appendDummyInput()  
      .appendField("获取最近一次中断的")
      .appendField(new Blockly.FieldDropdown([["管脚号","Pin"],["管脚数据","PinValue"]]), "data");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("MCP23017 IO扩展模块 获取最近一次的中断管脚和其数据");
  this.setHelpUrl("");
  }
};

//初始化PAJ7620手势传感器
Blockly.Blocks.make_arduino_paj7620_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/手势识别.png", 25, 25, "*"))
      .appendField("初始化PAJ7620(I2C)");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化PAJ7620手势传感器(I2C)\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
   );
  this.setHelpUrl("");
  }
};

//初始化PAJ7620手势传感器-1
Blockly.Blocks.make_arduino_paj7620_begin_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/手势识别.png", 25, 25, "*"))
      .appendField("初始化PAJ7620(I2C) 返回连接状态");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化PAJ7620手势传感器\n返回数据的类型为uint8_t\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

//PAJ7620手势传感器 获取数据
Blockly.Blocks.make_arduino_paj7620_ReadReg= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/手势识别.png", 25, 25, "*"))
      .appendField("PAJ7620 获取识别数据");
  this.appendValueInput("address")
      .setCheck(null)  
      .appendField("地址");
  this.appendValueInput("qty")
      .setCheck(null)  
      .appendField("字节数");
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField("保存数据到变量");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("PAJ7620手势传感器 获取数据");
  this.setHelpUrl("");
  }
};

//PAJ7620手势传感器 获取数据-返回请求结果
Blockly.Blocks.make_arduino_paj7620_ReadReg_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/手势识别.png", 25, 25, "*"))
      .appendField("PAJ7620 获取识别数据 返回请求结果");
  this.appendValueInput("address")
      .setCheck(null)  
      .appendField("地址");
  this.appendValueInput("qty")
      .setCheck(null)  
      .appendField("字节数");
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField("保存数据到变量");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("PAJ7620手势传感器 获取数据，返回请求结果，返回数据的类型为uint8_t");
  this.setHelpUrl("");
  }
};

//PAJ7620手势传感器 手势数据
Blockly.Blocks.make_arduino_paj7620_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["向上","GES_UP_FLAG"],["向下","GES_DOWN_FLAG"],["向左","GES_LEFT_FLAG"],["向右","GES_RIGHT_FLAG"],["向前","GES_FORWARD_FLAG"],["向后","GES_BACKWARD_FLAG"],["顺时针","GES_CLOCKWISE_FLAG"],["逆时针","GES_COUNT_CLOCKWISE_FLAG"],["挥手","GES_WAVE_FLAG"]]), "data");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("PAJ7620手势传感器 手势数据");
  this.setHelpUrl("");
  }
};

//初始化TCA9548A I2C扩展模块
Blockly.Blocks.make_arduino_tca9548a_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_8.png", 25, 25, "*"))
      .appendField("初始化TCA9548A(I2C)")
      .appendField(new Blockly.FieldTextInput("mux"), "tca9548a_name");
  this.appendValueInput("tca9548a_address")
      .setCheck(null)  
      .appendField(" 地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("初始化TCA9548A I2C扩展模块");
  this.setHelpUrl("");
  }
};

//TCA9548A I2C扩展模块 关闭所有端口
Blockly.Blocks.make_arduino_tca9548a_disable= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_8.png", 25, 25, "*"))
      .appendField("TCA9548A")
      .appendField(new Blockly.FieldTextInput("mux"), "tca9548a_name")
      .appendField(" 关闭所有端口");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("TCA9548A I2C扩展模块 关闭所有端口");
  this.setHelpUrl("");
  }
};

//TCA9548A I2C扩展模块 设置当前要使用的端口
Blockly.Blocks.make_arduino_tca9548a_set_port= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_8.png", 25, 25, "*"))
      .appendField("TCA9548A")
      .appendField(new Blockly.FieldTextInput("mux"), "tca9548a_name")
      .appendField(" 使用端口");
  this.appendValueInput("port_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("TCA9548A I2C扩展模块 设置当前要使用的端口");
  this.setHelpUrl("");
  }
};

//端口号
Blockly.Blocks.make_arduino_tca9548a_set_port_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"]]), "data");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("端口号");
  this.setHelpUrl("");
  }
};

//TCA9548A I2C扩展模块 获取当前正在使用的端口对应的端口号
Blockly.Blocks.make_arduino_tca9548a_get_port= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/通信/通信_8.png", 25, 25, "*"))
      .appendField("TCA9548A")
      .appendField(new Blockly.FieldTextInput("mux"), "tca9548a_name")
      .appendField(" 获取当前使用端口");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("TCA9548A I2C扩展模块 获取当前正在使用的端口对应的端口号，返回数据的类型为uint8_t");
  this.setHelpUrl("");
  }
};

//初始化AS608光学指纹传感器
Blockly.Blocks.make_arduino_as608_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/指纹.png", 25, 25, "*"))
      .appendField("初始化AS608")
      .appendField(new Blockly.FieldTextInput("finger"), "as608_name");
  this.appendValueInput("softwire")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 使用串口");
  this.appendValueInput("rate")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("波特率");
  this.appendValueInput("password")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("访问密码");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//AS608光学指纹传感器 串口传输波特率定义
Blockly.Blocks.make_arduino_as608_rate= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["9600","9600"],["57600","57600"],["115200","115200"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//AS608光学指纹传感器 获取数据
Blockly.Blocks.make_arduino_as608_get= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/指纹.png", 25, 25, "*"))
      .appendField("AS608")
      .appendField(new Blockly.FieldTextInput("finger"), "as608_name")
      .appendField(new Blockly.FieldDropdown([["访问密码正确？","verifyPassword()"],["获取一张指纹图像 返回结果","getImage()"],["取两个特征模板创建指纹模型 返回结果","createModel()"],["串口发送指纹模型到主机 返回结果","getModel()"],["清空指纹库 返回结果","emptyDatabase()"],["在指纹库中搜索刚创建的指纹模型 返回结果","fingerFastSearch()"],["读取指纹库中模型数量 返回结果","getTemplateCount()"],["获取指纹模型编号","fingerID"],["获取置信度","confidence"],["获取指纹库中模型数量","templateCount"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//AS608光学指纹传感器 执行某些函数
Blockly.Blocks.make_arduino_as608_do= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/指纹.png", 25, 25, "*"))
      .appendField("AS608")
      .appendField(new Blockly.FieldTextInput("finger"), "as608_name")
      .appendField(new Blockly.FieldDropdown([["获取一张指纹图像","getImage()"],["取两个特征模板创建指纹模型","createModel()"],["串口发送指纹模型到主机","getModel()"],["清空指纹库","emptyDatabase()"],["在指纹库中搜索刚创建的指纹模型","fingerFastSearch()"],["读取指纹库中模型数量","getTemplateCount()"]]), "type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//AS608光学指纹传感器 指纹图像转为特征模板 返回结果
Blockly.Blocks.make_arduino_as608_image2Tz_return= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/指纹.png", 25, 25, "*"))
      .appendField("AS608")
      .appendField(new Blockly.FieldTextInput("finger"), "as608_name")
      .appendField(" 指纹图像转为特征模板并保存到");
  this.appendValueInput("slot")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("槽位");
  this.appendDummyInput()  
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("返回结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//AS608光学指纹传感器 指纹图像转为特征模板
Blockly.Blocks.make_arduino_as608_image2Tz= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/指纹.png", 25, 25, "*"))
      .appendField("AS608")
      .appendField(new Blockly.FieldTextInput("finger"), "as608_name")
      .appendField(" 指纹图像转为特征模板并保存到");
  this.appendValueInput("slot")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("槽位");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//AS608光学指纹传感器 槽位类型
Blockly.Blocks.make_arduino_as608_image2Tz_slot= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["1","1"],["2","2"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//AS608光学指纹传感器 操作模型 返回结果
Blockly.Blocks.make_arduino_as608_operate_model_return= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/指纹.png", 25, 25, "*"))
      .appendField("AS608")
      .appendField(new Blockly.FieldTextInput("finger"), "as608_name")
      .appendField(new Blockly.FieldDropdown([["储存指纹模型","storeModel"],["加载指纹模型","loadModel"],["删除指纹模型","deleteModel"]]), "type");
  this.appendValueInput("location")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 位置");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("返回结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//AS608光学指纹传感器 操作模型
Blockly.Blocks.make_arduino_as608_operate_model= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/指纹.png", 25, 25, "*"))
      .appendField("AS608")
      .appendField(new Blockly.FieldTextInput("finger"), "as608_name")
      .appendField(new Blockly.FieldDropdown([["储存指纹模型","storeModel"],["加载指纹模型","loadModel"],["删除指纹模型","deleteModel"]]), "type");
  this.appendValueInput("location")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 位置");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//AS608光学指纹传感器 设置访问密码 返回结果
Blockly.Blocks.make_arduino_as608_setPassword_return= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/指纹.png", 25, 25, "*"))
      .appendField("AS608")
      .appendField(new Blockly.FieldTextInput("finger"), "as608_name");
  this.appendValueInput("password")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 访问密码设为");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("返回结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//AS608光学指纹传感器 设置访问密码
Blockly.Blocks.make_arduino_as608_setPassword= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/指纹.png", 25, 25, "*"))
      .appendField("AS608")
      .appendField(new Blockly.FieldTextInput("finger"), "as608_name");
  this.appendValueInput("password")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 访问密码设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//AS608光学指纹传感器 返回值类型
Blockly.Blocks.make_arduino_as608_get_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["FINGERPRINT_OK","FINGERPRINT_OK"],["FINGERPRINT_PACKETRECIEVEERR","FINGERPRINT_PACKETRECIEVEERR"],["FINGERPRINT_NOFINGER","FINGERPRINT_NOFINGER"],["FINGERPRINT_IMAGEFAIL","FINGERPRINT_IMAGEFAIL"],["FINGERPRINT_IMAGEMESS","FINGERPRINT_IMAGEMESS"],["FINGERPRINT_FEATUREFAIL","FINGERPRINT_FEATUREFAIL"],["FINGERPRINT_NOMATCH","FINGERPRINT_NOMATCH"],["FINGERPRINT_NOTFOUND","FINGERPRINT_NOTFOUND"],["FINGERPRINT_ENROLLMISMATCH","FINGERPRINT_ENROLLMISMATCH"],["FINGERPRINT_BADLOCATION","FINGERPRINT_BADLOCATION"],["FINGERPRINT_DBRANGEFAIL","FINGERPRINT_DBRANGEFAIL"],["FINGERPRINT_UPLOADFEATUREFAIL","FINGERPRINT_UPLOADFEATUREFAIL"],["FINGERPRINT_PACKETRESPONSEFAIL","FINGERPRINT_PACKETRESPONSEFAIL"],["FINGERPRINT_UPLOADFAIL","FINGERPRINT_UPLOADFAIL"],["FINGERPRINT_DELETEFAIL","FINGERPRINT_DELETEFAIL"],["FINGERPRINT_DBCLEARFAIL","FINGERPRINT_DBCLEARFAIL"],["FINGERPRINT_PASSFAIL","FINGERPRINT_PASSFAIL"],["FINGERPRINT_INVALIDIMAGE","FINGERPRINT_INVALIDIMAGE"],["FINGERPRINT_FLASHERR","FINGERPRINT_FLASHERR"],["FINGERPRINT_INVALIDREG","FINGERPRINT_INVALIDREG"],["FINGERPRINT_ADDRCODE","FINGERPRINT_ADDRCODE"],["FINGERPRINT_PASSVERIFY","FINGERPRINT_PASSVERIFY"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//初始化OLED(I2C)
Blockly.Blocks.make_arduino_oled_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("初始化OLED(I2C)");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)  
      .appendField(new Blockly.FieldDropdown([["128x64","128x64"],["128x32","128x32"],["96x16","96x16"]]), "arduino_oled_begin_type")
      .appendField(new Blockly.FieldTextInput("display"), "oled_begin_name");
  this.appendValueInput("oled_begin_pin_reset")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" RESET#");
  this.appendValueInput("oled_begin_address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("设备地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip(
    "初始化OLED(I2C)\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
   );
  this.setHelpUrl("");
  }
};

//初始化OLED(I2C)
Blockly.Blocks.make_arduino_oled_begin_change_2019_10_19= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("初始化OLED(I2C)");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)  
      .appendField(new Blockly.FieldDropdown([["128x64","128x64"],["128x32","128x32"],["96x16","96x16"]]), "arduino_oled_begin_type")
      .appendField(new Blockly.FieldTextInput("display"), "oled_begin_name")
      .appendField(" 返回连接状态");
  this.appendValueInput("oled_begin_pin_reset")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("RESET#");
  this.appendValueInput("oled_begin_address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("设备地址");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(180);
  this.setTooltip(
    "初始化OLED(I2C)\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
   );
  this.setHelpUrl("");
  }
};

//初始化OLED(SPI)
Blockly.Blocks.make_arduino_oled_begin_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("初始化OLED(SPI)");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)  
      .appendField(new Blockly.FieldDropdown([["128x64","128x64"],["128x32","128x32"],["96x16","96x16"]]), "arduino_oled_begin_type")
      .appendField(new Blockly.FieldTextInput("display"), "oled_begin_name");
  this.appendValueInput("oled_begin_mosi")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("MOSI#");
  this.appendValueInput("oled_begin_clk")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("CLK#");
  this.appendValueInput("oled_begin_dc")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("DC#");
  this.appendValueInput("oled_begin_reset")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("RESET#");
  this.appendValueInput("oled_begin_cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("CS#");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("初始化OLED(SPI)");
  this.setHelpUrl("");
  }
};

//初始化OLED(SPI)
Blockly.Blocks.make_arduino_oled_begin_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("初始化OLED(SPI)");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)  
      .appendField(new Blockly.FieldDropdown([["128x64","128x64"],["128x32","128x32"],["96x16","96x16"]]), "arduino_oled_begin_type")
      .appendField(new Blockly.FieldTextInput("display"), "oled_begin_name");
  this.appendValueInput("oled_begin_dc")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" DC#");
  this.appendValueInput("oled_begin_reset")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("RESET#");
  this.appendValueInput("oled_begin_cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("CS#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip(
    "初始化OLED(SPI)\n"
   +"SPI接线:\n"
   +"①Arduino Uno:\n"
   +"->MOSI - 11\n"
   +"->SCK - 13\n"
   +"②Arduino Mega2560:\n"
   +"->MOSI - 51\n"
   +"->SCK - 52\n"
   +"③Arduino Leonardo:\n"
   +"->MOSI - ICSP-4\n"
   +"->SCK - ICSP-3"
   );
  this.setHelpUrl("");
  }
};

//显示汉字（使用位图显示）
Blockly.Blocks.make_arduino_oled_show_hz= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField("显示汉字和符号");
  this.appendDummyInput()  
      .appendField("代码区绘制预览图案")
      .appendField(new Blockly.FieldCheckbox("true"), "oled_show_hz")
      .appendField(" 显示基本注释")
      .appendField(new Blockly.FieldCheckbox("true"), "oled_show_hz_message")
      .appendField(" 保存到flash")
      .appendField(new Blockly.FieldCheckbox("true"), "oled_show_hz_save"); 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["华文黑体","STHeiti"],["华文楷体","STKaiti"],["华文细黑","STXihei"],["华文宋体","STSong"],["华文中宋","STZhongsong"],["华文仿宋","STFangsong"],["华文彩云","STCaiyun"],["华文琥珀","STHupo"],["华文隶书","STLiti"],["华文行楷","STXingkai"],["华文新魏","STXinwei"],["黑体","simHei"],["宋体","simSun"],["新宋体","NSimSun"],["仿宋","FangSong"],["楷体","KaiTi"],["仿宋_GB2312","FangSong_GB2312"],["楷体_GB2312","KaiTi_GB2312"],["隶书","LiSu"],["幼圆","YouYuan"],["新细明体","PMingLiU"],["细明体","MingLiU"],["标楷体","DFKai-SB"],["微软正黑体","Microsoft JhengHei"],["微软雅黑体","Microsoft YaHei"],["AcadEref","AcadEref"],["Adobe Ming Std L","Adobe Ming Std L"],["Adobe Myungjo Std M","Adobe Myungjo Std M"],["Adobe Pi Std","Adobe Pi Std"],["AIGDT","AIGDT"],["AIgerian","AIgerian"],["AmdtSymbols","AmdtSymbols"],["Arial","Arial"],["Arial Rounded MT Bold","Arial Rounded MT Bold"],["Arial Unicode MS","Arial Unicode MS"],["BankGothic Lt BT","BankGothic Lt BT"],["BankGothic Md BT","BankGothic Md BT"],["Baskerville Old Face","Baskerville Old Face"],["Bauhaus 93","Bauhaus 93"],["Beranad MT Condensed","Beranad MT Condensed"]]), "oled_hz_sharp")
      .appendField(" 字号")
      .appendField(new Blockly.FieldTextInput("16"), "oled_hz_line_height")
      .appendField("px ")
      .appendField(new Blockly.FieldDropdown([["左移","hz_left"],["右移","hz_right"]]), "hz_left_right")
      .appendField(new Blockly.FieldTextInput("0"), "hz_left_right_data")
      .appendField("px ")
      .appendField(new Blockly.FieldDropdown([["上移","hz_up"],["下移","hz_down"]]), "hz_up_down")
      .appendField(new Blockly.FieldTextInput("0"), "hz_up_down_data")
      .appendField("px"); 
  this.appendValueInput("oled_hz_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数据#");
  this.appendValueInput("oled_hz_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("左上角X#");
  this.appendValueInput("oled_hz_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("左上角Y#");
  this.appendValueInput("oled_hz_height")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("显示高度#");
  this.appendValueInput("oled_hz_width")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("显示宽度#");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("绘制位图时 \nOLED左上角为原点 \n自原点开始，向右为X轴正方向(0≤x≤127)，向下为Y轴正方向(0≤y≤63)");
  this.setHelpUrl("");
  }
};

//设置光标的位置，OLED将会从此位置开始，向后显示文本或数字
Blockly.Blocks.make_arduino_oled_set_cursor= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 设置光标位置为");
  this.appendValueInput("set_cursor_x")
      .setCheck(null)  
      .appendField("X#");
  this.appendValueInput("set_cursor_y")
      .setCheck(null)  
      .appendField("Y#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("设置光标的位置，OLED将会从此位置开始，向后显示文本或数字");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_set_font= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 设置字体尺寸为");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["微小","0"],["小","1"],["中","2"],["大","3"],["超大","4"]]), "font_size");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED设置字体的大小");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_set_font_color= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 设置字体为");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["白色","WHITE"],["黑色","BLACK"],["白底黑字","BLACK, WHITE"]]), "font_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED设置字体的颜色");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_show_text= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 显示文本");
  this.appendValueInput("oled_show_text_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED显示文本，不可自动换行");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_show_text_auto_linefeed= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 显示文本(自动换行)");
  this.appendValueInput("oled_show_text_auto_linefeed_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED显示文本，可自动换行");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_show_text_change_2019_10_18= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(new Blockly.FieldDropdown([["显示文本","print"],["显示文本(自动换行)","println"]]), "show_text_type");
  this.appendValueInput("oled_show_text_auto_linefeed_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_show_num= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 显示数字");
  this.appendValueInput("oled_show_num_data")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["二进制","BIN"],["八进制","OCT"],["十进制","DEC"],["十六进制","HEX"]]), "oled_show_num_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED显示数字，不可自动换行");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_show_num_auto_linefeed= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 显示数字(自动换行)");
  this.appendValueInput("oled_show_num_auto_linefeed_data")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["二进制","BIN"],["八进制","OCT"],["十进制","DEC"],["十六进制","HEX"]]), "oled_show_num_auto_linefeed_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED显示数字，可自动换行");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_show_num_change_2019_10_18= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(new Blockly.FieldDropdown([["显示数字","print"],["显示数字(自动换行)","println"]]), "show_num_type");
  this.appendValueInput("oled_show_num_auto_linefeed_data")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["二进制","BIN"],["八进制","OCT"],["十进制","DEC"],["十六进制","HEX"]]), "oled_show_num_auto_linefeed_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_set_rotation= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 旋转屏幕")
      .appendField(new Blockly.FieldDropdown([["0°","0"],["90°","1"],["180°","2"],["270°","3"]]), "oled_set_rotation_data");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_clear_display= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 清屏");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED清除当前屏幕上显示的数据");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_update_display= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 更新屏幕数据");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED更新屏幕，来显示最新的数据");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_clear_update_display_2019_10_18= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(new Blockly.FieldDropdown([["清屏","clearDisplay"],["更新屏幕数据","display"]]), "choose_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_draw_pixel= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 画点");
  this.appendValueInput("oled_draw_pixel_x")
      .setCheck(null)  
      .appendField("x");
  this.appendValueInput("oled_draw_pixel_y")
      .setCheck(null)  
      .appendField("y");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["白色","WHITE"],["黑色","BLACK"],["反转","INVERSE"]]), "oled_draw_pixel_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED画点");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_draw_line= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 画线");
  this.appendValueInput("oled_draw_line_start_x")
      .setCheck(null)  
      .appendField("起点x");
  this.appendValueInput("oled_draw_line_start_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("oled_draw_line_end_x")
      .setCheck(null)  
      .appendField("终点x");
  this.appendValueInput("oled_draw_line_end_y")
      .setCheck(null)  
      .appendField("y");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["白色","WHITE"],["黑色","BLACK"],["反转","INVERSE"]]), "oled_draw_line_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED画线");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_draw_line1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(new Blockly.FieldDropdown([["画水平线","drawFastHLine"],["画垂直线","drawFastVLine"]]), "oled_draw_line1_type");
  this.appendValueInput("oled_draw_line_start_x")
      .setCheck(null)  
      .appendField("起点x");
  this.appendValueInput("oled_draw_line_start_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("oled_draw_line_length")
      .setCheck(null)  
      .appendField("长度");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["白色","WHITE"],["黑色","BLACK"],["反转","INVERSE"]]), "oled_draw_line_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_draw_rect= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 画矩形")
      .appendField(new Blockly.FieldDropdown([["空心","draw"],["实心","fill"]]), "oled_draw_rect_type_1");
  this.appendValueInput("oled_draw_rect_x")
      .setCheck(null)  
      .appendField("左上角x");
  this.appendValueInput("oled_draw_rect_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("oled_draw_rect_width")
      .setCheck(null)  
      .appendField("宽度");
  this.appendValueInput("oled_draw_rect_height")
      .setCheck(null)  
      .appendField("高度");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["白色","WHITE"],["黑色","BLACK"],["反转","INVERSE"]]), "oled_draw_rect_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED绘制矩形");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_draw_RoundRect= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 画圆角矩形")
      .appendField(new Blockly.FieldDropdown([["空心","draw"],["实心","fill"]]), "oled_draw_rect_type_1");
  this.appendValueInput("oled_draw_rect_x")
      .setCheck(null)  
      .appendField("左上角x");
  this.appendValueInput("oled_draw_rect_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("oled_draw_rect_width")
      .setCheck(null)  
      .appendField("宽度");
  this.appendValueInput("oled_draw_rect_height")
      .setCheck(null)  
      .appendField("高度");
  this.appendValueInput("oled_draw_rect_radius")
      .setCheck(null)  
      .appendField("半径");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["白色","WHITE"],["黑色","BLACK"],["反转","INVERSE"]]), "oled_draw_rect_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED绘制圆角矩形");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_draw_circle= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 画圆")
      .appendField(new Blockly.FieldDropdown([["空心","draw"],["实心","fill"]]), "oled_draw_circle_type");
  this.appendValueInput("oled_draw_circle_x")
      .setCheck(null)  
      .appendField("圆心x");
  this.appendValueInput("oled_draw_circle_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("oled_draw_circle_radius")
      .setCheck(null)  
      .appendField("半径");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["白色","WHITE"],["黑色","BLACK"],["反转","INVERSE"]]), "oled_draw_circle_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED绘制圆");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_draw_triangle= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 画三角形")
      .appendField(new Blockly.FieldDropdown([["空心","draw"],["实心","fill"]]), "oled_draw_triangle_type");
  this.appendValueInput("oled_draw_triangle_x1")
      .setCheck(null)  
      .appendField("x1");
  this.appendValueInput("oled_draw_triangle_y1")
      .setCheck(null)  
      .appendField("y1");
  this.appendValueInput("oled_draw_triangle_x2")
      .setCheck(null)  
      .appendField("x2");
  this.appendValueInput("oled_draw_triangle_y2")
      .setCheck(null)  
      .appendField("y2");
  this.appendValueInput("oled_draw_triangle_x3")
      .setCheck(null)  
      .appendField("x3");
  this.appendValueInput("oled_draw_triangle_y3")
      .setCheck(null)  
      .appendField("y3");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["白色","WHITE"],["黑色","BLACK"],["反转","INVERSE"]]), "oled_draw_triangle_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED绘制三角形");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_oled_draw_bitmap= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/oled_4.png", 25, 25, "*"))
      .appendField("OLED")
      .appendField(new Blockly.FieldTextInput("display"), "oled_name")
      .appendField(" 画位图");
  this.appendValueInput("oled_draw_bitmap_x")
      .setCheck(null)  
      .appendField("左上角x");
  this.appendValueInput("oled_draw_bitmap_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("oled_draw_bitmap_data")
      .setCheck(null)  
      .appendField("位图名称");
  this.appendValueInput("oled_draw_bitmap_width")
      .setCheck(null)  
      .appendField("宽度");
  this.appendValueInput("oled_draw_bitmap_height")
      .setCheck(null)  
      .appendField("高度");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["白色","WHITE"],["黑色","BLACK"],["反转","INVERSE"]]), "oled_draw_bitmap_color");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("OLED画位图");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nokia5110_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_1.png", 25, 25, "*"))
      .appendField("初始化Nokia5110")
      .appendField(new Blockly.FieldTextInput("myGLCD"), "nokia5110_name");
  this.appendValueInput("nokia5110_clk")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("CLK#");
  this.appendValueInput("nokia5110_din")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("DIN#");
  this.appendValueInput("nokia5110_dc")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("DC#");
  this.appendValueInput("nokia5110_ce")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("CE#");
  this.appendValueInput("nokia5110_rst")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("RST#");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("初始化Nokia5110显示屏");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nokia5110_setcontrast= {
  init: function() { 
  this.appendValueInput("nokia5110_setcontrast")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_1.png", 25, 25, "*"))
      .appendField("Nokia5110")
      .appendField(new Blockly.FieldTextInput("myGLCD"), "nokia5110_name")
      .appendField(" 设置屏幕对比度为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("Nokia5110显示屏设置对比度，可输入的范围为(0~127)");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nokia5110_setfont= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_1.png", 25, 25, "*"))
      .appendField("Nokia5110")
      .appendField(new Blockly.FieldTextInput("myGLCD"), "nokia5110_name")
      .appendField(" 设置字体尺寸为")
      .appendField(new Blockly.FieldDropdown([["微小","TinyFont"],["小","SmallFont"],["中","MediumNumbers"],["大","BigNumbers"]]), "nokia5110_setfont_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("Nokia5110显示屏设置字体大小");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nokia5110_set_show_type= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_1.png", 25, 25, "*"))
      .appendField("Nokia5110")
      .appendField(new Blockly.FieldTextInput("myGLCD"), "nokia5110_name")
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["清屏","clrScr"],["更新屏幕数据","update"],["填充屏幕","fillScr"],["进入睡眠模式","enableSleep"],["退出睡眠模式","disableSleep"]]), "nokia5110_show_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nokia5110_set_pixel= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_1.png", 25, 25, "*"))
      .appendField("Nokia5110")
      .appendField(new Blockly.FieldTextInput("myGLCD"), "nokia5110_name")
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["打开","setPixel"],["清除","clrPixel"],["取反","invPixel"]]), "nokia5110_set_pixel_type")
      .appendField("指定像素点");
  this.appendValueInput("nokia5110_set_pixel_x")
      .setCheck(null)  
      .appendField(" x");
  this.appendValueInput("nokia5110_set_pixel_y")
      .setCheck(null)  
      .appendField("y");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("Nokia5110显示屏画点");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nokia5110_coordinate= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["左对齐","LEFT"],["右对齐","RIGHT"],["居中对齐","CENTER"]]), "nokia5110_coordinate_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//显示汉字（使用位图显示）
Blockly.Blocks.make_arduino_nokia5110_show_hz= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_1.png", 25, 25, "*"))
      .appendField("Nokia5110")
      .appendField(new Blockly.FieldTextInput("myGLCD"), "nokia5110_name")
      .appendField("显示汉字和符号");
  this.appendDummyInput()  
      .appendField("代码区绘制预览图案")
      .appendField(new Blockly.FieldCheckbox("true"), "nokia5110_show_hz")
      .appendField(" 显示基本注释")
      .appendField(new Blockly.FieldCheckbox("true"), "nokia5110_show_hz_message");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["华文黑体","STHeiti"],["华文楷体","STKaiti"],["华文细黑","STXihei"],["华文宋体","STSong"],["华文中宋","STZhongsong"],["华文仿宋","STFangsong"],["华文彩云","STCaiyun"],["华文琥珀","STHupo"],["华文隶书","STLiti"],["华文行楷","STXingkai"],["华文新魏","STXinwei"],["黑体","simHei"],["宋体","simSun"],["新宋体","NSimSun"],["仿宋","FangSong"],["楷体","KaiTi"],["仿宋_GB2312","FangSong_GB2312"],["楷体_GB2312","KaiTi_GB2312"],["隶书","LiSu"],["幼圆","YouYuan"],["新细明体","PMingLiU"],["细明体","MingLiU"],["标楷体","DFKai-SB"],["微软正黑体","Microsoft JhengHei"],["微软雅黑体","Microsoft YaHei"],["AcadEref","AcadEref"],["Adobe Ming Std L","Adobe Ming Std L"],["Adobe Myungjo Std M","Adobe Myungjo Std M"],["Adobe Pi Std","Adobe Pi Std"],["AIGDT","AIGDT"],["AIgerian","AIgerian"],["AmdtSymbols","AmdtSymbols"],["Arial","Arial"],["Arial Rounded MT Bold","Arial Rounded MT Bold"],["Arial Unicode MS","Arial Unicode MS"],["BankGothic Lt BT","BankGothic Lt BT"],["BankGothic Md BT","BankGothic Md BT"],["Baskerville Old Face","Baskerville Old Face"],["Bauhaus 93","Bauhaus 93"],["Beranad MT Condensed","Beranad MT Condensed"]]), "nokia5110_hz_sharp")
      .appendField(" 字号")
      .appendField(new Blockly.FieldTextInput("16"), "nokia5110_hz_line_height")
      .appendField("px ")
      .appendField(new Blockly.FieldDropdown([["左移","hz_left"],["右移","hz_right"]]), "hz_left_right")
      .appendField(new Blockly.FieldTextInput("0"), "hz_left_right_data")
      .appendField("px ")
      .appendField(new Blockly.FieldDropdown([["上移","hz_up"],["下移","hz_down"]]), "hz_up_down")
      .appendField(new Blockly.FieldTextInput("0"), "hz_up_down_data")
      .appendField("px"); 
  this.appendValueInput("nokia5110_hz_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数据#");
  this.appendValueInput("nokia5110_hz_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("左上角X#");
  this.appendValueInput("nokia5110_hz_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("左上角Y#");
  this.appendValueInput("nokia5110_hz_height")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("显示高度#");
  this.appendValueInput("nokia5110_hz_width")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("显示宽度#");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("绘制位图时 \nnokia5110左上角为原点 \n自原点开始，向右为X轴正方向(0≤x≤83)，向下为Y轴正方向(0≤y≤47)");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nokia5110_print= {
  init: function() { 
  this.appendValueInput("nokia5110_print_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_1.png", 25, 25, "*"))
      .appendField("Nokia5110")
      .appendField(new Blockly.FieldTextInput("myGLCD"), "nokia5110_name")
      .appendField(" 显示文本");
  this.appendValueInput("nokia5110_print_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" x");
  this.appendValueInput("nokia5110_print_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("y");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("Nokia5110显示屏显示文本");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nokia5110_print_num= {
  init: function() { 
  this.appendValueInput("nokia5110_print_num_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_1.png", 25, 25, "*"))
      .appendField("Nokia5110")
      .appendField(new Blockly.FieldTextInput("myGLCD"), "nokia5110_name")
      .appendField(" 显示")
      .appendField(new Blockly.FieldDropdown([["整数","printNumI"],["浮点数","printNumF"]]), "nokia5110_print_num_type");
  this.appendValueInput("nokia5110_print_num_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" x");
  this.appendValueInput("nokia5110_print_num_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("y");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("Nokia5110显示屏显示数字");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nokia5110_draw_line= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_1.png", 25, 25, "*"))
      .appendField("Nokia5110")
      .appendField(new Blockly.FieldTextInput("myGLCD"), "nokia5110_name")
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["画直线","drawLine"],["清除直线","clrLine"]]), "nokia5110_draw_line_type");
  this.appendValueInput("nokia5110_draw_line_start_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 起点x");
  this.appendValueInput("nokia5110_draw_line_start_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("y");
  this.appendValueInput("nokia5110_draw_line_end_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("终点x");
  this.appendValueInput("nokia5110_draw_line_end_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("y");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("Nokia5110显示屏画线");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nokia5110_draw_rect= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_1.png", 25, 25, "*"))
      .appendField("Nokia5110")
      .appendField(new Blockly.FieldTextInput("myGLCD"), "nokia5110_name")
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["画矩形","drawRect"],["清除矩形","clrRect"],["画圆角矩形","drawRoundRect"],["清除圆角矩形","clrRoundRect"]]), "nokia5110_draw_rect_type");
  this.appendValueInput("nokia5110_draw_rect_start_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 起点x");
  this.appendValueInput("nokia5110_draw_rect_start_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("y");
  this.appendValueInput("nokia5110_draw_rect_end_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("终点x");
  this.appendValueInput("nokia5110_draw_rect_end_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("y");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("Nokia5110显示屏画矩形和圆角矩形");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nokia5110_draw_circle= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_1.png", 25, 25, "*"))
      .appendField("Nokia5110")
      .appendField(new Blockly.FieldTextInput("myGLCD"), "nokia5110_name")
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["画圆","drawCircle"],["清除圆","clrCircle"]]), "nokia5110_draw_circle_type");
  this.appendValueInput("nokia5110_draw_circle_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 圆心x");
  this.appendValueInput("nokia5110_draw_circle_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("y");
  this.appendValueInput("nokia5110_draw_circle_radius")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("半径");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("Nokia5110显示屏画圆");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_nokia5110_draw_bitmap= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_1.png", 25, 25, "*"))
      .appendField("Nokia5110")
      .appendField(new Blockly.FieldTextInput("myGLCD"), "nokia5110_name")
      .appendField(" 画位图");
  this.appendValueInput("nokia5110_draw_bitmap_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数据");
  this.appendValueInput("nokia5110_draw_bitmap_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("左上角x");
  this.appendValueInput("nokia5110_draw_bitmap_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("y");
  this.appendValueInput("nokia5110_draw_bitmap_width")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("宽度");
  this.appendValueInput("nokia5110_draw_bitmap_height")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("高度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("Nokia5110显示屏画位图");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_begin_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("初始化TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(new Blockly.FieldDropdown([["绿色标签","INITR_GREENTAB"],["红色标签","INITR_REDTAB"],["黑色标签","INITR_BLACKTAB"]]), "st7735_tab");
  this.appendValueInput("st7735_rst")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" RST#");
  this.appendValueInput("st7735_cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" CS#");
  this.appendValueInput("st7735_dc")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" DC#");
  this.appendValueInput("st7735_mosi")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" MOSI#");
  this.appendValueInput("st7735_sclk")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" SCLK#");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip(
    "此块适用于ST7735芯片控制的128x128TFT显示屏\n"
   +"MOSI = SDA\n"
   +"SCLK = SCL");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_begin_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("初始化TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(new Blockly.FieldDropdown([["绿色标签","INITR_GREENTAB"],["红色标签","INITR_REDTAB"],["黑色标签","INITR_BLACKTAB"]]), "st7735_tab");
  this.appendValueInput("st7735_rst")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" RST#");
  this.appendValueInput("st7735_cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" CS#");
  this.appendValueInput("st7735_dc")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" DC#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip(
    "此块适用于ST7735芯片控制的128x128TFT显示屏\n"
   +"MOSI = SDA\n"
   +"SCLK = SCL\n"
   +"SPI接线:\n"
   +"①Arduino Uno:\n"
   +"->MOSI - 11\n"
   +"->SCK - 13\n"
   +"②Arduino Mega2560:\n"
   +"->MOSI - 51\n"
   +"->SCK - 52\n"
   +"③Arduino Leonardo:\n"
   +"->MOSI - ICSP-4\n"
   +"->SCK - ICSP-3"
   );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_set_rotation= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 旋转屏幕")
      .appendField(new Blockly.FieldDropdown([["0°","0"],["90°","1"],["180°","2"],["270°","3"]]), "set_rotation_data");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_set_cursor= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 设置光标位置为");
  this.appendValueInput("set_cursor_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("X#");
  this.appendValueInput("set_cursor_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Y#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_set_text_size= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 设置字体尺寸为")
      .appendField(new Blockly.FieldDropdown([["微小","0"],["小","1"],["中","2"],["大","3"],["超大","4"]]), "set_text_size_data");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_set_text_color= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 设置字体颜色为");
  this.appendValueInput("set_text_color_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_color= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldColour("#ff9966"), "st7735_color_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_fill_screen= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name");
  this.appendValueInput("fill_screen_type")
      .setCheck(null)  
      .appendField(" 设置屏幕背景为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_set_text_screen_color_2019_10_18= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 设置")
      .appendField(new Blockly.FieldDropdown([["字体颜色","setTextColor"],["屏幕背景颜色","fillScreen"]]), "choose_type");
  this.appendValueInput("set_text_color_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//显示汉字（使用位图显示）
Blockly.Blocks.make_arduino_st7735_show_hz= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField("显示汉字和符号");
  this.appendDummyInput()  
      .appendField("代码区绘制预览图案")
      .appendField(new Blockly.FieldCheckbox("true"), "st7735_show_hz")
      .appendField(" 显示基本注释")
      .appendField(new Blockly.FieldCheckbox("true"), "st7735_show_hz_message")
      .appendField(" 保存到flash")
      .appendField(new Blockly.FieldCheckbox("true"), "st7735_show_hz_save"); 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["华文黑体","STHeiti"],["华文楷体","STKaiti"],["华文细黑","STXihei"],["华文宋体","STSong"],["华文中宋","STZhongsong"],["华文仿宋","STFangsong"],["华文彩云","STCaiyun"],["华文琥珀","STHupo"],["华文隶书","STLiti"],["华文行楷","STXingkai"],["华文新魏","STXinwei"],["黑体","simHei"],["宋体","simSun"],["新宋体","NSimSun"],["仿宋","FangSong"],["楷体","KaiTi"],["仿宋_GB2312","FangSong_GB2312"],["楷体_GB2312","KaiTi_GB2312"],["隶书","LiSu"],["幼圆","YouYuan"],["新细明体","PMingLiU"],["细明体","MingLiU"],["标楷体","DFKai-SB"],["微软正黑体","Microsoft JhengHei"],["微软雅黑体","Microsoft YaHei"],["AcadEref","AcadEref"],["Adobe Ming Std L","Adobe Ming Std L"],["Adobe Myungjo Std M","Adobe Myungjo Std M"],["Adobe Pi Std","Adobe Pi Std"],["AIGDT","AIGDT"],["AIgerian","AIgerian"],["AmdtSymbols","AmdtSymbols"],["Arial","Arial"],["Arial Rounded MT Bold","Arial Rounded MT Bold"],["Arial Unicode MS","Arial Unicode MS"],["BankGothic Lt BT","BankGothic Lt BT"],["BankGothic Md BT","BankGothic Md BT"],["Baskerville Old Face","Baskerville Old Face"],["Bauhaus 93","Bauhaus 93"],["Beranad MT Condensed","Beranad MT Condensed"]]), "st7735_hz_sharp")
      .appendField(" 字号")
      .appendField(new Blockly.FieldTextInput("16"), "st7735_hz_line_height")
      .appendField("px ")
      .appendField(new Blockly.FieldDropdown([["左移","hz_left"],["右移","hz_right"]]), "hz_left_right")
      .appendField(new Blockly.FieldTextInput("0"), "hz_left_right_data")
      .appendField("px ")
      .appendField(new Blockly.FieldDropdown([["上移","hz_up"],["下移","hz_down"]]), "hz_up_down")
      .appendField(new Blockly.FieldTextInput("0"), "hz_up_down_data")
      .appendField("px"); 
  this.appendValueInput("st7735_hz_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数据#");
  this.appendValueInput("st7735_hz_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("左上角X#");
  this.appendValueInput("st7735_hz_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("左上角Y#");
  this.appendValueInput("st7735_hz_height")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("显示高度#");
  this.appendValueInput("st7735_hz_width")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("显示宽度#");
  this.appendValueInput("st7735_hz_color")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("颜色");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("绘制位图时 \nst7735左上角为原点 \n自原点开始，向右为X轴正方向(0≤x≤127)，向下为Y轴正方向(0≤y≤127)");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_print= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 显示文本");
  this.appendValueInput("st7735_print_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_println= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 显示文本(自动换行)");
  this.appendValueInput("st7735_print_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_print1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 显示数字");
  this.appendValueInput("st7735_print1_data")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["二进制","BIN"],["八进制","OCT"],["十进制","DEC"],["十六进制","HEX"]]), "st7735_print1_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_println1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 显示数字(自动换行)");
  this.appendValueInput("st7735_println1_data")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["二进制","BIN"],["八进制","OCT"],["十进制","DEC"],["十六进制","HEX"]]), "st7735_println1_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_show_text_2019_10_18= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(new Blockly.FieldDropdown([["显示文本","print"],["显示文本(自动换行)","println"]]), "show_text_type");
  this.appendValueInput("st7735_print_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_show_num_2019_10_18= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(new Blockly.FieldDropdown([["显示数字","print"],["显示数字(自动换行)","println"]]), "show_num_type");
  this.appendValueInput("st7735_print_data")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["二进制","BIN"],["八进制","OCT"],["十进制","DEC"],["十六进制","HEX"]]), "st7735_print_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_draw_pixel= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 画点");
  this.appendValueInput("st7735_draw_pixel_x")
      .setCheck(null)  
      .appendField("x");
  this.appendValueInput("st7735_draw_pixel_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("st7735_draw_pixel_color")
      .setCheck(null)  
      .appendField("颜色");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_draw_line= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 画线");
  this.appendValueInput("st7735_draw_pixel_start_x")
      .setCheck(null)  
      .appendField("起点x");
  this.appendValueInput("st7735_draw_pixel_start_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("st7735_draw_pixel_end_x")
      .setCheck(null)  
      .appendField("终点x");
  this.appendValueInput("st7735_draw_pixel_end_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("st7735_draw_pixel_color")
      .setCheck(null)  
      .appendField("颜色");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_draw_line1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(new Blockly.FieldDropdown([["画水平线","drawFastHLine"],["画垂直线","drawFastVLine"]]), "st7735_draw_line1_type");
  this.appendValueInput("st7735_draw_pixel_start_x")
      .setCheck(null)  
      .appendField("起点x");
  this.appendValueInput("st7735_draw_pixel_start_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("st7735_draw_pixel_length")
      .setCheck(null)  
      .appendField("长度");
  this.appendValueInput("st7735_draw_pixel_color")
      .setCheck(null)  
      .appendField("颜色");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_draw_rect= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 画")
      .appendField(new Blockly.FieldDropdown([["矩形","Rect"],["圆角矩形","RoundRect"]]), "st7735_draw_rect_type")
      .appendField(new Blockly.FieldDropdown([["空心","draw"],["实心","fill"]]), "st7735_draw_rect_type_1");
  this.appendValueInput("st7735_draw_rect_x")
      .setCheck(null)  
      .appendField("左上角x");
  this.appendValueInput("st7735_draw_rect_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("st7735_draw_rect_width")
      .setCheck(null)  
      .appendField("宽度");
  this.appendValueInput("st7735_draw_rect_hight")
      .setCheck(null)  
      .appendField("高度");
  this.appendValueInput("st7735_draw_rect_color")
      .setCheck(null)  
      .appendField("颜色");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_draw_rect_change_2019_10_18= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 画矩形")
      .appendField(new Blockly.FieldDropdown([["空心","draw"],["实心","fill"]]), "st7735_draw_rect_type_1");
  this.appendValueInput("st7735_draw_rect_x")
      .setCheck(null)  
      .appendField("左上角x");
  this.appendValueInput("st7735_draw_rect_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("st7735_draw_rect_width")
      .setCheck(null)  
      .appendField("宽度");
  this.appendValueInput("st7735_draw_rect_hight")
      .setCheck(null)  
      .appendField("高度");
  this.appendValueInput("st7735_draw_rect_color")
      .setCheck(null)  
      .appendField("颜色");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_draw_Roundrect_change_2019_10_18= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 画圆角矩形")
      .appendField(new Blockly.FieldDropdown([["空心","draw"],["实心","fill"]]), "st7735_draw_rect_type_1");
  this.appendValueInput("st7735_draw_rect_x")
      .setCheck(null)  
      .appendField("左上角x");
  this.appendValueInput("st7735_draw_rect_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("st7735_draw_rect_width")
      .setCheck(null)  
      .appendField("宽度");
  this.appendValueInput("st7735_draw_rect_hight")
      .setCheck(null)  
      .appendField("高度");
  this.appendValueInput("st7735_draw_rect_radius")
      .setCheck(null)  
      .appendField("半径");
  this.appendValueInput("st7735_draw_rect_color")
      .setCheck(null)  
      .appendField("颜色");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_draw_circle= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 画圆")
      .appendField(new Blockly.FieldDropdown([["空心","draw"],["实心","fill"]]), "oled_draw_circle_type");
  this.appendValueInput("st7735_draw_circle_x")
      .setCheck(null)  
      .appendField("圆心x");
  this.appendValueInput("st7735_draw_circle_y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("st7735_draw_circle_radius")
      .setCheck(null)  
      .appendField("半径");
  this.appendValueInput("st7735_draw_circle_color")
      .setCheck(null)  
      .appendField("颜色");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_st7735_draw_triangle= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_4.png", 25, 25, "*"))
      .appendField("TFT")
      .appendField(new Blockly.FieldTextInput("tft"), "st7735_name")
      .appendField(" 画三角形")
      .appendField(new Blockly.FieldDropdown([["空心","draw"],["实心","fill"]]), "st7735_draw_triangle_type");
  this.appendValueInput("st7735_draw_triangle_x1")
      .setCheck(null)  
      .appendField("x1#");
  this.appendValueInput("st7735_draw_triangle_y1")
      .setCheck(null)  
      .appendField("y1#");
  this.appendValueInput("st7735_draw_triangle_x2")
      .setCheck(null)  
      .appendField("x2#");
  this.appendValueInput("st7735_draw_triangle_y2")
      .setCheck(null)  
      .appendField("y2#");
  this.appendValueInput("st7735_draw_triangle_x3")
      .setCheck(null)  
      .appendField("x3#");
  this.appendValueInput("st7735_draw_triangle_y3")
      .setCheck(null)  
      .appendField("y3#");
  this.appendValueInput("st7735_draw_triangle_color")
      .setCheck(null)  
      .appendField("颜色");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//初始化LCD12864
Blockly.Blocks.make_arduino_lcd12864_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("初始化LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 屏幕")
      .appendField(new Blockly.FieldDropdown([["旋转0°","U8G2_R0"],["旋转90°","U8G2_R1"],["旋转180°","U8G2_R2"],["旋转270°","U8G2_R3"],["镜像","U8G2_MIRROR"]]), "display_rotation");
  this.appendValueInput("clock")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" E#");
  this.appendValueInput("data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("R/W#");
  this.appendValueInput("cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("RS#");
  this.appendValueInput("reset")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("RST#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip(
    "初始化LCD12864"
    );
  this.setHelpUrl("");
  }
};

//LCD12864更新屏幕数据
Blockly.Blocks.make_arduino_lcd12864_update= {
  init: function() { 
  this.appendDummyInput()  
      //.appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 刷新界面");
  this.appendStatementInput("update_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864更新屏幕数据");
  this.setHelpUrl("");
  }
};

//显示汉字（使用位图显示）
Blockly.Blocks.make_arduino_lcd12864_show_hz= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("lcd12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField("显示汉字和符号");
  this.appendDummyInput()  
      .appendField("代码区绘制预览图案")
      .appendField(new Blockly.FieldCheckbox("true"), "lcd12864_show_hz")
      .appendField(" 显示基本注释")
      .appendField(new Blockly.FieldCheckbox("true"), "lcd12864_show_hz_message")
      .appendField(" 保存到flash")
      .appendField(new Blockly.FieldCheckbox("true"), "lcd12864_show_hz_save"); 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["华文黑体","STHeiti"],["华文楷体","STKaiti"],["华文细黑","STXihei"],["华文宋体","STSong"],["华文中宋","STZhongsong"],["华文仿宋","STFangsong"],["华文彩云","STCaiyun"],["华文琥珀","STHupo"],["华文隶书","STLiti"],["华文行楷","STXingkai"],["华文新魏","STXinwei"],["黑体","simHei"],["宋体","simSun"],["新宋体","NSimSun"],["仿宋","FangSong"],["楷体","KaiTi"],["仿宋_GB2312","FangSong_GB2312"],["楷体_GB2312","KaiTi_GB2312"],["隶书","LiSu"],["幼圆","YouYuan"],["新细明体","PMingLiU"],["细明体","MingLiU"],["标楷体","DFKai-SB"],["微软正黑体","Microsoft JhengHei"],["微软雅黑体","Microsoft YaHei"],["AcadEref","AcadEref"],["Adobe Ming Std L","Adobe Ming Std L"],["Adobe Myungjo Std M","Adobe Myungjo Std M"],["Adobe Pi Std","Adobe Pi Std"],["AIGDT","AIGDT"],["AIgerian","AIgerian"],["AmdtSymbols","AmdtSymbols"],["Arial","Arial"],["Arial Rounded MT Bold","Arial Rounded MT Bold"],["Arial Unicode MS","Arial Unicode MS"],["BankGothic Lt BT","BankGothic Lt BT"],["BankGothic Md BT","BankGothic Md BT"],["Baskerville Old Face","Baskerville Old Face"],["Bauhaus 93","Bauhaus 93"],["Beranad MT Condensed","Beranad MT Condensed"]]), "lcd12864_hz_sharp")
      .appendField(" 字号")
      .appendField(new Blockly.FieldTextInput("16"), "lcd12864_hz_line_height")
      .appendField("px ")
      .appendField(new Blockly.FieldDropdown([["左移","hz_left"],["右移","hz_right"]]), "hz_left_right")
      .appendField(new Blockly.FieldTextInput("0"), "hz_left_right_data")
      .appendField("px ")
      .appendField(new Blockly.FieldDropdown([["上移","hz_up"],["下移","hz_down"]]), "hz_up_down")
      .appendField(new Blockly.FieldTextInput("0"), "hz_up_down_data")
      .appendField("px"); 
  this.appendValueInput("lcd12864_hz_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数据#");
  this.appendValueInput("lcd12864_hz_x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("左上角X#");
  this.appendValueInput("lcd12864_hz_y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("左上角Y#");
  this.appendValueInput("lcd12864_hz_height")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("显示高度#");
  this.appendValueInput("lcd12864_hz_width")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("显示宽度#");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("绘制位图时 \nlcd12864左上角为原点 \n自原点开始，向右为X轴正方向(0≤x≤127)，向下为Y轴正方向(0≤y≤63)");
  this.setHelpUrl("");
  }
};

//LCD12864设置字体
Blockly.Blocks.make_arduino_lcd12864_setFont= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 设置英文字体")
      .appendField(new Blockly.FieldDropdown([["Time New Roman","tim"],["Helvetica","helv"],["ncen","ncen"],["courier new","cour"]]), "font_type")
      .appendField("字号")
      .appendField(new Blockly.FieldDropdown([["08","08"],["10","10"],["12","12"],["14","14"],["18","18"],["24","24"]]), "font_size")
      .appendField("字形")
      .appendField(new Blockly.FieldDropdown([["常规","R"],["加粗","B"]]), "font_type1");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864设置字体");
  this.setHelpUrl("");
  }
};

//LCD12864设置光标位置
Blockly.Blocks.make_arduino_lcd12864_setCursor= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 设置光标位置为");
  this.appendValueInput("x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("X#");
  this.appendValueInput("y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Y#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864设置光标位置");
  this.setHelpUrl("");
  }
};

//LCD12864显示文本
Blockly.Blocks.make_arduino_lcd12864_print= {
  init: function() { 
  this.appendValueInput("print_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 显示文本");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864显示文本");
  this.setHelpUrl("");
  }
};

//LCD12864清屏
Blockly.Blocks.make_arduino_lcd12864_clearDisplay= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 清屏");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864清屏");
  this.setHelpUrl("");
  }
};

//LCD12864设置背光亮度
Blockly.Blocks.make_arduino_lcd12864_setContrast= {
  init: function() { 
  this.appendValueInput("set_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 设置背光亮度为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864设置背光亮度(0~255)");
  this.setHelpUrl("");
  }
};

//LCD12864绘制位图
Blockly.Blocks.make_arduino_lcd12864_drawXBMP= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 画位图");
  this.appendValueInput("x")
      .setCheck(null)  
      .appendField("左上角x");
  this.appendValueInput("y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("width")
      .setCheck(null)  
      .appendField("宽度");
  this.appendValueInput("height")
      .setCheck(null)  
      .appendField("高度");
  this.appendValueInput("data")
      .setCheck(null)  
      .appendField("位图名称");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864绘制位图");
  this.setHelpUrl("");
  }
};

//LCD12864画点
Blockly.Blocks.make_arduino_lcd12864_drawPixel= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 画点");
  this.appendValueInput("x")
      .setCheck(null)  
      .appendField("x");
  this.appendValueInput("y")
      .setCheck(null)  
      .appendField("y");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864画点");
  this.setHelpUrl("");
  }
};

//LCD12864画线
Blockly.Blocks.make_arduino_lcd12864_drawLine= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 画线");
  this.appendValueInput("x1")
      .setCheck(null)  
      .appendField("起点x");
  this.appendValueInput("y1")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("x2")
      .setCheck(null)  
      .appendField("终点x");
  this.appendValueInput("y2")
      .setCheck(null)  
      .appendField("y");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864画线");
  this.setHelpUrl("");
  }
};

//LCD12864画水平线和垂直线
Blockly.Blocks.make_arduino_lcd12864_drawLine1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(new Blockly.FieldDropdown([["画水平线","drawHLine"],["画垂直线","drawVLine"]]), "draw_type");
  this.appendValueInput("x")
      .setCheck(null)  
      .appendField("起点x");
  this.appendValueInput("y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("length")
      .setCheck(null)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864画水平线和垂直线");
  this.setHelpUrl("");
  }
};

//LCD12864画矩形
Blockly.Blocks.make_arduino_lcd12864_drawBox= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 画矩形")
      .appendField(new Blockly.FieldDropdown([["空心","drawFrame"],["实心","drawBox"]]), "draw_type");
  this.appendValueInput("x")
      .setCheck(null)  
      .appendField("左上角x");
  this.appendValueInput("y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("width")
      .setCheck(null)  
      .appendField("宽度");
  this.appendValueInput("height")
      .setCheck(null)  
      .appendField("高度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864画矩形");
  this.setHelpUrl("");
  }
};

//LCD12864画圆角矩形
Blockly.Blocks.make_arduino_lcd12864_drawRBox= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 画圆角矩形")
      .appendField(new Blockly.FieldDropdown([["空心","drawRFrame"],["实心","drawRBox"]]), "draw_type");
  this.appendValueInput("x")
      .setCheck(null)  
      .appendField("左上角x");
  this.appendValueInput("y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("width")
      .setCheck(null)  
      .appendField("宽度");
  this.appendValueInput("height")
      .setCheck(null)  
      .appendField("高度");
  this.appendValueInput("r")
      .setCheck(null)  
      .appendField("圆角半径");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864画圆角矩形");
  this.setHelpUrl("");
  }
};

//LCD12864画圆
Blockly.Blocks.make_arduino_lcd12864_drawCircle= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 画圆")
      .appendField(new Blockly.FieldDropdown([["空心","drawCircle"],["实心","drawDisc"]]), "draw_type");
  this.appendValueInput("x")
      .setCheck(null)  
      .appendField("圆心x");
  this.appendValueInput("y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("r")
      .setCheck(null)  
      .appendField("半径");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["整圆","U8G2_DRAW_ALL"],["右上","U8G2_DRAW_UPPER_RIGHT"],["左上","U8G2_DRAW_UPPER_LEFT"],["右下","U8G2_DRAW_LOWER_RIGHT"],["左下","U8G2_DRAW_LOWER_LEFT"]]), "draw_type1");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864画圆");
  this.setHelpUrl("");
  }
};

//LCD12864画椭圆
Blockly.Blocks.make_arduino_lcd12864_drawEllipse= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 画椭圆")
      .appendField(new Blockly.FieldDropdown([["空心","drawEllipse"],["实心","drawFilledEllipse"]]), "draw_type");
  this.appendValueInput("x")
      .setCheck(null)  
      .appendField("圆心x");
  this.appendValueInput("y")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("x_r")
      .setCheck(null)  
      .appendField("x方向半径");
  this.appendValueInput("y_r")
      .setCheck(null)  
      .appendField("y方向半径");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["整圆","U8G2_DRAW_ALL"],["右上","U8G2_DRAW_UPPER_RIGHT"],["左上","U8G2_DRAW_UPPER_LEFT"],["右下","U8G2_DRAW_LOWER_RIGHT"],["左下","U8G2_DRAW_LOWER_LEFT"]]), "draw_type1");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864画椭圆");
  this.setHelpUrl("");
  }
};

//LCD12864画三角形
Blockly.Blocks.make_arduino_lcd12864_drawTriangle= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/屏幕_6.png", 25, 25, "*"))
      .appendField("LCD12864")
      .appendField(new Blockly.FieldTextInput("u8g2"), "lcd12864_name")
      .appendField(" 画三角形");
  this.appendValueInput("x1")
      .setCheck(null)  
      .appendField("x1");
  this.appendValueInput("y1")
      .setCheck(null)  
      .appendField("y1");
  this.appendValueInput("x2")
      .setCheck(null)  
      .appendField("x2");
  this.appendValueInput("y2")
      .setCheck(null)  
      .appendField("y2");
  this.appendValueInput("x3")
      .setCheck(null)  
      .appendField("x3");
  this.appendValueInput("y3")
      .setCheck(null)  
      .appendField("y3");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("LCD12864画三角形");
  this.setHelpUrl("");
  }
};

//初始化MAX7219八位数码管
Blockly.Blocks.make_arduino_max7219_led_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/数字/数字_1.png", 25, 25, "*"))
      .appendField("初始化MAX7219 LED")
      .appendField(new Blockly.FieldTextInput("lc"), "max7219_name");
  this.appendValueInput("din")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" DIN#");
  this.appendValueInput("clk")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("CLK#");
  this.appendValueInput("cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("CS#");
  this.appendValueInput("number")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数目#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("初始化MAX7219八位数码管");
  this.setHelpUrl("");
  }
};

//MAX7219八位数码管 获取连接的设备的数目
Blockly.Blocks.make_arduino_max7219_led_getDeviceCount= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/数字/数字_1.png", 25, 25, "*"))
      .appendField("MAX7219 LED")
      .appendField(new Blockly.FieldTextInput("lc"), "max7219_name")
      .appendField(" 获取设备数");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(180);
  this.setTooltip("MAX7219八位数码管 获取连接的设备的数目，返回数据的类型为int");
  this.setHelpUrl("");
  }
};

//MAX7219八位数码管 打开或关闭某个设备
Blockly.Blocks.make_arduino_max7219_led_shutdown= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/数字/数字_1.png", 25, 25, "*"))
      .appendField("MAX7219 LED")
      .appendField(new Blockly.FieldTextInput("lc"), "max7219_name");
  this.appendValueInput("address")
      .setCheck(null)  
      .appendField(" 设备");
  this.appendValueInput("status")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip(
    "MAX7219八位数码管 打开或关闭某个设备\n"
   +"输入值(左→右):\n"
   +"①int\n"
   +"->此处填入设备号(从0开始，最大值比设备数目小1)来选择一个设备进行控制\n"
   +"②boolean\n"
   +"->设备开机 -> 开机 - false\n"
   +"->设备关机 -> 关机 - true"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_max7219_led_shutdown_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["开机","false"],["关机","true"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//MAX7219八位数码管 调整某个设备的亮度和最大显示位数
Blockly.Blocks.make_arduino_max7219_led_setScanLimit= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/数字/数字_1.png", 25, 25, "*"))
      .appendField("MAX7219 LED")
      .appendField(new Blockly.FieldTextInput("lc"), "max7219_name");
  this.appendValueInput("address")
      .setCheck(null)  
      .appendField(" 设备");
  this.appendValueInput("limit")
      .setCheck(null)  
      .appendField(new Blockly.FieldDropdown([["亮度","setIntensity"],["最高显示位数","setScanLimit"]]), "limit_type")
      .appendField("设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip(
    "MAX7219八位数码管 调整某个设备的亮度和最大显示位数"
    );
  this.setHelpUrl("");
  },
  onchange: function() {
    var dropdown_limit_type = this.getFieldValue('limit_type');
      if(dropdown_limit_type == "setScanLimit")
      {
      this.setTooltip(
        "MAX7219八位数码管 调整某个设备的亮度和最大显示位数\n"
       +"输入值(左→右):\n"
       +"①int\n"
       +"->此处填入设备号(从0开始，最大值比设备数目小1)来选择一个设备进行控制\n"
       +"②int\n"
       +"->此处用于设定设备上有多少数码管可以显示数据，可输入的范围(1~8)"
      );
    }
    else
    {
      this.setTooltip(
        "MAX7219八位数码管 调整某个设备的亮度和最大显示位数\n"
       +"输入值(左→右):\n"
       +"①int\n"
       +"->此处填入设备号(从0开始，最大值比设备数目小1)来选择一个设备进行控制\n"
       +"②int\n"
       +"->此处用于设定设备的亮度，可输入的范围(0~15)"
      );
    }
  }
};

//MAX7219八位数码管 清除某个设备上所有显示数据
Blockly.Blocks.make_arduino_max7219_led_clearDisplay= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/数字/数字_1.png", 25, 25, "*"))
      .appendField("MAX7219 LED")
      .appendField(new Blockly.FieldTextInput("lc"), "max7219_name");
  this.appendValueInput("address")
      .setCheck(null)  
      .appendField(" 设备");
  this.appendDummyInput()  
      .appendField("清屏");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip(
    "MAX7219八位数码管 清除某个设备上所有显示数据\n"
   +"输入值:\n"
   +"int\n"
   +"->此处填入设备号(从0开始，最大值比设备数目小1)来选择一个设备进行控制"
   );
  this.setHelpUrl("");
  }
};

//MAX7219八位数码管 设置某个设备上一个点处LED的状态
Blockly.Blocks.make_arduino_max7219_led_setLed= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/数字/数字_1.png", 25, 25, "*"))
      .appendField("MAX7219 LED")
      .appendField(new Blockly.FieldTextInput("lc"), "max7219_name");
  this.appendValueInput("address")
      .setCheck(null)  
      .appendField(" 设备");
  this.appendValueInput("row")
      .setCheck(null)  
      .appendField("x");
  this.appendValueInput("col")
      .setCheck(null)  
      .appendField("y");
  this.appendValueInput("state")
      .setCheck(null)  
      .appendField("处LED设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip(
    "MAX7219八位数码管 设置某个设备上一个点处LED的状态\n"
   +"输入值(左→右):\n"
   +"①int\n"
   +"->此处填入设备号(从0开始，最大值比设备数目小1)来选择一个设备进行控制\n"
   +"②int\n"
   +"->此处通过设定x的值来选中设备上的一个数码管，可输入的范围(0~7)\n"
   +"③int\n"
   +"->此处通过设定y的值来选中某个数码管上的一个LED，可输入的范围(0~7)\n"
   +"->61111111112←数码管上不同LED处的y取值\n"
   +"->68888888882\n"
   +"->68888888882\n"
   +"->68888888882\n"
   +"->77777777777\n"
   +"->58888888883\n"
   +"->58888888883\n"
   +"->58888888883\n"
   +"->54444444443□0\n"
   +"④boolean\n"
   +"->点亮此处LED -> 亮 - true \n"
   +"->熄灭此处LED -> 灭 - false"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_max7219_led_setLed_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["亮","true"],["灭","false"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//MAX7219八位数码管 设置某个设备的某个行或某个列上所有LED的状态
Blockly.Blocks.make_arduino_max7219_led_setRow_Column= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/数字/数字_1.png", 25, 25, "*"))
      .appendField("MAX7219 LED")
      .appendField(new Blockly.FieldTextInput("lc"), "max7219_name");
  this.appendValueInput("address")
      .setCheck(null)  
      .appendField(" 设备");
  this.appendValueInput("x_y")
      .setCheck(null)  
      .appendField(new Blockly.FieldDropdown([["y","setColumn"],["x","setRow"]]), "x_y_type");
  this.appendValueInput("state")
      .setCheck(null)  
      .appendField("上各LED设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip("MAX7219八位数码管 设置某个设备的某个行或某个列上所有LED的状态");
  this.setHelpUrl("");
  },
  onchange: function() {
    var dropdown_x_y_type = this.getFieldValue('x_y_type');
    if(dropdown_x_y_type == "setColumn")
    {
      this.setTooltip(
        "MAX7219八位数码管 设置某个设备的某个行或某个列上所有LED的状态\n"
       +"输入值(左→右):\n"
       +"①int\n"
       +"->此处填入设备号(从0开始，最大值比设备数目小1)来选择一个设备进行控制\n"
       +"②int\n"
       +"->此处用于选择设备所有数码管上的y处LED，可输入的范围(0~7)\n"
       +"③byte\n"
       +"->此处用于设置所选择的8个LED的状态"
      );
    }
    else
    {
      this.setTooltip(
        "MAX7219八位数码管 设置某个设备的某个行或某个列上所有LED的状态\n"
       +"输入值(左→右):\n"
       +"①int\n"
       +"->此处填入设备号(从0开始，最大值比设备数目小1)来选择一个设备进行控制\n"
       +"②int\n"
       +"->此处用于选择设备上某处数码管，可输入的范围(0~7)\n"
       +"->61111111112←数码管上不同LED处的y取值\n"
       +"->68888888882\n"
       +"->68888888882\n"
       +"->68888888882\n"
       +"->77777777777\n"
       +"->58888888883\n"
       +"->58888888883\n"
       +"->58888888883\n"
       +"->54444444443□0\n"
       +"③byte\n"
       +"->此处用于设置所选择的8个LED的状态"
      );
    }
  }
};

Blockly.Blocks.make_max7219_led= {
  init: function() { 
  this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("false"), "led_no_0")
      .appendField(new Blockly.FieldCheckbox("true"), "led_1")
      .appendField(new Blockly.FieldCheckbox("true"), "led_1_1");
  this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("true"), "led_6")
      .appendField(new Blockly.FieldCheckbox("false"), "led_no_1")
      .appendField(new Blockly.FieldCheckbox("false"), "led_no_2")
      .appendField(new Blockly.FieldCheckbox("true"), "led_2");
  this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("true"), "led_6_1")
      .appendField(new Blockly.FieldCheckbox("false"), "led_no_3")
      .appendField(new Blockly.FieldCheckbox("false"), "led_no_4")
      .appendField(new Blockly.FieldCheckbox("true"), "led_2_1");
  this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("false"), "led_no_10")
      .appendField(new Blockly.FieldCheckbox("true"), "led_7")
      .appendField(new Blockly.FieldCheckbox("true"), "led_7_1");
  this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("true"), "led_5")
      .appendField(new Blockly.FieldCheckbox("false"), "led_no_5")
      .appendField(new Blockly.FieldCheckbox("false"), "led_no_6")
      .appendField(new Blockly.FieldCheckbox("true"), "led_3");
  this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("true"), "led_5_1")
      .appendField(new Blockly.FieldCheckbox("false"), "led_no_7")
      .appendField(new Blockly.FieldCheckbox("false"), "led_no_8")
      .appendField(new Blockly.FieldCheckbox("true"), "led_3_1");
  this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("false"), "led_no_9")
      .appendField(new Blockly.FieldCheckbox("true"), "led_4")
      .appendField(new Blockly.FieldCheckbox("true"), "led_4_1")
      .appendField("   ")
      .appendField(new Blockly.FieldCheckbox("true"), "led_0");
  this.setOutput(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};



//MAX7219八位数码管 让某个设备的某个数码管显示字节
Blockly.Blocks.make_arduino_max7219_led_setDigit= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/数字/数字_1.png", 25, 25, "*"))
      .appendField("MAX7219 LED")
      .appendField(new Blockly.FieldTextInput("lc"), "max7219_name");
  this.appendValueInput("address")
      .setCheck(null)  
      .appendField(" 设备");
  this.appendValueInput("digit")
      .setCheck(null)  
      .appendField("x");
  this.appendValueInput("value")
      .setCheck(null)  
      .appendField("处数码管显示(字节)");
  this.appendValueInput("dp")
      .setCheck(null)  
      .appendField("小数点");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip(
    "MAX7219八位数码管 让某个设备的某个数码管显示数据\n"
   +"输入值(左→右):\n"
   +"①int\n"
   +"->此处填入设备号(从0开始，最大值比设备数目小1)来选择一个设备进行控制\n"
   +"②int\n"
   +"->此处通过设定x的值来选中设备上的一个数码管，可输入的范围(0~7)\n"
   +"③byte\n"
   +"->此处输入要显示的数据，可输入的范围(0x00~0x0F)\n"
   +"④boolean\n"
   +"->此处用于设置数码管上小数点的状态\n"
   +"->点亮此处LED -> 亮 - true \n"
   +"->熄灭此处LED -> 灭 - false"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_max7219_led_byte= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["0x00","0x00"],["0x01","0x01"],["0x02","0x02"],["0x03","0x03"],["0x04","0x04"],["0x05","0x05"],["0x06","0x06"],["0x07","0x07"],["0x08","0x08"],["0x09","0x09"],["0x0A","0x0A"],["0x0B","0x0B"],["0x0C","0x0C"],["0x0D","0x0D"],["0x0E","0x0E"],["0x0F","0x0F"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//MAX7219八位数码管 让某个设备的某个数码管显示字符
Blockly.Blocks.make_arduino_max7219_led_setChar= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/数字/数字_1.png", 25, 25, "*"))
      .appendField("MAX7219 LED")
      .appendField(new Blockly.FieldTextInput("lc"), "max7219_name");
  this.appendValueInput("address")
      .setCheck(null)  
      .appendField(" 设备");
  this.appendValueInput("digit")
      .setCheck(null)  
      .appendField("x");
  this.appendValueInput("value")
      .setCheck(null)  
      .appendField("处数码管显示(字符)");
  this.appendValueInput("dp")
      .setCheck(null)  
      .appendField("小数点");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(180);
  this.setTooltip(
    "MAX7219八位数码管 让某个设备的某个数码管显示数据\n"
   +"输入值(左→右):\n"
   +"①int\n"
   +"->此处填入设备号(从0开始，最大值比设备数目小1)来选择一个设备进行控制\n"
   +"②int\n"
   +"->此处通过设定x的值来选中设备上的一个数码管，可输入的范围(0~7)\n"
   +"③char\n"
   +"->此处输入要显示的数据，可输入(0、1、2、3、4、5、6、7、8、9、A、b、c、d、E、F、H、L、P、.、-、_)\n"
   +"④boolean\n"
   +"->此处用于设置数码管上小数点的状态\n"
   +"->点亮此处LED -> 亮 - true \n"
   +"->熄灭此处LED -> 灭 - false"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_max7219_led_char= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("'")
      .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["A","A"],["b","b"],["c","c"],["d","d"],["E","E"],["F","F"],["H","H"],["L","L"],["P","P"],[".","."],["-","-"],["_","_"]]), "type")
      .appendField("'");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//初始化AT24Cxx储存器
Blockly.Blocks.make_arduino_at24cxx_begin= {
  init: function() { 
  this.appendValueInput("at24cxx_begin_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("初始化")
      .appendField(new Blockly.FieldDropdown([["AT24C01","AT24C01"],["AT24C02","AT24C02"],["AT24C04","AT24C04"],["AT24C08","AT24C08"],["AT24C16","AT24C16"],["AT24C32","AT24C32"],["AT24C64","AT24C64"],["AT24C128","AT24C128"],["AT24C256","AT24C256"]]), "at24cxx_begin_type")
      .appendField(new Blockly.FieldTextInput("ic_eeprom"), "at24cxx_name")
      .appendField(" 地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(0);
  this.setTooltip(
    "AT24Cxx：\n "
   +"AT24C01 - 128byte \n"
   +"AT24C02 - 256byte \n"
   +"AT24C04 - 512byte \n"
   +"AT24C08 - 1024byte \n"
   +"AT24C16 - 2048byte \n"
   +"AT24C32 - 4096byte \n"
   +"AT24C64 - 8192byte \n"
   +"AT24C128 - 16384byte \n"
   +"AT24C256 - 32768byte\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
  );
  this.setHelpUrl("");
  }
};

//AT24Cxx储存器写入数据
Blockly.Blocks.make_arduino_at24cxx_write_byte= {
  init: function() { 
  this.appendValueInput("at24cxx_write_byte_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("ic_eeprom"), "at24cxx_name")
      .appendField(" 写入(字节)");
  this.appendValueInput("at24cxx_write_byte_address")
      .setCheck(null)  
      .appendField("地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(0);
  this.setTooltip("at24cxx储存器写入数据");
  this.setHelpUrl("");
  }
};

//AT24Cxx储存器读取数据
Blockly.Blocks.make_arduino_at24cxx_read_byte= {
  init: function() { 
  this.appendValueInput("at24cxx_read_byte_address")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("ic_eeprom"), "at24cxx_name")
      .appendField("读取(字节) 地址");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(0);
  this.setTooltip("at24cxx储存器读取数据");
  this.setHelpUrl("");
  }
};

//AT24Cxx储存器写入数据(使用一个字节数组)
Blockly.Blocks.make_arduino_at24cxx_write_page= {
  init: function() { 
  this.appendValueInput("at24cxx_write_page_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("ic_eeprom"), "at24cxx_name")
      .appendField(" 写入(字节数组)");
  this.appendValueInput("at24cxx_write_page_address")
      .setCheck(null)  
      .appendField("地址");
  this.appendValueInput("at24cxx_write_page_length")
      .setCheck(null)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(0);
  this.setTooltip("AT24Cxx储存器写入数据(使用一个字节数组)");
  this.setHelpUrl("");
  }
};

//AT24Cxx储存器读取数据，保存数据到一个数组
Blockly.Blocks.make_arduino_at24cxx_read_buffer= {
  init: function() { 
  this.appendValueInput("at24cxx_read_buffer_address")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("ic_eeprom"), "at24cxx_name")
      .appendField("读取数据(字节数组) 地址");
  this.appendValueInput("at24cxx_read_buffer_length")
      .setCheck(null)  
      .appendField("长度");
  this.appendValueInput("at24cxx_read_buffer_data")
      .setCheck(null)  
      .appendField("保存到");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(0);
  this.setTooltip("AT24Cxx储存器读取数据，保存数据到一个数组");
  this.setHelpUrl("");
  }
};

//初始化AT24CXX存储器-1
Blockly.Blocks.make_arduino_at24cx_begin_1= {
  init: function() { 
  this.appendValueInput("at24cx_begin_address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("初始化AT24Cxx")
      .appendField(new Blockly.FieldTextInput("ic_eeprom"), "at24cx_name")
      .appendField(" 地址");
  this.appendValueInput("at24cx_begin_pagesize")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("每页字节数");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(0);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化AT24CXX存储器\n"
   +"2.语法:\n"
   +"->AT24CX(byte index, byte pageSize);\n"
   +"例如:\n"
   +"->初始化AT24C01 - AT24CX(byte index, 8)，储存空间:128byte\n"
   +"->初始化AT24C02 - AT24CX(byte index, 8)，储存空间:256byte\n"
   +"->初始化AT24C04 - AT24CX(byte index, 16)，储存空间:512byte\n"
   +"->初始化AT24C08 - AT24CX(byte index, 16)，储存空间:1024byte\n"
   +"->初始化AT24C16 - AT24CX(byte index, 16)，储存空间:2048byte\n"
   +"->初始化AT24C32 - AT24CX(byte index, 32)，储存空间:4096byte\n"
   +"->初始化AT24C64 - AT24CX(byte index, 32)，储存空间:8192byte\n"
   +"->初始化AT24C128 - AT24CX(byte index, 64)，储存空间:16384byte\n"
   +"->初始化AT24C256 - AT24CX(byte index, 64)，储存空间:32768byte\n"
   +"->初始化AT24C512 - AT24CX(byte index, 128)，储存空间:65536byte\n"
   +"3.参数:\n"
   +"->index:器件的地址[0(0x50) - 7(0x57)]\n"
   +"->pageSize:储存器每页的字节数\n"
   +"4.返回值:无\n"
   +"5.I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

//初始化AT24CXX存储器
Blockly.Blocks.make_arduino_at24cx_begin= {
  init: function() { 
  this.appendValueInput("at24cx_begin_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("初始化")
      .appendField(new Blockly.FieldDropdown([["AT24C01","AT24C01"],["AT24C02","AT24C02"],["AT24C04","AT24C04"],["AT24C08","AT24C08"],["AT24C16","AT24C016"],["AT24C32","AT24C32"],["AT24C64","AT24C64"],["AT24C128","AT24C128"],["AT24C256","AT24C256"],["AT24C512","AT24C512"]]), "at24cx_begin_type")
      .appendField(new Blockly.FieldTextInput("ic_eeprom"), "at24cx_name")
      .appendField(" 地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(0);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化AT24CXX存储器\n"
   +"2.语法:\n"
   +"->初始化AT24C01 - AT24C01(byte index)|AT24C01()，储存空间:128byte\n"
   +"->初始化AT24C02 - AT24C02(byte index)|AT24C02()，储存空间:256byte\n"
   +"->初始化AT24C04 - AT24C04(byte index)|AT24C04()，储存空间:512byte\n"
   +"->初始化AT24C08 - AT24C08(byte index)|AT24C08()，储存空间:1024byte\n"
   +"->初始化AT24C16 - AT24C16(byte index)|AT24C16()，储存空间:2048byte\n"
   +"->初始化AT24C32 - AT24C32(byte index)|AT24C32()，储存空间:4096byte\n"
   +"->初始化AT24C64 - AT24C64(byte index)|AT24C64()，储存空间:8192byte\n"
   +"->初始化AT24C128 - AT24C128(byte index)|AT24C128()，储存空间:16384byte\n"
   +"->初始化AT24C256 - AT24C256(byte index)|AT24C256()，储存空间:32768byte\n"
   +"->初始化AT24C512 - AT24C512(byte index)|AT24C512()，储存空间:65536byte\n"
   +"3.参数:\n"
   +"->index:器件的地址[0(0x50) - 7(0x57)]\n"
   +"4.返回值:无\n"
   +"5.I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

//AT24CXX存储器 地址
Blockly.Blocks.make_arduino_at24cx_address= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["0x50","0"],["0x51","1"],["0x52","2"],["0x53","3"],["0x54","4"],["0x55","5"],["0x56","6"],["0x57","7"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(0);
  this.setTooltip(
    "->0x50 - 0\n"
   +"->0x51 - 1\n"
   +"->0x52 - 2\n"
   +"->0x53 - 3\n"
   +"->0x54 - 4\n"
   +"->0x55 - 5\n"
   +"->0x56 - 6\n"
   +"->0x57 - 7"
    );
  this.setHelpUrl("");
  }
};

//AT24CXX存储器 写入数值
Blockly.Blocks.make_arduino_at24cx_write_data= {
  init: function() { 
  this.appendValueInput("at24cx_write_address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("AT24Cxx")
      .appendField(new Blockly.FieldTextInput("ic_eeprom"), "at24cx_name")
      .appendField(" 写入")
      .appendField(new Blockly.FieldDropdown([["字节","write"],["整数","writeInt"],["长整数","writeLong"],["单精度浮点数","writeFloat"],["双精度浮点数","writeDouble"]]), "write_type")
      .appendField(" 地址");
  this.appendValueInput("at24cx_write_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数值");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(0);
  this.setTooltip(
    "1.功能:\n"
   +"->AT24CXX存储器 写入数值(字节、整数、长整数、单精度浮点数、双精度浮点数)\n"
   +"2.语法:\n"
   +"->写入字节 - void write(unsigned int address, byte data);\n"
   +"->写入整数 - void writeInt(unsigned int address, unsigned int data);\n"
   +"->写入长整数 - void writeLong(unsigned int address, unsigned long data);\n"
   +"->写入单精度浮点数 - void writeFloat(unsigned int address, float data);\n"
   +"->写入双精度浮点数 - void writeDouble(unsigned int address, double data);\n"
   +"3.参数:\n"
   +"->address:数据将要存放的位置\n"
   /*
   +"常用:\n"
   +"->(AT24C01)address - (0 ~ 127)\n"
   +"->(AT24C02)address - (0 ~ 255)\n"
   +"->(AT24C04)address - (0 ~ 511)\n"
   +"->(AT24C08)address - (0 ~ 1023)\n"
   +"->(AT24C16)address - (0 ~ 2047)\n"
   +"->(AT24C32)address - (0 ~ 4095)\n"
   +"->(AT24C64)address - (0 ~ 8191)\n"
   +"->(AT24C128)address - (0 ~ 16383)\n"
   +"->(AT24C256)address - (0 ~ 32767)\n"
   +"->(AT24C512)address - (0 ~ 65535)\n"
   */
   +"->data:需要存放的数据\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//AT24CXX存储器 写入数组
Blockly.Blocks.make_arduino_at24cx_write_list= {
  init: function() { 
  this.appendValueInput("at24cx_write_address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("AT24Cxx")
      .appendField(new Blockly.FieldTextInput("ic_eeprom"), "at24cx_name")
      .appendField(" 写入")
      .appendField(new Blockly.FieldDropdown([["字节数组","write"],["字符数组","writeChars"]]), "write_type")
      .appendField(" 起始地址");
  this.appendValueInput("at24cx_write_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("数据");
  this.appendValueInput("at24cx_data_length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(0);
  this.setTooltip(
    "1.功能:\n"
   +"->AT24CXX存储器 写入数组(字节数组、字符数组)\n"
   +"2.语法:\n"
   +"->写入字节数值 - void write(unsigned int address, byte *data, int length);\n"
   +"->写入字符数组 - void writeChars(unsigned int address, char *data, int length);\n"
   +"3.参数:\n"
   +"->address:数据将要存放的位置\n"
   /*
   +"常用:\n"
   +"->(AT24C01)address - (0 ~ 127)\n"
   +"->(AT24C02)address - (0 ~ 255)\n"
   +"->(AT24C04)address - (0 ~ 511)\n"
   +"->(AT24C08)address - (0 ~ 1023)\n"
   +"->(AT24C16)address - (0 ~ 2047)\n"
   +"->(AT24C32)address - (0 ~ 4095)\n"
   +"->(AT24C64)address - (0 ~ 8191)\n"
   +"->(AT24C128)address - (0 ~ 16383)\n"
   +"->(AT24C256)address - (0 ~ 32767)\n"
   +"->(AT24C512)address - (0 ~ 65535)\n"
   */
   +"->data:需要存放的数组\n"
   +"->length:数组的长度\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

//AT24CXX存储器 读取数据
Blockly.Blocks.make_arduino_at24cx_read_data= {
  init: function() { 
  this.appendValueInput("at24cx_read_address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("AT24Cxx")
      .appendField(new Blockly.FieldTextInput("ic_eeprom"), "at24cx_name")
      .appendField(" 读取")
      .appendField(new Blockly.FieldDropdown([["字节","read"],["整数","readInt"],["长整数","readLong"],["单精度浮点数","readFloat"],["双精度浮点数","readDouble"]]), "read_type")
      .appendField(" 地址");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(0);
  this.setTooltip(
    "1.功能:\n"
   +"->AT24CXX存储器 读取数值(字节、整数、长整数、单精度浮点数、双精度浮点数)\n"
   +"2.语法:\n"
   +"->读取字节 - byte read(unsigned int address);\n"
   +"->读取整数 - unsigned int readInt(unsigned int address);\n"
   +"->读取长整数 - unsigned long readLong(unsigned int address);\n"
   +"->读取单精度浮点数 - float readFloat(unsigned int address);\n"
   +"->读取双精度浮点数 - double readDouble(unsigned int address);\n"
   +"3.参数:\n"
   +"->address:读取数据的位置\n"
   /*
   +"常用:\n"
   +"->(AT24C01)address - (0 ~ 127)\n"
   +"->(AT24C02)address - (0 ~ 255)\n"
   +"->(AT24C04)address - (0 ~ 511)\n"
   +"->(AT24C08)address - (0 ~ 1023)\n"
   +"->(AT24C16)address - (0 ~ 2047)\n"
   +"->(AT24C32)address - (0 ~ 4095)\n"
   +"->(AT24C64)address - (0 ~ 8191)\n"
   +"->(AT24C128)address - (0 ~ 16383)\n"
   +"->(AT24C256)address - (0 ~ 32767)\n"
   +"->(AT24C512)address - (0 ~ 65535)\n"
   */
   +"->data:需要存放的数据"
    );
  this.setHelpUrl("");
  }
};

//AT24CXX存储器 读取数组
Blockly.Blocks.make_arduino_at24cx_read_list= {
  init: function() { 
  this.appendValueInput("at24cx_read_address")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/芯片_4.png", 25, 25, "*"))
      .appendField("AT24Cxx")
      .appendField(new Blockly.FieldTextInput("ic_eeprom"), "at24cx_name")
      .appendField(" 读取")
      .appendField(new Blockly.FieldDropdown([["字节数组","read"],["字符数组","readChars"]]), "read_type")
      .appendField(" 起始地址");
  this.appendValueInput("at24cx_read_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("保存到数组");
  this.appendValueInput("at24cx_data_length")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("长度");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(0);
  this.setTooltip(
    "1.功能:\n"
   +"->AT24CXX存储器 读取数组(字节数组、字符数组)\n"
   +"2.语法:\n"
   +"->读取字节数值 - void read(unsigned int address, byte *data, int n);\n"
   +"->读取字符数组 - void readChars(unsigned int address, char *data, int n);\n"
   +"3.参数:\n"
   +"->address:读取数据的位置\n"
   /*
   +"常用:\n"
   +"->(AT24C01)address - (0 ~ 127)\n"
   +"->(AT24C02)address - (0 ~ 255)\n"
   +"->(AT24C04)address - (0 ~ 511)\n"
   +"->(AT24C08)address - (0 ~ 1023)\n"
   +"->(AT24C16)address - (0 ~ 2047)\n"
   +"->(AT24C32)address - (0 ~ 4095)\n"
   +"->(AT24C64)address - (0 ~ 8191)\n"
   +"->(AT24C128)address - (0 ~ 16383)\n"
   +"->(AT24C256)address - (0 ~ 32767)\n"
   +"->(AT24C512)address - (0 ~ 65535)\n"
   */
   +"->data:储存数据的数组\n"
   +"->n:数组的长度\n"
   +"4.返回值:无"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bmp180_begin_i2c= {
  init: function() { 
  this.appendValueInput("bmp180_oversampling")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力_1.png", 25, 25, "*"))
      .appendField("初始化BMP180(I2C)")
      .appendField(new Blockly.FieldTextInput("BMP"), "bmp180_name")
      .appendField(" 采样频率设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化BMP180、BMP085大气压强传感器(I2C)\n"
   +"2.语法:\n"
   +"->Adafruit_BMP085();\n"
   +"->boolean begin(uint8_t mode = BMP085_ULTRAHIGHRES);\n"
   +"3.参数:\n"
   +"->mode:\n"
   +"4.返回值:uint8_t型数据(不使用返回值)"
   +"5.I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bmp180_begin_i2c_return_status= {
  init: function() { 
  this.appendValueInput("bmp180_oversampling")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力_1.png", 25, 25, "*"))
      .appendField("初始化BMP180(I2C)")
      .appendField(new Blockly.FieldTextInput("BMP"), "bmp180_name")
      .appendField(" 采样频率设为");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("返回连接状态");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化BMP180|BMP085大气压强传感器(I2C)\n"
   +"返回连接状态，返回数据的类型为boolean\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

//BMP180大气压强传感器(I2C) 采样频率类型
Blockly.Blocks.make_arduino_bmp180_oversampling= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["高","BMP085_ULTRALOWPOWER"],["中","BMP085_STANDARD"],["低","BMP085_HIGHRES"],["很低","BMP085_ULTRAHIGHRES"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bmp180_get_temperature_pressure= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力_1.png", 25, 25, "*"))
      .appendField("BMP180")
      .appendField(new Blockly.FieldTextInput("BMP"), "bmp180_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["温度","Temperature"],["大气压强","Pressure"]]), "bmp180_get_temperature_pressure_data");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("BMP180大气压强传感器获取温度和气压，返回数据的类型为float和int32_t");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bmp180_get_altitude= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力_1.png", 25, 25, "*"))
      .appendField("BMP180")
      .appendField(new Blockly.FieldTextInput("BMP"), "bmp180_name")
      .appendField(" 获取高度");
  this.appendValueInput("bmp180_get_altitude_data")
      .setCheck(null)  
      .appendField("基准值");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("BMP180大气压强传感器获取高度，返回数据的类型为float");
  this.setHelpUrl("");
  }
};

/*
Blockly.Blocks.make_arduino_bmp280_begin_i2c= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力.png", 25, 25, "*"))
      .appendField("初始化BMP280(I2C)")
      .appendField(new Blockly.FieldTextInput("bmp"), "bmp280_name");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化BMP280大气压强传感器(I2C)\n"
   +"SDA - A4\n"
   +"SCL - A5"
    );
  this.setHelpUrl("");
  }
};
*/

Blockly.Blocks.make_arduino_bmp280_begin_i2c= {
  init: function() {
  this.appendValueInput("bmp280_address")
      .setCheck(null)
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力.png", 25, 25, "*"))
      .appendField("初始化BMP280(I2C)")
      .appendField(new Blockly.FieldTextInput("bmp"), "bmp280_name")
      .appendField(" 地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化BMP280大气压强传感器(I2C)\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

/*
Blockly.Blocks.make_arduino_bmp280_begin_i2c_return_status= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力.png", 25, 25, "*"))
      .appendField("初始化BMP280(I2C)")
      .appendField(new Blockly.FieldTextInput("bmp"), "bmp280_name")
      .appendField(" 返回连接状态");
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("初始化BMP280大气压强传感器(I2C)，返回数据的类型为boolean");
  this.setHelpUrl("");
  }
};
*/

Blockly.Blocks.make_arduino_bmp280_begin_i2c_return_status= {
  init: function() { 
  this.appendValueInput("bmp280_address")
      .setCheck(null)
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力.png", 25, 25, "*"))
      .appendField("初始化BMP280(I2C)")
      .appendField(new Blockly.FieldTextInput("bmp"), "bmp280_name")
      .appendField(" 地址");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("返回连接状态");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化BMP280大气压强传感器(I2C)\n返回数据的类型为boolean\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bmp280_begin_spi_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力.png", 25, 25, "*"))
      .appendField("初始化BMP280(SPI)")
      .appendField(new Blockly.FieldTextInput("bmp"), "bmp280_name");
  this.appendValueInput("bmp280_begin_spi_cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" CS#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化BMP280大气压强传感器(SPI)\n"
   +"SPI接线:\n"
   +"①Arduino Uno:\n"
   +"->MOSI - 11\n"
   +"->MISO - 12\n"
   +"->SCK - 13\n"
   +"②Arduino Mega2560:\n"
   +"->MOSI - 51\n"
   +"->MISO - 50\n"
   +"->SCK - 52\n"
   +"③Arduino Leonardo:\n"
   +"->MOSI - ICSP-4\n"
   +"->MISO - ICSP-1\n"
   +"->SCK - ICSP-3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bmp280_begin_spi_1_return_status= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力.png", 25, 25, "*"))
      .appendField("初始化BMP280(SPI)")
      .appendField(new Blockly.FieldTextInput("bmp"), "bmp280_name");
  this.appendValueInput("bmp280_begin_spi_cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" CS#");
  this.appendDummyInput()  
      .appendField(" 返回连接状态");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化BMP280大气压强传感器(SPI)，返回数据的类型为boolean\n"
   +"SPI接线:\n"
   +"①Arduino Uno:\n"
   +"->MOSI - 11\n"
   +"->MISO - 12\n"
   +"->SCK - 13\n"
   +"②Arduino Mega2560:\n"
   +"->MOSI - 51\n"
   +"->MISO - 50\n"
   +"->SCK - 52\n"
   +"③Arduino Leonardo:\n"
   +"->MOSI - ICSP-4\n"
   +"->MISO - ICSP-1\n"
   +"->SCK - ICSP-3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bmp280_begin_spi_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力.png", 25, 25, "*"))
      .appendField("初始化BMP280(SPI)")
      .appendField(new Blockly.FieldTextInput("bmp"), "bmp280_name");
  this.appendValueInput("bmp280_begin_spi_cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" CS#");
  this.appendValueInput("bmp280_begin_spi_mosi")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("MOSI#");
  this.appendValueInput("bmp280_begin_spi_miso")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("MISO#");
  this.appendValueInput("bmp280_begin_spi_sck")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("SCK#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("初始化BMP280大气压强传感器(SPI)");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bmp280_begin_spi_2_return_status= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力.png", 25, 25, "*"))
      .appendField("初始化BMP280(SPI)")
      .appendField(new Blockly.FieldTextInput("bmp"), "bmp280_name");
  this.appendValueInput("bmp280_begin_spi_cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" CS#");
  this.appendValueInput("bmp280_begin_spi_mosi")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("MOSI#");
  this.appendValueInput("bmp280_begin_spi_miso")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("MISO#");
  this.appendValueInput("bmp280_begin_spi_sck")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("SCK#");
  this.appendDummyInput()  
      .appendField(" 返回连接状态");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("初始化BMP280大气压强传感器(SPI)，返回数据的类型为boolean");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bmp280_get_temperature_pressure= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力.png", 25, 25, "*"))
      .appendField("BMP280")
      .appendField(new Blockly.FieldTextInput("bmp"), "bmp280_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["温度","Temperature"],["大气压强","Pressure"]]), "bmp280_get_temperature_pressure_data");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("BMP280大气压强传感器获取温度和气压，返回数据的类型为float");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bmp280_get_altitude= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/大气压力.png", 25, 25, "*"))
      .appendField("BMP280")
      .appendField(new Blockly.FieldTextInput("bmp"), "bmp280_name")
      .appendField(" 获取高度");
  this.appendValueInput("bmp280_get_altitude_data")
      .setCheck(null)  
      .appendField("基准值");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("BMP280大气压强传感器获取高度，返回数据的类型为float");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs230_begin_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_2.png", 25, 25, "*"))
      .appendField("初始化TCS230")
      .appendField(new Blockly.FieldTextInput("color"), "tcs230_name");
  this.appendValueInput("tcs230_s0")
      .setCheck(null)  
      .appendField(" S0");
  this.appendValueInput("tcs230_s1")
      .setCheck(null)  
      .appendField("S1");
  this.appendValueInput("tcs230_s2")
      .setCheck(null)  
      .appendField("S2");
  this.appendValueInput("tcs230_s3")
      .setCheck(null)  
      .appendField("S3");
  this.appendValueInput("tcs230_led")
      .setCheck(null)  
      .appendField("LED");
  this.appendValueInput("tcs230_out")
      .setCheck(null)  
      .appendField("OUT");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("初始化TCS230颜色传感器");
  this.setHelpUrl("");
  }
};

//2019.10.5修改，保留原图形块
Blockly.Blocks.make_arduino_tcs230_new_begin_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_2.png", 25, 25, "*"))
      .appendField("初始化TCS230");
  this.appendValueInput("tcs230_s0")
      .setCheck(null)  
      .appendField("S0");
  this.appendValueInput("tcs230_s1")
      .setCheck(null)  
      .appendField("S1");
  this.appendValueInput("tcs230_s2")
      .setCheck(null)  
      .appendField("S2");
  this.appendValueInput("tcs230_s3")
      .setCheck(null)  
      .appendField("S3");
  this.appendValueInput("tcs230_led")
      .setCheck(null)  
      .appendField("LED");
  this.appendValueInput("tcs230_out")
      .setCheck(null)  
      .appendField("OUT");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("初始化TCS230颜色传感器");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs230_get_color= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_2.png", 25, 25, "*"))
      .appendField("TCS230")
      .appendField(new Blockly.FieldTextInput("color"), "tcs230_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["红色","red"],["绿色","green"],["蓝色","blue"],["白色","white"]]), "tcs230_color");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("TCS230颜色传感器获取R G B值，返回数据的类型为int");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_new_tcs230_get_color= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("TCS230")
      .appendField("获取")
      .appendField(new Blockly.FieldDropdown([["R值","R"],["G值","G"],["B值","B"]]), "tcs230_color");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("TCS230颜色传感器获取R G B值，返回数据的类型为int");
  this.setHelpUrl("");
  }
};

/*
Blockly.Blocks.make_arduino_tcs34725_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("初始化TCS34725(I2C)")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("初始化TCS34725颜色传感器 使用默认值");
  this.setHelpUrl("");
  }
};
*/

Blockly.Blocks.make_arduino_tcs34725_begin= {
  init: function() { 
  this.appendValueInput("tcs34725_address")
      .setCheck(null)
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("初始化TCS34725(I2C)")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化TCS34725颜色传感器 使用默认值\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
   );
  this.setHelpUrl("");
  }
};

/*
Blockly.Blocks.make_arduino_tcs34725_begin_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("初始化TCS34725(I2C)")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name");
  this.appendDummyInput()  
      .appendField("设备唤醒时延时")
      .appendField(new Blockly.FieldDropdown([["2.4ms","TCS34725_INTEGRATIONTIME_2_4MS"],["24ms","TCS34725_INTEGRATIONTIME_24MS"],["50ms","TCS34725_INTEGRATIONTIME_50MS"],["101ms","TCS34725_INTEGRATIONTIME_101MS"],["154ms","TCS34725_INTEGRATIONTIME_154MS"],["700ms","TCS34725_INTEGRATIONTIME_700MS"]]), "tcs34725_enable_delay")
      .appendField("读取数据")
      .appendField(" 光敏感度")
      .appendField(new Blockly.FieldDropdown([["无增益","TCS34725_GAIN_1X"],["4倍增益","TCS34725_GAIN_4X"],["16倍增益","TCS34725_GAIN_16X"],["60倍增益","TCS34725_GAIN_60X"]]), "tcs34725_gain");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("初始化TCS34725颜色传感器");
  this.setHelpUrl("");
  }
};
*/

Blockly.Blocks.make_arduino_tcs34725_begin_1= {
  init: function() { 
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("初始化TCS34725(I2C)")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name");
  this.appendValueInput("tcs34725_address")
      .setCheck(null)
      .appendField("设备唤醒时延时")
      .appendField(new Blockly.FieldDropdown([["2.4ms","TCS34725_INTEGRATIONTIME_2_4MS"],["24ms","TCS34725_INTEGRATIONTIME_24MS"],["50ms","TCS34725_INTEGRATIONTIME_50MS"],["101ms","TCS34725_INTEGRATIONTIME_101MS"],["154ms","TCS34725_INTEGRATIONTIME_154MS"],["700ms","TCS34725_INTEGRATIONTIME_700MS"]]), "tcs34725_enable_delay")
      .appendField("读取数据")
      .appendField(" 光敏感度设为")
      .appendField(new Blockly.FieldDropdown([["1倍增益","TCS34725_GAIN_1X"],["4倍增益","TCS34725_GAIN_4X"],["16倍增益","TCS34725_GAIN_16X"],["60倍增益","TCS34725_GAIN_60X"]]), "tcs34725_gain")
      .appendField(" 地址");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化TCS34725颜色传感器\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

/*
Blockly.Blocks.make_arduino_tcs34725_begin_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("初始化TCS34725(I2C)")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 返回连接状态");
  this.appendDummyInput()  
      .appendField("设备唤醒时延时")
      .appendField(new Blockly.FieldDropdown([["2.4ms","TCS34725_INTEGRATIONTIME_2_4MS"],["24ms","TCS34725_INTEGRATIONTIME_24MS"],["50ms","TCS34725_INTEGRATIONTIME_50MS"],["101ms","TCS34725_INTEGRATIONTIME_101MS"],["154ms","TCS34725_INTEGRATIONTIME_154MS"],["700ms","TCS34725_INTEGRATIONTIME_700MS"]]), "tcs34725_enable_delay")
      .appendField("读取数据")
      .appendField(" 光敏感度")
      .appendField(new Blockly.FieldDropdown([["无增益","TCS34725_GAIN_1X"],["4倍增益","TCS34725_GAIN_4X"],["16倍增益","TCS34725_GAIN_16X"],["60倍增益","TCS34725_GAIN_60X"]]), "tcs34725_gain");
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("初始化TCS34725颜色传感器，返回数据的类型为boolean");
  this.setHelpUrl("");
  }
};
*/

Blockly.Blocks.make_arduino_tcs34725_begin_2= {
  init: function() { 
  this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("初始化TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 返回连接状态");
  this.appendValueInput("tcs34725_address")
      .setCheck(null)
      .appendField("设备唤醒时延时")
      .appendField(new Blockly.FieldDropdown([["2.4ms","TCS34725_INTEGRATIONTIME_2_4MS"],["24ms","TCS34725_INTEGRATIONTIME_24MS"],["50ms","TCS34725_INTEGRATIONTIME_50MS"],["101ms","TCS34725_INTEGRATIONTIME_101MS"],["154ms","TCS34725_INTEGRATIONTIME_154MS"],["700ms","TCS34725_INTEGRATIONTIME_700MS"]]), "tcs34725_enable_delay")
      .appendField("读取数据")
      .appendField(" 光敏感度设为")
      .appendField(new Blockly.FieldDropdown([["1倍增益","TCS34725_GAIN_1X"],["4倍增益","TCS34725_GAIN_4X"],["16倍增益","TCS34725_GAIN_16X"],["60倍增益","TCS34725_GAIN_60X"]]), "tcs34725_gain")
      .appendField(" 地址");
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化TCS34725颜色传感器，返回数据的类型为boolean\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_set_integrationtime= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name");
  this.appendDummyInput()  
      .appendField(" 设置设备唤醒时延时")
      .appendField(new Blockly.FieldDropdown([["2.4ms","TCS34725_INTEGRATIONTIME_2_4MS"],["24ms","TCS34725_INTEGRATIONTIME_24MS"],["50ms","TCS34725_INTEGRATIONTIME_50MS"],["101ms","TCS34725_INTEGRATIONTIME_101MS"],["154ms","TCS34725_INTEGRATIONTIME_154MS"],["700ms","TCS34725_INTEGRATIONTIME_700MS"]]), "tcs34725_enable_delay")
      .appendField("读取数据");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器设置设备唤醒时延时");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_set_gain= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name");
  this.appendDummyInput()  
      .appendField(" 光敏感度设为")
      .appendField(new Blockly.FieldDropdown([["1倍增益","TCS34725_GAIN_1X"],["4倍增益","TCS34725_GAIN_4X"],["16倍增益","TCS34725_GAIN_16X"],["60倍增益","TCS34725_GAIN_60X"]]), "tcs34725_gain");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器设置光敏感度");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_get_rawdata= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 获取(整数)");
  this.appendValueInput("tcs34725_get_r")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" R值保存到变量");
  this.appendValueInput("tcs34725_get_g")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" G值保存到变量");
  this.appendValueInput("tcs34725_get_b")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" B值保存到变量");
  this.appendValueInput("tcs34725_get_c")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" W值保存到变量");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器获取R G B C值，返回数据的类型为float\n"
    +"R - 红色值\n"
    +"G - 绿色值\n"
    +"B - 蓝色值\n"
    +"W - 白色值"
  );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_get_rgb= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 获取(小数)");
  this.appendValueInput("tcs34725_get_r")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" R值保存到变量");
  this.appendValueInput("tcs34725_get_g")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" G值保存到变量");
  this.appendValueInput("tcs34725_get_b")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" B值保存到变量");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器获取R G B值，返回数据的类型为float\n"
    +"R - 红色值\n"
    +"G - 绿色值\n"
    +"B - 蓝色值"
  );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_calculate_colortemperature= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 计算色温");
  this.appendValueInput("tcs34725_input_r")
      .setCheck(null)  
      .appendField(" 输入(整数)R值");
  this.appendValueInput("tcs34725_input_g")
      .setCheck(null)  
      .appendField("G值");
  this.appendValueInput("tcs34725_input_b")
      .setCheck(null)  
      .appendField("B值");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器计算色温\n将原始的R/G/B值转换为颜色温度，单位为开氏度，返回数据的类型为uint16_t\n"
    +"R - 红色值\n"
    +"G - 绿色值\n"
    +"B - 蓝色值"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_calculate_colortemperature_dn40= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 计算色温");
  this.appendValueInput("tcs34725_input_r")
      .setCheck(null)  
      .appendField(" 输入(整数)R值");
  this.appendValueInput("tcs34725_input_g")
      .setCheck(null)  
      .appendField("G值");
  this.appendValueInput("tcs34725_input_b")
      .setCheck(null)  
      .appendField("B值");
  this.appendValueInput("tcs34725_input_c")
      .setCheck(null)  
      .appendField("W值");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "TCS34725颜色传感器计算色温\n"
  +"将原始的R/G/B值转换为颜色温度，单位为开氏度\n"
  +"用来自Taos(现在的AMS)的DN40中描述的算法，返回数据的类型为uint16_t\n"
  +"R - 红色值\n"
  +"G - 绿色值\n"
  +"B - 蓝色值\n"
  +"W - 白色值");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_calculate_lux= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 计算光照度");
  this.appendValueInput("tcs34725_input_r")
      .setCheck(null)  
      .appendField(" 输入(整数)R值");
  this.appendValueInput("tcs34725_input_g")
      .setCheck(null)  
      .appendField("G值");
  this.appendValueInput("tcs34725_input_b")
      .setCheck(null)  
      .appendField("B值");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器计算光照度\n"
    +"返回数据的类型为uint16_t\n"
    +"R - 红色值\n"
    +"G - 绿色值\n"
    +"B - 蓝色值"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_read8= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["R值高八位","TCS34725_RDATAH"],["R值低八位","TCS34725_RDATAL"],["G值高八位","TCS34725_GDATAH"],["G值低八位","TCS34725_GDATAL"],["B值高八位","TCS34725_BDATAH"],["B值低八位","TCS34725_BDATAL"],["W值高八位","TCS34725_CDATAH"],["W值低八位","TCS34725_CDATAL"],["中断下限W值高八位","TCS34725_AILTH"],["中断下限W值低八位","TCS34725_AILTL"],["中断上限W值高八位","TCS34725_AIHTH"],["中断上限W值低八位","TCS34725_AIHTL"],["设备地址","TCS34725_ADDRESS"],["等待计时器状态","TCS34725_ENABLE_WEN"],["ADC状态","TCS34725_ENABLE_AEN"],["内部振荡器状态","TCS34725_ENABLE_PON"]]), "tcs34725_read8_data");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器读取数据，返回数据的类型为uint8_t");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_read16= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["R值","TCS34725_RDATAL"],["G值","TCS34725_GDATAL"],["B值","TCS34725_BDATAL"],["W值","TCS34725_CDATAL"],["中断下限W值","TCS34725_AILTL"],["中断上限W值","TCS34725_AIHTL"]]), "tcs34725_read16_data");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器读取数据，返回数据的类型为uint16_t");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_set_interrupt= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 中断")
      .appendField(new Blockly.FieldDropdown([["开启","true"],["关闭","false"]]), "tcs34725_set_interrupt_data");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器开始或结束中断");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_clear_interrupt= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 清除中断");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器清除中断");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_set_intlimits_time= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" 设置")
      .appendField(new Blockly.FieldDropdown([["每个RGBC循环","TCS34725_PERS_NONE"],["1次RGBC循环(超出W值限制范围)","TCS34725_PERS_1_CYCLE"],["2次RGBC循环(超出W值限制范围)","TCS34725_PERS_2_CYCLE"],["3次RGBC循环(超出W值限制范围)","TCS34725_PERS_3_CYCLE"],["5次RGBC循环(超出W值限制范围)","TCS34725_PERS_5_CYCLE"],["10次RGBC循环(超出W值限制范围)","TCS34725_PERS_10_CYCLE"],["15次RGBC循环(超出W值限制范围)","TCS34725_PERS_15_CYCLE"],["20次RGBC循环(超出W值限制范围)","TCS34725_PERS_20_CYCLE"],["25次RGBC循环(超出W值限制范围)","TCS34725_PERS_25_CYCLE"],["30次RGBC循环(超出W值限制范围)","TCS34725_PERS_30_CYCLE"],["35次RGBC循环(超出W值限制范围)","TCS34725_PERS_35_CYCLE"],["40次RGBC循环(超出W值限制范围)","TCS34725_PERS_40_CYCLE"],["45次RGBC循环(超出W值限制范围)","TCS34725_PERS_45_CYCLE"],["50次RGBC循环(超出W值限制范围)","TCS34725_PERS_50_CYCLE"],["55次RGBC循环(超出W值限制范围)","TCS34725_PERS_55_CYCLE"],["60次RGBC循环(超出W值限制范围)","TCS34725_PERS_60_CYCLE"]]), "tcs34725_set_intlimits_time_data")
      .appendField("产生一次中断");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器设置中断的类型");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_set_intlimits= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name");
  this.appendValueInput("tcs34725_set_low_limit")
      .setCheck(null)  
      .appendField(" 设置中断下限W值为");
  this.appendValueInput("tcs34725_set_high_limit")
      .setCheck(null)  
      .appendField("中断上限W值为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器设置中断上下限的阈值，可设置的范围为(0 ~ 2^16-1) 即 (0 ~ 65535)，当白色值(W值)高于设置的上限或低于设置的下限，将在in口产生中断");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_tcs34725_enable_disable= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/颜色_1.png", 25, 25, "*"))
      .appendField("TCS34725")
      .appendField(new Blockly.FieldTextInput("tcs"), "tcs34725_name")
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["唤醒","enable"],["休眠","disable"]]), "tcs34725_enable_disable_data")
      .appendField("设备");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("TCS34725颜色传感器设置设备的状态");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_aht10_begin= {
  init: function() { 
  this.appendValueInput("aht10_begin_address")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温湿度传感器_3.png", 25, 25, "*"))
      .appendField("初始化AHT10(I2C)")
      .appendField(new Blockly.FieldTextInput("AHT10"), "aht10_name")
      .appendField(" 地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化AHT10湿温度传感器(I2C)\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_aht10_begin_1= {
  init: function() { 
  this.appendValueInput("aht10_begin_address")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温湿度传感器_3.png", 25, 25, "*"))
      .appendField("初始化AHT10(I2C)")
      .appendField(new Blockly.FieldTextInput("AHT10"), "aht10_name")
      .appendField(" 地址");
  this.appendDummyInput()  
      .appendField(" 返回连接状态");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化AHT10湿温度传感器(I2C)，返回数据的类型为boolean\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_aht10_get= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温湿度传感器_3.png", 25, 25, "*"))
      .appendField("AHT10")
      .appendField(new Blockly.FieldTextInput("AHT10"), "aht10_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["湿度","Humidity"],["温度","Temperature"],["露点","DewPoint"]]), "aht10_get_data");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("AHT10湿温度传感器获取数据，返回数据的类型为float");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_aht10_read_status= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温湿度传感器_3.png", 25, 25, "*"))
      .appendField("AHT10")
      .appendField(new Blockly.FieldTextInput("AHT10"), "aht10_name")
      .appendField(" 读取此时状态");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("获取AHT10湿温度传感器状态，返回的数据类型为unsigned char");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_lm75_begin= {
  init: function() { 
  this.appendValueInput("lm75_i2c_A0")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温度_4.png", 25, 25, "*"))
      .appendField("初始化LM75(I2C)")
      .appendField(new Blockly.FieldTextInput("lm75_sensor"), "lm75_name")
      .appendField(" A0");
  this.appendValueInput("lm75_i2c_A1")
      .setCheck(null)  
      .appendField("A1");
  this.appendValueInput("lm75_i2c_A2")
      .setCheck(null)  
      .appendField("A2");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化LM75温度传感器(I2C)，A0、A1、A2为传感器上设置地址的管脚\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_lm75_begin_1= {
  init: function() { 
  this.appendValueInput("lm75_i2c_address")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温度_4.png", 25, 25, "*"))
      .appendField("初始化LM75(I2C)")
      .appendField(new Blockly.FieldTextInput("lm75_sensor"), "lm75_name")
      .appendField(" 地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化LM75温度传感器(I2C)\n可用地址为0x48、0x49、0x4A、0x4B、0x4C、0x4D、0x4E、0x4F\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_lm75_get_temp= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温度_4.png", 25, 25, "*"))
      .appendField("LM75")
      .appendField(new Blockly.FieldTextInput("lm75_sensor"), "lm75_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["温度(℃)","getTemperatureInDegrees"],["温度(℉)","getTemperatureInFahrenheit"]]), "lm75_get_temp_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("LM75温度传感器获取温度\n返回数据的类型为float");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_lm75_get_temp_1= {
  init: function() { 
  this.appendValueInput("lm75_input_temp_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldDropdown([["转摄氏度(℃)","fahrenheitToDegrees"],["转华氏度(℉)","degreesToFahrenheit"]]), "lm75_get_temp_type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("LM75温度传感器转换温度\n输入数据的类型为float\n返回数据的类型为float");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_sht30_begin= {
  init: function() { 
  this.appendValueInput("sht30_begin_address")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温湿度传感器_7.png", 25, 25, "*"))
      .appendField("初始化SHT30(I2C)")
      .appendField("地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化SHT30温湿度传感器(I2C)\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_sht30_get_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温湿度传感器_7.png", 25, 25, "*"))
      .appendField("SHT30 获取")
      .appendField(new Blockly.FieldDropdown([["温度(℃)","0"],["温度(℉)","1"],["湿度","2"]]), "sht30_get_data_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("SHT30温湿度传感器获取温度和湿度，返回数据的类型为float");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_mlx90614_begin= {
  init: function() { 
  this.appendValueInput("mlx90614_address")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/红外测温传感器_4.png", 25, 25, "*"))
      .appendField("初始化MLX90614(I2C)")
      .appendField(new Blockly.FieldTextInput("mlx"), "mlx90614_name")
      .appendField(" 地址");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化MLX90614红外测温传感器(I2C)\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_mlx90614_begin_1= {
  init: function() { 
  this.appendValueInput("mlx90614_address")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/红外测温传感器_4.png", 25, 25, "*"))
      .appendField("初始化MLX90614(I2C)")
      .appendField(new Blockly.FieldTextInput("mlx"), "mlx90614_name")
      .appendField(" 地址");
  this.appendDummyInput()  
      .appendField(" 返回连接状态");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化MLX90614红外测温传感器(I2C)并返回连接状态\n返回数据的类型为boolean\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_mlx90614_get_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/红外测温传感器_4.png", 25, 25, "*"))
      .appendField("MLX90614")
      .appendField(new Blockly.FieldTextInput("mlx"), "mlx90614_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["目标物体温度(℃)","readObjectTempC"],["目标物体温度(℉)","readObjectTempF"],["周围环境温度(℃)","readAmbientTempC"],["周围环境温度(℉)","readAmbientTempF"]]), "mlx90614_data");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("MLX90614红外测温传感器(I2C)获取温度，返回数据的类型为float");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_htu21d_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温湿度传感器_5.png", 25, 25, "*"))
      .appendField("初始化HTU21D(I2C)")
      .appendField(new Blockly.FieldTextInput("HTU"), "htu21d_name");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化HTU21D温湿度传感器(I2C)\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_htu21d_begin_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温湿度传感器_5.png", 25, 25, "*"))
      .appendField("初始化HTU21D(I2C)")
      .appendField(new Blockly.FieldTextInput("HTU"), "htu21d_name")
      .appendField(" 返回连接状态");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化HTU21D温湿度传感器(I2C)并返回连接状态\n返回数据的类型为boolean\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_htu21d_get_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温湿度传感器_5.png", 25, 25, "*"))
      .appendField("HTU21D")
      .appendField(new Blockly.FieldTextInput("HTU"), "htu21d_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["温度","readTemperature"],["湿度","readHumidity"]]), "htu21d_get_data_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("HTU21D温湿度传感器(I2C)获取温度和湿度，返回数据的类型为float");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_max6675_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温度_10.png", 25, 25, "*"))
      .appendField("初始化MAX6675")
      .appendField(new Blockly.FieldTextInput("thermocouple"), "max6675_name");
  this.appendValueInput("max6675_clk")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" CLK");
  this.appendValueInput("max6675_cs")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("CS");
  this.appendValueInput("max6675_so")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("SO");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("初始化MAX6675 K型热电偶温度传感器");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_max6675_get_temperature= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/温度_10.png", 25, 25, "*"))
      .appendField("MAX6675")
      .appendField(new Blockly.FieldTextInput("thermocouple"), "max6675_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["温度(℃)","readCelsius"],["温度(℉)","readFahrenheit"]]), "max6675_get_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("MAX6675 K型热电偶温度传感器获取温度数据，返回数据的类型为double");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bh1750_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/光照_3.png", 25, 25, "*"))
      .appendField("初始化BH1750(I2C)")
      .appendField(new Blockly.FieldTextInput("lightMeter"), "bh1750_name");
  this.appendValueInput("bh1750_address")
      .setCheck(null)  
      .appendField(new Blockly.FieldDropdown([["以1勒克斯分辨率测量,测量时间约120毫秒","CONTINUOUS_HIGH_RES_MODE"],["以0.5勒克斯分辨率测量,测量时间约120毫秒","CONTINUOUS_HIGH_RES_MODE_2"],["以4勒克斯分辨率测量,测量时间约16毫秒","CONTINUOUS_LOW_RES_MODE"],["以1勒克斯分辨率测量,测量时间约120毫秒(测量后休眠)","ONE_TIME_HIGH_RES_MODE"],["以0.5勒克斯分辨率测量,测量时间约120毫秒(测量后休眠)","ONE_TIME_HIGH_RES_MODE_2"],["以4勒克斯分辨率测量,测量时间约16毫秒(测量后休眠)","ONE_TIME_LOW_RES_MODE"]]), "bh1750_mode")
      .appendField(" 地址");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化BH1750光照度传感器(I2C)\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bh1750_begin_return_status= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/光照_3.png", 25, 25, "*"))
      .appendField("初始化BH1750(I2C)")
      .appendField(new Blockly.FieldTextInput("lightMeter"), "bh1750_name")
      .appendField(" 返回连接状态");
  this.appendValueInput("bh1750_address")
      .setCheck(null)  
      .appendField(new Blockly.FieldDropdown([["以1勒克斯分辨率测量,测量时间约120毫秒","CONTINUOUS_HIGH_RES_MODE"],["以0.5勒克斯分辨率测量,测量时间约120毫秒","CONTINUOUS_HIGH_RES_MODE_2"],["以4勒克斯分辨率测量,测量时间约16毫秒","CONTINUOUS_LOW_RES_MODE"],["以1勒克斯分辨率测量,测量时间约120毫秒(测量后休眠)","ONE_TIME_HIGH_RES_MODE"],["以0.5勒克斯分辨率测量,测量时间约120毫秒(测量后休眠)","ONE_TIME_HIGH_RES_MODE_2"],["以4勒克斯分辨率测量,测量时间约16毫秒(测量后休眠)","ONE_TIME_LOW_RES_MODE"]]), "bh1750_mode")
      .appendField(" 地址");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化BH1750光照度传感器(I2C)\n返回数据的类型为boolean\n"
   +"I2C接线:\n"
   +"①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n"
   +"②Arduino Mega2560/Due:SDA - 20，SCL - 21\n"
   +"③Arduino Leonardo:SDA - 2，SCL - 3"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bh1750_set_mtreg= {
  init: function() { 
  this.appendValueInput("bh1750_set_mtreg_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/光照_3.png", 25, 25, "*"))
      .appendField("BH1750")
      .appendField(new Blockly.FieldTextInput("lightMeter"), "bh1750_name")
      .appendField(" 灵敏度设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("设置BH1750光照度传感器获取数据时的灵敏度，灵敏度的取值范围为32~254");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bh1750_set_mtreg_return_status= {
  init: function() { 
  this.appendValueInput("bh1750_set_mtreg_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/光照_3.png", 25, 25, "*"))
      .appendField("BH1750")
      .appendField(new Blockly.FieldTextInput("lightMeter"), "bh1750_name")
      .appendField(" 灵敏度设为");
  this.appendDummyInput()  
      .appendField(" 返回结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("设置BH1750光照度传感器获取数据时的灵敏度，灵敏度的取值范围为32~254,返回数据的类型为boolean");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bh1750_configure= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/光照_3.png", 25, 25, "*"))
      .appendField("BH1750")
      .appendField(new Blockly.FieldTextInput("lightMeter"), "bh1750_name");
  this.appendDummyInput()  
      .appendField("工作模式设为")
      .appendField(new Blockly.FieldDropdown([["以1勒克斯分辨率测量,测量时间约120毫秒","CONTINUOUS_HIGH_RES_MODE"],["以0.5勒克斯分辨率测量,测量时间约120毫秒","CONTINUOUS_HIGH_RES_MODE_2"],["以4勒克斯分辨率测量,测量时间约16毫秒","CONTINUOUS_LOW_RES_MODE"],["以1勒克斯分辨率测量,测量时间约120毫秒(测量后休眠)","ONE_TIME_HIGH_RES_MODE"],["以0.5勒克斯分辨率测量,测量时间约120毫秒(测量后休眠)","ONE_TIME_HIGH_RES_MODE_2"],["以4勒克斯分辨率测量,测量时间约16毫秒(测量后休眠)","ONE_TIME_LOW_RES_MODE"]]), "bh1750_mode");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("设置BH1750光照度传感器的工作模式");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bh1750_configure_return_status= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/光照_3.png", 25, 25, "*"))
      .appendField("BH1750")
      .appendField(new Blockly.FieldTextInput("lightMeter"), "bh1750_name");
  this.appendDummyInput()  
      .appendField("工作模式设为")
      .appendField(new Blockly.FieldDropdown([["以1勒克斯分辨率测量,测量时间约120毫秒","CONTINUOUS_HIGH_RES_MODE"],["以0.5勒克斯分辨率测量,测量时间约120毫秒","CONTINUOUS_HIGH_RES_MODE_2"],["以4勒克斯分辨率测量,测量时间约16毫秒","CONTINUOUS_LOW_RES_MODE"],["以1勒克斯分辨率测量,测量时间约120毫秒(测量后休眠)","ONE_TIME_HIGH_RES_MODE"],["以0.5勒克斯分辨率测量,测量时间约120毫秒(测量后休眠)","ONE_TIME_HIGH_RES_MODE_2"],["以4勒克斯分辨率测量,测量时间约16毫秒(测量后休眠)","ONE_TIME_LOW_RES_MODE"]]), "bh1750_mode")
      .appendField(" 返回结果");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("设置BH1750光照度传感器的工作模式，并返回设置的结果，返回数据的类型为boolean");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_bh1750_read_lightLevel= {
  init: function() { 
  this.appendValueInput("bh1750_read_lightLevel_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/光照_3.png", 25, 25, "*"))
      .appendField("BH1750")
      .appendField(new Blockly.FieldTextInput("lightMeter"), "bh1750_name")
      .appendField(" 获取光照度 使用最大测量时间?");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("BH1750光照传感器获取光照度数据，返回数据的类型为float，其取值范围为0.0 ~ 54612.5,默认使用最大测量时间为 false");
  this.setHelpUrl("");
  }
};

//初始化初始化MAX44009光照度传感器
Blockly.Blocks.make_arduino_max44009_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/光照_4.png", 25, 25, "*"))
      .appendField("初始化MAX44009(I2C)")
      .appendField(new Blockly.FieldTextInput("light"), "max44009_name");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("初始化初始化MAX44009光照度传感器");
  this.setHelpUrl("");
  }
};

//初始化MAX44009光照度传感器,返回连接状态
Blockly.Blocks.make_arduino_max44009_begin_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/光照_4.png", 25, 25, "*"))
      .appendField("初始化MAX44009(I2C)")
      .appendField(new Blockly.FieldTextInput("light"), "max44009_name")
      .appendField(" 返回连接状态");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip(
    "初始化MAX44009光照度传感器，返回连接状态，返回数据的类型为int\n"
   +"返回值:\n"
   +"0 - 成功\n"
   +"1 - 数据溢出\n"
   +"2 - 发送地址时从机接收到NACK\n"
   +"3 - 发送数据时接收到NACK\n"
   +"4 - 其他错误"
    );
  this.setHelpUrl("");
  }
};

//MAX44009光照度传感器 获取光照度
Blockly.Blocks.make_arduino_max44009_get_lux= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/光照_4.png", 25, 25, "*"))
      .appendField("MAX44009")
      .appendField(new Blockly.FieldTextInput("light"), "max44009_name")
      .appendField(" 获取光照度");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("MAX44009光照度传感器 获取光照度，返回数据的类型为float");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_pulsesensor_begin= {
  init: function() { 
  this.appendDummyInput()  
      //.appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/心率传感器_1.png", 25, 25, "*"))
      .appendField("初始化pulsesensor")
      .appendField(new Blockly.FieldTextInput("pulsesensor"), "pulseSensor_name");
  this.appendValueInput("pulseSensor_pin1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("管脚");
  this.appendStatementInput("pulseSensor_data")
      .setCheck(null);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_pulsesensor_blinkonpulse= {
  init: function() { 
  this.appendValueInput("pulsesensor_pin1")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/心率传感器_1.png", 25, 25, "*"))
      .appendField("添加心跳指示灯 管脚");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'make_arduino_pulsesensor_begin') {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到 初始化pulsesensor 图形块下面");
    }
  }
};

Blockly.Blocks.make_arduino_pulsesensor_fadeonpulse= {
  init: function() { 
  this.appendValueInput("pulsesensor_pin1")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/心率传感器_1.png", 25, 25, "*"))
      .appendField("添加心跳指示灯(呼吸) 管脚");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'make_arduino_pulsesensor_begin') {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到 初始化pulsesensor 图形块下面");
    }
  }
};

Blockly.Blocks.make_arduino_pulsesensor_setthreshold= {
  init: function() { 
  this.appendValueInput("pulsesensor_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/心率传感器_1.png", 25, 25, "*"))
      .appendField("阈值设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange: function(e) {
    var surround_parent = this.getSurroundParent();
    if (surround_parent && surround_parent.type == 'make_arduino_pulsesensor_begin') {
      this.setWarningText(null);
    } else {
      this.setWarningText("此块需放到 初始化pulsesensor 图形块下面");
    }
  }
};

Blockly.Blocks.make_arduino_pulsesensor_getlatestsample= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/心率传感器_1.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("pulsesensor"), "pulsesensor_name")
      .appendField(" 获取心跳值(原始数据)");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_pulsesensor_getbeatsperminute= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/心率传感器_1.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("pulsesensor"), "pulsesensor_name")
      .appendField(" 获取心跳数据(次/每分钟)");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_pulsesensor_sawstartofbeat= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/心率传感器_1.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("pulsesensor"), "pulsesensor_name")
      .appendField(" 侦测到心跳？");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_pulsesensor_isinsidebeat= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/心率传感器_1.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("pulsesensor"), "pulsesensor_name")
      .appendField(" 处在一个心跳周期内？");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//初始化步进电机
Blockly.Blocks.make_arduino_stepper_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/电机/电机_2.png", 25, 25, "*"))
      .appendField("初始化步进电机")
      .appendField(new Blockly.FieldTextInput("stepper"), "stepper_name");
  this.appendValueInput("stepper_in1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" IN1#");
  this.appendValueInput("stepper_in2")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("IN2#");
  this.appendValueInput("stepper_in3")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("IN3#");
  this.appendValueInput("stepper_in4")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("IN4#");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("初始化步进电机");
  this.setHelpUrl("");
  }
};

//设置步进电机的模式（先加速后减速模式|匀速模式）
Blockly.Blocks.make_arduino_stepper_begin_mode= {
  init: function() { 
  this.appendDummyInput()  
      //.appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/电机/电机_2.png", 25, 25, "*"))
      .appendField("初始化步进电机为")
      .appendField(new Blockly.FieldDropdown([["先加速后减速模式","mode1"],["匀速模式","mode2"]]), "stepper_begin_mode");
  this.appendStatementInput("stepper_begin_mode_data")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("设置步进电机的模式（先加速后减速模式|匀速模式）");
  this.setHelpUrl("");
  }
};

//
Blockly.Blocks.make_arduino_stepper_set_speed_acceleration= {
  init: function() { 
  this.appendValueInput("set_speed_acceleration_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/电机/电机_2.png", 25, 25, "*"))
      .appendField("步进电机")
      .appendField(new Blockly.FieldTextInput("stepper"), "stepper_name")
      //.appendField(" 设置")
      .appendField(new Blockly.FieldDropdown([["加速度","setAcceleration"],["运行速度","setSpeed"],["最大运行速度","setMaxSpeed"],["当前位置","SetCurrentPosition"],["相对目标位置","move"],["绝对目标位置","moveTo"]]), "set_type")
      .appendField("设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_stepper_setPinsInverted= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/电机/电机_2.png", 25, 25, "*"))
      .appendField("步进电机")
      .appendField(new Blockly.FieldTextInput("stepper"), "stepper_name")
      .appendField(new Blockly.FieldDropdown([["正转(先加速后减速模式)","A_false"],["反转(先加速后减速模式)","A_true"],["正转(匀速模式)","B_false"],["反转(匀速模式)","B_true"]]), "setPinsInverted_mode");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_stepper_get_position_speed= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/电机/电机_2.png", 25, 25, "*"))
      .appendField("步进电机")
      .appendField(new Blockly.FieldTextInput("stepper"), "stepper_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["当前位置","currentPosition"],["目标位置","targetPosition"],["当前速度","speed"],["最大速度","maxSpeed"]]), "get_position_speed_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(100);
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange: function(){
    var dropdown_get_position_speed_type = this.getFieldValue('get_position_speed_type');
    var text_stepper_name = this.getFieldValue('stepper_name');
    if(dropdown_get_position_speed_type == "currentPosition")
      this.setTooltip("获取步进电机" + text_stepper_name + "当前的位置，返回数据的类型为long");
    else if(dropdown_get_position_speed_type == "targetPosition")
      this.setTooltip("获取步进电机" + text_stepper_name + "将要运行到的目标位置，返回数据的类型为long");
    else if(dropdown_get_position_speed_type == "speed")
      this.setTooltip("获取步进电机" + text_stepper_name + "当前速度，返回数据的类型为float");
    else
      this.setTooltip("获取步进电机" + text_stepper_name + "最大速度，返回数据的类型为float");
  }
};

Blockly.Blocks.make_arduino_stepper_runToNewPosition= {
  init: function() { 
  this.appendValueInput("stepper_runToNewPosition_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/电机/电机_2.png", 25, 25, "*"))
      .appendField("步进电机")
      .appendField(new Blockly.FieldTextInput("stepper"), "stepper_name")
      .appendField(" 运动到位置");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_stepper_run= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/电机/电机_2.png", 25, 25, "*"))
      .appendField("步进电机")
      .appendField(new Blockly.FieldTextInput("stepper"), "stepper_name")
      .appendField(" 移动")
      .appendField(new Blockly.FieldDropdown([["(先加速后减速模式)","run"],["(匀速模式)","runSpeed"]]), "run_mode");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//初始化DFPlayer Mini
Blockly.Blocks.make_arduino_dfplayer_mini_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("初始化DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name");
  this.appendValueInput("dfplayer_pin")
      .setCheck(null)  
      .appendField(" 使用串口");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("初始化DFPlayer Mini");
  this.setHelpUrl("");
  }
};

//定义DFPlayer Mini 所使用的串口类型
Blockly.Blocks.make_arduino_dfplayer_mini_pin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["Serial","Serial"],["SoftwareSerial","mySerial"],["SoftwareSerial1","mySerial1"],["SoftwareSerial2","mySerial2"],["SoftwareSerial3","mySerial3"]]), "pin_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(65);
  this.setTooltip("定义DFPlayer Mini 所使用的串口类型");
  this.setHelpUrl("");
  }
};

//DFPlayer Mini 设置串口通信的超时时间
Blockly.Blocks.make_arduino_dfplayer_mini_setTimeOut= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name");
  this.appendValueInput("timeout_data")
      .setCheck(null)  
      .appendField(" 串口通信超时时间设为");
  this.appendDummyInput()  
      .appendField("毫秒");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("DFPlayer Mini 设置串口通信的超时时间");
  this.setHelpUrl("");
  }
};

//DFPlayer Mini 设置音量
Blockly.Blocks.make_arduino_dfplayer_mini_volume= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name");
  this.appendValueInput("volume_data")
      .setCheck(null)  
      .appendField(" 音量设为");
  this.appendDummyInput()
      .appendField("级");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("DFPlayer Mini 设置音量，范围为0~30");
  this.setHelpUrl("");
  }
};

//DFPlayer Mini 音量+|-
Blockly.Blocks.make_arduino_dfplayer_mini_volume_up_down= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name")
      .appendField(" 音量")
      .appendField(new Blockly.FieldDropdown([["加","volumeUp"],["减","volumeDown"]]), "volume_type");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("DFPlayer Mini 音量+|-");
  this.setHelpUrl("");
  }
};

//DFPlayer Mini 设置音效
Blockly.Blocks.make_arduino_dfplayer_mini_EQ= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name");
  this.appendValueInput("eq_data")
      .setCheck(null)  
      .appendField(" 音效设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("DFPlayer Mini 设置音效");
  this.setHelpUrl("");
  }
};

//DFPlayer Mini 定义音效类型
Blockly.Blocks.make_arduino_dfplayer_mini_EQ_type= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["自然","DFPLAYER_EQ_NORMAL"],["流行","DFPLAYER_EQ_POP"],["摇滚","DFPLAYER_EQ_ROCK"],["古典","DFPLAYER_EQ_CLASSIC"],["爵士","DFPLAYER_EQ_JAZZ"],["重低音","DFPLAYER_EQ_BASS"]]), "eq_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(100);
  this.setTooltip(
    "DFPlayer Mini 定义音效类型"
    +"\n0 - DFPLAYER_EQ_NORMAL - 自然"
    +"\n1 - DFPLAYER_EQ_POP - 流行"
    +"\n2 - DFPLAYER_EQ_ROCK - 摇滚"
    +"\n3 - DFPLAYER_EQ_JAZZ - 爵士"
    +"\n4 - DFPLAYER_EQ_CLASSIC - 古典"
    +"\n5 - DFPLAYER_EQ_BASS - 重低音"
    );
  this.setHelpUrl("");
  }
};

//DFPlayer Mini 指定播放设备
Blockly.Blocks.make_arduino_dfplayer_mini_outputDevice= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name");
  this.appendValueInput("outputdevice_data")
      .setCheck(null)  
      .appendField(" 设置播放设备为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("DFPlayer Mini 指定播放设备");
  this.setHelpUrl("");
  }
};

//DFPlayer Mini 定义播放设备类型
Blockly.Blocks.make_arduino_dfplayer_mini_outputDevice_type= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["SD卡","DFPLAYER_DEVICE_SD"],["U盘","DFPLAYER_DEVICE_U_DISK"],["AUX","DFPLAYER_DEVICE_AUX"],["SLEEP","DFPLAYER_DEVICE_SLEEP"],["FLASH","DFPLAYER_DEVICE_FLASH"]]), "outputdevice_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(100);
  this.setTooltip(
    "DFPlayer Mini 定义播放设备类型"
    +"\n1 - DFPLAYER_DEVICE_U_DISK - U盘"
    +"\n2 - DFPLAYER_DEVICE_SD - SD卡"
    +"\n3 - DFPLAYER_DEVICE_AUX - AUX"
    +"\n4 - DFPLAYER_DEVICE_SLEEP - SLEEP"
    +"\n5 - DFPLAYER_DEVICE_FLASH - FLASH"
    );
  this.setHelpUrl("");
  }
};

//DFPlayer Mini 设置-1
Blockly.Blocks.make_arduino_dfplayer_set_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name")
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["播放上一曲","previous"],["播放下一曲","next"],["播放","start"],["暂停","pause"],["停止插播曲目","stopAdvertise"],["循环播放开始","enableLoop"],["循环播放停止","disableLoop"],["循环播放所有曲目","enableLoopAll"],["停止循环播放曲目","disableLoopAll"],["随机播放所有曲目","randomAll"],["开启音频输出","enableDAC"],["关闭音频输出","disableDAC"],["进入睡眠","sleep"],["复位","reset"]]), "set_data");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("DFPlayer Mini 多种操作");
  this.setHelpUrl("");
  }
};

//DFPlayer Mini 播放和循环指定曲目
Blockly.Blocks.make_arduino_dfplayer_play_loop= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name");
  this.appendValueInput("play_data")
      .setCheck(null)  
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["播放","play"],["循环","loop"],["插播","advertise"],["播放MP3文件夹下","playMp3Folder"]]), "play_type")
      .appendField("曲目");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("DFPlayer Mini 播放、循环、插播指定曲目");
  this.setHelpUrl("");
  },
  onchange: function(){
    var dropdown_play_type = this.getFieldValue('play_type');
    if(dropdown_play_type == 'advertise')
      this.setTooltip(
        "DFPlayer Mini 插播指定曲目，文件名(0~65535)"
        +"\n例如：myDFPlayer.advertise(3);"
        +"\n指插播曲目的路径为 SD:/ADVERT/0003.mp3"
        );
    else if(dropdown_play_type == 'playMp3Folder')
      this.setTooltip(
        "DFPlayer Mini 播放MP3文件夹下指定曲目，文件名(0~65535)"
        +"\n例如：myDFPlayer.playMp3Folder(4);"
        +"\n指播放曲目的路径为 SD:/MP3/0004.mp3"
        );
    else
      this.setTooltip("DFPlayer Mini 播放、循环、插播指定曲目");
  }
};

//DFPlayer Mini 播放指定文件夹下的曲目
Blockly.Blocks.make_arduino_dfplayer_playFolder= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name");
  this.appendValueInput("fold_data")
      .setCheck(null)  
      .appendField(" 播放")
      .appendField(new Blockly.FieldDropdown([["文件夹","playFolder"],["大文件夹","playLargeFolder"]]), "fold_type");
  this.appendValueInput("play_data")
      .setCheck(null)  
      .appendField("下曲目");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip("DFPlayer Mini 播放指定文件夹下的曲目");
  this.setHelpUrl("");
  },
  onchange: function(){
    var dropdown_fold_type = this.getFieldValue('fold_type');
    if(dropdown_fold_type == 'playFolder')
      this.setTooltip(
        "DFPlayer Mini 播放指定文件夹下的曲目，文件夹名(1~99)，文件名(1~255)"
        +"\n例如：myDFPlayer.playFolder(15, 4);"
        +"\n指播放曲目位置为 SD:/15/004.mp3");
    else
      this.setTooltip(
        "DFPlayer Mini 播放指定大文件夹下的曲目，文件夹名(1~10)，文件名(1~1000)"
        +"\n例如：myDFPlayer.playLargeFolder(2, 999);"
        +"\n指播放曲目位置为 SD:/02/999.mp3");
  }
};

//DFPlayer Mini 循环播放指定文件夹下的曲目
Blockly.Blocks.make_arduino_dfplayer_loopFolder= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name");
  this.appendValueInput("fold_data")
      .setCheck(null)  
      .appendField(" 循环播放文件夹");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(100);
  this.setTooltip(
    "DFPlayer Mini 循环播放指定文件夹下的曲目"
    +"\n例如：myDFPlayer.loopFolder(5);"
    +"\n指循环播放SD:/05文件夹下的所有曲目");
  this.setHelpUrl("");
  }
};

//DFPlayer Mini 获取当前信息
Blockly.Blocks.make_arduino_dfplayer_read_now= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name");
  this.appendDummyInput()  
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["当前状态","readState"],["当前音量","readVolume"],["当前音效","readEQ"]]), "read_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(100);
  this.setTooltip("DFPlayer Mini 获取当前状态、当前音量、当前音效，返回数据的类型为int");
  this.setHelpUrl("");
  }
};

//DFPlayer Mini 获取U盘|SD卡|FLASH的总文件数
Blockly.Blocks.make_arduino_dfplayer_readFileCounts= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name");
  this.appendValueInput("device_type")
      .setCheck(null)
      .appendField(" 获取");
  this.appendDummyInput()
      .appendField("的")
      .appendField(new Blockly.FieldDropdown([["总文件数","readFileCounts"],["当前曲目","readCurrentFileNumber"]]), "play_data");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(100);
  this.setTooltip("DFPlayer Mini 获取U盘、SD卡、FLASH的总文件数或当前曲目，返回数据的类型为int");
  this.setHelpUrl("");
  }
};

//DFPlayer Mini 获取指定文件夹下的文件数
Blockly.Blocks.make_arduino_dfplayer_readFileCountsInFolder= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name");
  this.appendValueInput("folder_data")
      .setCheck(null)  
      .appendField(" 获取文件夹");
  this.appendDummyInput()  
      .appendField("的文件数");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(100);
  this.setTooltip("DFPlayer Mini 获取指定文件夹下的文件数，返回数据的类型为int");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.make_arduino_dfplayer_available= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/音乐/音乐_4.png", 25, 25, "*"))
      .appendField("DFPlayer Mini")
      .appendField(new Blockly.FieldTextInput("myDFPlayer"), "dfplayer_name");
  this.appendDummyInput()  
      .appendField(".")
      .appendField(new Blockly.FieldDropdown([["available","available"],["readType","readType"],["read","read"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(100);
  this.setTooltip("myDFPlayer.available()，返回数据的类型为boolean");
  this.setHelpUrl("");
  },
  onchange: function(){
    var dropdown_type = this.getFieldValue('type');
    if(dropdown_type == 'available')
      this.setTooltip("myDFPlayer.available()，返回数据的类型为boolean");
    else if(dropdown_type == 'readType')
      this.setTooltip(
          "myDFPlayer.readType()，返回数据的类型为uint8_t"
      +"\n返回数据解析："
      +"\n0 - TimeOut"
      +"\n1 - WrongStack"
      +"\n2 - DFPlayerCardInserted"
      +"\n3 - DFPlayerCardRemoved"
      +"\n4 - DFPlayerCardOnline"
      +"\n5 - DFPlayerUSBInserted"
      +"\n6 - DFPlayerUSBRemoved"
      +"\n7 - DFPlayerPlayFinished"
      +"\n8 - DFPlayerError"
        );
    else
      this.setTooltip(
          "myDFPlayer.read()，返回数据的类型为uint16_t"
      +"\n返回数据解析："
      +"\n1 - Busy"
      +"\n2 - Sleeping"
      +"\n3 - SerialWrongStack"
      +"\n4 - CheckSumNotMatch"
      +"\n5 - FileIndexOut"
      +"\n6 - FileMismatch"
      +"\n7 - Advertise"
        );
  }
};

Blockly.Blocks.make_reverseCipher= {
  init: function() { 
  this.appendValueInput("Cipher_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/加密/加密_5.png", 25, 25, "*"))
      .appendField("使用反转加密法")
      .appendField(new Blockly.FieldDropdown([["加密","true"],["解密","false"]]), "Cipher_type")
      .appendField(" 文本");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip("使用反转加密法加密文本\n反转加密法返回数据的类型为String");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.make_caesarCipher= {
  init: function() { 
  this.appendValueInput("Cipher_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/加密/加密_5.png", 25, 25, "*"))
      .appendField("使用凯撒加密法")
      .appendField(new Blockly.FieldDropdown([["加密","true"],["解密","false"]]), "Cipher_type")
      .appendField(" 文本");
  this.appendValueInput("Cipher_key")
      .setCheck(null)  
      .appendField(" 密匙");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip("使用凯撒加密法加密文本,凯撒加密法的密匙范围是0~25的整数\n凯撒加密法返回数据的类型为String");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_transpositionCipher= {
  init: function() { 
  this.appendValueInput("Cipher_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/加密/加密_5.png", 25, 25, "*"))
      .appendField("使用换位加密法")
      .appendField(new Blockly.FieldDropdown([["加密","true"],["解密","false"]]), "Cipher_type")
      .appendField(" 文本");
  this.appendValueInput("Cipher_key")
      .setCheck(null)  
      .appendField(" 密匙");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip("使用换位加密法加密文本,为了使全部消息都可被加密,建议密匙的大小要小于加密信息长度的一半\n换位加密法返回数据的类型为String");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_multiplierCipher= {
  init: function() { 
  this.appendValueInput("Cipher_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/加密/加密_5.png", 25, 25, "*"))
      .appendField("使用乘数加密法")
      .appendField(new Blockly.FieldDropdown([["加密","true"],["解密","false"]]), "Cipher_type")
      .appendField(" 文本");
  this.appendValueInput("Cipher_key")
      .setCheck(null)  
      .appendField(" 密匙");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip("使用乘数加密法加密文本,要求密匙数字要与符号集的大小互为质数,在此程序中,符号集的长度为26\n乘数加密法返回数据的类型为String");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_affineCipher= {
  init: function() { 
  this.appendValueInput("Cipher_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/加密/加密_5.png", 25, 25, "*"))
      .appendField("使用仿射加密法")
      .appendField(new Blockly.FieldDropdown([["加密","true"],["解密","false"]]), "Cipher_type")
      .appendField(" 文本");
  this.appendValueInput("Cipher_key1")
      .setCheck(null)  
      .appendField(" 密匙A");
  this.appendValueInput("Cipher_key2")
      .setCheck(null)  
      .appendField(" 密匙B");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip("使用仿射加密法加密文本,要求密匙A数字要与符号集的大小互为质数,在此程序中,符号集的长度为26\n仿射加密法返回数据的类型为String");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_simpleSubCipher= {
  init: function() { 
  this.appendValueInput("Cipher_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/加密/加密_5.png", 25, 25, "*"))
      .appendField("使用简单替代加密法")
      .appendField(new Blockly.FieldDropdown([["加密","true"],["解密","false"]]), "Cipher_type")
      .appendField(" 文本");
  this.appendValueInput("Cipher_key")
      .setCheck(null)  
      .appendField(" 密匙");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip("使用简单替代加密法加密文本\n简单替代加密法返回数据的类型为String");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_simpleSubGetkey= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/加密/加密_5.png", 25, 25, "*"))
      .appendField("获取解密密匙(简单替代加密法)");
  this.appendValueInput("Cipher_key")
      .setCheck(null)  
      .appendField("加密密匙");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip("此块用于简单替代加密法中获取与加密密匙对应的解密密匙");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_simpleSubRandomkey= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/加密/加密_5.png", 25, 25, "*"))
      .appendField("获取随机密匙(简单替代加密法)");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip("此块用于简单替代加密法中获取一个随机的加密密匙");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_vigenereCipher= {
  init: function() { 
  this.appendValueInput("Cipher_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/加密/加密_5.png", 25, 25, "*"))
      .appendField("使用维吉尼亚加密法")
      .appendField(new Blockly.FieldDropdown([["加密","true"],["解密","false"]]), "Cipher_type")
      .appendField(" 文本");
  this.appendValueInput("Cipher_key")
      .setCheck(null)  
      .appendField(" 密匙");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip("使用维吉尼亚加密法加密文本\n维吉尼亚加密法返回数据的类型为String");
  this.setHelpUrl("");
  }
};

//获取某个版本对应二维码存储所需的字节数
Blockly.Blocks.make_arduino_qrcode_getBufferSize= {
  init: function() { 
  this.appendValueInput("qrcode_version")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/二维码_1.png", 25, 25, "*"))
      .appendField("获取二维码存储所需字节数 使用版本");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip("获取某个版本对应二维码存储所需的字节数，返回数据的类型为uint16_t，版本(1~40)");
  this.setHelpUrl("");
  }
};

//使用某个文本，通过设置二维码版本、容错率来生成二维码
Blockly.Blocks.make_arduino_qrcode_initText= {
  init: function() { 
  this.appendValueInput("qrcode_text")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/二维码_1.png", 25, 25, "*"))
      .appendField("使用文本");
  this.appendValueInput("qrcode_version")
      .setCheck(null)  
      .appendField("版本");
  this.appendValueInput("qrcode_ecc")
      .setCheck(null)  
      .appendField("容错率");
  this.appendValueInput("qrcode_data")
      .setCheck(null)  
      .appendField("生成二维码 保存数据到数组");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(210);
  this.setTooltip(
    "使用某个文本，通过设置二维码版本、容错率来生成二维码，版本(1~40)，容错率(0~3)\n"
    +"版本3---二维码尺寸29x29"
    );
  this.setHelpUrl("");
  },
  onchange: function(){
    var value_qrcode_version = Blockly.Arduino.valueToCode(this, 'qrcode_version', Blockly.Arduino.ORDER_ATOMIC);
    var size = "";
    if(Number(value_qrcode_version) != NaN)
    {
      size = (value_qrcode_version-0)*4 + 17;
      this.setTooltip(
        "使用某个文本，通过设置二维码版本、容错率来生成二维码，版本(1~40)，容错率(0~3)\n"
        +"版本"+value_qrcode_version+"---"+"二维码尺寸"+size+"x"+size
        );
    }
  }
};

//获取二维码的尺寸
Blockly.Blocks.make_arduino_qrcode_size= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/二维码_1.png", 25, 25, "*"))
      .appendField("获取二维码的")
      .appendField(new Blockly.FieldDropdown([["尺寸","size"],["版本","version"],["容错率","ecc"],["模式","mode"]]), "data");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip("获取二维码的尺寸、版本、容错率、模式，返回数据的类型为uint8_t");
  this.setHelpUrl("");
  }
};

//获取二维码上某个坐标点处的方块值
Blockly.Blocks.make_arduino_qrcode_getModule= {
  init: function() { 
  this.appendValueInput("x_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/二维码_1.png", 25, 25, "*"))
      .appendField("获取二维码 X");
  this.appendValueInput("y_data")
      .setCheck(null)  
      .appendField("Y");
  this.appendDummyInput()  
      .appendField("处方块值");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip(
    "获取二维码上某个坐标点处的方块值，返回数据的类型为boolean"
    +"\n此坐标系以二维码左上角为原点，向右为x正方向，向下为y正方向"
    +"\n当某个坐标点处为白色方块，则返回false,反之返回true");
  this.setHelpUrl("");
  }
};

//初始化PID算法
Blockly.Blocks.make_arduino_pid_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/PID/PID_1.png", 25, 25, "*"))
      .appendField("初始化PID")
      .appendField(new Blockly.FieldTextInput("myPID"), "pid_name");
  this.appendValueInput("pid_input")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 输入值");
  this.appendValueInput("pid_output")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("输出值");
  this.appendValueInput("pid_setpoint")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("目标值");
  this.appendValueInput("pid_kp")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Kp");
  this.appendValueInput("pid_ki")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Ki");
  this.appendValueInput("pid_kd")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Kd");
  this.appendValueInput("pid_direction")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("控制方向");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(210);
  this.setTooltip(
     "初始化PID算法\n"
    +"①输入值(double)---待控制的量\n"
    +"②输出值(double)---经过PID控制系统的输出量\n"
    +"③目标值(double)---希望达到的数值\n"
    +"④Kp、Ki、Kd(double)---PID控制的比例、积分、微分系数\n"
    +"⑤控制方向---DIRECT或REVERSE\n->指的是当输入与目标值出现偏差时，向哪个方向控制，\n"
    +"->当设置为REVERSE时，会在初始化时将Kp、Ki、Kd变化为原来的负值"
    );
  this.setHelpUrl("");
  }
};

//初始化PID算法-1
Blockly.Blocks.make_arduino_pid_begin_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/PID/PID_1.png", 25, 25, "*"))
      .appendField("初始化PID")
      .appendField(new Blockly.FieldTextInput("myPID"), "pid_name");
  this.appendValueInput("pid_input")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 输入值");
  this.appendValueInput("pid_output")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("输出值");
  this.appendValueInput("pid_setpoint")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("目标值");
  this.appendValueInput("pid_kp")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Kp");
  this.appendValueInput("pid_ki")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Ki");
  this.appendValueInput("pid_kd")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Kd");
  this.appendValueInput("pid_direction")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("控制方向");
  this.appendValueInput("pid_pon")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("工作模式");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(210);
  this.setTooltip(
     "初始化PID算法\n"
    +"①输入值(double)---待控制的量\n"
    +"②输出值(double)---经过PID控制系统的输出量\n"
    +"③目标值(double)---希望达到的数值\n"
    +"④Kp、Ki、Kd(double)---PID控制的比例、积分、微分系数\n"
    +"⑤控制方向---DIRECT或REVERSE\n->指的是当输入与目标值出现偏差时，向哪个方向控制，\n"
    +"->当设置为REVERSE时，会在初始化时将Kp、Ki、Kd变化为原来的负值\n"
    +"⑥工作模式---P_ON_E或P_ON_M\n"
    +"->传统PID控制一定会出现超调值，P_ON_M可以稍微缓解这一现象，\n"
    +"->但是会牺牲一些上升时间，默认(P_ON_E)"
    );
  this.setHelpUrl("");
  }
};

//设置PID方向
Blockly.Blocks.make_arduino_pid_direction= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["正向","DIRECT"],["反向","REVERSE"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip(
    "正向---0---DIRECT\n"
   +"反向---1---REVERSE"
    );
  this.setHelpUrl("");
  }
};

//指定PID算法的计算过程是自动还是手动
Blockly.Blocks.make_arduino_pid_SetMode= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/PID/PID_1.png", 25, 25, "*"))
      .appendField("PID")
      .appendField(new Blockly.FieldTextInput("myPID"), "pid_name");
  this.appendValueInput("pid_mode")
      .setCheck(null)  
      .appendField(" 计算功能");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(210);
  this.setTooltip(
     "指定PID算法的运行计算过程是自动(AUTOMATIC)还是手动(MANUAL)\n"
    +"手动就是关闭PID算法的计算功能\n"
    +"调AUTOMATIC模式才会初始化PID算法，进行输出"
    );
  this.setHelpUrl("");
  }
};

//自动|手动
Blockly.Blocks.make_arduino_pid_Mode= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["开启","AUTOMATIC"],["关闭","MANUAL"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip(
    "开启---1---AUTOMATIC\n"
   +"关闭---0---MANUAL"
    );
  this.setHelpUrl("");
  }
};

//PID算法 运行计算过程
Blockly.Blocks.make_arduino_pid_Compute= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/PID/PID_1.png", 25, 25, "*"))
      .appendField("PID")
      .appendField(new Blockly.FieldTextInput("myPID"), "pid_name")
      .appendField(" 计算");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(210);
  this.setTooltip(
     "包含PID的控制算法，应该在loop()函数中反复调用\n"
    +"但是具体的输出和采样时间有关，否则很可能会出现什么都不做，输出为0的情况"
    );
  this.setHelpUrl("");
  }
};

//PID算法 运行计算过程
Blockly.Blocks.make_arduino_pid_Compute_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/PID/PID_1.png", 25, 25, "*"))
      .appendField("PID")
      .appendField(new Blockly.FieldTextInput("myPID"), "pid_name")
      .appendField(" 计算 返回结果");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip(
     "包含PID的控制算法，应该在loop()函数中反复调用\n"
    +"但是具体的输出和采样时间有关，否则很可能会出现什么都不做，输出为0的情况\n"
    +"返回值:\n"
    +"->1 - 输出是经过计算的输出\n"
    +"->0 - 啥也没做，不输出或输出为0"
    );
  this.setHelpUrl("");
  }
};

//PID算法 设置输出的上下限
Blockly.Blocks.make_arduino_pid_SetOutputLimits= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/PID/PID_1.png", 25, 25, "*"))
      .appendField(new Blockly.FieldTextInput("myPID"), "pid_name");
  this.appendValueInput("min")
      .setCheck(null)  
      .appendField(" 设置输出范围[");
  this.appendValueInput("max")
      .setCheck(null)  
      .appendField(",");
  this.appendDummyInput()
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(210);
  this.setTooltip(
     "调用此函数时，将会使得Output输出范围钳制在一定范围之内\n"
    +"若不进行设置，则默认以Arduino的PWM输出模式(0~255)进行输出\n"
    +"最小值和最大值都是double类型"
    );
  this.setHelpUrl("");
  }
};

//PID算法 调整参数
Blockly.Blocks.make_arduino_pid_SetTunings= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/PID/PID_1.png", 25, 25, "*"))
      .appendField("PID")
      .appendField(new Blockly.FieldTextInput("myPID"), "pid_name")
      .appendField(" 调整参数");
  this.appendValueInput("pid_kp")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Kp");
  this.appendValueInput("pid_ki")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Ki");
  this.appendValueInput("pid_kd")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Kd");
  this.appendValueInput("pid_pon")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("工作模式");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(210);
  this.setTooltip(
    "PID函数中已经对其进行初始化，但是在某些情况下，\n"
   +"可能会需要随时调整比例积分微分系数或工作模式(P_ON_E/P_ON_M)，\n"
   +"此时则可调用此函数进行设置"
    );
  this.setHelpUrl("");
  }
};

//PID算法 工作模式
Blockly.Blocks.make_arduino_pid_pon= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["P_ON_E","P_ON_E"],["P_ON_M","P_ON_M"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip(
     "1---P_ON_E\n"
    +"0---P_ON_M"
    );
  this.setHelpUrl("");
  }
};

//PID算法 调整参数
Blockly.Blocks.make_arduino_pid_SetTunings_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/PID/PID_1.png", 25, 25, "*"))
      .appendField("PID")
      .appendField(new Blockly.FieldTextInput("myPID"), "pid_name")
      .appendField(" 调整参数");
  this.appendValueInput("pid_kp")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Kp");
  this.appendValueInput("pid_ki")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Ki");
  this.appendValueInput("pid_kd")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField("Kd");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(210);
  this.setTooltip(
    "PID函数中已经对其进行初始化，但是在某些情况下，\n"
   +"可能会需要随时调整比例积分微分系数，\n"
   +"此时则可调用此函数进行设置"
    );
  this.setHelpUrl("");
  }
};

//PID算法 调整控制方向
Blockly.Blocks.make_arduino_pid_SetControllerDirection= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/PID/PID_1.png", 25, 25, "*"))
      .appendField("PID")
      .appendField(new Blockly.FieldTextInput("myPID"), "pid_name");
  this.appendValueInput("pid_direction")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 控制方向设为");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(210);
  this.setTooltip(
    "如果输入值高于设定值，输入是否增加或减少？\n"
   +"结合现实的情况，PID的控制可能有不同的选择\n"
   +"用一辆小车，输出应该减小，以减速\n"
   +"对于冰箱来说，情况恰恰相反，需要增加输出(冷却)以降低温度\n"
   +"此函数指定PID连接到哪种类型的进程，此信息也在PID构建时指定\n"
   +"由于该过程不太可能从正向转到反向，所以任何人都不会真正使用此功能"
    );
  this.setHelpUrl("");
  }
};

//PID算法 调整采样时间
Blockly.Blocks.make_arduino_pid_SetSampleTime= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/PID/PID_1.png", 25, 25, "*"))
      .appendField("PID")
      .appendField(new Blockly.FieldTextInput("myPID"), "pid_name");
  this.appendValueInput("pid_time")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(" 采样周期设为");
  this.appendDummyInput()
      .appendField("毫秒");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(210);
  this.setTooltip(
    "此函数用以控制PID算法的采样时间，默认采样时间为200ms\n"
   +"输入的参数类型为int类型的毫秒数\n"
   +"----------------------------------------------------------------------------------\n"
   +"常见被控参数的采样周期:\n"
   +"被控参数~~采样周期~~备注\n"
   +"流量~~~~~~1~5s~~~~~优先选1~2s\n"
   +"压力~~~~~~3~10s~~~~优先选6~8s\n"
   +"液位~~~~~~6~8s\n"
   +"温度~~~~~~15~20s\n"
   +"直流电机~~100ms"
    );
  this.setHelpUrl("");
  }
};

//PID算法 获取Kp、Ki、Kd、控制方向、工作方向
Blockly.Blocks.make_arduino_pid_get= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/Arduino/阿里巴巴矢量图标库/PID/PID_1.png", 25, 25, "*"))
      .appendField("PID")
      .appendField(new Blockly.FieldTextInput("myPID"), "pid_name")
      .appendField(" 获取")
      .appendField(new Blockly.FieldDropdown([["Kp","GetKp"],["Ki","GetKi"],["Kd","GetKd"],["控制方向","GetMode"],["工作模式","GetDirection"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(210);
  this.setTooltip(
    "调用此函数来获取当前设定的Kp、Ki、Kd、控制方向、工作模式"
    );
  this.setHelpUrl("");
  },
  onchange: function(){
    var dropdown_type = this.getFieldValue('type');
    if(dropdown_type == 'GetMode' || dropdown_type == 'GetDirection')
      this.setTooltip("PID算法 获取Kp、Ki、Kd、控制方向、工作模式，返回数据的类型为int");
    else
      this.setTooltip("PID算法 获取Kp、Ki、Kd、控制方向、工作模式，返回数据的类型为double");
  }
};

Blockly.Blocks.make_tool= {
  init: function() { 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)  
      .appendField("简易计算器");
  this.appendValueInput("make_tool_data")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("执行");
  this.appendDummyInput('EMPTY')  
      .appendField("计算结果：")
      .appendField(new Blockly.FieldTextInput(""), "make_tool_result");
      //.appendField("0.00");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setColour("#ff6666");
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange: function(){
    this.removeInput('EMPTY');
    var statements_make_tool_data = Blockly.Arduino.valueToCode(this, 'make_tool_data');
    var input = this.appendDummyInput('EMPTY');
    input.setAlign(Blockly.ALIGN_RIGHT);
    //input.appendField("计算结果：" + statements_make_tool_data);
    statements_make_tool_data = statements_make_tool_data.replace(/(^\s*)|(\s*$)/g, "");
    input.appendField("计算结果：")
    input.appendField(new Blockly.FieldTextInput(statements_make_tool_data), "make_tool_result");
    //this.setFieldValue(Blockly.Arduino.make_tool_calculate_result_data,"make_tool_result");
  }
};

Blockly.Blocks.make_tool_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("过程:")
      .appendField(new Blockly.FieldTextArea("0+0"), "make_tool_1_data");
  this.setNextStatement(true, null);
  this.setColour("#ff6600");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_tool_2= {
  init: function() { 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)  
      .appendField("简易计算器");
  this.appendDummyInput('EMPTY1') 
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput("___________________"), "screen_1");
  this.appendDummyInput('EMPTY2')  
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput("___________________"), "screen_2");
  this.appendDummyInput('EMPTY3') 
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput("___________________"), "screen_3");
  this.appendDummyInput() 
      .appendField("输出类型:")
      .appendField(new Blockly.FieldDropdown([["二进制","BIN"],["八进制","OCT"],["十进制","DEC"],["十六进制","HEX"]]), "convert_type");
  this.appendDummyInput();
  this.appendStatementInput("calculate_data")
      .setCheck(null);
  this.setInputsInline(false);
  this.setColour("#ff6666");
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange: function(){
    var statements_calculate_data = Blockly.Arduino.statementToCode(this, 'calculate_data');
    statements_calculate_data = statements_calculate_data.replace(/(^\s*)|(\s*$)/g, "");
    if(statements_calculate_data.charAt(0) == '(' && statements_calculate_data.charAt(statements_calculate_data.length - 1) == ')')
      statements_calculate_data = statements_calculate_data.substring(1,statements_calculate_data.length - 1);
    var dropdown_convert_type = this.getFieldValue('convert_type');

    switch(dropdown_convert_type)
    {
      case 'BIN':
      {
        statements_calculate_data = Number(statements_calculate_data).toString(2);
        break;
      }
      case 'OCT':
      {
        statements_calculate_data = Number(statements_calculate_data).toString(8);
        break;
      }
      case 'DEC':
      {
        statements_calculate_data = Number(statements_calculate_data).toString(10);
        break;
      }
      case 'HEX':
      {
        statements_calculate_data = Number(statements_calculate_data).toString(16);
        break;
      }
    }
    statements_calculate_data = statements_calculate_data.toUpperCase();
    var calculate_data_length = statements_calculate_data.length;
    var is_integer = true;
    var data_integer = '';
    var data_decimals = '';
    for(var i of statements_calculate_data)
    {
      if(i == '.')
      {
        is_integer = false;
        continue;
      }
      if(is_integer) 
        data_integer+=i;
      else
        data_decimals+=i;
    }

    
    var data_integer1 = '';
    if(dropdown_convert_type == 'BIN')
    {
      
      if(data_integer.length % 4 > 0)
      {
        while(data_integer.length % 4 > 0)
          data_integer = '0' + data_integer;
      }
      

      for(var i = 0;i < data_integer.length;i++)
      {
        if((i + 1)%4 == 1)
          data_integer1 = data_integer1 + '_' + data_integer.charAt(i);
        else
          data_integer1 = data_integer1 + data_integer.charAt(i);
      }
      data_integer = data_integer1;
    }
    else if(dropdown_convert_type == 'OCT' || dropdown_convert_type == 'DEC')
    {
      for(var i = data_integer.length - 1;i>=0;i--)
      {
        if((data_integer.length - i)%3 == 0 && i != 0)
          if(dropdown_convert_type == 'OCT')
            data_integer1 = '_' + data_integer.charAt(i) + data_integer1;
          else
            data_integer1 = '_' + data_integer.charAt(i) + data_integer1;
        else
          data_integer1 = data_integer.charAt(i) + data_integer1;
      }
      data_integer = data_integer1;
    }
    else
    {
      
      if(data_integer.length % 4 > 0)
      {
        while(data_integer.length % 4 > 0)
          data_integer = '0' + data_integer;
      }
      
      for(var i = 0;i < data_integer.length;i++)
      {
        if((i + 1)%4 == 1)
          data_integer1 = data_integer1 + '_' + data_integer.charAt(i);
        else
          data_integer1 = data_integer1 + data_integer.charAt(i);
      }
      data_integer = data_integer1;
    }

    if(data_integer.charAt(0) == '-' && (data_integer.charAt(1) == ' ' || data_integer.charAt(1) == ','))
      data_integer = data_integer.charAt(0) + data_integer.substring(2);
    
    
    var data_integer_length = data_integer.length;
    if(data_integer_length <= 19)
    {
      for(var i = 0;i < 19 - data_integer_length;i++)
        data_integer = '_' + data_integer;
      this.setFieldValue("___________________","screen_1");
      this.setFieldValue(data_integer,"screen_2");
    }
    else if(data_integer_length <= 39)
    {
      for(var i = 0;i < 39 - data_integer_length;i++)
        data_integer = '_' + data_integer;
      this.setFieldValue(data_integer.substring(20,39),"screen_2");
      this.setFieldValue(data_integer.substring(0,19),"screen_1");
    }
    else
    {
      this.setFieldValue(data_integer.substring(data_integer_length-19,data_integer_length),"screen_2");
      this.setFieldValue(data_integer.substring(data_integer_length-39,data_integer_length-20),"screen_1");
    }

    if(data_decimals)
      data_decimals = '.' + data_decimals;
    var data_decimals_length = data_decimals.length;
    if(data_decimals_length <= 19)
    {
      for(var i = 0;i < 19 - data_decimals_length;i++)
        data_decimals = data_decimals + '_';
      this.setFieldValue(data_decimals,"screen_3");
    }
    else
    {
      this.setFieldValue(data_decimals.substring(0,19),"screen_3");
    }
  }
};


Blockly.Blocks.make_tool_result= {
  init: function() { 
  this.appendValueInput("make_tool_result_data")
      .setCheck(null)  
      .appendField("计算");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_tool_result_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("结果");
  this.setOutput(true, null);
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_tool_calculate_1= {
  init: function() { 
  this.appendValueInput("make_tool_input_data1")
      .setCheck(null);
  this.appendValueInput("make_tool_input_data2")
      .setCheck(null)  
      .appendField(new Blockly.FieldDropdown([["+","+"],["-","-"],["×","×"],["÷","÷"],["%","%"],["^","^"]]), "make_tool_calculate_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_tool_calculate= {
  init: function() { 
  this.appendValueInput("make_tool_calculate_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldDropdown([["sin","sin"],["cos","cos"],["tan","tan"],["asin","asin"],["acos","acos"],["atan","atan"],["ln","ln"],["log10","log10"],["e^","e^"],["10^","10^"]]), "make_tool_calculate_type");
  this.setOutput(true, null);
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_tool_bit_operation= {
  init: function() { 
  this.appendValueInput("bit_operation_1")
      .setCheck(null);
  this.appendValueInput("bit_operation_2")
      .setCheck(null)
      .appendField(new Blockly.FieldDropdown([["&","&"],["|","|"],["^","^"],[">>",">>"],["<<","<<"]]), "bit_operation_type");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_tool_not_operation= {
  init: function() { 
  this.appendValueInput("not_operation_data")
      .setCheck(null)
      .appendField("~");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_tool_convert_data= {
  init: function() { 
  this.appendValueInput("convert_data")
      .setCheck(null)  
      .appendField(new Blockly.FieldDropdown([["二进制","BIN"],["八进制","OCT"],["十进制","DEC"],["十六进制","HEX"]]), "convert_type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour("#6666cc");
  this.setTooltip("计算器里面会将各进制数统一变成十进制数来处理\n因此，在输入数据时，咱们需要用这个图形块来指明输入数据的类型\n默认输入数据是十进制");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['make_tool_convert_bin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_1")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_2")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_3")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_4")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_5")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_6")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_7")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ic_set_every_8");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("此图形块用于输出一个二进制数");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.make_tool_convert_bin_add = {
  
   init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setMutator(new Blockly.Mutator(['math_add_create_with_item']));
    this.setTooltip("此块用于将几个二进制字符串连接在一起");
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
    Blockly.Block.obtain(workspace, 'math_add_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'math_add_create_with_item');
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
      this.appendDummyInput('EMPTY');
    } else {
      for (var i = 0; i < this.itemCount_; i++) {
        this.appendValueInput('ADD' + i);
      }
    }
  }
};

Blockly.Blocks['math_add_create_with_item'] = {
 
   init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['math_add_create_with_container'] = {
 
   init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
        .appendField("文本");
    this.appendStatementInput('STACK');
    this.setTooltip("");
    this.contextMenu = false;
  }
};

Blockly.Blocks.make_tool_convert_bin_add_1= {
  init: function() { 
  this.appendValueInput("bin_add_data1")
      .setCheck(null);
  this.appendValueInput("bin_add_data2")
      .setCheck(null);
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//取模工具
Blockly.Blocks.make_tool_modulus= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("点阵格式:")
      .appendField(new Blockly.FieldDropdown([["阴码","1"],["阳码","2"]]), "bitmap_formats")
      .appendField(" 取模方式:")
      .appendField(new Blockly.FieldDropdown([["逐列式","1"],["逐行式","2"],["列行式","3"],["行列式","4"]]), "modulus_way")
      .appendField(" 取模走向:")
      .appendField(new Blockly.FieldDropdown([["顺向(高位在前)","1"],["逆向(低位在前)","2"]]), "modulus_direction");
  this.appendDummyInput()  
      .appendField("字体:")
      .appendField(new Blockly.FieldDropdown([["华文黑体","STHeiti"],["华文楷体","STKaiti"],["华文细黑","STXihei"],["华文宋体","STSong"],["华文中宋","STZhongsong"],["华文仿宋","STFangsong"],["华文彩云","STCaiyun"],["华文琥珀","STHupo"],["华文隶书","STLiti"],["华文行楷","STXingkai"],["华文新魏","STXinwei"],["黑体","simHei"],["宋体","simSun"],["新宋体","NSimSun"],["仿宋","FangSong"],["楷体","KaiTi"],["仿宋_GB2312","FangSong_GB2312"],["楷体_GB2312","KaiTi_GB2312"],["隶书","LiSu"],["幼圆","YouYuan"],["新细明体","PMingLiU"],["细明体","MingLiU"],["标楷体","DFKai-SB"],["微软正黑体","Microsoft JhengHei"],["微软雅黑体","Microsoft YaHei"],["AcadEref","AcadEref"],["Adobe Ming Std L","Adobe Ming Std L"],["Adobe Myungjo Std M","Adobe Myungjo Std M"],["Adobe Pi Std","Adobe Pi Std"],["AIGDT","AIGDT"],["AIgerian","AIgerian"],["AmdtSymbols","AmdtSymbols"],["Arial","Arial"],["Arial Rounded MT Bold","Arial Rounded MT Bold"],["Arial Unicode MS","Arial Unicode MS"],["BankGothic Lt BT","BankGothic Lt BT"],["BankGothic Md BT","BankGothic Md BT"],["Baskerville Old Face","Baskerville Old Face"],["Bauhaus 93","Bauhaus 93"],["Beranad MT Condensed","Beranad MT Condensed"]]), "hz_sharp")
      .appendField(" 字号:")
      .appendField(new Blockly.FieldTextInput("16"), "hz_line_height")
      .appendField("px 移动:")
      .appendField(new Blockly.FieldDropdown([["上移","hz_up"],["下移","hz_down"]]), "hz_up_down")
      .appendField(new Blockly.FieldTextInput("0"), "hz_up_down_data")
      .appendField("px ")
      .appendField(new Blockly.FieldDropdown([["左移","hz_left"],["右移","hz_right"]]), "hz_left_right")
      .appendField(new Blockly.FieldTextInput("0"), "hz_left_right_data")
      .appendField("px");
  this.appendDummyInput()  
      .appendField("点阵宽度:")
      .appendField(new Blockly.FieldTextInput("16"), "bitmap_width")
      .appendField("px 点阵高度:")
      .appendField(new Blockly.FieldTextInput("16"), "bitmap_height")
      .appendField("px 点阵旋转")
      .appendField(new Blockly.FieldAngle(0), "bitmap_rotate")
      .appendField(" 代码区绘制图案")
      .appendField(new Blockly.FieldCheckbox("true"), "show_hz");
  this.appendDummyInput()  
      .appendField("输入数据:")
      .appendField(new Blockly.FieldTextInput(""), "input_data");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  //this.setColour("#cc66cc");
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_tool_modulus_1= {
  init: function() { 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)  
      .appendField("取模工具");
  this.appendStatementInput("modulus_data")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField("输出数据:")
      .appendField(new Blockly.FieldTextInput(""), "output_data");
  this.setInputsInline(true);
  this.setColour("#ff6666");
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange: function(){
    var statements_modulus_data = Blockly.Arduino.statementToCode(this, 'modulus_data');
    statements_modulus_data = statements_modulus_data.substring(2);
    this.setFieldValue(statements_modulus_data,"output_data");
  }
};

Blockly.Blocks.make_tool_modulus_2= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("点阵格式:")
      .appendField(new Blockly.FieldDropdown([["阴码","1"],["阳码","2"]]), "bitmap_formats")
      .appendField(" 取模方式:")
      .appendField(new Blockly.FieldDropdown([["逐列式","1"],["逐行式","2"],["列行式","3"],["行列式","4"]]), "modulus_way")
      .appendField(" 取模走向:")
      .appendField(new Blockly.FieldDropdown([["顺向(高位在前)","1"],["逆向(低位在前)","2"]]), "modulus_direction");
  this.appendDummyInput()  
      .appendField("字体:")
      .appendField(new Blockly.FieldDropdown([["华文黑体","STHeiti"],["华文楷体","STKaiti"],["华文细黑","STXihei"],["华文宋体","STSong"],["华文中宋","STZhongsong"],["华文仿宋","STFangsong"],["华文彩云","STCaiyun"],["华文琥珀","STHupo"],["华文隶书","STLiti"],["华文行楷","STXingkai"],["华文新魏","STXinwei"],["黑体","simHei"],["宋体","simSun"],["新宋体","NSimSun"],["仿宋","FangSong"],["楷体","KaiTi"],["仿宋_GB2312","FangSong_GB2312"],["楷体_GB2312","KaiTi_GB2312"],["隶书","LiSu"],["幼圆","YouYuan"],["新细明体","PMingLiU"],["细明体","MingLiU"],["标楷体","DFKai-SB"],["微软正黑体","Microsoft JhengHei"],["微软雅黑体","Microsoft YaHei"],["AcadEref","AcadEref"],["Adobe Ming Std L","Adobe Ming Std L"],["Adobe Myungjo Std M","Adobe Myungjo Std M"],["Adobe Pi Std","Adobe Pi Std"],["AIGDT","AIGDT"],["AIgerian","AIgerian"],["AmdtSymbols","AmdtSymbols"],["Arial","Arial"],["Arial Rounded MT Bold","Arial Rounded MT Bold"],["Arial Unicode MS","Arial Unicode MS"],["BankGothic Lt BT","BankGothic Lt BT"],["BankGothic Md BT","BankGothic Md BT"],["Baskerville Old Face","Baskerville Old Face"],["Bauhaus 93","Bauhaus 93"],["Beranad MT Condensed","Beranad MT Condensed"]]), "hz_sharp")
      .appendField(" 字号:")
      .appendField(new Blockly.FieldTextInput("16"), "hz_line_height")
      .appendField("px 移动:")
      .appendField(new Blockly.FieldDropdown([["上移","hz_up"],["下移","hz_down"]]), "hz_up_down")
      .appendField(new Blockly.FieldTextInput("0"), "hz_up_down_data")
      .appendField("px ")
      .appendField(new Blockly.FieldDropdown([["左移","hz_left"],["右移","hz_right"]]), "hz_left_right")
      .appendField(new Blockly.FieldTextInput("0"), "hz_left_right_data")
      .appendField("px");
  this.appendDummyInput()  
      .appendField("点阵宽度:")
      .appendField(new Blockly.FieldTextInput("16"), "bitmap_width")
      .appendField("px 点阵高度:")
      .appendField(new Blockly.FieldTextInput("16"), "bitmap_height")
      .appendField("px 点阵旋转")
      .appendField(new Blockly.FieldAngle(0), "bitmap_rotate")
      .appendField(" 代码区绘制图案")
      .appendField(new Blockly.FieldCheckbox("true"), "show_hz");
  this.appendDummyInput()  
      .appendField("输入数据:")
      .appendField(new Blockly.FieldTextInput(""), "input_data");
  this.setInputsInline(false);
  this.setOutput(true, null);
  //this.setColour("#cc66cc");
  this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.lists_create_with_hz = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput("")
        .appendField('图像名称')
        .appendField(new Blockly.FieldTextInput('mylist'), 'VAR')
        .appendField('[')
        .appendField(new Blockly.FieldTextInput('3'), 'y')
        .appendField('][')
        .appendField(new Blockly.FieldTextInput('3'), 'x')
        .appendField(']')
        .appendField("保存到flash")
        .appendField(new Blockly.FieldCheckbox("true"), "save_hz");
    this.itemCount_ = 3;
    this.updateShape_();
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
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
    Blockly.Block.obtain(workspace, 'lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'lists_create_with_item');
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
      .appendField("图像数据");
    } else {
      for (var i = 0; i < this.itemCount_; i++) {
        var input = this.appendValueInput('ADD' + i);
        if (i == 0) {
          input.appendField("图像数据");
        }
      }
    }
  }
};

Blockly.Blocks.lists_create_with_hz_1 = {
   init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput("")
        .appendField('图像名称')
        .appendField(new Blockly.FieldTextInput('mylist'), 'VAR')
        .appendField('[')
        .appendField(new Blockly.FieldTextInput('3'), 'x')
        .appendField(']')
        .appendField("保存到flash")
        .appendField(new Blockly.FieldCheckbox("true"), "save_hz");
    this.appendValueInput("input_data");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
  }
};

Blockly.Blocks.make_tool_encoding= {
  init: function() { 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)  
      .appendField("汉字字符集编码查询工具");
  this.appendDummyInput()  
      .appendField("输入数据:")
      .appendField(new Blockly.FieldTextInput("米思齐"), "input_data");
  this.appendDummyInput()  
      .appendField("编码格式:")
      .appendField(new Blockly.FieldDropdown([["GB2312","GB2312"],["Unicode","Unicode"]]), "type");
  this.appendDummyInput()  
      .appendField("输出数据:")
      .appendField(new Blockly.FieldTextInput(""), "output_data");
  this.setColour("#ff6666");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_tool_encoding_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["GB2312编码","GB2312"],["Unicode编码","Unicode"]]), "type")
      .appendField(new Blockly.FieldTextInput("米思齐"), "input_data");
  this.setOutput(true, null);
  this.setColour("#ff6666");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_comment_picture= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("插入图片");
  this.appendDummyInput('EMPTY1')
      .appendField("路径：")
      .appendField(new Blockly.FieldTextInput("../../media/Arduino/microcontroller/UNO.jpg"), "picture_data");
  this.appendDummyInput('EMPTY2')
      .setAlign(Blockly.ALIGN_CENTRE)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/microcontroller/UNO.jpg", 350, 350, "*"), "picture_data1");
      //.appendField(new Blockly.FieldImage("/mixly/Arduino/media/Arduino/1.jpg", 350, 350, "*"), "picture_data1");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  },
  onchange: function(){
    var text_picture_data = this.getFieldValue('picture_data');
    if(text_picture_data)
      this.setFieldValue(text_picture_data,"picture_data1");
  }
};

Blockly.Blocks.make_arduino_comment_picture_change_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("插入图片")
      .appendField(" 宽度:")
      .appendField(new Blockly.FieldDropdown([["300","300"],["310","310"],["320","320"],["330","330"],["340","340"],["350","350"],["360","360"],["370","370"],["380","380"],["390","390"],["400","400"],["410","410"],["420","420"],["430","430"],["440","440"],["450","450"],["460","460"],["470","470"],["480","480"],["490","490"],["500","500"],["510","510"],["520","520"],["530","530"],["540","540"],["550","550"],["560","560"],["570","570"],["580","580"],["590","590"],["600","600"]]), "picture_width")
      .appendField(" 高度:")
      .appendField(new Blockly.FieldDropdown([["300","300"],["310","310"],["320","320"],["330","330"],["340","340"],["350","350"],["360","360"],["370","370"],["380","380"],["390","390"],["400","400"],["410","410"],["420","420"],["430","430"],["440","440"],["450","450"],["460","460"],["470","470"],["480","480"],["490","490"],["500","500"],["510","510"],["520","520"],["530","530"],["540","540"],["550","550"],["560","560"],["570","570"],["580","580"],["590","590"],["600","600"]]), "picture_height");
  this.appendDummyInput() 
      .appendField("路径：")
      .appendField(new Blockly.FieldTextInput("../../media/Arduino/microcontroller/UNO.jpg"), "picture_data");
  this.appendDummyInput('EMPTY')
      .setAlign(Blockly.ALIGN_CENTRE)  
      .appendField(new Blockly.FieldImage("../../media/Arduino/microcontroller/UNO.jpg", 300, 300, "*"), "picture_data1");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#6666cc");
  this.setTooltip(
    "注意：图片必须要和Mixly软件在一个盘符下\n"
    +"示例所给图片是UNO.jpg对于文件index.html的相对路径；\n"
    +"若使用某个图片的绝对路径，则输入路径需从盘符开始，形如：\n"
    +"D:\\mixly\\Arduino\\media\\Arduino\\microcontroller\\Mega.jpg"
    );
  this.setHelpUrl("");
  },
  onchange: function(){
    var dropdown_picture_width = this.getFieldValue('picture_width');
    var dropdown_picture_height = this.getFieldValue('picture_height');
    var text_picture_data = this.getFieldValue('picture_data');
    if(text_picture_data)
    {
      if(text_picture_data.charAt(1) == ':' && text_picture_data.charAt(2) == '\\')
      {
        text_picture_data = text_picture_data.substring(2);
        var text_picture_data_1 = "";
        for(var i of text_picture_data)
        {
          if(i == '\\')
            text_picture_data_1+="/";
          else
            text_picture_data_1+=i;
        }
        text_picture_data = text_picture_data_1;
      }
      this.removeInput('EMPTY');
      var input = this.appendDummyInput('EMPTY');
      input.setAlign(Blockly.ALIGN_CENTRE);
      input.appendField(new Blockly.FieldImage(text_picture_data, dropdown_picture_width, dropdown_picture_height, "*"), "picture_data1");
    }
  }
};

Blockly.Blocks.make_arduino_comment_text= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("/*");
  this.appendDummyInput()  
      .appendField(new Blockly.FieldTextArea("添加注释"), "data");
  this.appendDummyInput()  
      .appendField("*/");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_comment_text_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("//")
      .appendField(new Blockly.FieldTextInput("添加注释"), "data");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_comment_text_2 = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour("#6666cc");
    this.appendDummyInput("EMPTY0")
        .appendField("/*");
    this.appendDummyInput("EMPTY1")  
        .appendField("    *")
        .appendField(new Blockly.FieldTextInput("               "), "data1");
    this.appendDummyInput("EMPTY2")  
        .appendField("    */");
    this.itemCount_ = 3;
    this.updateShape_();
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setMutator(new Blockly.Mutator(['comment_text_create_with_item']));
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
    Blockly.Block.obtain(workspace, 'comment_text_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'comment_text_create_with_item');
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
    if(j > 2)
    {
      var code = new Array(j - 2);
      for (var n = 0; n < j-2; n++) {
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
          .appendField("/*")
          .appendField(new Blockly.FieldTextInput("添加注释"), "data1")
          .appendField("*/");
    } else {
      this.appendDummyInput("EMPTY0")
          .appendField("/*");
      var i = 1;
      //if(this.itemCount_ < (j-2))
      for (i = 1; i <= this.itemCount_; i++) {
        if(i <= j-2)
        {
          this.appendDummyInput("EMPTY"+i)  
              .appendField("    *")
              .appendField(new Blockly.FieldTextInput(code[i-1]), "data"+i);
        }
        else
        {
          this.appendDummyInput("EMPTY"+i)  
              .appendField("    *")
              .appendField(new Blockly.FieldTextInput("               "), "data"+i);
        }
      }
      this.appendDummyInput("EMPTY"+i)  
          .appendField("    */");
    }
  }
};

Blockly.Blocks['comment_text_create_with_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour("#6666cc");
    this.appendDummyInput()
    .appendField("添加一行");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.contextMenu = false;
  }
};

Blockly.Blocks['comment_text_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour("#6666cc");
    this.appendDummyInput()
        .appendField("注释:");
    this.appendStatementInput('STACK');
    this.setTooltip("");
    this.contextMenu = false;
  }
};

Blockly.Blocks.make_arduino_comment_text_3= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("/*")
      .appendField(new Blockly.FieldTextInput("添加注释"), "data")
      .appendField("*/");
  this.appendStatementInput("input")
      .setCheck(null);
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.make_arduino_comment_text_4= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("/*");
  this.appendStatementInput("input")
      .setCheck(null);
  this.appendDummyInput()  
      .appendField("*/");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#6666cc");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

/*
Blockly.Blocks.make_arduino_tooltip= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("图形块")
      .appendField(new Blockly.FieldDropdown([["显示详细注释信息(全部)","true"],["显示简略注释信息(仅工作区)","false_part"],["显示简略注释信息(全部)","false"]]), "type");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#6666cc");
  this.setTooltip("此块需放到 初始化 块下");
  this.setHelpUrl("");
  }
};
*/