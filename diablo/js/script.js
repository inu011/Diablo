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
