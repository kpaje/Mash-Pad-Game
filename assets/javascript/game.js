$(document).ready(function() {
    let maxHitPoints = 0, curHitPoints = maxHitPoints;
    let wins = 0;
    let losses = 0;
    let damage = 0;

    const winImgs = [
        "https://thumbs.gfycat.com/VibrantElasticKoalabear-size_restricted.gif",
        "http://www.gurl.com/wp-content/uploads/2013/07/tumblr_mgeaegWdiV1r8o0xao1_500.gif",
        "https://media1.popsugar-assets.com/files/thumbor/gJnh-gX8egebm6qeRw_zvQ39y7Q/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/01/13/846/n/3019466/3dd68cf1c18287ce_hm/i/He-basically-your-favorite-person-fight.gif",
        "https://media1.tenor.com/images/31bce3dce08436b767da9ac35a69a13f/tenor.gif?itemid=4762099",
        "http://33.media.tumblr.com/feefd040f219ad92cc4188c402a009cc/tumblr_n7432lLPu61smcbm7o1_500.gif",
        "https://thumbs.gfycat.com/DisfiguredLikableAlpinegoat-size_restricted.gif",
        "http://www.reactiongifs.com/r/ashley-wagner-BS.gif",
        "https://media1.tenor.com/images/5eb39cc9c48bc16a83ccfdc58c1037da/tenor.gif?itemid=7203986",
        "https://images.gr-assets.com/hostedimages/1412437686ra/11375665.gif",
    ];

    var game = {
        randomValue: function(min, max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        },

        generateHitPoints: function() {
            maxHitPoints = this.randomValue(19, 120);
            $('.maxHitPoints').text(maxHitPoints);
        },

        assignDamageValue: function() {
            $('.gamePad').each(function() {
                var damageValue = game.randomValue(1, 19);
                $(this).val(damageValue);
            });
        },
        
        countDamage: function(userSelection) {
            damage = +$(userSelection).val();
            $('.damage').text(damage);
        },

        applyDamage: function(curHitPoints) {
            var hpToPercentRatio = curHitPoints * (100 / maxHitPoints);
            $(".health-bar-text").html(curHitPoints + ' HP');
            $(".health-bar-red").animate({
                'width': hpToPercentRatio + "%"
            }, 700);
            $(".health-bar").animate({
                'width': hpToPercentRatio + "%"
            }, 500);
            // $('.total').html(curHitPoints + "/" + maxHitPoints);
        },

        resetHealthBar: function () {
            curHitPoints = maxHitPoints;
            $(".health-bar-text").html(curHitPoints + ' HP');
            $('.health-bar-red').css('width', '100%');
            $('.health-bar').css('width', '100%');
            // $('.total').html(maxHitPoints + "/" + maxHitPoints);
        },
        
        resetGame: function() {
            this.generateHitPoints();
            this.assignDamageValue();
            $('.damage').text(' ');
            this.resetHealthBar();
        },

        // loseGame: function() {
        //     if (curHitPoints < 0) {
        //         $('.losses').text(losses+=1);
        //         eventHandlers.showLoserImage();
        //         this.resetGame();
        //     };
        // },
        
        winGame: function() {
            if (curHitPoints <= 0) {
                $('.wins').text(wins+=1);
                eventHandlers.showWinnerImage();
                setTimeout(function() {
                    game.resetGame();
                    game.resetHealthBar();
                }, 2000);
            };
        },
    };

    var eventHandlers = {
        damageMonitor: $('.gamePad').click(function() {
            game.countDamage(this);
        }),

        applyDamage: $(".add-damage").click(function() {
            curHitPoints = curHitPoints - damage;
            game.applyDamage(curHitPoints);
            game.winGame();
        }),

        intializeGame: $('.newGame').click(function() {
            game.resetGame();
            $(".health-bar-text").html(curHitPoints + ' HP');
            $('div').removeClass('d-none');
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


    $('#pad1').click(function(e) {
        $('.ken').addClass('punch');
        setTimeout(function() { 
            $('.ken').removeClass('punch'); 
        }, 250);
    });

    $('#pad2').click(function(e) {
        $('.ken').addClass('hadoken');
        setTimeout(function() { 
            $('.ken').removeClass('hadoken'); 
        }, 430);
    });

    $('#pad3').click(function(e) {
        $('.ken').addClass('senpukyaku');
        setTimeout(function() { 
            $('.ken').removeClass('senpukyaku'); 
        }, 900);
    });


    // var $fireball = $('<div/>', {class:'fireball'});
    // $fireball.appendTo($('.ken'));

    // var isFireballColision = function(){ 
    //     return $fireballPos.left + 75 > $(window).width();
    // };

    // var explodeIfColision = setInterval(function(){
    //     $fireballPos = $fireball.offset();
    //     if (isFireballColision()) {
    //         $fireball.addClass('explode'); 
    //         clearInterval(explodeIfColision);
    //         setTimeout(function() { $fireball.remove(); }, 500); 
    //     }
    // }, 50);
});

