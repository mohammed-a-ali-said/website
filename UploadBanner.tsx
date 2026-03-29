import { useState } from "react";
import { ShortAnswer } from "../types";

interface Props {
  questions: ShortAnswer[];
}

export default function ShortAnswerSection({ questions }: Props) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const toggle = (id: number) =>
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="space-y-5">
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
        <div className="bg-rose-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold">
          {questions.length} Short Answer Questions
        </div>
        <p className="text-sm text-gray-500">
          Write your answer, then click <strong>Show Answer</strong> to compare.
        </p>
      </div>

      {questions.map((q, idx) => (
        <div
          key={q.id}
          className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
        >
          {/* Question */}
          <div className="p-5 border-b border-gray-100">
            <div className="flex items-start gap-3">
              <span className="bg-purple-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                {idx + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {q.isExam && (
                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">
                      ⭐ EXAM
                    </span>
                  )}
                  {q.tag && (
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-medium">
                      #{q.tag}
                    </span>
                  )}
                </div>
                <p className="text-gray-800 font-semibold leading-relaxed">{q.question}</p>
              </div>
            </div>
          </div>

          {/* User Input */}
          <div className="p-5 space-y-3">
            <textarea
              className="w-full border border-gray-200 rounded-xl p-3 text-sm text-gray-700 resize-none focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all bg-gray-50"
              rows={3}
              placeholder="Type your answer here before revealing..."
              value={userAnswers[q.id] || ""}
              onChange={(e) =>
                setUserAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
              }
            />
            <button
              onClick={() => toggle(q.id)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                revealed[q.id]
                  ? "bg-purple-600 text-white"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              {revealed[q.id] ? "🙈 Hide Answer" : "👁️ Show Answer"}
            </button>

            {revealed[q.id] && (
              <div className="mt-3 p-4 rounded-xl bg-purple-50 border border-purple-200 animate-fade-in">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                    ✅ Model Answer
                  </span>
                </div>
                <p className="text-purple-900 text-sm leading-relaxed whitespace-pre-line">
                  {q.answer}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
