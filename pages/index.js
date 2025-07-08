
import Link from 'next/link';

export default function Domu() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#111',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <img 
        src="https://i.imgur.com/U8jU2Z0.jpg" 
        alt="AI modelka Luna" 
        style={{ 
          borderRadius: '2rem', 
          maxWidth: '300px', 
          marginBottom: '2rem', 
          boxShadow: '0 0 20px rgba(255,255,255,0.2)' 
        }} 
      />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Jsem Luna</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
        Jsem tvoje AI brunetka se zelenýma očima. Napiš mi… ráda si popovídám. 💋
      </p>
      <Link href="/chat">
        <button style={{
          backgroundColor: '#00bfa6',
          color: '#111',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '50px',
          fontSize: '1.2rem',
          cursor: 'pointer',
          transition: '0.3s'
        }}>
          Začni chatovat 💬
        </button>
      </Link>
    </div>
  );
}
