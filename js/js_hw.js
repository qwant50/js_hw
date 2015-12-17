/**
 * Created by phpstudent on 12/17/15.
 */

function shake ( value, shift) {
    var temp = parseInt(value) + parseInt(Math.random()*shift - Math.random()*shift);
    return (temp < 0) ? 0 : (temp > 200) ? 200 : temp;
};

$(".mycss").bind('mousemove', function(evt) {
    $( this ).css({
        left: function( index, value ) {
            return shake( value, 20 );
        },
        top: function( index, value ) {
            return shake ( value , 20);
        }
    });
});




$( "table thead th" ).click(function() {
    var rows = $("table > tbody").children('tr').detach(); // creates a JS array of DOM elements
    $(rows).each(function(index) {
      //  alert($(this).find("td").text());
    });
    alert('row ' + (parseInt( $(this).parent().index() )+1));
    alert('col ' + (parseInt( $(this).index() ) + 1));
});