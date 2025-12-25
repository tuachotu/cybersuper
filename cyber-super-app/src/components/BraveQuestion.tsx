import { useState } from "react";
import type { BraveQuestion as BraveQuestionType } from "../types";
import {
  correctMessages,
  incorrectMessages,
  getRandomMessage,
} from "../data/feedback";

interface BraveQuestionProps {
  question: BraveQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onNext: () => void;
  onShowParents?: () => void;
}

export default function BraveQuestion({
  question,
  questionNumber,
  totalQuestions,
  onNext,
  onShowParents,
}: BraveQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<"yes" | "no" | null>(
    null
  );
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (answer: "yes" | "no") => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  const topMenu = (
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
  );

  if (!showFeedback) {
    return (
      <div style={{ position: 'relative' }}>
        {topMenu}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-6">
          <p className="text-purple-600 font-semibold text-lg">
            Question {questionNumber} of {totalQuestions}
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl mb-8">
          <p className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            {question.text}
          </p>
        </div>

        <p className="text-xl md:text-2xl font-semibold text-purple-700 text-center mb-8">
          What would a Cyber Super Hero do?
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button
            onClick={() => handleAnswer("yes")}
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-3xl px-16 py-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 active:scale-95"
          >
            YES
          </button>
          <button
            onClick={() => handleAnswer("no")}
            className="bg-red-500 hover:bg-red-600 text-white font-bold text-3xl px-16 py-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 active:scale-95"
          >
            NO
          </button>
        </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      {topMenu}
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <div className="text-center mb-6">
        <p className="text-purple-600 font-semibold text-lg">
          Question {questionNumber} of {totalQuestions}
        </p>
      </div>

      <div
        className={`p-8 rounded-2xl mb-8 ${
          isCorrect
            ? "bg-gradient-to-r from-green-100 to-green-200"
            : "bg-gradient-to-r from-yellow-100 to-orange-100"
        }`}
      >
        <p className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          {isCorrect
            ? getRandomMessage(correctMessages)
            : getRandomMessage(incorrectMessages)}
        </p>

        <div className="bg-white bg-opacity-80 p-6 rounded-xl mt-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            {question.explanation}
          </p>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onNext}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl px-10 py-5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 active:scale-95"
        >
          {questionNumber < totalQuestions
            ? "Next Brave Thing"
            : "See My Results"}
        </button>
      </div>
      </div>
    </div>
  );
}
