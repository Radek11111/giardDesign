import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allProjects = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  img: `${import.meta.env.BASE_URL}gallery/gallery-${i + 1}.png`,
}));

const aspectRatios = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[3/5]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
];

const COLLAPSED_HEIGHT = 800;

export default function ProjectsGallery() {
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  function openLightbox(i) {
    setLightboxIndex(i);
  }
  function closeLightbox() {
    setLightboxIndex(null);
  }
  function nextImage(e) {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % allProjects.length);
  }
  function prevImage(e) {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + allProjects.length) % allProjects.length);
  }

  return (
    <section
      id="realizacje"
      className="relative w-full bg-[#D6B79E] text-ink pt-30 pb-11"
    >
      <div>
        <div className="relative">
          <div
            className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
            style={{ maxHeight: expanded ? "none" : `${COLLAPSED_HEIGHT}px` }}
          >
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
              {allProjects.map((p, i) => (
                <motion.button
                  key={p.id}
                  type="button"
                  onClick={() => openLightbox(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                  className={`block w-full mb-6 overflow-hidden break-inside-avoid ${aspectRatios[i % aspectRatios.length]} hover:opacity-95 transition-opacity cursor-pointer`}
                >
                  <img
                    src={p.img}
                    alt="Realizacja"
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-80 flex items-end justify-center pb-8 pointer-events-none bg-gradient-to-b from-transparent via-[#D6B79E]/70 to-[#D6B79E]">
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="pointer-events-auto flex items-center gap-2 border border-ink/40 text-ink px-7 py-2.5 rounded-full text-xs font-normal hover:bg-white/20 transition-all cursor-pointer backdrop-blur-sm"
              >
                Rozwiń
                <span className="text-sm">↓</span>
              </button>
            </div>
          )}
        </div>

        <div className="mt-24 pl-30">
          <p className="text-forest text-xs font-medium mb-4">Realizacje</p>
          <h2 className="text-[32px]/[38px] sm:text-[44px]/[50px] md:text-[48px]/[58px] font-sans font-medium tracking-tight">
            Nasze projekty
          </h2>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-6"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-3xl leading-none"
              aria-label="Zamknij"
            >
              ×
            </button>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 md:left-8 text-white text-3xl p-2"
              aria-label="Poprzednie"
            >
              ‹
            </button>
            <motion.img
              key={lightboxIndex}
              src={allProjects[lightboxIndex].img}
              alt="Realizacja"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg"
            />
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 md:right-8 text-white text-3xl p-2"
              aria-label="Następne"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
