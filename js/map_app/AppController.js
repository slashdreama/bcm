console.log('AppController.js');

/*head.ready(function(){
		  head.js("https://maps.googleapis.com/maps/api/js?key=AIzaSyC38MApPEmrGvdafZhPnjeX8FeaF0WgxNQ&sensor=false");
		  console.log('google map api');
		});*/


//VARIABLES D'INITIATION
var map;
var BCMUserDefaultLocation;
var mapArray;


function initApp(){
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
			if(window.localStorage['BCMUserDefaultLat'] && window.localStorage['BCMUserDefaultLng']){
				console.log('A default postion existe');
				BCMUserDefaultLocation = getUserDefaultLocation();
				map.panTo(BCMUserDefaultLocation);

				var data = {};
				var meMarker = new BCMMarker("user", map, BCMUserDefaultLocation, data);

			}else{
				AutoGeolocation();
			}
			
		});
	
}