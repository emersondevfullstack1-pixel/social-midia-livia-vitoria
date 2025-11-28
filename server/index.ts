import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // A lógica para o caminho estático é simplificada.
  // O script de build (`package.json`: "build": "vite build && esbuild...")
  // compila o frontend para `dist/` e o backend (index.ts) para `dist/index.js`.
  // Quando `dist/index.js` é executado, `__dirname` aponta para `dist/`.
  // Os arquivos estáticos do frontend (HTML, CSS, JS, assets) estão diretamente em `dist/`.

  // Em produção, o caminho estático é o próprio diretório onde o script está rodando (`dist/`).
  const staticPath = __dirname;

  // Em desenvolvimento, este servidor Express não deve ser usado.
  // O desenvolvimento deve usar o servidor de desenvolvimento do Vite (`npm run dev`).
  // A verificação `process.env.NODE_ENV === "production"` é redundante se o servidor
  // só for iniciado com `npm run start` (que define NODE_ENV=production).

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    // Garante que o index.html seja servido a partir do diretório estático
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3e3;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
