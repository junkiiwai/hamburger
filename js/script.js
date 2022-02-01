// メニュータブをクリックしてサイドバーを開いて暗くする

$(function () {
  $(".p-menutab--open").click(function () {
    if (window.matchMedia("(max-width: 766px)").matches) {
      $(".p-sidebar").animate({
        "margin-left": "-328px",
      });
    } else {
      $(".p-sidebar").animate({
        "margin-left": "-428px",
      });
    }
    $(".p-menutab--bg").css("visibility", "visible");
  });
});

// Xボタンクリックしてサイドバーを閉じて明るく戻す
$(function () {
  $(".p-menutab--close").click(function () {
    $(".p-sidebar").animate({
      "margin-left": "0px",
    });
    $(".p-menutab--bg").css("visibility", "hidden");
  });
});

// 画面幅動かした時にサイドバーを閉じて明るく戻す
$(function () {
  $(window).resize(function () {
    $(".p-sidebar").animate({
      "margin-left": "0px",
    });
    $(".p-menutab--bg").css("visibility", "hidden");
  });
});

// p-frontBottomの高さを文字の高さに応じて伸縮させる
$(function () {
  $(window).resize(function () {
    const title = $(".p-frontBottom__title").outerHeight(true);
    const underbar = $(".p-frontBottom__underbar").outerHeight(true);
    const text = $(".p-frontBottom__text").outerHeight(true);
    $(".p-frontBottom").css("height", title + underbar + text);
  });
});

p-arcContentの高さをp-cardの高さに応じて伸縮させる
$(function () {
  $(window).resize(function () {
    if (window.matchMedia("(min-width: 600px)").matches) {
      $(function () {
        $(window).resize(function () {
          const arcBurgerHeight = $(".p-card").outerHeight(true);
          $(".p-arcContent__img").css("height", arcBurgerHeight);
        });
      });
    } else {
      $(function () {
        $(window).resize(function () {
          $(".p-arcContent__img").css("height", "auto");
        });
      });
    }
  });
});
