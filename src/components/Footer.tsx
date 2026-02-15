import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-accent mb-4 text-lg">Kalmar Tennisklubb</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Ängöleden 11, 392 36 Kalmar
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                0480-13514
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                info@kalmartk.se
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-accent mb-4 text-lg">Snabblänkar</h3>
            <div className="space-y-2 text-sm">
              <Link to="/boka-bana" className="block text-primary-foreground/80 hover:text-accent transition-colors">Boka bana</Link>
              <Link to="/bli-medlem" className="block text-primary-foreground/80 hover:text-accent transition-colors">Bli medlem</Link>
              <Link to="/tennis" className="block text-primary-foreground/80 hover:text-accent transition-colors">Tennis</Link>
              <Link to="/padel" className="block text-primary-foreground/80 hover:text-accent transition-colors">Padel</Link>
              <Link to="/shop" className="block text-primary-foreground/80 hover:text-accent transition-colors">Shop</Link>
            </div>
          </div>

          <div>
            <h3 className="text-accent mb-4 text-lg">Följ oss</h3>
            <a
              href="https://www.facebook.com/KalmarTennisklubb?ref=embed_page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Kalmar Tennisklubb. Sedan 1914.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
