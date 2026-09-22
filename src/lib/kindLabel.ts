import type { ChapterKind } from "../types/content";

export const kindLabel: Record<ChapterKind, string> = {
  chapter: "Rozdział",
  appendix: "Dodatek",
  reference: "Materiał",
};

export const kindLabelPlural: Record<ChapterKind, string> = {
  chapter: "Rozdziały",
  appendix: "Dodatki",
  reference: "Materiały",
};
