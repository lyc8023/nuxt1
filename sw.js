importScripts('/nuxt1/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt1/_nuxt/07c25550eddd0da3def3.js",
    "revision": "d378c09e57f5d596e6f0bf52d6ac1e91"
  },
  {
    "url": "/nuxt1/_nuxt/23bd857c95ed42f4b080.js",
    "revision": "b33d2eed3c63f3e892915ebb5a3c61b0"
  },
  {
    "url": "/nuxt1/_nuxt/87e4a8498a62b7602714.js",
    "revision": "108eb00dd80205d4e67d395adae48693"
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
