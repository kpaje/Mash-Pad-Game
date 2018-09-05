$(document).ready(function() {
    let gameNumber = 0;
    let wins = 0;
    let losses = 0;
    let score = 0;

    var game = {
        randomNumber: function(min, max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        },

        generateGameValue: function() {
            gameNumber = this.randomNumber(19, 120);
            $('.gameNumber').text(gameNumber);
        },

        assignIntValues: function() {
            $('.crystal').each(function() {
                var intValue = game.randomNumber(1, 19);
                $(this).html('<button>'+ intValue + '</button>');
                $(this).val(intValue);
            });
        },
        
        countScore: function(userSelection) {
            score += +$(userSelection).val();
            $('.score').text(score);
        },
        
        resetGame: function() {
            score = 0;
            $('.score').text(score);
            this.generateGameValue();
            this.assignIntValues();
        },

        loseGame: function() {
            if (score > gameNumber) {
                $('.losses').text(losses+=1);
                this.resetGame();
            };
        },
        
        winGame: function() {
            if (score == gameNumber) {
                $('.wins').text(wins+=1);
                this.resetGame();
            };
        },
    };

    var eventHandlers = {
        scoreMonitor: $('.crystal').click(function() {
           game.countScore(this);
           game.loseGame(this);
           game.winGame(this);
        }),

        intializeGame: $('.newGame').click(function() {
            game.resetGame();
            $(this).remove();
        }),
    };

});