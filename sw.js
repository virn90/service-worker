// sw.js

// files array to cache
let filesArr = [
    '/',
    './style.css',
    './index.html',
    './workbox-config.js'
  ]
  
  self.addEventListener('install', function(e) {
    console.log('Service Worker installed : )');
  
    // delay the event until promise is resolved
    e.waitUntil(
      // open the cache
      caches.open('v1').then(function(cache) {
          // add the files that you want to cache
          return cache.addAll(filesArr);
        })
    );
  })
  
  self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request)
          .then(function(response) {
              return response || fetch(event.request).then(function(response) {
                  return caches.open('v1').then(function(cache) {
                      cache.put(event.request, request.clone());
                      return response;
                  });
              });
        })
          .catch(function(err) {
          console.log('Error fetching resources')
        })
    )
})

self.addEventListener('activate', (event) => {
  var cacheKeeplist = ['v2'];

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
