export async function PostWithOutAuth(url, options) {
	try {
		const headers = {};

		const response = await fetch(url, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: options.body,
		});

		if (!response.ok) throw new Error("Failed to fetch data");

		const data = await response.json();

		return data.data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
}
