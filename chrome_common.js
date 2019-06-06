var _function={};
window._function=_function;
function importJs(file){
    var _clickJs= document.createElement('script');
    _clickJs.setAttribute("type", "text/javascript");
    _clickJs.src="https://raw.githack.com/51ttw/chromejs/master/"+file;
}
importJs("chrome_md5.js");

function clickJs(css) {
    document.querySelector(css).click();
}
function getText(css) {
    console.log(document.querySelector(css));
    console.log(document.querySelector(css).innerText)
}
//输出select的value
function printSelectValue(css) {
    var e = document.querySelector(css);
    if (!e) {
        console.log("没有找到select %s", e);
        return;
    }
    var es = e.querySelectorAll("option");
    var str = "";
    for (var i = 0; i < es.length; i++) {
        console.log(es[i])
        str = str + es[i].value + " " + es[i].innerText + ";"
    }
    console.log(str);
}

console.log("mytouch init");

function getTouchEvent(type, XY) {
    var touchevent = new TouchEvent(type, {
        'touches': [new Touch(XY)],
        'changedTouches': [new Touch(XY)],
        'targetTouches': [new Touch(XY)],
        'bubbles': true,
        'cancelable': true,
        'view': window
    });
    return touchevent;
}

console.log("mytouch init ok");
console.log("getRect init");

function getRect(e) {
    if (e == null || e == undefined) {
        console.log('想滑动的元素不存在 getRect');
    }
    var xy = {
        'clientX': 127.73722839355469,
        'clientY': 249.0876007080078,
        'force': 1,
        'identifier': 0,
        'pageX': 127.73722839355469,
        'pageY': 249.0876007080078,
        'radiusX': 10.492701530456543,
        'radiusY': 10.492701530456543,
        'rotationAngle': 0,
        'screenX': window.screen.width,
        'screenY': window.screen.height
    };
    var pos = e.getBoundingClientRect();
    if (pos == null || pos == undefined) {
        console.log('获取元素位置出错 getRect');
    }
    console.log('pos : ', pos)
    xy.clientX = (pos.left + pos.right) / 2;
    xy.clientY = 432;
    // xy.clientY = (pos.top + pos.bottom) / 2;
    xy.pageX = xy.clientX;
    xy.pageY = xy.clientY;
    // xy.clientX = 255;
    // xy.clientY = 688;
    // xy.pageX = xy.clientX;
    // xy.pageY = xy.clientY;
    console.log(xy)
    return xy;
}
console.log("getRect init ok");
console.log("mytouchUp init");

function mytouchOnce(css) {
    if (css == null || css == undefined) {
        console.log('想触摸的元素css不存在 return');
        return;
    }
    var e = document.querySelector(css);
    if (e == null || e == undefined) {
        console.log('想触摸的元素不存在 return');
        return;
    }
    var XY = getRect(e);
    XY.target = e;

    var touchevent = getTouchEvent("touchstart", XY);
    e.dispatchEvent(touchevent);
    console.log(touchevent);
    var touchevent = getTouchEvent("touchend", XY);
    e.dispatchEvent(touchevent);
}
console.log("mytouchUp init ok");

function loginmyaccount() {
    var r = document.referrer;
    var l = location.href;
    var r1 = "http://www.17ttw.com/image/index.html";
    if (r == r1 && l.indexOf("index.html#/login") > 0) {
        console.log("referrer : %s",r);
        console.log("href : %s",l);
        var e = document.querySelector(".ivu-input.ivu-input-default");
        e.focus();
        e.blur();
        clickJs(".ivu-form-item-content>button");
    }
}
setTimeout(loginmyaccount,500);


function getSubTable(str) {
    var md5 = hex_md5(str);
    var tabnum = crc32(hex_md5(str)) >> 16 & 0xffff;
    console.log(md5);
    console.log(tabnum);
    console.log("SELECT * FROM cc_application_" + (tabnum % 10) + " where  uid='" + md5 + "' ORDER BY id DESC LIMIT 10");
}

// 将方法放到全局方法列表
_function.getTouchEvent = getTouchEvent;
_function.getRect = getRect;
_function.mytouchOnce = mytouchOnce;
_function.printSelectValue=printSelectValue;

_function.clickJs=clickJs;
_function.getText=getText;
_function.getSubTable=getSubTable;
console.log(_function);

// 遍历所有全局js方法
for (var key in _function) {
    console.log(key)
}

console.log(_function);
