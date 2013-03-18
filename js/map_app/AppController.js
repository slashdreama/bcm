console.log('AppController.js');

/*head.ready(function(){
		  head.js("https://maps.googleapis.com/maps/api/js?key=AIzaSyC38MApPEmrGvdafZhPnjeX8FeaF0WgxNQ&sensor=false");
		  console.log('google map api');
		});*/


//VARIABLES D'INITIATION
var map;
var BCMUserDefaultLocation;
var meMarkerArray = [];
var contextualMenuEvtPosition;


function initApp() {
	console.log('initialisation de l\'application');


	
	head.js("../js/map_app/models/MainApp.js", 
			"../js/map_app/models/MapOperations.js",
			"../js/map_app/models/LocalStorage.js",
			"../js/map_app/models/ContextualMenu.js",
			"../js/map_app/Overlays/BCMMarker.js",
		function(){
			main();
			createMap();

			//verify if BCMUserDefaultLocation is definied
			if(window.localStorage['BCMUserRegistredLat'] && window.localStorage['BCMUserRegistredLng']){
				console.log('A default postion existe');
				BCMUserDefaultLocation = getUserRegistredLocation();
				map.panTo(BCMUserDefaultLocation);

				putUserMarker({});

				/*
				var data = {};
				var meMarker = new BCMMarker("user", map, BCMUserDefaultLocation, data);
				meMarkerArray.push(meMarker);
				*/

			}else{
				AutoGeolocation();
			}
			
		});
	
}