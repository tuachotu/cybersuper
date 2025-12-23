interface ParentsScreenProps {
  onBack: () => void;
}

export default function ParentsScreen({ onBack }: ParentsScreenProps) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1.5rem'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        background: 'white',
        borderRadius: '2rem',
        padding: '3rem 2.5rem',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        border: '3px solid #3b82f6'
      }}>
        {/* Header */}
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: 900,
          color: '#3b82f6',
          textAlign: 'center',
          marginBottom: '2.5rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          A Note for Parents
        </h1>

        {/* Content */}
        <div style={{
          fontSize: '1.125rem',
          lineHeight: '1.8',
          color: '#1e293b',
          fontFamily: "'Nunito', sans-serif"
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            I built How to Be Cyber Super to help my own family stay safe online. The internet is wonderful, but it's also full of things kids can accidentally click, trust, or share without understanding the risks.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            My intention is simple:<br />
            Help kids learn how to stay safe, avoid getting tricked or exploited, and not have their information or devices compromised — all in a fun, superhero style they actually enjoy.
          </p>

          <p style={{ marginBottom: '2rem' }}>
            If this project helps your family the way it's helping mine, that's all I could hope for.
          </p>

          <hr style={{
            border: 'none',
            borderTop: '2px solid #e2e8f0',
            margin: '2.5rem 0'
          }} />

          {/* Contact Section */}
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            color: '#3b82f6',
            marginBottom: '1.5rem',
            fontFamily: "'Nunito', sans-serif"
          }}>
            Contact Me
          </h2>

          <p style={{ marginBottom: '1rem' }}>
            If you're a parent and want to share feedback, ideas, or concerns,<br />
            you can reach me here:
          </p>

          <p style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#3b82f6',
            marginBottom: '1.5rem'
          }}>
            📧 Email: vikrant.thakur [at] gmail [dot] com
          </p>

          <p style={{ marginBottom: 0 }}>
            I'm always happy to hear from fellow parents.
          </p>
        </div>

        {/* Back Button */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <button
            onClick={onBack}
            style={{
              display: 'inline-block',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 700,
              padding: '1rem 3rem',
              borderRadius: '2rem',
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FEC601 100%)',
              border: '5px solid white',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(255, 107, 53, 0.5)',
              cursor: 'pointer',
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
            🏠 Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
