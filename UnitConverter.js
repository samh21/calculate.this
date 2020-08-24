/* 

  Author ---  Samuel Torimiro   ---
  Github  ----  Samuel-2626    ----
  Language ----  JavaScript(ES6)   ---
  Purpose  ----    Unit Converters   ---
  
*/

// ------------     Events/Initialization        -------------- //

// change decimal point
document.querySelector('#point').addEventListener('change', point);
document.querySelector('#empty').innerHTML = 3;


// Convert Temperature (onChangeEvent)
document.querySelector('#temperature1').addEventListener('change', temperature);
document.querySelector('#temperature2').addEventListener('change', temperature);

// Convert Temperature (onKeyupEvent)
document.querySelector('#number1').addEventListener('keyup', temperature);

// Convert Temperature (onClickEvent)
document.querySelector('#number1').addEventListener('click', temperature);

// Convert Area (onChangeEvent)
document.querySelector('#area1').addEventListener('change', area);
document.querySelector('#area2').addEventListener('change', area);

// Convert Area (onKeyupEvent)
document.querySelector('#number3').addEventListener('keyup', area);

// Convert Area (onClickEvent)
document.querySelector('#number3').addEventListener('click', area);

// Convert Length (onChangeEvent)
document.querySelector('#length1').addEventListener('change', length);
document.querySelector('#length2').addEventListener('change', length);

// Convert Length (onKeyupEvent)
document.querySelector('#number5').addEventListener('keyup', length);

// Convert Length (onClickEvent)
document.querySelector('#number5').addEventListener('click', length);

// Convert Length (onChangeEvent)
document.querySelector('#volume1').addEventListener('change', volume);
document.querySelector('#volume2').addEventListener('change', volume);

// Convert Length (onKeyupEvent)
document.querySelector('#number7').addEventListener('keyup', volume);

// Convert Length (onClickEvent)
document.querySelector('#number7').addEventListener('click', volume);

// Convert Length (onChangeEvent)
document.querySelector('#mass1').addEventListener('change', mass);
document.querySelector('#mass2').addEventListener('change', mass);

// Convert Length (onKeyupEvent)
document.querySelector('#number9').addEventListener('keyup', mass);

// Convert Length (onClickEvent)
document.querySelector('#number9').addEventListener('click', mass);

// Convert Length (onChangeEvent)
document.querySelector('#data1').addEventListener('change', data);
document.querySelector('#data2').addEventListener('change', data);

// Convert Length (onKeyupEvent)
document.querySelector('#number11').addEventListener('keyup', data);

// Convert Length (onClickEvent)
document.querySelector('#number11').addEventListener('click', data);


    // ------------     Functions        -------------- //

/*
  -- Function to:
  -- Change decimal point of each select field,
  -- from 1 to 6 respectively.

*/
function point() {
  var pointer = document.querySelector('#point').value;
  document.querySelector('#empty').innerHTML = pointer;
  temperature();
  area();
  length();
  volume();
  mass();
  data();

}



/*
  -- Function to:
  -- Convert temperature of both an input and select field respectively,
  -- In celsius, fahrenheit and kelvin

*/
function temperature() {
  let temperature1 = document.querySelector('#temperature1').value;
  let temperature2 = document.querySelector('#temperature2').value;
  let number1 = document.querySelector('#number1').value;
  let number2 = document.querySelector('#number2').value;
  let temp1 = document.querySelector('#temp1');
  let temp2 = document.querySelector('#temp2');
  if ((temperature1 === 'celsius') && number2 !== '' && number1 !== ''){
    temp1.innerHTML = ' &deg;C';
    switch (temperature2) {
      case 'celsius':
        document.querySelector('#number2').value = number1;
        temp2.innerHTML = ' &deg;C';
        break;
      case 'fahrenheit':
        document.querySelector('#number2').value = ((parseFloat(number1) * 9 / 5) + 32).toFixed(document.querySelector('#empty').innerHTML);
        temp2.innerHTML = ' &deg;F';
        break;
      case 'kelvin':
        document.querySelector('#number2').value = ((parseFloat(number1) + 273.15)).toFixed(document.querySelector('#empty').innerHTML);
        temp2.innerHTML = ' K';
        break;
      default:
        temp2.innerHTML = '';
        temp1.innerHTML = '';
        document.querySelector('#number2').value = 1;
        document.querySelector('#number1').value = 1;
        break;
    }
  }
  if ((temperature1 === 'fahrenheit') && number2 !== '' && number1 !== ''){
    temp1.innerHTML = ' &deg;F';
    switch (temperature2) {
      case 'celsius':
        document.querySelector('#number2').value = ((parseFloat(number1) - 32)* 5 / 9).toFixed(document.querySelector('#empty').innerHTML);
        temp2.innerHTML = ' &deg;C';
        break;
      case 'fahrenheit':
        document.querySelector('#number2').value = number1;
        temp2.innerHTML = ' &deg;F';
        break;
      case 'kelvin':
        document.querySelector('#number2').value = ((parseFloat(number1) - 32) * 5/9 + 273.15).toFixed(document.querySelector('#empty').innerHTML);
        temp2.innerHTML = ' K';
        break;
      default:
        temp2.innerHTML = '';
        temp1.innerHTML = '';
        document.querySelector('#number2').value = 1;
        document.querySelector('#number1').value = 1;
        break;
    }
  }
  if ((temperature1 === 'kelvin') && number2 !== '' && number1 !== ''){
    temp1.innerHTML = ' K';
    switch (temperature2) {
      case 'celsius':
        document.querySelector('#number2').value = (parseFloat(number1) - 273.15).toFixed(document.querySelector('#empty').innerHTML);
        temp2.innerHTML = ' &deg;C';
        break;
      case 'fahrenheit':
        document.querySelector('#number2').value = ((parseFloat(number1) - 273.15) * 9/5 + 32).toFixed(document.querySelector('#empty').innerHTML);
        temp2.innerHTML = ' &deg;F';
        break;
      case 'kelvin':
        document.querySelector('#number2').value = number1;
        temp2.innerHTML = ' K';
        break;
      default:
        temp2.innerHTML = '';
        temp1.innerHTML = '';
        document.querySelector('#number2').value = 1;
        document.querySelector('#number1').value = 1;
        break;
    }
  }
    if ((temperature1 === '')){
      temp2.innerHTML = '';
      temp1.innerHTML = '';
      document.querySelector('#number2').value = 1;
      document.querySelector('#number1').value = 1;
  }
  if ((temperature2 === '')){
    temp2.innerHTML = '';
    temp1.innerHTML = '';
    document.querySelector('#number2').value = 1;
    document.querySelector('#number1').value = 1;
}


}




