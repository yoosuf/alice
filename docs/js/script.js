var pageX;
var pageY;
var menu = document.querySelector("#context-menu");

document.onmouseup = mouseUpHandler;
document.onmousedown = mouseDownHandler;


if (!window.x) {
    x = {};
}

x.Selector = {};
x.Selector.getSelected = function () {
    var t = '';
    if (window.getSelection) {
        t = window.getSelection();
    } else if (document.getSelection) {
        t = document.getSelection();
    } else if (document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
};


function mouseUpHandler() {
    // console.log("A mouse up event took place within the document!");
    var selectedText = x.Selector.getSelected();
    document.getElementById('selectedText').value = selectedText;

    // for better experience text selection range should be 140+ ?
    if (selectedText !== '') {
        // console.log(x.Selector.getSelected());
        var twitterMenu = document.createElement("li");
        twitterMenu.id = "context-menu__item__twitter";
        twitterMenu.className = "context-menu__item";
        menu = document.getElementById("context-menu");
        menu.appendChild(twitterMenu);
        menu.classList.toggle('context-menu__display');
        menu.style.left = pageX;
        menu.style.top = pageY - 55;

        twttr.widgets.createShareButton(
            'https://yoosuf.me/alice-In-wonderland/',
            document.getElementById('context-menu__item__twitter'), {
                text: document.getElementById('selectedText').value
            }
        );

    } else {
        console.log("have no text");


    }
}


function mouseDownHandler(e) {
    // console.log("A mouse down event took place within the document!");
    pageX = e.pageX;
    pageY = e.pageY;

    var element = document.getElementById("context-menu__item__twitter");
    element.outerHTML = "";
    // noinspection JSAnnotator
    delete element;
}
