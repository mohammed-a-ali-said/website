import { NoteBlock } from "../types";

interface Props {
  blocks: NoteBlock[];
}

export default function NoteRenderer({ blocks }: Props) {
  return (
    <div className="space-y-2">
      {blocks.map((block, idx) => (
        <BlockItem key={idx} block={block} />
      ))}
    </div>
  );
}

function BlockItem({ block }: { block: NoteBlock }) {
  switch (block.type) {
    case "heading1":
      return (
        <div className="mt-8 mb-3">
          <h2 className="text-xl font-bold text-rose-700 border-b-2 border-rose-200 pb-2 flex items-center gap-2">
            <span className="inline-block w-1 h-6 bg-rose-500 rounded-full"></span>
            {block.content}
          </h2>
        </div>
      );

    case "heading2":
      return (
        <div className="mt-5 mb-2">
          <h3 className="text-lg font-semibold text-rose-600 flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-rose-400"></span>
            {block.content}
          </h3>
        </div>
      );

    case "heading3":
      return (
        <div className="mt-3 mb-1">
          <h4 className="text-base font-semibold text-rose-500 pl-4 border-l-2 border-rose-300">
            {block.content}
          </h4>
        </div>
      );

    case "text":
      return <p className="text-gray-700 leading-relaxed pl-1">{block.content}</p>;

    case "bullet":
      return (
        <div className="flex gap-2 pl-4">
          <span className="text-rose-400 mt-1 text-sm flex-shrink-0">▸</span>
          <p className="text-gray-700 leading-relaxed">{block.content}</p>
        </div>
      );

    case "subbullet":
      return (
        <div className="flex gap-2 pl-10">
          <span className="text-gray-400 mt-1 text-sm flex-shrink-0">◦</span>
          <p className="text-gray-600 leading-relaxed text-sm">{block.content}</p>
        </div>
      );

    case "numbered":
      return (
        <div className="flex gap-2 pl-4">
          <span className="text-rose-500 font-bold text-sm flex-shrink-0 mt-0.5">→</span>
          <p className="text-gray-700 leading-relaxed">{block.content}</p>
        </div>
      );

    case "definition":
      return (
        <div className="pl-4 border-l-4 border-blue-400 bg-blue-50 rounded-r-lg p-3 my-2">
          <p className="text-blue-900 leading-relaxed text-sm">{block.content}</p>
        </div>
      );

    case "doctor":
      return (
        <div className="my-3 rounded-xl border-l-4 border-teal-500 bg-teal-50 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              📢 Dr. Note
            </div>
            <p className="text-teal-900 leading-relaxed text-sm font-medium">{block.content}</p>
          </div>
        </div>
      );

    case "exam":
      return (
        <div className="my-3 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              ⭐ EXAM
            </div>
            <p className="text-amber-900 leading-relaxed text-sm font-semibold">{block.content}</p>
          </div>
        </div>
      );

    case "warning":
      return (
        <div className="my-3 rounded-xl border-l-4 border-red-500 bg-red-50 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              ⚠️ WARN
            </div>
            <p className="text-red-900 leading-relaxed text-sm font-semibold">{block.content}</p>
          </div>
        </div>
      );

    case "table":
      if (!block.tableData) return null;
      return (
        <div className="my-4 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <div className="bg-rose-600 text-white text-sm font-semibold px-4 py-2 rounded-t-xl">
            {block.content}
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-rose-50">
                {block.tableData.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-2 text-left text-rose-800 font-semibold border-b border-rose-200"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.tableData.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2 text-gray-700 border-b border-gray-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return <p className="text-gray-700">{block.content}</p>;
  }
}
