
// Vars

var svg = document.querySelector('svg');
var select = document.getElementById('select');
var tlStars = new TimelineMax();
var tlСonstellations = new TimelineMax({paused: true});

// Set

TweenMax.set([
	'#goat', '#owl', '#raccoon', '#bear'
	], {
		css: {
			visibility: 'visible'
		}
	});

TweenMax.set(['#goat *', '#owl *', '#raccoon *', '#bear *'], {transformOrigin: 'center'});
TweenMax.set(['#owl *', '#raccoon *', '#bear *'], {scale: 0});

// Timelines

function constellation(newVal, oldVal) {

	tlСonstellations
		.to(oldVal, 1.2, {
			scale: 1,
			transformOrigin: 'center',
			ease: Power4.easeIn
		})

		.to(oldVal + ' path', 1.2, {
			scale: 0
		}, '-=.6')

		.to(oldVal + ' circle', .6, {
			scale: 0,
			ease: Bounce.easeIn
		}, '-=1.2')

		.staggerTo(newVal + ' path', .3, {
			scale: 1
		}, .02)
	
		.to(newVal + ' circle', 1.2, {
			scale: 1,
			ease: Bounce.easeOut
		}, '-=.4')

		.to(newVal, 1.4, {
			scale: 1.06,
			transformOrigin: 'center',
			ease: Power2.easeInOut
		}, '-=.54')
}

TweenMax.to('#Objects', 4, {
		y: -40,
		ease: Power1.easeInOut,
		repeat: -1,
		yoyo: true
	});

tlStars
	.staggerTo('#stars circle', 10, {
		cycle: {
			x: random,
			y: random
		},
		repeat: -1,
		yoyo: true,
		ease: Power1.easeInOut
	})

// Select

var oldVal;

select.addEventListener('focus', function() {
	oldVal = this.value;
});

var arr = ["#goat","#owl","#raccoon","bear"];

select.addEventListener('change', function() {
	constellation(arr[1], oldVal);
	tlСonstellations.play();
	this.blur();
})

// Helpers

function random(i) {
	return (Math.random() * 2 - 1) * (i + 120);
};


setTimeout(function(){
    constellation(arr[1], arr[0]);
	tlСonstellations.play();
}, 2000);


setTimeout(function(){
    constellation(arr[2], arr[1]);
	tlСonstellations.play();

}, 4000);

setTimeout(function(){
    constellation(arr[3], arr[2]);
	tlСonstellations.play();

}, 6000);

setTimeout(function(){
    constellation(arr[0], arr[3]);
	tlСonstellations.play();
	

}, 8000);
setTimeout(function(){
    constellation(arr[1], arr[0]);
	tlСonstellations.play();
	

}, 10000);


setTimeout(function(){
    constellation(arr[2], arr[1]);
	tlСonstellations.play();
	

}, 12000);

setTimeout(function(){
    constellation(arr[3], arr[2]);
	tlСonstellations.play();
	

}, 14000);

setTimeout(function(){
    constellation(arr[0], arr[3]);
	tlСonstellations.play();
	

}, 16000);
setTimeout(function(){
    constellation(arr[1], arr[0]);
	tlСonstellations.play();
	

}, 18000);


setTimeout(function(){
    constellation(arr[2], arr[1]);
	tlСonstellations.play();
	

}, 20000);

setTimeout(function(){
    constellation(arr[3], arr[2]);
	tlСonstellations.play();
	

}, 22000);

setTimeout(function(){
    constellation(arr[0], arr[3]);
	tlСonstellations.play();
	

}, 24000);
setTimeout(function(){
    constellation(arr[1], arr[0]);
	tlСonstellations.play();
	

}, 26000);


setTimeout(function(){
    constellation(arr[2], arr[1]);
	tlСonstellations.play();
	

}, 28000);

setTimeout(function(){
    constellation(arr[3], arr[2]);
	tlСonstellations.play();
	

}, 30000);

setTimeout(function(){
    constellation(arr[0], arr[3]);
	tlСonstellations.play();
	

}, 32000);

function k(){
    document.getElementById('signup').style.display="none";
    document.getElementById('logf').style.display="block";
    document.getElementById('logg').style.display="block";
}

function b(){
    document.getElementById('login').style.display="none";
    document.getElementById('signf').style.display="block";
    document.getElementById('signg').style.display="block";
}
function p(){
    document.getElementById('signup').style.display="block";
    document.getElementById('logf').style.display="none";
    document.getElementById('logg').style.display="none";
    document.getElementById('login').style.display="block";
    document.getElementById('signf').style.display="none";
    document.getElementById('signg').style.display="none";
}

