/**
 * COFUME CAFE — ZERO-DEPENDENCY LOCAL WEB SERVER
 * Runs on Node.js standard library (v18+)
 * Binds to 0.0.0.0 with aggressive NO-CACHE headers for live development
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];
  if (cleanUrl === '/' || cleanUrl === '') {
    cleanUrl = '/index.html';
  }

  // Prevent directory traversal
  const safePath = path.normalize(cleanUrl).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 Not Found — Cofume Cafe</title></head>
        <body style="font-family: serif; background: #150d07; color: #fff9f2; text-align: center; padding: 5rem 1rem;">
          <h1>404 — Page Not Found</h1>
          <p>The requested moment could not be found.</p>
          <a href="/" style="color: #a48961;">Return to Cofume Cafe</a>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Aggressive no-cache headers to eliminate browser caching during development
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

function getLocalIpAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(iface.address);
      }
    }
  }
  return addresses;
}

server.listen(PORT, HOST, () => {
  const ips = getLocalIpAddresses();
  console.log(`=======================================================`);
  console.log(` COFUME CAFE — SERVER ACTIVE ON NETWORK (NO CACHE)`);
  console.log(` Local:   http://localhost:${PORT}`);
  ips.forEach(ip => {
    console.log(` Network: http://${ip}:${PORT}`);
  });
  console.log(` Directory: ${PUBLIC_DIR}`);
  console.log(`=======================================================`);
});
