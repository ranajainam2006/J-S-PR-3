

function sum(chioce) {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;


    let output;
    let op;

    switch (chioce) {
        case 1:
            output = Number(num1) + Number(num2);
            op = 'Addtion';
            break;
        case 2:
            output = num1 - num2;
            op = 'subtriction';
            break;
        case 3:
            output = num1 * num2;
            op = 'multipal';
            break;
        case 4:
            output = (num1 / num2).toFixed(2);

            op = 'divde';
            break;


    }
    const result = `${op} ${num1} AND ${num2} = ${output}`
    document.getElementById('answer').innerHTML = result;


}