/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly GITHUB_TOKEN: string;
    readonly GITHUB_REPO_OWNER: string;
    readonly GITHUB_REPO_NAME: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}