/*
  -- Function to:
  -- Convert Area of both an input and select field respectively,
  -- In acre, are, hectare, square centimetre, square foot, square inch and square metre

*/
function area() {
  let area1 = document.querySelector('#area1').value;
  let area2 = document.querySelector('#area2').value;
  let number3 = document.querySelector('#number3').value;
  let number4 = document.querySelector('#number4').value;
  let a1 = document.querySelector('#a1');
  let a2 = document.querySelector('#a2');
  if ((area1 === 'ac') && number4 !== '' && number3 !== ''){
    a1.innerHTML = ' ac';
    switch (area2) {
      case 'ac':
        document.querySelector('#number4').value = number3;
        a2.innerHTML = ' ac';
        break;
      case 'a':
        document.querySelector('#number4').value = (parseFloat(number3) * 40.468564224).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' a';
        break;
      case 'ha':
        document.querySelector('#number4').value = (parseFloat(number3) / 2.471).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ha';
        break;
      case 'cm':
        document.querySelector('#number4').value = (parseFloat(number3) * 40468564.224).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' cm&sup2;';
        break;
      case 'ft':
        document.querySelector('#number4').value = (parseFloat(number3) * 43560).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ft&sup2;';
        break;
      case 'in':
        document.querySelector('#number4').value = (parseFloat(number3) * 6272640).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' in&sup2;';
        break;
      case 'm':
        document.querySelector('#number4').value = (parseFloat(number3) * 4046.8564224).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' m&sup2;';
        break;
      default:
        a1.innerHTML = '';
        a2.innerHTML = '';
        document.querySelector('#number3').value = 1;
        document.querySelector('#number4').value = 1;
        break;
    }
  }
  if ((area1 === 'a') && number4 !== '' && number3 !== ''){
    a1.innerHTML = ' a';
    switch (area2) {
      case 'ac':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.0247105381).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ac';
        break;
      case 'a':
        document.querySelector('#number4').value = number3;
        a2.innerHTML = ' a';
        break;
      case 'ha':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.01).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ha';
        break;
      case 'cm':
        document.querySelector('#number4').value = (parseFloat(number3) * 1000000).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' cm&sup2;';
        break;
      case 'ft':
        document.querySelector('#number4').value = (parseFloat(number3) * 1076.391041671).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ft&sup2;';
        break;
      case 'in':
        document.querySelector('#number4').value = (parseFloat(number3) * 155000.31000062).toFixed(3);
        a2.innerHTML = ' in&sup2;';
        break;
      case 'm':
        document.querySelector('#number4').value = (parseFloat(number3) * 100).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' m&sup2;';
        break;
      default:
        a1.innerHTML = '';
        a2.innerHTML = '';
        document.querySelector('#number3').value = 1;
        document.querySelector('#number4').value = 1;
        break;
    }
  }
  if ((area1 === 'ha') && number4 !== '' && number3 !== ''){
    a1.innerHTML = ' ha';
    switch (area2) {
      case 'ac':
        document.querySelector('#number4').value = (parseFloat(number3) * 2.4710538147).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ac';
        break;
      case 'a':
        document.querySelector('#number4').value = (parseFloat(number3) * 100).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' a';
        break;
      case 'ha':
        document.querySelector('#number4').value = number3;
        a2.innerHTML = ' ha';
        break;
      case 'cm':
        document.querySelector('#number4').value = (parseFloat(number3) * 100000000).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' cm&sup2;';
        break;
      case 'ft':
        document.querySelector('#number4').value = (parseFloat(number3) * 107639.10416709).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ft&sup2;';
        break;
      case 'in':
        document.querySelector('#number4').value = (parseFloat(number3) * 15500031.000062).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' in&sup2;';
        break;
      case 'm':
        document.querySelector('#number4').value = (parseFloat(number3) * 10000).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' m&sup2;';
        break;
      default:
        a1.innerHTML = '';
        a2.innerHTML = '';
        document.querySelector('#number3').value = 1;
        document.querySelector('#number4').value = 1;
        break;
    }
  }
  if ((area1 === 'cm') && number4 !== '' && number3 !== ''){
    a1.innerHTML = ' cm';
    switch (area2) {
      case 'ac':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.000247105).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ac';
        break;
      case 'a':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.000001).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' a';
        break;
      case 'ha':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.0000001).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ha';
        break;
      case 'cm':
        document.querySelector('#number4').value = number3;
        a2.innerHTML = ' cm&sup2;';
        break;
      case 'ft':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.001076391).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ft&sup2;';
        break;
      case 'in':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.15500031).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' in&sup2;';
        break;
      case 'm':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.0001).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' m&sup2;';
        break;
      default:
        a1.innerHTML = '';
        a2.innerHTML = '';
        document.querySelector('#number3').value = 1;
        document.querySelector('#number4').value = 1;
        break;
    }
  }
  if ((area1 === 'ft') && number4 !== '' && number3 !== ''){
    a1.innerHTML = ' ft';
    switch (area2) {
      case 'ac':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.0000229568).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ac';
        break;
      case 'a':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.0009290304).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' a';
        break;
      case 'ha':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.0000092903).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ha';
        break;
      case 'cm':
        document.querySelector('#number4').value = (parseFloat(number3) * 929.0304).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' cm&sup2;';
        break;
      case 'ft':
        document.querySelector('#number4').value = number3;
        a2.innerHTML = ' ft&sup2;';
        break;
      case 'in':
        document.querySelector('#number4').value = (parseFloat(number3) * 144).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' in&sup2;';
        break;
      case 'm':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.09290304).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' m&sup2;';
        break;
      default:
        a1.innerHTML = '';
        a2.innerHTML = '';
        document.querySelector('#number3').value = 1;
        document.querySelector('#number4').value = 1;
        break;
    }
  }
  if ((area1 === 'in') && number4 !== '' && number3 !== ''){
    a1.innerHTML = ' in';
    switch (area2) {
      case 'ac':
        document.querySelector('#number4').value = (parseFloat(number3) * 1.594 * Math.pow(10, -7)).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ac';
        break;
      case 'a':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.0000064516).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' a';
        break;
      case 'ha':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.0000000645).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ha';
        break;
      case 'cm':
        document.querySelector('#number4').value = (parseFloat(number3) * 6.4516).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' cm&sup2;';
        break;
      case 'ft':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.0069444444).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ft&sup2;';
        break;
      case 'in':
        document.querySelector('#number4').value = number3;
        a2.innerHTML = ' in&sup2;';
        break;
      case 'm':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.00064516).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' m&sup2;';
        break;
      default:
        a1.innerHTML = '';
        a2.innerHTML = '';
        document.querySelector('#number3').value = 1;
        document.querySelector('#number4').value = 1;
        break;
    }
  }
  if ((area1 === 'm') && number4 !== '' && number3 !== ''){
    a1.innerHTML = ' m';
    switch (area2) {
      case 'ac':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.0002471054).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ac';
        break;
      case 'a':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.01).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' a';
        break;
      case 'ha':
        document.querySelector('#number4').value = (parseFloat(number3) * 0.0001).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ha';
        break;
      case 'cm':
        document.querySelector('#number4').value = (parseFloat(number3) * 10000).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' cm&sup2;';
        break;
      case 'ft':
        document.querySelector('#number4').value = (parseFloat(number3) * 10.7639104167).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' ft&sup2;';
        break;
      case 'in':
        document.querySelector('#number4').value = (parseFloat(number3) * 1550.0031000062).toFixed(document.querySelector('#empty').innerHTML);
        a2.innerHTML = ' in&sup2;';
        break;
      case 'm':
        document.querySelector('#number4').value = number3;
        a2.innerHTML = ' m&sup2;';
        break;
      default:
        a1.innerHTML = '';
        a2.innerHTML = '';
        document.querySelector('#number3').value = 1;
        document.querySelector('#number4').value = 1;
        break;
    }
  }
  

    if ((area1 === '')){
      a2.innerHTML = '';
      a1.innerHTML = '';
      document.querySelector('#number4').value = 1;
      document.querySelector('#number3').value = 1;
  }
  if ((area2 === '')){
    a2.innerHTML = '';
    a1.innerHTML = '';
    document.querySelector('#number4').value = 1;
    document.querySelector('#number3').value = 1;
}


}


