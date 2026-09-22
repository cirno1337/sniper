import { useMemo, useState } from "react";

const HEIGHT_PRESETS = [
  { label: "1,8 m (6 stóp, stojący)", value: 1.8 },
  { label: "1,75 m (5'9\", stojący)", value: 1.75 },
  { label: "1,7 m (5'6\", stojący)", value: 1.7 },
  { label: "1 m (39 cali, klęczący/kucający)", value: 1 },
  { label: "0,5 m (19 cali, niska sylwetka)", value: 0.5 },
];

const MIL_ROWS = [6.0, 5.5, 5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.8, 1.5, 1.0, 0.5, 0.2, 0.1];

function computeDistance(heightM: number, mils: number): number | null {
  if (mils <= 0) return null;
  return (heightM * 1000) / mils;
}

export function RangeEstimator() {
  const [heightM, setHeightM] = useState(1.8);
  const [milsInput, setMilsInput] = useState("3.5");

  const mils = parseFloat(milsInput.replace(",", "."));
  const distance = useMemo(
    () => (Number.isNaN(mils) ? null : computeDistance(heightM, mils)),
    [heightM, mils],
  );

  return (
    <div>
      <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
        <p className="mb-3 text-sm text-neutral-300">
          Wzór mil-relation: <span className="font-mono text-amber-400">(wysokość celu w metrach × 1000) / odczyt w milach = odległość w metrach</span>
        </p>

        <div className="mb-1 text-xs text-neutral-500">Wysokość celu</div>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {HEIGHT_PRESETS.map((p) => (
            <button
              key={p.value}
              onClick={() => setHeightM(p.value)}
              className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                heightM === p.value
                  ? "bg-amber-500 text-neutral-950"
                  : "border border-neutral-700 text-neutral-300 hover:border-neutral-500"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="mb-4 flex items-center gap-2">
          <input
            type="number"
            step="0.01"
            value={heightM}
            onChange={(e) => setHeightM(parseFloat(e.target.value) || 0)}
            className="w-28 rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100"
          />
          <span className="text-xs text-neutral-500">m (własna wartość)</span>
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-xs text-neutral-500">Odczyt na siatce celowniczej (mile)</label>
          <input
            value={milsInput}
            onChange={(e) => setMilsInput(e.target.value)}
            inputMode="decimal"
            className="w-32 rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100"
          />
        </div>

        <div className="rounded-md bg-neutral-800/60 p-4">
          <p className="text-2xl font-semibold text-neutral-50">
            {distance === null ? "—" : Math.round(distance).toLocaleString("pl-PL")}
            <span className="ml-1 text-base text-neutral-400">m</span>
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-2 text-xs uppercase tracking-wide text-neutral-500">
          Tabela referencyjna dla wysokości {heightM.toLocaleString("pl-PL")} m (jak Table J-1)
        </p>
        <div className="overflow-x-auto rounded-md border border-neutral-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400">
                <th className="px-3 py-2 text-left">Mile</th>
                <th className="px-3 py-2 text-left">Odległość (m)</th>
              </tr>
            </thead>
            <tbody>
              {MIL_ROWS.map((m) => {
                const d = computeDistance(heightM, m);
                const isCurrent = Math.abs(m - mils) < 0.001;
                return (
                  <tr
                    key={m}
                    className={`border-b border-neutral-900 last:border-0 ${isCurrent ? "bg-amber-500/10" : ""}`}
                  >
                    <td className="px-3 py-1.5 text-neutral-300">{m}</td>
                    <td className="px-3 py-1.5 text-neutral-100">
                      {d === null ? "—" : Math.round(d).toLocaleString("pl-PL")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        Formuła i tabela referencyjna: Dodatek J (Range Estimation Table) oraz sekcja
        „Szacowanie odległości" w Rozdziale 4.
      </p>
    </div>
  );
}
