// ------------- //
// 投票ページ更新 //
// ------------- //
document.addEventListener("DOMContentLoaded", () => {
  // 必要な要素の取得
  const castElements = document.querySelectorAll(".cast");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-title"); // キャスト名を表示
  const closeButton = document.querySelector(".close-botton");
  const voteButton = document.getElementById("vote-botton");
  const confirmationMessage = document.querySelector(".confirmation-message"); // 確認メッセージを取得

  // 各キャスト要素にクリックイベントリスナーを追加
  castElements.forEach(cast => {
    cast.addEventListener("click", () => {
      // img要素から画像のsrcを取得
      const imageUrl = cast.querySelector("img").src;
      // icon-descriptionクラスを持つp要素があればそのテキストを取得
      const descriptionElement = cast.querySelector(".icon-discription");
      const descriptionText = descriptionElement ? descriptionElement.textContent : "";

      // モーダルのコンテンツを更新
      modalImage.src = imageUrl;
      modalImage.alt = ""; // alt属性は不要とされたため、空に設定

      // modalDescriptionにアイコンの説明を表示
      modalDescription.textContent = descriptionText;
      modalDescription.style.display = "block"; // 説明は常に表示

      // 確認メッセージは常に表示
      confirmationMessage.style.display = "block";

      // モーダルを表示
      modal.classList.add("show-modal");
    });
  });

  // 閉じるボタンがクリックされた時の処理
  closeButton.addEventListener("click", () => {
    modal.classList.remove("show-modal");
  });

  // モーダルの外側がクリックされた時の処理
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show-modal");
    }
  });

  // 投票ボタンがクリックされた時の処理 (仮)
  voteButton.addEventListener("click", () => {
    alert(`投票しました！ (この後の処理は別途実装します)`);
    modal.classList.remove("show-modal"); // モーダルを閉じる
  });
});

// ------- //
// ヘッダー //
// ------- //
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

// ---------------- //
// ハンバーガメニュー //
// ---------------- //
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