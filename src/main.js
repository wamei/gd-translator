import TransItem from './trans/item.js';
import TransMenu from './trans/menu.js';

function nativeTreeWalker(root, callback) {
    var walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    var node;
    while(node = walker.nextNode()) {
        (function(node) {
            setTimeout(function() {
                callback(node);
            }, 0);
        })(node);
    }
}

function applyTrans(trans, selector) {
    setTimeout(function() {
        var keys, items, i, n;
        keys = Object.keys(trans);
        items = document.querySelectorAll(selector);
        for (i = 0, n = items.length; i < n; i++) {
            nativeTreeWalker(items[i], function(node) {
                keys.forEach((key) => {
                    node.nodeValue = node.nodeValue.replace(trans[key].reg, trans[key].rep);
                });
            });
        }
    }, 0);
}

applyTrans(TransMenu, 'div#LeftMenu, div#Main h2, div.cat > h3, div.itemdisplay');
applyTrans(TransItem, 'div.cat:not([style*="display: none"]) > div.items > div.item > div.text p:not([class*="lower10"])');
applyTrans(TransItem, 'div#Main > div.item > div.text p:not([class*="lower10"])');
applyTrans(TransItem, 'table.itemtable');
applyTrans(TransItem, 'div.cat[style*="display: none"] > div.items > div.item > div.text p:not([class*="lower10"])');
