import { useState } from 'react';

interface CalmCommanderSituation1Props {
  onBack: () => void;
  onShowParents?: () => void;
  onNext?: () => void;
}

type Feeling = 'excited' | 'shocked' | 'happy' | 'normal' | 'worried' | null;

export default function CalmCommanderSituation1({ onBack, onShowParents, onNext }: CalmCommanderSituation1Props) {
  const [selectedFeeling, setSelectedFeeling] = useState<Feeling>(null);

  const feelings = [
    { id: 'excited' as const, emoji: '😄', label: 'Super excited' },
    { id: 'shocked' as const, emoji: '😮', label: 'Shocked' },
    { id: 'happy' as const, emoji: '🙂', label: 'Happy' },
    { id: 'normal' as const, emoji: '😐', label: 'Normal' },
    { id: 'worried' as const, emoji: '😕', label: 'A little worried' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem',
      position: 'relative',
      background: '#f3f4f6'
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

      {/* Main Content */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        position: 'relative'
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: 900,
          color: '#3b82f6',
          textAlign: 'center',
          marginBottom: '2rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Situation 1
        </h1>

        {/* Explanation */}
        <p style={{
          fontSize: '1.25rem',
          lineHeight: '1.8',
          color: '#374151',
          textAlign: 'center',
          marginBottom: '3rem',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 600
        }}>
          You uploaded a video on TikTok and after some time you got a popup like below.
        </p>

        {/* Two Column Layout */}
        <div style={{
          display: 'flex',
          gap: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {/* Left Column - Phone with Notification */}
          <div style={{
            flex: '0 0 auto'
          }}>
          {/* iPhone-like container */}
          <div style={{
            width: '320px',
            height: '600px',
            background: '#1a1a1a',
            borderRadius: '40px',
            padding: '12px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            position: 'relative',
            border: '8px solid #2c2c2c'
          }}>
            {/* Notch */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '150px',
              height: '30px',
              background: '#1a1a1a',
              borderRadius: '0 0 20px 20px',
              zIndex: 10
            }} />

            {/* Screen */}
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '32px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Lock Screen Time */}
              <div style={{
                position: 'absolute',
                top: '80px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '4rem',
                  fontWeight: 300,
                  color: 'white',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  lineHeight: '1'
                }}>
                  2:47
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  marginTop: '4px'
                }}>
                  Thursday, December 26
                </div>
              </div>

              {/* TikTok Notification - Pulsing */}
              <div style={{
                position: 'absolute',
                bottom: '80px',
                left: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                padding: '14px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                animation: 'slideInBounce 0.6s ease-out, pulse 2s ease-in-out infinite 0.6s'
              }}>
                {/* Notification Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '8px',
                  gap: '8px'
                }}>
                  {/* TikTok Icon */}
                  <div style={{
                    width: '24px',
                    height: '24px',
                    background: 'linear-gradient(45deg, #00f2ea, #ff0050)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: 'white'
                  }}>
                    ♪
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#000',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}>
                      TikTok
                    </div>
                    <div style={{
                      fontSize: '0.7rem',
                      color: '#666',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}>
                      now
                    </div>
                  </div>
                </div>

                {/* Notification Content */}
                <div style={{
                  fontSize: '0.95rem',
                  color: '#000',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  lineHeight: '1.4',
                  fontWeight: 500
                }}>
                  🎉 Your video is going viral! Check it now!
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  marginTop: '4px',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                  3,482 likes in 10 minutes
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Right Column - Feelings Selection */}
          <div style={{
            flex: '1 1 400px',
            maxWidth: '500px',
            minWidth: '300px'
          }}>
            {!selectedFeeling ? (
              <>
                <h2 style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: '#1f2937',
                  marginBottom: '2rem',
                  fontFamily: "'Nunito', sans-serif",
                  textAlign: 'left'
                }}>
                  How does this make you feel?
                </h2>

                {/* Feelings Options */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  {feelings.map((feeling) => (
                    <button
                      key={feeling.id}
                      onClick={() => setSelectedFeeling(feeling.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem 1.5rem',
                        background: 'white',
                        border: '2px solid #e5e7eb',
                        borderRadius: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontSize: '1.1rem',
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: 600,
                        textAlign: 'left',
                        color: '#374151'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#f9fafb';
                        e.currentTarget.style.borderColor = '#d1d5db';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.borderColor = '#e5e7eb';
                      }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>{feeling.emoji}</span>
                      <span>{feeling.label}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              /* Success Message */
              <div style={{
                background: '#d1fae5',
                border: '2px solid #10b981',
                borderRadius: '1rem',
                padding: '2rem',
                animation: 'fadeIn 0.3s ease-out'
              }}>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#065f46',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  margin: '0 0 1rem 0'
                }}>
                  Great job noticing your feeling. Calm Commanders pause when feelings are big  even happy ones. Big feelings can make us click or post too fast.
                </p>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.7',
                  color: '#065f46',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 800,
                  margin: 0
                }}>
                  Pause. Breathe. Choose what to do next, don't rush.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Back Button and Next Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem'
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

          {selectedFeeling && onNext && (
            <button
              onClick={onNext}
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
                minWidth: '180px',
                animation: 'fadeIn 0.3s ease-out'
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
              Next Situation →
            </button>
          )}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        @keyframes slideInBounce {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          60% {
            transform: translateY(10px);
            opacity: 1;
          }
          80% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
