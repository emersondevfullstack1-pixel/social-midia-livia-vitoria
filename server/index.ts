// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

// Estas duas linhas obtêm o caminho do diretório atual (__dirname ) em módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Define o caminho para os arquivos estáticos (pasta 'public')
  // Se em produção, aponta para 'public', senão, para '../dist/public'
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Serve os arquivos estáticos da pasta definida em staticPath
  app.use(express.static(staticPath));

  // Rota "catch-all" que envia o index.html para qualquer requisição GET
  // Isso é comum em Single Page Applications (SPAs)
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  // Define a porta do servidor, usando a variável de ambiente ou 3000 como padrão
  const port = process.env.PORT || 3000; // 3e3 é o mesmo que 3000

  // Inicia o servidor
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

// Chama a função para iniciar o servidor e captura qualquer erro que possa ocorrer
startServer().catch(console.error);
