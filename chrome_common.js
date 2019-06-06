var _function={};
window._function=_function;
function importJs(file){
    var _clickJs= document.createElement('script');
    _clickJs.setAttribute("type", "text/javascript");
    _clickJs.src="https://raw.githack.com/51ttw/chromejs/master/"+file;
}
importJs("chrome_md5.js");
importJs("chrome_touch.js");
importJs("chrome_crc32.js");

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
