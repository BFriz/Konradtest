$(document).ready(function(){
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: "http://gd2.mlb.com/components/game/mlb/year_2014/month_03/day_06/master_scoreboard.json"
  }).done(function(response){
    var data = response.data.games.game
    $.each(data, function(index, value) {
      if (value.home_team_name == 'Blue Jays' || value.away_team_name == "Blue Jays"){
      console.log("blue jays")
      } else if(value.linescore != undefined) {
        $('.day').append(value.original_date)
        $('.day').append('<li class="team">' + value.home_team_name + ' vs ' + value.away_team_name + '</li>')
        $('.day').append('<li class="status">' + value.status.status + '</li>')
        $('.day').append('<li class="score">' + value.linescore.r.home + '-' + value.linescore.r.away + '</li>')
      } else {
        $('.day').append(value.original_date)
        $('.day').append('<li class="team">' + value.home_team_name + ' vs ' + value.away_team_name  + '</li>')
        $('.day').append('<li class="status">' + value.status.status  + '</li>')
      }
    })
  })
})



