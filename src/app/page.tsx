"use client";
import { useState } from "react";
import ChatBox from "components/ChatBox";
import ChatInput from "components/ChatInput";

type Message = { role: "user" | "bot"; text: string };

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSend(msg: string) {
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "bot", text: "Error: could not get response" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-md mx-auto p-6 h-screen flex flex-col justify-between">
      <h1 className="text-3xl font-bold mb-4 text-center">💬 Chat with Mistral</h1>
      <ChatBox messages={messages} loading={loading} />
      <ChatInput onSend={handleSend} disabled={loading} />
    </main>
  );
}
