self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/', // Cache the homepage
          '/test', // Add this line to cache the /test path
          'style.css', 
          'script.js', 
          'spellData.js', 
          'icon-192.png', 
          'icon-512.png' 
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
