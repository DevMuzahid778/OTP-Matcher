document.getElementById("Generate").addEventListener("click", function(){
    // create 4 digit Random Number
    const Pin = Math.round(Math.random()*10000);

    // convert Pin as a string to get the length of the pin
    const RandomNumber = Pin + " ";
    if(RandomNumber.length > 4){
        const PinField = document.getElementById("PinField");
        PinField.value = Pin;
    }
})