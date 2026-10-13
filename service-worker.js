const CACHE='meiri-chuanda-v1';const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;if(e.request.url.startsWith('https://api.open-meteo.com/')||e.request.url.startsWith('https://geocoding-api.open-meteo.com/'))return;e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request)))});
