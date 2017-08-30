var pageX;
var pageY;

var menu = document.createElement("ul");
var twitterMenu = document.createElement("li");
menu.id = "context-menu";
menu.className = "context-menu";
twitterMenu.id = "context-menu__item__twitter";
twitterMenu.className = "context-menu__item";

document.onmouseup = mouseUpHandler;
document.onmousedown = mouseDownHandler;

if (!window.x) {
    x = {};
}

function getSelected() {
    var t = '';
    if (window.getSelection) {
        t = window.getSelection();
    } else if (document.getSelection) {
        t = document.getSelection();
    } else if (document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
}

function mouseUpHandler() {
    // console.log("A mouse up event took place within the document!");
    var selectedText = getSelected();
    document.getElementById('selectedText').value = selectedText;

    // for better experience text selection range should be 140+ ?
    if (selectedText !== '') {
        menu.appendChild(twitterMenu);
        menu.classList.toggle('context-menu__display');
        menu.style.left = pageX + 5;
        menu.style.top = pageY - 25;
        document.body.appendChild(menu)

        twttr.widgets.createShareButton(
            'https://yoosuf.me/alice-In-wonderland/',
            twitterMenu, {
                text: document.getElementById('selectedText').value
            }
        );
    } else {

      if (twitterMenu) {
        twitterMenu.remove;
      }
    }
}


function mouseDownHandler(e) {
    // console.log("A mouse down event took place within the document!");
    pageX = e.pageX;
    pageY = e.pageY;

    twitterMenu.remove;
}