/*
  -- Function to:
  -- Convert Length of both an input and select field respectively,
  -- In millimetre, centimetre, metre, kilometre, inch, foot, yard, mile, nautical mile and mil.

*/
function length() {
  let length1 = document.querySelector('#length1').value;
  let length2 = document.querySelector('#length2').value;
  let number5 = document.querySelector('#number5').value;
  let number6 = document.querySelector('#number6').value;
  let l1 = document.querySelector('#l1');
  let l2 = document.querySelector('#l2');
  if ((length1 === 'mm') && number6 !== '' && number5 !== ''){
    l1.innerHTML = ' mm';
    switch (length2) {
      case 'mm':
        document.querySelector('#number6').value = number5;
        l2.innerHTML = ' mm';
        break;
      case 'cm':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.1).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' cm';
        break;
      case 'm':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.001).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' m';
        break;
      case 'km':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.000001).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' km';
        break;
      case 'in':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0393700787).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' in';
        break;
      case 'ft':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0032808399).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' ft';
        break;
      case 'yd':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0010936133).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' yd';
        break;
      case 'mi':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0000006214).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mi';
        break;
      case 'NM':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.00000054).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' NM';
        break;
      case 'mil':
        document.querySelector('#number6').value = (parseFloat(number5) * 39.3700787402).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mil';
        break;
      default:
        l1.innerHTML = '';
        l2.innerHTML = '';
        document.querySelector('#number5').value = 1;
        document.querySelector('#number6').value = 1;
        break;
    }
  }
  if ((length1 === 'cm') && number6 !== '' && number5 !== ''){
    l1.innerHTML = ' cm';
    switch (length2) {
      case 'mm':
        document.querySelector('#number6').value = (parseFloat(number5) * 10).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mm';
        break;
      case 'cm':
        document.querySelector('#number6').value = number5;
        l2.innerHTML = ' cm';
        break;
      case 'm':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.01).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' m';
        break;
      case 'km':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.00001).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' km';
        break;
      case 'in':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.3937007874).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' in';
        break;
      case 'ft':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.032808399).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' ft';
        break;
      case 'yd':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.010936133).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' yd';
        break;
      case 'mi':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0000062137).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mi';
        break;
      case 'NM':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0000053996).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' NM';
        break;
      case 'mil':
        document.querySelector('#number6').value = (parseFloat(number5) * 393.7007874016).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mil';
        break;
      default:
        l1.innerHTML = '';
        l2.innerHTML = '';
        document.querySelector('#number5').value = 1;
        document.querySelector('#number6').value = 1;
        break;
    }
  }
  if ((length1 === 'm') && number6 !== '' && number5 !== ''){
    l1.innerHTML = ' m';
    switch (length2) {
      case 'mm':
        document.querySelector('#number6').value = (parseFloat(number5) * 1000).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mm';
        break;
      case 'cm':
        document.querySelector('#number6').value = (parseFloat(number5) * 100).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' cm';
        break;
      case 'm':
        document.querySelector('#number6').value = number5;
        l2.innerHTML = ' m';
        break;
      case 'km':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.001).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' km';
        break;
      case 'in':
        document.querySelector('#number6').value = (parseFloat(number5) * 39.3700787402).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' in';
        break;
      case 'ft':
        document.querySelector('#number6').value = (parseFloat(number5) * 3.280839895).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' ft';
        break;
      case 'yd':
        document.querySelector('#number6').value = (parseFloat(number5) * 1.0936132983).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' yd';
        break;
      case 'mi':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0006213712).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mi';
        break;
      case 'NM':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0005399568).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' NM';
        break;
      case 'mil':
        document.querySelector('#number6').value = (parseFloat(number5) * 39370.078740157).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mil';
        break;
      default:
        l1.innerHTML = '';
        l2.innerHTML = '';
        document.querySelector('#number5').value = 1;
        document.querySelector('#number6').value = 1;
        break;
    }
  }
  if ((length1 === 'km') && number6 !== '' && number5 !== ''){
    l1.innerHTML = ' km';
    switch (length2) {
      case 'mm':
        document.querySelector('#number6').value = (parseFloat(number5) * 1000000).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mm';
        break;
      case 'cm':
        document.querySelector('#number6').value = (parseFloat(number5) * 100000).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' cm';
        break;
      case 'm':
        document.querySelector('#number6').value = (parseFloat(number5) * 1000).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' m';
        break;
      case 'km':
        document.querySelector('#number6').value = number5;
        l2.innerHTML = ' km';
        break;
      case 'in':
        document.querySelector('#number6').value = (parseFloat(number5) * 39370.078740157).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' in';
        break;
      case 'ft':
        document.querySelector('#number6').value = (parseFloat(number5) * 3280.8398950131).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' ft';
        break;
      case 'yd':
        document.querySelector('#number6').value = (parseFloat(number5) * 1093.6132983377).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' yd';
        break;
      case 'mi':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.6213711922).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mi';
        break;
      case 'NM':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.5399568035).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' NM';
        break;
      case 'mil':
        document.querySelector('#number6').value = (parseFloat(number5) * 39370078.740157).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mil';
        break;
      default:
        l1.innerHTML = '';
        l2.innerHTML = '';
        document.querySelector('#number5').value = 1;
        document.querySelector('#number6').value = 1;
        break;
    }
  }
  if ((length1 === 'in') && number6 !== '' && number5 !== ''){
    l1.innerHTML = ' in';
    switch (length2) {
      case 'mm':
        document.querySelector('#number6').value = (parseFloat(number5) * 25.4).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mm';
        break;
      case 'cm':
        document.querySelector('#number6').value = (parseFloat(number5) * 2.54).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' cm';
        break;
      case 'm':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0254).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' m';
        break;
      case 'km':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0000254).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' km';
        break;
      case 'in':
        document.querySelector('#number6').value = number5;
        l2.innerHTML = ' in';
        break;
      case 'ft':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0833333333).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' ft';
        break;
      case 'yd':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.027777778).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' yd';
        break;
      case 'mi':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0000157828).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mi';
        break;
      case 'NM':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0000137149).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' NM';
        break;
      case 'mil':
        document.querySelector('#number6').value = (parseFloat(number5) * 1000).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mil';
        break;
      default:
        l1.innerHTML = '';
        l2.innerHTML = '';
        document.querySelector('#number5').value = 1;
        document.querySelector('#number6').value = 1;
        break;
    }
  }
  if ((length1 === 'ft') && number6 !== '' && number5 !== ''){
    l1.innerHTML = ' ft';
    switch (length2) {
      case 'mm':
        document.querySelector('#number6').value = (parseFloat(number5) * 304.8).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mm';
        break;
      case 'cm':
        document.querySelector('#number6').value = (parseFloat(number5) * 30.48).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' cm';
        break;
      case 'm':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.3048).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' m';
        break;
      case 'km':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0003048).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' km';
        break;
      case 'in':
        document.querySelector('#number6').value = (parseFloat(number5) * 12).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' in';
        break;
      case 'ft':
        document.querySelector('#number6').value = number5;
        l2.innerHTML = ' ft';
        break;
      case 'yd':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.3333333333).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' yd';
        break;
      case 'mi':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0001893939).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mi';
        break;
      case 'NM':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0001645788).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' NM';
        break;
      case 'mil':
        document.querySelector('#number6').value = (parseFloat(number5) * 12000).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mil';
        break;
      default:
        l1.innerHTML = '';
        l2.innerHTML = '';
        document.querySelector('#number5').value = 1;
        document.querySelector('#number6').value = 1;
        break;
    }
  }
  if ((length1 === 'yd') && number6 !== '' && number5 !== ''){
    l1.innerHTML = ' yd';
    switch (length2) {
      case 'mm':
        document.querySelector('#number6').value = (parseFloat(number5) * 914.4).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mm';
        break;
      case 'cm':
        document.querySelector('#number6').value = (parseFloat(number5) * 91.44).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' cm';
        break;
      case 'm':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.9144).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' m';
        break;
      case 'km':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0009144).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' km';
        break;
      case 'in':
        document.querySelector('#number6').value = (parseFloat(number5) * 36).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' in';
        break;
      case 'ft':
        document.querySelector('#number6').value = (parseFloat(number5) * 3).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' ft';
        break;
      case 'yd':
        document.querySelector('#number6').value = number5;
        l2.innerHTML = ' yd';
        break;
      case 'mi':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0005681818).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mi';
        break;
      case 'NM':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0004937365).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' NM';
        break;
      case 'mil':
        document.querySelector('#number6').value = (parseFloat(number5) * 36000).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mil';
        break;
      default:
        l1.innerHTML = '';
        l2.innerHTML = '';
        document.querySelector('#number5').value = 1;
        document.querySelector('#number6').value = 1;
        break;
    }
  }
  if ((length1 === 'mi') && number6 !== '' && number5 !== ''){
    l1.innerHTML = ' mi';
    switch (length2) {
      case 'mm':
        document.querySelector('#number6').value = (parseFloat(number5) * 1609344).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mm';
        break;
      case 'cm':
        document.querySelector('#number6').value = (parseFloat(number5) * 160934.4).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' cm';
        break;
      case 'm':
        document.querySelector('#number6').value = (parseFloat(number5) * 1609.344).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' m';
        break;
      case 'km':
        document.querySelector('#number6').value = (parseFloat(number5) * 1.609344).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' km';
        break;
      case 'in':
        document.querySelector('#number6').value = (parseFloat(number5) * 63360).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' in';
        break;
      case 'ft':
        document.querySelector('#number6').value = (parseFloat(number5) * 5280).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' ft';
        break;
      case 'yd':
        document.querySelector('#number6').value = (parseFloat(number5) * 1760).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' yd';
        break;
      case 'mi':
        document.querySelector('#number6').value = number5;
        l2.innerHTML = ' mi';
        break;
      case 'NM':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.8689762419).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' NM';
        break;
      case 'mil':
        document.querySelector('#number6').value = (parseFloat(number5) * 63360000).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mil';
        break;
      default:
        l1.innerHTML = '';
        l2.innerHTML = '';
        document.querySelector('#number5').value = 1;
        document.querySelector('#number6').value = 1;
        break;
    }
  }
  if ((length1 === 'NM') && number6 !== '' && number5 !== ''){
    l1.innerHTML = ' NM';
    switch (length2) {
      case 'mm':
        document.querySelector('#number6').value = (parseFloat(number5) * 1852000).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mm';
        break;
      case 'cm':
        document.querySelector('#number6').value = (parseFloat(number5) * 185200).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' cm';
        break;
      case 'm':
        document.querySelector('#number6').value = (parseFloat(number5) * 1852).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' m';
        break;
      case 'km':
        document.querySelector('#number6').value = (parseFloat(number5) * 1.852).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' km';
        break;
      case 'in':
        document.querySelector('#number6').value = (parseFloat(number5) * 72913.385826771).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' in';
        break;
      case 'ft':
        document.querySelector('#number6').value = (parseFloat(number5) * 6076.1154855643).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' ft';
        break;
      case 'yd':
        document.querySelector('#number6').value = (parseFloat(number5) * 2025.3718285214).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' yd';
        break;
      case 'mi':
        document.querySelector('#number6').value = (parseFloat(number5) * 1.150779448).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mi';
        break;
      case 'NM':
        document.querySelector('#number6').value = number5;
        l2.innerHTML = ' NM';
        break;
      case 'mil':
        document.querySelector('#number6').value = (parseFloat(number5) * 72913385.826771).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mil';
        break;
      default:
        l1.innerHTML = '';
        l2.innerHTML = '';
        document.querySelector('#number5').value = 1;
        document.querySelector('#number6').value = 1;
        break;
    }
  }
  if ((length1 === 'mil') && number6 !== '' && number5 !== ''){
    l1.innerHTML = ' mil';
    switch (length2) {
      case 'mm':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0254).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mm';
        break;
      case 'cm':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.00254).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' cm';
        break;
      case 'm':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0000254).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' m';
        break;
      case 'km':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0000000254).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' km';
        break;
      case 'in':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.001).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' in';
        break;
      case 'ft':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0000833333).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' ft';
        break;
      case 'yd':
        document.querySelector('#number6').value = (parseFloat(number5) * 0.0000277778).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' yd';
        break;
      case 'mi': 
        document.querySelector('#number6').value = (parseFloat(number5) * 0.000000016).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' mi';
        break;
      case 'NM': 
        document.querySelector('#number6').value = (parseFloat(number5) * (0.1371490280777538 * Math.pow(10, -8))).toFixed(document.querySelector('#empty').innerHTML);
        l2.innerHTML = ' NM';
        break;
      case 'mil':
        document.querySelector('#number6').value = number5;
        l2.innerHTML = ' mil';
        break;
      default:
        l1.innerHTML = '';
        l2.innerHTML = '';
        document.querySelector('#number5').value = 1;
        document.querySelector('#number6').value = 1;
        break;
    }
  }

    if ((length1 === '')){
      l2.innerHTML = '';
      l1.innerHTML = '';
      document.querySelector('#number6').value = 1;
      document.querySelector('#number5').value = 1;
  }
  if ((length2 === '')){
    l2.innerHTML = '';
    l1.innerHTML = '';
    document.querySelector('#number6').value = 1;
    document.querySelector('#number5').value = 1;
}


}


