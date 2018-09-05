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
                $(this).html('<button>'+ intValue + '</button>')
                $(this).val(intValue);
            });
        },
        
        addToScore: function(userSelection) {
            score += +$(userSelection).val();
            $('.score').text(score);
        },
        
        resetGame: function() {
            score = 0;
            this.randomNumber() = gameNumber;
            this.generateIntValues();
        },

        loseGame: function() {
            if (score > gameNumber) {
                $('.losses').text(losses++);
                this.resetGame()
            };
        },
        
        winGame: function() {
            if (score == gameNumber) {
                $('.wins').text(wins++);
                this.resetGame();
            };
        },
    };

    var eventHandlers = {
        addToScore: $('.crystal').click(function() {
           game.addToScore(this);
        }),

        checkTotal: $('crystal').click(function() { 
            game.loseGame();
            game.winGame();
        }),

        intializeGame: $('.newGame').click(function() {
            game.assignIntValues()
            game.generateGameValue();
        })
    };

});