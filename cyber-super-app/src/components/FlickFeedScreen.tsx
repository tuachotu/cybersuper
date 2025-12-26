import { useState, useEffect, useRef } from "react";

interface FlickFeedScreenProps {
  onBack: () => void;
  onShowParents?: () => void;
  viewMode?: 'traps' | 'missions'; // 'traps' for See the App Trap, 'missions' for Practice Taking Control
}

interface NotificationPopup {
  id: number;
  message: string;
  timestamp: number;
}

export default function FlickFeedScreen({ onBack, onShowParents, viewMode = 'traps' }: FlickFeedScreenProps) {
  const [notificationCount, setNotificationCount] = useState(1);
  const [mode] = useState<"normal" | "controlled">("normal");
  const [currentTrapIndex, setCurrentTrapIndex] = useState(0);
  const [currentScenario, setCurrentScenario] = useState(0); // 0 = Start, 1-3 = Missions, 4 = Accomplished
  const [showGroomPower, setShowGroomPower] = useState(false);
  const [showMenuTap, setShowMenuTap] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);
  const [notificationPopups, setNotificationPopups] = useState<NotificationPopup[]>([]);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [showSettingsSubmenu, setShowSettingsSubmenu] = useState(false);
  const [showNotificationSubmenu, setShowNotificationSubmenu] = useState(false);
  const [mission1Complete, setMission1Complete] = useState(false);
  const [showPrivacySubmenu, setShowPrivacySubmenu] = useState(false);
  const [showLocationSubmenu, setShowLocationSubmenu] = useState(false);
  const [mission2Complete, setMission2Complete] = useState(false);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showMessagesSubmenu, setShowMessagesSubmenu] = useState(false);
  const [mission3Complete, setMission3Complete] = useState(false);
  const [showFriendRequestPopup, setShowFriendRequestPopup] = useState(false);
  const [currentFriendRequestIndex, setCurrentFriendRequestIndex] = useState(0);

  const totalScenarios = 3;

  const friendRequests = [
    { name: "Alex Thompson", avatar: "👤", mutualFriends: 0 },
    { name: "Jessica Miller", avatar: "👤", mutualFriends: 1 },
    { name: "Brandon Lee", avatar: "👤", mutualFriends: 0 },
    { name: "Sarah Johnson", avatar: "👤", mutualFriends: 0 },
    { name: "Michael Chen", avatar: "👤", mutualFriends: 2 },
    { name: "Ashley Davis", avatar: "👤", mutualFriends: 0 },
  ];

  const handleTurnOffNotifications = () => {
    setNotificationPopups([]);
    setShowNotificationSubmenu(false);
    setShowSettingsSubmenu(false);
    setShowMainMenu(false);
    setMission1Complete(true);
  };

  const handleTurnOffLocation = () => {
    setShowLocationPopup(false);
    setShowLocationSubmenu(false);
    setShowPrivacySubmenu(false);
    setShowSettingsSubmenu(false);
    setShowMainMenu(false);
    setMission2Complete(true);
  };

  const handleRestrictMessagesToFriends = () => {
    setShowFriendRequestPopup(false);
    setShowMessagesSubmenu(false);
    setShowPrivacySubmenu(false);
    setShowSettingsSubmenu(false);
    setShowMainMenu(false);
    setMission3Complete(true);
  };

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

  // Notification messages for Mission 1
  const notificationMessages = [
    "New like on your post!",
    "Emma started following you",
    "Jordan commented on your photo",
    "You have 5 new friend requests",
    "Taylor mentioned you in a comment",
    "Your story has 12 views",
    "Maya shared your post",
    "Trending: Check out what's new!",
    "You're missing out! Come back!",
    "3 people liked your comment",
    "Someone sent you a message",
    "Your friend just posted",
    "New video you might like",
    "Daily streak: Don't lose it!",
    "Limited time offer inside!"
  ];

  // Simulate growing notifications - continuous popups during Mission 1 (only in missions mode)
  useEffect(() => {
    if (viewMode === 'missions' && currentScenario === 1 && !mission1Complete && !showMainMenu) {
      // For Mission 1: Show notification popups continuously (stop when menu is open)
      const interval = setInterval(() => {
        const randomMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];
        const newPopup: NotificationPopup = {
          id: Date.now(),
          message: randomMessage,
          timestamp: Date.now()
        };

        setNotificationPopups(prev => [...prev, newPopup]);
        setNotificationCount(prev => prev + 1);

        // Remove popup after 3 seconds
        setTimeout(() => {
          setNotificationPopups(prev => prev.filter(p => p.id !== newPopup.id));
        }, 3000);
      }, 2000); // New popup every 2 seconds

      return () => clearInterval(interval);
    } else if (mode === "normal") {
      const timer1 = setTimeout(() => setNotificationCount(3), 3000);
      const timer2 = setTimeout(() => setNotificationCount(7), 6000);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [mode, currentScenario, mission1Complete, showMainMenu, viewMode]);

  // Show location popup during Mission 2 (only in missions mode)
  useEffect(() => {
    if (viewMode === 'missions' && currentScenario === 2 && !mission2Complete && !showMainMenu) {
      // Show popup every 5 seconds
      const timer = setTimeout(() => {
        setShowLocationPopup(true);
      }, 1000);

      const interval = setInterval(() => {
        setShowLocationPopup(true);
        // Hide after 4 seconds
        setTimeout(() => setShowLocationPopup(false), 4000);
      }, 8000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [currentScenario, mission2Complete, showMainMenu, viewMode]);

  // Show friend request popups during Mission 3 (only in missions mode)
  useEffect(() => {
    if (viewMode === 'missions' && currentScenario === 3 && !mission3Complete && !showMainMenu) {
      // Show first popup after 1 second
      const timer = setTimeout(() => {
        setShowFriendRequestPopup(true);
        setCurrentFriendRequestIndex(0);
      }, 1000);

      // Cycle through friend requests
      const interval = setInterval(() => {
        setCurrentFriendRequestIndex(prev => (prev + 1) % friendRequests.length);
        setShowFriendRequestPopup(true);
        // Hide after 4 seconds
        setTimeout(() => setShowFriendRequestPopup(false), 4000);
      }, 7000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [currentScenario, mission3Complete, showMainMenu, viewMode]);

  // Reset mission states when changing scenarios
  useEffect(() => {
    if (currentScenario !== 1) {
      setMission1Complete(false);
      setShowMainMenu(false);
      setShowSettingsSubmenu(false);
      setShowNotificationSubmenu(false);
    }
    if (currentScenario !== 2) {
      setMission2Complete(false);
      setShowPrivacySubmenu(false);
      setShowLocationSubmenu(false);
      setShowLocationPopup(false);
    }
    if (currentScenario !== 3) {
      setMission3Complete(false);
      setShowMessagesSubmenu(false);
      setShowFriendRequestPopup(false);
    }
  }, [currentScenario]);

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

  // Auto-open menu in Groom Your Power mode
  useEffect(() => {
    if (showGroomPower) {
      // Open the main menu when entering Groom Your Power mode
      setShowMainMenu(true);
    } else {
      // Close the menu when exiting Groom Your Power mode
      setShowMainMenu(false);
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
      position: 'relative',
      width: '100%'
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

      {/* Missions Mode: Title and Side Panels */}
      {viewMode === 'missions' && (
        <>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 900,
            color: '#3b82f6',
            marginBottom: '2rem',
            fontFamily: "'Nunito', sans-serif",
            textAlign: 'center'
          }}>
            The Control Lab Missions
          </h1>
        </>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: '300px 375px 300px',
        gridTemplateRows: 'auto',
        justifyContent: 'center',
        alignItems: 'start',
        gap: '2rem',
        width: '100%',
        maxWidth: '1400px'
      }}>
        {/* Left Panel: Changes based on mode */}
        {viewMode === 'missions' ? (
          /* Missions Mode: Yellow Text Explanation */
          <div style={{
            background: '#fef3c7',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '3px solid #fbbf24',
            boxShadow: '0 4px 12px rgba(251, 191, 36, 0.2)',
            alignSelf: 'center'
          }}>
            <p style={{
              fontSize: '1.125rem',
              color: '#92400e',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              margin: 0,
              lineHeight: '1.6',
              textAlign: 'center'
            }}>
              Your goal is to modify FlickFeed app's settings so that it is less disruptive
            </p>
          </div>
        ) : (
          /* Traps Mode: Changes based on showGroomPower */
          <div style={{
            background: '#fef3c7',
            borderRadius: '1rem',
            padding: '2rem 1.5rem',
            border: '3px solid #fbbf24',
            boxShadow: '0 4px 12px rgba(251, 191, 36, 0.2)',
            alignSelf: 'center',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {showGroomPower ? (
              /* Groom Your Power View */
              <>
                <p style={{
                  fontSize: '1.125rem',
                  color: '#92400e',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: '1.6',
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}>
                  Power comes from knowing where to look.
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: '#92400e',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: '1.6',
                  textAlign: 'center'
                }}>
                  Apps don't hide controls by accident. They just don't make them loud.
                </p>
              </>
            ) : (
              /* See the App Trap View */
              <>
                <p style={{
                  fontSize: '1.125rem',
                  color: '#92400e',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: '1.6',
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}>
                  This is what the app looks like before you customize it
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: '#92400e',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: '1.6',
                  textAlign: 'center'
                }}>
                  Watch how the app keeps pulling your attention with notifications and endless scrolling.
                </p>
              </>
            )}
          </div>
        )}

        {/* Center: iPhone Frame - Shows in both modes */}
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
          {/* Notification Popups */}
          {notificationPopups.map((popup, index) => (
            <div
              key={popup.id}
              style={{
                position: 'absolute',
                top: `${60 + (index * 10)}px`,
                left: '10px',
                right: '10px',
                background: 'white',
                borderRadius: '1rem',
                padding: '0.75rem 1rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                animation: 'slideInDown 0.3s ease-out, fadeOut 0.5s ease-in 2.5s',
                border: '2px solid #667eea'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '0.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                flexShrink: 0
              }}>
                🔔
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#1f2937',
                  fontFamily: "'Nunito', sans-serif",
                  margin: 0,
                  marginBottom: '0.125rem'
                }}>
                  FlickFeed
                </p>
                <p style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: '#4b5563',
                  fontFamily: "'Nunito', sans-serif",
                  margin: 0,
                  lineHeight: '1.2'
                }}>
                  {popup.message}
                </p>
              </div>
            </div>
          ))}

          {/* Location Popup for Mission 2 */}
          {showLocationPopup && currentScenario === 2 && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '85%',
              background: 'white',
              borderRadius: '1.25rem',
              padding: '1.5rem',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.4)',
              zIndex: 1000,
              animation: 'popIn 0.3s ease-out',
              border: '3px solid #f97316'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  lineHeight: 1
                }}>📍</div>
                <p style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  color: '#1f2937',
                  fontFamily: "'Nunito', sans-serif",
                  margin: 0,
                  textAlign: 'center'
                }}>
                  5 friends visited this restaurant last week
                </p>
                <p style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#4b5563',
                  fontFamily: "'Nunito', sans-serif",
                  margin: 0,
                  textAlign: 'center',
                  lineHeight: '1.4'
                }}>
                  See what they ordered, chat with them now!
                </p>
                <button
                  onClick={() => setShowLocationPopup(false)}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: "'Nunito', sans-serif",
                    marginTop: '0.5rem'
                  }}>
                  View Now
                </button>
              </div>
            </div>
          )}

          {/* Friend Request Popup for Mission 3 */}
          {showFriendRequestPopup && currentScenario === 3 && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '85%',
              background: 'white',
              borderRadius: '1.25rem',
              padding: '1.5rem',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.4)',
              zIndex: 1000,
              animation: 'popIn 0.3s ease-out',
              border: '3px solid #3b82f6'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <div style={{
                  fontSize: '3rem',
                  lineHeight: 1
                }}>{friendRequests[currentFriendRequestIndex].avatar}</div>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: '#1f2937',
                  fontFamily: "'Nunito', sans-serif",
                  margin: 0,
                  textAlign: 'center'
                }}>
                  {friendRequests[currentFriendRequestIndex].name}
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#6b7280',
                  fontFamily: "'Nunito', sans-serif",
                  margin: 0,
                  textAlign: 'center'
                }}>
                  {friendRequests[currentFriendRequestIndex].mutualFriends === 0
                    ? "No mutual friends"
                    : `${friendRequests[currentFriendRequestIndex].mutualFriends} mutual friend${friendRequests[currentFriendRequestIndex].mutualFriends > 1 ? 's' : ''}`}
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: '#1f2937',
                  fontFamily: "'Nunito', sans-serif",
                  margin: 0,
                  textAlign: 'center',
                  marginTop: '0.5rem'
                }}>
                  Friend Request
                </p>
                <div style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginTop: '0.5rem',
                  width: '100%'
                }}>
                  <button
                    onClick={() => setShowFriendRequestPopup(false)}
                    style={{
                      flex: 1,
                      background: '#e5e7eb',
                      color: '#1f2937',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Nunito', sans-serif"
                    }}>
                    Ignore
                  </button>
                  <button
                    onClick={() => setShowFriendRequestPopup(false)}
                    style={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Nunito', sans-serif"
                    }}>
                    Accept
                  </button>
                </div>
              </div>
            </div>
          )}

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
              <div
                onClick={() => {
                  if ((viewMode === 'missions' && (currentScenario === 1 || currentScenario === 2 || currentScenario === 3)) || (viewMode === 'traps' && showGroomPower)) {
                    setShowMainMenu(!showMainMenu);
                    // Clear existing popups when opening menu
                    if (!showMainMenu) {
                      setNotificationPopups([]);
                      setShowLocationPopup(false);
                      setShowFriendRequestPopup(false);
                    }
                  }
                }}
                style={{
                  position: 'relative',
                  cursor: ((viewMode === 'missions' && currentScenario >= 1 && currentScenario <= 3) || (viewMode === 'traps' && showGroomPower)) ? 'pointer' : 'default',
                  fontSize: '1.25rem',
                  color: 'white',
                  padding: '0.25rem'
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

            {/* Main Menu Dropdown - Tree Structure */}
            {showMainMenu && ((viewMode === 'missions' && currentScenario >= 1 && currentScenario <= 3) || (viewMode === 'traps' && showGroomPower)) && (
              <div style={{
                position: 'absolute',
                top: '60px',
                right: '10px',
                left: '10px',
                background: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                padding: '0.5rem',
                zIndex: 100,
                animation: 'slideDown 0.3s ease-out',
                maxHeight: '80vh',
                overflowY: 'auto'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem'
                }}>
                  {/* Settings */}
                  <div>
                    <div
                      onClick={() => {
                        setShowSettingsSubmenu(!showSettingsSubmenu);
                        setShowNotificationSubmenu(false);
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      style={{
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                      <p style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        fontFamily: "'Nunito', sans-serif",
                        margin: 0
                      }}>⚙️ Settings</p>
                      <span style={{ fontSize: '0.75rem' }}>{showSettingsSubmenu ? '▼' : '▶'}</span>
                    </div>

                    {/* Settings Submenu */}
                    {showSettingsSubmenu && (
                      <div style={{
                        marginLeft: '1rem',
                        paddingLeft: '0.5rem',
                        borderLeft: '2px solid #e5e7eb',
                        marginTop: '0.25rem'
                      }}>
                        {/* Notification */}
                        <div>
                          <div
                            onClick={() => setShowNotificationSubmenu(!showNotificationSubmenu)}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                            style={{
                              padding: '0.75rem',
                              borderRadius: '0.5rem',
                              cursor: 'pointer',
                              transition: 'background 0.2s',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}>
                            <p style={{
                              fontSize: '0.875rem',
                              fontWeight: 600,
                              color: '#1f2937',
                              fontFamily: "'Nunito', sans-serif",
                              margin: 0
                            }}>🔔 Notification</p>
                            <span style={{ fontSize: '0.75rem' }}>{showNotificationSubmenu ? '▼' : '▶'}</span>
                          </div>

                          {/* Notification Submenu */}
                          {showNotificationSubmenu && (
                            <div style={{
                              marginLeft: '1rem',
                              paddingLeft: '0.5rem',
                              borderLeft: '2px solid #e5e7eb',
                              marginTop: '0.25rem'
                            }}>
                              <div
                                onClick={handleTurnOffNotifications}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#fee2e2'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                style={{
                                  padding: '0.75rem',
                                  borderRadius: '0.5rem',
                                  cursor: 'pointer',
                                  transition: 'background 0.2s'
                                }}>
                                <p style={{
                                  fontSize: '0.875rem',
                                  fontWeight: 700,
                                  color: '#dc2626',
                                  fontFamily: "'Nunito', sans-serif",
                                  margin: 0
                                }}>🔕 Turn Off</p>
                              </div>
                              <div
                                onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                style={{
                                  padding: '0.75rem',
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
                                }}>⚙️ Customize</p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Privacy */}
                        <div>
                          <div
                            onClick={() => setShowPrivacySubmenu(!showPrivacySubmenu)}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                            style={{
                              padding: '0.75rem',
                              borderRadius: '0.5rem',
                              cursor: 'pointer',
                              transition: 'background 0.2s',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}>
                            <p style={{
                              fontSize: '0.875rem',
                              fontWeight: 600,
                              color: '#1f2937',
                              fontFamily: "'Nunito', sans-serif",
                              margin: 0
                            }}>👤 Privacy</p>
                            <span style={{ fontSize: '0.75rem' }}>{showPrivacySubmenu ? '▼' : '▶'}</span>
                          </div>

                          {/* Privacy Submenu */}
                          {showPrivacySubmenu && (
                            <div style={{
                              marginLeft: '1rem',
                              paddingLeft: '0.5rem',
                              borderLeft: '2px solid #e5e7eb',
                              marginTop: '0.25rem'
                            }}>
                              {/* Location */}
                              <div>
                                <div
                                  onClick={() => setShowLocationSubmenu(!showLocationSubmenu)}
                                  onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                  style={{
                                    padding: '0.75rem',
                                    borderRadius: '0.5rem',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                  }}>
                                  <p style={{
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    color: '#1f2937',
                                    fontFamily: "'Nunito', sans-serif",
                                    margin: 0
                                  }}>📍 Location</p>
                                  <span style={{ fontSize: '0.75rem' }}>{showLocationSubmenu ? '▼' : '▶'}</span>
                                </div>

                                {/* Location Submenu */}
                                {showLocationSubmenu && (
                                  <div style={{
                                    marginLeft: '1rem',
                                    paddingLeft: '0.5rem',
                                    borderLeft: '2px solid #e5e7eb',
                                    marginTop: '0.25rem'
                                  }}>
                                    <div
                                      onClick={handleTurnOffLocation}
                                      onMouseEnter={(e) => e.currentTarget.style.background = '#fee2e2'}
                                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                      style={{
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                      }}>
                                      <p style={{
                                        fontSize: '0.875rem',
                                        fontWeight: 700,
                                        color: '#dc2626',
                                        fontFamily: "'Nunito', sans-serif",
                                        margin: 0
                                      }}>🚫 Turn Off Location Tracking</p>
                                    </div>
                                    <div
                                      onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                      style={{
                                        padding: '0.75rem',
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
                                      }}>⚙️ Location Settings</p>
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* New Messages */}
                              <div>
                                <div
                                  onClick={() => setShowMessagesSubmenu(!showMessagesSubmenu)}
                                  onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                  style={{
                                    padding: '0.75rem',
                                    borderRadius: '0.5rem',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                  }}>
                                  <p style={{
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    color: '#1f2937',
                                    fontFamily: "'Nunito', sans-serif",
                                    margin: 0
                                  }}>💬 New Messages</p>
                                  <span style={{ fontSize: '0.75rem' }}>{showMessagesSubmenu ? '▼' : '▶'}</span>
                                </div>

                                {/* Messages Submenu */}
                                {showMessagesSubmenu && (
                                  <div style={{
                                    marginLeft: '1rem',
                                    paddingLeft: '0.5rem',
                                    borderLeft: '2px solid #e5e7eb',
                                    marginTop: '0.25rem'
                                  }}>
                                    <div
                                      onClick={handleRestrictMessagesToFriends}
                                      onMouseEnter={(e) => e.currentTarget.style.background = '#fee2e2'}
                                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                      style={{
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                      }}>
                                      <p style={{
                                        fontSize: '0.875rem',
                                        fontWeight: 700,
                                        color: '#dc2626',
                                        fontFamily: "'Nunito', sans-serif",
                                        margin: 0
                                      }}>👥 Allow Only Friends</p>
                                    </div>
                                    <div
                                      onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                      style={{
                                        padding: '0.75rem',
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
                                      }}>⚙️ Message Settings</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Screen Time */}
                        <div
                          onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                          style={{
                            padding: '0.75rem',
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
                    )}
                  </div>

                  {/* Profile */}
                  <div
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    style={{
                      padding: '0.75rem',
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
                    }}>👤 Profile</p>
                  </div>

                  {/* Help */}
                  <div
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    style={{
                      padding: '0.75rem',
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
                    }}>❓ Help</p>
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

        {/* Right Panel: Changes based on mode */}
        {viewMode === 'missions' ? (
          /* Missions Mode: Mission Navigation */
          <div style={{
            background: currentScenario === 4 ? '#d1fae5' : '#fee2e2',
          borderRadius: '1rem',
          padding: '1.5rem',
          border: currentScenario === 4 ? '3px solid #10b981' : '3px solid #ef4444',
          boxShadow: currentScenario === 4 ? '0 4px 12px rgba(16, 185, 129, 0.2)' : '0 4px 12px rgba(239, 68, 68, 0.2)',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          minHeight: '200px'
        }}>
          {/* Start Missions */}
          {currentScenario === 0 && (
            <>
              <p style={{
                fontSize: '1.5rem',
                color: '#991b1b',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 900,
                margin: 0,
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                Start Missions
              </p>
              <button
                onClick={() => setCurrentScenario(1)}
                style={{
                  background: '#dc2626',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Nunito', sans-serif",
                  transition: 'all 0.2s ease',
                  marginTop: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#b91c1c';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#dc2626';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Begin →
              </button>
            </>
          )}

          {/* Missions 1-3 */}
          {currentScenario >= 1 && currentScenario <= 3 && (
            <>
              <div>
                <p style={{
                  fontSize: '1.25rem',
                  color: mission1Complete && currentScenario === 1 ? '#065f46' : '#991b1b',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 800,
                  margin: 0,
                  marginBottom: '1rem',
                  lineHeight: '1.6',
                  textAlign: 'center'
                }}>
                  {currentScenario === 1 ? (mission1Complete ? '✅ Mission Complete!' : '🔔 Mission: Silence the Bell') :
                   currentScenario === 2 ? (mission2Complete ? '✅ Mission Complete!' : '🧭 Mission: Lock Your Map') :
                   currentScenario === 3 ? (mission3Complete ? '✅ Mission Complete!' : '🧱 Mission: Guard Your Gate') :
                   'Mission 3'}
                </p>
                <div style={{
                  fontSize: '0.95rem',
                  color: (mission1Complete && currentScenario === 1) || (mission2Complete && currentScenario === 2) || (mission3Complete && currentScenario === 3) ? '#065f46' : '#991b1b',
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: '1.5',
                  textAlign: 'center'
                }}>
                  {currentScenario === 1 ?
                    (mission1Complete ? (
                      <>
                        <p style={{ margin: 0, fontWeight: 800, marginBottom: '0.5rem' }}>🏅 Badge Unlocked: Calm Mode</p>
                        <p style={{ margin: 0, fontWeight: 600 }}>You now control when the app can call you. Click next to continue</p>
                      </>
                    ) :
                     'FlickFeed app is sending too many notifications. You need to silence it. How would you do that?') :
                   currentScenario === 2 ?
                    (mission2Complete ? (
                      <>
                        <p style={{ margin: 0, fontWeight: 800, marginBottom: '0.5rem' }}>🛡️ Shield Mode Activated</p>
                        <p style={{ margin: 0, fontWeight: 600 }}>Your location is now private. click next</p>
                      </>
                    ) :
                     'The app is following you and checking your location in real-time. Find the setting to disable it.') :
                   currentScenario === 3 ?
                    (mission3Complete ? (
                      <>
                        <p style={{ margin: 0, fontWeight: 800, marginBottom: '0.5rem' }}>🏅 Gate Shield Activated</p>
                        <p style={{ margin: 0, fontWeight: 600 }}>Only friends can reach you now.</p>
                      </>
                    ) :
                     'The app keeps showing friend requests from unknown people. Find the setting to allow messages only from friends.') :
                   'Content for mission 3 will go here'}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1rem'
              }}>
                <button
                  onClick={() => setCurrentScenario(prev => prev - 1)}
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
                  ← Previous
                </button>

                <span style={{
                  fontSize: '0.75rem',
                  color: '#991b1b',
                  fontWeight: 600,
                  fontFamily: "'Nunito', sans-serif"
                }}>
                  {currentScenario} / {totalScenarios}
                </span>

                <button
                  onClick={() => setCurrentScenario(prev => prev + 1)}
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
          )}

          {/* Mission Accomplished */}
          {currentScenario === 4 && (
            <>
              <p style={{
                fontSize: '1.75rem',
                color: '#065f46',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 900,
                margin: 0,
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                🎉 Mission Accomplished!
              </p>
              <p style={{
                fontSize: '1rem',
                color: '#065f46',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                margin: 0,
                lineHeight: '1.5',
                textAlign: 'center',
                marginTop: '0.5rem'
              }}>
                🎉 You Are Now an App Hero!
              </p>
              <button
                onClick={() => setCurrentScenario(0)}
                style={{
                  background: '#10b981',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Nunito', sans-serif",
                  transition: 'all 0.2s ease',
                  marginTop: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#059669';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#10b981';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                ↻ Restart Missions
              </button>
            </>
          )}
          </div>
        ) : (
          /* Traps Mode: Changes based on showGroomPower */
          showGroomPower ? (
            /* Groom Your Power View: Green Panel */
            <div style={{
              background: '#d1fae5',
              borderRadius: '1rem',
              padding: '2rem 1.5rem',
              border: '3px solid #10b981',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
              alignSelf: 'center',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <p style={{
                fontSize: '1rem',
                color: '#065f46',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                margin: 0,
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                The most important controls in an app are rarely on the main screen.
              </p>
              <p style={{
                fontSize: '1rem',
                color: '#065f46',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                margin: 0,
                lineHeight: '1.6',
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                They're tucked away in menus and settings.
              </p>
              <p style={{
                fontSize: '1rem',
                color: '#065f46',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                margin: 0,
                lineHeight: '1.6',
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                App Heroes explore, find those controls, and use them to take charge.
              </p>
            </div>
          ) : (
            /* See the App Trap View: Red Panel */
            <div style={{
              background: '#fee2e2',
              borderRadius: '1rem',
              padding: '1.5rem',
              border: '3px solid #ef4444',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)',
              alignSelf: 'center',
              minHeight: '200px'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#991b1b',
                fontFamily: "'Nunito', sans-serif",
                margin: 0,
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                App Traps
              </h3>

              {/* Current Trap Display */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#991b1b',
                  fontFamily: "'Nunito', sans-serif",
                  margin: 0,
                  textAlign: 'center',
                  lineHeight: '1.5'
                }}>
                  {traps[currentTrapIndex].title}
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#991b1b',
                  fontFamily: "'Nunito', sans-serif",
                  margin: 0,
                  textAlign: 'center',
                  lineHeight: '1.4'
                }}>
                  {traps[currentTrapIndex].description}
                </p>
              </div>

              {/* Navigation */}
              <div style={{
                marginTop: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <button
                  onClick={() => setCurrentTrapIndex((prev) => (prev > 0 ? prev - 1 : traps.length - 1))}
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
                  onClick={() => setCurrentTrapIndex((prev) => (prev < traps.length - 1 ? prev + 1 : 0))}
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
            </div>
          )
        )}
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

        {/* Groom Your Power button - only in traps mode */}
        {viewMode === 'traps' && (
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
        )}
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

          @keyframes slideInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes slideInRight {
            0% {
              opacity: 0;
              transform: translateX(10px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes popIn {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.8);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}
