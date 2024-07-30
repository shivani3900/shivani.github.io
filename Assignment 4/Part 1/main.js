
const storyText = "Once upon a time, :insertx: went to :inserty: and found a :insertz:. The weight of the object was 300lb and the temperature was 94 degrees Fahrenheit.";

// Arrays of insertable options
const insertX = ["a dragon", "a wizard", "a knight"];
const insertY = ["the forest", "a village", "a castle"];
const insertZ = ["golden chalice", "magical scroll", "mysterious artifact"];

// Function to get a random value from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to handle the story generation
function result() {
    let newStory = storyText;
    
    // Get random values from the arrays
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    
    // Replace placeholders with random values
    newStory = newStory.replaceAll(":insertx:", xItem)
                       .replaceAll(":inserty:", yItem)
                       .replaceAll(":insertz:", zItem);
    
    // Get user input for custom name
    const customName = document.querySelector("#customname").value;
    if (customName) {
        newStory = newStory.replaceAll("Bob", customName);
    }
    
    // Check for radio button selections
    const ukRadio = document.querySelector("#uk").checked;
    if (ukRadio) {
        // Convert 300lb to stones
        const weightInStones = 300 / 14;
        newStory = newStory.replace("300lb", `${weightInStones.toFixed(2)} stones`);
        
        // Convert 94 degrees Fahrenheit to Celsius
        const tempInCelsius = (94 - 32) * 5 / 9;
        newStory = newStory.replace("94 degrees Fahrenheit", `${tempInCelsius.toFixed(2)} degrees Celsius`);
    }
    
    // Set the final story text
    document.querySelector("#story").textContent = newStory;
}

// Set up event listeners
document.querySelector("#generate").addEventListener("click", result);