/*
  -- Function to:
  -- Convert Volume of both an input and select field respectively,
  -- In Gallon(US), Gallon(UK), Litre, Millilitre, Cubic centimetre, Cubic metre, Cubic inch and Cubic foot.

*/
function volume() {
  let volume1 = document.querySelector('#volume1').value;
  let volume2 = document.querySelector('#volume2').value;
  let number7 = document.querySelector('#number7').value;
  let number8 = document.querySelector('#number8').value;
  let v1 = document.querySelector('#v1');
  let v2 = document.querySelector('#v2');
  if ((volume1 === 'galUS') && number8 !== '' && number7 !== ''){
    v1.innerHTML = ' Gal(US)';
    switch (volume2) {
      case 'galUS':
        document.querySelector('#number8').value = number7;
        v2.innerHTML = ' Gal(US)';
        break;
      case 'galUK':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.8326741846).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(UK)';
        break;
      case 'l':
        document.querySelector('#number8').value = (parseFloat(number7) * 3.785411784).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' l';
        break;
      case 'ml':
        document.querySelector('#number8').value = (parseFloat(number7) * 3785.411784).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ml';
        break;
      case 'cc':
        document.querySelector('#number8').value = (parseFloat(number7) * 3785.411784).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' cm&sup3;';
        break;
      case 'm':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0037854118).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' m&sup3;';
        break;
      case 'in':
        document.querySelector('#number8').value = (parseFloat(number7) * 231).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' in&sup3;';
        break;
      case 'ft':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.1336805556).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ft&sup3;';
        break;
      default:
        v1.innerHTML = '';
        v2.innerHTML = '';
        document.querySelector('#number7').value = 1;
        document.querySelector('#number8').value = 1;
        break;
    }
  }
  if ((volume1 === 'galUK') && number8 !== '' && number7 !== ''){
    v1.innerHTML = ' Gal(US)';
    switch (volume2) {
      case 'galUS':
        document.querySelector('#number8').value = (parseFloat(number7) * 1.2009499255).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(US)';
        break;
      case 'galUK':
        document.querySelector('#number8').value = number7;
        v2.innerHTML = ' Gal(UK)';
        break;
      case 'l':
        document.querySelector('#number8').value = (parseFloat(number7) * 4.54609).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' l';
        break;
      case 'ml':
        document.querySelector('#number8').value = (parseFloat(number7) * 4546.09).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ml';
        break;
      case 'cc':
        document.querySelector('#number8').value = (parseFloat(number7) * 4546.09).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' cm&sup3;';
        break;
      case 'm':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.00454609).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' m&sup3;';
        break;
      case 'in':
        document.querySelector('#number8').value = (parseFloat(number7) * 277.4194327916).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' in&sup3;';
        break;
      case 'ft':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.1605436532).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ft&sup3;';
        break;
      default:
        v1.innerHTML = '';
        v2.innerHTML = '';
        document.querySelector('#number7').value = 1;
        document.querySelector('#number8').value = 1;
        break;
    }
  }
  if ((volume1 === 'l') && number8 !== '' && number7 !== ''){
    v1.innerHTML = ' l';
    switch (volume2) {
      case 'galUS':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.2641720524).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(US)';
        break;
      case 'galUK':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.2199692483).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(UK)';
        break;
      case 'l':
        document.querySelector('#number8').value = number7;
        v2.innerHTML = ' l';
        break;
      case 'ml':
        document.querySelector('#number8').value = (parseFloat(number7) * 1000).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ml';
        break;
      case 'cc':
        document.querySelector('#number8').value = (parseFloat(number7) * 1000).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' cm&sup3;';
        break;
      case 'm':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.001).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' m&sup3;';
        break;
      case 'in':
        document.querySelector('#number8').value = (parseFloat(number7) * 61.0237440947).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' in&sup3;';
        break;
      case 'ft':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0353146667).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ft&sup3;';
        break;
      default:
        v1.innerHTML = '';
        v2.innerHTML = '';
        document.querySelector('#number7').value = 1;
        document.querySelector('#number8').value = 1;
        break;
    }
  }
  if ((volume1 === 'ml') && number8 !== '' && number7 !== ''){
    v1.innerHTML = ' ml';
    switch (volume2) {
      case 'galUS':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.000264172).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(US)';
        break;
      case 'galUK':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0002199692).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(UK)';
        break;
      case 'l':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.001).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' l';
        break;
      case 'ml':
        document.querySelector('#number8').value = number7;
        v2.innerHTML = ' ml';
        break;
      case 'cc':
        document.querySelector('#number8').value = (parseFloat(number7) * 1).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' cm&sup3;';
        break;
      case 'm':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.000001).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' m&sup3;';
        break;
      case 'in':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0610237441).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' in&sup3;';
        break;
      case 'ft':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0000353147).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ft&sup3;';
        break;
      default:
        v1.innerHTML = '';
        v2.innerHTML = '';
        document.querySelector('#number7').value = 1;
        document.querySelector('#number8').value = 1;
        break;
    }
  }
  if ((volume1 === 'cc') && number8 !== '' && number7 !== ''){
    v1.innerHTML = ' cm&sup3;';
    switch (volume2) {
      case 'galUS':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.000264172).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(US)';
        break;
      case 'galUK':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0002199692).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(UK)';
        break;
      case 'l':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.001).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' l';
        break;
      case 'ml':
        document.querySelector('#number8').value = (parseFloat(number7) * 1).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ml';
        break;
      case 'cc':
        document.querySelector('#number8').value = number7;
        v2.innerHTML = ' cm&sup3;';
        break;
      case 'm':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.000001).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' m&sup3;';
        break;
      case 'in':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0610237441).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' in&sup3;';
        break;
      case 'ft':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0000353147).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ft&sup3;';
        break;
      default:
        v1.innerHTML = '';
        v2.innerHTML = '';
        document.querySelector('#number7').value = 1;
        document.querySelector('#number8').value = 1;
        break;
    }
  }
  if ((volume1 === 'm') && number8 !== '' && number7 !== ''){
    v1.innerHTML = ' m&sup3;';
    switch (volume2) {
      case 'galUS':
        document.querySelector('#number8').value = (parseFloat(number7) * 264.1720523581).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(US)';
        break;
      case 'galUK':
        document.querySelector('#number8').value = (parseFloat(number7) * 219.9692482991).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(UK)';
        break;
      case 'l':
        document.querySelector('#number8').value = (parseFloat(number7) * 1000).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' l';
        break;
      case 'ml':
        document.querySelector('#number8').value = (parseFloat(number7) * 1000000).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ml';
        break;
      case 'cc':
        document.querySelector('#number8').value = (parseFloat(number7) * 1000000).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' cm&sup3;';
        break;
      case 'm':
        document.querySelector('#number8').value = number7;
        
        v2.innerHTML = ' m&sup3;';
        break;
      case 'in':
        document.querySelector('#number8').value = (parseFloat(number7) * 61023.744094732).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' in&sup3;';
        break;
      case 'ft':
        document.querySelector('#number8').value = (parseFloat(number7) * 35.3146667215).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ft&sup3;';
        break;
      default:
        v1.innerHTML = '';
        v2.innerHTML = '';
        document.querySelector('#number7').value = 1;
        document.querySelector('#number8').value = 1;
        break;
    }
  }
  if ((volume1 === 'in') && number8 !== '' && number7 !== ''){
    v1.innerHTML = ' in&sup3;';
    switch (volume2) {
      case 'galUS':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0043290043).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(US)';
        break;
      case 'galUK':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0036046501).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(UK)';
        break;
      case 'l':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.016387064).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' l';
        break;
      case 'ml':
        document.querySelector('#number8').value = (parseFloat(number7) * 16.387064).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ml';
        break;
      case 'cc':
        document.querySelector('#number8').value = (parseFloat(number7) * 16.387064).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' cm&sup3;';
        break;
      case 'm':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0000163871).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' m&sup3;';
        break;
      case 'in':
        document.querySelector('#number8').value = number7;
        v2.innerHTML = ' in&sup3;';
        break;
      case 'ft':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0005787037).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ft&sup3;';
        break;
      default:
        v1.innerHTML = '';
        v2.innerHTML = '';
        document.querySelector('#number7').value = 1;
        document.querySelector('#number8').value = 1;
        break;
    }
  }
  if ((volume1 === 'ft') && number8 !== '' && number7 !== ''){
    v1.innerHTML = ' ft&sup3;';
    switch (volume2) {
      case 'galUS':
        document.querySelector('#number8').value = (parseFloat(number7) * 7.4805194805).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(US)';
        break;
      case 'galUK':
        document.querySelector('#number8').value = (parseFloat(number7) * 6.228835459).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' Gal(UK)';
        break;
      case 'l':
        document.querySelector('#number8').value = (parseFloat(number7) * 28.316846592).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' l';
        break;
      case 'ml':
        document.querySelector('#number8').value = (parseFloat(number7) * 28316.846592).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' ml';
        break;
      case 'cc':
        document.querySelector('#number8').value = (parseFloat(number7) * 28316.846592).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' cm&sup3;';
        break;
      case 'm':
        document.querySelector('#number8').value = (parseFloat(number7) * 0.0283168466).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' m&sup3;';
        break;
      case 'in':
        document.querySelector('#number8').value = (parseFloat(number7) * 1728).toFixed(document.querySelector('#empty').innerHTML);
        v2.innerHTML = ' in&sup3;';
        break;
      case 'ft':
        document.querySelector('#number8').value = number7;
        v2.innerHTML = ' ft&sup3;';
        break;
      default:
        v1.innerHTML = '';
        v2.innerHTML = '';
        document.querySelector('#number7').value = 1;
        document.querySelector('#number8').value = 1;
        break;
    }
  }
 

    if ((volume1 === '')){
      v2.innerHTML = '';
      v1.innerHTML = '';
      document.querySelector('#number8').value = 1;
      document.querySelector('#number7').value = 1;
  }
  if ((volume2 === '')){
    v2.innerHTML = '';
    v1.innerHTML = '';
    document.querySelector('#number8').value = 1;
    document.querySelector('#number7').value = 1;
}


}


