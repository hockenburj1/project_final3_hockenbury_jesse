$( document ).ready( function() {
    map = new GMaps( {
        div: '#map',
        lat: 28.371099,
        lng: -81.517777
    } );

    map.addMarker( {
        lat: 28.371099,
        lng: -81.517777,
        title: 'Pizza Planet'
    } );
} );
