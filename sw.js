self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/', // Cache the homepage
          'style.css', 
          'script.js', 
          'spellData.js', 
          'icon-192.png', 
          'icon-512.png' 
          '/chin_spell', // Add this line to cache the /chin_spell path
          '/chin_spell/style.css', 
          '/chin_spell/script.js', 
          '/chin_spell/spellData.js', 
          '/chin_spell/icon-192.png', 
          '/chin_spell/icon-512.png' 
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
