document.addEventListener('DOMContentLoaded', () => {
  // Menü toggling fonksiyonu
  const toggleMobileMenu = () => {
    const menu = document.querySelector('.gezinmemenüsü');
    const mobileMenuIcon = document.querySelector('#mobilmenü i');
    
    // Menü açık mı kontrol et
    if (!menu || !mobileMenuIcon) return; // Eğer bir şey eksikse çık

    menu.classList.toggle('aktif');

    // Menü aktifse çarpı ikonunu, değilse hamburger ikonunu göster
    if (menu.classList.contains('aktif')) {
        mobileMenuIcon.classList.replace('ri-menu-line', 'ri-close-line');
    } else {
        mobileMenuIcon.classList.replace('ri-close-line', 'ri-menu-line');
    }
  }

  // Menü ikonuna tıklama eventi ekle
  const mobilmenüIcon = document.querySelector('#mobilmenü');
  if (mobilmenüIcon) {
    mobilmenüIcon.addEventListener('click', toggleMobileMenu);
  }
});
