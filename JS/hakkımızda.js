// Sayaç animasyonu için gelişmiş fonksiyon
function sayaclariAnimasyonla() {
  const sayaclar = document.querySelectorAll('.istatistik-sayi');
  
  sayaclar.forEach(sayac => {
    // 7/24 yazısı için özel kontrol
    if (sayac.textContent === "7/24") {
      return; // Bu sayaç için animasyon yapmıyoruz
    }
    
    const hedefEleman = sayac.closest('.istatistik-oge');
    const hedef = hedefEleman ? 
      parseInt(hedefEleman.getAttribute('data-target') || '0') : 
      0;
    
    // Sayacın hazırlanma aşaması
    hedefEleman.classList.add('istatistik-oge-hazirlaniyor');
    
    let mevcutSayi = 0;
    const sure = 3000; // 3 saniye sürecek
    const fps = 60; // Daha yüksek FPS değeri animasyonu daha akıcı yapar
    const adimlar = sure / (1000 / fps);
    const artis = hedef / adimlar;

    // Animasyon fonksiyonu
    const sayaciGuncelle = () => {
      // Yumuşak artış için gelişmiş easing
      const ilerleme = mevcutSayi / hedef;
      // Easing fonksiyonu - başta hızlı, sonda yavaşlayan
      const yumusatilmisIlerleme = 1 - Math.pow(1 - ilerleme, 3);
      
      mevcutSayi += artis;
      
      // Sayı formatını hedef değere göre ayarla
      if (hedef >= 1000) {
        // Binlik değerler için K formatı (500000 -> 500K)
        sayac.textContent = Math.min(
          Math.floor(mevcutSayi / 1000),
          Math.floor(hedef / 1000)
        ) + 'K';
      } else {
        // Normal sayılar için
        sayac.textContent = Math.min(
          Math.floor(mevcutSayi),
          hedef
        ).toLocaleString();
      }
      
      // Artış sürüyor mu?
      if (mevcutSayi < hedef) {
        requestAnimationFrame(sayaciGuncelle);
      } else {
        // Animasyon tamamlandı
        if (hedef >= 1000) {
          sayac.textContent = (hedef / 1000) + 'K';
        } else {
          sayac.textContent = hedef.toLocaleString();
        }
        hedefEleman.classList.remove('istatistik-oge-hazirlaniyor');
        hedefEleman.classList.add('istatistik-oge-tamamlandi');
        
        // Tamamlandığında hafif bir vurgu animasyonu ekle
        hedefEleman.animate([
          { transform: 'scale(1)' },
          { transform: 'scale(1.05)' },
          { transform: 'scale(1)' }
        ], {
          duration: 400,
          easing: 'ease-out'
        });
      }
    };

    // Viewport Gözlemcisi - element görünür olduğunda başlat
    const gozlemci = new IntersectionObserver(
      (girişler) => {
        girişler.forEach(giriş => {
          if (giriş.isIntersecting) {
            setTimeout(() => {
              requestAnimationFrame(sayaciGuncelle);
            }, 300); // Kısa bir gecikme ekle
            gozlemci.unobserve(giriş.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    gozlemci.observe(hedefEleman);
  });
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', function() {
  // Scroll reveal için
  const kaydirmaEfektiniYonet = () => {
    const efektElemanlari = document.querySelectorAll('.kaydirma-efekti, .hakkinda-icerik, .hakkinda-istatistikler');
    
    efektElemanlari.forEach((eleman) => {
      const konum = eleman.getBoundingClientRect();
      const pencereYuksekligi = window.innerHeight || document.documentElement.clientHeight;
      
      if (konum.top <= pencereYuksekligi - 100 && konum.bottom >= 100) {
        eleman.classList.add('aktif');
  
        // Kademeli alt eleman animasyonları
        Array.from(eleman.children).forEach((cocuk, indeks) => {
          cocuk.style.transitionDelay = `${indeks * 0.1}s`;
          cocuk.style.transitionProperty = 'opacity, transform';
        });
      }
    });
  };

  // Throttle fonksiyonu
  const sinirla = (fonk, limit) => {
    let sinirIcinde;
    return function() {
      const argümanlar = arguments;
      const baglam = this;
      if (!sinirIcinde) {
        fonk.apply(baglam, argümanlar);
        sinirIcinde = true;
        setTimeout(() => sinirIcinde = false, limit);
      }
    };
  };

  // Event listener'ları ekle
  const optimizeKaydirmaEfekti = sinirla(kaydirmaEfektiniYonet, 100);
  window.addEventListener('scroll', optimizeKaydirmaEfekti);
  window.addEventListener('resize', optimizeKaydirmaEfekti);
  
  // Sayfa ilk yüklendiğinde kontrol et
  kaydirmaEfektiniYonet();
  
  // Sayaç animasyonunu başlat
  sayaclariAnimasyonla();
});