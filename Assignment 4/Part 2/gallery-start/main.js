/* 
Name: Shivani Patel
File: assignment4_part2
Date: 30th July, 2024
Description: In this, we have created a collage of 5 iamges and it can darken and lighten also.
*/

// Select elements
const displayedImage = document.querySelector('.displayed-img img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Declare constant array for image filenames
const imageFilenames = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg'
];

// Declare constant object for image alternative text
const altTexts = {
    'pic1.jpg': 'This is the iamge of human eye',
    'pic2.jpg': 'This is the iamge of sand',
    'pic3.jpg': 'This is the image of flower',
    'pic4.jpg': 'This is the image of ancient people',
    'pic5.jpg': 'This is the image of butterfly.'
};

// Loop through image filenames and create thumbnails
imageFilenames.forEach(filename => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${filename}`);
    newImage.setAttribute('alt', altTexts[filename]);

    // Add the new image to the thumbBar
    thumbBar.appendChild(newImage);

    // Add click event listener to each thumbnail
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', `images/${filename}`);
        displayedImage.setAttribute('alt', altTexts[filename]);
    });
});

// Add click event listener to the button
btn.addEventListener('click', () => {
    if (overlay.classList.contains('dark')) {
        overlay.classList.remove('dark');
    } else {
        overlay.classList.add('dark');
    }
});
