import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import PlaceholderSection from "@/components/PlaceholderSection";

const Pickleball = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-container max-w-3xl mx-auto">
          <h1 className="mb-6">Pickleball</h1>
          <Card className="mb-8 border-l-4 border-l-accent">
            <CardContent className="p-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                USAs snabbast växande sport! Pickleball är enkel att utöva och passar alla.
              </p>
            </CardContent>
          </Card>

          <Accordion type="multiple" className="space-y-2">
            <AccordionItem value="points">
              <AccordionTrigger className="font-heading">Poäng & Match</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p>Spelet spelas till 11 poäng och man måste vinna med 2 poängs marginal. Bara servande lag kan göra poäng.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="serve">
              <AccordionTrigger className="font-heading">Serve</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p>Serven slås underifrån, diagonalt, och bollen måste studsa en gång på varje sida innan volley tillåts.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="return">
              <AccordionTrigger className="font-heading">Retur och tredje slaget</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p>Returspelaren ska låta bollen studsa. Tredje slaget är ett strategiskt slag – ofta en mjuk dropp mot köket.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="kitchen">
              <AccordionTrigger className="font-heading">Köket</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p>Köket (non-volley zone) är zonen närmast nätet. Man får inte slå en volley om man står i köket.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <PlaceholderSection />
    </Layout>
  );
};

export default Pickleball;
