const handlebars = require('handlebars');
module.exports = function(color='', datestart='2010.01.01.', dateend='2033.12.31.') {
    var hex='';
    var hundredpercent = (Date.parse('2033.12.31.') - Date.parse('2010.01.01.'))/1000;

    switch (color) {
        case 'cl1':
            hex = '#CEDED6';
        break;
        case 'cl2':
            hex = '#CBE3F6';
        break;
        case 'cl3':
            hex = '#F4BDB9';
        break;
        case 'cl4':
            hex = '#FCDC73';
        break;
        default:
          hex = '#666666';
    }
    var svg = '<svg class="svgbar" viewBox="0 0 600 15" fill="' + hex +'" width="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">'+
        '<title>'+ 'Megbízatásának ideje: ' + datestart + ' - ' + dateend + '</title>' +
        '<g mask="url(#barstripes)">' + 
            '<rect class="base" fill="#efefef" x="0" y="0" width="100%" height="100%" />' +
            '<rect class="progress" x="'+ (100-((Date.parse('2033.12.31.') - Date.parse(datestart))/1000 / hundredpercent * 100)) +'%" y="0" width="'+ ((Date.parse(dateend) - Date.parse(datestart))/1000 / hundredpercent * 100) +'%" height="100%" mask="url(#barmask)" />' +
        '</g>' +   
    '</svg>';
    return new handlebars.SafeString(svg);
}

