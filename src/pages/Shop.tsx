import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import PlaceholderSection from "@/components/PlaceholderSection";
import { ShoppingBag, Clock, Phone, Scissors } from "lucide-react";

const categories = [
  { name: "Racketar", icon: "🎾" },
  { name: "Skor", icon: "👟" },
  { name: "Kläder", icon: "👕" },
  { name: "Tillbehör", icon: "🎒" },
];

const brands = ["Nike", "Adidas", "Babolat", "Head", "Prince", "Wilson", "Bullpadel", "Tretorn"];

const Shop = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-container max-w-4xl mx-auto">
          <h1 className="mb-4">Shop</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Tennis · Padel · Pickleball — Råd från kunnig personal.
          </p>

          {/* Category grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {categories.map((c) => (
              <Card key={c.name} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <span className="text-4xl mb-2 block">{c.icon}</span>
                  <h4 className="font-heading font-semibold">{c.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stringing */}
          <Card className="mb-10 border-l-4 border-l-accent">
            <CardContent className="p-6 flex items-start gap-4">
              <Scissors className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg mb-1">Strängning</h3>
                <p className="text-muted-foreground">300 kr / 200 kr med egna senor</p>
              </div>
            </CardContent>
          </Card>

          {/* Brands */}
          <h2 className="mb-4 text-2xl">Märken</h2>
          <div className="flex flex-wrap gap-2 mb-10">
            {brands.map((b) => (
              <Badge key={b} variant="secondary" className="text-sm px-3 py-1">
                {b}
              </Badge>
            ))}
          </div>

          {/* Sortiment */}
          <h2 className="mb-4 text-2xl">Sortiment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-10">
            {["Racketar", "Skor", "Bagar", "Bollar", "Lindor", "Vattenflaskor", "Kepsar", "Kläder"].map((item) => (
              <p key={item} className="flex items-center gap-2 text-muted-foreground py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {item}
              </p>
            ))}
          </div>

          {/* Hours */}
          <div className="highlight-box mb-8">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg mb-2">Öppettider</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Måndag–torsdag: 10–18</li>
                  <li>Fredag: 10–17</li>
                  <li>Lördag–söndag: 10–15</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <Card>
            <CardContent className="p-6 flex items-start gap-3">
              <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-semibold">Kontakt</h4>
                <p className="text-muted-foreground text-sm">Åke Svensson · 073-3303670</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <PlaceholderSection />
    </Layout>
  );
};

export default Shop;
