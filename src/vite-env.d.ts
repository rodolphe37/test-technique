/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_USERPOOLWEBCLIENT: string
  readonly VITE_USERPOOLID: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
