// Get all the images
const images = document.querySelectorAll('.image');

// Function to bring clicked image to the front
images.forEach(image => {
    image.addEventListener('click', () => {
        // Reset z-index for all images
        images.forEach(img => {
            img.style.zIndex = '1'; // Reset the z-index of all images to 1
        });

        // Bring the clicked image to the front by setting its z-index to 10
        image.style.zIndex = '10';
    });
});
