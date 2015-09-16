$(document).ready(function(){
  var url
  function apiCall(url){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done(function(response){
      var data = response.data.games.game
      checkTeams(data);
      var box = $('#box');
       box.append('<span class="day">' + data[0].original_date + '</span>' );
      $.each(data,processEachDataItem);
      function processEachDataItem(index, value ) {
       
          var box = $('#box');
          if (value.home_team_name || value.away_team_name == "Blue Jays")
          addContentToTheUL(value,box);

        function addContentToTheUL(value, box){

var str = Array(); 

str.push('<ul>' );

str.push('<li class="team">' + value.home_team_name + ' vs ' + value.away_team_name + '</li>' + '<li class="status">' + value.status.status + '</li>' )
if (value.linescore != undefined){

str.push( '<li class="score info">' + value.linescore.r.home + '-' + value.linescore.r.away + '</li>')
}
str.push('</ul>' );

          box.append( str.join(''));
  var myobj = {}; 
myobj.doAthing = function(){}
        }
      }
    })
  }
  function checkTeams(data){
    debugger;
  }



  $("#submit").click(function(event, url) {
     event.preventDefault();
    date = $("#input").val().split('-')
    var year = date[0]
    var month = date[1]
    var day = date[2]
    var url = 'http://gd2.mlb.com/components/game/mlb/year_' + year + '/month_' + month + '/day_' + day + '/master_scoreboard.json'
    $("#box").empty()
    apiCall(url)
  });
    apiCall();



})



