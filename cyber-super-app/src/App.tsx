import { useState } from "react";
import type { Stage } from "./types";
import { practiceQuestions } from "./data/practiceQuestions";
import type { PracticeQuestion as PracticeQuestionType } from "./data/practiceQuestions";
import PageTransition from "./components/PageTransition";
import WelcomeScreen from "./components/WelcomeScreen";
import TilesScreen from "./components/TilesScreen";
import TrainingScreen from "./components/TrainingScreen";
import BraveModeIntro from "./components/BraveModeIntro";
import PracticeQuestion from "./components/PracticeQuestion";
import PracticeComplete from "./components/PracticeComplete";
import ParentsScreen from "./components/ParentsScreen";
import CaptainBrowsingScreen from "./components/CaptainBrowsingScreen";
import WorkInProgressScreen from "./components/WorkInProgressScreen";
import FlickFeedScreen from "./components/FlickFeedScreen";
import PrintablesScreen from "./components/PrintablesScreen";

// Shuffle array helper function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [stage, setStage] = useState<Stage>("welcome");
  const [practiceQuestionIndex, setPracticeQuestionIndex] = useState(0);
  const [showPracticeIntro, setShowPracticeIntro] = useState(true);
  const [visitedProtocols, setVisitedProtocols] = useState<string[]>([]);
  const [currentProtocol, setCurrentProtocol] = useState<string>("");
  const [correctCount, setCorrectCount] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<PracticeQuestionType[]>([]);

  const handleUnlockPowers = () => {
    setStage("tiles");
  };

  const handleSelectBrowsing = () => {
    setStage("captain-browsing");
  };

  const handleSelectAppHero = () => {
    setCurrentProtocol("app-hero");
    setStage("training");
  };

  const handleSelectProtocol = (protocolId: string) => {
    setCurrentProtocol(protocolId);
    setStage("training");
  };

  const handleBackToCaptainBrowsing = () => {
    // Mark current protocol as visited when returning
    if (currentProtocol && !visitedProtocols.includes(currentProtocol)) {
      setVisitedProtocols([...visitedProtocols, currentProtocol]);
    }
    setStage("captain-browsing");
  };

  const handleBackFromAppHero = () => {
    setStage("tiles");
  };

  const handleBackFromWorkInProgress = () => {
    // Mark current protocol as visited when returning from work-in-progress
    if (currentProtocol && !visitedProtocols.includes(currentProtocol)) {
      setVisitedProtocols([...visitedProtocols, currentProtocol]);
    }
    setStage("captain-browsing");
  };

  const handleBackToTiles = () => {
    setStage("tiles");
  };

  const handlePractice = () => {
    setStage("practice");
    setShowPracticeIntro(true);
    setPracticeQuestionIndex(0);
    setCorrectCount(0);
    setShuffledQuestions(shuffleArray(practiceQuestions));
  };

  const handleStartPractice = () => {
    setShowPracticeIntro(false);
  };

  const handleAnswerCorrect = () => {
    setCorrectCount(correctCount + 1);
  };

  const handleNextPracticeQuestion = () => {
    if (correctCount >= 10) {
      setStage("practice-complete");
    } else {
      setPracticeQuestionIndex(practiceQuestionIndex + 1);
    }
  };

  const handleRetryPractice = () => {
    setPracticeQuestionIndex(0);
    setCorrectCount(0);
    setShowPracticeIntro(true);
    setShuffledQuestions(shuffleArray(practiceQuestions));
    setStage("practice");
  };

  const handleBackToCaptainBrowsingFromPractice = () => {
    setStage("captain-browsing");
    setPracticeQuestionIndex(0);
    setCorrectCount(0);
    setShowPracticeIntro(true);
  };

  const handleShowParents = () => {
    setStage("parents");
  };

  const handleBackToHome = () => {
    setStage("welcome");
  };

  const handleShowFlickFeed = () => {
    setStage("flick-feed");
  };

  const handleBackFromFlickFeed = () => {
    setStage("training");
  };

  const handleShowPrintables = () => {
    setStage("printables");
  };

  return (
    <>
      {stage === "welcome" && (
        <WelcomeScreen
          onStart={handleUnlockPowers}
          onShowParents={handleShowParents}
          onShowPrintables={handleShowPrintables}
        />
      )}

      {stage === "tiles" && (
        <PageTransition>
          <TilesScreen
            onSelectBrowsing={handleSelectBrowsing}
            onSelectAppHero={handleSelectAppHero}
            onShowParents={handleShowParents}
          />
        </PageTransition>
      )}

      {stage === "parents" && (
        <PageTransition>
          <ParentsScreen onBack={handleBackToHome} />
        </PageTransition>
      )}

      {stage === "captain-browsing" && (
        <PageTransition>
          <CaptainBrowsingScreen
            onSelectProtocol={handleSelectProtocol}
            onBack={handleBackToTiles}
            onPractice={handlePractice}
            visitedProtocols={visitedProtocols}
            onShowParents={handleShowParents}
          />
        </PageTransition>
      )}

      {stage === "work-in-progress" && (
        <PageTransition>
          <WorkInProgressScreen onBack={handleBackFromWorkInProgress} onShowParents={handleShowParents} />
        </PageTransition>
      )}

      {stage === "training" && (
        <PageTransition>
          <TrainingScreen
            protocolId={currentProtocol}
            onBack={currentProtocol === 'app-hero' ? handleBackFromAppHero : handleBackToCaptainBrowsing}
            onShowFlickFeed={currentProtocol === 'app-hero' ? handleShowFlickFeed : undefined}
            onShowParents={handleShowParents}
          />
        </PageTransition>
      )}

      {stage === "practice" && showPracticeIntro && (
        <PageTransition>
          <BraveModeIntro onStart={handleStartPractice} onShowParents={handleShowParents} />
        </PageTransition>
      )}

      {stage === "practice" && !showPracticeIntro && shuffledQuestions.length > 0 && (
        <PageTransition>
          <PracticeQuestion
            question={shuffledQuestions[practiceQuestionIndex]}
            correctCount={correctCount}
            onAnswerCorrect={handleAnswerCorrect}
            onNext={handleNextPracticeQuestion}
            onBackToMissions={handleBackToCaptainBrowsingFromPractice}
            onShowParents={handleShowParents}
          />
        </PageTransition>
      )}

      {stage === "practice-complete" && (
        <PageTransition>
          <PracticeComplete
            onRetry={handleRetryPractice}
            onBackToStart={handleBackToCaptainBrowsingFromPractice}
            onShowParents={handleShowParents}
          />
        </PageTransition>
      )}

      {stage === "flick-feed" && (
        <PageTransition>
          <FlickFeedScreen onBack={handleBackFromFlickFeed} onShowParents={handleShowParents} />
        </PageTransition>
      )}

      {stage === "printables" && (
        <PageTransition>
          <PrintablesScreen onBack={handleBackToHome} onShowParents={handleShowParents} />
        </PageTransition>
      )}
    </>
  );
}

export default App;
