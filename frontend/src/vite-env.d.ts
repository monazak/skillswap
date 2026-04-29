/// <reference types="vite/client" />
declare module '*.css';
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // add other variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}