function x(){
    document.getElementById('nav').style.display="block";
    document.getElementById('nav').className="animated slideInLeft";
}
function x2(){
    document.getElementById('nav').className="animated slideOutLeft";
}
setTimeout(function(){ 
    document.getElementById('nav').style.display="none"
    ; }, 1000);
function sh(){
    document.getElementById('backed').style.display="block";
    document.getElementById('allback').className="animated fadeOut";
    loadScript();
}

function user(){
    document.getElementById('motor').style.display="none";
     document.getElementById('allback').style.display="none";
    document.getElementById('trip').style.display="none";
    document.getElementById('user').style.display="block";
    document.getElementById('user').className="animated slideInLeft";
    document.getElementById('name').innerHTML="USER";
}
function motor(){
    document.getElementById('user').style.display="none";
    document.getElementById('allback').style.display="none";
    document.getElementById('trip').style.display="none";
    document.getElementById('motor').style.display="block";
    document.getElementById('motor').className="animated slideInLeft";
    document.getElementById('name').innerHTML="PLACES";
}
function suit(){
    document.getElementById('user').style.display="none";
    document.getElementById('motor').style.display="none";
    document.getElementById('trip').style.display="none";
    document.getElementById('allback').style.display="block";
    document.getElementById('allback').className="animated slideInLeft";
    document.getElementById('name').innerHTML="LOCATION";
}

function trip(){
    document.getElementById('user').style.display="none";
    document.getElementById('motor').style.display="none";
    document.getElementById('allback').style.display="none";
    document.getElementById('trip').style.display="block";
    document.getElementById('trip').className="animated slideInLeft";
    document.getElementById('name').innerHTML="ROAD TRIP";
    loadScriptd();
    
}
 var opi=0;
function noti(){
   
    if (opi==0)
        {
            document.getElementById('notifi').style.display="block";
            opi++;
        }
    else{
        document.getElementById('notifi').style.display="none";
        opi=0;
    }
}

  function initialize()
{
  var mapProp = {
    center: new google.maps.LatLng(25.2686,82.9903),
    zoom:12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
    
 
    
  var map = new google.maps.Map(document.getElementById("locationmaps"),mapProp);
    
    var marker=new google.maps.Marker({
  position:new google.maps.LatLng(25.2686,82.9903),
        animation:google.maps.Animation.BOUNCE
  });
    
    marker.setMap(map);
    
    var marker1=new google.maps.Marker({
  position:new google.maps.LatLng(25.3064,83.0101),
  });
    
    marker1.setMap(map);
    
     var marker2=new google.maps.Marker({
  position:new google.maps.LatLng(25.2886,83.0068),
  });
    
    marker2.setMap(map);
    
    var infowindow = new google.maps.InfoWindow({
  content:"Dasaswamedh Ghat"
  });

google.maps.event.addListener(marker1, 'click', function() {
  infowindow.open(map,marker1);
  });
    
}

function loadScript()
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDLPHROpXsX_MhBiwuW-qKvSpe6i5ETBEA&callback=initialize";
  document.body.appendChild(script);
}



 function initialized()
{
     var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;
    
     directionsDisplay = new google.maps.DirectionsRenderer();
        var vara = new google.maps.LatLng(25.2800, 82.9600);
        var mapOptions = {
            zoom: 8,
            center: vara
        };
        map = new google.maps.Map(document.getElementById('tripmap'), mapOptions);
        directionsDisplay.setMap(map);
    
    
    
    
    
    
    var start = new google.maps.LatLng(25.2611941, 82.9496352);
        var end = new google.maps.LatLng(25.3108, 83.0106);
    var mid = new google.maps.LatLng(25.260, 82.9840);
        
        
var startMarker = new google.maps.Marker({
            position: start,
            map: map,
            draggable: true
        });
        var endMarker = new google.maps.Marker({
            position: end,
            map: map,
            draggable: true
        });

    
      var midMarker = new google.maps.Marker({
            position: mid,
            map: map,
            draggable: true
        });
    
     midMarker.setMap(map);
    
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(start);
        bounds.extend(end);
        map.fitBounds(bounds);
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(map);
            } else {
                alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
            }
        });
    }

    
function loadScriptd()
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDLPHROpXsX_MhBiwuW-qKvSpe6i5ETBEA&callback=initialized";
  document.body.appendChild(script);
}