import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { CheckCircle2 } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const technicalSkills: Skill[] = [
  { name: "MATLAB & SIMULINK", level: 90, color: "bg-primary" },
  { name: "Ansys Maxwell", level: 85, color: "bg-primary" },
  { name: "Wireless Power Transfer", level: 90, color: "bg-primary" },
  { name: "Python", level: 75, color: "bg-primary" },
  { name: "Circuit Design", level: 85, color: "bg-primary" },
  { name: "Content Management", level: 80, color: "bg-primary" },
];

const softSkills = [
  "Project Management",
  "Teamwork",
  "Leadership",
  "Effective Communication",
  "Critical Thinking",
  "Research Strategy",
  "Public Relations",
  "Attention To Details"
];

const languages = [
  { name: "English", proficiency: "Fluent" },
  { name: "Bangla", proficiency: "Fluent" },
  { name: "Hindi", proficiency: "Fluent" },
];

const skillCategories = [
  {
    title: "Programming & Languages",
    skills: ["Python", "C", "HTML", "CSS", "SQL", "PHP"]
  },
  {
    title: "Simulation Software",
    skills: ["MATLAB", "SIMULINK", "TinkerCad", "Tina", "NI LabView", "Proteus Design Suite", "Arduino", "LTSpice", "EdrawMax", "Ansys Electromagnetics Suite", "8085 Compiler"]
  },
  {
    title: "Hardware",
    skills: ["Power Converter", "IoT & Embedded Systems", "Solar Cell", "Circuit Design & Installation", "Wireless Power Trans-Receiver"]
  },
  {
    title: "Digital Tools",
    skills: ["Confluence", "Google Docs", "ChatGPT & AI Tools", "Cloud Software", "Canva Design", "Microsoft Office Suite"]
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning electrical engineering, simulation software, programming, and content management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Card className="overflow-hidden hover:shadow-md transition-all h-fit">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Soft Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-md transition-all h-fit">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Languages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {languages.map((language, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-4 text-center border rounded-lg">
                    <h4 className="font-semibold text-lg mb-1">{language.name}</h4>
                    <p className="text-accent">{language.proficiency}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skill Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-primary">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="bg-accent/5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}