  'use strict';

goog.provide('Blockly.Arduino.make');

goog.require('Blockly.Arduino');

Blockly.Arduino.make_test_2020_01_16 = function() {
  /*
  var content = "file content!";
  var data = new Blob([content],{type:"D:\\音乐;charset=UTF-8"});  
  var downloadUrl = window.URL.createObjectURL(data);  
  var anchor = document.createElement("a");  
  anchor.href = downloadUrl;  
  anchor.download = "文件名.txt";  
  anchor.click(); 
  */

  /*
  var csv = '姓名,期中成绩,期末成绩\n张三,58,95\n李四,98,74';
  var a = document.createElement('a');
  a.href = 'd:/txt;charset=utf-8,'+encodeURIComponent(csv);
  a.download = '测试.csv';
  a.click(); // 这里偷个懒，直接用click模拟
  */

  //var content = "file content!";
  //var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
  //saveAs(blob, "file.txt");//saveAs(blob,filename)

  var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  var select = false;
  var data = "";
  var output_data = "";
  for(var i of xmlText)
  {
    if(data.length == 4)
    {
      if(data == "id=\"" || data == " x=\"" || data == " y=\"")
      {
        select = true;
        if(data == "id=\"")
          output_data = output_data.substring(0,output_data.length - 5);
        else
          output_data = output_data.substring(0,output_data.length - 4);
      }
      data = data.substring(1);
      data+=i;
    }
    else
    {
      data+=i;
      output_data+=i;
      continue;
    }
    if(select)
    {
      if(i == "\"")
      {
        select = false;
        //output_data+=i;
      }
      else
      {
        continue;
      }
    }
    else
    {
      output_data+=i;
    }
  }
  output_data = output_data.replace("  <block type=\"make_test_2020_01_16\"></block>\n","");
  Blockly.Arduino.definitions_['include_make_test_2020_01_16'] = "\n"+output_data+"\n";
  return '';
};

