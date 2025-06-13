document.addEventListener('DOMContentLoaded', () => {
    const yazmaMetinler = document.querySelectorAll('.yazma-metin');
  
    if (!yazmaMetinler.length) return;
  
    let index = 0;
  
    function metinDegistir() {
      yazmaMetinler.forEach(metin => {
        metin.classList.remove('aktif');
        metin.style.opacity = '0';
      });
  
      const mevcutMetin = yazmaMetinler[index];
      mevcutMetin.classList.add('aktif');
      mevcutMetin.style.opacity = '1';
  
      index = (index + 1) % yazmaMetinler.length;
    }
  
    if (yazmaMetinler[0]) {
      yazmaMetinler[0].classList.add('aktif');
    }
  
    const intervalId = setInterval(metinDegistir, 4000);
  
    return () => clearInterval(intervalId);
  });
  