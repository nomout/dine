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
"flutter_bootstrap.js": "2dd0eeef4080876a1814209ca238a19e",
"main.dart.js": "fbdeb101d705f4208a0cc2be4e6c09c8",
"version.json": "cf9b53b76b456da9b6a113573bb8d5a0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "c11a9f75c06906a3cecac3e441f49d13",
".git/index": "40ddfd5989a429a7a5a2804ec4729f0a",
".git/FETCH_HEAD": "fc261b08f937224658222492ccb52fc6",
".git/logs/refs/heads/main": "aaf4e970f2cfacb57d6f51bb531479a9",
".git/logs/refs/remotes/origin/main": "d7803d1bdd9f350a739c3e0f917b4526",
".git/logs/HEAD": "aaf4e970f2cfacb57d6f51bb531479a9",
".git/objects/6d/9037747306c4c6117778acf0660d1c48cd1635": "128541826b7bcbb554e97932185d2e1f",
".git/objects/5f/c77de3f3f0d790c916716717100c094368c7c5": "cfbeb2b7bd5e8939c53d365e0848f21c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/da/be02f20235eb3183f6b9548d5b26c2176e7ccb": "d7f96aa57bb806f9f3c0be6c492c436d",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/31/e7f0a058d6425093477b81672b9942a4d99f2c": "559d58ab26718ef5983e3be57b4b5d86",
".git/objects/65/409b22b41c8251ac3b209d6971f49b0ff03f0c": "414990e97eb0debc2774d27ed09a72bb",
".git/objects/00/783cc3d4ac87c6268a45911630b8bcab3b15c5": "1a409456a9aecc5d8818664f7e513763",
".git/objects/ba/7362514122a213bc156de4f8486b2851704442": "9498043bc9ceb81f9d92bd95c77bcc03",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/7a/9577258956ad2906acce9fa42b467ec37731cb": "67697180402438419907054ba04e752c",
".git/objects/f6/b942695d546a275b59c808283832e3070e3c13": "aa3dace767360d9b1ae0fbf8f02f5058",
".git/objects/50/ec0e6267a9c9a80aca6e7d2bf13beaa76554a3": "c8363372e79c1bb71ff2087c7aa9f52e",
".git/objects/f7/c93174d010888ab6bb760b5e03be5c8a7c11d3": "cc3784e94b0003531ce93b93b2a90918",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/b5/d5976a7f1c9c9f7874586c21f89e1492e38cc3": "f6f6acd1014aab91095d1cee472d3679",
".git/objects/b5/cdc8f60202d1f0b6b6f3166456960402482650": "42acec19089bb4024c2ac43dedc2ffce",
".git/objects/2b/43fb386bcabaac9a0064e244b6f764f61decd0": "091e71cd7461e811664434ac85b85b11",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/3fe0efc97eb63eb007bd1b5e13ac4522996581": "2b8c75ecc66ac8319884195c0a29f81b",
".git/objects/4b/b3501181fc22f5b6d1dabd33e41877d90dfc34": "d1676ceabc26c597263b7dbb65ab930f",
".git/objects/c1/c39e70bf4dff24319f3971f7532cd68c14e8e4": "a8d7274555d1d1be5321c45de0376e95",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/89/7a315d1389da729cff5ab663bc9600f987aae1": "e20af1c7782501d216a831036aee3bdb",
".git/objects/e4/ff0702b9606ce717f18cb59c97587357a565c4": "d9db7c71d0e413e20d2795059f4e7006",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/92/d629788a81acf6e06fa75d3ac6ba0487cc4413": "9759299d09d073f952502cefc5db9c15",
".git/objects/1f/8342394e816b482b65a3483d1e368c6edf4518": "bf8e3c0f3d4ef8b9f4a05d79b56f2230",
".git/objects/8c/24e1967b77c7387443ac76bf4a52fc37428ecd": "245b1fa30902a3a1bb3f5a05aa2b8f90",
".git/objects/8c/5ba3ff4ed24781e359c463f6ae6f43c4e8bae5": "485919d0f64471d83f2e945f671769cd",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4a/2d51377be598e7a7c9f32f2c06e2de04789c39": "dc666935c9c1d762e7273e3a14fc31fd",
".git/objects/c7/542c0031fa09e766960e6213f0e3d8fda2755f": "c75384d2101a44f77d2c2f481ac22e7a",
".git/objects/e3/22505c99237dd2967a9d25fcaadc02a79d9e86": "639a2bc80a9390e36a62e4a59d713338",
".git/objects/01/2204eec8209a7287238d400af837b4743d732b": "95a1d085a39ecb0ec76a31e643ecc8aa",
".git/objects/ec/3ab5a97543e4536d04e9e436971052c61970c6": "5c7c9106c3c82bca1369c14ed2617043",
".git/objects/2d/9f5e6b169484f6336019d173ed76ff226af3a2": "335d324c6d8f2d7a356e68d3f41a2c53",
".git/objects/48/b553c53281bd60b7737df163a6415aa37c3f3f": "b5ba45bc5f282be892a3b9dffb64b0ce",
".git/objects/a0/be854a3e3022e0e8e40b1f45ac47e9b50de478": "fc3d42d1b403a9da7981dd0c0100f0d0",
".git/objects/b0/60a8e3041edd542226d25ff1f74fbd84389cb7": "2250ad303259e36f0257ffe073640600",
".git/objects/b9/64fc8f1927178714ddfcd8cd6fcead6f66d163": "da1cc0fab7393ba1b196d2dbffaa0196",
".git/objects/73/b4ddec7d73527f1c00661e2685a0ca2e8ab6fe": "d94a506c8bd1f036ab0bf5caa8d911fc",
".git/objects/a2/6a1975c44fd13e85bac15456bac34009ac9cea": "b24202d5f810a82c6fd51ab8cc3e304d",
".git/objects/17/ff2cd2c0b3ee7937492fcf4401b4b9997f5d78": "07a1ca5e8f5a03beb27c6b6d9528c9e7",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/pack/pack-c4849a8617f29a81db626767a5b5ffeeafadd61d.rev": "f0daf17743fe32d4ae551b3faa7e7c94",
".git/objects/pack/pack-c4849a8617f29a81db626767a5b5ffeeafadd61d.idx": "2b6f3ff906b3cde746af916fb724b862",
".git/objects/pack/pack-c4849a8617f29a81db626767a5b5ffeeafadd61d.pack": "1c03260d855aa2f3e4b723377068b9d0",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/22/4c9495e42b434ff824e8494b6ab9431e4a33b0": "471255f04f83d2e54ba4cf76502743b3",
".git/objects/f8/6be6bb834e2aebd4928d9953978df58996ec68": "f7e2677e05b23ea5610df1d0f0230dbb",
".git/objects/51/04bda00716d13e913ef66b241f2b990102de63": "3a950cc09a80c82b887f0ac32b54bb90",
".git/objects/09/0f5f739b5bcd1756f6b28805afa97e49d2059b": "6edad9150998306a0b94d0f9f682d173",
".git/objects/fe/9d2dd096535c23c749f37b251e6f0f23501640": "ab5ca7f997f7568c4032318a05fb9d42",
".git/objects/fe/ca9d38c7651b5b1e59b510eb04857c58ab4760": "59e9abb38fdf9a6d49e54310fed626bd",
".git/objects/ae/42237112b4d373fa70c7bf8ee38cd6a1478b68": "bd8962caee45636a5e75dfbf244f707f",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/7c/1aa0b4bf78244a54eb5d4831cabf0bc8927904": "a21d49f70be6286258bc27ccbb862f9f",
".git/objects/7c/6af979843ceeb07c63ef28c5c2f3fea4d6ec4b": "dd3cb0359193e2de8ad2384af6ef3c65",
".git/objects/4e/e91551584ccaf16ed516527310d15c57a107db": "0894410b4e5ebecab33fecfc1198cfb5",
".git/objects/47/bb28ce17934d37a7f395676d30f919145f0c96": "88902fe658a2bcfa7633b85affb37cab",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/3d/6dbd954e141052a116aeaa7f5b6e0371a63eb4": "2aedf427bd5991a4fbb443aa04a18b78",
".git/objects/d2/2f7cfa85346f15f2f5efb2c8bd403bc63e3c0e": "40772a6af9cdb26957a4965d2c76cbda",
".git/objects/93/6a70ba6e157e4dcdef4766a02fc0d4ecc86ad3": "b8179c2cdae6209a4248eb81375eb8ac",
".git/objects/b6/188efa8b9b5d0fe29c97add4ef81f53b9d338e": "fc4b234a904b5123ab13d80eeeb7e007",
".git/objects/e0/a8359cb445c91cc37fee951b82829b33e18be2": "288eda98dadcccb4610a7e6823c1f25e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "74a1d90d7284cab070804c72c12bc9b7",
".git/refs/heads/main": "e7089852132ea8945588d815d054c038",
".git/refs/remotes/origin/main": "e7089852132ea8945588d815d054c038",
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
