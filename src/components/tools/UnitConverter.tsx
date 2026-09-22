import { useMemo, useState } from "react";
import {
  unitCategories,
  convert,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} from "../../data/units";

function formatNumber(n: number): string {
  if (!Number.isFinite(n)) return "—";
  const abs = Math.abs(n);
  const decimals = abs >= 100 ? 2 : abs >= 1 ? 4 : 6;
  return n.toLocaleString("pl-PL", { maximumFractionDigits: decimals });
}

export function UnitConverter() {
  const [categoryId, setCategoryId] = useState("length");
  const category = unitCategories.find((c) => c.id === categoryId);

  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("yd");
  const [value, setValue] = useState("100");
  const [tempFrom, setTempFrom] = useState<"F" | "C">("F");
  const [tempValue, setTempValue] = useState("68");

  const numericValue = parseFloat(value.replace(",", "."));
  const result = useMemo(() => {
    if (!category || Number.isNaN(numericValue)) return null;
    return convert(numericValue, fromUnit, toUnit, category);
  }, [category, numericValue, fromUnit, toUnit]);

  const numericTemp = parseFloat(tempValue.replace(",", "."));
  const tempResult = Number.isNaN(numericTemp)
    ? null
    : tempFrom === "F"
      ? fahrenheitToCelsius(numericTemp)
      : celsiusToFahrenheit(numericTemp);

  function selectCategory(id: string) {
    setCategoryId(id);
    const cat = unitCategories.find((c) => c.id === id);
    if (cat) {
      setFromUnit(cat.units[0].id);
      setToUnit(cat.units[1]?.id ?? cat.units[0].id);
    }
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-1 rounded-md border border-neutral-800 p-1">
        {unitCategories.map((c) => (
          <button
            key={c.id}
            onClick={() => selectCategory(c.id)}
            className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
              categoryId === c.id
                ? "bg-amber-500 text-neutral-950"
                : "text-neutral-300 hover:bg-neutral-900"
            }`}
          >
            {c.label}
          </button>
        ))}
        <button
          onClick={() => setCategoryId("temp")}
          className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
            categoryId === "temp"
              ? "bg-amber-500 text-neutral-950"
              : "text-neutral-300 hover:bg-neutral-900"
          }`}
        >
          Temperatura
        </button>
      </div>

      {categoryId === "temp" ? (
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
          <div className="flex flex-wrap items-end gap-3">
            <div>
              <label className="mb-1 block text-xs text-neutral-500">Wartość</label>
              <input
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                inputMode="decimal"
                className="w-32 rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100"
              />
            </div>
            <div className="flex items-center gap-1 rounded-md border border-neutral-700 p-1">
              {(["F", "C"] as const).map((u) => (
                <button
                  key={u}
                  onClick={() => setTempFrom(u)}
                  className={`rounded px-3 py-1.5 text-sm ${
                    tempFrom === u ? "bg-amber-500 text-neutral-950" : "text-neutral-300"
                  }`}
                >
                  °{u}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 rounded-md bg-neutral-800/60 p-4">
            <p className="text-2xl font-semibold text-neutral-50">
              {tempResult === null ? "—" : formatNumber(tempResult)}
              <span className="ml-1 text-base text-neutral-400">°{tempFrom === "F" ? "C" : "F"}</span>
            </p>
          </div>
          <p className="mt-3 text-xs text-neutral-500">
            °F → °C: odjąć 32, pomnożyć przez 5, podzielić przez 9. °C → °F: pomnożyć przez 9,
            podzielić przez 5, dodać 32 (Dodatek A, Table A-6).
          </p>
        </div>
      ) : (
        category && (
          <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
            <div className="flex flex-wrap items-end gap-3">
              <div>
                <label className="mb-1 block text-xs text-neutral-500">Wartość</label>
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  inputMode="decimal"
                  className="w-32 rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-neutral-500">Z</label>
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100"
                >
                  {category.units.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => {
                  setFromUnit(toUnit);
                  setToUnit(fromUnit);
                }}
                className="rounded-md border border-neutral-700 px-3 py-2 text-sm text-neutral-300 hover:border-neutral-500"
                title="Zamień kierunek"
              >
                ⇄
              </button>
              <div>
                <label className="mb-1 block text-xs text-neutral-500">Na</label>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100"
                >
                  {category.units.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 rounded-md bg-neutral-800/60 p-4">
              <p className="text-2xl font-semibold text-neutral-50">
                {result === null ? "—" : formatNumber(result)}
                <span className="ml-1 text-base text-neutral-400">
                  {category.units.find((u) => u.id === toUnit)?.label}
                </span>
              </p>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Przeliczenie przez jednostkę bazową ({category.baseLabel}) precyzyjnymi
              współczynnikami SI — zgodnie co do rzędu wielkości ze współczynnikami z Dodatku A
              (Weights, Measures, and Conversion Tables), tu bez zaokrągleń polowych.
            </p>
          </div>
        )
      )}
    </div>
  );
}
