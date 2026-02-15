import Layout from "@/components/Layout";
import PersonCard from "@/components/PersonCard";
import PlaceholderSection from "@/components/PlaceholderSection";

const staff = {
  "Verksamhetsledare": [
    { name: "Benny Sjösteen", role: "Verksamhetsledare", phone: "073-5297851", email: "benny@kalmartk.se" },
  ],
  "Tränare": [
    { name: "Åke Svensson", role: "Tränare", phone: "073-3303670", email: "ake@kalmartk.se" },
    { name: "Carl Enlund", role: "Tränare", phone: "073-6432516", email: "carl@kalmartk.se" },
    { name: "Göran Andersson", role: "Tränare", phone: "072-5455685", email: "goran@kalmartk.se" },
    { name: "Danny Karlsson", role: "Tränare", phone: "079-0880036", email: "danny@kalmartk.se" },
    { name: "Edvin Sköld", role: "Tränare", phone: "072-5269141" },
    { name: "Magnus Darud", role: "Tränare", phone: "070-7711765" },
    { name: "Fredrik Dahl", role: "Tränare", phone: "070-3393699" },
  ],
  "Övrig personal": [
    { name: "Lotta Samuelsson", role: "Övrig personal", phone: "073-6985650", email: "info@kalmartk.se" },
    { name: "Kristoffer Granlund", role: "Övrig personal" },
    { name: "Sara Kulinxha", role: "Övrig personal" },
    { name: "Felicia Larsson", role: "Övrig personal" },
    { name: "Maya Ashmar", role: "Övrig personal" },
    { name: "Matti Karlsson", role: "Övrig personal" },
    { name: "Madeleine Blixt", role: "Övrig personal" },
  ],
};

const Staff = () => {
  return (
    <Layout>
      <section className="page-section">
        <div className="section-container max-w-5xl mx-auto">
          <h1 className="mb-10">Personal</h1>

          {Object.entries(staff).map(([category, people]) => (
            <div key={category} className="mb-12">
              <h2 className="mb-6 text-2xl">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {people.map((person) => (
                  <PersonCard key={person.name} {...person} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <PlaceholderSection />
    </Layout>
  );
};

export default Staff;
