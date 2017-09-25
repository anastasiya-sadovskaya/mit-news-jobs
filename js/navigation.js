$(document).ready(function(){
    var lastId,
        body = $('body'),
        topMenu = $(".navigation"),
        topMenuHeight = topMenu.outerHeight(),
        menuItems = topMenu.find("a"),
        menuListItems = topMenu.find("li"),
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });


    menuItems.click(function(e){
      menuListItems.removeClass('scroll-active');
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 1100);
      $(this).parent().addClass('scroll-active');
      e.preventDefault();
    });

   
    // $(window).scroll(function(){
    //     if (body.hasClass('index-page')) {
    //        var fromTop = $(this).scrollTop()+topMenuHeight;
           
           
    //        var cur = scrollItems.map(function(){
    //          if ($(this).offset().top < fromTop)
    //            return this;
    //        });
          
    //        cur = cur[cur.length-1];
    //        var id = cur && cur.length ? cur[0].id : "";
           
    //        if (lastId !== id) {
    //            lastId = id;
               
    //            menuItems
    //              .parent().removeClass("scroll-active")
    //              .end().filter("[href=#"+id+"]").parent().addClass("scroll-active");
    //        }         
    //     }          
    // });
})