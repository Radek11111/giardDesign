import { motion } from "framer-motion";

export default function MobileMenu({ open }) {
  return (
    <motion.div
      initial={false}
      animate={{
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden md:hidden"
    >
      <ul className="flex flex-col gap-4 px-6 pb-6 text-ink">
        <li>
          <a href="#oferta">Oferta</a>
        </li>

        <li>
          <a href="#o-firmie">O firmie</a>
        </li>

        <li>
          <a href="#realizacje">Realizacje</a>
        </li>

        <li>
          <a href="#kontakt">Kontakt</a>
        </li>
      </ul>
    </motion.div>
  );
}
