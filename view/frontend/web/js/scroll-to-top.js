define([
    'jquery',
    'domReady!'
], function ($) {
    'use strict';

    return function (config, element) {
        var $button = $(element),
            offset = 300; // 滚动超过 300px 显示按钮

        // 监听滚动控制显隐
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > offset) {
                $button.fadeIn(200);
            } else {
                $button.fadeOut(200);
            }
        });

        // 点击平滑返回顶部
        $button.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 400);
        });
    };
});