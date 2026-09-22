/* PLE — service worker.
   Guarda a aplicação em cache para funcionar sem ligação à internet.
   Para publicar uma versão nova, incrementa VERSAO: os dispositivos
   descarregam o ficheiro novo no arranque seguinte. */
const VERSAO = 'ple-v3';
const FICHEIROS = [
  './',
  './index.html',
  './manifest.json',
  './icone-192.png',
  './icone-512.png',
  './icone-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(FICHEIROS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => {
      if (hit) {
        fetch(e.request).then(r => { if (r && r.ok) caches.open(VERSAO).then(c => c.put(e.request, r.clone())); }).catch(() => {});
        return hit;
      }
      return fetch(e.request)
        .then(r => { if (r && r.ok) caches.open(VERSAO).then(c => c.put(e.request, r.clone())); return r; })
        .catch(() => caches.match('./index.html'));
    })
  );
});
