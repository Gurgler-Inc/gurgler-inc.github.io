importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.precaching.precacheAndRoute([{ url: '/', revision: 'v4' }]);
workbox.precaching.precacheAndRoute([{ url: '/icons', revision: 'v1' }]);

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()
);
