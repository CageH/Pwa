self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
        caches.open("static")
        .then(function(cache) {
            console.log("precaching");
            cache.add('/index.html');
            cache.add('/tomato_all.html');
            cache.add('/tomato_one.html');
            cache.add('/contact_us.html');
            cache.add('/css/bootstrap.min.css');
            cache.add('/css/bootstrap.bundle.min.js');
            cache.add('/css/header.css');
            cache.add('/css/middle.css');
            cache.add('/css/footer.css');
            cache.add('/css/responsive.css');
            cache.add('/images/Banner_bg_line_165.png');
            cache.add('/images/Banner_bg_line_300.png');
            cache.add('/images/Banner_bg_line_622.png');
            cache.add('/images/Logo_tomato.png');
            cache.add('/images/logo_svg.svg');
        })
    );
  });

self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
 });

   self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if (response)
                return response;
            else
                return fetch(event.request);
        }
        )
    );
  });
 