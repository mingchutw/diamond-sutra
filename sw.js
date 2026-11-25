// 讓 Chrome 能將本頁安裝為應用程式。
// 打開 APP 時一律向伺服器確認最新版網頁，避免安裝後仍顯示舊版。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
    if (e.request.mode === 'navigate') {
        e.respondWith(fetch(e.request, { cache: 'no-cache' }).catch(() => fetch(e.request)));
    }
});
