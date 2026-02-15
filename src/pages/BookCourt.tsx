import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import PlaceholderSection from "@/components/PlaceholderSection";

const BookCourt = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-container max-w-4xl mx-auto">
          <h1 className="mb-6">Boka bana</h1>
          <Card className="mb-8 border-l-4 border-l-accent">
            <CardContent className="p-6">
              <p className="text-lg mb-4">
                Boka bana via Matchi eller ring receptionen <strong>0480-13514</strong>.
              </p>
              <Button variant="accent" size="lg" asChild>
                <a href="https://www.matchi.se" target="_blank" rel="noopener noreferrer">
                  Boka via Matchi
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="mb-4 text-2xl">Inomhus</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" /> 4 GreenSet-banor (tennis)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" /> 6 padelbanor
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="mb-4 text-2xl">Utomhus</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" /> 4 grusbanor
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" /> 1 hardcourt
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" /> 3 padelbanor
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" /> 2 pickleball-/minitennisbanor
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <PlaceholderSection />
    </Layout>
  );
};

export default BookCourt;
