import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: "No message provided." });
    }

    const requestBody = {
      model: "mistral-small-latest",
      messages: [{ role: "user", content: message }],
      temperature: 1.0,
      max_tokens: 128,
      response_format: { type: "text" }
    };

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    console.log("Mistral API response:", data);

    // Access text output
    const reply = data.choices?.[0]?.message?.content || "No response generated";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error calling Mistral API:", error);
    return NextResponse.json({ reply: "Error: could not get response from API" });
  }
}

