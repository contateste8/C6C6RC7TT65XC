export default async function handler(req, res) {
  if (req.headers.authorization !== "MeuTokenUltraSecreto") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  const webhookURL = process.env.DISCORD_WEBHOOK_URL;

  await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });

  res.status(200).json({ status: "ok" });
}
