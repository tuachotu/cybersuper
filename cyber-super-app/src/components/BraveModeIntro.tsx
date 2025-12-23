interface BraveModeIntroProps {
  onStart: () => void;
  onShowParents?: () => void;
}

export default function BraveModeIntro({ onStart, onShowParents }: BraveModeIntroProps) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1.5rem',
      position: 'relative'
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

      <div style={{
        width: '100%',
        maxWidth: '900px',
        background: 'white',
        borderRadius: '2rem',
        padding: '3rem 2.5rem',
        border: '3px solid #e5e7eb',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
        textAlign: 'center'
      }}>
        {/* BP Bear Mascot */}
        <div style={{
          marginBottom: '2rem'
        }}>
          <img
            src="/bp-bear.png"
            alt="Captain Browser Bear"
            style={{
              width: '200px',
              height: 'auto',
              margin: '0 auto',
              display: 'block'
            }}
          />
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 900,
          color: '#3b82f6',
          marginBottom: '2rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Welcome to the Captain Browsing Training Simulator!
        </h1>

        {/* Main Content */}
        <div style={{
          fontSize: '1.125rem',
          lineHeight: '1.8',
          color: '#374151',
          marginBottom: '2.5rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          <p style={{
            marginBottom: '1.5rem',
            fontWeight: 600
          }}>
            You're about to begin a mission where you'll face real online situations.
          </p>

          <p style={{
            marginBottom: '1.5rem'
          }}>
            To complete your training and earn the title of <strong style={{ color: '#3b82f6' }}>Captain Browser</strong>,
            you'll need to make <strong>10 safe choices</strong> using your three superpowers:
          </p>

          {/* Powers List */}
          <div style={{
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            borderRadius: '1rem',
            padding: '1.5rem',
            margin: '2rem auto',
            maxWidth: '600px',
            border: '3px solid #3b82f6'
          }}>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              textAlign: 'left',
              fontSize: '1.125rem',
              lineHeight: '2',
              fontWeight: 600,
              color: '#1e40af'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>• The NO Force</li>
              <li style={{ marginBottom: '0.5rem' }}>• The Triple Shield</li>
              <li>• The Never-Ever Rules</li>
            </ul>
          </div>

          <p style={{
            marginBottom: '1rem',
            fontWeight: 600
          }}>
            Each decision you make helps sharpen your instincts and strengthen your safety skills.
          </p>

          <p style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#3b82f6',
            marginTop: '2rem'
          }}>
            Stay focused, trust your powers, and choose wisely.
          </p>
        </div>

        {/* Ready Message */}
        <p style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          color: '#FF6B35',
          marginBottom: '2rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Ready to begin your mission?
        </p>

        {/* Start Button */}
        <button
          onClick={onStart}
          style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FEC601 100%)',
            color: 'white',
            fontWeight: 900,
            fontSize: '1.25rem',
            padding: '1.25rem 3rem',
            borderRadius: '9999px',
            border: '5px solid white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(255, 107, 53, 0.5)',
            fontFamily: "'Nunito', sans-serif"
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
          Start the Simulator →
        </button>
      </div>
    </div>
  );
}
