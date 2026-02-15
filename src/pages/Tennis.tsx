import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import PlaceholderSection from "@/components/PlaceholderSection";

const ballGroups = [
  { color: "Röd boll", age: "4–7 år", desc: "Minitennisbana", bg: "bg-red-100 border-red-300" },
  { color: "Orange boll", age: "8–9 år", desc: "Miditennisbana", bg: "bg-orange-100 border-orange-300" },
  { color: "Grön boll", age: "10–11 år", desc: "Fullstor bana", bg: "bg-green-100 border-green-300" },
  { color: "Gul boll", age: "12–18 år", desc: "Fullstor bana, mer teknik & matchspel", bg: "bg-yellow-100 border-yellow-300" },
];

const Tennis = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-container max-w-4xl mx-auto">
          <h1 className="mb-10">Tennis</h1>

          {/* Senior */}
          <div className="mb-12">
            <h2 className="mb-4">Senior</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              KTK har en mängd olika aktiviteter för ALLA oavsett om du aldrig spelat tennis, till dig som tävlar på hög nivå.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1 mb-4">
              <li>Vuxenkurser</li>
              <li>Privatlektioner</li>
              <li>Tävlingar (nationella och internationella)</li>
              <li>Drop-In-Tennis</li>
            </ul>
            <div className="highlight-box">
              <p className="text-sm">
                <strong>Kontakt:</strong> info@kalmartk.se · 0480-13514
              </p>
            </div>
          </div>

          {/* Junior */}
          <div className="mb-12">
            <h2 className="mb-4">Junior</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kalmar Tennisklubb satsar både på bredd och tävling. Ca 250 juniorer i träning.
            </p>

            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="tennisskolan">
                <AccordionTrigger className="text-lg font-heading">Tennisskolan – Play & Stay</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  <p>Spelglädje är nyckeln till framgång. Vi anpassar bana, racket och boll efter ålder och nivå.</p>
                  <p>Grupper: Röd, Orange, Grön, Gul boll samt utvecklings-, tävlings- och elitgrupp.</p>
                  <p>Målet är utveckling, glädje och god motion.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h3 className="mb-4">Grupper</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ballGroups.map((g) => (
                <Card key={g.color} className={`border ${g.bg}`}>
                  <CardContent className="p-5">
                    <h4 className="font-heading font-semibold mb-1">{g.color}</h4>
                    <p className="text-sm text-muted-foreground">{g.age}</p>
                    <p className="text-sm text-muted-foreground">{g.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PlaceholderSection />
    </Layout>
  );
};

export default Tennis;
