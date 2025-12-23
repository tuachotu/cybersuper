export const correctMessages = [
  "🎉 That's the Cyber Super choice!",
  "🦸 Nice! You were brave AND safe!",
  "✨ Yup! You spotted the trick perfectly.",
  "🔥 Super move!",
  "🌟 You protected yourself like a hero!",
];

export const incorrectMessages = [
  "🤔 Hmm… let's look at that one again.",
  "🛑 This one is sneaky! Let's try the safe answer.",
  "👀 Oops — this is where a Cyber Super would choose differently.",
  "💡 Want to see why this can be dangerous?",
  "👍 Good try — let's learn from this one!",
];

export const getRandomMessage = (messages: string[]): string => {
  return messages[Math.floor(Math.random() * messages.length)];
};
