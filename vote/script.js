// ヘッダー
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY; // 前回のスクロール位置を記憶

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY; // 現在のスクロール位置
        const headerHeight = header.offsetHeight; // ヘッダーの高さを取得

        // 下にスクロールしている場合
        if (currentScrollY > lastScrollY && currentScrollY > headerHeight - 40) {
            header.classList.add('hide-header'); // 'hide-header' クラスを追加して非表示にする
        }
        // 上にスクロールしている場合、またはページの最上部に戻った場合
        else if (currentScrollY < lastScrollY || currentScrollY === 0) {
            header.classList.remove('hide-header'); // 'hide-header' クラスを削除して表示にする
        }

        lastScrollY = currentScrollY; // 現在のスクロール位置を更新
    });
});