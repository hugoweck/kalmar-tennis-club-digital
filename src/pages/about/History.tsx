import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import PlaceholderSection from "@/components/PlaceholderSection";

const timelineEvents = [
  { year: "1914", text: "Kalmar Tennisklubb bildades den 17 april 1914." },
  { year: "1920-tal", text: "Klubben växer och de första banorna byggs vid Ängö." },
  { year: "1950-tal", text: "Klubben etablerar sig som en av regionens ledande tennisklubbar." },
  { year: "1970-tal", text: "Inomhushall byggs och verksamheten kan bedrivas året runt." },
  { year: "2000-tal", text: "Padel introduceras och nya banor byggs." },
  { year: "2020-tal", text: "Pickleball läggs till och anläggningen moderniseras ytterligare." },
];

const chairpersons = [
  "1914–1918: Grundare",
  "1918–1925: Tidiga ordförande",
  "Fler ordförande läggs till här...",
];

const History = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-container max-w-4xl mx-auto">
          <h1 className="mb-10">Historik</h1>

          {/* Timeline */}
          <div className="relative border-l-2 border-accent ml-4 mb-12">
            {timelineEvents.map((event, i) => (
              <div key={i} className="mb-8 pl-8 relative">
                <div className="absolute left-0 top-1 w-4 h-4 -translate-x-[9px] rounded-full bg-accent border-2 border-background" />
                <span className="font-heading font-bold text-accent">{event.year}</span>
                <p className="text-muted-foreground mt-1">{event.text}</p>
              </div>
            ))}
          </div>

          <Accordion type="single" collapsible className="mb-12">
            <AccordionItem value="detailed">
              <AccordionTrigger className="font-heading text-lg">Detaljerad historik</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>Kalmar Tennisklubb bildades 17 april 1914 och har sedan dess varit en central del av sportlivet i Kalmar.</p>
                <p>Mer detaljerad historiktext läggs till här.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Chairpersons */}
          <h2 className="mb-4 text-2xl">Ordförande genom åren</h2>
          <div className="bg-muted rounded-lg overflow-hidden">
            {chairpersons.map((c, i) => (
              <div key={i} className={`px-6 py-3 text-sm ${i % 2 === 0 ? "bg-muted" : "bg-card"}`}>
                {c}
              </div>
            ))}
          </div>

          {/* Nostalgia section */}
          <div className="mt-12">
            <h2 className="mb-4 text-2xl">Klädnostalgi</h2>
            <div className="highlight-box">
              <p className="text-muted-foreground">Bilder och text om historiska kläder kommer läggas till här.</p>
            </div>
          </div>
        </div>
      </section>
      <PlaceholderSection />
    </Layout>
  );
};

export default History;
