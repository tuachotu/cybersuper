export type Stage = "welcome" | "tiles" | "training" | "practice" | "practice-complete" | "parents" | "captain-browsing" | "work-in-progress" | "flick-feed" | "printables" | "calm-commander-oath" | "calm-commander-situation-1" | "calm-commander-situation-2";

export type BraveQuestion = {
  id: number;
  text: string;
  correctAnswer: "yes" | "no";
  explanation: string;
};
