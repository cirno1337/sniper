import { useState } from "react";
import { UnitConverter } from "../components/tools/UnitConverter";
import { BallisticsCalculator } from "../components/tools/BallisticsCalculator";
import { RangeEstimator } from "../components/tools/RangeEstimator";

const TABS = [
  { id: "converter", label: "Konwerter jednostek" },
  { id: "ballistics", label: "Kalkulator balistyczny" },
  { id: "range", label: "Szacowanie odległości" },
] as const;

export function ToolsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("converter");

  return (
    <div>
      <p className="text-sm font-medium text-amber-400">Narzędzia</p>
      <h1 className="mt-1 text-2xl font-bold text-neutral-50">Kalkulatory</h1>
      <p className="mt-3 text-neutral-400">
        Interaktywne narzędzia zbudowane na danych z Dodatku A (konwersje jednostek), Dodatku H
        (tabela balistyczna) i Dodatku J (szacowanie odległości).
      </p>

      <div className="mb-6 mt-4 flex gap-1 border-b border-neutral-800">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`border-b-2 px-3 py-2 text-sm font-medium transition-colors ${
              tab === t.id
                ? "border-amber-500 text-amber-400"
                : "border-transparent text-neutral-400 hover:text-neutral-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "converter" && <UnitConverter />}
      {tab === "ballistics" && <BallisticsCalculator />}
      {tab === "range" && <RangeEstimator />}
    </div>
  );
}
