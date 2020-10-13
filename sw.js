var cacheName = 'covidnews_hacktues';
var filesToCache = [
    '/',
    'index.php',
    'css/style.css',
    'js/script.js',
    'db_setup.sql',
    'db_connect.php',
    './profile_control/create_profile_fail.php',
    './profile_control/login.css',
    './profile_control/login.php',
    './profile_control/register.css',
    './profile_control/register.php',
    './js/Chart.js',
    './js/chat.js',
    './js/news_fetching.js',
    './js/script.js',
    './js/stats.js',
    './css/chat.css',
    './css/navbar.css',
    './css/news.css',
    './css/slideshow.css',
    './css/stats.css',
    './style.css'

  ];
  
  self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
      })
    );
  });
  
  self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });