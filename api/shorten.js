export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed!" });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required!" });
  }

  try {
    const params = new URLSearchParams();
    params.append("url", url);

    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      body: params,
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: "CleanURI request failed" });
  }
}

// vibe coding...
