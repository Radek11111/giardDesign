import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// TODO: podmień treści/zdjęcia na kolejne warianty z Figmy, jeśli slajder ma różne slajdy
const slides = [
  {
    title: ["Nowoczesna", "aranżacja", "Twojego ogrodu"],
    desc: "Tworzymy przestrzenie zewnętrzne, w których chce się przebywać — od projektu, przez realizację, po pielęgnację.",
    img: "/arrows.svg",
  },
  {
    title: ["Zielone", "przestrzenie", "szyte na miarę"],
    desc: "Każdy ogród projektujemy indywidualnie, dopasowując go do charakteru Twojej posiadłości.",
    img: "/hero-2.jpg",
  },
  {
    title: ["Pielęgnacja", "i utrzymanie", "przez cały rok"],
    desc: "Nie kończymy na realizacji — dbamy o zieleń długoterminowo, w każdym sezonie.",
    img: "/hero-3.jpg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Autoplay - zmiana slajdu co 6s
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="grid md:grid-cols-2 items-center min-h-130">
        {/* LEWA: trzyma się globalnej siatki (max-w-6xl = 72rem, gutter jak w resztcie strony) */}
        <div className="w-full pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] pr-6 md:pr-12 py-16 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-medium leading-tight text-ink">
                {slide.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-4 text-ink/70 max-w-md">{slide.desc}</p>
              <div className="mt-6 flex gap-4">
                <button className="bg-forest text-white px-6 py-3 rounded-full text-sm hover:bg-forest-light transition-colors">
                  Zamów projekt
                </button>
                <button className="px-6 py-3 rounded-full text-sm border border-ink/20 hover:border-forest transition-colors">
                  Zobacz realizacje
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Kropki slajdera */}
          <div className="flex gap-2 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slajd ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-forest" : "w-2 bg-ink/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* PRAWA: wychodzi poza siatkę, przyklejona do krawędzi ekranu */}
        <div className="relative h-full min-h-100 md:min-h-130 w-full md:w-[calc(50vw)] bg-placeholder overflow-hidden">
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
