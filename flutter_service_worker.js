'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "061bb2c3ce8dec95c7efff83a1ba60bc",
"assets/AssetManifest.bin.json": "8608035b318e0421e5ef1c9141224faa",
"assets/AssetManifest.json": "dd45e4e6d1f0d931db5ee1aae89a51dd",
"assets/assets/images/planets/0.png": "5cec8fdb95da14e9a373fe2449734367",
"assets/assets/images/planets/jupiter.png": "cbc8f4c7777f91ea7ef2dee26931dc09",
"assets/assets/images/planets/mars.png": "2753bdb4c6fd545566c04b3b578a17df",
"assets/assets/images/planets/mercury.png": "8d94374418db747a98d6c2f3eda98bb2",
"assets/assets/images/planets/moon.png": "961a5378c5ff4ec07c8171e2171fe330",
"assets/assets/images/planets/neptune.png": "881abc1a54ee89e29d9a88da37d3d0f7",
"assets/assets/images/planets/pluto.png": "2da204256ea46840c83bfab1cb6d8a5f",
"assets/assets/images/planets/saturn.png": "548cfc1b429a22e0ed8588e199efa6a1",
"assets/assets/images/planets/sun.png": "c582a3fafdcd49d29a6007833978e66e",
"assets/assets/images/planets/uranus.png": "ab6969bfbc3e76a678b90c8ad89d6065",
"assets/assets/images/planets/venus.png": "47538b8d6d6fcd82a097958786e7e10b",
"assets/assets/images/zodiacs/0.png": "5cec8fdb95da14e9a373fe2449734367",
"assets/assets/images/zodiacs/aquarius.png": "a24e492eecf6ac748ca11f70bce36e90",
"assets/assets/images/zodiacs/aries.png": "df034580fd99231f9df853d6c893741b",
"assets/assets/images/zodiacs/cancer.png": "3dbb744caeefeed2b3abde0a0acbe60b",
"assets/assets/images/zodiacs/capricorn.png": "9a6e1081dbbf4bcd3731b7e5ec2c3914",
"assets/assets/images/zodiacs/gemini.png": "8944dbd0003e09be9b6398c811bd7428",
"assets/assets/images/zodiacs/leo.png": "1c9581954b530e0dc45f2d7198a1587f",
"assets/assets/images/zodiacs/libra.png": "a23d5e7a161aa964859d37364bcf6864",
"assets/assets/images/zodiacs/pisces.png": "1fa559024538c7fe78d0cf3097c21a5c",
"assets/assets/images/zodiacs/sagittarius.png": "b683c0331e858479c96f1c54c795d69b",
"assets/assets/images/zodiacs/scorpio.png": "a318805b06ef121303b3a0441c107b09",
"assets/assets/images/zodiacs/taurus.png": "f3b19333cc090ee03157791d19be8107",
"assets/assets/images/zodiacs/virgo.png": "3fad08e837818bc9249622adde85c1f5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0a3f9795fc143bf74e61c2f4b0f393b4",
"assets/NOTICES": "830b165382febcb0b2a5271ca7b10237",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "0e55ae2b91bdaac8f973a6485332bdc6",
"canvaskit/canvaskit.wasm": "8f4f2effe0bac7b5e3c43a7f9ea47275",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "43bfedc93b83230802587d761d768b0e",
"canvaskit/chromium/canvaskit.wasm": "6cc6af0656608b5b904bc4ac877f4612",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "2a991bf1c6d7aded68faeb3edf13b82f",
"canvaskit/skwasm.wasm": "c718043c08c005ababa7c89c465f69c8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "550f7fb8b382b9a7fc8c979f17a368c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f3a2b0d89641dbe5b5774b57c73d020a",
"/": "f3a2b0d89641dbe5b5774b57c73d020a",
"main.dart.js": "3f579bf436ffa8ca042c8afe7ad8813c",
"manifest.json": "dc01b692b8dc773b7bfb4a99313dc504",
"version.json": "5f92acd96aa76a8e9c830a0a8538988d",
"workflow.yml": "bcf82c26fdb1094effc236f72186ed72"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
