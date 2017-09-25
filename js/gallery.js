var gallery = (function() {
    var options = {
        gallery: $('.gallery'),
        galleryView: $('.gallery__view'),
        galleryActive: $('.gallery__active'),
        previewItem: $('.preview__item'),
        galleryViewInProcess: false,
        galleryContentLoading: false
    };

    

    function _setUpListners() {
        options.previewItem.click(function(event) {
            event.preventDefault();

            if (!options.galleryViewInProcess) {
                options.galleryViewInProcess = true;
                options.galleryContentLoading = true;



                setTimeout(function() {
                    if (options.galleryContentLoading) {
                        options.gallery.addClass('gallery_loading');
                    }
                }, 500);

                

                options.previewItem.removeClass('preview__item_active');
                $(this).addClass('preview__item_active');



                options.galleryActive = $('.gallery__active');
                var big = $(this).attr('data-big');

                
                options.galleryView.append('<div class="gallery__img gallery__inactive" style="background-image: url('+ big +');"></div>');

                options.galleryView.imagesLoaded(function () {
                    options.galleryContentLoading = false;
                    options.gallery.removeClass('gallery_loading');
                    options.galleryActive.fadeOut('slow', function() {
                        $(this).remove();
                        $('.gallery__inactive').addClass('gallery__active').removeClass('gallery__inactive');
                        options.galleryViewInProcess = false;
                    });
                });
            }
        });
    }

    

    return {
      init: function () {
        _setUpListners();
      }
    };
}());