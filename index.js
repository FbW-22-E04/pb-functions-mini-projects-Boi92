// The Fortune Teller

function tellFortune(jobTitle, geoLocation, partner, numKids) {
    let future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('ball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);

// The Puppy Age Calculator

function calculateDogAge(age) {
    let dogYears = 7*age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);


// The Lifetime Supply Calculator

function calculateSupply(age, numPerDay) {
    let maxAge = 100;
    let totalNeeded = (numPerDay * 365) * (maxAge - age);
    let message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
    console.log(message);
  }
  
  calculateSupply(28, 36);
  calculateSupply(28, 2.5);
  calculateSupply(28, 400);

// The Geometrizer

function calcGeometry(radius) {
    let circumference = Math.PI * 2*radius;
    console.log("The circumference is " + circumference);
    let area = Math.PI * radius*radius;
    console.log("The area is " + area);
  }

// The Temperature Converter

function celsiusToFahrenheit(celsius) {
    let celsiusInF = (celsius*9)/5 + 32;
    console.log(celsius + '°C is ' + celsiusInF + '°F');
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    let fahrenheitInC = ((fahrenheit - 32)*5)/9;
    console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
  }