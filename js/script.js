
var P = {};

$(window).load(function(){
    if($('.box-pr').length){
        if($('body').width() > 1100){
            boxBackgroundStart();
        }
    }
    $(window).scroll(function(){
        var sc = $(document).scrollTop();
        if(sc>=20){
            $('header').addClass('h_null');
        }
        else{
            $('header').removeClass('h_null');
        }
        if($('.box-pr').length){
            if($('body').width() > 1100){
                boxBackground(sc);
            }
        }
    });

});

$(document).ready(function(){
    lt = 55.703896;
    lg = 37.676848;
    ltCenter = 55.703896;
    lgCenter = 37.676848;
    zoomRate = 16;
    elem = 'map';
    var string = '<div class="map-overlay"><h5>Москва</h5>ул.Трофимова, дом 21, корпус 2</div>';
    var stringEn = '<div class="map-overlay"><h5>Moscow City</h5>Trofimova St.,bldg. 21, block 2</div>';

    var pageScrollinProgress = false;
    var desktopSize = false;
    var tabletSize = false;
    var topPos = 0;
    var bottomPos = 0;
    var v;



    $(window).scroll(function(){
        if (topPos != 0 && bottomPos != 0) {
            if(!pageScrollinProgress) {
                v = parseInt($(window).scrollTop());
                if (v > bottomPos) {
                    $('.header .navigation ul li').removeClass('scroll-active');
                    bottomPos = 0;
                }
                if (v < topPos) {
                    $('.header .navigation ul li').removeClass('scroll-active');
                    topPos = 0;
                }
            }
        }
    });


    // $('.scroll').click(function(event) {
    //     event.preventDefault();
    //    if(!pageScrollinProgress){
    //         pageScrollinProgress = true;
    //         $('.header .navigation ul li').removeClass('scroll-active');
    //         $('.scroll').removeClass('scroll-active');
    //         $(this).parent().addClass('scroll-active');
    //         $('html, body').animate({scrollTop: $('#'+$(this).attr('href').replace("#", "")).offset().top}, 1000);
    //         topPos = parseInt($('#'+$(this).attr('href').replace("#", "")).offset().top);
    //         bottomPos = parseInt($('.'+$(this).attr('href').replace("#", "")).outerHeight( true )) + topPos;
    //         setTimeout(function() {pageScrollinProgress = false;}, 1100)
    //    }
    // });

    $('.slider-arrows').css('display','block');

    /*
    if($('#special').length){
        $('#special').carouFredSel({
            auto: false,
            prev: '#prev-spec2',
            next: '#next-spec2',
            pagination: "#pager-spec2",
            swipe: {
                onMouse: true,
                onTouch: true
            },
            scroll: {
                fx: "crossfade",
                duration: 700
            }
        });
    }
    */

    sliderInit();

    $('.brands-block .brands-list div, .box3x3').click(function() {
       var link = $(this).children('a').attr('href');
       window.location.href = link;
    });

    $('.box3x3').hover(function() {
        $(this).children('a').css('background','#f73129');
    }, function() {
        $(this).children('a').css('background','#000');
    });
	
	$('.shop-data').on({
        mouseenter: function(){
            $(this).find('.shop-data-ico').removeClass('no-hover').addClass('hover');
    },
        mouseleave: function(){
            $(this).find('.shop-data-ico').removeClass('hover').addClass('no-hover');
        }
    })

    /*resize slider*/
    $( window ).resize(function() {
        if($('body').width() > 1100){
            if(!desktopSize){
                sliderInit();

                desktopSize = true;
                tabletSize = false;
            }
        }

        if($('body').width() < 1100){
            if(!tabletSize){
                sliderInit();
                tabletSize = true;
                desktopSize = false;
            }
        }
    });



    $(".fancybox").fancybox();

    $("a[rel=mit_about]").fancybox({
        'transitionIn'      : 'fade',
        'transitionOut'     : 'fade'
    });

    $("a[rel=products-items]").fancybox({
        'transitionIn'      : 'fade',
        'transitionOut'     : 'fade'
    });

    $("a[rel=certs]").fancybox({
        'transitionIn'      : 'fade',
        'transitionOut'     : 'fade'
    });

    $('a[rel=service-box]').fancybox({
        wrapCSS    : 'fancybox-custom'
    });

    $('a[rel=service-box-custom]').fancybox({
        wrapCSS    : 'fancybox-custom'
    });

    $('a[rel=plants]').fancybox({
        wrapCSS    : 'fancybox-plants'
    });

    

    $('.popup-trigger').click(function(event) {
        event.preventDefault();
        var id = $(this).attr('data-url');
        $("a[href='"+id+"']").trigger('click');
    });


    $('.map__trigger').click(function(event) {
        event.preventDefault();
        $(this).siblings('.show-map').trigger('click');
    });

    $('.show-map').click(function(event) {
        event.preventDefault();
        $('.show-map').removeClass('map-active');
        $('.show-map').siblings('.map__trigger').removeClass('active');
        $(this).addClass('map-active');
        $(this).siblings('.map__trigger').addClass('active');
        $coords = $(this).next().find('input').val();
        $coords = $coords.split(',')

        var string = '<div class="map-overlay">'+$(this).parent().html()+'</div>';
        mapCreate ($coords[0], $coords[1], $coords[2], $coords[3], zoomRate, elem, string);
    });

    equalHeight('.equal-height-products');
    equalHeight('.equal-height-products .products-title');

    if($('.box-pr').length){
        boxBackgroundStart();
    }

    if($('.map').length){
        mapCreate (lt, lg, ltCenter, lgCenter, zoomRate, elem, string);
    }
    if($('.mapEn').length){
        mapCreate (lt, lg, ltCenter, lgCenter, zoomRate, elem, stringEn);
    }

    $('.custom-popoup__left').click(function(event) {
      event.preventDefault();
      $('.fancybox-prev').trigger('click');
    });

    $('.custom-popoup__right').click(function(event) {
      event.preventDefault();
      $('.fancybox-next').trigger('click');
    });

    $('<img src="images/custom-popup-bg.jpg"/>');

    scrollBarWidth ();


    /*GALLERY INIT*/
    if ($('.gallery').length) {
        gallery.init();
    }
});


