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
    'pic1.jpg': 'First Image',
    'pic2.jpg': 'Second Image',
    'pic3.jpg': 'Third Image',
    'pic4.jpg': 'Fourth Image',
    'pic5.jpg': 'Fifth Image'
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


