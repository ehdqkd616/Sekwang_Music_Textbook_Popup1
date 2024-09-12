Frame.buttonLoading = function () {

    $(document).on("click", ".frame1 button[name='test1']", function () {
        $("#score").get(0).currentTime = 10;
        $("#score").attr("autoplay", "true");
        console.log("클릭됨");
        // $("#score").get(0).pause();
        // $("#score").attr("autoplay", "true");
    });

    $(document).on("click", ".frame1 button[name='test2']", function () {
        $("#score").get(0).currentTime = 20;
        $("#score").attr("autoplay", "true");
        console.log("클릭됨");
    });

    $(document).on("click", ".frame1 button[name='test3']", function () {
        $("#score").get(0).currentTime = 30;
        $("#score").attr("autoplay", "true");
        console.log("클릭됨");
    });

    $(document).on("click", ".frame1 button[name='test4']", function () {
        $("#score").get(0).currentTime = 40;
        $("#score").attr("autoplay", "true");
        console.log("클릭됨");
    });

    $(document).on("click", ".frame1 button[name='test5']", function () {
        $("#score").get(0).currentTime = 50;
        $("#score").attr("autoplay", "true");
        console.log("클릭됨");
    });
}

$(document).ready(function () {

    Frame.buttonLoading();

    $(document).on("click", ".play-select-area button[name='play-mr']", function () {

        $("#score").attr("src", "video/14쪽_즐거운봄_mr.mp4");

        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");
        $("button[name='play-ar']").addClass("btn-secondary");
        $("button[name='play-ar']").removeClass("btn-primary");
        // $(".scores_0").addClass("onShow");
        // $(".scores_1").removeClass("onShow");

        $("#score").get(0).pause();

        // $('.vd_score').each(function(){
        //     $(this).get(0).pause()
        // });

        console.log("play-mr");
    });

    $(document).on("click", ".play-select-area button[name='play-ar']", function () {
        $("#score").attr("src", "video/14쪽_즐거운봄_ar.mp4");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");
        $("button[name='play-mr']").addClass("btn-secondary");
        $("button[name='play-mr']").removeClass("btn-primary");
        // $(".scores_1").addClass("onShow");
        // $(".scores_0").removeClass("onShow");

        $("#score").get(0).pause();

        // $('.vd_score').each(function () {
        //     $(this).get(0).pause()
        // });

        console.log("play-ar");
    });




    $(document).on("click", ".frame1 button[name='test1']", function () {
        $(".vd_score").get(0).currentTime = 10;
        $(".vd_score").attr("autoplay", "true");
        console.log("클릭됨");
        // $("#score").get(0).pause();
        // $("#score").attr("autoplay", "true");
    });

    $(document).on("click", ".frame1 button[name='test2']", function () {
        $("#score").get(0).currentTime = 20;
        $("#score").attr("autoplay", "true");
        console.log("클릭됨");
    });

    $(document).on("click", ".frame1 button[name='test3']", function () {
        $("#score").get(0).currentTime = 30;
        $("#score").attr("autoplay", "true");
        console.log("클릭됨");
    });

    $(document).on("click", ".frame1 button[name='test4']", function () {
        $("#score").get(0).currentTime = 40;
        $("#score").attr("autoplay", "true");
        console.log("클릭됨");
    });

    $(document).on("click", ".frame1 button[name='test5']", function () {
        $("#score").get(0).currentTime = 50;
        $("#score").attr("autoplay", "true");
        console.log("클릭됨");
    });

});