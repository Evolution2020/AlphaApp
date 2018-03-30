var characters = {
    generateMainCharacter: function(){
        var lead = new google.maps.Marker({
            map: map,
            sName: "Leader",
            position: currentCoordinates,
            icon: "./images/people.png"
        });
    return lead;
    }
};
