interface WorkInProgressScreenProps {
  onBack: () => void;
}

export default function WorkInProgressScreen({ onBack }: WorkInProgressScreenProps) {
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
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        {/* Icon */}
        <div style={{
          fontSize: '6rem',
          marginBottom: '2rem'
        }}>
          🚧
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 900,
          color: '#3b82f6',
          marginBottom: '1.5rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Work in Progress
        </h1>

        {/* Message */}
        <p style={{
          fontSize: '1.25rem',
          lineHeight: '1.8',
          color: '#6b7280',
          marginBottom: '3rem',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 600
        }}>
          This training module is currently under construction. Check back soon for more cyber safety adventures!
        </p>

        {/* Back Button */}
        <button
          onClick={onBack}
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
          ← Back to Captain Browsing
        </button>
      </div>
    </div>
  );
}
