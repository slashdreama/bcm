/**********************************************************/
/*		ALL ACTIONS TO STORE DATA OR INFORMATIONS LOCALY  */
/**********************************************************/

function saveUserRegistredLocation(){

	console.log('save');
	latLng = BCMUserDefaultLocation;
	
	if(window.localStorage){
		console.log('LocalStorage is possible');
	}

	if(localStorage.length > 0 && window.localStorage['BCMUserRegistredLat'] && window.localStorage['BCMUserRegistredLng']){
		removeUserRegistredLocation();
	}

	//BCMUserDefaultLocation = l


	window.localStorage['BCMUserRegistredLat'] = latLng.lat();
	window.localStorage['BCMUserRegistredLng'] = latLng.lng();
	console.log(localStorage.length);

}

function getUserRegistredLocation(){
	var lat = Number(window.localStorage['BCMUserRegistredLat']) ;
	var lng = Number(window.localStorage['BCMUserRegistredLng']) ;
	var latLng = new google.maps.LatLng(lat, lng);
	return latLng;
}

function removeUserRegistredLocation(){
	window.localStorage.removeItem('BCMUserRegistredLat');
	window.localStorage.removeItem('BCMUserRegistredLng');
}



function clearLocalData(){
	window.localStorage.clear();
}