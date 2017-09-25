$(document).ready(function () {

    $('.article-item').click(function () {
        $(this).next().fadeIn(300);
        $('.disable-screen').fadeIn(300);
        $('.close').fadeIn(300);
        // $('.full-news').fadeIn(300)
    });

    $('.disable-screen, .close').click(function () {
        $('.disable-screen').fadeOut(300);
        $('.content').fadeOut(300);
        $('.close').fadeOut(300);
    });

    $( function() {
        $( "#accordion" ).accordion({
            collapsible: true
        });
    });


// function aa(str){
//     // $('.disable-screen').fadeIn(300);
//     //     $('.full-news').fadeIn(300)
//         // document.getElementById('disable-screen').style('display') = 'block';
//         // var content = document.getElementById('content');
//         // content.innerHTML = parseString(str);
//         console.log(str);
//         //return false;

// }

// function parseString(str){
//     var html = "<p>Some HTML<br>Some HTM</p>";
//     var div = document.createElement("div");
//     div.innerHTML = html;
//     return div;
// }


});
