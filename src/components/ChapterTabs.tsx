import { NavLink } from "react-router-dom";

const tabs = [
  { to: "", label: "Lekcja", end: true },
  { to: "quiz", label: "Quiz", end: false },
  { to: "fiszki", label: "Fiszki", end: false },
];

export function ChapterTabs({ chapterId }: { chapterId: string }) {
  return (
    <div className="mb-6 flex gap-1 border-b border-neutral-800">
      {tabs.map((tab) => (
        <NavLink
          key={tab.label}
          to={`/rozdzial/${chapterId}${tab.to ? `/${tab.to}` : ""}`}
          end={tab.end}
          className={({ isActive }) =>
            `border-b-2 px-3 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-amber-500 text-amber-400"
                : "border-transparent text-neutral-400 hover:text-neutral-200"
            }`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
