import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: 'luna', text: 'Ahoj krásný, na co myslíš dneska? 💕' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'you', text: input }, { from: 'luna', text: getReply(input) }]);
    setInput('');
  };

  const getReply = (msg) => {
    // Jednoduchá napodobenina AI odpovědi
    return "To zní zajímavě... řekni mi víc 😘";
  };

  return (
    <div style={{
      background: '#000',
      color: '#fff',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'sans-serif',
    }}>
      <h1>Chat s Lunou 💬</h1>
      <div style={{ marginBottom: '2rem', maxHeight: '50vh', overflowY: 'auto' }}>
        {messages.map((msg, i) => (
          <p key={i} style={{ textAlign: msg.from === 'you' ? 'right' : 'left' }}>
            <strong>{msg.from === 'you' ? 'Ty' : 'Luna'}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <div>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '1rem', width: '70%', marginRight: '1rem' }}
          placeholder="Napiš něco Luně..."
        />
        <button onClick={handleSend} style={{
          padding: '1rem 2rem',
          backgroundColor: '#00bfa6',
          border: 'none',
          borderRadius: '2rem',
          cursor: 'pointer'
        }}>
          Odeslat
        </button>
      </div>
    </div>
  );
}
