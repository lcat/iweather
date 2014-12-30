var color = require('cli-color');
var Grid = require('term-grid');

var fixZero = function(num) {
    return num < 10 ? "0" + num : num;
};
// date format
exports.format = function(date) {
    return date.getFullYear() + "-" + fixZero(date.getMonth() + 1) + "-" + fixZero(date.getDate());
};

var isFun = exports.isFun = function(fn) {
    return toString.call(fn) === "[object Function]";
}

var isArr = exports.isArr = function(arr) {
    return isFun(Array.isArray) ?
        Array.isArray(arr) : toString.call(arr) === '[object Array]';
}

var isObj = exports.isObj = function(obj) {
    return toString.call(obj) === "[object Object]";
}

var trim = exports.trim = function(text) {
    var reExtraSpace = /\s+/;
    return text.replace(reExtraSpace, "")
}

// console clear
exports.clear = function() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
}

/**
 * 获取周几
 * @param  {[type]} date [description]
 * @return {[string]}      [description]
 */
exports.getDay = function(date) {
    
    var d = new Date(date);

    var weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

    return weekday[d.getDay()];
}

