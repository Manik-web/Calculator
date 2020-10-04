let current= '';
let a;
let b;

let display = document.querySelector("#display");
display.innerHTML = 'This is a calculator';

let displayInput = (event)=>{
    current += event.toElement.innerHTML;
    display.innerHTML = current;
}

let add = (a,b) =>{
    console.log(a+b);
    return a+b;
}
let subtract = (a,b) =>{
    console.log(a-b);
    return a-b;
}

let divide = (a,b) =>{
    if(b===0){
        return "You can't divide by 0!!!"
    }
    console.log(a/b);
    return a/b;
}
let multiply = (a,b) =>{
    console.log(a*b);
    return a*b;
}

let operate = (a, b, operation)=>{
    switch(operation){
        case add: return add(a,b);break;
        case subtract:return subtract(a,b);break;
        case divide: return divide(a,b);break;
        case multiply: return multiply(a,b);break;
    }
}



/*console.log(divide(5,2));
console.log(divide(5,0));*/

console.log(operate(12, 4, subtract));
let digits = document.getElementById('digits');
digits.addEventListener('click',displayInput);