(function () {

    'use strict';

    require(['libs/handlebars-v1.3.0', 'libs/jquery-2.1.1.min', '../comboBox-control/trainer', './comboBox'],
        function (handlebars, Jquery, Trainer, comboBox) {

        var trainersData = [
            new Trainer('Doncho Minkov', 23, 'images/doncho.jpg').getData(),
            new Trainer('Ivaylo Kenov', 22, 'images/ivo.jpg').getData(),
            new Trainer('Nikolay Kostov', 21, 'images/nikolay-kostov.jpg').getData()
        ];

        var trainersTemplateHTML = $('#trainer-template').html();
        var trainersTemplate = Handlebars.compile(trainersTemplateHTML);

        $('#comboBox').append(trainersTemplate({
            items: trainersData
        }));
            
        $('#comboBox').createComboBox();
            
    });

})();