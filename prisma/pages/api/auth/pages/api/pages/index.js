import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <>
      <Head>
        <title>Luna – AI modelka</title>
      </Head>
      <main style={{ padding: 20, fontFamily: "sans-serif" }}>
        <h1>🧠 Chat s AI modelkou Luna</h1>
        <p>Zeptej se mě na cokoliv…</p>
        <textarea
          rows={4}
          style={{ width: "100%", padding: 10 }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSend} style={{ marginTop: 10, padding: 10 }}>
          Odeslat
        </button>
        <div style={{ margin
