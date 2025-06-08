"use client";

import { Card, CardContent } from "./ui/card";
import { Zap, PenTool, FileText, Search } from "lucide-react";

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ExpertiseCard({ icon, title, description }: ExpertiseCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden group">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="rounded-full bg-primary/10 p-3 mb-4 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export function ExpertiseCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <ExpertiseCard
        icon={<Zap className="h-6 w-6 text-primary" />}
        title="Electrical Engineering"
        description="Specializing in wireless power transfer systems, electric vehicle charging technology, and sustainable energy solutions."
      />
      <ExpertiseCard
        icon={<PenTool className="h-6 w-6 text-primary" />}
        title="Content Management"
        description="Creating and leading teams to develop engaging content with a focus on clear communication and workflow optimization."
      />
      <ExpertiseCard
        icon={<Search className="h-6 w-6 text-primary" />}
        title="Content Research"
        description="Conducting thorough research, data analysis, and implementing effective research strategies for high-quality content production."
      />
      <ExpertiseCard
        icon={<FileText className="h-6 w-6 text-primary" />}
        title="Technical Research"
        description="Conducting detailed research and publishing findings on emerging technologies in electrical engineering."
      />
    </div>
  );
}