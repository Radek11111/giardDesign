import { motion } from "framer-motion";

export default function PassionBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-forest">
      <div className="grid md:grid-cols-2 items-center min-h-[420px]">
        {/* LEWA: wychodzi poza siatkę, przyklejona do lewej krawędzi ekranu */}
        <div className="relative h-full min-h-[320px] md:min-h-[420px] w-full bg-placeholder overflow-hidden order-2 md:order-1">
          <img
            src="/passion-1.jpg"
            alt="Realizacja ogrodu"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>

        {/* PRAWA: trzyma się globalnej siatki */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full pr-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] pl-6 md:pl-12 py-16 text-white order-1 md:order-2"
        >
          <h2 className="text-2xl md:text-3xl font-medium">Twórzymy z pasją</h2>
          <p className="text-white/70 mt-3 text-sm max-w-sm">
            {/* TODO: dokładny tekst z Figmy */}
            Każdy projekt traktujemy indywidualnie — z uwagą na detale i
            charakter przestrzeni.
          </p>
          <button className="mt-6 bg-white text-forest px-5 py-2.5 rounded-full text-sm w-fit hover:bg-cream transition-colors">
            Zobacz więcej
          </button>
        </motion.div>
      </div>
    </section>
  );
}
