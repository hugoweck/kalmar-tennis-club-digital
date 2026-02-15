import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PlaceholderSection from "@/components/PlaceholderSection";

const Membership = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="mb-6">Bli medlem</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Bli medlem i Kalmar Tennisklubb och ta del av alla våra aktiviteter, anläggningar och förmåner.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="https://www.matchi.se" target="_blank" rel="noopener noreferrer">
              Bli medlem via Matchi
            </a>
          </Button>
        </div>
      </section>
      <PlaceholderSection />
    </Layout>
  );
};

export default Membership;
