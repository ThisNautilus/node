//  下面演示commonJS规范
var str = "CommonJS module";
var logStr = function() {
    return "This is " + str;
};

// module.str = str;
// module.logStr = logStr;

module.exports.str = str;
module.exports.logStr = logStr;