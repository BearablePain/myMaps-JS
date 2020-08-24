// async function  direction() {
//   let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//   const _url = 'https://maps.googleapis.com/maps/api/directions/json?'
//   const _key= '&key=AIzaSyA2szSQM9UrlfbTu0yxsdS7jTOmZUavHAw'

//   const responce = await fetch  (`${proxyUrl}${_url}origin=Disneyland&destination=Universal+Studios+Hollywood&${_key}`);
//   console.log(await responce.json())

// }

// direction()
// button.advenListtener('click', {

// })
// function getMap(map, adres, start, end)
// const google = require('https://maps.googleapis.com/maps/api/js?key=AIzaSyA2szSQM9UrlfbTu0yxsdS7jTOmZUavHAw&callback=initMap&libraries=&v=weekly');
// function* generateId() {
//   let id = 0;
//   while (true) {
//     id++;
//     yield id;
//   }
// }
// let id = 0

// const iterator = generateId();

const map = document.querySelector('#map');
const createForm = document.querySelector('#create-form');
let obj;
let idMyCard = 0;
btnForm.addEventListener('click', (e) => {
  e.preventDefault();
  //   console.log(inputStart.value, inputEnd.value)
  //   if(inputStart.value === '' ||
  //     inputEnd.value === '')
  // {
  //   let div = document.createElement('div')

  // console.log(iterator.next().value);
  //   div.innerHTML = `
  //       <h5>Заполните, пожалуйста обязательные поля</h5>
  // `;

  // myRoute.append(div)
  // break
  // }
  const route = new Route(
    inputStart.value,
    inputEnd.value,
    selectTransport.value,
    idMyCard++
  );
  obj = route;
  arr.push(obj);
  const myRoute = document.querySelector('#myRoute');
  const nameRoute = document.querySelector('#nameRoute');
  const titleRoute = document.querySelector('#titleRoute');

  console.log(route);

  // id = iterator.next().value;
  let div = document.createElement('div');
  let image;

  switch(obj.mode) {
    case 'driving':
      image =  '/public/img/car.jpg' 
      break;
      case 'cycle':
      image =  '/public/img/cycleMy.jpg' 
      break;
      case 'bus':
      image =  '/public/img/myBus.jpg'
      break;
      case 'walking':
      image = '/public/img/walk.jpg'
      break;
       default: '/public/img/center.jpg';
  }
  div.innerHTML = `<div class="col-sm p-1 ml-4">
  <div class="card" style="width: 18rem;">
    <img
      class="card-img-top"
      src= ${image}
    />
    <div class="card-body">
      <h5 class="card-title text-primary">${nameRoute.value}</h5>
      <p class="card-text">
        ${titleRoute.value}
      </p>
      <a href="#" class="btn btn-primary" id=myRoute${route.id}
        >Посмотреть</a
      >
      <a href="#" class="btn btn" id=del
      >Удалить</a
    >
    </div>
  </div>
</div>`;

  myRoute.append(div);
  //
});

const myBtn = document.querySelector(`#myRoute`);
myBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id === 'del') {
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
  }
  viewRoute(e.target.id);
});

const groopCard = document.querySelector('.container');
groopCard.addEventListener('click', (e) => {
  e.preventDefault();
  viewRoute(e.target.id);
});

function initMap() {
  const { start, end, zoom } = obj;

  switch (obj.mode) {
    case 'walking':
      obj.mode = google.maps.TravelMode.WALKING;
      break;
    case 'driving':
      obj.mode = google.maps.TravelMode.DRIVING;
      break;
    case 'cycle':
      obj.mode = google.maps.TravelMode.BICYCLING;
      break;
    case 'bus':
      obj.mode = google.maps.TravelMode.TRANSIT;
      break;
    default:
      break;
  }
  console.log(obj);
  let markerArray = [];
  // Instantiate a directions service.
  const directionsService = new google.maps.DirectionsService();
  // Create a map and center it on Manhattan.
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom,
    center: obj.center,
  });
  const marker = new google.maps.Marker({
    position: {
      lat: 59.935789,
      lng: 30.305438,
    },
  });
  // Create a renderer for directions and bind it to the map.
  const directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
  });
  // Instantiate an info window to hold step text.
  const stepDisplay = new google.maps.InfoWindow();
  // Display the route between the initial start and end selections.
  calculateAndDisplayRoute(
    directionsRenderer,
    directionsService,
    markerArray,
    stepDisplay,
    map
  );

  // Listen to change events from the start and end lists.
  const onChangeHandler = function () {
    calculateAndDisplayRoute(
      directionsRenderer,
      directionsService,
      markerArray,
      stepDisplay,
      map
    );
  };
  // document.getElementById('start').addEventListener('change', onChangeHandler);
  // document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(
  directionsRenderer,
  directionsService,
  markerArray,
  stepDisplay,
  map
) {
  // First, remove any existing markers from the map.
  for (let i = 0; i < markerArray.length; i++) {
    markerArray[i].setMap(null);
  }
  // Retrieve the start and end locations and create a DirectionsRequest using
  // WALKING directions.

  directionsService.route(
    {
      origin: obj.start,
      destination: obj.end,
      travelMode: obj.mode,
    },
    (result, status) => {
      // Route the directions and pass the response to a function to create
      // markers for each step.
      if (status === 'OK') {
        document.getElementById('warnings-panel').innerHTML =
          '<b>' + result.routes[0].warnings + '</b>';
        directionsRenderer.setDirections(result);
        showSteps(result, markerArray, stepDisplay, map);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
}

function showSteps(directionResult, markerArray, stepDisplay, map) {
  // For each step, place a marker, and add the text to the marker's infowindow.
  // Also attach the marker to an array so we can keep track of it and remove it
  // when calculating new routes.
  const myRoute = directionResult.routes[0].legs[0];

  for (let i = 0; i < myRoute.steps.length; i++) {
    const marker = (markerArray[i] =
      markerArray[i] || new google.maps.Marker());
    marker.setMap(map);
    marker.setPosition(myRoute.steps[i].start_location);
    attachInstructionText(
      stepDisplay,
      marker,
      myRoute.steps[i].instructions,
      map
    );
  }
}

function attachInstructionText(stepDisplay, marker, text, map) {
  google.maps.event.addListener(marker, 'click', () => {
    // Open an info window when the marker is clicked on, containing the text
    // of the step.
    stepDisplay.setContent(text);
    stepDisplay.open(map, marker);
  });
}
console.log(groopCard);
