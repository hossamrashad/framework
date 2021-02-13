/*globel console, document, window, alert, prompt, confirm,$ */
$("#iFrame").contents().find("#someDiv").removeClass("hidden");

$(document).ready(function () {
    $('#frameID').load(function () {
        $('#frameID').contents().find('body').html('Hey, i`ve changed content of <body>! Yay!!!');
    });
});
