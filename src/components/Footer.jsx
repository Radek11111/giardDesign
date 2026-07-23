export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <span className="text-white font-semibold text-lg">gardeo.</span>
          <p className="text-sm mt-3 max-w-xs">
            {/* TODO: dokładny tekst z Figmy */}
            Aranżacja ogrodów z pasją i dbałością o detale.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-medium mb-3">Strona</h4>
          <ul className="text-sm space-y-2">
            <li>Strona główna</li>
            <li>O nas</li>
            <li>Realizacje</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-medium mb-3">Kontakt</h4>
          <ul className="text-sm space-y-2">
            <li>kontakt@gardeo.pl</li>
            <li>+48 000 000 000</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-medium mb-3">Social</h4>
          <ul className="text-sm space-y-2">
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      {/*
        WAŻNE: zgodnie z wymogami zadania — nie usuwaj stopki z informacją,
        że projekt powstał w procesie rekrutacyjnym dla adRespect.pl.
        Sprawdź dokładny wymagany tekst w treści zadania i wklej go dosłownie.
      */}
      <div className="border-t border-white/10 py-6 text-center text-xs">
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
    </footer>
  );
}
