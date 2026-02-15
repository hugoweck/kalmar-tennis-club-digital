import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

interface PersonCardProps {
  name: string;
  role: string;
  phone?: string;
  email?: string;
}

const PersonCard = ({ name, role, phone, email }: PersonCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
          <span className="text-accent-foreground font-heading font-bold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <h4 className="font-heading font-semibold text-lg">{name}</h4>
        <p className="text-muted-foreground text-sm mb-3">{role}</p>
        {phone && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-3 w-3 text-accent" />
            {phone}
          </p>
        )}
        {email && (
          <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <Mail className="h-3 w-3 text-accent" />
            {email}
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default PersonCard;
