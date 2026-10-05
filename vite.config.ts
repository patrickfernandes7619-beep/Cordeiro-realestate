import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function photoUploadPlugin(): Plugin {
  return {
    name: 'photo-upload-plugin',
    configureServer(server) {
      server.middlewares.use('/api/upload-anil-photo', (req, res) => {
        if (req.method === 'POST') {
          const chunks: Buffer[] = [];
          req.on('data', chunk => chunks.push(Buffer.from(chunk)));
          req.on('end', () => {
            try {
              const buffer = Buffer.concat(chunks);
              const targets = [
                path.resolve(__dirname, 'public/images/Anil.jpeg'),
                path.resolve(__dirname, 'public/images/anil.jpeg'),
                path.resolve(__dirname, 'public/Anil.jpeg'),
                path.resolve(__dirname, 'public/anil.jpeg'),
                path.resolve(__dirname, 'dist/images/Anil.jpeg'),
                path.resolve(__dirname, 'dist/images/anil.jpeg'),
                path.resolve(__dirname, 'dist/Anil.jpeg'),
                path.resolve(__dirname, 'dist/anil.jpeg'),
              ];
              for (const target of targets) {
                const dir = path.dirname(target);
                if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
                fs.writeFileSync(target, buffer);
              }
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, size: buffer.length }));
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          res.writeHead(405).end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), photoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
  };
});
