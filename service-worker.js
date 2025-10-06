// Nama cache
const CACHE_NAME = 'sasya-cache-v1';

// File yang mau disimpan di cache
const urlsToCache = [
  './',
  './index.html',
  './about.html',
  './contact.html',
  './offline.html',
  './style.css', 
  './script.js', 
  './manifest.json',
  './images/icon-192.png', 
  './images/icon-512.png'
];

// Saat service worker diinstall
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Berhasil buka cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Saat service worker fetch data
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request)
      .then(response => response || caches.match('./offline.html')))
  );
});

// Saat service worker diaktifkan (hapus cache lama)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});