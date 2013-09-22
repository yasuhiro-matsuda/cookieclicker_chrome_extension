$(function(){
    var autoClick = false;
    
    // アイコンがクリックされた時に呼ばれる
    chrome.browserAction.onClicked.addListener(function(){
        autoClick = !autoClick;
        if (autoClick) {
            // 今表示しているタブでスクリプトを実行する
            chrome.tabs.executeScript(null, {
                "code": "$('#bigCookie').addClass('auto-click-on')"
            });
        } else {
            chrome.tabs.executeScript(null, {
                "code": "$('#bigCookie').removeClass('auto-click-on')"
            });
        }
    });

});
