const CACHE_NAME = 'my-cache v1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(cache =>
                cache.addAll([
                    'favicon.ico',
                    'projects.json',
                    'style.css',
                    'index.js',
                    'https://fonts.googleapis.com/css?family=Open+Sans:400,700'
                ])
            )
    );
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                //found cached resource
                return response;
            }
            return fetch(event.request);
        })
    );
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                //found cached resource
                return response;
            }

            // get resource and add it to cache
            return fetch(event.request)
                .then(response => {
                    // check if the response is valid
                    if (!response.ok) {
                        return response;
                    }

                    // clone the response
                    const newResponse = response.clone();

                    // add it to cache
                    caches.open(CACHE_NAME)
                        .then(cache =>
                            cache.put(event.request, newResponse)
                        );

                    // return response
                    return response;
                });
        })
    );
});
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(cache => {
                    if (cache === CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
