var gameEngine = {
    initMap: function() {

      // Load custom map
      maps.generateCustomMap();

      // Place Main Character
      characters.generateMainCharacter(google);

      // This event listener will call addMarker()
      objectGenerator.ObjMarkers(currentCoordinates);
      //window.alert(currentCoordinates.lat);
    },
    // Collision detection, Score addition and Object Removal from map and Spliced from array
    collision: function(leadchar){
        //alert(leadchar.getPosition().lat());
        //alert("Test");
        markerCount = markers.length;
        for (var i = 0; i < markerCount; i++) {
            objectCoordinates = {lat: markers[i].lat,lng: markers[i].lng};
            distance = google.maps.geometry.spherical.computeDistanceBetween(leadchar.getPosition(),markers[i].getPosition());
            //markers[i].setMap(null);
            if(distance<20){
                //alert(markers[i].name);
                markers[i].setMap(null);
                score++;
                power = power + markers[i].value;
                //alert(power);
                markers.splice(i, 1);
                markerCount--;
            }
        }
    },
    clickMonitor: function(){
        google.maps.event.addListener(map, 'click', function (event) {
            mouseClickStartStop = mouseClickStartStop * (-1);
        });
        google.maps.event.addListener(map, 'mousemove', function (e) {
            if (mouseClickStartStop==-1){
                leadChar.setPosition(e.latLng);
                currentCoordinates = {lat: leadChar.getPosition().lat(), lng: leadChar.getPosition().lng()};
                gameEngine.collision(leadChar);
            }
        });
    },
    menuButton: function(currentCoordinates){
        var menuLat = (currentCoordinates.lat - .001);
        var menuLng = (currentCoordinates.lng + -.0036);
        var menuCircle = new google.maps.Circle({
            strokeColor: '#FF0048',
             strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: '#FF0000',
             fillOpacity: 1,
            map: map,
            center: {lat: menuLat, lng: menuLng},
            radius: 10
        });

        // Setup Click event for Circle -
        // This will Create a Canvas dom tag and hide the map so we can have more
        // Control with the menu - 2d/3d etc.
        google.maps.event.addListener(menuCircle, 'click', function(){
            document.getElementById('map').style.display = "none";
            var canvasExists = document.getElementById("my-canvas");
            if(!canvasExists){
                var canvas = document.createElement('canvas');

                canvas.id = "CursorLayer";
                canvas.width = 366;
                canvas.height = 368;
                canvas.style.zIndex = 8;
                canvas.style.position = "absolute";
                canvas.style.border = "1px solid";
                canvas.setAttribute("id", "my-canvas");

                var body = document.getElementsByTagName("body")[0];
                body.appendChild(canvas);
            }

            // Register Close Button
            function getMousePos(canvas, event) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
                };
            }
                function isInside(pos, rect){
                return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
            }

            var canvas = document.getElementById("my-canvas");
            var context = canvas.getContext("2d");
            var closeButtonCoordinates = {
                x:550,
                y:350,
                width:200,
                heigth:100
            };

            context.fillStyle = "blue";
            context.font = "bold 32px Arial";
            context.fillText("Main Menu", (canvas.width / 2) - 99, (canvas.height / 2) + -138);

            // Button to go back to Map
            context.beginPath();
            context.rect(550, 350, 200, 100);
            context.fillStyle = '#FFFFFF';
            context.fillStyle = 'rgba(225,225,225,0.5)';
            context.fillRect(25,72,92,32);
            context.fill();
            context.lineWidth = 2;
            context.strokeStyle = '#000000';
            context.stroke();
            context.closePath();
            context.font = '22pt Kremlin Pro Web';
            context.fillStyle = '#000000';
            context.fillText('Close', 28, 102);
            canvas.addEventListener('click', function(evt) {
                // TODO : Need to actually get mouse coordinates to work
                var mousePos = getMousePos(canvas, evt);
                if (isInside(mousePos,closeButtonCoordinates)) {
                    alert('clicked inside rect');
                }else{
                    document.getElementById('map').style.display = "block";
                    document.getElementById('my-canvas').style.display = "block";
                }
            }, false);
        });
    },
    isClickInButtonHappening(pointX,pointY,rectX,rectY,rectWidth,rectHeight){
        return  (rectX <= pointX) && (rectX + rectWidth >= pointX) &&
                (rectY <= pointY) && (rectY + rectHeight >= pointY);
    }
};