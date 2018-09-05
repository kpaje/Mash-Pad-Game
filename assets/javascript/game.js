let gameNumber = 0
let wins = 0;
let losses = 0;
let score = 0;


var game = {
    randomNumber: function(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    },

    generateGameValue: function() {
        gameNumber = this.randomNumber(19, 120);
        $('.gameNumber').append(gameNumber);
    },

    assignIntValues: function() {
        $('.crystal').each(function() {
            intValue = game.randomNumber(1, 19);
            $(this).append('<button>' + intValue + '</button>')
            $(this).attr({
                'value': intValue
            });
        });
    },
    
    addToScore: function() {
        intValue = parseInt($('.crystal').val());
        score =  intValue + score;
        console.log(score);
        // $('.score').append(intValue);
    },
    
    resetGame: function() {
        score = 0;
        this.randomNumber() = gameNumber;
        this.generateIntValues();
    },

    loseGame: function() {
        if (score > randomNumber) {
            losses++;
            this.resetGame()
        };
    },
    
    winGame: function() {
        if (score == randomNumber) {
            wins++;
            this.resetGame();
        };
    },
};

var eventHandlers = {
    addToScore: $('.crystal').click(function() {
        // game.assignIntValues();
        game.addToScore();
    }),

    checkTotal: $('crystal').click(function() { 
        loseGame();
        winGame();
    }),
};


game.generateGameValue();
game.assignIntValues();

console.log(
    $('.crystal').each(function() {
        console.log($('.crystal').val());
    })
);
