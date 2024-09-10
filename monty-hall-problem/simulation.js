var noChange = 0; // (A) 最初にした選択を変えない戦略で正解した数
var Change = 0; // (B) 最初にした選択を変える戦略で正解した数

var options = document.getElementById('options');
var random = document.getElementById('random');

function check(){

    var doors = document.select.door_number.value;
    var TRY = document.select.number.value;

    // 勝負をTRY_COUNTの数だけ試行
    for (var count = 0; count < TRY; count++) {
        // ドアの候補を作成。ひとつだけ当たり（=true）
        var doorArr = new Array(doors);
        for (var i = 0; i < doors; i++) {
            doorArr[i] = false;
        }
        var bingo = Math.floor(Math.random() * doors);
        doorArr[bingo] = true;
        
        // プレイヤーはドアを一つ選ぶ
        var select = Math.floor(Math.random() * doors); 
        
        // 司会者は、プレイヤーが選んだドア以外からハズレのドアをランダムに一つ選択し、プレイヤーに開示する
        var miss = [];
        for (var i = 0; i < doors; i++) {
            if (i === select) {
                continue;
            }

            if (random.checked) {
    	        miss.push(i);
    	    } else {
    	    	if (doorArr[i] === false) {
    	            miss.push(i);
    	        }
    	    }
        }
        var openDoor = miss[Math.floor(Math.random() * miss.length)];
        
        // (A) 選択を変えない場合
        if (doorArr[select] === true) {
            noChange = noChange + 1;
        }
        
        // (B) 選択を変える場合 (自分が選択したドア以外で未オープンのドアからランダムに一つドアを選択）
        var otherDoorArr = [];
        for (var i = 0; i < doors; i++) {

    		if (options.checked) {

    	        if (i === select || miss.includes(i)) {
    	            continue;
    	        }

    	    } else {

    	        if (i === select || i === openDoor) {
    	            continue;
    	        }

    	    }

            otherDoorArr.push(i);
        }
        var reselect = otherDoorArr[Math.floor(Math.random() * otherDoorArr.length)];
        if (doorArr[reselect] === true) {
            Change = Change + 1;
        }
    }

    // 実行結果
    document.getElementById('NoChange').textContent = noChange;
    document.getElementById('Change').textContent = Change;

    noChange = 0; // 初期化
    Change = 0; // 初期化

}
