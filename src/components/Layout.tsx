import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-full min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-amber-500 focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-neutral-950"
      >
        Przejdź do treści
      </a>

      {sidebarOpen && (
        <button
          aria-label="Zamknij menu"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 transform transition-transform duration-200 ease-out lg:static lg:z-auto lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onNavigate={() => setSidebarOpen(false)} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b border-neutral-800 bg-neutral-950 px-4 py-3 lg:hidden">
          <button
            aria-label="Otwórz menu"
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen(true)}
            className="rounded-md border border-neutral-700 p-1.5 text-neutral-300 hover:border-neutral-500"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <span className="font-semibold text-neutral-100">Szkolenie snajperskie</span>
        </header>

        <main id="main-content" className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
