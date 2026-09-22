import { useMemo, useState } from "react";
import { ballisticLoads } from "../../data/ballistics";

export function BallisticsCalculator() {
  const [loadId, setLoadId] = useState(ballisticLoads[0].id);
  const load = ballisticLoads.find((l) => l.id === loadId) ?? ballisticLoads[0];
  const [range, setRange] = useState(load.rows[Math.min(5, load.rows.length - 1)].range);

  const availableRanges = load.rows.map((r) => r.range);
  const row = load.rows.find((r) => r.range === range) ?? load.rows[0];

  const zeroRow = useMemo(
    () => load.rows.find((r) => r.bulletPath === 0 || Math.abs(r.bulletPath) < 0.5) ?? null,
    [load],
  );

  function selectLoad(id: string) {
    setLoadId(id);
    const l = ballisticLoads.find((x) => x.id === id);
    if (l) setRange(l.rows[Math.min(5, l.rows.length - 1)].range);
  }

  return (
    <div>
      <div className="mb-4">
        <label className="mb-1 block text-xs text-neutral-500">Nabój / obciążenie</label>
        <select
          value={loadId}
          onChange={(e) => selectLoad(e.target.value)}
          className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 sm:w-auto"
        >
          {ballisticLoads.map((l) => (
            <option key={l.id} value={l.id}>
              {l.label} ({l.bullet})
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-neutral-500">
          Zero: {load.zero} · Wysokość celownika: {load.sightHeight}
        </p>
      </div>

      <div className="mb-4">
        <label className="mb-1 block text-xs text-neutral-500">Zasięg (m)</label>
        <div className="flex flex-wrap gap-1">
          {availableRanges.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                range === r
                  ? "bg-amber-500 text-neutral-950"
                  : "border border-neutral-700 text-neutral-300 hover:border-neutral-500"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Stat label="Prędkość" value={`${row.v.toLocaleString("pl-PL")} fps`} />
        <Stat label="Energia" value={`${row.energy.toLocaleString("pl-PL")} ft-lb`} />
        <Stat label="Czas lotu" value={`${row.tof.toFixed(3)} s`} />
        <Stat
          label="Bullet Path"
          value={`${row.bulletPath > 0 ? "+" : ""}${row.bulletPath.toFixed(2)} cala`}
          hint="względem linii celowania"
        />
        <Stat label="Drop" value={`${row.drop.toFixed(2)} cala`} hint="czysty spadek od osi lufy" />
        <Stat
          label="Znos od wiatru"
          value={`${row.drift.toFixed(2)} cala`}
          hint="przy wietrze bocznym 10 mph"
        />
      </div>

      {zeroRow && zeroRow.range !== range && (
        <p className="mt-4 text-xs text-neutral-500">
          Ten nabój jest zerowany na {load.zero} — na tym dystansie Bullet Path ≈ 0.
        </p>
      )}

      <p className="mt-4 text-xs text-neutral-500">
        Dane: Dodatek H (Ballistics Chart), Sierra Ballistics III, warunki referencyjne 59°F,
        29,53 cala Hg, wilgotność 78%, wiatr boczny 10 mph (dla obciążeń .50 cal: −10 mph).
        Wartości bezpośrednio z tabel co 100 m — bez interpolacji między punktami.
      </p>
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-md border border-neutral-800 bg-neutral-900 p-3">
      <p className="text-xs text-neutral-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-neutral-100">{value}</p>
      {hint && <p className="mt-0.5 text-[11px] text-neutral-600">{hint}</p>}
    </div>
  );
}
