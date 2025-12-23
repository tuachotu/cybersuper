interface PracticeCompleteProps {
  onRetry: () => void;
  onBackToStart: () => void;
}

export default function PracticeComplete({ onRetry, onBackToStart }: PracticeCompleteProps) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1.5rem',
      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #fae8ff 100%)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        background: 'white',
        borderRadius: '2rem',
        padding: '3rem 2.5rem',
        border: '5px solid #3b82f6',
        boxShadow: '0 20px 50px rgba(59, 130, 246, 0.3)',
        textAlign: 'center'
      }}>
        {/* Trophy/Badge */}
        <div style={{
          fontSize: '8rem',
          marginBottom: '1.5rem',
          animation: 'bounce 1s ease-in-out'
        }}>
          🏆
        </div>

        {/* Congratulations */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Congratulations!
        </h1>

        {/* Title Earned */}
        <div style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FEC601 100%)',
          borderRadius: '1.5rem',
          padding: '2rem',
          margin: '2rem auto',
          maxWidth: '600px',
          border: '4px solid white',
          boxShadow: '0 10px 30px rgba(255, 107, 53, 0.4)'
        }}>
          <p style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: 'white',
            marginBottom: '0.5rem',
            fontFamily: "'Nunito', sans-serif",
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            opacity: 0.9
          }}>
            You are now a
          </p>
          <p style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 900,
            color: 'white',
            fontFamily: "'Nunito', sans-serif",
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}>
            CAPTAIN BROWSER!
          </p>
        </div>

        {/* Success Message */}
        <div style={{
          background: '#f3f4f6',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '2.5rem'
        }}>
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.8',
            color: '#374151',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            You've successfully completed your training by making <strong style={{ color: '#10b981' }}>10 safe choices</strong>!
          </p>

          <p style={{
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: '#6b7280',
            fontFamily: "'Nunito', sans-serif"
          }}>
            You've proven you can use <strong>The NO Force</strong>, <strong>The Triple Shield</strong>, and <strong>The Never-Ever Rules</strong> to stay safe online.
          </p>
        </div>

        {/* Power Badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            padding: '1rem 1.5rem',
            borderRadius: '1rem',
            border: '3px solid #3b82f6'
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '0.25rem'
            }}>🛑</div>
            <p style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#1e40af',
              fontFamily: "'Nunito', sans-serif"
            }}>NO Force</p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
            padding: '1rem 1.5rem',
            borderRadius: '1rem',
            border: '3px solid #10b981'
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '0.25rem'
            }}>🛡️</div>
            <p style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#065f46',
              fontFamily: "'Nunito', sans-serif"
            }}>Triple Shield</p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
            padding: '1rem 1.5rem',
            borderRadius: '1rem',
            border: '3px solid #ec4899'
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '0.25rem'
            }}>🚫</div>
            <p style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#9f1239',
              fontFamily: "'Nunito', sans-serif"
            }}>Never-Ever Rules</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={onRetry}
            style={{
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FEC601 100%)',
              color: 'white',
              fontWeight: 900,
              fontSize: '1.125rem',
              padding: '1rem 2.5rem',
              borderRadius: '9999px',
              border: '4px solid white',
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
            Practice Again →
          </button>

          <button
            onClick={onBackToStart}
            style={{
              background: '#3b82f6',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '1rem 2.5rem',
              borderRadius: '2rem',
              border: '2px solid #2563eb',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              fontFamily: "'Nunito', sans-serif"
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
            ← Back to Missions
          </button>
        </div>
      </div>
    </div>
  );
}