Blockly.Arduino.make_sharp = function() {
  var code = '';
  try{
    eval(Blockly.Arduino.make_generator);
    Blockly.Arduino.make_generator_select = '0';
  }catch(exception){
    var make_generator_length = Blockly.Arduino.make_generator;
    if(make_generator_length.length >= 1)
      Blockly.Arduino.make_generator_select = '1';
    else
      Blockly.Arduino.make_generator_select = '0';
      //console.warn(exception);
      //打印：Unexpected token ILLEGAL
  }
  //var code = Blockly.Arduino.generator_code_loop;
  //eval(Blockly.Arduino.generator_code_loop);
  //code = "var code = '  {\''+text_keypad_1_1+'\',\''+text_keypad_1_2+'\',\''+text_keypad_1_3+'\',\''+text_keypad_1_4+'\'},'+'\n  {\''+text_keypad_2_1+'\',\''+text_keypad_2_2+'\',\''+text_keypad_2_3+'\',\''+text_keypad_2_4+'\'},'+'\n  {\''+text_keypad_3_1+'\',\''+text_keypad_3_2+'\',\''+text_keypad_3_3+'\',\''+text_keypad_3_4+'\'},'+'\n  {\''+text_keypad_4_1+'\',\''+text_keypad_4_2+'\',\''+text_keypad_4_3+'\',\''+text_keypad_4_4+'\'}'";
  //eval(code);
  //eval(Blockly.Arduino.generator_code_loop);
  //eval(Blockly.Arduino.generator_code_loop);
  
  if(Blockly.Arduino.make_inline)
  {
    //var code = Blockly.Arduino.generator_code_loop;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  }
  else
  {
    //var code = Blockly.Arduino.generator_code_loop;
    return code;
  }
};


//eval(Blockly.Arduino.make_generator_code);
//Blockly.Arduino.generator_code_define = "";
//Blockly.Arduino.generator_code_setup = "";
//Blockly.Arduino.generator_code_loop = "";
Blockly.Arduino.make_main = function() {
  //var dropdown_type = 1;
  var checkbox_main_show_is_true = this.getFieldValue('main_show_is_true') == 'TRUE';
  var text_main_0 = this.getFieldValue('main_0');
  var statements_main_1 = Blockly.Arduino.statementToCode(this, 'main_1');
  var dropdown_input_drop = this.getFieldValue('input_drop');
  var dropdown_sharp = this.getFieldValue('sharp');
  var value_main_2 = Blockly.Arduino.valueToCode(this, 'main_2', Blockly.Arduino.ORDER_ATOMIC);
  var value_main_3 = Blockly.Arduino.valueToCode(this, 'main_3', Blockly.Arduino.ORDER_ATOMIC);
  var value_main_4 = Blockly.Arduino.valueToCode(this, 'main_4', Blockly.Arduino.ORDER_ATOMIC);

  if(!value_main_4)
  {
    value_main_4 = 10;
    Blockly.Arduino.main_color = 10;
  }
  /*
  if(value_main_4)
  {
    var value_main_4_1 = value_main_4;
    if(value_main_4.indexOf('#') != -1)
      value_main_4 = '"'+value_main_4+'"';
    if(dropdown_type == '1')
      Blockly.Arduino.main_color = value_main_4_1;
    else if(dropdown_type == '2')                                                  
      Blockly.Arduino.main_color2 = value_main_4_1;
    else if(dropdown_type == '3')                                                  
      Blockly.Arduino.main_color3 = value_main_4_1;
    else if(dropdown_type == '4')                                                  
      Blockly.Arduino.main_color4 = value_main_4_1; 
    else                                                  
      Blockly.Arduino.main_color5 = value_main_4_1;
  }
  else
  {
    if(dropdown_type == '1')
      Blockly.Arduino.main_color = '10';
    else if(dropdown_type == '2')                                                  
      Blockly.Arduino.main_color2 = '10';
    else if(dropdown_type == '3')                                                  
      Blockly.Arduino.main_color3 = '10';
    else if(dropdown_type == '4')                                                  
      Blockly.Arduino.main_color4 = '10'; 
    else                                                  
      Blockly.Arduino.main_color5 = value_main_4;
  }
  */
  var statements_make_generator_code_data = Blockly.Arduino.statementToCode(this, 'make_generator_code_data');

  Blockly.Arduino.statements_main_1 = statements_main_1;
  
  var statements_main_1_data = statements_main_1.split('');
  var choice = 1;
  statements_main_1 = "";
  var statements_main_2 = "";
  for(var data of statements_main_1_data)
  {
    if(data == "♠")
    {
      choice = 1;
      continue;
    }
    else if(data == "♦")
    {
      choice = 0;
      continue;
    }
    if(choice)
    {
      statements_main_1 = statements_main_1 + data;
    }
    else
    {
      statements_main_2 = statements_main_2 + data;
    }
  }
  

  //statements_main_1 = statements_main_1.replace(/(^\s*)|(\s*♥)/g, "");
  
  var input_drop = "";
  if(dropdown_input_drop == "automatic")
  {
    input_drop = '';
    var this_sharp = "";
    if(dropdown_sharp == "sharp_1")
    {
      this_sharp = 'this.setColour('+value_main_4+');\n';
    }
    else if(dropdown_sharp == "sharp_5")
    {
      this_sharp = "this.setOutput(true, null);\n  this.setColour("+value_main_4+");\n";
    }
    else if (dropdown_sharp == "sharp_4") 
    {
      this_sharp = "this.setPreviousStatement(true, null);\n  this.setNextStatement(true, null);\n  this.setColour("+value_main_4+");\n";
    }
    else if(dropdown_sharp == "sharp_2")
    {
      this_sharp = "this.setPreviousStatement(true, null);\n  this.setColour("+value_main_4+");\n";
    }
    else if(dropdown_sharp == "sharp_3")
    {
      this_sharp = "this.setNextStatement(true, null);\n  this.setColour("+value_main_4+");\n";
    }
  }
  else if(dropdown_input_drop == "external")
  { 
    if(statements_main_1 == "")
    {
      input_drop = "  this.setInputsInline(false);\n";
      var this_sharp = "";
      if(dropdown_sharp == "sharp_1")
      {
        this_sharp = 'this.setColour('+value_main_4+');\n';
      }
      else if(dropdown_sharp == "sharp_5")
      {
        this_sharp = "this.setOutput(true, null);\n  this.setColour("+value_main_4+");\n";
      }
      else if (dropdown_sharp == "sharp_4") 
      {
        this_sharp = "this.setPreviousStatement(true, null);\n  this.setNextStatement(true, null);\n  this.setColour("+value_main_4+");\n";
      }
      else if(dropdown_sharp == "sharp_2")
      {
        this_sharp = "this.setPreviousStatement(true, null);\n  this.setColour("+value_main_4+");\n";
      }
      else if(dropdown_sharp == "sharp_3")
      {
        this_sharp = "this.setNextStatement(true, null);\n  this.setColour("+value_main_4+");\n";
      }
    }
    else
    {
      input_drop = "this.setInputsInline(false);\n";
      var this_sharp = "";
      if(dropdown_sharp == "sharp_1")
      {
        this_sharp = '  this.setColour('+value_main_4+');\n';
      }
      else if(dropdown_sharp == "sharp_5")
      {
        this_sharp = "  this.setOutput(true, null);\n  this.setColour("+value_main_4+");\n";
      }
      else if (dropdown_sharp == "sharp_4") 
      {
        this_sharp = "  this.setPreviousStatement(true, null);\n  this.setNextStatement(true, null);\n  this.setColour("+value_main_4+");\n";
      }
      else if(dropdown_sharp == "sharp_2")
      {
        this_sharp = "  this.setPreviousStatement(true, null);\n  this.setColour("+value_main_4+");\n";
      }
      else if(dropdown_sharp == "sharp_3")
      {
        this_sharp = "  this.setNextStatement(true, null);\n  this.setColour("+value_main_4+");\n";
      }
    }
  }
  else if (dropdown_input_drop == "inline")
  {
    if(statements_main_1 == "")
    {
      input_drop = "  this.setInputsInline(true);\n";
      var this_sharp = "";
      if(dropdown_sharp == "sharp_1")
      {
        this_sharp = 'this.setColour('+value_main_4+');\n';
      }
      else if(dropdown_sharp == "sharp_5")
      {
        this_sharp = "this.setOutput(true, null);\n  this.setColour("+value_main_4+");\n";
      }
      else if (dropdown_sharp == "sharp_4") 
      {
        this_sharp = "this.setPreviousStatement(true, null);\n  this.setNextStatement(true, null);\n  this.setColour("+value_main_4+");\n";
      }
      else if(dropdown_sharp == "sharp_2")
      {
        this_sharp = "this.setPreviousStatement(true, null);\n  this.setColour("+value_main_4+");\n";
      }
      else if(dropdown_sharp == "sharp_3")
      {
        this_sharp = "this.setNextStatement(true, null);\n  this.setColour("+value_main_4+");\n";
      }
    }
    else
    {
      input_drop = "this.setInputsInline(true);\n";
      var this_sharp = "";
      if(dropdown_sharp == "sharp_1")
      {
        this_sharp = '  this.setColour('+value_main_4+');\n';
      }
      else if(dropdown_sharp == "sharp_5")
      {
        this_sharp = "  this.setOutput(true, null);\n  this.setColour("+value_main_4+");\n";
      }
      else if (dropdown_sharp == "sharp_4") 
      {
        this_sharp = "  this.setPreviousStatement(true, null);\n  this.setNextStatement(true, null);\n  this.setColour("+value_main_4+");\n";
      }
      else if(dropdown_sharp == "sharp_2")
      {
        this_sharp = "  this.setPreviousStatement(true, null);\n  this.setColour("+value_main_4+");\n";
      }
      else if(dropdown_sharp == "sharp_3")
      {
        this_sharp = "  this.setNextStatement(true, null);\n  this.setColour("+value_main_4+");\n";
      }
    }
  }

  if(dropdown_sharp == 'sharp_5')
  {
    Blockly.Arduino.make_inline = true;
  }
  else
  {
    Blockly.Arduino.make_inline = false;
  }

  Blockly.Arduino.definitions_xml = '<block type="' + text_main_0 + '">'
                                  + '\n</block>';            
  Blockly.Arduino.make_xml_code = Blockly.Arduino.definitions_xml;                                               

  if(statements_main_1 == "")
  {
    Blockly.Arduino.definitions_block = 'Blockly.Blocks.' + text_main_0 + '= {\n'
                                       + '  init: function() { \n'
                                       + input_drop 
                                       + '  '
                                       + this_sharp
                                       //+ '  this.setColour('+value_main_4+');\n'
                                       + '  this.setTooltip('+value_main_2+');\n'
                                       + '  this.setHelpUrl('+value_main_3+');\n'
                                       + '  }\n'
                                       + '};\n';
  }
  else
  {
    Blockly.Arduino.definitions_block = 'Blockly.Blocks.' + text_main_0 + '= {\n'
                                       + '  init: function() { \n'
                                       + statements_main_1
                                       + input_drop 
                                       + this_sharp
                                       //+ '  this.setColour('+value_main_4+');\n'
                                       + '  this.setTooltip('+value_main_2+');\n'
                                       + '  this.setHelpUrl('+value_main_3+');\n'
                                       + '  }\n'
                                       + '};\n';
  }
  Blockly.Arduino.make_block ='  '+ statements_main_1 
                             +'\n'
                             + input_drop 
                             + this_sharp
                             // + '  this.setColour('+value_main_4+');\n'
                             + '  this.setTooltip('+value_main_2+');\n'
                             + '  this.setHelpUrl('+value_main_3+');\n';
  Blockly.Arduino.make_block_code = Blockly.Arduino.definitions_block;
  /* 
  if(dropdown_type == '1')
    Blockly.Arduino.make_block_code = Blockly.Arduino.definitions_block; 
  else if(dropdown_type == '2')                                                  
    Blockly.Arduino.make_block_code2 = Blockly.Arduino.definitions_block; 
  else if(dropdown_type == '3')                                                  
    Blockly.Arduino.make_block_code3 = Blockly.Arduino.definitions_block; 
  else if(dropdown_type == '4')                                                  
    Blockly.Arduino.make_block_code4 = Blockly.Arduino.definitions_block; 
  else                                                  
    Blockly.Arduino.make_block_code5 = Blockly.Arduino.definitions_block; 
  */
  
  if(dropdown_sharp == "sharp_5")
  {
    if(statements_make_generator_code_data.indexOf("var code") == -1)
      statements_make_generator_code_data+='  var code = \'\';\n'
    Blockly.Arduino.definitions_generator = 'Blockly.Arduino.' + text_main_0 + ' = function() {'
                                          + statements_main_2 + '\n'
                                          + statements_make_generator_code_data
                                          + '  return [code, Blockly.Arduino.ORDER_ATOMIC];\n'
                                          + '};\n';
  }
  else
  {
    if(statements_make_generator_code_data.indexOf("var code") == -1)
      statements_make_generator_code_data+='  var code = \'\';\n'
    Blockly.Arduino.definitions_generator = 'Blockly.Arduino.' + text_main_0 + ' = function() {'
                                          +''+ statements_main_2  + '\n'
                                          + statements_make_generator_code_data
                                          + '  return code;\n'
                                          + '};\n';
  }
  Blockly.Arduino.make_generator_code = Blockly.Arduino.definitions_generator; 
  /*
  if(dropdown_type == '1')
    Blockly.Arduino.make_generator_code = Blockly.Arduino.definitions_generator; 
  else if(dropdown_type == '2')                                                  
    Blockly.Arduino.make_generator_code2 = Blockly.Arduino.definitions_generator; 
  else if(dropdown_type == '3')                                                  
    Blockly.Arduino.make_generator_code3 = Blockly.Arduino.definitions_generator; 
  else if(dropdown_type == '4')                                                  
    Blockly.Arduino.make_generator_code4 = Blockly.Arduino.definitions_generator; 
  else                                                  
    Blockly.Arduino.make_generator_code5 = Blockly.Arduino.definitions_generator; 
  */

  if(checkbox_main_show_is_true)
  {
    Blockly.Arduino.definitions_['var_mixly_generator'] = Blockly.Arduino.definitions_generator;
    Blockly.Arduino.definitions_['var_mixly_block'] = Blockly.Arduino.definitions_block;
    Blockly.Arduino.definitions_['var_mixly_axml'] = Blockly.Arduino.definitions_xml + '\n'; 
    /*
    if(dropdown_type == '1')
    {
      Blockly.Arduino.definitions_['var_mixly_generator1'] = Blockly.Arduino.definitions_generator;
      Blockly.Arduino.definitions_['var_mixly_block1'] = Blockly.Arduino.definitions_block;
      Blockly.Arduino.definitions_['var_mixly_axml1'] = Blockly.Arduino.definitions_xml + '\n'; 
    }
    else if(dropdown_type == '2') 
    {                                                 
      Blockly.Arduino.definitions_['var_mixly_generator2'] = Blockly.Arduino.definitions_generator;
      Blockly.Arduino.definitions_['var_mixly_block2'] = Blockly.Arduino.definitions_block;
      Blockly.Arduino.definitions_['var_mixly_axml2'] = Blockly.Arduino.definitions_xml + '\n'; 
    }
    else if(dropdown_type == '3')    
    {                                              
      Blockly.Arduino.definitions_['var_mixly_generator3'] = Blockly.Arduino.definitions_generator;
      Blockly.Arduino.definitions_['var_mixly_block3'] = Blockly.Arduino.definitions_block;
      Blockly.Arduino.definitions_['var_mixly_axml3'] = Blockly.Arduino.definitions_xml + '\n'; 
    }
    else if(dropdown_type == '4')        
    {
      Blockly.Arduino.definitions_['var_mixly_generator4'] = Blockly.Arduino.definitions_generator;
      Blockly.Arduino.definitions_['var_mixly_block4'] = Blockly.Arduino.definitions_block;
      Blockly.Arduino.definitions_['var_mixly_axml4'] = Blockly.Arduino.definitions_xml + '\n'; 
    }
    else    
    {                                              
      Blockly.Arduino.definitions_['var_mixly_generator5'] = Blockly.Arduino.definitions_generator;
      Blockly.Arduino.definitions_['var_mixly_block5'] = Blockly.Arduino.definitions_block;
      Blockly.Arduino.definitions_['var_mixly_axml5'] = Blockly.Arduino.definitions_xml + '\n'; 
    }
    //Blockly.Arduino.definitions_['var_mixly_generator'] = Blockly.Arduino.definitions_generator;
    //Blockly.Arduino.definitions_['var_mixly_block'] = Blockly.Arduino.definitions_block;
    //Blockly.Arduino.definitions_['var_mixly_axml'] = Blockly.Arduino.definitions_xml + '\n';
    */
  }
  else
  {
    Blockly.Arduino.definitions_['var_mixly_generator'] = '';
    Blockly.Arduino.definitions_['var_mixly_block'] = '';
    Blockly.Arduino.definitions_['var_mixly_axml'] = '';
    /*
    for(var i = 1;i <= 5;i++)
    {
      Blockly.Arduino.definitions_['var_mixly_generator'+i] = '';
      Blockly.Arduino.definitions_['var_mixly_block'+i] = '';
      Blockly.Arduino.definitions_['var_mixly_axml'+i] = ''; 
    }
    */
  }
  /*
  if(dropdown_type == '1')
    Blockly.Arduino.make_generator = statements_main_2 + statements_make_generator_code_data.replace('var code','code');
  else if(dropdown_type == '2')                                                  
    Blockly.Arduino.make_generator2 = statements_main_2 + statements_make_generator_code_data.replace('var code','code');
  else if(dropdown_type == '3')                                                  
    Blockly.Arduino.make_generator3 = statements_main_2 + statements_make_generator_code_data.replace('var code','code');
  else if(dropdown_type == '4')                                                  
    Blockly.Arduino.make_generator4 = statements_main_2 + statements_make_generator_code_data.replace('var code','code');
  else                                                  
    Blockly.Arduino.make_generator5 = statements_main_2 + statements_make_generator_code_data.replace('var code','code');
  */
  Blockly.Arduino.make_generator = statements_main_2 + statements_make_generator_code_data.replace('var code','code');
  return '';
};


Blockly.Arduino['make_main_color'] = function() {
  var angle_main_color = this.getFieldValue('main_color');
  /*
  if(angle_main_color)
  {
    Blockly.Arduino.main_color = angle_main_color;
  }
  else
  {
    Blockly.Arduino.main_color = "10";
  }
  */
  Blockly.Arduino.main_color = angle_main_color;
  this.setColour(Blockly.Arduino.main_color);
  return [angle_main_color, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_color = function() { 
  var colour_color_data = this.getFieldValue('color_data');
  var code = '"'+colour_color_data+'"';
  Blockly.Arduino.main_color = this.getFieldValue('color_data');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_color_define = function() {
    var text_data = this.getFieldValue('data');
  var code = '"#'+text_data+'"';
  var data = '#'+text_data;
  Blockly.Arduino.main_color = data;
  if(data.length == 7)
    this.setColour(data);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['make_main_show_code'] = function() {
  var text_xml_code = this.getFieldValue('xml_code');
  var text_block_code = this.getFieldValue('block_code');
  var text_generator_code = this.getFieldValue('generator_code');
  //this.setFieldValue(Blockly.Arduino.make_xml_code,"xml_code");
  //this.setFieldValue(Blockly.Arduino.make_block_code,"block_code");
  //this.setFieldValue(Blockly.Arduino.make_generator_code,"generator_code");
  //this.setColour(Blockly.Arduino.main_color);
  var code = '';
  return code;
};

Blockly.Arduino['make_main_show_code_test'] = function() {
  var text_block_code = this.getFieldValue('test_1');
  var text_generator_code = this.getFieldValue('test_2');
  
  var code = '';
  return code;
};
 
Blockly.Arduino['make_value_input'] = function() {
  var text_dummy_input_data = this.getFieldValue('dummy_input_data');
  var dropdown_statement_input_dropdown_data = this.getFieldValue('statement_input_dropdown_data');
  var statements_statement_input_data = Blockly.Arduino.statementToCode(this, 'statement_input_data');
  var value_make_value_input_type = Blockly.Arduino.valueToCode(this, 'make_value_input_type', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.statements_statement_input_data = statements_statement_input_data;
  var statements_statement_input_data_data = statements_statement_input_data.split('');
  var choice = 1;
  var statements_statement_input_data_1 = "";
  var statements_statement_input_data_2 = "";
  for(var data of statements_statement_input_data_data)
  {
    if(data == "♠")
    {
      choice = 1;
      continue;
    }
    else if(data == "♦")
    {
      choice = 0;
      continue;
    }
    if(choice)
    {
      statements_statement_input_data_1 = statements_statement_input_data_1 + data;
    }
    else
    {
      statements_statement_input_data_2 = statements_statement_input_data_2 + data;
    }
  }

  var statement_input_dropdown_data = "";
  if(dropdown_statement_input_dropdown_data == "left")
  {
    statement_input_dropdown_data = "";
  }
  else if(dropdown_statement_input_dropdown_data == "right")
  {
    statement_input_dropdown_data = "    .setAlign(Blockly.ALIGN_RIGHT)";
  }
  else if(dropdown_statement_input_dropdown_data == "centre")
  {
    statement_input_dropdown_data = "    .setAlign(Blockly.ALIGN_CENTRE)";
  }

  if(statements_statement_input_data == "")
  {
    var code1 = '\n  var value_'+text_dummy_input_data+' = Blockly.Arduino.valueToCode(this, \''+text_dummy_input_data+'\', Blockly.Arduino.ORDER_ATOMIC);';
    if(statement_input_dropdown_data == "")
    {
      var code = '♠this.appendValueInput("'+text_dummy_input_data+'")\n'
                  +'    .setCheck(null);\n'
                  +"♦"+''+code1;
    }
    else
    {
      var code = '♠this.appendValueInput("'+text_dummy_input_data+'")\n'
                  +'    .setCheck(null)\n'
                  +statement_input_dropdown_data
                  +';\n'
                  +"♦"+''+code1;
    }
  }
  else
  {
    var code1 = '\n  var value_'+text_dummy_input_data+' = Blockly.Arduino.valueToCode(this, \''+text_dummy_input_data+'\', Blockly.Arduino.ORDER_ATOMIC);'
                +''+statements_statement_input_data_2;
    if(statement_input_dropdown_data == "")
    {
      var code = '♠this.appendValueInput("'+text_dummy_input_data+'")\n'
                  +'    .setCheck(null)'
                  +statements_statement_input_data_1
                  + ';\n'
                  +"♦"+''+code1;
    }
    else
    {
      var code = '♠this.appendValueInput("'+text_dummy_input_data+'")\n'
                  +'    .setCheck(null)\n'
                  +statement_input_dropdown_data
                  //+'\n'
                  +statements_statement_input_data_1
                  + ';\n'
                  +"♦"+''+code1;
    }
  }
  //var code3 = [];
  //code3 = [code,code1];

  var surround_parent = this.getSurroundParent();
  if(surround_parent && surround_parent.type == 'make_main')
    return code;
  else
    return '';
};

Blockly.Arduino['make_statement_input'] = function() {
  var text_dummy_input_data = this.getFieldValue('dummy_input_data');
  var dropdown_statement_input_dropdown_data = this.getFieldValue('statement_input_dropdown_data');
  var statements_statement_input_data = Blockly.Arduino.statementToCode(this, 'statement_input_data');
  var value_make_statement_input_type = Blockly.Arduino.valueToCode(this, 'make_statement_input_type', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.statements_statement_input_data = statements_statement_input_data;
  var statements_statement_input_data_data = statements_statement_input_data.split('');
  var choice = 1;
  var statements_statement_input_data_1 = "";
  var statements_statement_input_data_2 = "";
  for(var data of statements_statement_input_data_data)
  {
    if(data == "♠")
    {
      choice = 1;
      continue;
    }
    else if(data == "♦")
    {
      choice = 0;
      continue;
    }
    if(choice)
    {
      statements_statement_input_data_1 = statements_statement_input_data_1 + data;
    }
    else
    {
      statements_statement_input_data_2 = statements_statement_input_data_2 + data;
    }
  }

  var statement_input_dropdown_data = "";
  if(dropdown_statement_input_dropdown_data == "left")
  {
    statement_input_dropdown_data = "";
  }
  else if(dropdown_statement_input_dropdown_data == "right")
  {
    statement_input_dropdown_data = "    .setAlign(Blockly.ALIGN_RIGHT)";
  }
  else if(dropdown_statement_input_dropdown_data == "centre")
  {
    statement_input_dropdown_data = "    .setAlign(Blockly.ALIGN_CENTRE)";
  }

  if(statements_statement_input_data == "")
  {
    var code1 = '\n  var statements_'+text_dummy_input_data+' = Blockly.Arduino.statementToCode(this, \''+text_dummy_input_data+'\');';
    if(statement_input_dropdown_data == "")
    {
      var code = '♠this.appendStatementInput("'+text_dummy_input_data+'")\n'
                  +'    .setCheck(null);\n'
                  +"♦"+''+code1;
    }
    else
    {
      var code = '♠this.appendStatementInput("'+text_dummy_input_data+'")\n'
                  +'    .setCheck(null)\n'
                  +statement_input_dropdown_data
                  +';\n'
                  +"♦"+''+code1;
    }
  }
  else
  {
    var code1 = '\n  var statements_'+text_dummy_input_data+' = Blockly.Arduino.statementToCode(this, \''+text_dummy_input_data+'\');'
                +'  '+statements_statement_input_data_2;
    if(statement_input_dropdown_data == "")
    {
      var code = '♠this.appendStatementInput("'+text_dummy_input_data+'")\n'
                  +'    .setCheck(null)'
                  +statements_statement_input_data_1
                  + ';\n'
                  +"♦"+''+code1;
    }
    else
    {
      var code = '♠this.appendStatementInput("'+text_dummy_input_data+'")\n'
                  +'    .setCheck(null)\n'
                  +statement_input_dropdown_data
                  //+'\n'
                  +statements_statement_input_data_1
                  + ';\n'
                  +"♦"+''+code1;
    }
  }
  //var code3 = [];
  //code3 = [code,code1];
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && surround_parent.type == 'make_main')
    return code;
  else
    return '';
};

Blockly.Arduino['make_dummy_input'] = function() {
  //var text_dummy_input_data = this.getFieldValue('dummy_input_data');
  var dropdown_statement_input_dropdown_data = this.getFieldValue('statement_input_dropdown_data');
  var statements_statement_input_data = Blockly.Arduino.statementToCode(this, 'statement_input_data');

  var statements_statement_input_data_data = statements_statement_input_data.split('');
  var choice = 1;
  var statements_statement_input_data_1 = "";
  var statements_statement_input_data_2 = "";
  for(var data of statements_statement_input_data_data)
  {
    if(data == "♠")
    {
      choice = 1;
      continue;
    }
    else if(data == "♦")
    {
      choice = 0;
      continue;
    }
    if(choice)
    {
      statements_statement_input_data_1 = statements_statement_input_data_1 + data;
    }
    else
    {
      statements_statement_input_data_2 = statements_statement_input_data_2 + data;
    }
  }
  
  var statement_input_dropdown_data = "";
  if(dropdown_statement_input_dropdown_data == "left")
  {
    statement_input_dropdown_data = "";
  }
  else if(dropdown_statement_input_dropdown_data == "right")
  {
    statement_input_dropdown_data = "    .setAlign(Blockly.ALIGN_RIGHT)";
  }
  else if(dropdown_statement_input_dropdown_data == "centre")
  {
    statement_input_dropdown_data = "    .setAlign(Blockly.ALIGN_CENTRE)";
  }

  if(statements_statement_input_data == "")
  {
    var code1 = "";
    if(statement_input_dropdown_data == "")
    {
      var code = '♠this.appendDummyInput();\n'
                  //+'    .setCheck(null);\n'
                  +"♦"+''+code1;
    }
    else
    {
      var code = '♠this.appendDummyInput()\n'
                  //+'    .setCheck(null)\n'
                  +statement_input_dropdown_data
                  +';\n'
                  +"♦"+''+code1;
    }
  }
  else
  {
    var code1 = ''+statements_statement_input_data_2;
    if(statement_input_dropdown_data == "")
    {
      var code = '♠this.appendDummyInput()'
                  //+'    .setCheck(null)\n'
                  +statements_statement_input_data_1
                  + ';\n'
                  +"♦"+''+code1;
    }
    else
    {
      var code = '♠this.appendDummyInput()\n'
                  //+'    .setCheck(null)\n'
                  +statement_input_dropdown_data
                  //+'\n'
                  +statements_statement_input_data_1
                  + ';\n'
                  +"♦"+''+code1;
    }
  }
  //var code3 = [];
  //code3 = [code,code1];
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && surround_parent.type == 'make_main')
    return code;
  else
    return '';
};

Blockly.Arduino['make_type_text'] = function() {
  var text_type_text_data = this.getFieldValue('type_text_data');
  
  var code = '♠\n  .appendField(\"'+text_type_text_data+'\")';

  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && ((surround_parent.type == 'make_value_input') | (surround_parent.type == 'make_statement_input') | (surround_parent.type == 'make_dummy_input')))
    return code;
  else
    return '';
};

Blockly.Arduino['make_type_text_input'] = function() {
  var text_type_text_data = this.getFieldValue('type_text_data');
  var text_type_text_name = this.getFieldValue('type_text_name');
  
  var code = '♠\n  .appendField(new Blockly.FieldTextInput("'+text_type_text_data+'"), "'+text_type_text_name+'")'
            +'♦'
            +'\nvar text_'+text_type_text_name+' = this.getFieldValue(\''+text_type_text_name+'\');';
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && ((surround_parent.type == 'make_value_input') | (surround_parent.type == 'make_statement_input') | (surround_parent.type == 'make_dummy_input')))
    return code;
  else
    return '';
};

Blockly.Arduino['make_type_longtext_input'] = function() {
  var text_type_text_data = this.getFieldValue('type_text_data');
  var text_type_text_name = this.getFieldValue('type_text_name');
  
  var code = '♠\n  .appendField(new Blockly.FieldTextArea("'+text_type_text_data+'"), "'+text_type_text_name+'")'
            +'♦'
            +'\nvar text_'+text_type_text_name+' = this.getFieldValue(\''+text_type_text_name+'\');';
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && ((surround_parent.type == 'make_value_input') | (surround_parent.type == 'make_statement_input') | (surround_parent.type == 'make_dummy_input')))
    return code;
  else
    return '';
};

Blockly.Arduino['make_type_num_input'] = function() {
  var text_type_text_data = this.getFieldValue('type_text_data');
  var text_type_text_name = this.getFieldValue('type_text_name');
  var text_type_num_min = this.getFieldValue('type_num_min');
  var text_type_num_max = this.getFieldValue('type_num_max');
  var text_type_num_precision = this.getFieldValue('type_num_precision');
  
  var code = '♠\n  .appendField(new Blockly.FieldNumber('+text_type_text_data+', '+text_type_num_min+', '+text_type_num_max+', '+text_type_num_precision+'), "'+text_type_text_name+'")'
            +'♦'
            +'\nvar number_'+text_type_text_name+' = this.getFieldValue(\''+text_type_text_name+'\');';
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && ((surround_parent.type == 'make_value_input') | (surround_parent.type == 'make_statement_input') | (surround_parent.type == 'make_dummy_input')))
    return code;
  else
    return '';
};

Blockly.Arduino['make_type_angle_input'] = function() {
  var angle_type_angle_data = this.getFieldValue('type_angle_data');
  var text_type_text_name = this.getFieldValue('type_text_name');
  
  var code = '♠\n  .appendField(new Blockly.FieldAngle('+angle_type_angle_data+'), "'+text_type_text_name+'")'
            +'♦'
            +'\nvar angle_'+text_type_text_name+' = this.getFieldValue(\''+text_type_text_name+'\');';
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && ((surround_parent.type == 'make_value_input') | (surround_parent.type == 'make_statement_input') | (surround_parent.type == 'make_dummy_input')))
    return code;
  else
    return '';
};

