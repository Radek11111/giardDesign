import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "../data/hero";
import arrowLeft from "../assets/icons/arrowLeft.png";
import arrowRight from "../assets/icons/arrowRight.png";

const AUTO_SLIDE_DELAY = 6000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTO_SLIDE_DELAY);

    return () => clearTimeout(timeoutRef.current);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  const nextSlide = () => {
    clearTimeout(timeoutRef.current);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    clearTimeout(timeoutRef.current);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

              <p className="mt-6  max-w-120 text-sm leading-relaxed text-ink/70 sm:text-base lg:mt-11">
                {slide.desc}
              </p>

              <div className="mt-8 mb-12 flex flex-wrap gap-4 lg:mt-18">
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
          <div className="absolute bottom-0 right-0 flex h-16 w-32 gap-4 md:h-20 md:w-40 md:gap-6 lg:h-24 lg:w-48 lg:gap-8 items-center justify-center bg-offer px-8 ">
            <button
              type="button"
              onClick={prevSlide}
              className="transition-transform duration-200 hover:scale-110 active:scale-95"
              aria-label="Poprzedni slajd"
            >
              <img src={arrowLeft} alt="" className="" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="transition-transform duration-200 hover:scale-110 active:scale-95"
              aria-label="Następny slajd"
            >
              <img src={arrowRight} alt="" className="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
