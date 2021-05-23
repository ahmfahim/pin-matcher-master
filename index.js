// get button id and set addEventlistener
function getBtnId(idName, callback){
	document.getElementById(idName).addEventListener("click" , callback)
};
function getId(id){
    document.getElementById(id);
}

//pin generator
let pinNumber =document.getElementById("pin-number");
let generatorBtn = getBtnId("pin-generator-btn", function(){
    let randomNumber= parseInt(Math.floor(1000 + Math.random() * 9000));
    document.querySelector('.action-left').innerHTML = 3+' try left'
    pinNumber.value = randomNumber;
    document.getElementById("pin-number").innerText = randomNumber;

    document.getElementById("right-pin").style.display ="none";
    document.getElementById("wrong-pin").style.display = "none";
    document.querySelector('.action-left').style.display = "none"
})

// get input-submit-pin id
let inputSubmitPin = document.getElementById("input-submit-pin");

// button
let seven = getBtnId("btn-7", ()=>{inputSubmitPin.value += 7;});
let eight = getBtnId("btn-8", ()=>{inputSubmitPin.value += 8;});
let nine = getBtnId("btn-9", ()=>{inputSubmitPin.value += 9;});
let four = getBtnId("btn-4", ()=>{inputSubmitPin.value += 4;});
let five = getBtnId("btn-5", ()=>{inputSubmitPin.value += 5;});
let six = getBtnId("btn-6", ()=>{inputSubmitPin.value += 6;});
let one = getBtnId("btn-1", ()=>{inputSubmitPin.value += 1;});
let two = getBtnId("btn-2", ()=>{inputSubmitPin.value += 2;});
let three = getBtnId("btn-3", ()=>{inputSubmitPin.value += 3;});
let zero = getBtnId("btn-0", ()=>{inputSubmitPin.value += 0;});
let delet = getBtnId("btn-delet", ()=>{inputSubmitPin.value = (inputSubmitPin.value).slice(0, -1);});
let clear = getBtnId("btn-clear", ()=>{inputSubmitPin.value ="" ;});

// submit section
let count = 2;
let submitBtn = getBtnId("submit-btn", ()=>{
    if(pinNumber.value == ''){
        alert('Generate Your Pin');
    }else if(inputSubmitPin.value == ''){
        alert("Enter the pin that you generate!");
    }else if(inputSubmitPin.value == pinNumber.value){
        document.getElementById("right-pin").style.display ="block";
        document.getElementById("wrong-pin").style.display = "none";
        inputSubmitPin.value = '';
        pinNumbe.value = '';
        document.querySelector('.action-left').innerHTML = ''
    }else{
        document.getElementById("right-pin").style.display ="none";
        document.getElementById("wrong-pin").style.display = "block";
        if(count < 1){
            document.querySelector('.action-left').innerHTML = 'No more try';
            inputSubmitPin.value = '';
            pinNumber.value = '';
        }else{
            document.querySelector('.action-left').style.display = "block";
            document.querySelector('.action-left').innerHTML = count-- + ' try left';
            inputSubmitPin.value = '';
        }
    }
});