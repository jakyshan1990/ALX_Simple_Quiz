let btn1 = document.getElementById ('submit-answer');

btn1.addEventListener ('click', checkAnswer);


function checkAnswer(){

var correctAnswer="4";
var userAnswer="0";

userAnswer=document.querySelector('input[name=quiz]:checked').value;


if(userAnswer === correctAnswer){
    document.getElementById("feedback").textContent="Correct! Well done.";
}
else {
   document.getElementById ('feedback').textContent = "That's incorrect. Try again!";
 
}

}
