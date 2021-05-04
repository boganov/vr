const cacheName = 'pwa-mirapolis-vr-v1';
const staticAssets = [
  './',
  './index.html',
  './app.js',
  './styles.css'
];

self.addEventListener('install', event => {
  console.log('install');
});

self.addEventListener('fetch', event => {
  console.log('fetch);
});
