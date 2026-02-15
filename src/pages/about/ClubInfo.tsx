import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import PlaceholderSection from "@/components/PlaceholderSection";
import { Phone, Mail, MapPin, Clock, Building } from "lucide-react";

const facilities = [
  "Fyra GreenSet-banor inomhus",
  "Fyra grusbanor utomhus",
  "En hardcourt",
  "Sex padelbanor inomhus",
  "Tre padelbanor utomhus",
  "Två pickleballbanor",
  "Shop",
  "Gym",
  "Café",
];

const ClubInfo = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-container max-w-4xl mx-auto">
          <h1 className="mb-8">Klubbinfo</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Contact */}
            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg mb-3">Kontakt</h3>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-accent" /> 0480-13514
                </p>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-accent" /> info@kalmartk.se
                </p>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" /> Ängöleden 11, 392 36 Kalmar
                </p>
              </CardContent>
            </Card>

            {/* Business info */}
            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg mb-3">Uppgifter</h3>
                <p className="text-sm text-muted-foreground">Org.nr: 832400-0978</p>
                <p className="text-sm text-muted-foreground">Bankgiro: 5354-4235</p>
                <p className="text-sm text-muted-foreground">Swish: 1233885043</p>
              </CardContent>
            </Card>
          </div>

          {/* Opening hours */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="highlight-box">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-accent" />
                <h3 className="text-lg">Speltider</h3>
              </div>
              <p className="text-sm text-muted-foreground">Mån–sön 05.30–23.00</p>
            </div>
            <div className="highlight-box">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="h-5 w-5 text-accent" />
                <h3 className="text-lg">Reception</h3>
              </div>
              <p className="text-sm text-muted-foreground">Helgfri mån–tor 10–18</p>
              <p className="text-sm text-muted-foreground">Fre–sön 10–15</p>
            </div>
            <div className="highlight-box">
              <div className="flex items-center gap-2 mb-2">
                <Building className="h-5 w-5 text-accent" />
                <h3 className="text-lg">Gym</h3>
              </div>
              <p className="text-sm text-muted-foreground">Alla dagar 06.00–23.00</p>
            </div>
          </div>

          {/* Facilities */}
          <h2 className="mb-4 text-2xl">Anläggning</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {facilities.map((f) => (
              <Card key={f}>
                <CardContent className="p-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm">{f}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <PlaceholderSection />
    </Layout>
  );
};

export default ClubInfo;
