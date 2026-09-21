import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ChapterPage } from "./pages/ChapterPage";
import { QuizPage } from "./pages/QuizPage";
import { FlashcardsPage } from "./pages/FlashcardsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rozdzial/:id" element={<ChapterPage />} />
        <Route path="rozdzial/:id/quiz" element={<QuizPage />} />
        <Route path="rozdzial/:id/fiszki" element={<FlashcardsPage />} />
      </Route>
    </Routes>
  );
}
