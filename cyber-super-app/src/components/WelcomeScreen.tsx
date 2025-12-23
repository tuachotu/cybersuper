interface WelcomeScreenProps {
  onStart: () => void;
  onShowParents: () => void;
}

export default function WelcomeScreen({ onStart, onShowParents }: WelcomeScreenProps) {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden',
      padding: '2rem 1.5rem'
    }}>

      {/* Main Content - Centered */}
      <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1',
        justifyContent: 'center',
        gap: '3rem'
      }}>

        {/* Mascot - Fixed, Centered, Larger */}
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img
            src="/mascot.png"
            alt="Cyber Super Mascot"
            style={{
              width: '500px',
              height: 'auto',
              maxWidth: '90vw',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
            }}
            onError={(e) => {
              // Fallback to emoji if image not found
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('mascot-fallback');
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <div
            id="mascot-fallback"
            style={{
              display: 'none',
              fontSize: '18rem',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
            }}
          >
            🦸‍♂️
          </div>
        </div>

        {/* Call to Action Button */}
        <button
          onClick={onStart}
          style={{
            fontFamily: "'Nunito', sans-serif",
            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FEC601 100%)',
            color: 'white',
            fontWeight: 900,
            fontSize: 'clamp(1.25rem, 3.5vw, 2rem)',
            padding: '1.5rem 3.5rem',
            borderRadius: '9999px',
            border: '5px solid white',
            cursor: 'pointer',
            display: 'inline-block',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(255, 107, 53, 0.5)',
            textTransform: 'capitalize',
            letterSpacing: '0.02em'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05) translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 107, 53, 0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.5)';
          }}
        >
          Welcome Future Cyber Super Hero, Let's Begin Training!
        </button>
      </div>

      {/* Bottom Links */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '2rem',
        width: '100%',
        maxWidth: '700px',
        padding: '0 1rem'
      }}>
        <button
          onClick={onShowParents}
          style={{
            display: 'inline-block',
            color: 'white',
            fontSize: '0.95rem',
            fontWeight: 700,
            textDecoration: 'none',
            padding: '0.85rem 2rem',
            borderRadius: '2rem',
            background: '#3b82f6',
            border: '2px solid #2563eb',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
            flex: '1 1 auto',
            minWidth: '200px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2563eb';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#3b82f6';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          👨‍👩‍👧‍👦 Parents: Learn More
        </button>

        <a
          href="https://twitter.com/vikkrraant"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            color: 'white',
            fontSize: '0.95rem',
            fontWeight: 700,
            textDecoration: 'none',
            padding: '0.85rem 2rem',
            borderRadius: '2rem',
            background: '#3b82f6',
            border: '2px solid #2563eb',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
            flex: '1 1 auto',
            minWidth: '200px',
            textAlign: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2563eb';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#3b82f6';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          📧 Contact Us
        </a>
      </div>

      {/* Very Subtle corner decorations */}
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', fontSize: '1.5rem', opacity: 0.2 }}>🛡️</div>
      <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '1.5rem', opacity: 0.2 }}>⭐</div>
      <div style={{ position: 'absolute', bottom: '5rem', left: '1.5rem', fontSize: '1.5rem', opacity: 0.2 }}>🔒</div>
      <div style={{ position: 'absolute', bottom: '5rem', right: '1.5rem', fontSize: '1.5rem', opacity: 0.2 }}>⚡</div>
    </div>
  );
}
