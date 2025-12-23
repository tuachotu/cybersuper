export type Stage = "welcome" | "tiles" | "training" | "practice" | "practice-complete" | "parents" | "captain-browsing" | "work-in-progress" | "flick-feed";

export type BraveQuestion = {
  id: number;
  text: string;
  correctAnswer: "yes" | "no";
  explanation: string;
};
