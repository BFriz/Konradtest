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
        $('.home').append('<li class="hometeam">' + value.home_team_name + '<li>')
        $('.away').append('<li class="awayteam">' + value.away_team_name + '<li>')
        $('.status').append('<li class="statusteam">' + value.status.status + '<li>')
        $('.score').append('<li class="scoreteam">' + value.linescore.r.home + value.linescore.r.away + '<li>')
      } else {
        $('.home').append('<li class="hometeam">' + value.home_team_name + '<li>')
        $('.away').append('<li class="awayteam">' + value.away_team_name + '<li>')
        $('.status').append('<li class="statusteam">' + value.status.status + '<li>')
      }
    })
  })
})



