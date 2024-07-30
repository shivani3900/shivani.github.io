
const storyText = "Once upon a time, :insertx: went to :inserty: and found a :insertz:. The weight of the object was 300lb and the temperature was 94 degrees Fahrenheit.";

const insertX = ["a dragon", "a wizard", "a knight"];
const insertY = ["the forest", "a village", "a castle"];
const insertZ = ["golden chalice", "magical scroll", "mysterious artifact"];

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function result() {
    let newStory = storyText;
  
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    
    newStory = newStory.replaceAll(":insertx:", xItem)
                       .replaceAll(":inserty:", yItem)
                       .replaceAll(":insertz:", zItem);
    
    const customName = document.querySelector("#customname").value;
    if (customName) {
        newStory = newStory.replaceAll("Bob", customName);
    }