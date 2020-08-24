 class Route  {
constructor(start, end, mode, id, center = {}, zoom) {
  this.start = start;
  this.end = end;
  this.center = center;
  this.zoom = zoom;
  this.mode = mode;
  this.id = id;
 } 
}

// for(let i = 0; i < )
// const route = new Route('s', 'e', {log: 1, lon:2}, 15, 'cool')

const inputStart = document.querySelector('#inputStart'),
        inputEnd = document.querySelector('#inputEnd'),
        selectTransport = document.querySelector('#transport'),
        btnForm = document.querySelector('#btnForm')

        console.log(inputStart, inputEnd, selectTransport, btnForm)
        // 'Центральный р-н, Санкт-Петербург, 191023', 'Центральный р-н, Санкт-Петербург, 191023', 10,


let arr = [
  {
    start: 'Prospekt Chernyshevskogo, 11/57, St Petersburg, 191123',
    end: 'Prospekt Chernyshevskogo, 17А, St Petersburg, 191123',
    center: {
      lat: 59.945958,
      lng: 30.358884,
    },
    zoom: 13,
    mode: 'walking',
  },
  {
    start: `'Nikol 'skaya Ploshchad', 6, St Petersburg, 190068`,
    end: 'Mytninskaya Naberezhnaya, 7/5, St Petersburg, 197198',
    center: {
      lat: 59.945958,
      lng: 30.358884,
    },
    zoom: 10,
    mode: 'walking',
  },
  {
    start: `'Palace Square, 2, St Petersburg, 190000
    `,
    end: 'Theatre Square, 1, St Petersburg, 190000',
    center: {
      lat: 59.945958,
      lng: 30.358884,
    },
    zoom: 10,
    mode: 'walking',
  },
  {
    start: 'Невский р-н, Санкт-Петербург, 193149',
    end: 'Планерная ул., 1, Санкт-Петербург, 197374',
    center: {
      lat: 59.967789,
      lng: 30.326256,
    },
    zoom: 15,
    mode: 'driving',
  },
  {
    start: 'Смо́льнинское, Санкт-Петербург, 191036',
    end: 'Ждановская наб., 3, Санкт-Петербург, 197110',
    center: {
      lat: 59.967789,
      lng: 30.326256,
    },
    zoom: 15,
    mode: 'driving',
  },

  {
    start: 'Красногвардейский р-н, Санкт-Петербург, 195027',
    end: 'Всеволожский р-н, Ленинградская обл.',
    center: {
      lat: 59.967789,
      lng: 30.326256,
    },
    zoom: 15,
    mode: 'driving',
  },

  {
    start: 'Мраморный пер., Санкт-Петербург, 191186',
    end: 'Муниципальный округ № 72, Санкт-Петербург, 192241',
    center: {
      lat: 59.967789,
      lng: 30.326256,
    },
    zoom: 15,
    mode: 'bus',
  },

  {
    start:
      'Поликлиника № 38, Кавалергардская ул., 26, лит. А, Санкт-Петербург, 191015',
    end:
      'Невский пр., дом 39, Санкт-Петербург, 191023',
    center: {
      lat: 59.967789,
      lng: 30.326256,
    },
    zoom: 15,
    mode: 'walking',
  },
];

