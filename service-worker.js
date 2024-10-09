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
    "revision": "eeb6706eb169c5c7e9d2a504d91824b6"
  },
  {
    "url": "assets/css/0.styles.172d82d7.css",
    "revision": "e3af7c162d5467c632603d7c628a177c"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.17875dfb.js",
    "revision": "3ed7a15ece3085ee2650992ab5b65f7b"
  },
  {
    "url": "assets/js/10.1852a3dc.js",
    "revision": "084a8ee6060952022eba81cbbb1b8f51"
  },
  {
    "url": "assets/js/11.58c16f20.js",
    "revision": "ed5b1dbb767d2bb92f204784e6b36512"
  },
  {
    "url": "assets/js/14.bf0adb3d.js",
    "revision": "c072c740f5a2f87060753c950778f2fa"
  },
  {
    "url": "assets/js/15.22fc8d39.js",
    "revision": "69661a5032e4265976f78f50224c8ce6"
  },
  {
    "url": "assets/js/16.73f75882.js",
    "revision": "7e73f028ded8331088010ba17b1254ba"
  },
  {
    "url": "assets/js/17.5c834c4e.js",
    "revision": "89283f0f1fb5702edba04dc9e8786be4"
  },
  {
    "url": "assets/js/18.eacc24dd.js",
    "revision": "29bee2751466be1e32f9eb677bc0983f"
  },
  {
    "url": "assets/js/19.c0a2cc95.js",
    "revision": "db1d4b1cf685bbbd69dac3897677d1b7"
  },
  {
    "url": "assets/js/2.9efeca5d.js",
    "revision": "763bebdf8d49a5decd4d9dd8e01f0edb"
  },
  {
    "url": "assets/js/20.d32aecc0.js",
    "revision": "cdbb1bb2958a62141bf2a5cfeea5d5fe"
  },
  {
    "url": "assets/js/21.0d7e1794.js",
    "revision": "d166aea7eafac5ecada55ec4beb5dbf6"
  },
  {
    "url": "assets/js/22.b7b46cf4.js",
    "revision": "30663bcd8179ab1477dd6ab493c97093"
  },
  {
    "url": "assets/js/23.92e91086.js",
    "revision": "b5dfb8e787bcbe80c4e3411e3e6c3632"
  },
  {
    "url": "assets/js/24.64fae197.js",
    "revision": "3992b047ff24f2c754972986cc8e978a"
  },
  {
    "url": "assets/js/25.9ad2b3c3.js",
    "revision": "a5ff3b5488f5100a5d2fcb87339675bc"
  },
  {
    "url": "assets/js/26.3d350d9c.js",
    "revision": "b33af98e551f7036cbf6d06e3ce687b8"
  },
  {
    "url": "assets/js/27.b5f2d4ae.js",
    "revision": "cfbb60f73460bde73b256b1f00454f99"
  },
  {
    "url": "assets/js/28.e2365e7d.js",
    "revision": "85f59e1d93aff9d805c246a617f182ff"
  },
  {
    "url": "assets/js/29.a7a61ba6.js",
    "revision": "00d862759c7536d729cf02d4a9edb0d1"
  },
  {
    "url": "assets/js/3.393e7b7d.js",
    "revision": "9f7d69728bdf110bea157d2efbdd38e0"
  },
  {
    "url": "assets/js/30.38ed15b1.js",
    "revision": "7ea34cbd18bf7169e248b825d5d747ee"
  },
  {
    "url": "assets/js/31.7342edaf.js",
    "revision": "03d6e422fe10ad54aaa753ae31cdd48e"
  },
  {
    "url": "assets/js/32.1fe88165.js",
    "revision": "61861f1a696a6b1849beeaa33ba10524"
  },
  {
    "url": "assets/js/33.e2417fa4.js",
    "revision": "00d4c666a0a3cdd9dd0069625a9c935a"
  },
  {
    "url": "assets/js/34.7e4e7b9a.js",
    "revision": "28d6146897839ee61fa48aba9f6491c8"
  },
  {
    "url": "assets/js/35.3c30cdae.js",
    "revision": "c6ed1545b6dba80c33f935f7bf7673e9"
  },
  {
    "url": "assets/js/36.17a492bb.js",
    "revision": "e4c4b6dd65afb4821fd0e7d4e210b1b3"
  },
  {
    "url": "assets/js/37.afdf6d31.js",
    "revision": "6bf2547ae4ee833933d87efa7b750181"
  },
  {
    "url": "assets/js/38.4b1fb494.js",
    "revision": "e303c23ba2091cae3deee5779f820264"
  },
  {
    "url": "assets/js/39.a5c1415b.js",
    "revision": "106812e4fa1ef3bbf62ec76a62ab50d4"
  },
  {
    "url": "assets/js/4.1d73605b.js",
    "revision": "134ef83536f343c4177494740c6cbc56"
  },
  {
    "url": "assets/js/40.db6820ae.js",
    "revision": "f15212f7fb4f05dce585d99cd1524362"
  },
  {
    "url": "assets/js/41.d6853a7f.js",
    "revision": "fbd49376b3f3bae108ce3e1c3943701c"
  },
  {
    "url": "assets/js/42.35a03032.js",
    "revision": "855b67648e3928c337d7eda231ed2abe"
  },
  {
    "url": "assets/js/43.dca16751.js",
    "revision": "f4ef4a5c9042dd3dc3df63ae10f3b86d"
  },
  {
    "url": "assets/js/5.8185b233.js",
    "revision": "2fc28a2c61e6f6bb865ac4185f55f3b1"
  },
  {
    "url": "assets/js/6.721c8cfd.js",
    "revision": "bc4aa9812c2707ef08255494dd90ba67"
  },
  {
    "url": "assets/js/7.671391b1.js",
    "revision": "590e049ea6c733145606a69034fe54ea"
  },
  {
    "url": "assets/js/8.7c878c6e.js",
    "revision": "089eddbe192d737921670c00c853f9d7"
  },
  {
    "url": "assets/js/9.a812c040.js",
    "revision": "96cb2470d690449928ffac14e7b02b32"
  },
  {
    "url": "assets/js/app.393c7190.js",
    "revision": "7656859f7d6696ddfe1929a013a5f68d"
  },
  {
    "url": "assets/js/vendors~docsearch.3e93e750.js",
    "revision": "8d2bfb1019f270c5388dd90dbd846f89"
  },
  {
    "url": "categories/index.html",
    "revision": "cfe09409828a248d5a7ce867cd5f80ce"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "14bae0d854d4ebc20d85f93e82fbd34c"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "14bae0d854d4ebc20d85f93e82fbd34c"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "14bae0d854d4ebc20d85f93e82fbd34c"
  },
  {
    "url": "index.html",
    "revision": "260285d1d550d0a149fc47db55e5bc02"
  },
  {
    "url": "java/Generics.html",
    "revision": "3300bd7569018cc7a3833b5d28957230"
  },
  {
    "url": "logo.png",
    "revision": "14bae0d854d4ebc20d85f93e82fbd34c"
  },
  {
    "url": "logo288.png",
    "revision": "14bae0d854d4ebc20d85f93e82fbd34c"
  },
  {
    "url": "logo52.png",
    "revision": "14bae0d854d4ebc20d85f93e82fbd34c"
  },
  {
    "url": "tag/index.html",
    "revision": "b1a3f601002b0911e323782872425205"
  },
  {
    "url": "timeline/index.html",
    "revision": "6a9cbf371cd18ccffc817aed0e0a08d6"
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
