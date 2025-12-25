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

      {/* Top Right Menu */}
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
        zIndex: 10
      }}>
        <button
          onClick={onShowParents}
          style={{
            background: 'none',
            border: 'none',
            color: '#000000',
            fontSize: '0.95rem',
            fontWeight: 700,
            cursor: 'pointer',
            textDecoration: 'none',
            fontFamily: "'Nunito', sans-serif",
            padding: '0.5rem',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.textDecoration = 'none';
          }}
        >
          Parents
        </button>

        <a
          href="https://twitter.com/vikkrraant"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'none',
            color: '#000000',
            fontSize: '0.95rem',
            fontWeight: 700,
            textDecoration: 'none',
            fontFamily: "'Nunito', sans-serif",
            padding: '0.5rem',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.textDecoration = 'none';
          }}
        >
          Contact
        </a>
      </div>

      {/* Main Content - Centered */}
      <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1',
        justifyContent: 'center',
        gap: '1.5rem'
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

        {/* Essential Skills Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          maxWidth: '900px',
          width: '100%',
          padding: '0 1.5rem'
        }}>
          {/* Bold Heading */}
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 900,
            color: '#1f2937',
            fontFamily: "'Nunito', sans-serif",
            margin: 0,
            textAlign: 'center'
          }}>
            Essential skills for a digital world.
          </h2>

          {/* Description Text */}
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
            color: '#4b5563',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 600,
            lineHeight: '1.6',
            textAlign: 'center',
            margin: 0
          }}>
            Kids learn how to browse wisely, understand how apps work, and think before making choices. The program builds habits that help kids stay safe, confident, and in control online.
          </p>
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
          Start Cyber Super Training
        </button>
      </div>

      {/* Very Subtle corner decorations */}
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', fontSize: '1.5rem', opacity: 0.2 }}>🛡️</div>
      <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '1.5rem', opacity: 0.2 }}>⭐</div>
      <div style={{ position: 'absolute', bottom: '5rem', left: '1.5rem', fontSize: '1.5rem', opacity: 0.2 }}>🔒</div>
      <div style={{ position: 'absolute', bottom: '5rem', right: '1.5rem', fontSize: '1.5rem', opacity: 0.2 }}>⚡</div>
    </div>
  );
}
