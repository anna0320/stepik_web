btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
checkButtons = document.querySelectorAll('[name="food"]');
btnElement.addEventListener("click", function(){
let total = 0;
for (const checkButton of checkButtons){
if(checkButton.checked){
    valueCheck = parseInt(checkButton.value);
    total = total + valueCheck;
}
resultElement.innerHTML =  total;
}});