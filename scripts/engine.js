var gameEngine = {
    initMap: function() {

      // Load custom map
      maps.generateCustomMap();

      // Place Main Character
      characters.generateMainCharacter(google);

      // This event listener will call addMarker()
      objectGenerator.ObjMarkers(currentCoordinates);
      //window.alert(currentCoordinates.lat);
    }
};