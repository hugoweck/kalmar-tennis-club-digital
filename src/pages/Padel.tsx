import Layout from "@/components/Layout";
import PlaceholderSection from "@/components/PlaceholderSection";

const Padel = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-container max-w-3xl mx-auto">
          <h1 className="mb-6">Padel</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Padel är en blandning mellan tennis och squash. Man räknar som i tennis och får använda väggarna.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Startsträckan är kort – en sport för alla.
          </p>
          <div className="highlight-box">
            <p className="text-sm">
              <strong>Boka bana:</strong> Via Matchi eller ring receptionen 0480-13514.
            </p>
          </div>
        </div>
      </section>
      <PlaceholderSection />
    </Layout>
  );
};

export default Padel;
