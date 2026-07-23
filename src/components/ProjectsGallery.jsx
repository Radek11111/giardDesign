import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-responsive-masonry";

// TODO: podmień na realne zdjęcia z Figmy - dodaj też realne wysokości dla lepszego masonry
const allProjects = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  img: `/project-${i + 1}.jpg`,
}));

const PAGE_SIZE = 6;

export default function ProjectsGallery() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visible = allProjects.slice(0, visibleCount);
  const hasMore = visibleCount < allProjects.length;

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
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-medium mb-8">Nasze projekty</h2>

      <Masonry columnsCount={3} gutter="16px">
        {visible.map((p, i) => (
          <motion.button
            key={p.id}
            type="button"
            onClick={() => openLightbox(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % PAGE_SIZE) * 0.06 }}
            className="block w-full rounded-xl overflow-hidden bg-placeholder hover:scale-[1.02] transition-transform cursor-pointer"
            style={{ aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }}
          >
            <img
              src={p.img}
              alt="Realizacja"
              className="w-full h-full object-cover"
              onError={(e) => (e.target.style.display = "none")}
            />
          </motion.button>
        ))}
      </Masonry>

      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="border border-forest text-forest px-8 py-3 rounded-full text-sm hover:bg-forest hover:text-white transition-colors"
          >
            Rozwiń
          </button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-6"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-3xl leading-none"
              aria-label="Zamknij"
            >
              ×
            </button>
            <button
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
              onError={(e) => (e.target.style.display = "none")}
            />
            <button
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
