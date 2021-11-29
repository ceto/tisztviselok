const handlebars = require('handlebars');
module.exports = function(icon, root) {
    var iconaddr=(icon=='')?'dot-empty':icon;
    var svg = '<svg class="icon"><use xlink:href="' + root +'assets/img/svg-icons.svg#icon-'+iconaddr+'"></use></svg>';
    return new handlebars.SafeString(svg);
}