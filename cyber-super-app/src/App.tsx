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
import CalmCommanderOath from "./components/CalmCommanderOath";
import CalmCommanderSituation1 from "./components/CalmCommanderSituation1";
import CalmCommanderSituation2 from "./components/CalmCommanderSituation2";

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
  const [flickFeedMode, setFlickFeedMode] = useState<'traps' | 'missions'>('traps');

  const handleUnlockPowers = () => {
    setStage("tiles");
  };

  const handleSelectBrowsing = () => {
    setStage("captain-browsing");
  };

  const handleSelectCalmCommander = () => {
    setCurrentProtocol("calm-commander");
    setStage("training");
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

  const handleShowFlickFeedTraps = () => {
    setFlickFeedMode('traps');
    setStage("flick-feed");
  };

  const handleShowFlickFeedMissions = () => {
    setFlickFeedMode('missions');
    setStage("flick-feed");
  };

  const handleBackFromFlickFeed = () => {
    setStage("training");
  };

  const handleShowPrintables = () => {
    setStage("printables");
  };

  const handleShowCalmCommanderOath = () => {
    setStage("calm-commander-oath");
  };

  const handleBackFromCalmCommanderOath = () => {
    setStage("training");
  };

  const handleContinueFromCalmCommanderOath = () => {
    setStage("calm-commander-situation-1");
  };

  const handleBackFromCalmCommanderSituation1 = () => {
    setStage("calm-commander-oath");
  };

  const handleNextFromCalmCommanderSituation1 = () => {
    setStage("calm-commander-situation-2");
  };

  const handleBackFromCalmCommanderSituation2 = () => {
    setStage("calm-commander-situation-1");
  };

  const handleFinishCalmCommanderTraining = () => {
    setStage("training");
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
            onSelectCalmCommander={handleSelectCalmCommander}
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
            onBack={(currentProtocol === 'app-hero' || currentProtocol === 'calm-commander') ? handleBackFromAppHero : handleBackToCaptainBrowsing}
            onShowFlickFeedTraps={currentProtocol === 'app-hero' ? handleShowFlickFeedTraps : undefined}
            onShowFlickFeedMissions={currentProtocol === 'app-hero' ? handleShowFlickFeedMissions : undefined}
            onShowCalmCommanderOath={currentProtocol === 'calm-commander' ? handleShowCalmCommanderOath : undefined}
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
          <FlickFeedScreen onBack={handleBackFromFlickFeed} onShowParents={handleShowParents} viewMode={flickFeedMode} />
        </PageTransition>
      )}

      {stage === "printables" && (
        <PageTransition>
          <PrintablesScreen onBack={handleBackToHome} onShowParents={handleShowParents} />
        </PageTransition>
      )}

      {stage === "calm-commander-oath" && (
        <PageTransition>
          <CalmCommanderOath
            onBack={handleBackFromCalmCommanderOath}
            onContinue={handleContinueFromCalmCommanderOath}
            onShowParents={handleShowParents}
          />
        </PageTransition>
      )}

      {stage === "calm-commander-situation-1" && (
        <PageTransition>
          <CalmCommanderSituation1
            onBack={handleBackFromCalmCommanderSituation1}
            onShowParents={handleShowParents}
            onNext={handleNextFromCalmCommanderSituation1}
          />
        </PageTransition>
      )}

      {stage === "calm-commander-situation-2" && (
        <PageTransition>
          <CalmCommanderSituation2
            onBack={handleBackFromCalmCommanderSituation2}
            onShowParents={handleShowParents}
            onFinish={handleFinishCalmCommanderTraining}
          />
        </PageTransition>
      )}
    </>
  );
}

export default App;
