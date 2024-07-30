const customNameInput = document.querySelector('#customname');
const randomizeButton = document.querySelector('.randomize');
const storyElement = document.querySelector('.story');

function getRandomElement(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