/*
  -- Function to:
  -- Convert Mass of both an input and select field respectively,
  -- In Ton, Ton(UK), Ton(US), Pound, Ounce, Kilogram and Gram.

*/
function mass() {
  let mass1 = document.querySelector('#mass1').value;
  let mass2 = document.querySelector('#mass2').value;
  let number9 = document.querySelector('#number9').value;
  let number10 = document.querySelector('#number10').value;
  let m1 = document.querySelector('#m1');
  let m2 = document.querySelector('#m2');
  if ((mass1 === 't') && number10 !== '' && number9 !== ''){
    m1.innerHTML = ' t';
    switch (mass2) {
      case 't':
        document.querySelector('#number10').value = number9;
        m2.innerHTML = ' t';
        break;
      case 'tUK':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.9842065276).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t(UK)';
        break;
      case 'tUS':
        document.querySelector('#number10').value = (parseFloat(number9) * 1.1023113109).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t(US)';
        break;
      case 'lb':
        document.querySelector('#number10').value = (parseFloat(number9) * 2204.6226218488).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' lb';
        break;
      case 'oz':
        document.querySelector('#number10').value = (parseFloat(number9) * 35273.96194958).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' oz';
        break;
      case 'kg':
        document.querySelector('#number10').value = (parseFloat(number9) * 1000).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' kg';
        break;
      case 'g':
        document.querySelector('#number10').value = (parseFloat(number9) * 1000000).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' g';
        break;
      default:
        m1.innerHTML = '';
        m2.innerHTML = '';
        document.querySelector('#number9').value = 1;
        document.querySelector('#number10').value = 1;
        break;
    }
  }
  if ((mass1 === 'tUK') && number10 !== '' && number9 !== ''){
    m1.innerHTML = ' t(UK)';
    switch (mass2) {
      case 't':
        document.querySelector('#number10').value = (parseFloat(number9) * 1.0160469088).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t';
        break;
      case 'tUK':
        document.querySelector('#number10').value = number9;
        m2.innerHTML = ' t(UK)';
        break;
      case 'tUS':
        document.querySelector('#number10').value = (parseFloat(number9) * 1.12).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t(US)';
        break;
      case 'lb':
        document.querySelector('#number10').value = (parseFloat(number9) * 2204).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' lb';
        break;
      case 'oz':
        document.querySelector('#number10').value = (parseFloat(number9) * 35840).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' oz';
        break;
      case 'kg':
        document.querySelector('#number10').value = (parseFloat(number9) * 1016.0469088).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' kg';
        break;
      case 'g':
        document.querySelector('#number10').value = (parseFloat(number9) * 1016046.9088).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' g';
        break;
      default:
        m1.innerHTML = '';
        m2.innerHTML = '';
        document.querySelector('#number9').value = 1;
        document.querySelector('#number10').value = 1;
        break;
    }
  }
  if ((mass1 === 'tUS') && number10 !== '' && number9 !== ''){
    m1.innerHTML = ' t(US)';
    switch (mass2) {
      case 't':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.90718474).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t';
        break;
      case 'tUK':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.8928571429).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t(UK)';
        break;
      case 'tUS':
        document.querySelector('#number10').value = number9;
        m2.innerHTML = ' t(US)';
        break;
      case 'lb':
        document.querySelector('#number10').value = (parseFloat(number9) * 2000).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' lb';
        break;
      case 'oz':
        document.querySelector('#number10').value = (parseFloat(number9) * 32000).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' oz';
        break;
      case 'kg':
        document.querySelector('#number10').value = (parseFloat(number9) * 907.18474).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' kg';
        break;
      case 'g':
        document.querySelector('#number10').value = (parseFloat(number9) * 907184.74).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' g';
        break;
      default:
        m1.innerHTML = '';
        m2.innerHTML = '';
        document.querySelector('#number9').value = 1;
        document.querySelector('#number10').value = 1;
        break;
    }
  }
  if ((mass1 === 'lb') && number10 !== '' && number9 !== ''){
    m1.innerHTML = ' lb';
    switch (mass2) {
      case 't':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0004535924).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t';
        break;
      case 'tUK':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0004464286).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t(UK)';
        break;
      case 'tUS':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0005).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t(US)';
        break;
      case 'lb':
        document.querySelector('#number10').value = number9;
        m2.innerHTML = ' lb';
        break;
      case 'oz':
        document.querySelector('#number10').value = (parseFloat(number9) * 16).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' oz';
        break;
      case 'kg':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.45359237).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' kg';
        break;
      case 'g':
        document.querySelector('#number10').value = (parseFloat(number9) * 453.59237).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' g';
        break;
      default:
        m1.innerHTML = '';
        m2.innerHTML = '';
        document.querySelector('#number9').value = 1;
        document.querySelector('#number10').value = 1;
        break;
    }
  }
  if ((mass1 === 'oz') && number10 !== '' && number9 !== ''){
    m1.innerHTML = ' oz';
    switch (mass2) {
      case 't':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0000283495).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t';
        break;
      case 'tUK':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0000279017).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t(UK)';
        break;
      case 'tUS':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.00003125).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t(US)';
        break;
      case 'lb':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0625).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' lb';
        break;
      case 'oz':
        document.querySelector('#number10').value = number9;
        m2.innerHTML = ' oz';
        break;
      case 'kg':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0283495231).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' kg';
        break;
      case 'g':
        document.querySelector('#number10').value = (parseFloat(number9) * 28.349523125).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' g';
        break;
      default:
        m1.innerHTML = '';
        m2.innerHTML = '';
        document.querySelector('#number9').value = 1;
        document.querySelector('#number10').value = 1;
        break;
    }
  }
  if ((mass1 === 'kg') && number10 !== '' && number9 !== ''){
    m1.innerHTML = ' kg';
    switch (mass2) {
      case 't':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.001).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t';
        break;
      case 'tUK':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0009842065).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t(UK)';
        break;
      case 'tUS':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0011023113).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t(US)';
        break;
      case 'lb':
        document.querySelector('#number10').value = (parseFloat(number9) * 2.2046226218).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' lb';
        break;
      case 'oz':
        document.querySelector('#number10').value = (parseFloat(number9) * 35.2739619496).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' oz';
        break;
      case 'kg':
        document.querySelector('#number10').value = number9;
        m2.innerHTML = ' kg';
        break;
      case 'g':
        document.querySelector('#number10').value = (parseFloat(number9) * 1000).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' g';
        break;
      default:
        m1.innerHTML = '';
        m2.innerHTML = '';
        document.querySelector('#number9').value = 1;
        document.querySelector('#number10').value = 1;
        break;
    }
  }
  if ((mass1 === 'g') && number10 !== '' && number9 !== ''){
    m1.innerHTML = ' g';
    switch (mass2) {
      case 't':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.000001).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t';
        break;
      case 'tUK':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0000009842).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t(UK)';
        break;
      case 'tUS':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0000011023).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' t(US)';
        break;
      case 'lb':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0022046226).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' lb';
        break;
      case 'oz':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.0352739619).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' oz';
        break;
      case 'kg':
        document.querySelector('#number10').value = (parseFloat(number9) * 0.001).toFixed(document.querySelector('#empty').innerHTML);
        m2.innerHTML = ' kg';
        break;
      case 'g':
        document.querySelector('#number10').value = number9;
        m2.innerHTML = ' g';
        break;
      default:
        m1.innerHTML = '';
        m2.innerHTML = '';
        document.querySelector('#number9').value = 1;
        document.querySelector('#number10').value = 1;
        break;
    }
  } 

    if ((mass1 === '')){
      m2.innerHTML = '';
      m1.innerHTML = '';
      document.querySelector('#number10').value = 1;
      document.querySelector('#number9').value = 1;
  }
  if ((mass2 === '')){
    m2.innerHTML = '';
    m1.innerHTML = '';
    document.querySelector('#number10').value = 1;
    document.querySelector('#number9').value = 1;
}


}