Blockly.Arduino.make_type_dropdown = function() { 
  var text_type_text_name = this.getFieldValue('type_text_name');
  var statements_type_dropdown_data = Blockly.Arduino.statementToCode(this, 'type_dropdown_data');

  if(statements_type_dropdown_data != "")
  {
    var statements_type_dropdown_data_1 = statements_type_dropdown_data.split('');
    var statements_type_dropdown_data_2 ="";
    var num_1 = 0;
    for(var data of statements_type_dropdown_data_1)
    {
      num_1++;
      if(num_1 <=3)
        continue;
      statements_type_dropdown_data_2 = statements_type_dropdown_data_2 + data;
    }

    var code = '♠\n  .appendField(new Blockly.FieldDropdown(['+statements_type_dropdown_data_2+']), "'+text_type_text_name+'")'
              +'♦'
              +'\nvar dropdown_'+text_type_text_name+' = this.getFieldValue(\''+text_type_text_name+'\');';
  }
  else
  {
    var code = '';
  }
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && ((surround_parent.type == 'make_value_input') | (surround_parent.type == 'make_statement_input') | (surround_parent.type == 'make_dummy_input')))
    return code;
  else
    return '';
};

Blockly.Arduino.make_type_dropdown_text = function() { 
  var text_type_dropdown_text = this.getFieldValue('type_dropdown_text');
  var text_type_text_name = this.getFieldValue('type_text_name');
  var code = ',["'+text_type_dropdown_text+'","'+text_type_text_name+'"]';
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && surround_parent.type == 'make_type_dropdown')
    return code;
  else
    return '';
};

