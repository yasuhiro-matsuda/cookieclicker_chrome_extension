// JQueryの開始
$(function(){
    var autoClick = false;
    var clickInterval;
    
    // 0.001秒間隔でクッキーをクリック
    function clickStart() {
        clickInterval= setInterval(function(){
            $('#bigCookie').trigger('click');
        }, 1);
    }
    function clickStop() {
        clearInterval(clickInterval);
    }

    // 0.5秒間隔でON/OFFの切り替えチェックを行う
    setInterval(function(){
        if ($('#bigCookie').hasClass('auto-click-on')) {
            if (autoClick == false) {
                clickStart();
                autoClick = !autoClick;
            }
        } else {
            if (autoClick == true) {
                clickStop();
                autoClick = !autoClick;
            }
        }
    }, 500);
});
