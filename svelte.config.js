import adapter from 'svelte-adapter-bun';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			"@lib": "src/lib",
			"@types": "src/lib/types",
			"@methods": "src/lib/methods",
			"@components": "src/lib/components",
			"@icon": "src/lib/icons",
			"@routes": "src/routes",
			"@tabs": "src/routes/dashboard/_tabs",
			"@": "src/"
		}
	}
};

export default config;
