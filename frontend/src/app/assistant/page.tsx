"use client";

import { useState } from "react";

type ChatResponse = {
  response: string;
};

export default function AssistantPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const response = await fetch("http://127.0.0.1:8000/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      });

      const data: ChatResponse = await response.json();
      setReply(data.response);
    } catch (error) {
      setReply("Unable to connect to the AI backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-4xl font-bold">
          🤖 MediGuide AI Assistant
        </h1>

        <p className="mb-8 text-muted-foreground">
          Ask a healthcare-related question and receive an AI-powered response.
        </p>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <textarea
            className="min-h-32 w-full rounded-lg border p-4 outline-none focus:ring-2"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="mt-4 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Thinking..." : "Send Message"}
          </button>
        </div>

        <div className="mt-8 rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">
            AI Response
          </h2>

          {loading ? (
            <p className="text-muted-foreground">
              Waiting for Gemini response...
            </p>
          ) : reply ? (
            <p className="whitespace-pre-wrap leading-7">
              {reply}
            </p>
          ) : (
            <p className="text-muted-foreground">
              Your AI response will appear here.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}