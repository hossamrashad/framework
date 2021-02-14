/*jslint plusplus: true, evil:true*/
/*globel $, console, document, window, alert, prompt, confirm */

// لو عاوز اي حاجة تاخد مساحة الوندو اللي انت فتحت عليها الويب سيت

$(function () {

    'use strict';

    $('.windowHeight').height($(window).innerHeight());

    $(window).resize(function () {

        $('.windowHeight').height($(window).innerHeight());

    });
});
