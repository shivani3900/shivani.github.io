const customNameInput = document.querySelector('#customname');
const randomizeButton = document.querySelector('.randomize');
const storyElement = document.querySelector('.story');

function getRandomElement(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
const storyTemplate = 'It was 94 degrees Fahrenheit outside, so :insertx: went for a walk. When they arrived at :inserty:, they were shocked for a moment, then :insertz:. Bob saw the whole thing but wasn\'t surprised—:insertx: weighs 300 pounds, and it was a hot day.';

const insertXOptions = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertYOptions = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZOptions = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomizeButton.addEventListener('click', generateStory);

function generateStory() {
  let updatedStory = storyTemplate;

  const xElement = getRandomElement(insertXOptions);
  const yElement = getRandomElement(insertYOptions);
  const zElement = getRandomElement(insertZOptions);

  updatedStory = updatedStory.replace(':insertx:', xElement);
  updatedStory = updatedStory.replace(':insertx:', xElement);
  updatedStory = updatedStory.replace(':inserty:', yElement);
  updatedStory = updatedStory.replace(':insertz:', zElement);

  if (customNameInput.value.trim() !== '') {
    const customName = customNameInput.value.trim();
    updatedStory = updatedStory.replace('Bob', customName);
  }
  if (document.querySelector('#uk').checked) {
    const weightInStones = (300 * 0.0714286).toFixed(2) + ' stone';
    const tempInCelsius = ((94 - 32) * 5 / 9).toFixed(2) + ' degrees Celsius';

    updatedStory = updatedStory.replace('300 pounds', weightInStones);
    updatedStory = updatedStory.replace('94 degrees Fahrenheit', tempInCelsius);
  }

  storyElement.textContent = updatedStory;
  storyElement.style.visibility = 'visible';
}