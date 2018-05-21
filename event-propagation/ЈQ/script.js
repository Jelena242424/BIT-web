$(document).ready(function(){
    $("li:first").addClass("borderRed");

$("li").addClass("text-transform");

$("li.active").attr("style", "color: red");
$("li:eq(2)").attr("style", "background: blue");
});
