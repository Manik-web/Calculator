let current= '';
let a;
let b;
let c;
let tempOps;

let display = document.querySelector("#display");
display.innerText = 'This is a calculator';


//numbers typed-> display
let displayInput = (event)=>{
    if(current ==='CLEARED'){
        current = '';
    }

    current += event.toElement.innerHTML;
    display.innerHTML = current;
    
}

//if an operator is pressed
let displayOperate = (event)=>{
    let ops = event.toElement.id;


    if(a===undefined){
        a=parseFloat(current);
        current ='';
        tempOps = ops;
    }else if(a!==undefined){
        b=parseFloat(current);
        console.log(a,b,ops);
        console.log(a,b,tempOps + 'temp');
        a =operate(a,b,tempOps);
        tempOps = ops;
        
        current = a.toString();
        display.innerHTML = current;
        b=c;
    }
    current='';
}

//clr button
let clearScreen = (event)=>{
    a=c;
    b=c;
    current='CLEARED';
    display.innerHTML = current;
}
//if equals is pressed
let calculate = (event)=>{
    if(a!==undefined){
        b=parseFloat(current);
        a=operate(a,b,tempOps);
        current=a.toString();
        display.innerHTML = current;
        b=c;
    }current = '0';
}

let add = (a,b) =>{
    return a+b;
}
let subtract = (a,b) =>{
    return a-b;
}

let divide = (a,b) =>{
    if(b===0){
        return "You can't divide by 0!!!"
    }
    return a/b;
}
let multiply = (a,b) =>{
    return a*b;
}

let operate = (a, b, operation)=>{
    switch(operation){
        case 'add': return add(a,b);break;
        case 'subtract':return subtract(a,b);break;
        case 'divide': return divide(a,b);break;
        case 'multiply': return multiply(a,b);break;
    }
}



/*console.log(divide(5,2));
console.log(divide(5,0));*/

let digits = document.getElementById('digits');
digits.addEventListener('click',displayInput);

let operators = document.getElementById('operators');
operators.addEventListener('click',displayOperate);

let clear =document.getElementById('clear');
clear.addEventListener('click',clearScreen);

let equals = document.getElementById('equals');
equals.addEventListener('click', calculate);