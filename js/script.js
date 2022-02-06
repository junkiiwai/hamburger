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
  let timer = null;
  $(window).resize(function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      $(".p-sidebar").animate({
        "margin-left": "0px",
      });
      $(".p-menutab--bg").css("visibility", "hidden");
    }, 50);  //0.05秒以上resizeが静止すれば発火する
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