Blockly.Arduino.make_type_dropdown_image = function() {
  var text_type_image_place = this.getFieldValue('type_image_place');
  var text_type_image_width = this.getFieldValue('type_image_width');
  var text_type_image_height = this.getFieldValue('type_image_height');
  var text_type_image_alt = this.getFieldValue('type_image_alt');
  //var checkbox_type_image_rtl = this.getFieldValue('type_image_rtl') == 'TRUE';
  var text_type_text_name = this.getFieldValue('type_text_name');
  
  var code = ',[{"src":"'+text_type_image_place+'","width":'+text_type_image_width+',"height":'+text_type_image_height+',"alt":"'+text_type_image_alt+'"},"'+text_type_text_name+'"]';
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && surround_parent.type == 'make_type_dropdown')
    return code;
  else
    return '';
};

Blockly.Arduino['make_type_checkbox'] = function() {
  var checkbox_type_checkbox_data = this.getFieldValue('type_checkbox_data') == 'TRUE';
  var text_type_text_name = this.getFieldValue('type_text_name');
  
  var code = '♠\n  .appendField(new Blockly.FieldCheckbox("'+checkbox_type_checkbox_data+'"), "'+text_type_text_name+'")'
            +'♦'
            +'\nvar checkbox_'+text_type_text_name+' = this.getFieldValue(\''+text_type_text_name+'\') == \'TRUE\';';
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && ((surround_parent.type == 'make_value_input') | (surround_parent.type == 'make_statement_input') | (surround_parent.type == 'make_dummy_input')))
    return code;
  else
    return '';
};

