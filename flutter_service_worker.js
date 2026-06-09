'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "09a951affe6755975a3211a63e1a7ca5",
"/": "09a951affe6755975a3211a63e1a7ca5",
"canvaskit/wimp.js.symbols": "04c101a7c3fa4a746530dfeac4454914",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_heavy.js": "0295b54061e33621fdd7658234588ee3",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_heavy.js.symbols": "5fd20b278f5a4fc136132117750e767c",
"canvaskit/skwasm_heavy.wasm": "d93bec627f040de8d0c2f69091903956",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/wimp.js": "fd6185aed0230a04a3aacc9ff9692f7d",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/wimp.wasm": "28ede597cf38defbf0a6ad6f5d9bdeb0",
"flutter.js": "76f08d47ff9f5715220992f993002504",
".claude/settings.local.json": "49c22babe2464fff3d73c625c38d6b19",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "5ec4b5372d5052a1ddbf2b37229ced3e",
"assets/AssetManifest.bin.json": "b8e12ec8451ca153a9612a113d49f114",
"assets/AssetManifest.bin": "d0ad816e5d68baf2387401dba6b69dcb",
"assets/NOTICES": "1ea1869c023674a6600f3c86aba7ef2e",
"assets/AssetManifest.json": "7fb18db7c36895c15ee137d296da4fac",
"assets/assets/images/restaurant-1.jpg": "5b2fe6808e96cd4ab7f622ff09d80685",
"assets/assets/images/restaurant-2.jpg": "2b17a190e5539730a9b1e77c26b39806",
"assets/assets/images/restaurant-3.jpg": "33104e4a9be0c66a4a3e1dd8ab525753",
"assets/assets/images/nomout-logo.png": "83da2ed3eb5122fe0bfd09e0b411b7cc",
"assets/assets/images/cat-family.jpg": "2e28c78d4b386d875a93912c6c0400f6",
"assets/assets/images/cat-buffet.jpg": "7d97cc03a388b3c7804e6eff9dff49b6",
"assets/assets/images/cat-party.jpg": "6a07258bbe7105482a95b747903c1dec",
"assets/assets/images/cat-romantic.jpg": "78485e0153a0ea46d2433cb194790734",
"assets/assets/images/restaurant-4.jpg": "4cd7321705df8be8f4c8fe0692ff536f",
"assets/assets/images/restaurant-1b.jpg": "23d6e8243deb69861986fbaf1a3ad7a7",
"assets/assets/images/restaurant-1c.jpg": "e03e2152fccb3654481958a1420647d2",
"assets/assets/images/cat-cafe.jpg": "9309a47d332e3af4ffadb193c86598d6",
"assets/assets/images/cat-drinks.jpg": "41b0e2a34c5de40e08df9adcd0aa33a9",
"assets/assets/images/hero-dining.jpg": "dc5aea08e2a20dfc634e9f7fd996464f",
"assets/shaders/stretch_effect.frag": "860208b8cde709357b2dd8817c942dbc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f84293598ed2e7cf5ed4fa6bfa251f7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"flutter_bootstrap.js": "c03e8942f4bbb58e5fc071bbbc271363",
"main.dart.js": "9c5cd36c32dc64a0672950b2e3976015",
"version.json": "cf9b53b76b456da9b6a113573bb8d5a0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "5bd3714eb98c60c7d71b9eb6f1306261",
".git/index": "05272e5653f062152a9c7cece4a91913",
".git/FETCH_HEAD": "fc261b08f937224658222492ccb52fc6",
".git/logs/refs/heads/main": "24cd09ecb18a36ff5c9959be02106738",
".git/logs/refs/remotes/origin/main": "c9b13a826efbc11a2086d902a6252a6c",
".git/logs/HEAD": "24cd09ecb18a36ff5c9959be02106738",
".git/objects/pack/pack-c4849a8617f29a81db626767a5b5ffeeafadd61d.rev": "f0daf17743fe32d4ae551b3faa7e7c94",
".git/objects/pack/pack-c4849a8617f29a81db626767a5b5ffeeafadd61d.idx": "2b6f3ff906b3cde746af916fb724b862",
".git/objects/pack/pack-c4849a8617f29a81db626767a5b5ffeeafadd61d.pack": "1c03260d855aa2f3e4b723377068b9d0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "12a19f19a8d4b74563a68579a77c9689",
".git/refs/remotes/origin/main": "12a19f19a8d4b74563a68579a77c9689",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb"};
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
