/**
 * Created by Qwant on 22-Dec-15.
 */
/**
 * Created by phpstudent on 12/17/15.
 */
(function ($) {

    // актуальные настройки, глобальные

    var defaults = {times: 5, distance: 100, speed: 50, tag: 'td'};

    var methods = {
        init: function ( params) {
            // А ВОТ ЭТОТ
            var options = $.extend({}, defaults, params);
            console.log(options);
            // инициализируем один раз
            var init = $(this).data('myEffect');

            if (init) {
                return this;
            } else {
                $(this).data('myEffect', true);
                return $(this).bind("mouseenter.myEffect",function(){
                    // { "shake", {times, distance, directions}, speed}
                    $(this).effect("shake", { 'times':options.times, 'distance':options.distance }, options.speed);

                });
            }

        },
        start: function (options) {


        },
        effect: function ( params ) {
            // ПРАВИЛЬНЫЙ
            var options = $.extend({}, defaults, params);
            return $(this).effect("shake", { 'times':options.times, 'distance':options.distance }, options.speed);
        },
        destroy: function () {
            // возвращаем все назад
            $(this).removeData('myEffect');
            return $(this).unbind(".myEffect");
        }
    };

    $.fn.myEffect = function (method) {

        // логика вызова метода
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод с именем ' + method + ' не существует для jQuery.myEffect');
        }

    };

    $('#init').on('click',function(){
       // console.log($('#plugin').val());
        $($('#plugin').prop('disabled', true).val()).myEffect({times: 10, distance: 20, tag: $('#plugin').val()});
        //console.log(this);
    });
    $('#destroy').on('click',function(){
        $($('#plugin').prop('disabled', false).val()).myEffect('destroy');
    });
    $('#effect').on('click',function(){
        $($('#plugin').val()).myEffect('effect').myEffect('effect').myEffect('effect');
    })



})(jQuery);