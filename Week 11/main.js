let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){

    let clear = document.querySelector("#clear-btn");
    let equal = document.querySelector(".btn.equal");
    let decimal = document.querySelector(".btn.decimal");

    let numbers = document.querySelectorAll(".btn.number");
    let operators = document.querySelectorAll(".btn.operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = previousValue + " " + operator + " " + currentValue + " ";
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = " ";
        currentScreen.textContent = previousValue + " " + operator + " " + currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        if(currentValue != '' && previousValue != '' && currentValue != '0'){
            operate()
            previousScreen.textContent = currentScreen.textContent;
            if(previousValue.length <= 5){
                currentScreen.textContent = previousValue;
            } else{
                currentScreen.textContent = previousValue.slice(0,5) + "...";
            }
        } else{
            currentScreen.textContent = "huh?";
        }
    })

    decimal.addEventListener("click", function(){
        addDecimal();
    })
})

function handleNumber(num){
    if(currentValue.length <= 5){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function operate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "*"){
        previousValue *= currentValue;
    } else{
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}
