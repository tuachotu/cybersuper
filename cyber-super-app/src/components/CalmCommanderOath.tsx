interface CalmCommanderOathProps {
  onContinue: () => void;
  onBack: () => void;
  onShowParents?: () => void;
}

export default function CalmCommanderOath({ onContinue, onBack, onShowParents }: CalmCommanderOathProps) {
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
        maxWidth: '900px'
      }}>
        {/* Title with Image */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <img
            src="/oath.png"
            alt="Oath"
            style={{
              width: '220px',
              height: '220px',
              objectFit: 'contain'
            }}
          />
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 900,
            color: '#3b82f6',
            margin: 0,
            fontFamily: "'Nunito', sans-serif"
          }}>
            The Calm Commander Oath
          </h1>
        </div>

        {/* Oath Text */}
        <div style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '3rem 2.5rem',
          border: '3px solid #10b981',
          boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
          marginBottom: '2rem'
        }}>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: '2',
            color: '#065f46',
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontWeight: 700,
            margin: 0,
            textAlign: 'center'
          }}>
            I pause when feelings are big.<br/>
            I don't react.<br/>
            I move on or ask for help.<br/>
            That's how I protect my mind.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={onBack}
            style={{
              background: '#3b82f6',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.75rem 2rem',
              borderRadius: '2rem',
              border: '2px solid #2563eb',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              fontFamily: "'Nunito', sans-serif",
              minWidth: '180px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#3b82f6';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
            }}
          >
            ← Back
          </button>

          <button
            onClick={onContinue}
            style={{
              background: '#10b981',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.75rem 2rem',
              borderRadius: '2rem',
              border: '2px solid #059669',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
              fontFamily: "'Nunito', sans-serif",
              minWidth: '180px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#059669';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(16, 185, 129, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#10b981';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
            }}
          >
            Continue Training →
          </button>
        </div>
      </div>
    </div>
  );
}
