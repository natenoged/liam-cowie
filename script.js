document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const imageFolder = './images/'; // Path to your images folder
    const totalImages = 29; // Manually set the total number of images
    const fileExtension = 'webp'; // Change this if using a different image format

    // Populate gallery
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `${imageFolder}${i}.${fileExtension}`;
        img.alt = `Gallery Image ${i}`;
        img.classList.add('gallery-image'); // Adding a consistent class
        gallery.appendChild(img);
    }
});