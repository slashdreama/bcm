/**********************************************************/
/*		ALL ACTIONS TO STORE DATA OR INFORMATIONS LOCALY  */
/**********************************************************/

function setUserDefaultLocation(latLng){
	if(window.localStorage){
		console.log('LocalStorage is possible');
	}

	if(localStorage.length > 0 && window.localStorage['BCMUserDefaultLocation']){
		removeUserDefaultLocation();
	}

	window.localStorage['BCMUserDefaultLat'] = latLng.lat();
	window.localStorage['BCMUserDefaultLng'] = latLng.lng();


}

function getUserDefaultLocation(){
	var lat = Number(window.localStorage['BCMUserDefaultLat']) ;
	var lng = Number(window.localStorage['BCMUserDefaultLng']) ;
	var latLng = new google.maps.LatLng(lat, lng);
	return latLng;
}

function removeUserDefaultLocation(){
	window.localStorage.removeItem('BCMUserDefaultLocation');
}



function clearLocalData(){
	window.localStorage.clear();
}