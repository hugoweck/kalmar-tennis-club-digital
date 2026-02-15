import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/ktk-logo.png";

const mainNav = [
  { label: "Startsida", path: "/" },
  {
    label: "Om oss",
    path: "/om-oss",
    children: [
      { label: "Klubbinfo", path: "/om-oss/klubbinfo" },
      { label: "Styrelsen", path: "/om-oss/styrelsen" },
      { label: "Årsberättelser", path: "/om-oss/arsberattelser" },
      { label: "Styrelseprotokoll", path: "/om-oss/styrelseprotokoll" },
      { label: "Personal", path: "/om-oss/personal" },
      { label: "Historik", path: "/om-oss/historik" },
    ],
  },
  { label: "Bli medlem", path: "/bli-medlem" },
  { label: "Boka bana", path: "/boka-bana" },
  { label: "Tennis", path: "/tennis" },
  { label: "Padel", path: "/padel" },
  { label: "Pickleball", path: "/pickleball" },
  { label: "Gym", path: "/gym" },
  { label: "Shop", path: "/shop" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isAboutActive = location.pathname.startsWith("/om-oss");

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md shadow-lg">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Kalmar Tennisklubb" className="h-12 md:h-16 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isAboutActive
                      ? "text-accent"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
                {aboutOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-card rounded-lg shadow-xl border py-2 min-w-[200px] animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(child.path)
                            ? "text-accent bg-muted font-medium"
                            : "text-foreground hover:bg-muted hover:text-accent"
                        }`}
                        onClick={() => setAboutOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Meny"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          <div className="section-container py-4 flex flex-col gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2 text-primary-foreground font-medium"
                    onClick={() => setAboutOpen(!aboutOpen)}
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                  </button>
                  {aboutOpen &&
                    item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block pl-8 py-2 text-sm text-primary-foreground/80 hover:text-accent"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-accent"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
