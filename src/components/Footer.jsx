import giarddesign from "../assets/giarddesign.png";
import adRespect from "../assets/adrespect.png";

export default function Footer() {
  return (
    <footer className="bg-ink text-grey-text px-6 md:px-40 py-12 md:py-20 w-full">
      <div className="md:max-w-260 mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between pb-10 md:pb-15.5 gap-6 text-center md:text-left">
          <div>
            <img src={giarddesign} alt="Giard Design" className="invert" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-center text-base">
            <span className="font-normal">
              Daj znać, co możemy dla Ciebie zrobić!
            </span>
            <button
              type="button"
              className="bg-[#1B4727] text-white px-6 py-3 rounded-full font-medium hover:bg-[#14361e] transition-colors cursor-pointer w-full sm:w-auto"
            >
              Skontaktuj się z nami
            </button>
          </div>
        </div>

        <hr className="border-t border-text-grey-text items-center" />

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between pt-10 md:pt-15.5 gap-8 md:gap-12 mb-16 md:mb-30 text-sm text-center md:text-left">
          <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-10">
            <li>
              <a href="#kontakt" className="hover:text-white transition-colors">
                Kontakt
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-10">
            <a
              href="tel:000000000"
              className="hover:text-white transition-colors"
            >
              000-000-000
            </a>
            <a
              href="mailto:giarddesign@kontakt.pl"
              className="hover:text-white transition-colors"
            >
              giarddesign@kontakt.pl
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-base gap-4 pb-8 md:pb-0">
          <p>Prawa zastrzeżone © 2022</p>

          <div className="flex items-center gap-2">
            <span>made by</span>
            <a
              href="https://adrespect.pl"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:text-white transition-colors flex items-center"
            >
              <img src={adRespect} alt="adRespect" className="" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs mt-6">
          Strona wykonana w procesie rekrutacyjnym dla{" "}
          <a
            href="https://adrespect.pl"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-white"
          >
            adRespect.pl
          </a>
        </div>
      </div>
    </footer>
  );
}
