import { join } from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".");
  return {
    mode,
    root: join(__dirname, "./"),
    plugins: [],
    base: "/mehyar-abboud/",
  };
});
