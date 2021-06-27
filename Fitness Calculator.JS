function main () {
    var height = parseFloat(document.getElementById('Height').value);
    var weight = parseFloat(document.getElementById('Weight').value);
  
    var imc = weight / (height/100)**2;
    imc = imc.toFixed(2);
  
    if (imc > 0 && imc <= 15) {
      document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>You are <span>very severely underweight.Join Gym to build up the muscles</span>.';
    } else if (imc > 15 && imc <= 16) {
      document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>You are <span>severely underweight.Join Gym to build up the muscles</span>.';
    } else if (imc > 16 && imc <= 18.5) {
      document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>You are <span>Underweight.Join Gym to build up the muscles</span>.';
    } else if (imc > 18.5 && imc <= 25) {
      document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>You are <span>maintaining healthy weight.Join Gym to build up the muscles</span>.';
    } else if (imc > 25 && imc <= 30) {
      document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>You are <span>Overweight.Consider joining the Gym</span>.';
    } else if (imc > 30 && imc <= 35) {
      document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>You are <span> Moderately obese.Consider joining the Gym</span>.';
    } else if (imc > 35 && imc <= 40) {
      document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>You are <span> Severely obese.Consider joining the Gym</span>.';
    } else if (imc > 40 && imc <= 45) {
      document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>You are <span> Very severely obese.Consider joining the Gym</span>.';
    } else if (imc > 45 && imc <= 50) {
      document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>You are <span> Morbidly Obese.Consider joining the Gym</span>.';
    } else if (imc > 50 && imc <= 60) {
      document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>You are <span> Super Obese.Hit the Gym right away!</span>';
    } else if (imc > 60) {
      document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>You are <span> Hyper Obese.Hit the Gym right away!</span>';
    } else {
      document.getElementById('output').innerHTML = 'Please type valid numbers.';
    }
  }