/*
  -- Function to:
  -- Convert Data of both an input and select field respectively,
  -- In Bit, Byte, Kilobyte, Megabyte, Gigabyte and Terabyte.

*/
function data() {
  let data1 = document.querySelector('#data1').value;
  let data2 = document.querySelector('#data2').value;
  let number11 = document.querySelector('#number11').value;
  let number12 = document.querySelector('#number12').value;
  let d1 = document.querySelector('#d1');
  let d2 = document.querySelector('#d2');
  if ((data1 === 'bit') && number12 !== '' && number11 !== ''){
    d1.innerHTML = ' bit';
    switch (data2) {
      case 'bit':
        document.querySelector('#number12').value = number11;
        d2.innerHTML = ' bit';
        break;
      case 'b':
        document.querySelector('#number12').value = (parseFloat(number11) * 0.125).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' B';
        break;
      case 'kb':
        document.querySelector('#number12').value = (parseFloat(number11) * 0.0001220703).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' KB';
        break;
      case 'mb':  
        document.querySelector('#number12').value = (parseFloat(number11) * (1.1920928955078125 * Math.pow(10, -7))).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' MB';
        break;
      case 'gb':  
        document.querySelector('#number12').value = (parseFloat(number11) * (1.1641532182693481 * Math.pow(10, -10))).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' GB';
        break;
      case 'tb':  
        document.querySelector('#number12').value = (parseFloat(number11) * (1.1368683772161603 * Math.pow(10, -13))).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' TB';
        break;
      default:
        d1.innerHTML = '';
        d2.innerHTML = '';
        document.querySelector('#number11').value = 1;
        document.querySelector('#number12').value = 1;
        break;
    }
  }
  if ((data1 === 'b') && number12 !== '' && number11 !== ''){
    d1.innerHTML = ' B';
    switch (data2) {
      case 'bit':
        document.querySelector('#number12').value = (parseFloat(number11) * 8).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' bit';
        break;
      case 'b':
        document.querySelector('#number12').value = number11;
        d2.innerHTML = ' B';
        break;
      case 'kb':
        document.querySelector('#number12').value = (parseFloat(number11) * 0.0009765625).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' KB';
        break;
      case 'mb':  
        document.querySelector('#number12').value = (parseFloat(number11) * 0.0000009537).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' MB';
        break;
      case 'gb': 
        document.querySelector('#number12').value = (parseFloat(number11) * 0.0000000009).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' GB';
        break;
      case 'tb':  
        document.querySelector('#number12').value = (parseFloat(number11) * (9.094947017729282 * Math.pow(10, -13))).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' TB';
        break;
      default:
        d1.innerHTML = '';
        d2.innerHTML = '';
        document.querySelector('#number11').value = 1;
        document.querySelector('#number12').value = 1;
        break;
    }
  }
  if ((data1 === 'kb') && number12 !== '' && number11 !== ''){
    d1.innerHTML = ' KB';
    switch (data2) {
      case 'bit':
        document.querySelector('#number12').value = (parseFloat(number11) * 8.192).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' bit';
        break;
      case 'b':
        document.querySelector('#number12').value = (parseFloat(number11) * 1024).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' B';
        break;
      case 'kb':
        document.querySelector('#number12').value = number11;
        d2.innerHTML = ' KB';
        break;
      case 'mb': 
        document.querySelector('#number12').value = (parseFloat(number11) * 0.0009765625).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' MB';
        break;
      case 'gb':  
        document.querySelector('#number12').value = (parseFloat(number11) * 0.0000009537).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' GB';
        break;
      case 'tb':  
        document.querySelector('#number12').value = (parseFloat(number11) * 0.0000000009).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' TB';
        break;
      default:
        d1.innerHTML = '';
        d2.innerHTML = '';
        document.querySelector('#number11').value = 1;
        document.querySelector('#number12').value = 1;
        break;
    }
  }
  if ((data1 === 'mb') && number12 !== '' && number11 !== ''){
    d1.innerHTML = ' MB';
    switch (data2) {
      case 'bit':
        document.querySelector('#number12').value = (parseFloat(number11) * 8388608).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' bit';
        break;
      case 'b':
        document.querySelector('#number12').value = (parseFloat(number11) * 1048576).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' B';
        break;
      case 'kb':
        document.querySelector('#number12').value = (parseFloat(number11) * 1024).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' KB';
        break;
      case 'mb':  
        document.querySelector('#number12').value = number11;
        d2.innerHTML = ' MB';
        break;
      case 'gb':  
        document.querySelector('#number12').value = (parseFloat(number11) * 0.0009765625).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' GB';
        break;
      case 'tb':  
        document.querySelector('#number12').value = (parseFloat(number11) * 0.0000009537).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' TB';
        break;
      default:
        d1.innerHTML = '';
        d2.innerHTML = '';
        document.querySelector('#number11').value = 1;
        document.querySelector('#number12').value = 1;
        break;
    }
  }
  if ((data1 === 'gb') && number12 !== '' && number11 !== ''){
    d1.innerHTML = ' GB';
    switch (data2) {
      case 'bit':
        document.querySelector('#number12').value = (parseFloat(number11) * 8589934592).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' bit';
        break;
      case 'b':
        document.querySelector('#number12').value = (parseFloat(number11) * 1073741824).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' B';
        break;
      case 'kb':
        document.querySelector('#number12').value = (parseFloat(number11) * 1048576).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' KB';
        break;
      case 'mb':  
        document.querySelector('#number12').value = (parseFloat(number11) * 1024).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' MB';
        break;
      case 'gb': 
        document.querySelector('#number12').value = number11;
        d2.innerHTML = ' GB';
        break;
      case 'tb':  
        document.querySelector('#number12').value = (parseFloat(number11) * 0.0009765625).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' TB';
        break;
      default:
        d1.innerHTML = '';
        d2.innerHTML = '';
        document.querySelector('#number11').value = 1;
        document.querySelector('#number12').value = 1;
        break;
    }
  }
  if ((data1 === 'tb') && number12 !== '' && number11 !== ''){
    d1.innerHTML = ' TB';
    switch (data2) {
      case 'bit':
        document.querySelector('#number12').value = (parseFloat(number11) * 8796093022208).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' bit';
        break;
      case 'b':
        document.querySelector('#number12').value = (parseFloat(number11) * 1099511627776).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' B';
        break;
      case 'kb':
        document.querySelector('#number12').value = (parseFloat(number11) * 1073741824).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' KB';
        break;
      case 'mb':  
        document.querySelector('#number12').value = (parseFloat(number11) * 1048576).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' MB';
        break;
      case 'gb':  
        document.querySelector('#number12').value = (parseFloat(number11) * 1024).toFixed(document.querySelector('#empty').innerHTML);
        d2.innerHTML = ' GB';
        break;
      case 'tb':  
        document.querySelector('#number12').value = number11;
        d2.innerHTML = ' TB';
        break;
      default:
        d1.innerHTML = '';
        d2.innerHTML = '';
        document.querySelector('#number11').value = 1;
        document.querySelector('#number12').value = 1;
        break;
    }
  }
 
    if ((data1 === '')){
      d2.innerHTML = '';
      d1.innerHTML = '';
      document.querySelector('#number12').value = 1;
      document.querySelector('#number11').value = 1;
  }
  if ((data2 === '')){
    d2.innerHTML = '';
    d1.innerHTML = '';
    document.querySelector('#number12').value = 1;
    document.querySelector('#number11').value = 1;
}


}