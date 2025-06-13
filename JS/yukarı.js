document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.createElement('div');
    scrollToTopButton.classList.add('scroll-to-top');
    scrollToTopButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
             stroke-linejoin="round">
            <path d="m18 15-6-6-6 6"/>
        </svg>
    `;
    document.body.appendChild(scrollToTopButton);

    // Scroll durumunu izleme
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    // Tıklama olayı
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});