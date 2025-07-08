export default function Chat() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      backgroundColor: '#222',
      color: '#eee',
      textAlign: 'center',
    }}>
      <h1>Chat s Lunou</h1>
      <p>Sem přijde tvůj chat s AI modelkou.</p>
    </div>
  );
}
import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'luna', text: 'Ahoj, jsem Luna 💋 Jak ti mohu dnes zpříjemnit den?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Simulace odpovědi AI modelky
    setTimeout(() => {
      const response = { sender: 'luna', text: getLunaResponse(input) };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const getLunaResponse = (userInput) => {
    // Jednoduchá simulovaná odpověď
    return "Hmm... to zní zajímavě 😏 Řekni mi víc...";
  };

  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>💬 Chat s Lunou</h1>

      <div style={{
        flex: 1,
        overflowY: 'auto',
        border: '1px solid #333',
        borderRadius: '1rem',
        padding: '1rem',
        marginBottom: '1rem',
        background: '#111'
      }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              marginBottom: '0.75rem',
              textAlign: msg.sender === 'user' ? 'right' : 'left'
            }}
          >
            <div style={{
              display: 'inline-block',
              backgroundColor: msg.sender === 'user' ? '#00bfa6' : '#333',
              color: msg.sender === 'user' ? '#111' : '#fff',
              padding: '0.75rem 1rem',
              borderRadius: '1rem',
              maxWidth: '70%'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Napiš něco Luně..."
          style={{
            flex: 1,
            padding: '1rem',
            borderRadius: '1rem',
            border: 'none',
            outline: 'none',
            fontSize: '1rem'
          }}
        />
        <button
          onClick={handleSend}
          style={{
            backgroundColor: '#00bfa6',
            color: '#111',
            border: 'none',
            padding: '1rem 1.5rem',
            borderRadius: '1rem',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Odeslat
        </button>
      </div>
    </div>
  );
}
