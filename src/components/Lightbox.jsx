import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ projects, index, close, next, prev }) {
  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-6"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-6 top-6 text-3xl text-white"
            aria-label="Zamknij"
          >
            ×
          </button>

          <button
            type="button"
            onClick={prev}
            className="absolute left-4 p-2 text-3xl text-white md:left-8"
            aria-label="Poprzednie"
          >
            ‹
          </button>

          <motion.img
            key={index}
            src={projects[index].img}
            alt="Realizacja"
            initial={{
              scale: 0.95,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain"
          />

          <button
            type="button"
            onClick={next}
            className="absolute right-4 p-2 text-3xl text-white md:right-8"
            aria-label="Następne"
          >
            ›
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
