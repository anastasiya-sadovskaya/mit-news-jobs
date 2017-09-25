$(document).ready(function () {

    // $('.article-item').click(function () {
    //     $(this).next().fadeIn(300);
    //     $('.disable-screen').fadeIn(300);
    //     $('.close').fadeIn(300);
    // });

    // $('.disable-screen, .close').click(function () {
    //     $('.disable-screen').fadeOut(300);
    //     $('.content').fadeOut(300);
    //     $('.close').fadeOut(300);
    // });

    $( function() {
        $( "#accordion" ).accordion({
            active: false,
            collapsible: true
        });
    });
});
