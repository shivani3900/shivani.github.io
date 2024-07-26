// Provided story text
const storyText = "Once upon a time, :insertx: went to the zoo. They saw a :inserty: and a :insertz:. Later, :insertx: went to a nearby café and ordered a 300lb burger. It was a hot day, about 94 degrees Fahrenheit.";

// Arrays of random elements
const insertX = ["Bob", "John", "Harry", "Sally"];
const insertY = ["lion", "tiger", "bear", "penguin"];
const insertZ = ["ice cream", "hot dog", "milkshake", "pretzel"];

// Function to get a random item from an array
function randomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
