//  下面演示commonJS规范
var str = "CommonJS module";
var logStr = function(str) {
    return "This is " + str;
};

// module.str = str;
// module.logStr = logStr;

exports.str = str;
exports.logStr = logStr;