import { useState } from "react";
import giarddesign from "../../assets/giarddesign.png";
import { navLinks } from "../../data/navbar";
import OfferDropdown from "./OfferDropdown";
import SearchButton from "./SearchButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-white">
      <nav className="flex items-center justify-between px-6 py-6">
        <div className="hidden md:flex items-center gap-12 text-sm tracking-tight text-ink">
          <OfferDropdown />

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-forest transition-colors"
            >
              {link.label}
            </a>
          ))}

          <SearchButton />
        </div>

        <img src={giarddesign} alt="Giard Design" />

        <button
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span
            className={`w-6 h-0.5 bg-ink transition-transform ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`w-6 h-0.5 bg-ink transition-opacity ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`w-6 h-0.5 bg-ink transition-transform ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      <MobileMenu open={isMobileMenuOpen} />
    </header>
  );
}
