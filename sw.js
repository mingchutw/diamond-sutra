// 讓 Chrome 能將本頁安裝為應用程式。不做任何快取，網頁更新後會直接顯示最新版本。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
