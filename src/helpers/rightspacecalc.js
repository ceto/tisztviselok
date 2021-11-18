const handlebars = require('handlebars');
module.exports = function(endvalue = 100) {
    return new handlebars.SafeString(100 - endvalue);
}