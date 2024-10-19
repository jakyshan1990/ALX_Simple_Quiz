let btn1 = document.getElementById ('submit-answer');

btn1.addEventListener ('click', checkAnswer);


function checkAnswer(){

let correctAnswer="4";
let userAnswer="0";

userAnswer=document.querySelector('input[name=quiz]:checked').value;


if(userAnswer === correctAnswer){
    document.getElementById("feedback").innerHTML="Correct! Well done.";
}
else {
   document.getElementById ('feedback').innerHTML = "That's incorrect. Try again!";
 
}

}
