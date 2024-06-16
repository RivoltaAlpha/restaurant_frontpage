document.addEventListener('DOMContentLoaded', (event) => {
    feather.replace();


    const imageItems = document.querySelectorAll('.image-item');

    imageItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const img = item.querySelector('img');
            const details = item.querySelector('.image-details');
            img.style.transform = 'translateY(-10px)';
            details.style.transform = 'translateY(0)';
            details.style.opacity = '1';
        });

        item.addEventListener('mouseout', () => {
            const img = item.querySelector('img');
            const details = item.querySelector('.image-details');
            img.style.transform = 'translateY(0)';
            details.style.transform = 'translateY(100%)';
            details.style.opacity = '0';
        });
    });
});
