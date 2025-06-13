document.addEventListener('DOMContentLoaded', () => {
    // Altbilgi Animasyonları
    const altbilgi = document.querySelector('.altbilgi');
    const altbilgiIcerik = document.querySelector('.altbilgi-icerik');
  
    if (altbilgi) {
        setTimeout(() => {
            altbilgi.classList.add('animate');
        }, 100);
    }
  
    if (altbilgiIcerik) {
        setTimeout(() => {
            altbilgiIcerik.classList.add('animate');
        }, 500);
    }
  
    // Altbilgi Linkleri Animasyonu
    const linkler = document.querySelectorAll('.altbilgi-link, .sosyal-ikon');
    if (linkler.length > 0) {
        linkler.forEach((link, index) => {
            link.style.animationDelay = `${index * 0.1}s`;
            link.classList.add('link-animasyon');
        });
    }
  
    // Sosyal İkon Hover Efektleri
    const sosyalIkonlar = document.querySelectorAll('.sosyal-ikon');
    sosyalIkonlar.forEach(ikon => {
        ikon.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'scale(1.2) translateY(-5px)';
        });
        
        ikon.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'scale(1) translateY(0)';
        });
    });
  
    // AOS Kütüphanesi Başlatma
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out'
        });
    }
  
    // Swiper Slider Yapılandırması
    if (typeof Swiper !== 'undefined') {
        const haberSlider = new Swiper('.kaydirmali-galeri', {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
            on: {
                init: function() {
                    setTimeout(() => {
                        const aktifSlide = document.querySelector('.swiper-slide-active');
                        if (aktifSlide) {
                            aktifSlide.classList.add('aos-animate');
                        }
                    }, 100);
                },
                slideChangeTransitionEnd: function() {
                    const aktifSlideler = document.querySelectorAll('.swiper-slide-active, .swiper-slide-duplicate-active');
                    aktifSlideler.forEach(slide => {
                        slide.classList.add('aos-animate');
                    });
                }
            }
        });
    }
  
    // Intersection Observer ile Haber Kartları
    const gozlemci = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('gorunumde');
            }
        });
    }, {
        threshold: 0.15
    });
    
    document.querySelectorAll('.haber-karti').forEach(kart => {
        gozlemci.observe(kart);
    });
  });