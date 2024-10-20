let btn1 = document.getElementById ('submit-answer');

btn1.addEventListener ('click', checkAnswer);


function checkAnswer(){

let correctAnswer="4";
let userAnswer="0";
let txt1="0";

userAnswer=document.querySelector('input[name=quiz]:checked').value;

if(userAnswer === correctAnswer){
    txt1="Correct! Well done.";
}
else {
   txt1 = "That's incorrect. Try again!";
 
}
document.getElementById ('feedback').textContent = txt1;

}
