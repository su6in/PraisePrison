'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8cbc504e7a07f78044f08f05b75a7b77",
"assets/AssetManifest.bin.json": "6b6de409281fc15fe47a7a1abfec2f2b",
"assets/AssetManifest.json": "87483cf2c857ff196eef7151433b1c16",
"assets/assets/gift/gift_letter.webp": "4fb6c1e751bf64ce5b9c1cb62c5c683b",
"assets/assets/images/1-1.webp": "0634c08e77f7a7c219eef7dc23679ae5",
"assets/assets/images/1-2.webp": "15e359064fe1924a634e025257f5cdc9",
"assets/assets/images/1-3.webp": "358562a36f244b3488a6e4a7e77a500b",
"assets/assets/images/1-4.webp": "f5f48e8f72d5f0574b5c6963e01260bc",
"assets/assets/images/1-5.webp": "dc2ee9e39b3f6ef0ff84568f415b7a4b",
"assets/assets/images/1-6.webp": "266594b44a7f4f964c38cf46f742603c",
"assets/assets/images/2-1.webp": "f25628400aa3dd7ce137fb75a006471c",
"assets/assets/images/2-hint-1.webp": "7ce6c949e6193d471c97a54a4dff6347",
"assets/assets/images/2-hint-2.webp": "7c2208e982087326b3c7dd36fabd1194",
"assets/assets/images/3-1.webp": "dee5e8c13287a2147f6c49d915034d12",
"assets/assets/images/3-2.webp": "15b3b2f7731eba6d7265072557d1885e",
"assets/assets/images/3-3.webp": "575b5ee82d8a08d1883adc39d4e1a559",
"assets/assets/images/3-4.webp": "9bdc1f7156641a077ab4d1714c71df71",
"assets/assets/images/3-5.webp": "93113e97019633456dd5a3a42f1eb841",
"assets/assets/images/3-hint-1.webp": "e83dd9234a6d7d2e7cc630d97f3d5841",
"assets/assets/images/4-1.webp": "dbf0e711de61bef079d698d49fa0bb93",
"assets/assets/images/4-2.webp": "7e511ef8838b54d73692bb8249c48a6d",
"assets/assets/images/4-3.webp": "aba03bd45972f9f307c8bc28510c2946",
"assets/assets/images/4-4.webp": "709c79f48f5b5ffcf08f9a52cd662563",
"assets/assets/images/4-5.webp": "fa494ae26c9ecac654c13daae5f01dec",
"assets/assets/images/4-7.webp": "aaa031726873ae588984c20d14673daf",
"assets/assets/images/4-8.webp": "50647b73fafdc064cb20e0cecd4d7dcf",
"assets/assets/images/4-hint-1.webp": "7552e34a95865134f44669a4e9a1995d",
"assets/assets/images/5-1.webp": "afabfa5151676f877f816f224471bee5",
"assets/assets/images/5-2.webp": "36dcdea69c8ac20dcf641d6a12be5df7",
"assets/assets/images/5-3.webp": "69871495dedcaf3881f7ecabc33b35be",
"assets/assets/images/5-4.webp": "9e06601a7d05b67dd548205b8ade21e1",
"assets/assets/images/5-5.webp": "c548277af9fa6cca7fcae39c2bcf4a5f",
"assets/assets/images/5-6.webp": "8274b5c676e797c0939804495a280378",
"assets/assets/images/6-1.webp": "41c1d5faa96d8cb846deb96a81f38a23",
"assets/assets/images/6-2.webp": "bf1389c1e7e6b48953890db48bc3ee6e",
"assets/assets/images/6-hint-1.webp": "27f33adb793f28ff77d72bea29cf71ce",
"assets/assets/images/7-1.webp": "108068b2ce24302ca366aa93486f1a0c",
"assets/assets/images/7-2.webp": "e1f9ca280acb86736fdcef1963f79640",
"assets/assets/images/btn_circle.webp": "614051f01eec16bb4dd6441262d74962",
"assets/assets/images/btn_rect.webp": "10ce4b60be2ebb9f9a59c04601d2d3d2",
"assets/assets/images/btn_star.webp": "fa3733e793a429a43f6e4278297a52ab",
"assets/assets/images/btn_triangle.webp": "ea41696c31d8d8fe19b61f5e175f23e1",
"assets/assets/images/icon_right_arrow.webp": "bad071c72757b8839087cc20332f9df9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "22a8148310875c998dad3f957a4063ca",
"assets/NOTICES": "8149a61d0150885f1f462fd74ce8f128",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5bad4c41824e6f397dfe0270ff9f85d2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "9d8a7d86872b1723c7c4509740770e20",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "0dbbd7d9c20111911af69e0783e7d12c",
"icons/Icon-192.png": "fbd158c7052988ef4564b6ca6fe82d5b",
"icons/Icon-512.png": "82a7f2ae8c6f686438c5394bd95745ed",
"icons/Icon-maskable-192.png": "2e88458f8fc3ecf963b439aef105c79a",
"icons/Icon-maskable-512.png": "a7550199a876f731d2e3695756ad214a",
"index.html": "d87ca234d6c8775e4c340985162dd908",
"/": "d87ca234d6c8775e4c340985162dd908",
"main.dart.js": "a1c40a0dca67168be3c3758a7ca98426",
"manifest.json": "402845c9109e58ebab9e3cf06cafa95e",
"version.json": "992ef2e33079fa97bf19967310b17eb1"};
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
