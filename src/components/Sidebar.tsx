import { NavLink } from "react-router-dom";
import { chapters } from "../content";
import { useProgressContext } from "../context/ProgressContext";
import { ProgressBar } from "./ProgressBar";
import { kindLabelPlural } from "../lib/kindLabel";

const tools = [
  { to: "/egzamin", label: "Egzamin końcowy" },
  { to: "/fiszki", label: "Wszystkie fiszki" },
  { to: "/narzedzia", label: "Kalkulatory" },
];

export function Sidebar() {
  const { chapterCompletionPercent } = useProgressContext();
  const groups = ["chapter", "appendix", "reference"] as const;

  return (
    <nav className="flex h-full w-64 shrink-0 flex-col gap-6 overflow-y-auto border-r border-neutral-800 bg-neutral-950 p-4">
      <NavLink to="/" className="text-lg font-semibold text-neutral-100">
        Szkolenie snajperskie
      </NavLink>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Narzędzia
        </p>
        <ul className="flex flex-col gap-1">
          {tools.map((t) => (
            <li key={t.to}>
              <NavLink
                to={t.to}
                className={({ isActive }) =>
                  `block rounded-md px-2 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-amber-500/15 text-amber-400"
                      : "text-neutral-300 hover:bg-neutral-900"
                  }`
                }
              >
                {t.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {groups.map((kind) => {
        const items = chapters.filter((c) => c.kind === kind);
        if (items.length === 0) return null;
        return (
          <div key={kind}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {kindLabelPlural[kind]}
            </p>
            <ul className="flex flex-col gap-1">
              {items.map((c) => {
                const percent = chapterCompletionPercent(c);
                return (
                  <li key={c.id}>
                    <NavLink
                      to={`/rozdzial/${c.id}`}
                      className={({ isActive }) =>
                        `block rounded-md px-2 py-1.5 text-sm transition-colors ${
                          isActive
                            ? "bg-amber-500/15 text-amber-400"
                            : "text-neutral-300 hover:bg-neutral-900"
                        }`
                      }
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate">
                          {c.number}. {c.title}
                        </span>
                        <span className="shrink-0 text-xs text-neutral-500">{percent}%</span>
                      </div>
                      <div className="mt-1">
                        <ProgressBar percent={percent} />
                      </div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
