// URL 객체 관리
const url =  window.location.href;
const urlObject =  new URL(url);
const urlParams = urlObject.searchParams;

// 설정 파일 불러오기
const videoUrl = urlParams.get('videoUrl');
// const videoUrl = "QR1_0-1";
const videoAllList = JSON.parse(JSON.stringify(videoList));
const videoInfo = videoAllList[videoUrl];

let sectionTime = videoInfo["sectionTime"];
let verseCnt = sectionTime.length;
let sectionCnt = sectionTime.length;

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

    // 절 및 구간 데이터 로딩
    Frame.sectionDataLoading(videoInfo.verseType);
    
}

// 페이지 로딩 후 이루어질 이벤트 등록
Frame.videoLoading = function ( url ) {

    // 비디오 데이터 로딩
    $("#vd_score").attr("src", url);
    $("#vd_score").get(0).pause();

    // 플레이 타입 세팅
    Frame.playTypeSetting(videoInfo.playType);

    // 볼륨 컨트롤
    // $("#vd_score").get(0).volume = 0.1;

    // 구간 버튼 초기화
    $(".section-btn").addClass("btn-secondary");
    $(".section-btn").removeClass("btn-primary");

}

// 플레이 방식 세팅
Frame.playTypeSetting = function ( playType ) {

    $(".play-select .btn-play").removeClass("onShow");

    switch (playType) {
        case 'single': // Only AR
            $(".play-select .btn-play-ar").addClass("onShow");
            break;
        case 'solo': // 단성부
            $(".play-select .btn-play-ar").addClass("onShow");
            $(".play-select .btn-play-mr").addClass("onShow");
            break;
        case 'polyphony': // 다성부
            $(".play-select .btn-play-ar").addClass("onShow");
            $(".play-select .btn-play-mr").addClass("onShow");
            $(".play-select .btn-play-ar-first").addClass("onShow");
            $(".play-select .btn-play-ar-second").addClass("onShow");
            break;
        case 'polyphony2': // 다성부
            $(".play-select .btn-play-ar").addClass("onShow");
            $(".play-select .btn-play-mr").addClass("onShow");
            $(".play-select .btn-play-ar-male").addClass("onShow");
            $(".play-select .btn-play-ar-female").addClass("onShow");
            break;
        case 'multilingual': // 다국어
            $(".play-select .btn-play-ar").addClass("onShow");
            $(".play-select .btn-play-mr").addClass("onShow");
            $(".play-select .btn-play-original-ar").addClass("onShow");
            break;
        case 'multilingual_polyphony': // 다국어, 다성부
            $(".play-select .btn-play-ar").addClass("onShow");
            $(".play-select .btn-play-mr").addClass("onShow");
            $(".play-select .btn-play-original-ar").addClass("onShow");
            $(".play-select2 .btn-play-ar-first2").addClass("onShow");
            $(".play-select2 .btn-play-ar-second2").addClass("onShow");
            $(".play-select2 .btn-play-original-ar-first").addClass("onShow");
            $(".play-select2 .btn-play-original-ar-second").addClass("onShow");
            break;
        case 'variation': // 변형1
            $(".play-select .btn-play-ar").addClass("onShow");
            $(".play-select .btn-play-mr").addClass("onShow");
            $(".play-select .btn-play-var-ar").addClass("onShow");
            $(".play-select .btn-play-var-mr").addClass("onShow");
            break;
        case 'variation2': // 변형2
            $(".play-select .btn-play-ar").addClass("onShow");
            $(".play-select .btn-play-mr").addClass("onShow");
            $(".play-select2 .btn-play-var-ar1").addClass("onShow");
            $(".play-select2 .btn-play-var-mr1").addClass("onShow");
            $(".play-select2 .btn-play-var-ar2").addClass("onShow");
            $(".play-select2 .btn-play-var-mr2").addClass("onShow");
            break;
        case 'recorder': // 리코더1, 리코더2
            $(".play-select .btn-play-ar").addClass("onShow");
            $(".play-select .btn-play-ar-recorder1").addClass("onShow");
            $(".play-select .btn-play-ar-recorder2").addClass("onShow");
            break;   
        case 'ensemble1': // 합주1 - 리코더1, 리코더2, 칼림바, 피아노
            $(".play-select .btn-play-ar").addClass("onShow");
            $(".play-select2 .btn-play-ar-recorder2-1").addClass("onShow");
            $(".play-select2 .btn-play-ar-recorder2-2").addClass("onShow");
            $(".play-select2 .btn-play-ar-kalimba").addClass("onShow");
            $(".play-select2 .btn-play-ar-piano").addClass("onShow");
            break;
    }

    // 플레이 방식 버튼 이벤트 등록
    Frame.playMethodBtnEventRegister();
}

