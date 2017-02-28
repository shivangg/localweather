// $.getJSON("http://ipinfo.io/json?callback=JSON_CALLBACK", function(city){
// 		console.log(city.responseText);
// 		});

var loc = "";

$(function () {

	$('.intro').hide();
	$('.region').hide();
	$('.weather').hide();
	$('.wind').hide();
	$('.temp').hide();
	$('.hum').hide();
	$('.visible').hide();

	// $('.loaderdiv').show();

	$.ajax({
	    // Tell jQuery we're expecting JSONP
	    dataType: "jsonp",

	    url: "http://ipinfo.io/json",
	   
	    
	    success: function( a ) {
	       	
	        loc = a;
	        var climateLocal = "";
	        
	        var climateReq = "http://api.openweathermap.org/data/2.5/weather?q=" + loc.city + "&units=metric&APPID=061f24cf3cde2f60644a8240302983f2";

			$.getJSON(climateReq, function(w){
				climateLocal = w.weather[0].main;
				// console.log(climateLocal);

				var str = "<h2>" + climateLocal + "</h2>"  ;
				var reg = a.city + ", " + a.region ;
				var visi = w.visibility + " meter" ;
				var temp = w.main.temp + " Celsius" ;
				var tempF = Math.round(((parseInt(w.main.temp) * 9)/5 + 32) * 100) / 100; 
				var hum = w.main.humidity + " %" ;
				var wind = w.wind.speed + " meter per second";
				var id = w.weather[0].icon;
				var imageUrl = "http://openweathermap.org/img/w/" + id + ".png";
				var vec = "<img class='img img-responsive img-center' src="+ imageUrl +" />"; 

				// $('.region').hide();
				// $('.weather').hide();
				// $('.wind').hide();
				// $('.temp').hide();
				// $('.hum').hide();
				// $('.visible').hide();
				// $('.vector').hide();

				// $('.loaderdiv').hide();
				// $('.text-center').show(750);

				$('body').css('background-image', 'none');

				$(".weather").append(str);
				$(".region").append(reg);
				$('.wind').append(visi);
				$('.temp').append(temp);
				$('.hum').append(hum);	
				$('.visible').append(visi);
				$('.vector').append(vec);

				$('.intro').show();
				$('.weather').show(1000);
				$('.vector').show(2500);
				$('.wind').show(3000);
				$('.hum').show(4000);
				$('.visible').show(4300);
				$('.temp').show(5000);
				$('.region').show(1000);

				$(".temp").click(function (a) {
					// console.log(a.currentTarget.innerText);

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

