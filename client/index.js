'use strict';

$(document).ready(init);

var storedNumber = 0;
var operator = '';

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#display').click(clear);
  $('.operator').click(clickOperator);
  $('#equal').click(performCalculation);
}

function clickNumber(){
  var num = $(this).text();
  var display = $('#display').text();
  var output = (display === '0') ? num : display + num;
  $('#display').text(output);
}


function clickDecimal(){
  var display = $('#display').text();
  var output = display.indexOf('.') !== -1 ? display : display += '.';
  $('#display').text(output);
}

function clear(){
  $('#display').text('0');
}

function clickOperator(){
  storedNumber = parseFloat($('#display').text());
  operator = $(this).text();
  clear();
}

function performCalculation() {
  var newNumber = parseFloat($('#display').text());
  var result;
  switch (operator) {
    case '+':
      result = storedNumber + newNumber;
      break;
    case '-':
      result = storedNumber - newNumber;
      break;
    case '×':
      result = storedNumber * newNumber;
      break;
    case '÷':
      result = storedNumber / newNumber;
  }
  $('#display').text(result);
}
