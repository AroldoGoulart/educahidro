import React, { createContext, useContext, useMemo, useState } from "react";
import { QuestionsOriginal } from "./constants";

type HelpModalContextProps = {
  gameEnded: boolean;
  positionAtEnd?: number;
  questionIndex: number;
  chooseOption: (option: (typeof QuestionsOriginal)[0][`options`][0]) => void;
  countIsWrong: number;
  reset: () => void;
  percentageCorrect?: string;
  percentageWrong?: string;
};

const HelpModalContext = createContext<HelpModalContextProps | undefined>(
  undefined
);

export const HelpModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [countIsWrong, setCountIsWrong] = useState(0);
  const [countIsCorrect, setCountIsCorrect] = useState(0);

  const percentageCorrect = useMemo(() => {
    const QuestionsOriginalLength = QuestionsOriginal.length;
    const percentage = (countIsWrong * 100) / QuestionsOriginalLength;
    return percentage.toFixed(0);
  }, [countIsWrong]);

  const percentageWrong = useMemo(() => {
    const QuestionsOriginalLength = QuestionsOriginal.length;
    const percentage = (countIsCorrect * 100) / QuestionsOriginalLength;
    return percentage.toFixed(0);
  }, [countIsCorrect]);

  const gameEnded = useMemo(() => {
    if (questionIndex === QuestionsOriginal.length - 1) {
      return true;
    }
    if (countIsWrong >= 7) {
      return true;
    }
    return false;
  }, []);

  const positionAtEnd = useMemo(() => {
    if (countIsCorrect >= 14) {
      return 1;
    }
    if (countIsCorrect >= 13) {
      return 2;
    }
    return 3;
  }, [countIsCorrect]);

  const reset = () => {
    setQuestionIndex(0);
    setCountIsWrong(0);
    setCountIsCorrect(0);
  };

  const chooseOption = (
    option: (typeof QuestionsOriginal)[0][`options`][0]
  ) => {
    const futureIndex = questionIndex + 1;

    setQuestionIndex((prev) => prev + 1);
    if (futureIndex >= QuestionsOriginal.length) {
      return;
    }

    if (!option.isCorrect) {
      setCountIsWrong((prev) => prev + 1);
      return;
    }
    setCountIsCorrect((prev) => prev + 1);
  };

  return (
    <HelpModalContext.Provider
      value={{
        gameEnded,
        positionAtEnd,
        questionIndex,
        chooseOption,
        countIsWrong,
        reset,
        percentageWrong,
        percentageCorrect,
      }}
    >
      {children}
    </HelpModalContext.Provider>
  );
};

export const useQuestion = () => {
  const context = useContext(HelpModalContext);

  if (!context) {
    throw new Error("useQuestion must be used within a HelpModalProvider");
  }

  return context;
};
