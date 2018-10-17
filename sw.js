const staticCacheName = 'restaurant-static-v1';

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
        '/img/10.jpg'
      ]);
    }).catch(function(error) {
      console.log(error);
    })
  );
});
