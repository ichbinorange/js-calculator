/* Questions to ask and answer:
  What is promptInput? 
    --> parameter for the function calculateUserInput
  What data type? What does it hold? What does it represent?
    --> promptInput is object datatype, it has num1, num2, and operation as keys in object
  How do we read values from it? What syntax?
    --> Use ex promptInput.num1 or promptInput[num1] to read the value
  How can we use it?
    --> Use the values do the calculation
  Can we call our existing functions now, inside of this function?
    --> Yes, it'll print out the string in console.log
*/

const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput,'\n');
  
  const firstNum = parseFloat(promptInput.num1);
  const secondNum = parseFloat(promptInput.num2);
  const operator = promptInput.operation.toLowerCase();
  let result = 0;

  if (isNaN(promptInput.num1) || isNaN(firstNum)) {
    return console.log(`${promptInput.num1} is not a number.`);
  }
  else if (isNaN(promptInput.num2) || isNaN(secondNum)) {
    return console.log(`${promptInput.num2} is not a number.`);
  };

  switch (operator) {
    case 'add': case '+':
      result = firstNum + secondNum;
      console.log(`${firstNum} + ${secondNum} = ${result}`);
      break;
    case 'substrct': case '-':
      result = firstNum - secondNum;
      console.log(`${firstNum} - ${secondNum} = ${result}`);
      break;
    case 'multiply': case '*':
      result = firstNum * secondNum;
      console.log(`${firstNum} * ${secondNum} = ${result}`);
      break;
    case 'power': case '**': case '^':
      power(firstNum, secondNum);
      break;
    case 'divide': case '/': case 'modulo': case '%':
      if (secondNum === 0) {
        console.log('You cannot divide by zero');
        break;
      };
      
      if (operator == 'divide' || operator == '/') {
        result = firstNum / secondNum;
        console.log(`${firstNum} / ${secondNum} = ${result}`);
        break;
      }
      else {
        result = firstNum % secondNum;
        console.log(`${firstNum} % ${secondNum} = ${result}`);
        break;
      };
    default:
      console.log('unsupported operator');
      break;
  };
};

const power = function(num1, num2) {
  // Format the power exponent
  const repeat = `* ${num1} `;
  if ((num2 > 0) && (num2 <= 10) && ((num2 % 1) === 0)) {
    return console.log(`${num1} ${repeat.repeat(num2-1)} = ${Math.pow(num1, num2)}`);
  }  
  else {
    return console.log(`${num1} ^ ${num2} = ${Math.pow(num1, num2)}`);
  };
};


// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: '14.5',
//   num2: (3+1),
//   operation: '**',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;