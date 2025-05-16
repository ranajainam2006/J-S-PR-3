function add() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let sum = Number(num1) + Number(num2);

    let result =`Addtion of ${num1} & ${num2}=${sum}`;
    document.getElementById('answer').innerHTML = result;

}

function sub() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let sub = Number(num1)-Number(num2);

    let result =`subrection of ${num1} & ${num2}=${sub}`;
    
    
    document.getElementById('answer').innerHTML = result;

}

function multi() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let multi = Number(num1) * Number(num2);


    let result =`Multipale of ${num1} & ${num2}=${multi}`;

    document.getElementById('answer').innerHTML = result;

}

function div() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let div = Number(num1)/Number(num2);

    
    let result =`Divde of ${num1} & ${num2}=${div}`;

    document.getElementById('answer').innerHTML = result;

}