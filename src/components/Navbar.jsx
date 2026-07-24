import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import giarddesign from "../assets/giarddesign.png";
import searchIcon from "../assets/searchIcon.png";
import offerArrow from "../assets/offerArrow.png"; 

const offerItems = [
  { title: "Projekty", desc: "Indywidualne koncepcje ogrodów" },
  { title: "Aranżacja", desc: "Kompletna realizacja od A do Z" },
  { title: "Zarządzanie", desc: "Pielęgnacja i utrzymanie zieleni" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const offerRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (offerRef.current && !offerRef.current.contains(e.target)) {
        setOfferOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  return (
    <header className="relative z-50 w-full bg-white">
      <nav className="flex items-center justify-between px-6 py-6 ">
        <div className="hidden md:flex items-center tracking-tight  text-sm text-ink gap-12">
          <div ref={offerRef} className="relative">
            <button
              onClick={() => setOfferOpen((v) => !v)}
              className="flex items-center gap-1.5 hover:text-forest transition-colors"
            >
              Oferta
              <motion.span
                animate={{ rotate: offerOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className=""
              >
                <img src={offerArrow} alt="arrow" />
              </motion.span>
            </button>

            <AnimatePresence>
              {offerOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full mt-3 left-0 bg-white rounded-xl shadow-lg p-2 w-56"
                >
                  {offerItems.map((item) => (
                    <a
                      key={item.title}
                      href="#oferta"
                      onClick={() => setOfferOpen(false)}
                      className="block px-4 py-2.5 rounded-lg hover:bg-offer transition-colors"
                    >
                      <p className="">{item.title}</p>
                      <p className="">{item.desc}</p>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#o-firmie" className="hover:text-forest transition-colors">
            O firmie
          </a>
          <a href="#realizacje" className="hover:text-forest transition-colors">
            Realizacje
          </a>
          <a href="#kontakt" className="hover:text-forest transition-colors">
            Kontakt
          </a>

          <div className="flex items-center">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="p-1 "
              aria-label="Szukaj"
            >
              <img src={searchIcon} alt="" className="w-5 h-5 object-contain" />
            </button>
            <AnimatePresence>
              {searchOpen && (
                <motion.input
                  ref={searchInputRef}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 180, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  type="text"
                  placeholder="Szukaj..."
                  className="bg-offer rounded-full px-4 py-1.5 text-sm outline-none ml-2"
                  onBlur={() => setSearchOpen(false)}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        <span className="text-lg tracking-tight">
          <img src={giarddesign} alt="Giard Design" className="" />
        </span>

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
        <ul className="flex flex-col gap-4 px-6 pb-6 text-ink">
          <li>Oferta</li>
          <li>O firmie</li>
          <li>Realizacje</li>
          <li>Kontakt</li>
        </ul>
      </motion.div>
    </header>
  );
}
