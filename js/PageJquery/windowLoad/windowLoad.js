/*globel $, jQuery, console, document, window, alert, prompt, confirm */

/* start section loading */

$(document).ready(function () {

    'use strict';

    $(".loading .spinner").fadeOut(2000, function () {

        $("body").css("overflow", "auto");

        $(this).parent().fadeOut(2000, function () {

            $(this).remove();
        });
    });
});

/* end section loading */
