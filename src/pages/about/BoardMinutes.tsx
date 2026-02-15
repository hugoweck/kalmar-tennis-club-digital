import Layout from "@/components/Layout";
import PlaceholderSection from "@/components/PlaceholderSection";

const BoardMinutes = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-container max-w-3xl mx-auto">
          <h1 className="mb-6">Styrelseprotokoll</h1>
          <p className="text-muted-foreground mb-8">Styrelseprotokoll publiceras här.</p>
        </div>
      </section>
      <PlaceholderSection />
    </Layout>
  );
};

export default BoardMinutes;
