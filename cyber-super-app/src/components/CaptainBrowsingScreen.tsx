interface CaptainBrowsingScreenProps {
  onSelectProtocol: (protocolId: string) => void;
  onBack: () => void;
  onPractice: () => void;
  visitedProtocols: string[];
  onShowParents?: () => void;
}

interface ProtocolCard {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

const protocols: ProtocolCard[] = [
  {
    id: "no-force",
    emoji: "🛑",
    title: "The NO Force",
    subtitle: "Your Super Button of Safety!",
    buttonText: "Learn the NO Force →"
  },
  {
    id: "triple-shield",
    emoji: "🛡️",
    title: "The Triple Shield",
    subtitle: "Your Three-Step Safety Shield!",
    buttonText: "Master the Triple Shield →"
  },
  {
    id: "never-ever",
    emoji: "🚫",
    title: "The Never-Ever Rules",
    subtitle: "Your Secret Code of Safety!",
    buttonText: "Open the Never-Ever Rules →"
  }
];

export default function CaptainBrowsingScreen({ onSelectProtocol, onBack, onPractice, visitedProtocols: _visitedProtocols, onShowParents }: CaptainBrowsingScreenProps) {
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
        maxWidth: '1200px'
      }}>
        {/* Header */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
          fontWeight: 900,
          color: '#3b82f6',
          textAlign: 'center',
          marginBottom: '3rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Captain Browsing Training
        </h1>

        {/* Protocol Cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {protocols.map((protocol) => (
            <div key={protocol.id} style={{
              flex: '1 1 300px',
              maxWidth: '350px',
              minWidth: '280px'
            }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FEC601 100%)',
                  borderRadius: '1.5rem',
                  padding: '2rem 1.5rem',
                  border: '5px solid white',
                  boxShadow: '0 10px 30px rgba(255, 107, 53, 0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                {/* Content wrapper */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  {/* Emoji */}
                  <div style={{
                    textAlign: 'center',
                    fontSize: '3.5rem',
                    lineHeight: 1
                  }}>
                    {protocol.emoji}
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: 'white',
                    margin: 0,
                    fontFamily: "'Nunito', sans-serif",
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center'
                  }}>
                    {protocol.title}
                  </h2>

                  {/* Subtitle */}
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.5',
                    color: 'white',
                    margin: 0,
                    fontFamily: "'Nunito', sans-serif",
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                    fontWeight: 600
                  }}>
                    {protocol.subtitle}
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={() => onSelectProtocol(protocol.id)}
                  style={{
                    alignSelf: 'center',
                    background: 'white',
                    color: '#FF6B35',
                    fontWeight: 800,
                    fontSize: '1rem',
                    padding: '0.875rem 1.75rem',
                    borderRadius: '9999px',
                    border: '3px solid white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Nunito', sans-serif",
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  {protocol.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2rem',
          flexWrap: 'wrap'
        }}>
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
            ← Back to Missions
          </button>

          <button
            onClick={onPractice}
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
            Practice Your Powers
          </button>
        </div>
      </div>
    </div>
  );
}
