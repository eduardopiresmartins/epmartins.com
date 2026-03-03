# Security Headers - Otimizado para produção
/*
  # Content Security Policy
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob: https://images.unsplash.com https://*.figma.com; connect-src 'self' https://api.unsplash.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
  
  # Prevent clickjacking
  X-Frame-Options: DENY
  
  # Prevent MIME type sniffing
  X-Content-Type-Options: nosniff
  
  # Enable XSS protection
  X-XSS-Protection: 1; mode=block
  
  # Referrer Policy
  Referrer-Policy: strict-origin-when-cross-origin
  
  # Permissions Policy (Feature Policy)
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  
  # Strict Transport Security (HSTS)
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  
  # Cache Control for static assets
  Cache-Control: public, max-age=31536000, immutable

# Specific caching for HTML (no cache)
/*.html
  Cache-Control: no-cache, no-store, must-revalidate
  Pragma: no-cache
  Expires: 0

# Fonts - long cache
/fonts/*
  Cache-Control: public, max-age=31536000, immutable
  Access-Control-Allow-Origin: *

# Images - medium cache
/images/*
  Cache-Control: public, max-age=2592000

# Service Worker - no cache
/service-worker.js
  Cache-Control: no-cache, no-store, must-revalidate
