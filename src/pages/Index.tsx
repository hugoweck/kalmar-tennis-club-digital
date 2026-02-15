import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, ExternalLink, Facebook } from "lucide-react";
import Layout from "@/components/Layout";
import PlaceholderSection from "@/components/PlaceholderSection";
import heroImg from "@/assets/hero-tennis.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center section-container">
          <h1 className="text-primary-foreground mb-4 animate-fade-in">
            Kalmar Tennisklubb
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-body animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Tennis · Padel · Pickleball — Sedan 1914
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.matchi.se" target="_blank" rel="noopener noreferrer">
                Boka bana
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/bli-medlem">Bli medlem</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="page-section">
        <div className="section-container text-center max-w-3xl mx-auto">
          <h2 className="mb-6">Välkommen till KTK</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Kalmar Tennisklubb erbjuder aktiviteter för alla åldrar och nivåer. Med moderna anläggningar för tennis, padel, pickleball och gym finns det något för alla.
          </p>
        </div>
      </section>

      {/* Quick info cards */}
      <section className="page-section bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-accent">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="text-lg mb-2">Reception</h3>
                <p className="text-muted-foreground text-sm">0480-13514</p>
                <p className="text-muted-foreground text-sm mt-1">Mån–tor 10–18 · Fre–sön 10–15</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-accent">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="text-lg mb-2">Speltider</h3>
                <p className="text-muted-foreground text-sm">Måndag–söndag</p>
                <p className="text-muted-foreground text-sm">05.30–23.00</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-accent">
              <CardContent className="p-6 text-center">
                <ExternalLink className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="text-lg mb-2">Boka via Matchi</h3>
                <p className="text-muted-foreground text-sm mb-3">Boka din bana online</p>
                <Button variant="accent" size="sm" asChild>
                  <a href="https://www.matchi.se" target="_blank" rel="noopener noreferrer">
                    Till Matchi
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facebook */}
      <section className="page-section">
        <div className="section-container text-center max-w-2xl mx-auto">
          <h2 className="mb-6">Följ oss på Facebook</h2>
          <p className="text-muted-foreground mb-6">Håll dig uppdaterad med senaste nytt från klubben.</p>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.facebook.com/KalmarTennisklubb?ref=embed_page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Facebook className="h-5 w-5" />
              Kalmar Tennisklubb på Facebook
            </a>
          </Button>
        </div>
      </section>

      {/* Sponsors */}
      <section className="page-section bg-muted">
        <div className="section-container text-center">
          <h2 className="mb-8">Våra sponsorer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Sponsor 1", "Sponsor 2", "Sponsor 3", "Sponsor 4"].map((s) => (
              <a
                key={s}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border rounded-lg p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
              >
                <span className="text-muted-foreground font-heading text-sm">{s}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <PlaceholderSection />
    </Layout>
  );
};

export default Index;
