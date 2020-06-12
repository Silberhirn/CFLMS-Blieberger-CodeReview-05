$(document).ready(function(){

var movie = JSON.parse(movies);

for (let i=0; i<movie.length; i++){
	$("#container").append("<div id='movie"+[i]+"'><img src='img/"+movie[i].poster+"'><h3>"+movie[i].name+"</h3><p>"+movie[i].des+
		"</p><div id='lbox"+[i]+"'><div id='like"+[i]+"'>Like <i class='fa fa-thumbs-up'></i></div><div id='lcount"+[i]+"'>0</div></div></div>")
}

for (let i=0; i<movie.length; i++){
	$("#like"+[i]).on("click", function(){
		$("#lcount"+[i]).text(parseInt($("#lcount"+[i]).text())+1)
	})
}

$("#sort").on("click", function(){
	for (let i=0; i<movie.length; i++){
		$("#movie"+[i]).css("order", -$("#lcount"+[i]).text())
	}
})

});

