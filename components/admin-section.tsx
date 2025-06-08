import { Card, CardContent } from "./ui/card";
import { Users } from "lucide-react";

interface AdminExperience {
  title: string;
  organization: string;
}

const adminExperiences: AdminExperience[] = [
  { title: "Member", organization: "KIIT Student Activity Center (KSAC)" },
  { title: "Team Member", organization: "KIIT Mechatronics Society (KMHS)" },
  { title: "Member", organization: "KIIT International Student Society (KISS)" },
  { title: "Event Organizer", organization: "KIIT Silver Carnival and KIIT FEST 2022-23" },
];

export function AdminSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/0 to-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Administrative <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leadership roles and organizational involvement throughout my academic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminExperiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-md transition-all border-primary/10">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.organization}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}