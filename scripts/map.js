var maps = {
    generateCustomMap: function(){
       return map = new google.maps.Map(document.getElementById('map'), {
            zoom: 20,
            center: currentCoordinates,
            //mapTypeId: 'terrain'

            styles: [
            {elementType: 'labels', stylers: [{visibility: 'off'}]},
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },

            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            }
            ]
        });
    }
};