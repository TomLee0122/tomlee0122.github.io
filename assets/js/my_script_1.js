$(document).ready(function () {
    // FitVids init
    $("#main").fitVids();

    // Follow menu drop down
    $(".author__urls-wrapper button").on("click", function (e) {
        e.preventDefault();     // 阻止默认动作（更保险）
        e.stopImmediatePropagation(); // 非常重要！！！阻止后续冒泡和事件处理！

        var $wrapper = $(this).closest(".author__urls-wrapper");
        var $menu = $wrapper.find(".author__urls");

        var isVisible = $menu.hasClass("is--visible");

        // 关闭所有
        $(".author__urls").removeClass("is--visible");
        $(".author__urls-wrapper button").removeClass("open");

        // 只在当前是关闭状态时才打开
        if (!isVisible) {
            $menu.addClass("is--visible");
            $(this).addClass("open");
        }
    });

    // 点击空白处，关闭所有菜单
    $(document).on("click", function () {
        $(".author__urls").removeClass("is--visible");
        $(".author__urls-wrapper button").removeClass("open");
    });
});

// $(document).ready(function () {
//     // FitVids init
//     $("#main").fitVids();

//     // Follow menu drop down
//     $(".author__urls-wrapper button").on("click", function (e) {
//         e.stopPropagation(); // 防止事件冒泡影响其他东西

//         var $wrapper = $(this).closest(".author__urls-wrapper");
//         var $menu = $wrapper.find(".author__urls");

//         // 关闭所有菜单
//         $(".author__urls").removeClass("is--visible");
//         $(".author__urls-wrapper button").removeClass("open");

//         // 如果当前菜单是已经打开的，再次点击就不打开了
//         if (!$menu.hasClass("is--visible")) {
//             $menu.addClass("is--visible");
//             $(this).addClass("open");
//         }
//     });

//     // 点击页面其他地方时，关闭所有菜单
//     $(document).on("click", function () {
//         $(".author__urls").removeClass("is--visible");
//         $(".author__urls-wrapper button").removeClass("open");
//     });
// });