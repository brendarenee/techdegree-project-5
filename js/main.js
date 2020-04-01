// Initialize Lightbox

lightbox.option({
  'maxWidth': 800,
  'maxHeight': 500,
  'showImageNumberLabel': false,
  'wrapAround': true,
  'fitImagesInViewport': true
});

//

var lightboxImages = $('.lightbox-main');

// Initiate Live Search on Keyup

$('.search-bar').on('keyup', 'input', function() {

// Translate user's (case insensitive) search input to RegExp

  let searchTerm = $(this).val();
  let regexSearchTerm = new RegExp(`${searchTerm}`, 'i');

// Iterate through images to test RegExp against each caption

  lightboxImages.each(function(){
    let caption = $(this).attr('data-title');
    if (regexSearchTerm.test(caption)) {

      // Show only images that match

      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
