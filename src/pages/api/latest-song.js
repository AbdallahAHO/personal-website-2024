import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const dataFilePath = path.join(process.cwd(), "data", "latest-song.json");

export const GET = async ({ request }) => {
	try {
		const data = await readFile(dataFilePath, "utf-8");
		return new Response(data, {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Failed to read data" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
};

export const POST = async ({ request }) => {
	try {
		const songData = await request.json();
		await writeFile(dataFilePath, JSON.stringify(songData), "utf-8");
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Failed to save data" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
};
