// const iframe = document.getElementById('vd_score');
const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

const idPlayer1 = new Vimeo.Player('player1');
const idPlayer2 = new Vimeo.Player('player2');

let currentPlayer = idPlayer1;

Frame.buttonLoading = function () {

    $(document).on("click", ".frame2 button[name='test1']", function () {

        currentPlayer.setCurrentTime(10).then(function() {
            currentPlayer.play();
        }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    console.log("the time was less than 0 or greater than the video’s duration")
                    break;
        
                default:
                    console.log("some other error occurred");
                    break;
            }
        });

        // player.pause().then(function () {
        //     console.log("the video was paused");
        // }).catch(function (error) {
        //     switch (error.name) {
        //         case 'PasswordError':
        //             console.log("the video is password-protected and the viewer needs to enter the password first");
        //             break;
        //         case 'PrivacyError':
        //             console.log("PrivacyError");
        //             break;
    
        //         default:
        //             console.log("some other error occurred");
        //             break;
        //     }
        // });
    });

    $(document).on("click", ".frame2 button[name='test2']", function () {
        currentPlayer.setCurrentTime(20).then(function() {
            currentPlayer.play();
        });
    });

    $(document).on("click", ".frame2 button[name='test3']", function () {
        currentPlayer.setCurrentTime(30).then(function() {
            currentPlayer.play();
        });
    });

    $(document).on("click", ".frame2 button[name='test4']", function () {
        currentPlayer.setCurrentTime(40).then(function() {
            currentPlayer.play();
        });
    });

    $(document).on("click", ".frame2 button[name='test5']", function () {
        currentPlayer.setCurrentTime(50).then(function() {
            currentPlayer.play();
        });
    });
}


$(document).ready(function () {
    
    Frame.buttonLoading();

    $(document).on("click", ".play-select-area button[name='play-mr']", function () {

        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");
        $("button[name='play-ar']").addClass("btn-secondary");
        $("button[name='play-ar']").removeClass("btn-primary");
        $(".scores_0").addClass("onShow");
        $(".scores_1").removeClass("onShow");

        currentPlayer.pause();
        currentPlayer.setCurrentTime(0);
        currentPlayer = idPlayer1;

        console.log("play-mr");
    });

    $(document).on("click", ".play-select-area button[name='play-ar']", function () {

        $(this).addClass("btn-primary");
        $(this).removeClass("btn-secondary");
        $("button[name='play-mr']").addClass("btn-secondary");
        $("button[name='play-mr']").removeClass("btn-primary");
        $(".scores_1").addClass("onShow");
        $(".scores_0").removeClass("onShow");

        currentPlayer.pause();
        currentPlayer.setCurrentTime(0);
        currentPlayer = idPlayer2;

        console.log("play-ar");
    });
});