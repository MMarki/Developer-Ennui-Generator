var generateJob = function(){
  var retString = '';
  for (var i = 0; i < 5; i++){
    retString += getNewClause(retString)
  }
  retString = retString.substring(0,retString.length -1) + '.';

  return retString;
};

var getNewClause = function(inString){
  var verbArray = ["build","write","clean","monitor","deploy","generate","manage","filter"];
  var nounArray = ["tools","websites","libraries","VMs","content","files","hashtags","tweets"];
  
  var verbIndex = getRandomInt(0, verbArray.length - 1);
  var verb = verbArray[verbIndex];

  var nounIndex = getRandomInt(0, nounArray.length - 1);
  var noun = nounArray[nounIndex];

  //if instring ends in s, pluralize verb.
  if (!endsInPlural(inString)) {
    verb = verb + 's';
  }

  return " that " + verb + " " + noun + " ";
};

function endsInPlural(inString){
   return inString.charAt(inString.length -1 -1) == 's'
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Begin
var str = generateJob()
var $contentArea = $('#content-area')
  $contentArea.html(str)

$("#generate-button").click(function(){
  var jobString = generateJob();
  $('#content-area').html(jobString);
});