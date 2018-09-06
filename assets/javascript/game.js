$(document).ready(function() {
    let targetValue = 0;
    let wins = 0;
    let losses = 0;
    let score = 0;

    const loseImgs = [
        "https://media1.tenor.com/images/392439cf19e698d6fece11220e45a7e3/tenor.gif?itemid=4200659",
        "https://media.giphy.com/media/joHVQBm1RJtbq/giphy.gif",
        "https://media.giphy.com/media/11pQizRLu1JP0c/giphy.gif",
        "https://media0.giphy.com/media/13k0uUW3Aicx20/200w.gif",
        "https://media1.tenor.com/images/31bce3dce08436b767da9ac35a69a13f/tenor.gif?itemid=4762099",
        "http://33.media.tumblr.com/feefd040f219ad92cc4188c402a009cc/tumblr_n7432lLPu61smcbm7o1_500.gif",
    ];

    const winImgs = [
        "https://media.giphy.com/media/yjvUtGGCX4Swo/giphy.gif",
        "https://thumbs.gfycat.com/VibrantElasticKoalabear-size_restricted.gif",
        "http://www.gurl.com/wp-content/uploads/2013/07/tumblr_mgeaegWdiV1r8o0xao1_500.gif",
        "https://assets.rbl.ms/5000642/980x.jpg",
        "https://media1.popsugar-assets.com/files/thumbor/gJnh-gX8egebm6qeRw_zvQ39y7Q/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/01/13/846/n/3019466/3dd68cf1c18287ce_hm/i/He-basically-your-favorite-person-fight.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgshrrDixRxZq8wq46qD2OQsWmZw1J_WgKWA8lhmgWQH74PvAi",
    ];

    var game = {
        randomValue: function(min, max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        },

        generateTargetValue: function() {
            targetValue = this.randomValue(19, 120);
            $('.targetValue').text(targetValue);
        },

        assignPointsValue: function() {
            $('.gamePad').each(function() {
                var pointsValue = game.randomValue(1, 19);
                $(this).val(pointsValue);
            });
        },
        
        countScore: function(userSelection) {
            score += +$(userSelection).val();
            $('.score').text(score);
        },
        
        resetGame: function() {
            score = 0;
            $('.score').text(score);
            this.generateTargetValue();
            this.assignPointsValue();
        },

        loseGame: function() {
            if (score > targetValue) {
                $('.losses').text(losses+=1);
                eventHandlers.showLoserImage();
                this.resetGame();
            };
        },
        
        winGame: function() {
            if (score == targetValue) {
                $('.wins').text(wins+=1);
                eventHandlers.showWinnerImage();
                this.resetGame();
            };
        },
    };

    var eventHandlers = {
        scoreMonitor: $('.gamePad').click(function() {
           game.countScore(this);
           game.loseGame(this);
           game.winGame(this);
        }),

        intializeGame: $('.newGame').click(function() {
            game.resetGame();
            $(this).remove();
        }),

        showLoserImage: function() {
            var randomImage = Math.floor((Math.random() * loseImgs.length)); 
            var image = $('#loser').attr('src', loseImgs[randomImage]);
            image.show();
            setTimeout(function() {
                $('#loser').removeAttr('src');
            }, 5000);
        },

        showWinnerImage: function() {
            var randomImage = Math.floor((Math.random() * winImgs.length)); 
            var image = $('#winner').attr('src', winImgs[randomImage]);
            image.show()
            setTimeout(function() {
                $('#winner').removeAttr('src');
            }, 5000);
        },
    };
});