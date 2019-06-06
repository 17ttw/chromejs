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

// 将方法放到全局方法列表
_function.getTouchEvent = getTouchEvent;
_function.getRect = getRect;
_function.mytouchOnce = mytouchOnce;

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
