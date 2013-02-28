<!DOCTYPE html >
<html lang=fr>
	<head>
		
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no"/>
		<meta charset="UTF-8" />
		<title>BCM WEBAPP - PROTOTYPE</title>
		
		<link rel="stylesheet" href="../styles/reset.css" />
		<link rel="stylesheet" href="../styles/layout.css" />

		<script src="../js/plugins/head.load.min.js"></script>

		<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true">
		</script>
		
		<!--<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC38MApPEmrGvdafZhPnjeX8FeaF0WgxNQ&sensor=false">
		</script>-->
	
		<!--<script src="../js/plugins/gmaps.js"></script> -->

		<!-- <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC38MApPEmrGvdafZhPnjeX8FeaF0WgxNQ&sensor=false">
		</script> -->
		
		
		</script>

		<style>
			html { height: 100% }
      		body { height: 100%; margin: 0; padding: 0 }
      		#map { height: 100% }
		</style>


	</head>

	<body>
		
		<div id="toolsBar">
			
		</div>

		<div id="mapContainer">

			<div id="map"></div>

		</div>


		<script type="text/javascript">
			head.js("../js/plugins/jquery.min.js", 
					"../js/map_app/AppController.js",
					"../js/plugins/gmaps.js" ,
					function(){
						initApp();
					});
		</script>


	</body>

</html>
