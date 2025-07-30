export default async function handler(req, res) {
  const AUTH_TOKEN = process.env.AUTH_TOKEN;
  const webhookURL = process.env.DISCORD_WEBHOOK_URL;

  if (req.headers.authorization !== AUTH_TOKEN) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  if (!webhookURL) {
    return res.status(500).json({ error: "Error" });
  }

  try {
    await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    res.status(200).json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ error: "Error", details: err.message });
  }
}
