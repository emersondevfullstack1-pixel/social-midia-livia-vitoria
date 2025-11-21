// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

var _filename = fileURLToPath(import.meta.url);
var _dirname = path.dirname(_filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(_dirname, "public") // Se o _dirname for `dist/`, "public" aponta para `dist/public`
      : path.resolve(_dirname, "..", "dist", "public"); // Caminho de desenvolvimento

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
}

startServer().catch(console.error);
