/**
 * Created by phpstudent on 12/17/15.
 */

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


$("table thead th").click(function () {
 /*   var rows = $("table > tbody").children('tr').detach(); // creates a JS array of DOM elements
    $(rows).each(function (index) {
        //  alert($(this).find("td").text());
    });
    alert('row ' + (parseInt($(this).parent().index()) + 1));
    alert('col ' + (parseInt($(this).index()) + 1));*/
});

$("table  tbody  td").click(function () {
    var $body = $("table > tbody").children('tr'); // creates a JS array of DOM elements
    var currentCol = $(this).index();
    var currentRow = $(this).parent().index();
    var countRow = $body.length;
    var countCol = $body[0].childElementCount;
    console.log($body[currentRow].cells[currentCol]);
    console.log($('table'));

    for (var i = 0; i < countRow; i++) {
        for (var j = i; j < countRow; j++) {
            if ($body[j].cells[currentCol].innerText < $body[i].cells[currentCol].innerText) {
                    $buf = $body[j].innerHTML;
                    $body[j].innerHTML = $body[i].innerHTML;
                    $body[i].innerHTML = $buf;
            };
        };
    };

//    alert($body[currentRow].cells[currentCol].innerText);
});