document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const imageFolder = './images/';

    // Fetch the image list
    fetch('image-list.json')
        .then(response => response.text())
        .then(imageListText => {
            // Split the text into an array, removing any empty lines
            const imageFiles = imageListText.trim().split('\n');

            // Populate gallery
            imageFiles.forEach((filename, index) => {
                const img = document.createElement('img');
                img.src = `${imageFolder}${filename}`;
                img.alt = `Gallery Image ${index + 1}`;
                img.classList.add('gallery-image');
                gallery.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Error loading image list:', error);
        });
});
