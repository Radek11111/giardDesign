import { motion } from "framer-motion";
import gallery1 from "/gallery/gallery-1.png";
import vector from "../assets/Vector.png";

export default function PassionBanner() {
  return (
    <section
      id="o-firmie"
      className="relative w-full overflow-hidden bg-forest"
    >
      <div className="grid md:grid-cols-2 items-stretch min-h-105">
        <div className="relative w-full min-h-80 md:min-h-full overflow-hidden order-2 md:order-1">
          <img
            src={gallery1}
            alt="Realizacja ogrodu"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full pr-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] pl-6 md:pl-16 py-16 text-white order-1 md:order-2 flex flex-col justify-center items-start"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-white/80 mb-3">
            O firmie
          </p>

          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Tworzymy z <span className="italic">pasją</span>
          </h2>

          <p className="text-white/80 mt-4 text-sm leading-relaxed max-w-md">
            Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą
            wykwalifikowani projektanci oraz architekci, których zadaniem jest
            rozpoznanie i realizacja potrzeb każdego Klienta. Nasza
            specjalizacja to przestrzenie nowoczesne, które charakteryzuje
            minimalizm, geometria i elegancka prostota. Tworzymy ogrody
            małoobsługowe, dostosowane do współczesnego trybu życia.
          </p>

          <button className="mt-8 bg-transparent border border-white text-white px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 hover:bg-white hover:text-forest transition-all cursor-pointer">
            Poznaj nas bliżej
            <img src={vector} alt="" className="w-3 h-3 object-contain" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
