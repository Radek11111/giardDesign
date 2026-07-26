import { useState } from "react";
import { motion } from "framer-motion";

import { allProjects, aspectRatios } from "../data/projects";
import Lightbox from "./Lightbox";

const COLLAPSED_HEIGHT = 800;

export default function ProjectsGallery() {
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    setLightboxIndex((index) => (index + 1) % allProjects.length);
  };

  const prevImage = () => {
    setLightboxIndex(
      (index) => (index - 1 + allProjects.length) % allProjects.length,
    );
  };

  return (
    <section
      id="realizacje"
      className="relative w-full bg-[#D6B79E] pb-11 pt-30 text-ink"
    >
      <div className="relative">
        <div
          className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
          style={{
            maxHeight: expanded ? "none" : `${COLLAPSED_HEIGHT}px`,
          }}
        >
          <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
            {allProjects.map((project, index) => (
              <motion.button
                key={project.id}
                type="button"
                onClick={() => openLightbox(index)}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: (index % 6) * 0.05,
                }}
                className={`
                  mb-6 block w-full overflow-hidden 
                  break-inside-avoid cursor-pointer
                  transition-opacity hover:opacity-95
                  ${aspectRatios[index]}
                `}
              >
                <img
                  src={project.img}
                  alt="Realizacja"
                  className="h-full w-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>

        {!expanded && (
          <div
            className="
            absolute bottom-0 left-0 right-0
            flex h-80 items-end justify-center
            bg-linear-to-b from-transparent
            via-[#D6B79E]/70 to-[#D6B79E]
            pb-8
          "
          >
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="
                flex items-center gap-2
                rounded-full border border-ink/40
                px-7 py-2.5 text-xs
                transition-all hover:bg-white/20
                backdrop-blur-sm
              "
            >
              Rozwiń ↓
            </button>
          </div>
        )}
      </div>

      <div className="mt-24 px-6 md:pl-30">
        <p className="mb-4 text-xs font-medium text-forest">Realizacje</p>

        <h2
          className="
          font-sans font-medium tracking-tight
          text-[32px]/[38px]
          sm:text-[44px]/[50px]
          md:text-[48px]/[58px]
        "
        >
          Nasze projekty
        </h2>
      </div>

      <Lightbox
        projects={allProjects}
        index={lightboxIndex}
        close={closeLightbox}
        next={nextImage}
        prev={prevImage}
      />
    </section>
  );
}
