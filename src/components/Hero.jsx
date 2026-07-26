import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "../data/hero"

const AUTO_SLIDE_DELAY = 6000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, var(--color-cream) 0px, var(--color-cream) 90px, var(--color-stripe) 90px, var(--color-stripe) 180px)",
      }}
    >
      <div className="grid min-h-125 items-center md:grid-cols-2 lg:min-h-184.25">
        <div className="relative z-10 w-full max-w-149.75 pl-6 md:pl-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 font-sans text-[32px]/[38px] font-medium sm:text-[44px]/[50px] md:mb-11 md:text-[60px]/[70px]">
                {slide.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-6 max-w-120 text-sm leading-relaxed text-ink/70 sm:text-base lg:mt-11">
                {slide.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 lg:mt-18">
                <button className="rounded-full bg-forest px-5.5 py-3 text-base text-white transition-colors hover:bg-forest-light">
                  Skontaktuj się z nami
                </button>

                <button className="flex items-center gap-2 rounded-full border border-forest px-5.5 py-3 text-base text-forest transition-colors hover:bg-forest hover:text-white">
                  Zobacz nasze realizacje
                  <span>↓</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative h-full min-h-80 w-full overflow-hidden md:min-h-125 lg:min-h-184.25">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slide.img}
              alt="Aranżacja ogrodu"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
