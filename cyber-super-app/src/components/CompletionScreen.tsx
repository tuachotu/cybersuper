interface CompletionScreenProps {
  onRetryBrave: () => void;
  onBackToStart: () => void;
  onShowParents?: () => void;
}

export default function CompletionScreen({
  onRetryBrave,
  onBackToStart,
  onShowParents,
}: CompletionScreenProps) {
  return (
    <div style={{ position: 'relative' }}>
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

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8">
        🎉 You Did Something Brave Today!
      </h1>

      <div className="text-xl md:text-2xl text-gray-700 space-y-6 mb-12 leading-relaxed">
        <p>You completed all the Brave Challenges!</p>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl my-8">
          <p className="text-2xl font-bold text-purple-700">
            🦸‍♀️ You used your Cyber Superpowers and stayed safe online. 🦸‍♂️
          </p>
        </div>

        <p className="text-2xl font-bold text-green-600">
          You're now ready to explore the internet more safely!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <button
          onClick={onRetryBrave}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-xl px-10 py-5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 active:scale-95"
        >
          Do Brave Challenge Again
        </button>
        <button
          onClick={onBackToStart}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl px-10 py-5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 active:scale-95"
        >
          Choose Another Mission
        </button>
      </div>
      </div>
    </div>
  );
}
