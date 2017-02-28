// $.getJSON("http://ipinfo.io/json?callback=JSON_CALLBACK", function(city){
// 		console.log(city.responseText);
// 		});

var loc = "";

$(function () {

	$.ajax({
	    // Tell jQuery we're expecting JSONP
	    dataType: "jsonp",

	    url: "http://ipinfo.io/json",
	   
	    
	    success: function( a ) {
	        // console.log( a );
	        loc = a;
	        var climateLocal = "";
	        // a = JSON.parse(a);


	        var climateReq = "http://api.openweathermap.org/data/2.5/weather?q=" + loc.city + "&units=metric&APPID=061f24cf3cde2f60644a8240302983f2";

			$.getJSON(climateReq, function(response){
				climateLocal = response.weather[0].main;
				console.log(climateLocal);
						
				$(".city").append( "<p>" + climateLocal + "</p>" + "<p class='region'>" + a.city + ", " + a.region + "</p>");
				$('.city').hide();
				$('.city').show(1000);
			});



	    }
	});



});

