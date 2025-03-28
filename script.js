// List images.
const images = [
    "photos/photo_1.jpg",
    "photos/photo_2.jpg",
    "photos/photo_3.jpg"
  ];
  
// Track currently displayed image index.
let currentIndex = 0;

// Grab references to main elements from the DOM.
const photoElement = document.getElementById('photo');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

// Update image source based on the current index.
function updatePhoto() {
    photoElement.src = images[currentIndex];
}

// Event listeners for Previous/Next buttons.
prevButton.addEventListener('click', () => {
    currentIndex--;
    // If we go below 0, wrap around to the last image.
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    updatePhoto();
});
  
nextButton.addEventListener('click', () => {
    currentIndex++;
    // If we go beyond the last index, wrap around to the first.
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updatePhoto();
});

// Initialize the slideshow with the first image.
updatePhoto();