$(document).ready(function () {
    $window = $(window);
    $('#intro').height($window.height());
    $window.scroll(function () {
        $('div.background').each(function (index, item)
        {
            var $scroll = $(item);
            var yPos = - ($window.scrollTop() / $scroll.data('speed'));
            var coords ='50% ' + yPos + 'px';
            $scroll.css({ backgroundPosition: coords});

        });
    })//cierra las 2
})//fin
//$(document) $(window) $(#intro) es como jquary selecciona los elementos
//higth() scrollTop() funciones predeterminadas en jquery 
//each() sirve para recorrer cada uno de los items
//($window.scrollTop() / $scroll.data('speed) va al menos para que suban los elementos y se muevan dependiendo de la velocidad de la data 4 o 6 como pusimos en el html)
//$scroll.css a esta variable se le da propiedad de css
