var jargon = ['Yoda Conditions', 'Smug Report', 'A duck', 'Refunctioning',
'Heisenburg', 'Jimmy', 'Higgins Bugson', 'Unicorny', 'Hindenbug',
'Fear-driven Development', 'Hydra', 'Common Law Feature',
'Lock Ness Monster bug', 'Rubberducking', 'Banana banana banana',
'Reality 101 failure', 'Mad girlfriend bug', 'Hooker code', 'Jenga Code'];

var jargonDef = ['When a programmer writes the conditions for a piece of code in the opposite order for which you would expect to normally read them. (Instead of saying if(variable == constant), the code says if(constant == variable).)',
'A bug report submitted by a user who thinks he or she knows everything about a system, when he or she does not.',
'A feature added for the sole purpose of drawing attention to itself from management to be removed, avoiding unnecessary other changes in a product.',
'Taking a well-designed piece of code and, through a small series of changes, making it completely unmaintainable for anyone other than yourself.',
'A play on "Heisenberg," a principle in quantum mechanics, a Heisenbug is a bug that disappears or alters its characteristics when an attempt is made to study it.',
'A generalized name for a clueless or new developer.',
'Another bug based on a physics phenomenon, a Higgs Bugson is a bug thats hypothetically predicted to exist based on other conditions, but is difficult to produce.',
'A feature so early in its planning stages that it might as well be imaginary.',
'A catastrophic, data-destroying bug.',
'When project management adds more pressure, such as by firing engineers.',
'A bug that, when an attempt to fix is made, introduces two new bugs. Its a bug that cannot be fixed.',
'A bug that has existed for so long that it is considered a feature.',
'A bug that has only been spotted by one person.',
'Talking with other engineers to solve a problem.',
'Placeholder text in code that hasnt been implemented yet.',
'Creating a program that does exactly what was asked, but the problem its trying to solve was misunderstood and the program is basically useless.',
'When you see something strange is happening, but the software is telling you everything is fine.',
'Code that is problematic and causes application instability.',
'The whole program collapses once you alter a block of code.'];

var jargonGif = ['https://media.giphy.com/media/kqLTiqOUMmL6/giphy.gif',
'https://media.giphy.com/media/l0MYz2aMNWLkiTY5O/giphy.gif',
'https://media.giphy.com/media/AnGcHKLLMFd96/giphy.gif',
'https://media.giphy.com/media/LpDKmmMdp5rjO/giphy.gif',
'https://media.giphy.com/media/q8C0Ljmy4F6Ss/giphy.gif',
'https://media.giphy.com/media/oFRI4g517yWaI/giphy.gif',
'https://media.giphy.com/media/MnY9LL0POLvjy/giphy.gif',
'https://media.giphy.com/media/5LDhVsdZgtYKQ/giphy.gif',
'https://media.giphy.com/media/vItkAzRz4wTv2/giphy.gif',
'https://media.giphy.com/media/ToMjGpmjnM666vQ73X2/giphy.gif',
'https://media.giphy.com/media/zwnM63LkZC1ri/giphy.gif',
'https://media.giphy.com/media/Bi6ffoqGEcxgY/giphy.gif',
'https://media.giphy.com/media/lrQt9gqShGS2I/giphy.gif',
'https://media.giphy.com/media/aQrYT4WVN55aU/giphy.gif',
'https://media.giphy.com/media/ZYoFTHxrWNFbW/giphy.gif',
'https://media.giphy.com/media/l0Exv5n3WLjgw1MJy/giphy.gif',
'https://media.giphy.com/media/NlG1Q5k7AMpy0/giphy.gif',
'https://media.giphy.com/media/6KKab1ydLq1uU/giphy.gif',
'https://media.giphy.com/media/ytUFYFYR5rs52/giphy.gif'];


var game = {
  score: 0;
  loss: 0;
  used: [];
};

function randomNumber(maxNumber) {
    var x = Math.floor((Math.random() * maxNumber) + 1);
  return x;
}

function answerSet(game.used){
  var pick = random(19);
  do {
    var pick = random(19)
    for (var i = 0; i < game.used.length; i++) {

    }
  } while (game.used[i] === pick);
}

function clearGame() {

}


function loadGame(){

}

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}



$(document).ready(function() {

$('#start').html('play').addClass('btn btn-danger');

  $('#start').on('click', function() {
    $('#start').fadeOut('slow', function() {
    $('#tRemaining').html('time remaining: ' + '30' + ' seconds').addClass('dialogue topDialogue').hide().fadeIn('slow');
    $('#questionJudgement').html('At this momment what is missing?').addClass('dialogue').hide().fadeIn('slow', function () {



      $('#answer1').html('banana').addClass('btn dialogue answerOps').hide().fadeIn('slow', function() {
        $('#answer2').html('banana').addClass('btn dialogue answerOps').hide().fadeIn('slow', function() {
          $('#answer3').html('banana').addClass('btn dialogue answerOps').hide().fadeIn('slow', function() {
            $('#answer4').html('banana').addClass('btn dialogue answerOps').hide().fadeIn('slow', function() {

            });
          });
        });
      });

    });

    });
  });


});
