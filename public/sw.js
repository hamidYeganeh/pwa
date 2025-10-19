// const CACHE_NAME = "pwa-cache-v2";
// const OFFLINE_URL = "/offline";

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("Opened cache");
//       return cache.add(OFFLINE_URL);
//     })
//   );
//   self.skipWaiting();
// });

// self.addEventListener("beforeinstallprompt", (event) => {
//   console.log("beforeinstallprompt", { event });
// });
// self.addEventListener("activate", (event) => {
//   console.log("ACTIVATE", event);

//   // event.waitUntil(
//   //   caches.keys().then((cacheNames) => {
//   //     return Promise.all(
//   //       cacheNames.map((cacheName) => {
//   //         if (cacheName !== CACHE_NAME) {
//   //           console.log("Deleting old cache:", cacheName);
//   //           return caches.delete(cacheName);
//   //         }
//   //       })
//   //     );
//   //   })
//   // );
//   self.clients.claim();
// });

// self.addEventListener("fetch", (event) => {
//   if (event.request.mode === "navigate") {
//     event.respondWith(
//       (async () => {
//         try {
//           const networkResponse = await fetch(event.request);
//           return networkResponse;
//         } catch (error) {
//           console.log("Fetch failed; returning offline page instead.", error);
//           const cache = await caches.open(CACHE_NAME);
//           const cachedResponse = await cache.match(OFFLINE_URL);
//           return cachedResponse;
//         }
//       })()
//     );
//   } else if (
//     event.request.destination === "style" ||
//     event.request.destination === "script" ||
//     event.request.destination === "image"
//   ) {
//     event.respondWith(
//       caches.open(CACHE_NAME).then(async (cache) => {
//         const cachedResponse = await cache.match(event.request);
//         const fetchedResponse = fetch(event.request).then((networkResponse) => {
//           cache.put(event.request, networkResponse.clone());
//           return networkResponse;
//         });
//         return cachedResponse || fetchedResponse;
//       })
//     );
//   } else {
//     event.respondWith(fetch(event.request));
//   }
// });

self.addEventListener("push", function (event) {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: data.icon || "/icon.png",
      badge: "/badge.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "2",
      },
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

self.addEventListener("notificationclick", function (event) {
  console.log("Notification click received.");
  event.notification.close();
  event.waitUntil(clients.openWindow("https://pwa-five-smoky.vercel.app"));
});
