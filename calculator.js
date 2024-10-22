


function add (numbr1, numbr2) {
  return (numbr1 + numbr2);
}

function sub(numbr1,numbr2){
  return(numbr1-numbr2);
}
 
function mul (numbr1, numbr2) {
  return numbr1*numbr2;
}

function divide (numbr1, numbr2) {
  return numbr1/numbr2;
}


document.getElementById("add").addEventListener('click',function(){
 const one = parseFloat (document.getElementById ('number1').value) || 0;
const two = parseFloat (document.getElementById ('number2').value) || 0;

  const result = add (one, two);
document.getElementById("calculation-result").textContent=result;
});

document.getElementById ('subtract').addEventListener ('click', function () {
  const one = parseFloat (document.getElementById ('number1').value) || 0;
  const two = parseFloat (document.getElementById ('number2').value) || 0;

  const result = sub (one, two);
  document.getElementById ('calculation-result').textContent = result;
});

document.getElementById ('multiply').addEventListener ('click', function () {
  const one = parseFloat (document.getElementById ('number1').value) || 0;
  const two = parseFloat (document.getElementById ('number2').value) || 0;

  const result = mul (one, two);
  document.getElementById ('calculation-result').textContent = result;
});


document.getElementById ('divide').addEventListener ('click', function () {
  const one = parseFloat (document.getElementById ('number1').value) || 0;
  const two = parseFloat (document.getElementById ('number2').value) || 0;

  const result = divide (one, two);
  document.getElementById ('calculation-result').textContent = result;
});
