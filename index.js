let pinGeneratorBtn = document.getElementById("pin-generator-btn");
pinGeneratorBtn.addEventListener("click", function(){
    let randomNumber= parseInt(Math.floor(1000 + Math.random() * 9000));
    let pinNumber =document.getElementById("pin-number");
    pinNumber.value = randomNumber;
    document.getElementById("pin-number").innerText = randomNumber;
})


