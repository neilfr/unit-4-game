var wins=0;
var losses=0;
$('#wins').html("Wins: "+wins);
$('#losses').html("Losses: "+losses);

var rubyValue;
var sapphireValue;
var amberValue;
var emeraldValue;
var targetScore;
var playerScore;

console.log(test);
function reset(){
    rubyValue=Math.floor(Math.random()*12+1);
    sapphireValue=Math.floor(Math.random()*12+1);
    amberValue=Math.floor(Math.random()*12+1);
    emeraldValue=Math.floor(Math.random()*12+1);
    targetScore=Math.floor(Math.random()*101+19);
    playerScore=0;
    $('#targetScore').html('Target: '+targetScore);
    $('#playerScore').html('Your total score is: '+playerScore);
}

function checkScore(){
    if(playerScore===targetScore){
        wins++;
        $('#wins').html("Wins: "+wins);
        reset();
    }
    if(playerScore>targetScore){
        losses++;
        $('#losses').html("Losses: "+losses);
        reset();
    }
}

reset();

$('#ruby').on('click', function(){
    playerScore+=rubyValue;
    $('#playerScore').html('Your total score is: '+playerScore);
    checkScore();
});

$('#sapphire').on('click', function(){
    console.log('clicked sapphire!');
    playerScore+=sapphireValue;
    $('#playerScore').html("Your total score is: "+playerScore);
    checkScore();
});

$('#amber').on('click', function(){
    playerScore+=amberValue;
    $('#playerScore').html("Your total score is: "+playerScore);
    checkScore();
});

$('#emerald').on('click', function(){
    playerScore+=emeraldValue;
    $('#playerScore').html("Your total score is: "+playerScore);
    checkScore();
});

