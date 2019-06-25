Date.prototype.__format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

function unixtime2str(millis) {
    var str = new Date().valueOf() + "";
    var len = str.length;
    if (len - (millis + "").length == 3) {
        millis = millis * 1000
    }
    var date = new Date(millis);
    var datestr = date.__format("yyyy-MM-dd hh:mm:ss");
    console.log(date);
    console.log(datestr);
    return datestr;

};
unixtime2str(1561434369291);
unixtime2str(1561434369);
_function.unixtime2str=unixtime2str;

