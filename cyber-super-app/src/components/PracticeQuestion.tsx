import { useState, useEffect, useMemo } from "react";
import type { PracticeQuestion as PracticeQuestionType } from "../data/practiceQuestions";

interface PracticeQuestionProps {
  question: PracticeQuestionType;
  correctCount: number;
  onAnswerCorrect: () => void;
  onNext: () => void;
  onBackToMissions: () => void;
}

export default function PracticeQuestion({
  question,
  correctCount,
  onAnswerCorrect,
  onNext,
  onBackToMissions
}: PracticeQuestionProps) {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Use NotQuite or Notquite2 randomly for wrong answers (memoized per question)
  const notQuiteImage = useMemo(() =>
    Math.random() > 0.5 ? '/NotQuite.png' : '/Notquite2.png',
    [question.scenarioId]
  );

  // Reset state when question changes
  useEffect(() => {
    setSelectedAction(null);
    setShowFeedback(false);
  }, [question.scenarioId]);

  const handleAction = (action: string) => {
    setSelectedAction(action);
    setShowFeedback(true);

    if (action === question.correctAction) {
      onAnswerCorrect();
    }
  };

  const isCorrect = selectedAction === question.correctAction;

  // Render different popup types
  const renderPopup = () => {
    switch (question.visualType) {
      case "browser-permission":
        return renderBrowserPermission();
      case "download-prompt":
        return renderDownloadPrompt();
      case "warning-popup":
        return renderWarningPopup();
      case "form-input":
        return renderFormInput();
      case "chat-message":
        return renderChatMessage();
      case "webpage-content":
        return renderWebpageContent();
      case "tracking-request":
        return renderTrackingRequest();
      default:
        return renderBrowserPermission();
    }
  };

  // Browser Permission Popup (notifications, camera, mic, etc.)
  const renderBrowserPermission = () => (
    <div style={{
      background: 'white',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      maxWidth: '450px',
      margin: '0 auto'
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
        }}>{question.icon}</div>
        <span style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#374151',
          fontFamily: "'Nunito', sans-serif"
        }}>{question.websiteName}</span>
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
          <strong>{question.websiteName}</strong> {question.popupText}
        </p>

        <div style={{
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'flex-end'
        }}>
          {question.userActions.map((action) => (
            <button
              key={action}
              onClick={() => handleAction(action)}
              style={{
                background: action === question.userActions[question.userActions.length - 1] ? '#3b82f6' : '#e5e7eb',
                color: action === question.userActions[question.userActions.length - 1] ? 'white' : '#374151',
                padding: '0.5rem 1.25rem',
                borderRadius: '0.375rem',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif",
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Download Prompt
  const renderDownloadPrompt = () => (
    <div style={{
      background: 'white',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      maxWidth: '450px',
      margin: '0 auto',
      padding: '1.5rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{
          fontSize: '3rem'
        }}>💾</div>
        <div>
          <p style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: '#374151',
            marginBottom: '0.25rem',
            fontFamily: "'Nunito', sans-serif"
          }}>
            Download started
          </p>
          <p style={{
            fontSize: '0.875rem',
            color: '#6b7280',
            fontFamily: "'Nunito', sans-serif"
          }}>
            {question.popupText}
          </p>
          <p style={{
            fontSize: '0.75rem',
            color: '#9ca3af',
            marginTop: '0.25rem',
            fontFamily: "'Nunito', sans-serif"
          }}>
            from {question.websiteName}
          </p>
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: '0.75rem',
        justifyContent: 'flex-end'
      }}>
        {question.userActions.map((action) => (
          <button
            key={action}
            onClick={() => handleAction(action)}
            style={{
              background: action === 'Discard' ? '#ef4444' : '#3b82f6',
              color: 'white',
              padding: '0.5rem 1.25rem',
              borderRadius: '0.375rem',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );

  // Warning Popup (scary alerts)
  const renderWarningPopup = () => (
    <div style={{
      background: 'white',
      border: '3px solid #ef4444',
      borderRadius: '0.75rem',
      boxShadow: '0 10px 30px rgba(239, 68, 68, 0.3)',
      maxWidth: '500px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '1.5rem'
      }}>
        <div style={{
          fontSize: '4rem',
          marginBottom: '1rem'
        }}>{question.icon}</div>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 700,
          color: '#dc2626',
          fontFamily: "'Nunito', sans-serif",
          lineHeight: '1.6'
        }}>
          {question.popupText}
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        {question.userActions.map((action) => (
          <button
            key={action}
            onClick={() => handleAction(action)}
            style={{
              background: action.includes('Yes') || action.includes('Click') || action.includes('Install') || action.includes('Call') ? '#ef4444' : '#10b981',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );

  // Form Input
  const renderFormInput = () => (
    <div style={{
      background: 'white',
      border: '2px solid #e5e7eb',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
      maxWidth: '500px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <p style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#374151',
          marginBottom: '1rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          {question.popupText}
        </p>
        <input
          type="text"
          placeholder="Enter information here..."
          disabled
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '2px solid #d1d5db',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontFamily: "'Nunito', sans-serif",
            background: '#f9fafb'
          }}
        />
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'flex-end',
        flexWrap: 'wrap'
      }}>
        {question.userActions.map((action) => (
          <button
            key={action}
            onClick={() => handleAction(action)}
            style={{
              background: action.includes('Close') || action.includes('Skip') || action.includes('Ask') ? '#10b981' : '#3b82f6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );

  // Chat Message
  const renderChatMessage = () => (
    <div style={{
      background: '#1f2937',
      border: '2px solid #374151',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      maxWidth: '500px',
      margin: '0 auto',
      padding: '1.5rem'
    }}>
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <p style={{
          fontSize: '0.875rem',
          color: '#9ca3af',
          marginBottom: '0.5rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          {question.websiteName}
        </p>
        <div style={{
          background: '#374151',
          padding: '1rem',
          borderRadius: '0.75rem',
          border: '1px solid #4b5563'
        }}>
          <p style={{
            fontSize: '1rem',
            color: '#f3f4f6',
            fontFamily: "'Nunito', sans-serif",
            lineHeight: '1.6'
          }}>
            {question.popupText}
          </p>
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        {question.userActions.map((action) => (
          <button
            key={action}
            onClick={() => handleAction(action)}
            style={{
              background: action.includes('Don\'t') || action.includes('Refuse') || action.includes('Block') ? '#10b981' : '#ef4444',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );

  // Webpage Content
  const renderWebpageContent = () => (
    <div style={{
      background: 'white',
      border: '3px solid #6b7280',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      maxWidth: '550px',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      {/* Browser Bar */}
      <div style={{
        background: '#f3f4f6',
        padding: '0.75rem 1rem',
        borderBottom: '2px solid #d1d5db',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <div style={{
          display: 'flex',
          gap: '0.25rem'
        }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></div>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></div>
        </div>
        <div style={{
          flex: 1,
          background: 'white',
          padding: '0.25rem 0.75rem',
          borderRadius: '0.25rem',
          fontSize: '0.75rem',
          color: '#6b7280',
          fontFamily: "'Nunito', sans-serif"
        }}>
          {question.websiteName}
        </div>
      </div>

      {/* Page Content */}
      <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, #fee2e2 0%, #fef3c7 50%, #dbeafe 100%)',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 600,
          color: '#374151',
          textAlign: 'center',
          fontFamily: "'Nunito', sans-serif",
          lineHeight: '1.6'
        }}>
          {question.popupText}
        </p>
      </div>

      {/* Actions */}
      <div style={{
        background: '#f9fafb',
        padding: '1.5rem',
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        {question.userActions.map((action) => (
          <button
            key={action}
            onClick={() => handleAction(action)}
            style={{
              background: action.includes('Close') ? '#10b981' : '#6b7280',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );

  // Tracking Request
  const renderTrackingRequest = () => (
    <div style={{
      background: 'white',
      border: '2px solid #8b5cf6',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(139, 92, 246, 0.2)',
      maxWidth: '500px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '1.5rem'
      }}>
        <div style={{
          fontSize: '3rem',
          marginBottom: '1rem'
        }}>🍪</div>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 700,
          color: '#374151',
          marginBottom: '0.75rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          {question.websiteName}
        </p>
        <p style={{
          fontSize: '0.95rem',
          color: '#6b7280',
          fontFamily: "'Nunito', sans-serif",
          lineHeight: '1.6'
        }}>
          {question.popupText}
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        {question.userActions.map((action) => (
          <button
            key={action}
            onClick={() => handleAction(action)}
            style={{
              background: action.includes('Reject') ? '#10b981' : '#8b5cf6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );

  if (!showFeedback) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        background: '#faf9f6'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '900px'
        }}>
          {/* Progress */}
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <div style={{
              fontSize: '1.125rem',
              fontWeight: 700,
              color: '#3b82f6',
              marginBottom: '0.5rem',
              fontFamily: "'Nunito', sans-serif"
            }}>
              Practice Scenario {correctCount + 1}
            </div>
            <div style={{
              fontSize: '0.875rem',
              color: '#6b7280',
              fontFamily: "'Nunito', sans-serif"
            }}>
              Correct Answers: {correctCount} / 10
            </div>

            {/* Progress Bar */}
            <div style={{
              width: '100%',
              maxWidth: '400px',
              height: '8px',
              background: '#e5e7eb',
              borderRadius: '9999px',
              margin: '1rem auto 0',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${(correctCount / 10) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #10b981 0%, #3b82f6 100%)',
                borderRadius: '9999px',
                transition: 'width 0.5s ease'
              }}></div>
            </div>
          </div>

          {/* Instruction */}
          <p style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#FF6B35',
            textAlign: 'center',
            marginBottom: '2.5rem',
            fontFamily: "'Nunito', sans-serif"
          }}>
            What will you do?
          </p>

          {/* Render the popup */}
          {renderPopup()}

          {/* Back to Missions Button */}
          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <button
              onClick={onBackToMissions}
              style={{
                background: '#6b7280',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '0.75rem 2rem',
                borderRadius: '2rem',
                border: '2px solid #4b5563',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(107, 114, 128, 0.3)',
                fontFamily: "'Nunito', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4b5563';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(107, 114, 128, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#6b7280';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(107, 114, 128, 0.3)';
              }}
            >
              ← Back to Missions
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Feedback Screen
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1.5rem',
      background: '#faf9f6'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        background: 'white',
        borderRadius: '2rem',
        padding: '3rem 2.5rem',
        border: '3px solid #e5e7eb',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)'
      }}>
        {/* Result Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{
            fontSize: '0.875rem',
            color: '#6b7280',
            marginBottom: '1rem',
            fontFamily: "'Nunito', sans-serif"
          }}>
            Correct Answers: {correctCount} / 10
          </div>

          <div style={{
            marginBottom: '1.5rem'
          }}>
            <img
              src={isCorrect ? '/Happy.png' : notQuiteImage}
              alt={isCorrect ? 'Happy' : 'Not Quite'}
              style={{
                width: '180px',
                height: 'auto',
                margin: '0 auto',
                display: 'block'
              }}
            />
          </div>

          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 900,
            color: isCorrect ? '#10b981' : '#f59e0b',
            marginBottom: '1rem',
            fontFamily: "'Nunito', sans-serif"
          }}>
            {isCorrect ? 'Perfect Choice!' : 'Not Quite!'}
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 600
          }}>
            {isCorrect ? `You made the safe choice: "${selectedAction}"` : `The safe choice was: "${question.correctAction}"`}
          </p>
        </div>

        {/* Power Used */}
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
            textAlign: 'center'
          }}>
            {isCorrect ? '✅ ' : ''}You {isCorrect ? 'used' : 'should have used'}: <strong>{question.correctPower}</strong>
          </p>
        </div>

        {/* Explanation */}
        <div style={{
          background: isCorrect
            ? 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)'
            : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '2rem',
          border: `3px solid ${isCorrect ? '#10b981' : '#fbbf24'}`
        }}>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: isCorrect ? '#065f46' : '#92400e',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 600
          }}>
            {question.explanation}
          </p>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={onNext}
            style={{
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FEC601 100%)',
              color: 'white',
              fontWeight: 900,
              fontSize: '1.125rem',
              padding: '1rem 3rem',
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
            {correctCount >= 10 ? 'Complete Training →' : 'Next Scenario →'}
          </button>

          <button
            onClick={onBackToMissions}
            style={{
              background: 'white',
              color: '#6b7280',
              fontWeight: 700,
              fontSize: '0.95rem',
              padding: '0.75rem 2rem',
              borderRadius: '2rem',
              border: '2px solid #d1d5db',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              fontFamily: "'Nunito', sans-serif"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f9fafb';
              e.currentTarget.style.borderColor = '#9ca3af';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            ← Back to Missions
          </button>
        </div>
      </div>
    </div>
  );
}
