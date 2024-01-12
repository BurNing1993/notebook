/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b849653032a682fb89ca9c1b95cb9ffe"
  },
  {
    "url": "assets/css/0.styles.30a3181b.css",
    "revision": "c5f5131514420a96fc905f6c9fa69df1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a3ac9f5f.js",
    "revision": "3600954154c2fd92b727d3212a333254"
  },
  {
    "url": "assets/js/11.dbc06298.js",
    "revision": "576c47cc2645cb5e318ac6c19669c37c"
  },
  {
    "url": "assets/js/12.aee9808d.js",
    "revision": "0d01c5762524446e893ea1526f52b0b5"
  },
  {
    "url": "assets/js/13.c563f368.js",
    "revision": "86d95f4d3d94013981c8eab43841879a"
  },
  {
    "url": "assets/js/14.d5b34182.js",
    "revision": "aeb7ee9a1a46e6523eb83b8155baf7e3"
  },
  {
    "url": "assets/js/15.84659034.js",
    "revision": "4d691104b38b0c300eca35b75cdc142b"
  },
  {
    "url": "assets/js/16.99d7a67a.js",
    "revision": "fbfcbd3804fd8d50ccd7220e0d6727a4"
  },
  {
    "url": "assets/js/17.27f2c755.js",
    "revision": "0e830fa5e5fbe02df71e41372d55191a"
  },
  {
    "url": "assets/js/18.a42eef60.js",
    "revision": "8ae19515a96d5c5f01b2343f1e6f38e0"
  },
  {
    "url": "assets/js/19.ff9bfae5.js",
    "revision": "4f190d1729caa57498ae3f44b12ae5f0"
  },
  {
    "url": "assets/js/2.f546fd41.js",
    "revision": "48811c42cac43275ca9d65a975c435b4"
  },
  {
    "url": "assets/js/3.5194bc92.js",
    "revision": "9caaf38731391aa8e5f55f6181c4e94d"
  },
  {
    "url": "assets/js/4.e3e1e6db.js",
    "revision": "d2df8b7c8eb2943a2d2f17e20d203926"
  },
  {
    "url": "assets/js/5.ca4f70c0.js",
    "revision": "b3860f6e363c2d6d991ad8dbeb98c00c"
  },
  {
    "url": "assets/js/6.73bbcf8d.js",
    "revision": "814d4bc2d93908656fe74bf481172c0e"
  },
  {
    "url": "assets/js/7.f32cee4a.js",
    "revision": "382f96e326918f5f8f3b1540e244f760"
  },
  {
    "url": "assets/js/8.b9a58496.js",
    "revision": "eccd236cbcb854b660adaca0d257b3e2"
  },
  {
    "url": "assets/js/9.3bd47329.js",
    "revision": "2073a33eabf631c94d2cbb01b52de676"
  },
  {
    "url": "assets/js/app.8086d995.js",
    "revision": "03ef129b90e7369968703bbe5ee5d50b"
  },
  {
    "url": "components/index.html",
    "revision": "eba862691f2126a48c6637c63c66167c"
  },
  {
    "url": "css/index.html",
    "revision": "6dfca6ffe676d097e5b5c1d02ea45229"
  },
  {
    "url": "docker/Command.html",
    "revision": "b6b0ac0351445909eb95983e60ece213"
  },
  {
    "url": "docker/index.html",
    "revision": "59fe88fb2a406543ea5ba7f81f31c41b"
  },
  {
    "url": "html/index.html",
    "revision": "957fec9d00cbd112ae40b09eebce5bf7"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "25d10ba54432ac0d43d51b18fa68e20c"
  },
  {
    "url": "index.html",
    "revision": "b5b2afcce7efe5a45120a7c0e2d85c55"
  },
  {
    "url": "interview/index.html",
    "revision": "75c7ade81b57dfaca66e8e22e5717274"
  },
  {
    "url": "js/index.html",
    "revision": "2030c23586ebd8838766074a7fb593f3"
  },
  {
    "url": "logo.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "other/index.html",
    "revision": "1088ccbc29809f0c6fa8e435a0793028"
  },
  {
    "url": "react/index.html",
    "revision": "2af41a19aa8b1482231829adfdad11c2"
  },
  {
    "url": "typescript/index.html",
    "revision": "1f3b48ecdc6e2e1e432e1fa9ff616f34"
  },
  {
    "url": "vue/index.html",
    "revision": "19b9d50c47753923f86414d3c4133ecd"
  },
  {
    "url": "webpack/index.html",
    "revision": "d67855a31cd21f87bfdedccbee576e04"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
