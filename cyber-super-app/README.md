# How to Be Cyber Super – General Browsing

A kid-friendly React app designed to teach children (ages 7-11) about cybersecurity and safe browsing practices through interactive training and challenges.

## Overview

This standalone React application teaches kids three core "Cyber Super" protocols:
- **Protocol 1**: The "Default NO" Superpower
- **Protocol 2**: The 3 Always (Ask, Close, Tell)
- **Protocol 3**: Internet's Neverland - The Land of Nevers

After training, kids practice their skills through 15 interactive "Brave Challenge" scenarios.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **TailwindCSS v4** for styling
- **Google Fonts** (Nunito)

## Project Structure

```
src/
├── components/          # React components for each screen
│   ├── WelcomeScreen.tsx
│   ├── TrainingScreen.tsx
│   ├── BraveModeIntro.tsx
│   ├── BraveQuestion.tsx
│   └── CompletionScreen.tsx
├── data/               # Static data
│   ├── questions.ts    # 15 brave challenge questions
│   └── feedback.ts     # Feedback messages
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main app with state machine
├── main.tsx            # Entry point
└── index.css           # Global styles with TailwindCSS
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

Build static assets for deployment:

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

## Deployment

The app is configured to work at any subpath (not just root). The built assets in `dist/` can be:

1. Served directly from a web server (Nginx, Apache, etc.)
2. Hosted at a subpath like `/cyber-super`
3. Deployed to any static hosting service

### Example Nginx Configuration

```nginx
location /cyber-super {
    alias /path/to/dist;
    try_files $uri $uri/ /cyber-super/index.html;
}
```

## Features

- **No Backend Required**: Fully client-side React app
- **No Authentication**: No user accounts or login needed
- **Responsive Design**: Works on desktop and tablet
- **Kid-Friendly UX**: Large buttons, bright colors, fun emojis
- **Educational**: Teaches real cybersecurity concepts in age-appropriate ways

## State Machine

The app uses a simple state machine with 4 main stages:

1. **welcome** - Welcome screen
2. **training** - 3 training protocols (Protocol 1 → 2 → 3)
3. **brave** - Interactive Yes/No scenarios (15 questions)
4. **done** - Completion screen with options to retry or restart

## Customization

### Adding New Questions

Edit `src/data/questions.ts` to add more brave challenge scenarios:

```typescript
{
  id: 16,
  text: "Your question here?",
  correctAnswer: "yes" | "no",
  explanation: "Why this is the right choice..."
}
```

### Modifying Protocols

Edit `src/components/TrainingScreen.tsx` to update protocol content.

### Changing Colors/Styles

The app uses TailwindCSS. Modify classes in components or update `src/index.css` for global styles.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2015+ required

## License

This project is open source and available for educational purposes.
