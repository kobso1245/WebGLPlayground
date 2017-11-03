
$(document).ready(function() {
    // all custom jQuery will go here
    var context = $("#main_canvas").get(0).getContext("2d");
    context.fillStyle = 'green';
    context.fillText('Welcome to Tutorialspoint', 70, 70);
});