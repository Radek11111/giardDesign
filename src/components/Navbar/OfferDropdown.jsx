import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import offerArrow from "../../assets/icons/offerArrow.png";
import { offerItems } from "../../data/navbar";

export default function OfferDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClick);

    return () => {
      document.removeEventListener("pointerdown", handleClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 hover:text-forest transition-colors"
      >
        Oferta
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <img src={offerArrow} alt="" aria-hidden="true" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-white p-2 shadow-lg"
          >
            {offerItems.map((item) => (
              <a
                key={item.title}
                href="#oferta"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2.5 hover:bg-offer transition-colors"
              >
                <p>{item.title}</p>
                <p>{item.desc}</p>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
