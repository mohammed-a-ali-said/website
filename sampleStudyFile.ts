import { StudyTag } from "../types";

interface Props {
  tags: StudyTag[];
  notes: Array<{ type: string; isExam?: boolean }>;
  mcqCount: number;
  flashcardCount: number;
  mnemonicCount: number;
  shortAnswerCount: number;
}

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  rose: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200", dot: "bg-rose-500" },
  pink: { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200", dot: "bg-pink-500" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", dot: "bg-purple-500" },
  amber: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", dot: "bg-amber-500" },
  teal: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200", dot: "bg-teal-500" },
  blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", dot: "bg-blue-500" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200", dot: "bg-indigo-500" },
};

export default function TagsSection({ tags, notes, mcqCount, flashcardCount, mnemonicCount, shortAnswerCount }: Props) {
  const examItems = notes.filter((n) => n.isExam).length;
  const doctorNotes = notes.filter((n) => n.type === "doctor").length;
  const warnings = notes.filter((n) => n.type === "warning").length;

  return (
    <div className="space-y-6">
      {/* File Summary */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">📋</span> Study File Summary
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            { label: "Lecture Notes", value: notes.length, icon: "📄", color: "bg-rose-50 text-rose-700 border-rose-200" },
            { label: "MCQs", value: mcqCount, icon: "❓", color: "bg-blue-50 text-blue-700 border-blue-200" },
            { label: "Short Answers", value: shortAnswerCount, icon: "✏️", color: "bg-purple-50 text-purple-700 border-purple-200" },
            { label: "Flashcards", value: flashcardCount, icon: "🃏", color: "bg-teal-50 text-teal-700 border-teal-200" },
            { label: "Mnemonics", value: mnemonicCount, icon: "🧠", color: "bg-violet-50 text-violet-700 border-violet-200" },
            { label: "⭐ Exam Points", value: examItems, icon: "⭐", color: "bg-amber-50 text-amber-700 border-amber-200" },
            { label: "📢 Doctor Notes", value: doctorNotes, icon: "📢", color: "bg-teal-50 text-teal-700 border-teal-200" },
            { label: "⚠️ Warnings", value: warnings, icon: "⚠️", color: "bg-red-50 text-red-700 border-red-200" },
          ].map((item) => (
            <div key={item.label} className={`rounded-xl border p-4 ${item.color}`}>
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="text-2xl font-black">{item.value}</div>
              <div className="text-xs font-semibold mt-0.5 opacity-80">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories / Tags */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🏷️</span> Topics & Categories
        </h3>
        <div className="space-y-4">
          {tags.map((tag) => {
            const colors = COLOR_MAP[tag.color] || COLOR_MAP.rose;
            return (
              <div key={tag.label} className={`rounded-xl border p-4 ${colors.bg} ${colors.border}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-3 h-3 rounded-full ${colors.dot}`}></div>
                  <span className={`font-bold text-base ${colors.text}`}>{tag.label}</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">
                    🔗 Cross-links & Related Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tag.crossLinks.map((link) => (
                      <span
                        key={link}
                        className={`text-xs px-3 py-1 rounded-full border ${colors.border} ${colors.text} font-medium bg-white/60 cursor-default hover:bg-white transition-all`}
                      >
                        {link}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exam Summary Box */}
      <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-300 shadow-sm">
        <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
          ⭐ High-Yield Exam Summary
        </h3>
        <div className="space-y-2 text-sm text-amber-900">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
            Active phase rate = <strong>≥1 cm/hour</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
            Second stage: Primi <strong>2h</strong> / Multi <strong>1h</strong> (+1h with epidural)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
            Bishop score ≥8 = <strong>favourable</strong> cervix
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
            Oxytocin AMTSL = <strong>10 IU IM</strong> (NOT IV bolus)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
            Late decelerations = <strong>uteroplacental insufficiency</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
            Primary PPH = &gt;<strong>500 mL</strong> within 24h (vaginal)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
            Cardinal movements order: <strong>EDFIREES</strong>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🗺️</span> Color Legend
        </h3>
        <div className="space-y-3">
          {[
            {
              color: "bg-amber-50 border-amber-400",
              badge: "bg-amber-500",
              label: "⭐ EXAM FLAG",
              desc: "Content specifically highlighted by the doctor as exam-relevant or tested in past exams.",
            },
            {
              color: "bg-teal-50 border-teal-400",
              badge: "bg-teal-500",
              label: "📢 DOCTOR'S EXPLANATION",
              desc: "Verbal elaboration by the doctor beyond the slide content — weaved into the relevant section.",
            },
            {
              color: "bg-red-50 border-red-400",
              badge: "bg-red-500",
              label: "⚠️ WARNING",
              desc: "Critical clinical warnings — errors that could cause patient harm or common exam traps.",
            },
            {
              color: "bg-blue-50 border-blue-200",
              badge: "bg-blue-500",
              label: "💡 EXPLANATION",
              desc: "Answer explanations for MCQs, providing clinical reasoning.",
            },
          ].map((item) => (
            <div key={item.label} className={`flex items-start gap-3 rounded-xl border-l-4 p-3 ${item.color}`}>
              <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${item.badge}`}></div>
              <div>
                <p className="font-bold text-sm text-gray-800">{item.label}</p>
                <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
