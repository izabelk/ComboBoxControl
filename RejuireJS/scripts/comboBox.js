/// <reference path="_references.js" />

define(['libs/jquery-2.1.1.min'], function (jquery) {

    return $.fn.createComboBox = function () {
        
        var $this = $(this);
        $this.addClass('should-expand');
        var $listItems = $this.find('.list-item');
        $listItems.first().addClass('selected');

        $listItems.on('click', function () {
            var $that = $(this);
            $('.selected').removeClass('selected');
            $that.addClass('selected');

            if ($this.hasClass('should-expand')) {
                $listItems.show();
                $this.removeClass('should-expand');
            }
            else {
                $listItems.hide();
                $('.selected').show();
                $this.addClass('should-expand');
            }
        });
    }
});