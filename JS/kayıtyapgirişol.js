function baloncukOlustur() {
    const konteyner = document.getElementById('baloncuk-konteyneri');
    const baloncukSayisi = 50;

    for (let i = 0; i < baloncukSayisi; i++) {
        const baloncuk = document.createElement('div');
        baloncuk.classList.add('baloncuk');
        
        // Rastgele pozisyonlama
        baloncuk.style.left = `${Math.random() * 100}%`;
        baloncuk.style.top = `${Math.random() * 100}%`;
        
        // Rastgele boyutlar (10px ile 100px arası)
        const boyut = Math.random() * 90 + 10;
        baloncuk.style.width = `${boyut}px`;
        baloncuk.style.height = `${boyut}px`;
        
        // Rastgele animasyon gecikmesi
        baloncuk.style.animationDelay = `${Math.random() * 10}s`;
        
        konteyner.appendChild(baloncuk);
    }
}

// Yükleme olay dinleyicileri
window.addEventListener('load', () => {
    baloncukOlustur();
    setTimeout(() => {
        document.body.classList.add('yuklendi');
    }, 3000);
});

// Form geçiş mantığı
const formBolumu = document.querySelector('.form-bolumu');
const kayitLinki = document.getElementById('kayit-linki');
const girisLinki = document.getElementById('giris-linki');
const girisFormu = document.getElementById('giris-formu');
const kayitFormu = document.getElementById('kayit-formu');

function kayitFormunaGec(e) {
    e.preventDefault();
    formBolumu.classList.add('sola-kaydir');
    setTimeout(() => {
        girisFormu.style.display = 'none';
        kayitFormu.style.display = 'block';
        kayitFormu.style.opacity = '1';
        kayitFormu.style.transform = 'translateX(0)';
        formBolumu.classList.remove('sola-kaydir');
    }, 400);
}

function girisFormunaGec(e) {
    e.preventDefault();
    formBolumu.classList.add('saga-kaydir');
    setTimeout(() => {
        kayitFormu.style.display = 'none';
        girisFormu.style.display = 'block';
        girisFormu.style.opacity = '1';
        girisFormu.style.transform = 'translateX(0)';
        formBolumu.classList.remove('saga-kaydir');
    }, 400);
}

kayitLinki.addEventListener('click', kayitFormunaGec);
girisLinki.addEventListener('click', girisFormunaGec);

girisFormu.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Giriş başarılı!');
});

kayitFormu.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Kayıt başarılı!');
});
