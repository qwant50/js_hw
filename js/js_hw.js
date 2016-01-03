/**
 * Created by phpstudent on 12/17/15.
 */
(function ($) {

    function shake(value, shift) {
        var temp = parseInt(value) + parseInt(Math.random() * shift - Math.random() * shift);
        return (temp < 300) ? 300 : (temp > 1000) ? 1000 : temp;
    };

    $(".mycss").bind('mousemove', function (evt) {
        $(this).css({
            left: function (index, value) {
                return shake(value, 20);
            },
            top: function (index, value) {
                return shake(value, 20);
            }
        });
    });

    $('#shake').on('click', function () {
        $(this).effect("shake", {
            times: 5,
            distance: 100
        }, 30);

    });

    function sum(number) {
        function sum(number) {
            sum.total += number;
            return sum;
        };
        sum.total = 0;
        return sum;
    }

    var sum = sum();
    sum(1)(8)(12)(5)(332)(80);
    alert(sum.total);


    $("table thead th").click(function () {

        $(this).myEffect();
    });

    $("table tbody td").click(function () {
        var $body = $("table tbody tr"); // creates a JS array of DOM elements
        var currentCol = $(this).index();
        //var currentRow = $(this).parent().index();
        //var countRow = $body.length;
        //var countCol = $body[0].childElementCount;
        //console.log($body[currentRow].cells[currentCol]);
        //console.log($('table'));

        $body.sort(function (a, b) {
            var j = a.cells[currentCol].textContent;
            var i = b.cells[currentCol].textContent;
            return  (i > j) ? -1 : (i < j) ? 1 : 0;
        });

        $body.appendTo($("table tbody"));

        //alert($body[currentRow].cells[currentCol].innerText);
    });

})(jQuery);