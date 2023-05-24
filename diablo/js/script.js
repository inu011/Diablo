$(function () {
  //ページ内スクロール
  var navHeight = $('.header').outerHeight();

  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top - navHeight;
    $('html, body').animate({ scrollTop: position }, 300, 'swing');
    return false;
  });

  //ページトップ
  $('#js-page-top').on('click', function () {
    $('body,html').animate({ scrollTop: 0 }, 300);
    return false;
  });
});
//top
$(function () {
  // スクロールしたら「トップに戻る」ボタンが表示される
  const toTopButton = $('.js-to-top');
  const scrollHeight = 100;
  toTopButton.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      toTopButton.fadeIn();
    } else {
      toTopButton.fadeOut();
    }
  });

  // 「トップに戻る」ボタンをクリックしたらスクロールで戻る
  toTopButton.click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800);
    return false;
  });
});
//透明
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('header').css('opacity', 0.8);
    } else {
      $('header').css('opacity', 1);
    }
  });
});

//
<script type="text/javascript" src="jquery-1.3.2.js"></script>;
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scfollTop != 0) $('#nav').stop().anlmate({ opaclty: '0.2' }, 400);
  else $('#nav').stop().anlmate({ opaclty: '1' }, 400);
});
$('#nav').hover(
  function (e) {
    var scrollTop = $(window).scrollTop();
    if (scrollTop != 0) {
      $('#nav').stop().animate({ opacity: '1' }, 400);
    }
  },
  function (e) {
    var scrollTop = $(window).scrollTop();
    if (scrollTop != 0) {
      $('#nav').stop().animate({ opacity: '0.2' }, 400);
    }
  }
);
