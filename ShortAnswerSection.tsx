import { useState } from "react";
import { Mnemonic } from "../types";

interface Props {
  mnemonics: Mnemonic[];
}

const COLORS = [
  { bg: "from-violet-500 to-purple-600", light: "bg-violet-50", border: "border-violet-200", text: "text-violet-800", accent: "bg-violet-600" },
  { bg: "from-rose-500 to-pink-600", light: "bg-rose-50", border: "border-rose-200", text: "text-rose-800", accent: "bg-rose-600" },
  { bg: "from-teal-500 to-emerald-600", light: "bg-teal-50", border: "border-teal-200", text: "text-teal-800", accent: "bg-teal-600" },
  { bg: "from-orange-500 to-amber-600", light: "bg-orange-50", border: "border-orange-200", text: "text-orange-800", accent: "bg-orange-600" },
  { bg: "from-blue-500 to-indigo-600", light: "bg-blue-50", border: "border-blue-200", text: "text-blue-800", accent: "bg-blue-600" },
  { bg: "from-fuchsia-500 to-pink-600", light: "bg-fuchsia-50", border: "border-fuchsia-200", text: "text-fuchsia-800", accent: "bg-fuchsia-600" },
  { bg: "from-cyan-500 to-blue-600", light: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-800", accent: "bg-cyan-600" },
];

export default function MnemonicsSection({ mnemonics }: Props) {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggle = (id: number) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="space-y-5">
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
        <div className="bg-violet-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold">
          🧠 {mnemonics.length} Mnemonics
        </div>
        <p className="text-sm text-gray-500">Memory aids for clinical exams — click any card to expand.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {mnemonics.map((m, idx) => {
          const color = COLORS[idx % COLORS.length];
          const isExpanded = expanded[m.id];

          return (
            <div
              key={m.id}
              className={`rounded-2xl overflow-hidden shadow-sm border ${color.border} cursor-pointer transition-all hover:shadow-md`}
              onClick={() => toggle(m.id)}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${color.bg} p-5`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-widest mb-1 font-semibold">
                      Mnemonic #{idx + 1}
                    </p>
                    <h3 className="text-white font-bold text-base leading-snug">{m.title}</h3>
                  </div>
                  <span className="text-white/60 text-xl">{isExpanded ? "−" : "+"}</span>
                </div>

                {/* Big Mnemonic Word */}
                <div className="mt-4 flex flex-wrap gap-1">
                  {m.mnemonic.split(/\s+/).map((word, wi) => (
                    <span
                      key={wi}
                      className="bg-white/20 text-white font-black text-lg px-3 py-1 rounded-lg tracking-wider"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expansion */}
              {isExpanded && (
                <div className={`${color.light} p-5 space-y-3`}>
                  {/* Letter breakdown */}
                  <div className="space-y-2">
                    {m.expansion.map((line, li) => {
                      const [letter, ...rest] = line.split(" — ");
                      return (
                        <div key={li} className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-8 h-8 rounded-lg ${color.accent} text-white flex items-center justify-center font-black text-sm`}>
                            {letter.trim().charAt(0)}
                          </span>
                          <div>
                            <span className={`font-bold ${color.text} text-sm`}>{letter.trim()}</span>
                            {rest.length > 0 && (
                              <span className="text-gray-600 text-sm"> — {rest.join(" — ")}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Context */}
                  <div className={`mt-3 p-3 rounded-xl border ${color.border} bg-white/60`}>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Context</p>
                    <p className={`text-sm ${color.text} leading-relaxed`}>{m.context}</p>
                  </div>

                  {m.tag && (
                    <span className={`inline-block text-xs ${color.accent} text-white px-3 py-0.5 rounded-full font-medium`}>
                      #{m.tag}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
