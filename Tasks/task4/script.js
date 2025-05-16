       function sum(choice) {
            let num1 = Number(document.getElementById('num1').value);
            let num2 = Number(document.getElementById('num2').value);

            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('answer').innerHTML = "Please enter valid numbers.";
                return;
            }

            let output;
            let op;

            switch (Number(choice)) {
                case 1:
                    output = num1 + num2;
                    op = 'Addition';
                    break;
                case 2:
                    output = num1 - num2;
                    op = 'Subtraction';
                    break;
                case 3:
                    output = num1 * num2;
                    op = 'Multiplication';
                    break;
                case 4:
                    output = (num1 / num2).toFixed(2);
                    op = 'Division';
                    break;
            }

            const result = `${op}: ${num1} and ${num2} = ${output}`;
            document.getElementById('answer').innerHTML = result;

            
            
        }