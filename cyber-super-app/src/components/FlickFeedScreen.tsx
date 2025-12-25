import { useState, useEffect, useRef } from "react";

interface FlickFeedScreenProps {
  onBack: () => void;
  onShowParents?: () => void;
}

export default function FlickFeedScreen({ onBack, onShowParents }: FlickFeedScreenProps) {
  const [notificationCount, setNotificationCount] = useState(1);
  const [mode] = useState<"normal" | "controlled">("normal");
  const [currentTrapIndex, setCurrentTrapIndex] = useState(0);
  const [showGroomPower, setShowGroomPower] = useState(false);
  const [showMenuTap, setShowMenuTap] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  const traps = [
    {
      title: "🌀 Trap 1: There's always something new to watch",
      description: "The app keeps showing more and more stuff, so it's hard to stop."
    },
    {
      title: "🔔 Trap 2: Notifications keep calling you back",
      description: "The app sends alerts to make you open it again and again."
    },
    {
      title: "▶️ Trap 3: Videos play by themselves",
      description: "New videos start without asking you if you want to watch."
    },
    {
      title: "⬇️ Trap 4: Scrolling never really ends",
      description: "You don't reach a clear \"stop\" point when you scroll."
    },
    {
      title: "❤️ Trap 5: Likes make you keep checking",
      description: "Numbers and likes make you want to come back and look again."
    }
  ];

  // Simulate growing notifications
  useEffect(() => {
    if (mode === "normal") {
      const timer1 = setTimeout(() => setNotificationCount(3), 3000);
      const timer2 = setTimeout(() => setNotificationCount(7), 6000);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [mode]);

  // Auto-scroll the feed
  useEffect(() => {
    if (mode === "normal" && feedRef.current) {
      const scrollInterval = setInterval(() => {
        if (feedRef.current) {
          const maxScroll = feedRef.current.scrollHeight - feedRef.current.clientHeight;
          const currentScroll = feedRef.current.scrollTop;

          // Scroll down at slower speed
          if (currentScroll < maxScroll) {
            feedRef.current.scrollTop += 1; // Scroll 1px at a time
          } else {
            // Reset to top when reaching bottom to create endless loop
            feedRef.current.scrollTop = 0;
          }
        }
      }, 20); // Every 20ms

      return () => clearInterval(scrollInterval);
    }
  }, [mode]);

  // Animation for menu tap and settings reveal
  useEffect(() => {
    if (showGroomPower) {
      // Reset animation states
      setShowMenuTap(false);
      setShowSettingsMenu(false);

      // Start the animation sequence
      const tapTimer = setTimeout(() => {
        setShowMenuTap(true);
      }, 1000);

      const menuTimer = setTimeout(() => {
        setShowMenuTap(false);
        setShowSettingsMenu(true);
      }, 2000);

      const hideMenuTimer = setTimeout(() => {
        setShowSettingsMenu(false);
      }, 5000);

      const repeatTimer = setInterval(() => {
        setShowMenuTap(false);
        setShowSettingsMenu(false);

        setTimeout(() => setShowMenuTap(true), 1000);
        setTimeout(() => {
          setShowMenuTap(false);
          setShowSettingsMenu(true);
        }, 2000);
        setTimeout(() => setShowSettingsMenu(false), 5000);
      }, 6000);

      return () => {
        clearTimeout(tapTimer);
        clearTimeout(menuTimer);
        clearTimeout(hideMenuTimer);
        clearInterval(repeatTimer);
      };
    } else {
      setShowMenuTap(false);
      setShowSettingsMenu(false);
    }
  }, [showGroomPower]);

  const mockPosts = [
    {
      id: 1,
      user: "Alex Chen",
      avatar: "🎮",
      content: "Just beat the final level! 🎉",
      image: "https://picsum.photos/seed/gaming1/400/300",
      likes: 234,
      comments: 45,
    },
    {
      id: 2,
      user: "Emma Rodriguez",
      avatar: "🎨",
      content: "Check out my new drawing!",
      image: "https://picsum.photos/seed/art2/400/300",
      likes: 567,
      comments: 89,
    },
    {
      id: 3,
      user: "Jordan Miller",
      avatar: "🐶",
      content: "My puppy learned a new trick today!",
      image: "https://picsum.photos/seed/puppy3/400/300",
      likes: 891,
      comments: 134,
    },
    {
      id: 4,
      user: "Taylor Smith",
      avatar: "🎵",
      content: "New song dropping tomorrow! Can't wait to share it",
      image: "https://picsum.photos/seed/music4/400/300",
      likes: 1234,
      comments: 267,
    },
    {
      id: 5,
      user: "Maya Patel",
      avatar: "🍕",
      content: "Made pizza from scratch! It was amazing!",
      image: "https://picsum.photos/seed/food5/400/300",
      likes: 456,
      comments: 78,
    },
    {
      id: 6,
      user: "Liam Johnson",
      avatar: "📚",
      content: "Just finished the best book ever! Highly recommend.",
      image: "https://picsum.photos/seed/books6/400/300",
      likes: 342,
      comments: 56,
    },
    {
      id: 7,
      user: "Sofia Garcia",
      avatar: "⚽",
      content: "Scored the winning goal today! Team effort!",
      image: "https://picsum.photos/seed/sports7/400/300",
      likes: 689,
      comments: 123,
    },
    {
      id: 8,
      user: "Noah Williams",
      avatar: "🌳",
      content: "Beautiful sunset at the park today",
      image: "https://picsum.photos/seed/nature8/400/300",
      likes: 543,
      comments: 67,
    },
    {
      id: 9,
      user: "Olivia Davis",
      avatar: "💻",
      content: "Built my first website! So proud of myself!",
      image: "https://picsum.photos/seed/tech9/400/300",
      likes: 789,
      comments: 145,
    },
    {
      id: 10,
      user: "Ethan Brown",
      avatar: "💃",
      content: "New dance routine ready for the show!",
      image: "https://picsum.photos/seed/dance10/400/300",
      likes: 923,
      comments: 189,
    },
    {
      id: 11,
      user: "Ava Martinez",
      avatar: "🛹",
      content: "Landed my first kickflip! Finally!",
      image: "https://picsum.photos/seed/skate11/400/300",
      likes: 678,
      comments: 92,
    },
    {
      id: 12,
      user: "Isabella Lee",
      avatar: "🧁",
      content: "Homemade cupcakes turned out perfect!",
      image: "https://picsum.photos/seed/baking12/400/300",
      likes: 445,
      comments: 71,
    },
    {
      id: 13,
      user: "Lucas Anderson",
      avatar: "🚀",
      content: "Just watched the most amazing documentary about Mars!",
      image: "https://picsum.photos/seed/space13/400/300",
      likes: 521,
      comments: 83,
    },
    {
      id: 14,
      user: "Mia Thomas",
      avatar: "🧘",
      content: "Morning yoga session complete. Feeling great!",
      image: "https://picsum.photos/seed/yoga14/400/300",
      likes: 389,
      comments: 54,
    },
    {
      id: 15,
      user: "Ryan Wilson",
      avatar: "📷",
      content: "Caught the perfect golden hour shot today",
      image: "https://picsum.photos/seed/photo15/400/300",
      likes: 812,
      comments: 156,
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9fafb',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1rem',
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
        display: 'grid',
        gridTemplateColumns: '300px 375px 300px',
        gridTemplateRows: '667px',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1400px'
      }}>
        {/* Left: Yellow Text Explanation */}
        <div style={{
          background: '#fef3c7',
          borderRadius: '1rem',
          padding: '1.5rem',
          border: '3px solid #fbbf24',
          boxShadow: '0 4px 12px rgba(251, 191, 36, 0.2)',
          alignSelf: 'center'
        }}>
          {!showGroomPower ? (
            <>
              <p style={{
                fontSize: '1.125rem',
                color: '#92400e',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                margin: 0,
                lineHeight: '1.6',
                marginBottom: '0.75rem'
              }}>
                This is what the app looks like before you customize it
              </p>
              <p style={{
                fontSize: '0.95rem',
                color: '#92400e',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                margin: 0,
                lineHeight: '1.5'
              }}>
                Watch how the app keeps pulling your attention with notifications and endless scrolling.
              </p>
            </>
          ) : (
            <>
              <p style={{
                fontSize: '1.125rem',
                color: '#92400e',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                margin: 0,
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Power comes from knowing where to look.
              </p>
              <p style={{
                fontSize: '0.95rem',
                color: '#92400e',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                margin: 0,
                lineHeight: '1.6'
              }}>
                Apps don't hide controls by accident.
                They just don't make them loud.
              </p>
            </>
          )}
        </div>

        {/* Center: iPhone Frame */}
        <div style={{
          width: '375px',
          height: '667px',
          background: '#1f2937',
          borderRadius: '3rem',
          padding: '1rem',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          position: 'relative'
        }}>
        {/* Notch */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '150px',
          height: '25px',
          background: '#1f2937',
          borderRadius: '0 0 1rem 1rem',
          zIndex: 10
        }} />

        {/* iPhone Screen */}
        <div style={{
          width: '100%',
          height: '100%',
          background: '#f3f4f6',
          borderRadius: '2.5rem',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          {/* FlickFeed Header */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '1rem 1.5rem',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <h1 style={{
              fontSize: '1.25rem',
              fontWeight: 900,
              color: 'white',
              fontFamily: "'Nunito', sans-serif",
              margin: 0
            }}>
              FlickFeed
            </h1>

            {/* Menu and Notification Icons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              {/* Menu Icon */}
              <div style={{
                position: 'relative',
                cursor: 'pointer',
                fontSize: '1.25rem',
                color: 'white'
              }}>
                ☰
                {/* Tap Animation */}
                {showMenuTap && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.3)',
                    animation: 'tap-ripple 0.6s ease-out',
                    pointerEvents: 'none'
                  }} />
                )}
              </div>

              {/* Notification Bell */}
              <div style={{
                position: 'relative',
                cursor: 'pointer'
              }}>
                <div style={{
                  fontSize: '1.25rem'
                }}>🔔</div>
                {notificationCount > 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    background: '#ef4444',
                    color: 'white',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    fontFamily: "'Nunito', sans-serif",
                    animation: notificationCount > 1 ? 'pulse 1s infinite' : 'none'
                  }}>
                    {notificationCount}
                  </div>
                )}
              </div>
            </div>

            {/* Settings Dropdown Menu */}
            {showSettingsMenu && (
              <div style={{
                position: 'absolute',
                top: '60px',
                right: '10px',
                background: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                padding: '0.75rem',
                minWidth: '200px',
                zIndex: 100,
                animation: 'slideDown 0.3s ease-out'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    background: '#f3f4f6',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}>
                    <p style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      fontFamily: "'Nunito', sans-serif",
                      margin: 0
                    }}>⚙️ Settings</p>
                  </div>
                  <div style={{
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}>
                    <p style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      fontFamily: "'Nunito', sans-serif",
                      margin: 0
                    }}>🔔 Notifications</p>
                  </div>
                  <div style={{
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}>
                    <p style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      fontFamily: "'Nunito', sans-serif",
                      margin: 0
                    }}>👤 Privacy</p>
                  </div>
                  <div style={{
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}>
                    <p style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      fontFamily: "'Nunito', sans-serif",
                      margin: 0
                    }}>⏰ Screen Time</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Feed Container - Scrollable */}
          <div
            ref={feedRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '0.75rem',
              paddingBottom: '5rem'
            }}>
            {mockPosts.map((post) => (
              <div key={post.id} style={{
                background: 'white',
                borderRadius: '0.75rem',
                padding: '1rem',
                marginBottom: '0.75rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                {/* User Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    fontSize: '1.5rem'
                  }}>
                    {post.avatar}
                  </div>
                  <div>
                    <p style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: '#1f2937',
                      fontFamily: "'Nunito', sans-serif",
                      margin: 0
                    }}>
                      {post.user}
                    </p>
                    <p style={{
                      fontSize: '0.65rem',
                      color: '#6b7280',
                      fontFamily: "'Nunito', sans-serif",
                      margin: 0
                    }}>
                      2 hours ago
                    </p>
                  </div>
                </div>

                {/* Content */}
                <p style={{
                  fontSize: '0.875rem',
                  color: '#374151',
                  fontFamily: "'Nunito', sans-serif",
                  marginBottom: '0.75rem',
                  lineHeight: '1.4'
                }}>
                  {post.content}
                </p>

                {/* Image */}
                <div style={{
                  borderRadius: '0.5rem',
                  height: '200px',
                  marginBottom: '0.75rem',
                  overflow: 'hidden'
                }}>
                  <img
                    src={post.image}
                    alt={post.content}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Actions */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid #e5e7eb'
                }}>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <button style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'none',
                      border: 'none',
                      color: '#6b7280',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      fontFamily: "'Nunito', sans-serif",
                      cursor: 'pointer',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                    >
                      ❤️ {post.likes}
                    </button>
                    <button style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'none',
                      border: 'none',
                      color: '#6b7280',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      fontFamily: "'Nunito', sans-serif",
                      cursor: 'pointer',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                    >
                      💬 {post.comments}
                    </button>
                  </div>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'none',
                    border: 'none',
                    color: '#6b7280',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    fontFamily: "'Nunito', sans-serif",
                    cursor: 'pointer',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                  >
                    📤 Share
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Navigation Bar */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'white',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '0.75rem 0',
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Chat */}
            <button style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              color: '#6b7280',
              position: 'relative'
            }}>
              <div style={{ fontSize: '1.5rem' }}>💬</div>
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                fontFamily: "'Nunito', sans-serif"
              }}>Chat</span>
              <div style={{
                position: 'absolute',
                top: '-2px',
                right: '8px',
                background: '#ef4444',
                color: 'white',
                borderRadius: '50%',
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.6rem',
                fontWeight: 700,
                fontFamily: "'Nunito', sans-serif"
              }}>7</div>
            </button>

            {/* Nearby */}
            <button style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              color: '#6b7280'
            }}>
              <div style={{ fontSize: '1.5rem' }}>📍</div>
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                fontFamily: "'Nunito', sans-serif"
              }}>Nearby</span>
            </button>

            {/* Post/Create Button */}
            <button style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              cursor: 'pointer',
              padding: '0.75rem',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
              transform: 'translateY(-10px)',
              color: 'white'
            }}>
              <div style={{ fontSize: '1.75rem' }}>📷</div>
            </button>

            {/* Friends */}
            <button style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              color: '#6b7280',
              position: 'relative'
            }}>
              <div style={{ fontSize: '1.5rem' }}>👥</div>
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                fontFamily: "'Nunito', sans-serif"
              }}>Friends</span>
              <div style={{
                position: 'absolute',
                top: '-2px',
                right: '8px',
                background: '#ef4444',
                color: 'white',
                borderRadius: '50%',
                width: '14px',
                height: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.6rem',
                fontWeight: 700,
                fontFamily: "'Nunito', sans-serif"
              }}>3</div>
            </button>

            {/* Profile */}
            <button style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              color: '#6b7280'
            }}>
              <div style={{ fontSize: '1.5rem' }}>👤</div>
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                fontFamily: "'Nunito', sans-serif"
              }}>Profile</span>
            </button>
          </div>
        </div>
        </div>

        {/* Right: Trap Text with Navigation OR Settings Info */}
        <div style={{
          background: showGroomPower ? '#d1fae5' : '#fee2e2',
          borderRadius: '1rem',
          padding: '1.5rem',
          border: showGroomPower ? '3px solid #10b981' : '3px solid #ef4444',
          boxShadow: showGroomPower ? '0 4px 12px rgba(16, 185, 129, 0.2)' : '0 4px 12px rgba(239, 68, 68, 0.2)',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {!showGroomPower ? (
            <>
              <div>
                <p style={{
                  fontSize: '1.125rem',
                  color: '#991b1b',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  margin: 0,
                  marginBottom: '0.5rem',
                  lineHeight: '1.6'
                }}>
                  {traps[currentTrapIndex].title}
                </p>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#991b1b',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {traps[currentTrapIndex].description}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <button
                  onClick={() => setCurrentTrapIndex((prev) => (prev - 1 + traps.length) % traps.length)}
                  style={{
                    background: '#dc2626',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: "'Nunito', sans-serif",
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#b91c1c';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#dc2626';
                  }}
                >
                  ← Prev
                </button>

                <span style={{
                  fontSize: '0.75rem',
                  color: '#991b1b',
                  fontWeight: 600,
                  fontFamily: "'Nunito', sans-serif"
                }}>
                  {currentTrapIndex + 1} / {traps.length}
                </span>

                <button
                  onClick={() => setCurrentTrapIndex((prev) => (prev + 1) % traps.length)}
                  style={{
                    background: '#dc2626',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: "'Nunito', sans-serif",
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#b91c1c';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#dc2626';
                  }}
                >
                  Next →
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Settings Information */}
              <div>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#065f46',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: '1.6',
                  marginBottom: '0.75rem'
                }}>
                  The most important controls in an app
                  are rarely on the main screen.
                </p>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#065f46',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: '1.6',
                  marginBottom: '0.75rem'
                }}>
                  They're tucked away in menus and settings.
                </p>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#065f46',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  App Heroes explore, find those controls,
                  and use them to take charge.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Back Button and Groom Your Power Button */}
      <div style={{
        marginTop: '3rem',
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
          ← Back to App Trap
        </button>

        <button
          onClick={() => setShowGroomPower(!showGroomPower)}
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
            fontFamily: "'Nunito', sans-serif"
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
          {showGroomPower ? 'See the App Trap' : 'Groom Your Power'}
        </button>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.9;
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(10px);
            }
          }

          @keyframes tap-ripple {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.8;
            }
            100% {
              transform: translate(-50%, -50%) scale(2);
              opacity: 0;
            }
          }

          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
