import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-forest rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <h2 className="text-white text-2xl font-semibold">
            Skontaktuj się z nami!
          </h2>
          <p className="text-white/70 text-sm mt-1">
            Znajdziesz nas na Instagramie
          </p>
        </div>
        <button className="bg-white text-forest px-6 py-3 rounded-full text-sm hover:bg-cream transition-colors whitespace-nowrap">
          Napisz do nas
        </button>
      </motion.div>
    </section>
  );
}