// 구간별 시간 배열 등록
Frame.sectionDataLoading = function ( verseType ) {

    if( verseType == "single" ) {
        
        // 버튼 생성 이벤트
        Frame.sectionBtnCreate( "single" );

    } else if ( verseType == "multitude" ) {

        // 버튼 생성 이벤트
        Frame.verseBtnCreate();

    }
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

    });

    // 변형 MR 듣기
    $(document).on("click", ".btn-play-var-mr", function () {

        Frame.videoLoading( videoInfo.videoMrVarUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");
    });

    // 변형 AR 듣기1
    $(document).on("click", ".btn-play-var-ar1", function () {

        Frame.videoLoading( videoInfo.videoArVarUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });

    // 변형 MR 듣기1
    $(document).on("click", ".btn-play-var-mr1", function () {

        Frame.videoLoading( videoInfo.videoMrVarUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");
    });

    // 변형 AR 듣기2
    $(document).on("click", ".btn-play-var-ar2", function () {

        Frame.videoLoading( videoInfo.videoArVarUrl2 );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });

    // 변형 MR 듣기2
    $(document).on("click", ".btn-play-var-mr2", function () {

        Frame.videoLoading( videoInfo.videoMrVarUrl2 );

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

    // 1성부 듣기2
    $(document).on("click", ".btn-play-ar-first2", function () {

        Frame.videoLoading( videoInfo.videoArFirstUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });

    // 2성부 듣기2
    $(document).on("click", ".btn-play-ar-second2", function () {

        Frame.videoLoading( videoInfo.videoArSecondUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });


    // 원어 1성부 듣기
    $(document).on("click", ".btn-play-original-ar-first", function () {

        Frame.videoLoading( videoInfo.videoArOriFirstUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });

    // 원어 2성부 듣기
    $(document).on("click", ".btn-play-original-ar-second", function () {

        Frame.videoLoading( videoInfo.videoArOriSecondUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });

    // 리코더1 듣기
    $(document).on("click", ".btn-play-ar-recorder1", function () {

        Frame.videoLoading( videoInfo.videoArRecorder1 );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });
    
    // 리코더2 듣기
    $(document).on("click", ".btn-play-ar-recorder2", function () {

        Frame.videoLoading( videoInfo.videoArRecorder2 );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });
    
    // 리코더1 듣기2
    $(document).on("click", ".btn-play-ar-recorder2-1", function () {

        Frame.videoLoading( videoInfo.videoArRecorder1 );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });
    
    // 리코더2 듣기2
    $(document).on("click", ".btn-play-ar-recorder2-2", function () {

        Frame.videoLoading( videoInfo.videoArRecorder2 );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });
    
    // 칼림바 듣기
    $(document).on("click", ".btn-play-ar-kalimba", function () {

        Frame.videoLoading( videoInfo.videoArKalimba );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });
    
    // 피아노 듣기
    $(document).on("click", ".btn-play-ar-piano", function () {

        Frame.videoLoading( videoInfo.videoArPiano );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });

    // 남성 듣기
    $(document).on("click", ".btn-play-ar-male", function () {

        Frame.videoLoading( videoInfo.videoArMaleUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });

    // 여성 듣기
    $(document).on("click", ".btn-play-ar-female", function () {

        Frame.videoLoading( videoInfo.videoArFemaleUrl );

        $(".btn-play").addClass("btn-secondary");
        $(".btn-play").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

    });

}

// 절 버튼 생성
Frame.verseBtnCreate = function () {

    let verseBtnArea = $("#verse-btn-area");

    let htmlText = '';

    verseBtnArea.empty();
    for (let i = 0; i<verseCnt; i++) {
        htmlText += `<button name="verse${i+1}" class="btn btn-secondary verse-btn" data-verse="${i}">${i+1}절</button>\n` 
    }

    verseBtnArea.append(htmlText);

    $("#verse-btn-area button[name='verse1']").removeClass("btn-secondary");
    $("#verse-btn-area button[name='verse1']").addClass("btn-primary");

    // 구간 버튼 생성
    Frame.sectionBtnCreate ('multitude', 0);
    Frame.playVerseBtnEventRegister();
}

// 절 선택 버튼 이벤트 등록
Frame.playVerseBtnEventRegister = function () {

    // 절 버튼
    $(document).on("click", ".verse-btn", function () {
        $(".verse-btn").addClass("btn-secondary");
        $(".verse-btn").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");

        // 해당 절에 맞는 구간 버튼 생성
        Frame.sectionBtnCreate( 'multitude', $(this).data('verse') );
    });

}

// 구간 버튼 생성
Frame.sectionBtnCreate = function ( type, verse ) {

// 단일 절인지, 다중 절인지 구분
// 어느 절인지 확인
// 어느 절의 구간이 몇개 있는지 확인

    // 단일 절일 때
    if( type == 'single') {
        sectionCnt = sectionTime.length;
    // 여러 절일 때
    } else if ( type == 'multitude') {
        sectionCnt = sectionTime[verse].length;
    }

    let sectionBtnArea = $("#section-btn-area");
    let htmlText = '';

    sectionBtnArea.empty();
    for (let i = 0; i < sectionCnt; i++) {
        htmlText += `<button name="section${i+1}" class="btn btn-secondary section-btn">${i+1}</button>\n`
    }

    sectionBtnArea.append(htmlText);

    // 구간 버튼 이벤트 등록
    Frame.sectionBtnEventRegister(type, verse);

}

// 구간 버튼 이벤트 등록
Frame.sectionBtnEventRegister = function ( type, verse ) {

    for (let i = 0; i < sectionCnt; i++) {
        $(document).off("click", `#section-btn-area button[name='section${i+1}']`);
    }

    for (let i = 0; i < sectionCnt; i++) {
        $(document).on("click", `#section-btn-area button[name='section${i+1}']`, function () {
            if (type == 'single') { // 단일 절일 때
                $("#vd_score").get(0).currentTime = sectionTime[i];
            } else if (type == 'multitude') { // 다중 절일 때
                $("#vd_score").get(0).currentTime = sectionTime[verse][i];
            }
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
