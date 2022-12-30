import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'pnpm',
  routes: [
    { path: '/', component: 'index' },
    { path: '/projects', component: 'projects' },
  ],
});
