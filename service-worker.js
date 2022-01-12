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
    "revision": "e82b7049a3e3a19daff9ef5b8c23dbf5"
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
    "url": "assets/js/14.2dbdcda3.js",
    "revision": "1ac100b8028f8bbb08f0c10c42f64057"
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
    "url": "assets/js/app.f3f1b58a.js",
    "revision": "4dcb17c7cd1ff2b58f83b0df86cdb2a4"
  },
  {
    "url": "components/index.html",
    "revision": "8b9463aa11768255876e0a7d8f894c9a"
  },
  {
    "url": "css/index.html",
    "revision": "1ef23a4ba5b05f08e2e56724ecfa2a5b"
  },
  {
    "url": "docker/Command.html",
    "revision": "763a1988f29d37f29ed0e33a6e99a31b"
  },
  {
    "url": "docker/index.html",
    "revision": "3db90eb317559c305b9f2273e9cec29f"
  },
  {
    "url": "html/index.html",
    "revision": "e53613838e2f7749278168101bf291e7"
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
    "revision": "4702d5c3dea4a7aae0b660c6e7a019a0"
  },
  {
    "url": "interview/index.html",
    "revision": "9b7c00d201f336ce1211e84eca84e948"
  },
  {
    "url": "js/index.html",
    "revision": "d0457701386bd5d275b20310353201ed"
  },
  {
    "url": "logo.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "other/index.html",
    "revision": "6e47254aa6cec8784e0ffeb379198007"
  },
  {
    "url": "react/index.html",
    "revision": "5b5f10b3b52db828802ee93499b22ed1"
  },
  {
    "url": "typescript/index.html",
    "revision": "de354324b771aa5f7d275182aded6537"
  },
  {
    "url": "vue/index.html",
    "revision": "12ec0b1dd7c987d45c09a761ad1fdb6c"
  },
  {
    "url": "webpack/index.html",
    "revision": "609d0393a0f81dadd3e8cb007d1dda87"
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
