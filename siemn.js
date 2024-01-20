document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('#park figure img');
    let currentImageIndex = 0;

    function showImage(index) {
        galleryImages.forEach(img => img.classList.remove('active'));
        galleryImages[index].classList.add('active');
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImageIndex = index;
            showImage(currentImageIndex);
        });
    });

    const virtualVisitVideo = document.querySelector('#virtual iframe');

    virtualVisitVideo.addEventListener('click', () => {
        alert('Enjoy your virtual visit to Siemen Mountains National Park!');
    });

    
    function changeHeaderColor() {
        const header = document.querySelector('header');
        header.style.backgroundColor = 'lightblue';
    }

    function resetHeaderColor() {
        const header = document.querySelector('header');
        header.style.backgroundColor = '';
    }

    const header = document.querySelector('header');
    header.addEventListener('mouseover', changeHeaderColor);
    header.addEventListener('mouseout', resetHeaderColor);
});