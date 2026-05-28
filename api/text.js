let latestText = "nothing yet";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { text } = req.body || {};

    if (!text) {
      return res.status(400).json({ error: "Missing text" });
    }

    latestText = text;

    return res.status(200).json({
      success: true,
      text
    });
  }

  if (req.method === "GET") {
    return res.status(200).json({
      text: latestText
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
