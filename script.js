document.addEventListener('DOMContentLoaded', () => {
    // 1. SMOOTH SCROLL UNTUK NAVIGASI
    const navLinks = document.querySelectorAll('.nav-item');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. FITUR PREVIEW / ZOOM GAMBAR POSTER
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close-modal');
    const previewButtons = document.querySelectorAll('.preview-btn');

    previewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.poster-card');
            const img = card.querySelector('.poster-img');
            const title = card.querySelector('h3').textContent;

            modal.style.display = 'block';
            modalImg.src = img.src;
            modalCaption.textContent = title;
        });
    });

    // Tutup modal saat tombol X diklik
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Tutup modal saat area gelap di luar gambar diklik
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});