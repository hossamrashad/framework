/*jslint plusplus: true, evil:true*/
/*globel $ ,console, document, window, alert, prompt, confirm */

/* فنكشان الاسموز اسكرال للوصوال الى العنصر */

/*
 * <div class="navbar"><a href="#" data-scroll="about">About</a></div>
 *
 * <div id="about">About</div>
 *
 * */
$(function () {

    'use strict';

    $('.navbar li a').click(function () {

        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

    });

    $('.navbar li a').click(function (e) {

        // كد انا مناعت الافتراضى للعنصر الانك انو بيرحش لمكان يعنى ميعملش علامة الشباك فى اسم الصفحة
        e.preventDefault();

        // انا هنا طبعت اسم الدات سكروال قى الكنسال لاى عنصر ادوس عليه

        //window.console.log($(this).data('scroll'));

        // و هنا انا ضفت شباك قبل العنصر ما يكتبو و هنا انا عملتو لسلكتو معين

        //window.console.log('#' + $(this).data('scroll'));

        // هبدا اعمال الانمات للعنصر فى النزول لتحت
        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1

        }, 1000);

    });

});

$(window).scroll(function () {

    $('.windowHeight').each(function () {

        if ($(window).scrollTop() > $(this).offset().top) {

            //console.log($(this).attr('id'));

            var blackId = $(this).attr('id');

            $('.navbar a').removeClass('active');

            $('.navbar li a[data-scroll="' + blackId + '"]').addClass('active');
        }
    });
});
