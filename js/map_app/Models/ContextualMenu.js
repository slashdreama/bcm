/***************************************************/
/* Do all actions in contextual menus			   */
/***************************************************/

//Set Contextual Menu on map
function setContextualMenu(c){

		var projection;
        var contextmenuDir;
        
        projection = map.getProjection() ;
        $('.contextualMenu').remove();
        contextmenuDir = document.createElement("div");
        contextmenuDir.className  = 'contextualMenu';
        contextmenuDir.innerHTML = "<a id='menu1'><div class=context>menu item 1<\/div><\/a><a id='menu2'><div class=context>menu item 2<\/div><\/a>";
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

	console.log('Offset : '+o);

	return o;

}

function computeMenuPosition(c){

	var o = getRightClickOffset(c);

	var evtX = o.x;
	var evtY = o.y;

	console.log("POS : ["+evtX+"/"+evtY+"]");

	var cm = $(".contextualMenu");
	var cmWidth  = cm.width();
	var cmHeight = cm.height();

	var m = $("#map");
	var mWidth = m.width();
	var mHeigth = m.height();

	console.log("MENU : ["+cmWidth+"/"+cmHeight+"]");
	console.log("MAP : ["+mWidth+"/"+mHeigth+"]");

	//check exception when user click where the contextual
	// menu could not be displayed correcty

	var deltaX = mWidth - evtX;
	var deltaY = mHeigth - evtY;

	if(deltaX < cmWidth){ evtX = evtX -  cmWidth }
	if(deltaY < cmHeight){ evtY = evtY -  cmHeight }

	cm.css('left', evtX);
	cm.css('top', evtY);


}