// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";

export default defineConfig({
	adapter: cloudflare(),

	vite: {
		plugins: [
			tailwindcss(),
			Icons({
				compiler: "solid",
			}),
		],
	},

	integrations: [solidJs()],
});
