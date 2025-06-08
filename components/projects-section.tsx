import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Lightbulb, FileText, Award, BookOpen } from "lucide-react";

interface Project {
  id: number;
  type: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  icon: React.ReactNode;
  conference?: string;
  year: string;
  supervisor?: string;
}

const projects: Project[] = [
  {
    id: 1,
    type: "Conference",
    title: "Design Approaches of Wireless Power Transfer(WPT) Coil Using ANSYS Maxwell Symplorer",
    description: "This research presents innovative design approaches for wireless power transfer coils, utilizing ANSYS Maxwell Symplorer for simulation and analysis.",
    tags: ["WPT", "ANSYS Maxwell", "Coil Design", "IEEE"],
    link: "#",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    conference: "IEEE International Conference on Current Development in Engineering and Technology (CCET)",
    year: "2022"
  },
  {
    id: 2,
    type: "Conference",
    title: "Experimental Design of Solar Powered Dynamic Wireless Charging of Electric Vehicle",
    description: "This research explores sustainable energy solutions through solar-powered dynamic wireless charging systems for electric vehicles, demonstrating practical applications and efficiency metrics.",
    tags: ["Solar Power", "DWPT", "Electric Vehicles", "Wireless Charging"],
    link: "#",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    conference: "International Conference on Smart Systems for applications in Electrical Sciences (ICSSES)",
    year: "2023"
  },
  {
    id: 3,
    type: "Undergraduate Project",
    title: "Design of Electric Vehicle Charging System Based on Wireless Power Transfer (WPT)",
    description: "This project presents design approaches for EV wireless charging systems using Wireless Power Transfer (WPT). Simulations in Ansys Maxwell achieved 80-90% efficiency at a 10 mm gap. Prototypes using Wurth Electronics coils demonstrated 70-80% efficiency at the same gap. This project also presents a low-cost dynamic wireless power transfer (DWPT) charging system powered by solar energy.",
    tags: ["WPT", "Electric Vehicles", "Solar Energy", "DWPT"],
    supervisor: "Prof. Dr. Akshaya Kumar Pati",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    year: "2023"
  },
  {
    id: 4,
    type: "Hackathon",
    title: "Designing of the eDrive for Tata Nexon EV",
    description: "Focused on designing the eDrive for the Tata Nexon EV, selecting it as the powertrain with a 1-axle (front axle) configuration. Performance baseline calculations and simulations were conducted in Matlab/Simulink. The eDrive design involved selecting components based on those used in the Tata Nexon EV or available in Simulink.",
    tags: ["BOSCH-IEEE", "eDrive", "EV Design", "Matlab/Simulink"],
    icon: <Award className="h-10 w-10 text-primary" />,
    year: "2022"
  },
  {
    id: 5,
    type: "White Paper",
    title: "E-Waste on Printed Circuit Board",
    description: "This paper addresses the environmental and economic challenges posed by waste electrical and electronic equipment (WEEE), focusing on the recycling of waste printed circuit boards (WPCBs). It explores advanced metallurgical and physical methods for metal recovery, emphasizing mechanical processing techniques such as comminution, size separation, and magnetic and electrostatic separation.",
    tags: ["Johnson Controls", "E-Waste", "PCB Recycling", "Sustainability"],
    icon: <FileText className="h-10 w-10 text-primary" />,
    year: "2022"
  },
  {
    id: 6,
    type: "Competition",
    title: "Smart Home Controlling System",
    description: "Created a comprehensive smart home control system that enabled automated management of home appliances and security features. The project secured 2nd place at the institute level and was selected to compete at the regional level.",
    tags: ["IoT", "Home Automation", "Embedded Systems", "Regional Award"],
    icon: <Award className="h-10 w-10 text-primary" />,
    year: "2017"
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <div className="p-2 rounded-lg bg-primary/10 self-start">
          {project.icon}
        </div>
        <div>
          <Badge variant="outline" className="mb-2">{project.type}</Badge>
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{project.description}</p>
        {project.conference && (
          <div className="mb-3">
            <h4 className="text-sm font-medium">Conference:</h4>
            <p className="text-sm text-muted-foreground">{project.conference}</p>
          </div>
        )}
        {project.supervisor && (
          <div className="mb-3">
            <h4 className="text-sm font-medium">Supervisor:</h4>
            <p className="text-sm text-muted-foreground">{project.supervisor}</p>
          </div>
        )}
        <div className="mt-3">
          <h4 className="text-sm font-medium mb-2">Year: <span className="text-accent">{project.year}</span></h4>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {project.link && (
        <CardFooter className="pt-0">
          <Button size="sm" variant="outline" asChild className="w-full">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <span>View Details</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Research & <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring innovative solutions in wireless power transfer, electric vehicle technology, and sustainable energy systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}