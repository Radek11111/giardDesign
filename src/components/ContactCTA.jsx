import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="bg-offer py-15 items-center w-full max-md:py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-forest px-27.5 py-30 ml-40 flex flex-col md:flex-row items-center justify-between gap-6 max-w-260 max-md:px-6 max-md:py-10 max-md:ml-0 max-md:mr-0 max-md:gap-8"
      >
        <div className="text-grey-text flex flex-col ">
          <h2 className=" text-[40px] font-sans max-md:text-2xl">
            Zostańmy w kontakcie!
          </h2>

          <div className="flex items-baseline text-[40px] gap-2 max-md:text-2xl max-md:flex-wrap">
            <p className="font-sans ">Znajdziesz nas na </p>
            <span className="font-medium ">Instagramie</span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 max-md:items-center max-md:text-center">
          <p className="text-grey-text text-base leading-relaxed">
            Śledź nasze <br /> najnowsze realizacje!
          </p>
          <button className="bg-white text-forest px-8 py-3 rounded-full text-base font-medium hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Instagram
          </button>
        </div>
      </motion.div>
    </section>
  );
}
