const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname; // The directory where the server is located

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  // Normalize URL and resolve system path
  let safeUrl = req.url.split('?')[0];
  let filePath = path.join(PUBLIC_DIR, safeUrl);

  // Prevent directory traversal attacks
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  // Check if requested path is a directory
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    // Attempt to read the file
    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        // SPA Fallback: If file is not found, serve index.html for React Router to handle client-side routing
        const fallbackPath = path.join(PUBLIC_DIR, 'index.html');
        fs.readFile(fallbackPath, (fallbackErr, fallbackData) => {
          if (fallbackErr) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('404 Not Found');
          } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(fallbackData);
          }
        });
      } else {
        // Serve file with correct MIME type
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.end(data);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(` Thrive Med RCM Local Server Started!`);
  console.log(` URL: http://localhost:${PORT}`);
  console.log(` Press Ctrl+C in this terminal window to stop.`);
  console.log(`==================================================`);
});
