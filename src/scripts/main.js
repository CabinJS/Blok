$(function() {

  'use strict';

  $('abbr.timeago').timeago();

  $('.menu').on('touchstart', function(event) {
    event.preventDefault();
    $('.nav-link').addClass('nav-show');
  });

  $('.content').on('touchstart', function() {
    $('.nav-link').removeClass('nav-show');
  });
});
