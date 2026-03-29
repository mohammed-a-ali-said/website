import { useState } from "react";
import { Flashcard } from "../types";

interface Props {
  flashcards: Flashcard[];
}

export default function FlashcardSection({ flashcards }: Props) {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const [filter, setFilter] = useState<"all" | "exam">("all");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [mode, setMode] = useState<"grid" | "swipe">("grid");

  const filtered = filter === "exam" ? flashcards.filter((f) => f.isExam) : flashcards;

  const handleFlip = (id: number) =>
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));

  const flipAll = (val: boolean) => {
    const obj: Record<number, boolean> = {};
    flashcards.forEach((f) => (obj[f.id] = val));
    setFlipped(obj);
  };

  const currentCard = filtered[currentIdx];

  return (
    <div className="space-y-5">
      {/* Controls */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="bg-rose-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold">
            {filtered.length} Cards
          </div>
          <button
            onClick={() => setFilter(filter === "all" ? "exam" : "all")}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              filter === "exam"
                ? "bg-amber-400 text-amber-900"
                : "bg-gray-100 text-gray-600 hover:bg-amber-100"
            }`}
          >
            ⭐ {filter === "exam" ? "Exam Only" : "Show Exam Only"}
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setMode(mode === "grid" ? "swipe" : "grid")}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              mode === "swipe"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-indigo-100"
            }`}
          >
            {mode === "swipe" ? "📚 Stack Mode" : "🗂️ Grid Mode"}
          </button>
          {mode === "grid" && (
            <>
              <button
                onClick={() => flipAll(true)}
                className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
              >
                Reveal All
              </button>
              <button
                onClick={() => flipAll(false)}
                className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
              >
                Hide All
              </button>
            </>
          )}
        </div>
      </div>

      {/* Swipe / Stack Mode */}
      {mode === "swipe" && currentCard ? (
        <div className="flex flex-col items-center gap-5">
          <div className="text-sm text-gray-500 font-medium">
            Card {currentIdx + 1} of {filtered.length}
          </div>

          <div
            className="w-full max-w-lg h-64 cursor-pointer"
            style={{ perspective: "1000px" }}
            onClick={() => handleFlip(currentCard.id)}
          >
            <div
              className="relative w-full h-full transition-transform duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped[currentCard.id] ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 flex flex-col items-center justify-center p-8 shadow-xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                {currentCard.isExam && (
                  <span className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">
                    ⭐ EXAM
                  </span>
                )}
                <p className="text-xs text-rose-200 uppercase tracking-widest mb-4 font-semibold">
                  Question
                </p>
                <p className="text-white text-center text-lg font-bold leading-relaxed">
                  {currentCard.front}
                </p>
                <p className="text-rose-200 text-xs mt-6">Tap to reveal answer</p>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex flex-col items-center justify-center p-8 shadow-xl"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <p className="text-xs text-teal-200 uppercase tracking-widest mb-4 font-semibold">
                  Answer
                </p>
                <p className="text-white text-center text-base font-semibold leading-relaxed">
                  {currentCard.back}
                </p>
                {currentCard.tag && (
                  <span className="mt-4 text-xs bg-teal-400/30 text-teal-100 px-3 py-1 rounded-full">
                    #{currentCard.tag}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setCurrentIdx((i) => Math.max(0, i - 1));
                setFlipped({});
              }}
              disabled={currentIdx === 0}
              className="px-6 py-2 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm disabled:opacity-40 hover:bg-gray-200 transition-all"
            >
              ← Previous
            </button>
            <div className="flex gap-1">
              {filtered.slice(Math.max(0, currentIdx - 2), currentIdx + 3).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    Math.max(0, currentIdx - 2) + i === currentIdx
                      ? "bg-rose-500 w-4"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => {
                setCurrentIdx((i) => Math.min(filtered.length - 1, i + 1));
                setFlipped({});
              }}
              disabled={currentIdx === filtered.length - 1}
              className="px-6 py-2 rounded-xl bg-rose-600 text-white font-semibold text-sm disabled:opacity-40 hover:bg-rose-700 transition-all"
            >
              Next →
            </button>
          </div>
        </div>
      ) : (
        /* Grid Mode */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((card) => (
            <div
              key={card.id}
              className="cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={() => handleFlip(card.id)}
            >
              <div
                className="relative h-44 transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipped[card.id] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 flex flex-col items-center justify-center p-5 shadow-md"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {card.isExam && (
                    <span className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">
                      ⭐
                    </span>
                  )}
                  <p className="text-xs text-rose-200 uppercase tracking-widest mb-2 font-semibold">
                    Q
                  </p>
                  <p className="text-white text-center text-sm font-bold leading-relaxed">
                    {card.front}
                  </p>
                  <p className="text-rose-200 text-xs mt-3 opacity-70">Tap to flip</p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex flex-col items-center justify-center p-5 shadow-md"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <p className="text-xs text-teal-200 uppercase tracking-widest mb-2 font-semibold">
                    A
                  </p>
                  <p className="text-white text-center text-sm font-semibold leading-relaxed">
                    {card.back}
                  </p>
                  {card.tag && (
                    <span className="mt-3 text-xs bg-teal-400/30 text-teal-100 px-2 py-0.5 rounded-full">
                      #{card.tag}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
