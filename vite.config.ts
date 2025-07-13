import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    // Plugin to handle favicon.ico requests with 204 status
    {
      name: 'favicon-204',
      configureServer(server) {
        server.middlewares.use('/favicon.ico', (req, res) => {
          res.statusCode = 204;
          res.end();
        });
      }
    }
  ],
});
