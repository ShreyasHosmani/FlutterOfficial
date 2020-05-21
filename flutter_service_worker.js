'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "54f90ac265f47b1ddbcbb339ef10534f",
"/": "54f90ac265f47b1ddbcbb339ef10534f",
"main.dart.js": "f876b4934b666438f7fe789025e1d443",
"favicon.png": "e45c857ff7f97f18be171a8d61a5725e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "caa4311dc9662cdd51cded3f6a5aaad6",
"assets/LICENSE": "c160aa2569f9231fb13e5a75251509ff",
"assets/AssetManifest.json": "175cac438070fb95257057b9c7b1f623",
"assets/FontManifest.json": "e3ee44d3e6f591ca43dc5219dcb213cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/slide_1-layer_2.png": "ddbf15fa920dae7a5a686ff7d10d4841",
"assets/assets/images/slide_1-layer_1.png": "9063147efb1e199ff5c150d2e6300aa7",
"assets/assets/images/icon_ui.png": "09138184ad5cee139e01c3aba95924d4",
"assets/assets/images/slide_4-layer_1.png": "819a00d7172b9dbfe753dd0e58b6543d",
"assets/assets/images/icon_performance.png": "49dcd794c0838072d8cd729f1cb85e61",
"assets/assets/images/slide_4-layer_2.png": "bc967acf07078968e2cb2c06cbd8d1a1",
"assets/assets/images/slide_1-bg.jpg": "7a2356f8cc1bf7d33376fac73ec04c64",
"assets/assets/images/news_flutter_ios_application_bundle.png": "c7d0eb7b38b5d44dabe759246f4fc376",
"assets/assets/images/icon_github_64x.png": "2d1e54d81bd7cb7daa09cea82dcb29e2",
"assets/assets/images/icon_development.png": "baebd28f59701e856c98c68e010fdeb2",
"assets/assets/images/slide_2-layer_1.png": "d74c30d69caf1be60b16532c70e5f9da",
"assets/assets/images/slide_2-layer_2.png": "9f38f12164b646341c610a77fd6c2e7a",
"assets/assets/images/slide_3-bg.jpg": "4eb412a5e5b66476b4b0ee84b51ce232",
"assets/assets/images/flutter_logo_text.png": "d21f1eecaeaab081ba7efec1721c0712",
"assets/assets/images/icon_youtube_64x.png": "155d50c9f10c97fae27575ae7ee7b026",
"assets/assets/images/news_flutter_1.12.png": "1afef8f0d8e3ba20b49bc5625168b629",
"assets/assets/images/google_logo.png": "22979cce8fc21c09b7f26e131045a400",
"assets/assets/images/icon_search_64x.png": "f55e992d786ef1822db8d1c038e201b5",
"assets/assets/images/device_frame.png": "58e971455388b5c476887bf687a71d8a",
"assets/assets/images/slide_4-bg.jpg": "acbecb9abe325a9564a8ab511343cda9",
"assets/assets/images/video_thumbnail_learn_from_developers.png": "7818ad639493077ee21fbd29fccdc7cf",
"assets/assets/images/flutter_logo_mono.png": "6261e07a1b1eb9cdd466b4879a41e361",
"assets/assets/images/slide_3-layer_2.png": "dcecc562f08c8e185fa50f23dec1c5e6",
"assets/assets/images/slide_3-layer_1.png": "0e3ed24ce06edf89fab5072c310d393d",
"assets/assets/images/slide_2-bg.jpg": "05ce416b9516bbecb0b3fa90c593fc5e",
"assets/assets/images/icon_twitter_64x.png": "514d54a802579a10b988c12dc892e9cb",
"assets/assets/images/companies_using_flutter.png": "bd93766fea0502d711ec59e1e6aa29b9",
"assets/assets/images/news_flutter_codepen.png": "bc607f3054d4ab94ec5866422eb7c9c5",
"assets/assets/videos/NativePerformance.mp4": "91e263a32e6220fc72a57b587e2a4591",
"assets/assets/videos/BeautifulUI.mp4": "354dcbace8259d15719a4ef4c9e46e8a",
"assets/assets/videos/FastDev.mp4": "c2488f978dae74ca3bd13c38f2ce30cb",
"assets/assets/fonts/product_sans_regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/product_sans_italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/fonts/roboto_bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/product_sans_bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/fonts/roboto_regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/roboto_italic.ttf": "a720f17aa773e493a7ebf8b08459e66c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
