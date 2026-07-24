import { motion } from "framer-motion";

const services = [
  { title: "Projekty", desc: "Indywidualne koncepcje ogrodów szyte na miarę." },
  { title: "Aranżacja", desc: "Kompletna realizacja od nasadzeń do małej architektury." },
  { title: "Zarządzanie", desc: "Pielęgnacja i utrzymanie zieleni przez cały rok." },
];

export default function Services() {
  return (
    <section id="oferta" className="w-full  px-6 py-16 text-center bg-offer  ">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-medium"
      >
        Działamy kompleksowo
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {services.map((s, i) => (
          <motion.button
            key={s.title}
            type="button"
            onClick={() => console.log(`Klik: ${s.title}`) /* TODO: link do podstrony usługi */}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white rounded-2xl p-8 text-left shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h3 className="font-medium text-lg group-hover:text-forest transition-colors">
              {s.title}
            </h3>
            <p className="text-sm text-ink/60 mt-2">{s.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm text-forest mt-4">
              Dowiedz się więcej
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
