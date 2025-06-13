document.addEventListener("DOMContentLoaded", function() {
    const bolum = document.querySelector('.mac-gecmisi');
    const macOgeleri = document.querySelectorAll('.mac-gecmis-ogesi');
    
    const gozlemci = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('gorunur');
        });
    }, { threshold: 0.2 });
    
    gozlemci.observe(bolum);
    macOgeleri.forEach(item => gozlemci.observe(item));
});

function maclariFiltrele() {
    const secilenTakim = document.getElementById('takimSec').value;
    const macOgeleri = document.querySelectorAll('.mac-gecmis-ogesi');
    
    macOgeleri.forEach(item => {
        item.classList.remove('gorunur');
        item.style.display = 'none';
    });
    
    setTimeout(() => {
        macOgeleri.forEach((item, index) => {
            const evSahibi = item.querySelector('.ev-sahibi').textContent.toLowerCase();
            const deplasman = item.querySelector('.deplasman').textContent.toLowerCase();
            
            if (secilenTakim === 'hepsi' || 
                evSahibi.includes(secilenTakim) || 
                deplasman.includes(secilenTakim) ||
                item.classList.contains(secilenTakim)) {
                
                item.style.display = 'flex';
                setTimeout(() => item.classList.add('gorunur'), index * 100);
            }
        });
    }, 100);
}
