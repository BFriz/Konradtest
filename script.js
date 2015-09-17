$(document).ready(function(){
  var url
  function apiCall(url){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done(function(response){
      var data = response.data.games.game
      var box = $('#box');
       // box.append('<span class="day box box100">' + data[0].original_date + '</span>' );
      $.each(data,processEachDataItem);
      function processEachDataItem(index, value ) {
       
        var box = $('#box');

        addContentToTheUL(value,box);

        function addContentToTheUL(value, box){
          var str = Array(); 
          str.push('<ul class="box box20">' );
          str.push('<li class="team">' + "Home: " + value.home_team_name + ' vs ' + "Away: " + value.away_team_name + '</li>' + '<li class="status">' + value.status.status + '</li>' )
          if (value.linescore != undefined){
          str.push( '<li class="score info">' + value.linescore.r.home + '-' + value.linescore.r.away + '</li>')
          }
          str.push('</ul>' );
          if ((value.home_team_name || value.away_team_name) == "Blue Jays"){
            box.prepend( str.join(''));
          } else{
            box.append( str.join(''));
          }
            
            }
          }
    })
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



