import { useState } from "react";
import NoteRenderer from "./components/NoteRenderer";
import MCQSection from "./components/MCQSection";
import ShortAnswerSection from "./components/ShortAnswerSection";
import FlashcardSection from "./components/FlashcardSection";
import MnemonicsSection from "./components/MnemonicsSection";
import TagsSection from "./components/TagsSection";
import UploadBanner from "./components/UploadBanner";
import { sampleStudyFile } from "./data/sampleStudyFile";

const TABS = [
  { id: "notes", label: "📄 Notes", shortLabel: "Notes" },
  { id: "mcqs", label: "❓ MCQs", shortLabel: "MCQs" },
  { id: "short", label: "✏️ Short Answers", shortLabel: "S.Answers" },
  { id: "flash", label: "🃏 Flashcards", shortLabel: "Flashcards" },
  { id: "mnemonics", label: "🧠 Mnemonics", shortLabel: "Mnemonics" },
  { id: "tags", label: "🏷️ Tags & Summary", shortLabel: "Summary" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("notes");
  const [fileLoaded, setFileLoaded] = useState(false);
  const file = sampleStudyFile;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* ── Top Navigation Bar ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-9 h-9 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                <span className="text-white font-black text-base">OB</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-gray-800 text-sm leading-tight">OB/GYN Study Hub</p>
                <p className="text-xs text-gray-500 leading-tight">4th Year Clinical · Minya, Egypt</p>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-3 py-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                <span className="text-rose-700 text-xs font-semibold">{file.topic}</span>
              </div>
              <a
                href="#upload"
                className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-all shadow-sm"
              >
                + Upload File
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* ── Upload Zone ── */}
        <section id="upload">
          <UploadBanner onFileLoaded={() => setFileLoaded(true)} />
        </section>

        {/* ── Lecture Header Card ── */}
        <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-pink-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          {/* decorative circles */}
          <div className="absolute -top-8 -right-8 w-48 h-48 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-12 -left-8 w-64 h-64 bg-white/5 rounded-full"></div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                    📚 {file.topic}
                  </span>
                  <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ High-Yield File
                  </span>
                  {fileLoaded && (
                    <span className="bg-emerald-400 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full">
                      ✅ Uploaded
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-black leading-tight mb-2">{file.title}</h1>
                <p className="text-rose-100 text-sm">{file.subtitle}</p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { n: file.mcqs.length, label: "MCQs" },
                  { n: file.flashcards.length, label: "Cards" },
                  { n: file.mnemonics.length, label: "Mnemonics" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-xl px-4 py-3 text-center">
                    <div className="text-2xl font-black">{s.n}</div>
                    <div className="text-xs text-rose-200 font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instruction Key */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-amber-400/20 border border-amber-400/40 text-amber-200 text-xs font-semibold px-3 py-1 rounded-full">
                ⭐ = Exam Flagged
              </span>
              <span className="bg-teal-400/20 border border-teal-400/40 text-teal-200 text-xs font-semibold px-3 py-1 rounded-full">
                📢 = Doctor's Explanation
              </span>
              <span className="bg-red-400/20 border border-red-400/40 text-red-200 text-xs font-semibold px-3 py-1 rounded-full">
                ⚠️ = Clinical Warning
              </span>
              <span className="bg-white/10 border border-white/20 text-white/70 text-xs font-semibold px-3 py-1 rounded-full">
                6 Components Included
              </span>
            </div>
          </div>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-rose-500 text-rose-600 bg-rose-50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
                {tab.id === "mcqs" && (
                  <span className="bg-rose-100 text-rose-600 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {file.mcqs.length}
                  </span>
                )}
                {tab.id === "flash" && (
                  <span className="bg-teal-100 text-teal-600 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {file.flashcards.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Tab Content ── */}
        <div className="min-h-96">
          {activeTab === "notes" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="bg-rose-100 rounded-xl p-2.5">
                  <span className="text-rose-600 text-xl">📄</span>
                </div>
                <div>
                  <h2 className="font-bold text-gray-800 text-lg">Reformatted Lecture Notes</h2>
                  <p className="text-xs text-gray-500">
                    Original lecture structure preserved · Doctor explanations highlighted in teal · Exam flags in amber
                  </p>
                </div>
              </div>
              <NoteRenderer blocks={file.notes} />
            </div>
          )}

          {activeTab === "mcqs" && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-blue-100 rounded-xl p-2.5">
                  <span className="text-blue-600 text-xl">❓</span>
                </div>
                <div>
                  <h2 className="font-bold text-gray-800 text-lg">Multiple Choice Questions</h2>
                  <p className="text-xs text-gray-500">
                    {file.mcqs.length} questions · Click an option to answer · ⭐ = high-yield exam question
                  </p>
                </div>
              </div>
              <MCQSection mcqs={file.mcqs} />
            </div>
          )}

          {activeTab === "short" && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-purple-100 rounded-xl p-2.5">
                  <span className="text-purple-600 text-xl">✏️</span>
                </div>
                <div>
                  <h2 className="font-bold text-gray-800 text-lg">Short Answer Questions</h2>
                  <p className="text-xs text-gray-500">
                    {file.shortAnswers.length} questions · Write your answer first, then reveal the model answer
                  </p>
                </div>
              </div>
              <ShortAnswerSection questions={file.shortAnswers} />
            </div>
          )}

          {activeTab === "flash" && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-teal-100 rounded-xl p-2.5">
                  <span className="text-teal-600 text-xl">🃏</span>
                </div>
                <div>
                  <h2 className="font-bold text-gray-800 text-lg">Flashcards</h2>
                  <p className="text-xs text-gray-500">
                    {file.flashcards.length} cards · Grid or Stack mode · Tap to flip · Filter exam-only cards
                  </p>
                </div>
              </div>
              <FlashcardSection flashcards={file.flashcards} />
            </div>
          )}

          {activeTab === "mnemonics" && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-violet-100 rounded-xl p-2.5">
                  <span className="text-violet-600 text-xl">🧠</span>
                </div>
                <div>
                  <h2 className="font-bold text-gray-800 text-lg">Mnemonics & Memory Aids</h2>
                  <p className="text-xs text-gray-500">
                    {file.mnemonics.length} mnemonics · Click any card to expand and see the full breakdown
                  </p>
                </div>
              </div>
              <MnemonicsSection mnemonics={file.mnemonics} />
            </div>
          )}

          {activeTab === "tags" && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-orange-100 rounded-xl p-2.5">
                  <span className="text-orange-600 text-xl">🏷️</span>
                </div>
                <div>
                  <h2 className="font-bold text-gray-800 text-lg">Categories, Tags & Cross-Links</h2>
                  <p className="text-xs text-gray-500">
                    Study file overview · Related topics · High-yield summary · Color code legend
                  </p>
                </div>
              </div>
              <TagsSection
                tags={file.tags}
                notes={file.notes}
                mcqCount={file.mcqs.length}
                flashcardCount={file.flashcards.length}
                mnemonicCount={file.mnemonics.length}
                shortAnswerCount={file.shortAnswers.length}
              />
            </div>
          )}
        </div>

        {/* ── How It Works ── */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">How This Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                icon: "📎",
                title: "1. Upload Your Lecture",
                desc: "Drag and drop a PDF, DOCX slide deck, or audio transcript (TXT). Your file's structure is always preserved.",
                color: "bg-rose-50 border-rose-200",
              },
              {
                icon: "⚙️",
                title: "2. Auto-Generation",
                desc: "Reformatted notes, 8–12 MCQs, 5–8 short answers, 15–25 flashcards, 3–8 mnemonics, and topic tags — all created automatically.",
                color: "bg-blue-50 border-blue-200",
              },
              {
                icon: "⭐",
                title: "3. Exam Flags & Doctor Notes",
                desc: "Doctor verbal explanations appear in teal boxes. Anything flagged as 'exam-relevant' by the doctor appears in amber ⭐ boxes.",
                color: "bg-amber-50 border-amber-200",
              },
              {
                icon: "🃏",
                title: "4. Interactive Study",
                desc: "Answer MCQs with instant feedback. Flip flashcards. Reveal short answers. Use Stack mode for rapid-fire review before exams.",
                color: "bg-teal-50 border-teal-200",
              },
              {
                icon: "🧠",
                title: "5. Mnemonics",
                desc: "Click-to-expand memory aids with full letter breakdowns and clinical context. Color-coded per topic for easy scanning.",
                color: "bg-violet-50 border-violet-200",
              },
              {
                icon: "🔗",
                title: "6. Cross-Links & Tags",
                desc: "Each file is tagged by topic and linked to related lectures — so you can connect normal labour to PPH, Bishop score to induction, etc.",
                color: "bg-pink-50 border-pink-200",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl border p-5 ${item.color}`}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── My Core Rules Display ── */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span>📋</span> My Core Instructions (Always Followed)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { n: "01", rule: "Exact Arrangement", desc: "The source file's structure IS the output structure. Sections are never reordered." },
              { n: "02", rule: "Zero Details Missed", desc: "Every bullet, table, annotation, marginal note, and number in the PDF appears in the output." },
              { n: "03", rule: "No Clinical Changes", desc: "Values, thresholds, and clinical facts are preserved exactly — only clarity is added." },
              { n: "04", rule: "Doctor's Words Highlighted", desc: "Verbal elaborations appear in 📢 teal boxes, clearly separate from slide text." },
              { n: "05", rule: "Exam Flags Unmistakable", desc: "Anything the doctor marks as testable appears in ⭐ amber boxes — impossible to miss." },
              { n: "06", rule: "Doctor Notes Woven In", desc: "Doctor explanations are inserted at the relevant section, not in a separate appendix." },
              { n: "07", rule: "HTML + DOCX Always", desc: "Every output includes interactive HTML and a print-ready DOCX. Both generated simultaneously." },
              { n: "08", rule: "Six Components Every Time", desc: "Notes · MCQs · Short Answers · Flashcards · Mnemonics · Tags/Cross-links — always all six." },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex-shrink-0 bg-rose-500 text-white font-black text-sm w-9 h-9 rounded-xl flex items-center justify-center">
                  {item.n}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{item.rule}</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="text-center py-6 text-xs text-gray-400 space-y-1">
          <p className="font-semibold text-gray-500">OB/GYN Study Hub · 4th Year Clinical · Minya, Egypt</p>
          <p>Upload any lecture file → get a complete dual-format study file in seconds</p>
        </footer>
      </main>
    </div>
  );
}
