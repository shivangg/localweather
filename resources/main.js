// $.getJSON("http://ipinfo.io/json?callback=JSON_CALLBACK", function(city){
// 		console.log(city.responseText);
// 		});

var loc = "";

$(function () {

	$('.region').hide();
	$('.weather').hide();
	$('.wind').hide();
	$('.temp').hide();
	$('.hum').hide();
	$('.visible').hide();

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

			$.getJSON(climateReq, function(w){
				climateLocal = w.weather[0].main;
				console.log(climateLocal);

				var str = "<h2>" + climateLocal + "</h2>"  ;
				var reg = a.city + ", " + a.region ;
				var visi = w.visibility + " meter" ;
				var temp = w.main.temp + " Celsius" ;
				var tempF = Math.round(((parseInt(w.main.temp) * 9)/5 + 32) * 100) / 100; 
				var hum = w.main.humidity + " %" ;
				var wind = w.wind.speed + " meter per second";

				$('.region').hide();
				$('.weather').hide();
				$('.wind').hide();
				$('.temp').hide();
				// $('.tempF').hide();
				$('.hum').hide();
				$('.visible').hide();



				$(".weather").append(str);
				$(".region").append(reg);
				$('.wind').append(visi);
				$('.temp').append(temp);
				// $('.tempF').hide(tempF);
				$('.hum').append(hum);	
				$('.visible').append(visi);
						
				$('.weather').show(1000);
				$('.wind').show(3000);
				$('.temp').show(4000);
				$('.hum').show(5000);
				$('.visible').show(6000);
				$('.region').show(6000);

				// $(".temp")[0].innerText = "Temperature: " ; 

				$(".temp").click(function (a) {
					console.log(a.currentTarget.innerText);

					if (a.currentTarget.innerText.indexOf('sius') !== -1){
						a.currentTarget.innerText = "Temperature: " + tempF + " Fahrenheit";
					}
					else if(a.currentTarget.innerText.indexOf('Fah') !== -1){
						// var tempC = Math.round((((tempF - 32) * 5) / 9) * 100)/100 ; 
						a.currentTarget.innerText = "Temperature: " + temp;
					}

				});

			});

	    }
	});



});

