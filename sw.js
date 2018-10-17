const staticCacheName = 'restaurant-static-v1';

//Builds cache of assest from visted pages
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/restaurant.html',
        '/index.html',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/navScript.js',
        '/js/restaurant_info.js',
        '/data/restaurants.json',
        '/css/responsive.css',
        '/css/styles.css',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
      ]);
    }).catch(function(error) {
      console.log(error);
    })
  );
});

//fetches cached assests for offline display
self.addEventListener('fetch', function(event) {
  let requestUrl = new URL(event.request.url);

  if (requestUrl.origin === location.origin) {
    if (requestUrl.pathname.startsWith('/restaurant.html')) {
      event.respondWith(caches.match('/restaurant.html'));
      return;
    }
  }

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    }).catch(function(error) {
      console.log(error);
    })
  );
});
