export default async function handler(req, res) {
  if (req.headers.authorization !== "I0DPYD08D80TT7D97TD7TD7TD07TXT7X97TS97T07T0T7S07TS07S07ST7D0UDUT0UTX08TT08X0UTU0TX07TX07TX08T08T8TC0IGC0IGX80X08X8YX08T08TX8T0X8T0D7TD80TST7PWT8E075W75W70550E57075W570WR70SPTUPTUS8TD0TST7S0UTD0TS0S07SUTPTX") {
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