Blockly.Arduino['make_type_color'] = function() {
  var colour_type_color_data = this.getFieldValue('type_color_data');
  var text_type_text_name = this.getFieldValue('type_text_name');
  
  var code = '♠\n  .appendField(new Blockly.FieldColour("'+colour_type_color_data+'"), "'+text_type_text_name+'")'
            +'♦'
            +'\nvar colour_'+text_type_text_name+' = this.getFieldValue(\''+text_type_text_name+'\');';
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && ((surround_parent.type == 'make_value_input') | (surround_parent.type == 'make_statement_input') | (surround_parent.type == 'make_dummy_input')))
    return code;
  else
    return '';
};

Blockly.Arduino['make_type_variable'] = function() {
  var text_type_variable_data = this.getFieldValue('type_variable_data');
  var text_type_text_name = this.getFieldValue('type_text_name');
  
  var code = '♠\n  .appendField(new Blockly.FieldVariable("'+text_type_variable_data+'"), "'+text_type_text_name+'")'
            +'♦'
            +'\nvar variable_'+text_type_text_name+' = Blockly.Arduino.variableDB_.getName(this.getFieldValue(\''+text_type_text_name+'\'), Blockly.Variables.NAME_TYPE);';
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && ((surround_parent.type == 'make_value_input') | (surround_parent.type == 'make_statement_input') | (surround_parent.type == 'make_dummy_input')))
    return code;
  else
    return '';
};

