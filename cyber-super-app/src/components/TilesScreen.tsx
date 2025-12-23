interface TilesScreenProps {
  onSelectBrowsing: () => void;
  onSelectAppHero: () => void;
  onShowParents: () => void;
}

interface Tile {
  id: string;
  title: string;
  icon: string;
  isActive: boolean;
}

const tiles: Tile[] = [
  {
    id: "super-browsing",
    title: "Captain Browsing",
    icon: "/super-browsing.png",
    isActive: true,
  },
  {
    id: "app-hero",
    title: "App Hero",
    icon: "/app-hero.png",
    isActive: true,
  },
  {
    id: "think-twice",
    title: "Think Twice",
    icon: "/smart-ai.png",
    isActive: false,
  },
];

export default function TilesScreen({ onSelectBrowsing, onSelectAppHero, onShowParents }: TilesScreenProps) {
  const handleTileClick = (tile: Tile) => {
    if (tile.isActive) {
      if (tile.id === 'super-browsing') {
        onSelectBrowsing();
      } else if (tile.id === 'app-hero') {
        onSelectAppHero();
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem'
    }}>
      <div style={{ width: '100%', maxWidth: '1400px' }}>
        {/* Header */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
          fontWeight: 900,
          color: '#3b82f6',
          textAlign: 'center',
          marginBottom: '4rem',
          fontFamily: "'Nunito', sans-serif"
        }}>
          Choose Your Mission
        </h1>

        {/* Tiles - Horizontal Layout */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          {tiles.map((tile) => (
            <button
              key={tile.id}
              onClick={(e) => {
                if (tile.isActive) {
                  handleTileClick(tile);
                } else {
                  e.currentTarget.style.animation = 'locked-shake 0.6s ease-in-out';
                  setTimeout(() => {
                    e.currentTarget.style.animation = '';
                  }, 600);
                }
              }}
              disabled={!tile.isActive}
              style={{
                position: 'relative',
                padding: '2rem 1.5rem',
                borderRadius: '1.5rem',
                border: '5px solid white',
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FEC601 100%)',
                boxShadow: '0 10px 30px rgba(255, 107, 53, 0.5)',
                transform: 'scale(1)',
                transition: 'all 0.3s ease',
                cursor: tile.isActive ? 'pointer' : 'not-allowed',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '200px',
                width: '200px',
                height: '240px',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                if (tile.isActive) {
                  e.currentTarget.style.transform = 'scale(1.03) translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 107, 53, 0.8), 0 0 30px rgba(255, 107, 53, 0.5)';
                } else {
                  e.currentTarget.style.animation = 'shake 0.5s ease-in-out';
                }
              }}
              onMouseLeave={(e) => {
                if (tile.isActive) {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.5)';
                } else {
                  e.currentTarget.style.animation = '';
                }
              }}
              title={!tile.isActive ? "Not Ready Yet!" : ""}
            >
              {/* Lock Icon */}
              {!tile.isActive && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '2rem'
                }}>
                  🔒
                </div>
              )}

              {/* Icon */}
              <div style={{
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120px'
              }}>
                <img
                  src={tile.icon}
                  alt={tile.title}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem',
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                wordSpacing: '-0.15em'
              }}>
                {tile.title}
              </h3>

              {/* Status - Only show for inactive tiles */}
              {!tile.isActive && (
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textAlign: 'center',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}>
                  Not Ready Yet!
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '4rem',
          width: '100%',
          maxWidth: '800px',
          margin: '4rem auto 0',
          padding: '0 1rem'
        }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              display: 'inline-block',
              color: 'white',
              fontSize: '0.95rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '0.85rem 2rem',
              borderRadius: '2rem',
              background: '#3b82f6',
              border: '2px solid #2563eb',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              flex: '1 1 auto',
              minWidth: '180px',
              textAlign: 'center',
              cursor: 'pointer'
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
            🏠 Back Home
          </button>

          <button
            onClick={onShowParents}
            style={{
              display: 'inline-block',
              color: 'white',
              fontSize: '0.95rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '0.85rem 2rem',
              borderRadius: '2rem',
              background: '#3b82f6',
              border: '2px solid #2563eb',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              flex: '1 1 auto',
              minWidth: '180px',
              textAlign: 'center',
              cursor: 'pointer'
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
            👨‍👩‍👧‍👦 Parents: Learn More
          </button>

          <a
            href="https://twitter.com/vikkrraant"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              color: 'white',
              fontSize: '0.95rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '0.85rem 2rem',
              borderRadius: '2rem',
              background: '#3b82f6',
              border: '2px solid #2563eb',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              flex: '1 1 auto',
              minWidth: '180px',
              textAlign: 'center'
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
            📧 Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
