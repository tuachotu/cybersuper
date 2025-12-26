interface TrainingScreenProps {
  protocolId: string;
  onBack: () => void;
  onShowFlickFeedTraps?: () => void; // For "See the App Trap" button
  onShowFlickFeedMissions?: () => void; // For "Practice Taking Control" button
  onShowParents?: () => void;
}

export default function TrainingScreen({ protocolId, onBack, onShowFlickFeedTraps, onShowFlickFeedMissions, onShowParents }: TrainingScreenProps) {
  const renderNoForce = () => (
    <div>
      {/* Title */}
      <h1 style={{
        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
        fontWeight: 900,
        color: '#3b82f6',
        marginBottom: '2rem',
        fontFamily: "'Nunito', sans-serif",
        textAlign: 'center'
      }}>
        🛑 The NO Force
      </h1>

      {/* Introduction */}
      <p style={{
        fontSize: '1.25rem',
        lineHeight: '1.8',
        color: '#374151',
        marginBottom: '2rem',
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600
      }}>
        The NO Force is a simple safety rule:
      </p>

      <div style={{
        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
        borderRadius: '1rem',
        padding: '1.5rem',
        marginBottom: '2rem',
        border: '3px solid #3b82f6'
      }}>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.8',
          color: '#1e40af',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 700,
          marginBottom: '1rem'
        }}>
          If a website asks a Yes/No question you didn't expect, choose NO.
        </p>
        <p style={{
          fontSize: '1rem',
          lineHeight: '1.8',
          color: '#1e40af',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 600
        }}>
          (You only choose YES when a parent or trusted adult says it's safe.)
        </p>
      </div>

      {/* Example 1 */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#3b82f6',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Example 1
        </h3>

        {/* Mock Browser Popup */}
        <div style={{
          background: 'white',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          maxWidth: '450px',
          margin: '0 auto 1rem'
        }}>
          {/* Popup Header */}
          <div style={{
            background: '#f3f4f6',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid #d1d5db',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderRadius: '0.5rem 0.5rem 0 0'
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              background: '#3b82f6',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px'
            }}>🔔</div>
            <span style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#374151',
              fontFamily: "'Nunito', sans-serif"
            }}>coolwebsite.com</span>
          </div>

          {/* Popup Body */}
          <div style={{
            padding: '1.25rem'
          }}>
            <p style={{
              fontSize: '0.95rem',
              color: '#374151',
              marginBottom: '1rem',
              fontFamily: "'Nunito', sans-serif"
            }}>
              <strong>coolwebsite.com</strong> wants to show notifications
            </p>

            <div style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'flex-end'
            }}>
              <button style={{
                background: '#e5e7eb',
                color: '#374151',
                padding: '0.5rem 1.25rem',
                borderRadius: '0.375rem',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Block
              </button>
              <button style={{
                background: '#3b82f6',
                color: 'white',
                padding: '0.5rem 1.25rem',
                borderRadius: '0.375rem',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Allow
              </button>
            </div>
          </div>
        </div>

        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#6b7280',
          marginBottom: '0.75rem',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          Random notifications can be annoying and sometimes unsafe.
        </p>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 800,
          color: '#dc2626',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          ➡️ Choose BLOCK
        </p>
      </div>

      <div style={{
        borderTop: '2px dashed #d1d5db',
        margin: '2rem 0'
      }}></div>

      {/* Example 2 */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#3b82f6',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Example 2
        </h3>

        {/* Mock Browser Popup */}
        <div style={{
          background: 'white',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          maxWidth: '450px',
          margin: '0 auto 1rem'
        }}>
          {/* Popup Header */}
          <div style={{
            background: '#f3f4f6',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid #d1d5db',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderRadius: '0.5rem 0.5rem 0 0'
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              background: '#10b981',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px'
            }}>📍</div>
            <span style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#374151',
              fontFamily: "'Nunito', sans-serif"
            }}>funsite.com</span>
          </div>

          {/* Popup Body */}
          <div style={{
            padding: '1.25rem'
          }}>
            <p style={{
              fontSize: '0.95rem',
              color: '#374151',
              marginBottom: '1rem',
              fontFamily: "'Nunito', sans-serif"
            }}>
              <strong>funsite.com</strong> wants to know your location
            </p>

            <div style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'flex-end'
            }}>
              <button style={{
                background: '#e5e7eb',
                color: '#374151',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Don't Allow
              </button>
              <button style={{
                background: '#10b981',
                color: 'white',
                padding: '0.5rem 1.25rem',
                borderRadius: '0.375rem',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Allow
              </button>
            </div>
          </div>
        </div>

        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#6b7280',
          marginBottom: '0.75rem',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          Sharing your location can reveal where you live or go to school.
        </p>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 800,
          color: '#dc2626',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          ➡️ Choose DON'T ALLOW
        </p>
      </div>

      <div style={{
        borderTop: '2px dashed #d1d5db',
        margin: '2rem 0'
      }}></div>

      {/* Example 3 */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#3b82f6',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Example 3
        </h3>

        {/* Mock Download Dialog */}
        <div style={{
          background: 'white',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          maxWidth: '450px',
          margin: '0 auto 1rem'
        }}>
          {/* Dialog Header */}
          <div style={{
            background: '#fef3c7',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid #fbbf24',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderRadius: '0.5rem 0.5rem 0 0'
          }}>
            <div style={{
              fontSize: '18px'
            }}>⚠️</div>
            <span style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#92400e',
              fontFamily: "'Nunito', sans-serif"
            }}>Download Started</span>
          </div>

          {/* Dialog Body */}
          <div style={{
            padding: '1.25rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                fontSize: '32px'
              }}>📦</div>
              <div>
                <p style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#374151',
                  marginBottom: '0.25rem',
                  fontFamily: "'Nunito', sans-serif"
                }}>
                  mystery-file.exe
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#6b7280',
                  fontFamily: "'Nunito', sans-serif"
                }}>
                  2.4 MB • Downloaded
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'flex-end'
            }}>
              <button style={{
                background: '#e5e7eb',
                color: '#374151',
                padding: '0.5rem 1.25rem',
                borderRadius: '0.375rem',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Discard
              </button>
              <button style={{
                background: '#ef4444',
                color: 'white',
                padding: '0.5rem 1.25rem',
                borderRadius: '0.375rem',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Keep
              </button>
            </div>
          </div>
        </div>

        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#6b7280',
          marginBottom: '0.75rem',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          Unexpected files can contain harmful software.
        </p>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 800,
          color: '#dc2626',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          ➡️ Choose DISCARD
        </p>
      </div>

      {/* Final Message */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FEC601 100%)',
        borderRadius: '1.5rem',
        padding: '2rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        border: '4px solid white',
        boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '1.5rem',
          fontWeight: 900,
          color: 'white',
          fontFamily: "'Nunito', sans-serif",
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          If you didn't ask for it — choose NO.
        </p>
      </div>
    </div>
  );

  const renderTripleShield = () => (
    <div>
      {/* Title */}
      <h1 style={{
        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
        fontWeight: 900,
        color: '#3b82f6',
        marginBottom: '2rem',
        fontFamily: "'Nunito', sans-serif",
        textAlign: 'center'
      }}>
        🛡️ The Triple Shield
      </h1>

      {/* Introduction */}
      <p style={{
        fontSize: '1.25rem',
        lineHeight: '1.8',
        color: '#374151',
        marginBottom: '2rem',
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600,
        textAlign: 'center'
      }}>
        The Triple Shield gives you three actions that always keep you safe:
      </p>

      {/* Shield 1 - Always Ask */}
      <div style={{
        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
        borderRadius: '1.5rem',
        padding: '2rem',
        marginBottom: '1.5rem',
        border: '3px solid #3b82f6'
      }}>
        <h3 style={{
          fontSize: '1.75rem',
          fontWeight: 900,
          color: '#1e40af',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          1. Always Ask
        </h3>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.8',
          color: '#1e40af',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 600
        }}>
          If something shows up that you didn't expect or don't understand, ask a parent or trusted adult before clicking anything.
        </p>
      </div>

      {/* Shield 2 - Always Close */}
      <div style={{
        background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
        borderRadius: '1.5rem',
        padding: '2rem',
        marginBottom: '1.5rem',
        border: '3px solid #10b981'
      }}>
        <h3 style={{
          fontSize: '1.75rem',
          fontWeight: 900,
          color: '#065f46',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          2. Always Close
        </h3>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.8',
          color: '#065f46',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 600
        }}>
          If a website looks suspicious, confusing, or uncomfortable, close the tab or window right away.
        </p>
      </div>

      {/* Shield 3 - Always Tell */}
      <div style={{
        background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
        borderRadius: '1.5rem',
        padding: '2rem',
        marginBottom: '2rem',
        border: '3px solid #ec4899'
      }}>
        <h3 style={{
          fontSize: '1.75rem',
          fontWeight: 900,
          color: '#9f1239',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          3. Always Tell
        </h3>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.8',
          color: '#9f1239',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 600
        }}>
          If something online makes you uneasy — a message, a picture, a pop-up — tell a parent. You're never in trouble for reporting it.
        </p>
      </div>

      {/* Examples Header */}
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 900,
        color: '#3b82f6',
        marginTop: '3rem',
        marginBottom: '2rem',
        fontFamily: "'Nunito', sans-serif",
        textAlign: 'center'
      }}>
        🧩 Examples
      </h2>

      {/* Example 1 - Always Ask */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#3b82f6',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Example 1 — Always Ask
        </h3>

        {/* Mock Form */}
        <div style={{
          background: 'white',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          maxWidth: '450px',
          margin: '0 auto 1rem',
          padding: '1.5rem'
        }}>
          <div style={{
            marginBottom: '1rem'
          }}>
            <p style={{
              fontSize: '1.125rem',
              fontWeight: 700,
              color: '#374151',
              marginBottom: '1rem',
              fontFamily: "'Nunito', sans-serif"
            }}>
              🎮 Join the Game!
            </p>
            <p style={{
              fontSize: '0.875rem',
              color: '#6b7280',
              marginBottom: '1.5rem',
              fontFamily: "'Nunito', sans-serif"
            }}>
              Tell us about yourself to get started:
            </p>
          </div>

          <div style={{
            marginBottom: '1rem'
          }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#374151',
              marginBottom: '0.5rem',
              fontFamily: "'Nunito', sans-serif"
            }}>
              What's your birthday?
            </label>
            <input
              type="text"
              placeholder="MM/DD/YYYY"
              disabled
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontFamily: "'Nunito', sans-serif",
                background: '#f9fafb'
              }}
            />
          </div>

          <div style={{
            marginBottom: '1.5rem'
          }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#374151',
              marginBottom: '0.5rem',
              fontFamily: "'Nunito', sans-serif"
            }}>
              What school do you go to?
            </label>
            <input
              type="text"
              placeholder="Enter your school name"
              disabled
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontFamily: "'Nunito', sans-serif",
                background: '#f9fafb'
              }}
            />
          </div>

          <button style={{
            width: '100%',
            background: '#3b82f6',
            color: 'white',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            border: 'none',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'not-allowed',
            fontFamily: "'Nunito', sans-serif",
            opacity: 0.7
          }}>
            Continue
          </button>
        </div>

        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#6b7280',
          marginBottom: '0.75rem',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          A website suddenly asks for your birthday or your school.
        </p>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 800,
          color: '#3b82f6',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          ➡️ Stop and Ask a parent first.
        </p>
      </div>

      <div style={{
        borderTop: '2px dashed #d1d5db',
        margin: '2rem 0'
      }}></div>

      {/* Example 2 - Always Close */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#10b981',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Example 2 — Always Close
        </h3>

        {/* Mock Scary Popup */}
        <div style={{
          background: 'white',
          border: '2px solid #dc2626',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
          maxWidth: '450px',
          margin: '0 auto 1rem',
          overflow: 'hidden'
        }}>
          {/* Fake Alert Header */}
          <div style={{
            background: '#dc2626',
            padding: '0.75rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              fontSize: '20px'
            }}>⚠️</div>
            <span style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'white',
              fontFamily: "'Nunito', sans-serif"
            }}>VIRUS ALERT!</span>
          </div>

          {/* Alert Body */}
          <div style={{
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '1rem'
            }}>🦠</div>

            <p style={{
              fontSize: '1.125rem',
              fontWeight: 700,
              color: '#dc2626',
              marginBottom: '0.75rem',
              fontFamily: "'Nunito', sans-serif"
            }}>
              YOUR COMPUTER IS INFECTED!
            </p>

            <p style={{
              fontSize: '0.875rem',
              color: '#374151',
              marginBottom: '1rem',
              fontFamily: "'Nunito', sans-serif"
            }}>
              32 viruses detected! Your device may be damaged!
            </p>

            <p style={{
              fontSize: '0.8rem',
              color: '#6b7280',
              marginBottom: '1.5rem',
              fontFamily: "'Nunito', sans-serif"
            }}>
              Click below to fix now!
            </p>

            <button style={{
              background: '#dc2626',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.375rem',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: 700,
              cursor: 'not-allowed',
              fontFamily: "'Nunito', sans-serif",
              animation: 'pulse 1.5s infinite',
              opacity: 0.8
            }}>
              FIX NOW! (DON'T CLICK!)
            </button>
          </div>
        </div>

        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#6b7280',
          marginBottom: '0.75rem',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          A pop-up claims your device is "infected" or "broken."
        </p>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 800,
          color: '#10b981',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          ➡️ Close the window immediately!
        </p>
      </div>

      <div style={{
        borderTop: '2px dashed #d1d5db',
        margin: '2rem 0'
      }}></div>

      {/* Example 3 - Always Tell */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#ec4899',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Example 3 — Always Tell
        </h3>

        {/* Mock Uncomfortable Message */}
        <div style={{
          background: 'white',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          maxWidth: '450px',
          margin: '0 auto 1rem',
          overflow: 'hidden'
        }}>
          {/* Message Header */}
          <div style={{
            background: '#f3f4f6',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid #d1d5db',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: '#9ca3af',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px'
            }}>👤</div>
            <div>
              <p style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#374151',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Unknown User
              </p>
              <p style={{
                fontSize: '0.75rem',
                color: '#6b7280',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Not in your contacts
              </p>
            </div>
          </div>

          {/* Message Body */}
          <div style={{
            padding: '1.25rem'
          }}>
            <div style={{
              background: '#f3f4f6',
              padding: '0.75rem 1rem',
              borderRadius: '1rem',
              marginBottom: '0.75rem'
            }}>
              <p style={{
                fontSize: '0.875rem',
                color: '#374151',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Hey! I know you from school. Want to be friends?
              </p>
            </div>

            <div style={{
              background: '#fef3c7',
              padding: '0.75rem 1rem',
              borderRadius: '1rem',
              border: '1px solid #fbbf24'
            }}>
              <p style={{
                fontSize: '0.875rem',
                color: '#92400e',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Can you send me a picture of yourself? Don't tell your parents about our chat.
              </p>
            </div>

            <div style={{
              marginTop: '1rem',
              padding: '0.75rem',
              background: '#fef2f2',
              borderRadius: '0.5rem',
              border: '1px solid #fca5a5'
            }}>
              <p style={{
                fontSize: '0.75rem',
                color: '#991b1b',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                textAlign: 'center'
              }}>
                ⚠️ This feels uncomfortable!
              </p>
            </div>
          </div>
        </div>

        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#6b7280',
          marginBottom: '0.75rem',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          You see something online that feels uncomfortable or upsetting.
        </p>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 800,
          color: '#ec4899',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          ➡️ Tell a parent immediately. You're never in trouble for reporting!
        </p>
      </div>

      {/* Final Reminder */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FEC601 100%)',
        borderRadius: '1.5rem',
        padding: '2rem',
        marginTop: '3rem',
        marginBottom: '2rem',
        border: '4px solid white',
        boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '0.875rem',
          fontWeight: 700,
          color: 'white',
          marginBottom: '0.5rem',
          fontFamily: "'Nunito', sans-serif",
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
          opacity: 0.9
        }}>
          ⭐ One-Line Reminder
        </p>
        <p style={{
          fontSize: '1.5rem',
          fontWeight: 900,
          color: 'white',
          fontFamily: "'Nunito', sans-serif",
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          Ask if unsure. Close if weird. Tell if uncomfortable.
        </p>
      </div>
    </div>
  );

  const renderAppHero = () => (
    <div>
      {/* Title and Bear Image - Side by Side */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        <img
          src="/smart-ai.png"
          alt="App Hero Bear"
          style={{
            width: '150px',
            height: '150px',
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
          App Hero
        </h1>
      </div>

      {/* App Trap Story */}
      <p style={{
        fontSize: '1.125rem',
        lineHeight: '1.8',
        color: '#374151',
        marginBottom: '2rem',
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600
      }}>
        You open an app, Just to check one thing. You scroll a little, Then a little more. A notification pops up. Someone liked your post. Another message comes in. Suddenly, time moves fast here. Way faster than you expect.
      </p>
      <p style={{
        fontSize: '1.125rem',
        lineHeight: '1.8',
        color: '#374151',
        marginBottom: '2rem',
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600
      }}>
        Nothing bad happened. No rules were broken. The app did exactly what it was designed to do- keep your attention.
      </p>

      {/* Power to Practice Rectangle */}
      <div style={{
        background: 'white',
        borderRadius: '1.5rem',
        padding: '2rem',
        marginBottom: '2rem',
        border: '3px solid #10b981'
      }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 900,
          color: '#065f46',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          Your Power: Taking Control
        </h2>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.8',
          color: '#065f46',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 600,
          textAlign: 'center',
          margin: 0
        }}>
          Find the settings. Change how the app works for you.
        </p>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '2rem'
      }}>
        <button
          onClick={onBack}
          style={{
            display: 'inline-block',
            color: 'white',
            fontSize: '0.95rem',
            fontWeight: 700,
            padding: '0.85rem 2rem',
            borderRadius: '2rem',
            background: '#3b82f6',
            border: '2px solid #2563eb',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
            minWidth: '180px',
            textAlign: 'center',
            cursor: 'pointer',
            fontFamily: "'Nunito', sans-serif"
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
          ← Back to Missions
        </button>

        <button
          onClick={onShowFlickFeedTraps}
          style={{
            display: 'inline-block',
            color: 'white',
            fontSize: '0.95rem',
            fontWeight: 700,
            padding: '0.85rem 2rem',
            borderRadius: '2rem',
            background: '#3b82f6',
            border: '2px solid #2563eb',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
            minWidth: '180px',
            textAlign: 'center',
            cursor: 'pointer',
            fontFamily: "'Nunito', sans-serif"
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
          See the App Trap
        </button>

        <button
          onClick={onShowFlickFeedMissions}
          style={{
            display: 'inline-block',
            color: 'white',
            fontSize: '0.95rem',
            fontWeight: 700,
            padding: '0.85rem 2rem',
            borderRadius: '2rem',
            background: '#3b82f6',
            border: '2px solid #2563eb',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
            minWidth: '180px',
            textAlign: 'center',
            cursor: 'pointer',
            fontFamily: "'Nunito', sans-serif"
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
          Practice Taking Control →
        </button>
      </div>
    </div>
  );

  const renderNeverEver = () => (
    <div>
      {/* Title */}
      <h1 style={{
        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
        fontWeight: 900,
        color: '#3b82f6',
        marginBottom: '2rem',
        fontFamily: "'Nunito', sans-serif",
        textAlign: 'center'
      }}>
        🚫 The Never-Ever Rules
      </h1>

      {/* Introduction */}
      <p style={{
        fontSize: '1.125rem',
        lineHeight: '1.8',
        color: '#374151',
        marginBottom: '1rem',
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600,
        textAlign: 'center'
      }}>
        Some information should never be shared online without a parent — even if a website or person seems friendly.
      </p>

      <div style={{
        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        borderRadius: '1rem',
        padding: '1.5rem',
        marginBottom: '2rem',
        border: '3px solid #fbbf24'
      }}>
        <p style={{
          fontSize: '1rem',
          lineHeight: '1.8',
          color: '#92400e',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>
          The Never-Ever Rules protect your personal information and your identity.
        </p>
        <p style={{
          fontSize: '1rem',
          lineHeight: '1.8',
          color: '#92400e',
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 600
        }}>
          These rules help you avoid people or websites that might misuse what you share.
        </p>
      </div>

      {/* Never Share List */}
      <h2 style={{
        fontSize: '1.75rem',
        fontWeight: 900,
        color: '#dc2626',
        marginBottom: '1.5rem',
        fontFamily: "'Nunito', sans-serif",
        textAlign: 'center'
      }}>
        🔒 Never share:
      </h2>

      {/* Rule 1 */}
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '1.25rem',
        marginBottom: '1rem',
        border: '2px solid #fecaca',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#dc2626',
          marginBottom: '0.5rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          1. Your full name
        </h3>
        <p style={{
          fontSize: '1rem',
          color: '#6b7280',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Online strangers do not need to know who you are.
        </p>
      </div>

      {/* Rule 2 */}
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '1.25rem',
        marginBottom: '1rem',
        border: '2px solid #fecaca',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#dc2626',
          marginBottom: '0.5rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          2. Your age or birthday
        </h3>
        <p style={{
          fontSize: '1rem',
          color: '#6b7280',
          fontFamily: "'Nunito', sans-serif"
        }}>
          This reveals more about you than you think.
        </p>
      </div>

      {/* Rule 3 */}
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '1.25rem',
        marginBottom: '1rem',
        border: '2px solid #fecaca',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#dc2626',
          marginBottom: '0.5rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          3. Your location
        </h3>
        <p style={{
          fontSize: '1rem',
          color: '#6b7280',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Home, school, neighborhood — keep these private.
        </p>
      </div>

      {/* Rule 4 */}
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '1.25rem',
        marginBottom: '1rem',
        border: '2px solid #fecaca',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#dc2626',
          marginBottom: '0.5rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          4. Your photos or video
        </h3>
        <p style={{
          fontSize: '1rem',
          color: '#6b7280',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Don't turn on your camera or send pictures unless a parent approves.
        </p>
      </div>

      {/* Rule 5 */}
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '1.25rem',
        marginBottom: '1rem',
        border: '2px solid #fecaca',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#dc2626',
          marginBottom: '0.5rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          5. Your login info
        </h3>
        <p style={{
          fontSize: '1rem',
          color: '#6b7280',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Passwords, codes, and accounts must stay private — always.
        </p>
      </div>

      {/* Rule 6 */}
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '1.25rem',
        marginBottom: '2rem',
        border: '2px solid #fecaca',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#dc2626',
          marginBottom: '0.5rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          6. Anything that feels personal
        </h3>
        <p style={{
          fontSize: '1rem',
          color: '#6b7280',
          fontFamily: "'Nunito', sans-serif"
        }}>
          If you're not sure, assume it's private.
        </p>
      </div>

      <div style={{
        borderTop: '2px dashed #d1d5db',
        margin: '3rem 0'
      }}></div>

      {/* Examples Header */}
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 900,
        color: '#3b82f6',
        marginBottom: '2rem',
        fontFamily: "'Nunito', sans-serif",
        textAlign: 'center'
      }}>
        🧩 Examples
      </h2>

      {/* Example 1 */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#dc2626',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Example 1
        </h3>

        {/* Mock Profile Creation */}
        <div style={{
          background: 'white',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          maxWidth: '450px',
          margin: '0 auto 1rem',
          padding: '1.5rem'
        }}>
          <p style={{
            fontSize: '1.125rem',
            fontWeight: 700,
            color: '#374151',
            marginBottom: '1rem',
            fontFamily: "'Nunito', sans-serif"
          }}>
            ✨ Create Your Profile
          </p>

          <div style={{
            marginBottom: '1rem'
          }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#374151',
              marginBottom: '0.5rem',
              fontFamily: "'Nunito', sans-serif"
            }}>
              First Name *
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              disabled
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontFamily: "'Nunito', sans-serif",
                background: '#f9fafb'
              }}
            />
          </div>

          <div style={{
            marginBottom: '1.5rem'
          }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#374151',
              marginBottom: '0.5rem',
              fontFamily: "'Nunito', sans-serif"
            }}>
              Last Name *
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              disabled
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontFamily: "'Nunito', sans-serif",
                background: '#f9fafb'
              }}
            />
          </div>

          <div style={{
            padding: '0.75rem',
            background: '#fef2f2',
            borderRadius: '0.5rem',
            border: '1px solid #fca5a5',
            marginBottom: '1rem'
          }}>
            <p style={{
              fontSize: '0.75rem',
              color: '#991b1b',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              textAlign: 'center'
            }}>
              🚫 STOP! Don't share your real name!
            </p>
          </div>
        </div>

        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#6b7280',
          marginBottom: '0.75rem',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          A website asks you to "create a profile" with your full name.
        </p>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 800,
          color: '#dc2626',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          ➡️ Never share personal details.
        </p>
      </div>

      <div style={{
        borderTop: '2px dashed #d1d5db',
        margin: '2rem 0'
      }}></div>

      {/* Example 2 */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#dc2626',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Example 2
        </h3>

        {/* Mock Chat */}
        <div style={{
          background: 'white',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          maxWidth: '450px',
          margin: '0 auto 1rem',
          overflow: 'hidden'
        }}>
          <div style={{
            background: '#f3f4f6',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid #d1d5db'
          }}>
            <p style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#374151',
              fontFamily: "'Nunito', sans-serif"
            }}>
              💬 Game Chat
            </p>
          </div>

          <div style={{
            padding: '1.25rem'
          }}>
            <div style={{
              background: '#f3f4f6',
              padding: '0.75rem 1rem',
              borderRadius: '1rem',
              marginBottom: '0.75rem'
            }}>
              <p style={{
                fontSize: '0.75rem',
                color: '#6b7280',
                marginBottom: '0.25rem',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Player_2847
              </p>
              <p style={{
                fontSize: '0.875rem',
                color: '#374151',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Hey! How old are you?
              </p>
            </div>

            <div style={{
              padding: '0.75rem',
              background: '#fef2f2',
              borderRadius: '0.5rem',
              border: '1px solid #fca5a5'
            }}>
              <p style={{
                fontSize: '0.75rem',
                color: '#991b1b',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                textAlign: 'center'
              }}>
                🚫 Don't answer!
              </p>
            </div>
          </div>
        </div>

        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#6b7280',
          marginBottom: '0.75rem',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          An online chat asks, "How old are you?"
        </p>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 800,
          color: '#dc2626',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          ➡️ Do not answer.
        </p>
      </div>

      <div style={{
        borderTop: '2px dashed #d1d5db',
        margin: '2rem 0'
      }}></div>

      {/* Example 3 */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#dc2626',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Example 3
        </h3>

        {/* Mock Video Request */}
        <div style={{
          background: 'white',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          maxWidth: '450px',
          margin: '0 auto 1rem'
        }}>
          <div style={{
            background: '#1f2937',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px',
            position: 'relative'
          }}>
            <div style={{
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '0.5rem'
              }}>📹</div>
              <p style={{
                fontSize: '0.875rem',
                color: '#9ca3af',
                fontFamily: "'Nunito', sans-serif"
              }}>
                Camera Off
              </p>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              background: '#fef3c7',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #fbbf24'
            }}>
              <p style={{
                fontSize: '0.75rem',
                color: '#92400e',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600
              }}>
                "Turn on your camera so I know it's really you."
              </p>
            </div>
          </div>

          <div style={{
            padding: '1rem',
            background: '#fef2f2',
            borderTop: '1px solid #fca5a5'
          }}>
            <p style={{
              fontSize: '0.875rem',
              color: '#991b1b',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              textAlign: 'center'
            }}>
              🚫 Never turn on your camera!
            </p>
          </div>
        </div>

        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#6b7280',
          marginBottom: '0.75rem',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          Someone online says, "Turn on your camera so I know it's really you."
        </p>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 800,
          color: '#dc2626',
          fontFamily: "'Nunito', sans-serif",
          textAlign: 'center'
        }}>
          ➡️ Never turn on video without a parent.
        </p>
      </div>

      {/* Final Reminder */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FEC601 100%)',
        borderRadius: '1.5rem',
        padding: '2rem',
        marginTop: '3rem',
        marginBottom: '2rem',
        border: '4px solid white',
        boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '0.875rem',
          fontWeight: 700,
          color: 'white',
          marginBottom: '0.5rem',
          fontFamily: "'Nunito', sans-serif",
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
          opacity: 0.9
        }}>
          ⭐ One-Line Reminder
        </p>
        <p style={{
          fontSize: '1.5rem',
          fontWeight: 900,
          color: 'white',
          fontFamily: "'Nunito', sans-serif",
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          If it's personal, private, or about you — don't share it.
        </p>
      </div>
    </div>
  );

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
        maxHeight: '85vh',
        overflowY: 'auto'
      }}>
        {protocolId === 'no-force' && renderNoForce()}
        {protocolId === 'triple-shield' && renderTripleShield()}
        {protocolId === 'never-ever' && renderNeverEver()}
        {protocolId === 'app-hero' && renderAppHero()}

        {/* Back Button - Hidden for app-hero since it has its own button group */}
        {protocolId !== 'app-hero' && (
          <div style={{
            marginTop: '2rem',
            textAlign: 'center'
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
              ← Back to Captain Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
