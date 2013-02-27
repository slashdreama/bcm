function createMap(){
	
	console.log('Creation de la map');

	//var mapcenter =  new google.maps.LatLng(5.3411, -4.0281);
	var mapcenter = new google.maps.LatLng(0,0);

	var mapOptions = {
		zoom : 15,
		center : mapcenter,
		mapTypeId : google.maps.MapTypeId.ROADMAP 

	}

	map = new google.maps.Map(document.getElementById("map"), mapOptions);


	/**
	*Listeners on map
	*/

	//Click droit sur la carte
	// cette sera effectue quand on voudra personnalisé notre menu contextuelle
	google.maps.event.addListener(map, 'rightclick', function(){ 
		console.log('right click'); 
		//setContextualMenu();
	});

}


/**
* Géolocalisation automatique
* action à exécuter sur après creation de la map
*/
function AutoGeolocation(){
	//
	// Afficher calque d'attente
	//
	GMaps.geolocate({
	  success: function(position) {
	  	l = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	  	//console.log(position.coords.latitude+'/'+position.coords.longitude);
	    map.panTo(l);
	    BCMUserDefaultLocation = l;
	    console.log(l);
	    //Demand to put this new position as BCMUserdefautLocation;
	    //If user do that, 
	    setUserDefaultLocation(BCMUserDefaultLocation);

	  },

	  error: function(error) {
	    console.log('Geolocation failed: '+error.message);
	  },

	  not_supported: function() {
	    console.log("Your browser does not support geolocation");
	  },

	  always: function() {
	    console.log("Geolocation Done!");
	  }

	});
}

/**
* Rechercher la localisation depuis une référence texte donné
*/

function Geocode(p){
	if(p == null || p ==''){

		console.log('No place is definied');

	}else{

		GMaps.geocode({
	  	address: p,
	  	callback: function(results, status) {
		    if (status == 'OK') {
		    	var latlng = results[0].geometry.location;
		    	var new_center = new google.maps.LatLng(latlng.lat(), latlng.lng());

		    	map.setCenter(new_center);

		    	map.addMarker({
		        	lat: latlng.lat(),
		        	lng: latlng.lng()
		      	});
		    }
	  	}
		})

	}
	
}



/**
* TYPES OF MAP FUNCTIONS
  HYBRID 		This map type displays a transparent layer of major streets on satellite images.
  ROADMAP 		This map type displays a normal street map.
  SATELLITE 	This map type displays satellite images.
  TERRAIN 		This map type displays maps with physical features such as terrain and vegetation.
*/
function mapType(name){

	var mapType;
	switch(name){
		case 'HYBRID' :
			mapType = google.maps.MapTypeId.HYBRID;
		break;

		case 'ROADMAP' :
			mapType = google.maps.MapTypeId.ROADMAP;
		break;

		case 'SATELLITE' :
			mapType = google.maps.MapTypeId.SATELLITE;
		break;

		case 'TERRAIN' :
			mapType = google.maps.MapTypeId.TERRAIN;
		break;


	}
	map.setMapTypeId(mapType);

}


/**
* ADD MARKER 
*/
