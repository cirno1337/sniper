export interface UnitDef {
  id: string;
  label: string;
  /** factor to convert 1 unit into the category's base unit */
  toBase: number;
}

export interface UnitCategory {
  id: string;
  label: string;
  baseLabel: string;
  units: UnitDef[];
}

// Precyzyjne standardowe współczynniki SI (dokładniejsze niż zaokrąglone
// wartości polowe z Dodatku A, ale spójne z nimi co do rzędu wielkości).
export const unitCategories: UnitCategory[] = [
  {
    id: "length",
    label: "Długość",
    baseLabel: "metry",
    units: [
      { id: "mm", label: "milimetr (mm)", toBase: 0.001 },
      { id: "cm", label: "centymetr (cm)", toBase: 0.01 },
      { id: "m", label: "metr (m)", toBase: 1 },
      { id: "km", label: "kilometr (km)", toBase: 1000 },
      { id: "in", label: "cal (in)", toBase: 0.0254 },
      { id: "ft", label: "stopa (ft)", toBase: 0.3048 },
      { id: "yd", label: "jard (yd)", toBase: 0.9144 },
      { id: "mi", label: "mila lądowa (mi)", toBase: 1609.344 },
      { id: "nmi", label: "mila morska (nmi)", toBase: 1852 },
    ],
  },
  {
    id: "weight",
    label: "Waga",
    baseLabel: "kilogramy",
    units: [
      { id: "g", label: "gram (g)", toBase: 0.001 },
      { id: "kg", label: "kilogram (kg)", toBase: 1 },
      { id: "oz", label: "uncja (oz)", toBase: 0.0283495 },
      { id: "lb", label: "funt (lb)", toBase: 0.45359237 },
      { id: "grain", label: "gran (grain, waga pocisku)", toBase: 0.00006479891 },
    ],
  },
  {
    id: "volume",
    label: "Objętość (płyny)",
    baseLabel: "litry",
    units: [
      { id: "ml", label: "mililitr (ml)", toBase: 0.001 },
      { id: "l", label: "litr (l)", toBase: 1 },
      { id: "galUS", label: "galon US (gal)", toBase: 3.785411784 },
    ],
  },
];

export function convert(value: number, fromUnitId: string, toUnitId: string, category: UnitCategory): number | null {
  const from = category.units.find((u) => u.id === fromUnitId);
  const to = category.units.find((u) => u.id === toUnitId);
  if (!from || !to) return null;
  return (value * from.toBase) / to.toBase;
}

export function fahrenheitToCelsius(f: number): number {
  return ((f - 32) * 5) / 9;
}

export function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32;
}
