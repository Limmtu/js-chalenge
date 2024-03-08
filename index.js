    // Challenge One

let message = "There is no war in Ba Sing Se";

// Function to count words in a given string
function countWords(inputString) {
    // Remove leading and trailing whitespaces
    let trimmedString = inputString.trim();
    
    // Split the string into an array of words
    let wordsArray = trimmedString.split(/\s+/);
    
    // Return the number of words
    return wordsArray.length;
}

// Call the function with the provided message
let wordCount = countWords(message);

// Display the result
console.log(`The message contains ${wordCount} words.`);







     // chalenge two

 let countries = ['China', 'Japan', 'South Korea', 'Vietnam', 'Malaysia'];
 let capitals = ['Beijing', 'Tokyo', 'Seoul', 'Hanoï', 'Kuala Lumpur'];
 
 // Check if the number of countries and capitals match
 if (countries.length === capitals.length) {
     
     for (let i = 0; i < countries.length; i++) {
         // Display the message for each country and its capital
         console.log(`Your country: ${countries[i]} has the capital named: ${capitals[i]}.`);
     }
 } else {
     console.log("Error: The number of countries and capitals does not match.");
 }





    // chelenge three
// Generate a random number between 0 and 3 (exclusive)
const randomizer = Math.floor(Math.random() * 3);

let fate;

if (randomizer === 0) {
    fate = "A certain victory";
} else if (randomizer === 1) {
    fate = "Not so certain victory";
} else if (randomizer === 2) {
    fate = "An uneasy victory";
} else {
    fate = "Your fate is unclear, ô chosen undead";
}


console.log(`Your fate: ${fate}`);

     



      // chalenge four
function checkSeason(month) {
    // Convert the month to lowercase for case-insensitivity
    const lowercaseMonth = month.toLowerCase();

    switch (lowercaseMonth) {
        case 'december':
        case 'january':
        case 'february':
            return 'Winter';
        case 'march':
        case 'april':
        case 'may':
            return 'Spring';
        case 'june':
        case 'july':
        case 'august':
            return 'Summer';
        case 'september':
        case 'october':
        case 'november':
            return 'Autumn';
        default:
            return 'Invalid month';
    }
}


console.log(`We are currently in ${currentSeason}.`);
