import Layout from "@/components/Layout";
import PlaceholderSection from "@/components/PlaceholderSection";

const Board = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-container max-w-3xl mx-auto">
          <h1 className="mb-6">Styrelsen</h1>
          <p className="text-muted-foreground mb-8">Information om styrelsens sammansättning kommer snart.</p>
        </div>
      </section>
      <PlaceholderSection />
    </Layout>
  );
};

export default Board;
