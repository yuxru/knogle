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
// Fullscreen feature
const fullscreenBtn = document.getElementById('fullscreenBtn');
const slideshowContainer = document.getElementById('slideshowContainer');


// Update image source based on the current index.
function updatePhoto() {
    photoElement.src = images[currentIndex];
}


// Toggles fullscreen for the .slideshow-container element
function toggleFullscreen() {
    // Check if we're currently in fullscreen
    if (!document.fullscreenElement) {
        // Request fullscreen for the slideshow container
        if (slideshowContainer.requestFullscreen) {
            slideshowContainer.requestFullscreen();
        } 
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Listen for clicks on the fullscreen button
fullscreenBtn.addEventListener('click', toggleFullscreen);

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

