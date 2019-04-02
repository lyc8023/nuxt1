importScripts('/nuxt1/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt1/_nuxt/9e44a14a488b8c4aa922.js",
    "revision": "5801174a4f81da6cb1f2f471c5a59abc"
  },
  {
    "url": "/nuxt1/_nuxt/c4ea17d84cee2725e0b2.js",
    "revision": "b33d2eed3c63f3e892915ebb5a3c61b0"
  },
  {
    "url": "/nuxt1/_nuxt/cabfa8f77da132232068.js",
    "revision": "8441ce320ee5c589940ad25c540578ce"
  },
  {
    "url": "/nuxt1/_nuxt/d7f7fe4a2982b4fb6501.js",
    "revision": "b3201d68312f9d4f4e32b164583f4ade"
  },
  {
    "url": "/nuxt1/_nuxt/d8cd5367946e89644ba6.js",
    "revision": "f0f2ead7a318428ff8eb931c43c0cdd2"
  }
], {
  "cacheId": "nuxt1",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/nuxt1/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/nuxt1/.*'), workbox.strategies.networkFirst({}), 'GET')
