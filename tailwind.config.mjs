// tailwind.config.mjs
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				serif: ["Lora", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				// Light mode colors
				light: {
					bg: "#eaebd4", // Soft beige
					text: "#2c3b5f", // Muted plum
					accent: "#C65F5F", // Faded red
					secondary: "#8CA2A5", // Dusty blue-gray
				},
				// Dark mode colors
				dark: {
					bg: "#4c2043", // Deep navy
					text: "#ece3d2", // Warm cream
					accent: "#FF934F", // Muted orange
					secondary: "#7A8B99", // Soft slate
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
