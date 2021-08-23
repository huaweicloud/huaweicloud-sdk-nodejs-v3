var h = require('./helloworld.js');
exports.handler = function (event, context, callback) {
    h.print(event, context);
    callback(null, JSON.stringify(event));
}
