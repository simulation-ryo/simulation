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