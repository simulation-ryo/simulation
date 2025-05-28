// ヘッダー
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const headerImgContainer = document.querySelector('.header-img-cntainer'); // メインコンテンツの開始位置を特定するために使用

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY; // 現在のスクロール位置
        const headerHeight = header.offsetHeight; // ヘッダーの高さを取得

        if (currentScrollY > headerImgContainer.offsetHeight - headerHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// ハンバーガメニュー
document.addEventListener('DOMContentLoaded', ()=> {
    const hamburgerToggle = document.querySelector('.H-icon')
    const primaryMenu = document.getElementById('primary-menu')

    hamburgerToggle.addEventListener('click', () => {
        const isExpanded = hamburgerToggle.getAttribute('aria-expanded') === 'true' || false;

        if (isExpanded) {
            primaryMenu.setAttribute('hidden','');
            hamburgerToggle.setAttribute('aria-expanded','false');
        } else {
            primaryMenu.removeAttribute('hidden');
            hamburgerToggle.setAttribute('aria-expanded','true');
        }

        primaryMenu.classList.toggle('is-open');
        hamburgerToggle.classList.toggle('is-active')
    });
});