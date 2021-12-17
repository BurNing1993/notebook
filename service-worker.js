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
    "revision": "5361b509fea5a7ea0dda29a5ff659b2e"
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
    "url": "assets/js/14.23b427bf.js",
    "revision": "fa4041bc2a40378a8599fceabedc4f1b"
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
    "url": "assets/js/app.fadb15a0.js",
    "revision": "ce308b881c7662285a9ffd340b34bee1"
  },
  {
    "url": "components/index.html",
    "revision": "1be2e2a750c9253cbb0f6d75e3482593"
  },
  {
    "url": "css/index.html",
    "revision": "e873db229facca1e403e6f832fc4d763"
  },
  {
    "url": "docker/Command.html",
    "revision": "ffb3ed40c4c9ab2b09ef0cb1a7448eed"
  },
  {
    "url": "docker/index.html",
    "revision": "3135570b4af9c4cc89e14e989c408ece"
  },
  {
    "url": "html/index.html",
    "revision": "aad1e1337f299083260d9e8458b5c13e"
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
    "revision": "c14d75de67ee53b6c65982705db3b890"
  },
  {
    "url": "interview/index.html",
    "revision": "35779a54581d59ef4e586363b932ba9f"
  },
  {
    "url": "js/index.html",
    "revision": "c345558beec582250625c6a7158706a2"
  },
  {
    "url": "logo.png",
    "revision": "170e3f0704b8b0182dd355078b5a6eba"
  },
  {
    "url": "other/index.html",
    "revision": "3d6262d5e7b0ef9005db9d6c23848a49"
  },
  {
    "url": "react/index.html",
    "revision": "f813646b2eba87d68fc58c795cf01ea4"
  },
  {
    "url": "typescript/index.html",
    "revision": "39828b28aef46ef3948ce74283af60ad"
  },
  {
    "url": "vue/index.html",
    "revision": "b83f3a7f3669085a4a91d00053bbdee6"
  },
  {
    "url": "webpack/index.html",
    "revision": "306f7a90c75d1d23dcce1816273c4e1b"
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
