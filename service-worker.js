"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/react-image-magnify/index.html","0a38ed6818e4a17e3d4c13044b7cf920"],["/react-image-magnify/static/css/main.819d7d9c.css","e5435894a0009bed843daaa9a0d686e7"],["/react-image-magnify/static/js/main.ffb77988.js","151b3db4248a2219f639bfbdde6b73fb"],["/react-image-magnify/static/media/back-1020.a4c61a24.jpg","a4c61a24d74ba496f654bd90dd4bec6c"],["/react-image-magnify/static/media/back-1200.3b2c819d.jpg","3b2c819d69287bc8c01706928de1aa5e"],["/react-image-magnify/static/media/back-1426.34dd21dc.jpg","34dd21dcfb7d830199ecabd809c7d18c"],["/react-image-magnify/static/media/back-500.f0e0d908.jpg","f0e0d908c3e1094819716a7ac530df02"],["/react-image-magnify/static/media/back-779.51dc15e0.jpg","51dc15e0b29df8243833d2419135582e"],["/react-image-magnify/static/media/front-1020.b0d31d30.jpg","b0d31d30ff2c637c6f392fc4cfa09aa4"],["/react-image-magnify/static/media/front-1200.62a48fa3.jpg","62a48fa330202c7606c7173ed0359171"],["/react-image-magnify/static/media/front-1426.f3b00b8c.jpg","f3b00b8c42f6c6224cee48988de6cbae"],["/react-image-magnify/static/media/front-500.0eed5a8a.jpg","0eed5a8a6e396d7bd6c71257b3c50372"],["/react-image-magnify/static/media/front-779.42a169a3.jpg","42a169a3385ab5efa765a86ff3aa69fc"],["/react-image-magnify/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/react-image-magnify/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/react-image-magnify/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/react-image-magnify/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/react-image-magnify/static/media/wristwatch_1033.57129acd.jpg","57129acd21594e9ee07f3f24ffeb7a26"],["/react-image-magnify/static/media/wristwatch_1112.2fccaaac.jpg","2fccaaacc86701ea04995d7256268b3f"],["/react-image-magnify/static/media/wristwatch_1192.0480af36.jpg","0480af368da9a37501814ea12a776c95"],["/react-image-magnify/static/media/wristwatch_1200.c9182206.jpg","c9182206837727bd05c687bc9eaa6f1b"],["/react-image-magnify/static/media/wristwatch_355.ba041e4f.jpg","ba041e4f91bc6515e83bbee1a98bb1d7"],["/react-image-magnify/static/media/wristwatch_481.d5fc37fa.jpg","d5fc37fa27924c4dde6c1fc4c300e984"],["/react-image-magnify/static/media/wristwatch_584.74be83b4.jpg","74be83b4ffd15084b2c2e6a5ded389d9"],["/react-image-magnify/static/media/wristwatch_687.8ea75ffc.jpg","8ea75ffcb8ac61777ed47ae430cc5160"],["/react-image-magnify/static/media/wristwatch_770.2e15efe8.jpg","2e15efe8b82116249d94f485b229106f"],["/react-image-magnify/static/media/wristwatch_861.476c0078.jpg","476c00781ee5b5403ed99d1b10200c75"],["/react-image-magnify/static/media/wristwatch_955.ab7038b1.jpg","ab7038b16a72fc52b97932e48fd806af"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/react-image-magnify/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});