function mapCreate (lt, lg, ltCenter, lgCenter, zoomRate, elem, string) {
    var image = 'images/map-marker.png';
    var styles = [{stylers: [{ visibility: "on" },{ lightness: 12 },{ saturation: 0 },{ gamma: 1 }]}];
    var myLatlng = new google.maps.LatLng(lt,lg);
    var mapOptions = {center: new google.maps.LatLng(ltCenter, lgCenter),zoom: zoomRate,scrollwheel: false,mapTypeControl: false,zoomControl: true,panControl: true,styles: styles,mapTypeId: google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById(elem),mapOptions);
    var marker = new google.maps.Marker({position: myLatlng,icon: image,map: map});
    var contentString = string;
    var infowindow = new google.maps.InfoWindow({content: contentString,});
    infowindow.open(map, marker);
    google.maps.event.addListener(marker, 'click', function() {infowindow.open(map,marker);});
}


function equalHeight(group) {
    var tallest = 0;
    $(group).each(function(){
    var thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    $(group).height(tallest);
}

function boxBackgroundStart(){
    var n= 0,
        sc = $(document).scrollTop(),
        y_st = 1000000,
        y_end = 1000000;

    $('.box-pr').each(function(i){
        var h = $(this).outerHeight(),
            y = $(this).offset().top;
        if($(this).hasClass('slider__item')){
            y = 0;
            n = 0;
        }
        if(y_st>y+sc){
            y_st = y;
            y_end = y+h;
            if(!$(this).hasClass('slider__item')){
                $('.box-pr').removeClass('pr-act');
                $(this).addClass('pr-act');
            }
            else{
               $('.slider__item').addClass('pr-act');
            }

        }
        $(this).attr('data-top', y);
        $(this).attr('data-end', y+h);
        $(this).attr('data-scroll', h);

    })
    P.st = y_st;
    P.end = y_end;
    if(sc!=0){
        boxBackground(sc);
    }
}

function boxBackground(sc){
    if(!$('.pr-act').length){
        findPr();
    }
    var y = $('.pr-act').data('top'),
        h = $('.pr-act').data('scroll'),
        end = $('.pr-act').data('end'),
        step = 100/h,
        delta = (sc-y)*step,
        d = delta < 100 ? delta : 100;
        d = d > 0 ? d : 0;
    $('.pr-act').css({"backgroundPosition": 50+'%'+' '+(50-d+'%')});
    if(sc>=end || sc<y){
        $('.pr-act').removeClass('pr-act');
    }

    function findPr(){
        var st = $('.box-pr').data('top'),
            end = $('.box-pr').data('end');
        if( st <= sc && end > sc ){
            if($('.box-pr').hasClass('.slider__item')){
                $('.slider__item').addClass('pr-act');
            }else{
                $('.box-pr').addClass('pr-act');
            }
        }
    }
}


function sliderInit() {
    if($('#brands-slider').length){
        $('#brands-slider').carouFredSel({
            scroll : {
                items: 1
            }                 
        });
    }

    if($('#preview-list').length){
        $('#preview-list').carouFredSel({
            auto: false,
            infinite: false,
            circular: false,
            prev: '#preview__prev',
            next: '#preview__next',
            responsive: false,
            pagination: "#preview__pager",
            swipe: {
                onMouse: true,
                onTouch: true
            },
            scroll: {
                items: 10
            }
        });
    }

    if($('#slider').length){
        $('#slider').carouFredSel({
            auto: true,
            prev: '#prev2',
            next: '#next2',
            responsive: true,
            pagination: "#pager2",
            swipe: {
                onMouse: true,
                onTouch: true
            },
            scroll: {
                fx: "crossfade",
                duration: 700
            }
        });
    }

    
    if($('#products-slider1').length){
        $('#products-slider1').carouFredSel({
            auto: false,
            infinite: false,
            circular: false,
            prev: '#products-prev1',
            next: '#products-next1',
            pagination: "#products-pager1",
            scroll : {
                items: 4
            },
            swipe: {
                onMouse: true,
                onTouch: true
            }                
        });
    }

    if($('#products-slider2').length){
        $('#products-slider2').carouFredSel({
            auto: false,
            infinite: false,
            circular: false,
            prev: '#products-prev2',
            next: '#products-next2',
            pagination: "#products-pager2",
            scroll : {
                items: 4
            },
            swipe: {
                onMouse: true,
                onTouch: true
            }              
        });
    }

    if($('#products-slider3').length){
        $('#products-slider3').carouFredSel({
            auto: false,
            infinite: false,
            circular: false,
            prev: '#products-prev3',
            next: '#products-next3',
            pagination: "#products-pager3",
            scroll : {
                items: 4
            },
            swipe: {
                onMouse: true,
                onTouch: true
            }                 
        });
    }

    if($('#products-slider4').length){
        $('#products-slider4').carouFredSel({
            auto: false,
            infinite: false,
            circular: false,
            prev: '#products-prev4',
            next: '#products-next4',
            pagination: "#products-pager4",
            scroll : {
                items: 4
            },
            swipe: {
                onMouse: true,
                onTouch: true
            }                 
        });
    }

    if($('#products-slider5').length){
        $('#products-slider5').carouFredSel({
            auto: false,
            infinite: false,
            circular: false,
            prev: '#products-prev5',
            next: '#products-next5',
            pagination: "#products-pager5",
            scroll : {
                items: 4
            },
            swipe: {
                onMouse: true,
                onTouch: true
            }                 
        });
    }
}


function scrollBarWidth () {
    var scrollDiv = document.createElement("div"),
        scrollbarWidth,
        style;

    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);

    scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    document.body.removeChild(scrollDiv);

    style = $('<style>.fancybox-margin .header {padding-right: '+scrollbarWidth+'px;}</style>');
    $('head').append(style);
}
