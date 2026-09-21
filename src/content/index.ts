import type { Chapter } from "../types/content";
import { ch01 } from "./ch01";
import { ch02 } from "./ch02";
import { ch03 } from "./ch03";
import { ch04 } from "./ch04";

export const chapters: Chapter[] = [ch01, ch02, ch03, ch04];

export function getChapter(id: string): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}
