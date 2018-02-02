var allData;

$.getJSON("data.json", function(data) {
    allData = data;


    console.log(allData)
    console.log("Hallo")

    generatematches()

})







function generatematches() {
     $.each(allData.matches, function(i, match) {

            var team_home = allData.teams[match.team_home]
            var team_away = allData.teams[match.team_away]
            var location = allData.locations[match.location]


            var li = $("<li>");
            var gamebutton = $("<div>").addClass("gamebutton").attr("data-game", i).appendTo(li);
            var row = $("<div>").addClass("row").appendTo(gamebutton);

            var div_home = $("<div>").addClass("col-5").appendTo(row);
            var img_home = $("<img>").addClass("logo").attr("src", team_home.logo).appendTo(div_home);
            var p_team_home = $("<p>").addClass("team").text(team_home.name).appendTo(div_home);

            var div_vs = $("<div>").addClass("col-2").appendTo(row);
            var p_vs = $("<p>").addClass("vs").text("vs.").appendTo(div_vs);

            var div_away = $("<div>").addClass("col-5").appendTo(row);
            var img_home = $("<img>").addClass("logo").attr("src", team_away.logo).appendTo(div_away);
            var p_team_away = $("<p>").addClass("team").text(team_away.name).appendTo(div_away);
            
 			$(".gamelist").append(li);




           gamebutton.on("click", function() {
           	gameID = $(this).data("game");
           	match = allData.matches[gameID]
           	console.log(match.location)
           	team_home = allData.teams[match.team_home];
           	team_away = allData.teams[match.team_away];

		    console.log(team_home.name)


    		$('#gamedetails .team.home').text(team_home.name)
    		$('#gamedetails .logo.home').attr("src",team_home.logo)


    		$('#gamedetails .team.away').text(team_away.name)
    		$('#gamedetails .logo.away').attr("src",team_away.logo)

    		

    		$('#gamedetails').fadeIn();
		  })
            




        })
}
// var data = $.getJSON("data.json", function(data) {
//     for (var i = 0; i < data.results[0].matches.length; i++) {
//         var ul = "<li>"
//         ul += "<li>" + (data.results[0].matches[i].location) + "</li>";
//         ul += "<li>" + (data.results[0].matches[i].team_home) + "</li>";
//         ul += "<li>" + (data.results[0].matches[i].team_away) + "</li>";
//         ul += "<li>" + (data.results[0].matches[i].date) + "</li>";
//         ul += "</li>";
//         $("#data").append(ul);
//     }

// });