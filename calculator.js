 const one=parseFloat(document.getElementById("number1").value)||0; 
 const two=parseFloat(document.getElementById("number2").value)||0;

function add (numbr1, numbr2) {
  return numbr1 + numbr2;
}


document.getElementById("add").addEventListener('click',function(){
  const result = add (one, two);
document.getElementById("calculation-result").textContent=result;
});

