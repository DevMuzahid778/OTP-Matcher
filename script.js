document.getElementById("Generate").addEventListener("click", function(){
    // create 4 digit Random Number
    const Pin = Math.round(Math.random()*10000);

    // convert Pin as a string to get the length of the pin
    const RandomNumber = Pin + " ";
    if(RandomNumber.length > 4){
        const PinField = document.getElementById("PinField");
        PinField.value = Pin;
    }
});

document.getElementById("CalculatorButtons").addEventListener("click", function(event){
    const Digit = event.target.innerText;
    const PinSubmitField = document.getElementById("PinSubmit");
    const PreviousDigit = PinSubmit.value;
    if(isNaN(Digit)){
        // console.log("Character string")
        // C means Clear the all submitted digits
        if(Digit == "C"){
            PinSubmitField.value = ""
        }
        else{
            const allDigits = PreviousDigit.split("");
            allDigits.pop();
            // console.log(allDigits) remove one by one digit for per click
            // add all digits in an array without removed digits
            const NewDigits = allDigits.join("");
            PinSubmitField.value = NewDigits;
        }   
    }
    else{
        // console.log("Number String")
        // const PinSubmitField = document.getElementById("PinSubmit");
        // const PreviousDigit = PinSubmit.value;
        const NextDigit = Digit;
        const TotalPin = PreviousDigit + NextDigit;
        PinSubmitField.value = TotalPin;
    }
})