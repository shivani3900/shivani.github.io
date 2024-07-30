/* 
Name: Shivani Patel
File: assignment4_part1
Date: 16th July, 2024
Description: This script generates a silly story when the "Generate random story" button is pressed.
*/

// Accessing the HTML elements.
const customNameInput = document.querySelector('#customname'); // Getting the input field where the user is typing their name.
const randomizeButton = document.querySelector('.randomize'); // Finding the button that the user is clicking to create a new story.
const storyElement = document.querySelector('.story'); // Selecting the element where the story is being displayed.

// Defining a function to get a random item from an array.
function getRandomElement(array) {
  const index = Math.floor(Math.random() * array.length); // Picking a random index in the array.
  return array[index]; // Returning to the item at the chosen index.
}

// Setting up the story template with placeholders.
const storyTemplate = 'It was 94 degrees Fahrenheit outside, so :insertx: went for a walk. When they arrived at :inserty:, they were shocked for a moment, then :insertz:. Bob saw the whole thing but wasn\'t surprised—:insertx: weighs 300 pounds, and it was a hot day.';

const insertXOptions = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']; // Listing possible characters.
const insertYOptions = ['the soup kitchen', 'Disneyland', 'the White House']; // Listing possible places.
const insertZOptions = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']; // Listing possible actions.

// Adding an event listener to the button for generating a new story.
randomizeButton.addEventListener('click', generateStory);

function generateStory() {
  let updatedStory = storyTemplate;

  // Getting random choices for each placeholder.
  const xElement = getRandomElement(insertXOptions); // Selecting a random character.
  const yElement = getRandomElement(insertYOptions); // Selecting a random place.
  const zElement = getRandomElement(insertZOptions); // Selecting a random action.

  // Replacing the placeholders with the random choices.
  updatedStory = updatedStory.replace(':insertx:', xElement); // Replacing the first character placeholder.
  updatedStory = updatedStory.replace(':insertx:', xElement); // Replacing the second character placeholder (same as the first).
  updatedStory = updatedStory.replace(':inserty:', yElement); // Replacing the place placeholder.
  updatedStory = updatedStory.replace(':insertz:', zElement); // Replacing the action placeholder.

  // Checking if the user is providing a custom name.
  if (customNameInput.value.trim() !== '') {
    const customName = customNameInput.value.trim(); // Getting the user's name.
    updatedStory = updatedStory.replace('Bob', customName); // Replacing 'Bob' with the user's name.
  }

  // Checking if the UK radio button is being selected.
  if (document.querySelector('#uk').checked) {
    const weightInStones = (300 * 0.0714286).toFixed(2) + ' stone'; // Converting 300 pounds to stones.
    const tempInCelsius = ((94 - 32) * 5 / 9).toFixed(2) + ' degrees Celsius'; // Converting 94 Fahrenheit to Celsius.

    updatedStory = updatedStory.replace('300 pounds', weightInStones); // Replacing pounds with stones.
    updatedStory = updatedStory.replace('94 degrees Fahrenheit', tempInCelsius); // Replacing Fahrenheit with Celsius.
  }

  // Updating the story text and making sure it is visible.
  storyElement.textContent = updatedStory; // Displaying the updated story text.
  storyElement.style.visibility = 'visible'; // Ensuring the story is visible on the page.
}