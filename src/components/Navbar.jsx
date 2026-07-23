import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../assets/logo";

const offerItems = [
  { title: "Projekty", desc: "Indywidualne koncepcje ogrodów" },
  { title: "Aranżacja", desc: "Kompletna realizacja od A do Z" },
  { title: "Zarządzanie", desc: "Pielęgnacja i utrzymanie zieleni" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [offerOpen, setOfferOpen] = useState(false); // "Oferta" dropdown
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const offerRef = useRef(null);

  // Zamknij dropdown "Oferta" po kliknięciu poza nim
  useEffect(() => {
    function handleClick(e) {
      if (offerRef.current && !offerRef.current.contains(e.target)) {
        setOfferOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Autofokus na input po rozwinięciu wyszukiwarki
  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-semibold text-lg text-forest">
          <Logo color="#000000" />
        </span>

        <ul className="hidden md:flex gap-8 text-sm text-ink/80 items-center">
          <li>Strona główna</li>

          {/* Rozwijana "Oferta" */}
          <li ref={offerRef} className="relative">
            <button
              onClick={() => setOfferOpen((v) => !v)}
              className="flex items-center gap-1 hover:text-forest transition-colors"
            >
              Oferta
              <motion.span
                animate={{ rotate: offerOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs"
              >
                ▾
              </motion.span>
            </button>

            <AnimatePresence>
              {offerOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg p-2 w-56"
                >
                  {offerItems.map((item) => (
                    <a
                      key={item.title}
                      href="#oferta"
                      onClick={() => setOfferOpen(false)}
                      className="block px-4 py-2.5 rounded-lg hover:bg-offer transition-colors"
                    >
                      <p className="text-sm font-medium text-ink">
                        {item.title}
                      </p>
                      <p className="text-xs text-ink/50">{item.desc}</p>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li className="hover:text-forest transition-colors cursor-pointer">
            O nas
          </li>
          <li className="hover:text-forest transition-colors cursor-pointer">
            Realizacje
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Wysuwana wyszukiwarka */}
          <div className="flex items-center">
            <AnimatePresence>
              {searchOpen && (
                <motion.input
                  ref={searchInputRef}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  type="text"
                  placeholder="Szukaj..."
                  className="bg-white/70 rounded-full px-4 py-2 text-sm outline-none mr-2"
                  onBlur={() => setSearchOpen(false)}
                />
              )}
            </AnimatePresence>
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="p-2 rounded-full hover:bg-white/60 transition-colors"
              aria-label="Szukaj"
            >
              🔍
            </button>
          </div>

          <button className="bg-forest text-white text-sm px-5 py-2 rounded-full hover:bg-forest-light transition-colors">
            Skontaktuj się
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-ink transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-ink transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <ul className="flex flex-col gap-4 px-6 pb-6 text-ink/80">
          <li>Strona główna</li>
          <li>Oferta</li>
          <li>O nas</li>
          <li>Realizacje</li>
          <button className="bg-forest text-white text-sm px-5 py-2 rounded-full w-fit">
            Skontaktuj się
          </button>
        </ul>
      </motion.div>
    </motion.header>
  );
}
