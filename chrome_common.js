var _function = {};
window._function = _function;

function copyToClipboard(text) {
    if (text.indexOf('-') !== -1) {
        let arr = text.split('-');
        text = arr[0] + arr[1];
    }
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? '成功复制到剪贴板' : '该浏览器不支持点击复制到剪贴板';
        console.log(msg);
    } catch (err) {
        alert('该浏览器不支持点击复制到剪贴板');
    }

    document.body.removeChild(textArea);
}
_function.copyToClipboard = copyToClipboard;


function importJs(file) {
    var _clickJs = document.createElement('script');
    _clickJs.setAttribute("type", "text/javascript");
    _clickJs.src = "https://raw.githack.com/51ttw/chromejs/master/" + file;
    document.getElementsByTagName("head")[0].appendChild(_clickJs);
}
importJs("chrome_md5.js");
importJs("chrome_touch.js");
importJs("chrome_crc32.js");
importJs("mydate.js");

function clickJs(css) {
    document.querySelector(css).click();
}

function _getText(css) {
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
    if (str == undefined) {
        console.log("入参为空 : %s", str);
        str = "";
    }
    str = str + "";
    str = str.replace(/\s*/g, "");
    var md5 = hex_md5(str);
    var tabnum = crc32(md5) >> 16 & 0xffff;
    console.log(md5);
    console.log(tabnum);
    var sql = "/** " + str + "  **/\n";
    sql = sql + "    SELECT * FROM cc_application_" + (tabnum % 10) + " where  uid='" + md5 + "' ORDER BY id DESC LIMIT 10 ";
    console.log(sql);
    copyToClipboard(sql);
}

// 将方法放到全局方法列表
_function.printSelectValue = printSelectValue;
_function.clickJs = clickJs;
_function._getText = _getText;
_function.getSubTable = getSubTable;
console.log(_function);

// 遍历所有全局js方法
for (var key in _function) {
    console.log(key)
}

console.log(_function);
