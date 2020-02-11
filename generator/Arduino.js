'use strict';

goog.provide('Blockly.Arduino.Arduino');

goog.require('Blockly.Arduino');


//更改mixly中变量声明的图形块
Blockly.Arduino.variables_declare = function() {
  var dropdown_type = this.getFieldValue('TYPE');

  var dropdown_variables_type = this.getFieldValue('variables_type');

  var argument0;

  var code = '';
  //TODO: settype to variable
  if(dropdown_variables_type == 'global_variate')
  {
    if(dropdown_type=='String'){
      argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || '""';
    }else{
      argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    }
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
    
    if (dropdown_type == 'String' || dropdown_type == 'uint8_t' || dropdown_type == 'uint16_t' || dropdown_type == 'uint32_t' || dropdown_type == 'uint64_t' || dropdown_type == 'char *')
      Blockly.Arduino.definitions_['var_declare' + varName] = dropdown_type + ' ' + varName + ';';
    else
      Blockly.Arduino.definitions_['var_declare' + varName] = 'volatile ' + dropdown_type + ' ' + varName + ';';
    
    Blockly.Arduino.setups_['setup_var'+varName] = varName + ' = ' + argument0 + ';';
  }
  else if(dropdown_variables_type == 'local_variate')
  {
    if(dropdown_type=='String'){
      argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || '""';
    }else{
      argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    }
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
    code = dropdown_type + ' ' +varName + ' = ' + argument0 + ';\n';
  }
  else if(dropdown_variables_type == 'static_global_variate')
  {
    if(dropdown_type=='String'){
      argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || '""';
    }else{
      argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    }
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['var_declare' + varName] = 'static ' + dropdown_type + ' ' + varName + ';';
    Blockly.Arduino.setups_['setup_var'+varName] = varName + ' = ' + argument0 + ';';
  }
  else
  {
    if(dropdown_type=='String'){
      argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || '""';
    }else{
      argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    }
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
    code = 'static ' + dropdown_type + ' ' + varName + ' = ' + argument0 + ';\n';
  }

  //Blockly.Arduino.variableTypes_[varName] = dropdown_type;//处理变量类型
  return code;
};




Blockly.Arduino.arduino_const_variate = function() {
    var value_const_variate_data = Blockly.Arduino.valueToCode(this, 'const_variate_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_const_variate_name = this.getFieldValue('const_variate_name');
    var dropdown_const_variate_type = this.getFieldValue('const_variate_type');
  if(dropdown_const_variate_type == 'String')
  {
    if(value_const_variate_data == '')
    {
      Blockly.Arduino.definitions_['var_declare' + text_const_variate_name] = 'const ' + dropdown_const_variate_type + ' ' + text_const_variate_name + ' = ' + '""' + ';';
    }
    else
    {
      Blockly.Arduino.definitions_['var_declare' + text_const_variate_name] = 'const ' + dropdown_const_variate_type + ' ' + text_const_variate_name + ' = ' + value_const_variate_data + ';';
    }
  }
  else
  {
    if(value_const_variate_data == '')
    {
      Blockly.Arduino.definitions_['var_declare' + text_const_variate_name] = 'const ' + dropdown_const_variate_type + ' ' + text_const_variate_name + ' = ' + '0' + ';';
    }
    else
    {
      Blockly.Arduino.definitions_['var_declare' + text_const_variate_name] = 'const ' + dropdown_const_variate_type + ' ' + text_const_variate_name + ' = ' + value_const_variate_data + ';';
    }
  }

  var code = '';
  return code;
};

Blockly.Arduino.arduino_const_variate_1 = function() {
    var text_const_variate_name = this.getFieldValue('const_variate_name');
    var code = text_const_variate_name;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduino_define_global_variate = function() {
    var value_global_variate_data = Blockly.Arduino.valueToCode(this, 'global_variate_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_global_variate_name = this.getFieldValue('global_variate_name');
    var dropdown_global_variate_type = this.getFieldValue('global_variate_type');

  if (dropdown_global_variate_type == 'String' || dropdown_global_variate_type == 'uint8_t' || dropdown_global_variate_type == 'uint16_t' || dropdown_global_variate_type == 'uint32_t' || dropdown_global_variate_type == 'uint64_t' || dropdown_global_variate_type == 'char *')
    Blockly.Arduino.definitions_['var_declare' + text_global_variate_name] = dropdown_global_variate_type + ' ' + text_global_variate_name + ';';
  else
    Blockly.Arduino.definitions_['var_declare' + text_global_variate_name] = 'volatile ' + dropdown_global_variate_type + ' ' + text_global_variate_name + ';';
  if(value_global_variate_data == '')
  {
    if(dropdown_global_variate_type == 'String')
    {
      Blockly.Arduino.setups_['setup_var' + text_global_variate_name] = text_global_variate_name + ' = "";';
    }
    else
    {
      Blockly.Arduino.setups_['setup_var' + text_global_variate_name] = text_global_variate_name + ' = 0;';
    }
  }
  else
  {
    Blockly.Arduino.setups_['setup_var' + text_global_variate_name] = text_global_variate_name + ' = '+value_global_variate_data+';';
  }

  var code = '';
  return code;
};

Blockly.Arduino.arduino_define_global_variate_0 = function() {
    var value_global_variate_data = Blockly.Arduino.valueToCode(this, 'global_variate_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_global_variate_name = this.getFieldValue('global_variate_name');
    var dropdown_global_variate_type = this.getFieldValue('global_variate_type');

  Blockly.Arduino.definitions_['var_declare' + text_global_variate_name] = 'volatile ' + dropdown_global_variate_type + ' ' + text_global_variate_name + ';';

  var code = '';
  return code;
};

Blockly.Arduino['arduino_define_static_global_variate'] = function() {
  var text_static_variate_name = this.getFieldValue('static_variate_name');
  var dropdown_static_variate_value = this.getFieldValue('static_variate_value');
  var value_static_variate_get_data = Blockly.Arduino.valueToCode(this, 'static_variate_get_data', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['var_declare' + text_static_variate_name] = 'static' + ' ' + dropdown_static_variate_value + ' ' + text_static_variate_name + ';';
  
  if(value_static_variate_get_data == '')
  {
    if(dropdown_static_variate_value == 'String')
    {
      Blockly.Arduino.setups_['setup_var' + text_static_variate_name] = text_static_variate_name + ' = "";';
    }
    else
    {
      Blockly.Arduino.setups_['setup_var' + text_static_variate_name] = text_static_variate_name + ' = 0;';
    }
  }
  else
  {
    Blockly.Arduino.setups_['setup_var' + text_static_variate_name] = text_static_variate_name + ' = '+value_static_variate_get_data+';';
  }

  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_define_static_global_variate_1 = function() {
    var value_static_variate_data = Blockly.Arduino.valueToCode(this, 'static_variate_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_static_variate_name = this.getFieldValue('static_variate_name');
    var code = text_static_variate_name + ' = ' + value_static_variate_data + ';\n';
  return code;
};

Blockly.Arduino.make_arduino_define_static_global_variate_2 = function() {
    var text_static_variate_name = this.getFieldValue('static_variate_name');
    var code = text_static_variate_name;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_define_static_local_variate'] = function() {
  var text_static_variate_name = this.getFieldValue('static_variate_name');
  var dropdown_static_variate_value = this.getFieldValue('static_variate_value');
  var value_static_variate_get_data = Blockly.Arduino.valueToCode(this, 'static_variate_get_data', Blockly.Arduino.ORDER_ATOMIC);

  var code = '';
  if(!value_static_variate_get_data)
  {
    if(dropdown_static_variate_value != 'String')
    {
      code = 'static ' + dropdown_static_variate_value + ' ' + text_static_variate_name + ' = 0;\n';
    }
    else
    {
      code = 'static ' + dropdown_static_variate_value + ' ' + text_static_variate_name + ' = "";\n';
    }
  }
  else
  {
    code = 'static ' + dropdown_static_variate_value + ' ' + text_static_variate_name + ' = ' + value_static_variate_get_data + ';\n';
  }
  
  return code;
};

Blockly.Arduino.make_arduino_define_static_local_variate_1 = function() {
    var value_static_variate_data = Blockly.Arduino.valueToCode(this, 'static_variate_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_static_variate_name = this.getFieldValue('static_variate_name');
    var code = text_static_variate_name + ' = ' + value_static_variate_data + ';\n';
  return code;
};

Blockly.Arduino.make_arduino_define_static_local_variate_2 = function() {
    var text_static_variate_name = this.getFieldValue('static_variate_name');
    var code = text_static_variate_name;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_define_local_variate = function() {
    var value_local_variate_data = Blockly.Arduino.valueToCode(this, 'local_variate_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_local_variate_name = this.getFieldValue('local_variate_name');
    var dropdown_local_variate_type = this.getFieldValue('local_variate_type');

  var code = '';
  if(!value_local_variate_data)
  {
    if(dropdown_local_variate_type != 'String')
    {
      code = dropdown_local_variate_type + ' ' + text_local_variate_name + ' = 0;\n';
    }
    else
    {
      code = dropdown_local_variate_type + ' ' + text_local_variate_name + ' = "";\n';
    }
  }
  else
  {
    code = dropdown_local_variate_type + ' ' + text_local_variate_name + ' = ' + value_local_variate_data + ';\n';
  }
  return code;
};

Blockly.Arduino.make_arduino_define_local_variate_0 = function() {
    var text_local_variate_name = this.getFieldValue('local_variate_name');
    var dropdown_local_variate_type = this.getFieldValue('local_variate_type');

  var code = '';
  code = dropdown_local_variate_type + ' ' + text_local_variate_name + ';\n';
  return code;
};

Blockly.Arduino.make_arduino_define_local_variate_1 = function() {
    var value_local_variate_data = Blockly.Arduino.valueToCode(this, 'local_variate_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_local_variate_name = this.getFieldValue('local_variate_name');
  var code = text_local_variate_name + ' = ' + value_local_variate_data + ';\n';
  return code;
};

Blockly.Arduino.make_arduino_define_local_variate_2 = function() {
    var text_local_variate_name = this.getFieldValue('local_variate_name');
    var code = text_local_variate_name;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_define_local_variate_3 = function() {
    var value_local_variate_data = Blockly.Arduino.valueToCode(this, 'local_variate_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_local_variate_name = this.getFieldValue('local_variate_name');
    var dropdown_local_variate_type = this.getFieldValue('local_variate_type');

  var code = '';
  if(!value_local_variate_data)
  {
    if(dropdown_local_variate_type != 'String')
    {
      code = dropdown_local_variate_type + ' ' + text_local_variate_name + ' = 0';
    }
    else
    {
      code = dropdown_local_variate_type + ' ' + text_local_variate_name + ' = ""';
    }
  }
  else
  {
    code = dropdown_local_variate_type + ' ' + text_local_variate_name + ' = ' + value_local_variate_data + '';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_define_local_variate_4 = function() {
    var value_local_variate_data = Blockly.Arduino.valueToCode(this, 'local_variate_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_local_variate_name = this.getFieldValue('local_variate_name');
  var code = text_local_variate_name + ' = ' + value_local_variate_data + '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//do-while循环
Blockly.Arduino.make_do_while = function() {
    var statements_input_data = Blockly.Arduino.statementToCode(this, 'input_data');  
    var value_select_data = Blockly.Arduino.valueToCode(this, 'select_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_type = this.getFieldValue('type');
  if(dropdown_type == 'false')
  {
    var code = 'do{\n'
              +''+statements_input_data
              +'}while(!('+value_select_data+'))\n';
  }
  else
  {
    var code = 'do{\n'
              +''+statements_input_data
              +'}while('+value_select_data+')\n';
  }
  return code;
};

//for
Blockly.Arduino.make_for = function() {
    var value_variate = Blockly.Arduino.valueToCode(this, 'variate', Blockly.Arduino.ORDER_ATOMIC);
    var value_judge = Blockly.Arduino.valueToCode(this, 'judge', Blockly.Arduino.ORDER_ATOMIC);
    var value_operation = Blockly.Arduino.valueToCode(this, 'operation', Blockly.Arduino.ORDER_ATOMIC);
    var statements_do = Blockly.Arduino.statementToCode(this, 'do');  
  var code = 'for('+value_variate+'; '+value_judge+'; '+value_operation+')\n'
            +'{\n'
            +''+statements_do
            +'}\n';
  return code;
};

//return;
Blockly.Arduino.make_return = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type + ';\n';
  return code;
};

//return+data
Blockly.Arduino.make_return_with_data = function() {
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'return '+value_data+';\n';
  return code;
};

Blockly.Arduino.lists_create_with_1 = function() {
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');
    var text_lists_create_length = this.getFieldValue('lists_create_length');

  Blockly.Arduino.definitions_['var_declare'+text_lists_create_name] = dropdown_lists_create_type+' '+text_lists_create_name+'['+text_lists_create_length+'];';

  var code = '';
  return code;
};

Blockly.Arduino.lists_create_with_1_change1 = function() {
    var value_list_data = Blockly.Arduino.valueToCode(this, 'list_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');

  Blockly.Arduino.definitions_['var_declare'+text_lists_create_name] = dropdown_lists_create_type+' '+text_lists_create_name+'['+value_list_data+'];';

  var code = '';
  return code;
};

Blockly.Arduino.part_lists_create_with_1 = function() {
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');
    var text_lists_create_length = this.getFieldValue('lists_create_length');
  var code = dropdown_lists_create_type + ' ' + text_lists_create_name + '[' + text_lists_create_length + '];\n';
  return code;
};

Blockly.Arduino.part_lists_create_with_1_change1 = function() {
    var value_list_data = Blockly.Arduino.valueToCode(this, 'list_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');

  var code = dropdown_lists_create_type + ' ' + text_lists_create_name + '[' + value_list_data + '];\n';
  return code;
};

Blockly.Arduino.char_lists_create_with_1 = function() {
    var value_list_data = Blockly.Arduino.valueToCode(this, 'list_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');

  Blockly.Arduino.definitions_['var_declare'+text_lists_create_name] = dropdown_lists_create_type+' '+text_lists_create_name+'[] = '+value_list_data+';';

  var code = '';
  return code;
};

Blockly.Arduino.part_char_lists_create_with_1 = function() {
    var value_list_data = Blockly.Arduino.valueToCode(this, 'list_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');

  var code = dropdown_lists_create_type+' '+text_lists_create_name+'[] = '+value_list_data+';\n';
  return code;
};

Blockly.Arduino.part_lists_create_with = function() {
  // Create a list with any number of elements of any type.
  var dropdown_type = this.getFieldValue('TYPE');
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  var code = new Array(this.itemCount_);
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.Arduino.valueToCode(this, 'ADD' + n,
        Blockly.Arduino.ORDER_NONE) || '0';
  }
  var code = dropdown_type+' '+varName+'[]'+'='+ '{' + code.join(', ') + '};\n';
  //var code =''+varName+'['+size+"]"+'='+ '{' + code.join(', ') + '};\n';
  //Blockly.Arduino.setups_['setup_lists'+varName] = code;
  return code;
};

Blockly.Arduino.part_lists_create_with_text = function() {
  var dropdown_type = this.getFieldValue('TYPE');
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  var text_lists_num = this.getFieldValue('lists_num');
  var text=this.getFieldValue('TEXT');
  var code = dropdown_type+' '+varName+'['+text_lists_num+']'+'='+ '{' + text + '};\n';
  return code;
};

Blockly.Arduino.lists_with_1_get_data = function() {
    var value_lists_x = Blockly.Arduino.valueToCode(this, 'lists_x', Blockly.Arduino.ORDER_ATOMIC);
    var text_list_name = this.getFieldValue('list_name');
    var value_lists_data = Blockly.Arduino.valueToCode(this, 'lists_data', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = text_list_name + '[' + value_lists_x + '] = ' + value_lists_data + ';\n';

  return code;
};

Blockly.Arduino.lists_with_1_return_data = function() {
    var value_lists_x = Blockly.Arduino.valueToCode(this, 'lists_x', Blockly.Arduino.ORDER_ATOMIC);
    var text_list_name = this.getFieldValue('list_name');
  var code = text_list_name + '[' + value_lists_x + ']';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.lists_create_with_2 = function() {
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');
    var text_lists_create_length_1 = this.getFieldValue('lists_create_length_1');
    var text_lists_create_length_2 = this.getFieldValue('lists_create_length_2');

  Blockly.Arduino.definitions_['var_declare'+text_lists_create_name] = dropdown_lists_create_type+' '+text_lists_create_name+'['+text_lists_create_length_1+']['+text_lists_create_length_2+'];';
  var code = '';
  return code;
};

Blockly.Arduino.lists_create_with_2_change1 = function() {
    var value_lists_data1 = Blockly.Arduino.valueToCode(this, 'lists_data1', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');
    var value_lists_data2 = Blockly.Arduino.valueToCode(this, 'lists_data2', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['var_declare'+text_lists_create_name] = dropdown_lists_create_type+' '+text_lists_create_name+'['+value_lists_data1+']['+value_lists_data2+'];';
  var code = '';
  return code;
};

Blockly.Arduino.part_lists_create_with_2 = function() {
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');
    var text_lists_create_length_1 = this.getFieldValue('lists_create_length_1');
    var text_lists_create_length_2 = this.getFieldValue('lists_create_length_2');

  var code = dropdown_lists_create_type + ' ' + text_lists_create_name + '[' + text_lists_create_length_1 + '][' + text_lists_create_length_2 + '];\n';

  return code;
};

Blockly.Arduino.part_lists_create_with_2_change1 = function() {
    var value_lists_data1 = Blockly.Arduino.valueToCode(this, 'lists_data1', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');
    var value_lists_data2 = Blockly.Arduino.valueToCode(this, 'lists_data2', Blockly.Arduino.ORDER_ATOMIC);

  var code = dropdown_lists_create_type + ' ' + text_lists_create_name + '[' + value_lists_data1 + '][' + value_lists_data2 + '];\n';

  return code;
};

Blockly.Arduino.lists_create_with_2_1 = function() {
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');
    var statements_lists_with_2_1_data = Blockly.Arduino.statementToCode(this, 'lists_with_2_1_data');  

  if(statements_lists_with_2_1_data)
  {
    var num_x = 0;
    var num_y_data = '';
    var num_y = 0;
    var data = '';
    var choice = false;
    var statements_lists_with_2_1_data1 = '';
    statements_lists_with_2_1_data = statements_lists_with_2_1_data.substring(2,statements_lists_with_2_1_data.length-1);
    for(var i of statements_lists_with_2_1_data)
    {
      if(i == '→')
      {
        choice = true;
        continue;
      }
      if(choice)
      {
        if(i == '{')
        {
          if(num_y < num_y_data-0)
            num_y = num_y_data-0;
          num_y_data = '';
          choice = false;
        }
        else
        {
          num_y_data = num_y_data + i;
          continue;
        }
      }
      data = data + i;
      if(data == '},{')
        num_x++;
      if(data.length == 3)
      {
        data = data.substring(1,2) + i;
      }
      statements_lists_with_2_1_data1 = statements_lists_with_2_1_data1 + i;
    }
    num_x++;
    /*
    var num_y_1 = 0;
    var num_y_1_old = 0;
    for(var i of statements_lists_with_2_1_data1)
    {
      if(i == '{')
        num_y_1 = 0;
      else if(i == '}')
        if(num_y_1_old < num_y_1)
        {
          num_y_1_old = num_y_1;
        }
      else if(i == ',')
        num_y_1++;
    }
    num_y_1 = num_y_1_old + 1;
    */
    Blockly.Arduino.definitions_['var_declare'+text_lists_create_name] = dropdown_lists_create_type+' '+text_lists_create_name+'['+num_x+']['+num_y+'] = {'+statements_lists_with_2_1_data1+'};';
  }
  else
  {
    if(dropdown_lists_create_type == 'String')
      Blockly.Arduino.definitions_['var_declare'+text_lists_create_name] = dropdown_lists_create_type+' '+text_lists_create_name+'[2][2] = {{"0","0"},{"0","0"}};';
    else
      Blockly.Arduino.definitions_['var_declare'+text_lists_create_name] = dropdown_lists_create_type+' '+text_lists_create_name+'[2][2] = {{0,0},{0,0}};';
  }

  var code = '';
  return code;
};

Blockly.Arduino.part_lists_create_with_2_1 = function() {
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');
    var statements_lists_with_2_1_data = Blockly.Arduino.statementToCode(this, 'lists_with_2_1_data');  

  var code = '';
  if(statements_lists_with_2_1_data)
  {
    var num_x = 0;
    var num_y_data = '';
    var num_y = 0;
    var data = '';
    var choice = false;
    var statements_lists_with_2_1_data1 = '';
    statements_lists_with_2_1_data = statements_lists_with_2_1_data.substring(2,statements_lists_with_2_1_data.length-1);
    for(var i of statements_lists_with_2_1_data)
    {
      if(i == '→')
      {
        choice = true;
        continue;
      }
      if(choice)
      {
        if(i == '{')
        {
          if(num_y < num_y_data-0)
            num_y = num_y_data-0;
          num_y_data = '';
          choice = false;
        }
        else
        {
          num_y_data = num_y_data + i;
          continue;
        } 
      }
      data = data + i;
      if(data == '},{')
        num_x++;
      if(data.length == 3)
      {
        data = data.substring(1,2) + i;
      }
      statements_lists_with_2_1_data1 = statements_lists_with_2_1_data1 + i;
    }
    num_x++;

    /*
    var num_y_1 = 0;
    var num_y_1_old = 0;
    for(var i of statements_lists_with_2_1_data1)
    {
      if(i == '{')
        num_y_1 = 0;
      else if(i == '}')
        if(num_y_1_old < num_y_1)
        {
          num_y_1_old = num_y_1;
        }
      else if(i == ',')
        num_y_1++;
    }
    num_y_1 = num_y_1_old + 1;
    */
    code = dropdown_lists_create_type+' '+text_lists_create_name+'['+num_x+']['+num_y+'] = {'+statements_lists_with_2_1_data1+'};\n';
  }
  else
  {
    if(dropdown_lists_create_type == 'String')
      code = dropdown_lists_create_type+' '+text_lists_create_name+'[2][2] = {{"0","0"},{"0","0"}};\n';
    else
      code = dropdown_lists_create_type+' '+text_lists_create_name+'[2][2] = {{0,0},{0,0}};\n';
  }

  return code;
};

Blockly.Arduino.lists_create_with_2_1_new_2019_10_18 = function() {
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');
    var text_lists_num_1 = this.getFieldValue('lists_num_1');
    var text_lists_num_2 = this.getFieldValue('lists_num_2');
    var statements_lists_with_2_1_data = Blockly.Arduino.statementToCode(this, 'lists_with_2_1_data');  

  if(statements_lists_with_2_1_data)
  {
    var num_x = 0;
    var num_y_data = '';
    var num_y = 0;
    var data = '';
    var choice = false;
    var statements_lists_with_2_1_data1 = '';
    statements_lists_with_2_1_data = statements_lists_with_2_1_data.substring(2,statements_lists_with_2_1_data.length-1);
    for(var i of statements_lists_with_2_1_data)
    {
      if(i == '→')
      {
        choice = true;
        continue;
      }
      if(choice)
      {
        if(i == '{')
        {
          if(num_y < num_y_data-0)
            num_y = num_y_data-0;
          num_y_data = '';
          choice = false;
        }
        else
        {
          num_y_data = num_y_data + i;
          continue;
        } 
      }
      data = data + i;
      if(data == '},{')
        num_x++;
      if(data.length == 3)
      {
        data = data.substring(1,2) + i;
      }
      statements_lists_with_2_1_data1 = statements_lists_with_2_1_data1 + i;
    }
    num_x++;
    Blockly.Arduino.definitions_['var_declare'+text_lists_create_name] = dropdown_lists_create_type+' '+text_lists_create_name+'['+text_lists_num_1+']['+text_lists_num_2+'] = {'+statements_lists_with_2_1_data1+'};';
  }
  else
  {
    if(dropdown_lists_create_type == 'String')
      Blockly.Arduino.definitions_['var_declare'+text_lists_create_name] = dropdown_lists_create_type+' '+text_lists_create_name+'[2][2] = {{"0","0"},{"0","0"}};';
    else
      Blockly.Arduino.definitions_['var_declare'+text_lists_create_name] = dropdown_lists_create_type+' '+text_lists_create_name+'[2][2] = {{0,0},{0,0}};';
  }

  var code = '';
  return code;
};

Blockly.Arduino.part_lists_create_with_2_1_new_2019_10_18 = function() {
    var dropdown_lists_create_type = this.getFieldValue('lists_create_type');
    var text_lists_create_name = this.getFieldValue('lists_create_name');
    var text_lists_num_1 = this.getFieldValue('lists_num_1');
    var text_lists_num_2 = this.getFieldValue('lists_num_2');
    var statements_lists_with_2_1_data = Blockly.Arduino.statementToCode(this, 'lists_with_2_1_data');  

  var code = '';
  if(statements_lists_with_2_1_data)
  {
    var num_x = 0;
    var num_y_data = '';
    var num_y = 0;
    var data = '';
    var choice = false;
    var statements_lists_with_2_1_data1 = '';
    statements_lists_with_2_1_data = statements_lists_with_2_1_data.substring(2,statements_lists_with_2_1_data.length-1);
    for(var i of statements_lists_with_2_1_data)
    {
      if(i == '→')
      {
        choice = true;
        continue;
      }
      if(choice)
      {
        if(i == '{')
        {
          if(num_y < num_y_data-0)
            num_y = num_y_data-0;
          num_y_data = '';
          choice = false;
        }
        else
        {
          num_y_data = num_y_data + i;
          continue;
        } 
      }
      data = data + i;
      if(data == '},{')
        num_x++;
      if(data.length == 3)
      {
        data = data.substring(1,2) + i;
      }
      statements_lists_with_2_1_data1 = statements_lists_with_2_1_data1 + i;
    }
    num_x++;
    code = dropdown_lists_create_type+' '+text_lists_create_name+'['+text_lists_num_1+']['+text_lists_num_2+'] = {'+statements_lists_with_2_1_data1+'};\n';
  }
  else
  {
    if(dropdown_lists_create_type == 'String')
      code = dropdown_lists_create_type+' '+text_lists_create_name+'[2][2] = {{"0","0"},{"0","0"}};\n';
    else
      code = dropdown_lists_create_type+' '+text_lists_create_name+'[2][2] = {{0,0},{0,0}};\n';
  }

  return code;
};

Blockly.Arduino.lists_create_with_2_1_get_data = function() {
  // Create a list with any number of elements of any type.
  var code = new Array(this.itemCount_);
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.Arduino.valueToCode(this, 'ADD' + n,
        Blockly.Arduino.ORDER_NONE) || '0';
  }
  var code1 = '';
  var surround_parent = this.getSurroundParent();
  if (surround_parent && surround_parent.type == 'lists_create_with_2_1') 
  {
    for (var n = 0; n < this.itemCount_; n++) {
      code1 = code1 + ', ' + code[n];
    }
    code1 = code1.substring(2);
    code1 = '→' + this.itemCount_ + '{' + code1 + '},';
  } 
  else if(surround_parent && surround_parent.type == 'part_lists_create_with_2_1')
  {
    for (var n = 0; n < this.itemCount_; n++) {
      code1 = code1 + ', ' + code[n];
    }
    code1 = code1.substring(2);
    code1 = '→' + this.itemCount_ + '{' + code1 + '},';
  }
  else if(surround_parent && surround_parent.type == 'lists_create_with_2_1_new_2019_10_18')
  {
    for (var n = 0; n < this.itemCount_; n++) {
      code1 = code1 + ', ' + code[n];
    }
    code1 = code1.substring(2);
    code1 = '→' + this.itemCount_ + '{' + code1 + '},';
  }
  else if(surround_parent && surround_parent.type == 'part_lists_create_with_2_1_new_2019_10_18')
  {
    for (var n = 0; n < this.itemCount_; n++) {
      code1 = code1 + ', ' + code[n];
    }
    code1 = code1.substring(2);
    code1 = '→' + this.itemCount_ + '{' + code1 + '},';
  }
  else
  {
    code1 = '';
  }
  
  //var code =''+varName+'['+size+"]"+'='+ '{' + code.join(', ') + '};\n';
  //Blockly.Arduino.setups_['setup_lists'+varName] = code;
  return code1;
};

//获取二维数组的行数与列数
Blockly.Arduino.lists_with_2_get_length = function() {
    var text_list_name = this.getFieldValue('list_name');
    var dropdown_type = this.getFieldValue('type');

  var code = '';
  if(dropdown_type == 'col')
    code = '(sizeof('+text_list_name+'[0]) / sizeof('+text_list_name+'[0][0]))';
  else
    code = '(sizeof('+text_list_name+') / sizeof('+text_list_name+'[0]))';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.lists_with_2_get_data = function() {
    var value_lists_x = Blockly.Arduino.valueToCode(this, 'lists_x', Blockly.Arduino.ORDER_ATOMIC);
    var text_list_name = this.getFieldValue('list_name');
    var value_lists_y = Blockly.Arduino.valueToCode(this, 'lists_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_lists_data = Blockly.Arduino.valueToCode(this, 'lists_data', Blockly.Arduino.ORDER_ATOMIC);

  var code = text_list_name + '[' + value_lists_x + '][' + value_lists_y + '] = ' + value_lists_data + ';\n';

  return code;
};

Blockly.Arduino.lists_with_2_return_data = function() {
    var value_lists_x = Blockly.Arduino.valueToCode(this, 'lists_x', Blockly.Arduino.ORDER_ATOMIC);
    var text_list_name = this.getFieldValue('list_name');
    var value_lists_y = Blockly.Arduino.valueToCode(this, 'lists_y', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_list_name + '[' + value_lists_x + '][' + value_lists_y + ']';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//变量定义
Blockly.Arduino.make_arduino_variate = function() {
    var dropdown_variate_type = this.getFieldValue('variate_type');
  var code = dropdown_variate_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//获取某个变量在内存中所占用的字节数
Blockly.Arduino.math_sizeof = function() {
  this.setTooltip("以字节形式返回某个操作数的储存大小");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sizeof('+value_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
//取反
Blockly.Arduino.math_negation = function() {
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = '~('+value_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
*/

//加法
Blockly.Arduino.math_add = function() {
  // Create a list with any number of elements of any type.
  var dropdown_math_add_type = this.getFieldValue('math_add_type');
  var code = new Array(this.itemCount_);
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.Arduino.valueToCode(this, 'ADD' + n,
        Blockly.Arduino.ORDER_NONE) || '1';
  }
  
  var code1 = '';
  if(dropdown_math_add_type == '+')
  {
    for (var n = 0; n < this.itemCount_; n++) {
      var i1 = 0;
      for(var i of code[n])
      {
        i1++;
        if(i == '+' || i == '-' || i == '×' || i == '÷' || i == '%' || i == '^')
        {
          break;
        }  
      }
      if(i1 == code[n].length) code1 = code1 + ' + '  + code[n];
      else code1 = code1 + ' + ('  + code[n] + ')';
    }
  }
  else if(dropdown_math_add_type == '-')
  {
    for (var n = 0; n < this.itemCount_; n++) {
      var i1 = 0;
      for(var i of code[n])
      {
        i1++;
        if(i == '+' || i == '-' || i == '×' || i == '÷' || i == '%' || i == '^')
        {
          break;
        }  
      }
      if(i1 == code[n].length) code1 = code1 + ' - '  + code[n];
      else code1 = code1 + ' - ('  + code[n] + ')';
    }
  }
  else if(dropdown_math_add_type == '×')
  {
    for (var n = 0; n < this.itemCount_; n++) {
      var i1 = 0;
      for(var i of code[n])
      {
        i1++;
        if(i == '+' || i == '-' || i == '×' || i == '÷' || i == '%' || i == '^')
        {
          break;
        }  
      }
      if(i1 == code[n].length) code1 = code1 + ' × '  + code[n];
      else code1 = code1 + ' × ('  + code[n] + ')';
    }
  }
  else
  {
    for (var n = 0; n < this.itemCount_; n++) {
      var i1 = 0;
      for(var i of code[n])
      {
        i1++;
        if(i == '+' || i == '-' || i == '×' || i == '÷' || i == '%' || i == '^')
        {
          break;
        }  
      }
      if(i1 == code[n].length) code1 = code1 + ' ÷ '  + code[n];
      else code1 = code1 + ' ÷ ('  + code[n] + ')';
    }
  }
  code1 = '(' + code1.substring(3) + ')';
  //var code =''+varName+'['+size+"]"+'='+ '{' + code.join(', ') + '};\n';
  //Blockly.Arduino.setups_['setup_lists'+varName] = code;
  return [code1, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.math_operation = function() {
    var value_math_operation_output = Blockly.Arduino.valueToCode(this, 'math_operation_output', Blockly.Arduino.ORDER_ATOMIC);
    var value_math_operation_input = Blockly.Arduino.valueToCode(this, 'math_operation_input', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_math_operation_type = this.getFieldValue('math_operation_type');

  var code = '';
  if(value_math_operation_output=='' || value_math_operation_input == '')
  {
    code = '';
    this.setWarningText("缺少输入值，无法生成对应代码");
  }
  else
  {
    code = value_math_operation_output + ' ' + dropdown_math_operation_type + ' ' + value_math_operation_input + ';\n';
    this.setWarningText(null);
  }
  return code;
};

Blockly.Arduino.math_auto_add_minus = function() {
    var value_math_auto_add_minus_output = Blockly.Arduino.valueToCode(this, 'math_auto_add_minus_output', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_math_auto_add_minus_type = this.getFieldValue('math_auto_add_minus_type');

  var code = '';
  if(value_math_auto_add_minus_output == '')
  {
    code = '';
    this.setWarningText("缺少输入值，无法生成对应代码");
  }
  else
  {
    code = value_math_auto_add_minus_output + dropdown_math_auto_add_minus_type + ';\n';
    this.setWarningText(null);
  }
  return code;
};

Blockly.Arduino.math_operation_1 = function() {
    var value_math_operation_output = Blockly.Arduino.valueToCode(this, 'math_operation_output', Blockly.Arduino.ORDER_ATOMIC);
    var value_math_operation_input = Blockly.Arduino.valueToCode(this, 'math_operation_input', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_math_operation_type = this.getFieldValue('math_operation_type');

  var code = '';
  if(value_math_operation_output=='' || value_math_operation_input == '')
  {
    code = '';
    this.setWarningText("缺少输入值，无法生成对应代码");
  }
  else
  {
    code = value_math_operation_output + ' ' + dropdown_math_operation_type + ' ' + value_math_operation_input + '';
    this.setWarningText(null);
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.math_auto_add_minus_1 = function() {
    var value_math_auto_add_minus_output = Blockly.Arduino.valueToCode(this, 'math_auto_add_minus_output', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_math_auto_add_minus_type = this.getFieldValue('math_auto_add_minus_type');

  var code = '';
  if(value_math_auto_add_minus_output == '')
  {
    code = '';
    this.setWarningText("缺少输入值，无法生成对应代码");
  }
  else
  {
    code = value_math_auto_add_minus_output + dropdown_math_auto_add_minus_type + '';
    this.setWarningText(null);
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.math_map_float = function() {
  this.setTooltip(
   "将一个小数从第一个区间映射到第二个区间，并返回映射之后的值，返回数据的类型为float"
    );

    var value_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
    var value_in_min = Blockly.Arduino.valueToCode(this, 'in_min', Blockly.Arduino.ORDER_ATOMIC);
    var value_in_max = Blockly.Arduino.valueToCode(this, 'in_max', Blockly.Arduino.ORDER_ATOMIC);
    var value_out_min = Blockly.Arduino.valueToCode(this, 'out_min', Blockly.Arduino.ORDER_ATOMIC);
    var value_out_max = Blockly.Arduino.valueToCode(this, 'out_max', Blockly.Arduino.ORDER_ATOMIC);

  if(value_x == '') value_x = '10.00';

  Blockly.Arduino.definitions_['function_map_float'] = 'float mapfloat(float x, float in_min, float in_max, float out_min, float out_max)'
                                                  +'\n{'
                                                  +'\n  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;'
                                                  +'\n}'
  var code = 'mapfloat('+value_x+', '+value_in_min+', '+value_in_max+', '+value_out_min+', '+value_out_max+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.math_matrix = function() {
  var Tooltip_data = "";
  Tooltip_data = "一个矩阵与另一个矩阵进行加、减、乘运算";

    var value_output_matrix = Blockly.Arduino.valueToCode(this, 'output_matrix', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1 = Blockly.Arduino.valueToCode(this, 'input_matrix_1', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_x = Blockly.Arduino.valueToCode(this, 'input_matrix_1_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_y = Blockly.Arduino.valueToCode(this, 'input_matrix_1_y', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_math_matrix_type = this.getFieldValue('math_matrix_type');
    var value_input_matrix_2 = Blockly.Arduino.valueToCode(this, 'input_matrix_2', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_2_x = Blockly.Arduino.valueToCode(this, 'input_matrix_2_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_2_y = Blockly.Arduino.valueToCode(this, 'input_matrix_2_y', Blockly.Arduino.ORDER_ATOMIC);
    if(dropdown_math_matrix_type == '+')
    {
      if (value_input_matrix_1_x == value_input_matrix_2_x && value_input_matrix_1_y == value_input_matrix_2_y) {
        this.setTooltip(
          Tooltip_data+"\n"
         +value_output_matrix+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"] = "
        +value_input_matrix_1+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"] + "
        +value_input_matrix_2+"["+value_input_matrix_2_x+"]["+value_input_matrix_2_y+"];"
          );
      } else {
        this.setTooltip(
          Tooltip_data+"\n"
         +"输入参数错误!"
          );
      }
    }
    else if(dropdown_math_matrix_type == '-')
    {
      if (value_input_matrix_1_x == value_input_matrix_2_x && value_input_matrix_1_y == value_input_matrix_2_y) {
        this.setTooltip(
          Tooltip_data+"\n"
         +value_output_matrix+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"] = "
        +value_input_matrix_1+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"] - "
        +value_input_matrix_2+"["+value_input_matrix_2_x+"]["+value_input_matrix_2_y+"];"
          );
      } else {
        this.setTooltip(
          Tooltip_data+"\n"
         +"输入参数错误!"
          );
      }
    }
    else
    {
      if (value_input_matrix_1_y == value_input_matrix_2_x) {
        this.setTooltip(
          Tooltip_data+"\n"
         +value_output_matrix+"["+value_input_matrix_1_x+"]["+value_input_matrix_2_y+"] = "
        +value_input_matrix_1+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"] × "
        +value_input_matrix_2+"["+value_input_matrix_2_x+"]["+value_input_matrix_2_y+"];"
          );
      }
      else {
        this.setTooltip(
          Tooltip_data+"\n"
         +"输入参数错误!"
          );
      }
    }

  Blockly.Arduino.definitions_['include_MatrixMath'] = '#include <MatrixMath.h>';

  var code = '';
  if(dropdown_math_matrix_type == '+')
  {
    if (value_input_matrix_1_x == value_input_matrix_2_x && value_input_matrix_1_y == value_input_matrix_2_y) {
      this.setWarningText(null);
      code = 'Matrix.Add((float*)'+value_input_matrix_1+', (float*) '+value_input_matrix_2+', '+value_input_matrix_1_x+', '+value_input_matrix_1_y+', (float*) '+value_output_matrix+');\n';
    } else {
      code = '';
      this.setWarningText("由于矩阵"+value_input_matrix_1+"的行列值不等于矩阵"+value_input_matrix_2+"的行列值,所以无法生成代码;请修改输入值");
    }
  }
  else if(dropdown_math_matrix_type == '-')
  {
    if (value_input_matrix_1_x == value_input_matrix_2_x && value_input_matrix_1_y == value_input_matrix_2_y) {
      this.setWarningText(null);
      code = 'Matrix.Subtract((float*)'+value_input_matrix_1+', (float*) '+value_input_matrix_2+', '+value_input_matrix_1_x+', '+value_input_matrix_1_y+', (float*) '+value_output_matrix+');\n';
    } else {
      code = '';
      this.setWarningText("由于矩阵"+value_input_matrix_1+"的行列值不等于矩阵"+value_input_matrix_2+"的行列值,所以无法生成代码;请修改输入值");
    }
  }
  else
  {
    if (value_input_matrix_1_y == value_input_matrix_2_x) {
      this.setWarningText(null);
      code = 'Matrix.Multiply((float*)'+value_input_matrix_1+', (float*) '+value_input_matrix_2+', '+value_input_matrix_1_x+', '+value_input_matrix_1_y+', '+value_input_matrix_2_y+', (float*) '+value_output_matrix+');\n';
    }
    else {
      code = '';
      this.setWarningText("由于矩阵"+value_input_matrix_1+"的列值不等于矩阵"+value_input_matrix_2+"的行值,所以无法生成代码;请修改输入值");
    }
  }
  
  return code;
};

Blockly.Arduino.math_matrix_Scale = function() {
    var value_input_matrix_1 = Blockly.Arduino.valueToCode(this, 'input_matrix_1', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_x = Blockly.Arduino.valueToCode(this, 'input_matrix_1_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_y = Blockly.Arduino.valueToCode(this, 'input_matrix_1_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_data = Blockly.Arduino.valueToCode(this, 'input_matrix_data', Blockly.Arduino.ORDER_ATOMIC);

  var Tooltip_data = "";
  Tooltip_data = "矩阵与一个数做乘法运算\n";

  this.setTooltip(
    Tooltip_data
   +value_input_matrix_1+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"] = "
   +value_input_matrix_1+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"] × "
   +value_input_matrix_data+";"
  );

  Blockly.Arduino.definitions_['include_MatrixMath'] = '#include <MatrixMath.h>';

  var code = 'Matrix.Scale((float*) '+value_input_matrix_1+', '+value_input_matrix_1_x+', '+value_input_matrix_1_y+', '+value_input_matrix_data+');\n';
  return code;
};

Blockly.Arduino.math_matrix_copy = function() {
    var value_output_matrix = Blockly.Arduino.valueToCode(this, 'output_matrix', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1 = Blockly.Arduino.valueToCode(this, 'input_matrix_1', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_x = Blockly.Arduino.valueToCode(this, 'input_matrix_1_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_y = Blockly.Arduino.valueToCode(this, 'input_matrix_1_y', Blockly.Arduino.ORDER_ATOMIC);

  var Tooltip_data = "";
  Tooltip_data = "将一个矩阵中的数据拷贝到另一个矩阵\n";
  this.setTooltip(
    Tooltip_data
   +value_output_matrix+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"] = "
   +value_input_matrix_1+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"];"
  );

  Blockly.Arduino.definitions_['include_MatrixMath'] = '#include <MatrixMath.h>';

  var code = 'Matrix.Copy((float*)'+value_input_matrix_1+', '+value_input_matrix_1_x+', '+value_input_matrix_1_y+', (float*)'+value_output_matrix+');\n';
  return code;
};

Blockly.Arduino.math_matrix_Transpose = function() {
    var value_output_matrix = Blockly.Arduino.valueToCode(this, 'output_matrix', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1 = Blockly.Arduino.valueToCode(this, 'input_matrix_1', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_x = Blockly.Arduino.valueToCode(this, 'input_matrix_1_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_y = Blockly.Arduino.valueToCode(this, 'input_matrix_1_y', Blockly.Arduino.ORDER_ATOMIC);

  var Tooltip_data = "";
  Tooltip_data = "将一个矩阵转置后赋值给另一个矩阵\n";
  this.setTooltip(
    Tooltip_data
   +value_output_matrix+"["+value_input_matrix_1_y+"]["+value_input_matrix_1_x+"] = "
   +value_input_matrix_1+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"]的转置;"
  );

  Blockly.Arduino.definitions_['include_MatrixMath'] = '#include <MatrixMath.h>';

  var code = 'Matrix.Transpose((float*) '+value_input_matrix_1+', '+value_input_matrix_1_x+', '+value_input_matrix_1_y+', (float*) '+value_output_matrix+');\n';
  return code;
};

Blockly.Arduino.math_matrix_Invert = function() {
    var value_input_matrix_1 = Blockly.Arduino.valueToCode(this, 'input_matrix_1', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_x = Blockly.Arduino.valueToCode(this, 'input_matrix_1_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_y = Blockly.Arduino.valueToCode(this, 'input_matrix_1_y', Blockly.Arduino.ORDER_ATOMIC);

  var Tooltip_data = "";
  Tooltip_data = "求一个矩阵的逆矩阵\n";
  this.setTooltip(
    Tooltip_data
   +value_input_matrix_1+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"] = "
   +value_input_matrix_1+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"]^(-1);"
  );

  Blockly.Arduino.definitions_['include_MatrixMath'] = '#include <MatrixMath.h>';

  if (value_input_matrix_1_y == value_input_matrix_1_x) {
    this.setWarningText(null);
    var code = 'Matrix.Invert((float*)'+value_input_matrix_1+', '+value_input_matrix_1_x+');\n';
  }
  else {
    var code = '';
    this.setWarningText("由于矩阵"+value_input_matrix_1+"的行值不等于其列值,所以无法生成代码;请修改输入值");
  }
  return code;
};

Blockly.Arduino.math_matrix_Invert_change_2020_01_15 = function() {
    var value_input_matrix_1 = Blockly.Arduino.valueToCode(this, 'input_matrix_1', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_x = Blockly.Arduino.valueToCode(this, 'input_matrix_1_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_y = Blockly.Arduino.valueToCode(this, 'input_matrix_1_y', Blockly.Arduino.ORDER_ATOMIC);

  var Tooltip_data = "";
  Tooltip_data = "求一个矩阵的逆矩阵，返回数据的类型为int\n";
  this.setTooltip(
    Tooltip_data
   +value_input_matrix_1+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"] = "
   +value_input_matrix_1+"["+value_input_matrix_1_x+"]["+value_input_matrix_1_y+"]^(-1);"
  );

  Blockly.Arduino.definitions_['include_MatrixMath'] = '#include <MatrixMath.h>';

  if (value_input_matrix_1_y == value_input_matrix_1_x) {
    this.setWarningText(null);
    var code = 'Matrix.Invert((float*)'+value_input_matrix_1+', '+value_input_matrix_1_x+')';
  }
  else {
    var code = '';
    this.setWarningText("由于矩阵"+value_input_matrix_1+"的行值不等于其列值,所以无法生成代码;请修改输入值");
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.math_matrix_Print = function() {
  this.setTooltip(
  "串口打印某个矩阵中的数据"
 );

    var value_matrix_Print_data = Blockly.Arduino.valueToCode(this, 'matrix_Print_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1 = Blockly.Arduino.valueToCode(this, 'input_matrix_1', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_x = Blockly.Arduino.valueToCode(this, 'input_matrix_1_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_input_matrix_1_y = Blockly.Arduino.valueToCode(this, 'input_matrix_1_y', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_MatrixMath'] = '#include <MatrixMath.h>';

  var code = 'Matrix.Print((float*)'+value_input_matrix_1+', '+value_input_matrix_1_x+', '+value_input_matrix_1_y+', '+value_matrix_Print_data+');\n';
  return code;
};

Blockly.Arduino.link_text = function() {
  // Create a list with any number of elements of any type.
  var code = new Array(this.itemCount_);
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.Arduino.valueToCode(this, 'ADD' + n,
        Blockly.Arduino.ORDER_NONE) || '0';
  }
  var code1 = '';
  for (var n = 0; n < this.itemCount_; n++) {
    code1 = code1 + ' + ' + 'String(' + code[n] + ')';
  }
  code1 = code1.substring(3);
  //var code =''+varName+'['+size+"]"+'='+ '{' + code.join(', ') + '};\n';
  //Blockly.Arduino.setups_['setup_lists'+varName] = code;
  return [code1, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.text_equalsIgnoreCase = function() {
    var value_text_equalsIgnoreCase_str1 = Blockly.Arduino.valueToCode(this, 'text_equalsIgnoreCase_str1', Blockly.Arduino.ORDER_ATOMIC);
    var value_text_equalsIgnoreCase_str2 = Blockly.Arduino.valueToCode(this, 'text_equalsIgnoreCase_str2', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'String('+value_text_equalsIgnoreCase_str1+').equalsIgnoreCase(String('+value_text_equalsIgnoreCase_str2+'))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.text_indexOf = function() {
    var value_text_indexOf_input_str1 = Blockly.Arduino.valueToCode(this, 'text_indexOf_input_str1', Blockly.Arduino.ORDER_ATOMIC);
    var value_text_indexOf_input_str2 = Blockly.Arduino.valueToCode(this, 'text_indexOf_input_str2', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'String('+value_text_indexOf_input_str1+').indexOf(String('+value_text_indexOf_input_str2+'))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.text_indexOf_1 = function() {
    var value_text_indexOf_input_str1 = Blockly.Arduino.valueToCode(this, 'text_indexOf_input_str1', Blockly.Arduino.ORDER_ATOMIC);
    var value_text_indexOf_limit = Blockly.Arduino.valueToCode(this, 'text_indexOf_limit', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_text_indexOf_1_type = this.getFieldValue('text_indexOf_1_type');
    var value_text_indexOf_input_str2 = Blockly.Arduino.valueToCode(this, 'text_indexOf_input_str2', Blockly.Arduino.ORDER_ATOMIC);
  if(dropdown_text_indexOf_1_type == 'ahead')
    var code = 'String('+value_text_indexOf_input_str1+').indexOf(String('+value_text_indexOf_input_str2+'), '+value_text_indexOf_limit+')';
  else
    var code = 'String('+value_text_indexOf_input_str1+').lastIndexOf(String('+value_text_indexOf_input_str2+'), '+value_text_indexOf_limit+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.text_setCharAt = function() {
    var value_text_setCharAt_input_data = Blockly.Arduino.valueToCode(this, 'text_setCharAt_input_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_text_setCharAt_find_data = Blockly.Arduino.valueToCode(this, 'text_setCharAt_find_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_text_setCharAt_replace_data = Blockly.Arduino.valueToCode(this, 'text_setCharAt_replace_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'String('+value_text_setCharAt_input_data+').setCharAt('+value_text_setCharAt_find_data+', '+value_text_setCharAt_replace_data+');\n';
  return code;
};

Blockly.Arduino.text_toCharArray = function() {
    var value_text_toCharArray_input_data = Blockly.Arduino.valueToCode(this, 'text_toCharArray_input_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_text_toCharArray_get_data = Blockly.Arduino.valueToCode(this, 'text_toCharArray_get_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_text_toCharArray_output_data = Blockly.Arduino.valueToCode(this, 'text_toCharArray_output_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_text_toCharArray_get_data1 = myAtoi(value_text_toCharArray_get_data) + 1;
  var code = 'String('+value_text_toCharArray_input_data+').toCharArray('+value_text_toCharArray_output_data+', '+value_text_toCharArray_get_data1+');\n';
  return code;
};

Blockly.Arduino.text_substring_1 = function() {
    var value_text_substring_input = Blockly.Arduino.valueToCode(this, 'text_substring_input', Blockly.Arduino.ORDER_ATOMIC);
    var value_text_substring_select = Blockly.Arduino.valueToCode(this, 'text_substring_select', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'String('+value_text_substring_input+').substring('+value_text_substring_select+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_Split_string = function() {
    var value_Split_string_data = Blockly.Arduino.valueToCode(this, 'Split_string_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_Split_string_char = Blockly.Arduino.valueToCode(this, 'Split_string_char', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_Split_string_front = this.getFieldValue('Split_string_front');

  Blockly.Arduino.definitions_['function_Split_string'] = 'String Split_string(String String2, char Split_char, boolean Front) {'
                                                      + '\n  String Cecha="";'
                                                      + '\n  int accumulation=0;'
                                                      + '\n  for (int i = 0; i <= (String(String2).length() - 1); i = i + 1) {'
                                                      + '\n    if (String(String2).charAt(i) == Split_char) {'
                                                      + '\n      accumulation = i;'
                                                      + '\n      break;'
                                                      + '\n    }'
                                                      + '\n  }'
                                                      + '\n  if (Front == true) {'
                                                      + '\n    for (int i = 0; i <= (accumulation - 1); i = i + 1) {'
                                                      + '\n      Cecha = String(Cecha) + String(String(String2).charAt(i));'
                                                      + '\n    }'
                                                      + '\n  } else {'
                                                      + '\n    for (int i = (accumulation + 1); i <= (String(String2).length()); i = i + 1) {'
                                                      + '\n      Cecha = String(Cecha) + String(String(String2).charAt(i));'
                                                      + '\n    }'
                                                      + '\n  }'
                                                      + '\n  return Cecha;'
                                                      + '\n}';
  
  var code = 'Split_string('+value_Split_string_data+', '+value_Split_string_char+', '+dropdown_Split_string_front+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_String_Left = function() {
    var value_String_Left_data = Blockly.Arduino.valueToCode(this, 'String_Left_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_String_Left_char = Blockly.Arduino.valueToCode(this, 'String_Left_char', Blockly.Arduino.ORDER_ATOMIC);

  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_i2c_begin_master = function() {
  this.setTooltip(
  "初始化Wire库，并以Master(主机)的形式加入到I2C网络，只能调用一次"
  );

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();';
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_i2c_begin_slave = function() {
  this.setTooltip(
  "初始化Wire库，并以Slaver(从机)的形式加入到I2C网络，只能调用一次"
  );

    var value_i2c_address = Blockly.Arduino.valueToCode(this, 'i2c_address', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin('+value_i2c_address+');';
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_i2c_begin_end_transmission = function() {
  this.setTooltip(
  "I2C发送数据"
  );

    var value_i2c_address = Blockly.Arduino.valueToCode(this, 'i2c_address', Blockly.Arduino.ORDER_ATOMIC);
    var statements_transmission_data = Blockly.Arduino.statementToCode(this, 'transmission_data');
  var code = 'Wire.beginTransmission('+value_i2c_address+');\n'
            + statements_transmission_data 
            + 'Wire.endTransmission();\n';
  return code;
};

Blockly.Arduino.make_arduino_i2c_begin_transmission = function() {
  this.setTooltip(
  "I2C开启数据发送，发送一个I2C开始字符"
  );

    var value_i2c_address = Blockly.Arduino.valueToCode(this, 'i2c_address', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Wire.beginTransmission('+value_i2c_address+');\n';
  return code;
};

Blockly.Arduino.make_arduino_i2c_write = function() {
  this.setTooltip(
  "I2C发送数据"
  );

    var value_i2c_write_data = Blockly.Arduino.valueToCode(this, 'i2c_write_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Wire.write('+value_i2c_write_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_i2c_end_transmission_1 = function() {
  this.setTooltip(
  "结束一个由beginTransmission()开始的并且由write()排列的从机的传输"
  );
  
  var code = 'Wire.endTransmission();\n';
  return code;
};

Blockly.Arduino.make_arduino_i2c_end_transmission = function() {
  this.setTooltip(
  "结束一个由beginTransmission()开始的并且由write()排列的从机的传输"
  );
 
  var code = 'Wire.endTransmission()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_i2c_onReceive = function() {
  this.setTooltip(
  "从机接收到主机发来的数据时，执行此事件"
  );
  
    var value_onReceive_length = Blockly.Arduino.valueToCode(this, 'onReceive_length', Blockly.Arduino.ORDER_ATOMIC);
    var statements_i2c_onReceive_data = Blockly.Arduino.statementToCode(this, 'i2c_onReceive_data');  

  Blockly.Arduino.definitions_['function_receiveEvent'] = 'void receiveEvent(int '+value_onReceive_length+')'
                                                       +'\n{'
                                                       +'  '+statements_i2c_onReceive_data
                                                       +'\n}\n'
  Blockly.Arduino.setups_['setup_i2c_receiveEvent'] = 'Wire.onReceive(receiveEvent);';
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_i2c_available = function() {
  this.setTooltip(
  "用于统计主机读取从机发来数据时read缓冲区剩余的字节数"
  );

  var code = 'Wire.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_i2c_read = function() {
  this.setTooltip(
  "用于在主机收到从机发来数据时，读取缓存区的数据"
  );

  var code = 'Wire.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_i2c_requestFrom = function() {
  this.setTooltip(
  "I2C主机请求从机一些字节的数据，这些字节可以被主机用read()或available()接收"
  );
  
    var value_i2c_address = Blockly.Arduino.valueToCode(this, 'i2c_address', Blockly.Arduino.ORDER_ATOMIC);
    var value_data_length = Blockly.Arduino.valueToCode(this, 'data_length', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Wire.requestFrom('+value_i2c_address+', '+value_data_length+');\n';
  return code;
};

Blockly.Arduino.make_arduino_i2c_onRequest = function() {
  this.setTooltip(
  "当I2C从机收到主机的数据请求时，执行此事件"
  );
  
    var statements_i2c_onRequest_data = Blockly.Arduino.statementToCode(this, 'i2c_onRequest_data'); 

  Blockly.Arduino.definitions_['function_requestEvent'] = 'void requestEvent()'
                                                       +'\n{'
                                                       +'  '+statements_i2c_onRequest_data
                                                       +'\n}\n'
  Blockly.Arduino.setups_['setup_i2c_requestEvent'] = 'Wire.onRequest(requestEvent);'; 
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_spi_begin_master = function() {
    var dropdown_spi_begin_divider = this.getFieldValue('spi_begin_divider');
    var value_spi_slave_pin = Blockly.Arduino.valueToCode(this, 'spi_slave_pin', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';

  Blockly.Arduino.setups_['setup_spi'] = 'SPI.begin();';
  Blockly.Arduino.setups_['setup_spi_divider'] = 'SPI.setClockDivider(SPI_CLOCK_DIV'+dropdown_spi_begin_divider+');';
  Blockly.Arduino.setups_['setup_spi_pin_'+value_spi_slave_pin] = 'digitalWrite('+value_spi_slave_pin+', HIGH);';
                                      
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_spi_begin_slave = function() {
  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.setups_['setup_spi'] = 'pinMode(12, OUTPUT);'
                                      +'\n  SPCR |= _BV(SPE);';
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_spi_transfer = function() {
    var value_slave_pin = Blockly.Arduino.valueToCode(this, 'slave_pin', Blockly.Arduino.ORDER_ATOMIC);
    var statements_transfer_data = Blockly.Arduino.statementToCode(this, 'transfer_data');
  var code = 'digitalWrite('+value_slave_pin+', LOW);\n'
            +statements_transfer_data
            +'digitalWrite('+value_slave_pin+', HIGH);\n';
  return code;
};

Blockly.Arduino.make_arduino_spi_transfer_1 = function() {
    var value_transfer_data = Blockly.Arduino.valueToCode(this, 'transfer_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'SPI.transfer('+value_transfer_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_spi_transfer_2 = function() {
    var value_transfer_data = Blockly.Arduino.valueToCode(this, 'transfer_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'SPI.transfer('+value_transfer_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_spi_slave_interrupt = function() {
    var value_slave_interrupt_input = Blockly.Arduino.valueToCode(this, 'slave_interrupt_input', Blockly.Arduino.ORDER_ATOMIC);
    var statements_slave_interrupt_data = Blockly.Arduino.statementToCode(this, 'slave_interrupt_data'); 
  Blockly.Arduino.definitions_['function_ISR'] = 'ISR(SPI_STC_vect)'
                                              +'\n{'
                                              +'\n'+statements_slave_interrupt_data
                                              +'\n}\n'
  Blockly.Arduino.setups_['setup_spi_interrupt'] = 'SPI.attachInterrupt();'; 
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_spi_slave_receive = function() {
    var value_slave_receive_data = Blockly.Arduino.valueToCode(this, 'slave_receive_data', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['function_SPI_SlaveReceive'] = 'char SPI_SlaveReceive()'
                                              +'\n{'
                                              +'\n  while(!(SPSR&(1<<SPIF)));'
                                              +'\n  return SPDR;'
                                              +'\n}\n'
  var code = 'SPI_SlaveReceive()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//模拟鼠标开启或关闭
Blockly.Arduino.make_arduino_mouse_begin_end = function() {
  this.setTooltip("USB鼠标模拟开启或关闭");

    var dropdown_type = this.getFieldValue('type');
  Blockly.Arduino.definitions_['include_Mouse'] = '#include "Mouse.h"';
  var code = 'Mouse.'+dropdown_type+'();\n';
  return code;
};

//操作鼠标，单击、按下、释放鼠标按键
Blockly.Arduino.make_arduino_mouse_click = function() {
  this.setTooltip(
   "操作鼠标，单击、按下、释放鼠标按键"
    );    
  
    var value_click_location = Blockly.Arduino.valueToCode(this, 'click_location', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_click_type = this.getFieldValue('click_type');
  var code = 'Mouse.'+dropdown_click_type+'('+value_click_location+');\n';
  return code;
};

//定义鼠标按键
Blockly.Arduino.make_arduino_mouse_click_location = function() {
    var dropdown_location_type = this.getFieldValue('location_type');
  var code = dropdown_location_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//移动鼠标
Blockly.Arduino.make_arduino_mouse_move = function() {
  this.setTooltip(
   "移动鼠标"
    );

    var value_move_x = Blockly.Arduino.valueToCode(this, 'move_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_move_y = Blockly.Arduino.valueToCode(this, 'move_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_move_wheel = Blockly.Arduino.valueToCode(this, 'move_wheel', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Mouse.move('+value_move_x+', '+value_move_y+', '+value_move_wheel+');\n';
  return code;
};

//检测鼠标按键是否被按下
Blockly.Arduino.make_arduino_mouse_isPressed = function() {
  this.setTooltip("检测鼠标某个按键是否被按下，返回数据的类型为boolean");

    var value_type = Blockly.Arduino.valueToCode(this, 'type', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Mouse.isPressed('+value_type+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//键盘模拟开启或关闭
Blockly.Arduino.make_arduino_keyboard_begin_end = function() {
  this.setTooltip("USB键盘模拟开启或关闭");

    var dropdown_type = this.getFieldValue('type');
  Blockly.Arduino.definitions_['include_Keyboard'] = '#include "Keyboard.h"';
  var code = 'Keyboard.'+dropdown_type+'();\n';
  return code;
};

//定义键盘的按键类型
Blockly.Arduino.make_arduino_keyboard_key = function() {
    var dropdown_key_type = this.getFieldValue('key_type');
  var code = dropdown_key_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//操作键盘，按下或释放某个按键
Blockly.Arduino.make_arduino_keyboard_press = function() {
  this.setTooltip("操作键盘，按下或释放某个按键");

    var value_key = Blockly.Arduino.valueToCode(this, 'key', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_type = this.getFieldValue('type');
  var code = 'Keyboard.'+dropdown_type+'('+value_key+');\n';
  return code;
};

Blockly.Arduino.make_arduino_keyboard_press_return = function() {
  this.setTooltip("操作键盘，按下或释放某个按键，返回数据的类型为size_t(2字节)");

    var value_key = Blockly.Arduino.valueToCode(this, 'key', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_type = this.getFieldValue('type');
  var code = 'Keyboard.'+dropdown_type+'('+value_key+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//操作键盘，释放键盘上所有按键
Blockly.Arduino.make_arduino_keyboard_releaseAll = function() {
  this.setTooltip("操作键盘，释放键盘上所有按键");
  
  var code = 'Keyboard.releaseAll();\n';
  return code;
};

//键盘向电脑发送字符
Blockly.Arduino.make_arduino_keyboard_write = function() {
  this.setTooltip("键盘向电脑发送字符");
  
    var value_write_data = Blockly.Arduino.valueToCode(this, 'write_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Keyboard.write('+value_write_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_keyboard_write_return = function() {
  this.setTooltip("键盘向电脑发送字符，返回数据的类型为size_t(2字节)");
  
    var value_write_data = Blockly.Arduino.valueToCode(this, 'write_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Keyboard.write('+value_write_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//键盘向电脑发送字符串
Blockly.Arduino.make_arduino_keyboard_print = function() {
  this.setTooltip("键盘向电脑发送字符串");
  
    var value_print_data = Blockly.Arduino.valueToCode(this, 'print_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_print_type = this.getFieldValue('print_type');
  var code = 'Keyboard.'+dropdown_print_type+'('+value_print_data+');\n';
  return code;
};

Blockly.Arduino.keypad_1_4_start = function() {
  var text_keypad_1_4_name = this.getFieldValue('keypad_1_4_name');
  var text_keypad_1_4_1_1 = this.getFieldValue('keypad_1_4_1_1');
  var text_keypad_1_4_1_2 = this.getFieldValue('keypad_1_4_1_2');
  var text_keypad_1_4_1_3 = this.getFieldValue('keypad_1_4_1_3');
  var text_keypad_1_4_1_4 = this.getFieldValue('keypad_1_4_1_4');

  Blockly.Arduino.definitions_['include_Keypad'] = '#include <Keypad.h>';
  Blockly.Arduino.definitions_['var_declare_keypadstart1' + text_keypad_1_4_name] = 'const byte '+text_keypad_1_4_name+'ROWS = 1;';
  Blockly.Arduino.definitions_['var_declare_keypadstart2' + text_keypad_1_4_name] = 'const byte '+text_keypad_1_4_name+'COLS = 4;';

  Blockly.Arduino.definitions_['var_declare_keypad' + text_keypad_1_4_name] = 'char '+text_keypad_1_4_name+'hexaKeys['+text_keypad_1_4_name+'ROWS]['+text_keypad_1_4_name+'COLS] = {';
  Blockly.Arduino.definitions_['var_declare_keypada' + text_keypad_1_4_name] = '  {\''+text_keypad_1_4_1_1+'\',\''+text_keypad_1_4_1_2+'\',\''+text_keypad_1_4_1_3+'\',\''+text_keypad_1_4_1_4+'\'}';
  Blockly.Arduino.definitions_['var_declare_keypade' + text_keypad_1_4_name] = '};';

  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';

  var code = '';
  return code;
};

Blockly.Arduino.keypad_4_3_start = function() {
  var text_keypad_4_3_name = this.getFieldValue('keypad_4_3_name');
  var text_keypad_4_3_1_1 = this.getFieldValue('keypad_4_3_1_1');
  var text_keypad_4_3_1_2 = this.getFieldValue('keypad_4_3_1_2');
  var text_keypad_4_3_1_3 = this.getFieldValue('keypad_4_3_1_3');
  var text_keypad_4_3_2_1 = this.getFieldValue('keypad_4_3_2_1');
  var text_keypad_4_3_2_2 = this.getFieldValue('keypad_4_3_2_2');
  var text_keypad_4_3_2_3 = this.getFieldValue('keypad_4_3_2_3');
  var text_keypad_4_3_3_1 = this.getFieldValue('keypad_4_3_3_1');
  var text_keypad_4_3_3_2 = this.getFieldValue('keypad_4_3_3_2');
  var text_keypad_4_3_3_3 = this.getFieldValue('keypad_4_3_3_3');
  var text_keypad_4_3_4_1 = this.getFieldValue('keypad_4_3_4_1');
  var text_keypad_4_3_4_2 = this.getFieldValue('keypad_4_3_4_2');
  var text_keypad_4_3_4_3 = this.getFieldValue('keypad_4_3_4_3');

  Blockly.Arduino.definitions_['include_Keypad'] = '#include <Keypad.h>';
  Blockly.Arduino.definitions_['var_declare_keypadstart1' + text_keypad_4_3_name] = 'const byte '+text_keypad_4_3_name+'ROWS = 4;';
  Blockly.Arduino.definitions_['var_declare_keypadstart2' + text_keypad_4_3_name] = 'const byte '+text_keypad_4_3_name+'COLS = 3;';

  Blockly.Arduino.definitions_['var_declare_keypad' + text_keypad_4_3_name] = 'char '+text_keypad_4_3_name+'hexaKeys['+text_keypad_4_3_name+'ROWS]['+text_keypad_4_3_name+'COLS] = {';
  Blockly.Arduino.definitions_['var_declare_keypada' + text_keypad_4_3_name] = '  {\''+text_keypad_4_3_1_1+'\',\''+text_keypad_4_3_1_2+'\',\''+text_keypad_4_3_1_3+'\'},';
  Blockly.Arduino.definitions_['var_declare_keypadb' + text_keypad_4_3_name] = '  {\''+text_keypad_4_3_2_1+'\',\''+text_keypad_4_3_2_2+'\',\''+text_keypad_4_3_2_3+'\'},';
  Blockly.Arduino.definitions_['var_declare_keypadc' + text_keypad_4_3_name] = '  {\''+text_keypad_4_3_3_1+'\',\''+text_keypad_4_3_3_2+'\',\''+text_keypad_4_3_3_3+'\'},';
  Blockly.Arduino.definitions_['var_declare_keypadd' + text_keypad_4_3_name] = '  {\''+text_keypad_4_3_4_1+'\',\''+text_keypad_4_3_4_2+'\',\''+text_keypad_4_3_4_3+'\'}';
  Blockly.Arduino.definitions_['var_declare_keypade' + text_keypad_4_3_name] = '};';

  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';

  var code = '';
  return code;
};


Blockly.Arduino.Arduino_keypad_4_4_start = function() {
  var text_keypad_name = this.getFieldValue('keypad_name');
  var text_keypad_row = Blockly.Arduino.valueToCode(this, 'keypad_row',Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_col = Blockly.Arduino.valueToCode(this, 'keypad_col',Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_type = Blockly.Arduino.valueToCode(this, 'keypad_type',Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Keypad'] = '#include <Keypad.h>';
  Blockly.Arduino.definitions_['var_declare_keypadstart1' + text_keypad_name] = 'const byte '+text_keypad_name+'_ROWS = 4;';
  Blockly.Arduino.definitions_['var_declare_keypadstart2' + text_keypad_name] = 'const byte '+text_keypad_name+'_COLS = 4;';

  Blockly.Arduino.definitions_['var_declare_keypadstart3' + text_keypad_name] = 'char '+text_keypad_name+'_hexaKeys['+text_keypad_name+'_ROWS]['+text_keypad_name+'_COLS] = {' + '\n' + text_keypad_type + '\n};';
  
  Blockly.Arduino.definitions_['var_declare_keypadstart4' + text_keypad_name] = 'byte '+text_keypad_name+'_rowPins['+text_keypad_name+'_ROWS] = '+text_keypad_row;
  Blockly.Arduino.definitions_['var_declare_keypadstart5' + text_keypad_name] = 'byte '+text_keypad_name+'_colPins['+text_keypad_name+'_COLS] = '+text_keypad_col;

  Blockly.Arduino.definitions_['var_declare_keypadstart6' + text_keypad_name] = 'Keypad '+text_keypad_name+' = Keypad( makeKeymap('+text_keypad_name+'_hexaKeys), '+text_keypad_name+'_rowPins, '+text_keypad_name+'_colPins, '+text_keypad_name+'_ROWS, '+text_keypad_name+'_COLS);';
  
  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';

  var code = '';
  return code;
};

Blockly.Arduino.keypad_row_data= function() {
  var pin_keypad_row_1 = Blockly.Arduino.valueToCode(this, 'keypad_row_1',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_row_2 = Blockly.Arduino.valueToCode(this, 'keypad_row_2',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_row_3 = Blockly.Arduino.valueToCode(this, 'keypad_row_3',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_row_4 = Blockly.Arduino.valueToCode(this, 'keypad_row_4',Blockly.Arduino.ORDER_ATOMIC);

  var code = '{'+pin_keypad_row_1+', '+pin_keypad_row_2+', '+pin_keypad_row_3+', '+pin_keypad_row_4+'};';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.keypad_col_data= function() {
  var pin_keypad_col_1 = Blockly.Arduino.valueToCode(this, 'keypad_col_1',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_col_2 = Blockly.Arduino.valueToCode(this, 'keypad_col_2',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_col_3 = Blockly.Arduino.valueToCode(this, 'keypad_col_3',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_col_4 = Blockly.Arduino.valueToCode(this, 'keypad_col_4',Blockly.Arduino.ORDER_ATOMIC);

  var code = '{'+pin_keypad_col_1+', '+pin_keypad_col_2+', '+pin_keypad_col_3+', '+pin_keypad_col_4+'};';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.keypad_type_data= function() {
  var text_keypad_1_1 = this.getFieldValue('keypad_1_1');
  var text_keypad_1_2 = this.getFieldValue('keypad_1_2');
  var text_keypad_1_3 = this.getFieldValue('keypad_1_3');
  var text_keypad_1_4 = this.getFieldValue('keypad_1_4');

  var text_keypad_2_1 = this.getFieldValue('keypad_2_1');
  var text_keypad_2_2 = this.getFieldValue('keypad_2_2');
  var text_keypad_2_3 = this.getFieldValue('keypad_2_3');
  var text_keypad_2_4 = this.getFieldValue('keypad_2_4');

  var text_keypad_3_1 = this.getFieldValue('keypad_3_1');
  var text_keypad_3_2 = this.getFieldValue('keypad_3_2');
  var text_keypad_3_3 = this.getFieldValue('keypad_3_3');
  var text_keypad_3_4 = this.getFieldValue('keypad_3_4');

  var text_keypad_4_1 = this.getFieldValue('keypad_4_1');
  var text_keypad_4_2 = this.getFieldValue('keypad_4_2');
  var text_keypad_4_3 = this.getFieldValue('keypad_4_3');
  var text_keypad_4_4 = this.getFieldValue('keypad_4_4');

  var code =   
     '  {\''+text_keypad_1_1+'\',\''+text_keypad_1_2+'\',\''+text_keypad_1_3+'\',\''+text_keypad_1_4+'\'},'+
   '\n  {\''+text_keypad_2_1+'\',\''+text_keypad_2_2+'\',\''+text_keypad_2_3+'\',\''+text_keypad_2_4+'\'},'+
   '\n  {\''+text_keypad_3_1+'\',\''+text_keypad_3_2+'\',\''+text_keypad_3_3+'\',\''+text_keypad_3_4+'\'},'+
   '\n  {\''+text_keypad_4_1+'\',\''+text_keypad_4_2+'\',\''+text_keypad_4_3+'\',\''+text_keypad_4_4+'\'}';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Arduino_keypad_4_3_start = function() {
  var text_keypad_name = this.getFieldValue('keypad_name');
  var text_keypad_row = Blockly.Arduino.valueToCode(this, 'keypad_row',Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_col = Blockly.Arduino.valueToCode(this, 'keypad_col',Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_type = Blockly.Arduino.valueToCode(this, 'keypad_type',Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Keypad'] = '#include <Keypad.h>';
  Blockly.Arduino.definitions_['var_declare_keypadstart1' + text_keypad_name] = 'const byte '+text_keypad_name+'_ROWS = 4;';
  Blockly.Arduino.definitions_['var_declare_keypadstart2' + text_keypad_name] = 'const byte '+text_keypad_name+'_COLS = 3;';

  Blockly.Arduino.definitions_['var_declare_keypadstart3' + text_keypad_name] = 'char '+text_keypad_name+'_hexaKeys['+text_keypad_name+'_ROWS]['+text_keypad_name+'_COLS] = {' + '\n' + text_keypad_type + '\n};';
  
  Blockly.Arduino.definitions_['var_declare_keypadstart4' + text_keypad_name] = 'byte '+text_keypad_name+'_rowPins['+text_keypad_name+'_ROWS] = '+text_keypad_row;
  Blockly.Arduino.definitions_['var_declare_keypadstart5' + text_keypad_name] = 'byte '+text_keypad_name+'_colPins['+text_keypad_name+'_COLS] = '+text_keypad_col;

  Blockly.Arduino.definitions_['var_declare_keypadstart6' + text_keypad_name] = 'Keypad '+text_keypad_name+' = Keypad( makeKeymap('+text_keypad_name+'_hexaKeys), '+text_keypad_name+'_rowPins, '+text_keypad_name+'_colPins, '+text_keypad_name+'_ROWS, '+text_keypad_name+'_COLS);';
  
  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';

  var code = '';
  return code;
};

Blockly.Arduino.keypad_4_3_row_data= function() {
  var pin_keypad_row_1 = Blockly.Arduino.valueToCode(this, 'keypad_row_1',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_row_2 = Blockly.Arduino.valueToCode(this, 'keypad_row_2',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_row_3 = Blockly.Arduino.valueToCode(this, 'keypad_row_3',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_row_4 = Blockly.Arduino.valueToCode(this, 'keypad_row_4',Blockly.Arduino.ORDER_ATOMIC);

  var code = '{'+pin_keypad_row_1+', '+pin_keypad_row_2+', '+pin_keypad_row_3+', '+pin_keypad_row_4+'};';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.keypad_4_3_col_data= function() {
  var pin_keypad_col_1 = Blockly.Arduino.valueToCode(this, 'keypad_col_1',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_col_2 = Blockly.Arduino.valueToCode(this, 'keypad_col_2',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_col_3 = Blockly.Arduino.valueToCode(this, 'keypad_col_3',Blockly.Arduino.ORDER_ATOMIC);

  var code = '{'+pin_keypad_col_1+', '+pin_keypad_col_2+', '+pin_keypad_col_3+'};';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.keypad_4_3_type_data= function() {
  var text_keypad_1_1 = this.getFieldValue('keypad_1_1');
  var text_keypad_1_2 = this.getFieldValue('keypad_1_2');
  var text_keypad_1_3 = this.getFieldValue('keypad_1_3');

  var text_keypad_2_1 = this.getFieldValue('keypad_2_1');
  var text_keypad_2_2 = this.getFieldValue('keypad_2_2');
  var text_keypad_2_3 = this.getFieldValue('keypad_2_3');

  var text_keypad_3_1 = this.getFieldValue('keypad_3_1');
  var text_keypad_3_2 = this.getFieldValue('keypad_3_2');
  var text_keypad_3_3 = this.getFieldValue('keypad_3_3');

  var text_keypad_4_1 = this.getFieldValue('keypad_4_1');
  var text_keypad_4_2 = this.getFieldValue('keypad_4_2');
  var text_keypad_4_3 = this.getFieldValue('keypad_4_3');

  var code =   
     '  {\''+text_keypad_1_1+'\',\''+text_keypad_1_2+'\',\''+text_keypad_1_3+'\'},'+
   '\n  {\''+text_keypad_2_1+'\',\''+text_keypad_2_2+'\',\''+text_keypad_2_3+'\'},'+
   '\n  {\''+text_keypad_3_1+'\',\''+text_keypad_3_2+'\',\''+text_keypad_3_3+'\'},'+
   '\n  {\''+text_keypad_4_1+'\',\''+text_keypad_4_2+'\',\''+text_keypad_4_3+'\'}';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Arduino_keypad_1_4_start = function() {
  var text_keypad_name = this.getFieldValue('keypad_name');
  var text_keypad_row = Blockly.Arduino.valueToCode(this, 'keypad_row',Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_col = Blockly.Arduino.valueToCode(this, 'keypad_col',Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_type = Blockly.Arduino.valueToCode(this, 'keypad_type',Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Keypad'] = '#include <Keypad.h>';
  Blockly.Arduino.definitions_['var_declare_keypadstart1' + text_keypad_name] = 'const byte '+text_keypad_name+'_ROWS = 1;';
  Blockly.Arduino.definitions_['var_declare_keypadstart2' + text_keypad_name] = 'const byte '+text_keypad_name+'_COLS = 4;';

  Blockly.Arduino.definitions_['var_declare_keypadstart3' + text_keypad_name] = 'char '+text_keypad_name+'_hexaKeys['+text_keypad_name+'_ROWS]['+text_keypad_name+'_COLS] = {' + '\n' + text_keypad_type + '\n};';
  
  Blockly.Arduino.definitions_['var_declare_keypadstart4' + text_keypad_name] = 'byte '+text_keypad_name+'_rowPins['+text_keypad_name+'_ROWS] = '+text_keypad_row;
  Blockly.Arduino.definitions_['var_declare_keypadstart5' + text_keypad_name] = 'byte '+text_keypad_name+'_colPins['+text_keypad_name+'_COLS] = '+text_keypad_col;

  Blockly.Arduino.definitions_['var_declare_keypadstart6' + text_keypad_name] = 'Keypad '+text_keypad_name+' = Keypad( makeKeymap('+text_keypad_name+'_hexaKeys), '+text_keypad_name+'_rowPins, '+text_keypad_name+'_colPins, '+text_keypad_name+'_ROWS, '+text_keypad_name+'_COLS);';
  
  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';

  var code = '';
  return code;
};

Blockly.Arduino.keypad_1_4_row_data= function() {
  var pin_keypad_row_1 = Blockly.Arduino.valueToCode(this, 'keypad_row_1',Blockly.Arduino.ORDER_ATOMIC);

  var code = '{'+pin_keypad_row_1+'};';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.keypad_1_4_col_data= function() {
  var pin_keypad_col_1 = Blockly.Arduino.valueToCode(this, 'keypad_col_1',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_col_2 = Blockly.Arduino.valueToCode(this, 'keypad_col_2',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_col_3 = Blockly.Arduino.valueToCode(this, 'keypad_col_3',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_col_4 = Blockly.Arduino.valueToCode(this, 'keypad_col_4',Blockly.Arduino.ORDER_ATOMIC);

  var code = '{'+pin_keypad_col_1+', '+pin_keypad_col_2+', '+pin_keypad_col_3+', '+pin_keypad_col_4+'};';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.keypad_1_4_type_data= function() {
  var text_keypad_1_1 = this.getFieldValue('keypad_1_1');
  var text_keypad_1_2 = this.getFieldValue('keypad_1_2');
  var text_keypad_1_3 = this.getFieldValue('keypad_1_3');
  var text_keypad_1_4 = this.getFieldValue('keypad_1_4');

  var code =   
     '  {\''+text_keypad_1_1+'\',\''+text_keypad_1_2+'\',\''+text_keypad_1_3+'\',\''+text_keypad_1_4+'\'}';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.keypad_n_n_type_data = function() {
    var text_keypad_row = this.getFieldValue('keypad_row');
    var text_keypad_col = this.getFieldValue('keypad_col');

     var data = new Array((text_keypad_row-0)*(text_keypad_col-0));
     for(var i = 1;i <= text_keypad_row-0;i++)
     {
      for(var j= 1;j <= text_keypad_col-0;j++)
      {
        data[(i-1)*(text_keypad_col-0) + j - 1] = this.getFieldValue('keypad_'+i+'_'+j);
      }
     }
     var code = '';
     for(var i = 1;i <= text_keypad_row-0;i++)
     {
      if(i == 1)
        code = code + '  {'
      else
        code = code + '\n  {'
      for(var j= 1;j <= text_keypad_col-0;j++)
      {
        if(j == text_keypad_col-0)
          code = code + '\'' + data[(i-1)*(text_keypad_col-0) + j - 1] + '\'';
        else
          code = code + '\'' + data[(i-1)*(text_keypad_col-0) + j - 1] + '\',';
      }
      if(i == text_keypad_row-0)
        code = code + '}'
      else
        code = code + '},'
     }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
Blockly.Arduino.keypad_n_n_row_col_data= function() {
  var num = this.getFieldValue('keypad_pin_num');
  var data = new Array(num-0);
  for(var i = 1;i <= num-0;i++)
    data[i] = Blockly.Arduino.valueToCode(this, 'keypad_row_col_' + i,Blockly.Arduino.ORDER_ATOMIC);
  var code = '' + num;
  for(var i = 1;i <= num-0;i++)
  {
    if(i == 1)
      code = code + '{' + data[i];
    else if(i == num-0)
      code = code + ',' + data[i] + '};';
    else
      code = code + ',' + data[i];
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
*/

Blockly.Arduino.keypad_n_n_start_1 = function() {
  var text_keypad_name = this.getFieldValue('keypad_name');
  var text_keypad_row = Blockly.Arduino.valueToCode(this, 'keypad_row',Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_col = Blockly.Arduino.valueToCode(this, 'keypad_col',Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_type = Blockly.Arduino.valueToCode(this, 'keypad_type',Blockly.Arduino.ORDER_ATOMIC);

  var keypad_n_n_row = '';
  var keypad_n_n_col = '';

  for(var i = 0;i < text_keypad_row.length;i++)
  {
    if(text_keypad_row.charAt(i) == ' ')
      continue;
    else if(text_keypad_row.charAt(i) == '{')
    {
      text_keypad_row = text_keypad_row.substring(i);
      break;
    }
    else
      keypad_n_n_row = keypad_n_n_row + text_keypad_row.charAt(i);
  }

  for(var i = 0;i < text_keypad_col.length;i++)
  {
    if(text_keypad_col.charAt(i) == ' ')
      continue;
    else if(text_keypad_col.charAt(i) == '{')
    {
      text_keypad_col = text_keypad_col.substring(i);
      break;
    }
    else
      keypad_n_n_col = keypad_n_n_col + text_keypad_col.charAt(i);
  }
  Blockly.Arduino.definitions_['include_Keypad'] = '#include <Keypad.h>';
  Blockly.Arduino.definitions_['var_declare_keypad_' + text_keypad_name] = 'const byte '+text_keypad_name+'_ROWS = '+keypad_n_n_row+';'
                                                                          +'\n' + 'const byte '+text_keypad_name+'_COLS = '+keypad_n_n_col+';'
                                                                          +'\n' + 'byte '+text_keypad_name+'_rowPins['+text_keypad_name+'_ROWS] = '+text_keypad_row
                                                                          +'\n' + 'byte '+text_keypad_name+'_colPins['+text_keypad_name+'_COLS] = '+text_keypad_col
                                                                          +'\n' + 'Keypad '+text_keypad_name+' = Keypad(makeKeymap('+text_keypad_type+'), '+text_keypad_name+'_rowPins, '+text_keypad_name+'_colPins, '+text_keypad_name+'_ROWS, '+text_keypad_name+'_COLS);';
  var code = '';
  return code;
};

Blockly.Arduino.keypad_n_n_start = function() {
  var text_keypad_name = this.getFieldValue('keypad_name');
  var text_keypad_row = Blockly.Arduino.valueToCode(this, 'keypad_row',Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_col = Blockly.Arduino.valueToCode(this, 'keypad_col',Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_type = Blockly.Arduino.valueToCode(this, 'keypad_type',Blockly.Arduino.ORDER_ATOMIC);

  var keypad_n_n_row = '';
  var keypad_n_n_col = '';

  for(var i = 0;i < text_keypad_row.length;i++)
  {
    if(text_keypad_row.charAt(i) == ' ')
      continue;
    else if(text_keypad_row.charAt(i) == '{')
    {
      text_keypad_row = text_keypad_row.substring(i);
      break;
    }
    else
      keypad_n_n_row = keypad_n_n_row + text_keypad_row.charAt(i);
  }

  for(var i = 0;i < text_keypad_col.length;i++)
  {
    if(text_keypad_col.charAt(i) == ' ')
      continue;
    else if(text_keypad_col.charAt(i) == '{')
    {
      text_keypad_col = text_keypad_col.substring(i);
      break;
    }
    else
      keypad_n_n_col = keypad_n_n_col + text_keypad_col.charAt(i);
  }
  Blockly.Arduino.definitions_['include_Keypad'] = '#include <Keypad.h>';
  Blockly.Arduino.definitions_['var_declare_keypad_' + text_keypad_name] = 'const byte '+text_keypad_name+'_ROWS = '+keypad_n_n_row+';'
                                                                          +'\n' + 'const byte '+text_keypad_name+'_COLS = '+keypad_n_n_col+';'
                                                                          +'\n' + 'char '+text_keypad_name+'_hexaKeys['+text_keypad_name+'_ROWS]['+text_keypad_name+'_COLS] = {' + '\n' + text_keypad_type + '\n};'
                                                                          +'\n' + 'byte '+text_keypad_name+'_rowPins['+text_keypad_name+'_ROWS] = '+text_keypad_row
                                                                          +'\n' + 'byte '+text_keypad_name+'_colPins['+text_keypad_name+'_COLS] = '+text_keypad_col
                                                                          +'\n' + 'Keypad '+text_keypad_name+' = Keypad( makeKeymap('+text_keypad_name+'_hexaKeys), '+text_keypad_name+'_rowPins, '+text_keypad_name+'_colPins, '+text_keypad_name+'_ROWS, '+text_keypad_name+'_COLS);';
  var code = '';
  return code;
};

Blockly.Arduino.keypad_n_n_row_col_data_1 = function() {
  var code = new Array(this.itemCount_);
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.Arduino.valueToCode(this, 'ADD' + n,
        Blockly.Arduino.ORDER_NONE) || '2';
  }

  var code1 = '' + this.itemCount_;
  for(var i = 0;i < this.itemCount_;i++)
  {
    if(i == 0 && this.itemCount_ == 1)
    {
      code1 = code1 + '{' + code[i] + '};';
      break;
    }
    else if(i == 0)
      code1 = code1 + '{' + code[i];
    else if(i == this.itemCount_ - 1)
      code1 = code1 + ',' + code[i] + '};';
    else
      code1 = code1 + ',' + code[i];
  }
  
  return [code1, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.get_keypad_num = function() {
  var text_keypad_name = this.getFieldValue('keypad_name');
  var code = ''+text_keypad_name+'.getKey()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_keypad_event'] = function() {
  var text_keypad_name = this.getFieldValue('keypad_name');
  var value_keypad_event_input = Blockly.Arduino.valueToCode(this, 'keypad_event_input', Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_start_event_delay = this.getFieldValue('keypad_start_event_delay');
  var statements_keypad_event_data = Blockly.Arduino.statementToCode(this, 'keypad_event_data');

  Blockly.Arduino.definitions_['var_declare_variate_' + value_keypad_event_input] = 'volatile char ' + value_keypad_event_input + ';';
  Blockly.Arduino.definitions_['var_declare_keypadstart7_event' + text_keypad_name] = 'void keypadEvent_' + text_keypad_name + '(KeypadEvent ' + value_keypad_event_input + ') {' + 
                                                                            '\n' + statements_keypad_event_data +
                                                                            '\n}';
  Blockly.Arduino.setups_['setup_keypad_event_and_delay' + text_keypad_name] = text_keypad_name + '.addEventListener(keypadEvent_' + text_keypad_name + ');' + 
                                                                        '\n  ' + text_keypad_name + '.setHoldTime(' + text_keypad_start_event_delay + ');';

  var code = '';
  return code;
};


Blockly.Arduino.arduino_nrf24l01_start = function() {
  var value_nrf24l01_pin = Blockly.Arduino.valueToCode(this, 'nrf24l01_pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_nrf24l01_send_channel = Blockly.Arduino.valueToCode(this, 'nrf24l01_send_channel', Blockly.Arduino.ORDER_ATOMIC);
  var value_nrf24l01_id = Blockly.Arduino.valueToCode(this, 'nrf24l01_id', Blockly.Arduino.ORDER_ATOMIC);
  var value_nrf24l01_send_num = Blockly.Arduino.valueToCode(this, 'nrf24l01_send_num', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_Mirf'] = '#include <Mirf.h>';
  Blockly.Arduino.definitions_['include_nRF24L01'] = '#include <nRF24L01.h>';
  Blockly.Arduino.definitions_['include_MirfHardwareSpiDriver'] = '#include <MirfHardwareSpiDriver.h>';

  Blockly.Arduino.setups_['setup_nrf24l01_pin'] = value_nrf24l01_pin;
  Blockly.Arduino.setups_['setup_nrf24l01_start_1'] = 'Mirf.spi = &MirfHardwareSpi;';
  Blockly.Arduino.setups_['setup_nrf24l01_start_2'] = 'Mirf.init();\n';

  Blockly.Arduino.setups_['setup_nrf24l01_start_3'] = 'Mirf.setRADDR((byte *)'+value_nrf24l01_id+');';
  Blockly.Arduino.setups_['setup_nrf24l01_start_4'] = 'Mirf.payload = sizeof('+value_nrf24l01_send_num+');';
  Blockly.Arduino.setups_['setup_nrf24l01_start_5'] = 'Mirf.channel = '+value_nrf24l01_send_channel+';';
  Blockly.Arduino.setups_['setup_nrf24l01_start_6'] = 'Mirf.config();\n';
  Blockly.Arduino.setups_['setup_nrf24l01_start_7'] = 'byte data[Mirf.payload];';
  var code = '';
  return code;
};

Blockly.Arduino.arduino_nrf24l01_pin = function() {
  var value_nrf24l01_pin_ce = Blockly.Arduino.valueToCode(this, 'nrf24l01_pin_ce', Blockly.Arduino.ORDER_ATOMIC);
  var value_nrf24l01_pin_csn = Blockly.Arduino.valueToCode(this, 'nrf24l01_pin_csn', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'Mirf.cePin = 9;'+
           '\n  Mirf.csnPin = 10;';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_nrf24l01_send'] = function() {
  var value_nrf24l01_send_data = Blockly.Arduino.valueToCode(this, 'nrf24l01_send_data', Blockly.Arduino.ORDER_ATOMIC);
  var value_nrf24l01_send_rec_id = Blockly.Arduino.valueToCode(this, 'nrf24l01_send_rec_id', Blockly.Arduino.ORDER_ATOMIC);
  
  //Blockly.Arduino.setups_['setup_nrf24l01_start_7'] = 'byte data[Mirf.payload];';

  var code = 'byte data[Mirf.payload];' +
           '\ndata[0] = '+value_nrf24l01_send_data+' & 0xFF;' +
           '\ndata[1] = '+value_nrf24l01_send_data+' >> 8;' +
         '\n\nMirf.setTADDR((byte *)'+value_nrf24l01_send_rec_id+');' +
           '\nMirf.send(data);\n';
  return code;
};

Blockly.Arduino['arduino_while'] = function() {
  var dropdown_while_is_true = this.getFieldValue('while_is_true');
  var value_while_condition = Blockly.Arduino.valueToCode(this, 'while_condition', Blockly.Arduino.ORDER_ATOMIC);
  var statements_while_carry_out = Blockly.Arduino.statementToCode(this, 'while_carry_out') || '';
  if(dropdown_while_is_true == "while_true")
  {
      dropdown_while_is_true = '';
  }
  else if(dropdown_while_is_true == "while_false")
  {
      dropdown_while_is_true = '!';
  }

  if(value_while_condition == "")
  {
      value_while_condition = "false";
  }
  
  var code = 'while (' + dropdown_while_is_true + value_while_condition + ') {' +
             '\n' + statements_while_carry_out +
          '\n}\n';
  return code;
};

Blockly.Arduino['arduino_nrf24l01_is_sending'] = function() {

  var code = 'Mirf.isSending()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_define_variate'] = function() {
  var text_variate_name = this.getFieldValue('variate_name');
  var dropdown_variate_type = this.getFieldValue('variate_type');
  var value_variate_num = Blockly.Arduino.valueToCode(this, 'variate_num', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['var_declare_variate' + text_variate_name] = dropdown_variate_type + ' ' + text_variate_name + ' = ' + value_variate_num + ';';

  var code = '...;\n';
  return code;
};

Blockly.Arduino['arduino_nrf24l01_data_ready'] = function() {
  
  var code = 'Mirf.dataReady()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_if'] = function() {
  var value_if_is_true = Blockly.Arduino.valueToCode(this, 'if_is_true', Blockly.Arduino.ORDER_ATOMIC);
  var statements_if_carry_out = Blockly.Arduino.statementToCode(this, 'if_carry_out');
  var dropdown_variate_type = this.getFieldValue('variate_type');
  var text_variate_name = this.getFieldValue('variate_name');

  Blockly.Arduino.definitions_['var_declare' + text_variate_name] = dropdown_variate_type + ' ' + text_variate_name + ';';
  
  if(value_if_is_true == "")
  {
      value_if_is_true = "false";
  }

  var code = 'if(' + value_if_is_true + ')' +
          '\n{' +
          '\n' + statements_if_carry_out +
          '\n  ' + text_variate_name + ' = (' + dropdown_variate_type + ')((data[1] << 8) | data[0]);' +
          '\n}\n';
  return code;
};

Blockly.Arduino['arduino_if_1'] = function() {
  var value_if_is_true = Blockly.Arduino.valueToCode(this, 'if_is_true', Blockly.Arduino.ORDER_ATOMIC);
  var statements_if_carry_out = Blockly.Arduino.statementToCode(this, 'if_carry_out');
  var value_get_variate_1 = Blockly.Arduino.valueToCode(this, 'get_variate_1', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['var_declare' + value_get_variate_1] = 'unsigned int' + ' ' + value_get_variate_1 + ';';
  
  if(value_if_is_true == "")
  {
      value_if_is_true = "false";
  }

  var code = 'byte data[Mirf.payload];'+
          '\nif(' + value_if_is_true + ')' +
          '\n{' +
          //'\n' + statements_if_carry_out +
          '\n  Mirf.getData(data);' +
          '\n  ' + value_get_variate_1 + ' = (unsigned int)((data[1] << 8) | data[0]);'+ 
          '\n' + statements_if_carry_out +
          '\n}\n';
  return code;
};

Blockly.Arduino['arduino_nrf24l01_get_data'] = function() {
  
  var code = 'Mirf.getData(data);\n';
  return code;
};

Blockly.Arduino.make_arduino_nrf24l01_begin = function() {
    var value_nrf24l01_ce = Blockly.Arduino.valueToCode(this, 'nrf24l01_ce', Blockly.Arduino.ORDER_ATOMIC);
    var value_nrf24l01_csn = Blockly.Arduino.valueToCode(this, 'nrf24l01_csn', Blockly.Arduino.ORDER_ATOMIC);
    var statements_nrf24l01_setting = Blockly.Arduino.statementToCode(this, 'nrf24l01_setting');

  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_Mirf'] = '#include <Mirf.h>';
  Blockly.Arduino.definitions_['include_nRF24L01'] = '#include <nRF24L01.h>';
  Blockly.Arduino.definitions_['include_MirfHardwareSpiDriver'] = '#include <MirfHardwareSpiDriver.h>';

  Blockly.Arduino.setups_['setup_nrf24l01_begin'] = 'Mirf.cePin = '+value_nrf24l01_ce+';'
                                                 +'\n  Mirf.csnPin = '+value_nrf24l01_csn+';'
                                                 +'\n  Mirf.spi = &MirfHardwareSpi;'
                                                 +'\n  Mirf.init();'
                                                 +'\n'+statements_nrf24l01_setting + '  Mirf.config();';
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_nrf24l01_setRADDR = function() {
    var value_nrf24l01_set_data = Blockly.Arduino.valueToCode(this, 'nrf24l01_set_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Mirf.setRADDR((byte *)'+value_nrf24l01_set_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_nrf24l01_payload = function() {
    var value_nrf24l01_set_data = Blockly.Arduino.valueToCode(this, 'nrf24l01_set_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Mirf.payload = ' + value_nrf24l01_set_data + ';\n';
  return code;
};

Blockly.Arduino.make_arduino_nrf24l01_payload_return = function() {
  var code = 'Mirf.payload';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_nrf24l01_channel = function() {
    var value_nrf24l01_set_data = Blockly.Arduino.valueToCode(this, 'nrf24l01_set_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Mirf.channel = '+value_nrf24l01_set_data+';\n';
  return code;
};

Blockly.Arduino.make_arduino_nrf24l01_sendData = function() {
    var value_nrf24l01_send_data = Blockly.Arduino.valueToCode(this, 'nrf24l01_send_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_nrf24l01_settaddr = Blockly.Arduino.valueToCode(this, 'nrf24l01_settaddr', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Mirf.setTADDR((byte *)'+value_nrf24l01_settaddr+');'
        +'\nMirf.send('+value_nrf24l01_send_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_nrf24l01_isSending = function() {
  var code = 'Mirf.isSending()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_nrf24l01_dataReady = function() {
  var code = 'Mirf.dataReady()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_nrf24l01_getData = function() {
    var value_nrf24l01_get_data = Blockly.Arduino.valueToCode(this, 'nrf24l01_get_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Mirf.getData('+value_nrf24l01_get_data+');\n';
  return code;
};

//初始化315/433MHZ无线通信模块的发送管脚
Blockly.Arduino.make_arduino_mhz_send_begin = function() {
  this.setTooltip("初始化315/433MHZ无线通信模块的发送管脚");
  
    var text_mhz_name = this.getFieldValue('mhz_name');
    var value_mhz_send_pin = Blockly.Arduino.valueToCode(this, 'mhz_send_pin', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_RCSwitch'] = '#include <RCSwitch.h>';
  Blockly.Arduino.definitions_['var_declare_mhz' + text_mhz_name] = 'RCSwitch '+text_mhz_name+' = RCSwitch();';
  Blockly.Arduino.setups_['setup_mhz_'+text_mhz_name+'_send'] = ''+text_mhz_name+'.enableTransmit('+value_mhz_send_pin+');';
  var code = '';
  return code;
};

//初始化315/433MHZ无线通信模块的接收管脚
Blockly.Arduino.make_arduino_mhz_receive_begin = function() {
  this.setTooltip("初始化315/433MHZ无线通信模块的接收管脚");
  
    var text_mhz_name = this.getFieldValue('mhz_name');
    var value_mhz_receive_pin = Blockly.Arduino.valueToCode(this, 'mhz_receive_pin', Blockly.Arduino.ORDER_ATOMIC);

  if(value_mhz_receive_pin == '3')
    value_mhz_receive_pin = '1';
  else
    value_mhz_receive_pin = '0';

  Blockly.Arduino.definitions_['include_RCSwitch'] = '#include <RCSwitch.h>';
  Blockly.Arduino.definitions_['var_declare_mhz' + text_mhz_name] = 'RCSwitch '+text_mhz_name+' = RCSwitch();';
  Blockly.Arduino.setups_['setup_mhz_'+text_mhz_name+'_receive'] = ''+text_mhz_name+'.enableReceive('+value_mhz_receive_pin+');';
  var code = '';
  return code;
};

//初始化315/433MHZ无线通信模块的发送管脚和接收管脚
Blockly.Arduino.make_arduino_mhz_send_receive_begin = function() {
  this.setTooltip("初始化315/433MHZ无线通信模块的发送管脚和接收管脚");
  
    var text_mhz_name = this.getFieldValue('mhz_name');
    var value_mhz_send_pin = Blockly.Arduino.valueToCode(this, 'mhz_send_pin', Blockly.Arduino.ORDER_ATOMIC);
    var value_mhz_receive_pin = Blockly.Arduino.valueToCode(this, 'mhz_receive_pin', Blockly.Arduino.ORDER_ATOMIC);

  if(value_mhz_receive_pin == '3')
    value_mhz_receive_pin = '1';
  else
    value_mhz_receive_pin = '0';

  Blockly.Arduino.definitions_['include_RCSwitch'] = '#include <RCSwitch.h>';
  Blockly.Arduino.definitions_['var_declare_mhz' + text_mhz_name] = 'RCSwitch '+text_mhz_name+' = RCSwitch();';
  Blockly.Arduino.setups_['setup_mhz_'+text_mhz_name+'_send'] = ''+text_mhz_name+'.enableTransmit('+value_mhz_send_pin+');';
  Blockly.Arduino.setups_['setup_mhz_'+text_mhz_name+'_receive'] = ''+text_mhz_name+'.enableReceive('+value_mhz_receive_pin+');';
  var code = '';
  return code;
};

//315/433MHZ无线通信模块设置脉冲长度
Blockly.Arduino.make_arduino_mhz_setPulseLength = function() {
  this.setTooltip("315/433MHZ无线通信模块设置发送数据时所用的脉冲长度，默认是350微秒");
  
    var text_mhz_name = this.getFieldValue('mhz_name');
    var value_mhz_pulselength = Blockly.Arduino.valueToCode(this, 'mhz_pulselength', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_mhz_name+'.setPulseLength('+value_mhz_pulselength+');\n';
  return code;
};

//315/433MHZ无线通信模块设置发送协议
Blockly.Arduino.make_arduino_mhz_setProtocol = function() {
  this.setTooltip("315/433MHZ无线通信模块设置发送数据时所用的通信协议，默认使用协议1");
  
    var text_mhz_name = this.getFieldValue('mhz_name');
    var value_mhz_protocol_type = Blockly.Arduino.valueToCode(this, 'mhz_protocol_type', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_mhz_name+'.setProtocol('+value_mhz_protocol_type+');\n';
  return code;
};

//315/433MHZ无线通信模块 协议种类
Blockly.Arduino.make_arduino_mhz_setProtocol_type = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//315/433MHZ无线通信模块设置发送端数据发送重复次数
Blockly.Arduino.make_arduino_mhz_setRepeatTransmit = function() {
  this.setTooltip("315/433MHZ无线通信模块设置发送端数据发送重复次数，默认为10");

    var text_mhz_name = this.getFieldValue('mhz_name');
    var value_mhz_repeat_data = Blockly.Arduino.valueToCode(this, 'mhz_repeat_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_mhz_name+'.setRepeatTransmit('+value_mhz_repeat_data+');\n';
  return code;
};

//315/433MHZ无线通信模块设置接收数据允许误差
Blockly.Arduino.make_arduino_mhz_setReceiveTolerance = function() {
  this.setTooltip("315/433MHZ无线通信模块设置接收数据允许误差，默认为60");
 
    var text_mhz_name = this.getFieldValue('mhz_name');
    var value_mhz_tolerance_data = Blockly.Arduino.valueToCode(this, 'mhz_tolerance_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_mhz_name+'.setReceiveTolerance('+value_mhz_tolerance_data+');\n';
  return code;
};

//315/433MHZ无线通信模块发送十进制数据
Blockly.Arduino.make_arduino_mhz_send_decimal_code = function() {
  this.setTooltip("315/433MHZ无线通信模块发送十进制数据，发送长度最大为24，若超出则将不会发送数据");
 
    var text_mhz_name = this.getFieldValue('mhz_name');
    var value_mhz_send_data = Blockly.Arduino.valueToCode(this, 'mhz_send_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_mhz_send_length = Blockly.Arduino.valueToCode(this, 'mhz_send_length', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_mhz_name+'.send('+value_mhz_send_data+', '+value_mhz_send_length+');\n';
  return code;
};

//315/433MHZ无线通信模块发送二进制数据
Blockly.Arduino.make_arduino_mhz_send_binary_code = function() {
  this.setTooltip("315/433MHZ无线通信模块发送二进制数据，发送长度最大为24，若超出则将不会发送数据");
  
    var text_mhz_name = this.getFieldValue('mhz_name');
    var value_mhz_send_data = Blockly.Arduino.valueToCode(this, 'mhz_send_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_mhz_name+'.send('+value_mhz_send_data+');\n';
  return code;
};

//315/433MHZ无线通信模块发送三态码
Blockly.Arduino.make_arduino_mhz_send_tri_state_code = function() {
  this.setTooltip("315/433MHZ无线通信模块发送三态码");
  
    var text_mhz_name = this.getFieldValue('mhz_name');
    var value_mhz_send_data = Blockly.Arduino.valueToCode(this, 'mhz_send_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_mhz_name+'.sendTriState('+value_mhz_send_data+');\n';
  return code;
};

//315/433MHZ无线通信模块 接收到数据？
Blockly.Arduino.make_arduino_mhz_available = function() {
  this.setTooltip("315/433MHZ是否接收到数据，返回数据的类型为boolean");
 
    var text_mhz_name = this.getFieldValue('mhz_name');
  var code = ''+text_mhz_name+'.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//315/433MHZ无线通信模块 接收数据
Blockly.Arduino.make_arduino_mhz_get_data = function() {
  this.setTooltip("315/433MHZ无线通信模块 获取数据、比特数、脉冲长度、通信协议、数据包");
  
    var text_mhz_name = this.getFieldValue('mhz_name');
    var dropdown_get_type = this.getFieldValue('get_type');
  var code = text_mhz_name+'.'+dropdown_get_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//315/433MHZ无线通信模块 重置接收
Blockly.Arduino.make_arduino_mhz_resetAvailable = function() {
  this.setTooltip("在每次使用mySwitch.available()接受完数据后，都需要用此函数重置一下接收，然后才可以接收下一串数据");

    var text_mhz_name = this.getFieldValue('mhz_name');
  var code = text_mhz_name+'.resetAvailable();\n';
  return code;
};

//初始化74HC595的控制管脚
Blockly.Arduino['arduino_74hc595_start'] = function() {
  var text_ic_74hc595_name = this.getFieldValue('ic_74hc595_name');
  var value_ic_74hc595_num = Blockly.Arduino.valueToCode(this, 'ic_74hc595_num', Blockly.Arduino.ORDER_ATOMIC);
  var value_ic_74hc595_data = Blockly.Arduino.valueToCode(this, 'ic_74hc595_data', Blockly.Arduino.ORDER_ATOMIC);
  var value_ic_74hc595_clock = Blockly.Arduino.valueToCode(this, 'ic_74hc595_clock', Blockly.Arduino.ORDER_ATOMIC);
  var value_ic_74hc595_latch = Blockly.Arduino.valueToCode(this, 'ic_74hc595_latch', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['include_ShiftRegister74HC595'] = '#include <ShiftRegister74HC595.h>';
  Blockly.Arduino.definitions_['var_declare_74hc595' + text_ic_74hc595_name] = 'ShiftRegister74HC595 ' + text_ic_74hc595_name + '(' + value_ic_74hc595_num + ', ' + value_ic_74hc595_data + ', ' + value_ic_74hc595_clock + ', ' + value_ic_74hc595_latch + '); ';

  var code = '';
  return code;
};

//设置74HC595芯片中全部管脚的电平高低
Blockly.Arduino['arduino_74hc595_set_all'] = function() {
  var text_ic_74hc595_name = this.getFieldValue('ic_74hc595_name');
  var dropdown_ic_74hc595_all_pin = this.getFieldValue('ic_74hc595_all_pin');
  
  var code = text_ic_74hc595_name + '.' + dropdown_ic_74hc595_all_pin + '();\n';
  return code;
};

//设置74HC595芯片中其中一个管脚的电平高低
Blockly.Arduino['arduino_74hc595_set_one'] = function() {
  var text_ic_74hc595_name = this.getFieldValue('ic_74hc595_name');
  var value_ic_74hc595_one_pin = Blockly.Arduino.valueToCode(this, 'ic_74hc595_one_pin', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_ic_74hc595_one_pin_status = this.getFieldValue('ic_74hc595_one_pin_status');
  
  var code = text_ic_74hc595_name + '.set(' + value_ic_74hc595_one_pin + ', ' + dropdown_ic_74hc595_one_pin_status + ');\n';
  return code;
};

//设置74HC595芯片中其中一个管脚的电平高低
Blockly.Arduino['arduino_74hc595_set_one_change'] = function() {
  var text_ic_74hc595_name = this.getFieldValue('ic_74hc595_name');
  var value_ic_74hc595_one_pin = Blockly.Arduino.valueToCode(this, 'ic_74hc595_one_pin', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_ic_74hc595_one_pin_status = Blockly.Arduino.valueToCode(this, 'ic_74hc595_one_pin_status', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = text_ic_74hc595_name + '.set(' + value_ic_74hc595_one_pin + ', ' + dropdown_ic_74hc595_one_pin_status + ');\n';
  return code;
};

//设置74HC595芯片中各个管脚的电平高低（1个74HC595）
Blockly.Arduino['arduino_74hc595_1_set'] = function() {
  var text_ic_74hc595_name = this.getFieldValue('ic_74hc595_name');
  var value_ic_74hc595_1_set_data = Blockly.Arduino.valueToCode(this, 'ic_74hc595_1_set_data', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'uint8_t pinValues[] = {' + value_ic_74hc595_1_set_data + '};' + 
           '\n' + text_ic_74hc595_name + '.setAll(pinValues);\n';
  return code;
};

//设置74HC595芯片中各个管脚的电平高低（2个74HC595相连）
Blockly.Arduino['arduino_74hc595_2_set'] = function() {
  var text_ic_74hc595_name = this.getFieldValue('ic_74hc595_name');
  var value_ic_74hc595_1_set_data = Blockly.Arduino.valueToCode(this, 'ic_74hc595_1_set_data', Blockly.Arduino.ORDER_ATOMIC);
  var value_ic_74hc595_2_set_data = Blockly.Arduino.valueToCode(this, 'ic_74hc595_2_set_data', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'uint8_t pinValues[] = {' + value_ic_74hc595_1_set_data + ',' + value_ic_74hc595_2_set_data + '};' + 
           '\n' + text_ic_74hc595_name + '.setAll(pinValues);\n';
  return code;
};

//设置74HC595芯片中各个管脚的电平高低（3个74HC595相连）
Blockly.Arduino['arduino_74hc595_3_set'] = function() {
  var text_ic_74hc595_name = this.getFieldValue('ic_74hc595_name');
  var value_ic_74hc595_1_set_data = Blockly.Arduino.valueToCode(this, 'ic_74hc595_1_set_data', Blockly.Arduino.ORDER_ATOMIC);
  var value_ic_74hc595_2_set_data = Blockly.Arduino.valueToCode(this, 'ic_74hc595_2_set_data', Blockly.Arduino.ORDER_ATOMIC);
  var value_ic_74hc595_3_set_data = Blockly.Arduino.valueToCode(this, 'ic_74hc595_3_set_data', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'uint8_t pinValues[] = {' + value_ic_74hc595_1_set_data + ',' + value_ic_74hc595_2_set_data + ',' + value_ic_74hc595_3_set_data + '};' + 
           '\n' + text_ic_74hc595_name + '.setAll(pinValues);\n';
  return code;
};

//设置74HC595芯片中各个管脚的电平高低
Blockly.Arduino['arduino_74hc595_pin'] = function() {
  var checkbox_ic_set_every_1 = this.getFieldValue('ic_set_every_1') == 'TRUE';
  var checkbox_ic_set_every_2 = this.getFieldValue('ic_set_every_2') == 'TRUE';
  var checkbox_ic_set_every_3 = this.getFieldValue('ic_set_every_3') == 'TRUE';
  var checkbox_ic_set_every_4 = this.getFieldValue('ic_set_every_4') == 'TRUE';
  var checkbox_ic_set_every_5 = this.getFieldValue('ic_set_every_5') == 'TRUE';
  var checkbox_ic_set_every_6 = this.getFieldValue('ic_set_every_6') == 'TRUE';
  var checkbox_ic_set_every_7 = this.getFieldValue('ic_set_every_7') == 'TRUE';
  var checkbox_ic_set_every_8 = this.getFieldValue('ic_set_every_8') == 'TRUE';
  var checkbox_ic_set_all = '';
  
  if(checkbox_ic_set_every_1)
  {
    checkbox_ic_set_every_1 = '1';
  }
  else
  {
    checkbox_ic_set_every_1 = '0';
  }

  if(checkbox_ic_set_every_2)
  {
    checkbox_ic_set_every_2 = '1';
  }
  else
  {
    checkbox_ic_set_every_2 = '0';
  }

  if(checkbox_ic_set_every_3)
  {
    checkbox_ic_set_every_3 = '1';
  }
  else
  {
    checkbox_ic_set_every_3 = '0';
  }

  if(checkbox_ic_set_every_4)
  {
    checkbox_ic_set_every_4 = '1';
  }
  else
  {
    checkbox_ic_set_every_4 = '0';
  }

  if(checkbox_ic_set_every_5)
  {
    checkbox_ic_set_every_5 = '1';
  }
  else
  {
    checkbox_ic_set_every_5 = '0';
  }

  if(checkbox_ic_set_every_6)
  {
    checkbox_ic_set_every_6 = '1';
  }
  else
  {
    checkbox_ic_set_every_6 = '0';
  }

  if(checkbox_ic_set_every_7)
  {
    checkbox_ic_set_every_7 = '1';
  }
  else
  {
    checkbox_ic_set_every_7 = '0';
  }

  if(checkbox_ic_set_every_8)
  {
    checkbox_ic_set_every_8 = '1';
  }
  else
  {
    checkbox_ic_set_every_8 = '0';
  }
  
  checkbox_ic_set_all = 'B' + checkbox_ic_set_every_1 + checkbox_ic_set_every_2 + checkbox_ic_set_every_3 + checkbox_ic_set_every_4 + checkbox_ic_set_every_5 + checkbox_ic_set_every_6 + checkbox_ic_set_every_7 + checkbox_ic_set_every_8;

  var code = checkbox_ic_set_all;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//使用数组来设置74HC595芯片中全部管脚的电平高低
Blockly.Arduino['arduino_74hc595_set'] = function() {
  var text_ic_74hc595_name = this.getFieldValue('ic_74hc595_name');
  var text_ic_74hc595_everypin = this.getFieldValue('ic_74hc595_everypin');

  var code = text_ic_74hc595_name + '.setAll(' + text_ic_74hc595_everypin + ');\n';
  return code;
};

//获取74HC595芯片中某个管脚的状态
Blockly.Arduino['arduino_74hc595_get'] = function() {
  var text_ic_74hc595_name = this.getFieldValue('ic_74hc595_name');
  var value_ic_74hc595_get_data = Blockly.Arduino.valueToCode(this, 'ic_74hc595_get_data', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = '' + text_ic_74hc595_name + '.get(' + value_ic_74hc595_get_data + ')';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化DS1307，默认时间为系统此时的时间
Blockly.Arduino.make_ds1307_begin = function() {
    var text_ds1307_name = this.getFieldValue('ds1307_name');
    var checkbox_ds1307_get_time_date = this.getFieldValue('ds1307_get_time_date') == 'TRUE';
    var value_ds1307_begin_year = Blockly.Arduino.valueToCode(this, 'ds1307_begin_year', Blockly.Arduino.ORDER_ATOMIC);
    var value_ds1307_begin_month = Blockly.Arduino.valueToCode(this, 'ds1307_begin_month', Blockly.Arduino.ORDER_ATOMIC);
    var value_ds1307_begin_day = Blockly.Arduino.valueToCode(this, 'ds1307_begin_day', Blockly.Arduino.ORDER_ATOMIC);
    var value_ds1307_begin_hour = Blockly.Arduino.valueToCode(this, 'ds1307_begin_hour', Blockly.Arduino.ORDER_ATOMIC);
    var value_ds1307_begin_minute = Blockly.Arduino.valueToCode(this, 'ds1307_begin_minute', Blockly.Arduino.ORDER_ATOMIC);
    var value_ds1307_begin_second = Blockly.Arduino.valueToCode(this, 'ds1307_begin_second', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_RTClib'] = '#include <RTClib.h>';
  Blockly.Arduino.definitions_['var_declare_start_ds1307'+text_ds1307_name] = 'RTC_DS1307 '+text_ds1307_name+';';

  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';
  Blockly.Arduino.setups_['setup_wire_ds1307'+text_ds1307_name] = 'Wire.begin(); \n  '+text_ds1307_name+'.begin();';
  if(!checkbox_ds1307_get_time_date)
  {
    Blockly.Arduino.setups_['setup_wire_ds1307_adjust'+text_ds1307_name] = text_ds1307_name+'.adjust(DateTime('+value_ds1307_begin_year+', '+value_ds1307_begin_month+', '+value_ds1307_begin_day+', '+value_ds1307_begin_hour+' ,'+value_ds1307_begin_minute+', '+value_ds1307_begin_second+'));';
  }
  var code = '';
  return code;
};

//获取DS1307中的时间与日期
Blockly.Arduino.make_ds1307_get_time_date = function() {
    var text_get_time_date_name = this.getFieldValue('get_time_date_name');
    var value_get_time_date_data = Blockly.Arduino.valueToCode(this, 'get_time_date_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'DateTime '+text_get_time_date_name+' = '+value_get_time_date_data+'.now();\n';
  return code;
};

//返回DS1307中的时间与日期
Blockly.Arduino.make_ds1307_get_time_date_data = function() {
    var text_ds1307_name = this.getFieldValue('ds1307_name');
  var code = text_ds1307_name + '.now()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//返回 时间&日期 中的年、月、日、时、分、秒
Blockly.Arduino.make_ds1307_get_time_date_1 = function() {
    var text_timedate_name = this.getFieldValue('timedate_name');
    var dropdown_get_time_date_data = this.getFieldValue('get_time_date_data');
  var code = ''+text_timedate_name+'.'+dropdown_get_time_date_data+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//设置DS1302中的年、月、日、时、分、秒
Blockly.Arduino.make_ds1307_set_time_date = function() {
    var value_set_time_date_data = Blockly.Arduino.valueToCode(this, 'set_time_date_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_ds1307_name = this.getFieldValue('ds1307_name');
    var dropdown_set_time_date_type = this.getFieldValue('set_time_date_type');
  var code = ''+text_ds1307_name+'.set('+dropdown_set_time_date_type+', '+value_set_time_date_data+');\n';
  return code;
};

//初始化AT24C32
Blockly.Arduino.make_at24c32_begin = function() {
    var value_at24c32_begin_data = Blockly.Arduino.valueToCode(this, 'at24c32_begin_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_at24c32_name = this.getFieldValue('at24c32_name');

  Blockly.Arduino.definitions_['include_AT24Cxx'] = '#include <AT24Cxx.h>';
  Blockly.Arduino.definitions_['var_declare_start_at24c32'+text_at24c32_name] = 'AT24Cxx '+text_at24c32_name+'('+value_at24c32_begin_data+');';
  var code = '';
  return code;
};

//AT24C32指定地址写入数据，地址的范围是0-4096,数据的大小是一字节
Blockly.Arduino.make_at24c32_writemem = function() {
    var text_at24c32_name = this.getFieldValue('at24c32_name');
    var value_at24c32_writemem_area = Blockly.Arduino.valueToCode(this, 'at24c32_writemem_area', Blockly.Arduino.ORDER_ATOMIC);
    var value_at24c32_writemem_data = Blockly.Arduino.valueToCode(this, 'at24c32_writemem_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_at24c32_name+'.WriteMem('+value_at24c32_writemem_area+', '+value_at24c32_writemem_data+');\n';
  return code;
};

//AT24C32指定地址写入数据，地址的范围是0-4096，数据为一字节，字节数必须要小于等于数组的大小
Blockly.Arduino.make_at24c32_writemem_1 = function() {
    var text_at24c32_name = this.getFieldValue('at24c32_name');
    var value_at24c32_writemem_area = Blockly.Arduino.valueToCode(this, 'at24c32_writemem_area', Blockly.Arduino.ORDER_ATOMIC);
    var value_at24c32_writemem_data = Blockly.Arduino.valueToCode(this, 'at24c32_writemem_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_at24c32_writemem_num = Blockly.Arduino.valueToCode(this, 'at24c32_writemem_num', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_at24c32_name+'.WriteMem('+value_at24c32_writemem_area+', '+value_at24c32_writemem_data+', '+value_at24c32_writemem_num+');\n';
  return code;
};

//AT24C32指定地址读取数据，地址的范围是0-4096
Blockly.Arduino.make_at24c32_readmem = function() {
    var text_at24c32_name = this.getFieldValue('at24c32_name');
    var value_at24c32_readmem_area = Blockly.Arduino.valueToCode(this, 'at24c32_readmem_area', Blockly.Arduino.ORDER_ATOMIC);
    var value_at24c32_readmem_data = Blockly.Arduino.valueToCode(this, 'at24c32_readmem_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_at24c32_name+'.ReadMem('+value_at24c32_readmem_area+', '+value_at24c32_readmem_data+');\n';
  return code;
};

//AT24C32指定地址读取数据，地址的范围是0-4096，数据为一字节，字节数必须要小于等于数组的大小
Blockly.Arduino.make_at24c32_readmem_1 = function() {
    var text_at24c32_name = this.getFieldValue('at24c32_name');
    var value_at24c32_readmem_area = Blockly.Arduino.valueToCode(this, 'at24c32_readmem_area', Blockly.Arduino.ORDER_ATOMIC);
    var value_at24c32_readmem_data = Blockly.Arduino.valueToCode(this, 'at24c32_readmem_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_at24c32_readmem_num = Blockly.Arduino.valueToCode(this, 'at24c32_readmem_num', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_at24c32_name+'.ReadMem('+value_at24c32_readmem_area+', '+value_at24c32_readmem_data+', '+value_at24c32_readmem_num+');\n';
  return code;
};

Blockly.Arduino.make_rtc_begin = function() {
    var dropdown_rtc_type = this.getFieldValue('rtc_type');
    var text_rtc_name = this.getFieldValue('rtc_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_RTClib'] = '#include <RTClib.h>';
  Blockly.Arduino.definitions_['var_declare_start_ds1307'+text_rtc_name] = 'RTC_'+dropdown_rtc_type+' '+text_rtc_name+';';

  Blockly.Arduino.setups_['setup_rtc_'+text_rtc_name] = text_rtc_name+'.begin();';
  var code = '';
  return code;
};

Blockly.Arduino.make_rtc_adjust_1 = function() {
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_adjust_date = Blockly.Arduino.valueToCode(this, 'adjust_date', Blockly.Arduino.ORDER_ATOMIC);
    var value_adjust_time = Blockly.Arduino.valueToCode(this, 'adjust_time', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.adjust(DateTime('+value_adjust_date+', '+value_adjust_time+'));\n';
  return code;
};

Blockly.Arduino.make_get_system_date_time = function() {
    var dropdown_get_system_data = this.getFieldValue('get_system_data');
  var code = '__'+dropdown_get_system_data+'__';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_rtc_adjust_2 = function() {
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_adjust_year = Blockly.Arduino.valueToCode(this, 'adjust_year', Blockly.Arduino.ORDER_ATOMIC);
    var value_adjust_month = Blockly.Arduino.valueToCode(this, 'adjust_month', Blockly.Arduino.ORDER_ATOMIC);
    var value_adjust_day = Blockly.Arduino.valueToCode(this, 'adjust_day', Blockly.Arduino.ORDER_ATOMIC);
    var value_adjust_hour = Blockly.Arduino.valueToCode(this, 'adjust_hour', Blockly.Arduino.ORDER_ATOMIC);
    var value_adjust_minute = Blockly.Arduino.valueToCode(this, 'adjust_minute', Blockly.Arduino.ORDER_ATOMIC);
    var value_adjust_second = Blockly.Arduino.valueToCode(this, 'adjust_second', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_rtc_name+'.adjust(DateTime('+value_adjust_year+', '+value_adjust_month+', '+value_adjust_day+', '+value_adjust_hour+', '+value_adjust_minute+', '+value_adjust_second+'));\n';
  return code;
};

Blockly.Arduino.make_rtc_adjust_3 = function() {
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_adjust_data = Blockly.Arduino.valueToCode(this, 'adjust_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_adjust_type = this.getFieldValue('adjust_type');

  Blockly.Arduino.definitions_['function_'+text_rtc_name+'_adjust'] = '//RTC时钟调整时间'
                                                                     +'\nint '+text_rtc_name+'_adjust(int select_data, int data)'
                                                                     +'\n{'
                                                                     +'\n  DateTime now = '+text_rtc_name+'.now();'
                                                                     +'\n  int date_data[6];'
                                                                     +'\n  date_data[0] = now.year();'
                                                                     +'\n  date_data[1] = now.month();'
                                                                     +'\n  date_data[2] = now.day();'
                                                                     +'\n  date_data[3] = now.hour();'
                                                                     +'\n  date_data[4] = now.minute();'
                                                                     +'\n  date_data[5] = now.second();'
                                                                     +'\n  if(select_data <= 5 && select_data >=0)'
                                                                     +'\n  {'
                                                                     +'\n    date_data[select_data] = data;'
                                                                     +'\n    '+text_rtc_name+'.adjust(DateTime(date_data[0], date_data[1], date_data[2], date_data[3], date_data[4], date_data[5]));'
                                                                     +'\n    return 1;'
                                                                     +'\n  }'
                                                                     +'\n  else'
                                                                     +'\n    return 0;'
                                                                     +'\n}\n';
  var code = text_rtc_name+'_adjust('+dropdown_adjust_type+', '+value_adjust_data+');\n';
  return code;
};

Blockly.Arduino.make_rtc_get_time_date_1 = function() {
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_get_time_date_data = this.getFieldValue('get_time_date_data');
  var code = text_rtc_name+'.now().'+dropdown_get_time_date_data+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//获取DS1307中的时间与日期
Blockly.Arduino.make_rtc_get_time_date = function() {
    var text_get_time_date_name = this.getFieldValue('get_time_date_name');
    var value_get_time_date_data = Blockly.Arduino.valueToCode(this, 'get_time_date_data', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = '';
  if(value_get_time_date_data)
    code = 'DateTime '+text_get_time_date_name+' = '+value_get_time_date_data+';\n';
  else
    code = 'DateTime now = RTC.now();\n'
  return code;
};

Blockly.Arduino.make_calculate_date_time = function() {
    var value_future_day = Blockly.Arduino.valueToCode(this, 'future_day', Blockly.Arduino.ORDER_ATOMIC);
    var value_future_hour = Blockly.Arduino.valueToCode(this, 'future_hour', Blockly.Arduino.ORDER_ATOMIC);
    var value_future_minute = Blockly.Arduino.valueToCode(this, 'future_minute', Blockly.Arduino.ORDER_ATOMIC);
    var value_future_second = Blockly.Arduino.valueToCode(this, 'future_second', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'TimeSpan('+value_future_day+','+value_future_hour+','+value_future_minute+','+value_future_second+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_calculate_date_time_1 = function() {
    var value_future_second = Blockly.Arduino.valueToCode(this, 'future_second', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'TimeSpan('+value_future_second+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_rtc_get_temperature = function() {
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = ''+text_rtc_name+'.getTemperature()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/********** RTC时钟模块 **********/
/*
* 通用
*/

/*
//设置RTC时钟的时间与日期
Blockly.Arduino.make_rtc_SetDateTime = function() {
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_date = Blockly.Arduino.valueToCode(this, 'date', Blockly.Arduino.ORDER_ATOMIC);
    var value_time = Blockly.Arduino.valueToCode(this, 'time', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.SetDateTime(RtcDateTime('+value_date+', '+value_time+'));\n';
  return code;
};
*/

/*
//设置RTC时钟的时间与日期-1
Blockly.Arduino.make_rtc_SetDateTime_1 = function() {
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_year = Blockly.Arduino.valueToCode(this, 'year', Blockly.Arduino.ORDER_ATOMIC);
    var value_month = Blockly.Arduino.valueToCode(this, 'month', Blockly.Arduino.ORDER_ATOMIC);
    var value_day = Blockly.Arduino.valueToCode(this, 'day', Blockly.Arduino.ORDER_ATOMIC);
    var value_hour = Blockly.Arduino.valueToCode(this, 'hour', Blockly.Arduino.ORDER_ATOMIC);
    var value_minute = Blockly.Arduino.valueToCode(this, 'minute', Blockly.Arduino.ORDER_ATOMIC);
    var value_second = Blockly.Arduino.valueToCode(this, 'second', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.SetDateTime(RtcDateTime('+value_year+', '+value_month+', '+value_day+', '+value_hour+', '+value_minute+', '+value_second+'));\n';
  return code;
};
*/

/*
//设置RTC时钟的时间与日期-3
Blockly.Arduino.make_rtc_SetDateTime_3 = function() {
    var text_rtc_name = this.getFieldValue('rtc_name');
    var text_rtcdatetime_name = this.getFieldValue('rtcdatetime_name');
  
  var code = text_rtc_name+'.SetDateTime('+text_rtcdatetime_name+');\n';
  return code;
};
*/

/*
//时间&日期赋值
Blockly.Arduino.make_RtcDateTime_get_time_date_1 = function() {
    var text_rtcdatetime_name = this.getFieldValue('rtcdatetime_name');
    var text_rtc_name = this.getFieldValue('rtc_name');
  
  var code = 'RtcDateTime '+text_rtcdatetime_name+' = '+text_rtc_name+'.GetDateTime();\n';
  return code;
};
*/

/*
//设置时间&日期的时间与日期
Blockly.Arduino.make_RtcDateTime_SetDateTime = function() {
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_date = Blockly.Arduino.valueToCode(this, 'date', Blockly.Arduino.ORDER_ATOMIC);
    var value_time = Blockly.Arduino.valueToCode(this, 'time', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'RtcDateTime '+text_rtc_name+' = RtcDateTime('+value_date+', '+value_time+');\n';
  return code;
};
*/

/*
//设置时间&日期的时间与日期-1
Blockly.Arduino.make_RtcDateTime_SetDateTime_1 = function() {
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_year = Blockly.Arduino.valueToCode(this, 'year', Blockly.Arduino.ORDER_ATOMIC);
    var value_month = Blockly.Arduino.valueToCode(this, 'month', Blockly.Arduino.ORDER_ATOMIC);
    var value_day = Blockly.Arduino.valueToCode(this, 'day', Blockly.Arduino.ORDER_ATOMIC);
    var value_hour = Blockly.Arduino.valueToCode(this, 'hour', Blockly.Arduino.ORDER_ATOMIC);
    var value_minute = Blockly.Arduino.valueToCode(this, 'minute', Blockly.Arduino.ORDER_ATOMIC);
    var value_second = Blockly.Arduino.valueToCode(this, 'second', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'RtcDateTime '+text_rtc_name+' = RtcDateTime('+value_year+', '+value_month+', '+value_day+', '+value_hour+', '+value_minute+', '+value_second+');\n';
  return code;
};
*/

/*
* RTC时钟
*/
//RTC时间日期可读？ | RTC正在运行？
Blockly.Arduino.make_rtc_IsDateTimeValid_GetIsRunning = function() {
  this.setTooltip("RTC时间日期可读？ | RTC正在运行？");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS1302时钟模块 设置运行状态
Blockly.Arduino.make_rtc_ds1302_SetIsRunning = function() {
  this.setTooltip("RTC时钟 设置运行状态");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    //var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.SetIsRunning('+value_data+');\n';
  return code;
};

//RTC时钟设置时间与日期
Blockly.Arduino.make_RTC_SetDateTime = function() {
  this.setTooltip("RTC时钟 设置时间与日期");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.SetDateTime('+value_data+');\n';
  return code;
};

//调整RTC时钟的时间与日期
Blockly.Arduino.make_rtc_SetDateTime_2 = function() {
  this.setTooltip("RTC时钟 调整时间与日期");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_type = this.getFieldValue('type');

  Blockly.Arduino.definitions_['function_'+text_rtc_name+'_SetDateTime'] = '//RTC时钟调整时间'
                                                                       +'\nbool '+text_rtc_name+'_SetDateTime(int select_data, int data)'
                                                                       +'\n{'
                                                                       +'\n  RtcDateTime now = '+text_rtc_name+'.GetDateTime();'
                                                                       +'\n  int date_data[6];'
                                                                       +'\n  date_data[0] = now.Year();'
                                                                       +'\n  date_data[1] = now.Month();'
                                                                       +'\n  date_data[2] = now.Day();'
                                                                       +'\n  date_data[3] = now.Hour();'
                                                                       +'\n  date_data[4] = now.Minute();'
                                                                       +'\n  date_data[5] = now.Second();'
                                                                       +'\n  if(select_data <= 5 && select_data >=0)'
                                                                       +'\n  {'
                                                                       +'\n    date_data[select_data] = data;'
                                                                       +'\n    '+text_rtc_name+'.SetDateTime(RtcDateTime(date_data[0], date_data[1], date_data[2], date_data[3], date_data[4], date_data[5]));'
                                                                       +'\n    return 1;'
                                                                       +'\n  }'
                                                                       +'\n  else'
                                                                       +'\n    return 0;'
                                                                       +'\n}\n';
  var code = text_rtc_name+'_SetDateTime('+dropdown_type+', '+value_data+');\n';
  return code;
};

//获取RTC时钟的时间和日期
Blockly.Arduino.make_rtc_get_now_data = function() {
  this.setTooltip("RTC时钟 获取当前时间和日期");
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.GetDateTime()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//获取RTC时钟的年、月、日、时、分、秒、周
Blockly.Arduino.make_RtcDateTime_get_time_date = function() {
  this.setTooltip("RTC时钟 获取年、月、日、时、分、秒、周，返回数据的类型为uint16_t(年)、uint16_t(月、日、时、分、秒、周)");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');

  var code = text_rtc_name+'.GetDateTime().'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
* 时间&日期
*/
//初始化时间&日期
Blockly.Arduino.make_DateTime_declare = function() {
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_DateTime_name = this.getFieldValue('DateTime_name');
  var code = 'RtcDateTime '+text_DateTime_name+' = '+value_data+';\n';
  return code;
};

//时间&日期赋值
Blockly.Arduino.make_DateTime_set_data = function() {
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_DateTime_name = this.getFieldValue('DateTime_name');
  var code = text_DateTime_name+' = '+value_data+';\n';
  return code;
};

//获取时间&日期
Blockly.Arduino.make_DateTime_get_data = function() {
    var text_DateTime_name = this.getFieldValue('DateTime_name');
  var code = text_DateTime_name;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//RtcDateTime时间与日期可读？
Blockly.Arduino.make_DateTime_IsValid = function() {
  this.setTooltip("RtcDateTime 时间与日期可读？，返回数据的类型为boolean");
    var text_DateTime_name = this.getFieldValue('DateTime_name');
  var code = text_DateTime_name+'.IsValid()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//获取RtcDateTime的时间与日期-1
Blockly.Arduino.make_DateTime_get_1 = function() {
  this.setTooltip("RtcDateTime 获取的时间与日期，返回数据的类型为RtcDateTime");
    var value_date = Blockly.Arduino.valueToCode(this, 'date', Blockly.Arduino.ORDER_ATOMIC);
    var value_time = Blockly.Arduino.valueToCode(this, 'time', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'RtcDateTime('+value_date+', '+value_time+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//获取RtcDateTime的时间与日期-2
Blockly.Arduino.make_DateTime_get_2 = function() {
  this.setTooltip("RtcDateTime 获取的时间与日期，返回数据的类型为RtcDateTime");
    var value_year = Blockly.Arduino.valueToCode(this, 'year', Blockly.Arduino.ORDER_ATOMIC);
    var value_month = Blockly.Arduino.valueToCode(this, 'month', Blockly.Arduino.ORDER_ATOMIC);
    var value_day = Blockly.Arduino.valueToCode(this, 'day', Blockly.Arduino.ORDER_ATOMIC);
    var value_hour = Blockly.Arduino.valueToCode(this, 'hour', Blockly.Arduino.ORDER_ATOMIC);
    var value_minute = Blockly.Arduino.valueToCode(this, 'minute', Blockly.Arduino.ORDER_ATOMIC);
    var value_second = Blockly.Arduino.valueToCode(this, 'second', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'RtcDateTime('+value_year+', '+value_month+', '+value_day+', '+value_hour+', '+value_minute+', '+value_second+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//RtcDateTime增加或减少时间
Blockly.Arduino.make_DateTime_add_remove = function() {
  this.setTooltip("RtcDateTime 增加或减少时间");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_type = this.getFieldValue('type');
    var value_day = Blockly.Arduino.valueToCode(this, 'day', Blockly.Arduino.ORDER_ATOMIC);
    var value_hour = Blockly.Arduino.valueToCode(this, 'hour', Blockly.Arduino.ORDER_ATOMIC);
    var value_minute = Blockly.Arduino.valueToCode(this, 'minute', Blockly.Arduino.ORDER_ATOMIC);
    var value_second = Blockly.Arduino.valueToCode(this, 'second', Blockly.Arduino.ORDER_ATOMIC);
  var code = value_data+' '+dropdown_type+' (uint32_t)((uint32_t)'+value_day+'*24*60*60 + (uint32_t)'+value_hour+'*60*60 + (uint32_t)'+value_minute+'*60 + (uint32_t)'+value_second+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//获取时间&日期的年、月、日、时、分、秒、周
Blockly.Arduino.make_RtcDateTime_get_time_date_2 = function() {
  this.setTooltip("RtcDateTime 获取年、月、日、时、分、秒、周，返回数据的类型为uint16_t(年)、uint16_t(月、日、时、分、秒、周)");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
* AT24C32
*/
//初始化AT24C32(使用硬件I2C)
Blockly.Arduino.make_rtc_at24c32_begin = function() {
  this.setTooltip("初始化AT24C32存储器");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_eeprom_name = this.getFieldValue('eeprom_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_EepromAT24C32'] = '#include <EepromAT24C32.h>';
  Blockly.Arduino.definitions_['var_declare_at24c32_'+text_eeprom_name] = 'EepromAt24c32<TwoWire> '+text_eeprom_name+'(Wire, '+value_address+');';

  Blockly.Arduino.setups_['setup_at24c32_'+text_eeprom_name] = text_eeprom_name+'.Begin();';
  var code = '';
  return code;
};

//初始化AT24C32(使用软件模拟I2C)
Blockly.Arduino.make_rtc_at24c32_begin_1 = function() {
  this.setTooltip("初始化AT24C32存储器");
    var text_eeprom_name = this.getFieldValue('eeprom_name');
    var value_sda = Blockly.Arduino.valueToCode(this, 'sda', Blockly.Arduino.ORDER_ATOMIC);
    var value_scl = Blockly.Arduino.valueToCode(this, 'scl', Blockly.Arduino.ORDER_ATOMIC);
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_SoftwareWire'] = '#include <SoftwareWire.h>';
  Blockly.Arduino.definitions_['include_EepromAT24C32'] = '#include <EepromAT24C32.h>';
  Blockly.Arduino.definitions_['var_declare_SoftwareWire'+value_sda+'_'+value_scl] = 'SoftwareWire Wire_'+value_sda+'_'+value_scl+'('+value_sda+', '+value_scl+');';
  Blockly.Arduino.definitions_['var_declare_at24c32_'+text_eeprom_name] = 'EepromAt24c32<SoftwareWire> '+text_eeprom_name+'(Wire_'+value_sda+'_'+value_scl+');';

  Blockly.Arduino.setups_['setup_at24c32_'+text_eeprom_name] = text_eeprom_name+'.Begin();';
  var code = '';
  return code;
};

//AT24C32 地址
Blockly.Arduino.make_rtc_at24c32_address = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//AT24C32 返回上次连接的错误码
Blockly.Arduino.make_rtc_at24c32_LastError = function() {
  this.setTooltip("AT24C32 返回上次连接的错误码，返回数据的类型为uint8_t");
    var text_eeprom_name = this.getFieldValue('eeprom_name');
  var code = text_eeprom_name+'.LastError()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//AT24C32 写入字节
Blockly.Arduino.make_rtc_at24c32_SetMemory_byte = function() {
  this.setTooltip("AT24C32 写入字节");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_eeprom_name = this.getFieldValue('eeprom_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_eeprom_name+'.SetMemory('+value_address+', '+value_data+');\n';
  return code;
};

//AT24C32 读取字节
Blockly.Arduino.make_rtc_at24c32_GetMemory_byte = function() {
  this.setTooltip("AT24C32 读取字节，返回数据的类型为uint8_t");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_eeprom_name = this.getFieldValue('eeprom_name');
  var code = text_eeprom_name+'.GetMemory('+value_address+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//AT24C32 写入字节数组
Blockly.Arduino.make_rtc_at24c32_SetMemory_list = function() {
  this.setTooltip("AT24C32 写入字节数组，返回数据的类型为uint8_t");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_eeprom_name = this.getFieldValue('eeprom_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_eeprom_name+'.SetMemory('+value_address+', (const uint8_t*)'+value_data+', '+value_length+');\n';
  return code;
};

//AT24C32 读取字节数组
Blockly.Arduino.make_rtc_at24c32_GetMemory_list = function() {
  this.setTooltip("AT24C32 读取字节数组，返回数据的类型为uint8_t");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_eeprom_name = this.getFieldValue('eeprom_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_eeprom_name+'.GetMemory('+value_address+', '+value_data+', '+value_length+');\n';
  return code;
};

//AT24C32时钟模块 读取字节数组，返回读取结果
Blockly.Arduino.make_rtc_at24c32_GetMemory_list_return = function() {
  this.setTooltip("AT24C32 读取字节数组，返回数据的类型为uint8_t");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_eeprom_name = this.getFieldValue('eeprom_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_eeprom_name+'.GetMemory('+value_address+', '+value_data+', '+value_length+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
* DS1302
*/
//初始化DS1302
Blockly.Arduino.make_rtc_ds1302_begin = function() {
  this.setTooltip("初始化DS1302时钟模块");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_rst = Blockly.Arduino.valueToCode(this, 'rst', Blockly.Arduino.ORDER_ATOMIC);
    var value_dat = Blockly.Arduino.valueToCode(this, 'dat', Blockly.Arduino.ORDER_ATOMIC);
    var value_clk = Blockly.Arduino.valueToCode(this, 'clk', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_AThreeWire'] = '#include <ThreeWire.h>  ';
  Blockly.Arduino.definitions_['include_RtcDS1302'] = '#include <RtcDS1302.h>';
  Blockly.Arduino.definitions_['var_declare_rtc_'+text_rtc_name] = 'ThreeWire Wire_'+value_dat+'_'+value_clk+'_'+value_rst+'('+value_dat+', '+value_clk+', '+value_rst+');\n'
                                                             +'RtcDS1302<ThreeWire> '+text_rtc_name+'(Wire_'+value_dat+'_'+value_clk+'_'+value_rst+');';

  Blockly.Arduino.setups_['setup_rtc_'+text_rtc_name] = text_rtc_name+'.Begin();';
  var code = '';
  return code;
};

//DS1302时钟模块 写保护？
Blockly.Arduino.make_rtc_ds1302_GetIsWriteProtected = function() {
  this.setTooltip("DS1302时钟模块 写保护？，返回数据的类型为boolean");
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.GetIsWriteProtected()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS1302时钟模块 设置写保护
Blockly.Arduino.make_rtc_ds1302_SetIsWriteProtected = function() {
  this.setTooltip("DS1302时钟模块 设置写保护");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    //var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.SetIsWriteProtected('+value_data+');\n';
  return code;
};

//DS1302时钟模块 设置涓流充电功能
Blockly.Arduino.make_rtc_ds1302_SetTrickleChargeSettings = function() {
  this.setTooltip("DS1302时钟模块 设置涓流充电功能");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type1 = this.getFieldValue('type1');
    var dropdown_type2 = this.getFieldValue('type2');
    var dropdown_type3 = this.getFieldValue('type3');
  var code = text_rtc_name+'.SetTrickleChargeSettings(B'+dropdown_type1+dropdown_type2+dropdown_type3+');\n';
  return code;
};

//DS1302时钟模块 获取涓流充电设置
Blockly.Arduino.make_rtc_ds1302_GetTrickleChargeSettings = function() {
  this.setTooltip("DS1302时钟模块 获取涓流充电设置，返回数据的类型为uint8_t");
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.GetTrickleChargeSettings()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS1302时钟模块 写入字节
Blockly.Arduino.make_rtc_ds1302_SetMemory_byte = function() {
  this.setTooltip("DS1302时钟模块 写入字节");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.SetMemory((uint8_t)'+value_address+', '+value_data+');\n';
  return code;
};

//DS1302时钟模块 读取字节
Blockly.Arduino.make_rtc_ds1302_GetMemory_byte = function() {
  this.setTooltip("DS1302时钟模块 读取字节，返回数据的类型为uint8_t");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.GetMemory('+value_address+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS1302时钟模块 写入字节数组
Blockly.Arduino.make_rtc_ds1302_SetMemory_list = function() {
  this.setTooltip("DS1302时钟模块 写入字节数组，返回数据的类型为uint8_t");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.SetMemory((const uint8_t*)'+value_data+', '+value_length+');\n';
  return code;
};

//DS1302时钟模块 读取字节数组
Blockly.Arduino.make_rtc_ds1302_GetMemory_list = function() {
  this.setTooltip("DS1302时钟模块 读取字节数组，返回数据的类型为uint8_t");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.GetMemory('+value_data+', '+value_length+');\n';
  return code;
};

//DS1302时钟模块 读取字节数组，返回读取结果
Blockly.Arduino.make_rtc_ds1302_GetMemory_list_return = function() {
  this.setTooltip("DS1302时钟模块 读取字节数组，返回数据的类型为uint8_t");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.GetMemory('+value_data+', '+value_length+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
* DS1307
*/
//初始化DS1307、DS3231时钟模块(I2C)
Blockly.Arduino.make_rtc_ds1307_3231_begin = function() {
  this.setTooltip("初始化DS1307、DS3231时钟模块");
    var dropdown_rtc_type = this.getFieldValue('rtc_type');
    var text_rtc_name = this.getFieldValue('rtc_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_'+dropdown_rtc_type] = '#include <'+dropdown_rtc_type+'.h>';
  Blockly.Arduino.definitions_['var_declare_rtc_'+text_rtc_name] = ''+dropdown_rtc_type+'<TwoWire> '+text_rtc_name+'(Wire);';

  Blockly.Arduino.setups_['setup_rtc_'+text_rtc_name] = text_rtc_name+'.Begin();';
  var code = '';
  return code;
};

//初始化DS1307、DS3231时钟模块(I2C)-可以定义管脚
Blockly.Arduino.make_rtc_ds1307_3231_begin_1 = function() {
  this.setTooltip("初始化DS1307、DS3231时钟模块");
    var dropdown_rtc_type = this.getFieldValue('rtc_type');
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_sda = Blockly.Arduino.valueToCode(this, 'sda', Blockly.Arduino.ORDER_ATOMIC);
    var value_scl = Blockly.Arduino.valueToCode(this, 'scl', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_SoftwareWire'] = '#include <SoftwareWire.h>';
  Blockly.Arduino.definitions_['include_'+dropdown_rtc_type] = '#include <'+dropdown_rtc_type+'.h>';
  Blockly.Arduino.definitions_['var_declare_SoftwareWire'+value_sda+'_'+value_scl] = 'SoftwareWire Wire_'+value_sda+'_'+value_scl+'('+value_sda+', '+value_scl+');';
  Blockly.Arduino.definitions_['var_declare_rtc_'+text_rtc_name] = dropdown_rtc_type+'<SoftwareWire> '+text_rtc_name+'(Wire_'+value_sda+'_'+value_scl+');';

  Blockly.Arduino.setups_['setup_rtc_'+text_rtc_name] = text_rtc_name+'.Begin();';
  var code = '';
  return code;
};

//DS1307时钟模块 返回上次连接的错误码
Blockly.Arduino.make_rtc_ds1307_LastError = function() {
  this.setTooltip("DS1307时钟模块 返回上次连接的错误码，返回数据的类型为uint8_t");
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.LastError()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS1307时钟模块 写入字节
Blockly.Arduino.make_rtc_ds1307_SetMemory_byte = function() {
  this.setTooltip("DS1307时钟模块 写入字节");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.SetMemory('+value_address+', '+value_data+');\n';
  return code;
};

//DS1307时钟模块 读取字节
Blockly.Arduino.make_rtc_ds1307_GetMemory_byte = function() {
  this.setTooltip("DS1307时钟模块 读取字节，返回数据的类型为uint8_t");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.GetMemory('+value_address+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS1307时钟模块 写入字节数组
Blockly.Arduino.make_rtc_ds1307_SetMemory_list = function() {
  this.setTooltip("DS1307时钟模块 写入字节数组，返回数据的类型为uint8_t");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.SetMemory('+value_address+', (const uint8_t*)'+value_data+', '+value_length+');\n';
  return code;
};

//DS1307时钟模块 读取字节数组
Blockly.Arduino.make_rtc_ds1307_GetMemory_list = function() {
  this.setTooltip("DS1307时钟模块 读取字节数组，返回数据的类型为uint8_t");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.GetMemory('+value_address+', '+value_data+', '+value_length+');\n';
  return code;
};

//DS1307时钟模块 读取字节数组，返回读取结果
Blockly.Arduino.make_rtc_ds1307_GetMemory_list_return = function() {
  this.setTooltip("DS1307时钟模块 读取字节数组，返回数据的类型为uint8_t");
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.GetMemory('+value_address+', '+value_data+', '+value_length+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS1307时钟模块 SQW管脚输出方波
Blockly.Arduino.make_rtc_ds1307_SetSquareWavePin = function() {
  this.setTooltip("DS1307时钟模块 SQW管脚输出方波");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.SetSquareWavePin('+dropdown_type+');\n';
  return code;
};

/*
* DS3231
*/
//DS3231时钟模块 返回上次连接的错误码
Blockly.Arduino.make_rtc_ds3231_LastError = function() {
  this.setTooltip("DS3231时钟模块 返回上次连接的错误码，返回数据的类型为uint8_t");
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.LastError()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231时钟模块 打开或关闭32KHZ管脚
Blockly.Arduino.make_rtc_ds3231_Enable32kHzPin = function() {
  this.setTooltip("DS3231时钟模块 打开或关闭32KHZ管脚");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.Enable32kHzPin('+value_data+');\n';
  return code;
};

//开-关
Blockly.Arduino.make_pin_on_off = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231时钟模块 设置SQW管脚的输出模式
Blockly.Arduino.make_rtc_ds3231_SetSquareWavePin = function() {
  this.setTooltip("DS3231时钟模块 设置SQW管脚的输出模式");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.SetSquareWavePin('+dropdown_type+', '+value_data+');\n';
  return code;
};

//DS3231时钟模块 设置SQW管脚的输出方波的频率
Blockly.Arduino.make_rtc_ds3231_SetSquareWavePinClockFrequency = function() {
  this.setTooltip("DS3231时钟模块 设置SQW管脚输出方波的频率");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.SetSquareWavePinClockFrequency('+dropdown_type+');\n';
  return code;
};

//DS3231时钟模块 设置闹钟1和闹钟2
Blockly.Arduino.make_rtc_ds3231_SetAlarm = function() {
  this.setTooltip("DS3231时钟模块 设置闹钟1和闹钟2");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.'+dropdown_type+'('+value_data+');\n';
  return code;
};

//DS3231时钟模块 获取闹钟1的日、时、分、秒、工作模式
Blockly.Arduino.make_DS3231_getAlarm1data = function() {
  this.setTooltip("DS3231时钟模块 获取闹钟1的日、时、分、秒、工作模式，返回数据类型为uint8_t(日、时、分、秒)，DS3231AlarmOneControl(工作模式)");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.GetAlarmOne().'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231时钟模块 获取闹钟1的日、时、分、工作模式
Blockly.Arduino.make_DS3231_getAlarm2data = function() {
  this.setTooltip("DS3231时钟模块 获取闹钟2的日、时、分、工作模式，返回数据类型为uint8_t(日、时、分)，DS3231AlarmOneControl(工作模式)");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.GetAlarmTwo().'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231时钟模块 获取闹钟1、闹钟2的时间和工作模式
Blockly.Arduino.make_DS3231_getAlarm = function() {
  this.setTooltip("DS3231时钟模块 获取闹钟1、闹钟2的时间和工作模式，返回数据的类型为DS3231AlarmOne(闹钟1)，DS3231AlarmTwo(闹钟2)");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231时钟模块 允许其他闹钟再次告警
Blockly.Arduino.make_rtc_ds3231_LatchAlarmsTriggeredFlags = function() {
  this.setTooltip("DS3231时钟模块 允许闹钟告警");
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.LatchAlarmsTriggeredFlags();\n';
  return code;
};

//DS3231时钟模块 返回上次告警信息，允许其他闹钟再次告警
Blockly.Arduino.make_rtc_ds3231_LatchAlarmsTriggeredFlags_return = function() {
  this.setTooltip("DS3231时钟模块 允许闹钟告警，返回数据的类型为DS3231AlarmFlag");
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.LatchAlarmsTriggeredFlags()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231时钟模块 获取温度
Blockly.Arduino.make_DS3231_getFloatDeg = function() {
  this.setTooltip("DS3231时钟模块 获取温度，返回数据的类型为float");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.GetTemperature().'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
* DS3231闹钟1
*/
//DS3231闹钟1 声明
Blockly.Arduino.make_DS3231AlarmOne_declare = function() {
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_alarm_name = this.getFieldValue('alarm_name');
  var code = 'DS3231AlarmOne '+text_alarm_name+' = '+value_data+';\n';
  return code;
};

//DS3231闹钟1 赋值
Blockly.Arduino.make_DS3231AlarmOne_set = function() {
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_alarm_name = this.getFieldValue('alarm_name');
  var code = text_alarm_name+' = '+value_data+';\n';
  return code;
};

//DS3231闹钟1 取值
Blockly.Arduino.make_DS3231AlarmOne_get = function() {
    var text_alarm_name = this.getFieldValue('alarm_name');
  var code = text_alarm_name;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231闹钟1 设置时间和工作模式
Blockly.Arduino.make_DS3231AlarmOne_set_time = function() {
    var value_day = Blockly.Arduino.valueToCode(this, 'day', Blockly.Arduino.ORDER_ATOMIC);
    var value_hour = Blockly.Arduino.valueToCode(this, 'hour', Blockly.Arduino.ORDER_ATOMIC);
    var value_minute = Blockly.Arduino.valueToCode(this, 'minute', Blockly.Arduino.ORDER_ATOMIC);
    var value_second = Blockly.Arduino.valueToCode(this, 'second', Blockly.Arduino.ORDER_ATOMIC);
    var value_flag = Blockly.Arduino.valueToCode(this, 'flag', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'DS3231AlarmOne('+value_day+', '+value_hour+', '+value_minute+', '+value_second+', '+value_flag+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231闹钟1 工作模式的类型
Blockly.Arduino.make_DS3231AlarmOne_flag_type = function() {
    var dropdown_flag_type = this.getFieldValue('flag_type');
  var code = dropdown_flag_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231闹钟1 获取日、时、分、秒、工作模式
Blockly.Arduino.make_DS3231AlarmOne_getAlarmdata = function() {
    var text_alarm_name = this.getFieldValue('alarm_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_alarm_name+'.'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
* DS3231闹钟2
*/
//DS3231闹钟2 声明
Blockly.Arduino.make_DS3231AlarmTwo_declare = function() {
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_alarm_name = this.getFieldValue('alarm_name');
  var code = 'DS3231AlarmTwo '+text_alarm_name+' = '+value_data+';\n';
  return code;
};

//DS3231闹钟2 赋值
Blockly.Arduino.make_DS3231AlarmTwo_set = function() {
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_alarm_name = this.getFieldValue('alarm_name');
  var code = text_alarm_name+' = '+value_data+';';
  return code;
};

//DS3231闹钟2 取值
Blockly.Arduino.make_DS3231AlarmTwo_get = function() {
    var text_alarm_name = this.getFieldValue('alarm_name');
  var code = text_alarm_name;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231闹钟2 设置时间和工作模式
Blockly.Arduino.make_DS3231AlarmTwo_set_time = function() {
    var value_day = Blockly.Arduino.valueToCode(this, 'day', Blockly.Arduino.ORDER_ATOMIC);
    var value_hour = Blockly.Arduino.valueToCode(this, 'hour', Blockly.Arduino.ORDER_ATOMIC);
    var value_minute = Blockly.Arduino.valueToCode(this, 'minute', Blockly.Arduino.ORDER_ATOMIC);
    var value_flag = Blockly.Arduino.valueToCode(this, 'flag', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'DS3231AlarmTwo('+value_day+', '+value_hour+', '+value_minute+', '+value_flag+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231闹钟2 工作模式的类型
Blockly.Arduino.make_DS3231AlarmTwo_flag_type = function() {
    var dropdown_flag_type = this.getFieldValue('flag_type');
  var code = dropdown_flag_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231闹钟2 获取日、时、分、工作模式
Blockly.Arduino.make_DS3231AlarmTwo_getAlarmdata = function() {
    var text_alarm_name = this.getFieldValue('alarm_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_alarm_name+'.'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
* DS3234
*/
//初始化DS3234时钟模块(SPI)
Blockly.Arduino.make_rtc_ds3234_begin = function() {
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_cs = Blockly.Arduino.valueToCode(this, 'cs', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_RtcDS3234'] = '#include <RtcDS3234.h>';
  Blockly.Arduino.definitions_['var_declare_rtc_'+text_rtc_name] = 'RtcDS3234<SPIClass> '+text_rtc_name+'(SPI, '+value_cs+');';

  Blockly.Arduino.setups_['setup_rtc_'+text_rtc_name] = text_rtc_name+'.Begin();';
  var code = '';
  return code;
};

/*
* DS3234_test
*/
//DS3234时钟模块 打开或关闭32KHZ管脚
Blockly.Arduino.make_rtc_ds3234_Enable32kHzPin = function() {
  this.setTooltip("DS3234时钟模块 打开或关闭32KHZ管脚");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.Enable32kHzPin('+value_data+');\n';
  return code;
};

//DS3234时钟模块 设置SQW管脚的输出模式
Blockly.Arduino.make_rtc_ds3234_SetSquareWavePin = function() {
  this.setTooltip("DS3234时钟模块 设置SQW管脚的输出模式");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.SetSquareWavePin('+dropdown_type+');\n';
  return code;
};

//DS3234时钟模块 设置SQW管脚的输出方波的频率
Blockly.Arduino.make_rtc_ds3234_SetSquareWavePinClockFrequency = function() {
  this.setTooltip("DS3234时钟模块 设置SQW管脚输出方波的频率");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.SetSquareWavePinClockFrequency('+dropdown_type+');\n';
  return code;
};

//DS3234时钟模块 设置闹钟1和闹钟2
Blockly.Arduino.make_rtc_ds3234_SetAlarm = function() {
  this.setTooltip("DS3234时钟模块 设置闹钟1和闹钟2");
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.'+dropdown_type+'('+value_data+');\n';
  return code;
};

//DS3234时钟模块 获取闹钟1的日、时、分、秒、工作模式
Blockly.Arduino.make_DS3234_getAlarm1data = function() {
  this.setTooltip("DS3234时钟模块 获取闹钟1的日、时、分、秒、工作模式，返回数据类型为uint8_t(日、时、分、秒)，DS3234AlarmOneControl(工作模式)");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.GetAlarmOne().'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3234时钟模块 获取闹钟2的日、时、分、工作模式
Blockly.Arduino.make_DS3234_getAlarm2data = function() {
  this.setTooltip("DS3234时钟模块 获取闹钟2的日、时、分、工作模式，返回数据类型为uint8_t(日、时、分)，DS3234AlarmOneControl(工作模式)");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.GetAlarmTwo().'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3234时钟模块 获取闹钟1、闹钟2的时间和工作模式
Blockly.Arduino.make_DS3234_getAlarm = function() {
  this.setTooltip("DS3234时钟模块 获取闹钟1、闹钟2的时间和工作模式，返回数据的类型为DS3234AlarmOne(闹钟1)，DS3234AlarmTwo(闹钟2)");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3234时钟模块 允许其他闹钟再次告警
Blockly.Arduino.make_rtc_ds3234_LatchAlarmsTriggeredFlags = function() {
  this.setTooltip("DS3234时钟模块 允许闹钟告警");
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.LatchAlarmsTriggeredFlags();\n';
  return code;
};

//DS3234时钟模块 返回上次告警信息，允许其他闹钟再次告警
Blockly.Arduino.make_rtc_ds3234_LatchAlarmsTriggeredFlags_return = function() {
  this.setTooltip("DS3234时钟模块 允许闹钟告警，返回数据的类型为DS3234AlarmFlag");
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.LatchAlarmsTriggeredFlags()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3234时钟模块 获取温度
Blockly.Arduino.make_DS3234_getFloatDeg = function() {
  this.setTooltip("DS3234时钟模块 获取温度，返回数据的类型为float");
    var text_rtc_name = this.getFieldValue('rtc_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_rtc_name+'.GetTemperature().'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
* DS3234闹钟1
*/
//DS3234闹钟1 声明
Blockly.Arduino.make_DS3234AlarmOne_declare = function() {
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_alarm_name = this.getFieldValue('alarm_name');
  var code = 'DS3234AlarmOne '+text_alarm_name+' = '+value_data+';\n';
  return code;
};

//DS3234闹钟1 赋值
Blockly.Arduino.make_DS3234AlarmOne_set = function() {
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_alarm_name = this.getFieldValue('alarm_name');
  var code = text_alarm_name+' = '+value_data+';\n';
  return code;
};

//DS3234闹钟1 取值
Blockly.Arduino.make_DS3234AlarmOne_get = function() {
    var text_alarm_name = this.getFieldValue('alarm_name');
  var code = text_alarm_name;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3234闹钟1 设置时间和工作模式
Blockly.Arduino.make_DS3234AlarmOne_set_time = function() {
    var value_day = Blockly.Arduino.valueToCode(this, 'day', Blockly.Arduino.ORDER_ATOMIC);
    var value_hour = Blockly.Arduino.valueToCode(this, 'hour', Blockly.Arduino.ORDER_ATOMIC);
    var value_minute = Blockly.Arduino.valueToCode(this, 'minute', Blockly.Arduino.ORDER_ATOMIC);
    var value_second = Blockly.Arduino.valueToCode(this, 'second', Blockly.Arduino.ORDER_ATOMIC);
    var value_flag = Blockly.Arduino.valueToCode(this, 'flag', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'DS3234AlarmOne('+value_day+', '+value_hour+', '+value_minute+', '+value_second+', '+value_flag+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3234闹钟1 工作模式的类型
Blockly.Arduino.make_DS3234AlarmOne_flag_type = function() {
    var dropdown_flag_type = this.getFieldValue('flag_type');
  var code = dropdown_flag_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3234闹钟1 获取日、时、分、秒、工作模式
Blockly.Arduino.make_DS3234AlarmOne_getAlarmdata = function() {
    var text_alarm_name = this.getFieldValue('alarm_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_alarm_name+'.'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
* DS3234闹钟2
*/
//DS3234闹钟2 声明
Blockly.Arduino.make_DS3234AlarmTwo_declare = function() {
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_alarm_name = this.getFieldValue('alarm_name');
  var code = 'DS3234AlarmTwo '+text_alarm_name+' = '+value_data+';\n';
  return code;
};

//DS3234闹钟2 赋值
Blockly.Arduino.make_DS3234AlarmTwo_set = function() {
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var text_alarm_name = this.getFieldValue('alarm_name');
  var code = text_alarm_name+' = '+value_data+';';
  return code;
};

//DS3234闹钟2 取值
Blockly.Arduino.make_DS3234AlarmTwo_get = function() {
    var text_alarm_name = this.getFieldValue('alarm_name');
  var code = text_alarm_name;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3234闹钟2 设置时间和工作模式
Blockly.Arduino.make_DS3234AlarmTwo_set_time = function() {
    var value_day = Blockly.Arduino.valueToCode(this, 'day', Blockly.Arduino.ORDER_ATOMIC);
    var value_hour = Blockly.Arduino.valueToCode(this, 'hour', Blockly.Arduino.ORDER_ATOMIC);
    var value_minute = Blockly.Arduino.valueToCode(this, 'minute', Blockly.Arduino.ORDER_ATOMIC);
    var value_flag = Blockly.Arduino.valueToCode(this, 'flag', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'DS3234AlarmTwo('+value_day+', '+value_hour+', '+value_minute+', '+value_flag+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3234闹钟2 工作模式的类型
Blockly.Arduino.make_DS3234AlarmTwo_flag_type = function() {
    var dropdown_flag_type = this.getFieldValue('flag_type');
  var code = dropdown_flag_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3234闹钟2 获取日、时、分、工作模式
Blockly.Arduino.make_DS3234AlarmTwo_getAlarmdata = function() {
    var text_alarm_name = this.getFieldValue('alarm_name');
    var dropdown_type = this.getFieldValue('type');
  var code = text_alarm_name+'.'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
* DS3234RAM
*/
//DS3234时钟模块 写入字节
Blockly.Arduino.make_rtc_ds3234_SetMemory_byte = function() {
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.SetMemory('+value_address+', '+value_data+');\n';
  return code;
};

//DS3234时钟模块 读取字节
Blockly.Arduino.make_rtc_ds3234_GetMemory_byte = function() {
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
  var code = text_rtc_name+'.GetMemory('+value_address+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3234时钟模块 写入字节数组
Blockly.Arduino.make_rtc_ds3234_SetMemory_list = function() {
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.SetMemory('+value_address+', (const uint8_t*)'+value_data+', '+value_length+');\n';
  return code;
};

//DS3234时钟模块 读取字节数组
Blockly.Arduino.make_rtc_ds3234_GetMemory_list = function() {
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.GetMemory('+value_address+', '+value_data+', '+value_length+');\n';
  return code;
};

//DS3234时钟模块 读取字节数组，返回读取结果
Blockly.Arduino.make_rtc_ds3234_GetMemory_list_return = function() {
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var text_rtc_name = this.getFieldValue('rtc_name');
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_rtc_name+'.GetMemory('+value_address+', '+value_data+', '+value_length+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化PCF8574 IO扩展模块
Blockly.Arduino.make_arduino_pcf8574_begin = function() {
    var text_pcf8574_name = this.getFieldValue('pcf8574_name');
    var value_pcf8574_address = Blockly.Arduino.valueToCode(this, 'pcf8574_address', Blockly.Arduino.ORDER_ATOMIC);
    var statements_pcf8574_pin_type = Blockly.Arduino.statementToCode(this, 'pcf8574_pin_type');

  var statements_pcf8574_pin_type_1 = '';
  if(statements_pcf8574_pin_type != '')
  {
    for(var i of statements_pcf8574_pin_type)
    {
      if(i == '.')
        statements_pcf8574_pin_type_1 = statements_pcf8574_pin_type_1 + text_pcf8574_name + '.';
      else
        statements_pcf8574_pin_type_1+=i;
    }
    statements_pcf8574_pin_type_1 = statements_pcf8574_pin_type_1.substring(0,statements_pcf8574_pin_type_1.length - 1);
  }

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_PCF8574'] = '#include "PCF8574.h"';
  Blockly.Arduino.definitions_['var_declare_pcf8574_'+text_pcf8574_name] = 'PCF8574 '+text_pcf8574_name+';';
  if(statements_pcf8574_pin_type != '')
    Blockly.Arduino.setups_['setup_pcf8574_'+text_pcf8574_name] = ''+text_pcf8574_name+'.begin('+value_pcf8574_address+');'
                                                                  +'\n' + statements_pcf8574_pin_type_1;
  else
    Blockly.Arduino.setups_['setup_pcf8574_'+text_pcf8574_name] = ''+text_pcf8574_name+'.begin('+value_pcf8574_address+');';
  var code = '';
  return code;
};

//PCF8574 IO扩展模块 管脚类型
Blockly.Arduino.make_arduino_pcf8574_pin_type = function() {
    var value_pcf8574_pin = Blockly.Arduino.valueToCode(this, 'pcf8574_pin', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_pcf8574_pin_type = this.getFieldValue('pcf8574_pin_type');
  var code = '';
  var surround_parent = this.getSurroundParent();
  if(surround_parent && surround_parent.type == 'make_arduino_pcf8574_begin')
    code = '.pinMode('+value_pcf8574_pin+', '+dropdown_pcf8574_pin_type+');\n';
  return code;
};

//PCF8574 IO扩展模块 数字输出管脚
Blockly.Arduino.make_arduino_pcf8574_digital_pin = function() {
    var dropdown_pin_data = this.getFieldValue('pin_data');
  var code = dropdown_pin_data;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//PCF8574 IO扩展模块 数字输出管脚状态
Blockly.Arduino.make_arduino_pcf8574_digital_out_type = function() {
    var dropdown_output_data = this.getFieldValue('output_data');
  var code = dropdown_output_data;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//PCF8574 IO扩展模块 数字输出
Blockly.Arduino.make_arduino_pcf8574_digitalWrite = function() {
    var text_pcf8574_name = this.getFieldValue('pcf8574_name');
    var value_pcf8574_pin = Blockly.Arduino.valueToCode(this, 'pcf8574_pin', Blockly.Arduino.ORDER_ATOMIC);
    var value_pcf8574_out_data = Blockly.Arduino.valueToCode(this, 'pcf8574_out_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_pcf8574_name+'.digitalWrite('+value_pcf8574_pin+', '+value_pcf8574_out_data+');\n';
  return code;
};

//PCF8574 IO扩展模块 数字输入
Blockly.Arduino.make_arduino_pcf8574_digitalRead = function() {
    var text_pcf8574_name = this.getFieldValue('pcf8574_name');
    var value_pcf8574_pin = Blockly.Arduino.valueToCode(this, 'pcf8574_pin', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_pcf8574_name+'.digitalRead('+value_pcf8574_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//PCF8574 IO扩展模块 翻转管脚
Blockly.Arduino.make_arduino_pcf8574_toggle = function() {
    var text_pcf8574_name = this.getFieldValue('pcf8574_name');
    var value_pcf8574_pin = Blockly.Arduino.valueToCode(this, 'pcf8574_pin', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_pcf8574_name+'.toggle('+value_pcf8574_pin+');\n';
  return code;
};

//PCF8574 IO扩展模块 设置各管脚电平
Blockly.Arduino.make_arduino_pcf8574_write = function() {
    var text_pcf8574_name = this.getFieldValue('pcf8574_name');
    var value_pcf8574_pin = Blockly.Arduino.valueToCode(this, 'pcf8574_pin', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_pcf8574_name+'.write('+value_pcf8574_pin+');\n';
  return code;
};

//PCF8574 IO扩展模块 设置全部管脚电平
Blockly.Arduino.make_arduino_pcf8574_set_clear = function() {
    var text_pcf8574_name = this.getFieldValue('pcf8574_name');
    var dropdown_set_clear_type = this.getFieldValue('set_clear_type');
  var code = ''+text_pcf8574_name+'.'+dropdown_set_clear_type+'();\n';
  return code;
};

//PCF8574 IO扩展模块 开启中断
Blockly.Arduino.make_arduino_pcf8574_enableInterrupt = function() {
    var text_pcf8574_name = this.getFieldValue('pcf8574_name');
    var value_pcf8574_int_pin = Blockly.Arduino.valueToCode(this, 'pcf8574_int_pin', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['function_ISRgateway'] = 'void ISRgateway() {'
                                                  +'\n  expander.checkForInterrupt();'
                                                  +'\n}';
  var code = ''+text_pcf8574_name+'.enableInterrupt('+value_pcf8574_int_pin+', ISRgateway);\n';
  return code;
};

//PCF8574 IO扩展模块 结束中断
Blockly.Arduino.make_arduino_pcf8574_disableInterrupt = function() {
    var text_pcf8574_name = this.getFieldValue('pcf8574_name');
  var code = ''+text_pcf8574_name+'.disableInterrupt();\n';
  return code;
};

//PCF8574 IO扩展模块 设置中断管脚
Blockly.Arduino.make_arduino_pcf8574_attachInterrupt = function() {
    var text_pcf8574_name = this.getFieldValue('pcf8574_name');
    var value_pcf8574_int_pin = Blockly.Arduino.valueToCode(this, 'pcf8574_int_pin', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_pcf8574_int_type = this.getFieldValue('pcf8574_int_type');
    var statements_pcf8574_int_do = Blockly.Arduino.statementToCode(this, 'pcf8574_int_do');  

  Blockly.Arduino.definitions_['function_PCF8574_Interrupt_PIN'+value_pcf8574_int_pin] = 'void PCF8574_Interrupt_PIN'+value_pcf8574_int_pin+'() {'
                                                                                      +'\n  '+statements_pcf8574_int_do
                                                                                      +'\n}';
  var code = ''+text_pcf8574_name+'.attachInterrupt('+value_pcf8574_int_pin+', PCF8574_Interrupt_PIN'+value_pcf8574_int_pin+', '+dropdown_pcf8574_int_type+');\n';
  return code;
};

//PCF8574 IO扩展模块 取消中断管脚
Blockly.Arduino.make_arduino_pcf8574_detachInterrupt = function() {
    var text_pcf8574_name = this.getFieldValue('pcf8574_name');
    var value_pcf8574_int_pin = Blockly.Arduino.valueToCode(this, 'pcf8574_int_pin', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_pcf8574_name+'.detachInterrupt('+value_pcf8574_int_pin+');\n';
  return code;
};

//初始化MCP23017 IO扩展模块
Blockly.Arduino.make_arduino_mcp23017_begin = function() {
    var text_mcp23017_name = this.getFieldValue('mcp23017_name');
    var value_mcp23017_address = Blockly.Arduino.valueToCode(this, 'mcp23017_address', Blockly.Arduino.ORDER_ATOMIC);
    var statements_mcp23017_pin_type = Blockly.Arduino.statementToCode(this, 'mcp23017_pin_type');  
  var statements_mcp23017_pin_type_1 = '';
  if(statements_mcp23017_pin_type != '')
  {
    for(var i of statements_mcp23017_pin_type)
    {
      if(i == '.')
        statements_mcp23017_pin_type_1 = statements_mcp23017_pin_type_1 + text_mcp23017_name + '.';
      else
        statements_mcp23017_pin_type_1+=i;
    }
    statements_mcp23017_pin_type_1 = statements_mcp23017_pin_type_1.substring(0,statements_mcp23017_pin_type_1.length - 1);
  }

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_MCP23017'] = '#include "Adafruit_MCP23017.h"';
  Blockly.Arduino.definitions_['var_declare_mcp23017_'+text_mcp23017_name] = 'Adafruit_MCP23017 '+text_mcp23017_name+';';
  if(statements_mcp23017_pin_type != '')
    Blockly.Arduino.setups_['setup_mcp23017_'+text_mcp23017_name] = ''+text_mcp23017_name+'.begin('+value_mcp23017_address+');'
                                                                  +'\n' + statements_mcp23017_pin_type_1;
  else
    Blockly.Arduino.setups_['setup_mcp23017_'+text_mcp23017_name] = ''+text_mcp23017_name+'.begin('+value_mcp23017_address+');';
  var code = '';
  return code;
};

//MCP23017 IO扩展模块 设置管脚模式
Blockly.Arduino.make_arduino_mcp23017_pin_type = function() {
    var value_mcp23017_pin = Blockly.Arduino.valueToCode(this, 'mcp23017_pin', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_mcp23017_pin_type = this.getFieldValue('mcp23017_pin_type');
  var code = '';
  if(dropdown_mcp23017_pin_type == 'INPUT_PULLUP')
    code = '.pinMode('+value_mcp23017_pin+', INPUT);\n.pullUp('+value_mcp23017_pin+', HIGH);\n';
  else
    code = '.pinMode('+value_mcp23017_pin+', '+dropdown_mcp23017_pin_type+');\n';
  return code;
};

//MCP23017 IO扩展模块 数字管脚定义
Blockly.Arduino.make_arduino_mcp23017_digital_pin = function() {
    var dropdown_pin_data = this.getFieldValue('pin_data');
  var code = dropdown_pin_data;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//MCP23017 IO扩展模块 输出状态定义
Blockly.Arduino.make_arduino_mcp23017_digital_out_type = function() {
    var dropdown_output_data = this.getFieldValue('output_data');
  var code = dropdown_output_data;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//MCP23017 IO扩展模块 管脚输出状态定义
Blockly.Arduino.make_arduino_mcp23017_digitalWrite = function() {
    var text_mcp23017_name = this.getFieldValue('mcp23017_name');
    var value_mcp23017_pin = Blockly.Arduino.valueToCode(this, 'mcp23017_pin', Blockly.Arduino.ORDER_ATOMIC);
    var value_mcp23017_out_data = Blockly.Arduino.valueToCode(this, 'mcp23017_out_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_mcp23017_name+'.digitalWrite('+value_mcp23017_pin+', '+value_mcp23017_out_data+');\n';
  return code;
};

//MCP23017 IO扩展模块 管脚输入定义
Blockly.Arduino.make_arduino_mcp23017_digitalRead = function() {
    var text_mcp23017_name = this.getFieldValue('mcp23017_name');
    var value_mcp23017_pin = Blockly.Arduino.valueToCode(this, 'mcp23017_pin', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_mcp23017_name+'.digitalRead('+value_mcp23017_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//MCP23017 IO扩展模块 设置各管脚的电平
Blockly.Arduino.make_arduino_mcp23017_write = function() {
    var text_mcp23017_name = this.getFieldValue('mcp23017_name');
    var value_mcp23017_pinA = Blockly.Arduino.valueToCode(this, 'mcp23017_pinA', Blockly.Arduino.ORDER_ATOMIC);
    var value_mcp23017_pinB = Blockly.Arduino.valueToCode(this, 'mcp23017_pinB', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = '';
  if(value_mcp23017_pinA == '' || value_mcp23017_pinB == '')
    code = ''+text_mcp23017_name+'.writeGPIOAB(0xffff);\n';
  else
  {
    value_mcp23017_pinA = value_mcp23017_pinA.substring(1);
    value_mcp23017_pinB = value_mcp23017_pinB.substring(1);
    value_mcp23017_pinA = parseInt(value_mcp23017_pinA,2).toString(16);
    value_mcp23017_pinB = parseInt(value_mcp23017_pinB,2).toString(16);
    if(value_mcp23017_pinA.length == 1)
      value_mcp23017_pinA = '0' + value_mcp23017_pinA;
    if(value_mcp23017_pinB.length == 1)
      value_mcp23017_pinB = '0' + value_mcp23017_pinB;
    code = ''+text_mcp23017_name+'.writeGPIOAB(0x'+value_mcp23017_pinB+value_mcp23017_pinA+');\n';
  }
  return code;
};

//MCP23017 IO扩展模块 启用中断
Blockly.Arduino.make_arduino_mcp23017_setupInterrupts = function() {
    var text_mcp23017_name = this.getFieldValue('mcp23017_name');
    var value_mcp23017_mirroring = Blockly.Arduino.valueToCode(this, 'mcp23017_mirroring', Blockly.Arduino.ORDER_ATOMIC);
    var value_mcp23017_openDrain = Blockly.Arduino.valueToCode(this, 'mcp23017_openDrain', Blockly.Arduino.ORDER_ATOMIC);
  var code = '';
  if(value_mcp23017_openDrain == 'open')
    code = ''+text_mcp23017_name+'.setupInterrupts('+value_mcp23017_mirroring+', true);\n';
  else
    code = ''+text_mcp23017_name+'.setupInterrupts('+value_mcp23017_mirroring+', false, '+value_mcp23017_openDrain+');\n';
  return code;
};

//MCP23017 IO扩展模块 设置中断模式
Blockly.Arduino.make_arduino_mcp23017_setupInterrupts_mode = function() {
    var dropdown_mode = this.getFieldValue('mode');
  var code = dropdown_mode;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//MCP23017 IO扩展模块 设置中断管脚
Blockly.Arduino.make_arduino_mcp23017_attachInterrupt = function() {
    var text_mcp23017_name = this.getFieldValue('mcp23017_name');
    var value_mcp23017_int_pin = Blockly.Arduino.valueToCode(this, 'mcp23017_int_pin', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_mcp23017_int_type = this.getFieldValue('mcp23017_int_type');
  var code = ''+text_mcp23017_name+'.setupInterruptPin('+value_mcp23017_int_pin+','+dropdown_mcp23017_int_type+');\n';
  return code;
};

//MCP23017 IO扩展模块 获取最近一次的中断管脚和其数据
Blockly.Arduino.make_arduino_mcp23017_getLastInterrupt = function() {
    var text_mcp23017_name = this.getFieldValue('mcp23017_name');
    var dropdown_data = this.getFieldValue('data');
  var code = text_mcp23017_name+'.getLastInterrupt'+dropdown_data+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化PAJ7620手势传感器
Blockly.Arduino.make_arduino_paj7620_begin = function() {
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_paj7620'] = '#include "paj7620.h"';
  Blockly.Arduino.setups_['setup_paj7620'] = 'paj7620Init();';
  var code = '';
  return code;
};

//初始化PAJ7620手势传感器-1
Blockly.Arduino.make_arduino_paj7620_begin_1 = function() {
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_paj7620'] = '#include "paj7620.h"';
  var code = 'paj7620Init()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//PAJ7620手势传感器 获取数据
Blockly.Arduino.make_arduino_paj7620_ReadReg = function() {
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var value_qty = Blockly.Arduino.valueToCode(this, 'qty', Blockly.Arduino.ORDER_ATOMIC);
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'paj7620ReadReg('+value_address+', '+value_qty+', &'+value_data+');\n';
  return code;
};

//PAJ7620手势传感器 获取数据-返回请求结果
Blockly.Arduino.make_arduino_paj7620_ReadReg_1 = function() {
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var value_qty = Blockly.Arduino.valueToCode(this, 'qty', Blockly.Arduino.ORDER_ATOMIC);
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'paj7620ReadReg('+value_address+', '+value_qty+', &'+value_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//PAJ7620手势传感器 手势数据
Blockly.Arduino.make_arduino_paj7620_data = function() {
    var dropdown_data = this.getFieldValue('data');
  var code = dropdown_data;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化TCA9548A I2C扩展模块
Blockly.Arduino.make_arduino_tca9548a_begin = function() {
    var text_tca9548a_name = this.getFieldValue('tca9548a_name');
    var value_tca9548a_address = Blockly.Arduino.valueToCode(this, 'tca9548a_address', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_TCA9548A'] = '#include "TCA9548A.h"';
  Blockly.Arduino.definitions_['var_declare_TCA9548A_'+text_tca9548a_name] = 'TCA9548A '+text_tca9548a_name+'('+value_tca9548a_address+');';
  Blockly.Arduino.setups_['setup_paj7620_'+text_tca9548a_name] = ''+text_tca9548a_name+'.init();';
  var code = '';
  return code;
};

//TCA9548A I2C扩展模块 关闭所有端口
Blockly.Arduino.make_arduino_tca9548a_disable = function() {
    var text_tca9548a_name = this.getFieldValue('tca9548a_name');
  var code = ''+text_tca9548a_name+'.disable();\n';
  return code;
};

//TCA9548A I2C扩展模块 设置当前要使用的端口
Blockly.Arduino.make_arduino_tca9548a_set_port = function() {
    var text_tca9548a_name = this.getFieldValue('tca9548a_name');
    var value_port_data = Blockly.Arduino.valueToCode(this, 'port_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_tca9548a_name+'.set_port('+value_port_data+');\n';
  return code;
};

//端口号
Blockly.Arduino.make_arduino_tca9548a_set_port_data = function() {
    var dropdown_data = this.getFieldValue('data');
  var code = dropdown_data;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//TCA9548A I2C扩展模块 获取当前正在使用的端口对应的端口号
Blockly.Arduino.make_arduino_tca9548a_get_port = function() {
    var text_tca9548a_name = this.getFieldValue('tca9548a_name');
  var code = ''+text_tca9548a_name+'.get_port()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化OLED（I2C）
Blockly.Arduino.make_arduino_oled_begin = function() {
    var value_oled_begin_pin_reset = Blockly.Arduino.valueToCode(this, 'oled_begin_pin_reset', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_arduino_oled_begin_type = this.getFieldValue('arduino_oled_begin_type');
    var text_oled_begin_name = this.getFieldValue('oled_begin_name');
    var value_oled_begin_address = Blockly.Arduino.valueToCode(this, 'oled_begin_address', Blockly.Arduino.ORDER_ATOMIC);

    //Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
    Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
    Blockly.Arduino.definitions_['include_Adafruit_SSD1306'] = '#include <Adafruit_SSD1306.h>';

    if(dropdown_arduino_oled_begin_type == '128x64')
    {
      
      Blockly.Arduino.definitions_['var_declare_oled_begin_'+text_oled_begin_name] = '#define '+text_oled_begin_name+'_SCREEN_WIDTH 128 '
                                                                              +'\n#define '+text_oled_begin_name+'_SCREEN_HEIGHT 64'
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_RESET     '+value_oled_begin_pin_reset
                                                                              +'\nAdafruit_SSD1306 '+text_oled_begin_name+'('+text_oled_begin_name+'_SCREEN_WIDTH, '+text_oled_begin_name+'_SCREEN_HEIGHT, &Wire, '+text_oled_begin_name+'_OLED_RESET);';
      
    }
    else if(dropdown_arduino_oled_begin_type == '128x32')
    {
      
      Blockly.Arduino.definitions_['var_declare_oled_begin_'+text_oled_begin_name] = '#define '+text_oled_begin_name+'_SCREEN_WIDTH 128 '
                                                                              +'\n#define '+text_oled_begin_name+'_SCREEN_HEIGHT 32'
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_RESET     '+value_oled_begin_pin_reset
                                                                              +'\nAdafruit_SSD1306 '+text_oled_begin_name+'('+text_oled_begin_name+'_SCREEN_WIDTH, '+text_oled_begin_name+'_SCREEN_HEIGHT, &Wire, '+text_oled_begin_name+'_OLED_RESET);';
      
    }
    else
    {
      
      Blockly.Arduino.definitions_['var_declare_oled_begin_'+text_oled_begin_name] = '#define '+text_oled_begin_name+'_SCREEN_WIDTH 96 '
                                                                              +'\n#define '+text_oled_begin_name+'_SCREEN_HEIGHT 16'
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_RESET     '+value_oled_begin_pin_reset
                                                                              +'\nAdafruit_SSD1306 '+text_oled_begin_name+'('+text_oled_begin_name+'_SCREEN_WIDTH, '+text_oled_begin_name+'_SCREEN_HEIGHT, &Wire, '+text_oled_begin_name+'_OLED_RESET);';
      
    }

    /*
    Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';
    Blockly.Arduino.setups_['setup_oled_begin_'+text_oled_begin_name] = 'if(!'+text_oled_begin_name+'.begin(SSD1306_SWITCHCAPVCC,'+value_oled_begin_address+')){'
                                                                        + '\n    Serial.println(F("SSD1306 allocation failed"));'
                                                                        + '\n    for(;;);'
                                                                        + '\n  }';
    */
    Blockly.Arduino.setups_['setup_oled_begin_'+text_oled_begin_name] = text_oled_begin_name+'.begin(SSD1306_SWITCHCAPVCC,'+value_oled_begin_address+');';
  var code = '';
  return code;
};

//初始化OLED（I2C）
Blockly.Arduino.make_arduino_oled_begin_change_2019_10_19 = function() {
    var value_oled_begin_pin_reset = Blockly.Arduino.valueToCode(this, 'oled_begin_pin_reset', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_arduino_oled_begin_type = this.getFieldValue('arduino_oled_begin_type');
    var text_oled_begin_name = this.getFieldValue('oled_begin_name');
    var value_oled_begin_address = Blockly.Arduino.valueToCode(this, 'oled_begin_address', Blockly.Arduino.ORDER_ATOMIC);

    //Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
    Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
    Blockly.Arduino.definitions_['include_Adafruit_SSD1306'] = '#include <Adafruit_SSD1306.h>';

    if(dropdown_arduino_oled_begin_type == '128x64')
    {
      
      Blockly.Arduino.definitions_['var_declare_oled_begin_'+text_oled_begin_name] = '#define '+text_oled_begin_name+'_SCREEN_WIDTH 128 '
                                                                              +'\n#define '+text_oled_begin_name+'_SCREEN_HEIGHT 64'
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_RESET     '+value_oled_begin_pin_reset
                                                                              +'\nAdafruit_SSD1306 '+text_oled_begin_name+'('+text_oled_begin_name+'_SCREEN_WIDTH, '+text_oled_begin_name+'_SCREEN_HEIGHT, &Wire, '+text_oled_begin_name+'_OLED_RESET);';
      
    }
    else if(dropdown_arduino_oled_begin_type == '128x32')
    {
      
      Blockly.Arduino.definitions_['var_declare_oled_begin_'+text_oled_begin_name] = '#define '+text_oled_begin_name+'_SCREEN_WIDTH 128 '
                                                                              +'\n#define '+text_oled_begin_name+'_SCREEN_HEIGHT 32'
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_RESET     '+value_oled_begin_pin_reset
                                                                              +'\nAdafruit_SSD1306 '+text_oled_begin_name+'('+text_oled_begin_name+'_SCREEN_WIDTH, '+text_oled_begin_name+'_SCREEN_HEIGHT, &Wire, '+text_oled_begin_name+'_OLED_RESET);';
      
    }
    else
    {
      
      Blockly.Arduino.definitions_['var_declare_oled_begin_'+text_oled_begin_name] = '#define '+text_oled_begin_name+'_SCREEN_WIDTH 96 '
                                                                              +'\n#define '+text_oled_begin_name+'_SCREEN_HEIGHT 16'
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_RESET     '+value_oled_begin_pin_reset
                                                                              +'\nAdafruit_SSD1306 '+text_oled_begin_name+'('+text_oled_begin_name+'_SCREEN_WIDTH, '+text_oled_begin_name+'_SCREEN_HEIGHT, &Wire, '+text_oled_begin_name+'_OLED_RESET);';
      
    }

  var code = text_oled_begin_name+'.begin(SSD1306_SWITCHCAPVCC,'+value_oled_begin_address+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化OLED（SPI）
Blockly.Arduino.make_arduino_oled_begin_1 = function() {
    var dropdown_arduino_oled_begin_type = this.getFieldValue('arduino_oled_begin_type');
    var text_oled_begin_name = this.getFieldValue('oled_begin_name');
    var value_oled_begin_mosi = Blockly.Arduino.valueToCode(this, 'oled_begin_mosi', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_begin_clk = Blockly.Arduino.valueToCode(this, 'oled_begin_clk', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_begin_dc = Blockly.Arduino.valueToCode(this, 'oled_begin_dc', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_begin_reset = Blockly.Arduino.valueToCode(this, 'oled_begin_reset', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_begin_cs = Blockly.Arduino.valueToCode(this, 'oled_begin_cs', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
    //Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
    Blockly.Arduino.definitions_['include_Adafruit_SSD1306'] = '#include <Adafruit_SSD1306.h>';

    if(dropdown_arduino_oled_begin_type == '128x64')
    {
      Blockly.Arduino.definitions_['var_declare_oled_begin_'+text_oled_begin_name] = '#define '+text_oled_begin_name+'_SCREEN_WIDTH 128 '
                                                                              +'\n#define '+text_oled_begin_name+'_SCREEN_HEIGHT 64'
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_MOSI   '+value_oled_begin_mosi
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_CLK   '+value_oled_begin_clk
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_DC    '+value_oled_begin_dc
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_CS    '+value_oled_begin_cs
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_RESET '+value_oled_begin_reset
                                                                              +'\nAdafruit_SSD1306 '+text_oled_begin_name+'('+text_oled_begin_name+'_SCREEN_WIDTH, '+text_oled_begin_name+'_SCREEN_HEIGHT,'+text_oled_begin_name+'_OLED_MOSI, '+text_oled_begin_name+'_OLED_CLK, '+text_oled_begin_name+'_OLED_DC, '+text_oled_begin_name+'_OLED_RESET, '+text_oled_begin_name+'_OLED_CS);';
    }
    else if(dropdown_arduino_oled_begin_type == '128x32')
    {
      Blockly.Arduino.definitions_['var_declare_oled_begin_'+text_oled_begin_name] = '#define '+text_oled_begin_name+'_SCREEN_WIDTH 128 '
                                                                              +'\n#define '+text_oled_begin_name+'_SCREEN_HEIGHT 32'
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_MOSI   '+value_oled_begin_mosi
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_CLK   '+value_oled_begin_clk
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_DC    '+value_oled_begin_dc
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_CS    '+value_oled_begin_cs
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_RESET '+value_oled_begin_reset
                                                                              +'\nAdafruit_SSD1306 '+text_oled_begin_name+'('+text_oled_begin_name+'_SCREEN_WIDTH, '+text_oled_begin_name+'_SCREEN_HEIGHT,'+text_oled_begin_name+'_OLED_MOSI, '+text_oled_begin_name+'_OLED_CLK, '+text_oled_begin_name+'_OLED_DC, '+text_oled_begin_name+'_OLED_RESET, '+text_oled_begin_name+'_OLED_CS);';
    }
    else
    {
      Blockly.Arduino.definitions_['var_declare_oled_begin_'+text_oled_begin_name] = '#define '+text_oled_begin_name+'_SCREEN_WIDTH 96 '
                                                                              +'\n#define '+text_oled_begin_name+'_SCREEN_HEIGHT 16'
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_MOSI   '+value_oled_begin_mosi
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_CLK   '+value_oled_begin_clk
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_DC    '+value_oled_begin_dc
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_CS    '+value_oled_begin_cs
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_RESET '+value_oled_begin_reset
                                                                              +'\nAdafruit_SSD1306 '+text_oled_begin_name+'('+text_oled_begin_name+'_SCREEN_WIDTH, '+text_oled_begin_name+'_SCREEN_HEIGHT,'+text_oled_begin_name+'_OLED_MOSI, '+text_oled_begin_name+'_OLED_CLK, '+text_oled_begin_name+'_OLED_DC, '+text_oled_begin_name+'_OLED_RESET, '+text_oled_begin_name+'_OLED_CS);';
    }

    Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';
    Blockly.Arduino.setups_['setup_oled_begin_1_'+text_oled_begin_name] = 'if(!'+text_oled_begin_name+'.begin(SSD1306_SWITCHCAPVCC)){'
                                                                        + '\n    Serial.println(F("SSD1306 allocation failed"));'
                                                                        + '\n    for(;;);'
                                                                        + '\n  }';
  var code = '';
  return code;
};

//初始化OLED（SPI）
Blockly.Arduino.make_arduino_oled_begin_2 = function() {
    var dropdown_arduino_oled_begin_type = this.getFieldValue('arduino_oled_begin_type');
    var text_oled_begin_name = this.getFieldValue('oled_begin_name');
    var value_oled_begin_dc = Blockly.Arduino.valueToCode(this, 'oled_begin_dc', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_begin_reset = Blockly.Arduino.valueToCode(this, 'oled_begin_reset', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_begin_cs = Blockly.Arduino.valueToCode(this, 'oled_begin_cs', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
    //Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
    Blockly.Arduino.definitions_['include_Adafruit_SSD1306'] = '#include <Adafruit_SSD1306.h>';

    if(dropdown_arduino_oled_begin_type == '128x64')
    {
      Blockly.Arduino.definitions_['var_declare_oled_begin_'+text_oled_begin_name] = '#define '+text_oled_begin_name+'_SCREEN_WIDTH 128 '
                                                                              +'\n#define '+text_oled_begin_name+'_SCREEN_HEIGHT 64'
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_DC    '+value_oled_begin_dc
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_CS    '+value_oled_begin_cs
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_RESET '+value_oled_begin_reset
                                                                              +'\nAdafruit_SSD1306 '+text_oled_begin_name+'('+text_oled_begin_name+'_SCREEN_WIDTH, '+text_oled_begin_name+'_SCREEN_HEIGHT,&SPI, '+text_oled_begin_name+'_OLED_DC, '+text_oled_begin_name+'_OLED_RESET, '+text_oled_begin_name+'_OLED_CS);';
    }
    else if(dropdown_arduino_oled_begin_type == '128x32')
    {
      Blockly.Arduino.definitions_['var_declare_oled_begin_'+text_oled_begin_name] = '#define '+text_oled_begin_name+'_SCREEN_WIDTH 128 '
                                                                              +'\n#define '+text_oled_begin_name+'_SCREEN_HEIGHT 32'
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_DC    '+value_oled_begin_dc
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_CS    '+value_oled_begin_cs
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_RESET '+value_oled_begin_reset
                                                                              +'\nAdafruit_SSD1306 '+text_oled_begin_name+'('+text_oled_begin_name+'_SCREEN_WIDTH, '+text_oled_begin_name+'_SCREEN_HEIGHT,&SPI, '+text_oled_begin_name+'_OLED_DC, '+text_oled_begin_name+'_OLED_RESET, '+text_oled_begin_name+'_OLED_CS);';
    }
    else
    {
      Blockly.Arduino.definitions_['var_declare_oled_begin_'+text_oled_begin_name] = '#define '+text_oled_begin_name+'_SCREEN_WIDTH 96 '
                                                                              +'\n#define '+text_oled_begin_name+'_SCREEN_HEIGHT 16'
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_DC    '+value_oled_begin_dc
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_CS    '+value_oled_begin_cs
                                                                              +'\n#define '+text_oled_begin_name+'_OLED_RESET '+value_oled_begin_reset
                                                                              +'\nAdafruit_SSD1306 '+text_oled_begin_name+'('+text_oled_begin_name+'_SCREEN_WIDTH, '+text_oled_begin_name+'_SCREEN_HEIGHT,&SPI, '+text_oled_begin_name+'_OLED_DC, '+text_oled_begin_name+'_OLED_RESET, '+text_oled_begin_name+'_OLED_CS);';
    }

    Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';
    Blockly.Arduino.setups_['setup_oled_begin_2_'+text_oled_begin_name] = 'if(!'+text_oled_begin_name+'.begin(SSD1306_SWITCHCAPVCC)){'
                                                                        + '\n    Serial.println(F("SSD1306 allocation failed"));'
                                                                        + '\n    for(;;);'
                                                                        + '\n  }';
  var code = '';
  return code;
};

//将一个数字转化成16进制字符串形式
function toHex(num){
  return num<16?"0x0"+num.toString(16).toUpperCase():"0x"+num.toString(16).toUpperCase();
};

//将文本或符号编码
function encodeUnicode(str){
  let res = [];
  for(let i = 0; i < str.length;i++)
  {
    res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
  }
  return "_u" + res.join("_u");
};

//将字符串转整数
function myAtoi(str) {
    str=str.replace(/(^\s*)|(\s*$)/g, "");//去掉字符串最前面的空格，中间的不用管
    var str1="";
    for(i=0;i<str.length;i++){
        if((str.charAt(i)=="-"||str.charAt(i)=="+")&&i==0){
            str1=str1.concat(str.charAt(i))
        }//如果“+”“-”号在最前面
        else if(/^\d+$/.test(str.charAt(i))){
            str1=str1.concat(str.charAt(i))
        }//用字符串存储值
        else{
            break//直接跳出for循环
        };
    }
        if(str1-0>2147483647){
            return 2147483647
        }                      //str-0   字符串化为数组最简单也是最常用的方法
        else if(str1-0<-2147483648){
            return -2147483648
        }
        if(isNaN(str1-0)) return 0//"+"/"-"这种情况,返回0
    return str1-0            
};

var bitArr=new Array();
for(var i=0;i<8;i++)bitArr[i]=(0x80>>i);//初始化位数组
var canvas=document.createElement("canvas");//创建canvas
var ctx=canvas.getContext("2d");//获得内容描述句柄

//显示汉字（使用位图显示）
Blockly.Arduino.make_arduino_oled_show_hz = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var checkbox_oled_show_hz = this.getFieldValue('oled_show_hz') == 'TRUE';
    var checkbox_oled_show_hz_message = this.getFieldValue('oled_show_hz_message') == 'TRUE';
    var checkbox_oled_show_hz_save = this.getFieldValue('oled_show_hz_save') == 'TRUE';
    var dropdown_oled_hz_sharp = this.getFieldValue('oled_hz_sharp');
    var text_oled_hz_line_height = this.getFieldValue('oled_hz_line_height');
    var dropdown_hz_up_down = this.getFieldValue('hz_up_down');
    var text_hz_up_down_data = this.getFieldValue('hz_up_down_data');
    var dropdown_hz_left_right = this.getFieldValue('hz_left_right');
    var text_hz_left_right_data = this.getFieldValue('hz_left_right_data');
    var value_oled_hz_data = Blockly.Arduino.valueToCode(this, 'oled_hz_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_hz_x = Blockly.Arduino.valueToCode(this, 'oled_hz_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_hz_y = Blockly.Arduino.valueToCode(this, 'oled_hz_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_hz_height = Blockly.Arduino.valueToCode(this, 'oled_hz_height', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_hz_width = Blockly.Arduino.valueToCode(this, 'oled_hz_width', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_oled_hz_variant = 'normal';
    var dropdown_oled_hz_style = 'normal';
    var dropdown_oled_hz_thickness = 'normal';
    var fontSize_width=myAtoi(value_oled_hz_width);
    var fontSize_height=myAtoi(value_oled_hz_height);
    var bs=Math.ceil(fontSize_width/8);//每行占字节数

    var move_x = 0;
    var move_y = 0;
    if(dropdown_hz_up_down == "hz_down")
    {
      move_y = myAtoi(text_hz_up_down_data);
    }
    else
    {
      move_y = myAtoi("-"+text_hz_up_down_data);
    }

    if(dropdown_hz_left_right == "hz_right")
    {
      move_x = myAtoi(text_hz_left_right_data);
    }
    else
    {
      move_x = myAtoi("-"+text_hz_left_right_data);
    }
    canvas.width=fontSize_width;
    canvas.height=fontSize_height;
    ctx.font = dropdown_oled_hz_style + ' ' + dropdown_oled_hz_variant + ' ' + dropdown_oled_hz_thickness + ' ' + text_oled_hz_line_height + 'px ' + dropdown_oled_hz_sharp;
    ctx.textAlign="left";
    ctx.textBaseline="top";

    var c = value_oled_hz_data;
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,fontSize_width,fontSize_height);//涂背景
    ctx.fillStyle="#ffffff";
    ctx.fillText(c,move_x,move_y);//写字
    var data=ctx.getImageData(0,0,fontSize_width,fontSize_height).data;//获取图像
    var zm=new Array(bs*fontSize_height);
    for(var i=0;i<zm.length;i++)zm[i]=0;//初始化字模数组
    for(var i=0;i<fontSize_height;i++)//读像素值组成字模数组
      for(var j=0;j<fontSize_width;j++)
        if(data[i*fontSize_width*4+j*4])zm[parseInt(j/8)+i*bs]+=bitArr[j%8];
    var outStr="";//将字模数组转化为十六进制形式
    for(var i=0;i<zm.length-1;i++)outStr+=toHex(zm[i])+",";
    outStr+=toHex(zm[i]);

    var zm1=new Array(bs*fontSize_height);
    var outstr1 = "";
    for(var i in zm)zm1[i] = zm[i].toString(2);
    for(var i in zm1)
    {
      var str = "";
      for(var j = 0;j<8-zm1[i].length;j++)str+="0";
      zm1[i] = str + zm1[i];
    }
    for(var i in zm1)outstr1+=zm1[i];

    var HZ_image = "";
    var num_hz = 0;
    for(var i = 0;i<fontSize_width;i++)
    {
      HZ_image+="--";
      if(i == (fontSize_width - 1))HZ_image+="\n|";
    }

    for(var data_hz of outstr1)
    {
      num_hz++;
      if(num_hz == outstr1.length)
      {
        HZ_image+="|\n";
      }
      else if(num_hz%(bs*8) < fontSize_width && num_hz%(bs*8) > 0)
      {
        if(data_hz == "0")HZ_image+="  ";
        else if(data_hz == "1")HZ_image+="0 ";
      } 
      else if(num_hz%(bs*8) == 0)
      {
        HZ_image+="|\n|";
      }
    }
    for(var i = 0;i<fontSize_width;i++)
    {
      HZ_image+="--";
    }
    HZ_image = "/*" + "\n" + HZ_image + "\n" + "*/";
    
    var hz_sharp = "";
    switch(dropdown_oled_hz_sharp)
    {
      case "STHeiti":
        hz_sharp = "华文黑体";
        break;
      case "STKaiti":
        hz_sharp = "华文楷体";
        break;
      case "STXihei":
        hz_sharp = "华文细黑";
        break;
      case "STSong":
        hz_sharp = "华文宋体";
        break;
      case "STZhongsong":
        hz_sharp = "华文中宋";
        break;
      case "STFangsong":
        hz_sharp = "华文仿宋";
        break;
      case "STCaiyun":
        hz_sharp = "华文彩云";
        break;
      case "STHupo":
        hz_sharp = "华文琥珀";
        break;
      case "STLiti":
        hz_sharp = "华文隶书";
        break;
      case "STXingkai":
        hz_sharp = "华文行楷";
        break;
      case "STXinwei":
        hz_sharp = "华文新魏";
        break;
      case "simHei":
        hz_sharp = "黑体";
        break;
      case "simSun":
        hz_sharp = "宋体";
        break;
      case "NSimSun":
        hz_sharp = "新宋体";
        break;
      case "FangSong":
        hz_sharp = "仿宋";
        break;
      case "KaiTi":
        hz_sharp = "楷体";
        break;
      case "FangSong_GB2312":
        hz_sharp = "仿宋_GB2312";
        break;
      case "KaiTi_GB2312":
        hz_sharp = "楷体_GB2312";
        break;
      case "LiSu":
        hz_sharp = "隶书";
        break;
      case "YouYuan":
        hz_sharp = "幼圆";
        break;
      case "PMingLiU":
        hz_sharp = "新细明体";
        break;
      case "MingLiU":
        hz_sharp = "细明体";
        break;
      case "DFKai-SB":
        hz_sharp = "标楷体";
        break;
      case "Microsoft JhengHei":
        hz_sharp = "微软正黑体";
        break;
      case "Microsoft YaHei":
        hz_sharp = "微软雅黑体";
        break;
      default:
        hz_sharp = dropdown_oled_hz_sharp;
        break;
    }
    hz_sharp = "字体：" + hz_sharp + "  字号：" + text_oled_hz_line_height + "px" + "  显示文字：" + value_oled_hz_data;
    
    if(checkbox_oled_show_hz)
    {
      if(checkbox_oled_show_hz_save)
      {
        Blockly.Arduino.definitions_['var_declare_OLED_'+dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)] = HZ_image + "\n//" + hz_sharp + "\nstatic const unsigned char PROGMEM oled_st7735_" + dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)+"["+(bs*fontSize_height)+"]={"+outStr+"};";
      }
      else
      {
        Blockly.Arduino.definitions_['var_declare_OLED_'+dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)] = HZ_image + "\n//" + hz_sharp + "\nunsigned char oled_st7735_" + dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)+"["+(bs*fontSize_height)+"]={"+outStr+"};";
      }
    }
    else
    {
      if(checkbox_oled_show_hz_message)
      {
        if(checkbox_oled_show_hz_save)
        {
          Blockly.Arduino.definitions_['var_declare_OLED_'+dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)] = "//" + hz_sharp + "\nstatic const unsigned char PROGMEM oled_st7735_" + dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)+"["+(bs*fontSize_height)+"]={"+outStr+"};";
        }
        else
        {
          Blockly.Arduino.definitions_['var_declare_OLED_'+dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)] = "//" + hz_sharp + "\nunsigned char oled_st7735_" + dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)+"["+(bs*fontSize_height)+"]={"+outStr+"};";
        }
      }
      else
      {
        if(checkbox_oled_show_hz_save)
        {
          Blockly.Arduino.definitions_['var_declare_OLED_'+dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)] = "static const unsigned char PROGMEM oled_st7735_" + dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)+"["+(bs*fontSize_height)+"]={"+outStr+"};";
        }
        else
        {
          Blockly.Arduino.definitions_['var_declare_OLED_'+dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)] = "unsigned char oled_st7735_" + dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)+"["+(bs*fontSize_height)+"]={"+outStr+"};";
        }
      }
    }
  if(checkbox_oled_show_hz_message)
  {
    var code = '//绘制位图 ' + hz_sharp + '  X坐标：' + value_oled_hz_x + '  Y坐标：' + value_oled_hz_y + '  位图宽度：' + value_oled_hz_width + '  位图高度：' + value_oled_hz_height + '\n' + text_oled_name+'.drawBitmap('+value_oled_hz_x+', '+value_oled_hz_y+', oled_st7735_' + dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)+', '+value_oled_hz_width+', '+value_oled_hz_height+', 1);\n';
  }
  else
  {
    var code = text_oled_name+'.drawBitmap('+value_oled_hz_x+', '+value_oled_hz_y+', oled_st7735_' + dropdown_oled_hz_sharp + '_' + text_oled_hz_line_height + 'px' + encodeUnicode(value_oled_hz_data)+', '+value_oled_hz_width+', '+value_oled_hz_height+', 1);\n';
  }
  return code;
};

//设置光标的位置，OLED将会从此位置开始，向后显示文本或数字
Blockly.Arduino.make_arduino_oled_set_cursor = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var value_set_cursor_x = Blockly.Arduino.valueToCode(this, 'set_cursor_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_set_cursor_y = Blockly.Arduino.valueToCode(this, 'set_cursor_y', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_oled_name+'.setCursor('+value_set_cursor_x+','+value_set_cursor_y+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_set_font = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var dropdown_font_size = this.getFieldValue('font_size');
  var code = text_oled_name+'.setTextSize('+dropdown_font_size+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_set_font_color = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var dropdown_font_color = this.getFieldValue('font_color');
  var code = text_oled_name+'.setTextColor('+dropdown_font_color+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_show_text = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var value_oled_show_text_data = Blockly.Arduino.valueToCode(this, 'oled_show_text_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_oled_name+'.print('+value_oled_show_text_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_show_text_auto_linefeed = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var value_oled_show_text_auto_linefeed_data = Blockly.Arduino.valueToCode(this, 'oled_show_text_auto_linefeed_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_oled_name+'.println('+value_oled_show_text_auto_linefeed_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_show_text_change_2019_10_18 = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var dropdown_show_text_type = this.getFieldValue('show_text_type');
    var value_oled_show_text_auto_linefeed_data = Blockly.Arduino.valueToCode(this, 'oled_show_text_auto_linefeed_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_oled_name+'.'+dropdown_show_text_type+'('+value_oled_show_text_auto_linefeed_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_show_num = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var value_oled_show_num_data = Blockly.Arduino.valueToCode(this, 'oled_show_num_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_oled_show_num_type = this.getFieldValue('oled_show_num_type');
  var code = text_oled_name+'.print('+value_oled_show_num_data+', '+dropdown_oled_show_num_type+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_show_num_auto_linefeed = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var value_oled_show_num_auto_linefeed_data = Blockly.Arduino.valueToCode(this, 'oled_show_num_auto_linefeed_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_oled_show_num_auto_linefeed_type = this.getFieldValue('oled_show_num_auto_linefeed_type');
  var code = text_oled_name+'.println('+value_oled_show_num_auto_linefeed_data+', '+dropdown_oled_show_num_auto_linefeed_type+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_show_num_change_2019_10_18 = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var dropdown_show_num_type = this.getFieldValue('show_num_type');
    var value_oled_show_num_auto_linefeed_data = Blockly.Arduino.valueToCode(this, 'oled_show_num_auto_linefeed_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_oled_show_num_auto_linefeed_type = this.getFieldValue('oled_show_num_auto_linefeed_type');
  var code = text_oled_name+'.'+dropdown_show_num_type+'('+value_oled_show_num_auto_linefeed_data+', '+dropdown_oled_show_num_auto_linefeed_type+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_set_rotation = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var dropdown_oled_set_rotation_data = this.getFieldValue('oled_set_rotation_data');
  var code = ''+text_oled_name+'.setRotation('+dropdown_oled_set_rotation_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_clear_display = function() {
    var text_oled_name = this.getFieldValue('oled_name');
  var code = text_oled_name+'.clearDisplay();\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_update_display = function() {
    var text_oled_name = this.getFieldValue('oled_name');
  var code = text_oled_name+'.display();\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_clear_update_display_2019_10_18 = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var dropdown_choose_type = this.getFieldValue('choose_type');
  var code = text_oled_name+'.'+dropdown_choose_type+'();\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_draw_pixel = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var value_oled_draw_pixel_x = Blockly.Arduino.valueToCode(this, 'oled_draw_pixel_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_pixel_y = Blockly.Arduino.valueToCode(this, 'oled_draw_pixel_y', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_oled_draw_pixel_color = this.getFieldValue('oled_draw_pixel_color');
  var code = text_oled_name+'.drawPixel('+value_oled_draw_pixel_x+', '+value_oled_draw_pixel_y+', '+dropdown_oled_draw_pixel_color+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_draw_line = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var value_oled_draw_line_start_x = Blockly.Arduino.valueToCode(this, 'oled_draw_line_start_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_line_start_y = Blockly.Arduino.valueToCode(this, 'oled_draw_line_start_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_line_end_x = Blockly.Arduino.valueToCode(this, 'oled_draw_line_end_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_line_end_y = Blockly.Arduino.valueToCode(this, 'oled_draw_line_end_y', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_oled_draw_line_color = this.getFieldValue('oled_draw_line_color');
  var code = text_oled_name+'.drawLine('+value_oled_draw_line_start_x+', '+value_oled_draw_line_start_y+', '+value_oled_draw_line_end_x+', '+value_oled_draw_line_end_y+', '+dropdown_oled_draw_line_color+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_draw_line1 = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var dropdown_oled_draw_line1_type = this.getFieldValue('oled_draw_line1_type');
    var value_oled_draw_line_start_x = Blockly.Arduino.valueToCode(this, 'oled_draw_line_start_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_line_start_y = Blockly.Arduino.valueToCode(this, 'oled_draw_line_start_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_line_length = Blockly.Arduino.valueToCode(this, 'oled_draw_line_length', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_oled_draw_line_color = this.getFieldValue('oled_draw_line_color');
  var code = ''+text_oled_name+'.'+dropdown_oled_draw_line1_type+'('+value_oled_draw_line_start_x+', '+value_oled_draw_line_start_y+', '+value_oled_draw_line_length+', '+dropdown_oled_draw_line_color+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_draw_rect = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var dropdown_oled_draw_rect_type_1 = this.getFieldValue('oled_draw_rect_type_1');
    var value_oled_draw_rect_x = Blockly.Arduino.valueToCode(this, 'oled_draw_rect_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_rect_y = Blockly.Arduino.valueToCode(this, 'oled_draw_rect_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_rect_width = Blockly.Arduino.valueToCode(this, 'oled_draw_rect_width', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_rect_height = Blockly.Arduino.valueToCode(this, 'oled_draw_rect_height', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_oled_draw_rect_color = this.getFieldValue('oled_draw_rect_color');
  var code = text_oled_name + '.' + dropdown_oled_draw_rect_type_1 + 'Rect(' + value_oled_draw_rect_x + ', ' + value_oled_draw_rect_y + ', ' + value_oled_draw_rect_width + ', ' + value_oled_draw_rect_height + ', ' + dropdown_oled_draw_rect_color + ');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_draw_RoundRect = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var dropdown_oled_draw_rect_type_1 = this.getFieldValue('oled_draw_rect_type_1');
    var value_oled_draw_rect_x = Blockly.Arduino.valueToCode(this, 'oled_draw_rect_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_rect_y = Blockly.Arduino.valueToCode(this, 'oled_draw_rect_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_rect_width = Blockly.Arduino.valueToCode(this, 'oled_draw_rect_width', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_rect_height = Blockly.Arduino.valueToCode(this, 'oled_draw_rect_height', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_rect_radius = Blockly.Arduino.valueToCode(this, 'oled_draw_rect_radius', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_oled_draw_rect_color = this.getFieldValue('oled_draw_rect_color');
  var code = text_oled_name + '.' + dropdown_oled_draw_rect_type_1 + 'RoundRect(' + value_oled_draw_rect_x + ', ' + value_oled_draw_rect_y + ', ' + value_oled_draw_rect_width + ', ' + value_oled_draw_rect_height + ', ' + value_oled_draw_rect_radius + ', ' + dropdown_oled_draw_rect_color + ');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_draw_circle = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var dropdown_oled_draw_circle_type = this.getFieldValue('oled_draw_circle_type');
    var value_oled_draw_circle_x = Blockly.Arduino.valueToCode(this, 'oled_draw_circle_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_circle_y = Blockly.Arduino.valueToCode(this, 'oled_draw_circle_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_circle_radius = Blockly.Arduino.valueToCode(this, 'oled_draw_circle_radius', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_oled_draw_circle_color = this.getFieldValue('oled_draw_circle_color');
  var code = text_oled_name+'.'+dropdown_oled_draw_circle_type+'Circle('+value_oled_draw_circle_x+', '+value_oled_draw_circle_y+', '+value_oled_draw_circle_radius+', '+dropdown_oled_draw_circle_color+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_draw_triangle = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var dropdown_oled_draw_triangle_type = this.getFieldValue('oled_draw_triangle_type');
    var value_oled_draw_triangle_x1 = Blockly.Arduino.valueToCode(this, 'oled_draw_triangle_x1', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_triangle_y1 = Blockly.Arduino.valueToCode(this, 'oled_draw_triangle_y1', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_triangle_x2 = Blockly.Arduino.valueToCode(this, 'oled_draw_triangle_x2', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_triangle_y2 = Blockly.Arduino.valueToCode(this, 'oled_draw_triangle_y2', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_triangle_x3 = Blockly.Arduino.valueToCode(this, 'oled_draw_triangle_x3', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_triangle_y3 = Blockly.Arduino.valueToCode(this, 'oled_draw_triangle_y3', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_oled_draw_triangle_color = this.getFieldValue('oled_draw_triangle_color');
  var code = text_oled_name+'.'+dropdown_oled_draw_triangle_type+'Triangle('+value_oled_draw_triangle_x1+', '+value_oled_draw_triangle_y1+', '+value_oled_draw_triangle_x2+', '+value_oled_draw_triangle_y2+', '+value_oled_draw_triangle_x3+', '+value_oled_draw_triangle_y3+', '+dropdown_oled_draw_triangle_color+');\n';
  return code;
};

Blockly.Arduino.make_arduino_oled_draw_bitmap = function() {
    var text_oled_name = this.getFieldValue('oled_name');
    var value_oled_draw_bitmap_x = Blockly.Arduino.valueToCode(this, 'oled_draw_bitmap_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_bitmap_y = Blockly.Arduino.valueToCode(this, 'oled_draw_bitmap_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_bitmap_data = Blockly.Arduino.valueToCode(this, 'oled_draw_bitmap_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_bitmap_width = Blockly.Arduino.valueToCode(this, 'oled_draw_bitmap_width', Blockly.Arduino.ORDER_ATOMIC);
    var value_oled_draw_bitmap_height = Blockly.Arduino.valueToCode(this, 'oled_draw_bitmap_height', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_oled_draw_bitmap_color = this.getFieldValue('oled_draw_bitmap_color');
  var code = text_oled_name+'.drawBitmap('+value_oled_draw_bitmap_x+', '+value_oled_draw_bitmap_y+', '+value_oled_draw_bitmap_data+', '+value_oled_draw_bitmap_width+', '+value_oled_draw_bitmap_height+', '+dropdown_oled_draw_bitmap_color+');\n';
  return code;
};

Blockly.Arduino.make_arduino_nokia5110_begin = function() {
    var text_nokia5110_name = this.getFieldValue('nokia5110_name');
    var value_nokia5110_clk = Blockly.Arduino.valueToCode(this, 'nokia5110_clk', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_din = Blockly.Arduino.valueToCode(this, 'nokia5110_din', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_dc = Blockly.Arduino.valueToCode(this, 'nokia5110_dc', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_ce = Blockly.Arduino.valueToCode(this, 'nokia5110_ce', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_rst = Blockly.Arduino.valueToCode(this, 'nokia5110_rst', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_LCD5110_Graph'] = '#include <LCD5110_Graph.h>';
  Blockly.Arduino.definitions_['var_declare_LCD5110_Graph_'+text_nokia5110_name] = 'LCD5110 '+text_nokia5110_name+'('+value_nokia5110_clk+', '+value_nokia5110_din+', '+value_nokia5110_dc+', '+value_nokia5110_rst+', '+value_nokia5110_ce+');';
  Blockly.Arduino.setups_['setup_LCD5110_Graph_'+text_nokia5110_name+'_1'] = ''+text_nokia5110_name+'.InitLCD();';
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_nokia5110_setcontrast = function() {
    var value_nokia5110_setcontrast = Blockly.Arduino.valueToCode(this, 'nokia5110_setcontrast', Blockly.Arduino.ORDER_ATOMIC);
    var text_nokia5110_name = this.getFieldValue('nokia5110_name');

  Blockly.Arduino.setups_['setup_LCD5110_Graph_'+text_nokia5110_name+'_2'] = ''+text_nokia5110_name+'.setContrast('+value_nokia5110_setcontrast+');';
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_nokia5110_setfont = function() {
    var text_nokia5110_name = this.getFieldValue('nokia5110_name');
    var dropdown_nokia5110_setfont_type = this.getFieldValue('nokia5110_setfont_type');

  Blockly.Arduino.definitions_['var_declare_LCD5110_Graph_'+text_nokia5110_name+'_'+dropdown_nokia5110_setfont_type] = 'extern uint8_t '+dropdown_nokia5110_setfont_type+'[];';
  var code = ''+text_nokia5110_name+'.setFont('+dropdown_nokia5110_setfont_type+');\n';
  return code;
};

Blockly.Arduino.make_arduino_nokia5110_set_show_type = function() {
    var text_nokia5110_name = this.getFieldValue('nokia5110_name');
    var dropdown_nokia5110_show_type = this.getFieldValue('nokia5110_show_type');
  var code = text_nokia5110_name+'.'+dropdown_nokia5110_show_type+'();\n';
  return code;
};

Blockly.Arduino.make_arduino_nokia5110_set_pixel = function() {
    var text_nokia5110_name = this.getFieldValue('nokia5110_name');
    var dropdown_nokia5110_set_pixel_type = this.getFieldValue('nokia5110_set_pixel_type');
    var value_nokia5110_set_pixel_x = Blockly.Arduino.valueToCode(this, 'nokia5110_set_pixel_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_set_pixel_y = Blockly.Arduino.valueToCode(this, 'nokia5110_set_pixel_y', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_nokia5110_name+'.'+dropdown_nokia5110_set_pixel_type+'('+value_nokia5110_set_pixel_x+', '+value_nokia5110_set_pixel_y+');\n';
  return code;
};

Blockly.Arduino.make_arduino_nokia5110_coordinate = function() {
    var dropdown_nokia5110_coordinate_type = this.getFieldValue('nokia5110_coordinate_type');
  var code = dropdown_nokia5110_coordinate_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//显示汉字（使用位图显示）
Blockly.Arduino.make_arduino_nokia5110_show_hz = function() {
    var text_nokia5110_name = this.getFieldValue('nokia5110_name');
    var checkbox_nokia5110_show_hz = this.getFieldValue('nokia5110_show_hz') == 'TRUE';
    var checkbox_nokia5110_show_hz_message = this.getFieldValue('nokia5110_show_hz_message') == 'TRUE';
    //var checkbox_nokia5110_show_hz_save = this.getFieldValue('nokia5110_show_hz_save') == 'TRUE';
    var dropdown_nokia5110_hz_sharp = this.getFieldValue('nokia5110_hz_sharp');
    var text_nokia5110_hz_line_height = this.getFieldValue('nokia5110_hz_line_height');
    var dropdown_hz_up_down = this.getFieldValue('hz_up_down');
    var text_hz_up_down_data = this.getFieldValue('hz_up_down_data');
    var dropdown_hz_left_right = this.getFieldValue('hz_left_right');
    var text_hz_left_right_data = this.getFieldValue('hz_left_right_data');
    var value_nokia5110_hz_data = Blockly.Arduino.valueToCode(this, 'nokia5110_hz_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_hz_x = Blockly.Arduino.valueToCode(this, 'nokia5110_hz_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_hz_y = Blockly.Arduino.valueToCode(this, 'nokia5110_hz_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_hz_height = Blockly.Arduino.valueToCode(this, 'nokia5110_hz_height', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_hz_width = Blockly.Arduino.valueToCode(this, 'nokia5110_hz_width', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_nokia5110_hz_variant = 'normal';
    var dropdown_nokia5110_hz_style = 'normal';
    var dropdown_nokia5110_hz_thickness = 'normal';
    var fontSize_width=myAtoi(value_nokia5110_hz_width);
    var fontSize_height=myAtoi(value_nokia5110_hz_height);
    var bs=Math.ceil(fontSize_width/8);//每行占字节数

    var move_x = 0;
    var move_y = 0;
    if(dropdown_hz_up_down == "hz_down")
    {
      move_y = myAtoi(text_hz_up_down_data);
    }
    else
    {
      move_y = myAtoi("-"+text_hz_up_down_data);
    }

    if(dropdown_hz_left_right == "hz_right")
    {
      move_x = myAtoi(text_hz_left_right_data);
    }
    else
    {
      move_x = myAtoi("-"+text_hz_left_right_data);
    }
    canvas.width=fontSize_width;
    canvas.height=fontSize_height;
    ctx.font = dropdown_nokia5110_hz_style + ' ' + dropdown_nokia5110_hz_variant + ' ' + dropdown_nokia5110_hz_thickness + ' ' + text_nokia5110_hz_line_height + 'px ' + dropdown_nokia5110_hz_sharp;
    ctx.textAlign="left";
    ctx.textBaseline="top";

    var c = value_nokia5110_hz_data;
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,fontSize_width,fontSize_height);//涂背景
    ctx.fillStyle="#ffffff";
    ctx.fillText(c,move_x,move_y);//写字
    var data=ctx.getImageData(0,0,fontSize_width,fontSize_height).data;//获取图像
    var zm=new Array(bs*fontSize_height);
    for(var i=0;i<zm.length;i++)zm[i]=0;//初始化字模数组
    for(var i=0;i<fontSize_height;i++)//读像素值组成字模数组
      for(var j=0;j<fontSize_width;j++)
        if(data[i*fontSize_width*4+j*4])zm[parseInt(j/8)+i*bs]+=bitArr[j%8];
    var outStr="";//将字模数组转化为十六进制形式
    for(var i=0;i<zm.length-1;i++)outStr+=toHex(zm[i])+",";
    outStr+=toHex(zm[i]);

    var zm1=new Array(bs*fontSize_height);
    var outstr1 = "";
    for(var i in zm)zm1[i] = zm[i].toString(2);
    for(var i in zm1)
    {
      var str = "";
      for(var j = 0;j<8-zm1[i].length;j++)str+="0";
      zm1[i] = str + zm1[i];
    }
    for(var i in zm1)outstr1+=zm1[i];

    var HZ_image = "";
    var num_hz = 0;
    for(var i = 0;i<fontSize_width;i++)
    {
      HZ_image+="--";
      if(i == (fontSize_width - 1))HZ_image+="\n|";
    }

    for(var data_hz of outstr1)
    {
      num_hz++;
      if(num_hz == outstr1.length)
      {
        HZ_image+="|\n";
      }
      else if(num_hz%(bs*8) < fontSize_width && num_hz%(bs*8) > 0)
      {
        if(data_hz == "0")HZ_image+="  ";
        else if(data_hz == "1")HZ_image+="0 ";
      } 
      else if(num_hz%(bs*8) == 0)
      {
        HZ_image+="|\n|";
      }
    }
    for(var i = 0;i<fontSize_width;i++)
    {
      HZ_image+="--";
    }
    HZ_image = "/*" + "\n" + HZ_image + "\n" + "*/";
    
    var hz_sharp = "";
    switch(dropdown_nokia5110_hz_sharp)
    {
      case "STHeiti":
        hz_sharp = "华文黑体";
        break;
      case "STKaiti":
        hz_sharp = "华文楷体";
        break;
      case "STXihei":
        hz_sharp = "华文细黑";
        break;
      case "STSong":
        hz_sharp = "华文宋体";
        break;
      case "STZhongsong":
        hz_sharp = "华文中宋";
        break;
      case "STFangsong":
        hz_sharp = "华文仿宋";
        break;
      case "STCaiyun":
        hz_sharp = "华文彩云";
        break;
      case "STHupo":
        hz_sharp = "华文琥珀";
        break;
      case "STLiti":
        hz_sharp = "华文隶书";
        break;
      case "STXingkai":
        hz_sharp = "华文行楷";
        break;
      case "STXinwei":
        hz_sharp = "华文新魏";
        break;
      case "simHei":
        hz_sharp = "黑体";
        break;
      case "simSun":
        hz_sharp = "宋体";
        break;
      case "NSimSun":
        hz_sharp = "新宋体";
        break;
      case "FangSong":
        hz_sharp = "仿宋";
        break;
      case "KaiTi":
        hz_sharp = "楷体";
        break;
      case "FangSong_GB2312":
        hz_sharp = "仿宋_GB2312";
        break;
      case "KaiTi_GB2312":
        hz_sharp = "楷体_GB2312";
        break;
      case "LiSu":
        hz_sharp = "隶书";
        break;
      case "YouYuan":
        hz_sharp = "幼圆";
        break;
      case "PMingLiU":
        hz_sharp = "新细明体";
        break;
      case "MingLiU":
        hz_sharp = "细明体";
        break;
      case "DFKai-SB":
        hz_sharp = "标楷体";
        break;
      case "Microsoft JhengHei":
        hz_sharp = "微软正黑体";
        break;
      case "Microsoft YaHei":
        hz_sharp = "微软雅黑体";
        break;
      default:
        hz_sharp = dropdown_nokia5110_hz_sharp;
        break;
    }
    hz_sharp = "字体：" + hz_sharp + "  字号：" + text_nokia5110_hz_line_height + "px" + "  显示文字：" + value_nokia5110_hz_data;
    
    var hz_width = bs*8;
    var outstr2 = '';
    var numble = 0;
    for(var i of outstr1)
    {
      numble++;
      if((numble%hz_width) > fontSize_width) continue;
      outstr2 = outstr2 + i;
    }

    var hz_height = Math.ceil(fontSize_height/8);
    hz_height = hz_height*8;
    for(var i = 1;i<=(hz_height - fontSize_height)*fontSize_width;i++) outstr2 = outstr2 + '0';
    
    var zm2=new Array(fontSize_width);
    var zm2_use=new Array(outstr2.length);
    var numble = 0;
    for(var i of outstr2) 
    {
      zm2_use[numble] = i;
      numble++;
    }
    var outstr3 = '';

    for(var i = 0;i<Math.ceil(fontSize_height/8);i++)
    {
      for(var p = 0;p<fontSize_width;p++)zm2[p]='';
      for(var j = 1;j<=fontSize_width;j++)
      {
        for(var k = 8;k>=1;k--)
        {
          zm2[j-1] = zm2[j-1] + zm2_use[i*fontSize_width*8 + (k-1)*fontSize_width + j - 1];
        }
        outstr3 = outstr3 + 'B' + zm2[j-1]+",";
      }
    }

    outstr3 = outstr3.substring(0,outstr3.length-1);

    var outstr4 = '';
    var outstr4_select_low4 = '';
    var outstr4_select_high4 = '';
    var num = 0;
    for(var i of outstr3)
    {
      if(i == 'B')
      {
        num = 8;
        outstr4_select_low4 = '';
        outstr4_select_high4 = '';
        continue;
      }
      if(i == ',')
      {
        continue;
      }
      if(num>0)
      {
        if(num>4)
        {
          outstr4_select_low4 = outstr4_select_low4 + i;
          num--;
        }
        else
        {
          outstr4_select_high4 = outstr4_select_high4 + i;
          num--;
        }
        if(outstr4_select_low4.length == 4)
        {
          switch (outstr4_select_low4)
          {
            case '0000':
            {
              outstr4_select_low4 = '0';
              break;
            }
            case '0001':
            {
              outstr4_select_low4 = '1';
              break;
            }
            case '0010':
            {
              outstr4_select_low4 = '2';
              break;
            }
            case '0011':
            {
              outstr4_select_low4 = '3';
              break;
            }
            case '0100':
            {
              outstr4_select_low4 = '4';
              break;
            }
            case '0101':
            {
              outstr4_select_low4 = '5';
              break;
            }
            case '0110':
            {
              outstr4_select_low4 = '6';
              break;
            }
            case '0111':
            {
              outstr4_select_low4 = '7';
              break;
            }
            case '1000':
            {
              outstr4_select_low4 = '8';
              break;
            }
            case '1001':
            {
              outstr4_select_low4 = '9';
              break;
            }
            case '1010':
            {
              outstr4_select_low4 = 'A';
              break;
            }
            case '1011':
            {
              outstr4_select_low4 = 'B';
              break;
            }
            case '1100':
            {
              outstr4_select_low4 = 'C';
              break;
            }
            case '1101':
            {
              outstr4_select_low4 = 'D';
              break;
            }
            case '1110':
            {
              outstr4_select_low4 = 'E';
              break;
            }
            case '1111':
            {
              outstr4_select_low4 = 'F';
              break;
            }
          }
          outstr4 = outstr4 + '0x' + outstr4_select_low4;
        }
        else if(outstr4_select_high4.length == 4)
        {
          switch (outstr4_select_high4)
          {
            case '0000':
            {
              outstr4_select_high4 = '0';
              break;
            }
            case '0001':
            {
              outstr4_select_high4 = '1';
              break;
            }
            case '0010':
            {
              outstr4_select_high4 = '2';
              break;
            }
            case '0011':
            {
              outstr4_select_high4 = '3';
              break;
            }
            case '0100':
            {
              outstr4_select_high4 = '4';
              break;
            }
            case '0101':
            {
              outstr4_select_high4 = '5';
              break;
            }
            case '0110':
            {
              outstr4_select_high4 = '6';
              break;
            }
            case '0111':
            {
              outstr4_select_high4 = '7';
              break;
            }
            case '1000':
            {
              outstr4_select_high4 = '8';
              break;
            }
            case '1001':
            {
              outstr4_select_high4 = '9';
              break;
            }
            case '1010':
            {
              outstr4_select_high4 = 'A';
              break;
            }
            case '1011':
            {
              outstr4_select_high4 = 'B';
              break;
            }
            case '1100':
            {
              outstr4_select_high4 = 'C';
              break;
            }
            case '1101':
            {
              outstr4_select_high4 = 'D';
              break;
            }
            case '1110':
            {
              outstr4_select_high4 = 'E';
              break;
            }
            case '1111':
            {
              outstr4_select_high4 = 'F';
              break;
            }
          }
          outstr4 = outstr4 + outstr4_select_high4 + ',';
        }
      }
    }
    outstr4 = outstr4.substring(0,outstr4.length-1);
    if(checkbox_nokia5110_show_hz)
    {
        Blockly.Arduino.definitions_['var_declare_Nokia5110_'+dropdown_nokia5110_hz_sharp + '_' + text_nokia5110_hz_line_height + 'px' + encodeUnicode(value_nokia5110_hz_data)] = HZ_image + '\n//' + hz_sharp + '\nconst uint8_t Nokia5110_' + dropdown_nokia5110_hz_sharp + '_' + text_nokia5110_hz_line_height + 'px' + encodeUnicode(value_nokia5110_hz_data)+'[] PROGMEM = {'+outstr4+'};';
    }
    else
    {
      if(checkbox_nokia5110_show_hz_message)
      {
          Blockly.Arduino.definitions_['var_declare_Nokia5110_'+dropdown_nokia5110_hz_sharp + '_' + text_nokia5110_hz_line_height + 'px' + encodeUnicode(value_nokia5110_hz_data)] = '//' + hz_sharp + '\nconst uint8_t Nokia5110_' + dropdown_nokia5110_hz_sharp + '_' + text_nokia5110_hz_line_height + 'px' + encodeUnicode(value_nokia5110_hz_data)+'[] PROGMEM = {'+outstr4+'};';
      }
      else
      {
          Blockly.Arduino.definitions_['var_declare_Nokia5110_'+dropdown_nokia5110_hz_sharp + '_' + text_nokia5110_hz_line_height + 'px' + encodeUnicode(value_nokia5110_hz_data)] = 'const uint8_t Nokia5110_' + dropdown_nokia5110_hz_sharp + '_' + text_nokia5110_hz_line_height + 'px' + encodeUnicode(value_nokia5110_hz_data)+'[] PROGMEM = {'+outstr4+'};';
      }
    }
  if(checkbox_nokia5110_show_hz_message)
  {
    var code = '//绘制位图 ' + hz_sharp + '  X坐标：' + value_nokia5110_hz_x + '  Y坐标：' + value_nokia5110_hz_y + '  位图宽度：' + value_nokia5110_hz_width + '  位图高度：' + value_nokia5110_hz_height + '\n' + text_nokia5110_name+'.drawBitmap('+value_nokia5110_hz_x+', '+value_nokia5110_hz_y+', Nokia5110_' + dropdown_nokia5110_hz_sharp + '_' + text_nokia5110_hz_line_height + 'px' + encodeUnicode(value_nokia5110_hz_data)+', '+value_nokia5110_hz_width+', '+value_nokia5110_hz_height+');\n';
  }
  else
  {
    var code = text_nokia5110_name+'.drawBitmap('+value_nokia5110_hz_x+', '+value_nokia5110_hz_y+', Nokia5110_' + dropdown_nokia5110_hz_sharp + '_' + text_nokia5110_hz_line_height + 'px' + encodeUnicode(value_nokia5110_hz_data)+', '+value_nokia5110_hz_width+', '+value_nokia5110_hz_height+');\n';
  }
  return code;
};

Blockly.Arduino.make_arduino_nokia5110_print = function() {
    var value_nokia5110_print_data = Blockly.Arduino.valueToCode(this, 'nokia5110_print_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_nokia5110_name = this.getFieldValue('nokia5110_name');
    var value_nokia5110_print_x = Blockly.Arduino.valueToCode(this, 'nokia5110_print_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_print_y = Blockly.Arduino.valueToCode(this, 'nokia5110_print_y', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_nokia5110_name+'.print('+value_nokia5110_print_data+', '+value_nokia5110_print_x+', '+value_nokia5110_print_y+');\n';
  return code;
};

Blockly.Arduino.make_arduino_nokia5110_print_num = function() {
    var value_nokia5110_print_num_data = Blockly.Arduino.valueToCode(this, 'nokia5110_print_num_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_nokia5110_name = this.getFieldValue('nokia5110_name');
    var dropdown_nokia5110_print_num_type = this.getFieldValue('nokia5110_print_num_type');
    var value_nokia5110_print_num_x = Blockly.Arduino.valueToCode(this, 'nokia5110_print_num_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_print_num_y = Blockly.Arduino.valueToCode(this, 'nokia5110_print_num_y', Blockly.Arduino.ORDER_ATOMIC);

  var code = '';
  if(dropdown_nokia5110_print_num_type == 'printNumF')
    code = ''+text_nokia5110_name+'.printNumF('+value_nokia5110_print_num_data+', dec, '+value_nokia5110_print_num_x+', '+value_nokia5110_print_num_y+');\n';
  else
    code = ''+text_nokia5110_name+'.printNumI('+value_nokia5110_print_num_data+', '+value_nokia5110_print_num_x+', '+value_nokia5110_print_num_y+');\n';
  return code;
};

Blockly.Arduino.make_arduino_nokia5110_draw_line = function() {
    var text_nokia5110_name = this.getFieldValue('nokia5110_name');
    var dropdown_nokia5110_draw_line_type = this.getFieldValue('nokia5110_draw_line_type');
    var value_nokia5110_draw_line_start_x = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_line_start_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_draw_line_start_y = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_line_start_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_draw_line_end_x = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_line_end_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_draw_line_end_y = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_line_end_y', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_nokia5110_name+'.'+dropdown_nokia5110_draw_line_type+'('+value_nokia5110_draw_line_start_x+', '+value_nokia5110_draw_line_start_y+', '+value_nokia5110_draw_line_end_x+', '+value_nokia5110_draw_line_end_y+');\n';
  return code;
};

Blockly.Arduino.make_arduino_nokia5110_draw_rect = function() {
    var text_nokia5110_name = this.getFieldValue('nokia5110_name');
    var dropdown_nokia5110_draw_rect_type = this.getFieldValue('nokia5110_draw_rect_type');
    var value_nokia5110_draw_rect_start_x = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_rect_start_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_draw_rect_start_y = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_rect_start_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_draw_rect_end_x = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_rect_end_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_draw_rect_end_y = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_rect_end_y', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_nokia5110_name+'.'+dropdown_nokia5110_draw_rect_type+'('+value_nokia5110_draw_rect_start_x+', '+value_nokia5110_draw_rect_start_y+', '+value_nokia5110_draw_rect_end_x+', '+value_nokia5110_draw_rect_end_y+');\n';
  return code;
};

Blockly.Arduino.make_arduino_nokia5110_draw_circle = function() {
    var text_nokia5110_name = this.getFieldValue('nokia5110_name');
    var dropdown_nokia5110_draw_circle_type = this.getFieldValue('nokia5110_draw_circle_type');
    var value_nokia5110_draw_circle_x = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_circle_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_draw_circle_y = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_circle_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_draw_circle_radius = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_circle_radius', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_nokia5110_name+'.'+dropdown_nokia5110_draw_circle_type+'('+value_nokia5110_draw_circle_x+', '+value_nokia5110_draw_circle_y+', '+value_nokia5110_draw_circle_radius+');\n';
  return code;
};

Blockly.Arduino.make_arduino_nokia5110_draw_bitmap = function() {
    var text_nokia5110_name = this.getFieldValue('nokia5110_name');
    var value_nokia5110_draw_bitmap_data = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_bitmap_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_draw_bitmap_x = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_bitmap_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_draw_bitmap_y = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_bitmap_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_draw_bitmap_width = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_bitmap_width', Blockly.Arduino.ORDER_ATOMIC);
    var value_nokia5110_draw_bitmap_height = Blockly.Arduino.valueToCode(this, 'nokia5110_draw_bitmap_height', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_nokia5110_name+'.drawBitmap('+value_nokia5110_draw_bitmap_x+', '+value_nokia5110_draw_bitmap_y+', '+value_nokia5110_draw_bitmap_data+', '+value_nokia5110_draw_bitmap_width+', '+value_nokia5110_draw_bitmap_height+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_begin_1 = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_st7735_tab = this.getFieldValue('st7735_tab');
    var value_st7735_rst = Blockly.Arduino.valueToCode(this, 'st7735_rst', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_cs = Blockly.Arduino.valueToCode(this, 'st7735_cs', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_dc = Blockly.Arduino.valueToCode(this, 'st7735_dc', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_mosi = Blockly.Arduino.valueToCode(this, 'st7735_mosi', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_sclk = Blockly.Arduino.valueToCode(this, 'st7735_sclk', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
  Blockly.Arduino.definitions_['include_Adafruit_ST7735'] = '#include <Adafruit_ST7735.h>';
  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';

  Blockly.Arduino.definitions_['var_declare_ST7735_' + text_st7735_name] = 'Adafruit_ST7735 '+text_st7735_name+' = Adafruit_ST7735('+value_st7735_cs+', '+value_st7735_dc+', '+value_st7735_mosi+', '+value_st7735_sclk+', '+value_st7735_rst+');';

  Blockly.Arduino.setups_['setup_ST7735_' + text_st7735_name] = ''+text_st7735_name+'.initR('+dropdown_st7735_tab+');';

  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_st7735_begin_2 = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_st7735_tab = this.getFieldValue('st7735_tab');
    var value_st7735_rst = Blockly.Arduino.valueToCode(this, 'st7735_rst', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_cs = Blockly.Arduino.valueToCode(this, 'st7735_cs', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_dc = Blockly.Arduino.valueToCode(this, 'st7735_dc', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
  Blockly.Arduino.definitions_['include_Adafruit_ST7735'] = '#include <Adafruit_ST7735.h>';
  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';

  Blockly.Arduino.definitions_['var_declare_ST7735_' + text_st7735_name] = 'Adafruit_ST7735 '+text_st7735_name+' = Adafruit_ST7735('+value_st7735_cs+', '+value_st7735_dc+', '+value_st7735_rst+');';

  Blockly.Arduino.setups_['setup_ST7735_' + text_st7735_name] = ''+text_st7735_name+'.initR('+dropdown_st7735_tab+');';

  var code = '';
  return code;
};

function string_Bin_to_Hex(outstr_select){
  switch (outstr_select)
  {
    case '0000':
    {
      outstr_select = '0';
      break;
    }
    case '0001':
    {
      outstr_select = '1';
      break;
    }
    case '0010':
    {
      outstr_select = '2';
      break;
    }
    case '0011':
    {
      outstr_select = '3';
      break;
    }
    case '0100':
    {
      outstr_select = '4';
      break;
    }
    case '0101':
    {
      outstr_select = '5';
      break;
    }
    case '0110':
    {
      outstr_select = '6';
      break;
    }
    case '0111':
    {
      outstr_select = '7';
      break;
    }
    case '1000':
    {
      outstr_select = '8';
      break;
    }
    case '1001':
    {
      outstr_select = '9';
      break;
    }
    case '1010':
    {
      outstr_select = 'A';
      break;
    }
    case '1011':
    {
      outstr_select = 'B';
      break;
    }
    case '1100':
    {
      outstr_select = 'C';
      break;
    }
    case '1101':
    {
      outstr_select = 'D';
      break;
    }
    case '1110':
    {
      outstr_select = 'E';
      break;
    }
    case '1111':
    {
      outstr_select = 'F';
      break;
    }
  }
  return outstr_select;
};

function string_Hex_to_Bin(outstr_select){
  switch (outstr_select)
  {
    case '0':
    {
      outstr_select = '0000';
      break;
    }
    case '1':
    {
      outstr_select = '0001';
      break;
    }
    case '2':
    {
      outstr_select = '0010';
      break;
    }
    case '3':
    {
      outstr_select = '0011';
      break;
    }
    case '4':
    {
      outstr_select = '0100';
      break;
    }
    case '5':
    {
      outstr_select = '0101';
      break;
    }
    case '6':
    {
      outstr_select = '0110';
      break;
    }
    case '7':
    {
      outstr_select = '0111';
      break;
    }
    case '8':
    {
      outstr_select = '1000';
      break;
    }
    case '9':
    {
      outstr_select = '1001';
      break;
    }
    case 'a':
    {
      outstr_select = '1010';
      break;
    }
    case 'b':
    {
      outstr_select = '1011';
      break;
    }
    case 'c':
    {
      outstr_select = '1100';
      break;
    }
    case 'd':
    {
      outstr_select = '1101';
      break;
    }
    case 'e':
    {
      outstr_select = '1110';
      break;
    }
    case 'f':
    {
      outstr_select = '1111';
      break;
    }
  }
  return outstr_select;
};

Blockly.Arduino.make_arduino_st7735_set_rotation = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_set_rotation_data = this.getFieldValue('set_rotation_data');
  var code = ''+text_st7735_name+'.setRotation('+dropdown_set_rotation_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_set_cursor = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var value_set_cursor_x = Blockly.Arduino.valueToCode(this, 'set_cursor_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_set_cursor_y = Blockly.Arduino.valueToCode(this, 'set_cursor_y', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_st7735_name+'.setCursor('+value_set_cursor_x+', '+value_set_cursor_y+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_set_text_size = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_set_text_size_data = this.getFieldValue('set_text_size_data');
  var code = ''+text_st7735_name+'.setTextSize('+dropdown_set_text_size_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_set_text_color = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var value_set_text_color_data = Blockly.Arduino.valueToCode(this, 'set_text_color_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_st7735_name+'.setTextColor('+value_set_text_color_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_color = function() {
    var colour_st7735_color_type = this.getFieldValue('st7735_color_type');
    var str_1 = colour_st7735_color_type.charAt(1);
    var str_2 = colour_st7735_color_type.charAt(2);
    var str_3 = colour_st7735_color_type.charAt(3);
    var str_4 = colour_st7735_color_type.charAt(4);
    var str_5 = colour_st7735_color_type.charAt(5);
    var str_6 = colour_st7735_color_type.charAt(6);

    str_1 = string_Hex_to_Bin(str_1);
    str_2 = string_Hex_to_Bin(str_2);
    str_3 = string_Hex_to_Bin(str_3);
    str_4 = string_Hex_to_Bin(str_4);
    str_5 = string_Hex_to_Bin(str_5);
    str_6 = string_Hex_to_Bin(str_6);

    str_2 = str_2.charAt(0);
    str_4 = str_4.substring(0,2);
    str_6 = str_2.charAt(0);

    var str = str_1 + str_2 + str_3 + str_4 + str_5 + str_6;
    var str1 = '';
    str1 = '0x' + string_Bin_to_Hex(str.substring(0,4)) + string_Bin_to_Hex(str.substring(4,8)) + string_Bin_to_Hex(str.substring(8,12)) + string_Bin_to_Hex(str.substring(12,16));
  var code = str1;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_st7735_fill_screen = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var value_fill_screen_type = Blockly.Arduino.valueToCode(this, 'fill_screen_type', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_st7735_name+'.fillScreen('+value_fill_screen_type+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_set_text_screen_color_2019_10_18 = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_choose_type = this.getFieldValue('choose_type');
    var value_set_text_color_data = Blockly.Arduino.valueToCode(this, 'set_text_color_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_st7735_name+'.'+dropdown_choose_type+'('+value_set_text_color_data+');\n';
  return code;
};

//显示汉字（使用位图显示）
Blockly.Arduino.make_arduino_st7735_show_hz = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var checkbox_st7735_show_hz = this.getFieldValue('st7735_show_hz') == 'TRUE';
    var checkbox_st7735_show_hz_message = this.getFieldValue('st7735_show_hz_message') == 'TRUE';
    var checkbox_st7735_show_hz_save = this.getFieldValue('st7735_show_hz_save') == 'TRUE';
    var dropdown_st7735_hz_sharp = this.getFieldValue('st7735_hz_sharp');
    var text_st7735_hz_line_height = this.getFieldValue('st7735_hz_line_height');
    var dropdown_hz_up_down = this.getFieldValue('hz_up_down');
    var text_hz_up_down_data = this.getFieldValue('hz_up_down_data');
    var dropdown_hz_left_right = this.getFieldValue('hz_left_right');
    var text_hz_left_right_data = this.getFieldValue('hz_left_right_data');
    var value_st7735_hz_data = Blockly.Arduino.valueToCode(this, 'st7735_hz_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_hz_x = Blockly.Arduino.valueToCode(this, 'st7735_hz_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_hz_y = Blockly.Arduino.valueToCode(this, 'st7735_hz_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_hz_height = Blockly.Arduino.valueToCode(this, 'st7735_hz_height', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_hz_width = Blockly.Arduino.valueToCode(this, 'st7735_hz_width', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_hz_color = Blockly.Arduino.valueToCode(this, 'st7735_hz_color', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_st7735_hz_variant = 'normal';
    var dropdown_st7735_hz_style = 'normal';
    var dropdown_st7735_hz_thickness = 'normal';
    var fontSize_width=myAtoi(value_st7735_hz_width);
    var fontSize_height=myAtoi(value_st7735_hz_height);
    var bs=Math.ceil(fontSize_width/8);//每行占字节数

    var move_x = 0;
    var move_y = 0;
    if(dropdown_hz_up_down == "hz_down")
    {
      move_y = myAtoi(text_hz_up_down_data);
    }
    else
    {
      move_y = myAtoi("-"+text_hz_up_down_data);
    }

    if(dropdown_hz_left_right == "hz_right")
    {
      move_x = myAtoi(text_hz_left_right_data);
    }
    else
    {
      move_x = myAtoi("-"+text_hz_left_right_data);
    }
    canvas.width=fontSize_width;
    canvas.height=fontSize_height;
    ctx.font = dropdown_st7735_hz_style + ' ' + dropdown_st7735_hz_variant + ' ' + dropdown_st7735_hz_thickness + ' ' + text_st7735_hz_line_height + 'px ' + dropdown_st7735_hz_sharp;
    ctx.textAlign="left";
    ctx.textBaseline="top";

    var c = value_st7735_hz_data;
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,fontSize_width,fontSize_height);//涂背景
    ctx.fillStyle="#ffffff";
    ctx.fillText(c,move_x,move_y);//写字
    var data=ctx.getImageData(0,0,fontSize_width,fontSize_height).data;//获取图像
    var zm=new Array(bs*fontSize_height);
    for(var i=0;i<zm.length;i++)zm[i]=0;//初始化字模数组
    for(var i=0;i<fontSize_height;i++)//读像素值组成字模数组
      for(var j=0;j<fontSize_width;j++)
        if(data[i*fontSize_width*4+j*4])zm[parseInt(j/8)+i*bs]+=bitArr[j%8];
    var outStr="";//将字模数组转化为十六进制形式
    for(var i=0;i<zm.length-1;i++)outStr+=toHex(zm[i])+",";
    outStr+=toHex(zm[i]);

    var zm1=new Array(bs*fontSize_height);
    var outstr1 = "";
    for(var i in zm)zm1[i] = zm[i].toString(2);
    for(var i in zm1)
    {
      var str = "";
      for(var j = 0;j<8-zm1[i].length;j++)str+="0";
      zm1[i] = str + zm1[i];
    }
    for(var i in zm1)outstr1+=zm1[i];

    var HZ_image = "";
    var num_hz = 0;
    for(var i = 0;i<fontSize_width;i++)
    {
      HZ_image+="--";
      if(i == (fontSize_width - 1))HZ_image+="\n|";
    }

    for(var data_hz of outstr1)
    {
      num_hz++;
      if(num_hz == outstr1.length)
      {
        HZ_image+="|\n";
      }
      else if(num_hz%(bs*8) < fontSize_width && num_hz%(bs*8) > 0)
      {
        if(data_hz == "0")HZ_image+="  ";
        else if(data_hz == "1")HZ_image+="0 ";
      } 
      else if(num_hz%(bs*8) == 0)
      {
        HZ_image+="|\n|";
      }
    }
    for(var i = 0;i<fontSize_width;i++)
    {
      HZ_image+="--";
    }
    HZ_image = "/*" + "\n" + HZ_image + "\n" + "*/";
    
    var hz_sharp = "";
    switch(dropdown_st7735_hz_sharp)
    {
      case "STHeiti":
        hz_sharp = "华文黑体";
        break;
      case "STKaiti":
        hz_sharp = "华文楷体";
        break;
      case "STXihei":
        hz_sharp = "华文细黑";
        break;
      case "STSong":
        hz_sharp = "华文宋体";
        break;
      case "STZhongsong":
        hz_sharp = "华文中宋";
        break;
      case "STFangsong":
        hz_sharp = "华文仿宋";
        break;
      case "STCaiyun":
        hz_sharp = "华文彩云";
        break;
      case "STHupo":
        hz_sharp = "华文琥珀";
        break;
      case "STLiti":
        hz_sharp = "华文隶书";
        break;
      case "STXingkai":
        hz_sharp = "华文行楷";
        break;
      case "STXinwei":
        hz_sharp = "华文新魏";
        break;
      case "simHei":
        hz_sharp = "黑体";
        break;
      case "simSun":
        hz_sharp = "宋体";
        break;
      case "NSimSun":
        hz_sharp = "新宋体";
        break;
      case "FangSong":
        hz_sharp = "仿宋";
        break;
      case "KaiTi":
        hz_sharp = "楷体";
        break;
      case "FangSong_GB2312":
        hz_sharp = "仿宋_GB2312";
        break;
      case "KaiTi_GB2312":
        hz_sharp = "楷体_GB2312";
        break;
      case "LiSu":
        hz_sharp = "隶书";
        break;
      case "YouYuan":
        hz_sharp = "幼圆";
        break;
      case "PMingLiU":
        hz_sharp = "新细明体";
        break;
      case "MingLiU":
        hz_sharp = "细明体";
        break;
      case "DFKai-SB":
        hz_sharp = "标楷体";
        break;
      case "Microsoft JhengHei":
        hz_sharp = "微软正黑体";
        break;
      case "Microsoft YaHei":
        hz_sharp = "微软雅黑体";
        break;
      default:
        hz_sharp = dropdown_st7735_hz_sharp;
        break;
    }
    hz_sharp = "字体：" + hz_sharp + "  字号：" + text_st7735_hz_line_height + "px" + "  显示文字：" + value_st7735_hz_data;
    
    if(checkbox_st7735_show_hz)
    {
      if(checkbox_st7735_show_hz_save)
      {
        Blockly.Arduino.definitions_['var_declare_st7735_'+dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)] = HZ_image + "\n//" + hz_sharp + "\nstatic const unsigned char PROGMEM oled_st7735_" + dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)+"["+(bs*fontSize_height)+"]={"+outStr+"};";
      }
      else
      {
        Blockly.Arduino.definitions_['var_declare_st7735_'+dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)] = HZ_image + "\n//" + hz_sharp + "\nunsigned char oled_st7735_" + dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)+"["+(bs*fontSize_height)+"]={"+outStr+"};";
      }
    }
    else
    {
      if(checkbox_st7735_show_hz_message)
      {
        if(checkbox_st7735_show_hz_save)
        {
          Blockly.Arduino.definitions_['var_declare_st7735_'+dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)] = "//" + hz_sharp + "\nstatic const unsigned char PROGMEM oled_st7735_" + dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)+"["+(bs*fontSize_height)+"]={"+outStr+"};";
        }
        else
        {
          Blockly.Arduino.definitions_['var_declare_st7735_'+dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)] = "//" + hz_sharp + "\nunsigned char oled_st7735_" + dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)+"["+(bs*fontSize_height)+"]={"+outStr+"};";
        }
      }
      else
      {
        if(checkbox_st7735_show_hz_save)
        {
          Blockly.Arduino.definitions_['var_declare_st7735_'+dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)] = "static const unsigned char PROGMEM oled_st7735_" + dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)+"["+(bs*fontSize_height)+"]={"+outStr+"};";
        }
        else
        {
          Blockly.Arduino.definitions_['var_declare_st7735_'+dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)] = "unsigned char oled_st7735_" + dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)+"["+(bs*fontSize_height)+"]={"+outStr+"};";
        }
      }
    }
  if(checkbox_st7735_show_hz_message)
  {
    var code = '//绘制位图 ' + hz_sharp + '  X坐标：' + value_st7735_hz_x + '  Y坐标：' + value_st7735_hz_y + '  位图宽度：' + value_st7735_hz_width + '  位图高度：' + value_st7735_hz_height + '\n' + text_st7735_name+'.drawBitmap('+value_st7735_hz_x+', '+value_st7735_hz_y+', oled_st7735_' + dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)+', '+value_st7735_hz_width+', '+value_st7735_hz_height+', '+value_st7735_hz_color+');\n';
  }
  else
  {
    var code = text_st7735_name+'.drawBitmap('+value_st7735_hz_x+', '+value_st7735_hz_y+', oled_st7735_' + dropdown_st7735_hz_sharp + '_' + text_st7735_hz_line_height + 'px' + encodeUnicode(value_st7735_hz_data)+', '+value_st7735_hz_width+', '+value_st7735_hz_height+', '+value_st7735_hz_color+');\n';
  }
  return code;
};

Blockly.Arduino.make_arduino_st7735_print = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var value_st7735_print_data = Blockly.Arduino.valueToCode(this, 'st7735_print_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_st7735_name+'.print('+value_st7735_print_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_println = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var value_st7735_print_data = Blockly.Arduino.valueToCode(this, 'st7735_print_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_st7735_name+'.println('+value_st7735_print_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_print1 = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var value_st7735_print1_data = Blockly.Arduino.valueToCode(this, 'st7735_print1_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_st7735_print1_type = this.getFieldValue('st7735_print1_type');
  var code = ''+text_st7735_name+'.print('+value_st7735_print1_data+', '+dropdown_st7735_print1_type+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_println1 = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var value_st7735_println1_data = Blockly.Arduino.valueToCode(this, 'st7735_println1_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_st7735_println1_type = this.getFieldValue('st7735_println1_type');
  var code = ''+text_st7735_name+'.println('+value_st7735_println1_data+', '+dropdown_st7735_println1_type+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_show_text_2019_10_18 = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_show_text_type = this.getFieldValue('show_text_type');
    var value_st7735_print_data = Blockly.Arduino.valueToCode(this, 'st7735_print_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_st7735_name+'.'+dropdown_show_text_type+'('+value_st7735_print_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_show_num_2019_10_18 = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_show_num_type = this.getFieldValue('show_num_type');
    var value_st7735_print_data = Blockly.Arduino.valueToCode(this, 'st7735_print_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_st7735_print_type = this.getFieldValue('st7735_print_type');
  var code = ''+text_st7735_name+'.'+dropdown_show_num_type+'('+value_st7735_print_data+', '+dropdown_st7735_print_type+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_draw_pixel = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var value_st7735_draw_pixel_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_pixel_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_pixel_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_st7735_name+'.drawPixel('+value_st7735_draw_pixel_x+', '+value_st7735_draw_pixel_y+', '+value_st7735_draw_pixel_color+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_draw_line = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var value_st7735_draw_pixel_start_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_start_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_pixel_start_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_start_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_pixel_end_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_end_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_pixel_end_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_end_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_pixel_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_st7735_name+'.drawLine('+value_st7735_draw_pixel_start_x+', '+value_st7735_draw_pixel_start_y+', '+value_st7735_draw_pixel_end_x+', '+value_st7735_draw_pixel_end_y+', '+value_st7735_draw_pixel_color+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_draw_line1 = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_st7735_draw_line1_type = this.getFieldValue('st7735_draw_line1_type');
    var value_st7735_draw_pixel_start_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_start_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_pixel_start_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_start_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_pixel_length = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_length', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_pixel_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_st7735_name+'.'+dropdown_st7735_draw_line1_type+'('+value_st7735_draw_pixel_start_x+', '+value_st7735_draw_pixel_start_y+', '+value_st7735_draw_pixel_length+', '+value_st7735_draw_pixel_color+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_draw_rect = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_st7735_draw_rect_type = this.getFieldValue('st7735_draw_rect_type');
    var dropdown_st7735_draw_rect_type_1 = this.getFieldValue('st7735_draw_rect_type_1');
    var value_st7735_draw_rect_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_width = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_width', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_hight = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_hight', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_st7735_name + '.' + dropdown_st7735_draw_rect_type_1 + dropdown_st7735_draw_rect_type + '(' + value_st7735_draw_rect_x + ', ' + value_st7735_draw_rect_y + ', ' + value_st7735_draw_rect_width + ', ' + value_st7735_draw_rect_hight + ', ' + value_st7735_draw_rect_color + ');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_draw_rect_change_2019_10_18 = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_st7735_draw_rect_type_1 = this.getFieldValue('st7735_draw_rect_type_1');
    var value_st7735_draw_rect_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_width = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_width', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_hight = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_hight', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_st7735_name + '.' + dropdown_st7735_draw_rect_type_1 + 'Rect(' + value_st7735_draw_rect_x + ', ' + value_st7735_draw_rect_y + ', ' + value_st7735_draw_rect_width + ', ' + value_st7735_draw_rect_hight + ', ' + value_st7735_draw_rect_color + ');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_draw_Roundrect_change_2019_10_18 = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_st7735_draw_rect_type_1 = this.getFieldValue('st7735_draw_rect_type_1');
    var value_st7735_draw_rect_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_width = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_width', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_hight = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_hight', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_radius = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_radius', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_rect_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_st7735_name + '.' + dropdown_st7735_draw_rect_type_1 + 'Roundrect(' + value_st7735_draw_rect_x + ', ' + value_st7735_draw_rect_y + ', ' + value_st7735_draw_rect_width + ', ' + value_st7735_draw_rect_hight + ', '+ value_st7735_draw_rect_radius + ', ' + value_st7735_draw_rect_color + ');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_draw_circle = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_oled_draw_circle_type = this.getFieldValue('oled_draw_circle_type');
    var value_st7735_draw_circle_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_circle_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_circle_radius = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_radius', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_circle_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_st7735_name+'.'+dropdown_oled_draw_circle_type+'Circle('+value_st7735_draw_circle_x+', '+value_st7735_draw_circle_y+', '+value_st7735_draw_circle_radius+', '+value_st7735_draw_circle_color+');\n';
  return code;
};

Blockly.Arduino.make_arduino_st7735_draw_triangle = function() {
    var text_st7735_name = this.getFieldValue('st7735_name');
    var dropdown_st7735_draw_triangle_type = this.getFieldValue('st7735_draw_triangle_type');
    var value_st7735_draw_triangle_x1 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_x1', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_triangle_y1 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_y1', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_triangle_x2 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_x2', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_triangle_y2 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_y2', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_triangle_x3 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_x3', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_triangle_y3 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_y3', Blockly.Arduino.ORDER_ATOMIC);
    var value_st7735_draw_triangle_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_st7735_name+'.'+dropdown_st7735_draw_triangle_type+'Triangle('+value_st7735_draw_triangle_x1+', '+value_st7735_draw_triangle_y1+', '+value_st7735_draw_triangle_x2+', '+value_st7735_draw_triangle_y2+', '+value_st7735_draw_triangle_x3+', '+value_st7735_draw_triangle_y3+', '+value_st7735_draw_triangle_color+');\n';
  return code;
};

//初始化LCD12864
Blockly.Arduino.make_arduino_lcd12864_begin = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var dropdown_display_rotation = this.getFieldValue('display_rotation');
    var value_clock = Blockly.Arduino.valueToCode(this, 'clock', Blockly.Arduino.ORDER_ATOMIC);
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
    var value_cs = Blockly.Arduino.valueToCode(this, 'cs', Blockly.Arduino.ORDER_ATOMIC);
    var value_reset = Blockly.Arduino.valueToCode(this, 'reset', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_U8g2lib'] = '#include <U8g2lib.h>';
  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['var_declare_U8G2_'+text_lcd12864_name] ='U8G2_ST7920_128X64_1_SW_SPI '+text_lcd12864_name+'('+dropdown_display_rotation+', '+value_clock+', '+value_data+', '+value_cs+', '+value_reset+');';
  Blockly.Arduino.setups_["setup_u8g2_"+text_lcd12864_name] =' '+text_lcd12864_name+'.begin();';
  var code = '';
  return code;
};

//LCD12864更新屏幕数据
Blockly.Arduino.make_arduino_lcd12864_update = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var statements_update_data = Blockly.Arduino.statementToCode(this, 'update_data');
  var code = ''+text_lcd12864_name+'.firstPage();'
            +'\ndo'
            +'\n{'
            +'\n  '+statements_update_data
            +'\n}'
            +'\nwhile('+text_lcd12864_name+'.nextPage());\n';
  return code;
};

//显示汉字（使用位图显示）
Blockly.Arduino.make_arduino_lcd12864_show_hz = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var checkbox_lcd12864_show_hz = this.getFieldValue('lcd12864_show_hz') == 'TRUE';
    var checkbox_lcd12864_show_hz_message = this.getFieldValue('lcd12864_show_hz_message') == 'TRUE';
    var checkbox_lcd12864_show_hz_save = this.getFieldValue('lcd12864_show_hz_save') == 'TRUE';
    var dropdown_lcd12864_hz_sharp = this.getFieldValue('lcd12864_hz_sharp');
    var text_lcd12864_hz_line_height = this.getFieldValue('lcd12864_hz_line_height');
    var dropdown_hz_up_down = this.getFieldValue('hz_up_down');
    var text_hz_up_down_data = this.getFieldValue('hz_up_down_data');
    var dropdown_hz_left_right = this.getFieldValue('hz_left_right');
    var text_hz_left_right_data = this.getFieldValue('hz_left_right_data');
    var value_lcd12864_hz_data = Blockly.Arduino.valueToCode(this, 'lcd12864_hz_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_lcd12864_hz_x = Blockly.Arduino.valueToCode(this, 'lcd12864_hz_x', Blockly.Arduino.ORDER_ATOMIC);
    var value_lcd12864_hz_y = Blockly.Arduino.valueToCode(this, 'lcd12864_hz_y', Blockly.Arduino.ORDER_ATOMIC);
    var value_lcd12864_hz_height = Blockly.Arduino.valueToCode(this, 'lcd12864_hz_height', Blockly.Arduino.ORDER_ATOMIC);
    var value_lcd12864_hz_width = Blockly.Arduino.valueToCode(this, 'lcd12864_hz_width', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_lcd12864_hz_variant = 'normal';
    var dropdown_lcd12864_hz_style = 'normal';
    var dropdown_lcd12864_hz_thickness = 'normal';
    var fontSize_width=myAtoi(value_lcd12864_hz_width);
    var fontSize_height=myAtoi(value_lcd12864_hz_height);
    var bs=Math.ceil(fontSize_width/8);//每行占字节数

    var move_x = 0;
    var move_y = 0;
    if(dropdown_hz_up_down == "hz_down")
    {
      move_y = myAtoi(text_hz_up_down_data);
    }
    else
    {
      move_y = myAtoi("-"+text_hz_up_down_data);
    }

    if(dropdown_hz_left_right == "hz_right")
    {
      move_x = myAtoi(text_hz_left_right_data);
    }
    else
    {
      move_x = myAtoi("-"+text_hz_left_right_data);
    }
    canvas.width=fontSize_width;
    canvas.height=fontSize_height;
    ctx.font = dropdown_lcd12864_hz_style + ' ' + dropdown_lcd12864_hz_variant + ' ' + dropdown_lcd12864_hz_thickness + ' ' + text_lcd12864_hz_line_height + 'px ' + dropdown_lcd12864_hz_sharp;
    ctx.textAlign="left";
    ctx.textBaseline="top";

    var c = value_lcd12864_hz_data;
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,fontSize_width,fontSize_height);//涂背景
    ctx.fillStyle="#ffffff";
    ctx.fillText(c,move_x,move_y);//写字
    var data=ctx.getImageData(0,0,fontSize_width,fontSize_height).data;//获取图像
    var zm=new Array(bs*fontSize_height);
    for(var i=0;i<zm.length;i++)zm[i]=0;//初始化字模数组
    for(var i=0;i<fontSize_height;i++)//读像素值组成字模数组
      for(var j=0;j<fontSize_width;j++)
        if(data[i*fontSize_width*4+j*4])zm[parseInt(j/8)+i*bs]+=bitArr[j%8];
    var outStr="";//将字模数组转化为十六进制形式
    for(var i=0;i<zm.length-1;i++)outStr+=toHex(zm[i])+",";
    outStr+=toHex(zm[i]);

    var zm1=new Array(bs*fontSize_height);
    var outstr1 = "";
    for(var i in zm)zm1[i] = zm[i].toString(2);
    for(var i in zm1)
    {
      var str = "";
      for(var j = 0;j<8-zm1[i].length;j++)str+="0";
      zm1[i] = str + zm1[i];
    }
    for(var i in zm1)outstr1+=zm1[i];

    var HZ_image = "";
    var num_hz = 0;
    for(var i = 0;i<fontSize_width;i++)
    {
      HZ_image+="--";
      if(i == (fontSize_width - 1))HZ_image+="\n|";
    }

    for(var data_hz of outstr1)
    {
      num_hz++;
      if(num_hz == outstr1.length)
      {
        HZ_image+="|\n";
      }
      else if(num_hz%(bs*8) < fontSize_width && num_hz%(bs*8) > 0)
      {
        if(data_hz == "0")HZ_image+="  ";
        else if(data_hz == "1")HZ_image+="0 ";
      } 
      else if(num_hz%(bs*8) == 0)
      {
        HZ_image+="|\n|";
      }
    }
    for(var i = 0;i<fontSize_width;i++)
    {
      HZ_image+="--";
    }
    HZ_image = "/*" + "\n" + HZ_image + "\n" + "*/";
    
    var hz_sharp = "";
    switch(dropdown_lcd12864_hz_sharp)
    {
      case "STHeiti":
        hz_sharp = "华文黑体";
        break;
      case "STKaiti":
        hz_sharp = "华文楷体";
        break;
      case "STXihei":
        hz_sharp = "华文细黑";
        break;
      case "STSong":
        hz_sharp = "华文宋体";
        break;
      case "STZhongsong":
        hz_sharp = "华文中宋";
        break;
      case "STFangsong":
        hz_sharp = "华文仿宋";
        break;
      case "STCaiyun":
        hz_sharp = "华文彩云";
        break;
      case "STHupo":
        hz_sharp = "华文琥珀";
        break;
      case "STLiti":
        hz_sharp = "华文隶书";
        break;
      case "STXingkai":
        hz_sharp = "华文行楷";
        break;
      case "STXinwei":
        hz_sharp = "华文新魏";
        break;
      case "simHei":
        hz_sharp = "黑体";
        break;
      case "simSun":
        hz_sharp = "宋体";
        break;
      case "NSimSun":
        hz_sharp = "新宋体";
        break;
      case "FangSong":
        hz_sharp = "仿宋";
        break;
      case "KaiTi":
        hz_sharp = "楷体";
        break;
      case "FangSong_GB2312":
        hz_sharp = "仿宋_GB2312";
        break;
      case "KaiTi_GB2312":
        hz_sharp = "楷体_GB2312";
        break;
      case "LiSu":
        hz_sharp = "隶书";
        break;
      case "YouYuan":
        hz_sharp = "幼圆";
        break;
      case "PMingLiU":
        hz_sharp = "新细明体";
        break;
      case "MingLiU":
        hz_sharp = "细明体";
        break;
      case "DFKai-SB":
        hz_sharp = "标楷体";
        break;
      case "Microsoft JhengHei":
        hz_sharp = "微软正黑体";
        break;
      case "Microsoft YaHei":
        hz_sharp = "微软雅黑体";
        break;
      default:
        hz_sharp = dropdown_lcd12864_hz_sharp;
        break;
    }
    hz_sharp = "字体：" + hz_sharp + "  字号：" + text_lcd12864_hz_line_height + "px" + "  显示文字：" + value_lcd12864_hz_data;


    var modulus_array = new Array();
    for(var i = 0;i < fontSize_height; i++)
    {
      modulus_array[i] = new Array();
      for(var j = 0;j < bs*8;j++)
      {
        modulus_array[i][j] = "";
      }
    }

    for(var i = 1;i <= fontSize_height; i++)
    {
      for(var j = 1;j <= bs*8;j++)
      {
        modulus_array[i-1][j-1] = outstr1.charAt((i-1)*bs*8 + j - 1);
      }
    }

    var bit_num = fontSize_height*bs;
    var modulus_data = "";
    var array_x = 0;
    var array_y = 0;
    var modulus_y = Math.ceil(fontSize_height/8);
    var modulus_x = Math.ceil(fontSize_width/8);

    bit_num = modulus_x*fontSize_height;
    for(var j = 1;j <= bit_num;j++)
    {
      for(var i = 1;i <= 8;i++)
      {
        if(j%modulus_x == 0)
          array_x = (modulus_x-1)*8 + i - 1;
        else
          array_x = (j%modulus_x-1)*8 + i - 1;
        array_y = Math.ceil(j/modulus_x) - 1;
        modulus_data+=modulus_array[array_y][array_x];
      }
      modulus_data+=",";
    }

    var now_data = "";
    var end_data = "";

    for(var i of modulus_data)
    {
      if(i == ",")
      {
        end_data+=now_data;
        end_data+=",";
        now_data = "";
      }
      else
        now_data = i + now_data;
    }
    modulus_data = end_data;

    now_data = "";
    end_data = "0x";
    for(var i of modulus_data)
    {
      if(i == ",")
      {
        end_data+=",0x";
        continue;
      }
      now_data+=i;
      if(now_data.length == 4)
      {
        end_data+=string_Bin_to_Hex(now_data);
        now_data = "";
      }
    }
    modulus_data = end_data;
    modulus_data = modulus_data.substring(0,modulus_data.length-3);
    
    if(checkbox_lcd12864_show_hz)
    {
      if(checkbox_lcd12864_show_hz_save)
      {
        Blockly.Arduino.definitions_['var_declare_lcd12864_'+dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)] = HZ_image + "\n//" + hz_sharp + "\nstatic const unsigned char PROGMEM lcd12864_" + dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)+"["+(bs*fontSize_height)+"]={"+modulus_data+"};";
      }
      else
      {
        Blockly.Arduino.definitions_['var_declare_lcd12864_'+dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)] = HZ_image + "\n//" + hz_sharp + "\nunsigned char lcd12864_" + dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)+"["+(bs*fontSize_height)+"]={"+modulus_data+"};";
      }
    }
    else
    {
      if(checkbox_lcd12864_show_hz_message)
      {
        if(checkbox_lcd12864_show_hz_save)
        {
          Blockly.Arduino.definitions_['var_declare_lcd12864_'+dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)] = "//" + hz_sharp + "\nstatic const unsigned char PROGMEM lcd12864_" + dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)+"["+(bs*fontSize_height)+"]={"+modulus_data+"};";
        }
        else
        {
          Blockly.Arduino.definitions_['var_declare_lcd12864_'+dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)] = "//" + hz_sharp + "\nunsigned char lcd12864_" + dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)+"["+(bs*fontSize_height)+"]={"+modulus_data+"};";
        }
      }
      else
      {
        if(checkbox_lcd12864_show_hz_save)
        {
          Blockly.Arduino.definitions_['var_declare_lcd12864_'+dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)] = "static const unsigned char PROGMEM lcd12864_" + dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)+"["+(bs*fontSize_height)+"]={"+modulus_data+"};";
        }
        else
        {
          Blockly.Arduino.definitions_['var_declare_lcd12864_'+dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)] = "unsigned char lcd12864_" + dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)+"["+(bs*fontSize_height)+"]={"+modulus_data+"};";
        }
      }
    }
  if(checkbox_lcd12864_show_hz_message)
  {
    var code = '//绘制位图 ' + hz_sharp + '  X坐标：' + value_lcd12864_hz_x + '  Y坐标：' + value_lcd12864_hz_y + '  位图宽度：' + value_lcd12864_hz_width + '  位图高度：' + value_lcd12864_hz_height + '\n' + text_lcd12864_name+'.drawXBMP('+value_lcd12864_hz_x+', '+value_lcd12864_hz_y+', '+value_lcd12864_hz_width+', '+value_lcd12864_hz_height+', lcd12864_' + dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)+');\n';
  }
  else
  {
    var code = text_lcd12864_name+'.drawXBMP('+value_lcd12864_hz_x+', '+value_lcd12864_hz_y+', '+value_lcd12864_hz_width+', '+value_lcd12864_hz_height+', lcd12864_' + dropdown_lcd12864_hz_sharp + '_' + text_lcd12864_hz_line_height + 'px' + encodeUnicode(value_lcd12864_hz_data)+');\n';
  }
  return code;
};

//LCD12864设置字体
Blockly.Arduino.make_arduino_lcd12864_setFont = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var dropdown_font_type = this.getFieldValue('font_type');
    var dropdown_font_size = this.getFieldValue('font_size');
    var dropdown_font_type1 = this.getFieldValue('font_type1');
  var code = ''+text_lcd12864_name+'.setFont(u8g2_font_'+dropdown_font_type+dropdown_font_type1+dropdown_font_size+'_tf);\n'
            +''+text_lcd12864_name+'.setFontPosTop();\n';
  return code;
};

//LCD12864设置光标位置
Blockly.Arduino.make_arduino_lcd12864_setCursor = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var value_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
    var value_y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC);

  var code = ''+text_lcd12864_name+'.setCursor('+value_x+', '+value_y+');\n';
  return code;
};

//LCD12864显示文本
Blockly.Arduino.make_arduino_lcd12864_print = function() {
    var value_print_data = Blockly.Arduino.valueToCode(this, 'print_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
  var code = ''+text_lcd12864_name+'.print('+value_print_data+');\n';
  return code;
};

//LCD12864清屏
Blockly.Arduino.make_arduino_lcd12864_clearDisplay = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
  var code = ''+text_lcd12864_name+'.clearDisplay();\n';
  return code;
};

//LCD12864设置背光亮度
Blockly.Arduino.make_arduino_lcd12864_setContrast = function() {
    var value_set_data = Blockly.Arduino.valueToCode(this, 'set_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
  var code = ''+text_lcd12864_name+'.setContrast('+value_set_data+');\n';
  return code;
};

//LCD12864绘制位图
Blockly.Arduino.make_arduino_lcd12864_drawXBMP = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var value_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
    var value_y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC);
    var value_width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC);
    var value_height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC);
    var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_lcd12864_name+'.drawXBMP('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+value_data+');\n';
  return code;
};

//LCD12864画点
Blockly.Arduino.make_arduino_lcd12864_drawPixel = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var value_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
    var value_y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_lcd12864_name+'.drawPixel('+value_x+', '+value_y+');\n';
  return code;
};

//LCD12864画线
Blockly.Arduino.make_arduino_lcd12864_drawLine = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var value_x1 = Blockly.Arduino.valueToCode(this, 'x1', Blockly.Arduino.ORDER_ATOMIC);
    var value_y1 = Blockly.Arduino.valueToCode(this, 'y1', Blockly.Arduino.ORDER_ATOMIC);
    var value_x2 = Blockly.Arduino.valueToCode(this, 'x2', Blockly.Arduino.ORDER_ATOMIC);
    var value_y2 = Blockly.Arduino.valueToCode(this, 'y2', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_lcd12864_name+'.drawLine('+value_x1+', '+value_y1+', '+value_x2+', '+value_y2+');\n';
  return code;
};

//LCD12864画水平线和垂直线
Blockly.Arduino.make_arduino_lcd12864_drawLine1 = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var dropdown_draw_type = this.getFieldValue('draw_type');
    var value_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
    var value_y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC);
    var value_length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_lcd12864_name+'.'+dropdown_draw_type+'('+value_x+', '+value_y+', '+value_length+');\n';
  return code;
};

//LCD12864画矩形
Blockly.Arduino.make_arduino_lcd12864_drawBox = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var dropdown_draw_type = this.getFieldValue('draw_type');
    var value_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
    var value_y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC);
    var value_width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC);
    var value_height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_lcd12864_name+'.'+dropdown_draw_type+'('+value_x+', '+value_y+', '+value_width+', '+value_height+');\n';
  return code;
};

//LCD12864画圆角矩形
Blockly.Arduino.make_arduino_lcd12864_drawRBox = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var dropdown_draw_type = this.getFieldValue('draw_type');
    var value_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
    var value_y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC);
    var value_width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC);
    var value_height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC);
    var value_r = Blockly.Arduino.valueToCode(this, 'r', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_lcd12864_name+'.'+dropdown_draw_type+'('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+value_r+');\n';
  return code;
};

//LCD12864画圆
Blockly.Arduino.make_arduino_lcd12864_drawCircle = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var dropdown_draw_type = this.getFieldValue('draw_type');
    var value_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
    var value_y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC);
    var value_r = Blockly.Arduino.valueToCode(this, 'r', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_draw_type1 = this.getFieldValue('draw_type1');
  var code = ''+text_lcd12864_name+'.'+dropdown_draw_type+'('+value_x+', '+value_y+', '+value_r+', '+dropdown_draw_type1+');\n';
  return code;
};

//LCD12864画椭圆
Blockly.Arduino.make_arduino_lcd12864_drawEllipse = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var dropdown_draw_type = this.getFieldValue('draw_type');
    var value_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
    var value_y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC);
    var value_x_r = Blockly.Arduino.valueToCode(this, 'x_r', Blockly.Arduino.ORDER_ATOMIC);
    var value_y_r = Blockly.Arduino.valueToCode(this, 'y_r', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_draw_type1 = this.getFieldValue('draw_type1');
  var code = ''+text_lcd12864_name+'.'+dropdown_draw_type+'('+value_x+', '+value_y+', '+value_x_r+', '+value_y_r+', '+dropdown_draw_type1+');\n';
  return code;
};

//LCD12864画三角形
Blockly.Arduino.make_arduino_lcd12864_drawTriangle = function() {
    var text_lcd12864_name = this.getFieldValue('lcd12864_name');
    var value_x1 = Blockly.Arduino.valueToCode(this, 'x1', Blockly.Arduino.ORDER_ATOMIC);
    var value_y1 = Blockly.Arduino.valueToCode(this, 'y1', Blockly.Arduino.ORDER_ATOMIC);
    var value_x2 = Blockly.Arduino.valueToCode(this, 'x2', Blockly.Arduino.ORDER_ATOMIC);
    var value_y2 = Blockly.Arduino.valueToCode(this, 'y2', Blockly.Arduino.ORDER_ATOMIC);
    var value_x3 = Blockly.Arduino.valueToCode(this, 'x3', Blockly.Arduino.ORDER_ATOMIC);
    var value_y3 = Blockly.Arduino.valueToCode(this, 'y3', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_lcd12864_name+'.drawTriangle('+value_x1+', '+value_y1+', '+value_x2+', '+value_y2+', '+value_x3+', '+value_y3+');\n';
  return code;
};

//初始化MAX7219八位数码管
Blockly.Arduino.make_arduino_max7219_led_begin = function() {
    var text_max7219_name = this.getFieldValue('max7219_name');
    var value_din = Blockly.Arduino.valueToCode(this, 'din', Blockly.Arduino.ORDER_ATOMIC);
    var value_clk = Blockly.Arduino.valueToCode(this, 'clk', Blockly.Arduino.ORDER_ATOMIC);
    var value_cs = Blockly.Arduino.valueToCode(this, 'cs', Blockly.Arduino.ORDER_ATOMIC);
    var value_number = Blockly.Arduino.valueToCode(this, 'number', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_LedControl'] = '#include "LedControl.h"';
  Blockly.Arduino.definitions_['var_declare_max7219_led_' + text_max7219_name] = 'LedControl '+text_max7219_name+'=LedControl('+value_din+', '+value_clk+', '+value_cs+', '+value_number+');';
  var code = '';
  return code;
};

//MAX7219八位数码管 获取连接的设备的数目
Blockly.Arduino.make_arduino_max7219_led_getDeviceCount = function() {
    var text_max7219_name = this.getFieldValue('max7219_name');
  var code = text_max7219_name+'.getDeviceCount()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//MAX7219八位数码管 打开或关闭某个设备
Blockly.Arduino.make_arduino_max7219_led_shutdown = function() {
    var text_max7219_name = this.getFieldValue('max7219_name');
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var value_status = Blockly.Arduino.valueToCode(this, 'status', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_max7219_name+'.shutdown('+value_address+', '+value_status+');\n';
  return code;
};

Blockly.Arduino.make_arduino_max7219_led_shutdown_data = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//MAX7219八位数码管 调整一个设备的亮度和最大显示位数
Blockly.Arduino.make_arduino_max7219_led_setScanLimit = function() {
    var text_max7219_name = this.getFieldValue('max7219_name');
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var value_limit = Blockly.Arduino.valueToCode(this, 'limit', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_limit_type = this.getFieldValue('limit_type');
  var code = text_max7219_name+'.'+dropdown_limit_type+'('+value_address+', '+value_limit+');\n';
  return code;
};

//MAX7219八位数码管 清除一个设备上所有显示数据
Blockly.Arduino.make_arduino_max7219_led_clearDisplay = function() {
    var text_max7219_name = this.getFieldValue('max7219_name');
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_max7219_name+'.clearDisplay('+value_address+');\n';
  return code;
};

//MAX7219八位数码管 设置某个设备上一个点处LED的亮与灭
Blockly.Arduino.make_arduino_max7219_led_setLed = function() {
    var text_max7219_name = this.getFieldValue('max7219_name');
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var value_row = Blockly.Arduino.valueToCode(this, 'row', Blockly.Arduino.ORDER_ATOMIC);
    var value_col = Blockly.Arduino.valueToCode(this, 'col', Blockly.Arduino.ORDER_ATOMIC);
    var value_state = Blockly.Arduino.valueToCode(this, 'state', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_max7219_name+'.setLed('+value_address+', '+value_row+', '+value_col+', '+value_state+');\n';
  return code;
};

Blockly.Arduino.make_arduino_max7219_led_setLed_data = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_max7219_led_setRow_Column = function() {
    var text_max7219_name = this.getFieldValue('max7219_name');
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var value_x_y = Blockly.Arduino.valueToCode(this, 'x_y', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_x_y_type = this.getFieldValue('x_y_type');
    var value_x_y_state = Blockly.Arduino.valueToCode(this, 'state', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_max7219_name+'.'+dropdown_x_y_type+'('+value_address+', '+value_x_y+', '+value_x_y_state+');\n';
  return code;
};

Blockly.Arduino.make_max7219_led = function() {
    var checkbox_led_no_0 = this.getFieldValue('led_no_0') == 'TRUE';
    var checkbox_led_1 = this.getFieldValue('led_1') == 'TRUE';
    var checkbox_led_1_1 = this.getFieldValue('led_1_1') == 'TRUE';
    var checkbox_led_6 = this.getFieldValue('led_6') == 'TRUE';
    var checkbox_led_no_1 = this.getFieldValue('led_no_1') == 'TRUE';
    var checkbox_led_no_2 = this.getFieldValue('led_no_2') == 'TRUE';
    var checkbox_led_2 = this.getFieldValue('led_2') == 'TRUE';
    var checkbox_led_6_1 = this.getFieldValue('led_6_1') == 'TRUE';
    var checkbox_led_no_3 = this.getFieldValue('led_no_3') == 'TRUE';
    var checkbox_led_no_4 = this.getFieldValue('led_no_4') == 'TRUE';
    var checkbox_led_2_1 = this.getFieldValue('led_2_1') == 'TRUE';
    var checkbox_led_no_10 = this.getFieldValue('led_no_10') == 'TRUE';
    var checkbox_led_7 = this.getFieldValue('led_7') == 'TRUE';
    var checkbox_led_7_1 = this.getFieldValue('led_7_1') == 'TRUE';
    var checkbox_led_5 = this.getFieldValue('led_5') == 'TRUE';
    var checkbox_led_no_5 = this.getFieldValue('led_no_5') == 'TRUE';
    var checkbox_led_no_6 = this.getFieldValue('led_no_6') == 'TRUE';
    var checkbox_led_3 = this.getFieldValue('led_3') == 'TRUE';
    var checkbox_led_5_1 = this.getFieldValue('led_5_1') == 'TRUE';
    var checkbox_led_no_7 = this.getFieldValue('led_no_7') == 'TRUE';
    var checkbox_led_no_8 = this.getFieldValue('led_no_8') == 'TRUE';
    var checkbox_led_3_1 = this.getFieldValue('led_3_1') == 'TRUE';
    var checkbox_led_no_9 = this.getFieldValue('led_no_9') == 'TRUE';
    var checkbox_led_4 = this.getFieldValue('led_4') == 'TRUE';
    var checkbox_led_4_1 = this.getFieldValue('led_4_1') == 'TRUE';
    var checkbox_led_0 = this.getFieldValue('led_0') == 'TRUE';

  this.setFieldValue("false","led_no_0");
  this.setFieldValue("false","led_no_1");
  this.setFieldValue("false","led_no_2");
  this.setFieldValue("false","led_no_3");
  this.setFieldValue("false","led_no_4");
  this.setFieldValue("false","led_no_5");
  this.setFieldValue("false","led_no_6");
  this.setFieldValue("false","led_no_7");
  this.setFieldValue("false","led_no_8");
  this.setFieldValue("false","led_no_9");
  this.setFieldValue("false","led_no_10");

  var code = 'B';
  if(checkbox_led_0)
  {
    code+='1';
  }
  else
  {
    code+='0';
  }
  if(checkbox_led_1)
  {
    code+='1';
    this.setFieldValue("true","led_1_1");
  }
  else
  {
    code+='0';
    this.setFieldValue("false","led_1_1");
  }
  if(checkbox_led_2)
  {
    code+='1';
    this.setFieldValue("true","led_2_1");
  }
  else
  {
    code+='0';
    this.setFieldValue("false","led_2_1");
  }
  if(checkbox_led_3)
  {
    code+='1';
    this.setFieldValue("true","led_3_1");
  }
  else
  {
    code+='0';
    this.setFieldValue("false","led_3_1");
  }
  if(checkbox_led_4)
  {
    code+='1';
    this.setFieldValue("true","led_4_1");
  }
  else
  {
    code+='0';
    this.setFieldValue("false","led_4_1");
  }
  if(checkbox_led_5)
  {
    code+='1';
    this.setFieldValue("true","led_5_1");
  }
  else
  {
    code+='0';
    this.setFieldValue("false","led_5_1");
  }
  if(checkbox_led_6)
  {
    code+='1';
    this.setFieldValue("true","led_6_1");
  }
  else
  {
    code+='0';
    this.setFieldValue("false","led_6_1");
  }
  if(checkbox_led_7)
  {
    code+='1';
    this.setFieldValue("true","led_7_1");
  }
  else
  {
    code+='0';
    this.setFieldValue("false","led_7_1");
  }
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//MAX7219八位数码管 让某个设备的某个数码管显示字节
Blockly.Arduino.make_arduino_max7219_led_setDigit = function() {
    var text_max7219_name = this.getFieldValue('max7219_name');
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var value_digit = Blockly.Arduino.valueToCode(this, 'digit', Blockly.Arduino.ORDER_ATOMIC);
    var value_value = Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
    var value_dp = Blockly.Arduino.valueToCode(this, 'dp', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_max7219_name+'.setDigit('+value_address+', '+value_digit+', '+value_value+', '+value_dp+');\n';
  return code;
};

Blockly.Arduino.make_arduino_max7219_led_byte = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//MAX7219八位数码管 让某个设备的某个数码管显示字符
Blockly.Arduino.make_arduino_max7219_led_setChar = function() {
    var text_max7219_name = this.getFieldValue('max7219_name');
    var value_address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var value_digit = Blockly.Arduino.valueToCode(this, 'digit', Blockly.Arduino.ORDER_ATOMIC);
    var value_value = Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
    var value_dp = Blockly.Arduino.valueToCode(this, 'dp', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_max7219_name+'.setChar('+value_address+', '+value_digit+', '+value_value+', '+value_dp+');\n';
  return code;
};

Blockly.Arduino.make_arduino_max7219_led_char = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = '\''+dropdown_type+'\'';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_search_i2c = function() {
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();';
  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';
  Blockly.Arduino.setups_['setup_serial_print'] = 'Serial.println("\\nI2C Scanner");';
  var code = 'byte error, address;'
          +'\nint nDevices;'
          +'\nSerial.println("Scanning...");'
          +'\nnDevices = 0;'
          +'\nfor (address = 1; address < 127; address++){'
          +'\n  Wire.beginTransmission(address);'
          +'\n  error = Wire.endTransmission();'
          +'\n  if (error == 0){'
          +'\n    Serial.print("I2C device found at address 0x");'
          +'\n    if (address < 16) Serial.print("0");'
          +'\n    Serial.print(address, HEX);'
          +'\n    Serial.println(" !");'
          +'\n    nDevices++;'
          +'\n  }else if (error == 4){'
          +'\n    Serial.print("Unknow error at address 0x");'
          +'\n    if (address < 16) Serial.print("0");'
          +'\n    Serial.println(address, HEX);'
          +'\n  }'
          +'\n}'
          +'\nif (nDevices == 0) Serial.println("No I2C devices found\\n");'
          +'\nelse Serial.println("done\\n");'
          +'\ndelay(5000);'
          ;
  return code;
};

//初始化AT24Cxx储存器
Blockly.Arduino.make_arduino_at24cxx_begin = function() {
    var value_at24cxx_begin_data = Blockly.Arduino.valueToCode(this, 'at24cxx_begin_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_at24cxx_begin_type = this.getFieldValue('at24cxx_begin_type');
    var text_at24cxx_name = this.getFieldValue('at24cxx_name');

  Blockly.Arduino.definitions_['include_AH_24Cxx'] = '#include <AH_24Cxx.h>';
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';

  if(dropdown_at24cxx_begin_type == "AT24C01")
  {
    Blockly.Arduino.definitions_['var_declare_AH_24Cxx_' + text_at24cxx_name] = '#define AT24C01  0\n' + 'AH_24Cxx '+text_at24cxx_name+' = AH_24Cxx('+dropdown_at24cxx_begin_type+', '+value_at24cxx_begin_data+');';
  }
  else if(dropdown_at24cxx_begin_type == "AT24C02")
  {
    Blockly.Arduino.definitions_['var_declare_AH_24Cxx_' + text_at24cxx_name] = '#define AT24C02  1\n' + 'AH_24Cxx '+text_at24cxx_name+' = AH_24Cxx('+dropdown_at24cxx_begin_type+', '+value_at24cxx_begin_data+');';
  }
  else if(dropdown_at24cxx_begin_type == "AT24C04")
  {
    Blockly.Arduino.definitions_['var_declare_AH_24Cxx_' + text_at24cxx_name] = '#define AT24C04  3\n' + 'AH_24Cxx '+text_at24cxx_name+' = AH_24Cxx('+dropdown_at24cxx_begin_type+', '+value_at24cxx_begin_data+');';
  }
  else if(dropdown_at24cxx_begin_type == "AT24C08")
  {
    Blockly.Arduino.definitions_['var_declare_AH_24Cxx_' + text_at24cxx_name] = '#define AT24C08  4\n' + 'AH_24Cxx '+text_at24cxx_name+' = AH_24Cxx('+dropdown_at24cxx_begin_type+', '+value_at24cxx_begin_data+');';
  }
  else if(dropdown_at24cxx_begin_type == "AT24C16")
  {
    Blockly.Arduino.definitions_['var_declare_AH_24Cxx_' + text_at24cxx_name] = '#define AT24C16  5\n' + 'AH_24Cxx '+text_at24cxx_name+' = AH_24Cxx('+dropdown_at24cxx_begin_type+', '+value_at24cxx_begin_data+');';
  }
  else if(dropdown_at24cxx_begin_type == "AT24C32")
  {
    Blockly.Arduino.definitions_['var_declare_AH_24Cxx_' + text_at24cxx_name] = '#define AT24C32  6\n' + 'AH_24Cxx '+text_at24cxx_name+' = AH_24Cxx('+dropdown_at24cxx_begin_type+', '+value_at24cxx_begin_data+');';
  }
  else if(dropdown_at24cxx_begin_type == "AT24C64")
  {
    Blockly.Arduino.definitions_['var_declare_AH_24Cxx_' + text_at24cxx_name] = '#define AT24C64  7\n' + 'AH_24Cxx '+text_at24cxx_name+' = AH_24Cxx('+dropdown_at24cxx_begin_type+', '+value_at24cxx_begin_data+');';
  }
  else if(dropdown_at24cxx_begin_type == "AT24C128")
  {
    Blockly.Arduino.definitions_['var_declare_AH_24Cxx_' + text_at24cxx_name] = '#define AT24C128  8\n' + 'AH_24Cxx '+text_at24cxx_name+' = AH_24Cxx('+dropdown_at24cxx_begin_type+', '+value_at24cxx_begin_data+');';
  }
  else if(dropdown_at24cxx_begin_type == "AT24C256")
  {
    Blockly.Arduino.definitions_['var_declare_AH_24Cxx_' + text_at24cxx_name] = '#define AT24C256  9\n' + 'AH_24Cxx '+text_at24cxx_name+' = AH_24Cxx('+dropdown_at24cxx_begin_type+', '+value_at24cxx_begin_data+');';
  }
  Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();';
  var code = '';
  return code;
};

//AT24Cxx储存器写入数据
Blockly.Arduino.make_arduino_at24cxx_write_byte = function() {
    var value_at24cxx_write_byte_data = Blockly.Arduino.valueToCode(this, 'at24cxx_write_byte_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_at24cxx_name = this.getFieldValue('at24cxx_name');
    var value_at24cxx_write_byte_address = Blockly.Arduino.valueToCode(this, 'at24cxx_write_byte_address', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_at24cxx_name+'.write_byte('+value_at24cxx_write_byte_address+', '+value_at24cxx_write_byte_data+');\n';
  return code;
};

//AT24Cxx储存器读取数据
Blockly.Arduino.make_arduino_at24cxx_read_byte = function() {
    var value_at24cxx_read_byte_address = Blockly.Arduino.valueToCode(this, 'at24cxx_read_byte_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_at24cxx_name = this.getFieldValue('at24cxx_name');
  var code = text_at24cxx_name +'.read_byte('+value_at24cxx_read_byte_address+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//AT24Cxx储存器写入数据(使用一个字节数组)
Blockly.Arduino.make_arduino_at24cxx_write_page = function() {
    var value_at24cxx_write_page_data = Blockly.Arduino.valueToCode(this, 'at24cxx_write_page_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_at24cxx_name = this.getFieldValue('at24cxx_name');
    var value_at24cxx_write_page_address = Blockly.Arduino.valueToCode(this, 'at24cxx_write_page_address', Blockly.Arduino.ORDER_ATOMIC);
    var value_at24cxx_write_page_length = Blockly.Arduino.valueToCode(this, 'at24cxx_write_page_length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_at24cxx_name+'.write_page('+value_at24cxx_write_page_address+', '+value_at24cxx_write_page_data+', '+value_at24cxx_write_page_length+');\n';
  return code;
};

//AT24Cxx储存器读取数据，保存数据到一个数组
Blockly.Arduino.make_arduino_at24cxx_read_buffer = function() {
    var value_at24cxx_read_buffer_address = Blockly.Arduino.valueToCode(this, 'at24cxx_read_buffer_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_at24cxx_name = this.getFieldValue('at24cxx_name');
    var value_at24cxx_read_buffer_length = Blockly.Arduino.valueToCode(this, 'at24cxx_read_buffer_length', Blockly.Arduino.ORDER_ATOMIC);
    var value_at24cxx_read_buffer_data = Blockly.Arduino.valueToCode(this, 'at24cxx_read_buffer_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_at24cxx_name+'.read_buffer('+value_at24cxx_read_buffer_address+', '+value_at24cxx_read_buffer_data+', '+value_at24cxx_read_buffer_length+');\n';
  return code;
};

//初始化AT24CXX存储器-1
Blockly.Arduino.make_arduino_at24cx_begin_1 = function() {
  this.setTooltip("初始化AT24CXX存储器");

    var value_at24cx_begin_address = Blockly.Arduino.valueToCode(this, 'at24cx_begin_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_at24cx_name = this.getFieldValue('at24cx_name');
    var value_at24cx_begin_pagesize = Blockly.Arduino.valueToCode(this, 'at24cx_begin_pagesize', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_AT24CX'] = '#include <AT24CX.h>';
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['var_declare_AH_24Cx_' + text_at24cx_name] = 'AT24CX '+text_at24cx_name+'('+value_at24cx_begin_address+', '+value_at24cx_begin_pagesize+');';
  var code = '';
  return code;
};

//初始化AT24CXX存储器
Blockly.Arduino.make_arduino_at24cx_begin = function() {
  this.setTooltip("初始化AT24CXX存储器");

    var value_at24cx_begin_data = Blockly.Arduino.valueToCode(this, 'at24cx_begin_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_at24cx_begin_type = this.getFieldValue('at24cx_begin_type');
    var text_at24cx_name = this.getFieldValue('at24cx_name');

  Blockly.Arduino.definitions_['include_AT24CX'] = '#include <AT24CX.h>';
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['var_declare_AH_24Cx_' + text_at24cx_name] = ''+dropdown_at24cx_begin_type+' '+text_at24cx_name+'('+value_at24cx_begin_data+');';
  var code = '';
  return code;
};

//AT24CXX存储器 地址
Blockly.Arduino.make_arduino_at24cx_address = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//AT24CXX存储器 写入数值
Blockly.Arduino.make_arduino_at24cx_write_data = function() {
  this.setTooltip("AT24CXX存储器 写入数值(字节、整数、长整数、单精度浮点数、双精度浮点数)");

    var value_at24cx_write_address = Blockly.Arduino.valueToCode(this, 'at24cx_write_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_at24cx_name = this.getFieldValue('at24cx_name');
    var dropdown_write_type = this.getFieldValue('write_type');
    var value_at24cx_write_data = Blockly.Arduino.valueToCode(this, 'at24cx_write_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_at24cx_name+'.'+dropdown_write_type+'('+value_at24cx_write_address+', '+value_at24cx_write_data+');\n';
  return code;
};

//AT24CXX存储器 写入数组
Blockly.Arduino.make_arduino_at24cx_write_list = function() {
  this.setTooltip("AT24CXX存储器 写入数组(字节数组、字符数组)");

    var value_at24cx_write_address = Blockly.Arduino.valueToCode(this, 'at24cx_write_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_at24cx_name = this.getFieldValue('at24cx_name');
    var dropdown_write_type = this.getFieldValue('write_type');
    var value_at24cx_write_data = Blockly.Arduino.valueToCode(this, 'at24cx_write_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_at24cx_data_length = Blockly.Arduino.valueToCode(this, 'at24cx_data_length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_at24cx_name+'.'+dropdown_write_type+'('+value_at24cx_write_address+', '+value_at24cx_write_data+', '+value_at24cx_data_length+');\n';
  return code;
};

//AT24CXX存储器 读取数据
Blockly.Arduino.make_arduino_at24cx_read_data = function() {
  this.setTooltip("AT24CXX存储器 读取数值(字节、整数、长整数、单精度浮点数、双精度浮点数)");
    var value_at24cx_read_address = Blockly.Arduino.valueToCode(this, 'at24cx_read_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_at24cx_name = this.getFieldValue('at24cx_name');
    var dropdown_read_type = this.getFieldValue('read_type');
  var code = text_at24cx_name+'.'+dropdown_read_type+'('+value_at24cx_read_address+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//AT24CXX存储器 读取数组
Blockly.Arduino.make_arduino_at24cx_read_list = function() {
  this.setTooltip("AT24CXX存储器 读取数组(字节数组、字符数组)");

    var value_at24cx_read_address = Blockly.Arduino.valueToCode(this, 'at24cx_read_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_at24cx_name = this.getFieldValue('at24cx_name');
    var dropdown_read_type = this.getFieldValue('read_type');
    var value_at24cx_read_data = Blockly.Arduino.valueToCode(this, 'at24cx_read_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_at24cx_data_length = Blockly.Arduino.valueToCode(this, 'at24cx_data_length', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_at24cx_name+'.'+dropdown_read_type+'('+value_at24cx_read_address+', '+value_at24cx_read_data+', '+value_at24cx_data_length+');\n';
  return code;
};

Blockly.Arduino.make_arduino_bmp180_begin_i2c = function() {
    var value_bmp180_oversampling = Blockly.Arduino.valueToCode(this, 'bmp180_oversampling', Blockly.Arduino.ORDER_ATOMIC);
    var text_bmp180_name = this.getFieldValue('bmp180_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP085'] = '#include <Adafruit_BMP085.h>';

  Blockly.Arduino.definitions_['var_declare_bmp180_' + text_bmp180_name] = 'Adafruit_BMP085 '+text_bmp180_name+';';

  Blockly.Arduino.setups_['setup_BMP180_' + text_bmp180_name] = text_bmp180_name+'.begin('+value_bmp180_oversampling+');';
  
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_bmp180_begin_i2c_return_status = function() {
    var value_bmp180_oversampling = Blockly.Arduino.valueToCode(this, 'bmp180_oversampling', Blockly.Arduino.ORDER_ATOMIC);
    var text_bmp180_name = this.getFieldValue('bmp180_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP085'] = '#include <Adafruit_BMP085.h>';

  Blockly.Arduino.definitions_['var_declare_bmp180_' + text_bmp180_name] = 'Adafruit_BMP085 '+text_bmp180_name+';';

  var code = text_bmp180_name+'.begin('+value_bmp180_oversampling+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//BMP180大气压强传感器(I2C) 采样频率类型
Blockly.Arduino.make_arduino_bmp180_oversampling = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_bmp180_get_temperature_pressure = function() {
    var text_bmp180_name = this.getFieldValue('bmp180_name');
    var dropdown_bmp180_get_temperature_pressure_data = this.getFieldValue('bmp180_get_temperature_pressure_data');
  var code = text_bmp180_name + '.read' + dropdown_bmp180_get_temperature_pressure_data + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_bmp180_get_altitude = function() {
    var text_bmp180_name = this.getFieldValue('bmp180_name');
    var value_bmp180_get_altitude_data = Blockly.Arduino.valueToCode(this, 'bmp180_get_altitude_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_bmp180_name + '.readAltitude(' + value_bmp180_get_altitude_data + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
Blockly.Arduino.make_arduino_bmp280_begin_i2c = function() {
    var text_bmp280_name = this.getFieldValue('bmp280_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP280'] = '#include <Adafruit_BMP280.h>';

  Blockly.Arduino.definitions_['var_declare_bmp280_' + text_bmp280_name] = 'Adafruit_BMP280 '+text_bmp280_name+';';

  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';
  Blockly.Arduino.setups_['setup_BMP280_' + text_bmp280_name] = 'if (!'+text_bmp280_name+'.begin()) {\n'
                                                             +'    Serial.println(F("Could not find a valid BMP280 sensor, check wiring!"));\n'
                                                             +'    while (1);\n'
                                                             +'  }\n'
                                                             +'\n'
                                                             +'  '+text_bmp280_name+'.setSampling(Adafruit_BMP280::MODE_NORMAL,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X2,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X16,\n'
                                                             +'                  Adafruit_BMP280::FILTER_X16,\n'
                                                             +'                  Adafruit_BMP280::STANDBY_MS_500);';
  
  var code = '';
  return code;
};
*/

Blockly.Arduino.make_arduino_bmp280_begin_i2c = function() {
    var text_bmp280_name = this.getFieldValue('bmp280_name');
    var value_bmp280_address = Blockly.Arduino.valueToCode(this, 'bmp280_address', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  //Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP280'] = '#include <Adafruit_BMP280.h>';

  Blockly.Arduino.definitions_['var_declare_bmp280_' + text_bmp280_name] = 'Adafruit_BMP280 '+text_bmp280_name+';';

  Blockly.Arduino.setups_['setup_BMP280_' + text_bmp280_name] = text_bmp280_name+'.begin('+value_bmp280_address+');\n'
                                                             +'  '+text_bmp280_name+'.setSampling(Adafruit_BMP280::MODE_NORMAL,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X2,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X16,\n'
                                                             +'                  Adafruit_BMP280::FILTER_X16,\n'
                                                             +'                  Adafruit_BMP280::STANDBY_MS_500);';
  
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_bmp280_begin_i2c_return_status = function() {
    var text_bmp280_name = this.getFieldValue('bmp280_name');
    var value_bmp280_address = Blockly.Arduino.valueToCode(this, 'bmp280_address', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  //Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP280'] = '#include <Adafruit_BMP280.h>';

  Blockly.Arduino.definitions_['var_declare_bmp280_' + text_bmp280_name] = 'Adafruit_BMP280 '+text_bmp280_name+';';

  Blockly.Arduino.setups_['setup_BMP280_' + text_bmp280_name] = text_bmp280_name+'.setSampling(Adafruit_BMP280::MODE_NORMAL,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X2,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X16,\n'
                                                             +'                  Adafruit_BMP280::FILTER_X16,\n'
                                                             +'                  Adafruit_BMP280::STANDBY_MS_500);';
  var code = text_bmp280_name+'.begin('+value_bmp280_address+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
Blockly.Arduino.make_arduino_bmp280_begin_spi_1 = function() {
    var text_bmp280_name = this.getFieldValue('bmp280_name');
    var value_bmp280_begin_spi_cs = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_cs', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP280'] = '#include <Adafruit_BMP280.h>';

  Blockly.Arduino.definitions_['var_declare_bmp280_' + text_bmp280_name] = 'Adafruit_BMP280 '+text_bmp280_name+'('+value_bmp280_begin_spi_cs+');';

  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';
  Blockly.Arduino.setups_['setup_BMP280_' + text_bmp280_name] = 'if (!'+text_bmp280_name+'.begin()) {\n'
                                                             +'    Serial.println(F("Could not find a valid BMP280 sensor, check wiring!"));\n'
                                                             +'    while (1);\n'
                                                             +'  }\n'
                                                             +'\n'
                                                             +'  '+text_bmp280_name+'.setSampling(Adafruit_BMP280::MODE_NORMAL,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X2,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X16,\n'
                                                             +'                  Adafruit_BMP280::FILTER_X16,\n'
                                                             +'                  Adafruit_BMP280::STANDBY_MS_500);';
  
  var code = '';
  return code;
};
*/

Blockly.Arduino.make_arduino_bmp280_begin_spi_1 = function() {
    var text_bmp280_name = this.getFieldValue('bmp280_name');
    var value_bmp280_begin_spi_cs = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_cs', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP280'] = '#include <Adafruit_BMP280.h>';

  Blockly.Arduino.definitions_['var_declare_bmp280_' + text_bmp280_name] = 'Adafruit_BMP280 '+text_bmp280_name+'('+value_bmp280_begin_spi_cs+');';

  Blockly.Arduino.setups_['setup_BMP280_' + text_bmp280_name] = text_bmp280_name+'.begin();\n'
                                                             +'  '+text_bmp280_name+'.setSampling(Adafruit_BMP280::MODE_NORMAL,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X2,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X16,\n'
                                                             +'                  Adafruit_BMP280::FILTER_X16,\n'
                                                             +'                  Adafruit_BMP280::STANDBY_MS_500);';
  
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_bmp280_begin_spi_1_return_status = function() {
    var text_bmp280_name = this.getFieldValue('bmp280_name');
    var value_bmp280_begin_spi_cs = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_cs', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP280'] = '#include <Adafruit_BMP280.h>';

  Blockly.Arduino.definitions_['var_declare_bmp280_' + text_bmp280_name] = 'Adafruit_BMP280 '+text_bmp280_name+'('+value_bmp280_begin_spi_cs+');';

  Blockly.Arduino.setups_['setup_BMP280_' + text_bmp280_name] =text_bmp280_name+'.setSampling(Adafruit_BMP280::MODE_NORMAL,\n'
                                                             +'                Adafruit_BMP280::SAMPLING_X2,\n'
                                                             +'                Adafruit_BMP280::SAMPLING_X16,\n'
                                                             +'                Adafruit_BMP280::FILTER_X16,\n'
                                                             +'                Adafruit_BMP280::STANDBY_MS_500);';
  
  var code = text_bmp280_name+'.begin()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
Blockly.Arduino.make_arduino_bmp280_begin_spi_2 = function() {
    var text_bmp280_name = this.getFieldValue('bmp280_name');
    var value_bmp280_begin_spi_cs = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_cs', Blockly.Arduino.ORDER_ATOMIC);
    var value_bmp280_begin_spi_mosi = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_mosi', Blockly.Arduino.ORDER_ATOMIC);
    var value_bmp280_begin_spi_miso = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_miso', Blockly.Arduino.ORDER_ATOMIC);
    var value_bmp280_begin_spi_sck = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_sck', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP280'] = '#include <Adafruit_BMP280.h>';

  Blockly.Arduino.definitions_['var_declare_bmp280_' + text_bmp280_name] = 'Adafruit_BMP280 '+text_bmp280_name+'('+value_bmp280_begin_spi_cs+', '+value_bmp280_begin_spi_mosi+', '+value_bmp280_begin_spi_miso+', '+value_bmp280_begin_spi_sck+');';

  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';
  Blockly.Arduino.setups_['setup_BMP280_' + text_bmp280_name] = 'if (!'+text_bmp280_name+'.begin()) {\n'
                                                             +'    Serial.println(F("Could not find a valid BMP280 sensor, check wiring!"));\n'
                                                             +'    while (1);\n'
                                                             +'  }\n'
                                                             +'\n'
                                                             +'  '+text_bmp280_name+'.setSampling(Adafruit_BMP280::MODE_NORMAL,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X2,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X16,\n'
                                                             +'                  Adafruit_BMP280::FILTER_X16,\n'
                                                             +'                  Adafruit_BMP280::STANDBY_MS_500);';
  
  var code = '';
  return code;
};
*/

Blockly.Arduino.make_arduino_bmp280_begin_spi_2 = function() {
    var text_bmp280_name = this.getFieldValue('bmp280_name');
    var value_bmp280_begin_spi_cs = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_cs', Blockly.Arduino.ORDER_ATOMIC);
    var value_bmp280_begin_spi_mosi = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_mosi', Blockly.Arduino.ORDER_ATOMIC);
    var value_bmp280_begin_spi_miso = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_miso', Blockly.Arduino.ORDER_ATOMIC);
    var value_bmp280_begin_spi_sck = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_sck', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP280'] = '#include <Adafruit_BMP280.h>';

  Blockly.Arduino.definitions_['var_declare_bmp280_' + text_bmp280_name] = 'Adafruit_BMP280 '+text_bmp280_name+'('+value_bmp280_begin_spi_cs+', '+value_bmp280_begin_spi_mosi+', '+value_bmp280_begin_spi_miso+', '+value_bmp280_begin_spi_sck+');';

  Blockly.Arduino.setups_['setup_BMP280_' + text_bmp280_name] = text_bmp280_name+'.begin();\n'
                                                             +'  '+text_bmp280_name+'.setSampling(Adafruit_BMP280::MODE_NORMAL,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X2,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X16,\n'
                                                             +'                  Adafruit_BMP280::FILTER_X16,\n'
                                                             +'                  Adafruit_BMP280::STANDBY_MS_500);';
  
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_bmp280_begin_spi_2_return_status = function() {
    var text_bmp280_name = this.getFieldValue('bmp280_name');
    var value_bmp280_begin_spi_cs = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_cs', Blockly.Arduino.ORDER_ATOMIC);
    var value_bmp280_begin_spi_mosi = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_mosi', Blockly.Arduino.ORDER_ATOMIC);
    var value_bmp280_begin_spi_miso = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_miso', Blockly.Arduino.ORDER_ATOMIC);
    var value_bmp280_begin_spi_sck = Blockly.Arduino.valueToCode(this, 'bmp280_begin_spi_sck', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP280'] = '#include <Adafruit_BMP280.h>';

  Blockly.Arduino.definitions_['var_declare_bmp280_' + text_bmp280_name] = 'Adafruit_BMP280 '+text_bmp280_name+'('+value_bmp280_begin_spi_cs+', '+value_bmp280_begin_spi_mosi+', '+value_bmp280_begin_spi_miso+', '+value_bmp280_begin_spi_sck+');';

  Blockly.Arduino.setups_['setup_BMP280_' + text_bmp280_name] = text_bmp280_name+'.setSampling(Adafruit_BMP280::MODE_NORMAL,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X2,\n'
                                                             +'                  Adafruit_BMP280::SAMPLING_X16,\n'
                                                             +'                  Adafruit_BMP280::FILTER_X16,\n'
                                                             +'                  Adafruit_BMP280::STANDBY_MS_500);';
  
  var code = text_bmp280_name+'.begin()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_bmp280_get_temperature_pressure = function() {
    var text_bmp280_name = this.getFieldValue('bmp280_name');
    var dropdown_bmp280_get_temperature_pressure_data = this.getFieldValue('bmp280_get_temperature_pressure_data');
  var code = ''+text_bmp280_name+'.read'+dropdown_bmp280_get_temperature_pressure_data+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_bmp280_get_altitude = function() {
    var text_bmp280_name = this.getFieldValue('bmp280_name');
    var value_bmp280_get_altitude_data = Blockly.Arduino.valueToCode(this, 'bmp280_get_altitude_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_bmp280_name+'.readAltitude('+value_bmp280_get_altitude_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_tcs230_begin_1 = function() {
    var text_tcs230_name = this.getFieldValue('tcs230_name');
    var value_tcs230_s0 = Blockly.Arduino.valueToCode(this, 'tcs230_s0', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs230_s1 = Blockly.Arduino.valueToCode(this, 'tcs230_s1', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs230_s2 = Blockly.Arduino.valueToCode(this, 'tcs230_s2', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs230_s3 = Blockly.Arduino.valueToCode(this, 'tcs230_s3', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs230_led = Blockly.Arduino.valueToCode(this, 'tcs230_led', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs230_out = Blockly.Arduino.valueToCode(this, 'tcs230_out', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Color'] = '#include <Color.h>';

  Blockly.Arduino.definitions_['var_declare_tcs230_' + text_tcs230_name] = 'Color '+text_tcs230_name+'((unsigned int[]) {'+value_tcs230_s0+', '+value_tcs230_s1+', '+value_tcs230_s2+', '+value_tcs230_s3+', '+value_tcs230_led+'}, '+value_tcs230_out+');';

  var code = '';
  return code;
};

//2019.10.5修改，保留原图形块
Blockly.Arduino.make_arduino_tcs230_new_begin_1 = function() {
    var value_tcs230_s0 = Blockly.Arduino.valueToCode(this, 'tcs230_s0', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs230_s1 = Blockly.Arduino.valueToCode(this, 'tcs230_s1', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs230_s2 = Blockly.Arduino.valueToCode(this, 'tcs230_s2', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs230_s3 = Blockly.Arduino.valueToCode(this, 'tcs230_s3', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs230_led = Blockly.Arduino.valueToCode(this, 'tcs230_led', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs230_out = Blockly.Arduino.valueToCode(this, 'tcs230_out', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['var_declare_tcs230_pin'] = '#define tcs230_S0 '+value_tcs230_s0+''
                                                     +'\n#define tcs230_S1 '+value_tcs230_s1+''
                                                     +'\n#define tcs230_S2 '+value_tcs230_s2+''
                                                     +'\n#define tcs230_S3 '+value_tcs230_s3+''
                                                     +'\n#define tcs230_sensorOut '+value_tcs230_out+''
                                                     +'\n#define tcs230_LED '+value_tcs230_led+'';

  Blockly.Arduino.definitions_['function_tcs230_Getcolor'] = '//TCS230颜色传感器获取RGB值'
                                                          +'\nint tcs230_Getcolor(char data)'
                                                          +'\n{'
                                                          +'\n  int frequency = 0;'
                                                          +'\n  switch(data)'
                                                          +'\n  {'
                                                          +'\n    case \'R\':'
                                                          +'\n    {'
                                                          +'\n      digitalWrite(tcs230_S2,LOW);'
                                                          +'\n      digitalWrite(tcs230_S3,LOW);'
                                                          +'\n      frequency = pulseIn(tcs230_sensorOut, LOW);'
                                                          +'\n      frequency = map(frequency, 25, 72, 255, 0);'
                                                          +'\n      break;'
                                                          +'\n    }'
                                                          +'\n    case \'G\':'
                                                          +'\n    {'
                                                          +'\n      digitalWrite(tcs230_S2,HIGH);'
                                                          +'\n      digitalWrite(tcs230_S3,HIGH);'
                                                          +'\n      frequency = pulseIn(tcs230_sensorOut, LOW);'
                                                          +'\n      frequency = map(frequency, 30, 90, 255, 0);'
                                                          +'\n      break;'
                                                          +'\n    }'
                                                          +'\n    case \'B\':'
                                                          +'\n    {'
                                                          +'\n      digitalWrite(tcs230_S2,LOW);'
                                                          +'\n      digitalWrite(tcs230_S3,HIGH);'
                                                          +'\n      frequency = pulseIn(tcs230_sensorOut, LOW);'
                                                          +'\n      frequency = map(frequency, 25, 70, 255, 0);'
                                                          +'\n      break;'
                                                          +'\n    }'
                                                          +'\n    default:'
                                                          +'\n      return -1;'
                                                          +'\n  }'
                                                          +'\n  if (frequency < 0)'
                                                          +'\n    frequency = 0;'
                                                          +'\n  if (frequency > 255)'
                                                          +'\n    frequency = 255;'
                                                          +'\n  return frequency;'
                                                          +'\n}\n';

  Blockly.Arduino.setups_['setup_tcs230_pin'] = 'pinMode(tcs230_S0, OUTPUT);'
                                             +'\n  pinMode(tcs230_S1, OUTPUT);'
                                             +'\n  pinMode(tcs230_S2, OUTPUT);'
                                             +'\n  pinMode(tcs230_S3, OUTPUT);'
                                             +'\n  pinMode(tcs230_LED, OUTPUT);'
                                             +'\n  pinMode(tcs230_sensorOut, INPUT);'
                                             +'\n  digitalWrite(tcs230_S0,HIGH);'
                                             +'\n  digitalWrite(tcs230_S1,LOW);'
                                             +'\n  digitalWrite(tcs230_LED,HIGH);';
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_tcs230_get_color = function() {
    var text_tcs230_name = this.getFieldValue('tcs230_name');
    var dropdown_tcs230_color = this.getFieldValue('tcs230_color');
  var code = ''+text_tcs230_name+'.'+dropdown_tcs230_color+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_new_tcs230_get_color = function() {
    var dropdown_tcs230_color = this.getFieldValue('tcs230_color');
  var code = 'tcs230_Getcolor(\''+dropdown_tcs230_color+'\')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
Blockly.Arduino.make_arduino_tcs34725_begin = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_TCS34725'] = '#include "Adafruit_TCS34725.h"';

  Blockly.Arduino.definitions_['var_declare_tcs34725_' + text_tcs34725_name] = 'Adafruit_TCS34725 '+text_tcs34725_name+' = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_2_4MS, TCS34725_GAIN_1X);';

  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';
  Blockly.Arduino.setups_['setup_tcs34725_' + text_tcs34725_name] = 'if ('+text_tcs34725_name+'.begin()) {'
                                                                + '\n    Serial.println("Found sensor");'
                                                                + '\n  } else {'
                                                                + '\n    Serial.println("No TCS34725 found ... check your connections");'
                                                                + '\n    while (1);'
                                                                + '\n  }';
  var code = '';
  return code;
};
*/

/*
Blockly.Arduino.make_arduino_tcs34725_begin = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_TCS34725'] = '#include "Adafruit_TCS34725.h"';

  Blockly.Arduino.definitions_['var_declare_tcs34725_' + text_tcs34725_name] = 'Adafruit_TCS34725 '+text_tcs34725_name+' = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_2_4MS, TCS34725_GAIN_1X);';

  Blockly.Arduino.setups_['setup_tcs34725_' + text_tcs34725_name] = text_tcs34725_name+'.begin();';
  
  var code = '';
  return code;
};
*/

Blockly.Arduino.make_arduino_tcs34725_begin = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var value_tcs34725_address = Blockly.Arduino.valueToCode(this, 'tcs34725_address', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_TCS34725'] = '#include "Adafruit_TCS34725.h"';

  Blockly.Arduino.definitions_['var_declare_tcs34725_' + text_tcs34725_name] = 'Adafruit_TCS34725 '+text_tcs34725_name+' = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_2_4MS, TCS34725_GAIN_1X);';

  Blockly.Arduino.setups_['setup_tcs34725_' + text_tcs34725_name] = text_tcs34725_name+'.begin('+value_tcs34725_address+');';
  
  var code = '';
  return code;
};

/*
Blockly.Arduino.make_arduino_tcs34725_begin_1 = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var dropdown_tcs34725_enable_delay = this.getFieldValue('tcs34725_enable_delay');
    var dropdown_tcs34725_gain = this.getFieldValue('tcs34725_gain');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_TCS34725'] = '#include "Adafruit_TCS34725.h"';

  Blockly.Arduino.definitions_['var_declare_tcs34725_' + text_tcs34725_name] = 'Adafruit_TCS34725 '+text_tcs34725_name+' = Adafruit_TCS34725('+dropdown_tcs34725_enable_delay+', '+dropdown_tcs34725_gain+');';

  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';
  Blockly.Arduino.setups_['setup_tcs34725_' + text_tcs34725_name] = 'if ('+text_tcs34725_name+'.begin()) {'
                                                                + '\n    Serial.println("Found sensor");'
                                                                + '\n  } else {'
                                                                + '\n    Serial.println("No TCS34725 found ... check your connections");'
                                                                + '\n    while (1);'
                                                                + '\n  }';
  var code = '';
  return code;
};
*/

Blockly.Arduino.make_arduino_tcs34725_begin_1 = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var dropdown_tcs34725_enable_delay = this.getFieldValue('tcs34725_enable_delay');
    var dropdown_tcs34725_gain = this.getFieldValue('tcs34725_gain');
    var value_tcs34725_address = Blockly.Arduino.valueToCode(this, 'tcs34725_address', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_TCS34725'] = '#include "Adafruit_TCS34725.h"';

  Blockly.Arduino.definitions_['var_declare_tcs34725_' + text_tcs34725_name] = 'Adafruit_TCS34725 '+text_tcs34725_name+' = Adafruit_TCS34725('+dropdown_tcs34725_enable_delay+', '+dropdown_tcs34725_gain+');';

  Blockly.Arduino.setups_['setup_tcs34725_' + text_tcs34725_name] = text_tcs34725_name+'.begin('+value_tcs34725_address+');';
                                                               
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_tcs34725_begin_2 = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var dropdown_tcs34725_enable_delay = this.getFieldValue('tcs34725_enable_delay');
    var dropdown_tcs34725_gain = this.getFieldValue('tcs34725_gain');
    var value_tcs34725_address = Blockly.Arduino.valueToCode(this, 'tcs34725_address', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_TCS34725'] = '#include "Adafruit_TCS34725.h"';

  Blockly.Arduino.definitions_['var_declare_tcs34725_' + text_tcs34725_name] = 'Adafruit_TCS34725 '+text_tcs34725_name+' = Adafruit_TCS34725('+dropdown_tcs34725_enable_delay+', '+dropdown_tcs34725_gain+');';
  var code = text_tcs34725_name+'.begin('+value_tcs34725_address+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_tcs34725_set_integrationtime = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var dropdown_tcs34725_enable_delay = this.getFieldValue('tcs34725_enable_delay');
  var code = ''+text_tcs34725_name+'.setIntegrationTime('+dropdown_tcs34725_enable_delay+');\n';
  return code;
};

Blockly.Arduino.make_arduino_tcs34725_set_gain = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var dropdown_tcs34725_gain = this.getFieldValue('tcs34725_gain');
  var code = ''+text_tcs34725_name+'setGain('+dropdown_tcs34725_gain+');\n';
  return code;
};

Blockly.Arduino.make_arduino_tcs34725_get_rawdata = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var value_tcs34725_get_r = Blockly.Arduino.valueToCode(this, 'tcs34725_get_r', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_get_g = Blockly.Arduino.valueToCode(this, 'tcs34725_get_g', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_get_b = Blockly.Arduino.valueToCode(this, 'tcs34725_get_b', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_get_c = Blockly.Arduino.valueToCode(this, 'tcs34725_get_c', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_tcs34725_name+'.getRawData(&'+value_tcs34725_get_r+', &'+value_tcs34725_get_g+', &'+value_tcs34725_get_b+', &'+value_tcs34725_get_c+');\n';
  return code;
};

Blockly.Arduino.make_arduino_tcs34725_get_rgb = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var value_tcs34725_get_r = Blockly.Arduino.valueToCode(this, 'tcs34725_get_r', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_get_g = Blockly.Arduino.valueToCode(this, 'tcs34725_get_g', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_get_b = Blockly.Arduino.valueToCode(this, 'tcs34725_get_b', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_tcs34725_name+'.getRGB(&'+value_tcs34725_get_r+', &'+value_tcs34725_get_g+', &'+value_tcs34725_get_b+');\n';
  return code;
};

Blockly.Arduino.make_arduino_tcs34725_calculate_colortemperature = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var value_tcs34725_input_r = Blockly.Arduino.valueToCode(this, 'tcs34725_input_r', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_input_g = Blockly.Arduino.valueToCode(this, 'tcs34725_input_g', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_input_b = Blockly.Arduino.valueToCode(this, 'tcs34725_input_b', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_tcs34725_name+'.calculateColorTemperature('+value_tcs34725_input_r+', '+value_tcs34725_input_g+', '+value_tcs34725_input_b+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_tcs34725_calculate_colortemperature_dn40 = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var value_tcs34725_input_r = Blockly.Arduino.valueToCode(this, 'tcs34725_input_r', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_input_g = Blockly.Arduino.valueToCode(this, 'tcs34725_input_g', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_input_b = Blockly.Arduino.valueToCode(this, 'tcs34725_input_b', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_input_c = Blockly.Arduino.valueToCode(this, 'tcs34725_input_c', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_tcs34725_name+'.calculateColorTemperature_dn40('+value_tcs34725_input_r+', '+value_tcs34725_input_g+', '+value_tcs34725_input_b+', '+value_tcs34725_input_c+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_tcs34725_calculate_lux = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var value_tcs34725_input_r = Blockly.Arduino.valueToCode(this, 'tcs34725_input_r', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_input_g = Blockly.Arduino.valueToCode(this, 'tcs34725_input_g', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_input_b = Blockly.Arduino.valueToCode(this, 'tcs34725_input_b', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_tcs34725_name+'.calculateLux('+value_tcs34725_input_r+', '+value_tcs34725_input_g+', '+value_tcs34725_input_b+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_tcs34725_read8 = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var dropdown_tcs34725_read8_data = this.getFieldValue('tcs34725_read8_data');
  var code = text_tcs34725_name+'.read8('+dropdown_tcs34725_read8_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_tcs34725_read16 = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var dropdown_tcs34725_read16_data = this.getFieldValue('tcs34725_read16_data');
  var code = ''+text_tcs34725_name+'.read16('+dropdown_tcs34725_read16_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_tcs34725_set_interrupt = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var dropdown_tcs34725_set_interrupt_data = this.getFieldValue('tcs34725_set_interrupt_data');
  var code = ''+text_tcs34725_name+'.setInterrupt('+dropdown_tcs34725_set_interrupt_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_tcs34725_clear_interrupt = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
  var code = ''+text_tcs34725_name+'.clearInterrupt();\n';
  return code;
};

Blockly.Arduino.make_arduino_tcs34725_set_intlimits_time = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var dropdown_tcs34725_set_intlimits_time_data = this.getFieldValue('tcs34725_set_intlimits_time_data');
  var code = text_tcs34725_name+'.write8(TCS34725_PERS, '+dropdown_tcs34725_set_intlimits_time_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_tcs34725_set_intlimits = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var value_tcs34725_set_low_limit = Blockly.Arduino.valueToCode(this, 'tcs34725_set_low_limit', Blockly.Arduino.ORDER_ATOMIC);
    var value_tcs34725_set_high_limit = Blockly.Arduino.valueToCode(this, 'tcs34725_set_high_limit', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_tcs34725_name+'.setIntLimits('+value_tcs34725_set_low_limit+', '+value_tcs34725_set_high_limit+');\n';
  return code;
};

Blockly.Arduino.make_arduino_tcs34725_enable_disable = function() {
    var text_tcs34725_name = this.getFieldValue('tcs34725_name');
    var dropdown_tcs34725_enable_disable_data = this.getFieldValue('tcs34725_enable_disable_data');
  var code = text_tcs34725_name+'.'+dropdown_tcs34725_enable_disable_data+'();\n';
  return code;
};

/*
Blockly.Arduino.make_arduino_aht10_begin = function() {
    var value_aht10_begin_address = Blockly.Arduino.valueToCode(this, 'aht10_begin_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_aht10_name = this.getFieldValue('aht10_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Thinary_AHT10'] = '#include <Thinary_AHT10.h>';

  Blockly.Arduino.definitions_['var_declare_aht10_' + text_aht10_name] = 'AHT10Class '+text_aht10_name+';';

  Blockly.Arduino.setups_['setup_serial_Serial9600'] = 'Serial.begin(9600);';
  Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();';
  Blockly.Arduino.setups_['setup_aht10_begin_' + text_aht10_name] = 'if('+text_aht10_name+'.begin('+value_aht10_begin_address+'))'
                                                                +'\n    Serial.println("Init AHT10 Sucess.");'
                                                                +'\n  else'
                                                                +'\n    Serial.println("Init AHT10 Failure.");';

  var code = '';
  return code;
};
*/

Blockly.Arduino.make_arduino_aht10_begin = function() {
    var value_aht10_begin_address = Blockly.Arduino.valueToCode(this, 'aht10_begin_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_aht10_name = this.getFieldValue('aht10_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Thinary_AHT10'] = '#include <Thinary_AHT10.h>';

  Blockly.Arduino.definitions_['var_declare_aht10_' + text_aht10_name] = 'AHT10Class '+text_aht10_name+';';

  Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();';
  Blockly.Arduino.setups_['setup_aht10_begin_' + text_aht10_name] = text_aht10_name+'.begin('+value_aht10_begin_address+');';
  
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_aht10_begin_1 = function() {
    var value_aht10_begin_address = Blockly.Arduino.valueToCode(this, 'aht10_begin_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_aht10_name = this.getFieldValue('aht10_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Thinary_AHT10'] = '#include <Thinary_AHT10.h>';

  Blockly.Arduino.definitions_['var_declare_aht10_' + text_aht10_name] = 'AHT10Class '+text_aht10_name+';';

  Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();';

  var code = text_aht10_name+'.begin('+value_aht10_begin_address+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_aht10_get = function() {
    var text_aht10_name = this.getFieldValue('aht10_name');
    var dropdown_aht10_get_data = this.getFieldValue('aht10_get_data');
  var code = text_aht10_name+'.Get'+dropdown_aht10_get_data+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_aht10_read_status = function() {
    var text_aht10_name = this.getFieldValue('aht10_name');
  var code = text_aht10_name+'.readStatus()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_lm75_begin = function() {
    var text_lm75_name = this.getFieldValue('lm75_name');
    var value_lm75_i2c_A0 = Blockly.Arduino.valueToCode(this, 'lm75_i2c_A0', Blockly.Arduino.ORDER_ATOMIC);
    var value_lm75_i2c_A1 = Blockly.Arduino.valueToCode(this, 'lm75_i2c_A1', Blockly.Arduino.ORDER_ATOMIC);
    var value_lm75_i2c_A2 = Blockly.Arduino.valueToCode(this, 'lm75_i2c_A2', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_LM75A'] = '#include <LM75A.h>';
  Blockly.Arduino.definitions_['var_declare_LM75A_' + text_lm75_name] = 'LM75A '+text_lm75_name+'('+value_lm75_i2c_A0+', '+value_lm75_i2c_A1+', '+value_lm75_i2c_A2+');';

  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_lm75_begin_1 = function() {
    var value_lm75_i2c_address = Blockly.Arduino.valueToCode(this, 'lm75_i2c_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_lm75_name = this.getFieldValue('lm75_name');

  Blockly.Arduino.definitions_['include_LM75A'] = '#include <LM75A.h>';
  if(value_lm75_i2c_address == '0x49')
    Blockly.Arduino.definitions_['var_declare_LM75A_' + text_lm75_name] = 'LM75A '+text_lm75_name+'(true, false, false);';
  else if(value_lm75_i2c_address == '0x4A')
    Blockly.Arduino.definitions_['var_declare_LM75A_' + text_lm75_name] = 'LM75A '+text_lm75_name+'(false, true, false);';
  else if(value_lm75_i2c_address == '0x4B')
    Blockly.Arduino.definitions_['var_declare_LM75A_' + text_lm75_name] = 'LM75A '+text_lm75_name+'(true, true, false);';
  else if(value_lm75_i2c_address == '0x4C')
    Blockly.Arduino.definitions_['var_declare_LM75A_' + text_lm75_name] = 'LM75A '+text_lm75_name+'(false, false, true);';
  else if(value_lm75_i2c_address == '0x4D')
    Blockly.Arduino.definitions_['var_declare_LM75A_' + text_lm75_name] = 'LM75A '+text_lm75_name+'(true, false, true);';
  else if(value_lm75_i2c_address == '0x4E')
    Blockly.Arduino.definitions_['var_declare_LM75A_' + text_lm75_name] = 'LM75A '+text_lm75_name+'(false, true, true);';
  else if(value_lm75_i2c_address == '0x4F')
    Blockly.Arduino.definitions_['var_declare_LM75A_' + text_lm75_name] = 'LM75A '+text_lm75_name+'(true, true, true);';
  else
    Blockly.Arduino.definitions_['var_declare_LM75A_' + text_lm75_name] = 'LM75A '+text_lm75_name+'(false, false, false);';

  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_lm75_get_temp = function() {
    var text_lm75_name = this.getFieldValue('lm75_name');
    var dropdown_lm75_get_temp_type = this.getFieldValue('lm75_get_temp_type');
  var code = ''+text_lm75_name+'.'+dropdown_lm75_get_temp_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_lm75_get_temp_1 = function() {
    var value_lm75_input_temp_data = Blockly.Arduino.valueToCode(this, 'lm75_input_temp_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_lm75_get_temp_type = this.getFieldValue('lm75_get_temp_type');

  Blockly.Arduino.definitions_['include_LM75A'] = '#include <LM75A.h>';

  var code = 'LM75A::'+dropdown_lm75_get_temp_type+'('+value_lm75_input_temp_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_sht30_begin = function() {
    var value_sht30_begin_address = Blockly.Arduino.valueToCode(this, 'sht30_begin_address', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';

  Blockly.Arduino.definitions_['var_declare_SHT30'] = '#define sht30_address 0x44';

  Blockly.Arduino.definitions_['function_SHT30_get_data'] = 'float sht30_get_data(int data_type)' 
                                                        + '\n{'
                                                        + '\n  unsigned int data[6];'
                                                        + '\n  Wire.beginTransmission(sht30_address);'
                                                        + '\n  Wire.write(0x2C);'
                                                        + '\n  Wire.write(0x06);'
                                                        + '\n  Wire.endTransmission();'
                                                        + '\n  Wire.requestFrom(sht30_address, 6);'
                                                        + '\n  if (Wire.available() == 6)'
                                                        + '\n  {'
                                                        + '\n    data[0] = Wire.read();'
                                                        + '\n    data[1] = Wire.read();'
                                                        + '\n    data[2] = Wire.read();'
                                                        + '\n    data[3] = Wire.read();'
                                                        + '\n    data[4] = Wire.read();'
                                                        + '\n    data[5] = Wire.read();'
                                                        + '\n  }'
                                                        //+ '\n  float sht30_cTemp = ((((data[0] * 256.0) + data[1]) * 175) / 65535.0) - 45;'
                                                        //+ '\n  float sht30_fTemp = (sht30_cTemp * 1.8) + 32;'
                                                        //+ '\n  float sht30_humidity = ((((data[3] * 256.0) + data[4]) * 100) / 65535.0);'
                                                        + '\n  switch (data_type)'
                                                        + '\n  {'
                                                        + '\n    case 0:'
                                                        //+ '\n      return sht30_cTemp;'
                                                        + '\n      return ((((data[0] * 256.0) + data[1]) * 175) / 65535.0) - 45;'
                                                        + '\n    case 1:'
                                                        //+ '\n      return sht30_fTemp;'
                                                        + '\n      return ((((((data[0] * 256.0) + data[1]) * 175) / 65535.0) - 45) * 1.8) + 32;'
                                                        + '\n    case 2:'
                                                        //+ '\n      return sht30_humidity;'
                                                        + '\n      return ((((data[3] * 256.0) + data[4]) * 100) / 65535.0);'
                                                        + '\n    default:'
                                                        + '\n      return -1;'
                                                        + '\n  }'
                                                        + '\n}'

  Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();';
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_sht30_get_data = function() {
    var dropdown_sht30_get_data_type = this.getFieldValue('sht30_get_data_type');
  var code = 'sht30_get_data('+dropdown_sht30_get_data_type+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_mlx90614_begin = function() {
    var value_mlx90614_address = Blockly.Arduino.valueToCode(this, 'mlx90614_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_mlx90614_name = this.getFieldValue('mlx90614_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_MLX90614'] = '#include <Adafruit_MLX90614.h>';

  Blockly.Arduino.definitions_['var_declare_MLX90614_'+text_mlx90614_name] = 'Adafruit_MLX90614 '+text_mlx90614_name+' = Adafruit_MLX90614('+value_mlx90614_address+');';
  
  Blockly.Arduino.setups_['setup_MLX90614_'+text_mlx90614_name] = ''+text_mlx90614_name+'.begin();';

  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_mlx90614_begin_1 = function() {
    var value_mlx90614_address = Blockly.Arduino.valueToCode(this, 'mlx90614_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_mlx90614_name = this.getFieldValue('mlx90614_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_MLX90614'] = '#include <Adafruit_MLX90614.h>';

  Blockly.Arduino.definitions_['var_declare_MLX90614_'+text_mlx90614_name] = 'Adafruit_MLX90614 '+text_mlx90614_name+' = Adafruit_MLX90614('+value_mlx90614_address+');';
  
  var code = ''+text_mlx90614_name+'.begin()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_mlx90614_get_data = function() {
    var text_mlx90614_name = this.getFieldValue('mlx90614_name');
    var dropdown_mlx90614_data = this.getFieldValue('mlx90614_data');
  var code = ''+text_mlx90614_name+'.'+dropdown_mlx90614_data+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_htu21d_begin = function() {
    var text_htu21d_name = this.getFieldValue('htu21d_name');

  Blockly.Arduino.definitions_['include_Adafruit_HTU21DF'] = '#include "Adafruit_HTU21DF.h"';

  Blockly.Arduino.definitions_['var_declare_HTU21DF_'+text_htu21d_name] = 'Adafruit_HTU21DF '+text_htu21d_name+' = Adafruit_HTU21DF();';
  
  Blockly.Arduino.setups_['setup_HTU21DF_'+text_htu21d_name] = ''+text_htu21d_name+'.begin();';

  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_htu21d_begin_1 = function() {
    var text_htu21d_name = this.getFieldValue('htu21d_name');

  Blockly.Arduino.definitions_['include_Adafruit_HTU21DF'] = '#include "Adafruit_HTU21DF.h"';

  Blockly.Arduino.definitions_['var_declare_HTU21DF_'+text_htu21d_name] = 'Adafruit_HTU21DF '+text_htu21d_name+' = Adafruit_HTU21DF();';
  
  var code = ''+text_htu21d_name+'.begin()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_htu21d_get_data = function() {
    var text_htu21d_name = this.getFieldValue('htu21d_name');
    var dropdown_htu21d_get_data_type = this.getFieldValue('htu21d_get_data_type');
  var code = ''+text_htu21d_name+'.'+dropdown_htu21d_get_data_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_max6675_begin = function() {
    var text_max6675_name = this.getFieldValue('max6675_name');
    var value_max6675_clk = Blockly.Arduino.valueToCode(this, 'max6675_clk', Blockly.Arduino.ORDER_ATOMIC);
    var value_max6675_cs = Blockly.Arduino.valueToCode(this, 'max6675_cs', Blockly.Arduino.ORDER_ATOMIC);
    var value_max6675_so = Blockly.Arduino.valueToCode(this, 'max6675_so', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_max6675'] = '#include "max6675.h"';
  Blockly.Arduino.definitions_['var_declare_max6675_' + text_max6675_name] = 'MAX6675 '+text_max6675_name+'('+value_max6675_clk+', '+value_max6675_cs+', '+value_max6675_so+');';
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_max6675_get_temperature = function() {
    var text_max6675_name = this.getFieldValue('max6675_name');
    var dropdown_max6675_get_type = this.getFieldValue('max6675_get_type');
  var code = ''+text_max6675_name+'.'+dropdown_max6675_get_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_bh1750_begin = function() {
    var value_bh1750_address = Blockly.Arduino.valueToCode(this, 'bh1750_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_bh1750_name = this.getFieldValue('bh1750_name');
    var dropdown_bh1750_mode = this.getFieldValue('bh1750_mode');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_BH1750'] = '#include <BH1750.h>';

  Blockly.Arduino.definitions_['var_declare_bh1750_' + text_bh1750_name] = 'BH1750 '+text_bh1750_name+'('+value_bh1750_address+');';

  Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();';
  Blockly.Arduino.setups_['setup_bh1750_' + text_bh1750_name] = ''+text_bh1750_name+'.begin(BH1750::'+dropdown_bh1750_mode+');';

  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_bh1750_begin_return_status = function() {
    var value_bh1750_address = Blockly.Arduino.valueToCode(this, 'bh1750_address', Blockly.Arduino.ORDER_ATOMIC);
    var text_bh1750_name = this.getFieldValue('bh1750_name');
    var dropdown_bh1750_mode = this.getFieldValue('bh1750_mode');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Thinary_AHT10'] = '#include <BH1750.h>';

  Blockly.Arduino.definitions_['var_declare_bh1750_' + text_bh1750_name] = 'BH1750 '+text_bh1750_name+'('+value_bh1750_address+');';

  Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();';
  var code = text_bh1750_name+'.begin(BH1750::'+dropdown_bh1750_mode+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_bh1750_set_mtreg = function() {
    var value_bh1750_set_mtreg_data = Blockly.Arduino.valueToCode(this, 'bh1750_set_mtreg_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_bh1750_name = this.getFieldValue('bh1750_name');
  var code = ''+text_bh1750_name+'.setMTreg('+value_bh1750_set_mtreg_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_bh1750_set_mtreg_return_status = function() {
    var value_bh1750_set_mtreg_data = Blockly.Arduino.valueToCode(this, 'bh1750_set_mtreg_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_bh1750_name = this.getFieldValue('bh1750_name');
  var code = text_bh1750_name+'.setMTreg('+value_bh1750_set_mtreg_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_bh1750_configure = function() {
    var text_bh1750_name = this.getFieldValue('bh1750_name');
    var dropdown_bh1750_mode = this.getFieldValue('bh1750_mode');
  var code = text_bh1750_name+'.configure('+dropdown_bh1750_mode+');\n';
  return code;
};

Blockly.Arduino.make_arduino_bh1750_configure_return_status = function() {
    var text_bh1750_name = this.getFieldValue('bh1750_name');
    var dropdown_bh1750_mode = this.getFieldValue('bh1750_mode');
  var code = text_bh1750_name+'.configure('+dropdown_bh1750_mode+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_bh1750_read_lightLevel = function() {
    var value_bh1750_read_lightLevel_data = Blockly.Arduino.valueToCode(this, 'bh1750_read_lightLevel_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_bh1750_name = this.getFieldValue('bh1750_name');
  var code = text_bh1750_name+'.readLightLevel('+value_bh1750_read_lightLevel_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化初始化MAX44009光照度传感器
Blockly.Arduino.make_arduino_max44009_begin = function() {
    var text_max44009_name = this.getFieldValue('max44009_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_MAX44009'] = '#include <MAX44009.h>';

  Blockly.Arduino.definitions_['var_declare_max44009_' + text_max44009_name] = 'MAX44009 '+text_max44009_name+';';

  Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();';
  Blockly.Arduino.setups_['setup_max44009_' + text_max44009_name] = ''+text_max44009_name+'.begin();';

  var code = '';
  return code;
};

//初始化MAX44009光照度传感器,返回连接状态
Blockly.Arduino.make_arduino_max44009_begin_1 = function() {
    var text_max44009_name = this.getFieldValue('max44009_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_MAX44009'] = '#include <MAX44009.h>';

  Blockly.Arduino.definitions_['var_declare_max44009_' + text_max44009_name] = 'MAX44009 '+text_max44009_name+';';

  Blockly.Arduino.setups_['setup_i2c'] = 'Wire.begin();';
  var code = ''+text_max44009_name+'.begin()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//MAX44009光照度传感器 获取光照度
Blockly.Arduino.make_arduino_max44009_get_lux = function() {
    var text_max44009_name = this.getFieldValue('max44009_name');
  var code = ''+text_max44009_name+'.get_lux()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_pulsesensor_begin = function() {
    var text_pulseSensor_name = this.getFieldValue('pulseSensor_name');
    var value_pulseSensor_pin1 = Blockly.Arduino.valueToCode(this, 'pulseSensor_pin1', Blockly.Arduino.ORDER_ATOMIC);
    var statements_pulseSensor_data = Blockly.Arduino.statementToCode(this, 'pulseSensor_data');

    var statements_pulseSensor_data_1 = '';
    for(var i of statements_pulseSensor_data)
    {
      if(i == '@')
      {
        statements_pulseSensor_data_1 = statements_pulseSensor_data_1 + text_pulseSensor_name;
      }
      else
      {
        statements_pulseSensor_data_1 = statements_pulseSensor_data_1 + i;
      }
    }

  Blockly.Arduino.definitions_['var_declare_PulseSensorPlayground_a'] = '#define USE_ARDUINO_INTERRUPTS true\n#include <PulseSensorPlayground.h>';
  //Blockly.Arduino.definitions_['include_PulseSensorPlayground'] = '#define USE_ARDUINO_INTERRUPTS true\n#include <PulseSensorPlayground.h>';

  Blockly.Arduino.definitions_['var_declare_PulseSensorPlayground_b_' + text_pulseSensor_name] = 'PulseSensorPlayground '+text_pulseSensor_name+';';

  Blockly.Arduino.setups_['setup_pulsesensor_begin_'+text_pulseSensor_name] = ''+text_pulseSensor_name+'.analogInput('+value_pulseSensor_pin1+');\n'
                                                                            +statements_pulseSensor_data_1
                                                                            +'  '+text_pulseSensor_name+'.begin();';

  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_pulsesensor_blinkonpulse = function() {
    var value_pulsesensor_pin1 = Blockly.Arduino.valueToCode(this, 'pulsesensor_pin1', Blockly.Arduino.ORDER_ATOMIC);

  var surround_parent = this.getSurroundParent();
  var code = '';
  if (surround_parent && surround_parent.type == 'make_arduino_pulsesensor_begin') 
  {
    code = '@.blinkOnPulse('+value_pulsesensor_pin1+');\n';
  }
  else
  {
    code = '';
  }
  return code;
};

Blockly.Arduino.make_arduino_pulsesensor_fadeonpulse = function() {
    var value_pulsesensor_pin1 = Blockly.Arduino.valueToCode(this, 'pulsesensor_pin1', Blockly.Arduino.ORDER_ATOMIC);

  var surround_parent = this.getSurroundParent();
  var code = '';
  if (surround_parent && surround_parent.type == 'make_arduino_pulsesensor_begin') 
  {
    code = '@.fadeOnPulse('+value_pulsesensor_pin1+');\n';
  }
  else
  {
    code = '';
  }
  return code;
};

Blockly.Arduino.make_arduino_pulsesensor_setthreshold = function() {
    var value_pulsesensor_data = Blockly.Arduino.valueToCode(this, 'pulsesensor_data', Blockly.Arduino.ORDER_ATOMIC);

  var surround_parent = this.getSurroundParent();
  var code = '';
  if (surround_parent && surround_parent.type == 'make_arduino_pulsesensor_begin') 
  {
    code = '@.setThreshold('+value_pulsesensor_data+');\n';
  }
  else
  {
    code = '';
  }
  return code;
};

Blockly.Arduino.make_arduino_pulsesensor_getlatestsample = function() {
    var text_pulsesensor_name = this.getFieldValue('pulsesensor_name');
  var code = text_pulsesensor_name+'getLatestSample()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_pulsesensor_getbeatsperminute = function() {
    var text_pulsesensor_name = this.getFieldValue('pulsesensor_name');
  var code = text_pulsesensor_name+'.getBeatsPerMinute()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_pulsesensor_sawstartofbeat = function() {
    var text_pulsesensor_name = this.getFieldValue('pulsesensor_name');
  var code = text_pulsesensor_name+'.sawStartOfBeat()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_pulsesensor_isinsidebeat = function() {
    var text_pulsesensor_name = this.getFieldValue('pulsesensor_name');
  var code = text_pulsesensor_name+'.isInsideBeat()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_stepper_begin = function() {
    var text_stepper_name = this.getFieldValue('stepper_name');
    var value_stepper_in1 = Blockly.Arduino.valueToCode(this, 'stepper_in1', Blockly.Arduino.ORDER_ATOMIC);
    var value_stepper_in2 = Blockly.Arduino.valueToCode(this, 'stepper_in2', Blockly.Arduino.ORDER_ATOMIC);
    var value_stepper_in3 = Blockly.Arduino.valueToCode(this, 'stepper_in3', Blockly.Arduino.ORDER_ATOMIC);
    var value_stepper_in4 = Blockly.Arduino.valueToCode(this, 'stepper_in4', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_AccelStepper'] = '#include <AccelStepper.h>';

  Blockly.Arduino.definitions_['var_declare_Stepper_' + text_stepper_name] = 'AccelStepper stepper(AccelStepper::FULL4WIRE, '+value_stepper_in1+', '+value_stepper_in2+', '+value_stepper_in3+', '+value_stepper_in4+', true);';
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_stepper_begin_mode = function() {
    var dropdown_stepper_begin_mode = this.getFieldValue('stepper_begin_mode');
    var statements_stepper_begin_mode_data = Blockly.Arduino.statementToCode(this, 'stepper_begin_mode_data');

  statements_stepper_begin_mode_data = statements_stepper_begin_mode_data.substring(2,statements_stepper_begin_mode_data.length - 1);
  Blockly.Arduino.setups_['setup_Stepper_' + statements_stepper_begin_mode_data + '_' + dropdown_stepper_begin_mode] = statements_stepper_begin_mode_data;
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_stepper_set_speed_acceleration = function() {
    var value_set_speed_acceleration_data = Blockly.Arduino.valueToCode(this, 'set_speed_acceleration_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_stepper_name = this.getFieldValue('stepper_name');
    var dropdown_set_type = this.getFieldValue('set_type');
  var code = text_stepper_name+'.'+dropdown_set_type+'('+value_set_speed_acceleration_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_stepper_setPinsInverted = function() {
    var text_stepper_name = this.getFieldValue('stepper_name');
    var dropdown_setPinsInverted_mode = this.getFieldValue('setPinsInverted_mode');
  var code = '';
  if(dropdown_setPinsInverted_mode == 'A_false' || dropdown_setPinsInverted_mode == 'A_true')
    code = text_stepper_name + '.setPinsInverted(' + dropdown_setPinsInverted_mode.substring(2) + ', false, false);\n';
  else
    code = text_stepper_name + '.setPinsInverted(false, ' + dropdown_setPinsInverted_mode.substring(2) + ', false);\n';
  return code;
};

Blockly.Arduino.make_arduino_stepper_get_position_speed = function() {
    var text_stepper_name = this.getFieldValue('stepper_name');
    var dropdown_get_position_speed_type = this.getFieldValue('get_position_speed_type');
  var code = text_stepper_name+'.'+dropdown_get_position_speed_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_stepper_runToNewPosition = function() {
    var value_stepper_runToNewPosition_data = Blockly.Arduino.valueToCode(this, 'stepper_runToNewPosition_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_stepper_name = this.getFieldValue('stepper_name');
  var code = text_stepper_name + '.runToNewPosition('+value_stepper_runToNewPosition_data+');\n';
  return code;
};

Blockly.Arduino.make_arduino_stepper_run = function() {
    var text_stepper_name = this.getFieldValue('stepper_name');
    var dropdown_run_mode = this.getFieldValue('run_mode');
  var code = text_stepper_name + '.' + dropdown_run_mode + '();\n';
  return code;
};

//初始化DFPlayer Mini
Blockly.Arduino.make_arduino_dfplayer_mini_begin = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var value_dfplayer_pin = Blockly.Arduino.valueToCode(this, 'dfplayer_pin', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_Arduino'] = '#include "Arduino.h"';
  Blockly.Arduino.definitions_['include_DFRobotDFPlayerMini'] = '#include "DFRobotDFPlayerMini.h"';

  Blockly.Arduino.definitions_['var_declare_DFPlayerMini_' + text_dfplayer_name] = 'DFRobotDFPlayerMini '+text_dfplayer_name+';';
  Blockly.Arduino.setups_['setup_DFPlayerMini_' + text_dfplayer_name] = ''+text_dfplayer_name+'.begin('+value_dfplayer_pin+');';
  var code = '';
  return code;
};

//定义DFPlayer Mini 所使用的串口类型
Blockly.Arduino.make_arduino_dfplayer_mini_pin = function() {
    var dropdown_pin_type = this.getFieldValue('pin_type');
  Blockly.Arduino.definitions_['include_SoftwareSerial'] = '#include "SoftwareSerial.h"';
  var code = dropdown_pin_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DFPlayer Mini 设置串口通信的超时时间
Blockly.Arduino.make_arduino_dfplayer_mini_setTimeOut = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var value_timeout_data = Blockly.Arduino.valueToCode(this, 'timeout_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_dfplayer_name+'.setTimeOut('+value_timeout_data+');\n';
  return code;
};

//DFPlayer Mini 设置音量
Blockly.Arduino.make_arduino_dfplayer_mini_volume = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var value_volume_data = Blockly.Arduino.valueToCode(this, 'volume_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_dfplayer_name+'.volume('+value_volume_data+');\n';
  return code;
};

//DFPlayer Mini 音量+|-
Blockly.Arduino.make_arduino_dfplayer_mini_volume_up_down = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var dropdown_volume_type = this.getFieldValue('volume_type');
  var code = ''+text_dfplayer_name+'.'+dropdown_volume_type+'();\n';
  return code;
};

//DFPlayer Mini 设置音效
Blockly.Arduino.make_arduino_dfplayer_mini_EQ = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var value_eq_data = Blockly.Arduino.valueToCode(this, 'eq_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_dfplayer_name+'.EQ('+value_eq_data+');\n';
  return code;
};

//DFPlayer Mini 定义音效类型
Blockly.Arduino.make_arduino_dfplayer_mini_EQ_type = function() {
    var dropdown_eq_type = this.getFieldValue('eq_type');
  var code = dropdown_eq_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DFPlayer Mini 指定播放设备
Blockly.Arduino.make_arduino_dfplayer_mini_outputDevice = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var value_outputdevice_data = Blockly.Arduino.valueToCode(this, 'outputdevice_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_dfplayer_name+'.outputDevice('+value_outputdevice_data+');\n';
  return code;
};

//DFPlayer Mini 定义播放设备类型
Blockly.Arduino.make_arduino_dfplayer_mini_outputDevice_type = function() {
    var dropdown_outputdevice_type = this.getFieldValue('outputdevice_type');
  var code = dropdown_outputdevice_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DFPlayer Mini 设置-1
Blockly.Arduino.make_arduino_dfplayer_set_1 = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var dropdown_set_data = this.getFieldValue('set_data');
  var code = ''+text_dfplayer_name+'.'+dropdown_set_data+'();\n';
  return code;
};

//DFPlayer Mini 播放和循环指定曲目
Blockly.Arduino.make_arduino_dfplayer_play_loop = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var value_play_data = Blockly.Arduino.valueToCode(this, 'play_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_play_type = this.getFieldValue('play_type');
  var code = ''+text_dfplayer_name+'.'+dropdown_play_type+'('+value_play_data+');\n';
  return code;
};

//DFPlayer Mini 播放指定文件夹下的曲目
Blockly.Arduino.make_arduino_dfplayer_playFolder = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var value_fold_data = Blockly.Arduino.valueToCode(this, 'fold_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_fold_type = this.getFieldValue('fold_type');
    var value_play_data = Blockly.Arduino.valueToCode(this, 'play_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_dfplayer_name+'.'+dropdown_fold_type+'('+value_fold_data+', '+value_play_data+');\n';
  return code;
};

//DFPlayer Mini 循环播放指定文件夹下的曲目
Blockly.Arduino.make_arduino_dfplayer_loopFolder = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var value_fold_data = Blockly.Arduino.valueToCode(this, 'fold_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_dfplayer_name+'.loopFolder('+value_fold_data+');\n';
  return code;
};

//DFPlayer Mini 获取当前信息
Blockly.Arduino.make_arduino_dfplayer_read_now = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var dropdown_read_type = this.getFieldValue('read_type');
  var code = ''+text_dfplayer_name+'.'+dropdown_read_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DFPlayer Mini 获取U盘|SD卡|FLASH的总文件数
Blockly.Arduino.make_arduino_dfplayer_readFileCounts = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var value_device_type = Blockly.Arduino.valueToCode(this, 'device_type', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_play_data = this.getFieldValue('play_data');
  var code = ''+text_dfplayer_name+'.'+dropdown_play_data+'('+value_device_type+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//DFPlayer Mini 获取指定文件夹下的文件数
Blockly.Arduino.make_arduino_dfplayer_readFileCountsInFolder = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var value_folder_data = Blockly.Arduino.valueToCode(this, 'folder_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_dfplayer_name+'.readFileCountsInFolder('+value_folder_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_dfplayer_available = function() {
    var text_dfplayer_name = this.getFieldValue('dfplayer_name');
    var dropdown_type = this.getFieldValue('type');
  var code = ''+text_dfplayer_name+'.'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_reverseCipher = function() {
    var value_Cipher_data = Blockly.Arduino.valueToCode(this, 'Cipher_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_Cipher_type = this.getFieldValue('Cipher_type');

  Blockly.Arduino.definitions_['function_reverseCipher'] = '//反转加密法'
                                                        +'\nString reverseCipher(String message_data)'
                                                        +'\n{'
                                                        +'\n  String translated = "";'
                                                        +'\n  for (int i = (String(message_data).length() - 1); i >= 0;i--)'
                                                        +'\n    translated = String(translated) + String(String(message_data).charAt(i));'
                                                        +'\n  return translated;'
                                                        +'\n}\n';
  var code = 'reverseCipher('+value_Cipher_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_caesarCipher = function() {
    var value_Cipher_data = Blockly.Arduino.valueToCode(this, 'Cipher_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_Cipher_type = this.getFieldValue('Cipher_type');
    var value_Cipher_key = Blockly.Arduino.valueToCode(this, 'Cipher_key', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['function_caesarCipher'] = '//凯撒加密法'
                                                        +'\nString caesarCipher(String message_data,boolean select_data,int key)'
                                                        +'\n{'
                                                        +'\n  String cipher_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";'
                                                        +'\n  String translated = "";'
                                                        +'\n  int cipher_num = 0;'
                                                        +'\n  message_data.toUpperCase();'
                                                        +'\n  for(int i = 0; i < String(message_data).length();i++)'
                                                        +'\n  {'
                                                        +'\n    cipher_num = String(cipher_letters).indexOf(String(message_data).charAt(i));'
                                                        +'\n    if(cipher_num != -1)'
                                                        +'\n    {'
                                                        +'\n      if(select_data)'
                                                        +'\n        cipher_num += key;'
                                                        +'\n      else'
                                                        +'\n        cipher_num -= key;'
                                                        +'\n      if(cipher_num > 0 && cipher_num >= String(cipher_letters).length())'
                                                        +'\n        cipher_num -= String(cipher_letters).length();'
                                                        +'\n      else if(cipher_num < 0)'
                                                        +'\n        cipher_num += String(cipher_letters).length();'
                                                        +'\n      translated = String(translated) + String(String(cipher_letters).charAt(cipher_num));'
                                                        +'\n    }'
                                                        +'\n    else'
                                                        +'\n      translated = String(translated) + String(String(message_data).charAt(i));'
                                                        +'\n  }'
                                                        +'\n  return translated;'
                                                        +'\n}\n';
  var code = 'caesarCipher('+value_Cipher_data+', '+dropdown_Cipher_type+', '+value_Cipher_key+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_transpositionCipher = function() {
    var value_Cipher_data = Blockly.Arduino.valueToCode(this, 'Cipher_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_Cipher_type = this.getFieldValue('Cipher_type');
    var value_Cipher_key = Blockly.Arduino.valueToCode(this, 'Cipher_key', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['function_transpositionCipher'] = '//换位加密法'
                                                              +'\nString transpositionCipher(String message_data,boolean select_data,int key)'
                                                              +'\n{'
                                                              +'\n  int len = String(message_data).length();'
                                                              +'\n  String translated = "";'
                                                              +'\n  if(select_data)'
                                                              +'\n  {'
                                                              +'\n    for(int i = 0;i < key;i++)'
                                                              +'\n    {'
                                                              +'\n      for(int j = 0;j <= len/key;j++)'
                                                              +'\n      {'
                                                              +'\n        if(i + j*key < len)'
                                                              +'\n        {'
                                                              +'\n          translated = String(translated) + String(message_data).charAt(i + j*key);'
                                                              +'\n        }'
                                                              +'\n      }'
                                                              +'\n    }'
                                                              +'\n  }'
                                                              +'\n  else'
                                                              +'\n  {'
                                                              +'\n    String message_data1 = String(message_data).substring(0,len%key*(len/key+1));'
                                                              +'\n    message_data = String(message_data).substring(len%key*(len/key+1));'
                                                              +'\n    for(int i = String(message_data).length()/(len/key);i >= 1;i--)'
                                                              +'\n    {'
                                                              +'\n      message_data = String(message_data).substring(0,len/key*i) + String(\'*\') + String(message_data).substring(len/key*i);'
                                                              +'\n    }'
                                                              +'\n    message_data1 = String(message_data1) + String(message_data);'
                                                              +'\n    for(int i = 0;i <= len/key;i++)'
                                                              +'\n    {'
                                                              +'\n      for(int j = 0;j < key;j++)'
                                                              +'\n      {'
                                                              +'\n        if(i != len/key || j < len%key)'
                                                              +'\n        {'
                                                              +'\n          translated = String(translated) + String(message_data1).charAt(j*(len/key+1)+i);'
                                                              +'\n        }'
                                                              +'\n      }'
                                                              +'\n    }'
                                                              +'\n  }'
                                                              +'\n  return translated;'
                                                              +'\n}\n';
  var code = 'transpositionCipher('+value_Cipher_data+', '+dropdown_Cipher_type+', '+value_Cipher_key+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_multiplierCipher = function() {
    var value_Cipher_data = Blockly.Arduino.valueToCode(this, 'Cipher_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_Cipher_type = this.getFieldValue('Cipher_type');
    var value_Cipher_key = Blockly.Arduino.valueToCode(this, 'Cipher_key', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['function_gcdJC'] = '//检测两个数是否互素,互素返回辗转相除的次数，不互素返回-1'
                                                +'\nint gcdJC(long a,long b)'
                                                +'\n{'
                                                +'\n  long r;'
                                                +'\n  int i = 0;'
                                                +'\n  while(b != 0)'
                                                +'\n  {'
                                                +'\n    r = a % b;'
                                                +'\n    i++;'
                                                +'\n    if(r != 0)'
                                                +'\n    {'
                                                +'\n      a = b;'
                                                +'\n      b = r;'
                                                +'\n    }'
                                                +'\n    else'
                                                +'\n    {'
                                                +'\n      if(b == 1)'
                                                +'\n        return i;'
                                                +'\n      else'
                                                +'\n        return -1;'
                                                +'\n    }'
                                                +'\n  }'
                                                +'\n  return 0;'
                                                +'\n}\n';

  Blockly.Arduino.definitions_['function_inversion'] = '//求模逆 a*b=1 mod n 结果返回b 即 a的逆元'
                                                    +'\nlong inversion(long a,long n)'
                                                    +'\n{'
                                                    +'\n  long n1 = n;'
                                                    +'\n  int length = gcdJC(a,n);'
                                                    +'\n  if(length == -1)'
                                                    +'\n    return -1;'
                                                    +'\n  if(a > n)'
                                                    +'\n    length += 2;'
                                                    +'\n  long t[length];'
                                                    +'\n  t[0] = 0;'
                                                    +'\n  t[1] = 1;'
                                                    +'\n  int i =0;'
                                                    +'\n  long temp1 = 0, temp2 = 0;'
                                                    +'\n  while(true)'
                                                    +'\n  {'
                                                    +'\n    temp1 = n/a;'
                                                    +'\n    temp2 = n%a;'
                                                    +'\n    i++;'
                                                    +'\n    t[i + 1] = t[i - 1] - temp1*t[i];'
                                                    +'\n    if(temp2 != 1)'
                                                    +'\n    {'
                                                    +'\n      n = a;'
                                                    +'\n      a = temp2;'
                                                    +'\n    }'
                                                    +'\n    else'
                                                    +'\n    {'
                                                    +'\n      if(t[length - 1] < 0)'
                                                    +'\n        return t[length - 1] + n1;'
                                                    +'\n      else'
                                                    +'\n        return t[length - 1];'
                                                    +'\n    }'
                                                    +'\n  }'
                                                    +'\n}\n';

  Blockly.Arduino.definitions_['function_multiplierCipher'] = '//乘数加密法'
                                                           +'\nString multiplierCipher(String message_data,boolean select_data,int key)'
                                                           +'\n{'
                                                           +'\n  String cipher_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";'
                                                           +'\n  String translated = "";'
                                                           +'\n  int cipher_num = 0;'
                                                           +'\n  message_data.toUpperCase();'
                                                           +'\n  for(int i = 0; i < String(message_data).length();i++)'
                                                           +'\n  {'
                                                           +'\n    cipher_num = String(cipher_letters).indexOf(String(message_data).charAt(i));'
                                                           +'\n    if(cipher_num != -1)'
                                                           +'\n    {'
                                                           +'\n      if(select_data)'
                                                           +'\n        cipher_num = (cipher_num*key)%String(cipher_letters).length();'
                                                           +'\n      else'
                                                           +'\n        cipher_num = cipher_num*(inversion(key,String(cipher_letters).length()))%String(cipher_letters).length();'
                                                           +'\n      translated = String(translated) + String(String(cipher_letters).charAt(cipher_num));'
                                                           +'\n    }'
                                                           +'\n    else'
                                                           +'\n      translated = String(translated) + String(String(message_data).charAt(i));'
                                                           +'\n  }'
                                                           +'\n  return translated;'
                                                           +'\n}\n';
  var code = 'multiplierCipher('+value_Cipher_data+', '+dropdown_Cipher_type+', '+value_Cipher_key+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];    
};

Blockly.Arduino.make_affineCipher = function() {
    var value_Cipher_data = Blockly.Arduino.valueToCode(this, 'Cipher_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_Cipher_type = this.getFieldValue('Cipher_type');
    var value_Cipher_key1 = Blockly.Arduino.valueToCode(this, 'Cipher_key1', Blockly.Arduino.ORDER_ATOMIC);
    var value_Cipher_key2 = Blockly.Arduino.valueToCode(this, 'Cipher_key2', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['function_gcdJC'] = '//检测两个数是否互素,互素返回辗转相除的次数，不互素返回-1'
                                                +'\nint gcdJC(long a,long b)'
                                                +'\n{'
                                                +'\n  long r;'
                                                +'\n  int i = 0;'
                                                +'\n  while(b != 0)'
                                                +'\n  {'
                                                +'\n    r = a % b;'
                                                +'\n    i++;'
                                                +'\n    if(r != 0)'
                                                +'\n    {'
                                                +'\n      a = b;'
                                                +'\n      b = r;'
                                                +'\n    }'
                                                +'\n    else'
                                                +'\n    {'
                                                +'\n      if(b == 1)'
                                                +'\n        return i;'
                                                +'\n      else'
                                                +'\n        return -1;'
                                                +'\n    }'
                                                +'\n  }'
                                                +'\n  return 0;'
                                                +'\n}\n';

  Blockly.Arduino.definitions_['function_inversion'] = '//求模逆 a*b=1 mod n 结果返回b 即 a的逆元'
                                                    +'\nlong inversion(long a,long n)'
                                                    +'\n{'
                                                    +'\n  long n1 = n;'
                                                    +'\n  int length = gcdJC(a,n);'
                                                    +'\n  if(length == -1)'
                                                    +'\n    return -1;'
                                                    +'\n  if(a > n)'
                                                    +'\n    length += 2;'
                                                    +'\n  long t[length];'
                                                    +'\n  t[0] = 0;'
                                                    +'\n  t[1] = 1;'
                                                    +'\n  int i =0;'
                                                    +'\n  long temp1 = 0, temp2 = 0;'
                                                    +'\n  while(true)'
                                                    +'\n  {'
                                                    +'\n    temp1 = n/a;'
                                                    +'\n    temp2 = n%a;'
                                                    +'\n    i++;'
                                                    +'\n    t[i + 1] = t[i - 1] - temp1*t[i];'
                                                    +'\n    if(temp2 != 1)'
                                                    +'\n    {'
                                                    +'\n      n = a;'
                                                    +'\n      a = temp2;'
                                                    +'\n    }'
                                                    +'\n    else'
                                                    +'\n    {'
                                                    +'\n      if(t[length - 1] < 0)'
                                                    +'\n        return t[length - 1] + n1;'
                                                    +'\n      else'
                                                    +'\n        return t[length - 1];'
                                                    +'\n    }'
                                                    +'\n  }'
                                                    +'\n}\n';

  Blockly.Arduino.definitions_['function_affineCipher'] = '//仿射加密法'
                                                       +'\nString affineCipher(String message_data,boolean select_data,int key1,int key2)'
                                                       +'\n{'
                                                       +'\n  String cipher_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";'
                                                       +'\n  String translated = "";'
                                                       +'\n  int cipher_num = 0;'
                                                       +'\n  message_data.toUpperCase();'
                                                       +'\n  for(int i = 0; i < String(message_data).length();i++)'
                                                       +'\n  {'
                                                       +'\n    cipher_num = String(cipher_letters).indexOf(String(message_data).charAt(i));'
                                                       +'\n    if(cipher_num != -1)'
                                                       +'\n    {'
                                                       +'\n      if(select_data)'
                                                       +'\n        cipher_num = (cipher_num*key1+key2)%String(cipher_letters).length();'
                                                       +'\n      else'
                                                       +'\n      {'
                                                       +'\n        cipher_num = (cipher_num-key2)*(inversion(key1,String(cipher_letters).length()))%String(cipher_letters).length();'
                                                       +'\n        while(cipher_num < 0)'
                                                       +'\n          cipher_num += String(cipher_letters).length();'
                                                       +'\n      }'
                                                       +'\n      translated = String(translated) + String(String(cipher_letters).charAt(cipher_num));'
                                                       +'\n    }'
                                                       +'\n    else'
                                                       +'\n      translated = String(translated) + String(String(message_data).charAt(i));'
                                                       +'\n  }'
                                                       +'\n  return translated;'
                                                       +'\n}\n';

  var code = 'affineCipher('+value_Cipher_data+', '+dropdown_Cipher_type+', '+value_Cipher_key1+', '+value_Cipher_key2+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_simpleSubCipher = function() {
    var value_Cipher_data = Blockly.Arduino.valueToCode(this, 'Cipher_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_Cipher_type = this.getFieldValue('Cipher_type');
    var value_Cipher_key = Blockly.Arduino.valueToCode(this, 'Cipher_key', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['function_simpleSubCipher'] = '//简单替代加密法'
                                                          +'\nString simpleSubCipher(String message_data,String key)'
                                                          +'\n{'
                                                          +'\n  String cipher_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";'
                                                          +'\n  String translated = "";'
                                                          +'\n  int cipher_num = 0;'
                                                          +'\n  message_data.toUpperCase();'
                                                          +'\n  for(int i = 0; i < String(message_data).length();i++)'
                                                          +'\n  {'
                                                          +'\n    cipher_num = String(cipher_letters).indexOf(String(message_data).charAt(i));'
                                                          +'\n    if(cipher_num != -1)'
                                                          +'\n      translated = String(translated) + String(String(key).charAt(cipher_num));'
                                                          +'\n    else'
                                                          +'\n      translated = String(translated) + String(String(message_data).charAt(i));'
                                                          +'\n  }'
                                                          +'\n  return translated;'
                                                          +'\n}\n';
  var code = 'simpleSubCipher('+value_Cipher_data+', '+value_Cipher_key+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_simpleSubGetkey = function() {
    var value_Cipher_key = Blockly.Arduino.valueToCode(this, 'Cipher_key', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['function_simpleSubGetkey'] = '//获取解密密匙(简单替代加密法)'
                                                          +'\nString simpleSubGetkey(String key)'
                                                          +'\n{'
                                                          +'\n  String cipher_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";'
                                                          +'\n  String translated = "";'
                                                          +'\n  for(int i = 0;i < String(cipher_letters).length();i++)'
                                                          +'\n    for(int j = 0;j < String(cipher_letters).length();j++)'
                                                          +'\n      if(String(key).charAt(j) == String(cipher_letters).charAt(i))'
                                                          +'\n      {'
                                                          +'\n        translated = String(translated) + String(String(cipher_letters).charAt(j));'
                                                          +'\n        break;'
                                                          +'\n      }'
                                                          +'\n  return translated;'
                                                          +'\n}\n';

  var code = 'simpleSubGetkey('+value_Cipher_key+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_simpleSubRandomkey = function() {

Blockly.Arduino.definitions_['function_simpleSubRandomkey'] = '//获取随机密匙(简单替代加密法)'
                                                           +'\nString simpleSubRandomkey()'
                                                           +'\n{'
                                                           +'\n  String cipher_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";'
                                                           +'\n  String output_key = "";'
                                                           +'\n  int key_data;'
                                                           +'\n  int j = 0;'
                                                           +'\n  int key = 0;'
                                                           +'\n  boolean data_ok = false;'
                                                           +'\n  for(int i = 0;i < 25;i++)'
                                                           +'\n  {'
                                                           +'\n    key = random(0,25 - i);'
                                                           +'\n    output_key = String(output_key) + String(cipher_letters).charAt(key);'
                                                           +'\n    cipher_letters = String(cipher_letters).substring(0,key) + String(cipher_letters).substring(key + 1,25 - i);'
                                                           +'\n  }'
                                                           +'\n  output_key = String(output_key) + String(cipher_letters);'
                                                           +'\n  return output_key;'
                                                           +'\n}\n';

  var code = 'simpleSubRandomkey()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_vigenereCipher = function() {
    var value_Cipher_data = Blockly.Arduino.valueToCode(this, 'Cipher_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_Cipher_type = this.getFieldValue('Cipher_type');
    var value_Cipher_key = Blockly.Arduino.valueToCode(this, 'Cipher_key', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['function_caesarCipher'] = '//凯撒加密法'
                                                        +'\nString caesarCipher(String message_data,boolean select_data,int key)'
                                                        +'\n{'
                                                        +'\n  String cipher_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";'
                                                        +'\n  String translated = "";'
                                                        +'\n  int cipher_num = 0;'
                                                        +'\n  message_data.toUpperCase();'
                                                        +'\n  for(int i = 0; i < String(message_data).length();i++)'
                                                        +'\n  {'
                                                        +'\n    cipher_num = String(cipher_letters).indexOf(String(message_data).charAt(i));'
                                                        +'\n    if(cipher_num != -1)'
                                                        +'\n    {'
                                                        +'\n      if(select_data)'
                                                        +'\n        cipher_num += key;'
                                                        +'\n      else'
                                                        +'\n        cipher_num -= key;'
                                                        +'\n      if(cipher_num > 0 && cipher_num >= String(cipher_letters).length())'
                                                        +'\n        cipher_num -= String(cipher_letters).length();'
                                                        +'\n      else if(cipher_num < 0)'
                                                        +'\n        cipher_num += String(cipher_letters).length();'
                                                        +'\n      translated = String(translated) + String(String(cipher_letters).charAt(cipher_num));'
                                                        +'\n    }'
                                                        +'\n    else'
                                                        +'\n      translated = String(translated) + String(String(message_data).charAt(i));'
                                                        +'\n  }'
                                                        +'\n  return translated;'
                                                        +'\n}\n';

  Blockly.Arduino.definitions_['function_vigenereCipher'] = '//维吉尼亚加密法'
                                                         +'\nString vigenereCipher(String message_data,boolean select_data,String key)'
                                                         +'\n{'
                                                         +'\n  String cipher_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";'
                                                         +'\n  int key_type;'
                                                         +'\n  String translated = "";'
                                                         +'\n  int cipher_num = 0,j=0;'
                                                         +'\n  message_data.toUpperCase();'
                                                         +'\n  key.toUpperCase();'
                                                         +'\n  for(int i = 0;i < String(message_data).length();i++)'
                                                         +'\n  {'
                                                         +'\n    key_type = (j)%String(key).length();'
                                                         +'\n    cipher_num = String(cipher_letters).indexOf(String(message_data).charAt(i));'
                                                         +'\n    if(cipher_num == -1)'
                                                         +'\n      translated = String(translated) + String(message_data).charAt(i);'
                                                         +'\n    else'
                                                         +'\n    {'
                                                         +'\n      key_type = String(cipher_letters).indexOf(String(key).charAt(key_type));'
                                                         +'\n      if(select_data)'
                                                         +'\n        translated = String(translated) + caesarCipher(String(String(message_data).charAt(i)),true,key_type);'
                                                         +'\n      else'
                                                         +'\n        translated = String(translated) + caesarCipher(String(String(message_data).charAt(i)),false,key_type);'
                                                         +'\n      j++;'
                                                         +'\n    }'
                                                         +'\n  }'
                                                         +'\n  return translated;'
                                                         +'\n}\n';
                                                        
  var code = 'vigenereCipher('+value_Cipher_data+', '+dropdown_Cipher_type+', '+value_Cipher_key+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//获取某个版本对应二维码存储所需的字节数
Blockly.Arduino.make_arduino_qrcode_getBufferSize = function() {
    var value_qrcode_version = Blockly.Arduino.valueToCode(this, 'qrcode_version', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_qrcode'] = '#include "qrcode.h"';
  Blockly.Arduino.definitions_['var_declare_qrcode'] = 'QRCode qrcode;';

  var code = 'qrcode_getBufferSize('+value_qrcode_version+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//使用某个文本，通过设置二维码版本、容错率来生成二维码
Blockly.Arduino.make_arduino_qrcode_initText = function() {
    var value_qrcode_text = Blockly.Arduino.valueToCode(this, 'qrcode_text', Blockly.Arduino.ORDER_ATOMIC);
    var value_qrcode_version = Blockly.Arduino.valueToCode(this, 'qrcode_version', Blockly.Arduino.ORDER_ATOMIC);
    var value_qrcode_ecc = Blockly.Arduino.valueToCode(this, 'qrcode_ecc', Blockly.Arduino.ORDER_ATOMIC);
    var value_qrcode_data = Blockly.Arduino.valueToCode(this, 'qrcode_data', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_qrcode'] = '#include "qrcode.h"';
  Blockly.Arduino.definitions_['var_declare_qrcode'] = 'QRCode qrcode;';
  var code = 'qrcode_initText(&qrcode, '+value_qrcode_data+', '+value_qrcode_version+', '+value_qrcode_ecc+', '+value_qrcode_text+');\n';
  return code;
};

//获取二维码的尺寸
Blockly.Arduino.make_arduino_qrcode_size = function() {
    var dropdown_data = this.getFieldValue('data');
  Blockly.Arduino.definitions_['include_qrcode'] = '#include "qrcode.h"';
  Blockly.Arduino.definitions_['var_declare_qrcode'] = 'QRCode qrcode;';
  var code = 'qrcode.'+dropdown_data+'';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//获取二维码上某个坐标点处的方块值
Blockly.Arduino.make_arduino_qrcode_getModule = function() {
    var value_x_data = Blockly.Arduino.valueToCode(this, 'x_data', Blockly.Arduino.ORDER_ATOMIC);
    var value_y_data = Blockly.Arduino.valueToCode(this, 'y_data', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_qrcode'] = '#include "qrcode.h"';
  Blockly.Arduino.definitions_['var_declare_qrcode'] = 'QRCode qrcode;';
  var code = 'qrcode_getModule(&qrcode, '+value_x_data+', '+value_y_data+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化PID
Blockly.Arduino.make_arduino_pid_begin = function() {
    var text_pid_name = this.getFieldValue('pid_name');
    var value_pid_input = Blockly.Arduino.valueToCode(this, 'pid_input', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_output = Blockly.Arduino.valueToCode(this, 'pid_output', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_setpoint = Blockly.Arduino.valueToCode(this, 'pid_setpoint', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_kp = Blockly.Arduino.valueToCode(this, 'pid_kp', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_ki = Blockly.Arduino.valueToCode(this, 'pid_ki', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_kd = Blockly.Arduino.valueToCode(this, 'pid_kd', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_direction = Blockly.Arduino.valueToCode(this, 'pid_direction', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_PID_v1'] = '#include <PID_v1.h>';
  Blockly.Arduino.definitions_['var_declare' + value_pid_input] = 'volatile double ' + value_pid_input + ';';
  Blockly.Arduino.definitions_['var_declare' + value_pid_output] = 'volatile double ' + value_pid_output + ';';
  Blockly.Arduino.definitions_['var_declare' + value_pid_setpoint] = 'volatile double ' + value_pid_setpoint + ';';
  Blockly.Arduino.definitions_['var_declare_pid'+text_pid_name] = 'PID '+text_pid_name+'(&'+value_pid_input+', &'+value_pid_output+', &'+value_pid_setpoint+', '+value_pid_kp+', '+value_pid_ki+', '+value_pid_kd+', '+value_pid_direction+');';
  var code = '';
  return code;
};

//初始化PID-1
Blockly.Arduino.make_arduino_pid_begin_1 = function() {
    var text_pid_name = this.getFieldValue('pid_name');
    var value_pid_input = Blockly.Arduino.valueToCode(this, 'pid_input', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_output = Blockly.Arduino.valueToCode(this, 'pid_output', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_setpoint = Blockly.Arduino.valueToCode(this, 'pid_setpoint', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_kp = Blockly.Arduino.valueToCode(this, 'pid_kp', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_ki = Blockly.Arduino.valueToCode(this, 'pid_ki', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_kd = Blockly.Arduino.valueToCode(this, 'pid_kd', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_direction = Blockly.Arduino.valueToCode(this, 'pid_direction', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_pon = Blockly.Arduino.valueToCode(this, 'pid_pon', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_PID_v1'] = '#include <PID_v1.h>';
  Blockly.Arduino.definitions_['var_declare' + value_pid_input] = 'volatile double ' + value_pid_input + ';';
  Blockly.Arduino.definitions_['var_declare' + value_pid_output] = 'volatile double ' + value_pid_output + ';';
  Blockly.Arduino.definitions_['var_declare' + value_pid_setpoint] = 'volatile double ' + value_pid_setpoint + ';';
  Blockly.Arduino.definitions_['var_declare_pid'+text_pid_name] = 'PID '+text_pid_name+'(&'+value_pid_input+', &'+value_pid_output+', &'+value_pid_setpoint+', '+value_pid_kp+', '+value_pid_ki+', '+value_pid_kd+', '+value_pid_direction+', '+value_pid_pon+');';
  var code = '';
  return code;
};

//设置PID方向
Blockly.Arduino.make_arduino_pid_direction = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//指定PID算法的计算过程是自动还是手动
Blockly.Arduino.make_arduino_pid_SetMode = function() {
    var text_pid_name = this.getFieldValue('pid_name');
    var value_pid_mode = Blockly.Arduino.valueToCode(this, 'pid_mode', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_pid_name+'.SetMode('+value_pid_mode+');\n';
  return code;
};

//自动|手动
Blockly.Arduino.make_arduino_pid_Mode = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//PID算法 运行计算过程
Blockly.Arduino.make_arduino_pid_Compute = function() {
    var text_pid_name = this.getFieldValue('pid_name');
  var code = ''+text_pid_name+'.Compute();\n';
  return code;
};

//PID算法 运行计算过程-1
Blockly.Arduino.make_arduino_pid_Compute_1 = function() {
    var text_pid_name = this.getFieldValue('pid_name');
  var code = ''+text_pid_name+'.Compute()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//PID算法 设置输出的上下限
Blockly.Arduino.make_arduino_pid_SetOutputLimits = function() {
    var text_pid_name = this.getFieldValue('pid_name');
    var value_min = Blockly.Arduino.valueToCode(this, 'min', Blockly.Arduino.ORDER_ATOMIC);
    var value_max = Blockly.Arduino.valueToCode(this, 'max', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_pid_name+'.SetOutputLimits('+value_min+', '+value_max+');\n';
  return code;
};

//PID算法 调整参数
Blockly.Arduino.make_arduino_pid_SetTunings = function() {
    var text_pid_name = this.getFieldValue('pid_name');
    var value_pid_kp = Blockly.Arduino.valueToCode(this, 'pid_kp', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_ki = Blockly.Arduino.valueToCode(this, 'pid_ki', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_kd = Blockly.Arduino.valueToCode(this, 'pid_kd', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_pon = Blockly.Arduino.valueToCode(this, 'pid_pon', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_pid_name+'.SetTunings('+value_pid_kp+', '+value_pid_ki+', '+value_pid_kd+', '+value_pid_pon+');\n';
  return code;
};

//PID算法 工作模式
Blockly.Arduino.make_arduino_pid_pon = function() {
    var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//PID算法 调整参数
Blockly.Arduino.make_arduino_pid_SetTunings_1 = function() {
    var text_pid_name = this.getFieldValue('pid_name');
    var value_pid_kp = Blockly.Arduino.valueToCode(this, 'pid_kp', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_ki = Blockly.Arduino.valueToCode(this, 'pid_ki', Blockly.Arduino.ORDER_ATOMIC);
    var value_pid_kd = Blockly.Arduino.valueToCode(this, 'pid_kd', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_pid_name+'.SetTunings('+value_pid_kp+', '+value_pid_ki+', '+value_pid_kd+');\n';
  return code;
};

//PID算法 调整控制方向
Blockly.Arduino.make_arduino_pid_SetControllerDirection = function() {
    var text_pid_name = this.getFieldValue('pid_name');
    var value_pid_direction = Blockly.Arduino.valueToCode(this, 'pid_direction', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_pid_name+'.SetControllerDirection('+value_pid_direction+');\n';
  return code;
};

//PID算法 调整采样时间
Blockly.Arduino.make_arduino_pid_SetSampleTime = function() {
    var text_pid_name = this.getFieldValue('pid_name');
    var value_pid_time = Blockly.Arduino.valueToCode(this, 'pid_time', Blockly.Arduino.ORDER_ATOMIC);
  var code = ''+text_pid_name+'.SetSampleTime('+value_pid_time+');\n';
  return code;
};

//PID算法 获取Kp、Ki、Kd、控制方向、工作方向
Blockly.Arduino.make_arduino_pid_get = function() {
    var text_pid_name = this.getFieldValue('pid_name');
    var dropdown_type = this.getFieldValue('type');
  var code = ''+text_pid_name+'.'+dropdown_type+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_tool = function() {
    var statements_make_tool_data = Blockly.Arduino.valueToCode(this, 'make_tool_data');
    //var text_make_tool_result = this.getFieldValue('make_tool_result');
  var code1 = '';
  var code = '0.00';
  if(statements_make_tool_data != '')
  {
  }
  Blockly.Arduino.make_tool_calculate_result_data = code;
  return code1;
};

Blockly.Arduino.make_tool_1 = function() {
    var text_make_tool_1_data = this.getFieldValue('make_tool_1_data');
  var code = '';
  return code;
};

Blockly.Arduino.make_tool_2 = function() {
    var text_screen_1 = this.getFieldValue('screen_1');
    var text_screen_2 = this.getFieldValue('screen_2');
    var text_screen_3 = this.getFieldValue('screen_3');
    var dropdown_convert_type = this.getFieldValue('convert_type');
    var statements_calculate_data = Blockly.Arduino.statementToCode(this, 'calculate_data');
  var code = '';
  return code;
};

Blockly.Arduino.make_tool_result = function() {
    var value_make_tool_result_data = Blockly.Arduino.valueToCode(this, 'make_tool_result_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = '';

  var surround_parent = this.getSurroundParent();
  if (surround_parent) 
  {
    code = value_make_tool_result_data;
  }
  else
  {
    code = '';
  }
  return code;
};

Blockly.Arduino.make_tool_result_1 = function() {
  var code = '';

  var surround_parent = this.getSurroundParent();
  if ((surround_parent && surround_parent.type == 'make_tool_result') || (surround_parent && surround_parent.type == 'make_tool_calculate_1')|| (surround_parent && surround_parent.type == 'make_tool_calculate')) 
  {
    code = 'code';
  }
  else
  {
    code = '';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_tool_calculate_1 = function() {
    var value_make_tool_input_data1 = Blockly.Arduino.valueToCode(this, 'make_tool_input_data1', Blockly.Arduino.ORDER_ATOMIC);
    var value_make_tool_input_data2 = Blockly.Arduino.valueToCode(this, 'make_tool_input_data2', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_make_tool_calculate_type = this.getFieldValue('make_tool_calculate_type');
  var code = '';
  var code1 = '';
  var surround_parent = this.getSurroundParent();
  if(surround_parent)
  {
    if(value_make_tool_input_data1.charAt(0) == '(' && value_make_tool_input_data1.charAt(value_make_tool_input_data1.length - 1) == ')')
      value_make_tool_input_data1 = value_make_tool_input_data1.substring(1,value_make_tool_input_data1.length - 1);
    if(value_make_tool_input_data2.charAt(0) == '(' && value_make_tool_input_data2.charAt(value_make_tool_input_data2.length - 1) == ')')
      value_make_tool_input_data2 = value_make_tool_input_data2.substring(1,value_make_tool_input_data2.length - 1);
    if (Number(value_make_tool_input_data1) != NaN && Number(value_make_tool_input_data2) != NaN) 
    {
      switch(dropdown_make_tool_calculate_type)
      {
        case '+':
        {
          code1 = String(Number(value_make_tool_input_data1) + Number(value_make_tool_input_data2));
          break;
        }
        case '-':
        {
          code1 = String(Number(value_make_tool_input_data1) - Number(value_make_tool_input_data2));
          break;
        }
        case '×':
        {
          code1 = String(Number(value_make_tool_input_data1) * Number(value_make_tool_input_data2));
          break;
        }
        case '÷':
        {
          code1 = String(Number(value_make_tool_input_data1) / Number(value_make_tool_input_data2));
          break;
        }
        case '%':
        {
          code1 = String(Number(value_make_tool_input_data1) % Number(value_make_tool_input_data2));
          break;
        }
        case '^':
        {
          code1 = String(Math.pow(Number(value_make_tool_input_data1), Number(value_make_tool_input_data2)));
          break;
        }
        default:
        { 
          code1 = 'NaN';
        }
      }
    }
    else
    {
      code1 = 'NaN';
    }
  }
  else
  {
    code1 = '';
  }

  return [code1, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_tool_calculate = function() {
    var value_make_tool_calculate_data = Blockly.Arduino.valueToCode(this, 'make_tool_calculate_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_make_tool_calculate_type = this.getFieldValue('make_tool_calculate_type');
  var code = '';
  var code1 = '';
  var surround_parent = this.getSurroundParent();
  if(surround_parent)
  {
    if(value_make_tool_calculate_data.charAt(0) == '(' && value_make_tool_calculate_data.charAt(value_make_tool_calculate_data.length - 1) == ')')
      value_make_tool_calculate_data = value_make_tool_calculate_data.substring(1,value_make_tool_calculate_data.length - 1);
    if(Number(value_make_tool_calculate_data) != NaN)
    {
      switch(dropdown_make_tool_calculate_type)
      {
        case 'sin':
        {
          code1 = String(Math.sin(Number(value_make_tool_calculate_data)));
          break;
        }
        case 'cos':
        {
          code1 = String(Math.cos(Number(value_make_tool_calculate_data)));
          break;
        }
        case 'tan':
        {
          code1 = String(Math.tan(Number(value_make_tool_calculate_data)));
          break;
        }
        case 'asin':
        {
          code1 = String(Math.asin(Number(value_make_tool_calculate_data)));
          break;
        }
        case 'acos':
        {
          code1 = String(Math.acos(Number(value_make_tool_calculate_data)));
          break;
        }
        case 'atan':
        {
          code1 = String(Math.atan(Number(value_make_tool_calculate_data)));
          break;
        }
        case 'ln':
        {
          code1 = String(Math.log(Number(value_make_tool_calculate_data)));
          break;
        }
        case 'log10':
        {
          code1 = String(Math.log(Number(value_make_tool_calculate_data))/Math.LN2);
          break;
        }
        case 'e^':
        {
          code1 = String(Math.exp(Number(value_make_tool_calculate_data)));
          break;
        }
        case '10^':
        {
          code1 = String(Math.pow(10, Number(value_make_tool_calculate_data)));
          break;
        }
        default:
          code1 = 'NaN';
      }
    }
    else
    {
      code1 = 'NaN';
    }
  }
  else
  {
    code1 = '';
  }
  return [code1, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_tool_bit_operation = function() {
    var value_bit_operation_1 = Blockly.Arduino.valueToCode(this, 'bit_operation_1', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_bit_operation_type = this.getFieldValue('bit_operation_type');
    var value_bit_operation_2 = Blockly.Arduino.valueToCode(this, 'bit_operation_2', Blockly.Arduino.ORDER_ATOMIC);
  var code = '';

  var surround_parent = this.getSurroundParent();
  if(surround_parent)
  {
    if(value_bit_operation_1.charAt(0) == '(' && value_bit_operation_1.charAt(value_bit_operation_1.length - 1) == ')')
      value_bit_operation_1 = value_bit_operation_1.substring(1,value_bit_operation_1.length - 1);

    if(value_bit_operation_2.charAt(0) == '(' && value_bit_operation_2.charAt(value_bit_operation_2.length - 1) == ')')
      value_bit_operation_2 = value_bit_operation_2.substring(1,value_bit_operation_2.length - 1);

    if(Number(value_bit_operation_1) != NaN && Number(value_bit_operation_2) != NaN)
    {
      switch(dropdown_bit_operation_type)
      {
        case '&':
        {
          code = String(Number(value_bit_operation_1) & Number(value_bit_operation_2));
          break;
        }
        case '|':
        {
          code = String(Number(value_bit_operation_1) | Number(value_bit_operation_2));
          break;
        }
        case '^':
        {
          code = String(Number(value_bit_operation_1) ^ Number(value_bit_operation_2));
          break;
        }
        case '>>':
        {
          code = String(Number(value_bit_operation_1) >> Number(value_bit_operation_2));
          break;
        }
        case '<<':
        {
          code = String(Number(value_bit_operation_1) << Number(value_bit_operation_2));
          break;
        }
        default:
          code = 'NaN';
      }
    }
    else
    {
      code = 'NaN';
    }
  }
  else
  {
    code = '';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_tool_not_operation = function() {
    var value_not_operation_data = Blockly.Arduino.valueToCode(this, 'not_operation_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = '';

  var surround_parent = this.getSurroundParent();
  if(surround_parent)
  {
    if(value_not_operation_data.charAt(0) == '(' && value_not_operation_data.charAt(value_not_operation_data.length - 1) == ')')
      value_not_operation_data = value_not_operation_data.substring(1,value_not_operation_data.length - 1);
    if(Number(value_not_operation_data) != NaN)
    {
      code = String(~Number(value_not_operation_data));
    }
    else
    {
      code = 'NaN';
    }

  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_tool_convert_data = function() {
    var value_convert_data = Blockly.Arduino.valueToCode(this, 'convert_data', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_convert_type = this.getFieldValue('convert_type');
  var code = '';

  var surround_parent = this.getSurroundParent();
  if(surround_parent)
  {
    if(value_convert_data.charAt(0) == '(' && value_convert_data.charAt(value_convert_data.length - 1) == ')')
      value_convert_data = value_convert_data.substring(1,value_convert_data.length - 1);
    if(Number(value_convert_data) != NaN)
    {
      if(dropdown_convert_type == 'BIN')
        code = String(parseInt(Number(value_convert_data), 2));
      else if(dropdown_convert_type == 'OCT')
        code = String(parseInt(Number(value_convert_data), 8));
      else if(dropdown_convert_type == 'HEX')
      {
        if(value_convert_data.substring(0,2) != '0x' && value_convert_data.substring(0,2) != '0X')
          value_convert_data = '0x' + value_convert_data;
        code = value_convert_data;
      }
      else
        code = value_convert_data;
    }
    else
    {
      code = 'NaN';
    }
  }
  else
  {
    code = '';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['make_tool_convert_bin'] = function() {
  var checkbox_ic_set_every_1 = this.getFieldValue('ic_set_every_1') == 'TRUE';
  var checkbox_ic_set_every_2 = this.getFieldValue('ic_set_every_2') == 'TRUE';
  var checkbox_ic_set_every_3 = this.getFieldValue('ic_set_every_3') == 'TRUE';
  var checkbox_ic_set_every_4 = this.getFieldValue('ic_set_every_4') == 'TRUE';
  var checkbox_ic_set_every_5 = this.getFieldValue('ic_set_every_5') == 'TRUE';
  var checkbox_ic_set_every_6 = this.getFieldValue('ic_set_every_6') == 'TRUE';
  var checkbox_ic_set_every_7 = this.getFieldValue('ic_set_every_7') == 'TRUE';
  var checkbox_ic_set_every_8 = this.getFieldValue('ic_set_every_8') == 'TRUE';
  var checkbox_ic_set_all = '';
  
  if(checkbox_ic_set_every_1)
  {
    checkbox_ic_set_every_1 = '1';
  }
  else
  {
    checkbox_ic_set_every_1 = '0';
  }

  if(checkbox_ic_set_every_2)
  {
    checkbox_ic_set_every_2 = '1';
  }
  else
  {
    checkbox_ic_set_every_2 = '0';
  }

  if(checkbox_ic_set_every_3)
  {
    checkbox_ic_set_every_3 = '1';
  }
  else
  {
    checkbox_ic_set_every_3 = '0';
  }

  if(checkbox_ic_set_every_4)
  {
    checkbox_ic_set_every_4 = '1';
  }
  else
  {
    checkbox_ic_set_every_4 = '0';
  }

  if(checkbox_ic_set_every_5)
  {
    checkbox_ic_set_every_5 = '1';
  }
  else
  {
    checkbox_ic_set_every_5 = '0';
  }

  if(checkbox_ic_set_every_6)
  {
    checkbox_ic_set_every_6 = '1';
  }
  else
  {
    checkbox_ic_set_every_6 = '0';
  }

  if(checkbox_ic_set_every_7)
  {
    checkbox_ic_set_every_7 = '1';
  }
  else
  {
    checkbox_ic_set_every_7 = '0';
  }

  if(checkbox_ic_set_every_8)
  {
    checkbox_ic_set_every_8 = '1';
  }
  else
  {
    checkbox_ic_set_every_8 = '0';
  }
  var code = '';
  var surround_parent = this.getSurroundParent();
  if(surround_parent)
  {
    checkbox_ic_set_all = checkbox_ic_set_every_1 + checkbox_ic_set_every_2 + checkbox_ic_set_every_3 + checkbox_ic_set_every_4 + checkbox_ic_set_every_5 + checkbox_ic_set_every_6 + checkbox_ic_set_every_7 + checkbox_ic_set_every_8;
    code = checkbox_ic_set_all;
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_tool_convert_bin_add = function() {
  // Create a list with any number of elements of any type.
  var dropdown_math_add_type = this.getFieldValue('math_add_type');
  var code = new Array(this.itemCount_);
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.Arduino.valueToCode(this, 'ADD' + n,
        Blockly.Arduino.ORDER_NONE) || '1';
  }
  
  var code1 = '';

  for(var n = 0; n < this.itemCount_; n++)
    code1 = code1 + code[n];
  return [code1, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_tool_convert_bin_add_1 = function() {
    var bin_add_data1 = Blockly.Arduino.valueToCode(this, 'bin_add_data1', Blockly.Arduino.ORDER_ATOMIC);
    var bin_add_data2 = Blockly.Arduino.valueToCode(this, 'bin_add_data2', Blockly.Arduino.ORDER_ATOMIC);
  var code = '';

  var surround_parent = this.getSurroundParent();
  if(surround_parent)
  {
    code = bin_add_data1 + bin_add_data2;
  }
  else
  {
    code = '';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//取模工具
Blockly.Arduino.make_tool_modulus = function() {
    var dropdown_bitmap_formats = this.getFieldValue('bitmap_formats');
    var dropdown_modulus_way = this.getFieldValue('modulus_way');
    var dropdown_modulus_direction = this.getFieldValue('modulus_direction');
    var dropdown_hz_sharp = this.getFieldValue('hz_sharp');
    var text_hz_line_height = this.getFieldValue('hz_line_height');
    var dropdown_hz_up_down = this.getFieldValue('hz_up_down');
    var text_hz_up_down_data = this.getFieldValue('hz_up_down_data');
    var dropdown_hz_left_right = this.getFieldValue('hz_left_right');
    var text_hz_left_right_data = this.getFieldValue('hz_left_right_data');
    var text_bitmap_width = this.getFieldValue('bitmap_width');
    var text_bitmap_height = this.getFieldValue('bitmap_height');
    var angle_bitmap_rotate = this.getFieldValue('bitmap_rotate');
    var checkbox_show_hz = this.getFieldValue('show_hz') == 'TRUE';
    var text_input_data = this.getFieldValue('input_data');
  
    var dropdown_hz_variant = 'normal';
    var dropdown_hz_style = 'normal';
    var dropdown_hz_thickness = 'normal';
    var fontSize_width=myAtoi(text_bitmap_width);
    var fontSize_height=myAtoi(text_bitmap_height);
    var bs=Math.ceil(fontSize_width/8);//每行占字节数

    var move_x = 0;
    var move_y = 0;
    if(dropdown_hz_up_down == "hz_down")
    {
      move_y = myAtoi(text_hz_up_down_data);
    }
    else
    {
      move_y = myAtoi("-"+text_hz_up_down_data);
    }

    if(dropdown_hz_left_right == "hz_right")
    {
      move_x = myAtoi(text_hz_left_right_data);
    }
    else
    {
      move_x = myAtoi("-"+text_hz_left_right_data);
    }
    canvas.width=fontSize_width;
    canvas.height=fontSize_height;
    ctx.font = dropdown_hz_style + ' ' + dropdown_hz_variant + ' ' + dropdown_hz_thickness + ' ' + text_hz_line_height + 'px ' + dropdown_hz_sharp;
    ctx.textAlign="left";
    ctx.textBaseline="top";

    var c = text_input_data;
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,fontSize_width,fontSize_height);//涂背景
    ctx.fillStyle="#ffffff";
    ctx.translate(fontSize_width/2,fontSize_height/2);
    ctx.rotate(Math.PI/180*(angle_bitmap_rotate-0));
    ctx.fillText(c,move_x-fontSize_width/2,move_y-fontSize_height/2);//写字
    var data=ctx.getImageData(0,0,fontSize_width,fontSize_height).data;//获取图像
    var zm=new Array(bs*fontSize_height);
    for(var i=0;i<zm.length;i++)zm[i]=0;//初始化字模数组
    for(var i=0;i<fontSize_height;i++)//读像素值组成字模数组
      for(var j=0;j<fontSize_width;j++)
        if(data[i*fontSize_width*4+j*4])zm[parseInt(j/8)+i*bs]+=bitArr[j%8];
    var outStr="";//将字模数组转化为十六进制形式
    for(var i=0;i<zm.length-1;i++)outStr+=toHex(zm[i])+",";
    outStr+=toHex(zm[i]);

    var zm1=new Array(bs*fontSize_height);
    var outstr1 = "";
    for(var i in zm)zm1[i] = zm[i].toString(2);
    for(var i in zm1)
    {
      var str = "";
      for(var j = 0;j<8-zm1[i].length;j++)str+="0";
      zm1[i] = str + zm1[i];
    }
    for(var i in zm1)outstr1+=zm1[i];

    var HZ_image = "";
    var num_hz = 0;
    for(var i = 0;i<fontSize_width;i++)
    {
      HZ_image+="--";
      if(i == (fontSize_width - 1))HZ_image+="\n|";
    }

    for(var data_hz of outstr1)
    {
      num_hz++;
      if(num_hz == outstr1.length)
      {
        HZ_image+="|\n";
      }
      else if(num_hz%(bs*8) < fontSize_width && num_hz%(bs*8) > 0)
      {
        if(data_hz == "0")HZ_image+="  ";
        else if(data_hz == "1")HZ_image+="0 ";
      } 
      else if(num_hz%(bs*8) == 0)
      {
        HZ_image+="|\n|";
      }
    }
    for(var i = 0;i<fontSize_width;i++)
    {
      HZ_image+="--";
    }
    HZ_image = "/*" + "\n" + HZ_image + "\n" + "*/";
    
    var hz_sharp = "";
    switch(dropdown_hz_sharp)
    {
      case "STHeiti":
        hz_sharp = "华文黑体";
        break;
      case "STKaiti":
        hz_sharp = "华文楷体";
        break;
      case "STXihei":
        hz_sharp = "华文细黑";
        break;
      case "STSong":
        hz_sharp = "华文宋体";
        break;
      case "STZhongsong":
        hz_sharp = "华文中宋";
        break;
      case "STFangsong":
        hz_sharp = "华文仿宋";
        break;
      case "STCaiyun":
        hz_sharp = "华文彩云";
        break;
      case "STHupo":
        hz_sharp = "华文琥珀";
        break;
      case "STLiti":
        hz_sharp = "华文隶书";
        break;
      case "STXingkai":
        hz_sharp = "华文行楷";
        break;
      case "STXinwei":
        hz_sharp = "华文新魏";
        break;
      case "simHei":
        hz_sharp = "黑体";
        break;
      case "simSun":
        hz_sharp = "宋体";
        break;
      case "NSimSun":
        hz_sharp = "新宋体";
        break;
      case "FangSong":
        hz_sharp = "仿宋";
        break;
      case "KaiTi":
        hz_sharp = "楷体";
        break;
      case "FangSong_GB2312":
        hz_sharp = "仿宋_GB2312";
        break;
      case "KaiTi_GB2312":
        hz_sharp = "楷体_GB2312";
        break;
      case "LiSu":
        hz_sharp = "隶书";
        break;
      case "YouYuan":
        hz_sharp = "幼圆";
        break;
      case "PMingLiU":
        hz_sharp = "新细明体";
        break;
      case "MingLiU":
        hz_sharp = "细明体";
        break;
      case "DFKai-SB":
        hz_sharp = "标楷体";
        break;
      case "Microsoft JhengHei":
        hz_sharp = "微软正黑体";
        break;
      case "Microsoft YaHei":
        hz_sharp = "微软雅黑体";
        break;
      default:
        hz_sharp = dropdown_hz_sharp;
        break;
    }
    hz_sharp = "字体：" + hz_sharp + "  字号：" + text_hz_line_height + "px" + "  显示文字：" + text_input_data + '\n' + HZ_image;

    var modulus_array = new Array();
    for(var i = 0;i < fontSize_height; i++)
    {
      modulus_array[i] = new Array();
      for(var j = 0;j < bs*8;j++)
      {
        modulus_array[i][j] = "";
      }
    }

    for(var i = 1;i <= fontSize_height; i++)
    {
      for(var j = 1;j <= bs*8;j++)
      {
        modulus_array[i-1][j-1] = outstr1.charAt((i-1)*bs*8 + j - 1);
      }
    }
    //取模方式
    //逐列式 - 1,逐行式 - 2,列行式 - 3,行列式 - 4

    //取模走向
    //顺向(高位在前) - 1,逆向(低位在前) - 2
    var bit_num = fontSize_height*bs;
    var modulus_data = "";
    var array_x = 0;
    var array_y = 0;
    var modulus_y = Math.ceil(fontSize_height/8);
    var modulus_x = Math.ceil(fontSize_width/8);
    
    //if(dropdown_modulus_direction == '1')
    //{
    //逐列式 - 1
    if(dropdown_modulus_way == '1')
    {
      bit_num = modulus_y*fontSize_width;
      for(var j = 1;j <= bit_num;j++)
      {
        for(var i = 1;i <= 8;i++)
        {
          if(j%modulus_y == 0)
            array_y = (modulus_y-1)*8 + i - 1;
          else
            array_y = (j%modulus_y-1)*8 + i - 1;
          
          array_x = Math.ceil(j/modulus_y) - 1;
          if(array_x > (fontSize_width - 1))
            break;
          if(array_y > (fontSize_height - 1))
          {
            if(dropdown_bitmap_formats == '1')
              modulus_data+="0";
            else
              modulus_data+="1";
            continue;
          }

          //modulus_data+=modulus_array[array_y][array_x];
          if(dropdown_bitmap_formats == '1')
            modulus_data+=modulus_array[array_y][array_x];
          else
          {
            if(modulus_array[array_y][array_x] == "0")
              modulus_data+="1";
            else
              modulus_data+="0";
          }
        }
        modulus_data+=",";
      }
    }
    //逐行式 - 2
    else if(dropdown_modulus_way == '2')
    {
      bit_num = modulus_x*fontSize_height;
      for(var j = 1;j <= bit_num;j++)
      {
        for(var i = 1;i <= 8;i++)
        {
          if(j%modulus_x == 0)
            array_x = (modulus_x-1)*8 + i - 1;
          else
            array_x = (j%modulus_x-1)*8 + i - 1;
          array_y = Math.ceil(j/modulus_x) - 1;

          //modulus_data+=modulus_array[array_y][array_x];
          if(dropdown_bitmap_formats == '1')
            modulus_data+=modulus_array[array_y][array_x];
          else
          {
            if(modulus_array[array_y][array_x] == "0")
              modulus_data+="1";
            else
              modulus_data+="0";
          }
        }
        modulus_data+=",";
      }
    }
    //列行式 - 3
    else if(dropdown_modulus_way == '3')
    {
      bit_num = modulus_y*fontSize_width;
      for(var j = 1;j <= bit_num;j++)
      {
        for(var i = 1;i <= 8;i++)
        {
          if(j%(modulus_x*8) == 0)
            array_x = modulus_x*8 - 1;
          else
            array_x = j%(modulus_x*8) - 1;
          array_y = (Math.ceil(j/(modulus_x*8)) - 1)*8 + i - 1;
          if(array_x > (fontSize_width - 1))
            break;
          if(array_y > (fontSize_height - 1))
          {
            if(dropdown_bitmap_formats == '1')
              modulus_data+="0";
            else
              modulus_data+="1";
            continue;
          }

          //modulus_data+=modulus_array[array_y][array_x];
          if(dropdown_bitmap_formats == '1')
            modulus_data+=modulus_array[array_y][array_x];
          else
          {
            if(modulus_array[array_y][array_x] == "0")
              modulus_data+="1";
            else
              modulus_data+="0";
          }
        }
        modulus_data+=",";
      }
    }
    //行列式 - 4
    else if(dropdown_modulus_way == '4')
    {
      bit_num = modulus_x*fontSize_height;
      for(var j = 1;j <= bit_num;j++)
      {
        for(var i = 1;i <= 8;i++)
        {
          if(j%fontSize_height == 0)
            array_y = fontSize_height - 1;
          else
            array_y = j%fontSize_height - 1;
          array_x = (Math.ceil(j/fontSize_height) - 1)*8 + i - 1;

          //modulus_data+=modulus_array[array_y][array_x];
          if(dropdown_bitmap_formats == '1')
            modulus_data+=modulus_array[array_y][array_x];
          else
          {
            if(modulus_array[array_y][array_x] == "0")
              modulus_data+="1";
            else
              modulus_data+="0";
          }
        }
        modulus_data+=",";
      }
    }
    //}
    var now_data = "";
    var end_data = "";
    if(dropdown_modulus_direction == 2)
    {
      for(var i of modulus_data)
      {
        if(i == ",")
        {
          end_data+=now_data;
          end_data+=",";
          now_data = "";
        }
        else
          now_data = i + now_data;
      }
      modulus_data = end_data;
    }

    now_data = "";
    end_data = "0x";
    for(var i of modulus_data)
    {
      if(i == ",")
      {
        end_data+=",0x";
        continue;
      }
      now_data+=i;
      if(now_data.length == 4)
      {
        end_data+=string_Bin_to_Hex(now_data);
        now_data = "";
      }
    }
    modulus_data = end_data;
    modulus_data = modulus_data.substring(0,modulus_data.length-3);
    
    if(checkbox_show_hz)
      Blockly.Arduino.definitions_['var_declare_tool_modulus_data_' + dropdown_hz_sharp + '_' + text_hz_line_height + 'px' + encodeUnicode(text_input_data)] = '//' + hz_sharp;
    
  var code = modulus_data;
  return code;
};

Blockly.Arduino.make_tool_modulus_1 = function() {
    var statements_modulus_data = Blockly.Arduino.statementToCode(this, 'modulus_data');
    var text_output_data = this.getFieldValue('output_data');
  var code = '';
  return code;
};
var img = new Image();
Blockly.Arduino.make_tool_modulus_2 = function() {
    var dropdown_bitmap_formats = this.getFieldValue('bitmap_formats');
    var dropdown_modulus_way = this.getFieldValue('modulus_way');
    var dropdown_modulus_direction = this.getFieldValue('modulus_direction');
    var dropdown_hz_sharp = this.getFieldValue('hz_sharp');
    var text_hz_line_height = this.getFieldValue('hz_line_height');
    var dropdown_hz_up_down = this.getFieldValue('hz_up_down');
    var text_hz_up_down_data = this.getFieldValue('hz_up_down_data');
    var dropdown_hz_left_right = this.getFieldValue('hz_left_right');
    var text_hz_left_right_data = this.getFieldValue('hz_left_right_data');
    var text_bitmap_width = this.getFieldValue('bitmap_width');
    var text_bitmap_height = this.getFieldValue('bitmap_height');
    var angle_bitmap_rotate = this.getFieldValue('bitmap_rotate');
    var checkbox_show_hz = this.getFieldValue('show_hz') == 'TRUE';
    var text_input_data = this.getFieldValue('input_data');
  
    var dropdown_hz_variant = 'normal';
    var dropdown_hz_style = 'normal';
    var dropdown_hz_thickness = 'normal';
    var fontSize_width=myAtoi(text_bitmap_width);
    var fontSize_height=myAtoi(text_bitmap_height);
    var bs=Math.ceil(fontSize_width/8);//每行占字节数

    var move_x = 0;
    var move_y = 0;
    if(dropdown_hz_up_down == "hz_down")
    {
      move_y = myAtoi(text_hz_up_down_data);
    }
    else
    {
      move_y = myAtoi("-"+text_hz_up_down_data);
    }

    if(dropdown_hz_left_right == "hz_right")
    {
      move_x = myAtoi(text_hz_left_right_data);
    }
    else
    {
      move_x = myAtoi("-"+text_hz_left_right_data);
    }
    canvas.width=fontSize_width;
    canvas.height=fontSize_height;
    ctx.font = dropdown_hz_style + ' ' + dropdown_hz_variant + ' ' + dropdown_hz_thickness + ' ' + text_hz_line_height + 'px ' + dropdown_hz_sharp;
    ctx.textAlign="left";
    ctx.textBaseline="top";

    
    //img.src = "/pcb.png";

    var c = text_input_data;

    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,fontSize_width,fontSize_height);//涂背景
    ctx.fillStyle="#ffffff";
    ctx.translate(fontSize_width/2,fontSize_height/2);
    ctx.rotate(Math.PI/180*(angle_bitmap_rotate-0));
    ctx.fillText(c,move_x-fontSize_width/2,move_y-fontSize_height/2);//写字
    //ctx.drawImage(img,0,0,100,100);//写字

    var data=ctx.getImageData(0,0,fontSize_width,fontSize_height).data;//获取图像
    var zm=new Array(bs*fontSize_height);
    for(var i=0;i<zm.length;i++)zm[i]=0;//初始化字模数组
    for(var i=0;i<fontSize_height;i++)//读像素值组成字模数组
      for(var j=0;j<fontSize_width;j++)
        if(data[i*fontSize_width*4+j*4])zm[parseInt(j/8)+i*bs]+=bitArr[j%8];
    var outStr="";//将字模数组转化为十六进制形式
    for(var i=0;i<zm.length-1;i++)outStr+=toHex(zm[i])+",";
    outStr+=toHex(zm[i]);

    var zm1=new Array(bs*fontSize_height);
    var outstr1 = "";
    for(var i in zm)zm1[i] = zm[i].toString(2);
    for(var i in zm1)
    {
      var str = "";
      for(var j = 0;j<8-zm1[i].length;j++)str+="0";
      zm1[i] = str + zm1[i];
    }
    for(var i in zm1)outstr1+=zm1[i];

    var HZ_image = "";
    var num_hz = 0;
    for(var i = 0;i<fontSize_width;i++)
    {
      HZ_image+="--";
      if(i == (fontSize_width - 1))HZ_image+="\n|";
    }

    for(var data_hz of outstr1)
    {
      num_hz++;
      if(num_hz == outstr1.length)
      {
        HZ_image+="|\n";
      }
      else if(num_hz%(bs*8) < fontSize_width && num_hz%(bs*8) > 0)
      {
        if(data_hz == "0")HZ_image+="  ";
        else if(data_hz == "1")HZ_image+="0 ";
      } 
      else if(num_hz%(bs*8) == 0)
      {
        HZ_image+="|\n|";
      }
    }
    for(var i = 0;i<fontSize_width;i++)
    {
      HZ_image+="--";
    }
    HZ_image = "/*" + "\n" + HZ_image + "\n" + "*/";
    
    var hz_sharp = "";
    switch(dropdown_hz_sharp)
    {
      case "STHeiti":
        hz_sharp = "华文黑体";
        break;
      case "STKaiti":
        hz_sharp = "华文楷体";
        break;
      case "STXihei":
        hz_sharp = "华文细黑";
        break;
      case "STSong":
        hz_sharp = "华文宋体";
        break;
      case "STZhongsong":
        hz_sharp = "华文中宋";
        break;
      case "STFangsong":
        hz_sharp = "华文仿宋";
        break;
      case "STCaiyun":
        hz_sharp = "华文彩云";
        break;
      case "STHupo":
        hz_sharp = "华文琥珀";
        break;
      case "STLiti":
        hz_sharp = "华文隶书";
        break;
      case "STXingkai":
        hz_sharp = "华文行楷";
        break;
      case "STXinwei":
        hz_sharp = "华文新魏";
        break;
      case "simHei":
        hz_sharp = "黑体";
        break;
      case "simSun":
        hz_sharp = "宋体";
        break;
      case "NSimSun":
        hz_sharp = "新宋体";
        break;
      case "FangSong":
        hz_sharp = "仿宋";
        break;
      case "KaiTi":
        hz_sharp = "楷体";
        break;
      case "FangSong_GB2312":
        hz_sharp = "仿宋_GB2312";
        break;
      case "KaiTi_GB2312":
        hz_sharp = "楷体_GB2312";
        break;
      case "LiSu":
        hz_sharp = "隶书";
        break;
      case "YouYuan":
        hz_sharp = "幼圆";
        break;
      case "PMingLiU":
        hz_sharp = "新细明体";
        break;
      case "MingLiU":
        hz_sharp = "细明体";
        break;
      case "DFKai-SB":
        hz_sharp = "标楷体";
        break;
      case "Microsoft JhengHei":
        hz_sharp = "微软正黑体";
        break;
      case "Microsoft YaHei":
        hz_sharp = "微软雅黑体";
        break;
      default:
        hz_sharp = dropdown_hz_sharp;
        break;
    }
    hz_sharp = "字体：" + hz_sharp + "  字号：" + text_hz_line_height + "px" + "  显示文字：" + text_input_data + '\n' + HZ_image;

    var modulus_array = new Array();
    for(var i = 0;i < fontSize_height; i++)
    {
      modulus_array[i] = new Array();
      for(var j = 0;j < bs*8;j++)
      {
        modulus_array[i][j] = "";
      }
    }

    for(var i = 1;i <= fontSize_height; i++)
    {
      for(var j = 1;j <= bs*8;j++)
      {
        modulus_array[i-1][j-1] = outstr1.charAt((i-1)*bs*8 + j - 1);
      }
    }
    //取模方式
    //逐列式 - 1,逐行式 - 2,列行式 - 3,行列式 - 4

    //取模走向
    //顺向(高位在前) - 1,逆向(低位在前) - 2
    var bit_num = fontSize_height*bs;
    var modulus_data = "";
    var array_x = 0;
    var array_y = 0;
    var modulus_y = Math.ceil(fontSize_height/8);
    var modulus_x = Math.ceil(fontSize_width/8);
    
    //if(dropdown_modulus_direction == '1')
    //{
    //逐列式 - 1
    if(dropdown_modulus_way == '1')
    {
      bit_num = modulus_y*fontSize_width;
      for(var j = 1;j <= bit_num;j++)
      {
        for(var i = 1;i <= 8;i++)
        {
          if(j%modulus_y == 0)
            array_y = (modulus_y-1)*8 + i - 1;
          else
            array_y = (j%modulus_y-1)*8 + i - 1;
          
          array_x = Math.ceil(j/modulus_y) - 1;
          if(array_x > (fontSize_width - 1))
            break;
          if(array_y > (fontSize_height - 1))
          {
            if(dropdown_bitmap_formats == '1')
              modulus_data+="0";
            else
              modulus_data+="1";
            continue;
          }

          //modulus_data+=modulus_array[array_y][array_x];
          if(dropdown_bitmap_formats == '1')
            modulus_data+=modulus_array[array_y][array_x];
          else
          {
            if(modulus_array[array_y][array_x] == "0")
              modulus_data+="1";
            else
              modulus_data+="0";
          }
        }
        modulus_data+=",";
      }
    }
    //逐行式 - 2
    else if(dropdown_modulus_way == '2')
    {
      bit_num = modulus_x*fontSize_height;
      for(var j = 1;j <= bit_num;j++)
      {
        for(var i = 1;i <= 8;i++)
        {
          if(j%modulus_x == 0)
            array_x = (modulus_x-1)*8 + i - 1;
          else
            array_x = (j%modulus_x-1)*8 + i - 1;
          array_y = Math.ceil(j/modulus_x) - 1;

          //modulus_data+=modulus_array[array_y][array_x];
          if(dropdown_bitmap_formats == '1')
            modulus_data+=modulus_array[array_y][array_x];
          else
          {
            if(modulus_array[array_y][array_x] == "0")
              modulus_data+="1";
            else
              modulus_data+="0";
          }
        }
        modulus_data+=",";
      }
    }
    //列行式 - 3
    else if(dropdown_modulus_way == '3')
    {
      bit_num = modulus_y*fontSize_width;
      for(var j = 1;j <= bit_num;j++)
      {
        for(var i = 1;i <= 8;i++)
        {
          if(j%(modulus_x*8) == 0)
            array_x = modulus_x*8 - 1;
          else
            array_x = j%(modulus_x*8) - 1;
          array_y = (Math.ceil(j/(modulus_x*8)) - 1)*8 + i - 1;
          if(array_x > (fontSize_width - 1))
            break;
          if(array_y > (fontSize_height - 1))
          {
            if(dropdown_bitmap_formats == '1')
              modulus_data+="0";
            else
              modulus_data+="1";
            continue;
          }

          //modulus_data+=modulus_array[array_y][array_x];
          if(dropdown_bitmap_formats == '1')
            modulus_data+=modulus_array[array_y][array_x];
          else
          {
            if(modulus_array[array_y][array_x] == "0")
              modulus_data+="1";
            else
              modulus_data+="0";
          }
        }
        modulus_data+=",";
      }
    }
    //行列式 - 4
    else if(dropdown_modulus_way == '4')
    {
      bit_num = modulus_x*fontSize_height;
      for(var j = 1;j <= bit_num;j++)
      {
        for(var i = 1;i <= 8;i++)
        {
          if(j%fontSize_height == 0)
            array_y = fontSize_height - 1;
          else
            array_y = j%fontSize_height - 1;
          array_x = (Math.ceil(j/fontSize_height) - 1)*8 + i - 1;

          //modulus_data+=modulus_array[array_y][array_x];
          if(dropdown_bitmap_formats == '1')
            modulus_data+=modulus_array[array_y][array_x];
          else
          {
            if(modulus_array[array_y][array_x] == "0")
              modulus_data+="1";
            else
              modulus_data+="0";
          }
        }
        modulus_data+=",";
      }
    }
    //}
    var now_data = "";
    var end_data = "";
    if(dropdown_modulus_direction == 2)
    {
      for(var i of modulus_data)
      {
        if(i == ",")
        {
          end_data+=now_data;
          end_data+=",";
          now_data = "";
        }
        else
          now_data = i + now_data;
      }
      modulus_data = end_data;
    }

    now_data = "";
    end_data = "0x";
    for(var i of modulus_data)
    {
      if(i == ",")
      {
        end_data+=",0x";
        continue;
      }
      now_data+=i;
      if(now_data.length == 4)
      {
        end_data+=string_Bin_to_Hex(now_data);
        now_data = "";
      }
    }
    modulus_data = end_data;
    modulus_data = modulus_data.substring(0,modulus_data.length-3);
    
    if(checkbox_show_hz)
      Blockly.Arduino.definitions_['var_declare_tool_modulus_data_' + dropdown_hz_sharp + '_' + text_hz_line_height + 'px' + encodeUnicode(text_input_data)] = '//' + hz_sharp;
    
  var code = modulus_data;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.lists_create_with_hz = function() {
  // Create a list with any number of elements of any type.
  this.setFieldValue(this.itemCount_,"y");
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  var X = this.getFieldValue('x');
  var Y = this.getFieldValue('y');
  var checkbox_save_hz = this.getFieldValue('save_hz') == 'TRUE';
  var code = new Array(this.itemCount_);
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = '{'+Blockly.Arduino.valueToCode(this, 'ADD' + n,
        Blockly.Arduino.ORDER_NONE)+'}';
  }

  var lists_data = code.join(',\n  ');
  var X_1 = 0;
  var X_1_old = 0;
  for(var i of lists_data)
  {
    if(i == '{')
    {
      X_1 = 0;
      continue;
    }
    else if(i == '}')
    {
      if(X_1_old < X_1)
        X_1_old = X_1;
    }
    else if(i == ',')
      X_1++;
  }
  X_1 = X_1_old + 1;

  this.setFieldValue(X_1,"x");
    
  if(checkbox_save_hz)
    Blockly.Arduino.definitions_['var_declare'+varName] = 'static const unsigned char PROGMEM '+varName+'['+Y+']'+'['+X_1+'] = '+ '{\n  ' + lists_data + '\n};';
  else
    Blockly.Arduino.definitions_['var_declare'+varName] = 'unsigned char '+varName+'['+Y+']'+'['+X_1+'] = '+ '{\n  ' + lists_data + '\n};';
  var code = '';
  return code;
};

Blockly.Arduino.lists_create_with_hz_1 = function() {
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  var X = this.getFieldValue('x');
  var checkbox_save_hz = this.getFieldValue('save_hz') == 'TRUE';
  var value_input = Blockly.Arduino.valueToCode(this, 'input_data', Blockly.Arduino.ORDER_ATOMIC);

  var X_1 = 0;
  for(var i of value_input)
  {
    if(i == ',')
      X_1++;
  }
  X_1++;

  this.setFieldValue(X_1,"x");
    
  if(checkbox_save_hz)
    Blockly.Arduino.definitions_['var_declare'+varName] = 'static const unsigned char PROGMEM '+varName+'['+X_1+'] = '+ '{' + value_input + '};';
  else
    Blockly.Arduino.definitions_['var_declare'+varName] = 'unsigned char '+varName+'['+X_1+'] = '+ '{' + value_input + '};';
  var code = '';
  return code;
};

//编码
function UnicodeChr(){
 return '00A4,00A7,00A8,00B0,00B1,00B7,00D7,00E0,00E1,00E8,00E9,00EA,00EC,00ED,00F2,00F3,00F7,00F9,00FA,00FC,0101,0113,011B,012B,014D,016B,01CE,01D0,01D2,01D4,01D6,01D8,01DA,01DC,02C7,02C9,0391,0392,0393,0394,0395,0396,0397,0398,0399,039A,039B,039C,039D,039E,039F,03A0,03A1,03A3,03A4,03A5,03A6,03A7,03A8,03A9,03B1,03B2,03B3,03B4,03B5,03B6,03B7,03B8,03B9,03BA,03BB,03BC,03BD,03BE,03BF,03C0,03C1,03C3,03C4,03C5,03C6,03C7,03C8,03C9,0401,0410,0411,0412,0413,0414,0415,0416,0417,0418,0419,041A,041B,041C,041D,041E,041F,0420,0421,0422,0423,0424,0425,0426,0427,0428,0429,042A,042B,042C,042D,042E,042F,0430,0431,0432,0433,0434,0435,0436,0437,0438,0439,043A,043B,043C,043D,043E,043F,0440,0441,0442,0443,0444,0445,0446,0447,0448,0449,044A,044B,044C,044D,044E,044F,0451,2014,2016,2018,2019,201C,201D,2026,2030,2032,2033,203B,2103,2116,2160,2161,2162,2163,2164,2165,2166,2167,2168,2169,216A,216B,2190,2191,2192,2193,2208,220F,2211,221A,221D,221E,2220,2225,2227,2228,2229,222A,222B,222E,2234,2235,2236,2237,223D,2248,224C,2260,2261,2264,2265,226E,226F,2299,22A5,2312,2460,2461,2462,2463,2464,2465,2466,2467,2468,2469,2474,2475,2476,2477,2478,2479,247A,247B,247C,247D,247E,247F,2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,248A,248B,248C,248D,248E,248F,2490,2491,2492,2493,2494,2495,2496,2497,2498,2499,249A,249B,2500,2501,2502,2503,2504,2505,2506,2507,2508,2509,250A,250B,250C,250D,250E,250F,2510,2511,2512,2513,2514,2515,2516,2517,2518,2519,251A,251B,251C,251D,251E,251F,2520,2521,2522,2523,2524,2525,2526,2527,2528,2529,252A,252B,252C,252D,252E,252F,2530,2531,2532,2533,2534,2535,2536,2537,2538,2539,253A,253B,253C,253D,253E,253F,2540,2541,2542,2543,2544,2545,2546,2547,2548,2549,254A,254B,25A0,25A1,25B2,25B3,25C6,25C7,25CB,25CE,25CF,2605,2606,2640,2642,3000,3001,3002,3003,3005,3008,3009,300A,300B,300C,300D,300E,300F,3010,3011,3013,3014,3015,3016,3017,3041,3042,3043,3044,3045,3046,3047,3048,3049,304A,304B,304C,304D,304E,304F,3050,3051,3052,3053,3054,3055,3056,3057,3058,3059,305A,305B,305C,305D,305E,305F,3060,3061,3062,3063,3064,3065,3066,3067,3068,3069,306A,306B,306C,306D,306E,306F,3070,3071,3072,3073,3074,3075,3076,3077,3078,3079,307A,307B,307C,307D,307E,307F,3080,3081,3082,3083,3084,3085,3086,3087,3088,3089,308A,308B,308C,308D,308E,308F,3090,3091,3092,3093,30A1,30A2,30A3,30A4,30A5,30A6,30A7,30A8,30A9,30AA,30AB,30AC,30AD,30AE,30AF,30B0,30B1,30B2,30B3,30B4,30B5,30B6,30B7,30B8,30B9,30BA,30BB,30BC,30BD,30BE,30BF,30C0,30C1,30C2,30C3,30C4,30C5,30C6,30C7,30C8,30C9,30CA,30CB,30CC,30CD,30CE,30CF,30D0,30D1,30D2,30D3,30D4,30D5,30D6,30D7,30D8,30D9,30DA,30DB,30DC,30DD,30DE,30DF,30E0,30E1,30E2,30E3,30E4,30E5,30E6,30E7,30E8,30E9,30EA,30EB,30EC,30ED,30EE,30EF,30F0,30F1,30F2,30F3,30F4,30F5,30F6,3105,3106,3107,3108,3109,310A,310B,310C,310D,310E,310F,3110,3111,3112,3113,3114,3115,3116,3117,3118,3119,311A,311B,311C,311D,311E,311F,3120,3121,3122,3123,3124,3125,3126,3127,3128,3129,3220,3221,3222,3223,3224,3225,3226,3227,3228,3229,4E00,4E01,4E03,4E07,4E08,4E09,4E0A,4E0B,4E0C,4E0D,4E0E,4E10,4E11,4E13,4E14,4E15,4E16,4E18,4E19,4E1A,4E1B,4E1C,4E1D,4E1E,4E22,4E24,4E25,4E27,4E28,4E2A,4E2B,4E2C,4E2D,4E30,4E32,4E34,4E36,4E38,4E39,4E3A,4E3B,4E3D,4E3E,4E3F,4E43,4E45,4E47,4E48,4E49,4E4B,4E4C,4E4D,4E4E,4E4F,4E50,4E52,4E53,4E54,4E56,4E58,4E59,4E5C,4E5D,4E5E,4E5F,4E60,4E61,4E66,4E69,4E70,4E71,4E73,4E7E,4E86,4E88,4E89,4E8B,4E8C,4E8D,4E8E,4E8F,4E91,4E92,4E93,4E94,4E95,4E98,4E9A,4E9B,4E9F,4EA0,4EA1,4EA2,4EA4,4EA5,4EA6,4EA7,4EA8,4EA9,4EAB,4EAC,4EAD,4EAE,4EB2,4EB3,4EB5,4EBA,4EBB,4EBF,4EC0,4EC1,4EC2,4EC3,4EC4,4EC5,4EC6,4EC7,4EC9,4ECA,4ECB,4ECD,4ECE,4ED1,4ED3,4ED4,4ED5,4ED6,4ED7,4ED8,4ED9,4EDD,4EDE,4EDF,4EE1,4EE3,4EE4,4EE5,4EE8,4EEA,4EEB,4EEC,4EF0,4EF2,4EF3,4EF5,4EF6,4EF7,4EFB,4EFD,4EFF,4F01,4F09,4F0A,4F0D,4F0E,4F0F,4F10,4F11,4F17,4F18,4F19,4F1A,4F1B,4F1E,4F1F,4F20,4F22,4F24,4F25,4F26,4F27,4F2A,4F2B,4F2F,4F30,4F32,4F34,4F36,4F38,4F3A,4F3C,4F3D,4F43,4F46,4F4D,4F4E,4F4F,4F50,4F51,4F53,4F55,4F57,4F58,4F59,4F5A,4F5B,4F5C,4F5D,4F5E,4F5F,4F60,4F63,4F64,4F65,4F67,4F69,4F6C,4F6F,4F70,4F73,4F74,4F76,4F7B,4F7C,4F7E,4F7F,4F83,4F84,4F88,4F89,4F8B,4F8D,4F8F,4F91,4F94,4F97,4F9B,4F9D,4FA0,4FA3,4FA5,4FA6,4FA7,4FA8,4FA9,4FAA,4FAC,4FAE,4FAF,4FB5,4FBF,4FC3,4FC4,4FC5,4FCA,4FCE,4FCF,4FD0,4FD1,4FD7,4FD8,4FDA,4FDC,4FDD,4FDE,4FDF,4FE1,4FE3,4FE6,4FE8,4FE9,4FEA,4FED,4FEE,4FEF,4FF1,4FF3,4FF8,4FFA,4FFE,500C,500D,500F,5012,5014,5018,5019,501A,501C,501F,5021,5025,5026,5028,5029,502A,502C,502D,502E,503A,503C,503E,5043,5047,5048,504C,504E,504F,5055,505A,505C,5065,506C,5076,5077,507B,507E,507F,5080,5085,5088,508D,50A3,50A5,50A7,50A8,50A9,50AC,50B2,50BA,50BB,50CF,50D6,50DA,50E6,50E7,50EC,50ED,50EE,50F3,50F5,50FB,5106,5107,510B,5112,5121,513F,5140,5141,5143,5144,5145,5146,5148,5149,514B,514D,5151,5154,5155,5156,515A,515C,5162,5165,5168,516B,516C,516D,516E,5170,5171,5173,5174,5175,5176,5177,5178,5179,517B,517C,517D,5180,5181,5182,5185,5188,5189,518C,518D,5192,5195,5196,5197,5199,519B,519C,51A0,51A2,51A4,51A5,51AB,51AC,51AF,51B0,51B1,51B2,51B3,51B5,51B6,51B7,51BB,51BC,51BD,51C0,51C4,51C6,51C7,51C9,51CB,51CC,51CF,51D1,51DB,51DD,51E0,51E1,51E4,51EB,51ED,51EF,51F0,51F3,51F5,51F6,51F8,51F9,51FA,51FB,51FC,51FD,51FF,5200,5201,5202,5203,5206,5207,5208,520A,520D,520E,5211,5212,5216,5217,5218,5219,521A,521B,521D,5220,5224,5228,5229,522B,522D,522E,5230,5233,5236,5237,5238,5239,523A,523B,523D,523F,5240,5241,5242,5243,524A,524C,524D,5250,5251,5254,5256,525C,525E,5261,5265,5267,5269,526A,526F,5272,527D,527F,5281,5282,5288,5290,5293,529B,529D,529E,529F,52A0,52A1,52A2,52A3,52A8,52A9,52AA,52AB,52AC,52AD,52B1,52B2,52B3,52BE,52BF,52C3,52C7,52C9,52CB,52D0,52D2,52D6,52D8,52DF,52E4,52F0,52F9,52FA,52FE,52FF,5300,5305,5306,5308,530D,530F,5310,5315,5316,5317,5319,531A,531D,5320,5321,5323,5326,532A,532E,5339,533A,533B,533E,533F,5341,5343,5345,5347,5348,5349,534A,534E,534F,5351,5352,5353,5355,5356,5357,535A,535C,535E,535F,5360,5361,5362,5363,5364,5366,5367,5369,536B,536E,536F,5370,5371,5373,5374,5375,5377,5378,537A,537F,5382,5384,5385,5386,5389,538B,538C,538D,5395,5398,539A,539D,539F,53A2,53A3,53A5,53A6,53A8,53A9,53AE,53B6,53BB,53BF,53C1,53C2,53C8,53C9,53CA,53CB,53CC,53CD,53D1,53D4,53D6,53D7,53D8,53D9,53DB,53DF,53E0,53E3,53E4,53E5,53E6,53E8,53E9,53EA,53EB,53EC,53ED,53EE,53EF,53F0,53F1,53F2,53F3,53F5,53F6,53F7,53F8,53F9,53FB,53FC,53FD,5401,5403,5404,5406,5408,5409,540A,540C,540D,540E,540F,5410,5411,5412,5413,5415,5416,5417,541B,541D,541E,541F,5420,5421,5423,5426,5427,5428,5429,542B,542C,542D,542E,542F,5431,5432,5434,5435,5438,5439,543B,543C,543E,5440,5443,5446,5448,544A,544B,5450,5452,5453,5454,5455,5456,5457,5458,5459,545B,545C,5462,5464,5466,5468,5471,5472,5473,5475,5476,5477,5478,547B,547C,547D,5480,5482,5484,5486,548B,548C,548E,548F,5490,5492,5494,5495,5496,5499,549A,549B,549D,54A3,54A4,54A6,54A7,54A8,54A9,54AA,54AB,54AC,54AD,54AF,54B1,54B3,54B4,54B8,54BB,54BD,54BF,54C0,54C1,54C2,54C4,54C6,54C7,54C8,54C9,54CC,54CD,54CE,54CF,54D0,54D1,54D2,54D3,54D4,54D5,54D7,54D9,54DA,54DC,54DD,54DE,54DF,54E5,54E6,54E7,54E8,54E9,54EA,54ED,54EE,54F2,54F3,54FA,54FC,54FD,54FF,5501,5506,5507,5509,550F,5510,5511,5514,551B,5520,5522,5523,5524,5527,552A,552C,552E,552F,5530,5531,5533,5537,553C,553E,553F,5541,5543,5544,5546,5549,554A,5550,5555,5556,555C,5561,5564,5565,5566,5567,556A,556C,556D,556E,5575,5576,5577,5578,557B,557C,557E,5580,5581,5582,5583,5584,5587,5588,5589,558A,558B,558F,5591,5594,5598,5599,559C,559D,559F,55A7,55B1,55B3,55B5,55B7,55B9,55BB,55BD,55BE,55C4,55C5,55C9,55CC,55CD,55D1,55D2,55D3,55D4,55D6,55DC,55DD,55DF,55E1,55E3,55E4,55E5,55E6,55E8,55EA,55EB,55EC,55EF,55F2,55F3,55F5,55F7,55FD,55FE,5600,5601,5608,5609,560C,560E,560F,5618,561B,561E,561F,5623,5624,5627,562C,562D,5631,5632,5634,5636,5639,563B,563F,564C,564D,564E,5654,5657,5658,5659,565C,5662,5664,5668,5669,566A,566B,566C,5671,5676,567B,567C,5685,5686,568E,568F,5693,56A3,56AF,56B7,56BC,56CA,56D4,56D7,56DA,56DB,56DD,56DE,56DF,56E0,56E1,56E2,56E4,56EB,56ED,56F0,56F1,56F4,56F5,56F9,56FA,56FD,56FE,56FF,5703,5704,5706,5708,5709,570A,571C,571F,5723,5728,5729,572A,572C,572D,572E,572F,5730,5733,5739,573A,573B,573E,5740,5742,5747,574A,574C,574D,574E,574F,5750,5751,5757,575A,575B,575C,575D,575E,575F,5760,5761,5764,5766,5768,5769,576A,576B,576D,576F,5773,5776,5777,577B,577C,5782,5783,5784,5785,5786,578B,578C,5792,5793,579B,57A0,57A1,57A2,57A3,57A4,57A6,57A7,57A9,57AB,57AD,57AE,57B2,57B4,57B8,57C2,57C3,57CB,57CE,57CF,57D2,57D4,57D5,57D8,57D9,57DA,57DD,57DF,57E0,57E4,57ED,57EF,57F4,57F8,57F9,57FA,57FD,5800,5802,5806,5807,580B,580D,5811,5815,5819,581E,5820,5821,5824,582A,5830,5835,5844,584C,584D,5851,5854,5858,585E,5865,586B,586C,587E,5880,5881,5883,5885,5889,5892,5893,5899,589A,589E,589F,58A8,58A9,58BC,58C1,58C5,58D1,58D5,58E4,58EB,58EC,58EE,58F0,58F3,58F6,58F9,5902,5904,5907,590D,590F,5914,5915,5916,5919,591A,591C,591F,5924,5925,5927,5929,592A,592B,592D,592E,592F,5931,5934,5937,5938,5939,593A,593C,5941,5942,5944,5947,5948,5949,594B,594E,594F,5951,5954,5955,5956,5957,5958,595A,5960,5962,5965,5973,5974,5976,5978,5979,597D,5981,5982,5983,5984,5986,5987,5988,598A,598D,5992,5993,5996,5997,5999,599E,59A3,59A4,59A5,59A8,59A9,59AA,59AB,59AE,59AF,59B2,59B9,59BB,59BE,59C6,59CA,59CB,59D0,59D1,59D2,59D3,59D4,59D7,59D8,59DA,59DC,59DD,59E3,59E5,59E8,59EC,59F9,59FB,59FF,5A01,5A03,5A04,5A05,5A06,5A07,5A08,5A09,5A0C,5A11,5A13,5A18,5A1C,5A1F,5A20,5A23,5A25,5A29,5A31,5A32,5A34,5A36,5A3C,5A40,5A46,5A49,5A4A,5A55,5A5A,5A62,5A67,5A6A,5A74,5A75,5A76,5A77,5A7A,5A7F,5A92,5A9A,5A9B,5AAA,5AB2,5AB3,5AB5,5AB8,5ABE,5AC1,5AC2,5AC9,5ACC,5AD2,5AD4,5AD6,5AD8,5ADC,5AE0,5AE1,5AE3,5AE6,5AE9,5AEB,5AF1,5B09,5B16,5B17,5B32,5B34,5B37,5B40,5B50,5B51,5B53,5B54,5B55,5B57,5B58,5B59,5B5A,5B5B,5B5C,5B5D,5B5F,5B62,5B63,5B64,5B65,5B66,5B69,5B6A,5B6C,5B70,5B71,5B73,5B75,5B7A,5B7D,5B80,5B81,5B83,5B84,5B85,5B87,5B88,5B89,5B8B,5B8C,5B8F,5B93,5B95,5B97,5B98,5B99,5B9A,5B9B,5B9C,5B9D,5B9E,5BA0,5BA1,5BA2,5BA3,5BA4,5BA5,5BA6,5BAA,5BAB,5BB0,5BB3,5BB4,5BB5,5BB6,5BB8,5BB9,5BBD,5BBE,5BBF,5BC2,5BC4,5BC5,5BC6,5BC7,5BCC,5BD0,5BD2,5BD3,5BDD,5BDE,5BDF,5BE1,5BE4,5BE5,5BE8,5BEE,5BF0,5BF8,5BF9,5BFA,5BFB,5BFC,5BFF,5C01,5C04,5C06,5C09,5C0A,5C0F,5C11,5C14,5C15,5C16,5C18,5C1A,5C1C,5C1D,5C22,5C24,5C25,5C27,5C2C,5C31,5C34,5C38,5C39,5C3A,5C3B,5C3C,5C3D,5C3E,5C3F,5C40,5C41,5C42,5C45,5C48,5C49,5C4A,5C4B,5C4E,5C4F,5C50,5C51,5C55,5C59,5C5E,5C60,5C61,5C63,5C65,5C66,5C6E,5C6F,5C71,5C79,5C7A,5C7F,5C81,5C82,5C88,5C8C,5C8D,5C90,5C91,5C94,5C96,5C97,5C98,5C99,5C9A,5C9B,5C9C,5CA2,5CA3,5CA9,5CAB,5CAC,5CAD,5CB1,5CB3,5CB5,5CB7,5CB8,5CBD,5CBF,5CC1,5CC4,5CCB,5CD2,5CD9,5CE1,5CE4,5CE5,5CE6,5CE8,5CEA,5CED,5CF0,5CFB,5D02,5D03,5D06,5D07,5D0E,5D14,5D16,5D1B,5D1E,5D24,5D26,5D27,5D29,5D2D,5D2E,5D34,5D3D,5D3E,5D47,5D4A,5D4B,5D4C,5D58,5D5B,5D5D,5D69,5D6B,5D6C,5D6F,5D74,5D82,5D99,5D9D,5DB7,5DC5,5DCD,5DDB,5DDD,5DDE,5DE1,5DE2,5DE5,5DE6,5DE7,5DE8,5DE9,5DEB,5DEE,5DEF,5DF1,5DF2,5DF3,5DF4,5DF7,5DFD,5DFE,5E01,5E02,5E03,5E05,5E06,5E08,5E0C,5E0F,5E10,5E11,5E14,5E15,5E16,5E18,5E19,5E1A,5E1B,5E1C,5E1D,5E26,5E27,5E2D,5E2E,5E31,5E37,5E38,5E3B,5E3C,5E3D,5E42,5E44,5E45,5E4C,5E54,5E55,5E5B,5E5E,5E61,5E62,5E72,5E73,5E74,5E76,5E78,5E7A,5E7B,5E7C,5E7D,5E7F,5E80,5E84,5E86,5E87,5E8A,5E8B,5E8F,5E90,5E91,5E93,5E94,5E95,5E96,5E97,5E99,5E9A,5E9C,5E9E,5E9F,5EA0,5EA5,5EA6,5EA7,5EAD,5EB3,5EB5,5EB6,5EB7,5EB8,5EB9,5EBE,5EC9,5ECA,5ED1,5ED2,5ED3,5ED6,5EDB,5EE8,5EEA,5EF4,5EF6,5EF7,5EFA,5EFE,5EFF,5F00,5F01,5F02,5F03,5F04,5F08,5F0A,5F0B,5F0F,5F11,5F13,5F15,5F17,5F18,5F1B,5F1F,5F20,5F25,5F26,5F27,5F29,5F2A,5F2D,5F2F,5F31,5F39,5F3A,5F3C,5F40,5F50,5F52,5F53,5F55,5F56,5F57,5F58,5F5D,5F61,5F62,5F64,5F66,5F69,5F6A,5F6C,5F6D,5F70,5F71,5F73,5F77,5F79,5F7B,5F7C,5F80,5F81,5F82,5F84,5F85,5F87,5F88,5F89,5F8A,5F8B,5F8C,5F90,5F92,5F95,5F97,5F98,5F99,5F9C,5FA1,5FA8,5FAA,5FAD,5FAE,5FB5,5FB7,5FBC,5FBD,5FC3,5FC4,5FC5,5FC6,5FC9,5FCC,5FCD,5FCF,5FD0,5FD1,5FD2,5FD6,5FD7,5FD8,5FD9,5FDD,5FE0,5FE1,5FE4,5FE7,5FEA,5FEB,5FED,5FEE,5FF1,5FF5,5FF8,5FFB,5FFD,5FFE,5FFF,6000,6001,6002,6003,6004,6005,6006,600A,600D,600E,600F,6012,6014,6015,6016,6019,601B,601C,601D,6020,6021,6025,6026,6027,6028,6029,602A,602B,602F,6035,603B,603C,603F,6041,6042,6043,604B,604D,6050,6052,6055,6059,605A,605D,6062,6063,6064,6067,6068,6069,606A,606B,606C,606D,606F,6070,6073,6076,6078,6079,607A,607B,607C,607D,607F,6083,6084,6089,608C,608D,6092,6094,6096,609A,609B,609D,609F,60A0,60A3,60A6,60A8,60AB,60AC,60AD,60AF,60B1,60B2,60B4,60B8,60BB,60BC,60C5,60C6,60CA,60CB,60D1,60D5,60D8,60DA,60DC,60DD,60DF,60E0,60E6,60E7,60E8,60E9,60EB,60EC,60ED,60EE,60EF,60F0,60F3,60F4,60F6,60F9,60FA,6100,6101,6106,6108,6109,610D,610E,610F,6115,611A,611F,6120,6123,6124,6126,6127,612B,613F,6148,614A,614C,614E,6151,6155,615D,6162,6167,6168,6170,6175,6177,618B,618E,6194,619D,61A7,61A8,61A9,61AC,61B7,61BE,61C2,61C8,61CA,61CB,61D1,61D2,61D4,61E6,61F5,61FF,6206,6208,620A,620B,620C,620D,620E,620F,6210,6211,6212,6215,6216,6217,6218,621A,621B,621F,6221,6222,6224,6225,622A,622C,622E,6233,6234,6237,623D,623E,623F,6240,6241,6243,6247,6248,6249,624B,624C,624D,624E,6251,6252,6253,6254,6258,625B,6263,6266,6267,6269,626A,626B,626C,626D,626E,626F,6270,6273,6276,6279,627C,627E,627F,6280,6284,6289,628A,6291,6292,6293,6295,6296,6297,6298,629A,629B,629F,62A0,62A1,62A2,62A4,62A5,62A8,62AB,62AC,62B1,62B5,62B9,62BB,62BC,62BD,62BF,62C2,62C4,62C5,62C6,62C7,62C8,62C9,62CA,62CC,62CD,62CE,62D0,62D2,62D3,62D4,62D6,62D7,62D8,62D9,62DA,62DB,62DC,62DF,62E2,62E3,62E5,62E6,62E7,62E8,62E9,62EC,62ED,62EE,62EF,62F1,62F3,62F4,62F6,62F7,62FC,62FD,62FE,62FF,6301,6302,6307,6308,6309,630E,6311,6316,631A,631B,631D,631E,631F,6320,6321,6322,6323,6324,6325,6328,632A,632B,632F,6332,6339,633A,633D,6342,6343,6345,6346,6349,634B,634C,634D,634E,634F,6350,6355,635E,635F,6361,6362,6363,6367,6369,636D,636E,6371,6376,6377,637A,637B,6380,6382,6387,6388,6389,638A,638C,638E,638F,6390,6392,6396,6398,63A0,63A2,63A3,63A5,63A7,63A8,63A9,63AA,63AC,63AD,63AE,63B0,63B3,63B4,63B7,63B8,63BA,63BC,63BE,63C4,63C6,63C9,63CD,63CE,63CF,63D0,63D2,63D6,63DE,63E0,63E1,63E3,63E9,63EA,63ED,63F2,63F4,63F6,63F8,63FD,63FF,6400,6401,6402,6405,640B,640C,640F,6410,6413,6414,641B,641C,641E,6420,6421,6426,642A,642C,642D,6434,643A,643D,643F,6441,6444,6445,6446,6447,6448,644A,6452,6454,6458,645E,6467,6469,646D,6478,6479,647A,6482,6484,6485,6487,6491,6492,6495,6496,6499,649E,64A4,64A9,64AC,64AD,64AE,64B0,64B5,64B7,64B8,64BA,64BC,64C0,64C2,64C5,64CD,64CE,64D0,64D2,64D7,64D8,64DE,64E2,64E4,64E6,6500,6509,6512,6518,6525,652B,652E,652F,6534,6535,6536,6538,6539,653B,653E,653F,6545,6548,6549,654C,654F,6551,6555,6556,6559,655B,655D,655E,6562,6563,6566,656B,656C,6570,6572,6574,6577,6587,658B,658C,6590,6591,6593,6597,6599,659B,659C,659F,65A1,65A4,65A5,65A7,65A9,65AB,65AD,65AF,65B0,65B9,65BC,65BD,65C1,65C3,65C4,65C5,65C6,65CB,65CC,65CE,65CF,65D2,65D6,65D7,65E0,65E2,65E5,65E6,65E7,65E8,65E9,65EC,65ED,65EE,65EF,65F0,65F1,65F6,65F7,65FA,6600,6602,6603,6606,660A,660C,660E,660F,6613,6614,6615,6619,661D,661F,6620,6625,6627,6628,662D,662F,6631,6634,6635,6636,663C,663E,6641,6643,664B,664C,664F,6652,6653,6654,6655,6656,6657,665A,665F,6661,6664,6666,6668,666E,666F,6670,6674,6676,6677,667A,667E,6682,6684,6687,668C,6691,6696,6697,669D,66A7,66A8,66AE,66B4,66B9,66BE,66D9,66DB,66DC,66DD,66E6,66E9,66F0,66F2,66F3,66F4,66F7,66F9,66FC,66FE,66FF,6700,6708,6709,670A,670B,670D,6710,6714,6715,6717,671B,671D,671F,6726,6728,672A,672B,672C,672D,672F,6731,6734,6735,673A,673D,6740,6742,6743,6746,6748,6749,674C,674E,674F,6750,6751,6753,6756,675C,675E,675F,6760,6761,6765,6768,6769,676A,676D,676F,6770,6772,6773,6775,6777,677C,677E,677F,6781,6784,6787,6789,678B,6790,6795,6797,6798,679A,679C,679D,679E,67A2,67A3,67A5,67A7,67A8,67AA,67AB,67AD,67AF,67B0,67B3,67B5,67B6,67B7,67B8,67C1,67C3,67C4,67CF,67D0,67D1,67D2,67D3,67D4,67D8,67D9,67DA,67DC,67DD,67DE,67E0,67E2,67E5,67E9,67EC,67EF,67F0,67F1,67F3,67F4,67FD,67FF,6800,6805,6807,6808,6809,680A,680B,680C,680E,680F,6811,6813,6816,6817,681D,6821,6829,682A,6832,6833,6837,6838,6839,683C,683D,683E,6840,6841,6842,6843,6844,6845,6846,6848,6849,684A,684C,684E,6850,6851,6853,6854,6855,6860,6861,6862,6863,6864,6865,6866,6867,6868,6869,686B,6874,6876,6877,6881,6883,6885,6886,688F,6893,6897,68A2,68A6,68A7,68A8,68AD,68AF,68B0,68B3,68B5,68C0,68C2,68C9,68CB,68CD,68D2,68D5,68D8,68DA,68E0,68E3,68EE,68F0,68F1,68F5,68F9,68FA,68FC,6901,6905,690B,690D,690E,6910,6912,691F,6920,6924,692D,6930,6934,6939,693D,693F,6942,6954,6957,695A,695D,695E,6960,6963,6966,696B,696E,6971,6977,6978,6979,697C,6980,6982,6984,6986,6987,6988,6989,698D,6994,6995,6998,699B,699C,69A7,69A8,69AB,69AD,69B1,69B4,69B7,69BB,69C1,69CA,69CC,69CE,69D0,69D4,69DB,69DF,69E0,69ED,69F2,69FD,69FF,6A0A,6A17,6A18,6A1F,6A21,6A28,6A2A,6A2F,6A31,6A35,6A3D,6A3E,6A44,6A47,6A50,6A58,6A59,6A5B,6A61,6A65,6A71,6A79,6A7C,6A80,6A84,6A8E,6A90,6A91,6A97,6AA0,6AA9,6AAB,6AAC,6B20,6B21,6B22,6B23,6B24,6B27,6B32,6B37,6B39,6B3A,6B3E,6B43,6B46,6B47,6B49,6B4C,6B59,6B62,6B63,6B64,6B65,6B66,6B67,6B6A,6B79,6B7B,6B7C,6B81,6B82,6B83,6B84,6B86,6B87,6B89,6B8A,6B8B,6B8D,6B92,6B93,6B96,6B9A,6B9B,6BA1,6BAA,6BB3,6BB4,6BB5,6BB7,6BBF,6BC1,6BC2,6BC5,6BCB,6BCD,6BCF,6BD2,6BD3,6BD4,6BD5,6BD6,6BD7,6BD9,6BDB,6BE1,6BEA,6BEB,6BEF,6BF3,6BF5,6BF9,6BFD,6C05,6C06,6C07,6C0D,6C0F,6C10,6C11,6C13,6C14,6C15,6C16,6C18,6C19,6C1A,6C1B,6C1F,6C21,6C22,6C24,6C26,6C27,6C28,6C29,6C2A,6C2E,6C2F,6C30,6C32,6C34,6C35,6C38,6C3D,6C40,6C41,6C42,6C46,6C47,6C49,6C4A,6C50,6C54,6C55,6C57,6C5B,6C5C,6C5D,6C5E,6C5F,6C60,6C61,6C64,6C68,6C69,6C6A,6C70,6C72,6C74,6C76,6C79,6C7D,6C7E,6C81,6C82,6C83,6C85,6C86,6C88,6C89,6C8C,6C8F,6C90,6C93,6C94,6C99,6C9B,6C9F,6CA1,6CA3,6CA4,6CA5,6CA6,6CA7,6CA9,6CAA,6CAB,6CAD,6CAE,6CB1,6CB2,6CB3,6CB8,6CB9,6CBB,6CBC,6CBD,6CBE,6CBF,6CC4,6CC5,6CC9,6CCA,6CCC,6CD0,6CD3,6CD4,6CD5,6CD6,6CD7,6CDB,6CDE,6CE0,6CE1,6CE2,6CE3,6CE5,6CE8,6CEA,6CEB,6CEE,6CEF,6CF0,6CF1,6CF3,6CF5,6CF6,6CF7,6CF8,6CFA,6CFB,6CFC,6CFD,6CFE,6D01,6D04,6D07,6D0B,6D0C,6D0E,6D12,6D17,6D19,6D1A,6D1B,6D1E,6D25,6D27,6D2A,6D2B,6D2E,6D31,6D32,6D33,6D35,6D39,6D3B,6D3C,6D3D,6D3E,6D41,6D43,6D45,6D46,6D47,6D48,6D4A,6D4B,6D4D,6D4E,6D4F,6D51,6D52,6D53,6D54,6D59,6D5A,6D5C,6D5E,6D60,6D63,6D66,6D69,6D6A,6D6E,6D6F,6D74,6D77,6D78,6D7C,6D82,6D85,6D88,6D89,6D8C,6D8E,6D91,6D93,6D94,6D95,6D9B,6D9D,6D9E,6D9F,6DA0,6DA1,6DA3,6DA4,6DA6,6DA7,6DA8,6DA9,6DAA,6DAB,6DAE,6DAF,6DB2,6DB5,6DB8,6DBF,6DC0,6DC4,6DC5,6DC6,6DC7,6DCB,6DCC,6DD1,6DD6,6DD8,6DD9,6DDD,6DDE,6DE0,6DE1,6DE4,6DE6,6DEB,6DEC,6DEE,6DF1,6DF3,6DF7,6DF9,6DFB,6DFC,6E05,6E0A,6E0C,6E0D,6E0E,6E10,6E11,6E14,6E16,6E17,6E1A,6E1D,6E20,6E21,6E23,6E24,6E25,6E29,6E2B,6E2D,6E2F,6E32,6E34,6E38,6E3A,6E43,6E44,6E4D,6E4E,6E53,6E54,6E56,6E58,6E5B,6E5F,6E6B,6E6E,6E7E,6E7F,6E83,6E85,6E86,6E89,6E8F,6E90,6E98,6E9C,6E9F,6EA2,6EA5,6EA7,6EAA,6EAF,6EB1,6EB2,6EB4,6EB6,6EB7,6EBA,6EBB,6EBD,6EC1,6EC2,6EC7,6ECB,6ECF,6ED1,6ED3,6ED4,6ED5,6ED7,6EDA,6EDE,6EDF,6EE0,6EE1,6EE2,6EE4,6EE5,6EE6,6EE8,6EE9,6EF4,6EF9,6F02,6F06,6F09,6F0F,6F13,6F14,6F15,6F20,6F24,6F29,6F2A,6F2B,6F2D,6F2F,6F31,6F33,6F36,6F3E,6F46,6F47,6F4B,6F4D,6F58,6F5C,6F5E,6F62,6F66,6F6D,6F6E,6F72,6F74,6F78,6F7A,6F7C,6F84,6F88,6F89,6F8C,6F8D,6F8E,6F9C,6FA1,6FA7,6FB3,6FB6,6FB9,6FC0,6FC2,6FC9,6FD1,6FD2,6FDE,6FE0,6FE1,6FEE,6FEF,7011,701A,701B,7023,7035,7039,704C,704F,705E,706B,706C,706D,706F,7070,7075,7076,7078,707C,707E,707F,7080,7085,7089,708A,708E,7092,7094,7095,7096,7099,709C,709D,70AB,70AC,70AD,70AE,70AF,70B1,70B3,70B7,70B8,70B9,70BB,70BC,70BD,70C0,70C1,70C2,70C3,70C8,70CA,70D8,70D9,70DB,70DF,70E4,70E6,70E7,70E8,70E9,70EB,70EC,70ED,70EF,70F7,70F9,70FD,7109,710A,7110,7113,7115,7116,7118,7119,711A,7126,712F,7130,7131,7136,7145,714A,714C,714E,715C,715E,7164,7166,7167,7168,716E,7172,7173,7178,717A,717D,7184,718A,718F,7194,7198,7199,719F,71A0,71A8,71AC,71B3,71B5,71B9,71C3,71CE,71D4,71D5,71E0,71E5,71E7,71EE,71F9,7206,721D,7228,722A,722C,7230,7231,7235,7236,7237,7238,7239,723B,723D,723F,7247,7248,724C,724D,7252,7256,7259,725B,725D,725F,7261,7262,7266,7267,7269,726E,726F,7272,7275,7279,727A,727E,727F,7280,7281,7284,728A,728B,728D,728F,7292,729F,72AC,72AD,72AF,72B0,72B4,72B6,72B7,72B8,72B9,72C1,72C2,72C3,72C4,72C8,72CD,72CE,72D0,72D2,72D7,72D9,72DE,72E0,72E1,72E8,72E9,72EC,72ED,72EE,72EF,72F0,72F1,72F2,72F3,72F4,72F7,72F8,72FA,72FB,72FC,7301,7303,730A,730E,7313,7315,7316,7317,731B,731C,731D,731E,7321,7322,7325,7329,732A,732B,732C,732E,7331,7334,7337,7338,7339,733E,733F,734D,7350,7352,7357,7360,736C,736D,736F,737E,7384,7387,7389,738B,738E,7391,7396,739B,739F,73A2,73A9,73AB,73AE,73AF,73B0,73B2,73B3,73B7,73BA,73BB,73C0,73C2,73C8,73C9,73CA,73CD,73CF,73D0,73D1,73D9,73DE,73E0,73E5,73E7,73E9,73ED,73F2,7403,7405,7406,7409,740A,740F,7410,741A,741B,7422,7425,7426,7428,742A,742C,742E,7430,7433,7434,7435,7436,743C,7441,7455,7457,7459,745A,745B,745C,745E,745F,746D,7470,7476,7477,747E,7480,7481,7483,7487,748B,748E,7490,749C,749E,74A7,74A8,74A9,74BA,74D2,74DC,74DE,74E0,74E2,74E3,74E4,74E6,74EE,74EF,74F4,74F6,74F7,74FF,7504,750D,750F,7511,7513,7518,7519,751A,751C,751F,7525,7528,7529,752B,752C,752D,752F,7530,7531,7532,7533,7535,7537,7538,753A,753B,753E,7540,7545,7548,754B,754C,754E,754F,7554,7559,755A,755B,755C,7565,7566,756A,7572,7574,7578,7579,757F,7583,7586,758B,758F,7591,7592,7594,7596,7597,7599,759A,759D,759F,75A0,75A1,75A3,75A4,75A5,75AB,75AC,75AE,75AF,75B0,75B1,75B2,75B3,75B4,75B5,75B8,75B9,75BC,75BD,75BE,75C2,75C3,75C4,75C5,75C7,75C8,75C9,75CA,75CD,75D2,75D4,75D5,75D6,75D8,75DB,75DE,75E2,75E3,75E4,75E6,75E7,75E8,75EA,75EB,75F0,75F1,75F4,75F9,75FC,75FF,7600,7601,7603,7605,760A,760C,7610,7615,7617,7618,7619,761B,761F,7620,7622,7624,7625,7626,7629,762A,762B,762D,7630,7633,7634,7635,7638,763C,763E,763F,7640,7643,764C,764D,7654,7656,765C,765E,7663,766B,766F,7678,767B,767D,767E,7682,7684,7686,7687,7688,768B,768E,7691,7693,7696,7699,76A4,76AE,76B1,76B2,76B4,76BF,76C2,76C5,76C6,76C8,76CA,76CD,76CE,76CF,76D0,76D1,76D2,76D4,76D6,76D7,76D8,76DB,76DF,76E5,76EE,76EF,76F1,76F2,76F4,76F8,76F9,76FC,76FE,7701,7704,7707,7708,7709,770B,770D,7719,771A,771F,7720,7722,7726,7728,7729,772D,772F,7735,7736,7737,7738,773A,773C,7740,7741,7743,7747,7750,7751,775A,775B,7761,7762,7763,7765,7766,7768,776B,776C,7779,777D,777E,777F,7780,7784,7785,778C,778D,778E,7791,7792,779F,77A0,77A2,77A5,77A7,77A9,77AA,77AC,77B0,77B3,77B5,77BB,77BD,77BF,77CD,77D7,77DB,77DC,77E2,77E3,77E5,77E7,77E9,77EB,77EC,77ED,77EE,77F3,77F6,77F8,77FD,77FE,77FF,7800,7801,7802,7809,780C,780D,7811,7812,7814,7816,7817,7818,781A,781C,781D,781F,7823,7825,7826,7827,7829,782C,782D,7830,7834,7837,7838,7839,783A,783B,783C,783E,7840,7845,7847,784C,784E,7850,7852,7855,7856,7857,785D,786A,786B,786C,786D,786E,7877,787C,7887,7889,788C,788D,788E,7891,7893,7897,7898,789A,789B,789C,789F,78A1,78A3,78A5,78A7,78B0,78B1,78B2,78B3,78B4,78B9,78BE,78C1,78C5,78C9,78CA,78CB,78D0,78D4,78D5,78D9,78E8,78EC,78F2,78F4,78F7,78FA,7901,7905,7913,791E,7924,7934,793A,793B,793C,793E,7940,7941,7946,7948,7949,7953,7956,7957,795A,795B,795C,795D,795E,795F,7960,7962,7965,7967,7968,796D,796F,7977,7978,797A,7980,7981,7984,7985,798A,798F,799A,79A7,79B3,79B9,79BA,79BB,79BD,79BE,79C0,79C1,79C3,79C6,79C9,79CB,79CD,79D1,79D2,79D5,79D8,79DF,79E3,79E4,79E6,79E7,79E9,79EB,79ED,79EF,79F0,79F8,79FB,79FD,7A00,7A02,7A03,7A06,7A0B,7A0D,7A0E,7A14,7A17,7A1A,7A1E,7A20,7A23,7A33,7A37,7A39,7A3B,7A3C,7A3D,7A3F,7A46,7A51,7A57,7A70,7A74,7A76,7A77,7A78,7A79,7A7A,7A7F,7A80,7A81,7A83,7A84,7A86,7A88,7A8D,7A91,7A92,7A95,7A96,7A97,7A98,7A9C,7A9D,7A9F,7AA0,7AA5,7AA6,7AA8,7AAC,7AAD,7AB3,7ABF,7ACB,7AD6,7AD9,7ADE,7ADF,7AE0,7AE3,7AE5,7AE6,7AED,7AEF,7AF9,7AFA,7AFD,7AFF,7B03,7B04,7B06,7B08,7B0A,7B0B,7B0F,7B11,7B14,7B15,7B19,7B1B,7B1E,7B20,7B24,7B25,7B26,7B28,7B2A,7B2B,7B2C,7B2E,7B31,7B33,7B38,7B3A,7B3C,7B3E,7B45,7B47,7B49,7B4B,7B4C,7B4F,7B50,7B51,7B52,7B54,7B56,7B58,7B5A,7B5B,7B5D,7B60,7B62,7B6E,7B71,7B72,7B75,7B77,7B79,7B7B,7B7E,7B80,7B85,7B8D,7B90,7B94,7B95,7B97,7B9C,7B9D,7BA1,7BA2,7BA6,7BA7,7BA8,7BA9,7BAA,7BAB,7BAC,7BAD,7BB1,7BB4,7BB8,7BC1,7BC6,7BC7,7BCC,7BD1,7BD3,7BD9,7BDA,7BDD,7BE1,7BE5,7BE6,7BEA,7BEE,7BF1,7BF7,7BFC,7BFE,7C07,7C0B,7C0C,7C0F,7C16,7C1F,7C26,7C27,7C2A,7C38,7C3F,7C40,7C41,7C4D,7C73,7C74,7C7B,7C7C,7C7D,7C89,7C91,7C92,7C95,7C97,7C98,7C9C,7C9D,7C9E,7C9F,7CA2,7CA4,7CA5,7CAA,7CAE,7CB1,7CB2,7CB3,7CB9,7CBC,7CBD,7CBE,7CC1,7CC5,7CC7,7CC8,7CCA,7CCC,7CCD,7CD5,7CD6,7CD7,7CD9,7CDC,7CDF,7CE0,7CE8,7CEF,7CF8,7CFB,7D0A,7D20,7D22,7D27,7D2B,7D2F,7D6E,7D77,7DA6,7DAE,7E3B,7E41,7E47,7E82,7E9B,7E9F,7EA0,7EA1,7EA2,7EA3,7EA4,7EA5,7EA6,7EA7,7EA8,7EA9,7EAA,7EAB,7EAC,7EAD,7EAF,7EB0,7EB1,7EB2,7EB3,7EB5,7EB6,7EB7,7EB8,7EB9,7EBA,7EBD,7EBE,7EBF,7EC0,7EC1,7EC2,7EC3,7EC4,7EC5,7EC6,7EC7,7EC8,7EC9,7ECA,7ECB,7ECC,7ECD,7ECE,7ECF,7ED0,7ED1,7ED2,7ED3,7ED4,7ED5,7ED7,7ED8,7ED9,7EDA,7EDB,7EDC,7EDD,7EDE,7EDF,7EE0,7EE1,7EE2,7EE3,7EE5,7EE6,7EE7,7EE8,7EE9,7EEA,7EEB,7EED,7EEE,7EEF,7EF0,7EF1,7EF2,7EF3,7EF4,7EF5,7EF6,7EF7,7EF8,7EFA,7EFB,7EFC,7EFD,7EFE,7EFF,7F00,7F01,7F02,7F03,7F04,7F05,7F06,7F07,7F08,7F09,7F0B,7F0C,7F0D,7F0E,7F0F,7F11,7F12,7F13,7F14,7F15,7F16,7F17,7F18,7F19,7F1A,7F1B,7F1C,7F1D,7F1F,7F20,7F21,7F22,7F23,7F24,7F25,7F26,7F27,7F28,7F29,7F2A,7F2B,7F2C,7F2D,7F2E,7F2F,7F30,7F31,7F32,7F33,7F34,7F35,7F36,7F38,7F3A,7F42,7F44,7F45,7F50,7F51,7F54,7F55,7F57,7F58,7F5A,7F5F,7F61,7F62,7F68,7F69,7F6A,7F6E,7F71,7F72,7F74,7F79,7F7E,7F81,7F8A,7F8C,7F8E,7F94,7F9A,7F9D,7F9E,7F9F,7FA1,7FA4,7FA7,7FAF,7FB0,7FB2,7FB8,7FB9,7FBC,7FBD,7FBF,7FC1,7FC5,7FCA,7FCC,7FCE,7FD4,7FD5,7FD8,7FDF,7FE0,7FE1,7FE5,7FE6,7FE9,7FEE,7FF0,7FF1,7FF3,7FFB,7FFC,8000,8001,8003,8004,8005,8006,800B,800C,800D,8010,8012,8014,8015,8016,8017,8018,8019,801C,8020,8022,8025,8026,8027,8028,8029,802A,8031,8033,8035,8036,8037,8038,803B,803D,803F,8042,8043,8046,804A,804B,804C,804D,8052,8054,8058,805A,8069,806A,8071,807F,8080,8083,8084,8086,8087,8089,808B,808C,8093,8096,8098,809A,809B,809C,809D,809F,80A0,80A1,80A2,80A4,80A5,80A9,80AA,80AB,80AD,80AE,80AF,80B1,80B2,80B4,80B7,80BA,80BC,80BD,80BE,80BF,80C0,80C1,80C2,80C3,80C4,80C6,80CC,80CD,80CE,80D6,80D7,80D9,80DA,80DB,80DC,80DD,80DE,80E1,80E4,80E5,80E7,80E8,80E9,80EA,80EB,80EC,80ED,80EF,80F0,80F1,80F2,80F3,80F4,80F6,80F8,80FA,80FC,80FD,8102,8106,8109,810A,810D,810E,810F,8110,8111,8112,8113,8114,8116,8118,811A,811E,812C,812F,8131,8132,8136,8138,813E,8146,8148,814A,814B,814C,8150,8151,8153,8154,8155,8159,815A,8160,8165,8167,8169,816D,816E,8170,8171,8174,8179,817A,817B,817C,817D,817E,817F,8180,8182,8188,818A,818F,8191,8198,819B,819C,819D,81A3,81A6,81A8,81AA,81B3,81BA,81BB,81C0,81C1,81C2,81C3,81C6,81CA,81CC,81E3,81E7,81EA,81EC,81ED,81F3,81F4,81FB,81FC,81FE,8200,8201,8202,8204,8205,8206,820C,820D,8210,8212,8214,821B,821C,821E,821F,8221,8222,8223,8228,822A,822B,822C,822D,822F,8230,8231,8233,8234,8235,8236,8237,8238,8239,823B,823E,8244,8247,8249,824B,824F,8258,825A,825F,8268,826E,826F,8270,8272,8273,8274,8279,827A,827D,827E,827F,8282,8284,8288,828A,828B,828D,828E,828F,8291,8292,8297,8298,8299,829C,829D,829F,82A1,82A4,82A5,82A6,82A8,82A9,82AA,82AB,82AC,82AD,82AE,82AF,82B0,82B1,82B3,82B4,82B7,82B8,82B9,82BD,82BE,82C1,82C4,82C7,82C8,82CA,82CB,82CC,82CD,82CE,82CF,82D1,82D2,82D3,82D4,82D5,82D7,82D8,82DB,82DC,82DE,82DF,82E0,82E1,82E3,82E4,82E5,82E6,82EB,82EF,82F1,82F4,82F7,82F9,82FB,8301,8302,8303,8304,8305,8306,8307,8308,8309,830C,830E,830F,8311,8314,8315,8317,831A,831B,831C,8327,8328,832B,832C,832D,832F,8331,8333,8334,8335,8336,8338,8339,833A,833C,8340,8343,8346,8347,8349,834F,8350,8351,8352,8354,835A,835B,835C,835E,835F,8360,8361,8363,8364,8365,8366,8367,8368,8369,836A,836B,836C,836D,836E,836F,8377,8378,837B,837C,837D,8385,8386,8389,838E,8392,8393,8398,839B,839C,839E,83A0,83A8,83A9,83AA,83AB,83B0,83B1,83B2,83B3,83B4,83B6,83B7,83B8,83B9,83BA,83BC,83BD,83C0,83C1,83C5,83C7,83CA,83CC,83CF,83D4,83D6,83D8,83DC,83DD,83DF,83E0,83E1,83E5,83E9,83EA,83F0,83F1,83F2,83F8,83F9,83FD,8401,8403,8404,8406,840B,840C,840D,840E,840F,8411,8418,841C,841D,8424,8425,8426,8427,8428,8431,8438,843C,843D,8446,8451,8457,8459,845A,845B,845C,8461,8463,8469,846B,846C,846D,8471,8473,8475,8476,8478,847A,8482,8487,8488,8489,848B,848C,848E,8497,8499,849C,84A1,84AF,84B2,84B4,84B8,84B9,84BA,84BD,84BF,84C1,84C4,84C9,84CA,84CD,84D0,84D1,84D3,84D6,84DD,84DF,84E0,84E3,84E5,84E6,84EC,84F0,84FC,84FF,850C,8511,8513,8517,851A,851F,8521,852B,852C,8537,8538,8539,853A,853B,853C,853D,8543,8548,8549,854A,8556,8559,855E,8564,8568,8572,8574,8579,857A,857B,857E,8584,8585,8587,858F,859B,859C,85A4,85A8,85AA,85AE,85AF,85B0,85B7,85B9,85C1,85C9,85CF,85D0,85D3,85D5,85DC,85E4,85E9,85FB,85FF,8605,8611,8616,8627,8629,8638,863C,864D,864E,864F,8650,8651,8654,865A,865E,8662,866B,866C,866E,8671,8679,867A,867B,867C,867D,867E,867F,8680,8681,8682,868A,868B,868C,868D,8693,8695,869C,869D,86A3,86A4,86A7,86A8,86A9,86AA,86AC,86AF,86B0,86B1,86B4,86B5,86B6,86BA,86C0,86C4,86C6,86C7,86C9,86CA,86CB,86CE,86CF,86D0,86D1,86D4,86D8,86D9,86DB,86DE,86DF,86E4,86E9,86ED,86EE,86F0,86F1,86F2,86F3,86F4,86F8,86F9,86FE,8700,8702,8703,8707,8708,8709,870A,870D,8712,8713,8715,8717,8718,871A,871C,871E,8721,8722,8723,8725,8729,872E,8731,8734,8737,873B,873E,873F,8747,8748,8749,874C,874E,8753,8757,8759,8760,8763,8764,8765,876E,8770,8774,8776,877B,877C,877D,877E,8782,8783,8785,8788,878B,878D,8793,8797,879F,87A8,87AB,87AC,87AD,87AF,87B3,87B5,87BA,87BD,87C0,87C6,87CA,87CB,87D1,87D2,87D3,87DB,87E0,87E5,87EA,87EE,87F9,87FE,8803,880A,8813,8815,8816,881B,8821,8822,8832,8839,883C,8840,8844,8845,884C,884D,8854,8857,8859,8861,8862,8863,8864,8865,8868,8869,886B,886C,886E,8870,8872,8877,887D,887E,887F,8881,8882,8884,8885,8888,888B,888D,8892,8896,889C,88A2,88A4,88AB,88AD,88B1,88B7,88BC,88C1,88C2,88C5,88C6,88C9,88CE,88D2,88D4,88D5,88D8,88D9,88DF,88E2,88E3,88E4,88E5,88E8,88F0,88F1,88F3,88F4,88F8,88F9,88FC,88FE,8902,890A,8910,8912,8913,8919,891A,891B,8921,8925,892A,892B,8930,8934,8936,8941,8944,895E,895F,8966,897B,897F,8981,8983,8986,89C1,89C2,89C4,89C5,89C6,89C7,89C8,89C9,89CA,89CB,89CC,89CE,89CF,89D0,89D1,89D2,89D6,89DA,89DC,89DE,89E3,89E5,89E6,89EB,89EF,89F3,8A00,8A07,8A3E,8A48,8A79,8A89,8A8A,8A93,8B07,8B26,8B66,8B6C,8BA0,8BA1,8BA2,8BA3,8BA4,8BA5,8BA6,8BA7,8BA8,8BA9,8BAA,8BAB,8BAD,8BAE,8BAF,8BB0,8BB2,8BB3,8BB4,8BB5,8BB6,8BB7,8BB8,8BB9,8BBA,8BBC,8BBD,8BBE,8BBF,8BC0,8BC1,8BC2,8BC3,8BC4,8BC5,8BC6,8BC8,8BC9,8BCA,8BCB,8BCC,8BCD,8BCE,8BCF,8BD1,8BD2,8BD3,8BD4,8BD5,8BD6,8BD7,8BD8,8BD9,8BDA,8BDB,8BDC,8BDD,8BDE,8BDF,8BE0,8BE1,8BE2,8BE3,8BE4,8BE5,8BE6,8BE7,8BE8,8BE9,8BEB,8BEC,8BED,8BEE,8BEF,8BF0,8BF1,8BF2,8BF3,8BF4,8BF5,8BF6,8BF7,8BF8,8BF9,8BFA,8BFB,8BFC,8BFD,8BFE,8BFF,8C00,8C01,8C02,8C03,8C04,8C05,8C06,8C07,8C08,8C0A,8C0B,8C0C,8C0D,8C0E,8C0F,8C10,8C11,8C12,8C13,8C14,8C15,8C16,8C17,8C18,8C19,8C1A,8C1B,8C1C,8C1D,8C1F,8C20,8C21,8C22,8C23,8C24,8C25,8C26,8C27,8C28,8C29,8C2A,8C2B,8C2C,8C2D,8C2E,8C2F,8C30,8C31,8C32,8C33,8C34,8C35,8C36,8C37,8C41,8C46,8C47,8C49,8C4C,8C55,8C5A,8C61,8C62,8C6A,8C6B,8C73,8C78,8C79,8C7A,8C82,8C85,8C89,8C8A,8C8C,8C94,8C98,8D1D,8D1E,8D1F,8D21,8D22,8D23,8D24,8D25,8D26,8D27,8D28,8D29,8D2A,8D2B,8D2C,8D2D,8D2E,8D2F,8D30,8D31,8D32,8D33,8D34,8D35,8D36,8D37,8D38,8D39,8D3A,8D3B,8D3C,8D3D,8D3E,8D3F,8D40,8D41,8D42,8D43,8D44,8D45,8D46,8D47,8D48,8D49,8D4A,8D4B,8D4C,8D4D,8D4E,8D4F,8D50,8D53,8D54,8D55,8D56,8D58,8D59,8D5A,8D5B,8D5C,8D5D,8D5E,8D60,8D61,8D62,8D63,8D64,8D66,8D67,8D6B,8D6D,8D70,8D73,8D74,8D75,8D76,8D77,8D81,8D84,8D85,8D8A,8D8B,8D91,8D94,8D9F,8DA3,8DB1,8DB3,8DB4,8DB5,8DB8,8DBA,8DBC,8DBE,8DBF,8DC3,8DC4,8DC6,8DCB,8DCC,8DCE,8DCF,8DD1,8DD6,8DD7,8DDA,8DDB,8DDD,8DDE,8DDF,8DE3,8DE4,8DE8,8DEA,8DEB,8DEC,8DEF,8DF3,8DF5,8DF7,8DF8,8DF9,8DFA,8DFB,8DFD,8E05,8E09,8E0A,8E0C,8E0F,8E14,8E1D,8E1E,8E1F,8E22,8E23,8E29,8E2A,8E2C,8E2E,8E2F,8E31,8E35,8E39,8E3A,8E3D,8E40,8E41,8E42,8E44,8E47,8E48,8E49,8E4A,8E4B,8E51,8E52,8E59,8E66,8E69,8E6C,8E6D,8E6F,8E70,8E72,8E74,8E76,8E7C,8E7F,8E81,8E85,8E87,8E8F,8E90,8E94,8E9C,8E9E,8EAB,8EAC,8EAF,8EB2,8EBA,8ECE,8F66,8F67,8F68,8F69,8F6B,8F6C,8F6D,8F6E,8F6F,8F70,8F71,8F72,8F73,8F74,8F75,8F76,8F77,8F78,8F79,8F7A,8F7B,8F7C,8F7D,8F7E,8F7F,8F81,8F82,8F83,8F84,8F85,8F86,8F87,8F88,8F89,8F8A,8F8B,8F8D,8F8E,8F8F,8F90,8F91,8F93,8F94,8F95,8F96,8F97,8F98,8F99,8F9A,8F9B,8F9C,8F9E,8F9F,8FA3,8FA8,8FA9,8FAB,8FB0,8FB1,8FB6,8FB9,8FBD,8FBE,8FC1,8FC2,8FC4,8FC5,8FC7,8FC8,8FCE,8FD0,8FD1,8FD3,8FD4,8FD5,8FD8,8FD9,8FDB,8FDC,8FDD,8FDE,8FDF,8FE2,8FE4,8FE5,8FE6,8FE8,8FE9,8FEA,8FEB,8FED,8FEE,8FF0,8FF3,8FF7,8FF8,8FF9,8FFD,9000,9001,9002,9003,9004,9005,9006,9009,900A,900B,900D,900F,9010,9011,9012,9014,9016,9017,901A,901B,901D,901E,901F,9020,9021,9022,9026,902D,902E,902F,9035,9036,9038,903B,903C,903E,9041,9042,9044,9047,904D,904F,9050,9051,9052,9053,9057,9058,905B,9062,9063,9065,9068,906D,906E,9074,9075,907D,907F,9080,9082,9083,9088,908B,9091,9093,9095,9097,9099,909B,909D,90A1,90A2,90A3,90A6,90AA,90AC,90AE,90AF,90B0,90B1,90B3,90B4,90B5,90B6,90B8,90B9,90BA,90BB,90BE,90C1,90C4,90C5,90C7,90CA,90CE,90CF,90D0,90D1,90D3,90D7,90DB,90DC,90DD,90E1,90E2,90E6,90E7,90E8,90EB,90ED,90EF,90F4,90F8,90FD,90FE,9102,9104,9119,911E,9122,9123,912F,9131,9139,9143,9146,9149,914A,914B,914C,914D,914E,914F,9150,9152,9157,915A,915D,915E,9161,9162,9163,9164,9165,9169,916A,916C,916E,916F,9170,9171,9172,9174,9175,9176,9177,9178,9179,917D,917E,917F,9185,9187,9189,918B,918C,918D,9190,9191,9192,919A,919B,91A2,91A3,91AA,91AD,91AE,91AF,91B4,91B5,91BA,91C7,91C9,91CA,91CC,91CD,91CE,91CF,91D1,91DC,9274,928E,92AE,92C8,933E,936A,938F,93CA,93D6,943E,946B,9485,9486,9487,9488,9489,948A,948B,948C,948D,948E,948F,9490,9492,9493,9494,9495,9497,9499,949A,949B,949C,949D,949E,949F,94A0,94A1,94A2,94A3,94A4,94A5,94A6,94A7,94A8,94A9,94AA,94AB,94AC,94AD,94AE,94AF,94B0,94B1,94B2,94B3,94B4,94B5,94B6,94B7,94B8,94B9,94BA,94BB,94BC,94BD,94BE,94BF,94C0,94C1,94C2,94C3,94C4,94C5,94C6,94C8,94C9,94CA,94CB,94CC,94CD,94CE,94D0,94D1,94D2,94D5,94D6,94D7,94D8,94D9,94DB,94DC,94DD,94DE,94DF,94E0,94E1,94E2,94E3,94E4,94E5,94E7,94E8,94E9,94EA,94EB,94EC,94ED,94EE,94EF,94F0,94F1,94F2,94F3,94F4,94F5,94F6,94F7,94F8,94F9,94FA,94FC,94FD,94FE,94FF,9500,9501,9502,9503,9504,9505,9506,9507,9508,9509,950A,950B,950C,950D,950E,950F,9510,9511,9512,9513,9514,9515,9516,9517,9518,9519,951A,951B,951D,951E,951F,9521,9522,9523,9524,9525,9526,9528,9529,952A,952B,952C,952D,952E,952F,9530,9531,9532,9534,9535,9536,9537,9538,9539,953A,953B,953C,953E,953F,9540,9541,9542,9544,9545,9546,9547,9549,954A,954C,954D,954E,954F,9550,9551,9552,9553,9554,9556,9557,9558,9559,955B,955C,955D,955E,955F,9561,9562,9563,9564,9565,9566,9567,9568,9569,956A,956B,956C,956D,956F,9570,9571,9572,9573,9576,957F,95E8,95E9,95EA,95EB,95ED,95EE,95EF,95F0,95F1,95F2,95F3,95F4,95F5,95F6,95F7,95F8,95F9,95FA,95FB,95FC,95FD,95FE,9600,9601,9602,9603,9604,9605,9606,9608,9609,960A,960B,960C,960D,960E,960F,9610,9611,9612,9614,9615,9616,9617,9619,961A,961C,961D,961F,9621,9622,962A,962E,9631,9632,9633,9634,9635,9636,963B,963C,963D,963F,9640,9642,9644,9645,9646,9647,9648,9649,964B,964C,964D,9650,9654,9655,965B,965F,9661,9662,9664,9667,9668,9669,966A,966C,9672,9674,9675,9676,9677,9685,9686,9688,968B,968D,968F,9690,9694,9697,9698,9699,969C,96A7,96B0,96B3,96B6,96B9,96BC,96BD,96BE,96C0,96C1,96C4,96C5,96C6,96C7,96C9,96CC,96CD,96CE,96CF,96D2,96D5,96E0,96E8,96E9,96EA,96EF,96F3,96F6,96F7,96F9,96FE,9700,9701,9704,9706,9707,9708,9709,970D,970E,970F,9713,9716,971C,971E,972A,972D,9730,9732,9738,9739,973E,9752,9753,9756,9759,975B,975E,9760,9761,9762,9765,9769,9773,9774,9776,977C,9785,978B,978D,9791,9792,9794,9798,97A0,97A3,97AB,97AD,97AF,97B2,97B4,97E6,97E7,97E9,97EA,97EB,97EC,97ED,97F3,97F5,97F6,9875,9876,9877,9878,9879,987A,987B,987C,987D,987E,987F,9880,9881,9882,9883,9884,9885,9886,9887,9888,9889,988A,988C,988D,988F,9890,9891,9893,9894,9896,9897,9898,989A,989B,989C,989D,989E,989F,98A0,98A1,98A2,98A4,98A5,98A6,98A7,98CE,98D1,98D2,98D3,98D5,98D8,98D9,98DA,98DE,98DF,98E7,98E8,990D,9910,992E,9954,9955,9963,9965,9967,9968,9969,996A,996B,996C,996D,996E,996F,9970,9971,9972,9974,9975,9976,9977,997A,997C,997D,997F,9980,9981,9984,9985,9986,9987,9988,998A,998B,998D,998F,9990,9991,9992,9993,9994,9995,9996,9997,9998,9999,99A5,99A8,9A6C,9A6D,9A6E,9A6F,9A70,9A71,9A73,9A74,9A75,9A76,9A77,9A78,9A79,9A7A,9A7B,9A7C,9A7D,9A7E,9A7F,9A80,9A81,9A82,9A84,9A85,9A86,9A87,9A88,9A8A,9A8B,9A8C,9A8F,9A90,9A91,9A92,9A93,9A96,9A97,9A98,9A9A,9A9B,9A9C,9A9D,9A9E,9A9F,9AA0,9AA1,9AA2,9AA3,9AA4,9AA5,9AA7,9AA8,9AB0,9AB1,9AB6,9AB7,9AB8,9ABA,9ABC,9AC0,9AC1,9AC2,9AC5,9ACB,9ACC,9AD1,9AD3,9AD8,9ADF,9AE1,9AE6,9AEB,9AED,9AEF,9AF9,9AFB,9B03,9B08,9B0F,9B13,9B1F,9B23,9B2F,9B32,9B3B,9B3C,9B41,9B42,9B43,9B44,9B45,9B47,9B48,9B49,9B4D,9B4F,9B51,9B54,9C7C,9C7F,9C81,9C82,9C85,9C86,9C87,9C88,9C8B,9C8D,9C8E,9C90,9C91,9C92,9C94,9C95,9C9A,9C9B,9C9C,9C9E,9C9F,9CA0,9CA1,9CA2,9CA3,9CA4,9CA5,9CA6,9CA7,9CA8,9CA9,9CAB,9CAD,9CAE,9CB0,9CB1,9CB2,9CB3,9CB4,9CB5,9CB6,9CB7,9CB8,9CBA,9CBB,9CBC,9CBD,9CC3,9CC4,9CC5,9CC6,9CC7,9CCA,9CCB,9CCC,9CCD,9CCE,9CCF,9CD0,9CD3,9CD4,9CD5,9CD6,9CD7,9CD8,9CD9,9CDC,9CDD,9CDE,9CDF,9CE2,9E1F,9E20,9E21,9E22,9E23,9E25,9E26,9E28,9E29,9E2A,9E2B,9E2C,9E2D,9E2F,9E31,9E32,9E33,9E35,9E36,9E37,9E38,9E39,9E3A,9E3D,9E3E,9E3F,9E41,9E42,9E43,9E44,9E45,9E46,9E47,9E48,9E49,9E4A,9E4B,9E4C,9E4E,9E4F,9E51,9E55,9E57,9E58,9E5A,9E5B,9E5C,9E5E,9E63,9E64,9E66,9E67,9E68,9E69,9E6A,9E6B,9E6C,9E6D,9E70,9E71,9E73,9E7E,9E7F,9E82,9E87,9E88,9E8B,9E92,9E93,9E9D,9E9F,9EA6,9EB4,9EB8,9EBB,9EBD,9EBE,9EC4,9EC9,9ECD,9ECE,9ECF,9ED1,9ED4,9ED8,9EDB,9EDC,9EDD,9EDF,9EE0,9EE2,9EE5,9EE7,9EE9,9EEA,9EEF,9EF9,9EFB,9EFC,9EFE,9F0B,9F0D,9F0E,9F10,9F13,9F17,9F19,9F20,9F22,9F2C,9F2F,9F37,9F39,9F3B,9F3D,9F3E,9F44,9F50,9F51,9F7F,9F80,9F83,9F84,9F85,9F86,9F87,9F88,9F89,9F8A,9F8B,9F8C,9F99,9F9A,9F9B,9F9F,9FA0,FF01,FF02,FF03,FF04,FF05,FF06,FF07,FF08,FF09,FF0A,FF0B,FF0C,FF0D,FF0E,FF0F,FF10,FF11,FF12,FF13,FF14,FF15,FF16,FF17,FF18,FF19,FF1A,FF1B,FF1C,FF1D,FF1E,FF1F,FF20,FF21,FF22,FF23,FF24,FF25,FF26,FF27,FF28,FF29,FF2A,FF2B,FF2C,FF2D,FF2E,FF2F,FF30,FF31,FF32,FF33,FF34,FF35,FF36,FF37,FF38,FF39,FF3A,FF3B,FF3C,FF3D,FF3E,FF3F,FF40,FF41,FF42,FF43,FF44,FF45,FF46,FF47,FF48,FF49,FF4A,FF4B,FF4C,FF4D,FF4E,FF4F,FF50,FF51,FF52,FF53,FF54,FF55,FF56,FF57,FF58,FF59,FF5A,FF5B,FF5C,FF5D,FF5E,FFE0,FFE1,FFE3,FFE5'; 
 
};  
 
 
 
function AnsicodeChr(){
 
return 'A1E8,A1EC,A1A7,A1E3,A1C0,A1A4,A1C1,A8A4,A8A2,A8A8,A8A6,A8BA,A8AC,A8AA,A8B0,A8AE,A1C2,A8B4,A8B2,A8B9,A8A1,A8A5,A8A7,A8A9,A8AD,A8B1,A8A3,A8AB,A8AF,A8B3,A8B5,A8B6,A8B7,A8B8,A1A6,A1A5,A6A1,A6A2,A6A3,A6A4,A6A5,A6A6,A6A7,A6A8,A6A9,A6AA,A6AB,A6AC,A6AD,A6AE,A6AF,A6B0,A6B1,A6B2,A6B3,A6B4,A6B5,A6B6,A6B7,A6B8,A6C1,A6C2,A6C3,A6C4,A6C5,A6C6,A6C7,A6C8,A6C9,A6CA,A6CB,A6CC,A6CD,A6CE,A6CF,A6D0,A6D1,A6D2,A6D3,A6D4,A6D5,A6D6,A6D7,A6D8,A7A7,A7A1,A7A2,A7A3,A7A4,A7A5,A7A6,A7A8,A7A9,A7AA,A7AB,A7AC,A7AD,A7AE,A7AF,A7B0,A7B1,A7B2,A7B3,A7B4,A7B5,A7B6,A7B7,A7B8,A7B9,A7BA,A7BB,A7BC,A7BD,A7BE,A7BF,A7C0,A7C1,A7D1,A7D2,A7D3,A7D4,A7D5,A7D6,A7D8,A7D9,A7DA,A7DB,A7DC,A7DD,A7DE,A7DF,A7E0,A7E1,A7E2,A7E3,A7E4,A7E5,A7E6,A7E7,A7E8,A7E9,A7EA,A7EB,A7EC,A7ED,A7EE,A7EF,A7F0,A7F1,A7D7,A1AA,A1AC,A1AE,A1AF,A1B0,A1B1,A1AD,A1EB,A1E4,A1E5,A1F9,A1E6,A1ED,A2F1,A2F2,A2F3,A2F4,A2F5,A2F6,A2F7,A2F8,A2F9,A2FA,A2FB,A2FC,A1FB,A1FC,A1FA,A1FD,A1CA,A1C7,A1C6,A1CC,A1D8,A1DE,A1CF,A1CE,A1C4,A1C5,A1C9,A1C8,A1D2,A1D3,A1E0,A1DF,A1C3,A1CB,A1D7,A1D6,A1D5,A1D9,A1D4,A1DC,A1DD,A1DA,A1DB,A1D1,A1CD,A1D0,A2D9,A2DA,A2DB,A2DC,A2DD,A2DE,A2DF,A2E0,A2E1,A2E2,A2C5,A2C6,A2C7,A2C8,A2C9,A2CA,A2CB,A2CC,A2CD,A2CE,A2CF,A2D0,A2D1,A2D2,A2D3,A2D4,A2D5,A2D6,A2D7,A2D8,A2B1,A2B2,A2B3,A2B4,A2B5,A2B6,A2B7,A2B8,A2B9,A2BA,A2BB,A2BC,A2BD,A2BE,A2BF,A2C0,A2C1,A2C2,A2C3,A2C4,A9A4,A9A5,A9A6,A9A7,A9A8,A9A9,A9AA,A9AB,A9AC,A9AD,A9AE,A9AF,A9B0,A9B1,A9B2,A9B3,A9B4,A9B5,A9B6,A9B7,A9B8,A9B9,A9BA,A9BB,A9BC,A9BD,A9BE,A9BF,A9C0,A9C1,A9C2,A9C3,A9C4,A9C5,A9C6,A9C7,A9C8,A9C9,A9CA,A9CB,A9CC,A9CD,A9CE,A9CF,A9D0,A9D1,A9D2,A9D3,A9D4,A9D5,A9D6,A9D7,A9D8,A9D9,A9DA,A9DB,A9DC,A9DD,A9DE,A9DF,A9E0,A9E1,A9E2,A9E3,A9E4,A9E5,A9E6,A9E7,A9E8,A9E9,A9EA,A9EB,A9EC,A9ED,A9EE,A9EF,A1F6,A1F5,A1F8,A1F7,A1F4,A1F3,A1F0,A1F2,A1F1,A1EF,A1EE,A1E2,A1E1,A1A1,A1A2,A1A3,A1A8,A1A9,A1B4,A1B5,A1B6,A1B7,A1B8,A1B9,A1BA,A1BB,A1BE,A1BF,A1FE,A1B2,A1B3,A1BC,A1BD,A4A1,A4A2,A4A3,A4A4,A4A5,A4A6,A4A7,A4A8,A4A9,A4AA,A4AB,A4AC,A4AD,A4AE,A4AF,A4B0,A4B1,A4B2,A4B3,A4B4,A4B5,A4B6,A4B7,A4B8,A4B9,A4BA,A4BB,A4BC,A4BD,A4BE,A4BF,A4C0,A4C1,A4C2,A4C3,A4C4,A4C5,A4C6,A4C7,A4C8,A4C9,A4CA,A4CB,A4CC,A4CD,A4CE,A4CF,A4D0,A4D1,A4D2,A4D3,A4D4,A4D5,A4D6,A4D7,A4D8,A4D9,A4DA,A4DB,A4DC,A4DD,A4DE,A4DF,A4E0,A4E1,A4E2,A4E3,A4E4,A4E5,A4E6,A4E7,A4E8,A4E9,A4EA,A4EB,A4EC,A4ED,A4EE,A4EF,A4F0,A4F1,A4F2,A4F3,A5A1,A5A2,A5A3,A5A4,A5A5,A5A6,A5A7,A5A8,A5A9,A5AA,A5AB,A5AC,A5AD,A5AE,A5AF,A5B0,A5B1,A5B2,A5B3,A5B4,A5B5,A5B6,A5B7,A5B8,A5B9,A5BA,A5BB,A5BC,A5BD,A5BE,A5BF,A5C0,A5C1,A5C2,A5C3,A5C4,A5C5,A5C6,A5C7,A5C8,A5C9,A5CA,A5CB,A5CC,A5CD,A5CE,A5CF,A5D0,A5D1,A5D2,A5D3,A5D4,A5D5,A5D6,A5D7,A5D8,A5D9,A5DA,A5DB,A5DC,A5DD,A5DE,A5DF,A5E0,A5E1,A5E2,A5E3,A5E4,A5E5,A5E6,A5E7,A5E8,A5E9,A5EA,A5EB,A5EC,A5ED,A5EE,A5EF,A5F0,A5F1,A5F2,A5F3,A5F4,A5F5,A5F6,A8C5,A8C6,A8C7,A8C8,A8C9,A8CA,A8CB,A8CC,A8CD,A8CE,A8CF,A8D0,A8D1,A8D2,A8D3,A8D4,A8D5,A8D6,A8D7,A8D8,A8D9,A8DA,A8DB,A8DC,A8DD,A8DE,A8DF,A8E0,A8E1,A8E2,A8E3,A8E4,A8E5,A8E6,A8E7,A8E8,A8E9,A2E5,A2E6,A2E7,A2E8,A2E9,A2EA,A2EB,A2EC,A2ED,A2EE,D2BB,B6A1,C6DF,CDF2,D5C9,C8FD,C9CF,CFC2,D8A2,B2BB,D3EB,D8A4,B3F3,D7A8,C7D2,D8A7,CAC0,C7F0,B1FB,D2B5,B4D4,B6AB,CBBF,D8A9,B6AA,C1BD,D1CF,C9A5,D8AD,B8F6,D1BE,E3DC,D6D0,B7E1,B4AE,C1D9,D8BC,CDE8,B5A4,CEAA,D6F7,C0F6,BED9,D8AF,C4CB,BEC3,D8B1,C3B4,D2E5,D6AE,CEDA,D5A7,BAF5,B7A6,C0D6,C6B9,C5D2,C7C7,B9D4,B3CB,D2D2,D8BF,BEC5,C6F2,D2B2,CFB0,CFE7,CAE9,D8C0,C2F2,C2D2,C8E9,C7AC,C1CB,D3E8,D5F9,CAC2,B6FE,D8A1,D3DA,BFF7,D4C6,BBA5,D8C1,CEE5,BEAE,D8A8,D1C7,D0A9,D8BD,D9EF,CDF6,BFBA,BDBB,BAA5,D2E0,B2FA,BAE0,C4B6,CFED,BEA9,CDA4,C1C1,C7D7,D9F1,D9F4,C8CB,D8E9,D2DA,CAB2,C8CA,D8EC,D8EA,D8C6,BDF6,C6CD,B3F0,D8EB,BDF1,BDE9,C8D4,B4D3,C2D8,B2D6,D7D0,CACB,CBFB,D5CC,B8B6,CFC9,D9DA,D8F0,C7AA,D8EE,B4FA,C1EE,D2D4,D8ED,D2C7,D8EF,C3C7,D1F6,D6D9,D8F2,D8F5,BCFE,BCDB,C8CE,B7DD,B7C2,C6F3,D8F8,D2C1,CEE9,BCBF,B7FC,B7A5,D0DD,D6DA,D3C5,BBEF,BBE1,D8F1,C9A1,CEB0,B4AB,D8F3,C9CB,D8F6,C2D7,D8F7,CEB1,D8F9,B2AE,B9C0,D9A3,B0E9,C1E6,C9EC,CBC5,CBC6,D9A4,B5E8,B5AB,CEBB,B5CD,D7A1,D7F4,D3D3,CCE5,BACE,D9A2,D9DC,D3E0,D8FD,B7F0,D7F7,D8FE,D8FA,D9A1,C4E3,D3B6,D8F4,D9DD,D8FB,C5E5,C0D0,D1F0,B0DB,BCD1,D9A6,D9A5,D9AC,D9AE,D9AB,CAB9,D9A9,D6B6,B3DE,D9A8,C0FD,CACC,D9AA,D9A7,D9B0,B6B1,B9A9,D2C0,CFC0,C2C2,BDC4,D5EC,B2E0,C7C8,BFEB,D9AD,D9AF,CEEA,BAEE,C7D6,B1E3,B4D9,B6ED,D9B4,BFA1,D9DE,C7CE,C0FE,D9B8,CBD7,B7FD,D9B5,D9B7,B1A3,D3E1,D9B9,D0C5,D9B6,D9B1,D9B2,C1A9,D9B3,BCF3,D0DE,B8A9,BEE3,D9BD,D9BA,B0B3,D9C2,D9C4,B1B6,D9BF,B5B9,BEF3,CCC8,BAF2,D2D0,D9C3,BDE8,B3AB,D9C5,BEEB,D9C6,D9BB,C4DF,D9BE,D9C1,D9C0,D5AE,D6B5,C7E3,D9C8,BCD9,D9CA,D9BC,D9CB,C6AB,D9C9,D7F6,CDA3,BDA1,D9CC,C5BC,CDB5,D9CD,D9C7,B3A5,BFFE,B8B5,C0FC,B0F8,B4F6,D9CE,D9CF,B4A2,D9D0,B4DF,B0C1,D9D1,C9B5,CFF1,D9D2,C1C5,D9D6,C9AE,D9D5,D9D4,D9D7,CBDB,BDA9,C6A7,D9D3,D9D8,D9D9,C8E5,C0DC,B6F9,D8A3,D4CA,D4AA,D0D6,B3E4,D5D7,CFC8,B9E2,BFCB,C3E2,B6D2,CDC3,D9EE,D9F0,B5B3,B6B5,BEA4,C8EB,C8AB,B0CB,B9AB,C1F9,D9E2,C0BC,B9B2,B9D8,D0CB,B1F8,C6E4,BEDF,B5E4,D7C8,D1F8,BCE6,CADE,BCBD,D9E6,D8E7,C4DA,B8D4,C8BD,B2E1,D4D9,C3B0,C3E1,DAA2,C8DF,D0B4,BEFC,C5A9,B9DA,DAA3,D4A9,DAA4,D9FB,B6AC,B7EB,B1F9,D9FC,B3E5,BEF6,BFF6,D2B1,C0E4,B6B3,D9FE,D9FD,BEBB,C6E0,D7BC,DAA1,C1B9,B5F2,C1E8,BCF5,B4D5,C1DD,C4FD,BCB8,B7B2,B7EF,D9EC,C6BE,BFAD,BBCB,B5CA,DBC9,D0D7,CDB9,B0BC,B3F6,BBF7,DBCA,BAAF,D4E4,B5B6,B5F3,D8D6,C8D0,B7D6,C7D0,D8D7,BFAF,DBBB,D8D8,D0CC,BBAE,EBBE,C1D0,C1F5,D4F2,B8D5,B4B4,B3F5,C9BE,C5D0,C5D9,C0FB,B1F0,D8D9,B9CE,B5BD,D8DA,D6C6,CBA2,C8AF,C9B2,B4CC,BFCC,B9F4,D8DB,D8DC,B6E7,BCC1,CCEA,CFF7,D8DD,C7B0,B9D0,BDA3,CCDE,C6CA,D8E0,D8DE,D8DF,B0FE,BEE7,CAA3,BCF4,B8B1,B8EE,D8E2,BDCB,D8E4,D8E3,C5FC,D8E5,D8E6,C1A6,C8B0,B0EC,B9A6,BCD3,CEF1,DBBD,C1D3,B6AF,D6FA,C5AC,BDD9,DBBE,DBBF,C0F8,BEA2,C0CD,DBC0,CAC6,B2AA,D3C2,C3E3,D1AB,DBC2,C0D5,DBC3,BFB1,C4BC,C7DA,DBC4,D9E8,C9D7,B9B4,CEF0,D4C8,B0FC,B4D2,D0D9,D9E9,DECB,D9EB,D8B0,BBAF,B1B1,B3D7,D8CE,D4D1,BDB3,BFEF,CFBB,D8D0,B7CB,D8D1,C6A5,C7F8,D2BD,D8D2,C4E4,CAAE,C7A7,D8A6,C9FD,CEE7,BBDC,B0EB,BBAA,D0AD,B1B0,D7E4,D7BF,B5A5,C2F4,C4CF,B2A9,B2B7,B1E5,DFB2,D5BC,BFA8,C2AC,D8D5,C2B1,D8D4,CED4,DAE0,CEC0,D8B4,C3AE,D3A1,CEA3,BCB4,C8B4,C2D1,BEED,D0B6,DAE1,C7E4,B3A7,B6F2,CCFC,C0FA,C0F7,D1B9,D1E1,D8C7,B2DE,C0E5,BAF1,D8C8,D4AD,CFE1,D8C9,D8CA,CFC3,B3F8,BEC7,D8CB,DBCC,C8A5,CFD8,C8FE,B2CE,D3D6,B2E6,BCB0,D3D1,CBAB,B7B4,B7A2,CAE5,C8A1,CADC,B1E4,D0F0,C5D1,DBC5,B5FE,BFDA,B9C5,BEE4,C1ED,DFB6,DFB5,D6BB,BDD0,D5D9,B0C8,B6A3,BFC9,CCA8,DFB3,CAB7,D3D2,D8CF,D2B6,BAC5,CBBE,CCBE,DFB7,B5F0,DFB4,D3F5,B3D4,B8F7,DFBA,BACF,BCAA,B5F5,CDAC,C3FB,BAF3,C0F4,CDC2,CFF2,DFB8,CFC5,C2C0,DFB9,C2F0,BEFD,C1DF,CDCC,D2F7,B7CD,DFC1,DFC4,B7F1,B0C9,B6D6,B7D4,BAAC,CCFD,BFD4,CBB1,C6F4,D6A8,DFC5,CEE2,B3B3,CEFC,B4B5,CEC7,BAF0,CEE1,D1BD,DFC0,B4F4,B3CA,B8E6,DFBB,C4C5,DFBC,DFBD,DFBE,C5BB,DFBF,DFC2,D4B1,DFC3,C7BA,CED8,C4D8,DFCA,DFCF,D6DC,DFC9,DFDA,CEB6,BAC7,DFCE,DFC8,C5DE,C9EB,BAF4,C3FC,BED7,DFC6,DFCD,C5D8,D5A6,BACD,BECC,D3BD,B8C0,D6E4,DFC7,B9BE,BFA7,C1FC,DFCB,DFCC,DFD0,DFDB,DFE5,DFD7,DFD6,D7C9,DFE3,DFE4,E5EB,D2A7,DFD2,BFA9,D4DB,BFC8,DFD4,CFCC,DFDD,D1CA,DFDE,B0A7,C6B7,DFD3,BAE5,B6DF,CDDB,B9FE,D4D5,DFDF,CFEC,B0A5,DFE7,DFD1,D1C6,DFD5,DFD8,DFD9,DFDC,BBA9,DFE0,DFE1,DFE2,DFE6,DFE8,D3B4,B8E7,C5B6,DFEA,C9DA,C1A8,C4C4,BFDE,CFF8,D5DC,DFEE,B2B8,BADF,DFEC,DBC1,D1E4,CBF4,B4BD,B0A6,DFF1,CCC6,DFF2,DFED,DFE9,DFEB,DFEF,DFF0,BBBD,DFF3,DFF4,BBA3,CADB,CEA8,E0A7,B3AA,E0A6,E0A1,DFFE,CDD9,DFFC,DFFA,BFD0,D7C4,C9CC,DFF8,B0A1,DFFD,DFFB,E0A2,E0A8,B7C8,C6A1,C9B6,C0B2,DFF5,C5BE,D8C4,DFF9,C4F6,E0A3,E0A4,E0A5,D0A5,E0B4,CCE4,E0B1,BFA6,E0AF,CEB9,E0AB,C9C6,C0AE,E0AE,BAED,BAB0,E0A9,DFF6,E0B3,E0B8,B4AD,E0B9,CFB2,BAC8,E0B0,D0FA,E0AC,D4FB,DFF7,C5E7,E0AD,D3F7,E0B6,E0B7,E0C4,D0E1,E0BC,E0C9,E0CA,E0BE,E0AA,C9A4,E0C1,E0B2,CAC8,E0C3,E0B5,CECB,CBC3,E0CD,E0C6,E0C2,E0CB,E0BA,E0BF,E0C0,E0C5,E0C7,E0C8,E0CC,E0BB,CBD4,E0D5,E0D6,E0D2,E0D0,BCCE,E0D1,B8C2,D8C5,D0EA,C2EF,E0CF,E0BD,E0D4,E0D3,E0D7,E0DC,E0D8,D6F6,B3B0,D7EC,CBBB,E0DA,CEFB,BAD9,E0E1,E0DD,D2AD,E0E2,E0DB,E0D9,E0DF,E0E0,E0DE,E0E4,C6F7,D8AC,D4EB,E0E6,CAC9,E0E5,B8C1,E0E7,E0E8,E0E9,E0E3,BABF,CCE7,E0EA,CFF9,E0EB,C8C2,BDC0,C4D2,E0EC,E0ED,C7F4,CBC4,E0EE,BBD8,D8B6,D2F2,E0EF,CDC5,B6DA,E0F1,D4B0,C0A7,B4D1,CEA7,E0F0,E0F2,B9CC,B9FA,CDBC,E0F3,C6D4,E0F4,D4B2,C8A6,E0F6,E0F5,E0F7,CDC1,CAA5,D4DA,DBD7,DBD9,DBD8,B9E7,DBDC,DBDD,B5D8,DBDA,DBDB,B3A1,DBDF,BBF8,D6B7,DBE0,BEF9,B7BB,DBD0,CCAE,BFB2,BBB5,D7F8,BFD3,BFE9,BCE1,CCB3,DBDE,B0D3,CEEB,B7D8,D7B9,C6C2,C0A4,CCB9,DBE7,DBE1,C6BA,DBE3,DBE8,C5F7,DBEA,DBE9,BFC0,DBE6,DBE5,B4B9,C0AC,C2A2,DBE2,DBE4,D0CD,DBED,C0DD,DBF2,B6E2,DBF3,DBD2,B9B8,D4AB,DBEC,BFD1,DBF0,DBD1,B5E6,DBEB,BFE5,DBEE,DBF1,DBF9,B9A1,B0A3,C2F1,B3C7,DBEF,DBF8,C6D2,DBF4,DBF5,DBF7,DBF6,DBFE,D3F2,B2BA,DBFD,DCA4,DBFB,DBFA,DBFC,C5E0,BBF9,DCA3,DCA5,CCC3,B6D1,DDC0,DCA1,DCA2,C7B5,B6E9,DCA7,DCA6,DCA9,B1A4,B5CC,BFB0,D1DF,B6C2,DCA8,CBFA,EBF3,CBDC,CBFE,CCC1,C8FB,DCAA,CCEE,DCAB,DBD3,DCAF,DCAC,BEB3,CAFB,DCAD,C9CA,C4B9,C7BD,DCAE,D4F6,D0E6,C4AB,B6D5,DBD4,B1DA,DBD5,DBD6,BABE,C8C0,CABF,C8C9,D7B3,C9F9,BFC7,BAF8,D2BC,E2BA,B4A6,B1B8,B8B4,CFC4,D9E7,CFA6,CDE2,D9ED,B6E0,D2B9,B9BB,E2B9,E2B7,B4F3,CCEC,CCAB,B7F2,D8B2,D1EB,BABB,CAA7,CDB7,D2C4,BFE4,BCD0,B6E1,DEC5,DEC6,DBBC,D1D9,C6E6,C4CE,B7EE,B7DC,BFFC,D7E0,C6F5,B1BC,DEC8,BDB1,CCD7,DECA,DEC9,B5EC,C9DD,B0C2,C5AE,C5AB,C4CC,BCE9,CBFD,BAC3,E5F9,C8E7,E5FA,CDFD,D7B1,B8BE,C2E8,C8D1,E5FB,B6CA,BCCB,D1FD,E6A1,C3EE,E6A4,E5FE,E6A5,CDD7,B7C1,E5FC,E5FD,E6A3,C4DD,E6A8,E6A7,C3C3,C6DE,E6AA,C4B7,E6A2,CABC,BDE3,B9C3,E6A6,D0D5,CEAF,E6A9,E6B0,D2A6,BDAA,E6AD,E6AF,C0D1,D2CC,BCA7,E6B1,D2F6,D7CB,CDFE,CDDE,C2A6,E6AB,E6AC,BDBF,E6AE,E6B3,E6B2,E6B6,E6B8,C4EF,C4C8,BEEA,C9EF,E6B7,B6F0,C3E4,D3E9,E6B4,E6B5,C8A2,E6BD,E6B9,C6C5,CDF1,E6BB,E6BC,BBE9,E6BE,E6BA,C0B7,D3A4,E6BF,C9F4,E6C3,E6C4,D0F6,C3BD,C3C4,E6C2,E6C1,E6C7,CFB1,EBF4,E6CA,E6C5,BCDE,C9A9,BCB5,CFD3,E6C8,E6C9,E6CE,E6D0,E6D1,E6CB,B5D5,E6CC,E6CF,C4DB,E6C6,E6CD,E6D2,E6D4,E6D3,E6D5,D9F8,E6D6,E6D7,D7D3,E6DD,E6DE,BFD7,D4D0,D7D6,B4E6,CBEF,E6DA,D8C3,D7CE,D0A2,C3CF,E6DF,BCBE,B9C2,E6DB,D1A7,BAA2,C2CF,D8AB,CAEB,E5EE,E6DC,B7F5,C8E6,C4F5,E5B2,C4FE,CBFC,E5B3,D5AC,D3EE,CAD8,B0B2,CBCE,CDEA,BAEA,E5B5,E5B4,D7DA,B9D9,D6E6,B6A8,CDF0,D2CB,B1A6,CAB5,B3E8,C9F3,BFCD,D0FB,CAD2,E5B6,BBC2,CFDC,B9AC,D4D7,BAA6,D1E7,CFFC,BCD2,E5B7,C8DD,BFED,B1F6,CBDE,BCC5,BCC4,D2FA,C3DC,BFDC,B8BB,C3C2,BAAE,D4A2,C7DE,C4AF,B2EC,B9D1,E5BB,C1C8,D5AF,E5BC,E5BE,B4E7,B6D4,CBC2,D1B0,B5BC,CAD9,B7E2,C9E4,BDAB,CEBE,D7F0,D0A1,C9D9,B6FB,E6D8,BCE2,B3BE,C9D0,E6D9,B3A2,DECC,D3C8,DECD,D2A2,DECE,BECD,DECF,CAAC,D2FC,B3DF,E5EA,C4E1,BEA1,CEB2,C4F2,BED6,C6A8,B2E3,BED3,C7FC,CCEB,BDEC,CEDD,CABA,C6C1,E5EC,D0BC,D5B9,E5ED,CAF4,CDC0,C2C5,E5EF,C2C4,E5F0,E5F8,CDCD,C9BD,D2D9,E1A8,D3EC,CBEA,C6F1,E1AC,E1A7,E1A9,E1AA,E1AF,B2ED,E1AB,B8DA,E1AD,E1AE,E1B0,B5BA,E1B1,E1B3,E1B8,D1D2,E1B6,E1B5,C1EB,E1B7,D4C0,E1B2,E1BA,B0B6,E1B4,BFF9,E1B9,E1BB,E1BE,E1BC,D6C5,CFBF,E1BD,E1BF,C2CD,B6EB,D3F8,C7CD,B7E5,BEFE,E1C0,E1C1,E1C7,B3E7,C6E9,B4DE,D1C2,E1C8,E1C6,E1C5,E1C3,E1C2,B1C0,D5B8,E1C4,E1CB,E1CC,E1CA,EFFA,E1D3,E1D2,C7B6,E1C9,E1CE,E1D0,E1D4,E1D1,E1CD,E1CF,E1D5,E1D6,E1D7,E1D8,E1DA,E1DB,CEA1,E7DD,B4A8,D6DD,D1B2,B3B2,B9A4,D7F3,C7C9,BEDE,B9AE,CED7,B2EE,DBCF,BCBA,D2D1,CBC8,B0CD,CFEF,D9E3,BDED,B1D2,CAD0,B2BC,CBA7,B7AB,CAA6,CFA3,E0F8,D5CA,E0FB,E0FA,C5C1,CCFB,C1B1,E0F9,D6E3,B2AF,D6C4,B5DB,B4F8,D6A1,CFAF,B0EF,E0FC,E1A1,B3A3,E0FD,E0FE,C3B1,C3DD,E1A2,B7F9,BBCF,E1A3,C4BB,E1A4,E1A5,E1A6,B4B1,B8C9,C6BD,C4EA,B2A2,D0D2,E7DB,BBC3,D3D7,D3C4,B9E3,E2CF,D7AF,C7EC,B1D3,B4B2,E2D1,D0F2,C2AE,E2D0,BFE2,D3A6,B5D7,E2D2,B5EA,C3ED,B8FD,B8AE,C5D3,B7CF,E2D4,E2D3,B6C8,D7F9,CDA5,E2D8,E2D6,CAFC,BFB5,D3B9,E2D5,E2D7,C1AE,C0C8,E2DB,E2DA,C0AA,C1CE,E2DC,E2DD,E2DE,DBC8,D1D3,CDA2,BDA8,DEC3,D8A5,BFAA,DBCD,D2EC,C6FA,C5AA,DEC4,B1D7,DFAE,CABD,DFB1,B9AD,D2FD,B8A5,BAEB,B3DA,B5DC,D5C5,C3D6,CFD2,BBA1,E5F3,E5F2,E5F4,CDE4,C8F5,B5AF,C7BF,E5F6,ECB0,E5E6,B9E9,B5B1,C2BC,E5E8,E5E7,E5E9,D2CD,E1EA,D0CE,CDAE,D1E5,B2CA,B1EB,B1F2,C5ED,D5C3,D3B0,E1DC,E1DD,D2DB,B3B9,B1CB,CDF9,D5F7,E1DE,BEB6,B4FD,E1DF,BADC,E1E0,BBB2,C2C9,E1E1,D0EC,CDBD,E1E2,B5C3,C5C7,E1E3,E1E4,D3F9,E1E5,D1AD,E1E6,CEA2,E1E7,B5C2,E1E8,BBD5,D0C4,E2E0,B1D8,D2E4,E2E1,BCC9,C8CC,E2E3,ECFE,ECFD,DFAF,E2E2,D6BE,CDFC,C3A6,E3C3,D6D2,E2E7,E2E8,D3C7,E2EC,BFEC,E2ED,E2E5,B3C0,C4EE,E2EE,D0C3,BAF6,E2E9,B7DE,BBB3,CCAC,CBCB,E2E4,E2E6,E2EA,E2EB,E2F7,E2F4,D4F5,E2F3,C5AD,D5FA,C5C2,B2C0,E2EF,E2F2,C1AF,CBBC,B5A1,E2F9,BCB1,E2F1,D0D4,D4B9,E2F5,B9D6,E2F6,C7D3,E2F0,D7DC,EDA1,E2F8,EDA5,E2FE,CAD1,C1B5,BBD0,BFD6,BAE3,CBA1,EDA6,EDA3,EDA2,BBD6,EDA7,D0F4,EDA4,BADE,B6F7,E3A1,B6B2,CCF1,B9A7,CFA2,C7A1,BFD2,B6F1,E2FA,E2FB,E2FD,E2FC,C4D5,E3A2,D3C1,E3A7,C7C4,CFA4,E3A9,BAB7,E3A8,BBDA,E3A3,E3A4,E3AA,E3A6,CEF2,D3C6,BBBC,D4C3,C4FA,EDA8,D0FC,E3A5,C3F5,E3AD,B1AF,E3B2,BCC2,E3AC,B5BF,C7E9,E3B0,BEAA,CDEF,BBF3,CCE8,E3AF,E3B1,CFA7,E3AE,CEA9,BBDD,B5EB,BEE5,B2D2,B3CD,B1B9,E3AB,B2D1,B5AC,B9DF,B6E8,CFEB,E3B7,BBCC,C8C7,D0CA,E3B8,B3EE,EDA9,D3FA,D3E4,EDAA,E3B9,D2E2,E3B5,D3DE,B8D0,E3B3,E3B6,B7DF,E3B4,C0A2,E3BA,D4B8,B4C8,E3BB,BBC5,C9F7,C9E5,C4BD,EDAB,C2FD,BBDB,BFAE,CEBF,E3BC,BFB6,B1EF,D4F7,E3BE,EDAD,E3BF,BAA9,EDAC,E3BD,E3C0,BAB6,B6AE,D0B8,B0C3,EDAE,EDAF,C0C1,E3C1,C5B3,E3C2,DCB2,EDB0,B8EA,CEEC,EAA7,D0E7,CAF9,C8D6,CFB7,B3C9,CED2,BDE4,E3DE,BBF2,EAA8,D5BD,C6DD,EAA9,EAAA,EAAC,EAAB,EAAE,EAAD,BDD8,EAAF,C2BE,B4C1,B4F7,BBA7,ECE6,ECE5,B7BF,CBF9,B1E2,ECE7,C9C8,ECE8,ECE9,CAD6,DED0,B2C5,D4FA,C6CB,B0C7,B4F2,C8D3,CDD0,BFB8,BFDB,C7A4,D6B4,C0A9,DED1,C9A8,D1EF,C5A4,B0E7,B3B6,C8C5,B0E2,B7F6,C5FA,B6F3,D5D2,B3D0,BCBC,B3AD,BEF1,B0D1,D2D6,CAE3,D7A5,CDB6,B6B6,BFB9,D5DB,B8A7,C5D7,DED2,BFD9,C2D5,C7C0,BBA4,B1A8,C5EA,C5FB,CCA7,B1A7,B5D6,C4A8,DED3,D1BA,B3E9,C3F2,B7F7,D6F4,B5A3,B2F0,C4B4,C4E9,C0AD,DED4,B0E8,C5C4,C1E0,B9D5,BEDC,CDD8,B0CE,CDCF,DED6,BED0,D7BE,DED5,D5D0,B0DD,C4E2,C2A3,BCF0,D3B5,C0B9,C5A1,B2A6,D4F1,C0A8,CAC3,DED7,D5FC,B9B0,C8AD,CBA9,DED9,BFBD,C6B4,D7A7,CAB0,C4C3,B3D6,B9D2,D6B8,EAFC,B0B4,BFE6,CCF4,CDDA,D6BF,C2CE,CECE,CCA2,D0AE,C4D3,B5B2,DED8,D5F5,BCB7,BBD3,B0A4,C5B2,B4EC,D5F1,EAFD,DEDA,CDA6,CDEC,CEE6,DEDC,CDB1,C0A6,D7BD,DEDB,B0C6,BAB4,C9D3,C4F3,BEE8,B2B6,C0CC,CBF0,BCF1,BBBB,B5B7,C5F5,DEE6,DEE3,BEDD,DEDF,B4B7,BDDD,DEE0,C4ED,CFC6,B5E0,B6DE,CADA,B5F4,DEE5,D5C6,DEE1,CCCD,C6FE,C5C5,D2B4,BEF2,C2D3,CCBD,B3B8,BDD3,BFD8,CDC6,D1DA,B4EB,DEE4,DEDD,DEE7,EAFE,C2B0,DEE2,D6C0,B5A7,B2F4,DEE8,DEF2,DEED,DEF1,C8E0,D7E1,DEEF,C3E8,CCE1,B2E5,D2BE,DEEE,DEEB,CED5,B4A7,BFAB,BEBE,BDD2,DEE9,D4AE,DEDE,DEEA,C0BF,DEEC,B2F3,B8E9,C2A7,BDC1,DEF5,DEF8,B2AB,B4A4,B4EA,C9A6,DEF6,CBD1,B8E3,DEF7,DEFA,DEF9,CCC2,B0E1,B4EE,E5BA,D0AF,B2EB,EBA1,DEF4,C9E3,DEF3,B0DA,D2A1,B1F7,CCAF,DEF0,CBA4,D5AA,DEFB,B4DD,C4A6,DEFD,C3FE,C4A1,DFA1,C1CC,DEFC,BEEF,C6B2,B3C5,C8F6,CBBA,DEFE,DFA4,D7B2,B3B7,C1C3,C7CB,B2A5,B4E9,D7AB,C4EC,DFA2,DFA3,DFA5,BAB3,DFA6,C0DE,C9C3,B2D9,C7E6,DFA7,C7DC,DFA8,EBA2,CBD3,DFAA,DFA9,B2C1,C5CA,DFAB,D4DC,C8C1,DFAC,BEF0,DFAD,D6A7,EAB7,EBB6,CAD5,D8FC,B8C4,B9A5,B7C5,D5FE,B9CA,D0A7,F4CD,B5D0,C3F4,BEC8,EBB7,B0BD,BDCC,C1B2,B1D6,B3A8,B8D2,C9A2,B6D8,EBB8,BEB4,CAFD,C7C3,D5FB,B7F3,CEC4,D5AB,B1F3,ECB3,B0DF,ECB5,B6B7,C1CF,F5FA,D0B1,D5E5,CED3,BDEF,B3E2,B8AB,D5B6,EDBD,B6CF,CBB9,D0C2,B7BD,ECB6,CAA9,C5D4,ECB9,ECB8,C2C3,ECB7,D0FD,ECBA,ECBB,D7E5,ECBC,ECBD,C6EC,CEDE,BCC8,C8D5,B5A9,BEC9,D6BC,D4E7,D1AE,D0F1,EAB8,EAB9,EABA,BAB5,CAB1,BFF5,CDFA,EAC0,B0BA,EABE,C0A5,EABB,B2FD,C3F7,BBE8,D2D7,CEF4,EABF,EABC,EAC3,D0C7,D3B3,B4BA,C3C1,D7F2,D5D1,CAC7,EAC5,EAC4,EAC7,EAC6,D6E7,CFD4,EACB,BBCE,BDFA,C9CE,EACC,C9B9,CFFE,EACA,D4CE,EACD,EACF,CDED,EAC9,EACE,CEEE,BBDE,B3BF,C6D5,BEB0,CEFA,C7E7,BEA7,EAD0,D6C7,C1C0,D4DD,EAD1,CFBE,EAD2,CAEE,C5AF,B0B5,EAD4,EAD3,F4DF,C4BA,B1A9,E5DF,EAD5,CAEF,EAD6,EAD7,C6D8,EAD8,EAD9,D4BB,C7FA,D2B7,B8FC,EAC2,B2DC,C2FC,D4F8,CCE6,D7EE,D4C2,D3D0,EBC3,C5F3,B7FE,EBD4,CBB7,EBDE,C0CA,CDFB,B3AF,C6DA,EBFC,C4BE,CEB4,C4A9,B1BE,D4FD,CAF5,D6EC,C6D3,B6E4,BBFA,D0E0,C9B1,D4D3,C8A8,B8CB,E8BE,C9BC,E8BB,C0EE,D0D3,B2C4,B4E5,E8BC,D5C8,B6C5,E8BD,CAF8,B8DC,CCF5,C0B4,D1EE,E8BF,E8C2,BABC,B1AD,BDDC,EABD,E8C3,E8C6,E8CB,E8CC,CBC9,B0E5,BCAB,B9B9,E8C1,CDF7,E8CA,CEF6,D5ED,C1D6,E8C4,C3B6,B9FB,D6A6,E8C8,CAE0,D4E6,E8C0,E8C5,E8C7,C7B9,B7E3,E8C9,BFDD,E8D2,E8D7,E8D5,BCDC,BCCF,E8DB,E8DE,E8DA,B1FA,B0D8,C4B3,B8CC,C6E2,C8BE,C8E1,E8CF,E8D4,E8D6,B9F1,E8D8,D7F5,C4FB,E8DC,B2E9,E8D1,BCED,BFC2,E8CD,D6F9,C1F8,B2F1,E8DF,CAC1,E8D9,D5A4,B1EA,D5BB,E8CE,E8D0,B6B0,E8D3,E8DD,C0B8,CAF7,CBA8,C6DC,C0F5,E8E9,D0A3,E8F2,D6EA,E8E0,E8E1,D1F9,BACB,B8F9,B8F1,D4D4,E8EF,E8EE,E8EC,B9F0,CCD2,E8E6,CEA6,BFF2,B0B8,E8F1,E8F0,D7C0,E8E4,CDA9,C9A3,BBB8,BDDB,E8EA,E8E2,E8E3,E8E5,B5B5,E8E7,C7C5,E8EB,E8ED,BDB0,D7AE,E8F8,E8F5,CDB0,E8F6,C1BA,E8E8,C3B7,B0F0,E8F4,E8F7,B9A3,C9D2,C3CE,CEE0,C0E6,CBF3,CCDD,D0B5,CAE1,E8F3,BCEC,E8F9,C3DE,C6E5,B9F7,B0F4,D7D8,BCAC,C5EF,CCC4,E9A6,C9AD,E9A2,C0E2,BFC3,E8FE,B9D7,E8FB,E9A4,D2CE,E9A3,D6B2,D7B5,E9A7,BDB7,E8FC,E8FD,E9A1,CDD6,D2AC,E9B2,E9A9,B4AA,B4BB,E9AB,D0A8,E9A5,B3FE,E9AC,C0E3,E9AA,E9B9,E9B8,E9AE,E8FA,E9A8,BFAC,E9B1,E9BA,C2A5,E9AF,B8C5,E9AD,D3DC,E9B4,E9B5,E9B7,E9C7,C0C6,E9C5,E9B0,E9BB,B0F1,E9BC,D5A5,E9BE,E9BF,E9C1,C1F1,C8B6,E9BD,E9C2,E9C3,E9B3,E9B6,BBB1,E9C0,BCF7,E9C4,E9C6,E9CA,E9CE,B2DB,E9C8,B7AE,E9CB,E9CC,D5C1,C4A3,E9D8,BAE1,E9C9,D3A3,E9D4,E9D7,E9D0,E9CF,C7C1,E9D2,E9D9,B3C8,E9D3,CFF0,E9CD,B3F7,E9D6,E9DA,CCB4,CFAD,E9D5,E9DC,E9DB,E9DE,E9D1,E9DD,E9DF,C3CA,C7B7,B4CE,BBB6,D0C0,ECA3,C5B7,D3FB,ECA4,ECA5,C6DB,BFEE,ECA6,ECA7,D0AA,C7B8,B8E8,ECA8,D6B9,D5FD,B4CB,B2BD,CEE4,C6E7,CDE1,B4F5,CBC0,BCDF,E9E2,E9E3,D1EA,E9E5,B4F9,E9E4,D1B3,CAE2,B2D0,E9E8,E9E6,E9E7,D6B3,E9E9,E9EA,E9EB,E9EC,ECAF,C5B9,B6CE,D2F3,B5EE,BBD9,ECB1,D2E3,CEE3,C4B8,C3BF,B6BE,D8B9,B1C8,B1CF,B1D1,C5FE,B1D0,C3AB,D5B1,EBA4,BAC1,CCBA,EBA5,EBA7,EBA8,EBA6,EBA9,EBAB,EBAA,EBAC,CACF,D8B5,C3F1,C3A5,C6F8,EBAD,C4CA,EBAE,EBAF,EBB0,B7D5,B7FA,EBB1,C7E2,EBB3,BAA4,D1F5,B0B1,EBB2,EBB4,B5AA,C2C8,C7E8,EBB5,CBAE,E3DF,D3C0,D9DB,CDA1,D6AD,C7F3,D9E0,BBE3,BABA,E3E2,CFAB,E3E0,C9C7,BAB9,D1B4,E3E1,C8EA,B9AF,BDAD,B3D8,CEDB,CCC0,E3E8,E3E9,CDF4,CCAD,BCB3,E3EA,E3EB,D0DA,C6FB,B7DA,C7DF,D2CA,CED6,E3E4,E3EC,C9F2,B3C1,E3E7,C6E3,E3E5,EDB3,E3E6,C9B3,C5E6,B9B5,C3BB,E3E3,C5BD,C1A4,C2D9,B2D7,E3ED,BBA6,C4AD,E3F0,BEDA,E3FB,E3F5,BAD3,B7D0,D3CD,D6CE,D5D3,B9C1,D5B4,D1D8,D0B9,C7F6,C8AA,B2B4,C3DA,E3EE,E3FC,E3EF,B7A8,E3F7,E3F4,B7BA,C5A2,E3F6,C5DD,B2A8,C6FC,C4E0,D7A2,C0E1,E3F9,E3FA,E3FD,CCA9,E3F3,D3BE,B1C3,EDB4,E3F1,E3F2,E3F8,D0BA,C6C3,D4F3,E3FE,BDE0,E4A7,E4A6,D1F3,E4A3,E4A9,C8F7,CFB4,E4A8,E4AE,C2E5,B6B4,BDF2,E4A2,BAE9,E4AA,E4AC,B6FD,D6DE,E4B2,E4AD,E4A1,BBEE,CDDD,C7A2,C5C9,C1F7,E4A4,C7B3,BDAC,BDBD,E4A5,D7C7,B2E2,E4AB,BCC3,E4AF,BBEB,E4B0,C5A8,E4B1,D5E3,BFA3,E4BA,E4B7,E4BB,E4BD,C6D6,BAC6,C0CB,B8A1,E4B4,D4A1,BAA3,BDFE,E4BC,CDBF,C4F9,CFFB,C9E6,D3BF,CFD1,E4B3,E4B8,E4B9,CCE9,CCCE,C0D4,E4B5,C1B0,E4B6,CED0,BBC1,B5D3,C8F3,BDA7,D5C7,C9AC,B8A2,E4CA,E4CC,D1C4,D2BA,BAAD,BAD4,E4C3,B5ED,D7CD,E4C0,CFFD,E4BF,C1DC,CCCA,CAE7,C4D7,CCD4,E4C8,E4C7,E4C1,E4C4,B5AD,D3D9,E4C6,D2F9,B4E3,BBB4,C9EE,B4BE,BBEC,D1CD,CCED,EDB5,C7E5,D4A8,E4CB,D7D5,E4C2,BDA5,E4C5,D3E6,E4C9,C9F8,E4BE,D3E5,C7FE,B6C9,D4FC,B2B3,E4D7,CEC2,E4CD,CEBC,B8DB,E4D6,BFCA,D3CE,C3EC,C5C8,E4D8,CDC4,E4CF,E4D4,E4D5,BAFE,CFE6,D5BF,E4D2,E4D0,E4CE,CDE5,CAAA,C0A3,BDA6,E4D3,B8C8,E4E7,D4B4,E4DB,C1EF,E4E9,D2E7,E4DF,E4E0,CFAA,CBDD,E4DA,E4D1,E4E5,C8DC,E4E3,C4E7,E4E2,E4E1,B3FC,E4E8,B5E1,D7CC,E4E6,BBAC,D7D2,CCCF,EBF8,E4E4,B9F6,D6CD,E4D9,E4DC,C2FA,E4DE,C2CB,C0C4,C2D0,B1F5,CCB2,B5CE,E4EF,C6AF,C6E1,E4F5,C2A9,C0EC,D1DD,E4EE,C4AE,E4ED,E4F6,E4F4,C2FE,E4DD,E4F0,CAFE,D5C4,E4F1,D1FA,E4EB,E4EC,E4F2,CEAB,C5CB,C7B1,C2BA,E4EA,C1CA,CCB6,B3B1,E4FB,E4F3,E4FA,E4FD,E4FC,B3CE,B3BA,E4F7,E4F9,E4F8,C5EC,C0BD,D4E8,E5A2,B0C4,E5A4,E5A3,BCA4,E5A5,E5A1,E4FE,B1F4,E5A8,E5A9,E5A6,E5A7,E5AA,C6D9,E5AB,E5AD,E5AC,E5AF,E5AE,B9E0,E5B0,E5B1,BBF0,ECE1,C3F0,B5C6,BBD2,C1E9,D4EE,BEC4,D7C6,D4D6,B2D3,ECBE,EAC1,C2AF,B4B6,D1D7,B3B4,C8B2,BFBB,ECC0,D6CB,ECBF,ECC1,ECC5,BEE6,CCBF,C5DA,BEBC,ECC6,B1FE,ECC4,D5A8,B5E3,ECC2,C1B6,B3E3,ECC3,CBB8,C0C3,CCFE,C1D2,ECC8,BAE6,C0D3,D6F2,D1CC,BFBE,B7B3,C9D5,ECC7,BBE2,CCCC,BDFD,C8C8,CFA9,CDE9,C5EB,B7E9,D1C9,BAB8,ECC9,ECCA,BBC0,ECCB,ECE2,B1BA,B7D9,BDB9,ECCC,D1E6,ECCD,C8BB,ECD1,ECD3,BBCD,BCE5,ECCF,C9B7,C3BA,ECE3,D5D5,ECD0,D6F3,ECD2,ECCE,ECD4,ECD5,C9BF,CFA8,D0DC,D1AC,C8DB,ECD6,CEF5,CAEC,ECDA,ECD9,B0BE,ECD7,ECD8,ECE4,C8BC,C1C7,ECDC,D1E0,ECDB,D4EF,ECDD,DBC6,ECDE,B1AC,ECDF,ECE0,D7A6,C5C0,EBBC,B0AE,BEF4,B8B8,D2AF,B0D6,B5F9,D8B3,CBAC,E3DD,C6AC,B0E6,C5C6,EBB9,EBBA,EBBB,D1C0,C5A3,EAF2,C4B2,C4B5,C0CE,EAF3,C4C1,CEEF,EAF0,EAF4,C9FC,C7A3,CCD8,CEFE,EAF5,EAF6,CFAC,C0E7,EAF7,B6BF,EAF8,EAF9,EAFA,EAFB,EAF1,C8AE,E1EB,B7B8,E1EC,E1ED,D7B4,E1EE,E1EF,D3CC,E1F1,BFF1,E1F0,B5D2,B1B7,E1F3,E1F2,BAFC,E1F4,B9B7,BED1,C4FC,BADD,BDC6,E1F5,E1F7,B6C0,CFC1,CAA8,E1F6,D5F8,D3FC,E1F8,E1FC,E1F9,E1FA,C0EA,E1FE,E2A1,C0C7,E1FB,E1FD,E2A5,C1D4,E2A3,E2A8,B2FE,E2A2,C3CD,B2C2,E2A7,E2A6,E2A4,E2A9,E2AB,D0C9,D6ED,C3A8,E2AC,CFD7,E2AE,BAEF,E9E0,E2AD,E2AA,BBAB,D4B3,E2B0,E2AF,E9E1,E2B1,E2B2,E2B3,CCA1,E2B4,E2B5,D0FE,C2CA,D3F1,CDF5,E7E0,E7E1,BEC1,C2EA,E7E4,E7E3,CDE6,C3B5,E7E2,BBB7,CFD6,C1E1,E7E9,E7E8,E7F4,B2A3,E7EA,E7E6,E7EC,E7EB,C9BA,D5E4,E7E5,B7A9,E7E7,E7EE,E7F3,D6E9,E7ED,E7F2,E7F1,B0E0,E7F5,C7F2,C0C5,C0ED,C1F0,E7F0,E7F6,CBF6,E8A2,E8A1,D7C1,E7FA,E7F9,E7FB,E7F7,E7FE,E7FD,E7FC,C1D5,C7D9,C5FD,C5C3,C7ED,E8A3,E8A6,E8A5,E8A7,BAF7,E7F8,E8A4,C8F0,C9AA,E8A9,B9E5,D1FE,E8A8,E8AA,E8AD,E8AE,C1A7,E8AF,E8B0,E8AC,E8B4,E8AB,E8B1,E8B5,E8B2,E8B3,E8B7,E8B6,B9CF,F0AC,F0AD,C6B0,B0EA,C8BF,CDDF,CECD,EAB1,EAB2,C6BF,B4C9,EAB3,D5E7,DDF9,EAB4,EAB5,EAB6,B8CA,DFB0,C9F5,CCF0,C9FA,C9FB,D3C3,CBA6,B8A6,F0AE,B1C2,E5B8,CCEF,D3C9,BCD7,C9EA,B5E7,C4D0,B5E9,EEAE,BBAD,E7DE,EEAF,B3A9,EEB2,EEB1,BDE7,EEB0,CEB7,C5CF,C1F4,DBCE,EEB3,D0F3,C2D4,C6E8,B7AC,EEB4,B3EB,BBFB,EEB5,E7DC,EEB6,BDAE,F1E2,CAE8,D2C9,F0DA,F0DB,F0DC,C1C6,B8ED,BECE,F0DE,C5B1,F0DD,D1F1,F0E0,B0CC,BDEA,D2DF,F0DF,B4AF,B7E8,F0E6,F0E5,C6A3,F0E1,F0E2,B4C3,F0E3,D5EE,CCDB,BED2,BCB2,F0E8,F0E7,F0E4,B2A1,D6A2,D3B8,BEB7,C8AC,F0EA,D1F7,D6CC,BADB,F0E9,B6BB,CDB4,C6A6,C1A1,F0EB,F0EE,F0ED,F0F0,F0EC,BBBE,F0EF,CCB5,F0F2,B3D5,B1D4,F0F3,F0F4,F0F6,B4E1,F0F1,F0F7,F0FA,F0F8,F0F5,F0FD,F0F9,F0FC,F0FE,F1A1,CEC1,F1A4,F1A3,C1F6,F0FB,CADD,B4F1,B1F1,CCB1,F1A6,F1A7,F1AC,D5CE,F1A9,C8B3,F1A2,F1AB,F1A8,F1A5,F1AA,B0A9,F1AD,F1AF,F1B1,F1B0,F1AE,D1A2,F1B2,F1B3,B9EF,B5C7,B0D7,B0D9,D4ED,B5C4,BDD4,BBCA,F0A7,B8DE,F0A8,B0A8,F0A9,CDEE,F0AA,F0AB,C6A4,D6E5,F1E4,F1E5,C3F3,D3DB,D6D1,C5E8,D3AF,D2E6,EEC1,B0BB,D5B5,D1CE,BCE0,BAD0,BFF8,B8C7,B5C1,C5CC,CAA2,C3CB,EEC2,C4BF,B6A2,EDEC,C3A4,D6B1,CFE0,EDEF,C5CE,B6DC,CAA1,EDED,EDF0,EDF1,C3BC,BFB4,EDEE,EDF4,EDF2,D5E6,C3DF,EDF3,EDF6,D5A3,D1A3,EDF5,C3D0,EDF7,BFF4,BEEC,EDF8,CCF7,D1DB,D7C5,D5F6,EDFC,EDFB,EDF9,EDFA,EDFD,BEA6,CBAF,EEA1,B6BD,EEA2,C4C0,EDFE,BDDE,B2C7,B6C3,EEA5,D8BA,EEA3,EEA6,C3E9,B3F2,EEA7,EEA4,CFB9,EEA8,C2F7,EEA9,EEAA,DEAB,C6B3,C7C6,D6F5,B5C9,CBB2,EEAB,CDAB,EEAC,D5B0,EEAD,F6C4,DBC7,B4A3,C3AC,F1E6,CAB8,D2D3,D6AA,EFF2,BED8,BDC3,EFF3,B6CC,B0AB,CAAF,EDB6,EDB7,CEF9,B7AF,BFF3,EDB8,C2EB,C9B0,EDB9,C6F6,BFB3,EDBC,C5F8,D1D0,D7A9,EDBA,EDBB,D1E2,EDBF,EDC0,EDC4,EDC8,EDC6,EDCE,D5E8,EDC9,EDC7,EDBE,C5E9,C6C6,C9E9,D4D2,EDC1,EDC2,EDC3,EDC5,C0F9,B4A1,B9E8,EDD0,EDD1,EDCA,EDCF,CEF8,CBB6,EDCC,EDCD,CFF5,EDD2,C1F2,D3B2,EDCB,C8B7,BCEF,C5F0,EDD6,B5EF,C2B5,B0AD,CBE9,B1AE,EDD4,CDEB,B5E2,EDD5,EDD3,EDD7,B5FA,EDD8,EDD9,EDDC,B1CC,C5F6,BCEE,EDDA,CCBC,B2EA,EDDB,C4EB,B4C5,B0F5,EDDF,C0DA,B4E8,C5CD,EDDD,BFC4,EDDE,C4A5,EDE0,EDE1,EDE3,C1D7,BBC7,BDB8,EDE2,EDE4,EDE6,EDE5,EDE7,CABE,ECEA,C0F1,C9E7,ECEB,C6EE,ECEC,C6ED,ECED,ECF0,D7E6,ECF3,ECF1,ECEE,ECEF,D7A3,C9F1,CBEE,ECF4,ECF2,CFE9,ECF6,C6B1,BCC0,ECF5,B5BB,BBF6,ECF7,D9F7,BDFB,C2BB,ECF8,ECF9,B8A3,ECFA,ECFB,ECFC,D3ED,D8AE,C0EB,C7DD,BACC,D0E3,CBBD,CDBA,B8D1,B1FC,C7EF,D6D6,BFC6,C3EB,EFF5,C3D8,D7E2,EFF7,B3D3,C7D8,D1ED,D6C8,EFF8,EFF6,BBFD,B3C6,BDD5,D2C6,BBE0,CFA1,EFFC,EFFB,EFF9,B3CC,C9D4,CBB0,EFFE,B0DE,D6C9,EFFD,B3ED,F6D5,CEC8,F0A2,F0A1,B5BE,BCDA,BBFC,B8E5,C4C2,F0A3,CBEB,F0A6,D1A8,BEBF,C7EE,F1B6,F1B7,BFD5,B4A9,F1B8,CDBB,C7D4,D5AD,F1B9,F1BA,C7CF,D2A4,D6CF,F1BB,BDD1,B4B0,BEBD,B4DC,CED1,BFDF,F1BD,BFFA,F1BC,F1BF,F1BE,F1C0,F1C1,C1FE,C1A2,CAFA,D5BE,BEBA,BEB9,D5C2,BFA2,CDAF,F1B5,BDDF,B6CB,D6F1,F3C3,F3C4,B8CD,F3C6,F3C7,B0CA,F3C5,F3C9,CBF1,F3CB,D0A6,B1CA,F3C8,F3CF,B5D1,F3D7,F3D2,F3D4,F3D3,B7FB,B1BF,F3CE,F3CA,B5DA,F3D0,F3D1,F3D5,F3CD,BCE3,C1FD,F3D6,F3DA,F3CC,B5C8,BDEE,F3DC,B7A4,BFF0,D6FE,CDB2,B4F0,B2DF,F3D8,F3D9,C9B8,F3DD,F3DE,F3E1,F3DF,F3E3,F3E2,F3DB,BFEA,B3EF,F3E0,C7A9,BCF2,F3EB,B9BF,F3E4,B2AD,BBFE,CBE3,F3ED,F3E9,B9DC,F3EE,F3E5,F3E6,F3EA,C2E1,F3EC,F3EF,F3E8,BCFD,CFE4,F3F0,F3E7,F3F2,D7AD,C6AA,F3F3,F3F1,C2A8,B8DD,F3F5,F3F4,B4DB,F3F6,F3F7,F3F8,C0BA,C0E9,C5F1,F3FB,F3FA,B4D8,F3FE,F3F9,F3FC,F3FD,F4A1,F4A3,BBC9,F4A2,F4A4,B2BE,F4A6,F4A5,BCAE,C3D7,D9E1,C0E0,F4CC,D7D1,B7DB,F4CE,C1A3,C6C9,B4D6,D5B3,F4D0,F4CF,F4D1,CBDA,F4D2,D4C1,D6E0,B7E0,C1B8,C1BB,F4D3,BEAC,B4E2,F4D4,F4D5,BEAB,F4D6,F4DB,F4D7,F4DA,BAFD,F4D8,F4D9,B8E2,CCC7,F4DC,B2DA,C3D3,D4E3,BFB7,F4DD,C5B4,F4E9,CFB5,CEC9,CBD8,CBF7,BDF4,D7CF,C0DB,D0F5,F4EA,F4EB,F4EC,F7E3,B7B1,F4ED,D7EB,F4EE,E6F9,BEC0,E6FA,BAEC,E6FB,CFCB,E6FC,D4BC,BCB6,E6FD,E6FE,BCCD,C8D2,CEB3,E7A1,B4BF,E7A2,C9B4,B8D9,C4C9,D7DD,C2DA,B7D7,D6BD,CEC6,B7C4,C5A6,E7A3,CFDF,E7A4,E7A5,E7A6,C1B7,D7E9,C9F0,CFB8,D6AF,D6D5,E7A7,B0ED,E7A8,E7A9,C9DC,D2EF,BEAD,E7AA,B0F3,C8DE,BDE1,E7AB,C8C6,E7AC,BBE6,B8F8,D1A4,E7AD,C2E7,BEF8,BDCA,CDB3,E7AE,E7AF,BEEE,D0E5,CBE7,CCD0,BCCC,E7B0,BCA8,D0F7,E7B1,D0F8,E7B2,E7B3,B4C2,E7B4,E7B5,C9FE,CEAC,C3E0,E7B7,B1C1,B3F1,E7B8,E7B9,D7DB,D5C0,E7BA,C2CC,D7BA,E7BB,E7BC,E7BD,BCEA,C3E5,C0C2,E7BE,E7BF,BCA9,E7C0,E7C1,E7B6,B6D0,E7C2,E7C3,E7C4,BBBA,B5DE,C2C6,B1E0,E7C5,D4B5,E7C6,B8BF,E7C8,E7C7,B7EC,E7C9,B2F8,E7CA,E7CB,E7CC,E7CD,E7CE,E7CF,E7D0,D3A7,CBF5,E7D1,E7D2,E7D3,E7D4,C9C9,E7D5,E7D6,E7D7,E7D8,E7D9,BDC9,E7DA,F3BE,B8D7,C8B1,F3BF,F3C0,F3C1,B9DE,CDF8,D8E8,BAB1,C2DE,EEB7,B7A3,EEB9,EEB8,B0D5,EEBB,D5D6,D7EF,D6C3,EEBD,CAF0,EEBC,EEBE,EEC0,EEBF,D1F2,C7BC,C3C0,B8E1,C1E7,F4C6,D0DF,F4C7,CFDB,C8BA,F4C8,F4C9,F4CA,F4CB,D9FA,B8FE,E5F1,D3F0,F4E0,CECC,B3E1,F1B4,D2EE,F4E1,CFE8,F4E2,C7CC,B5D4,B4E4,F4E4,F4E3,F4E5,F4E6,F4E7,BAB2,B0BF,F4E8,B7AD,D2ED,D2AB,C0CF,BFBC,EBA3,D5DF,EAC8,F1F3,B6F8,CBA3,C4CD,F1E7,F1E8,B8FB,F1E9,BAC4,D4C5,B0D2,F1EA,F1EB,F1EC,F1ED,F1EE,F1EF,F1F1,F1F0,C5D5,F1F2,B6FA,F1F4,D2AE,DEC7,CBCA,B3DC,B5A2,B9A2,C4F4,F1F5,F1F6,C1C4,C1FB,D6B0,F1F7,F1F8,C1AA,C6B8,BEDB,F1F9,B4CF,F1FA,EDB2,EDB1,CBE0,D2DE,CBC1,D5D8,C8E2,C0DF,BCA1,EBC1,D0A4,D6E2,B6C7,B8D8,EBC0,B8CE,EBBF,B3A6,B9C9,D6AB,B7F4,B7CA,BCE7,B7BE,EBC6,EBC7,B0B9,BFCF,EBC5,D3FD,EBC8,EBC9,B7CE,EBC2,EBC4,C9F6,D6D7,D5CD,D0B2,EBCF,CEB8,EBD0,B5A8,B1B3,EBD2,CCA5,C5D6,EBD3,EBD1,C5DF,EBCE,CAA4,EBD5,B0FB,BAFA,D8B7,F1E3,EBCA,EBCB,EBCC,EBCD,EBD6,E6C0,EBD9,BFE8,D2C8,EBD7,EBDC,B8EC,EBD8,BDBA,D0D8,B0B7,EBDD,C4DC,D6AC,B4E0,C2F6,BCB9,EBDA,EBDB,D4E0,C6EA,C4D4,EBDF,C5A7,D9F5,B2B1,EBE4,BDC5,EBE2,EBE3,B8AC,CDD1,EBE5,EBE1,C1B3,C6A2,CCF3,EBE6,C0B0,D2B8,EBE7,B8AF,B8AD,EBE8,C7BB,CDF3,EBEA,EBEB,EBED,D0C8,EBF2,EBEE,EBF1,C8F9,D1FC,EBEC,EBE9,B8B9,CFD9,C4E5,EBEF,EBF0,CCDA,CDC8,B0F2,EBF6,EBF5,B2B2,B8E0,EBF7,B1EC,CCC5,C4A4,CFA5,EBF9,ECA2,C5F2,EBFA,C9C5,E2DF,EBFE,CDCE,ECA1,B1DB,D3B7,D2DC,EBFD,EBFB,B3BC,EAB0,D7D4,F4AB,B3F4,D6C1,D6C2,D5E9,BECA,F4A7,D2A8,F4A8,F4A9,F4AA,BECB,D3DF,C9E0,C9E1,F3C2,CAE6,CCF2,E2B6,CBB4,CEE8,D6DB,F4AD,F4AE,F4AF,F4B2,BABD,F4B3,B0E3,F4B0,F4B1,BDA2,B2D5,F4B6,F4B7,B6E6,B2B0,CFCF,F4B4,B4AC,F4B5,F4B8,F4B9,CDA7,F4BA,F4BB,F4BC,CBD2,F4BD,F4BE,F4BF,F4DE,C1BC,BCE8,C9AB,D1DE,E5F5,DCB3,D2D5,DCB4,B0AC,DCB5,BDDA,DCB9,D8C2,DCB7,D3F3,C9D6,DCBA,DCB6,DCBB,C3A2,DCBC,DCC5,DCBD,CEDF,D6A5,DCCF,DCCD,DCD2,BDE6,C2AB,DCB8,DCCB,DCCE,DCBE,B7D2,B0C5,DCC7,D0BE,DCC1,BBA8,B7BC,DCCC,DCC6,DCBF,C7DB,D1BF,DCC0,DCCA,DCD0,CEAD,DCC2,DCC3,DCC8,DCC9,B2D4,DCD1,CBD5,D4B7,DCDB,DCDF,CCA6,DCE6,C3E7,DCDC,BFC1,DCD9,B0FA,B9B6,DCE5,DCD3,DCC4,DCD6,C8F4,BFE0,C9BB,B1BD,D3A2,DCDA,DCD5,C6BB,DCDE,D7C2,C3AF,B7B6,C7D1,C3A9,DCE2,DCD8,DCEB,DCD4,DCDD,BEA5,DCD7,DCE0,DCE3,DCE4,DCF8,DCE1,DDA2,DCE7,BCEB,B4C4,C3A3,B2E7,DCFA,DCF2,DCEF,DCFC,DCEE,D2F0,B2E8,C8D7,C8E3,DCFB,DCED,DCF7,DCF5,BEA3,DCF4,B2DD,DCF3,BCF6,DCE8,BBC4,C0F3,BCD4,DCE9,DCEA,DCF1,DCF6,DCF9,B5B4,C8D9,BBE7,DCFE,DCFD,D3AB,DDA1,DDA3,DDA5,D2F1,DDA4,DDA6,DDA7,D2A9,BAC9,DDA9,DDB6,DDB1,DDB4,DDB0,C6CE,C0F2,C9AF,DCEC,DDAE,DDB7,DCF0,DDAF,DDB8,DDAC,DDB9,DDB3,DDAD,C4AA,DDA8,C0B3,C1AB,DDAA,DDAB,DDB2,BBF1,DDB5,D3A8,DDBA,DDBB,C3A7,DDD2,DDBC,DDD1,B9BD,BED5,BEFA,BACA,DDCA,DDC5,DDBF,B2CB,DDC3,DDCB,B2A4,DDD5,DDBE,C6D0,DDD0,DDD4,C1E2,B7C6,DDCE,DDCF,DDC4,DDBD,DDCD,CCD1,DDC9,DDC2,C3C8,C6BC,CEAE,DDCC,DDC8,DDC1,DDC6,C2DC,D3A9,D3AA,DDD3,CFF4,C8F8,DDE6,DDC7,DDE0,C2E4,DDE1,DDD7,D6F8,DDD9,DDD8,B8F0,DDD6,C6CF,B6AD,DDE2,BAF9,D4E1,DDE7,B4D0,DDDA,BFFB,DDE3,DDDF,DDDD,B5D9,DDDB,DDDC,DDDE,BDAF,DDE4,DDE5,DDF5,C3C9,CBE2,DDF2,D8E1,C6D1,DDF4,D5F4,DDF3,DDF0,DDEC,DDEF,DDE8,D0EE,C8D8,DDEE,DDE9,DDEA,CBF2,DDED,B1CD,C0B6,BCBB,DDF1,DDF7,DDF6,DDEB,C5EE,DDFB,DEA4,DEA3,DDF8,C3EF,C2FB,D5E1,CEB5,DDFD,B2CC,C4E8,CADF,C7BE,DDFA,DDFC,DDFE,DEA2,B0AA,B1CE,DEAC,DEA6,BDB6,C8EF,DEA1,DEA5,DEA9,DEA8,DEA7,DEAD,D4CC,DEB3,DEAA,DEAE,C0D9,B1A1,DEB6,DEB1,DEB2,D1A6,DEB5,DEAF,DEB0,D0BD,DEB4,CAED,DEB9,DEB8,DEB7,DEBB,BDE5,B2D8,C3EA,DEBA,C5BA,DEBC,CCD9,B7AA,D4E5,DEBD,DEBF,C4A2,DEC1,DEBE,DEC0,D5BA,DEC2,F2AE,BBA2,C2B2,C5B0,C2C7,F2AF,D0E9,D3DD,EBBD,B3E6,F2B0,F2B1,CAAD,BAE7,F2B3,F2B5,F2B4,CBE4,CFBA,F2B2,CAB4,D2CF,C2EC,CEC3,F2B8,B0F6,F2B7,F2BE,B2CF,D1C1,F2BA,F2BC,D4E9,F2BB,F2B6,F2BF,F2BD,F2B9,F2C7,F2C4,F2C6,F2CA,F2C2,F2C0,F2C5,D6FB,F2C1,C7F9,C9DF,F2C8,B9C6,B5B0,F2C3,F2C9,F2D0,F2D6,BBD7,F2D5,CDDC,D6EB,F2D2,F2D4,B8F2,F2CB,F2CE,C2F9,D5DD,F2CC,F2CD,F2CF,F2D3,F2D9,D3BC,B6EA,CAF1,B7E4,F2D7,F2D8,F2DA,F2DD,F2DB,F2DC,D1D1,F2D1,CDC9,CECF,D6A9,F2E3,C3DB,F2E0,C0AF,F2EC,F2DE,F2E1,F2E8,F2E2,F2E7,F2E6,F2E9,F2DF,F2E4,F2EA,D3AC,F2E5,B2F5,F2F2,D0AB,F2F5,BBC8,F2F9,F2F0,F2F6,F2F8,F2FA,F2F3,F2F1,BAFB,B5FB,F2EF,F2F7,F2ED,F2EE,F2EB,F3A6,F3A3,F3A2,F2F4,C8DA,F2FB,F3A5,C3F8,F2FD,F3A7,F3A9,F3A4,F2FC,F3AB,F3AA,C2DD,F3AE,F3B0,F3A1,F3B1,F3AC,F3AF,F2FE,F3AD,F3B2,F3B4,F3A8,F3B3,F3B5,D0B7,F3B8,D9F9,F3B9,F3B7,C8E4,F3B6,F3BA,F3BB,B4C0,EEC3,F3BC,F3BD,D1AA,F4AC,D0C6,D0D0,D1DC,CFCE,BDD6,D1C3,BAE2,E1E9,D2C2,F1C2,B2B9,B1ED,F1C3,C9C0,B3C4,D9F2,CBA5,F1C4,D6D4,F1C5,F4C0,F1C6,D4AC,F1C7,B0C0,F4C1,F4C2,B4FC,C5DB,CCBB,D0E4,CDE0,F1C8,D9F3,B1BB,CFAE,B8A4,F1CA,F1CB,B2C3,C1D1,D7B0,F1C9,F1CC,F1CE,D9F6,D2E1,D4A3,F4C3,C8B9,F4C4,F1CD,F1CF,BFE3,F1D0,F1D4,F1D6,F1D1,C9D1,C5E1,C2E3,B9FC,F1D3,F1D5,B9D3,F1DB,BAD6,B0FD,F1D9,F1D8,F1D2,F1DA,F1D7,C8EC,CDCA,F1DD,E5BD,F1DC,F1DE,F1DF,CFE5,F4C5,BDF3,F1E0,F1E1,CEF7,D2AA,F1FB,B8B2,BCFB,B9DB,B9E6,C3D9,CAD3,EAE8,C0C0,BEF5,EAE9,EAEA,EAEB,EAEC,EAED,EAEE,EAEF,BDC7,F5FB,F5FD,F5FE,F5FC,BDE2,F6A1,B4A5,F6A2,F6A3,ECB2,D1D4,D9EA,F6A4,EEBA,D5B2,D3FE,CCDC,CAC4,E5C0,F6A5,BEAF,C6A9,DAA5,BCC6,B6A9,B8BC,C8CF,BCA5,DAA6,DAA7,CCD6,C8C3,DAA8,C6FD,D1B5,D2E9,D1B6,BCC7,BDB2,BBE4,DAA9,DAAA,D1C8,DAAB,D0ED,B6EF,C2DB,CBCF,B7ED,C9E8,B7C3,BEF7,D6A4,DAAC,DAAD,C6C0,D7E7,CAB6,D5A9,CBDF,D5EF,DAAE,D6DF,B4CA,DAB0,DAAF,D2EB,DAB1,DAB2,DAB3,CAD4,DAB4,CAAB,DAB5,DAB6,B3CF,D6EF,DAB7,BBB0,B5AE,DAB8,DAB9,B9EE,D1AF,D2E8,DABA,B8C3,CFEA,B2EF,DABB,DABC,BDEB,CEDC,D3EF,DABD,CEF3,DABE,D3D5,BBE5,DABF,CBB5,CBD0,DAC0,C7EB,D6EE,DAC1,C5B5,B6C1,DAC2,B7CC,BFCE,DAC3,DAC4,CBAD,DAC5,B5F7,DAC6,C1C2,D7BB,DAC7,CCB8,D2EA,C4B1,DAC8,B5FD,BBD1,DAC9,D0B3,DACA,DACB,CEBD,DACC,DACD,DACE,B2F7,DAD1,DACF,D1E8,DAD0,C3D5,DAD2,DAD3,DAD4,DAD5,D0BB,D2A5,B0F9,DAD6,C7AB,DAD7,BDF7,C3A1,DAD8,DAD9,C3FD,CCB7,DADA,DADB,C0BE,C6D7,DADC,DADD,C7B4,DADE,DADF,B9C8,BBED,B6B9,F4F8,F4F9,CDE3,F5B9,EBE0,CFF3,BBBF,BAC0,D4A5,E1D9,F5F4,B1AA,B2F2,F5F5,F5F7,BAD1,F5F6,C3B2,F5F9,F5F8,B1B4,D5EA,B8BA,B9B1,B2C6,D4F0,CFCD,B0DC,D5CB,BBF5,D6CA,B7B7,CCB0,C6B6,B1E1,B9BA,D6FC,B9E1,B7A1,BCFA,EADA,EADB,CCF9,B9F3,EADC,B4FB,C3B3,B7D1,BAD8,EADD,D4F4,EADE,BCD6,BBDF,EADF,C1DE,C2B8,D4DF,D7CA,EAE0,EAE1,EAE4,EAE2,EAE3,C9DE,B8B3,B6C4,EAE5,CAEA,C9CD,B4CD,E2D9,C5E2,EAE6,C0B5,D7B8,EAE7,D7AC,C8FC,D8D3,D8CD,D4DE,D4F9,C9C4,D3AE,B8D3,B3E0,C9E2,F4F6,BAD5,F4F7,D7DF,F4F1,B8B0,D5D4,B8CF,C6F0,B3C3,F4F2,B3AC,D4BD,C7F7,F4F4,F4F3,CCCB,C8A4,F4F5,D7E3,C5BF,F5C0,F5BB,F5C3,F5C2,D6BA,F5C1,D4BE,F5C4,F5CC,B0CF,B5F8,F5C9,F5CA,C5DC,F5C5,F5C6,F5C7,F5CB,BEE0,F5C8,B8FA,F5D0,F5D3,BFE7,B9F2,F5BC,F5CD,C2B7,CCF8,BCF9,F5CE,F5CF,F5D1,B6E5,F5D2,F5D5,F5BD,F5D4,D3BB,B3EC,CCA4,F5D6,F5D7,BEE1,F5D8,CCDF,F5DB,B2C8,D7D9,F5D9,F5DA,F5DC,F5E2,F5E0,F5DF,F5DD,F5E1,F5DE,F5E4,F5E5,CCE3,E5BF,B5B8,F5E3,F5E8,CCA3,F5E6,F5E7,F5BE,B1C4,F5BF,B5C5,B2E4,F5EC,F5E9,B6D7,F5ED,F5EA,F5EB,B4DA,D4EA,F5EE,B3F9,F5EF,F5F1,F5F0,F5F2,F5F3,C9ED,B9AA,C7FB,B6E3,CCC9,EAA6,B3B5,D4FE,B9EC,D0F9,E9ED,D7AA,E9EE,C2D6,C8ED,BAE4,E9EF,E9F0,E9F1,D6E1,E9F2,E9F3,E9F5,E9F4,E9F6,E9F7,C7E1,E9F8,D4D8,E9F9,BDCE,E9FA,E9FB,BDCF,E9FC,B8A8,C1BE,E9FD,B1B2,BBD4,B9F5,E9FE,EAA1,EAA2,EAA3,B7F8,BCAD,CAE4,E0CE,D4AF,CFBD,D5B7,EAA4,D5DE,EAA5,D0C1,B9BC,B4C7,B1D9,C0B1,B1E6,B1E7,B1E8,B3BD,C8E8,E5C1,B1DF,C1C9,B4EF,C7A8,D3D8,C6F9,D1B8,B9FD,C2F5,D3AD,D4CB,BDFC,E5C2,B7B5,E5C3,BBB9,D5E2,BDF8,D4B6,CEA5,C1AC,B3D9,CCF6,E5C6,E5C4,E5C8,E5CA,E5C7,B5CF,C6C8,B5FC,E5C5,CAF6,E5C9,C3D4,B1C5,BCA3,D7B7,CDCB,CBCD,CACA,CCD3,E5CC,E5CB,C4E6,D1A1,D1B7,E5CD,E5D0,CDB8,D6F0,E5CF,B5DD,CDBE,E5D1,B6BA,CDA8,B9E4,CAC5,B3D1,CBD9,D4EC,E5D2,B7EA,E5CE,E5D5,B4FE,E5D6,E5D3,E5D4,D2DD,C2DF,B1C6,D3E2,B6DD,CBEC,E5D7,D3F6,B1E9,B6F4,E5DA,E5D8,E5D9,B5C0,D2C5,E5DC,E5DE,E5DD,C7B2,D2A3,E5DB,D4E2,D5DA,E5E0,D7F1,E5E1,B1DC,D1FB,E5E2,E5E4,E5E3,E5E5,D2D8,B5CB,E7DF,DAF5,DAF8,DAF6,DAF7,DAFA,D0CF,C4C7,B0EE,D0B0,DAF9,D3CA,BAAA,DBA2,C7F1,DAFC,DAFB,C9DB,DAFD,DBA1,D7DE,DAFE,C1DA,DBA5,D3F4,DBA7,DBA4,DBA8,BDBC,C0C9,DBA3,DBA6,D6A3,DBA9,DBAD,DBAE,DBAC,BAC2,BFA4,DBAB,DBAA,D4C7,B2BF,DBAF,B9F9,DBB0,B3BB,B5A6,B6BC,DBB1,B6F5,DBB2,B1C9,DBB4,DBB3,DBB5,DBB7,DBB6,DBB8,DBB9,DBBA,D3CF,F4FA,C7F5,D7C3,C5E4,F4FC,F4FD,F4FB,BEC6,D0EF,B7D3,D4CD,CCAA,F5A2,F5A1,BAA8,F4FE,CBD6,F5A4,C0D2,B3EA,CDAA,F5A5,F5A3,BDB4,F5A8,F5A9,BDCD,C3B8,BFE1,CBE1,F5AA,F5A6,F5A7,C4F0,F5AC,B4BC,D7ED,B4D7,F5AB,F5AE,F5AD,F5AF,D0D1,C3D1,C8A9,F5B0,F5B1,F5B2,F5B3,F5B4,F5B5,F5B7,F5B6,F5B8,B2C9,D3D4,CACD,C0EF,D6D8,D2B0,C1BF,BDF0,B8AA,BCF8,F6C6,F6C7,F6C8,F6C9,F6CA,F6CC,F6CB,F7E9,F6CD,F6CE,EEC4,EEC5,EEC6,D5EB,B6A4,EEC8,EEC7,EEC9,EECA,C7A5,EECB,EECC,B7B0,B5F6,EECD,EECF,EECE,B8C6,EED0,EED1,EED2,B6DB,B3AE,D6D3,C4C6,B1B5,B8D6,EED3,EED4,D4BF,C7D5,BEFB,CED9,B9B3,EED6,EED5,EED8,EED7,C5A5,EED9,EEDA,C7AE,EEDB,C7AF,EEDC,B2A7,EEDD,EEDE,EEDF,EEE0,EEE1,D7EA,EEE2,EEE3,BCD8,EEE4,D3CB,CCFA,B2AC,C1E5,EEE5,C7A6,C3AD,EEE6,EEE7,EEE8,EEE9,EEEA,EEEB,EEEC,EEED,EEEE,EEEF,EEF0,EEF1,EEF2,EEF4,EEF3,EEF5,CDAD,C2C1,EEF6,EEF7,EEF8,D5A1,EEF9,CFB3,EEFA,EEFB,EEFC,EEFD,EFA1,EEFE,EFA2,B8F5,C3FA,EFA3,EFA4,BDC2,D2BF,B2F9,EFA5,EFA6,EFA7,D2F8,EFA8,D6FD,EFA9,C6CC,EFAA,EFAB,C1B4,EFAC,CFFA,CBF8,EFAE,EFAD,B3FA,B9F8,EFAF,EFB0,D0E2,EFB1,EFB2,B7E6,D0BF,EFB3,EFB4,EFB5,C8F1,CCE0,EFB6,EFB7,EFB8,EFB9,EFBA,D5E0,EFBB,B4ED,C3AA,EFBC,EFBD,EFBE,EFBF,CEFD,EFC0,C2E0,B4B8,D7B6,BDF5,CFC7,EFC3,EFC1,EFC2,EFC4,B6A7,BCFC,BEE2,C3CC,EFC5,EFC6,EFC7,EFCF,EFC8,EFC9,EFCA,C7C2,EFF1,B6CD,EFCB,EFCC,EFCD,B6C6,C3BE,EFCE,EFD0,EFD1,EFD2,D5F2,EFD3,C4F7,EFD4,C4F8,EFD5,EFD6,B8E4,B0F7,EFD7,EFD8,EFD9,EFDA,EFDB,EFDC,EFDD,EFDE,BEB5,EFE1,EFDF,EFE0,EFE2,EFE3,C1CD,EFE4,EFE5,EFE6,EFE7,EFE8,EFE9,EFEA,EFEB,EFEC,C0D8,EFED,C1AD,EFEE,EFEF,EFF0,CFE2,B3A4,C3C5,E3C5,C9C1,E3C6,B1D5,CECA,B4B3,C8F2,E3C7,CFD0,E3C8,BCE4,E3C9,E3CA,C3C6,D5A2,C4D6,B9EB,CEC5,E3CB,C3F6,E3CC,B7A7,B8F3,BAD2,E3CD,E3CE,D4C4,E3CF,E3D0,D1CB,E3D1,E3D2,E3D3,E3D4,D1D6,E3D5,B2FB,C0BB,E3D6,C0AB,E3D7,E3D8,E3D9,E3DA,E3DB,B8B7,DAE2,B6D3,DAE4,DAE3,DAE6,C8EE,DAE5,B7C0,D1F4,D2F5,D5F3,BDD7,D7E8,DAE8,DAE7,B0A2,CDD3,DAE9,B8BD,BCCA,C2BD,C2A4,B3C2,DAEA,C2AA,C4B0,BDB5,CFDE,DAEB,C9C2,B1DD,DAEC,B6B8,D4BA,B3FD,DAED,D4C9,CFD5,C5E3,DAEE,DAEF,DAF0,C1EA,CCD5,CFDD,D3E7,C2A1,DAF1,CBE5,DAF2,CBE6,D2FE,B8F4,DAF3,B0AF,CFB6,D5CF,CBED,DAF4,E3C4,C1A5,F6BF,F6C0,F6C1,C4D1,C8B8,D1E3,D0DB,D1C5,BCAF,B9CD,EFF4,B4C6,D3BA,F6C2,B3FB,F6C3,B5F1,F6C5,D3EA,F6A7,D1A9,F6A9,F6A8,C1E3,C0D7,B1A2,CEED,D0E8,F6AB,CFF6,F6AA,D5F0,F6AC,C3B9,BBF4,F6AE,F6AD,C4DE,C1D8,CBAA,CFBC,F6AF,F6B0,F6B1,C2B6,B0D4,C5F9,F6B2,C7E0,F6A6,BEB8,BEB2,B5E5,B7C7,BFBF,C3D2,C3E6,D8CC,B8EF,BDF9,D1A5,B0D0,F7B0,F7B1,D0AC,B0B0,F7B2,F7B3,F7B4,C7CA,BECF,F7B7,F7B6,B1DE,F7B5,F7B8,F7B9,CEA4,C8CD,BAAB,E8B8,E8B9,E8BA,BEC2,D2F4,D4CF,C9D8,D2B3,B6A5,C7EA,F1FC,CFEE,CBB3,D0EB,E7EF,CDE7,B9CB,B6D9,F1FD,B0E4,CBCC,F1FE,D4A4,C2AD,C1EC,C6C4,BEB1,F2A1,BCD5,F2A2,F2A3,F2A4,D2C3,C6B5,CDC7,F2A5,D3B1,BFC5,CCE2,F2A6,F2A7,D1D5,B6EE,F2A8,F2A9,B5DF,F2AA,F2AB,B2FC,F2AC,F2AD,C8A7,B7E7,ECA9,ECAA,ECAB,ECAC,C6AE,ECAD,ECAE,B7C9,CAB3,E2B8,F7CF,F7D0,B2CD,F7D1,F7D3,F7D2,E2BB,BCA2,E2BC,E2BD,E2BE,E2BF,E2C0,E2C1,B7B9,D2FB,BDA4,CACE,B1A5,CBC7,E2C2,B6FC,C8C4,E2C3,BDC8,B1FD,E2C4,B6F6,E2C5,C4D9,E2C6,CFDA,B9DD,E2C7,C0A1,E2C8,B2F6,E2C9,C1F3,E2CA,E2CB,C2F8,E2CC,E2CD,E2CE,CAD7,D8B8,D9E5,CFE3,F0A5,DCB0,C2ED,D4A6,CDD4,D1B1,B3DB,C7FD,B2B5,C2BF,E6E0,CABB,E6E1,E6E2,BED4,E6E3,D7A4,CDD5,E6E5,BCDD,E6E4,E6E6,E6E7,C2EE,BDBE,E6E8,C2E6,BAA7,E6E9,E6EA,B3D2,D1E9,BFA5,E6EB,C6EF,E6EC,E6ED,E6EE,C6AD,E6EF,C9A7,E6F0,E6F1,E6F2,E5B9,E6F3,E6F4,C2E2,E6F5,E6F6,D6E8,E6F7,E6F8,B9C7,F7BB,F7BA,F7BE,F7BC,BAA1,F7BF,F7C0,F7C2,F7C1,F7C4,F7C3,F7C5,F7C6,F7C7,CBE8,B8DF,F7D4,F7D5,F7D6,F7D8,F7DA,F7D7,F7DB,F7D9,D7D7,F7DC,F7DD,F7DE,F7DF,F7E0,DBCB,D8AA,E5F7,B9ED,BFFD,BBEA,F7C9,C6C7,F7C8,F7CA,F7CC,F7CB,F7CD,CEBA,F7CE,C4A7,D3E3,F6CF,C2B3,F6D0,F6D1,F6D2,F6D3,F6D4,F6D6,B1AB,F6D7,F6D8,F6D9,F6DA,F6DB,F6DC,F6DD,F6DE,CFCA,F6DF,F6E0,F6E1,F6E2,F6E3,F6E4,C0F0,F6E5,F6E6,F6E7,F6E8,F6E9,F6EA,F6EB,F6EC,F6ED,F6EE,F6EF,F6F0,F6F1,F6F2,F6F3,F6F4,BEA8,F6F5,F6F6,F6F7,F6F8,C8FA,F6F9,F6FA,F6FB,F6FC,F6FD,F6FE,F7A1,F7A2,F7A3,F7A4,F7A5,F7A6,F7A7,F7A8,B1EE,F7A9,F7AA,F7AB,F7AC,F7AD,C1DB,F7AE,F7AF,C4F1,F0AF,BCA6,F0B0,C3F9,C5B8,D1BB,F0B1,F0B2,F0B3,F0B4,F0B5,D1BC,D1EC,F0B7,F0B6,D4A7,CDD2,F0B8,F0BA,F0B9,F0BB,F0BC,B8EB,F0BD,BAE8,F0BE,F0BF,BEE9,F0C0,B6EC,F0C1,F0C2,F0C3,F0C4,C8B5,F0C5,F0C6,F0C7,C5F4,F0C8,F0C9,F0CA,F7BD,F0CB,F0CC,F0CD,F0CE,F0CF,BAD7,F0D0,F0D1,F0D2,F0D3,F0D4,F0D5,F0D6,F0D8,D3A5,F0D7,F0D9,F5BA,C2B9,F7E4,F7E5,F7E6,F7E7,F7E8,C2B4,F7EA,F7EB,C2F3,F4F0,F4EF,C2E9,F7E1,F7E2,BBC6,D9E4,CAF2,C0E8,F0A4,BADA,C7AD,C4AC,F7EC,F7ED,F7EE,F7F0,F7EF,F7F1,F7F4,F7F3,F7F2,F7F5,F7F6,EDE9,EDEA,EDEB,F6BC,F6BD,F6BE,B6A6,D8BE,B9C4,D8BB,DCB1,CAF3,F7F7,F7F8,F7F9,F7FB,F7FA,B1C7,F7FC,F7FD,F7FE,C6EB,ECB4,B3DD,F6B3,F6B4,C1E4,F6B5,F6B6,F6B7,F6B8,F6B9,F6BA,C8A3,F6BB,C1FA,B9A8,EDE8,B9EA,D9DF,A3A1,A3A2,A3A3,A1E7,A3A5,A3A6,A3A7,A3A8,A3A9,A3AA,A3AB,A3AC,A3AD,A3AE,A3AF,A3B0,A3B1,A3B2,A3B3,A3B4,A3B5,A3B6,A3B7,A3B8,A3B9,A3BA,A3BB,A3BC,A3BD,A3BE,A3BF,A3C0,A3C1,A3C2,A3C3,A3C4,A3C5,A3C6,A3C7,A3C8,A3C9,A3CA,A3CB,A3CC,A3CD,A3CE,A3CF,A3D0,A3D1,A3D2,A3D3,A3D4,A3D5,A3D6,A3D7,A3D8,A3D9,A3DA,A3DB,A3DC,A3DD,A3DE,A3DF,A3E0,A3E1,A3E2,A3E3,A3E4,A3E5,A3E6,A3E7,A3E8,A3E9,A3EA,A3EB,A3EC,A3ED,A3EE,A3EF,A3F0,A3F1,A3F2,A3F3,A3F4,A3F5,A3F6,A3F7,A3F8,A3F9,A3FA,A3FB,A3FC,A3FD,A1AB,A1E9,A1EA,A3FE,A3A4';
};
 
 
 
function UnicodeToAnsi(chrCode) {
 var chrHex=chrCode.toString(16);
 chrHex="000"+chrHex.toUpperCase();
 chrHex=chrHex.substr(chrHex.length-4);
 var i=UnicodeChr().indexOf(chrHex);
 if(i!=-1) {
  chrHex=AnsicodeChr().substr(i,4);
 }
 return parseInt(chrHex,16);
};
 
function AnsiToUnicode(chrCode) {
 var chrHex=chrCode.toString(16);
 chrHex="000"+chrHex.toUpperCase();
 chrHex=chrHex.substr(chrHex.length-4);
 var i=AnsicodeChr().indexOf(chrHex);
 if(i!=-1) {
  chrHex=UnicodeChr().substr(i,4);
 }
 return parseInt(chrHex,16)
};
 
function str2asc(str)
{
    var n = UnicodeToAnsi(str.charCodeAt(0));
    var s = n.toString(16);
    return s.toUpperCase();
};
 
function asc2str(code)
{
    var n = AnsiToUnicode(code);
    return String.fromCharCode(n);
};
 
 
function UrlEncode(str){
   var ret="";
   var tt="";
   var strSpecial="!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
   for(var i=0;i<str.length;i++){
    var chr = str.charAt(i);
     var c=str2asc(chr);
     tt += chr+":"+c+"n";
    if(parseInt("0x"+c) > 0x7f){
       ret+="%"+c.slice(0,2)+"%"+c.slice(-2);
     }else{
       if(chr==" ")
         ret+="+";
       else if(strSpecial.indexOf(chr)!=-1)
         ret+="%"+c.toString(16);
       else
         ret+=chr;
     }
   }
   return ret;
};

function UrlEncode1(str){
   var ret="";
   var tt="";
   var strSpecial="!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
   for(var i=0;i<str.length;i++){
    var chr = str.charAt(i);
     var c=str2asc(chr);
     tt += chr+":"+c+"n";
    if(parseInt("0x"+c) > 0x7f){
       ret+=" "+c.slice(0,2)+""+c.slice(-2);
     }else{
       if(chr==" ")
         ret+="";
       else if(strSpecial.indexOf(chr)!=-1)
         ret+=""+c.toString(16);
       else
         ret+=chr;
     }
   }
   
   return ret.substring(1);
};

function UrlDecode(str){
   var ret="";
   for(var i=0;i<str.length;i++){
    var chr = str.charAt(i);
     if(chr == "+"){
       ret+=" ";
     }else if(chr=="%"){
      var asc = str.substring(i+1,i+3);
      if(parseInt("0x"+asc)>0x7f){
       ret+=asc2str(parseInt("0x"+asc+str.substring(i+4,i+6)));
       i+=5;
      }else{
       ret+=asc2str(parseInt("0x"+asc));
       i+=2;
      }
     }else{
       ret+= chr;
     }
   }
   return ret;
};

//将文本或符号编码
function encodeUnicode1(str){
  let res = [];
  for(let i = 0; i < str.length;i++)
  {
    res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    res[i] = res[i].toUpperCase();
  }
  return "" + res.join(" ");
};

//将文本或符号编码
function encodeUnicode2(str){
  let res = [];
  for(let i = 0; i < str.length;i++)
  {
    res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    res[i] = res[i].toUpperCase();
  }
  return "\\u" + res.join("\\u");
};


var json = {
  "00A4":"A1E8",
  "00A7":"A1EC",
  "00A8":"A1A7",
  "00B0":"A1E3",
  "00B1":"A1C0",
  "00B7":"A1A4",
  "00D7":"A1C1",
  "00E0":"A8A4",
  "00E1":"A8A2",
  "00E8":"A8A8",
  "00E9":"A8A6",
  "00EA":"A8BA",
  "00EC":"A8AC",
  "00ED":"A8AA",
  "00F2":"A8B0",
  "00F3":"A8AE",
  "00F7":"A1C2",
  "00F9":"A8B4",
  "00FA":"A8B2",
  "00FC":"A8B9",
  "0101":"A8A1",
  "0113":"A8A5",
  "011B":"A8A7",
  "012B":"A8A9",
  "014D":"A8AD",
  "016B":"A8B1",
  "01CE":"A8A3",
  "01D0":"A8AB",
  "01D2":"A8AF",
  "01D4":"A8B3",
  "01D6":"A8B5",
  "01D8":"A8B6",
  "01DA":"A8B7",
  "01DC":"A8B8",
  "02C7":"A1A6",
  "02C9":"A1A5",
  "0391":"A6A1",
  "0392":"A6A2",
  "0393":"A6A3",
  "0394":"A6A4",
  "0395":"A6A5",
  "0396":"A6A6",
  "0397":"A6A7",
  "0398":"A6A8",
  "0399":"A6A9",
  "039A":"A6AA",
  "039B":"A6AB",
  "039C":"A6AC",
  "039D":"A6AD",
  "039E":"A6AE",
  "039F":"A6AF",
  "03A0":"A6B0",
  "03A1":"A6B1",
  "03A3":"A6B2",
  "03A4":"A6B3",
  "03A5":"A6B4",
  "03A6":"A6B5",
  "03A7":"A6B6",
  "03A8":"A6B7",
  "03A9":"A6B8",
  "03B1":"A6C1",
  "03B2":"A6C2",
  "03B3":"A6C3",
  "03B4":"A6C4",
  "03B5":"A6C5",
  "03B6":"A6C6",
  "03B7":"A6C7",
  "03B8":"A6C8",
  "03B9":"A6C9",
  "03BA":"A6CA",
  "03BB":"A6CB",
  "03BC":"A6CC",
  "03BD":"A6CD",
  "03BE":"A6CE",
  "03BF":"A6CF",
  "03C0":"A6D0",
  "03C1":"A6D1",
  "03C3":"A6D2",
  "03C4":"A6D3",
  "03C5":"A6D4",
  "03C6":"A6D5",
  "03C7":"A6D6",
  "03C8":"A6D7",
  "03C9":"A6D8",
  "0401":"A7A7",
  "0410":"A7A1",
  "0411":"A7A2",
  "0412":"A7A3",
  "0413":"A7A4",
  "0414":"A7A5",
  "0415":"A7A6",
  "0416":"A7A8",
  "0417":"A7A9",
  "0418":"A7AA",
  "0419":"A7AB",
  "041A":"A7AC",
  "041B":"A7AD",
  "041C":"A7AE",
  "041D":"A7AF",
  "041E":"A7B0",
  "041F":"A7B1",
  "0420":"A7B2",
  "0421":"A7B3",
  "0422":"A7B4",
  "0423":"A7B5",
  "0424":"A7B6",
  "0425":"A7B7",
  "0426":"A7B8",
  "0427":"A7B9",
  "0428":"A7BA",
  "0429":"A7BB",
  "042A":"A7BC",
  "042B":"A7BD",
  "042C":"A7BE",
  "042D":"A7BF",
  "042E":"A7C0",
  "042F":"A7C1",
  "0430":"A7D1",
  "0431":"A7D2",
  "0432":"A7D3",
  "0433":"A7D4",
  "0434":"A7D5",
  "0435":"A7D6",
  "0436":"A7D8",
  "0437":"A7D9",
  "0438":"A7DA",
  "0439":"A7DB",
  "043A":"A7DC",
  "043B":"A7DD",
  "043C":"A7DE",
  "043D":"A7DF",
  "043E":"A7E0",
  "043F":"A7E1",
  "0440":"A7E2",
  "0441":"A7E3",
  "0442":"A7E4",
  "0443":"A7E5",
  "0444":"A7E6",
  "0445":"A7E7",
  "0446":"A7E8",
  "0447":"A7E9",
  "0448":"A7EA",
  "0449":"A7EB",
  "044A":"A7EC",
  "044B":"A7ED",
  "044C":"A7EE",
  "044D":"A7EF",
  "044E":"A7F0",
  "044F":"A7F1",
  "0451":"A7D7",
  "2014":"A1AA",
  "2016":"A1AC",
  "2018":"A1AE",
  "2019":"A1AF",
  "201C":"A1B0",
  "201D":"A1B1",
  "2026":"A1AD",
  "2030":"A1EB",
  "2032":"A1E4",
  "2033":"A1E5",
  "203B":"A1F9",
  "2103":"A1E6",
  "2116":"A1ED",
  "2160":"A2F1",
  "2161":"A2F2",
  "2162":"A2F3",
  "2163":"A2F4",
  "2164":"A2F5",
  "2165":"A2F6",
  "2166":"A2F7",
  "2167":"A2F8",
  "2168":"A2F9",
  "2169":"A2FA",
  "216A":"A2FB",
  "216B":"A2FC",
  "2190":"A1FB",
  "2191":"A1FC",
  "2192":"A1FA",
  "2193":"A1FD",
  "2208":"A1CA",
  "220F":"A1C7",
  "2211":"A1C6",
  "221A":"A1CC",
  "221D":"A1D8",
  "221E":"A1DE",
  "2220":"A1CF",
  "2225":"A1CE",
  "2227":"A1C4",
  "2228":"A1C5",
  "2229":"A1C9",
  "222A":"A1C8",
  "222B":"A1D2",
  "222E":"A1D3",
  "2234":"A1E0",
  "2235":"A1DF",
  "2236":"A1C3",
  "2237":"A1CB",
  "223D":"A1D7",
  "2248":"A1D6",
  "224C":"A1D5",
  "2260":"A1D9",
  "2261":"A1D4",
  "2264":"A1DC",
  "2265":"A1DD",
  "226E":"A1DA",
  "226F":"A1DB",
  "2299":"A1D1",
  "22A5":"A1CD",
  "2312":"A1D0",
  "2460":"A2D9",
  "2461":"A2DA",
  "2462":"A2DB",
  "2463":"A2DC",
  "2464":"A2DD",
  "2465":"A2DE",
  "2466":"A2DF",
  "2467":"A2E0",
  "2468":"A2E1",
  "2469":"A2E2",
  "2474":"A2C5",
  "2475":"A2C6",
  "2476":"A2C7",
  "2477":"A2C8",
  "2478":"A2C9",
  "2479":"A2CA",
  "247A":"A2CB",
  "247B":"A2CC",
  "247C":"A2CD",
  "247D":"A2CE",
  "247E":"A2CF",
  "247F":"A2D0",
  "2480":"A2D1",
  "2481":"A2D2",
  "2482":"A2D3",
  "2483":"A2D4",
  "2484":"A2D5",
  "2485":"A2D6",
  "2486":"A2D7",
  "2487":"A2D8",
  "2488":"A2B1",
  "2489":"A2B2",
  "248A":"A2B3",
  "248B":"A2B4",
  "248C":"A2B5",
  "248D":"A2B6",
  "248E":"A2B7",
  "248F":"A2B8",
  "2490":"A2B9",
  "2491":"A2BA",
  "2492":"A2BB",
  "2493":"A2BC",
  "2494":"A2BD",
  "2495":"A2BE",
  "2496":"A2BF",
  "2497":"A2C0",
  "2498":"A2C1",
  "2499":"A2C2",
  "249A":"A2C3",
  "249B":"A2C4",
  "2500":"A9A4",
  "2501":"A9A5",
  "2502":"A9A6",
  "2503":"A9A7",
  "2504":"A9A8",
  "2505":"A9A9",
  "2506":"A9AA",
  "2507":"A9AB",
  "2508":"A9AC",
  "2509":"A9AD",
  "250A":"A9AE",
  "250B":"A9AF",
  "250C":"A9B0",
  "250D":"A9B1",
  "250E":"A9B2",
  "250F":"A9B3",
  "2510":"A9B4",
  "2511":"A9B5",
  "2512":"A9B6",
  "2513":"A9B7",
  "2514":"A9B8",
  "2515":"A9B9",
  "2516":"A9BA",
  "2517":"A9BB",
  "2518":"A9BC",
  "2519":"A9BD",
  "251A":"A9BE",
  "251B":"A9BF",
  "251C":"A9C0",
  "251D":"A9C1",
  "251E":"A9C2",
  "251F":"A9C3",
  "2520":"A9C4",
  "2521":"A9C5",
  "2522":"A9C6",
  "2523":"A9C7",
  "2524":"A9C8",
  "2525":"A9C9",
  "2526":"A9CA",
  "2527":"A9CB",
  "2528":"A9CC",
  "2529":"A9CD",
  "252A":"A9CE",
  "252B":"A9CF",
  "252C":"A9D0",
  "252D":"A9D1",
  "252E":"A9D2",
  "252F":"A9D3",
  "2530":"A9D4",
  "2531":"A9D5",
  "2532":"A9D6",
  "2533":"A9D7",
  "2534":"A9D8",
  "2535":"A9D9",
  "2536":"A9DA",
  "2537":"A9DB",
  "2538":"A9DC",
  "2539":"A9DD",
  "253A":"A9DE",
  "253B":"A9DF",
  "253C":"A9E0",
  "253D":"A9E1",
  "253E":"A9E2",
  "253F":"A9E3",
  "2540":"A9E4",
  "2541":"A9E5",
  "2542":"A9E6",
  "2543":"A9E7",
  "2544":"A9E8",
  "2545":"A9E9",
  "2546":"A9EA",
  "2547":"A9EB",
  "2548":"A9EC",
  "2549":"A9ED",
  "254A":"A9EE",
  "254B":"A9EF",
  "25A0":"A1F6",
  "25A1":"A1F5",
  "25B2":"A1F8",
  "25B3":"A1F7",
  "25C6":"A1F4",
  "25C7":"A1F3",
  "25CB":"A1F0",
  "25CE":"A1F2",
  "25CF":"A1F1",
  "2605":"A1EF",
  "2606":"A1EE",
  "2640":"A1E2",
  "2642":"A1E1",
  "3000":"A1A1",
  "3001":"A1A2",
  "3002":"A1A3",
  "3003":"A1A8",
  "3005":"A1A9",
  "3008":"A1B4",
  "3009":"A1B5",
  "300A":"A1B6",
  "300B":"A1B7",
  "300C":"A1B8",
  "300D":"A1B9",
  "300E":"A1BA",
  "300F":"A1BB",
  "3010":"A1BE",
  "3011":"A1BF",
  "3013":"A1FE",
  "3014":"A1B2",
  "3015":"A1B3",
  "3016":"A1BC",
  "3017":"A1BD",
  "3041":"A4A1",
  "3042":"A4A2",
  "3043":"A4A3",
  "3044":"A4A4",
  "3045":"A4A5",
  "3046":"A4A6",
  "3047":"A4A7",
  "3048":"A4A8",
  "3049":"A4A9",
  "304A":"A4AA",
  "304B":"A4AB",
  "304C":"A4AC",
  "304D":"A4AD",
  "304E":"A4AE",
  "304F":"A4AF",
  "3050":"A4B0",
  "3051":"A4B1",
  "3052":"A4B2",
  "3053":"A4B3",
  "3054":"A4B4",
  "3055":"A4B5",
  "3056":"A4B6",
  "3057":"A4B7",
  "3058":"A4B8",
  "3059":"A4B9",
  "305A":"A4BA",
  "305B":"A4BB",
  "305C":"A4BC",
  "305D":"A4BD",
  "305E":"A4BE",
  "305F":"A4BF",
  "3060":"A4C0",
  "3061":"A4C1",
  "3062":"A4C2",
  "3063":"A4C3",
  "3064":"A4C4",
  "3065":"A4C5",
  "3066":"A4C6",
  "3067":"A4C7",
  "3068":"A4C8",
  "3069":"A4C9",
  "306A":"A4CA",
  "306B":"A4CB",
  "306C":"A4CC",
  "306D":"A4CD",
  "306E":"A4CE",
  "306F":"A4CF",
  "3070":"A4D0",
  "3071":"A4D1",
  "3072":"A4D2",
  "3073":"A4D3",
  "3074":"A4D4",
  "3075":"A4D5",
  "3076":"A4D6",
  "3077":"A4D7",
  "3078":"A4D8",
  "3079":"A4D9",
  "307A":"A4DA",
  "307B":"A4DB",
  "307C":"A4DC",
  "307D":"A4DD",
  "307E":"A4DE",
  "307F":"A4DF",
  "3080":"A4E0",
  "3081":"A4E1",
  "3082":"A4E2",
  "3083":"A4E3",
  "3084":"A4E4",
  "3085":"A4E5",
  "3086":"A4E6",
  "3087":"A4E7",
  "3088":"A4E8",
  "3089":"A4E9",
  "308A":"A4EA",
  "308B":"A4EB",
  "308C":"A4EC",
  "308D":"A4ED",
  "308E":"A4EE",
  "308F":"A4EF",
  "3090":"A4F0",
  "3091":"A4F1",
  "3092":"A4F2",
  "3093":"A4F3",
  "30A1":"A5A1",
  "30A2":"A5A2",
  "30A3":"A5A3",
  "30A4":"A5A4",
  "30A5":"A5A5",
  "30A6":"A5A6",
  "30A7":"A5A7",
  "30A8":"A5A8",
  "30A9":"A5A9",
  "30AA":"A5AA",
  "30AB":"A5AB",
  "30AC":"A5AC",
  "30AD":"A5AD",
  "30AE":"A5AE",
  "30AF":"A5AF",
  "30B0":"A5B0",
  "30B1":"A5B1",
  "30B2":"A5B2",
  "30B3":"A5B3",
  "30B4":"A5B4",
  "30B5":"A5B5",
  "30B6":"A5B6",
  "30B7":"A5B7",
  "30B8":"A5B8",
  "30B9":"A5B9",
  "30BA":"A5BA",
  "30BB":"A5BB",
  "30BC":"A5BC",
  "30BD":"A5BD",
  "30BE":"A5BE",
  "30BF":"A5BF",
  "30C0":"A5C0",
  "30C1":"A5C1",
  "30C2":"A5C2",
  "30C3":"A5C3",
  "30C4":"A5C4",
  "30C5":"A5C5",
  "30C6":"A5C6",
  "30C7":"A5C7",
  "30C8":"A5C8",
  "30C9":"A5C9",
  "30CA":"A5CA",
  "30CB":"A5CB",
  "30CC":"A5CC",
  "30CD":"A5CD",
  "30CE":"A5CE",
  "30CF":"A5CF",
  "30D0":"A5D0",
  "30D1":"A5D1",
  "30D2":"A5D2",
  "30D3":"A5D3",
  "30D4":"A5D4",
  "30D5":"A5D5",
  "30D6":"A5D6",
  "30D7":"A5D7",
  "30D8":"A5D8",
  "30D9":"A5D9",
  "30DA":"A5DA",
  "30DB":"A5DB",
  "30DC":"A5DC",
  "30DD":"A5DD",
  "30DE":"A5DE",
  "30DF":"A5DF",
  "30E0":"A5E0",
  "30E1":"A5E1",
  "30E2":"A5E2",
  "30E3":"A5E3",
  "30E4":"A5E4",
  "30E5":"A5E5",
  "30E6":"A5E6",
  "30E7":"A5E7",
  "30E8":"A5E8",
  "30E9":"A5E9",
  "30EA":"A5EA",
  "30EB":"A5EB",
  "30EC":"A5EC",
  "30ED":"A5ED",
  "30EE":"A5EE",
  "30EF":"A5EF",
  "30F0":"A5F0",
  "30F1":"A5F1",
  "30F2":"A5F2",
  "30F3":"A5F3",
  "30F4":"A5F4",
  "30F5":"A5F5",
  "30F6":"A5F6",
  "3105":"A8C5",
  "3106":"A8C6",
  "3107":"A8C7",
  "3108":"A8C8",
  "3109":"A8C9",
  "310A":"A8CA",
  "310B":"A8CB",
  "310C":"A8CC",
  "310D":"A8CD",
  "310E":"A8CE",
  "310F":"A8CF",
  "3110":"A8D0",
  "3111":"A8D1",
  "3112":"A8D2",
  "3113":"A8D3",
  "3114":"A8D4",
  "3115":"A8D5",
  "3116":"A8D6",
  "3117":"A8D7",
  "3118":"A8D8",
  "3119":"A8D9",
  "311A":"A8DA",
  "311B":"A8DB",
  "311C":"A8DC",
  "311D":"A8DD",
  "311E":"A8DE",
  "311F":"A8DF",
  "3120":"A8E0",
  "3121":"A8E1",
  "3122":"A8E2",
  "3123":"A8E3",
  "3124":"A8E4",
  "3125":"A8E5",
  "3126":"A8E6",
  "3127":"A8E7",
  "3128":"A8E8",
  "3129":"A8E9",
  "3220":"A2E5",
  "3221":"A2E6",
  "3222":"A2E7",
  "3223":"A2E8",
  "3224":"A2E9",
  "3225":"A2EA",
  "3226":"A2EB",
  "3227":"A2EC",
  "3228":"A2ED",
  "3229":"A2EE",
  "4E00":"D2BB",
  "4E01":"B6A1",
  "4E03":"C6DF",
  "4E07":"CDF2",
  "4E08":"D5C9",
  "4E09":"C8FD",
  "4E0A":"C9CF",
  "4E0B":"CFC2",
  "4E0C":"D8A2",
  "4E0D":"B2BB",
  "4E0E":"D3EB",
  "4E10":"D8A4",
  "4E11":"B3F3",
  "4E13":"D7A8",
  "4E14":"C7D2",
  "4E15":"D8A7",
  "4E16":"CAC0",
  "4E18":"C7F0",
  "4E19":"B1FB",
  "4E1A":"D2B5",
  "4E1B":"B4D4",
  "4E1C":"B6AB",
  "4E1D":"CBBF",
  "4E1E":"D8A9",
  "4E22":"B6AA",
  "4E24":"C1BD",
  "4E25":"D1CF",
  "4E27":"C9A5",
  "4E28":"D8AD",
  "4E2A":"B8F6",
  "4E2B":"D1BE",
  "4E2C":"E3DC",
  "4E2D":"D6D0",
  "4E30":"B7E1",
  "4E32":"B4AE",
  "4E34":"C1D9",
  "4E36":"D8BC",
  "4E38":"CDE8",
  "4E39":"B5A4",
  "4E3A":"CEAA",
  "4E3B":"D6F7",
  "4E3D":"C0F6",
  "4E3E":"BED9",
  "4E3F":"D8AF",
  "4E43":"C4CB",
  "4E45":"BEC3",
  "4E47":"D8B1",
  "4E48":"C3B4",
  "4E49":"D2E5",
  "4E4B":"D6AE",
  "4E4C":"CEDA",
  "4E4D":"D5A7",
  "4E4E":"BAF5",
  "4E4F":"B7A6",
  "4E50":"C0D6",
  "4E52":"C6B9",
  "4E53":"C5D2",
  "4E54":"C7C7",
  "4E56":"B9D4",
  "4E58":"B3CB",
  "4E59":"D2D2",
  "4E5C":"D8BF",
  "4E5D":"BEC5",
  "4E5E":"C6F2",
  "4E5F":"D2B2",
  "4E60":"CFB0",
  "4E61":"CFE7",
  "4E66":"CAE9",
  "4E69":"D8C0",
  "4E70":"C2F2",
  "4E71":"C2D2",
  "4E73":"C8E9",
  "4E7E":"C7AC",
  "4E86":"C1CB",
  "4E88":"D3E8",
  "4E89":"D5F9",
  "4E8B":"CAC2",
  "4E8C":"B6FE",
  "4E8D":"D8A1",
  "4E8E":"D3DA",
  "4E8F":"BFF7",
  "4E91":"D4C6",
  "4E92":"BBA5",
  "4E93":"D8C1",
  "4E94":"CEE5",
  "4E95":"BEAE",
  "4E98":"D8A8",
  "4E9A":"D1C7",
  "4E9B":"D0A9",
  "4E9F":"D8BD",
  "4EA0":"D9EF",
  "4EA1":"CDF6",
  "4EA2":"BFBA",
  "4EA4":"BDBB",
  "4EA5":"BAA5",
  "4EA6":"D2E0",
  "4EA7":"B2FA",
  "4EA8":"BAE0",
  "4EA9":"C4B6",
  "4EAB":"CFED",
  "4EAC":"BEA9",
  "4EAD":"CDA4",
  "4EAE":"C1C1",
  "4EB2":"C7D7",
  "4EB3":"D9F1",
  "4EB5":"D9F4",
  "4EBA":"C8CB",
  "4EBB":"D8E9",
  "4EBF":"D2DA",
  "4EC0":"CAB2",
  "4EC1":"C8CA",
  "4EC2":"D8EC",
  "4EC3":"D8EA",
  "4EC4":"D8C6",
  "4EC5":"BDF6",
  "4EC6":"C6CD",
  "4EC7":"B3F0",
  "4EC9":"D8EB",
  "4ECA":"BDF1",
  "4ECB":"BDE9",
  "4ECD":"C8D4",
  "4ECE":"B4D3",
  "4ED1":"C2D8",
  "4ED3":"B2D6",
  "4ED4":"D7D0",
  "4ED5":"CACB",
  "4ED6":"CBFB",
  "4ED7":"D5CC",
  "4ED8":"B8B6",
  "4ED9":"CFC9",
  "4EDD":"D9DA",
  "4EDE":"D8F0",
  "4EDF":"C7AA",
  "4EE1":"D8EE",
  "4EE3":"B4FA",
  "4EE4":"C1EE",
  "4EE5":"D2D4",
  "4EE8":"D8ED",
  "4EEA":"D2C7",
  "4EEB":"D8EF",
  "4EEC":"C3C7",
  "4EF0":"D1F6",
  "4EF2":"D6D9",
  "4EF3":"D8F2",
  "4EF5":"D8F5",
  "4EF6":"BCFE",
  "4EF7":"BCDB",
  "4EFB":"C8CE",
  "4EFD":"B7DD",
  "4EFF":"B7C2",
  "4F01":"C6F3",
  "4F09":"D8F8",
  "4F0A":"D2C1",
  "4F0D":"CEE9",
  "4F0E":"BCBF",
  "4F0F":"B7FC",
  "4F10":"B7A5",
  "4F11":"D0DD",
  "4F17":"D6DA",
  "4F18":"D3C5",
  "4F19":"BBEF",
  "4F1A":"BBE1",
  "4F1B":"D8F1",
  "4F1E":"C9A1",
  "4F1F":"CEB0",
  "4F20":"B4AB",
  "4F22":"D8F3",
  "4F24":"C9CB",
  "4F25":"D8F6",
  "4F26":"C2D7",
  "4F27":"D8F7",
  "4F2A":"CEB1",
  "4F2B":"D8F9",
  "4F2F":"B2AE",
  "4F30":"B9C0",
  "4F32":"D9A3",
  "4F34":"B0E9",
  "4F36":"C1E6",
  "4F38":"C9EC",
  "4F3A":"CBC5",
  "4F3C":"CBC6",
  "4F3D":"D9A4",
  "4F43":"B5E8",
  "4F46":"B5AB",
  "4F4D":"CEBB",
  "4F4E":"B5CD",
  "4F4F":"D7A1",
  "4F50":"D7F4",
  "4F51":"D3D3",
  "4F53":"CCE5",
  "4F55":"BACE",
  "4F57":"D9A2",
  "4F58":"D9DC",
  "4F59":"D3E0",
  "4F5A":"D8FD",
  "4F5B":"B7F0",
  "4F5C":"D7F7",
  "4F5D":"D8FE",
  "4F5E":"D8FA",
  "4F5F":"D9A1",
  "4F60":"C4E3",
  "4F63":"D3B6",
  "4F64":"D8F4",
  "4F65":"D9DD",
  "4F67":"D8FB",
  "4F69":"C5E5",
  "4F6C":"C0D0",
  "4F6F":"D1F0",
  "4F70":"B0DB",
  "4F73":"BCD1",
  "4F74":"D9A6",
  "4F76":"D9A5",
  "4F7B":"D9AC",
  "4F7C":"D9AE",
  "4F7E":"D9AB",
  "4F7F":"CAB9",
  "4F83":"D9A9",
  "4F84":"D6B6",
  "4F88":"B3DE",
  "4F89":"D9A8",
  "4F8B":"C0FD",
  "4F8D":"CACC",
  "4F8F":"D9AA",
  "4F91":"D9A7",
  "4F94":"D9B0",
  "4F97":"B6B1",
  "4F9B":"B9A9",
  "4F9D":"D2C0",
  "4FA0":"CFC0",
  "4FA3":"C2C2",
  "4FA5":"BDC4",
  "4FA6":"D5EC",
  "4FA7":"B2E0",
  "4FA8":"C7C8",
  "4FA9":"BFEB",
  "4FAA":"D9AD",
  "4FAC":"D9AF",
  "4FAE":"CEEA",
  "4FAF":"BAEE",
  "4FB5":"C7D6",
  "4FBF":"B1E3",
  "4FC3":"B4D9",
  "4FC4":"B6ED",
  "4FC5":"D9B4",
  "4FCA":"BFA1",
  "4FCE":"D9DE",
  "4FCF":"C7CE",
  "4FD0":"C0FE",
  "4FD1":"D9B8",
  "4FD7":"CBD7",
  "4FD8":"B7FD",
  "4FDA":"D9B5",
  "4FDC":"D9B7",
  "4FDD":"B1A3",
  "4FDE":"D3E1",
  "4FDF":"D9B9",
  "4FE1":"D0C5",
  "4FE3":"D9B6",
  "4FE6":"D9B1",
  "4FE8":"D9B2",
  "4FE9":"C1A9",
  "4FEA":"D9B3",
  "4FED":"BCF3",
  "4FEE":"D0DE",
  "4FEF":"B8A9",
  "4FF1":"BEE3",
  "4FF3":"D9BD",
  "4FF8":"D9BA",
  "4FFA":"B0B3",
  "4FFE":"D9C2",
  "500C":"D9C4",
  "500D":"B1B6",
  "500F":"D9BF",
  "5012":"B5B9",
  "5014":"BEF3",
  "5018":"CCC8",
  "5019":"BAF2",
  "501A":"D2D0",
  "501C":"D9C3",
  "501F":"BDE8",
  "5021":"B3AB",
  "5025":"D9C5",
  "5026":"BEEB",
  "5028":"D9C6",
  "5029":"D9BB",
  "502A":"C4DF",
  "502C":"D9BE",
  "502D":"D9C1",
  "502E":"D9C0",
  "503A":"D5AE",
  "503C":"D6B5",
  "503E":"C7E3",
  "5043":"D9C8",
  "5047":"BCD9",
  "5048":"D9CA",
  "504C":"D9BC",
  "504E":"D9CB",
  "504F":"C6AB",
  "5055":"D9C9",
  "505A":"D7F6",
  "505C":"CDA3",
  "5065":"BDA1",
  "506C":"D9CC",
  "5076":"C5BC",
  "5077":"CDB5",
  "507B":"D9CD",
  "507E":"D9C7",
  "507F":"B3A5",
  "5080":"BFFE",
  "5085":"B8B5",
  "5088":"C0FC",
  "508D":"B0F8",
  "50A3":"B4F6",
  "50A5":"D9CE",
  "50A7":"D9CF",
  "50A8":"B4A2",
  "50A9":"D9D0",
  "50AC":"B4DF",
  "50B2":"B0C1",
  "50BA":"D9D1",
  "50BB":"C9B5",
  "50CF":"CFF1",
  "50D6":"D9D2",
  "50DA":"C1C5",
  "50E6":"D9D6",
  "50E7":"C9AE",
  "50EC":"D9D5",
  "50ED":"D9D4",
  "50EE":"D9D7",
  "50F3":"CBDB",
  "50F5":"BDA9",
  "50FB":"C6A7",
  "5106":"D9D3",
  "5107":"D9D8",
  "510B":"D9D9",
  "5112":"C8E5",
  "5121":"C0DC",
  "513F":"B6F9",
  "5140":"D8A3",
  "5141":"D4CA",
  "5143":"D4AA",
  "5144":"D0D6",
  "5145":"B3E4",
  "5146":"D5D7",
  "5148":"CFC8",
  "5149":"B9E2",
  "514B":"BFCB",
  "514D":"C3E2",
  "5151":"B6D2",
  "5154":"CDC3",
  "5155":"D9EE",
  "5156":"D9F0",
  "515A":"B5B3",
  "515C":"B6B5",
  "5162":"BEA4",
  "5165":"C8EB",
  "5168":"C8AB",
  "516B":"B0CB",
  "516C":"B9AB",
  "516D":"C1F9",
  "516E":"D9E2",
  "5170":"C0BC",
  "5171":"B9B2",
  "5173":"B9D8",
  "5174":"D0CB",
  "5175":"B1F8",
  "5176":"C6E4",
  "5177":"BEDF",
  "5178":"B5E4",
  "5179":"D7C8",
  "517B":"D1F8",
  "517C":"BCE6",
  "517D":"CADE",
  "5180":"BCBD",
  "5181":"D9E6",
  "5182":"D8E7",
  "5185":"C4DA",
  "5188":"B8D4",
  "5189":"C8BD",
  "518C":"B2E1",
  "518D":"D4D9",
  "5192":"C3B0",
  "5195":"C3E1",
  "5196":"DAA2",
  "5197":"C8DF",
  "5199":"D0B4",
  "519B":"BEFC",
  "519C":"C5A9",
  "51A0":"B9DA",
  "51A2":"DAA3",
  "51A4":"D4A9",
  "51A5":"DAA4",
  "51AB":"D9FB",
  "51AC":"B6AC",
  "51AF":"B7EB",
  "51B0":"B1F9",
  "51B1":"D9FC",
  "51B2":"B3E5",
  "51B3":"BEF6",
  "51B5":"BFF6",
  "51B6":"D2B1",
  "51B7":"C0E4",
  "51BB":"B6B3",
  "51BC":"D9FE",
  "51BD":"D9FD",
  "51C0":"BEBB",
  "51C4":"C6E0",
  "51C6":"D7BC",
  "51C7":"DAA1",
  "51C9":"C1B9",
  "51CB":"B5F2",
  "51CC":"C1E8",
  "51CF":"BCF5",
  "51D1":"B4D5",
  "51DB":"C1DD",
  "51DD":"C4FD",
  "51E0":"BCB8",
  "51E1":"B7B2",
  "51E4":"B7EF",
  "51EB":"D9EC",
  "51ED":"C6BE",
  "51EF":"BFAD",
  "51F0":"BBCB",
  "51F3":"B5CA",
  "51F5":"DBC9",
  "51F6":"D0D7",
  "51F8":"CDB9",
  "51F9":"B0BC",
  "51FA":"B3F6",
  "51FB":"BBF7",
  "51FC":"DBCA",
  "51FD":"BAAF",
  "51FF":"D4E4",
  "5200":"B5B6",
  "5201":"B5F3",
  "5202":"D8D6",
  "5203":"C8D0",
  "5206":"B7D6",
  "5207":"C7D0",
  "5208":"D8D7",
  "520A":"BFAF",
  "520D":"DBBB",
  "520E":"D8D8",
  "5211":"D0CC",
  "5212":"BBAE",
  "5216":"EBBE",
  "5217":"C1D0",
  "5218":"C1F5",
  "5219":"D4F2",
  "521A":"B8D5",
  "521B":"B4B4",
  "521D":"B3F5",
  "5220":"C9BE",
  "5224":"C5D0",
  "5228":"C5D9",
  "5229":"C0FB",
  "522B":"B1F0",
  "522D":"D8D9",
  "522E":"B9CE",
  "5230":"B5BD",
  "5233":"D8DA",
  "5236":"D6C6",
  "5237":"CBA2",
  "5238":"C8AF",
  "5239":"C9B2",
  "523A":"B4CC",
  "523B":"BFCC",
  "523D":"B9F4",
  "523F":"D8DB",
  "5240":"D8DC",
  "5241":"B6E7",
  "5242":"BCC1",
  "5243":"CCEA",
  "524A":"CFF7",
  "524C":"D8DD",
  "524D":"C7B0",
  "5250":"B9D0",
  "5251":"BDA3",
  "5254":"CCDE",
  "5256":"C6CA",
  "525C":"D8E0",
  "525E":"D8DE",
  "5261":"D8DF",
  "5265":"B0FE",
  "5267":"BEE7",
  "5269":"CAA3",
  "526A":"BCF4",
  "526F":"B8B1",
  "5272":"B8EE",
  "527D":"D8E2",
  "527F":"BDCB",
  "5281":"D8E4",
  "5282":"D8E3",
  "5288":"C5FC",
  "5290":"D8E5",
  "5293":"D8E6",
  "529B":"C1A6",
  "529D":"C8B0",
  "529E":"B0EC",
  "529F":"B9A6",
  "52A0":"BCD3",
  "52A1":"CEF1",
  "52A2":"DBBD",
  "52A3":"C1D3",
  "52A8":"B6AF",
  "52A9":"D6FA",
  "52AA":"C5AC",
  "52AB":"BDD9",
  "52AC":"DBBE",
  "52AD":"DBBF",
  "52B1":"C0F8",
  "52B2":"BEA2",
  "52B3":"C0CD",
  "52BE":"DBC0",
  "52BF":"CAC6",
  "52C3":"B2AA",
  "52C7":"D3C2",
  "52C9":"C3E3",
  "52CB":"D1AB",
  "52D0":"DBC2",
  "52D2":"C0D5",
  "52D6":"DBC3",
  "52D8":"BFB1",
  "52DF":"C4BC",
  "52E4":"C7DA",
  "52F0":"DBC4",
  "52F9":"D9E8",
  "52FA":"C9D7",
  "52FE":"B9B4",
  "52FF":"CEF0",
  "5300":"D4C8",
  "5305":"B0FC",
  "5306":"B4D2",
  "5308":"D0D9",
  "530D":"D9E9",
  "530F":"DECB",
  "5310":"D9EB",
  "5315":"D8B0",
  "5316":"BBAF",
  "5317":"B1B1",
  "5319":"B3D7",
  "531A":"D8CE",
  "531D":"D4D1",
  "5320":"BDB3",
  "5321":"BFEF",
  "5323":"CFBB",
  "5326":"D8D0",
  "532A":"B7CB",
  "532E":"D8D1",
  "5339":"C6A5",
  "533A":"C7F8",
  "533B":"D2BD",
  "533E":"D8D2",
  "533F":"C4E4",
  "5341":"CAAE",
  "5343":"C7A7",
  "5345":"D8A6",
  "5347":"C9FD",
  "5348":"CEE7",
  "5349":"BBDC",
  "534A":"B0EB",
  "534E":"BBAA",
  "534F":"D0AD",
  "5351":"B1B0",
  "5352":"D7E4",
  "5353":"D7BF",
  "5355":"B5A5",
  "5356":"C2F4",
  "5357":"C4CF",
  "535A":"B2A9",
  "535C":"B2B7",
  "535E":"B1E5",
  "535F":"DFB2",
  "5360":"D5BC",
  "5361":"BFA8",
  "5362":"C2AC",
  "5363":"D8D5",
  "5364":"C2B1",
  "5366":"D8D4",
  "5367":"CED4",
  "5369":"DAE0",
  "536B":"CEC0",
  "536E":"D8B4",
  "536F":"C3AE",
  "5370":"D3A1",
  "5371":"CEA3",
  "5373":"BCB4",
  "5374":"C8B4",
  "5375":"C2D1",
  "5377":"BEED",
  "5378":"D0B6",
  "537A":"DAE1",
  "537F":"C7E4",
  "5382":"B3A7",
  "5384":"B6F2",
  "5385":"CCFC",
  "5386":"C0FA",
  "5389":"C0F7",
  "538B":"D1B9",
  "538C":"D1E1",
  "538D":"D8C7",
  "5395":"B2DE",
  "5398":"C0E5",
  "539A":"BAF1",
  "539D":"D8C8",
  "539F":"D4AD",
  "53A2":"CFE1",
  "53A3":"D8C9",
  "53A5":"D8CA",
  "53A6":"CFC3",
  "53A8":"B3F8",
  "53A9":"BEC7",
  "53AE":"D8CB",
  "53B6":"DBCC",
  "53BB":"C8A5",
  "53BF":"CFD8",
  "53C1":"C8FE",
  "53C2":"B2CE",
  "53C8":"D3D6",
  "53C9":"B2E6",
  "53CA":"BCB0",
  "53CB":"D3D1",
  "53CC":"CBAB",
  "53CD":"B7B4",
  "53D1":"B7A2",
  "53D4":"CAE5",
  "53D6":"C8A1",
  "53D7":"CADC",
  "53D8":"B1E4",
  "53D9":"D0F0",
  "53DB":"C5D1",
  "53DF":"DBC5",
  "53E0":"B5FE",
  "53E3":"BFDA",
  "53E4":"B9C5",
  "53E5":"BEE4",
  "53E6":"C1ED",
  "53E8":"DFB6",
  "53E9":"DFB5",
  "53EA":"D6BB",
  "53EB":"BDD0",
  "53EC":"D5D9",
  "53ED":"B0C8",
  "53EE":"B6A3",
  "53EF":"BFC9",
  "53F0":"CCA8",
  "53F1":"DFB3",
  "53F2":"CAB7",
  "53F3":"D3D2",
  "53F5":"D8CF",
  "53F6":"D2B6",
  "53F7":"BAC5",
  "53F8":"CBBE",
  "53F9":"CCBE",
  "53FB":"DFB7",
  "53FC":"B5F0",
  "53FD":"DFB4",
  "5401":"D3F5",
  "5403":"B3D4",
  "5404":"B8F7",
  "5406":"DFBA",
  "5408":"BACF",
  "5409":"BCAA",
  "540A":"B5F5",
  "540C":"CDAC",
  "540D":"C3FB",
  "540E":"BAF3",
  "540F":"C0F4",
  "5410":"CDC2",
  "5411":"CFF2",
  "5412":"DFB8",
  "5413":"CFC5",
  "5415":"C2C0",
  "5416":"DFB9",
  "5417":"C2F0",
  "541B":"BEFD",
  "541D":"C1DF",
  "541E":"CDCC",
  "541F":"D2F7",
  "5420":"B7CD",
  "5421":"DFC1",
  "5423":"DFC4",
  "5426":"B7F1",
  "5427":"B0C9",
  "5428":"B6D6",
  "5429":"B7D4",
  "542B":"BAAC",
  "542C":"CCFD",
  "542D":"BFD4",
  "542E":"CBB1",
  "542F":"C6F4",
  "5431":"D6A8",
  "5432":"DFC5",
  "5434":"CEE2",
  "5435":"B3B3",
  "5438":"CEFC",
  "5439":"B4B5",
  "543B":"CEC7",
  "543C":"BAF0",
  "543E":"CEE1",
  "5440":"D1BD",
  "5443":"DFC0",
  "5446":"B4F4",
  "5448":"B3CA",
  "544A":"B8E6",
  "544B":"DFBB",
  "5450":"C4C5",
  "5452":"DFBC",
  "5453":"DFBD",
  "5454":"DFBE",
  "5455":"C5BB",
  "5456":"DFBF",
  "5457":"DFC2",
  "5458":"D4B1",
  "5459":"DFC3",
  "545B":"C7BA",
  "545C":"CED8",
  "5462":"C4D8",
  "5464":"DFCA",
  "5466":"DFCF",
  "5468":"D6DC",
  "5471":"DFC9",
  "5472":"DFDA",
  "5473":"CEB6",
  "5475":"BAC7",
  "5476":"DFCE",
  "5477":"DFC8",
  "5478":"C5DE",
  "547B":"C9EB",
  "547C":"BAF4",
  "547D":"C3FC",
  "5480":"BED7",
  "5482":"DFC6",
  "5484":"DFCD",
  "5486":"C5D8",
  "548B":"D5A6",
  "548C":"BACD",
  "548E":"BECC",
  "548F":"D3BD",
  "5490":"B8C0",
  "5492":"D6E4",
  "5494":"DFC7",
  "5495":"B9BE",
  "5496":"BFA7",
  "5499":"C1FC",
  "549A":"DFCB",
  "549B":"DFCC",
  "549D":"DFD0",
  "54A3":"DFDB",
  "54A4":"DFE5",
  "54A6":"DFD7",
  "54A7":"DFD6",
  "54A8":"D7C9",
  "54A9":"DFE3",
  "54AA":"DFE4",
  "54AB":"E5EB",
  "54AC":"D2A7",
  "54AD":"DFD2",
  "54AF":"BFA9",
  "54B1":"D4DB",
  "54B3":"BFC8",
  "54B4":"DFD4",
  "54B8":"CFCC",
  "54BB":"DFDD",
  "54BD":"D1CA",
  "54BF":"DFDE",
  "54C0":"B0A7",
  "54C1":"C6B7",
  "54C2":"DFD3",
  "54C4":"BAE5",
  "54C6":"B6DF",
  "54C7":"CDDB",
  "54C8":"B9FE",
  "54C9":"D4D5",
  "54CC":"DFDF",
  "54CD":"CFEC",
  "54CE":"B0A5",
  "54CF":"DFE7",
  "54D0":"DFD1",
  "54D1":"D1C6",
  "54D2":"DFD5",
  "54D3":"DFD8",
  "54D4":"DFD9",
  "54D5":"DFDC",
  "54D7":"BBA9",
  "54D9":"DFE0",
  "54DA":"DFE1",
  "54DC":"DFE2",
  "54DD":"DFE6",
  "54DE":"DFE8",
  "54DF":"D3B4",
  "54E5":"B8E7",
  "54E6":"C5B6",
  "54E7":"DFEA",
  "54E8":"C9DA",
  "54E9":"C1A8",
  "54EA":"C4C4",
  "54ED":"BFDE",
  "54EE":"CFF8",
  "54F2":"D5DC",
  "54F3":"DFEE",
  "54FA":"B2B8",
  "54FC":"BADF",
  "54FD":"DFEC",
  "54FF":"DBC1",
  "5501":"D1E4",
  "5506":"CBF4",
  "5507":"B4BD",
  "5509":"B0A6",
  "550F":"DFF1",
  "5510":"CCC6",
  "5511":"DFF2",
  "5514":"DFED",
  "551B":"DFE9",
  "5520":"DFEB",
  "5522":"DFEF",
  "5523":"DFF0",
  "5524":"BBBD",
  "5527":"DFF3",
  "552A":"DFF4",
  "552C":"BBA3",
  "552E":"CADB",
  "552F":"CEA8",
  "5530":"E0A7",
  "5531":"B3AA",
  "5533":"E0A6",
  "5537":"E0A1",
  "553C":"DFFE",
  "553E":"CDD9",
  "553F":"DFFC",
  "5541":"DFFA",
  "5543":"BFD0",
  "5544":"D7C4",
  "5546":"C9CC",
  "5549":"DFF8",
  "554A":"B0A1",
  "5550":"DFFD",
  "5555":"DFFB",
  "5556":"E0A2",
  "555C":"E0A8",
  "5561":"B7C8",
  "5564":"C6A1",
  "5565":"C9B6",
  "5566":"C0B2",
  "5567":"DFF5",
  "556A":"C5BE",
  "556C":"D8C4",
  "556D":"DFF9",
  "556E":"C4F6",
  "5575":"E0A3",
  "5576":"E0A4",
  "5577":"E0A5",
  "5578":"D0A5",
  "557B":"E0B4",
  "557C":"CCE4",
  "557E":"E0B1",
  "5580":"BFA6",
  "5581":"E0AF",
  "5582":"CEB9",
  "5583":"E0AB",
  "5584":"C9C6",
  "5587":"C0AE",
  "5588":"E0AE",
  "5589":"BAED",
  "558A":"BAB0",
  "558B":"E0A9",
  "558F":"DFF6",
  "5591":"E0B3",
  "5594":"E0B8",
  "5598":"B4AD",
  "5599":"E0B9",
  "559C":"CFB2",
  "559D":"BAC8",
  "559F":"E0B0",
  "55A7":"D0FA",
  "55B1":"E0AC",
  "55B3":"D4FB",
  "55B5":"DFF7",
  "55B7":"C5E7",
  "55B9":"E0AD",
  "55BB":"D3F7",
  "55BD":"E0B6",
  "55BE":"E0B7",
  "55C4":"E0C4",
  "55C5":"D0E1",
  "55C9":"E0BC",
  "55CC":"E0C9",
  "55CD":"E0CA",
  "55D1":"E0BE",
  "55D2":"E0AA",
  "55D3":"C9A4",
  "55D4":"E0C1",
  "55D6":"E0B2",
  "55DC":"CAC8",
  "55DD":"E0C3",
  "55DF":"E0B5",
  "55E1":"CECB",
  "55E3":"CBC3",
  "55E4":"E0CD",
  "55E5":"E0C6",
  "55E6":"E0C2",
  "55E8":"E0CB",
  "55EA":"E0BA",
  "55EB":"E0BF",
  "55EC":"E0C0",
  "55EF":"E0C5",
  "55F2":"E0C7",
  "55F3":"E0C8",
  "55F5":"E0CC",
  "55F7":"E0BB",
  "55FD":"CBD4",
  "55FE":"E0D5",
  "5600":"E0D6",
  "5601":"E0D2",
  "5608":"E0D0",
  "5609":"BCCE",
  "560C":"E0D1",
  "560E":"B8C2",
  "560F":"D8C5",
  "5618":"D0EA",
  "561B":"C2EF",
  "561E":"E0CF",
  "561F":"E0BD",
  "5623":"E0D4",
  "5624":"E0D3",
  "5627":"E0D7",
  "562C":"E0DC",
  "562D":"E0D8",
  "5631":"D6F6",
  "5632":"B3B0",
  "5634":"D7EC",
  "5636":"CBBB",
  "5639":"E0DA",
  "563B":"CEFB",
  "563F":"BAD9",
  "564C":"E0E1",
  "564D":"E0DD",
  "564E":"D2AD",
  "5654":"E0E2",
  "5657":"E0DB",
  "5658":"E0D9",
  "5659":"E0DF",
  "565C":"E0E0",
  "5662":"E0DE",
  "5664":"E0E4",
  "5668":"C6F7",
  "5669":"D8AC",
  "566A":"D4EB",
  "566B":"E0E6",
  "566C":"CAC9",
  "5671":"E0E5",
  "5676":"B8C1",
  "567B":"E0E7",
  "567C":"E0E8",
  "5685":"E0E9",
  "5686":"E0E3",
  "568E":"BABF",
  "568F":"CCE7",
  "5693":"E0EA",
  "56A3":"CFF9",
  "56AF":"E0EB",
  "56B7":"C8C2",
  "56BC":"BDC0",
  "56CA":"C4D2",
  "56D4":"E0EC",
  "56D7":"E0ED",
  "56DA":"C7F4",
  "56DB":"CBC4",
  "56DD":"E0EE",
  "56DE":"BBD8",
  "56DF":"D8B6",
  "56E0":"D2F2",
  "56E1":"E0EF",
  "56E2":"CDC5",
  "56E4":"B6DA",
  "56EB":"E0F1",
  "56ED":"D4B0",
  "56F0":"C0A7",
  "56F1":"B4D1",
  "56F4":"CEA7",
  "56F5":"E0F0",
  "56F9":"E0F2",
  "56FA":"B9CC",
  "56FD":"B9FA",
  "56FE":"CDBC",
  "56FF":"E0F3",
  "5703":"C6D4",
  "5704":"E0F4",
  "5706":"D4B2",
  "5708":"C8A6",
  "5709":"E0F6",
  "570A":"E0F5",
  "571C":"E0F7",
  "571F":"CDC1",
  "5723":"CAA5",
  "5728":"D4DA",
  "5729":"DBD7",
  "572A":"DBD9",
  "572C":"DBD8",
  "572D":"B9E7",
  "572E":"DBDC",
  "572F":"DBDD",
  "5730":"B5D8",
  "5733":"DBDA",
  "5739":"DBDB",
  "573A":"B3A1",
  "573B":"DBDF",
  "573E":"BBF8",
  "5740":"D6B7",
  "5742":"DBE0",
  "5747":"BEF9",
  "574A":"B7BB",
  "574C":"DBD0",
  "574D":"CCAE",
  "574E":"BFB2",
  "574F":"BBB5",
  "5750":"D7F8",
  "5751":"BFD3",
  "5757":"BFE9",
  "575A":"BCE1",
  "575B":"CCB3",
  "575C":"DBDE",
  "575D":"B0D3",
  "575E":"CEEB",
  "575F":"B7D8",
  "5760":"D7B9",
  "5761":"C6C2",
  "5764":"C0A4",
  "5766":"CCB9",
  "5768":"DBE7",
  "5769":"DBE1",
  "576A":"C6BA",
  "576B":"DBE3",
  "576D":"DBE8",
  "576F":"C5F7",
  "5773":"DBEA",
  "5776":"DBE9",
  "5777":"BFC0",
  "577B":"DBE6",
  "577C":"DBE5",
  "5782":"B4B9",
  "5783":"C0AC",
  "5784":"C2A2",
  "5785":"DBE2",
  "5786":"DBE4",
  "578B":"D0CD",
  "578C":"DBED",
  "5792":"C0DD",
  "5793":"DBF2",
  "579B":"B6E2",
  "57A0":"DBF3",
  "57A1":"DBD2",
  "57A2":"B9B8",
  "57A3":"D4AB",
  "57A4":"DBEC",
  "57A6":"BFD1",
  "57A7":"DBF0",
  "57A9":"DBD1",
  "57AB":"B5E6",
  "57AD":"DBEB",
  "57AE":"BFE5",
  "57B2":"DBEE",
  "57B4":"DBF1",
  "57B8":"DBF9",
  "57C2":"B9A1",
  "57C3":"B0A3",
  "57CB":"C2F1",
  "57CE":"B3C7",
  "57CF":"DBEF",
  "57D2":"DBF8",
  "57D4":"C6D2",
  "57D5":"DBF4",
  "57D8":"DBF5",
  "57D9":"DBF7",
  "57DA":"DBF6",
  "57DD":"DBFE",
  "57DF":"D3F2",
  "57E0":"B2BA",
  "57E4":"DBFD",
  "57ED":"DCA4",
  "57EF":"DBFB",
  "57F4":"DBFA",
  "57F8":"DBFC",
  "57F9":"C5E0",
  "57FA":"BBF9",
  "57FD":"DCA3",
  "5800":"DCA5",
  "5802":"CCC3",
  "5806":"B6D1",
  "5807":"DDC0",
  "580B":"DCA1",
  "580D":"DCA2",
  "5811":"C7B5",
  "5815":"B6E9",
  "5819":"DCA7",
  "581E":"DCA6",
  "5820":"DCA9",
  "5821":"B1A4",
  "5824":"B5CC",
  "582A":"BFB0",
  "5830":"D1DF",
  "5835":"B6C2",
  "5844":"DCA8",
  "584C":"CBFA",
  "584D":"EBF3",
  "5851":"CBDC",
  "5854":"CBFE",
  "5858":"CCC1",
  "585E":"C8FB",
  "5865":"DCAA",
  "586B":"CCEE",
  "586C":"DCAB",
  "587E":"DBD3",
  "5880":"DCAF",
  "5881":"DCAC",
  "5883":"BEB3",
  "5885":"CAFB",
  "5889":"DCAD",
  "5892":"C9CA",
  "5893":"C4B9",
  "5899":"C7BD",
  "589A":"DCAE",
  "589E":"D4F6",
  "589F":"D0E6",
  "58A8":"C4AB",
  "58A9":"B6D5",
  "58BC":"DBD4",
  "58C1":"B1DA",
  "58C5":"DBD5",
  "58D1":"DBD6",
  "58D5":"BABE",
  "58E4":"C8C0",
  "58EB":"CABF",
  "58EC":"C8C9",
  "58EE":"D7B3",
  "58F0":"C9F9",
  "58F3":"BFC7",
  "58F6":"BAF8",
  "58F9":"D2BC",
  "5902":"E2BA",
  "5904":"B4A6",
  "5907":"B1B8",
  "590D":"B8B4",
  "590F":"CFC4",
  "5914":"D9E7",
  "5915":"CFA6",
  "5916":"CDE2",
  "5919":"D9ED",
  "591A":"B6E0",
  "591C":"D2B9",
  "591F":"B9BB",
  "5924":"E2B9",
  "5925":"E2B7",
  "5927":"B4F3",
  "5929":"CCEC",
  "592A":"CCAB",
  "592B":"B7F2",
  "592D":"D8B2",
  "592E":"D1EB",
  "592F":"BABB",
  "5931":"CAA7",
  "5934":"CDB7",
  "5937":"D2C4",
  "5938":"BFE4",
  "5939":"BCD0",
  "593A":"B6E1",
  "593C":"DEC5",
  "5941":"DEC6",
  "5942":"DBBC",
  "5944":"D1D9",
  "5947":"C6E6",
  "5948":"C4CE",
  "5949":"B7EE",
  "594B":"B7DC",
  "594E":"BFFC",
  "594F":"D7E0",
  "5951":"C6F5",
  "5954":"B1BC",
  "5955":"DEC8",
  "5956":"BDB1",
  "5957":"CCD7",
  "5958":"DECA",
  "595A":"DEC9",
  "5960":"B5EC",
  "5962":"C9DD",
  "5965":"B0C2",
  "5973":"C5AE",
  "5974":"C5AB",
  "5976":"C4CC",
  "5978":"BCE9",
  "5979":"CBFD",
  "597D":"BAC3",
  "5981":"E5F9",
  "5982":"C8E7",
  "5983":"E5FA",
  "5984":"CDFD",
  "5986":"D7B1",
  "5987":"B8BE",
  "5988":"C2E8",
  "598A":"C8D1",
  "598D":"E5FB",
  "5992":"B6CA",
  "5993":"BCCB",
  "5996":"D1FD",
  "5997":"E6A1",
  "5999":"C3EE",
  "599E":"E6A4",
  "59A3":"E5FE",
  "59A4":"E6A5",
  "59A5":"CDD7",
  "59A8":"B7C1",
  "59A9":"E5FC",
  "59AA":"E5FD",
  "59AB":"E6A3",
  "59AE":"C4DD",
  "59AF":"E6A8",
  "59B2":"E6A7",
  "59B9":"C3C3",
  "59BB":"C6DE",
  "59BE":"E6AA",
  "59C6":"C4B7",
  "59CA":"E6A2",
  "59CB":"CABC",
  "59D0":"BDE3",
  "59D1":"B9C3",
  "59D2":"E6A6",
  "59D3":"D0D5",
  "59D4":"CEAF",
  "59D7":"E6A9",
  "59D8":"E6B0",
  "59DA":"D2A6",
  "59DC":"BDAA",
  "59DD":"E6AD",
  "59E3":"E6AF",
  "59E5":"C0D1",
  "59E8":"D2CC",
  "59EC":"BCA7",
  "59F9":"E6B1",
  "59FB":"D2F6",
  "59FF":"D7CB",
  "5A01":"CDFE",
  "5A03":"CDDE",
  "5A04":"C2A6",
  "5A05":"E6AB",
  "5A06":"E6AC",
  "5A07":"BDBF",
  "5A08":"E6AE",
  "5A09":"E6B3",
  "5A0C":"E6B2",
  "5A11":"E6B6",
  "5A13":"E6B8",
  "5A18":"C4EF",
  "5A1C":"C4C8",
  "5A1F":"BEEA",
  "5A20":"C9EF",
  "5A23":"E6B7",
  "5A25":"B6F0",
  "5A29":"C3E4",
  "5A31":"D3E9",
  "5A32":"E6B4",
  "5A34":"E6B5",
  "5A36":"C8A2",
  "5A3C":"E6BD",
  "5A40":"E6B9",
  "5A46":"C6C5",
  "5A49":"CDF1",
  "5A4A":"E6BB",
  "5A55":"E6BC",
  "5A5A":"BBE9",
  "5A62":"E6BE",
  "5A67":"E6BA",
  "5A6A":"C0B7",
  "5A74":"D3A4",
  "5A75":"E6BF",
  "5A76":"C9F4",
  "5A77":"E6C3",
  "5A7A":"E6C4",
  "5A7F":"D0F6",
  "5A92":"C3BD",
  "5A9A":"C3C4",
  "5A9B":"E6C2",
  "5AAA":"E6C1",
  "5AB2":"E6C7",
  "5AB3":"CFB1",
  "5AB5":"EBF4",
  "5AB8":"E6CA",
  "5ABE":"E6C5",
  "5AC1":"BCDE",
  "5AC2":"C9A9",
  "5AC9":"BCB5",
  "5ACC":"CFD3",
  "5AD2":"E6C8",
  "5AD4":"E6C9",
  "5AD6":"E6CE",
  "5AD8":"E6D0",
  "5ADC":"E6D1",
  "5AE0":"E6CB",
  "5AE1":"B5D5",
  "5AE3":"E6CC",
  "5AE6":"E6CF",
  "5AE9":"C4DB",
  "5AEB":"E6C6",
  "5AF1":"E6CD",
  "5B09":"E6D2",
  "5B16":"E6D4",
  "5B17":"E6D3",
  "5B32":"E6D5",
  "5B34":"D9F8",
  "5B37":"E6D6",
  "5B40":"E6D7",
  "5B50":"D7D3",
  "5B51":"E6DD",
  "5B53":"E6DE",
  "5B54":"BFD7",
  "5B55":"D4D0",
  "5B57":"D7D6",
  "5B58":"B4E6",
  "5B59":"CBEF",
  "5B5A":"E6DA",
  "5B5B":"D8C3",
  "5B5C":"D7CE",
  "5B5D":"D0A2",
  "5B5F":"C3CF",
  "5B62":"E6DF",
  "5B63":"BCBE",
  "5B64":"B9C2",
  "5B65":"E6DB",
  "5B66":"D1A7",
  "5B69":"BAA2",
  "5B6A":"C2CF",
  "5B6C":"D8AB",
  "5B70":"CAEB",
  "5B71":"E5EE",
  "5B73":"E6DC",
  "5B75":"B7F5",
  "5B7A":"C8E6",
  "5B7D":"C4F5",
  "5B80":"E5B2",
  "5B81":"C4FE",
  "5B83":"CBFC",
  "5B84":"E5B3",
  "5B85":"D5AC",
  "5B87":"D3EE",
  "5B88":"CAD8",
  "5B89":"B0B2",
  "5B8B":"CBCE",
  "5B8C":"CDEA",
  "5B8F":"BAEA",
  "5B93":"E5B5",
  "5B95":"E5B4",
  "5B97":"D7DA",
  "5B98":"B9D9",
  "5B99":"D6E6",
  "5B9A":"B6A8",
  "5B9B":"CDF0",
  "5B9C":"D2CB",
  "5B9D":"B1A6",
  "5B9E":"CAB5",
  "5BA0":"B3E8",
  "5BA1":"C9F3",
  "5BA2":"BFCD",
  "5BA3":"D0FB",
  "5BA4":"CAD2",
  "5BA5":"E5B6",
  "5BA6":"BBC2",
  "5BAA":"CFDC",
  "5BAB":"B9AC",
  "5BB0":"D4D7",
  "5BB3":"BAA6",
  "5BB4":"D1E7",
  "5BB5":"CFFC",
  "5BB6":"BCD2",
  "5BB8":"E5B7",
  "5BB9":"C8DD",
  "5BBD":"BFED",
  "5BBE":"B1F6",
  "5BBF":"CBDE",
  "5BC2":"BCC5",
  "5BC4":"BCC4",
  "5BC5":"D2FA",
  "5BC6":"C3DC",
  "5BC7":"BFDC",
  "5BCC":"B8BB",
  "5BD0":"C3C2",
  "5BD2":"BAAE",
  "5BD3":"D4A2",
  "5BDD":"C7DE",
  "5BDE":"C4AF",
  "5BDF":"B2EC",
  "5BE1":"B9D1",
  "5BE4":"E5BB",
  "5BE5":"C1C8",
  "5BE8":"D5AF",
  "5BEE":"E5BC",
  "5BF0":"E5BE",
  "5BF8":"B4E7",
  "5BF9":"B6D4",
  "5BFA":"CBC2",
  "5BFB":"D1B0",
  "5BFC":"B5BC",
  "5BFF":"CAD9",
  "5C01":"B7E2",
  "5C04":"C9E4",
  "5C06":"BDAB",
  "5C09":"CEBE",
  "5C0A":"D7F0",
  "5C0F":"D0A1",
  "5C11":"C9D9",
  "5C14":"B6FB",
  "5C15":"E6D8",
  "5C16":"BCE2",
  "5C18":"B3BE",
  "5C1A":"C9D0",
  "5C1C":"E6D9",
  "5C1D":"B3A2",
  "5C22":"DECC",
  "5C24":"D3C8",
  "5C25":"DECD",
  "5C27":"D2A2",
  "5C2C":"DECE",
  "5C31":"BECD",
  "5C34":"DECF",
  "5C38":"CAAC",
  "5C39":"D2FC",
  "5C3A":"B3DF",
  "5C3B":"E5EA",
  "5C3C":"C4E1",
  "5C3D":"BEA1",
  "5C3E":"CEB2",
  "5C3F":"C4F2",
  "5C40":"BED6",
  "5C41":"C6A8",
  "5C42":"B2E3",
  "5C45":"BED3",
  "5C48":"C7FC",
  "5C49":"CCEB",
  "5C4A":"BDEC",
  "5C4B":"CEDD",
  "5C4E":"CABA",
  "5C4F":"C6C1",
  "5C50":"E5EC",
  "5C51":"D0BC",
  "5C55":"D5B9",
  "5C59":"E5ED",
  "5C5E":"CAF4",
  "5C60":"CDC0",
  "5C61":"C2C5",
  "5C63":"E5EF",
  "5C65":"C2C4",
  "5C66":"E5F0",
  "5C6E":"E5F8",
  "5C6F":"CDCD",
  "5C71":"C9BD",
  "5C79":"D2D9",
  "5C7A":"E1A8",
  "5C7F":"D3EC",
  "5C81":"CBEA",
  "5C82":"C6F1",
  "5C88":"E1AC",
  "5C8C":"E1A7",
  "5C8D":"E1A9",
  "5C90":"E1AA",
  "5C91":"E1AF",
  "5C94":"B2ED",
  "5C96":"E1AB",
  "5C97":"B8DA",
  "5C98":"E1AD",
  "5C99":"E1AE",
  "5C9A":"E1B0",
  "5C9B":"B5BA",
  "5C9C":"E1B1",
  "5CA2":"E1B3",
  "5CA3":"E1B8",
  "5CA9":"D1D2",
  "5CAB":"E1B6",
  "5CAC":"E1B5",
  "5CAD":"C1EB",
  "5CB1":"E1B7",
  "5CB3":"D4C0",
  "5CB5":"E1B2",
  "5CB7":"E1BA",
  "5CB8":"B0B6",
  "5CBD":"E1B4",
  "5CBF":"BFF9",
  "5CC1":"E1B9",
  "5CC4":"E1BB",
  "5CCB":"E1BE",
  "5CD2":"E1BC",
  "5CD9":"D6C5",
  "5CE1":"CFBF",
  "5CE4":"E1BD",
  "5CE5":"E1BF",
  "5CE6":"C2CD",
  "5CE8":"B6EB",
  "5CEA":"D3F8",
  "5CED":"C7CD",
  "5CF0":"B7E5",
  "5CFB":"BEFE",
  "5D02":"E1C0",
  "5D03":"E1C1",
  "5D06":"E1C7",
  "5D07":"B3E7",
  "5D0E":"C6E9",
  "5D14":"B4DE",
  "5D16":"D1C2",
  "5D1B":"E1C8",
  "5D1E":"E1C6",
  "5D24":"E1C5",
  "5D26":"E1C3",
  "5D27":"E1C2",
  "5D29":"B1C0",
  "5D2D":"D5B8",
  "5D2E":"E1C4",
  "5D34":"E1CB",
  "5D3D":"E1CC",
  "5D3E":"E1CA",
  "5D47":"EFFA",
  "5D4A":"E1D3",
  "5D4B":"E1D2",
  "5D4C":"C7B6",
  "5D58":"E1C9",
  "5D5B":"E1CE",
  "5D5D":"E1D0",
  "5D69":"E1D4",
  "5D6B":"E1D1",
  "5D6C":"E1CD",
  "5D6F":"E1CF",
  "5D74":"E1D5",
  "5D82":"E1D6",
  "5D99":"E1D7",
  "5D9D":"E1D8",
  "5DB7":"E1DA",
  "5DC5":"E1DB",
  "5DCD":"CEA1",
  "5DDB":"E7DD",
  "5DDD":"B4A8",
  "5DDE":"D6DD",
  "5DE1":"D1B2",
  "5DE2":"B3B2",
  "5DE5":"B9A4",
  "5DE6":"D7F3",
  "5DE7":"C7C9",
  "5DE8":"BEDE",
  "5DE9":"B9AE",
  "5DEB":"CED7",
  "5DEE":"B2EE",
  "5DEF":"DBCF",
  "5DF1":"BCBA",
  "5DF2":"D2D1",
  "5DF3":"CBC8",
  "5DF4":"B0CD",
  "5DF7":"CFEF",
  "5DFD":"D9E3",
  "5DFE":"BDED",
  "5E01":"B1D2",
  "5E02":"CAD0",
  "5E03":"B2BC",
  "5E05":"CBA7",
  "5E06":"B7AB",
  "5E08":"CAA6",
  "5E0C":"CFA3",
  "5E0F":"E0F8",
  "5E10":"D5CA",
  "5E11":"E0FB",
  "5E14":"E0FA",
  "5E15":"C5C1",
  "5E16":"CCFB",
  "5E18":"C1B1",
  "5E19":"E0F9",
  "5E1A":"D6E3",
  "5E1B":"B2AF",
  "5E1C":"D6C4",
  "5E1D":"B5DB",
  "5E26":"B4F8",
  "5E27":"D6A1",
  "5E2D":"CFAF",
  "5E2E":"B0EF",
  "5E31":"E0FC",
  "5E37":"E1A1",
  "5E38":"B3A3",
  "5E3B":"E0FD",
  "5E3C":"E0FE",
  "5E3D":"C3B1",
  "5E42":"C3DD",
  "5E44":"E1A2",
  "5E45":"B7F9",
  "5E4C":"BBCF",
  "5E54":"E1A3",
  "5E55":"C4BB",
  "5E5B":"E1A4",
  "5E5E":"E1A5",
  "5E61":"E1A6",
  "5E62":"B4B1",
  "5E72":"B8C9",
  "5E73":"C6BD",
  "5E74":"C4EA",
  "5E76":"B2A2",
  "5E78":"D0D2",
  "5E7A":"E7DB",
  "5E7B":"BBC3",
  "5E7C":"D3D7",
  "5E7D":"D3C4",
  "5E7F":"B9E3",
  "5E80":"E2CF",
  "5E84":"D7AF",
  "5E86":"C7EC",
  "5E87":"B1D3",
  "5E8A":"B4B2",
  "5E8B":"E2D1",
  "5E8F":"D0F2",
  "5E90":"C2AE",
  "5E91":"E2D0",
  "5E93":"BFE2",
  "5E94":"D3A6",
  "5E95":"B5D7",
  "5E96":"E2D2",
  "5E97":"B5EA",
  "5E99":"C3ED",
  "5E9A":"B8FD",
  "5E9C":"B8AE",
  "5E9E":"C5D3",
  "5E9F":"B7CF",
  "5EA0":"E2D4",
  "5EA5":"E2D3",
  "5EA6":"B6C8",
  "5EA7":"D7F9",
  "5EAD":"CDA5",
  "5EB3":"E2D8",
  "5EB5":"E2D6",
  "5EB6":"CAFC",
  "5EB7":"BFB5",
  "5EB8":"D3B9",
  "5EB9":"E2D5",
  "5EBE":"E2D7",
  "5EC9":"C1AE",
  "5ECA":"C0C8",
  "5ED1":"E2DB",
  "5ED2":"E2DA",
  "5ED3":"C0AA",
  "5ED6":"C1CE",
  "5EDB":"E2DC",
  "5EE8":"E2DD",
  "5EEA":"E2DE",
  "5EF4":"DBC8",
  "5EF6":"D1D3",
  "5EF7":"CDA2",
  "5EFA":"BDA8",
  "5EFE":"DEC3",
  "5EFF":"D8A5",
  "5F00":"BFAA",
  "5F01":"DBCD",
  "5F02":"D2EC",
  "5F03":"C6FA",
  "5F04":"C5AA",
  "5F08":"DEC4",
  "5F0A":"B1D7",
  "5F0B":"DFAE",
  "5F0F":"CABD",
  "5F11":"DFB1",
  "5F13":"B9AD",
  "5F15":"D2FD",
  "5F17":"B8A5",
  "5F18":"BAEB",
  "5F1B":"B3DA",
  "5F1F":"B5DC",
  "5F20":"D5C5",
  "5F25":"C3D6",
  "5F26":"CFD2",
  "5F27":"BBA1",
  "5F29":"E5F3",
  "5F2A":"E5F2",
  "5F2D":"E5F4",
  "5F2F":"CDE4",
  "5F31":"C8F5",
  "5F39":"B5AF",
  "5F3A":"C7BF",
  "5F3C":"E5F6",
  "5F40":"ECB0",
  "5F50":"E5E6",
  "5F52":"B9E9",
  "5F53":"B5B1",
  "5F55":"C2BC",
  "5F56":"E5E8",
  "5F57":"E5E7",
  "5F58":"E5E9",
  "5F5D":"D2CD",
  "5F61":"E1EA",
  "5F62":"D0CE",
  "5F64":"CDAE",
  "5F66":"D1E5",
  "5F69":"B2CA",
  "5F6A":"B1EB",
  "5F6C":"B1F2",
  "5F6D":"C5ED",
  "5F70":"D5C3",
  "5F71":"D3B0",
  "5F73":"E1DC",
  "5F77":"E1DD",
  "5F79":"D2DB",
  "5F7B":"B3B9",
  "5F7C":"B1CB",
  "5F80":"CDF9",
  "5F81":"D5F7",
  "5F82":"E1DE",
  "5F84":"BEB6",
  "5F85":"B4FD",
  "5F87":"E1DF",
  "5F88":"BADC",
  "5F89":"E1E0",
  "5F8A":"BBB2",
  "5F8B":"C2C9",
  "5F8C":"E1E1",
  "5F90":"D0EC",
  "5F92":"CDBD",
  "5F95":"E1E2",
  "5F97":"B5C3",
  "5F98":"C5C7",
  "5F99":"E1E3",
  "5F9C":"E1E4",
  "5FA1":"D3F9",
  "5FA8":"E1E5",
  "5FAA":"D1AD",
  "5FAD":"E1E6",
  "5FAE":"CEA2",
  "5FB5":"E1E7",
  "5FB7":"B5C2",
  "5FBC":"E1E8",
  "5FBD":"BBD5",
  "5FC3":"D0C4",
  "5FC4":"E2E0",
  "5FC5":"B1D8",
  "5FC6":"D2E4",
  "5FC9":"E2E1",
  "5FCC":"BCC9",
  "5FCD":"C8CC",
  "5FCF":"E2E3",
  "5FD0":"ECFE",
  "5FD1":"ECFD",
  "5FD2":"DFAF",
  "5FD6":"E2E2",
  "5FD7":"D6BE",
  "5FD8":"CDFC",
  "5FD9":"C3A6",
  "5FDD":"E3C3",
  "5FE0":"D6D2",
  "5FE1":"E2E7",
  "5FE4":"E2E8",
  "5FE7":"D3C7",
  "5FEA":"E2EC",
  "5FEB":"BFEC",
  "5FED":"E2ED",
  "5FEE":"E2E5",
  "5FF1":"B3C0",
  "5FF5":"C4EE",
  "5FF8":"E2EE",
  "5FFB":"D0C3",
  "5FFD":"BAF6",
  "5FFE":"E2E9",
  "5FFF":"B7DE",
  "6000":"BBB3",
  "6001":"CCAC",
  "6002":"CBCB",
  "6003":"E2E4",
  "6004":"E2E6",
  "6005":"E2EA",
  "6006":"E2EB",
  "600A":"E2F7",
  "600D":"E2F4",
  "600E":"D4F5",
  "600F":"E2F3",
  "6012":"C5AD",
  "6014":"D5FA",
  "6015":"C5C2",
  "6016":"B2C0",
  "6019":"E2EF",
  "601B":"E2F2",
  "601C":"C1AF",
  "601D":"CBBC",
  "6020":"B5A1",
  "6021":"E2F9",
  "6025":"BCB1",
  "6026":"E2F1",
  "6027":"D0D4",
  "6028":"D4B9",
  "6029":"E2F5",
  "602A":"B9D6",
  "602B":"E2F6",
  "602F":"C7D3",
  "6035":"E2F0",
  "603B":"D7DC",
  "603C":"EDA1",
  "603F":"E2F8",
  "6041":"EDA5",
  "6042":"E2FE",
  "6043":"CAD1",
  "604B":"C1B5",
  "604D":"BBD0",
  "6050":"BFD6",
  "6052":"BAE3",
  "6055":"CBA1",
  "6059":"EDA6",
  "605A":"EDA3",
  "605D":"EDA2",
  "6062":"BBD6",
  "6063":"EDA7",
  "6064":"D0F4",
  "6067":"EDA4",
  "6068":"BADE",
  "6069":"B6F7",
  "606A":"E3A1",
  "606B":"B6B2",
  "606C":"CCF1",
  "606D":"B9A7",
  "606F":"CFA2",
  "6070":"C7A1",
  "6073":"BFD2",
  "6076":"B6F1",
  "6078":"E2FA",
  "6079":"E2FB",
  "607A":"E2FD",
  "607B":"E2FC",
  "607C":"C4D5",
  "607D":"E3A2",
  "607F":"D3C1",
  "6083":"E3A7",
  "6084":"C7C4",
  "6089":"CFA4",
  "608C":"E3A9",
  "608D":"BAB7",
  "6092":"E3A8",
  "6094":"BBDA",
  "6096":"E3A3",
  "609A":"E3A4",
  "609B":"E3AA",
  "609D":"E3A6",
  "609F":"CEF2",
  "60A0":"D3C6",
  "60A3":"BBBC",
  "60A6":"D4C3",
  "60A8":"C4FA",
  "60AB":"EDA8",
  "60AC":"D0FC",
  "60AD":"E3A5",
  "60AF":"C3F5",
  "60B1":"E3AD",
  "60B2":"B1AF",
  "60B4":"E3B2",
  "60B8":"BCC2",
  "60BB":"E3AC",
  "60BC":"B5BF",
  "60C5":"C7E9",
  "60C6":"E3B0",
  "60CA":"BEAA",
  "60CB":"CDEF",
  "60D1":"BBF3",
  "60D5":"CCE8",
  "60D8":"E3AF",
  "60DA":"E3B1",
  "60DC":"CFA7",
  "60DD":"E3AE",
  "60DF":"CEA9",
  "60E0":"BBDD",
  "60E6":"B5EB",
  "60E7":"BEE5",
  "60E8":"B2D2",
  "60E9":"B3CD",
  "60EB":"B1B9",
  "60EC":"E3AB",
  "60ED":"B2D1",
  "60EE":"B5AC",
  "60EF":"B9DF",
  "60F0":"B6E8",
  "60F3":"CFEB",
  "60F4":"E3B7",
  "60F6":"BBCC",
  "60F9":"C8C7",
  "60FA":"D0CA",
  "6100":"E3B8",
  "6101":"B3EE",
  "6106":"EDA9",
  "6108":"D3FA",
  "6109":"D3E4",
  "610D":"EDAA",
  "610E":"E3B9",
  "610F":"D2E2",
  "6115":"E3B5",
  "611A":"D3DE",
  "611F":"B8D0",
  "6120":"E3B3",
  "6123":"E3B6",
  "6124":"B7DF",
  "6126":"E3B4",
  "6127":"C0A2",
  "612B":"E3BA",
  "613F":"D4B8",
  "6148":"B4C8",
  "614A":"E3BB",
  "614C":"BBC5",
  "614E":"C9F7",
  "6151":"C9E5",
  "6155":"C4BD",
  "615D":"EDAB",
  "6162":"C2FD",
  "6167":"BBDB",
  "6168":"BFAE",
  "6170":"CEBF",
  "6175":"E3BC",
  "6177":"BFB6",
  "618B":"B1EF",
  "618E":"D4F7",
  "6194":"E3BE",
  "619D":"EDAD",
  "61A7":"E3BF",
  "61A8":"BAA9",
  "61A9":"EDAC",
  "61AC":"E3BD",
  "61B7":"E3C0",
  "61BE":"BAB6",
  "61C2":"B6AE",
  "61C8":"D0B8",
  "61CA":"B0C3",
  "61CB":"EDAE",
  "61D1":"EDAF",
  "61D2":"C0C1",
  "61D4":"E3C1",
  "61E6":"C5B3",
  "61F5":"E3C2",
  "61FF":"DCB2",
  "6206":"EDB0",
  "6208":"B8EA",
  "620A":"CEEC",
  "620B":"EAA7",
  "620C":"D0E7",
  "620D":"CAF9",
  "620E":"C8D6",
  "620F":"CFB7",
  "6210":"B3C9",
  "6211":"CED2",
  "6212":"BDE4",
  "6215":"E3DE",
  "6216":"BBF2",
  "6217":"EAA8",
  "6218":"D5BD",
  "621A":"C6DD",
  "621B":"EAA9",
  "621F":"EAAA",
  "6221":"EAAC",
  "6222":"EAAB",
  "6224":"EAAE",
  "6225":"EAAD",
  "622A":"BDD8",
  "622C":"EAAF",
  "622E":"C2BE",
  "6233":"B4C1",
  "6234":"B4F7",
  "6237":"BBA7",
  "623D":"ECE6",
  "623E":"ECE5",
  "623F":"B7BF",
  "6240":"CBF9",
  "6241":"B1E2",
  "6243":"ECE7",
  "6247":"C9C8",
  "6248":"ECE8",
  "6249":"ECE9",
  "624B":"CAD6",
  "624C":"DED0",
  "624D":"B2C5",
  "624E":"D4FA",
  "6251":"C6CB",
  "6252":"B0C7",
  "6253":"B4F2",
  "6254":"C8D3",
  "6258":"CDD0",
  "625B":"BFB8",
  "6263":"BFDB",
  "6266":"C7A4",
  "6267":"D6B4",
  "6269":"C0A9",
  "626A":"DED1",
  "626B":"C9A8",
  "626C":"D1EF",
  "626D":"C5A4",
  "626E":"B0E7",
  "626F":"B3B6",
  "6270":"C8C5",
  "6273":"B0E2",
  "6276":"B7F6",
  "6279":"C5FA",
  "627C":"B6F3",
  "627E":"D5D2",
  "627F":"B3D0",
  "6280":"BCBC",
  "6284":"B3AD",
  "6289":"BEF1",
  "628A":"B0D1",
  "6291":"D2D6",
  "6292":"CAE3",
  "6293":"D7A5",
  "6295":"CDB6",
  "6296":"B6B6",
  "6297":"BFB9",
  "6298":"D5DB",
  "629A":"B8A7",
  "629B":"C5D7",
  "629F":"DED2",
  "62A0":"BFD9",
  "62A1":"C2D5",
  "62A2":"C7C0",
  "62A4":"BBA4",
  "62A5":"B1A8",
  "62A8":"C5EA",
  "62AB":"C5FB",
  "62AC":"CCA7",
  "62B1":"B1A7",
  "62B5":"B5D6",
  "62B9":"C4A8",
  "62BB":"DED3",
  "62BC":"D1BA",
  "62BD":"B3E9",
  "62BF":"C3F2",
  "62C2":"B7F7",
  "62C4":"D6F4",
  "62C5":"B5A3",
  "62C6":"B2F0",
  "62C7":"C4B4",
  "62C8":"C4E9",
  "62C9":"C0AD",
  "62CA":"DED4",
  "62CC":"B0E8",
  "62CD":"C5C4",
  "62CE":"C1E0",
  "62D0":"B9D5",
  "62D2":"BEDC",
  "62D3":"CDD8",
  "62D4":"B0CE",
  "62D6":"CDCF",
  "62D7":"DED6",
  "62D8":"BED0",
  "62D9":"D7BE",
  "62DA":"DED5",
  "62DB":"D5D0",
  "62DC":"B0DD",
  "62DF":"C4E2",
  "62E2":"C2A3",
  "62E3":"BCF0",
  "62E5":"D3B5",
  "62E6":"C0B9",
  "62E7":"C5A1",
  "62E8":"B2A6",
  "62E9":"D4F1",
  "62EC":"C0A8",
  "62ED":"CAC3",
  "62EE":"DED7",
  "62EF":"D5FC",
  "62F1":"B9B0",
  "62F3":"C8AD",
  "62F4":"CBA9",
  "62F6":"DED9",
  "62F7":"BFBD",
  "62FC":"C6B4",
  "62FD":"D7A7",
  "62FE":"CAB0",
  "62FF":"C4C3",
  "6301":"B3D6",
  "6302":"B9D2",
  "6307":"D6B8",
  "6308":"EAFC",
  "6309":"B0B4",
  "630E":"BFE6",
  "6311":"CCF4",
  "6316":"CDDA",
  "631A":"D6BF",
  "631B":"C2CE",
  "631D":"CECE",
  "631E":"CCA2",
  "631F":"D0AE",
  "6320":"C4D3",
  "6321":"B5B2",
  "6322":"DED8",
  "6323":"D5F5",
  "6324":"BCB7",
  "6325":"BBD3",
  "6328":"B0A4",
  "632A":"C5B2",
  "632B":"B4EC",
  "632F":"D5F1",
  "6332":"EAFD",
  "6339":"DEDA",
  "633A":"CDA6",
  "633D":"CDEC",
  "6342":"CEE6",
  "6343":"DEDC",
  "6345":"CDB1",
  "6346":"C0A6",
  "6349":"D7BD",
  "634B":"DEDB",
  "634C":"B0C6",
  "634D":"BAB4",
  "634E":"C9D3",
  "634F":"C4F3",
  "6350":"BEE8",
  "6355":"B2B6",
  "635E":"C0CC",
  "635F":"CBF0",
  "6361":"BCF1",
  "6362":"BBBB",
  "6363":"B5B7",
  "6367":"C5F5",
  "6369":"DEE6",
  "636D":"DEE3",
  "636E":"BEDD",
  "6371":"DEDF",
  "6376":"B4B7",
  "6377":"BDDD",
  "637A":"DEE0",
  "637B":"C4ED",
  "6380":"CFC6",
  "6382":"B5E0",
  "6387":"B6DE",
  "6388":"CADA",
  "6389":"B5F4",
  "638A":"DEE5",
  "638C":"D5C6",
  "638E":"DEE1",
  "638F":"CCCD",
  "6390":"C6FE",
  "6392":"C5C5",
  "6396":"D2B4",
  "6398":"BEF2",
  "63A0":"C2D3",
  "63A2":"CCBD",
  "63A3":"B3B8",
  "63A5":"BDD3",
  "63A7":"BFD8",
  "63A8":"CDC6",
  "63A9":"D1DA",
  "63AA":"B4EB",
  "63AC":"DEE4",
  "63AD":"DEDD",
  "63AE":"DEE7",
  "63B0":"EAFE",
  "63B3":"C2B0",
  "63B4":"DEE2",
  "63B7":"D6C0",
  "63B8":"B5A7",
  "63BA":"B2F4",
  "63BC":"DEE8",
  "63BE":"DEF2",
  "63C4":"DEED",
  "63C6":"DEF1",
  "63C9":"C8E0",
  "63CD":"D7E1",
  "63CE":"DEEF",
  "63CF":"C3E8",
  "63D0":"CCE1",
  "63D2":"B2E5",
  "63D6":"D2BE",
  "63DE":"DEEE",
  "63E0":"DEEB",
  "63E1":"CED5",
  "63E3":"B4A7",
  "63E9":"BFAB",
  "63EA":"BEBE",
  "63ED":"BDD2",
  "63F2":"DEE9",
  "63F4":"D4AE",
  "63F6":"DEDE",
  "63F8":"DEEA",
  "63FD":"C0BF",
  "63FF":"DEEC",
  "6400":"B2F3",
  "6401":"B8E9",
  "6402":"C2A7",
  "6405":"BDC1",
  "640B":"DEF5",
  "640C":"DEF8",
  "640F":"B2AB",
  "6410":"B4A4",
  "6413":"B4EA",
  "6414":"C9A6",
  "641B":"DEF6",
  "641C":"CBD1",
  "641E":"B8E3",
  "6420":"DEF7",
  "6421":"DEFA",
  "6426":"DEF9",
  "642A":"CCC2",
  "642C":"B0E1",
  "642D":"B4EE",
  "6434":"E5BA",
  "643A":"D0AF",
  "643D":"B2EB",
  "643F":"EBA1",
  "6441":"DEF4",
  "6444":"C9E3",
  "6445":"DEF3",
  "6446":"B0DA",
  "6447":"D2A1",
  "6448":"B1F7",
  "644A":"CCAF",
  "6452":"DEF0",
  "6454":"CBA4",
  "6458":"D5AA",
  "645E":"DEFB",
  "6467":"B4DD",
  "6469":"C4A6",
  "646D":"DEFD",
  "6478":"C3FE",
  "6479":"C4A1",
  "647A":"DFA1",
  "6482":"C1CC",
  "6484":"DEFC",
  "6485":"BEEF",
  "6487":"C6B2",
  "6491":"B3C5",
  "6492":"C8F6",
  "6495":"CBBA",
  "6496":"DEFE",
  "6499":"DFA4",
  "649E":"D7B2",
  "64A4":"B3B7",
  "64A9":"C1C3",
  "64AC":"C7CB",
  "64AD":"B2A5",
  "64AE":"B4E9",
  "64B0":"D7AB",
  "64B5":"C4EC",
  "64B7":"DFA2",
  "64B8":"DFA3",
  "64BA":"DFA5",
  "64BC":"BAB3",
  "64C0":"DFA6",
  "64C2":"C0DE",
  "64C5":"C9C3",
  "64CD":"B2D9",
  "64CE":"C7E6",
  "64D0":"DFA7",
  "64D2":"C7DC",
  "64D7":"DFA8",
  "64D8":"EBA2",
  "64DE":"CBD3",
  "64E2":"DFAA",
  "64E4":"DFA9",
  "64E6":"B2C1",
  "6500":"C5CA",
  "6509":"DFAB",
  "6512":"D4DC",
  "6518":"C8C1",
  "6525":"DFAC",
  "652B":"BEF0",
  "652E":"DFAD",
  "652F":"D6A7",
  "6534":"EAB7",
  "6535":"EBB6",
  "6536":"CAD5",
  "6538":"D8FC",
  "6539":"B8C4",
  "653B":"B9A5",
  "653E":"B7C5",
  "653F":"D5FE",
  "6545":"B9CA",
  "6548":"D0A7",
  "6549":"F4CD",
  "654C":"B5D0",
  "654F":"C3F4",
  "6551":"BEC8",
  "6555":"EBB7",
  "6556":"B0BD",
  "6559":"BDCC",
  "655B":"C1B2",
  "655D":"B1D6",
  "655E":"B3A8",
  "6562":"B8D2",
  "6563":"C9A2",
  "6566":"B6D8",
  "656B":"EBB8",
  "656C":"BEB4",
  "6570":"CAFD",
  "6572":"C7C3",
  "6574":"D5FB",
  "6577":"B7F3",
  "6587":"CEC4",
  "658B":"D5AB",
  "658C":"B1F3",
  "6590":"ECB3",
  "6591":"B0DF",
  "6593":"ECB5",
  "6597":"B6B7",
  "6599":"C1CF",
  "659B":"F5FA",
  "659C":"D0B1",
  "659F":"D5E5",
  "65A1":"CED3",
  "65A4":"BDEF",
  "65A5":"B3E2",
  "65A7":"B8AB",
  "65A9":"D5B6",
  "65AB":"EDBD",
  "65AD":"B6CF",
  "65AF":"CBB9",
  "65B0":"D0C2",
  "65B9":"B7BD",
  "65BC":"ECB6",
  "65BD":"CAA9",
  "65C1":"C5D4",
  "65C3":"ECB9",
  "65C4":"ECB8",
  "65C5":"C2C3",
  "65C6":"ECB7",
  "65CB":"D0FD",
  "65CC":"ECBA",
  "65CE":"ECBB",
  "65CF":"D7E5",
  "65D2":"ECBC",
  "65D6":"ECBD",
  "65D7":"C6EC",
  "65E0":"CEDE",
  "65E2":"BCC8",
  "65E5":"C8D5",
  "65E6":"B5A9",
  "65E7":"BEC9",
  "65E8":"D6BC",
  "65E9":"D4E7",
  "65EC":"D1AE",
  "65ED":"D0F1",
  "65EE":"EAB8",
  "65EF":"EAB9",
  "65F0":"EABA",
  "65F1":"BAB5",
  "65F6":"CAB1",
  "65F7":"BFF5",
  "65FA":"CDFA",
  "6600":"EAC0",
  "6602":"B0BA",
  "6603":"EABE",
  "6606":"C0A5",
  "660A":"EABB",
  "660C":"B2FD",
  "660E":"C3F7",
  "660F":"BBE8",
  "6613":"D2D7",
  "6614":"CEF4",
  "6615":"EABF",
  "6619":"EABC",
  "661D":"EAC3",
  "661F":"D0C7",
  "6620":"D3B3",
  "6625":"B4BA",
  "6627":"C3C1",
  "6628":"D7F2",
  "662D":"D5D1",
  "662F":"CAC7",
  "6631":"EAC5",
  "6634":"EAC4",
  "6635":"EAC7",
  "6636":"EAC6",
  "663C":"D6E7",
  "663E":"CFD4",
  "6641":"EACB",
  "6643":"BBCE",
  "664B":"BDFA",
  "664C":"C9CE",
  "664F":"EACC",
  "6652":"C9B9",
  "6653":"CFFE",
  "6654":"EACA",
  "6655":"D4CE",
  "6656":"EACD",
  "6657":"EACF",
  "665A":"CDED",
  "665F":"EAC9",
  "6661":"EACE",
  "6664":"CEEE",
  "6666":"BBDE",
  "6668":"B3BF",
  "666E":"C6D5",
  "666F":"BEB0",
  "6670":"CEFA",
  "6674":"C7E7",
  "6676":"BEA7",
  "6677":"EAD0",
  "667A":"D6C7",
  "667E":"C1C0",
  "6682":"D4DD",
  "6684":"EAD1",
  "6687":"CFBE",
  "668C":"EAD2",
  "6691":"CAEE",
  "6696":"C5AF",
  "6697":"B0B5",
  "669D":"EAD4",
  "66A7":"EAD3",
  "66A8":"F4DF",
  "66AE":"C4BA",
  "66B4":"B1A9",
  "66B9":"E5DF",
  "66BE":"EAD5",
  "66D9":"CAEF",
  "66DB":"EAD6",
  "66DC":"EAD7",
  "66DD":"C6D8",
  "66E6":"EAD8",
  "66E9":"EAD9",
  "66F0":"D4BB",
  "66F2":"C7FA",
  "66F3":"D2B7",
  "66F4":"B8FC",
  "66F7":"EAC2",
  "66F9":"B2DC",
  "66FC":"C2FC",
  "66FE":"D4F8",
  "66FF":"CCE6",
  "6700":"D7EE",
  "6708":"D4C2",
  "6709":"D3D0",
  "670A":"EBC3",
  "670B":"C5F3",
  "670D":"B7FE",
  "6710":"EBD4",
  "6714":"CBB7",
  "6715":"EBDE",
  "6717":"C0CA",
  "671B":"CDFB",
  "671D":"B3AF",
  "671F":"C6DA",
  "6726":"EBFC",
  "6728":"C4BE",
  "672A":"CEB4",
  "672B":"C4A9",
  "672C":"B1BE",
  "672D":"D4FD",
  "672F":"CAF5",
  "6731":"D6EC",
  "6734":"C6D3",
  "6735":"B6E4",
  "673A":"BBFA",
  "673D":"D0E0",
  "6740":"C9B1",
  "6742":"D4D3",
  "6743":"C8A8",
  "6746":"B8CB",
  "6748":"E8BE",
  "6749":"C9BC",
  "674C":"E8BB",
  "674E":"C0EE",
  "674F":"D0D3",
  "6750":"B2C4",
  "6751":"B4E5",
  "6753":"E8BC",
  "6756":"D5C8",
  "675C":"B6C5",
  "675E":"E8BD",
  "675F":"CAF8",
  "6760":"B8DC",
  "6761":"CCF5",
  "6765":"C0B4",
  "6768":"D1EE",
  "6769":"E8BF",
  "676A":"E8C2",
  "676D":"BABC",
  "676F":"B1AD",
  "6770":"BDDC",
  "6772":"EABD",
  "6773":"E8C3",
  "6775":"E8C6",
  "6777":"E8CB",
  "677C":"E8CC",
  "677E":"CBC9",
  "677F":"B0E5",
  "6781":"BCAB",
  "6784":"B9B9",
  "6787":"E8C1",
  "6789":"CDF7",
  "678B":"E8CA",
  "6790":"CEF6",
  "6795":"D5ED",
  "6797":"C1D6",
  "6798":"E8C4",
  "679A":"C3B6",
  "679C":"B9FB",
  "679D":"D6A6",
  "679E":"E8C8",
  "67A2":"CAE0",
  "67A3":"D4E6",
  "67A5":"E8C0",
  "67A7":"E8C5",
  "67A8":"E8C7",
  "67AA":"C7B9",
  "67AB":"B7E3",
  "67AD":"E8C9",
  "67AF":"BFDD",
  "67B0":"E8D2",
  "67B3":"E8D7",
  "67B5":"E8D5",
  "67B6":"BCDC",
  "67B7":"BCCF",
  "67B8":"E8DB",
  "67C1":"E8DE",
  "67C3":"E8DA",
  "67C4":"B1FA",
  "67CF":"B0D8",
  "67D0":"C4B3",
  "67D1":"B8CC",
  "67D2":"C6E2",
  "67D3":"C8BE",
  "67D4":"C8E1",
  "67D8":"E8CF",
  "67D9":"E8D4",
  "67DA":"E8D6",
  "67DC":"B9F1",
  "67DD":"E8D8",
  "67DE":"D7F5",
  "67E0":"C4FB",
  "67E2":"E8DC",
  "67E5":"B2E9",
  "67E9":"E8D1",
  "67EC":"BCED",
  "67EF":"BFC2",
  "67F0":"E8CD",
  "67F1":"D6F9",
  "67F3":"C1F8",
  "67F4":"B2F1",
  "67FD":"E8DF",
  "67FF":"CAC1",
  "6800":"E8D9",
  "6805":"D5A4",
  "6807":"B1EA",
  "6808":"D5BB",
  "6809":"E8CE",
  "680A":"E8D0",
  "680B":"B6B0",
  "680C":"E8D3",
  "680E":"E8DD",
  "680F":"C0B8",
  "6811":"CAF7",
  "6813":"CBA8",
  "6816":"C6DC",
  "6817":"C0F5",
  "681D":"E8E9",
  "6821":"D0A3",
  "6829":"E8F2",
  "682A":"D6EA",
  "6832":"E8E0",
  "6833":"E8E1",
  "6837":"D1F9",
  "6838":"BACB",
  "6839":"B8F9",
  "683C":"B8F1",
  "683D":"D4D4",
  "683E":"E8EF",
  "6840":"E8EE",
  "6841":"E8EC",
  "6842":"B9F0",
  "6843":"CCD2",
  "6844":"E8E6",
  "6845":"CEA6",
  "6846":"BFF2",
  "6848":"B0B8",
  "6849":"E8F1",
  "684A":"E8F0",
  "684C":"D7C0",
  "684E":"E8E4",
  "6850":"CDA9",
  "6851":"C9A3",
  "6853":"BBB8",
  "6854":"BDDB",
  "6855":"E8EA",
  "6860":"E8E2",
  "6861":"E8E3",
  "6862":"E8E5",
  "6863":"B5B5",
  "6864":"E8E7",
  "6865":"C7C5",
  "6866":"E8EB",
  "6867":"E8ED",
  "6868":"BDB0",
  "6869":"D7AE",
  "686B":"E8F8",
  "6874":"E8F5",
  "6876":"CDB0",
  "6877":"E8F6",
  "6881":"C1BA",
  "6883":"E8E8",
  "6885":"C3B7",
  "6886":"B0F0",
  "688F":"E8F4",
  "6893":"E8F7",
  "6897":"B9A3",
  "68A2":"C9D2",
  "68A6":"C3CE",
  "68A7":"CEE0",
  "68A8":"C0E6",
  "68AD":"CBF3",
  "68AF":"CCDD",
  "68B0":"D0B5",
  "68B3":"CAE1",
  "68B5":"E8F3",
  "68C0":"BCEC",
  "68C2":"E8F9",
  "68C9":"C3DE",
  "68CB":"C6E5",
  "68CD":"B9F7",
  "68D2":"B0F4",
  "68D5":"D7D8",
  "68D8":"BCAC",
  "68DA":"C5EF",
  "68E0":"CCC4",
  "68E3":"E9A6",
  "68EE":"C9AD",
  "68F0":"E9A2",
  "68F1":"C0E2",
  "68F5":"BFC3",
  "68F9":"E8FE",
  "68FA":"B9D7",
  "68FC":"E8FB",
  "6901":"E9A4",
  "6905":"D2CE",
  "690B":"E9A3",
  "690D":"D6B2",
  "690E":"D7B5",
  "6910":"E9A7",
  "6912":"BDB7",
  "691F":"E8FC",
  "6920":"E8FD",
  "6924":"E9A1",
  "692D":"CDD6",
  "6930":"D2AC",
  "6934":"E9B2",
  "6939":"E9A9",
  "693D":"B4AA",
  "693F":"B4BB",
  "6942":"E9AB",
  "6954":"D0A8",
  "6957":"E9A5",
  "695A":"B3FE",
  "695D":"E9AC",
  "695E":"C0E3",
  "6960":"E9AA",
  "6963":"E9B9",
  "6966":"E9B8",
  "696B":"E9AE",
  "696E":"E8FA",
  "6971":"E9A8",
  "6977":"BFAC",
  "6978":"E9B1",
  "6979":"E9BA",
  "697C":"C2A5",
  "6980":"E9AF",
  "6982":"B8C5",
  "6984":"E9AD",
  "6986":"D3DC",
  "6987":"E9B4",
  "6988":"E9B5",
  "6989":"E9B7",
  "698D":"E9C7",
  "6994":"C0C6",
  "6995":"E9C5",
  "6998":"E9B0",
  "699B":"E9BB",
  "699C":"B0F1",
  "69A7":"E9BC",
  "69A8":"D5A5",
  "69AB":"E9BE",
  "69AD":"E9BF",
  "69B1":"E9C1",
  "69B4":"C1F1",
  "69B7":"C8B6",
  "69BB":"E9BD",
  "69C1":"E9C2",
  "69CA":"E9C3",
  "69CC":"E9B3",
  "69CE":"E9B6",
  "69D0":"BBB1",
  "69D4":"E9C0",
  "69DB":"BCF7",
  "69DF":"E9C4",
  "69E0":"E9C6",
  "69ED":"E9CA",
  "69F2":"E9CE",
  "69FD":"B2DB",
  "69FF":"E9C8",
  "6A0A":"B7AE",
  "6A17":"E9CB",
  "6A18":"E9CC",
  "6A1F":"D5C1",
  "6A21":"C4A3",
  "6A28":"E9D8",
  "6A2A":"BAE1",
  "6A2F":"E9C9",
  "6A31":"D3A3",
  "6A35":"E9D4",
  "6A3D":"E9D7",
  "6A3E":"E9D0",
  "6A44":"E9CF",
  "6A47":"C7C1",
  "6A50":"E9D2",
  "6A58":"E9D9",
  "6A59":"B3C8",
  "6A5B":"E9D3",
  "6A61":"CFF0",
  "6A65":"E9CD",
  "6A71":"B3F7",
  "6A79":"E9D6",
  "6A7C":"E9DA",
  "6A80":"CCB4",
  "6A84":"CFAD",
  "6A8E":"E9D5",
  "6A90":"E9DC",
  "6A91":"E9DB",
  "6A97":"E9DE",
  "6AA0":"E9D1",
  "6AA9":"E9DD",
  "6AAB":"E9DF",
  "6AAC":"C3CA",
  "6B20":"C7B7",
  "6B21":"B4CE",
  "6B22":"BBB6",
  "6B23":"D0C0",
  "6B24":"ECA3",
  "6B27":"C5B7",
  "6B32":"D3FB",
  "6B37":"ECA4",
  "6B39":"ECA5",
  "6B3A":"C6DB",
  "6B3E":"BFEE",
  "6B43":"ECA6",
  "6B46":"ECA7",
  "6B47":"D0AA",
  "6B49":"C7B8",
  "6B4C":"B8E8",
  "6B59":"ECA8",
  "6B62":"D6B9",
  "6B63":"D5FD",
  "6B64":"B4CB",
  "6B65":"B2BD",
  "6B66":"CEE4",
  "6B67":"C6E7",
  "6B6A":"CDE1",
  "6B79":"B4F5",
  "6B7B":"CBC0",
  "6B7C":"BCDF",
  "6B81":"E9E2",
  "6B82":"E9E3",
  "6B83":"D1EA",
  "6B84":"E9E5",
  "6B86":"B4F9",
  "6B87":"E9E4",
  "6B89":"D1B3",
  "6B8A":"CAE2",
  "6B8B":"B2D0",
  "6B8D":"E9E8",
  "6B92":"E9E6",
  "6B93":"E9E7",
  "6B96":"D6B3",
  "6B9A":"E9E9",
  "6B9B":"E9EA",
  "6BA1":"E9EB",
  "6BAA":"E9EC",
  "6BB3":"ECAF",
  "6BB4":"C5B9",
  "6BB5":"B6CE",
  "6BB7":"D2F3",
  "6BBF":"B5EE",
  "6BC1":"BBD9",
  "6BC2":"ECB1",
  "6BC5":"D2E3",
  "6BCB":"CEE3",
  "6BCD":"C4B8",
  "6BCF":"C3BF",
  "6BD2":"B6BE",
  "6BD3":"D8B9",
  "6BD4":"B1C8",
  "6BD5":"B1CF",
  "6BD6":"B1D1",
  "6BD7":"C5FE",
  "6BD9":"B1D0",
  "6BDB":"C3AB",
  "6BE1":"D5B1",
  "6BEA":"EBA4",
  "6BEB":"BAC1",
  "6BEF":"CCBA",
  "6BF3":"EBA5",
  "6BF5":"EBA7",
  "6BF9":"EBA8",
  "6BFD":"EBA6",
  "6C05":"EBA9",
  "6C06":"EBAB",
  "6C07":"EBAA",
  "6C0D":"EBAC",
  "6C0F":"CACF",
  "6C10":"D8B5",
  "6C11":"C3F1",
  "6C13":"C3A5",
  "6C14":"C6F8",
  "6C15":"EBAD",
  "6C16":"C4CA",
  "6C18":"EBAE",
  "6C19":"EBAF",
  "6C1A":"EBB0",
  "6C1B":"B7D5",
  "6C1F":"B7FA",
  "6C21":"EBB1",
  "6C22":"C7E2",
  "6C24":"EBB3",
  "6C26":"BAA4",
  "6C27":"D1F5",
  "6C28":"B0B1",
  "6C29":"EBB2",
  "6C2A":"EBB4",
  "6C2E":"B5AA",
  "6C2F":"C2C8",
  "6C30":"C7E8",
  "6C32":"EBB5",
  "6C34":"CBAE",
  "6C35":"E3DF",
  "6C38":"D3C0",
  "6C3D":"D9DB",
  "6C40":"CDA1",
  "6C41":"D6AD",
  "6C42":"C7F3",
  "6C46":"D9E0",
  "6C47":"BBE3",
  "6C49":"BABA",
  "6C4A":"E3E2",
  "6C50":"CFAB",
  "6C54":"E3E0",
  "6C55":"C9C7",
  "6C57":"BAB9",
  "6C5B":"D1B4",
  "6C5C":"E3E1",
  "6C5D":"C8EA",
  "6C5E":"B9AF",
  "6C5F":"BDAD",
  "6C60":"B3D8",
  "6C61":"CEDB",
  "6C64":"CCC0",
  "6C68":"E3E8",
  "6C69":"E3E9",
  "6C6A":"CDF4",
  "6C70":"CCAD",
  "6C72":"BCB3",
  "6C74":"E3EA",
  "6C76":"E3EB",
  "6C79":"D0DA",
  "6C7D":"C6FB",
  "6C7E":"B7DA",
  "6C81":"C7DF",
  "6C82":"D2CA",
  "6C83":"CED6",
  "6C85":"E3E4",
  "6C86":"E3EC",
  "6C88":"C9F2",
  "6C89":"B3C1",
  "6C8C":"E3E7",
  "6C8F":"C6E3",
  "6C90":"E3E5",
  "6C93":"EDB3",
  "6C94":"E3E6",
  "6C99":"C9B3",
  "6C9B":"C5E6",
  "6C9F":"B9B5",
  "6CA1":"C3BB",
  "6CA3":"E3E3",
  "6CA4":"C5BD",
  "6CA5":"C1A4",
  "6CA6":"C2D9",
  "6CA7":"B2D7",
  "6CA9":"E3ED",
  "6CAA":"BBA6",
  "6CAB":"C4AD",
  "6CAD":"E3F0",
  "6CAE":"BEDA",
  "6CB1":"E3FB",
  "6CB2":"E3F5",
  "6CB3":"BAD3",
  "6CB8":"B7D0",
  "6CB9":"D3CD",
  "6CBB":"D6CE",
  "6CBC":"D5D3",
  "6CBD":"B9C1",
  "6CBE":"D5B4",
  "6CBF":"D1D8",
  "6CC4":"D0B9",
  "6CC5":"C7F6",
  "6CC9":"C8AA",
  "6CCA":"B2B4",
  "6CCC":"C3DA",
  "6CD0":"E3EE",
  "6CD3":"E3FC",
  "6CD4":"E3EF",
  "6CD5":"B7A8",
  "6CD6":"E3F7",
  "6CD7":"E3F4",
  "6CDB":"B7BA",
  "6CDE":"C5A2",
  "6CE0":"E3F6",
  "6CE1":"C5DD",
  "6CE2":"B2A8",
  "6CE3":"C6FC",
  "6CE5":"C4E0",
  "6CE8":"D7A2",
  "6CEA":"C0E1",
  "6CEB":"E3F9",
  "6CEE":"E3FA",
  "6CEF":"E3FD",
  "6CF0":"CCA9",
  "6CF1":"E3F3",
  "6CF3":"D3BE",
  "6CF5":"B1C3",
  "6CF6":"EDB4",
  "6CF7":"E3F1",
  "6CF8":"E3F2",
  "6CFA":"E3F8",
  "6CFB":"D0BA",
  "6CFC":"C6C3",
  "6CFD":"D4F3",
  "6CFE":"E3FE",
  "6D01":"BDE0",
  "6D04":"E4A7",
  "6D07":"E4A6",
  "6D0B":"D1F3",
  "6D0C":"E4A3",
  "6D0E":"E4A9",
  "6D12":"C8F7",
  "6D17":"CFB4",
  "6D19":"E4A8",
  "6D1A":"E4AE",
  "6D1B":"C2E5",
  "6D1E":"B6B4",
  "6D25":"BDF2",
  "6D27":"E4A2",
  "6D2A":"BAE9",
  "6D2B":"E4AA",
  "6D2E":"E4AC",
  "6D31":"B6FD",
  "6D32":"D6DE",
  "6D33":"E4B2",
  "6D35":"E4AD",
  "6D39":"E4A1",
  "6D3B":"BBEE",
  "6D3C":"CDDD",
  "6D3D":"C7A2",
  "6D3E":"C5C9",
  "6D41":"C1F7",
  "6D43":"E4A4",
  "6D45":"C7B3",
  "6D46":"BDAC",
  "6D47":"BDBD",
  "6D48":"E4A5",
  "6D4A":"D7C7",
  "6D4B":"B2E2",
  "6D4D":"E4AB",
  "6D4E":"BCC3",
  "6D4F":"E4AF",
  "6D51":"BBEB",
  "6D52":"E4B0",
  "6D53":"C5A8",
  "6D54":"E4B1",
  "6D59":"D5E3",
  "6D5A":"BFA3",
  "6D5C":"E4BA",
  "6D5E":"E4B7",
  "6D60":"E4BB",
  "6D63":"E4BD",
  "6D66":"C6D6",
  "6D69":"BAC6",
  "6D6A":"C0CB",
  "6D6E":"B8A1",
  "6D6F":"E4B4",
  "6D74":"D4A1",
  "6D77":"BAA3",
  "6D78":"BDFE",
  "6D7C":"E4BC",
  "6D82":"CDBF",
  "6D85":"C4F9",
  "6D88":"CFFB",
  "6D89":"C9E6",
  "6D8C":"D3BF",
  "6D8E":"CFD1",
  "6D91":"E4B3",
  "6D93":"E4B8",
  "6D94":"E4B9",
  "6D95":"CCE9",
  "6D9B":"CCCE",
  "6D9D":"C0D4",
  "6D9E":"E4B5",
  "6D9F":"C1B0",
  "6DA0":"E4B6",
  "6DA1":"CED0",
  "6DA3":"BBC1",
  "6DA4":"B5D3",
  "6DA6":"C8F3",
  "6DA7":"BDA7",
  "6DA8":"D5C7",
  "6DA9":"C9AC",
  "6DAA":"B8A2",
  "6DAB":"E4CA",
  "6DAE":"E4CC",
  "6DAF":"D1C4",
  "6DB2":"D2BA",
  "6DB5":"BAAD",
  "6DB8":"BAD4",
  "6DBF":"E4C3",
  "6DC0":"B5ED",
  "6DC4":"D7CD",
  "6DC5":"E4C0",
  "6DC6":"CFFD",
  "6DC7":"E4BF",
  "6DCB":"C1DC",
  "6DCC":"CCCA",
  "6DD1":"CAE7",
  "6DD6":"C4D7",
  "6DD8":"CCD4",
  "6DD9":"E4C8",
  "6DDD":"E4C7",
  "6DDE":"E4C1",
  "6DE0":"E4C4",
  "6DE1":"B5AD",
  "6DE4":"D3D9",
  "6DE6":"E4C6",
  "6DEB":"D2F9",
  "6DEC":"B4E3",
  "6DEE":"BBB4",
  "6DF1":"C9EE",
  "6DF3":"B4BE",
  "6DF7":"BBEC",
  "6DF9":"D1CD",
  "6DFB":"CCED",
  "6DFC":"EDB5",
  "6E05":"C7E5",
  "6E0A":"D4A8",
  "6E0C":"E4CB",
  "6E0D":"D7D5",
  "6E0E":"E4C2",
  "6E10":"BDA5",
  "6E11":"E4C5",
  "6E14":"D3E6",
  "6E16":"E4C9",
  "6E17":"C9F8",
  "6E1A":"E4BE",
  "6E1D":"D3E5",
  "6E20":"C7FE",
  "6E21":"B6C9",
  "6E23":"D4FC",
  "6E24":"B2B3",
  "6E25":"E4D7",
  "6E29":"CEC2",
  "6E2B":"E4CD",
  "6E2D":"CEBC",
  "6E2F":"B8DB",
  "6E32":"E4D6",
  "6E34":"BFCA",
  "6E38":"D3CE",
  "6E3A":"C3EC",
  "6E43":"C5C8",
  "6E44":"E4D8",
  "6E4D":"CDC4",
  "6E4E":"E4CF",
  "6E53":"E4D4",
  "6E54":"E4D5",
  "6E56":"BAFE",
  "6E58":"CFE6",
  "6E5B":"D5BF",
  "6E5F":"E4D2",
  "6E6B":"E4D0",
  "6E6E":"E4CE",
  "6E7E":"CDE5",
  "6E7F":"CAAA",
  "6E83":"C0A3",
  "6E85":"BDA6",
  "6E86":"E4D3",
  "6E89":"B8C8",
  "6E8F":"E4E7",
  "6E90":"D4B4",
  "6E98":"E4DB",
  "6E9C":"C1EF",
  "6E9F":"E4E9",
  "6EA2":"D2E7",
  "6EA5":"E4DF",
  "6EA7":"E4E0",
  "6EAA":"CFAA",
  "6EAF":"CBDD",
  "6EB1":"E4DA",
  "6EB2":"E4D1",
  "6EB4":"E4E5",
  "6EB6":"C8DC",
  "6EB7":"E4E3",
  "6EBA":"C4E7",
  "6EBB":"E4E2",
  "6EBD":"E4E1",
  "6EC1":"B3FC",
  "6EC2":"E4E8",
  "6EC7":"B5E1",
  "6ECB":"D7CC",
  "6ECF":"E4E6",
  "6ED1":"BBAC",
  "6ED3":"D7D2",
  "6ED4":"CCCF",
  "6ED5":"EBF8",
  "6ED7":"E4E4",
  "6EDA":"B9F6",
  "6EDE":"D6CD",
  "6EDF":"E4D9",
  "6EE0":"E4DC",
  "6EE1":"C2FA",
  "6EE2":"E4DE",
  "6EE4":"C2CB",
  "6EE5":"C0C4",
  "6EE6":"C2D0",
  "6EE8":"B1F5",
  "6EE9":"CCB2",
  "6EF4":"B5CE",
  "6EF9":"E4EF",
  "6F02":"C6AF",
  "6F06":"C6E1",
  "6F09":"E4F5",
  "6F0F":"C2A9",
  "6F13":"C0EC",
  "6F14":"D1DD",
  "6F15":"E4EE",
  "6F20":"C4AE",
  "6F24":"E4ED",
  "6F29":"E4F6",
  "6F2A":"E4F4",
  "6F2B":"C2FE",
  "6F2D":"E4DD",
  "6F2F":"E4F0",
  "6F31":"CAFE",
  "6F33":"D5C4",
  "6F36":"E4F1",
  "6F3E":"D1FA",
  "6F46":"E4EB",
  "6F47":"E4EC",
  "6F4B":"E4F2",
  "6F4D":"CEAB",
  "6F58":"C5CB",
  "6F5C":"C7B1",
  "6F5E":"C2BA",
  "6F62":"E4EA",
  "6F66":"C1CA",
  "6F6D":"CCB6",
  "6F6E":"B3B1",
  "6F72":"E4FB",
  "6F74":"E4F3",
  "6F78":"E4FA",
  "6F7A":"E4FD",
  "6F7C":"E4FC",
  "6F84":"B3CE",
  "6F88":"B3BA",
  "6F89":"E4F7",
  "6F8C":"E4F9",
  "6F8D":"E4F8",
  "6F8E":"C5EC",
  "6F9C":"C0BD",
  "6FA1":"D4E8",
  "6FA7":"E5A2",
  "6FB3":"B0C4",
  "6FB6":"E5A4",
  "6FB9":"E5A3",
  "6FC0":"BCA4",
  "6FC2":"E5A5",
  "6FC9":"E5A1",
  "6FD1":"E4FE",
  "6FD2":"B1F4",
  "6FDE":"E5A8",
  "6FE0":"E5A9",
  "6FE1":"E5A6",
  "6FEE":"E5A7",
  "6FEF":"E5AA",
  "7011":"C6D9",
  "701A":"E5AB",
  "701B":"E5AD",
  "7023":"E5AC",
  "7035":"E5AF",
  "7039":"E5AE",
  "704C":"B9E0",
  "704F":"E5B0",
  "705E":"E5B1",
  "706B":"BBF0",
  "706C":"ECE1",
  "706D":"C3F0",
  "706F":"B5C6",
  "7070":"BBD2",
  "7075":"C1E9",
  "7076":"D4EE",
  "7078":"BEC4",
  "707C":"D7C6",
  "707E":"D4D6",
  "707F":"B2D3",
  "7080":"ECBE",
  "7085":"EAC1",
  "7089":"C2AF",
  "708A":"B4B6",
  "708E":"D1D7",
  "7092":"B3B4",
  "7094":"C8B2",
  "7095":"BFBB",
  "7096":"ECC0",
  "7099":"D6CB",
  "709C":"ECBF",
  "709D":"ECC1",
  "70AB":"ECC5",
  "70AC":"BEE6",
  "70AD":"CCBF",
  "70AE":"C5DA",
  "70AF":"BEBC",
  "70B1":"ECC6",
  "70B3":"B1FE",
  "70B7":"ECC4",
  "70B8":"D5A8",
  "70B9":"B5E3",
  "70BB":"ECC2",
  "70BC":"C1B6",
  "70BD":"B3E3",
  "70C0":"ECC3",
  "70C1":"CBB8",
  "70C2":"C0C3",
  "70C3":"CCFE",
  "70C8":"C1D2",
  "70CA":"ECC8",
  "70D8":"BAE6",
  "70D9":"C0D3",
  "70DB":"D6F2",
  "70DF":"D1CC",
  "70E4":"BFBE",
  "70E6":"B7B3",
  "70E7":"C9D5",
  "70E8":"ECC7",
  "70E9":"BBE2",
  "70EB":"CCCC",
  "70EC":"BDFD",
  "70ED":"C8C8",
  "70EF":"CFA9",
  "70F7":"CDE9",
  "70F9":"C5EB",
  "70FD":"B7E9",
  "7109":"D1C9",
  "710A":"BAB8",
  "7110":"ECC9",
  "7113":"ECCA",
  "7115":"BBC0",
  "7116":"ECCB",
  "7118":"ECE2",
  "7119":"B1BA",
  "711A":"B7D9",
  "7126":"BDB9",
  "712F":"ECCC",
  "7130":"D1E6",
  "7131":"ECCD",
  "7136":"C8BB",
  "7145":"ECD1",
  "714A":"ECD3",
  "714C":"BBCD",
  "714E":"BCE5",
  "715C":"ECCF",
  "715E":"C9B7",
  "7164":"C3BA",
  "7166":"ECE3",
  "7167":"D5D5",
  "7168":"ECD0",
  "716E":"D6F3",
  "7172":"ECD2",
  "7173":"ECCE",
  "7178":"ECD4",
  "717A":"ECD5",
  "717D":"C9BF",
  "7184":"CFA8",
  "718A":"D0DC",
  "718F":"D1AC",
  "7194":"C8DB",
  "7198":"ECD6",
  "7199":"CEF5",
  "719F":"CAEC",
  "71A0":"ECDA",
  "71A8":"ECD9",
  "71AC":"B0BE",
  "71B3":"ECD7",
  "71B5":"ECD8",
  "71B9":"ECE4",
  "71C3":"C8BC",
  "71CE":"C1C7",
  "71D4":"ECDC",
  "71D5":"D1E0",
  "71E0":"ECDB",
  "71E5":"D4EF",
  "71E7":"ECDD",
  "71EE":"DBC6",
  "71F9":"ECDE",
  "7206":"B1AC",
  "721D":"ECDF",
  "7228":"ECE0",
  "722A":"D7A6",
  "722C":"C5C0",
  "7230":"EBBC",
  "7231":"B0AE",
  "7235":"BEF4",
  "7236":"B8B8",
  "7237":"D2AF",
  "7238":"B0D6",
  "7239":"B5F9",
  "723B":"D8B3",
  "723D":"CBAC",
  "723F":"E3DD",
  "7247":"C6AC",
  "7248":"B0E6",
  "724C":"C5C6",
  "724D":"EBB9",
  "7252":"EBBA",
  "7256":"EBBB",
  "7259":"D1C0",
  "725B":"C5A3",
  "725D":"EAF2",
  "725F":"C4B2",
  "7261":"C4B5",
  "7262":"C0CE",
  "7266":"EAF3",
  "7267":"C4C1",
  "7269":"CEEF",
  "726E":"EAF0",
  "726F":"EAF4",
  "7272":"C9FC",
  "7275":"C7A3",
  "7279":"CCD8",
  "727A":"CEFE",
  "727E":"EAF5",
  "727F":"EAF6",
  "7280":"CFAC",
  "7281":"C0E7",
  "7284":"EAF7",
  "728A":"B6BF",
  "728B":"EAF8",
  "728D":"EAF9",
  "728F":"EAFA",
  "7292":"EAFB",
  "729F":"EAF1",
  "72AC":"C8AE",
  "72AD":"E1EB",
  "72AF":"B7B8",
  "72B0":"E1EC",
  "72B4":"E1ED",
  "72B6":"D7B4",
  "72B7":"E1EE",
  "72B8":"E1EF",
  "72B9":"D3CC",
  "72C1":"E1F1",
  "72C2":"BFF1",
  "72C3":"E1F0",
  "72C4":"B5D2",
  "72C8":"B1B7",
  "72CD":"E1F3",
  "72CE":"E1F2",
  "72D0":"BAFC",
  "72D2":"E1F4",
  "72D7":"B9B7",
  "72D9":"BED1",
  "72DE":"C4FC",
  "72E0":"BADD",
  "72E1":"BDC6",
  "72E8":"E1F5",
  "72E9":"E1F7",
  "72EC":"B6C0",
  "72ED":"CFC1",
  "72EE":"CAA8",
  "72EF":"E1F6",
  "72F0":"D5F8",
  "72F1":"D3FC",
  "72F2":"E1F8",
  "72F3":"E1FC",
  "72F4":"E1F9",
  "72F7":"E1FA",
  "72F8":"C0EA",
  "72FA":"E1FE",
  "72FB":"E2A1",
  "72FC":"C0C7",
  "7301":"E1FB",
  "7303":"E1FD",
  "730A":"E2A5",
  "730E":"C1D4",
  "7313":"E2A3",
  "7315":"E2A8",
  "7316":"B2FE",
  "7317":"E2A2",
  "731B":"C3CD",
  "731C":"B2C2",
  "731D":"E2A7",
  "731E":"E2A6",
  "7321":"E2A4",
  "7322":"E2A9",
  "7325":"E2AB",
  "7329":"D0C9",
  "732A":"D6ED",
  "732B":"C3A8",
  "732C":"E2AC",
  "732E":"CFD7",
  "7331":"E2AE",
  "7334":"BAEF",
  "7337":"E9E0",
  "7338":"E2AD",
  "7339":"E2AA",
  "733E":"BBAB",
  "733F":"D4B3",
  "734D":"E2B0",
  "7350":"E2AF",
  "7352":"E9E1",
  "7357":"E2B1",
  "7360":"E2B2",
  "736C":"E2B3",
  "736D":"CCA1",
  "736F":"E2B4",
  "737E":"E2B5",
  "7384":"D0FE",
  "7387":"C2CA",
  "7389":"D3F1",
  "738B":"CDF5",
  "738E":"E7E0",
  "7391":"E7E1",
  "7396":"BEC1",
  "739B":"C2EA",
  "739F":"E7E4",
  "73A2":"E7E3",
  "73A9":"CDE6",
  "73AB":"C3B5",
  "73AE":"E7E2",
  "73AF":"BBB7",
  "73B0":"CFD6",
  "73B2":"C1E1",
  "73B3":"E7E9",
  "73B7":"E7E8",
  "73BA":"E7F4",
  "73BB":"B2A3",
  "73C0":"E7EA",
  "73C2":"E7E6",
  "73C8":"E7EC",
  "73C9":"E7EB",
  "73CA":"C9BA",
  "73CD":"D5E4",
  "73CF":"E7E5",
  "73D0":"B7A9",
  "73D1":"E7E7",
  "73D9":"E7EE",
  "73DE":"E7F3",
  "73E0":"D6E9",
  "73E5":"E7ED",
  "73E7":"E7F2",
  "73E9":"E7F1",
  "73ED":"B0E0",
  "73F2":"E7F5",
  "7403":"C7F2",
  "7405":"C0C5",
  "7406":"C0ED",
  "7409":"C1F0",
  "740A":"E7F0",
  "740F":"E7F6",
  "7410":"CBF6",
  "741A":"E8A2",
  "741B":"E8A1",
  "7422":"D7C1",
  "7425":"E7FA",
  "7426":"E7F9",
  "7428":"E7FB",
  "742A":"E7F7",
  "742C":"E7FE",
  "742E":"E7FD",
  "7430":"E7FC",
  "7433":"C1D5",
  "7434":"C7D9",
  "7435":"C5FD",
  "7436":"C5C3",
  "743C":"C7ED",
  "7441":"E8A3",
  "7455":"E8A6",
  "7457":"E8A5",
  "7459":"E8A7",
  "745A":"BAF7",
  "745B":"E7F8",
  "745C":"E8A4",
  "745E":"C8F0",
  "745F":"C9AA",
  "746D":"E8A9",
  "7470":"B9E5",
  "7476":"D1FE",
  "7477":"E8A8",
  "747E":"E8AA",
  "7480":"E8AD",
  "7481":"E8AE",
  "7483":"C1A7",
  "7487":"E8AF",
  "748B":"E8B0",
  "748E":"E8AC",
  "7490":"E8B4",
  "749C":"E8AB",
  "749E":"E8B1",
  "74A7":"E8B5",
  "74A8":"E8B2",
  "74A9":"E8B3",
  "74BA":"E8B7",
  "74D2":"E8B6",
  "74DC":"B9CF",
  "74DE":"F0AC",
  "74E0":"F0AD",
  "74E2":"C6B0",
  "74E3":"B0EA",
  "74E4":"C8BF",
  "74E6":"CDDF",
  "74EE":"CECD",
  "74EF":"EAB1",
  "74F4":"EAB2",
  "74F6":"C6BF",
  "74F7":"B4C9",
  "74FF":"EAB3",
  "7504":"D5E7",
  "750D":"DDF9",
  "750F":"EAB4",
  "7511":"EAB5",
  "7513":"EAB6",
  "7518":"B8CA",
  "7519":"DFB0",
  "751A":"C9F5",
  "751C":"CCF0",
  "751F":"C9FA",
  "7525":"C9FB",
  "7528":"D3C3",
  "7529":"CBA6",
  "752B":"B8A6",
  "752C":"F0AE",
  "752D":"B1C2",
  "752F":"E5B8",
  "7530":"CCEF",
  "7531":"D3C9",
  "7532":"BCD7",
  "7533":"C9EA",
  "7535":"B5E7",
  "7537":"C4D0",
  "7538":"B5E9",
  "753A":"EEAE",
  "753B":"BBAD",
  "753E":"E7DE",
  "7540":"EEAF",
  "7545":"B3A9",
  "7548":"EEB2",
  "754B":"EEB1",
  "754C":"BDE7",
  "754E":"EEB0",
  "754F":"CEB7",
  "7554":"C5CF",
  "7559":"C1F4",
  "755A":"DBCE",
  "755B":"EEB3",
  "755C":"D0F3",
  "7565":"C2D4",
  "7566":"C6E8",
  "756A":"B7AC",
  "7572":"EEB4",
  "7574":"B3EB",
  "7578":"BBFB",
  "7579":"EEB5",
  "757F":"E7DC",
  "7583":"EEB6",
  "7586":"BDAE",
  "758B":"F1E2",
  "758F":"CAE8",
  "7591":"D2C9",
  "7592":"F0DA",
  "7594":"F0DB",
  "7596":"F0DC",
  "7597":"C1C6",
  "7599":"B8ED",
  "759A":"BECE",
  "759D":"F0DE",
  "759F":"C5B1",
  "75A0":"F0DD",
  "75A1":"D1F1",
  "75A3":"F0E0",
  "75A4":"B0CC",
  "75A5":"BDEA",
  "75AB":"D2DF",
  "75AC":"F0DF",
  "75AE":"B4AF",
  "75AF":"B7E8",
  "75B0":"F0E6",
  "75B1":"F0E5",
  "75B2":"C6A3",
  "75B3":"F0E1",
  "75B4":"F0E2",
  "75B5":"B4C3",
  "75B8":"F0E3",
  "75B9":"D5EE",
  "75BC":"CCDB",
  "75BD":"BED2",
  "75BE":"BCB2",
  "75C2":"F0E8",
  "75C3":"F0E7",
  "75C4":"F0E4",
  "75C5":"B2A1",
  "75C7":"D6A2",
  "75C8":"D3B8",
  "75C9":"BEB7",
  "75CA":"C8AC",
  "75CD":"F0EA",
  "75D2":"D1F7",
  "75D4":"D6CC",
  "75D5":"BADB",
  "75D6":"F0E9",
  "75D8":"B6BB",
  "75DB":"CDB4",
  "75DE":"C6A6",
  "75E2":"C1A1",
  "75E3":"F0EB",
  "75E4":"F0EE",
  "75E6":"F0ED",
  "75E7":"F0F0",
  "75E8":"F0EC",
  "75EA":"BBBE",
  "75EB":"F0EF",
  "75F0":"CCB5",
  "75F1":"F0F2",
  "75F4":"B3D5",
  "75F9":"B1D4",
  "75FC":"F0F3",
  "75FF":"F0F4",
  "7600":"F0F6",
  "7601":"B4E1",
  "7603":"F0F1",
  "7605":"F0F7",
  "760A":"F0FA",
  "760C":"F0F8",
  "7610":"F0F5",
  "7615":"F0FD",
  "7617":"F0F9",
  "7618":"F0FC",
  "7619":"F0FE",
  "761B":"F1A1",
  "761F":"CEC1",
  "7620":"F1A4",
  "7622":"F1A3",
  "7624":"C1F6",
  "7625":"F0FB",
  "7626":"CADD",
  "7629":"B4F1",
  "762A":"B1F1",
  "762B":"CCB1",
  "762D":"F1A6",
  "7630":"F1A7",
  "7633":"F1AC",
  "7634":"D5CE",
  "7635":"F1A9",
  "7638":"C8B3",
  "763C":"F1A2",
  "763E":"F1AB",
  "763F":"F1A8",
  "7640":"F1A5",
  "7643":"F1AA",
  "764C":"B0A9",
  "764D":"F1AD",
  "7654":"F1AF",
  "7656":"F1B1",
  "765C":"F1B0",
  "765E":"F1AE",
  "7663":"D1A2",
  "766B":"F1B2",
  "766F":"F1B3",
  "7678":"B9EF",
  "767B":"B5C7",
  "767D":"B0D7",
  "767E":"B0D9",
  "7682":"D4ED",
  "7684":"B5C4",
  "7686":"BDD4",
  "7687":"BBCA",
  "7688":"F0A7",
  "768B":"B8DE",
  "768E":"F0A8",
  "7691":"B0A8",
  "7693":"F0A9",
  "7696":"CDEE",
  "7699":"F0AA",
  "76A4":"F0AB",
  "76AE":"C6A4",
  "76B1":"D6E5",
  "76B2":"F1E4",
  "76B4":"F1E5",
  "76BF":"C3F3",
  "76C2":"D3DB",
  "76C5":"D6D1",
  "76C6":"C5E8",
  "76C8":"D3AF",
  "76CA":"D2E6",
  "76CD":"EEC1",
  "76CE":"B0BB",
  "76CF":"D5B5",
  "76D0":"D1CE",
  "76D1":"BCE0",
  "76D2":"BAD0",
  "76D4":"BFF8",
  "76D6":"B8C7",
  "76D7":"B5C1",
  "76D8":"C5CC",
  "76DB":"CAA2",
  "76DF":"C3CB",
  "76E5":"EEC2",
  "76EE":"C4BF",
  "76EF":"B6A2",
  "76F1":"EDEC",
  "76F2":"C3A4",
  "76F4":"D6B1",
  "76F8":"CFE0",
  "76F9":"EDEF",
  "76FC":"C5CE",
  "76FE":"B6DC",
  "7701":"CAA1",
  "7704":"EDED",
  "7707":"EDF0",
  "7708":"EDF1",
  "7709":"C3BC",
  "770B":"BFB4",
  "770D":"EDEE",
  "7719":"EDF4",
  "771A":"EDF2",
  "771F":"D5E6",
  "7720":"C3DF",
  "7722":"EDF3",
  "7726":"EDF6",
  "7728":"D5A3",
  "7729":"D1A3",
  "772D":"EDF5",
  "772F":"C3D0",
  "7735":"EDF7",
  "7736":"BFF4",
  "7737":"BEEC",
  "7738":"EDF8",
  "773A":"CCF7",
  "773C":"D1DB",
  "7740":"D7C5",
  "7741":"D5F6",
  "7743":"EDFC",
  "7747":"EDFB",
  "7750":"EDF9",
  "7751":"EDFA",
  "775A":"EDFD",
  "775B":"BEA6",
  "7761":"CBAF",
  "7762":"EEA1",
  "7763":"B6BD",
  "7765":"EEA2",
  "7766":"C4C0",
  "7768":"EDFE",
  "776B":"BDDE",
  "776C":"B2C7",
  "7779":"B6C3",
  "777D":"EEA5",
  "777E":"D8BA",
  "777F":"EEA3",
  "7780":"EEA6",
  "7784":"C3E9",
  "7785":"B3F2",
  "778C":"EEA7",
  "778D":"EEA4",
  "778E":"CFB9",
  "7791":"EEA8",
  "7792":"C2F7",
  "779F":"EEA9",
  "77A0":"EEAA",
  "77A2":"DEAB",
  "77A5":"C6B3",
  "77A7":"C7C6",
  "77A9":"D6F5",
  "77AA":"B5C9",
  "77AC":"CBB2",
  "77B0":"EEAB",
  "77B3":"CDAB",
  "77B5":"EEAC",
  "77BB":"D5B0",
  "77BD":"EEAD",
  "77BF":"F6C4",
  "77CD":"DBC7",
  "77D7":"B4A3",
  "77DB":"C3AC",
  "77DC":"F1E6",
  "77E2":"CAB8",
  "77E3":"D2D3",
  "77E5":"D6AA",
  "77E7":"EFF2",
  "77E9":"BED8",
  "77EB":"BDC3",
  "77EC":"EFF3",
  "77ED":"B6CC",
  "77EE":"B0AB",
  "77F3":"CAAF",
  "77F6":"EDB6",
  "77F8":"EDB7",
  "77FD":"CEF9",
  "77FE":"B7AF",
  "77FF":"BFF3",
  "7800":"EDB8",
  "7801":"C2EB",
  "7802":"C9B0",
  "7809":"EDB9",
  "780C":"C6F6",
  "780D":"BFB3",
  "7811":"EDBC",
  "7812":"C5F8",
  "7814":"D1D0",
  "7816":"D7A9",
  "7817":"EDBA",
  "7818":"EDBB",
  "781A":"D1E2",
  "781C":"EDBF",
  "781D":"EDC0",
  "781F":"EDC4",
  "7823":"EDC8",
  "7825":"EDC6",
  "7826":"EDCE",
  "7827":"D5E8",
  "7829":"EDC9",
  "782C":"EDC7",
  "782D":"EDBE",
  "7830":"C5E9",
  "7834":"C6C6",
  "7837":"C9E9",
  "7838":"D4D2",
  "7839":"EDC1",
  "783A":"EDC2",
  "783B":"EDC3",
  "783C":"EDC5",
  "783E":"C0F9",
  "7840":"B4A1",
  "7845":"B9E8",
  "7847":"EDD0",
  "784C":"EDD1",
  "784E":"EDCA",
  "7850":"EDCF",
  "7852":"CEF8",
  "7855":"CBB6",
  "7856":"EDCC",
  "7857":"EDCD",
  "785D":"CFF5",
  "786A":"EDD2",
  "786B":"C1F2",
  "786C":"D3B2",
  "786D":"EDCB",
  "786E":"C8B7",
  "7877":"BCEF",
  "787C":"C5F0",
  "7887":"EDD6",
  "7889":"B5EF",
  "788C":"C2B5",
  "788D":"B0AD",
  "788E":"CBE9",
  "7891":"B1AE",
  "7893":"EDD4",
  "7897":"CDEB",
  "7898":"B5E2",
  "789A":"EDD5",
  "789B":"EDD3",
  "789C":"EDD7",
  "789F":"B5FA",
  "78A1":"EDD8",
  "78A3":"EDD9",
  "78A5":"EDDC",
  "78A7":"B1CC",
  "78B0":"C5F6",
  "78B1":"BCEE",
  "78B2":"EDDA",
  "78B3":"CCBC",
  "78B4":"B2EA",
  "78B9":"EDDB",
  "78BE":"C4EB",
  "78C1":"B4C5",
  "78C5":"B0F5",
  "78C9":"EDDF",
  "78CA":"C0DA",
  "78CB":"B4E8",
  "78D0":"C5CD",
  "78D4":"EDDD",
  "78D5":"BFC4",
  "78D9":"EDDE",
  "78E8":"C4A5",
  "78EC":"EDE0",
  "78F2":"EDE1",
  "78F4":"EDE3",
  "78F7":"C1D7",
  "78FA":"BBC7",
  "7901":"BDB8",
  "7905":"EDE2",
  "7913":"EDE4",
  "791E":"EDE6",
  "7924":"EDE5",
  "7934":"EDE7",
  "793A":"CABE",
  "793B":"ECEA",
  "793C":"C0F1",
  "793E":"C9E7",
  "7940":"ECEB",
  "7941":"C6EE",
  "7946":"ECEC",
  "7948":"C6ED",
  "7949":"ECED",
  "7953":"ECF0",
  "7956":"D7E6",
  "7957":"ECF3",
  "795A":"ECF1",
  "795B":"ECEE",
  "795C":"ECEF",
  "795D":"D7A3",
  "795E":"C9F1",
  "795F":"CBEE",
  "7960":"ECF4",
  "7962":"ECF2",
  "7965":"CFE9",
  "7967":"ECF6",
  "7968":"C6B1",
  "796D":"BCC0",
  "796F":"ECF5",
  "7977":"B5BB",
  "7978":"BBF6",
  "797A":"ECF7",
  "7980":"D9F7",
  "7981":"BDFB",
  "7984":"C2BB",
  "7985":"ECF8",
  "798A":"ECF9",
  "798F":"B8A3",
  "799A":"ECFA",
  "79A7":"ECFB",
  "79B3":"ECFC",
  "79B9":"D3ED",
  "79BA":"D8AE",
  "79BB":"C0EB",
  "79BD":"C7DD",
  "79BE":"BACC",
  "79C0":"D0E3",
  "79C1":"CBBD",
  "79C3":"CDBA",
  "79C6":"B8D1",
  "79C9":"B1FC",
  "79CB":"C7EF",
  "79CD":"D6D6",
  "79D1":"BFC6",
  "79D2":"C3EB",
  "79D5":"EFF5",
  "79D8":"C3D8",
  "79DF":"D7E2",
  "79E3":"EFF7",
  "79E4":"B3D3",
  "79E6":"C7D8",
  "79E7":"D1ED",
  "79E9":"D6C8",
  "79EB":"EFF8",
  "79ED":"EFF6",
  "79EF":"BBFD",
  "79F0":"B3C6",
  "79F8":"BDD5",
  "79FB":"D2C6",
  "79FD":"BBE0",
  "7A00":"CFA1",
  "7A02":"EFFC",
  "7A03":"EFFB",
  "7A06":"EFF9",
  "7A0B":"B3CC",
  "7A0D":"C9D4",
  "7A0E":"CBB0",
  "7A14":"EFFE",
  "7A17":"B0DE",
  "7A1A":"D6C9",
  "7A1E":"EFFD",
  "7A20":"B3ED",
  "7A23":"F6D5",
  "7A33":"CEC8",
  "7A37":"F0A2",
  "7A39":"F0A1",
  "7A3B":"B5BE",
  "7A3C":"BCDA",
  "7A3D":"BBFC",
  "7A3F":"B8E5",
  "7A46":"C4C2",
  "7A51":"F0A3",
  "7A57":"CBEB",
  "7A70":"F0A6",
  "7A74":"D1A8",
  "7A76":"BEBF",
  "7A77":"C7EE",
  "7A78":"F1B6",
  "7A79":"F1B7",
  "7A7A":"BFD5",
  "7A7F":"B4A9",
  "7A80":"F1B8",
  "7A81":"CDBB",
  "7A83":"C7D4",
  "7A84":"D5AD",
  "7A86":"F1B9",
  "7A88":"F1BA",
  "7A8D":"C7CF",
  "7A91":"D2A4",
  "7A92":"D6CF",
  "7A95":"F1BB",
  "7A96":"BDD1",
  "7A97":"B4B0",
  "7A98":"BEBD",
  "7A9C":"B4DC",
  "7A9D":"CED1",
  "7A9F":"BFDF",
  "7AA0":"F1BD",
  "7AA5":"BFFA",
  "7AA6":"F1BC",
  "7AA8":"F1BF",
  "7AAC":"F1BE",
  "7AAD":"F1C0",
  "7AB3":"F1C1",
  "7ABF":"C1FE",
  "7ACB":"C1A2",
  "7AD6":"CAFA",
  "7AD9":"D5BE",
  "7ADE":"BEBA",
  "7ADF":"BEB9",
  "7AE0":"D5C2",
  "7AE3":"BFA2",
  "7AE5":"CDAF",
  "7AE6":"F1B5",
  "7AED":"BDDF",
  "7AEF":"B6CB",
  "7AF9":"D6F1",
  "7AFA":"F3C3",
  "7AFD":"F3C4",
  "7AFF":"B8CD",
  "7B03":"F3C6",
  "7B04":"F3C7",
  "7B06":"B0CA",
  "7B08":"F3C5",
  "7B0A":"F3C9",
  "7B0B":"CBF1",
  "7B0F":"F3CB",
  "7B11":"D0A6",
  "7B14":"B1CA",
  "7B15":"F3C8",
  "7B19":"F3CF",
  "7B1B":"B5D1",
  "7B1E":"F3D7",
  "7B20":"F3D2",
  "7B24":"F3D4",
  "7B25":"F3D3",
  "7B26":"B7FB",
  "7B28":"B1BF",
  "7B2A":"F3CE",
  "7B2B":"F3CA",
  "7B2C":"B5DA",
  "7B2E":"F3D0",
  "7B31":"F3D1",
  "7B33":"F3D5",
  "7B38":"F3CD",
  "7B3A":"BCE3",
  "7B3C":"C1FD",
  "7B3E":"F3D6",
  "7B45":"F3DA",
  "7B47":"F3CC",
  "7B49":"B5C8",
  "7B4B":"BDEE",
  "7B4C":"F3DC",
  "7B4F":"B7A4",
  "7B50":"BFF0",
  "7B51":"D6FE",
  "7B52":"CDB2",
  "7B54":"B4F0",
  "7B56":"B2DF",
  "7B58":"F3D8",
  "7B5A":"F3D9",
  "7B5B":"C9B8",
  "7B5D":"F3DD",
  "7B60":"F3DE",
  "7B62":"F3E1",
  "7B6E":"F3DF",
  "7B71":"F3E3",
  "7B72":"F3E2",
  "7B75":"F3DB",
  "7B77":"BFEA",
  "7B79":"B3EF",
  "7B7B":"F3E0",
  "7B7E":"C7A9",
  "7B80":"BCF2",
  "7B85":"F3EB",
  "7B8D":"B9BF",
  "7B90":"F3E4",
  "7B94":"B2AD",
  "7B95":"BBFE",
  "7B97":"CBE3",
  "7B9C":"F3ED",
  "7B9D":"F3E9",
  "7BA1":"B9DC",
  "7BA2":"F3EE",
  "7BA6":"F3E5",
  "7BA7":"F3E6",
  "7BA8":"F3EA",
  "7BA9":"C2E1",
  "7BAA":"F3EC",
  "7BAB":"F3EF",
  "7BAC":"F3E8",
  "7BAD":"BCFD",
  "7BB1":"CFE4",
  "7BB4":"F3F0",
  "7BB8":"F3E7",
  "7BC1":"F3F2",
  "7BC6":"D7AD",
  "7BC7":"C6AA",
  "7BCC":"F3F3",
  "7BD1":"F3F1",
  "7BD3":"C2A8",
  "7BD9":"B8DD",
  "7BDA":"F3F5",
  "7BDD":"F3F4",
  "7BE1":"B4DB",
  "7BE5":"F3F6",
  "7BE6":"F3F7",
  "7BEA":"F3F8",
  "7BEE":"C0BA",
  "7BF1":"C0E9",
  "7BF7":"C5F1",
  "7BFC":"F3FB",
  "7BFE":"F3FA",
  "7C07":"B4D8",
  "7C0B":"F3FE",
  "7C0C":"F3F9",
  "7C0F":"F3FC",
  "7C16":"F3FD",
  "7C1F":"F4A1",
  "7C26":"F4A3",
  "7C27":"BBC9",
  "7C2A":"F4A2",
  "7C38":"F4A4",
  "7C3F":"B2BE",
  "7C40":"F4A6",
  "7C41":"F4A5",
  "7C4D":"BCAE",
  "7C73":"C3D7",
  "7C74":"D9E1",
  "7C7B":"C0E0",
  "7C7C":"F4CC",
  "7C7D":"D7D1",
  "7C89":"B7DB",
  "7C91":"F4CE",
  "7C92":"C1A3",
  "7C95":"C6C9",
  "7C97":"B4D6",
  "7C98":"D5B3",
  "7C9C":"F4D0",
  "7C9D":"F4CF",
  "7C9E":"F4D1",
  "7C9F":"CBDA",
  "7CA2":"F4D2",
  "7CA4":"D4C1",
  "7CA5":"D6E0",
  "7CAA":"B7E0",
  "7CAE":"C1B8",
  "7CB1":"C1BB",
  "7CB2":"F4D3",
  "7CB3":"BEAC",
  "7CB9":"B4E2",
  "7CBC":"F4D4",
  "7CBD":"F4D5",
  "7CBE":"BEAB",
  "7CC1":"F4D6",
  "7CC5":"F4DB",
  "7CC7":"F4D7",
  "7CC8":"F4DA",
  "7CCA":"BAFD",
  "7CCC":"F4D8",
  "7CCD":"F4D9",
  "7CD5":"B8E2",
  "7CD6":"CCC7",
  "7CD7":"F4DC",
  "7CD9":"B2DA",
  "7CDC":"C3D3",
  "7CDF":"D4E3",
  "7CE0":"BFB7",
  "7CE8":"F4DD",
  "7CEF":"C5B4",
  "7CF8":"F4E9",
  "7CFB":"CFB5",
  "7D0A":"CEC9",
  "7D20":"CBD8",
  "7D22":"CBF7",
  "7D27":"BDF4",
  "7D2B":"D7CF",
  "7D2F":"C0DB",
  "7D6E":"D0F5",
  "7D77":"F4EA",
  "7DA6":"F4EB",
  "7DAE":"F4EC",
  "7E3B":"F7E3",
  "7E41":"B7B1",
  "7E47":"F4ED",
  "7E82":"D7EB",
  "7E9B":"F4EE",
  "7E9F":"E6F9",
  "7EA0":"BEC0",
  "7EA1":"E6FA",
  "7EA2":"BAEC",
  "7EA3":"E6FB",
  "7EA4":"CFCB",
  "7EA5":"E6FC",
  "7EA6":"D4BC",
  "7EA7":"BCB6",
  "7EA8":"E6FD",
  "7EA9":"E6FE",
  "7EAA":"BCCD",
  "7EAB":"C8D2",
  "7EAC":"CEB3",
  "7EAD":"E7A1",
  "7EAF":"B4BF",
  "7EB0":"E7A2",
  "7EB1":"C9B4",
  "7EB2":"B8D9",
  "7EB3":"C4C9",
  "7EB5":"D7DD",
  "7EB6":"C2DA",
  "7EB7":"B7D7",
  "7EB8":"D6BD",
  "7EB9":"CEC6",
  "7EBA":"B7C4",
  "7EBD":"C5A6",
  "7EBE":"E7A3",
  "7EBF":"CFDF",
  "7EC0":"E7A4",
  "7EC1":"E7A5",
  "7EC2":"E7A6",
  "7EC3":"C1B7",
  "7EC4":"D7E9",
  "7EC5":"C9F0",
  "7EC6":"CFB8",
  "7EC7":"D6AF",
  "7EC8":"D6D5",
  "7EC9":"E7A7",
  "7ECA":"B0ED",
  "7ECB":"E7A8",
  "7ECC":"E7A9",
  "7ECD":"C9DC",
  "7ECE":"D2EF",
  "7ECF":"BEAD",
  "7ED0":"E7AA",
  "7ED1":"B0F3",
  "7ED2":"C8DE",
  "7ED3":"BDE1",
  "7ED4":"E7AB",
  "7ED5":"C8C6",
  "7ED7":"E7AC",
  "7ED8":"BBE6",
  "7ED9":"B8F8",
  "7EDA":"D1A4",
  "7EDB":"E7AD",
  "7EDC":"C2E7",
  "7EDD":"BEF8",
  "7EDE":"BDCA",
  "7EDF":"CDB3",
  "7EE0":"E7AE",
  "7EE1":"E7AF",
  "7EE2":"BEEE",
  "7EE3":"D0E5",
  "7EE5":"CBE7",
  "7EE6":"CCD0",
  "7EE7":"BCCC",
  "7EE8":"E7B0",
  "7EE9":"BCA8",
  "7EEA":"D0F7",
  "7EEB":"E7B1",
  "7EED":"D0F8",
  "7EEE":"E7B2",
  "7EEF":"E7B3",
  "7EF0":"B4C2",
  "7EF1":"E7B4",
  "7EF2":"E7B5",
  "7EF3":"C9FE",
  "7EF4":"CEAC",
  "7EF5":"C3E0",
  "7EF6":"E7B7",
  "7EF7":"B1C1",
  "7EF8":"B3F1",
  "7EFA":"E7B8",
  "7EFB":"E7B9",
  "7EFC":"D7DB",
  "7EFD":"D5C0",
  "7EFE":"E7BA",
  "7EFF":"C2CC",
  "7F00":"D7BA",
  "7F01":"E7BB",
  "7F02":"E7BC",
  "7F03":"E7BD",
  "7F04":"BCEA",
  "7F05":"C3E5",
  "7F06":"C0C2",
  "7F07":"E7BE",
  "7F08":"E7BF",
  "7F09":"BCA9",
  "7F0B":"E7C0",
  "7F0C":"E7C1",
  "7F0D":"E7B6",
  "7F0E":"B6D0",
  "7F0F":"E7C2",
  "7F11":"E7C3",
  "7F12":"E7C4",
  "7F13":"BBBA",
  "7F14":"B5DE",
  "7F15":"C2C6",
  "7F16":"B1E0",
  "7F17":"E7C5",
  "7F18":"D4B5",
  "7F19":"E7C6",
  "7F1A":"B8BF",
  "7F1B":"E7C8",
  "7F1C":"E7C7",
  "7F1D":"B7EC",
  "7F1F":"E7C9",
  "7F20":"B2F8",
  "7F21":"E7CA",
  "7F22":"E7CB",
  "7F23":"E7CC",
  "7F24":"E7CD",
  "7F25":"E7CE",
  "7F26":"E7CF",
  "7F27":"E7D0",
  "7F28":"D3A7",
  "7F29":"CBF5",
  "7F2A":"E7D1",
  "7F2B":"E7D2",
  "7F2C":"E7D3",
  "7F2D":"E7D4",
  "7F2E":"C9C9",
  "7F2F":"E7D5",
  "7F30":"E7D6",
  "7F31":"E7D7",
  "7F32":"E7D8",
  "7F33":"E7D9",
  "7F34":"BDC9",
  "7F35":"E7DA",
  "7F36":"F3BE",
  "7F38":"B8D7",
  "7F3A":"C8B1",
  "7F42":"F3BF",
  "7F44":"F3C0",
  "7F45":"F3C1",
  "7F50":"B9DE",
  "7F51":"CDF8",
  "7F54":"D8E8",
  "7F55":"BAB1",
  "7F57":"C2DE",
  "7F58":"EEB7",
  "7F5A":"B7A3",
  "7F5F":"EEB9",
  "7F61":"EEB8",
  "7F62":"B0D5",
  "7F68":"EEBB",
  "7F69":"D5D6",
  "7F6A":"D7EF",
  "7F6E":"D6C3",
  "7F71":"EEBD",
  "7F72":"CAF0",
  "7F74":"EEBC",
  "7F79":"EEBE",
  "7F7E":"EEC0",
  "7F81":"EEBF",
  "7F8A":"D1F2",
  "7F8C":"C7BC",
  "7F8E":"C3C0",
  "7F94":"B8E1",
  "7F9A":"C1E7",
  "7F9D":"F4C6",
  "7F9E":"D0DF",
  "7F9F":"F4C7",
  "7FA1":"CFDB",
  "7FA4":"C8BA",
  "7FA7":"F4C8",
  "7FAF":"F4C9",
  "7FB0":"F4CA",
  "7FB2":"F4CB",
  "7FB8":"D9FA",
  "7FB9":"B8FE",
  "7FBC":"E5F1",
  "7FBD":"D3F0",
  "7FBF":"F4E0",
  "7FC1":"CECC",
  "7FC5":"B3E1",
  "7FCA":"F1B4",
  "7FCC":"D2EE",
  "7FCE":"F4E1",
  "7FD4":"CFE8",
  "7FD5":"F4E2",
  "7FD8":"C7CC",
  "7FDF":"B5D4",
  "7FE0":"B4E4",
  "7FE1":"F4E4",
  "7FE5":"F4E3",
  "7FE6":"F4E5",
  "7FE9":"F4E6",
  "7FEE":"F4E7",
  "7FF0":"BAB2",
  "7FF1":"B0BF",
  "7FF3":"F4E8",
  "7FFB":"B7AD",
  "7FFC":"D2ED",
  "8000":"D2AB",
  "8001":"C0CF",
  "8003":"BFBC",
  "8004":"EBA3",
  "8005":"D5DF",
  "8006":"EAC8",
  "800B":"F1F3",
  "800C":"B6F8",
  "800D":"CBA3",
  "8010":"C4CD",
  "8012":"F1E7",
  "8014":"F1E8",
  "8015":"B8FB",
  "8016":"F1E9",
  "8017":"BAC4",
  "8018":"D4C5",
  "8019":"B0D2",
  "801C":"F1EA",
  "8020":"F1EB",
  "8022":"F1EC",
  "8025":"F1ED",
  "8026":"F1EE",
  "8027":"F1EF",
  "8028":"F1F1",
  "8029":"F1F0",
  "802A":"C5D5",
  "8031":"F1F2",
  "8033":"B6FA",
  "8035":"F1F4",
  "8036":"D2AE",
  "8037":"DEC7",
  "8038":"CBCA",
  "803B":"B3DC",
  "803D":"B5A2",
  "803F":"B9A2",
  "8042":"C4F4",
  "8043":"F1F5",
  "8046":"F1F6",
  "804A":"C1C4",
  "804B":"C1FB",
  "804C":"D6B0",
  "804D":"F1F7",
  "8052":"F1F8",
  "8054":"C1AA",
  "8058":"C6B8",
  "805A":"BEDB",
  "8069":"F1F9",
  "806A":"B4CF",
  "8071":"F1FA",
  "807F":"EDB2",
  "8080":"EDB1",
  "8083":"CBE0",
  "8084":"D2DE",
  "8086":"CBC1",
  "8087":"D5D8",
  "8089":"C8E2",
  "808B":"C0DF",
  "808C":"BCA1",
  "8093":"EBC1",
  "8096":"D0A4",
  "8098":"D6E2",
  "809A":"B6C7",
  "809B":"B8D8",
  "809C":"EBC0",
  "809D":"B8CE",
  "809F":"EBBF",
  "80A0":"B3A6",
  "80A1":"B9C9",
  "80A2":"D6AB",
  "80A4":"B7F4",
  "80A5":"B7CA",
  "80A9":"BCE7",
  "80AA":"B7BE",
  "80AB":"EBC6",
  "80AD":"EBC7",
  "80AE":"B0B9",
  "80AF":"BFCF",
  "80B1":"EBC5",
  "80B2":"D3FD",
  "80B4":"EBC8",
  "80B7":"EBC9",
  "80BA":"B7CE",
  "80BC":"EBC2",
  "80BD":"EBC4",
  "80BE":"C9F6",
  "80BF":"D6D7",
  "80C0":"D5CD",
  "80C1":"D0B2",
  "80C2":"EBCF",
  "80C3":"CEB8",
  "80C4":"EBD0",
  "80C6":"B5A8",
  "80CC":"B1B3",
  "80CD":"EBD2",
  "80CE":"CCA5",
  "80D6":"C5D6",
  "80D7":"EBD3",
  "80D9":"EBD1",
  "80DA":"C5DF",
  "80DB":"EBCE",
  "80DC":"CAA4",
  "80DD":"EBD5",
  "80DE":"B0FB",
  "80E1":"BAFA",
  "80E4":"D8B7",
  "80E5":"F1E3",
  "80E7":"EBCA",
  "80E8":"EBCB",
  "80E9":"EBCC",
  "80EA":"EBCD",
  "80EB":"EBD6",
  "80EC":"E6C0",
  "80ED":"EBD9",
  "80EF":"BFE8",
  "80F0":"D2C8",
  "80F1":"EBD7",
  "80F2":"EBDC",
  "80F3":"B8EC",
  "80F4":"EBD8",
  "80F6":"BDBA",
  "80F8":"D0D8",
  "80FA":"B0B7",
  "80FC":"EBDD",
  "80FD":"C4DC",
  "8102":"D6AC",
  "8106":"B4E0",
  "8109":"C2F6",
  "810A":"BCB9",
  "810D":"EBDA",
  "810E":"EBDB",
  "810F":"D4E0",
  "8110":"C6EA",
  "8111":"C4D4",
  "8112":"EBDF",
  "8113":"C5A7",
  "8114":"D9F5",
  "8116":"B2B1",
  "8118":"EBE4",
  "811A":"BDC5",
  "811E":"EBE2",
  "812C":"EBE3",
  "812F":"B8AC",
  "8131":"CDD1",
  "8132":"EBE5",
  "8136":"EBE1",
  "8138":"C1B3",
  "813E":"C6A2",
  "8146":"CCF3",
  "8148":"EBE6",
  "814A":"C0B0",
  "814B":"D2B8",
  "814C":"EBE7",
  "8150":"B8AF",
  "8151":"B8AD",
  "8153":"EBE8",
  "8154":"C7BB",
  "8155":"CDF3",
  "8159":"EBEA",
  "815A":"EBEB",
  "8160":"EBED",
  "8165":"D0C8",
  "8167":"EBF2",
  "8169":"EBEE",
  "816D":"EBF1",
  "816E":"C8F9",
  "8170":"D1FC",
  "8171":"EBEC",
  "8174":"EBE9",
  "8179":"B8B9",
  "817A":"CFD9",
  "817B":"C4E5",
  "817C":"EBEF",
  "817D":"EBF0",
  "817E":"CCDA",
  "817F":"CDC8",
  "8180":"B0F2",
  "8182":"EBF6",
  "8188":"EBF5",
  "818A":"B2B2",
  "818F":"B8E0",
  "8191":"EBF7",
  "8198":"B1EC",
  "819B":"CCC5",
  "819C":"C4A4",
  "819D":"CFA5",
  "81A3":"EBF9",
  "81A6":"ECA2",
  "81A8":"C5F2",
  "81AA":"EBFA",
  "81B3":"C9C5",
  "81BA":"E2DF",
  "81BB":"EBFE",
  "81C0":"CDCE",
  "81C1":"ECA1",
  "81C2":"B1DB",
  "81C3":"D3B7",
  "81C6":"D2DC",
  "81CA":"EBFD",
  "81CC":"EBFB",
  "81E3":"B3BC",
  "81E7":"EAB0",
  "81EA":"D7D4",
  "81EC":"F4AB",
  "81ED":"B3F4",
  "81F3":"D6C1",
  "81F4":"D6C2",
  "81FB":"D5E9",
  "81FC":"BECA",
  "81FE":"F4A7",
  "8200":"D2A8",
  "8201":"F4A8",
  "8202":"F4A9",
  "8204":"F4AA",
  "8205":"BECB",
  "8206":"D3DF",
  "820C":"C9E0",
  "820D":"C9E1",
  "8210":"F3C2",
  "8212":"CAE6",
  "8214":"CCF2",
  "821B":"E2B6",
  "821C":"CBB4",
  "821E":"CEE8",
  "821F":"D6DB",
  "8221":"F4AD",
  "8222":"F4AE",
  "8223":"F4AF",
  "8228":"F4B2",
  "822A":"BABD",
  "822B":"F4B3",
  "822C":"B0E3",
  "822D":"F4B0",
  "822F":"F4B1",
  "8230":"BDA2",
  "8231":"B2D5",
  "8233":"F4B6",
  "8234":"F4B7",
  "8235":"B6E6",
  "8236":"B2B0",
  "8237":"CFCF",
  "8238":"F4B4",
  "8239":"B4AC",
  "823B":"F4B5",
  "823E":"F4B8",
  "8244":"F4B9",
  "8247":"CDA7",
  "8249":"F4BA",
  "824B":"F4BB",
  "824F":"F4BC",
  "8258":"CBD2",
  "825A":"F4BD",
  "825F":"F4BE",
  "8268":"F4BF",
  "826E":"F4DE",
  "826F":"C1BC",
  "8270":"BCE8",
  "8272":"C9AB",
  "8273":"D1DE",
  "8274":"E5F5",
  "8279":"DCB3",
  "827A":"D2D5",
  "827D":"DCB4",
  "827E":"B0AC",
  "827F":"DCB5",
  "8282":"BDDA",
  "8284":"DCB9",
  "8288":"D8C2",
  "828A":"DCB7",
  "828B":"D3F3",
  "828D":"C9D6",
  "828E":"DCBA",
  "828F":"DCB6",
  "8291":"DCBB",
  "8292":"C3A2",
  "8297":"DCBC",
  "8298":"DCC5",
  "8299":"DCBD",
  "829C":"CEDF",
  "829D":"D6A5",
  "829F":"DCCF",
  "82A1":"DCCD",
  "82A4":"DCD2",
  "82A5":"BDE6",
  "82A6":"C2AB",
  "82A8":"DCB8",
  "82A9":"DCCB",
  "82AA":"DCCE",
  "82AB":"DCBE",
  "82AC":"B7D2",
  "82AD":"B0C5",
  "82AE":"DCC7",
  "82AF":"D0BE",
  "82B0":"DCC1",
  "82B1":"BBA8",
  "82B3":"B7BC",
  "82B4":"DCCC",
  "82B7":"DCC6",
  "82B8":"DCBF",
  "82B9":"C7DB",
  "82BD":"D1BF",
  "82BE":"DCC0",
  "82C1":"DCCA",
  "82C4":"DCD0",
  "82C7":"CEAD",
  "82C8":"DCC2",
  "82CA":"DCC3",
  "82CB":"DCC8",
  "82CC":"DCC9",
  "82CD":"B2D4",
  "82CE":"DCD1",
  "82CF":"CBD5",
  "82D1":"D4B7",
  "82D2":"DCDB",
  "82D3":"DCDF",
  "82D4":"CCA6",
  "82D5":"DCE6",
  "82D7":"C3E7",
  "82D8":"DCDC",
  "82DB":"BFC1",
  "82DC":"DCD9",
  "82DE":"B0FA",
  "82DF":"B9B6",
  "82E0":"DCE5",
  "82E1":"DCD3",
  "82E3":"DCC4",
  "82E4":"DCD6",
  "82E5":"C8F4",
  "82E6":"BFE0",
  "82EB":"C9BB",
  "82EF":"B1BD",
  "82F1":"D3A2",
  "82F4":"DCDA",
  "82F7":"DCD5",
  "82F9":"C6BB",
  "82FB":"DCDE",
  "8301":"D7C2",
  "8302":"C3AF",
  "8303":"B7B6",
  "8304":"C7D1",
  "8305":"C3A9",
  "8306":"DCE2",
  "8307":"DCD8",
  "8308":"DCEB",
  "8309":"DCD4",
  "830C":"DCDD",
  "830E":"BEA5",
  "830F":"DCD7",
  "8311":"DCE0",
  "8314":"DCE3",
  "8315":"DCE4",
  "8317":"DCF8",
  "831A":"DCE1",
  "831B":"DDA2",
  "831C":"DCE7",
  "8327":"BCEB",
  "8328":"B4C4",
  "832B":"C3A3",
  "832C":"B2E7",
  "832D":"DCFA",
  "832F":"DCF2",
  "8331":"DCEF",
  "8333":"DCFC",
  "8334":"DCEE",
  "8335":"D2F0",
  "8336":"B2E8",
  "8338":"C8D7",
  "8339":"C8E3",
  "833A":"DCFB",
  "833C":"DCED",
  "8340":"DCF7",
  "8343":"DCF5",
  "8346":"BEA3",
  "8347":"DCF4",
  "8349":"B2DD",
  "834F":"DCF3",
  "8350":"BCF6",
  "8351":"DCE8",
  "8352":"BBC4",
  "8354":"C0F3",
  "835A":"BCD4",
  "835B":"DCE9",
  "835C":"DCEA",
  "835E":"DCF1",
  "835F":"DCF6",
  "8360":"DCF9",
  "8361":"B5B4",
  "8363":"C8D9",
  "8364":"BBE7",
  "8365":"DCFE",
  "8366":"DCFD",
  "8367":"D3AB",
  "8368":"DDA1",
  "8369":"DDA3",
  "836A":"DDA5",
  "836B":"D2F1",
  "836C":"DDA4",
  "836D":"DDA6",
  "836E":"DDA7",
  "836F":"D2A9",
  "8377":"BAC9",
  "8378":"DDA9",
  "837B":"DDB6",
  "837C":"DDB1",
  "837D":"DDB4",
  "8385":"DDB0",
  "8386":"C6CE",
  "8389":"C0F2",
  "838E":"C9AF",
  "8392":"DCEC",
  "8393":"DDAE",
  "8398":"DDB7",
  "839B":"DCF0",
  "839C":"DDAF",
  "839E":"DDB8",
  "83A0":"DDAC",
  "83A8":"DDB9",
  "83A9":"DDB3",
  "83AA":"DDAD",
  "83AB":"C4AA",
  "83B0":"DDA8",
  "83B1":"C0B3",
  "83B2":"C1AB",
  "83B3":"DDAA",
  "83B4":"DDAB",
  "83B6":"DDB2",
  "83B7":"BBF1",
  "83B8":"DDB5",
  "83B9":"D3A8",
  "83BA":"DDBA",
  "83BC":"DDBB",
  "83BD":"C3A7",
  "83C0":"DDD2",
  "83C1":"DDBC",
  "83C5":"DDD1",
  "83C7":"B9BD",
  "83CA":"BED5",
  "83CC":"BEFA",
  "83CF":"BACA",
  "83D4":"DDCA",
  "83D6":"DDC5",
  "83D8":"DDBF",
  "83DC":"B2CB",
  "83DD":"DDC3",
  "83DF":"DDCB",
  "83E0":"B2A4",
  "83E1":"DDD5",
  "83E5":"DDBE",
  "83E9":"C6D0",
  "83EA":"DDD0",
  "83F0":"DDD4",
  "83F1":"C1E2",
  "83F2":"B7C6",
  "83F8":"DDCE",
  "83F9":"DDCF",
  "83FD":"DDC4",
  "8401":"DDBD",
  "8403":"DDCD",
  "8404":"CCD1",
  "8406":"DDC9",
  "840B":"DDC2",
  "840C":"C3C8",
  "840D":"C6BC",
  "840E":"CEAE",
  "840F":"DDCC",
  "8411":"DDC8",
  "8418":"DDC1",
  "841C":"DDC6",
  "841D":"C2DC",
  "8424":"D3A9",
  "8425":"D3AA",
  "8426":"DDD3",
  "8427":"CFF4",
  "8428":"C8F8",
  "8431":"DDE6",
  "8438":"DDC7",
  "843C":"DDE0",
  "843D":"C2E4",
  "8446":"DDE1",
  "8451":"DDD7",
  "8457":"D6F8",
  "8459":"DDD9",
  "845A":"DDD8",
  "845B":"B8F0",
  "845C":"DDD6",
  "8461":"C6CF",
  "8463":"B6AD",
  "8469":"DDE2",
  "846B":"BAF9",
  "846C":"D4E1",
  "846D":"DDE7",
  "8471":"B4D0",
  "8473":"DDDA",
  "8475":"BFFB",
  "8476":"DDE3",
  "8478":"DDDF",
  "847A":"DDDD",
  "8482":"B5D9",
  "8487":"DDDB",
  "8488":"DDDC",
  "8489":"DDDE",
  "848B":"BDAF",
  "848C":"DDE4",
  "848E":"DDE5",
  "8497":"DDF5",
  "8499":"C3C9",
  "849C":"CBE2",
  "84A1":"DDF2",
  "84AF":"D8E1",
  "84B2":"C6D1",
  "84B4":"DDF4",
  "84B8":"D5F4",
  "84B9":"DDF3",
  "84BA":"DDF0",
  "84BD":"DDEC",
  "84BF":"DDEF",
  "84C1":"DDE8",
  "84C4":"D0EE",
  "84C9":"C8D8",
  "84CA":"DDEE",
  "84CD":"DDE9",
  "84D0":"DDEA",
  "84D1":"CBF2",
  "84D3":"DDED",
  "84D6":"B1CD",
  "84DD":"C0B6",
  "84DF":"BCBB",
  "84E0":"DDF1",
  "84E3":"DDF7",
  "84E5":"DDF6",
  "84E6":"DDEB",
  "84EC":"C5EE",
  "84F0":"DDFB",
  "84FC":"DEA4",
  "84FF":"DEA3",
  "850C":"DDF8",
  "8511":"C3EF",
  "8513":"C2FB",
  "8517":"D5E1",
  "851A":"CEB5",
  "851F":"DDFD",
  "8521":"B2CC",
  "852B":"C4E8",
  "852C":"CADF",
  "8537":"C7BE",
  "8538":"DDFA",
  "8539":"DDFC",
  "853A":"DDFE",
  "853B":"DEA2",
  "853C":"B0AA",
  "853D":"B1CE",
  "8543":"DEAC",
  "8548":"DEA6",
  "8549":"BDB6",
  "854A":"C8EF",
  "8556":"DEA1",
  "8559":"DEA5",
  "855E":"DEA9",
  "8564":"DEA8",
  "8568":"DEA7",
  "8572":"DEAD",
  "8574":"D4CC",
  "8579":"DEB3",
  "857A":"DEAA",
  "857B":"DEAE",
  "857E":"C0D9",
  "8584":"B1A1",
  "8585":"DEB6",
  "8587":"DEB1",
  "858F":"DEB2",
  "859B":"D1A6",
  "859C":"DEB5",
  "85A4":"DEAF",
  "85A8":"DEB0",
  "85AA":"D0BD",
  "85AE":"DEB4",
  "85AF":"CAED",
  "85B0":"DEB9",
  "85B7":"DEB8",
  "85B9":"DEB7",
  "85C1":"DEBB",
  "85C9":"BDE5",
  "85CF":"B2D8",
  "85D0":"C3EA",
  "85D3":"DEBA",
  "85D5":"C5BA",
  "85DC":"DEBC",
  "85E4":"CCD9",
  "85E9":"B7AA",
  "85FB":"D4E5",
  "85FF":"DEBD",
  "8605":"DEBF",
  "8611":"C4A2",
  "8616":"DEC1",
  "8627":"DEBE",
  "8629":"DEC0",
  "8638":"D5BA",
  "863C":"DEC2",
  "864D":"F2AE",
  "864E":"BBA2",
  "864F":"C2B2",
  "8650":"C5B0",
  "8651":"C2C7",
  "8654":"F2AF",
  "865A":"D0E9",
  "865E":"D3DD",
  "8662":"EBBD",
  "866B":"B3E6",
  "866C":"F2B0",
  "866E":"F2B1",
  "8671":"CAAD",
  "8679":"BAE7",
  "867A":"F2B3",
  "867B":"F2B5",
  "867C":"F2B4",
  "867D":"CBE4",
  "867E":"CFBA",
  "867F":"F2B2",
  "8680":"CAB4",
  "8681":"D2CF",
  "8682":"C2EC",
  "868A":"CEC3",
  "868B":"F2B8",
  "868C":"B0F6",
  "868D":"F2B7",
  "8693":"F2BE",
  "8695":"B2CF",
  "869C":"D1C1",
  "869D":"F2BA",
  "86A3":"F2BC",
  "86A4":"D4E9",
  "86A7":"F2BB",
  "86A8":"F2B6",
  "86A9":"F2BF",
  "86AA":"F2BD",
  "86AC":"F2B9",
  "86AF":"F2C7",
  "86B0":"F2C4",
  "86B1":"F2C6",
  "86B4":"F2CA",
  "86B5":"F2C2",
  "86B6":"F2C0",
  "86BA":"F2C5",
  "86C0":"D6FB",
  "86C4":"F2C1",
  "86C6":"C7F9",
  "86C7":"C9DF",
  "86C9":"F2C8",
  "86CA":"B9C6",
  "86CB":"B5B0",
  "86CE":"F2C3",
  "86CF":"F2C9",
  "86D0":"F2D0",
  "86D1":"F2D6",
  "86D4":"BBD7",
  "86D8":"F2D5",
  "86D9":"CDDC",
  "86DB":"D6EB",
  "86DE":"F2D2",
  "86DF":"F2D4",
  "86E4":"B8F2",
  "86E9":"F2CB",
  "86ED":"F2CE",
  "86EE":"C2F9",
  "86F0":"D5DD",
  "86F1":"F2CC",
  "86F2":"F2CD",
  "86F3":"F2CF",
  "86F4":"F2D3",
  "86F8":"F2D9",
  "86F9":"D3BC",
  "86FE":"B6EA",
  "8700":"CAF1",
  "8702":"B7E4",
  "8703":"F2D7",
  "8707":"F2D8",
  "8708":"F2DA",
  "8709":"F2DD",
  "870A":"F2DB",
  "870D":"F2DC",
  "8712":"D1D1",
  "8713":"F2D1",
  "8715":"CDC9",
  "8717":"CECF",
  "8718":"D6A9",
  "871A":"F2E3",
  "871C":"C3DB",
  "871E":"F2E0",
  "8721":"C0AF",
  "8722":"F2EC",
  "8723":"F2DE",
  "8725":"F2E1",
  "8729":"F2E8",
  "872E":"F2E2",
  "8731":"F2E7",
  "8734":"F2E6",
  "8737":"F2E9",
  "873B":"F2DF",
  "873E":"F2E4",
  "873F":"F2EA",
  "8747":"D3AC",
  "8748":"F2E5",
  "8749":"B2F5",
  "874C":"F2F2",
  "874E":"D0AB",
  "8753":"F2F5",
  "8757":"BBC8",
  "8759":"F2F9",
  "8760":"F2F0",
  "8763":"F2F6",
  "8764":"F2F8",
  "8765":"F2FA",
  "876E":"F2F3",
  "8770":"F2F1",
  "8774":"BAFB",
  "8776":"B5FB",
  "877B":"F2EF",
  "877C":"F2F7",
  "877D":"F2ED",
  "877E":"F2EE",
  "8782":"F2EB",
  "8783":"F3A6",
  "8785":"F3A3",
  "8788":"F3A2",
  "878B":"F2F4",
  "878D":"C8DA",
  "8793":"F2FB",
  "8797":"F3A5",
  "879F":"C3F8",
  "87A8":"F2FD",
  "87AB":"F3A7",
  "87AC":"F3A9",
  "87AD":"F3A4",
  "87AF":"F2FC",
  "87B3":"F3AB",
  "87B5":"F3AA",
  "87BA":"C2DD",
  "87BD":"F3AE",
  "87C0":"F3B0",
  "87C6":"F3A1",
  "87CA":"F3B1",
  "87CB":"F3AC",
  "87D1":"F3AF",
  "87D2":"F2FE",
  "87D3":"F3AD",
  "87DB":"F3B2",
  "87E0":"F3B4",
  "87E5":"F3A8",
  "87EA":"F3B3",
  "87EE":"F3B5",
  "87F9":"D0B7",
  "87FE":"F3B8",
  "8803":"D9F9",
  "880A":"F3B9",
  "8813":"F3B7",
  "8815":"C8E4",
  "8816":"F3B6",
  "881B":"F3BA",
  "8821":"F3BB",
  "8822":"B4C0",
  "8832":"EEC3",
  "8839":"F3BC",
  "883C":"F3BD",
  "8840":"D1AA",
  "8844":"F4AC",
  "8845":"D0C6",
  "884C":"D0D0",
  "884D":"D1DC",
  "8854":"CFCE",
  "8857":"BDD6",
  "8859":"D1C3",
  "8861":"BAE2",
  "8862":"E1E9",
  "8863":"D2C2",
  "8864":"F1C2",
  "8865":"B2B9",
  "8868":"B1ED",
  "8869":"F1C3",
  "886B":"C9C0",
  "886C":"B3C4",
  "886E":"D9F2",
  "8870":"CBA5",
  "8872":"F1C4",
  "8877":"D6D4",
  "887D":"F1C5",
  "887E":"F4C0",
  "887F":"F1C6",
  "8881":"D4AC",
  "8882":"F1C7",
  "8884":"B0C0",
  "8885":"F4C1",
  "8888":"F4C2",
  "888B":"B4FC",
  "888D":"C5DB",
  "8892":"CCBB",
  "8896":"D0E4",
  "889C":"CDE0",
  "88A2":"F1C8",
  "88A4":"D9F3",
  "88AB":"B1BB",
  "88AD":"CFAE",
  "88B1":"B8A4",
  "88B7":"F1CA",
  "88BC":"F1CB",
  "88C1":"B2C3",
  "88C2":"C1D1",
  "88C5":"D7B0",
  "88C6":"F1C9",
  "88C9":"F1CC",
  "88CE":"F1CE",
  "88D2":"D9F6",
  "88D4":"D2E1",
  "88D5":"D4A3",
  "88D8":"F4C3",
  "88D9":"C8B9",
  "88DF":"F4C4",
  "88E2":"F1CD",
  "88E3":"F1CF",
  "88E4":"BFE3",
  "88E5":"F1D0",
  "88E8":"F1D4",
  "88F0":"F1D6",
  "88F1":"F1D1",
  "88F3":"C9D1",
  "88F4":"C5E1",
  "88F8":"C2E3",
  "88F9":"B9FC",
  "88FC":"F1D3",
  "88FE":"F1D5",
  "8902":"B9D3",
  "890A":"F1DB",
  "8910":"BAD6",
  "8912":"B0FD",
  "8913":"F1D9",
  "8919":"F1D8",
  "891A":"F1D2",
  "891B":"F1DA",
  "8921":"F1D7",
  "8925":"C8EC",
  "892A":"CDCA",
  "892B":"F1DD",
  "8930":"E5BD",
  "8934":"F1DC",
  "8936":"F1DE",
  "8941":"F1DF",
  "8944":"CFE5",
  "895E":"F4C5",
  "895F":"BDF3",
  "8966":"F1E0",
  "897B":"F1E1",
  "897F":"CEF7",
  "8981":"D2AA",
  "8983":"F1FB",
  "8986":"B8B2",
  "89C1":"BCFB",
  "89C2":"B9DB",
  "89C4":"B9E6",
  "89C5":"C3D9",
  "89C6":"CAD3",
  "89C7":"EAE8",
  "89C8":"C0C0",
  "89C9":"BEF5",
  "89CA":"EAE9",
  "89CB":"EAEA",
  "89CC":"EAEB",
  "89CE":"EAEC",
  "89CF":"EAED",
  "89D0":"EAEE",
  "89D1":"EAEF",
  "89D2":"BDC7",
  "89D6":"F5FB",
  "89DA":"F5FD",
  "89DC":"F5FE",
  "89DE":"F5FC",
  "89E3":"BDE2",
  "89E5":"F6A1",
  "89E6":"B4A5",
  "89EB":"F6A2",
  "89EF":"F6A3",
  "89F3":"ECB2",
  "8A00":"D1D4",
  "8A07":"D9EA",
  "8A3E":"F6A4",
  "8A48":"EEBA",
  "8A79":"D5B2",
  "8A89":"D3FE",
  "8A8A":"CCDC",
  "8A93":"CAC4",
  "8B07":"E5C0",
  "8B26":"F6A5",
  "8B66":"BEAF",
  "8B6C":"C6A9",
  "8BA0":"DAA5",
  "8BA1":"BCC6",
  "8BA2":"B6A9",
  "8BA3":"B8BC",
  "8BA4":"C8CF",
  "8BA5":"BCA5",
  "8BA6":"DAA6",
  "8BA7":"DAA7",
  "8BA8":"CCD6",
  "8BA9":"C8C3",
  "8BAA":"DAA8",
  "8BAB":"C6FD",
  "8BAD":"D1B5",
  "8BAE":"D2E9",
  "8BAF":"D1B6",
  "8BB0":"BCC7",
  "8BB2":"BDB2",
  "8BB3":"BBE4",
  "8BB4":"DAA9",
  "8BB5":"DAAA",
  "8BB6":"D1C8",
  "8BB7":"DAAB",
  "8BB8":"D0ED",
  "8BB9":"B6EF",
  "8BBA":"C2DB",
  "8BBC":"CBCF",
  "8BBD":"B7ED",
  "8BBE":"C9E8",
  "8BBF":"B7C3",
  "8BC0":"BEF7",
  "8BC1":"D6A4",
  "8BC2":"DAAC",
  "8BC3":"DAAD",
  "8BC4":"C6C0",
  "8BC5":"D7E7",
  "8BC6":"CAB6",
  "8BC8":"D5A9",
  "8BC9":"CBDF",
  "8BCA":"D5EF",
  "8BCB":"DAAE",
  "8BCC":"D6DF",
  "8BCD":"B4CA",
  "8BCE":"DAB0",
  "8BCF":"DAAF",
  "8BD1":"D2EB",
  "8BD2":"DAB1",
  "8BD3":"DAB2",
  "8BD4":"DAB3",
  "8BD5":"CAD4",
  "8BD6":"DAB4",
  "8BD7":"CAAB",
  "8BD8":"DAB5",
  "8BD9":"DAB6",
  "8BDA":"B3CF",
  "8BDB":"D6EF",
  "8BDC":"DAB7",
  "8BDD":"BBB0",
  "8BDE":"B5AE",
  "8BDF":"DAB8",
  "8BE0":"DAB9",
  "8BE1":"B9EE",
  "8BE2":"D1AF",
  "8BE3":"D2E8",
  "8BE4":"DABA",
  "8BE5":"B8C3",
  "8BE6":"CFEA",
  "8BE7":"B2EF",
  "8BE8":"DABB",
  "8BE9":"DABC",
  "8BEB":"BDEB",
  "8BEC":"CEDC",
  "8BED":"D3EF",
  "8BEE":"DABD",
  "8BEF":"CEF3",
  "8BF0":"DABE",
  "8BF1":"D3D5",
  "8BF2":"BBE5",
  "8BF3":"DABF",
  "8BF4":"CBB5",
  "8BF5":"CBD0",
  "8BF6":"DAC0",
  "8BF7":"C7EB",
  "8BF8":"D6EE",
  "8BF9":"DAC1",
  "8BFA":"C5B5",
  "8BFB":"B6C1",
  "8BFC":"DAC2",
  "8BFD":"B7CC",
  "8BFE":"BFCE",
  "8BFF":"DAC3",
  "8C00":"DAC4",
  "8C01":"CBAD",
  "8C02":"DAC5",
  "8C03":"B5F7",
  "8C04":"DAC6",
  "8C05":"C1C2",
  "8C06":"D7BB",
  "8C07":"DAC7",
  "8C08":"CCB8",
  "8C0A":"D2EA",
  "8C0B":"C4B1",
  "8C0C":"DAC8",
  "8C0D":"B5FD",
  "8C0E":"BBD1",
  "8C0F":"DAC9",
  "8C10":"D0B3",
  "8C11":"DACA",
  "8C12":"DACB",
  "8C13":"CEBD",
  "8C14":"DACC",
  "8C15":"DACD",
  "8C16":"DACE",
  "8C17":"B2F7",
  "8C18":"DAD1",
  "8C19":"DACF",
  "8C1A":"D1E8",
  "8C1B":"DAD0",
  "8C1C":"C3D5",
  "8C1D":"DAD2",
  "8C1F":"DAD3",
  "8C20":"DAD4",
  "8C21":"DAD5",
  "8C22":"D0BB",
  "8C23":"D2A5",
  "8C24":"B0F9",
  "8C25":"DAD6",
  "8C26":"C7AB",
  "8C27":"DAD7",
  "8C28":"BDF7",
  "8C29":"C3A1",
  "8C2A":"DAD8",
  "8C2B":"DAD9",
  "8C2C":"C3FD",
  "8C2D":"CCB7",
  "8C2E":"DADA",
  "8C2F":"DADB",
  "8C30":"C0BE",
  "8C31":"C6D7",
  "8C32":"DADC",
  "8C33":"DADD",
  "8C34":"C7B4",
  "8C35":"DADE",
  "8C36":"DADF",
  "8C37":"B9C8",
  "8C41":"BBED",
  "8C46":"B6B9",
  "8C47":"F4F8",
  "8C49":"F4F9",
  "8C4C":"CDE3",
  "8C55":"F5B9",
  "8C5A":"EBE0",
  "8C61":"CFF3",
  "8C62":"BBBF",
  "8C6A":"BAC0",
  "8C6B":"D4A5",
  "8C73":"E1D9",
  "8C78":"F5F4",
  "8C79":"B1AA",
  "8C7A":"B2F2",
  "8C82":"F5F5",
  "8C85":"F5F7",
  "8C89":"BAD1",
  "8C8A":"F5F6",
  "8C8C":"C3B2",
  "8C94":"F5F9",
  "8C98":"F5F8",
  "8D1D":"B1B4",
  "8D1E":"D5EA",
  "8D1F":"B8BA",
  "8D21":"B9B1",
  "8D22":"B2C6",
  "8D23":"D4F0",
  "8D24":"CFCD",
  "8D25":"B0DC",
  "8D26":"D5CB",
  "8D27":"BBF5",
  "8D28":"D6CA",
  "8D29":"B7B7",
  "8D2A":"CCB0",
  "8D2B":"C6B6",
  "8D2C":"B1E1",
  "8D2D":"B9BA",
  "8D2E":"D6FC",
  "8D2F":"B9E1",
  "8D30":"B7A1",
  "8D31":"BCFA",
  "8D32":"EADA",
  "8D33":"EADB",
  "8D34":"CCF9",
  "8D35":"B9F3",
  "8D36":"EADC",
  "8D37":"B4FB",
  "8D38":"C3B3",
  "8D39":"B7D1",
  "8D3A":"BAD8",
  "8D3B":"EADD",
  "8D3C":"D4F4",
  "8D3D":"EADE",
  "8D3E":"BCD6",
  "8D3F":"BBDF",
  "8D40":"EADF",
  "8D41":"C1DE",
  "8D42":"C2B8",
  "8D43":"D4DF",
  "8D44":"D7CA",
  "8D45":"EAE0",
  "8D46":"EAE1",
  "8D47":"EAE4",
  "8D48":"EAE2",
  "8D49":"EAE3",
  "8D4A":"C9DE",
  "8D4B":"B8B3",
  "8D4C":"B6C4",
  "8D4D":"EAE5",
  "8D4E":"CAEA",
  "8D4F":"C9CD",
  "8D50":"B4CD",
  "8D53":"E2D9",
  "8D54":"C5E2",
  "8D55":"EAE6",
  "8D56":"C0B5",
  "8D58":"D7B8",
  "8D59":"EAE7",
  "8D5A":"D7AC",
  "8D5B":"C8FC",
  "8D5C":"D8D3",
  "8D5D":"D8CD",
  "8D5E":"D4DE",
  "8D60":"D4F9",
  "8D61":"C9C4",
  "8D62":"D3AE",
  "8D63":"B8D3",
  "8D64":"B3E0",
  "8D66":"C9E2",
  "8D67":"F4F6",
  "8D6B":"BAD5",
  "8D6D":"F4F7",
  "8D70":"D7DF",
  "8D73":"F4F1",
  "8D74":"B8B0",
  "8D75":"D5D4",
  "8D76":"B8CF",
  "8D77":"C6F0",
  "8D81":"B3C3",
  "8D84":"F4F2",
  "8D85":"B3AC",
  "8D8A":"D4BD",
  "8D8B":"C7F7",
  "8D91":"F4F4",
  "8D94":"F4F3",
  "8D9F":"CCCB",
  "8DA3":"C8A4",
  "8DB1":"F4F5",
  "8DB3":"D7E3",
  "8DB4":"C5BF",
  "8DB5":"F5C0",
  "8DB8":"F5BB",
  "8DBA":"F5C3",
  "8DBC":"F5C2",
  "8DBE":"D6BA",
  "8DBF":"F5C1",
  "8DC3":"D4BE",
  "8DC4":"F5C4",
  "8DC6":"F5CC",
  "8DCB":"B0CF",
  "8DCC":"B5F8",
  "8DCE":"F5C9",
  "8DCF":"F5CA",
  "8DD1":"C5DC",
  "8DD6":"F5C5",
  "8DD7":"F5C6",
  "8DDA":"F5C7",
  "8DDB":"F5CB",
  "8DDD":"BEE0",
  "8DDE":"F5C8",
  "8DDF":"B8FA",
  "8DE3":"F5D0",
  "8DE4":"F5D3",
  "8DE8":"BFE7",
  "8DEA":"B9F2",
  "8DEB":"F5BC",
  "8DEC":"F5CD",
  "8DEF":"C2B7",
  "8DF3":"CCF8",
  "8DF5":"BCF9",
  "8DF7":"F5CE",
  "8DF8":"F5CF",
  "8DF9":"F5D1",
  "8DFA":"B6E5",
  "8DFB":"F5D2",
  "8DFD":"F5D5",
  "8E05":"F5BD",
  "8E09":"F5D4",
  "8E0A":"D3BB",
  "8E0C":"B3EC",
  "8E0F":"CCA4",
  "8E14":"F5D6",
  "8E1D":"F5D7",
  "8E1E":"BEE1",
  "8E1F":"F5D8",
  "8E22":"CCDF",
  "8E23":"F5DB",
  "8E29":"B2C8",
  "8E2A":"D7D9",
  "8E2C":"F5D9",
  "8E2E":"F5DA",
  "8E2F":"F5DC",
  "8E31":"F5E2",
  "8E35":"F5E0",
  "8E39":"F5DF",
  "8E3A":"F5DD",
  "8E3D":"F5E1",
  "8E40":"F5DE",
  "8E41":"F5E4",
  "8E42":"F5E5",
  "8E44":"CCE3",
  "8E47":"E5BF",
  "8E48":"B5B8",
  "8E49":"F5E3",
  "8E4A":"F5E8",
  "8E4B":"CCA3",
  "8E51":"F5E6",
  "8E52":"F5E7",
  "8E59":"F5BE",
  "8E66":"B1C4",
  "8E69":"F5BF",
  "8E6C":"B5C5",
  "8E6D":"B2E4",
  "8E6F":"F5EC",
  "8E70":"F5E9",
  "8E72":"B6D7",
  "8E74":"F5ED",
  "8E76":"F5EA",
  "8E7C":"F5EB",
  "8E7F":"B4DA",
  "8E81":"D4EA",
  "8E85":"F5EE",
  "8E87":"B3F9",
  "8E8F":"F5EF",
  "8E90":"F5F1",
  "8E94":"F5F0",
  "8E9C":"F5F2",
  "8E9E":"F5F3",
  "8EAB":"C9ED",
  "8EAC":"B9AA",
  "8EAF":"C7FB",
  "8EB2":"B6E3",
  "8EBA":"CCC9",
  "8ECE":"EAA6",
  "8F66":"B3B5",
  "8F67":"D4FE",
  "8F68":"B9EC",
  "8F69":"D0F9",
  "8F6B":"E9ED",
  "8F6C":"D7AA",
  "8F6D":"E9EE",
  "8F6E":"C2D6",
  "8F6F":"C8ED",
  "8F70":"BAE4",
  "8F71":"E9EF",
  "8F72":"E9F0",
  "8F73":"E9F1",
  "8F74":"D6E1",
  "8F75":"E9F2",
  "8F76":"E9F3",
  "8F77":"E9F5",
  "8F78":"E9F4",
  "8F79":"E9F6",
  "8F7A":"E9F7",
  "8F7B":"C7E1",
  "8F7C":"E9F8",
  "8F7D":"D4D8",
  "8F7E":"E9F9",
  "8F7F":"BDCE",
  "8F81":"E9FA",
  "8F82":"E9FB",
  "8F83":"BDCF",
  "8F84":"E9FC",
  "8F85":"B8A8",
  "8F86":"C1BE",
  "8F87":"E9FD",
  "8F88":"B1B2",
  "8F89":"BBD4",
  "8F8A":"B9F5",
  "8F8B":"E9FE",
  "8F8D":"EAA1",
  "8F8E":"EAA2",
  "8F8F":"EAA3",
  "8F90":"B7F8",
  "8F91":"BCAD",
  "8F93":"CAE4",
  "8F94":"E0CE",
  "8F95":"D4AF",
  "8F96":"CFBD",
  "8F97":"D5B7",
  "8F98":"EAA4",
  "8F99":"D5DE",
  "8F9A":"EAA5",
  "8F9B":"D0C1",
  "8F9C":"B9BC",
  "8F9E":"B4C7",
  "8F9F":"B1D9",
  "8FA3":"C0B1",
  "8FA8":"B1E6",
  "8FA9":"B1E7",
  "8FAB":"B1E8",
  "8FB0":"B3BD",
  "8FB1":"C8E8",
  "8FB6":"E5C1",
  "8FB9":"B1DF",
  "8FBD":"C1C9",
  "8FBE":"B4EF",
  "8FC1":"C7A8",
  "8FC2":"D3D8",
  "8FC4":"C6F9",
  "8FC5":"D1B8",
  "8FC7":"B9FD",
  "8FC8":"C2F5",
  "8FCE":"D3AD",
  "8FD0":"D4CB",
  "8FD1":"BDFC",
  "8FD3":"E5C2",
  "8FD4":"B7B5",
  "8FD5":"E5C3",
  "8FD8":"BBB9",
  "8FD9":"D5E2",
  "8FDB":"BDF8",
  "8FDC":"D4B6",
  "8FDD":"CEA5",
  "8FDE":"C1AC",
  "8FDF":"B3D9",
  "8FE2":"CCF6",
  "8FE4":"E5C6",
  "8FE5":"E5C4",
  "8FE6":"E5C8",
  "8FE8":"E5CA",
  "8FE9":"E5C7",
  "8FEA":"B5CF",
  "8FEB":"C6C8",
  "8FED":"B5FC",
  "8FEE":"E5C5",
  "8FF0":"CAF6",
  "8FF3":"E5C9",
  "8FF7":"C3D4",
  "8FF8":"B1C5",
  "8FF9":"BCA3",
  "8FFD":"D7B7",
  "9000":"CDCB",
  "9001":"CBCD",
  "9002":"CACA",
  "9003":"CCD3",
  "9004":"E5CC",
  "9005":"E5CB",
  "9006":"C4E6",
  "9009":"D1A1",
  "900A":"D1B7",
  "900B":"E5CD",
  "900D":"E5D0",
  "900F":"CDB8",
  "9010":"D6F0",
  "9011":"E5CF",
  "9012":"B5DD",
  "9014":"CDBE",
  "9016":"E5D1",
  "9017":"B6BA",
  "901A":"CDA8",
  "901B":"B9E4",
  "901D":"CAC5",
  "901E":"B3D1",
  "901F":"CBD9",
  "9020":"D4EC",
  "9021":"E5D2",
  "9022":"B7EA",
  "9026":"E5CE",
  "902D":"E5D5",
  "902E":"B4FE",
  "902F":"E5D6",
  "9035":"E5D3",
  "9036":"E5D4",
  "9038":"D2DD",
  "903B":"C2DF",
  "903C":"B1C6",
  "903E":"D3E2",
  "9041":"B6DD",
  "9042":"CBEC",
  "9044":"E5D7",
  "9047":"D3F6",
  "904D":"B1E9",
  "904F":"B6F4",
  "9050":"E5DA",
  "9051":"E5D8",
  "9052":"E5D9",
  "9053":"B5C0",
  "9057":"D2C5",
  "9058":"E5DC",
  "905B":"E5DE",
  "9062":"E5DD",
  "9063":"C7B2",
  "9065":"D2A3",
  "9068":"E5DB",
  "906D":"D4E2",
  "906E":"D5DA",
  "9074":"E5E0",
  "9075":"D7F1",
  "907D":"E5E1",
  "907F":"B1DC",
  "9080":"D1FB",
  "9082":"E5E2",
  "9083":"E5E4",
  "9088":"E5E3",
  "908B":"E5E5",
  "9091":"D2D8",
  "9093":"B5CB",
  "9095":"E7DF",
  "9097":"DAF5",
  "9099":"DAF8",
  "909B":"DAF6",
  "909D":"DAF7",
  "90A1":"DAFA",
  "90A2":"D0CF",
  "90A3":"C4C7",
  "90A6":"B0EE",
  "90AA":"D0B0",
  "90AC":"DAF9",
  "90AE":"D3CA",
  "90AF":"BAAA",
  "90B0":"DBA2",
  "90B1":"C7F1",
  "90B3":"DAFC",
  "90B4":"DAFB",
  "90B5":"C9DB",
  "90B6":"DAFD",
  "90B8":"DBA1",
  "90B9":"D7DE",
  "90BA":"DAFE",
  "90BB":"C1DA",
  "90BE":"DBA5",
  "90C1":"D3F4",
  "90C4":"DBA7",
  "90C5":"DBA4",
  "90C7":"DBA8",
  "90CA":"BDBC",
  "90CE":"C0C9",
  "90CF":"DBA3",
  "90D0":"DBA6",
  "90D1":"D6A3",
  "90D3":"DBA9",
  "90D7":"DBAD",
  "90DB":"DBAE",
  "90DC":"DBAC",
  "90DD":"BAC2",
  "90E1":"BFA4",
  "90E2":"DBAB",
  "90E6":"DBAA",
  "90E7":"D4C7",
  "90E8":"B2BF",
  "90EB":"DBAF",
  "90ED":"B9F9",
  "90EF":"DBB0",
  "90F4":"B3BB",
  "90F8":"B5A6",
  "90FD":"B6BC",
  "90FE":"DBB1",
  "9102":"B6F5",
  "9104":"DBB2",
  "9119":"B1C9",
  "911E":"DBB4",
  "9122":"DBB3",
  "9123":"DBB5",
  "912F":"DBB7",
  "9131":"DBB6",
  "9139":"DBB8",
  "9143":"DBB9",
  "9146":"DBBA",
  "9149":"D3CF",
  "914A":"F4FA",
  "914B":"C7F5",
  "914C":"D7C3",
  "914D":"C5E4",
  "914E":"F4FC",
  "914F":"F4FD",
  "9150":"F4FB",
  "9152":"BEC6",
  "9157":"D0EF",
  "915A":"B7D3",
  "915D":"D4CD",
  "915E":"CCAA",
  "9161":"F5A2",
  "9162":"F5A1",
  "9163":"BAA8",
  "9164":"F4FE",
  "9165":"CBD6",
  "9169":"F5A4",
  "916A":"C0D2",
  "916C":"B3EA",
  "916E":"CDAA",
  "916F":"F5A5",
  "9170":"F5A3",
  "9171":"BDB4",
  "9172":"F5A8",
  "9174":"F5A9",
  "9175":"BDCD",
  "9176":"C3B8",
  "9177":"BFE1",
  "9178":"CBE1",
  "9179":"F5AA",
  "917D":"F5A6",
  "917E":"F5A7",
  "917F":"C4F0",
  "9185":"F5AC",
  "9187":"B4BC",
  "9189":"D7ED",
  "918B":"B4D7",
  "918C":"F5AB",
  "918D":"F5AE",
  "9190":"F5AD",
  "9191":"F5AF",
  "9192":"D0D1",
  "919A":"C3D1",
  "919B":"C8A9",
  "91A2":"F5B0",
  "91A3":"F5B1",
  "91AA":"F5B2",
  "91AD":"F5B3",
  "91AE":"F5B4",
  "91AF":"F5B5",
  "91B4":"F5B7",
  "91B5":"F5B6",
  "91BA":"F5B8",
  "91C7":"B2C9",
  "91C9":"D3D4",
  "91CA":"CACD",
  "91CC":"C0EF",
  "91CD":"D6D8",
  "91CE":"D2B0",
  "91CF":"C1BF",
  "91D1":"BDF0",
  "91DC":"B8AA",
  "9274":"BCF8",
  "928E":"F6C6",
  "92AE":"F6C7",
  "92C8":"F6C8",
  "933E":"F6C9",
  "936A":"F6CA",
  "938F":"F6CC",
  "93CA":"F6CB",
  "93D6":"F7E9",
  "943E":"F6CD",
  "946B":"F6CE",
  "9485":"EEC4",
  "9486":"EEC5",
  "9487":"EEC6",
  "9488":"D5EB",
  "9489":"B6A4",
  "948A":"EEC8",
  "948B":"EEC7",
  "948C":"EEC9",
  "948D":"EECA",
  "948E":"C7A5",
  "948F":"EECB",
  "9490":"EECC",
  "9492":"B7B0",
  "9493":"B5F6",
  "9494":"EECD",
  "9495":"EECF",
  "9497":"EECE",
  "9499":"B8C6",
  "949A":"EED0",
  "949B":"EED1",
  "949C":"EED2",
  "949D":"B6DB",
  "949E":"B3AE",
  "949F":"D6D3",
  "94A0":"C4C6",
  "94A1":"B1B5",
  "94A2":"B8D6",
  "94A3":"EED3",
  "94A4":"EED4",
  "94A5":"D4BF",
  "94A6":"C7D5",
  "94A7":"BEFB",
  "94A8":"CED9",
  "94A9":"B9B3",
  "94AA":"EED6",
  "94AB":"EED5",
  "94AC":"EED8",
  "94AD":"EED7",
  "94AE":"C5A5",
  "94AF":"EED9",
  "94B0":"EEDA",
  "94B1":"C7AE",
  "94B2":"EEDB",
  "94B3":"C7AF",
  "94B4":"EEDC",
  "94B5":"B2A7",
  "94B6":"EEDD",
  "94B7":"EEDE",
  "94B8":"EEDF",
  "94B9":"EEE0",
  "94BA":"EEE1",
  "94BB":"D7EA",
  "94BC":"EEE2",
  "94BD":"EEE3",
  "94BE":"BCD8",
  "94BF":"EEE4",
  "94C0":"D3CB",
  "94C1":"CCFA",
  "94C2":"B2AC",
  "94C3":"C1E5",
  "94C4":"EEE5",
  "94C5":"C7A6",
  "94C6":"C3AD",
  "94C8":"EEE6",
  "94C9":"EEE7",
  "94CA":"EEE8",
  "94CB":"EEE9",
  "94CC":"EEEA",
  "94CD":"EEEB",
  "94CE":"EEEC",
  "94D0":"EEED",
  "94D1":"EEEE",
  "94D2":"EEEF",
  "94D5":"EEF0",
  "94D6":"EEF1",
  "94D7":"EEF2",
  "94D8":"EEF4",
  "94D9":"EEF3",
  "94DB":"EEF5",
  "94DC":"CDAD",
  "94DD":"C2C1",
  "94DE":"EEF6",
  "94DF":"EEF7",
  "94E0":"EEF8",
  "94E1":"D5A1",
  "94E2":"EEF9",
  "94E3":"CFB3",
  "94E4":"EEFA",
  "94E5":"EEFB",
  "94E7":"EEFC",
  "94E8":"EEFD",
  "94E9":"EFA1",
  "94EA":"EEFE",
  "94EB":"EFA2",
  "94EC":"B8F5",
  "94ED":"C3FA",
  "94EE":"EFA3",
  "94EF":"EFA4",
  "94F0":"BDC2",
  "94F1":"D2BF",
  "94F2":"B2F9",
  "94F3":"EFA5",
  "94F4":"EFA6",
  "94F5":"EFA7",
  "94F6":"D2F8",
  "94F7":"EFA8",
  "94F8":"D6FD",
  "94F9":"EFA9",
  "94FA":"C6CC",
  "94FC":"EFAA",
  "94FD":"EFAB",
  "94FE":"C1B4",
  "94FF":"EFAC",
  "9500":"CFFA",
  "9501":"CBF8",
  "9502":"EFAE",
  "9503":"EFAD",
  "9504":"B3FA",
  "9505":"B9F8",
  "9506":"EFAF",
  "9507":"EFB0",
  "9508":"D0E2",
  "9509":"EFB1",
  "950A":"EFB2",
  "950B":"B7E6",
  "950C":"D0BF",
  "950D":"EFB3",
  "950E":"EFB4",
  "950F":"EFB5",
  "9510":"C8F1",
  "9511":"CCE0",
  "9512":"EFB6",
  "9513":"EFB7",
  "9514":"EFB8",
  "9515":"EFB9",
  "9516":"EFBA",
  "9517":"D5E0",
  "9518":"EFBB",
  "9519":"B4ED",
  "951A":"C3AA",
  "951B":"EFBC",
  "951D":"EFBD",
  "951E":"EFBE",
  "951F":"EFBF",
  "9521":"CEFD",
  "9522":"EFC0",
  "9523":"C2E0",
  "9524":"B4B8",
  "9525":"D7B6",
  "9526":"BDF5",
  "9528":"CFC7",
  "9529":"EFC3",
  "952A":"EFC1",
  "952B":"EFC2",
  "952C":"EFC4",
  "952D":"B6A7",
  "952E":"BCFC",
  "952F":"BEE2",
  "9530":"C3CC",
  "9531":"EFC5",
  "9532":"EFC6",
  "9534":"EFC7",
  "9535":"EFCF",
  "9536":"EFC8",
  "9537":"EFC9",
  "9538":"EFCA",
  "9539":"C7C2",
  "953A":"EFF1",
  "953B":"B6CD",
  "953C":"EFCB",
  "953E":"EFCC",
  "953F":"EFCD",
  "9540":"B6C6",
  "9541":"C3BE",
  "9542":"EFCE",
  "9544":"EFD0",
  "9545":"EFD1",
  "9546":"EFD2",
  "9547":"D5F2",
  "9549":"EFD3",
  "954A":"C4F7",
  "954C":"EFD4",
  "954D":"C4F8",
  "954E":"EFD5",
  "954F":"EFD6",
  "9550":"B8E4",
  "9551":"B0F7",
  "9552":"EFD7",
  "9553":"EFD8",
  "9554":"EFD9",
  "9556":"EFDA",
  "9557":"EFDB",
  "9558":"EFDC",
  "9559":"EFDD",
  "955B":"EFDE",
  "955C":"BEB5",
  "955D":"EFE1",
  "955E":"EFDF",
  "955F":"EFE0",
  "9561":"EFE2",
  "9562":"EFE3",
  "9563":"C1CD",
  "9564":"EFE4",
  "9565":"EFE5",
  "9566":"EFE6",
  "9567":"EFE7",
  "9568":"EFE8",
  "9569":"EFE9",
  "956A":"EFEA",
  "956B":"EFEB",
  "956C":"EFEC",
  "956D":"C0D8",
  "956F":"EFED",
  "9570":"C1AD",
  "9571":"EFEE",
  "9572":"EFEF",
  "9573":"EFF0",
  "9576":"CFE2",
  "957F":"B3A4",
  "95E8":"C3C5",
  "95E9":"E3C5",
  "95EA":"C9C1",
  "95EB":"E3C6",
  "95ED":"B1D5",
  "95EE":"CECA",
  "95EF":"B4B3",
  "95F0":"C8F2",
  "95F1":"E3C7",
  "95F2":"CFD0",
  "95F3":"E3C8",
  "95F4":"BCE4",
  "95F5":"E3C9",
  "95F6":"E3CA",
  "95F7":"C3C6",
  "95F8":"D5A2",
  "95F9":"C4D6",
  "95FA":"B9EB",
  "95FB":"CEC5",
  "95FC":"E3CB",
  "95FD":"C3F6",
  "95FE":"E3CC",
  "9600":"B7A7",
  "9601":"B8F3",
  "9602":"BAD2",
  "9603":"E3CD",
  "9604":"E3CE",
  "9605":"D4C4",
  "9606":"E3CF",
  "9608":"E3D0",
  "9609":"D1CB",
  "960A":"E3D1",
  "960B":"E3D2",
  "960C":"E3D3",
  "960D":"E3D4",
  "960E":"D1D6",
  "960F":"E3D5",
  "9610":"B2FB",
  "9611":"C0BB",
  "9612":"E3D6",
  "9614":"C0AB",
  "9615":"E3D7",
  "9616":"E3D8",
  "9617":"E3D9",
  "9619":"E3DA",
  "961A":"E3DB",
  "961C":"B8B7",
  "961D":"DAE2",
  "961F":"B6D3",
  "9621":"DAE4",
  "9622":"DAE3",
  "962A":"DAE6",
  "962E":"C8EE",
  "9631":"DAE5",
  "9632":"B7C0",
  "9633":"D1F4",
  "9634":"D2F5",
  "9635":"D5F3",
  "9636":"BDD7",
  "963B":"D7E8",
  "963C":"DAE8",
  "963D":"DAE7",
  "963F":"B0A2",
  "9640":"CDD3",
  "9642":"DAE9",
  "9644":"B8BD",
  "9645":"BCCA",
  "9646":"C2BD",
  "9647":"C2A4",
  "9648":"B3C2",
  "9649":"DAEA",
  "964B":"C2AA",
  "964C":"C4B0",
  "964D":"BDB5",
  "9650":"CFDE",
  "9654":"DAEB",
  "9655":"C9C2",
  "965B":"B1DD",
  "965F":"DAEC",
  "9661":"B6B8",
  "9662":"D4BA",
  "9664":"B3FD",
  "9667":"DAED",
  "9668":"D4C9",
  "9669":"CFD5",
  "966A":"C5E3",
  "966C":"DAEE",
  "9672":"DAEF",
  "9674":"DAF0",
  "9675":"C1EA",
  "9676":"CCD5",
  "9677":"CFDD",
  "9685":"D3E7",
  "9686":"C2A1",
  "9688":"DAF1",
  "968B":"CBE5",
  "968D":"DAF2",
  "968F":"CBE6",
  "9690":"D2FE",
  "9694":"B8F4",
  "9697":"DAF3",
  "9698":"B0AF",
  "9699":"CFB6",
  "969C":"D5CF",
  "96A7":"CBED",
  "96B0":"DAF4",
  "96B3":"E3C4",
  "96B6":"C1A5",
  "96B9":"F6BF",
  "96BC":"F6C0",
  "96BD":"F6C1",
  "96BE":"C4D1",
  "96C0":"C8B8",
  "96C1":"D1E3",
  "96C4":"D0DB",
  "96C5":"D1C5",
  "96C6":"BCAF",
  "96C7":"B9CD",
  "96C9":"EFF4",
  "96CC":"B4C6",
  "96CD":"D3BA",
  "96CE":"F6C2",
  "96CF":"B3FB",
  "96D2":"F6C3",
  "96D5":"B5F1",
  "96E0":"F6C5",
  "96E8":"D3EA",
  "96E9":"F6A7",
  "96EA":"D1A9",
  "96EF":"F6A9",
  "96F3":"F6A8",
  "96F6":"C1E3",
  "96F7":"C0D7",
  "96F9":"B1A2",
  "96FE":"CEED",
  "9700":"D0E8",
  "9701":"F6AB",
  "9704":"CFF6",
  "9706":"F6AA",
  "9707":"D5F0",
  "9708":"F6AC",
  "9709":"C3B9",
  "970D":"BBF4",
  "970E":"F6AE",
  "970F":"F6AD",
  "9713":"C4DE",
  "9716":"C1D8",
  "971C":"CBAA",
  "971E":"CFBC",
  "972A":"F6AF",
  "972D":"F6B0",
  "9730":"F6B1",
  "9732":"C2B6",
  "9738":"B0D4",
  "9739":"C5F9",
  "973E":"F6B2",
  "9752":"C7E0",
  "9753":"F6A6",
  "9756":"BEB8",
  "9759":"BEB2",
  "975B":"B5E5",
  "975E":"B7C7",
  "9760":"BFBF",
  "9761":"C3D2",
  "9762":"C3E6",
  "9765":"D8CC",
  "9769":"B8EF",
  "9773":"BDF9",
  "9774":"D1A5",
  "9776":"B0D0",
  "977C":"F7B0",
  "9785":"F7B1",
  "978B":"D0AC",
  "978D":"B0B0",
  "9791":"F7B2",
  "9792":"F7B3",
  "9794":"F7B4",
  "9798":"C7CA",
  "97A0":"BECF",
  "97A3":"F7B7",
  "97AB":"F7B6",
  "97AD":"B1DE",
  "97AF":"F7B5",
  "97B2":"F7B8",
  "97B4":"F7B9",
  "97E6":"CEA4",
  "97E7":"C8CD",
  "97E9":"BAAB",
  "97EA":"E8B8",
  "97EB":"E8B9",
  "97EC":"E8BA",
  "97ED":"BEC2",
  "97F3":"D2F4",
  "97F5":"D4CF",
  "97F6":"C9D8",
  "9875":"D2B3",
  "9876":"B6A5",
  "9877":"C7EA",
  "9878":"F1FC",
  "9879":"CFEE",
  "987A":"CBB3",
  "987B":"D0EB",
  "987C":"E7EF",
  "987D":"CDE7",
  "987E":"B9CB",
  "987F":"B6D9",
  "9880":"F1FD",
  "9881":"B0E4",
  "9882":"CBCC",
  "9883":"F1FE",
  "9884":"D4A4",
  "9885":"C2AD",
  "9886":"C1EC",
  "9887":"C6C4",
  "9888":"BEB1",
  "9889":"F2A1",
  "988A":"BCD5",
  "988C":"F2A2",
  "988D":"F2A3",
  "988F":"F2A4",
  "9890":"D2C3",
  "9891":"C6B5",
  "9893":"CDC7",
  "9894":"F2A5",
  "9896":"D3B1",
  "9897":"BFC5",
  "9898":"CCE2",
  "989A":"F2A6",
  "989B":"F2A7",
  "989C":"D1D5",
  "989D":"B6EE",
  "989E":"F2A8",
  "989F":"F2A9",
  "98A0":"B5DF",
  "98A1":"F2AA",
  "98A2":"F2AB",
  "98A4":"B2FC",
  "98A5":"F2AC",
  "98A6":"F2AD",
  "98A7":"C8A7",
  "98CE":"B7E7",
  "98D1":"ECA9",
  "98D2":"ECAA",
  "98D3":"ECAB",
  "98D5":"ECAC",
  "98D8":"C6AE",
  "98D9":"ECAD",
  "98DA":"ECAE",
  "98DE":"B7C9",
  "98DF":"CAB3",
  "98E7":"E2B8",
  "98E8":"F7CF",
  "990D":"F7D0",
  "9910":"B2CD",
  "992E":"F7D1",
  "9954":"F7D3",
  "9955":"F7D2",
  "9963":"E2BB",
  "9965":"BCA2",
  "9967":"E2BC",
  "9968":"E2BD",
  "9969":"E2BE",
  "996A":"E2BF",
  "996B":"E2C0",
  "996C":"E2C1",
  "996D":"B7B9",
  "996E":"D2FB",
  "996F":"BDA4",
  "9970":"CACE",
  "9971":"B1A5",
  "9972":"CBC7",
  "9974":"E2C2",
  "9975":"B6FC",
  "9976":"C8C4",
  "9977":"E2C3",
  "997A":"BDC8",
  "997C":"B1FD",
  "997D":"E2C4",
  "997F":"B6F6",
  "9980":"E2C5",
  "9981":"C4D9",
  "9984":"E2C6",
  "9985":"CFDA",
  "9986":"B9DD",
  "9987":"E2C7",
  "9988":"C0A1",
  "998A":"E2C8",
  "998B":"B2F6",
  "998D":"E2C9",
  "998F":"C1F3",
  "9990":"E2CA",
  "9991":"E2CB",
  "9992":"C2F8",
  "9993":"E2CC",
  "9994":"E2CD",
  "9995":"E2CE",
  "9996":"CAD7",
  "9997":"D8B8",
  "9998":"D9E5",
  "9999":"CFE3",
  "99A5":"F0A5",
  "99A8":"DCB0",
  "9A6C":"C2ED",
  "9A6D":"D4A6",
  "9A6E":"CDD4",
  "9A6F":"D1B1",
  "9A70":"B3DB",
  "9A71":"C7FD",
  "9A73":"B2B5",
  "9A74":"C2BF",
  "9A75":"E6E0",
  "9A76":"CABB",
  "9A77":"E6E1",
  "9A78":"E6E2",
  "9A79":"BED4",
  "9A7A":"E6E3",
  "9A7B":"D7A4",
  "9A7C":"CDD5",
  "9A7D":"E6E5",
  "9A7E":"BCDD",
  "9A7F":"E6E4",
  "9A80":"E6E6",
  "9A81":"E6E7",
  "9A82":"C2EE",
  "9A84":"BDBE",
  "9A85":"E6E8",
  "9A86":"C2E6",
  "9A87":"BAA7",
  "9A88":"E6E9",
  "9A8A":"E6EA",
  "9A8B":"B3D2",
  "9A8C":"D1E9",
  "9A8F":"BFA5",
  "9A90":"E6EB",
  "9A91":"C6EF",
  "9A92":"E6EC",
  "9A93":"E6ED",
  "9A96":"E6EE",
  "9A97":"C6AD",
  "9A98":"E6EF",
  "9A9A":"C9A7",
  "9A9B":"E6F0",
  "9A9C":"E6F1",
  "9A9D":"E6F2",
  "9A9E":"E5B9",
  "9A9F":"E6F3",
  "9AA0":"E6F4",
  "9AA1":"C2E2",
  "9AA2":"E6F5",
  "9AA3":"E6F6",
  "9AA4":"D6E8",
  "9AA5":"E6F7",
  "9AA7":"E6F8",
  "9AA8":"B9C7",
  "9AB0":"F7BB",
  "9AB1":"F7BA",
  "9AB6":"F7BE",
  "9AB7":"F7BC",
  "9AB8":"BAA1",
  "9ABA":"F7BF",
  "9ABC":"F7C0",
  "9AC0":"F7C2",
  "9AC1":"F7C1",
  "9AC2":"F7C4",
  "9AC5":"F7C3",
  "9ACB":"F7C5",
  "9ACC":"F7C6",
  "9AD1":"F7C7",
  "9AD3":"CBE8",
  "9AD8":"B8DF",
  "9ADF":"F7D4",
  "9AE1":"F7D5",
  "9AE6":"F7D6",
  "9AEB":"F7D8",
  "9AED":"F7DA",
  "9AEF":"F7D7",
  "9AF9":"F7DB",
  "9AFB":"F7D9",
  "9B03":"D7D7",
  "9B08":"F7DC",
  "9B0F":"F7DD",
  "9B13":"F7DE",
  "9B1F":"F7DF",
  "9B23":"F7E0",
  "9B2F":"DBCB",
  "9B32":"D8AA",
  "9B3B":"E5F7",
  "9B3C":"B9ED",
  "9B41":"BFFD",
  "9B42":"BBEA",
  "9B43":"F7C9",
  "9B44":"C6C7",
  "9B45":"F7C8",
  "9B47":"F7CA",
  "9B48":"F7CC",
  "9B49":"F7CB",
  "9B4D":"F7CD",
  "9B4F":"CEBA",
  "9B51":"F7CE",
  "9B54":"C4A7",
  "9C7C":"D3E3",
  "9C7F":"F6CF",
  "9C81":"C2B3",
  "9C82":"F6D0",
  "9C85":"F6D1",
  "9C86":"F6D2",
  "9C87":"F6D3",
  "9C88":"F6D4",
  "9C8B":"F6D6",
  "9C8D":"B1AB",
  "9C8E":"F6D7",
  "9C90":"F6D8",
  "9C91":"F6D9",
  "9C92":"F6DA",
  "9C94":"F6DB",
  "9C95":"F6DC",
  "9C9A":"F6DD",
  "9C9B":"F6DE",
  "9C9C":"CFCA",
  "9C9E":"F6DF",
  "9C9F":"F6E0",
  "9CA0":"F6E1",
  "9CA1":"F6E2",
  "9CA2":"F6E3",
  "9CA3":"F6E4",
  "9CA4":"C0F0",
  "9CA5":"F6E5",
  "9CA6":"F6E6",
  "9CA7":"F6E7",
  "9CA8":"F6E8",
  "9CA9":"F6E9",
  "9CAB":"F6EA",
  "9CAD":"F6EB",
  "9CAE":"F6EC",
  "9CB0":"F6ED",
  "9CB1":"F6EE",
  "9CB2":"F6EF",
  "9CB3":"F6F0",
  "9CB4":"F6F1",
  "9CB5":"F6F2",
  "9CB6":"F6F3",
  "9CB7":"F6F4",
  "9CB8":"BEA8",
  "9CBA":"F6F5",
  "9CBB":"F6F6",
  "9CBC":"F6F7",
  "9CBD":"F6F8",
  "9CC3":"C8FA",
  "9CC4":"F6F9",
  "9CC5":"F6FA",
  "9CC6":"F6FB",
  "9CC7":"F6FC",
  "9CCA":"F6FD",
  "9CCB":"F6FE",
  "9CCC":"F7A1",
  "9CCD":"F7A2",
  "9CCE":"F7A3",
  "9CCF":"F7A4",
  "9CD0":"F7A5",
  "9CD3":"F7A6",
  "9CD4":"F7A7",
  "9CD5":"F7A8",
  "9CD6":"B1EE",
  "9CD7":"F7A9",
  "9CD8":"F7AA",
  "9CD9":"F7AB",
  "9CDC":"F7AC",
  "9CDD":"F7AD",
  "9CDE":"C1DB",
  "9CDF":"F7AE",
  "9CE2":"F7AF",
  "9E1F":"C4F1",
  "9E20":"F0AF",
  "9E21":"BCA6",
  "9E22":"F0B0",
  "9E23":"C3F9",
  "9E25":"C5B8",
  "9E26":"D1BB",
  "9E28":"F0B1",
  "9E29":"F0B2",
  "9E2A":"F0B3",
  "9E2B":"F0B4",
  "9E2C":"F0B5",
  "9E2D":"D1BC",
  "9E2F":"D1EC",
  "9E31":"F0B7",
  "9E32":"F0B6",
  "9E33":"D4A7",
  "9E35":"CDD2",
  "9E36":"F0B8",
  "9E37":"F0BA",
  "9E38":"F0B9",
  "9E39":"F0BB",
  "9E3A":"F0BC",
  "9E3D":"B8EB",
  "9E3E":"F0BD",
  "9E3F":"BAE8",
  "9E41":"F0BE",
  "9E42":"F0BF",
  "9E43":"BEE9",
  "9E44":"F0C0",
  "9E45":"B6EC",
  "9E46":"F0C1",
  "9E47":"F0C2",
  "9E48":"F0C3",
  "9E49":"F0C4",
  "9E4A":"C8B5",
  "9E4B":"F0C5",
  "9E4C":"F0C6",
  "9E4E":"F0C7",
  "9E4F":"C5F4",
  "9E51":"F0C8",
  "9E55":"F0C9",
  "9E57":"F0CA",
  "9E58":"F7BD",
  "9E5A":"F0CB",
  "9E5B":"F0CC",
  "9E5C":"F0CD",
  "9E5E":"F0CE",
  "9E63":"F0CF",
  "9E64":"BAD7",
  "9E66":"F0D0",
  "9E67":"F0D1",
  "9E68":"F0D2",
  "9E69":"F0D3",
  "9E6A":"F0D4",
  "9E6B":"F0D5",
  "9E6C":"F0D6",
  "9E6D":"F0D8",
  "9E70":"D3A5",
  "9E71":"F0D7",
  "9E73":"F0D9",
  "9E7E":"F5BA",
  "9E7F":"C2B9",
  "9E82":"F7E4",
  "9E87":"F7E5",
  "9E88":"F7E6",
  "9E8B":"F7E7",
  "9E92":"F7E8",
  "9E93":"C2B4",
  "9E9D":"F7EA",
  "9E9F":"F7EB",
  "9EA6":"C2F3",
  "9EB4":"F4F0",
  "9EB8":"F4EF",
  "9EBB":"C2E9",
  "9EBD":"F7E1",
  "9EBE":"F7E2",
  "9EC4":"BBC6",
  "9EC9":"D9E4",
  "9ECD":"CAF2",
  "9ECE":"C0E8",
  "9ECF":"F0A4",
  "9ED1":"BADA",
  "9ED4":"C7AD",
  "9ED8":"C4AC",
  "9EDB":"F7EC",
  "9EDC":"F7ED",
  "9EDD":"F7EE",
  "9EDF":"F7F0",
  "9EE0":"F7EF",
  "9EE2":"F7F1",
  "9EE5":"F7F4",
  "9EE7":"F7F3",
  "9EE9":"F7F2",
  "9EEA":"F7F5",
  "9EEF":"F7F6",
  "9EF9":"EDE9",
  "9EFB":"EDEA",
  "9EFC":"EDEB",
  "9EFE":"F6BC",
  "9F0B":"F6BD",
  "9F0D":"F6BE",
  "9F0E":"B6A6",
  "9F10":"D8BE",
  "9F13":"B9C4",
  "9F17":"D8BB",
  "9F19":"DCB1",
  "9F20":"CAF3",
  "9F22":"F7F7",
  "9F2C":"F7F8",
  "9F2F":"F7F9",
  "9F37":"F7FB",
  "9F39":"F7FA",
  "9F3B":"B1C7",
  "9F3D":"F7FC",
  "9F3E":"F7FD",
  "9F44":"F7FE",
  "9F50":"C6EB",
  "9F51":"ECB4",
  "9F7F":"B3DD",
  "9F80":"F6B3",
  "9F83":"F6B4",
  "9F84":"C1E4",
  "9F85":"F6B5",
  "9F86":"F6B6",
  "9F87":"F6B7",
  "9F88":"F6B8",
  "9F89":"F6B9",
  "9F8A":"F6BA",
  "9F8B":"C8A3",
  "9F8C":"F6BB",
  "9F99":"C1FA",
  "9F9A":"B9A8",
  "9F9B":"EDE8",
  "9F9F":"B9EA",
  "9FA0":"D9DF",
  "FF01":"A3A1",
  "FF02":"A3A2",
  "FF03":"A3A3",
  "FF04":"A1E7",
  "FF05":"A3A5",
  "FF06":"A3A6",
  "FF07":"A3A7",
  "FF08":"A3A8",
  "FF09":"A3A9",
  "FF0A":"A3AA",
  "FF0B":"A3AB",
  "FF0C":"A3AC",
  "FF0D":"A3AD",
  "FF0E":"A3AE",
  "FF0F":"A3AF",
  "FF10":"A3B0",
  "FF11":"A3B1",
  "FF12":"A3B2",
  "FF13":"A3B3",
  "FF14":"A3B4",
  "FF15":"A3B5",
  "FF16":"A3B6",
  "FF17":"A3B7",
  "FF18":"A3B8",
  "FF19":"A3B9",
  "FF1A":"A3BA",
  "FF1B":"A3BB",
  "FF1C":"A3BC",
  "FF1D":"A3BD",
  "FF1E":"A3BE",
  "FF1F":"A3BF",
  "FF20":"A3C0",
  "FF21":"A3C1",
  "FF22":"A3C2",
  "FF23":"A3C3",
  "FF24":"A3C4",
  "FF25":"A3C5",
  "FF26":"A3C6",
  "FF27":"A3C7",
  "FF28":"A3C8",
  "FF29":"A3C9",
  "FF2A":"A3CA",
  "FF2B":"A3CB",
  "FF2C":"A3CC",
  "FF2D":"A3CD",
  "FF2E":"A3CE",
  "FF2F":"A3CF",
  "FF30":"A3D0",
  "FF31":"A3D1",
  "FF32":"A3D2",
  "FF33":"A3D3",
  "FF34":"A3D4",
  "FF35":"A3D5",
  "FF36":"A3D6",
  "FF37":"A3D7",
  "FF38":"A3D8",
  "FF39":"A3D9",
  "FF3A":"A3DA",
  "FF3B":"A3DB",
  "FF3C":"A3DC",
  "FF3D":"A3DD",
  "FF3E":"A3DE",
  "FF3F":"A3DF",
  "FF40":"A3E0",
  "FF41":"A3E1",
  "FF42":"A3E2",
  "FF43":"A3E3",
  "FF44":"A3E4",
  "FF45":"A3E5",
  "FF46":"A3E6",
  "FF47":"A3E7",
  "FF48":"A3E8",
  "FF49":"A3E9",
  "FF4A":"A3EA",
  "FF4B":"A3EB",
  "FF4C":"A3EC",
  "FF4D":"A3ED",
  "FF4E":"A3EE",
  "FF4F":"A3EF",
  "FF50":"A3F0",
  "FF51":"A3F1",
  "FF52":"A3F2",
  "FF53":"A3F3",
  "FF54":"A3F4",
  "FF55":"A3F5",
  "FF56":"A3F6",
  "FF57":"A3F7",
  "FF58":"A3F8",
  "FF59":"A3F9",
  "FF5A":"A3FA",
  "FF5B":"A3FB",
  "FF5C":"A3FC",
  "FF5D":"A3FD",
  "FF5E":"A1AB",
  "FFE0":"A1E9",
  "FFE1":"A1EA",
  "FFE3":"A3FE",
  "FFE5":"A3A4"
};

var encodeToGb2312 = function(str){
  var strOut="";
  for(var i = 0; i < str.length; i++){
    var c = str.charAt(i); 
    var code = str.charCodeAt(i);
    var gcode = json[code.toString(16).toUpperCase()];
    if(gcode && gcode.length % 2 !== 0) gcode = "0" + gcode;
    if(c==" ") {
      strOut += "20";
    }else if(code < 19968){
      var b = str.charCodeAt(i).toString(16);
      if(b && b.length % 2 !== 0) b = "0" + b;
      strOut += b;
    } else if(gcode){
      strOut += gcode;
    } else{
      throw Error("not match");
    }
  }
  return strOut;
};

Blockly.Arduino.make_tool_encoding = function() {
    var text_input_data = this.getFieldValue('input_data');
    var dropdown_type = this.getFieldValue('type');
    var text_output_data = this.getFieldValue('output_data');

  var output_data = "";
  if(dropdown_type == "GB2312")
  {
    //output_data = UrlEncode1(text_input_data);
    output_data = encodeToGb2312(text_input_data);
    var output_data1 = "";
    for(var i in output_data)
    {
      if(i > 0 && i%2 == 1)
        output_data1 = output_data1 + output_data.charAt(i) + " ";
      else
        output_data1 += output_data.charAt(i);
    }
    if(output_data1.charAt(output_data1.length-1) == ' ')
      output_data = output_data1.substring(0,output_data1.length-1);
    else
      output_data = output_data1;
    output_data = output_data.toUpperCase();
  }
  else
  {
    output_data = encodeUnicode1(text_input_data);
  }
  this.setFieldValue(output_data,"output_data");
  var code = '';
  return code;
};

Blockly.Arduino.make_tool_encoding_1 = function() {
    var dropdown_type = this.getFieldValue('type');
    var text_input_data = this.getFieldValue('input_data');

  var output_data = "";
  if(dropdown_type == "GB2312")
  {
    //output_data = UrlEncode1(text_input_data);
    output_data = encodeToGb2312(text_input_data);
    var output_data1 = "";
    for(var i in output_data)
    {
      if(i > 0 && i%2 == 1)
        output_data1 = output_data1 + output_data.charAt(i) + "%";
      else
        output_data1 += output_data.charAt(i);
    }
    if(output_data1.charAt(output_data1.length-1) == '%')
      output_data = output_data1.substring(0,output_data1.length-1);
    else
      output_data = output_data1;
    output_data = '%' + output_data.toUpperCase();
  }
  else
  {
    output_data = encodeUnicode2(text_input_data);
  }
  this.setTooltip(text_input_data + '的' + dropdown_type + '编码为:\n' + output_data);
  var code = '"' + output_data + '"';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_arduino_comment_picture = function() {
  //var aa = UrlEncode("米");
  //var bb = UrlDecode("你好");
    //var text_picture_width = this.getFieldValue('picture_width');
    //var text_picture_height = this.getFieldValue('picture_height');
    var text_picture_data = this.getFieldValue('picture_data');
  //var code = aa + bb;
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_comment_picture_change_1 = function() {
    var dropdown_picture_width = this.getFieldValue('picture_width');
    var dropdown_picture_height = this.getFieldValue('picture_height');
    var text_picture_data = this.getFieldValue('picture_data');
  var code = '';
  return code;
};

Blockly.Arduino.make_arduino_comment_text = function() {
    var text_data = this.getFieldValue('data');
  var code = '/*\n'+text_data+'\n*/\n';
  return code;
};

Blockly.Arduino.make_arduino_comment_text_1 = function() {
    var text_data = this.getFieldValue('data');
  var code = '//'+text_data+'\n';
  return code;
};

Blockly.Arduino.make_arduino_comment_text_2 = function() {
  if(this.itemCount_)
  {
    var code1 = new Array(this.itemCount_);
    for (var n = 0; n < this.itemCount_; n++) {
      code1[n] = '*'+this.getFieldValue('data' + (n + 1));
    }
    var code = '';
    for (var n = 0; n < this.itemCount_; n++) {
      code = code + code1[n] + '\n';
    }
    code = '/*\n'+code+'*/\n';
  }
  else
  {
    var code = this.getFieldValue('data1');
    code = '/*'+code+'*/\n';
  }
  
  return code;
};

/*
Blockly.Arduino.make_arduino_tooltip = function() {
  var surround_parent = this.getSurroundParent();
  if (surround_parent && surround_parent.type == 'base_setup') {
    var dropdown_type = this.getFieldValue('type');
    if(dropdown_type == 'true')
      Blockly.make_arduino_tooltip = 'true';
    else if(dropdown_type == 'false_part')
      Blockly.make_arduino_tooltip = 'false_part';
    else
      Blockly.make_arduino_tooltip = 'false';
    this.setWarningText(null);
  } else {
    this.setWarningText("此块需放到 初始化 块下");
  }
  var code = '';
  return code;
};
*/