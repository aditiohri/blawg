import mdx from '@astrojs/mdx';
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// TO DO START HERE
/** The RSS helper has been removed from getStaticPaths! Try the new @astrojs/rss package instead. See https://docs.astro.build/en/guides/rss/ */
// https://astro.build/config
export default defineConfig(
	/** @type {import('astro').AstroUserConfig} */
	{
		markdown: {
			render: [{
				shikiConfig: {
					theme: 'poimandres',
					langs: [],
					wrap: false
				}
			}]
		},
		site: 'http://localhost:3000/',
		integrations: [mdx({
			remarkPlugins: [],
			rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', {
				behavior: 'wrap'
			}]],
		}), sitemap()]
	});