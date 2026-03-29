import { useState } from "react";
import { MCQ } from "../types";

interface Props {
  mcqs: MCQ[];
}

export default function MCQSection({ mcqs }: Props) {
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [quizMode, setQuizMode] = useState(false);

  const handleSelect = (mcqId: number, optionIdx: number) => {
    if (revealed[mcqId]) return;
    setAnswers((prev) => ({ ...prev, [mcqId]: optionIdx }));
    setRevealed((prev) => ({ ...prev, [mcqId]: true }));
  };

  const resetAll = () => {
    setAnswers({});
    setRevealed({});
  };

  const score = Object.keys(revealed).filter(
    (id) => answers[+id] === mcqs.find((m) => m.id === +id)?.correct
  ).length;

  const attempted = Object.keys(revealed).length;

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-rose-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold">
            {mcqs.length} Questions
          </div>
          {attempted > 0 && (
            <div className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-semibold">
              Score: {score}/{attempted} answered
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setQuizMode((q) => !q)}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              quizMode
                ? "bg-rose-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {quizMode ? "📝 Quiz Mode ON" : "📝 Quiz Mode"}
          </button>
          <button
            onClick={resetAll}
            className="px-4 py-1.5 rounded-lg text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
          >
            🔄 Reset
          </button>
        </div>
      </div>

      {/* MCQ Cards */}
      {mcqs.map((mcq, index) => {
        const selected = answers[mcq.id];
        const isRevealed = !!revealed[mcq.id];
        const isCorrect = selected === mcq.correct;

        return (
          <div
            key={mcq.id}
            className={`rounded-2xl border-2 overflow-hidden shadow-sm transition-all ${
              isRevealed
                ? isCorrect
                  ? "border-emerald-300 bg-emerald-50/30"
                  : "border-red-300 bg-red-50/30"
                : "border-gray-200 bg-white"
            }`}
          >
            {/* Question Header */}
            <div className="flex items-start gap-3 p-5 border-b border-gray-100">
              <div className="flex-shrink-0 flex items-center gap-2">
                <span className="bg-rose-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
                {mcq.isExam && (
                  <span className="bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">
                    ⭐ EXAM
                  </span>
                )}
              </div>
              <p className="text-gray-800 font-semibold leading-relaxed">{mcq.question}</p>
            </div>

            {/* Options */}
            <div className="p-5 space-y-2">
              {mcq.options.map((option, optIdx) => {
                const isSelected = selected === optIdx;
                const isCorrectOpt = optIdx === mcq.correct;

                let optClass =
                  "w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all flex items-center gap-3 ";

                if (!isRevealed) {
                  optClass += isSelected
                    ? "border-rose-400 bg-rose-50 text-rose-800"
                    : "border-gray-200 bg-gray-50 text-gray-700 hover:border-rose-300 hover:bg-rose-50 cursor-pointer";
                } else {
                  if (isCorrectOpt) {
                    optClass += "border-emerald-400 bg-emerald-100 text-emerald-800";
                  } else if (isSelected && !isCorrectOpt) {
                    optClass += "border-red-400 bg-red-100 text-red-800";
                  } else {
                    optClass += "border-gray-200 bg-gray-50 text-gray-500";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    className={optClass}
                    onClick={() => handleSelect(mcq.id, optIdx)}
                    disabled={isRevealed}
                  >
                    <span className="w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center text-xs font-bold border-current">
                      {isRevealed
                        ? isCorrectOpt
                          ? "✓"
                          : isSelected
                          ? "✗"
                          : String.fromCharCode(65 + optIdx)
                        : String.fromCharCode(65 + optIdx)}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {isRevealed && !quizMode && (
              <div className="mx-5 mb-5 p-4 rounded-xl bg-blue-50 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                    💡 Explanation
                  </span>
                </div>
                <p className="text-blue-900 text-sm leading-relaxed">{mcq.explanation}</p>
              </div>
            )}

            {/* Tag */}
            {mcq.tag && (
              <div className="px-5 pb-4">
                <span className="text-xs bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full font-medium">
                  #{mcq.tag}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
