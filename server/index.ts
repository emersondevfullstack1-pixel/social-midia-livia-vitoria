// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

// O uso de import.meta.url e fileURLToPath é necessário para obter o __dirname em módulos ES.
var _filename = fileURLToPath(import.meta.url);
var _dirname = path.dirname(_filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // **CORREÇÃO APLICADA AQUI:**
  // Em produção (Vercel), o arquivo index.js está em `dist/`.
  // O frontend está em `dist/public/`.
  // O caminho deve ser ajustado para apontar para a pasta `public` dentro de `dist`.
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(_dirname, "public") // Se o _dirname for `dist/`, "public" aponta para `dist/public`
      : path.resolve(_dirname, "..", "dist", "public"); // Caminho de desenvolvimento

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3e3;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
