/***************************************************/
/* Do all actions in contextual menus			   */
/***************************************************/

//Contextual menu items
var contextualItem = [

	{
		title  : "Emplacement par défaut",
		id     : "map_defaut_position",
		action : "setDefaultPosition()"
	},

	{
		title  : "Zoomer ici",
		id     : "map_zoom_here",
		action : "zoomHere()"
	},
	{
		title  : "Itinéraire depuis ici",
		id     : "map_iti_from",
		action : "itinFromHere()"
	},
	{
		title  : "Itinéraire jusqu'ici",
		id     : "map_iti_from",
		action : "itinToHere()"
	}

];

//Set Contextual Menu on map
function setContextualMenu(c){

		var projection;
        var contextmenuDir;
        
        projection = map.getProjection() ;
        $('.contextualMenu').remove();

        //Il me semble intéressant de créer le menu contextuel par code afin de permettre l'animation par exemple dynamiquement.
        contextmenuDir = document.createElement("div");
        contextmenuDir.className  = 'contextualMenu';
        var itemHtml = "";
        for(var i = 0 ; i<contextualItem.length; i++){
        	itemHtml += "<a id='"+contextualItem[i].id+"' href='#' onClick='"+contextualItem[i].action+"'><div class=context>"+contextualItem[i].title+"<\/div><\/a>";
        }

        contextmenuDir.innerHTML = itemHtml;
       
       // contextmenuDir.innerHTML = "<a id='menu1'><div class=context>Emplacement par défaut<\/div><\/a><a id='menu2' href='#' onClick='"+contextualItem[0].action+"'><div class=context>Zoomer ici<\/div><\/a>";
        $(map.getDiv()).append(contextmenuDir);
        
        computeMenuPosition(c);

        contextmenuDir.style.visibility = "visible";

        

}

/**
/* This function returned offset computed by the right click position about
/* North & West positions bounds
*/

function getRightClickOffset(c){

	var z = map.getZoom();

	var s = Math.pow(2, z);

	console.log('s :'+s);

	var nw = new google.maps.LatLng(  
		map.getBounds().getNorthEast().lat(), 
		map.getBounds().getSouthWest().lng() 
		);

					
	var nwToPoint = map.getProjection().fromLatLngToPoint(nw);
	var cToPoint  = map.getProjection().fromLatLngToPoint(c);

	//console.log('['+nwToPoint+'] / ['+cToPoint+']');

	var o = new google.maps.Point(
				Math.floor((cToPoint.x - nwToPoint.x) * s),
				Math.floor((cToPoint.y - nwToPoint.y) * s)
				);

	//console.log('Offset : '+o);

	return o;

}

function computeMenuPosition(c){

	var o = getRightClickOffset(c);

	var evtX = o.x;
	var evtY = o.y;

	//console.log("POS : ["+evtX+"/"+evtY+"]");

	var cm = $(".contextualMenu");
	var cmWidth  = cm.width();
	var cmHeight = cm.height();

	var m = $("#map");
	var mWidth = m.width();
	var mHeigth = m.height();

	//console.log("MENU : ["+cmWidth+"/"+cmHeight+"]");
	//console.log("MAP : ["+mWidth+"/"+mHeigth+"]");

	//check exception when user click where the contextual
	// menu could not be displayed correcty

	var deltaX = mWidth - evtX;
	var deltaY = mHeigth - evtY;

	if(deltaX < cmWidth){ evtX = evtX -  cmWidth }
	if(deltaY < cmHeight){ evtY = evtY -  cmHeight }

	cm.css('left', evtX);
	cm.css('top', evtY);


}


/////////////////    ACTIONS WHEN USER CLICK ON CONTEXTUAL MENU //

/**
* Function to position here
*/
function setDefaultPosition(){
	console.log('Emplacement par défaut');

	// onsupprime le default user marker
	meMarkerArray[0].remove();	
	BCMUserDefaultLocation = contextualMenuEvtPosition;
	putUserMarker({});
	removeContextualMenu()
}

/**
* Function to zoom on the position when user call contextual menu 
*/
function zoomHere(){
	console.log('zoom here');
	if(map){
		var currentZoom = map.getZoom();
		map.setZoom(currentZoom+1);
		map.panTo(contextualMenuEvtPosition);

	}
	removeContextualMenu()
}


/**
* Function to chose a position like the start of route 
*/
function itinFromHere(){
	removeContextualMenu()
}

/**
* Function to chose a position like the destination of route 
*/
function itinToHere(){
	removeContextualMenu()

}

/**
* Function to remove the contextualMenu
*/
function removeContextualMenu(){
	$(".contextualMenu").remove();
	contextualMenuEvtPosition = null;
}