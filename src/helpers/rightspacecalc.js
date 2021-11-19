const handlebars = require('handlebars');
module.exports = function(dateend = '2033.12.31.') {
    var hundredpercent = (Date.parse('2033.12.31.') - Date.parse('2010.01.01.'))/1000;

    return new handlebars.SafeString(((Date.parse('2033.12.31.') - Date.parse(dateend))/1000 / hundredpercent * 100));
}