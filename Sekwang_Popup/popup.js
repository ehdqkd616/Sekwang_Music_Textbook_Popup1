const Frame = {};

$(document).ready(function () {
    $(document).on("click", "button[name='test1']", function () {
        $("#score").attr("src", "video/14쪽_즐거운봄_ar.mp4#t=10");
        $("#score").attr("autoplay", "true");
    });
    $(document).on("click", "button[name='test2']", function () {
        $("#score").attr("src", "video/14쪽_즐거운봄_ar.mp4#t=20");
        $("#score").attr("autoplay", "true");
    });
    $(document).on("click", "button[name='test3']", function () {
        $("#score").attr("src", "video/14쪽_즐거운봄_ar.mp4#t=30");
        $("#score").attr("autoplay", "true");
    });
    $(document).on("click", "button[name='test4']", function () {
        $("#score").attr("src", "video/14쪽_즐거운봄_ar.mp4#t=40");
        $("#score").attr("autoplay", "true");
    });
    $(document).on("click", "button[name='test5']", function () {
        $("#score").attr("src", "video/14쪽_즐거운봄_ar.mp4#t=50");
        $("#score").attr("autoplay", "true");
    });
});