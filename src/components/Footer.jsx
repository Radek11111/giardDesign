import giarddesign from "../assets/giarddesign.png";
import adRespect from "../assets/adRespect.png";

import { footerLinks, footerContact } from "../data/footer";

const linkStyle = "transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="w-full bg-ink py-12 text-grey-text md:py-20">
      <div className="mx-auto flex w-full max-w-260 flex-col sm:px-8">
        <div
          className="
          flex flex-col items-center
          justify-between gap-6
          border-b border-[#F5F0EC]
          pb-10
          text-center
          md:flex-row
          md:pb-15.5
          md:text-left
        "
        >
          <img
            src={giarddesign}
            alt="Giard Design"
            className="brightness-0 invert"
          />

          <div
            className="
            flex flex-col items-center
            gap-4
            text-base
            sm:flex-row
          "
          >
            <span>Daj znać, co możemy dla Ciebie zrobić!</span>

            <a
              href="#kontakt"
              className="
                rounded-full
                bg-[#1B4727]
                px-6 py-3
                font-medium
                text-white
                transition-colors
                hover:bg-[#14361e]
              "
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>

        <div
          className="
          flex flex-col
          items-center
          justify-between
          gap-8
          py-10
          text-center
          text-sm
          md:flex-row
          md:py-15.5
          md:text-left
        "
        >
          <ul
            className="
            flex flex-wrap
            justify-center
            gap-4
            md:gap-10
          "
          >
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className={linkStyle}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="
            flex flex-wrap
            justify-center
            gap-6
            md:gap-10
          "
          >
            {footerContact.map((item) => (
              <a key={item.href} href={item.href} className={linkStyle}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="
          flex flex-col
          items-center
          justify-between
          gap-4
          pb-8
          text-base
          sm:flex-row
          md:pb-0
        "
        >
          <p>Prawa zastrzeżone © 2022</p>

          <div className="flex items-center gap-2">
            <span>made by</span>

            <a href="https://adrespect.pl" target="_blank" rel="noreferrer">
              <img src={adRespect} alt="adRespect" />
            </a>
          </div>
        </div>

        <div
          className="
          mt-6
          border-t
          border-white/10
          pt-6
          text-center
          text-xs
        "
        >
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
