import { AnimatePresence, motion } from "framer-motion";
import hero1 from "../assets/hero-1.png";
import gallery1 from "/gallery/gallery-1.png";
import gallery2 from "/gallery/gallery-2.png";
import { useEffect, useState } from "react";

const slides = [
  {
    title: ["Nowoczesna", "aranżacja", "Twojego ogrodu"],
    desc: "Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.",
    img: hero1,
  },
  {
    title: ["Zielone", "przestrzenie", "szyte na miarę"],
    desc: "Każdy ogród projektujemy indywidualnie, dopasowując go do charakteru Twojej posiadłości.",
    img: gallery1,
  },
  {
    title: ["Pielęgnacja", "i utrzymanie", "przez cały rok"],
    desc: "Nie kończymy na realizacji — dbamy o zieleń długoterminowo, w każdym sezonie.",
    img: gallery2,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prevIndex) => (prevIndex + 1) % slides.length),
      6000,
    );
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, var(--color-cream) 0px, var(--color-cream) 90px, var(--color-stripe) 90px, var(--color-stripe) 180px)",
      }}
    >
      <div className="grid md:grid-cols-2 items-center min-h-125 lg:min-h-184.25">
        <div className="w-full max-w-149.75 pl-6 md:pl-14   relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-sans font-medium text-[32px]/[38px] sm:text-[44px]/[50px] md:text-[60px]/[70px] mb-6 md:mb-11">
                {slide.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-6 lg:mt-11 text-ink/70 text-sm sm:text-base leading-relaxed max-w-[480px]">
                {slide.desc}
              </p>
              <div className="mt-8 lg:mt-18 flex flex-wrap gap-4">
                <button className="bg-forest text-white px-5.5 py-3 rounded-full text-base hover:bg-forest-light transition-colors">
                  Skontaktuj się z nami
                </button>
                <button className="flex items-center gap-2 px-5.5 py-3 rounded-full text-base border border-forest text-forest hover:bg-forest hover:text-white transition-colors">
                  Zobacz nasze realizacje
                  <span>↓</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative h-full min-h-80 md:min-h-125 lg:min-h-184.25 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={slide.img}
              alt="Aranżacja ogrodu"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => (e.target.style.display = "none")}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
