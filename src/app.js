import { Loader } from '@googlemaps/js-api-loader';

const apiOptions = {
    apiKey: "AIzaSyCPwITSO7jNdx8eDxj7U7TMQnLDHiL4waw"
}

const loader = new Loader(apiOptions);

loader.load().then(() => {
    console.log('Maps JS API loaded');
    const map = displayMap();
    const markers = addMarkers(map);
});

function displayMap() {
    const mapOptions = {
      center: { lat: 37.643205, lng: 127.105763 },
      zoom: 17
    };
    const mapDiv = document.getElementById('map');
    const map = new google.maps.Map(mapDiv, mapOptions);
    return map;
}

function addMarkers(map) {
    const locations = {
      firstsilsoupkhan: { lat: 37.644322, lng: 127.105417 },
      secondsilsoupkhan: { lat: 37.644429, lng: 127.106085 },
      firstscientist: { lat: 37.644035, lng: 127.106906 },
      secondscientist: { lat: 37.643587, lng: 127.107601 },
      thirdscientist: { lat: 37.642823, lng: 127.108654 },
      library: { lat: 37.643129, lng: 127.106512 },
      paul: { lat: 37.642683, lng: 127.106925 },
      theology: { lat: 37.642263, lng: 127.104520 },
      samuel: { lat: 37.643589, lng: 127.106923 }
    }
    const markers = [];
    for (const location in locations) {
      const markerOptions = {
        map: map,
        position: locations[location],
        icon: './img/custom_pin.png'
      }
      const marker = new google.maps.Marker(markerOptions);
      markers.push(marker);
    }
    return markers;
  }
