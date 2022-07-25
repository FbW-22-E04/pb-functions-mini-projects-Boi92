// The Fortune Teller
function tellFortune(numberOfChildren, nameOfPartner, location, jobTitle ){
    let fortune = ("You will be a "+jobTitle+" in "+location+", and married to "+nameOfPartner+" with "+numberOfChildren+" kids.")
console.log (fortune)
}
tellFortune(5, "Maya", "Barcelona", "Fisherman");
tellFortune(2, "Bryan", "London", "Egirl" )
tellFortune(3, "Gianna", "Singapore", "CEO of lazyness")
// The Puppy Age Calculator
function calculateDogAge(age){
    let dogYears = 7*age;
   /*  if (age = 1){
        let dogYears = age;;
    }  
    I wanted to make sure that the very first year is not being multiplied by 7 */
    
        
    console.log("Your dog is "+dogYears+"years old in Dog years!")
   
}

calculateDogAge(1)
calculateDogAge(5)
calculateDogAge(3)



// The Lifetime Supply Calculator
/* const calculateSupply = (age , amount) => {
    let result = age * amount;
    return result;
} */

function calculateSupply (age, amount){
    let result = age *amount;
    return result;
}
console.log(calculateSupply(20,55))
console.log(calculateSupply(2,6))
console.log(calculateSupply(19,40))

// The Geometrizer
function calcCircumfrence(radius){
    let circumfrence = 2 * Math.PI *radius;
    let area = Math.PI * radius*radius;
    console.log('The circumfrence is ',circumfrence);
    console.log('The area is ',area);
    // console.log('The circumfrence is ', Math.round(circumfrence));
    // console.log('The area is ',Math.round(area));
}
calcCircumfrence(2)
calcCircumfrence(24)



// The Temperature Converter
function celsiusToFahrenheit (celsius){ //Divide by 5, then multiply by 9, then add 32

    let cToF = (celsius / 5 ) * 9 + 32;
    console.log(celsius,"°C is",cToF,"°F")
}

function fahrenheitToCelsius (fahrenheit){
    let fToC = ((fahrenheit -32) * 5) / 9;
console.log(fahrenheit,"°C is",fToC,"°F")}

celsiusToFahrenheit(32)
fahrenheitToCelsius(89.6)