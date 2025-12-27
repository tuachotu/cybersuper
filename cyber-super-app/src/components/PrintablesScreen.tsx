import printablesManifest from '../data/printables.json';

interface PrintablesScreenProps {
  onBack: () => void;
  onShowParents?: () => void;
}

// Printables are automatically loaded from the manifest
// To update: run `npm run generate-printables` after adding PDFs to public/printables/
const printables = printablesManifest;

export default function PrintablesScreen({ onBack, onShowParents }: PrintablesScreenProps) {
  const handleDownload = (pdfUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title.replace(/\s+/g, '-').toLowerCase() + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
        {/* Back Button */}
        <button
          onClick={onBack}
          style={{
            background: 'white',
            color: '#7c3aed',
            fontWeight: 700,
            fontSize: '1rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '2rem',
            border: '2px solid #7c3aed',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: "'Nunito', sans-serif",
            marginBottom: '2rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#7c3aed';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#7c3aed';
          }}
        >
          ← Back to Home
        </button>

        {/* Header */}
        <div style={{
          background: 'white',
          borderRadius: '2rem',
          padding: '2.5rem',
          marginBottom: '2rem',
          textAlign: 'center',
          border: '4px solid #a855f7',
          boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            color: '#7c3aed',
            marginBottom: '1rem',
            fontFamily: "'Nunito', sans-serif"
          }}>
            Printable Resources
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b21a8',
            fontFamily: "'Nunito', sans-serif",
            lineHeight: '1.6'
          }}>
            Download and print these fun resources to help reinforce cyber safety concepts!
          </p>
        </div>

        {/* Printables Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {printables.map((printable) => (
            <div
              key={printable.id}
              style={{
                background: 'white',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                border: '3px solid #c084fc',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* PDF Preview */}
              <div style={{
                width: '100%',
                height: '400px',
                background: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}>
                {printable.thumbnailUrl ? (
                  <img
                    src={printable.thumbnailUrl}
                    alt={printable.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                ) : (
                  <iframe
                    src={`${printable.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={printable.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#7c3aed',
                  marginBottom: '0.5rem',
                  fontFamily: "'Nunito', sans-serif"
                }}>
                  {printable.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  marginBottom: '1.5rem',
                  fontFamily: "'Nunito', sans-serif",
                  lineHeight: '1.5'
                }}>
                  {printable.description}
                </p>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <button
                    onClick={() => handleDownload(printable.pdfUrl, printable.title)}
                    style={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1rem',
                      padding: '0.875rem 1.5rem',
                      borderRadius: '0.75rem',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: "'Nunito', sans-serif",
                      boxShadow: '0 4px 8px rgba(168, 85, 247, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 6px 12px rgba(168, 85, 247, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(168, 85, 247, 0.3)';
                    }}
                  >
                    ⬇️ Download PDF
                  </button>

                  <a
                    href={printable.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      background: 'white',
                      color: '#7c3aed',
                      fontWeight: 700,
                      fontSize: '1rem',
                      padding: '0.875rem 1.5rem',
                      borderRadius: '0.75rem',
                      border: '2px solid #a855f7',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: "'Nunito', sans-serif",
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#faf5ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                    }}
                  >
                    👁️ Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {printables.length === 0 && (
          <div style={{
            background: 'white',
            borderRadius: '2rem',
            padding: '3rem',
            textAlign: 'center',
            border: '3px solid #c084fc'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '1rem'
            }}>
              📋
            </div>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              fontFamily: "'Nunito', sans-serif"
            }}>
              No printables available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
