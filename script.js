//functions for math equations
function addition(num1, num2){
    return Math.round((+num1 + +num2) * 100) / 100;
}

function subtraction(num1, num2){
    return Math.round((num1 - num2) * 100) / 100;
}

function multiply(num1, num2){
    return Math.round((num1 *num2) * 100) / 100;
}

function divison(num1, num2){
    return Math.round((num1/num2) * 100) / 100;
}

function clearObj(obj){
    obj.num1 = ''; obj.num2 = '';
}

function operate(obj){
    const answer = (obj.oper === "+") ? addition(obj.num1, obj.num2): 
           (obj.oper === "-") ? subtraction(obj.num1, obj.num2):
           (obj.oper === "*" || obj.oper === 'x') ? multiply(obj.num1, obj.num2):
           (obj.oper === "/") ? divison(obj.num1, obj.num2): console.log("incorrect arguments");
    clearObj(equation); equation.oper = '';
    return answer;
}

//number functions
function inputValues(value){
    if (equation.oper === ''){
        if (value === '.' && equation.num1.includes('.')){
            output.textContent = 'NaN';
        } else {
            output.textContent = equation.num1 + value;
            equation.num1 = equation.num1 + value;}
    } else if (equation.oper !== ''){
        if (value === '.' && equation.num2.includes('.')){
            output.textContent = 'NaN';
        } else {
            output.textContent = equation.num2 + value;
            equation.num2 = equation.num2 + value;}
    }
}

function inputOperator(operator){
    if (equation.num2 !== ''){
        equation.ans = operate(equation);
        clearObj(equation);
        equation.num1 = equation.ans;
        output.textContent = operator;
        equation.oper = operator;
    } else {
        switch (operator){
            case '+':
                output.textContent = '+';
                equation.oper = '+';
                break;
            case '-':
                output.textContent = '-';
                equation.oper = '-';
                break;
            case '/':
                output.textContent = '÷';
                equation.oper = '/';
                break;
            case '*':
                output.textContent = 'x';
                equation.oper = '*';
                break;
        }
    }
}

    //functions for events
    function equalsEvent(){
        let answer = operate(equation);
        output.textContent = ` = ${answer}`;
        console.log(answer);
    }

    function clearAll(){
        output.textContent = ''; 
        equation.num1 = ''; 
        equation.num2 = ''; 
        equation.oper = ''; 
        equation.ans = '';
    }

    function deleteLast(){
        if (equation.num2 !== ''){
            equation.num2 = equation.num2.slice(0, -1);
            output.textContent = equation.num2; 
        } else if (equation.oper !== ''){
            equation.oper = equation.oper.slice(0, -1);
            output.textContent = equation.oper; 
        } else{
            equation.num1 = equation.num1.slice(0, -1);
            output.textContent = equation.num1; 
        }
    }

    //object to save buttons
    let equation = {
        num1: '',
        oper: '',
        num2: '',
        ans: '',
    }

            // button functionality 
            const output = document.querySelector('#output');

            const one = document.querySelector('.one');
            one.addEventListener('click', () => {
                inputValues('1');
            });

            const two = document.querySelector('.two');
            two.addEventListener('click', () => {
                inputValues('2');
            });

            const three = document.querySelector('.three');
            three.addEventListener('click', () => {
                inputValues('3');
                
            });
            const four = document.querySelector('.four');
            four.addEventListener('click', () => {
                inputValues('4');
            });

            const five = document.querySelector('.five');
            five.addEventListener('click', () => {
                inputValues('5');
            });

            const six = document.querySelector('.six');
            six.addEventListener('click', () => {
                inputValues('6');
            });
            const seven = document.querySelector('.seven');
            seven.addEventListener('click', () => {
                inputValues('7');
            });

            const eight = document.querySelector('.eight');
            eight.addEventListener('click', () => {
                inputValues('8');
            });

            const nine = document.querySelector('.nine');
            nine.addEventListener('click', () => {
                inputValues('9');
            });

            const zero = document.querySelector('.zero');
            zero.addEventListener('click', () => {
                inputValues('0');
            }); 
            
            const adds = document.querySelector('.addition');
            adds.addEventListener('click', () => {
                inputOperator('+')
                
            });

            const subtr = document.querySelector('.subtract');
            subtr.addEventListener('click', () => {
                inputOperator('-')
                
            });

            const divise = document.querySelector('.divison');
            divise.addEventListener('click', () => {
                inputOperator('/')
                
            });

            const mult = document.querySelector('.multiply');
            mult.addEventListener('click', () => {
                inputOperator('*')
            });

            const equals = document.querySelector('.equals');
            equals.addEventListener('click', () => {
                equalsEvent();
            });

            const clear = document.querySelector('.clear');
            clear.addEventListener('click', () => {
                clearAll();
            });

            const dot = document.querySelector('.dot');
            dot.addEventListener('click', () => {
                inputValues('.');
            });

            const delt = document.querySelector('.delete');
            delt.addEventListener('click', () => {
                deleteLast();
            });

                // keyboard functionality 

                function keyInput(e){
                    const keyVal = e.keyCode;
                    switch (keyVal) {
                        case 48: inputValues('0'); break;
                
                        case 49: inputValues('1'); break;

                        case 50: inputValues('2'); break;
                
                        case 51: inputValues('3'); break;

                        case 52: inputValues('4'); break;
                
                        case 53: inputValues('5'); break;

                        case 54: inputValues('6'); break;
                
                        case 55: inputValues('7'); break;

                        case 56: inputValues('8'); break;
                
                        case 57: inputValues('9'); break;

                        case 187: inputOperator('+'); break;

                        case 189: inputOperator('-'); break;

                        case 88: inputOperator('*'); break;

                        case 191: inputOperator('/'); break;

                        case 13: equalsEvent(); break;

                        case 8: clearAll(); break;

                        case 190: inputValues('.'); break;

                        case 37: deleteLast(); break;
                        
                        default: ;
                    }
                }
                window.addEventListener('keydown', keyInput);
