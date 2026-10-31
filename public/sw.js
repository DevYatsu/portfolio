// No service worker ships with this site. A browser that registered one for this
// origin keeps polling this URL, so this replaces it with one that removes itself.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
			.then(() => self.registration.unregister()),
	);
});
