function checkAnswer(){
let correctAnswer=4;userAnswer=0;
userAnswer=document.querySelector('input[name=quiz]:checked').value;
console.log(userAnswer);
if(userAnswer==correctAnswer){
    document.getElementById("feedback").innerHTML="Correct! Well done.";
}
}
let btn1=document.getElementById("submit-answer");
btn1.addEventListener("submit",checkAnswer());