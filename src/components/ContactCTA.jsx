import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section id="kontakt" className="w-full bg-offer py-15 md:py-20">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          scale: 1.01,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          mx-auto
          flex
          max-w-260
          flex-col
          items-center
          justify-between
          gap-8
          bg-forest
          px-6
          py-10
          md:flex-row
          md:px-27.5
          md:py-30
        "
      >
        <div className="flex flex-col text-grey-text">
          <h2
            className="
            font-sans
            text-2xl
            md:text-[40px]
          "
          >
            Zostańmy w kontakcie!
          </h2>

          <div
            className="
            flex
            flex-wrap
            items-baseline
            gap-2
            
            text-2xl
            md:text-[40px]
          "
          >
            <p className="font-sans">Znajdziesz nas na</p>

            <span className="font-medium">Instagramie</span>
          </div>
        </div>

        <div
          className="
          flex
          flex-col
          items-center
          gap-6
          text-center
          md:items-start
          md:text-left
        "
        >
          <p
            className="
            text-base
            leading-relaxed
            text-grey-text
          "
          >
            Śledź nasze
            <br />
            najnowsze realizacje!
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="
              whitespace-nowrap
              rounded-full
              bg-white
              px-8
              py-3
              text-base
              font-medium
              text-forest
              transition-colors
              hover:bg-gray-100
            "
          >
            Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
}
