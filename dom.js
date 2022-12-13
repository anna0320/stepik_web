btnElement = document.querySelector(".submit");
resultElement = document.querySelector(".result");
nameElement = document.querySelector("#firstName");
lastNameElement = document.querySelector("#lastName");
btnElement.addEventListener("click", function(){
    resultElement.innerHTML = `Здравствуйте, ${nameElement.value} ${lastNameElement.value}!`;
});