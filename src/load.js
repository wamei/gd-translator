document.addEventListener('DOMContentLoaded', function() {
    let $script = document.createElement('script');
    $script.src = '//rawgit.com/wamei/gd-translator/master/built/bundle.js';
    //$script.src = chrome.extension.getURL('./built/bundle.js');
    document.body.appendChild($script);
}, false);
