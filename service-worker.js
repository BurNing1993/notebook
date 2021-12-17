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
    "revision": "c69de4934df5bb2b0af7dd9eb2fbcb01"
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
    "url": "assets/js/12.902b60dd.js",
    "revision": "f101a11c699680a549921d19db3c0b89"
  },
  {
    "url": "assets/js/13.bf7f6b29.js",
    "revision": "11786076d82dd33cd27706c28baf5a10"
  },
  {
    "url": "assets/js/14.cf2f05b2.js",
    "revision": "4b8fd848f5bb21d99ec8505a5f2a5b4b"
  },
  {
    "url": "assets/js/15.5eff2cbe.js",
    "revision": "a93bdec803cc0318755e1a692ba3511d"
  },
  {
    "url": "assets/js/16.8c5e9eda.js",
    "revision": "20bcff47420bdcca59be5ba01cf41c40"
  },
  {
    "url": "assets/js/17.cb26da37.js",
    "revision": "d382e9a570385ddecf32222f2825cc37"
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
    "url": "assets/js/5.0d10e945.js",
    "revision": "b23052caa3def4cab013325a84e975e2"
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
    "url": "assets/js/app.effc9b90.js",
    "revision": "cb86dda7eb00653f1dcbf0cc37fdb447"
  },
  {
    "url": "components/index.html",
    "revision": "5829426d99af58b4ded687ee105d3729"
  },
  {
    "url": "css/index.html",
    "revision": "4a04283b4f656edfec65458606988d78"
  },
  {
    "url": "docker/Command.html",
    "revision": "522d995ef4e2a83d334a7d62d688fcb6"
  },
  {
    "url": "docker/index.html",
    "revision": "569fd48b8240c811069ff8f822ecc18a"
  },
  {
    "url": "html/index.html",
    "revision": "839b729e0c89f066fdcaa1ecb3dd614b"
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
    "revision": "7708b31f7a36057b10d93a21b3120d56"
  },
  {
    "url": "interview/index.html",
    "revision": "47ff3c1b7b78b580a29ac742a8ef57da"
  },
  {
    "url": "js/index.html",
    "revision": "44c7c255d996e8f3399beb69ede419b0"
  },
  {
    "url": "logo.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "other/index.html",
    "revision": "fc2b89dd6c33c17550bbd9eca66e75ba"
  },
  {
    "url": "react/index.html",
    "revision": "9fc73e788238cfacf31b90d6f4d28cea"
  },
  {
    "url": "typescript/index.html",
    "revision": "8f62bcbbe01a052ccc1ffdaa97e7c4ec"
  },
  {
    "url": "vue/index.html",
    "revision": "cfb6ba1207e9cd0696e5cb1c9f014142"
  },
  {
    "url": "webpack/index.html",
    "revision": "37c228b3bc1061c977b9a56dda59fcca"
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
