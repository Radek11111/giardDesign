import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import searchIcon from "../../assets/icons/searchIcon.png";

export default function SearchButton() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <div className="flex items-center">
      <button
        aria-label="Szukaj"
        className="p-1"
        onClick={() => setIsSearchOpen((prev) => !prev)}
      >
        <img
          src={searchIcon}
          alt=""
          aria-hidden="true"
          className="w-5 h-5 object-contain"
        />
      </button>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.input
            ref={inputRef}
            type="text"
            placeholder="Szukaj..."
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 180, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="ml-2 rounded-full bg-offer px-4 py-1.5 text-sm outline-none"
            onBlur={() => setIsSearchOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
