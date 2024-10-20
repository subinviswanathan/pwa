self.addEventListener('install', (event) => {
	console.log('[Service Worker] Installing Service Worker...', event);
	event.waitUntil(
		caches.open('static').then((cache) => {
			console.log('[Service Worker] Pre Caching App Shell');
			cache.add('/index.html');
			cache.add('/src/js/app.js');
		})
	);
});

self.addEventListener('activate', (event) => {
	console.log('[Service Worker] Activating Service Worker...', event);

	return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
	// console.log('[Service Worker] Fetching Somethig...', event);

	event.respondWith(
		caches.match(event.request).then((res) => {
			if (res) return res;
			else return fetch(event.request);
		})
	);
});
