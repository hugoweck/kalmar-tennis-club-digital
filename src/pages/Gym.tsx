import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import PlaceholderSection from "@/components/PlaceholderSection";
import { Clock, CreditCard, AlertCircle } from "lucide-react";

const prices = [
  { period: "1 månad", member: "175 kr", nonMember: "250 kr" },
  { period: "6 månader", member: "900 kr", nonMember: "1 200 kr" },
  { period: "12 månader", member: "1 500 kr", nonMember: "2 000 kr" },
  { period: "1 gång", member: "50 kr", nonMember: "50 kr" },
];

const Gym = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-container max-w-4xl mx-auto">
          <h1 className="mb-6">Gym</h1>

          <Card className="mb-6 border-l-4 border-l-destructive">
            <CardContent className="p-6 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong>18 års åldersgräns.</strong> Taggen erhålls vid betalning i receptionen.
              </p>
            </CardContent>
          </Card>

          <div className="highlight-box mb-8 flex items-center gap-3">
            <Clock className="h-5 w-5 text-accent flex-shrink-0" />
            <div>
              <h3 className="text-lg mb-0">Öppettider</h3>
              <p className="text-muted-foreground">Alla dagar 06.00–23.00</p>
            </div>
          </div>

          <h2 className="mb-4 text-2xl">Priser</h2>
          <p className="text-sm text-muted-foreground mb-4">Medlem / Icke-medlem</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {prices.map((p) => (
              <Card key={p.period} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <CreditCard className="h-6 w-6 text-accent mx-auto mb-2" />
                  <h4 className="font-heading font-semibold mb-2">{p.period}</h4>
                  <p className="text-lg font-bold text-foreground">{p.member}</p>
                  <p className="text-sm text-muted-foreground">({p.nonMember})</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                <strong>Deponeringsavgift:</strong> 100 kr för tagg.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <PlaceholderSection />
    </Layout>
  );
};

export default Gym;
