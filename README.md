# Futbol Sitesi Projesi

Bu proje, HTML, CSS ve çeşitli JavaScript kütüphaneleri kullanılarak geliştirilmiş bir futbol sitesi ön yüz uygulamasıdır.

## Proje Amacı
Futbolseverlerin ihtiyaç duyabileceği temel bilgileri ve güncel transfer haberlerini sunan, kullanıcı dostu bir futbol sitesi tasarlamak amaçlanmıştır.

## Özellikler

- **Anasayfa:** Site girişinde kullanıcıları karşılayan genel futbol temalı sayfa.
- **Transfer Haberleri:** Güncel transfer haberlerinin listelendiği bölüm.
- **Puan Tablosu:** Türkiye’nin en popüler 5 futbol liginden puan durumu bilgileri (Şu an gerçek veriler kullanılmamaktadır, frontend demo amaçlıdır).
- **Maç Geçmişleri:** Türkiye’nin dört büyük takımının (Galatasaray, Beşiktaş, Fenerbahçe, Trabzonspor) geçmiş maç sonuçları gösterilmektedir.
- **Hakkımızda:** Site hakkında bilgi verilen bölüm.
- **Footer:** Site alt kısmında iletişim ve diğer bağlantılar yer almaktadır.

## Teknolojiler
- HTML5
- CSS3
- JavaScript
- Kullanılan JS kütüphaneleri (örnek: jQuery, Bootstrap, vs.)

## Notlar
- Proje tamamen frontend odaklıdır.
- Şu anda gerçek veriler API üzerinden çekilmemekte, statik/dummy veriler kullanılmaktadır.
- Geliştirme ve gerçek veri entegrasyonu ileride planlanmaktadır.

## Örnek Kod

Aşağıda projenin ana sayfasına ait basit bir HTML yapısı örneği yer almaktadır:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Futbol Sitesi - Anasayfa</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <header>
        <h1>Futbol Sitesi</h1>
        <nav>
            <ul>
                <li><a href="index.html">Anasayfa</a></li>
                <li><a href="transfer.html">Transfer Haberleri</a></li>
                <li><a href="puan-tablosu.html">Puan Tablosu</a></li>
                <li><a href="mac-gecmisleri.html">Maç Geçmişleri</a></li>
                <li><a href="hakkimizda.html">Hakkımızda</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h2>Güncel Futbol Haberleri</h2>
            <p>Transfer haberleri ve lig puan durumları için sitemizi takip edin.</p>
        </section>
        <!-- Diğer içerikler buraya gelecek -->
    </main>

    <footer>
        <p>© 2025 Futbol Sitesi. Tüm hakları saklıdır.</p>
    </footer>

    <script src="app.js"></script>
</body>
</html>
