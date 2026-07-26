import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Services() {
  const [openCards, setOpenCards] = useState(null);

  const handleClick = (index) => {
    setOpenCards((prev) => (prev === index ? null : index));
  };
  return (
    <section id="oferta" className="w-full bg-offer px-6 py-30 pb-40 md:px-22">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-24 flex max-w-260 flex-col items-start">
          <p className="mb-4 text-xs font-medium text-forest">Oferta</p>

          <div className="max-w-177">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="mb-8 text-[32px]/[38px] sm:text-[44px]/[50px] md:text-[48px]/[58px]"
            >
              Działamy <span className="italic">kompleksowo</span>
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base leading-relaxed text-ink/80"
            >
              Oferujemy kompletną obsługę inwestycji terenów zielonych.
              Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne.
              Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w
              życie, a na każdym etapie posłużymy radą i wieloletnim
              doświadczeniem.
            </motion.p>
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-3 items-start">
          {services.map((service, index) => {
            const isActive = openCards === index;

            return (
              <motion.button
                key={service.title}
                type="button"
                onClick={() => handleClick(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex cursor-pointer flex-col justify-between gap-10 rounded-2xl bg-white px-10 py-12 text-left shadow-sm transition-all hover:shadow-xl"
              >
                <div>
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="mb-8 h-10 w-10 object-contain"
                    animate={{
                      rotate: isActive ? 8 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                  />

                  <h3 className="font-sans text-[28px]/[34px] font-medium tracking-tighter transition-colors group-hover:text-forest">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-ink/60">{service.desc}</p>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="mt-6 text-sm leading-relaxed text-ink/70">
                          Każdy projekt realizujemy indywidualnie, dopasowując
                          rozwiązania do potrzeb klienta, charakteru przestrzeni
                          oraz budżetu inwestycji.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <span className="mt-8 inline-flex items-center gap-2 text-sm text-forest">
                  {isActive ? "Zwiń" : "Dowiedz się więcej"}

                  <motion.span
                    animate={{
                      rotate: isActive ? 90 : 0,
                      x: isActive ? 4 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    →
                  </motion.span>
                </span>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 rounded-b-2xl bg-forest"
                  initial={false}
                  animate={{
                    width: isActive ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
