// creats an object to keep track of values
const Calculator = {
    //this is displays 0 on the screen
    Display_Value: '0',
    //this will hold the first operand for the expression, we set it to null for now
    First_Operand: null,
    // this checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    //this will hold the operator, we set it to nu.l for now
    operator: null,
};

// this modiefies values each time a button is clicked
function Input_Digit(digit) {
    const{ Display_Value, Wait_Second_Operand} = Calculator;
    //we are checking to see if Wait_second_operand is true and set 
    //Display_Value to the key that was clicked.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value= digit;
        Calculator.Wait_Second_Operand = false;
    } else{
        // this overwrites Display_Value if the current value is 0
        // otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}
// this section handels decimal points
function Input_Decimal(dot) {
    // this ensures that accidental cliking of the decimal point
    // doiesnt cause bugs in your operatio
    if(Calculator.Wait_Second_Opernad === true) return;
    if(!Calculator.Display_Value.includes(dot)) {
        //we are saying that if the Display_Value does not contain a decimal point
        //we want to add a decimal point
        Calculator.Display_Value += dot;
    }
}

// this section handles decimal points
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator} = Calculator
    // when an operator key is pressed, we convert the crrent number
    //displayed on the scren to a number and then store the reslt in
    //Calculator.First_Operand if it doenst't already exitst
    const Value_of_Input= parseFloat (Display_Value);
    // checks if an operator already excist and if Wait_Seoncd_P[erand is true,
    //then updates the oprator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {// checks if an operator already exists
        const Value_Now = First_Operand || 0;
        // if operator already exists, property lookup is performed for the operator 
        //in the perform_Calculation object and the function that matches the 
        //operator is executed
        const result = Perform_Calculation[operator] (Value_Now, Value_of_Input);

        Calculator.Display_Value = String(result);
        Calculator.First_Operand = result;
    }

    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Opernad) => First_Operand / Second_Opernad,
    '*': (First_Operand, Second_Opernad) => First_Operand * Second_Opernad,
    '+': (First_Operand, Second_Opernad) => First_Operand + Second_Opernad,
    '-': (First_Operand, Second_Opernad) => First_Operand - Second_Opernad,
    '=': (First_Operand, Second_Opernad) => Second_Opernad,
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
// this function updates the screen with the contest of Display_Value
function Update_Display () {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display() ;
// this section contoris button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //the target variable is an object that represents the element
    // that was clikced
    const {target} = event;
    // if the element that was clicked is not a button, exit the function
    if(!target.mathces("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
    Handle_Operator(target.value);
    Update_Display();
    return;
    }
    if (target.classList.contains("decimal")) {
    Handle_Operator(target.value);
    Update_Display();
    return;
    }
    //ensures that AC clears the numbers from the Calculator
    if (target.classList.contains("all-clear")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();

})