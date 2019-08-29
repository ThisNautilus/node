/*  commonJS使用
const common = require('./commonjs/a.js')

console.log(common.str);
console.log(common.logStr('Dylan'));
*/

/* AMD使用 */
require(['AMD/alert'], function(msg) {
    console.log(msg.logName('Dylan'));
});