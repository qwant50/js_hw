/**
 * Created by Qwant on 22-Dec-15.
 */
/**
 * Created by phpstudent on 12/17/15.
 */
(function ($) {

    $.fn.myEffect = function () {

        this.effect("shake", {
            times: 5,
            distance: 100
        }, 30);

    };


})(jQuery);