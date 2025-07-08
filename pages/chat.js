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
        marginBottom: '1rem'
      }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            marginBottom: '0.5rem',
            textAlign: msg.sender === 'luna' ? 'left' : 'right'
          }}>
            <strong>{msg.sender === 'luna' ? 'Luna' : 'Ty'}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{
            flex: 1,
            padding: '0.5rem',
            borderRadius: '0.5rem',
            border: '1px solid #555',
            backgroundColor: '#333',
            color: '#fff'
          }}
          placeholder="Napiš něco Luně..."
        />
        <button
          onClick={handleSend}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ff007f',
            border: 'none',
            borderRadius: '0.5rem',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Poslat
        </button>
      </div>
    </div>
  );
}