Blockly.Arduino['make_type_image'] = function() {
  var text_type_image_place = this.getFieldValue('type_image_place');
  var text_type_image_width = this.getFieldValue('type_image_width');
  var text_type_image_height = this.getFieldValue('type_image_height');
  var text_type_image_alt = this.getFieldValue('type_image_alt');
  //var checkbox_type_image_rtl = this.getFieldValue('type_image_rtl') == 'TRUE';
  
  var code = '♠\n  .appendField(new Blockly.FieldImage("'+text_type_image_place+'", '+text_type_image_width+', '+text_type_image_height+', "'+text_type_image_alt+'"))';
  //return code;
  var surround_parent = this.getSurroundParent();
  if(surround_parent && ((surround_parent.type == 'make_value_input') | (surround_parent.type == 'make_statement_input') | (surround_parent.type == 'make_dummy_input')))
    return code;
  else
    return '';
};

Blockly.Arduino.test_1 = function() {
  var code = new Array(this.itemCount_);
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.Arduino.valueToCode(this, 'ADD' + n,
      Blockly.Arduino.ORDER_NONE) || '0';
  }
  return '';
};

Blockly.Arduino.make_o = function() { 
  var value_u = Blockly.Arduino.valueToCode(this, 'u', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_s = this.getFieldValue('s');
  var code = '';
  return code;
};

Blockly.Arduino.make_simulat_arduino = function() { 
  var value_make_simulat_arduino_setup = Blockly.Arduino.valueToCode(this, 'make_simulat_arduino_setup', Blockly.Arduino.ORDER_ATOMIC);
  
  var dropdown_NAME = this.getFieldValue('NAME');
  var value_make_simulat_arduino_loop = Blockly.Arduino.valueToCode(this, 'make_simulat_arduino_loop', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = '';
  return code;
};

Blockly.Arduino.make_simulat_arduino_setup = function() { 
  var statements_NAME = Blockly.Arduino.statementToCode(this, 'NAME');
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_simulat_arduino_loop = function() { 
  var statements_NAME = Blockly.Arduino.statementToCode(this, 'NAME');
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
Blockly.Arduino.make_generator_code_1 = function() {
    var statements_make_generator_code_data = Blockly.Arduino.statementToCode(this, 'make_generator_code_data');

  var statements_make_generator_code_data_1 = statements_make_generator_code_data.split('');
  var choice = 0;
  var make_generator_code_define = "";
  var make_generator_code_setup = "";
  var make_generator_code_loop = "";

  for(var data of statements_make_generator_code_data_1)
  {
    if(data == "♠")
    {
      choice = 0;
      continue;
    }
    else if(data == "♥")
    {
      choice = 1;
      continue;
    }
    else if(data == "♦")
    {
      choice = 2;
      continue;
    }
    if(choice == 0)
    {
      make_generator_code_define = make_generator_code_define + data;
    }
    else if(choice == 1)
    {
      make_generator_code_setup = make_generator_code_setup + data;
    }
    else
    {
      make_generator_code_loop = make_generator_code_loop + data;
    }
  }
  Blockly.Arduino.generator_code_define = make_generator_code_define;
  Blockly.Arduino.generator_code_setup = make_generator_code_setup;
  Blockly.Arduino.generator_code_loop = make_generator_code_loop;
  var code = '';
  return code;
};
*/

/*
Blockly.Arduino.make_generator_code_header_file = function() {
    var text_header_file_data = this.getFieldValue('header_file_data');
  var code = "♠\n" + "Blockly.Arduino.definitions_['define_library_'"+text_definitions_name+"] = ♠include <"+value_definitions_data+".h>;";
  return code;
};
*/

Blockly.Arduino.make_generator_define_setup = function() {
    var dropdown_type = this.getFieldValue('type');
    var value_definitions_data = Blockly.Arduino.valueToCode(this, 'definitions_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_definitions_name = this.getFieldValue('definitions_name');
  var data = 'Blockly.Arduino.'+dropdown_type+'_['+text_definitions_name+'] = ';
  var length = data.length;
  var add = '';
  while(length--)
    add+=' ';
  
  if(!value_definitions_data)
    var code = 'Blockly.Arduino.'+dropdown_type+'_['+text_definitions_name+'] = \'\';\n';
  else
  {
    value_definitions_data = value_definitions_data.replace(new RegExp(/\n/g),'\n'+add);
    var code = 'Blockly.Arduino.'+dropdown_type+'_['+text_definitions_name+'] = '+value_definitions_data+';\n';
  }
  return code;
};

Blockly.Arduino.make_generator_define = function() {
    var value_definitions_data = Blockly.Arduino.valueToCode(this, 'definitions_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_definitions_name = this.getFieldValue('definitions_name');
  var data = 'Blockly.Arduino.definitions_['+text_definitions_name+'] = ';
  var length = data.length;
  var add = '';
  while(length--)
    add+=' ';
  value_definitions_data = value_definitions_data.replace(new RegExp(/\n/g),'\n'+add);
  var code = /*'♠\n' + */'Blockly.Arduino.definitions_['+text_definitions_name+'] = '+value_definitions_data+';\n';
  return code;
};

Blockly.Arduino.make_generator_define_special = function() {
    var dropdown_type = this.getFieldValue('type');
    var value_definitions_data = Blockly.Arduino.valueToCode(this, 'definitions_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_definitions_name = this.getFieldValue('definitions_name');
  var data = 'Blockly.Arduino.definitions_['+dropdown_type+text_definitions_name+'] = ';
  var length = data.length;
  var add = '';
  while(length--)
    add+=' ';
  
  if(!value_definitions_data)
    var code = /*'♠\n' + */'Blockly.Arduino.definitions_['+dropdown_type+text_definitions_name+'] = \'\';\n';
  else
  {
    value_definitions_data = value_definitions_data.replace(new RegExp(/\n/g),'\n'+add);
    var code = /*'♠\n' + */'Blockly.Arduino.definitions_['+dropdown_type+text_definitions_name+'] = '+value_definitions_data+';\n';
  }
  return code;
};

Blockly.Arduino.make_generator_setup = function() {
    var value_setups_data = Blockly.Arduino.valueToCode(this, 'setups_data', Blockly.Arduino.ORDER_ATOMIC);
    var text_setups_name = this.getFieldValue('setups_name');
  var data = 'Blockly.Arduino.setups_['+text_setups_name+'] = ';
  var length = data.length;
  var add = '';
  while(length--)
    add+=' ';
  value_setups_data = value_setups_data.replace(new RegExp(/\n/g),'\n'+add);
  var code = /*'♥\n' + */'Blockly.Arduino.setups_['+text_setups_name+'] = '+value_setups_data+';\n';
  return code;
};

Blockly.Arduino.make_generator_loop = function() {
    var value_loop_data = Blockly.Arduino.valueToCode(this, 'loop_data', Blockly.Arduino.ORDER_ATOMIC);
  var data = 'var code = ';
  var length = data.length;
  var add = '';
  while(length--)
    add+=' ';
  value_loop_data = value_loop_data.replace(new RegExp(/\n/g),'\n'+add);
  var code = /*'♦' + */'var code = ' + value_loop_data + ';\n';
  return code;
};

Blockly.Arduino.make_generator_longtext = function() {
    var text_make_generator_longtext_data = this.getFieldValue('make_generator_longtext_data');
  var code = text_make_generator_longtext_data;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.make_generator_longtext_1 = function() {
    var text_make_generator_longtext_data = this.getFieldValue('make_generator_longtext_data');
  var code = '';
  return code;
};

Blockly.Arduino.make_generator_longtext_define = function() {
    var text_make_generator_longtext_data = this.getFieldValue('make_generator_longtext_data');
  var code = /*'♠\n' + */text_make_generator_longtext_data+'\n';
  return code;
};

/*
Blockly.Arduino.make_generator_longtext_setup = function() {
    var text_make_generator_longtext_data = this.getFieldValue('make_generator_longtext_data');
  var code = '♥\n' + text_make_generator_longtext_data;
  return code;
};
*/

Blockly.Arduino.make_generator_longtext_loop = function() {
    var text_make_generator_longtext_data = this.getFieldValue('make_generator_longtext_data');
  var code = /*'♦' + */text_make_generator_longtext_data;
  return code;
};

Blockly.Arduino.make_generator_text_input = function() {
  if(this.itemCount_)
  {
    var code1 = new Array(this.itemCount_);
    for (var n = 0; n < this.itemCount_; n++) {
      code1[n] = this.getFieldValue('data' + (n + 1));
    }
    var code = '';
    for (var n = 0; n < this.itemCount_; n++) {
      code = code + code1[n] + '\n';
    }
  }
  else
  {
    var code = this.getFieldValue('data1');
    code = code+'\n';
  }
  
  return code;
};

Blockly.Arduino.make_generator_text_input_return = function() {
  if(this.itemCount_)
  {
    var code1 = new Array(this.itemCount_);
    for (var n = 0; n < this.itemCount_; n++) {
      code1[n] = this.getFieldValue('data' + (n + 1));
    }
    var code = '';
    for (var n = 0; n < this.itemCount_-1; n++) {
      code = code + code1[n] + '\n';
    }
    code = code + code1[this.itemCount_-1];
  }
  else
  {
    var code = this.getFieldValue('data1');
  }
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
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

Blockly.Arduino.make_block_to_zh_hans = function() {
    var text_input_data = this.getFieldValue('input_data');
    var text_block_data = this.getFieldValue('block_data');
    var text_zh_hans_data = this.getFieldValue('zh_hans_data');

    //text_input_data = text_input_data.replace(new RegExp(/.appendFieldnew Blockly.FieldTextArea/g),"◑");
    //text_input_data = text_input_data.replace(new RegExp(/.appendField/g),"☛");
    //text_input_data = text_input_data.replace(new RegExp(/this.setTooltip/g),"☽");

    var text_input_data1 = text_input_data.substring(15);
    var name_data = '';
    for(var i of text_input_data1)
    {
      if(i == '=')
        break;
      else
        name_data+=i;
    }

    /*
    var zh_hans_data1 = '';
    var output_data = '';
    var select = 0;
    var convert_data = '';
    var choose_data = 0;
    var number_data = 0;
    var old_i = '';
    var j = 0;
    for(var i of text_input_data)
    {
      number_data++;
      if((old_i == '☛' | old_i == '☽') && i == '(' && text_input_data.charAt(number_data) != 'n')
      {
        select = 1;
        output_data+=i;
      }
      if(select == 1)
      {
        if(i == ')' && old_i == '"')
        {
          select = 0;
          output_data+=i;
          old_i = i;
          continue;
        }
        else if(i == '"' && (text_input_data.charAt(number_data) == '+' | text_input_data.charAt(number_data) == ')' | old_i == '+' | old_i == '('))
        {
          choose_data++;
          if((text_input_data.charAt(number_data) == '+' | text_input_data.charAt(number_data) == ')') || (choose_data%2 == 0))
          {
            if(convert_data == '')
            {
              output_data = output_data + '""';
            }
            else
            {
              j++;
              output_data = output_data + 'Blockly.MIXLY' + '_' + name_data + '_' + j;
              zh_hans_data1 = zh_hans_data1 + 'Blockly.MIXLY' + '_' + name_data + '_' + j + ' = ' + '\'' + convert_data + '\';\n';
              convert_data = '';
            }
          }
          old_i = i;
          continue;
        }
        if(choose_data%2 == 1)
        {
          convert_data+=i;
        }
      }
      else
      {
        output_data+=i;
      }
      old_i = i;
    }

    output_data = output_data.replace(new RegExp(/☛/g),".appendField");
    output_data = output_data.replace(new RegExp(/☽/g),"this.setTooltip");
    */
    var name_data_1 = '';
    for(var i of name_data)
    {
      if(i != ' ')
        name_data_1+=i;
    }
    name_data = name_data_1;
    if(name_data.charAt(name_data.length-1) == ']' && name_data.charAt(name_data.length-2) == '\'')
      name_data = name_data.substring(1,name_data.length-2);

    var zh_hans_data1 = '';
    var output_data = '';
    var convert_data = '';
    var choose_data = 0;
    var select = 0;
    for(var i of text_input_data)
    {
      if(i == '"')
      {
        choose_data++;
        if(convert_data == '' && choose_data%2==0)
        {
          output_data+='""';
        }
      }
      else if(choose_data%2==0)
      {
        if(convert_data)
        {
          if(escape(convert_data).indexOf("%u") != -1 && escape(convert_data).indexOf("../../media/") == -1)
          {
            select++;
            output_data = output_data + 'Blockly.MIXLY' + '_' + name_data + '_' + select;
            zh_hans_data1 = zh_hans_data1 + 'Blockly.MIXLY' + '_' + name_data + '_' + select + ' = ' + '\'' + convert_data + '\';\n';
          }
          else
          {
            output_data = output_data + '"' + convert_data + '"';
          }
          convert_data = '';
          output_data+=i;
        }
        else
        {
          output_data+=i;
        }
      }
      else
      {
        if(i != '"')
        {
          convert_data+=i;
        }
      }
    }

    if(zh_hans_data1)
    {
      zh_hans_data1 = zh_hans_data1.substring(0,zh_hans_data1.length - 1);
      zh_hans_data1 = '//' + name_data + '图形块\n' + zh_hans_data1;
    }

    this.setFieldValue(output_data,"block_data");
    this.setFieldValue(zh_hans_data1,"zh_hans_data");
  var code = '';
  return code;
};


Blockly.Arduino.make_create_mil = function() {
    var statements_data = Blockly.Arduino.statementToCode(this, 'data');
  if(statements_data)
  {
    statements_data = statements_data.substring(0,statements_data.length-1);
    Blockly.Arduino.definitions_['define_make_create_mil'] = '<!-- lib="" -->\n'
                                                                 +'<xml board="mylib" xmlns="http://www.w3.org/1999/xhtml">\n'
                                                                 +statements_data+'\n'
                                                                 +'</xml>\n';
  }
  else
  {
    Blockly.Arduino.definitions_['define_make_create_mil'] = '<!-- lib="" -->\n'
                                                               +'<xml board="mylib" xmlns="http://www.w3.org/1999/xhtml">\n'
                                                               +'</xml>\n';
  }
  
  var code = '';
  return code;
};

Blockly.Arduino.make_create_category = function() {
    var text_id_data = this.getFieldValue('id_data');
    var text_name_data = this.getFieldValue('name_data');
    var angle_colour_data = this.getFieldValue('colour_data');
    var statements_input_data = Blockly.Arduino.statementToCode(this, 'input_data');
  if(statements_input_data)
  {
    statements_input_data = statements_input_data.substring(0,statements_input_data.length-1);
    var code = '<category id="'+text_id_data+'" name="'+text_name_data+'" colour="'+angle_colour_data+'">\n'
              +statements_input_data+'\n'
              +'</category>\n';
  }
  else
  {
    var code = '<category id="'+text_id_data+'" name="'+text_name_data+'" colour="'+angle_colour_data+'">\n'
              +'</category>\n';
  }
  return code;
};

Blockly.Arduino.make_create_show = function() {
  var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  var select = false;
  var data = "";
  var output_data = "";
  for(var i of xmlText)
  {
    if(data.length == 4)
    {
      if(data == "id=\"" || data == " x=\"" || data == " y=\"")
      {
        select = true;
        if(data == "id=\"")
          output_data = output_data.substring(0,output_data.length - 5);
        else
          output_data = output_data.substring(0,output_data.length - 4);
      }
      data = data.substring(1);
      data+=i;
    }
    else
    {
      data+=i;
      output_data+=i;
      continue;
    }
    if(select)
    {
      if(i == "\"")
      {
        select = false;
        //output_data+=i;
      }
      else
      {
        continue;
      }
    }
    else
    {
      output_data+=i;
    }
  }
  output_data = output_data.replace("  <block type=\"make_create_show\"></block>\n","");
  Blockly.Arduino.definitions_['include_make_create_show'] = "\n"+output_data+"\n";
  var code = '';
  return code;
};

Blockly.Arduino.make_create_input = function() {
    var text_input = this.getFieldValue('input');
  var code = text_input + '\n';
  return code;
};