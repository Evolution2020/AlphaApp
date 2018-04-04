var objectGenerator = {


    // The markers are stored in an array.
    // The user can then click an option to hide, show or delete the markers.
    // Adds a marker to the map and push to the array.
    addMarker: function(location) {
       
        // Randomly select Object from JSON
        // pickJsonObject is array, if 6 we must remove 1 integer
        var selectJsonObject = Math.round(Math.random()*json.length); 
        if(selectJsonObject == 6) selectJsonObject = selectJsonObject - 1;
        var pickJsonObject = json[selectJsonObject];
        
        var marker = new google.maps.Marker({
            position: location,
            label: pickJsonObject.class,
            map: map,
            lat: location.lat,
            lng: location.lng,
            id: pickJsonObject.id,
            category: pickJsonObject.category,
            group: pickJsonObject.group,
            class: pickJsonObject.class,
            name: pickJsonObject.name,
            weight: pickJsonObject.weight,
            value: pickJsonObject.value,
            maxPower: pickJsonObject.maxPower,
            icon: iconBase + pickJsonObject.icon
            });
            return markers.push(marker);
    },

    // Removes the markers from the map, but keeps them in the array.
    clearMarkers: function() {
        this.setMapOnAll(null);
    },

    // Deletes all markers in the array by removing references to them.
    deleteMarkers: function() {
        this.clearMarkers();
        return markers = [];
    },

    myTimer: function (jsonCoordinates) {
        return ObjMarkers(jsonCoordinates);
      },

    myTimerDel: function () {
        return deleteMarkers();
      },

    // Randomize markers and push to array.
    ObjMarkers: function(loc) {
        var latRand;
        var lonRand;        
        var objs = Math.floor(Math.random() * 3) + 1;       
        var MarkLoc;
        x = loc.lat;
        y = loc.lng;
        for (var i = 1; i <= objs; i++) {
            latRand = ((Math.round(Math.random()*9)-Math.round(Math.random()*9))/10000)+0.0001;
            lonRand = ((Math.round(Math.random()*9)-Math.round(Math.random()*9))/10000)+0.0001;
            x = x+latRand;
            y = y+lonRand;
            MarkLoc = {lat: x, lng: y};          
            this.addMarker(MarkLoc);
        }    
    },
    
    setMapOnAll: function(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    },

    setObjectTimer: function(coordinates, dropItemInterval){
        return objectGenerator.ObjMarkers(coordinates);
    },

    // Shows any markers currently in the array.
    showMarkers: function() {
        this.setMapOnAll(map);
    }

};