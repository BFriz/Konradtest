$(document).ready(function(){

  function apiCall(url, date){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done(function(response){
      var data = response.data.games.game
      var box = $('#box');
      $('#noGame').empty();
      if (data == undefined) {
        $('#noGame').append("No Games Today")
      } else if (data.length == undefined) {
        oneGame(data)
      } else {
      $.each(data,processEachDataItem);
      };
        function oneGame(data){
          var str = Array(); 
            str.push('<ul class="box box20">' );
            str.push('<li class="team">' + "Home: " + data.home_team_name + ' vs ' + "Away: " + data.away_team_name + '</li>' + '<li class="status">' + data.status.status + '</li>' );
            if (data.linescore != undefined){
            str.push( '<li class="score info">' + data.linescore.r.home + '-' + data.linescore.r.away + '</li>');
            };
            str.push('</ul>' );
              box.append( str.join(''));

        }
        function processEachDataItem(index, value ) {
          addContentToTheUL(value,box);
          function addContentToTheUL(value, box){
            var str = Array(); 
            str.push('<ul class="box box20">' );
            str.push('<li class="team">' + "Home: " + value.home_team_name + ' vs ' + "Away: " + value.away_team_name + '</li>' + '<li class="status">' + value.status.status + '</li>' );
            if (value.linescore != undefined){
            str.push( '<li class="score info">' + value.linescore.r.home + '-' + value.linescore.r.away + '</li>');
            };
            str.push('</ul>' );
            if ((value.home_team_name || value.away_team_name) == "Blue Jays"){
              box.prepend( str.join(''));
            } else{
              box.append( str.join(''));
            };        
          };
        };
    });
  };

  $("#submit").click(function(event, url) {
     event.preventDefault();
    date = $("#input").val().split('-')
     // if (date.join("") == "20141029") {
     //  worldSeries();
     // } else {
      var year = date[0]
      var month = date[1]
      var day = date[2]
      var url = 'http://gd2.mlb.com/components/game/mlb/year_' + year + '/month_' + month + '/day_' + day + '/master_scoreboard.json'
    $("#box").empty()
      apiCall(url, date)
  });
    var url = 'http://gd2.mlb.com/components/game/mlb/year_2014/month_07/day_14/master_scoreboard.json'
    apiCall(url);

    function worldSeries(){
      debugger;
    }
    $(".one").click(function(event, url) {
     event.preventDefault();
    var url = 'http://gd2.mlb.com/components/game/mlb/year_2014/month_10/day_29/master_scoreboard.json'
    $("#box").empty()
    apiCall(url);
   })
    $(".two").click(function(event, url) {
     event.preventDefault();
    var url = 'http://gd2.mlb.com/components/game/mlb/year_2014/month_03/day_29/master_scoreboard.json'
    $("#box").empty()
    apiCall(url);
   })
    $(".three").click(function(event, url) {
     event.preventDefault();
    var url = 'http://gd2.mlb.com/components/game/mlb/year_2014/month_07/day_15/master_scoreboard.json'
    $("#box").empty()
    apiCall(url);
   })
    $(".four").click(function(event, url) {
     event.preventDefault();
    var url = 'http://gd2.mlb.com/components/game/mlb/year_2014/month_07/day_15/master_scoreboard.json'
    $("#box").empty()
    
    apiCall(url);
   })
})



