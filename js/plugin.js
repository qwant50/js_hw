/**
 * Created by Qwant on 22-Dec-15.
 */
/**
 * Created by phpstudent on 12/17/15.
 */
(function ($) {

    var methods = {
        init : function( options ) {
            // А ВОТ ЭТОТ
        },
        start : function( ) {
            // ПОДХОД
            $(this).effect("shake", {
                times: 5,
                distance: 100
            }, 30);

        },
        stop : function( ) {
            // ПРАВИЛЬНЫЙ
        },
        update : function( content ) {
            // !!!
        }
    };

    $.fn.myEffect = function ( method ) {

        var defaults = { times: 5 , distance: 100 };
        // актуальные настройки, глобальные
        var options;

        return this.each(function() {
            options = $.extend({}, defaults, options, method);

            // логика вызова метода
            if ( methods[method] ) {
                return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
            } else if ( typeof method === 'object' || ! method ) {
                return methods.init.apply( this, arguments );
            } else {
                $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
            }


        });


    };

    $('button').click(function(){
       $(this).myEffect('start').myEffect('start').myEffect('start').myEffect('start');
    });


})(jQuery);