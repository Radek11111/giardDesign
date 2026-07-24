import { motion } from "framer-motion";
import hero1 from "../assets/hero-1.png";

export default function Hero() {
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-sans font-medium text-[60px]/[70px] mb-11">
              Nowoczesna
              <br />
              aranżacja
              <br />
              Twojego ogrodu
            </h1>
            <p className="mt-6 lg:mt-11 text-ink/70 text-base">
              Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka
              realizacji. Oferujemy kompleksowy zakres usług z indywidualnym
              podejściem do każdego projektu.
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
        </div>

        <div className="relative h-full min-h-80 md:min-h-125 lg:min-h-184.25 w-full overflow-hidden">
          <img
            src={hero1}
            alt="Aranżacja ogrodu"
            className="absolute inset-0 w-full h-full "
          />
        </div>
      </div>
    </section>
  );
}
