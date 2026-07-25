import { motion } from "framer-motion";
import eyeIcon from "../assets/eyeIcon.png";
import penIcon from "../assets/penIcon.png";
import starIcon from "../assets/starIcon.png";

const services = [
  {
    title: "Projekty",
    img: penIcon,
    desc: "Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.",
  },
  {
    title: "Aranżacja",
    img: eyeIcon,
    desc: "Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.",
  },
  {
    title: "Zarządzanie",
    img: starIcon,
    desc: "Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.",
  },
];

export default function Services() {
  return (
    <section id="oferta" className="w-full bg-offer py-30 pb-40 px-6 md:px-22">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start max-w-260 mb-24 mx-auto">
          <p className="text-forest text-xs font-medium text-left mb-4">
            Oferta
          </p>
          <div className="max-w-177">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[32px]/[38px] sm:text-[44px]/[50px] md:text-[48px]/[58px] mb-8"
            >
              Działamy <span className="italic">kompleksowo</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-ink/80 text-base  text-left leading-relaxed"
            >
              Oferujemy kompletną obsługę inwestycji terenów zielonych.
              Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne.
              Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w
              życie, a na każdym etapie posłużymy radą i wieloletnim
              doświadczeniem.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {services.map((s, i) => (
            <motion.button
              key={s.title}
              type="button"
              onClick={() => console.log(`Klik: ${s.title}`)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white rounded-2xl p-8 text-left shadow-sm hover:shadow-xl transition-shadow cursor-pointer flex flex-col justify-between px-10 py-12 gap-10"
            >
              <div>
                <div className="mb-8">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-10 h-10 object-contain "
                  />
                </div>
                <h3 className="font-medium text-[28px]/[34px] tracking-tighter group-hover:text-forest transition-colors font-sans">
                  {s.title}
                </h3>
                <p className="text-sm text-ink/60 mt-2">{s.desc}</p>
              </div>

              <span className="inline-flex items-center gap-1 text-sm text-forest mt-8">
                Dowiedz się więcej
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
