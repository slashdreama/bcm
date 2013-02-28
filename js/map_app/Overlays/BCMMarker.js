/*------------------------------------------------------------*/
/* 							BCM Marker 						  */
/*------------------------------------------------------------*/

function BCMMarker(kind, markerMap, latLng, data){
	this.kind_ = kind;
	this.map_ = markerMap;
	this.latLng_ = latLng;
	this.width_ = 25;
	this.height_ = 25;
	this.data_ = data;
	this.offsetWidth = 12;
	this.offsetHeight = 12;
	this.image_ = '../images/'+ kind +'_marker.png';
	this.setMap(markerMap); 
	
}


BCMMarker.prototype = new google.maps.OverlayView();


//ON_ADD
BCMMarker.prototype.onAdd = function(){
	
	console.log('marker add');


};

//DRAW
BCMMarker.prototype.draw = function(){
	console.log('marker draw');

	var div = this.div_

	if(!div){
		div = this.div_ = document.createElement('div');
		div.style.position = "absolute";

		div.style.width = this.width_+"px";
		div.style.height = this.height_+"px";

		div.setAttribute("width", 25);
		div.setAttribute("height", 25);
		div.style.display = "block";

		div.style.background = 'url('+this.image_+') no-repeat center center';

		

	}

	var panes = this.getPanes();
	panes.floatPane.appendChild(div);

	//var panes = this.getPanes();
       //panes.floatPane.appendChild(div)

	var overlayProjection = this.getProjection();
	var position = overlayProjection.fromLatLngToDivPixel(this.latLng_);

	if(position){

		div.style.left = (position.x - this.offsetWidth ) + 'px';
		div.style.top = (position.y - this.offsetHeight) + 'px';

	}
	
	
};


//REMOVE
BCMMarker.prototype.remove = function(){
	console.log('marker remove');
	this.div_.parentNode.remove(this.div_);
};