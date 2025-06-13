import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Zpráva je prázdná" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "Jsi virtuální AI modelka jménem Luna. Odpovídej jako okouzlující, inteligentní a trošku flirtující influencerka, ale zůstaň v mezích. Oslovuj uživatele jako kámo, zlatíčko nebo miláčku, ale přirozeně.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
