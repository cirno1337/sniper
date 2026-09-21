import type { Chapter } from "../types/content";
import { ch01 } from "./ch01";
import { ch02 } from "./ch02";
import { ch03 } from "./ch03";
import { ch04 } from "./ch04";
import { ch05 } from "./ch05";
import { ch06 } from "./ch06";
import { appA } from "./app-a";
import { appB } from "./app-b";
import { appC } from "./app-c";
import { appD } from "./app-d";
import { appE } from "./app-e";
import { appF } from "./app-f";
import { appG } from "./app-g";
import { appH } from "./app-h";
import { appI } from "./app-i";
import { appJ } from "./app-j";
import { appK } from "./app-k";
import { appL } from "./app-l";
import { appM } from "./app-m";
import { appN } from "./app-n";
import { appO } from "./app-o";
import { glossary } from "./glossary";
import { bibliography } from "./bibliography";

export const chapters: Chapter[] = [
  ch01, ch02, ch03, ch04, ch05, ch06,
  appA, appB, appC, appD, appE, appF, appG, appH, appI, appJ, appK, appL, appM, appN, appO,
  glossary, bibliography,
];

export function getChapter(id: string): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}
