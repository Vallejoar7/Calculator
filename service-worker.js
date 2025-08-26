self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('consumo-store').then(function(cache) {
      return cache.addAll([
        './calculadora_consumo_colombia_pwa.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});