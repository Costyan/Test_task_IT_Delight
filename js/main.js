'use strict';
$(function() {
  $('.slider').jcarousel({
    wrap: 'circular',
  });
  $('.slider__prev').click(function(e) {
    e.preventDefault();
    $('.slider').jcarousel('scroll', '-=1');
  });
  $('.slider__next').click(function(e) {
    e.preventDefault();
    $('.slider').jcarousel('scroll', '+=1');
  });
  var news = tmpl($('#news-tmpl').html(), Db.news);
  $('#news-tmpl').remove();
  $('.content__news__content').append(news);
  var products = tmpl($('#products-tmpl').html(), Db.products);
  $('#products-tmpl').remove();
  $('.content__products').append(products);
});
