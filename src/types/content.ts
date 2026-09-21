export interface Figure {
  id: string;
  src: string;
  caption: string;
}

export interface Section {
  id: string;
  title: string;
  page: string;
  body: string;
  figures?: Figure[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Flashcard {
  id: string;
  term: string;
  definition: string;
}

export type ChapterKind = "chapter" | "appendix" | "reference";

export interface Chapter {
  id: string;
  kind: ChapterKind;
  number: string;
  title: string;
  summary: string;
  sections: Section[];
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
}
