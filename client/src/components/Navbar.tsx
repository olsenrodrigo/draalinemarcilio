import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AGENDAR_TEXTO, site, whatsappUrl } from "@/content/site";
import logoCompleto from "@/assets/images/logo-completo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled || open ? " header-scrolled" : ""}`}>
      <div className="container">
        <div className="header-inner">
          <a href="#inicio" className="header-logo" onClick={() => setOpen(false)}>
            <img src={logoCompleto} alt={site.doctor} />
          </a>

          <nav className="header-nav" aria-label="Navegação principal">
            {site.nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <a className="button button-small" href={whatsappUrl(AGENDAR_TEXTO)} target="_blank" rel="noreferrer">
              {site.actions.schedule}
            </a>
          </nav>

          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <nav className="mobile-nav" aria-label="Navegação principal">
            {site.nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a className="button" href={whatsappUrl(AGENDAR_TEXTO)} target="_blank" rel="noreferrer">
              {site.actions.schedule}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
