/**
 * Service Worker for Red River BBQ
 * Provides client-side caching, offline support, and faster repeat visits
 */

const CACHE_NAME = "redriverbbq-v1";

// Critical assets to cache immediately on install
const PRECACHE_ASSETS = [
  "/",
  "/index.html",
  "/league-city/images/RRBBQBrand.png",
  "/katy/images/BBQ%20BURGER%20UPSCALE%20trans.png",
  "/league-city/images/brand.png",
  "/katy/images/kiersh%20co%20white%20trans.png"
];

// Install event - precache critical assets
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("[SW] Precaching critical assets");
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting()) // Activate immediately
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log("[SW] Removing old cache:", name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim()) // Take control immediately
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and external resources we don't control
  if (request.method !== "GET") return;
  
  // Skip Chrome extensions and other non-http(s) requests
  if (!url.protocol.startsWith("http")) return;

  // For same-origin requests, use cache-first strategy for static assets
  if (url.origin === location.origin) {
    // Cache-first for images and static assets
    if (request.destination === "image" || 
        url.pathname.endsWith(".png") || 
        url.pathname.endsWith(".jpg") || 
        url.pathname.endsWith(".webp") ||
        url.pathname.endsWith(".avif")) {
      event.respondWith(cacheFirst(request));
      return;
    }
    
    // Network-first for HTML pages (to get fresh content)
    if (request.destination === "document" || url.pathname.endsWith(".html") || url.pathname === "/") {
      event.respondWith(networkFirst(request));
      return;
    }
  }

  // Stale-while-revalidate for external resources (fonts, CDN scripts)
  event.respondWith(staleWhileRevalidate(request));
});

// Cache-first strategy - fast for static assets
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log("[SW] Cache-first fetch failed:", request.url);
    return new Response("Offline", { status: 503 });
  }
}

// Network-first strategy - fresh content for pages
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    return new Response("Offline - Page not available", { 
      status: 503,
      headers: { "Content-Type": "text/html" }
    });
  }
}

// Stale-while-revalidate - serve cached, update in background
async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  
  const fetchPromise = fetch(request)
    .then(response => {
      if (response.ok) {
        const cache = caches.open(CACHE_NAME);
        cache.then(c => c.put(request, response.clone()));
      }
      return response;
    })
    .catch(() => cached);

  return cached || fetchPromise;
}
