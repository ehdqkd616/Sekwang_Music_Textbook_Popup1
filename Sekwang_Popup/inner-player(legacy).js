// URL 객체 관리
const url =  window.location.href;
const urlObject =  new URL(url);
const urlParams = urlObject.searchParams;
// const videoUrl = urlParams.get('videoUrl');
// const videoArUrl = urlParams.get('videoArUrl');
// const videoMrUrl = urlParams.get('videoMrUrl');
// const videoArFirstUrl = urlParams.get('videoUrl');
// const videoArSecondUrl = urlParams.get('videoUrl');
// const playType = urlParams.get('playType');

const videoUrl = 'video/14쪽_즐거운봄_ar.mp4';
const videoArUrl = 'video/14쪽_즐거운봄_ar.mp4';
const videoMrUrl = 'video/14쪽_즐거운봄_mr.mp4';
const videoArFirstUrl = 'video/14쪽_즐거운봄_ar.mp4';
const videoArSecondUrl = 'video/14쪽_즐거운봄_ar.mp4';
const playType = 'solo';
// const playType = 'duet';


const sectionTime = [10, 20, 30, 40, 50, 60];
const sectionCnt = sectionTime.length;

$(document).ready(function(){
    // 페이지 최초 로딩
    Frame.pageLoading();


    
    console.log(`urlObject : ${urlObject}`);
    console.log(`urlParams : ${urlParams}`);
    console.log(`videoUrl : ${videoUrl}`);
    console.log(`playType : ${playType}`);
});

// 페이지 로딩 후 이루어질 이벤트 등록
Frame.pageLoading = function () {

    // 구간 데이터 로딩
    Frame.sectionDataLoading();
    Frame.videoLoading();
    
}

// 페이지 로딩 후 이루어질 이벤트 등록
Frame.videoLoading = function () {

    // 비디오 데이터 로딩
    $("#score-ar").attr("src", videoArUrl);
    $("#score-mr").attr("src", videoMrUrl);
    $("#score-ar-first").attr("src", videoArFirstUrl);
    $("#score-ar-second").attr("src", videoArSecondUrl);
    
}

// 구간별 시간 배열 등록
Frame.sectionDataLoading = function () {

    // if( playType == "solo" ) {
    //     // 버튼 생성 이벤트
    // } else if ( playType == "duet" ) {
    //     // 버튼 생성 이벤트
    // }

    // let sectionTime = [10, 20, 30, 40, 50, 60];
    // let sectionCnt = sectionTime.length;

    console.log(`sectionTime: ${sectionTime}`);
    console.log(`sectionCnt: ${sectionCnt}`);

    // 구간 버튼 생성
    Frame.sectionBtnCreate();

    // 플레이 방식 버튼 이벤트 등록
    Frame.playMethodBtnEventRegister();
}

// 플레이 방식 버튼 이벤트 등록
Frame.playMethodBtnEventRegister = function () {

    $(document).on("click", ".btn-play-ar", function () {

        $("#score-ar").attr("src", videoArUrl);

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

        $(".scores").removeClass("onShow");
        $(".scores_0").addClass("onShow");

        // $("#score").get(0).pause();

        $('.vd_score').each(function(){
            $(this).get(0).pause()
        });

        // console.log("play-mr");
    });

    $(document).on("click", ".btn-play-mr", function () {

        $("#score-mr").attr("src", videoMrUrl);

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

        $(".scores").removeClass("onShow");
        $(".scores_1").addClass("onShow");

        // $("#score").get(0).pause();

        $('.vd_score').each(function(){
            $(this).get(0).pause()
        });

    });

    $(document).on("click", ".btn-play-ar-first", function () {

        $("#score-mr").attr("src", videoArFirstUrl);

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

        $(".scores").removeClass("onShow");
        $(".scores_2").addClass("onShow");

        // $("#score").get(0).pause();

        $('.vd_score').each(function(){
            $(this).get(0).pause()
        });

    });

    $(document).on("click", ".btn-play-ar-second", function () {

        $("#score-mr").attr("src", "video/14쪽_즐거운봄_mr.mp4");

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

        $(".scores").removeClass("onShow");
        $(".scores_3").addClass("onShow");

        // $("#score").get(0).pause();

        $('.vd_score').each(function(){
            $(this).get(0).pause()
        });

    });

}

// 구간 버튼 생성
Frame.sectionBtnCreate = function () {
    let sectionArBtnArea = $("#section-btn-ar");
    let sectionMrBtnArea = $("#section-btn-mr");
    let sectionArFirstBtnArea = $("#section-btn-ar-first");
    let sectionArSecondBtnArea = $("#section-btn-ar-second");

    let htmlText = '';

    sectionArBtnArea.empty();
    for (let i = 0; i<sectionCnt; i++) {
        htmlText += `<button name="section${i+1}" class="btn btn-secondary section-btn">${i+1}</button>\n` 
    }

    sectionArBtnArea.append(htmlText);
    sectionMrBtnArea.append(htmlText);
    sectionArFirstBtnArea.append(htmlText);
    sectionArSecondBtnArea.append(htmlText);

    Frame.sectionBtnEventRegister();
}

// 구간 버튼 이벤트 등록
Frame.sectionBtnEventRegister = function () {

    for (let i = 0; i<sectionCnt; i++) {
        $(document).on("click", `#section-btn-ar button[name='section${i+1}']`, function () {
            $("#score-ar").get(0).currentTime = sectionTime[i];
            $("#score-ar").attr("autoplay", "true");
            $(".section-btn").addClass("btn-secondary");
            $(".section-btn").removeClass("btn-primary");
            $(this).addClass("btn-primary");
            $(this).removeClass("btn-secondary");
            console.log("클릭됨");
        });

        // $(document).on("click", `#section-btn-mr button[name='section${i+1}']`, function () {
        //     $("#score-mr").get(0).currentTime = sectionTime[i];
        //     $("#score-mr").attr("autoplay", "true");
        //     $(".section-btn").addClass("btn-secondary");
        //     $(".section-btn").removeClass("btn-primary");
        //     $(this).addClass("btn-primary");
        //     $(this).removeClass("btn-secondary");
        //     console.log("클릭됨");
        // });

        // $(document).on("click", `#section-btn-ar-first button[name='section${i+1}']`, function () {
        //     $("#score-ar-first").get(0).currentTime = sectionTime[i];
        //     $("#score-ar-first").attr("autoplay", "true");
        //     $(".section-btn").addClass("btn-secondary");
        //     $(".section-btn").removeClass("btn-primary");
        //     $(this).addClass("btn-primary");
        //     $(this).removeClass("btn-secondary");
        //     console.log("클릭됨");
        // });

        // $(document).on("click", `#section-btn-ar-second button[name='section${i+1}']`, function () {
        //     $("#score-ar-second").get(0).currentTime = sectionTime[i];
        //     $("#score-ar-second").attr("autoplay", "true");
        //     $(".section-btn").addClass("btn-secondary");
        //     $(".section-btn").removeClass("btn-primary");
        //     $(this).addClass("btn-primary");
        //     $(this).removeClass("btn-secondary");
        //     console.log("클릭됨");
        // });
    }
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

});