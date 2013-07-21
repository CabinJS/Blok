$(function() {
  $('abbr.timeago').timeago();
  var nav = false;
  // Show or hide nav dropdown
  $('body').click(function(event) {
    if (nav) {
      $('.nav-link').removeClass('nav-show');
      nav = false;
    } else if ($(event.target).hasClass('menu')) {
      $('.nav-link').addClass('nav-show');
      nav = true;
    }
  });
});
