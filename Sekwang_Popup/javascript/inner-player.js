// URL 객체 관리
const url =  window.location.href;
const urlObject =  new URL(url);
const urlParams = urlObject.searchParams;

// 설정 파일 불러오기
const videoUrl = urlParams.get('videoUrl');
// const videoUrl = "QR1_0-1";
// const videoAllList = JSON.parse(JSON.stringify(videoList));
const videoAllList2 = JSON.parse(JSON.stringify(videoList));
// const videoInfo = videoAllList[videoUrl];
const videoInfo = videoAllList2[videoUrl];

const sectionTime = videoInfo["sectionTime"];
const sectionCnt = sectionTime.length;

// console.log(`urlParams : ${urlParams}`);
// console.log(`videoUrl : ${videoUrl}`);
// console.log(`videoInfo : ${videoInfo.videoArUrl}`);
// console.log(`sectionTime: ${sectionTime}`);
// console.log(`sectionCnt: ${sectionCnt}`);

$(document).ready(function(){

    // 페이지 최초 로딩
    Frame.pageLoading();
    


 
});

// 페이지 로딩 후 이루어질 이벤트 등록
Frame.pageLoading = function () {

    console.log("Frame.pageLoading");

    // 비디오 세팅
    Frame.videoLoading(videoInfo.videoArUrl);

    // 구간 데이터 로딩
    Frame.sectionDataLoading();
    
}

// 페이지 로딩 후 이루어질 이벤트 등록
Frame.videoLoading = function ( url ) {

    // 비디오 데이터 로딩
    $("#vd_score").attr("src", url);
    $("#vd_score").get(0).pause();


    // 볼륨 컨트롤
    $("#vd_score").get(0).volume = 0.2;



    // 구간 버튼 초기화
    $(".section-btn").addClass("btn-secondary");
    $(".section-btn").removeClass("btn-primary");
}

// 구간별 시간 배열 등록
Frame.sectionDataLoading = function () {

    // if( playType == "solo" ) {
    //     // 버튼 생성 이벤트
    // } else if ( playType == "duet" ) {
    //     // 버튼 생성 이벤트
    // }

    // 구간 버튼 생성
    Frame.sectionBtnCreate();

    // 플레이 방식 버튼 이벤트 등록
    Frame.playMethodBtnEventRegister();
}

// 플레이 방식 버튼 이벤트 등록
Frame.playMethodBtnEventRegister = function () {

    // AR 듣기
    $(document).on("click", ".btn-play-ar", function () {

        Frame.videoLoading( videoInfo.videoArUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

        $("#score").get(0).pause();
    });

    // MR 듣기
    $(document).on("click", ".btn-play-mr", function () {

        Frame.videoLoading( videoInfo.videoMrUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");
    });

    // 변형 AR 듣기
    $(document).on("click", ".btn-play-var-ar", function () {

        Frame.videoLoading( videoInfo.videoArVarUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

        $("#score").get(0).pause();
    });

    // 변형 MR 듣기
    $(document).on("click", ".btn-play-var-mr", function () {

        Frame.videoLoading( videoInfo.videoMrVarUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");
    });

    // 원어 AR 듣기
    $(document).on("click", ".btn-play-original-ar", function () {

        Frame.videoLoading( videoInfo.videoArOriginalUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

        $("#score").get(0).pause();
    });

    // 원어 MR 듣기
    $(document).on("click", ".btn-play-original-mr", function () {

        Frame.videoLoading( videoInfo.videoMrOriginalUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");
    });

    // 1성부 듣기
    $(document).on("click", ".btn-play-ar-first", function () {

        Frame.videoLoading( videoInfo.videoArFirstUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });

    // 2성부 듣기
    $(document).on("click", ".btn-play-ar-second", function () {

        Frame.videoLoading( videoInfo.videoArSecondUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });

}

// 구간 버튼 생성
Frame.sectionBtnCreate = function () {
    let sectionBtnArea = $("#section-btn-area");

    let htmlText = '';

    sectionBtnArea.empty();
    for (let i = 0; i<sectionCnt; i++) {
        htmlText += `<button name="section${i+1}" class="btn btn-secondary section-btn">${i+1}</button>\n` 
    }

    sectionBtnArea.append(htmlText);

    // 구간 버튼 이벤트 등록
    Frame.sectionBtnEventRegister();
}

// 구간 버튼 이벤트 등록
Frame.sectionBtnEventRegister = function () {

    for (let i = 0; i<sectionCnt; i++) {
        $(document).on("click", `#section-btn-area button[name='section${i+1}']`, function () {
            $("#vd_score").get(0).currentTime = sectionTime[i];
            $("#vd_score").attr("autoplay", "true");
            $("#vd_score").get(0).play();
            $(".section-btn").addClass("btn-secondary");
            $(".section-btn").removeClass("btn-primary");
            $(this).addClass("btn-primary");
            $(this).removeClass("btn-secondary");
        });

    }
}



// 카운트 다운 효과 개발 예정
Frame.countDown = function () {
    
}
