const CACHE_NAME = "html-css-assignments-v2";
const APP_ASSETS = [
    "./",
    "./index.html",
    "./converter.html",
    "./grading.html",
    "./change.html",
    "./distance.html",
    "./drag-and-drop.html",
    "./resume.html",
    "./hobby.html",
    "./styles.css",
    "./resume&hobby.css",
    "./pwa.js",
    "./manifest.webmanifest",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames
                    .filter((cacheName) => cacheName !== CACHE_NAME)
                    .map((cacheName) => caches.delete(cacheName))
            )
        )
    );
    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) =>
            cachedResponse || fetch(event.request)
        )
    );
});
