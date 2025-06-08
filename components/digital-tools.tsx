import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Code, Youtube, Search, Database, FileSearch, Bot, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface DigitalToolProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const digitalTools: DigitalToolProps[] = [
  {
    icon: <Youtube className="h-6 w-6 text-primary" />,
    title: "YouTube Data Extraction",
    description: "A tool that extracts metadata, comments, and engagement metrics from YouTube videos to analyze performance and audience interaction.",
    technologies: ["Python", "YouTube API", "Data Analysis"],
    link: "https://github.com/ananna-biswas/youtube-data-extractor"
  },
  {
    icon: <Search className="h-6 w-6 text-primary" />,
    title: "Advanced YouTube Search With Filter",
    description: "Custom search tool that enables precise filtering of YouTube content by topic, engagement metrics, and keyword relevance.",
    technologies: ["Python", "Web Scraping", "API Integration"],
    link: "https://github.com/ananna-biswas/advanced-youtube-search"
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Content Research Database",
    description: "A centralized database system for organizing and categorizing research findings for more efficient content creation.",
    technologies: ["SQL", "PHP", "Database Design"],
    link: "https://github.com/ananna-biswas/content-research-db"
  },
  {
    icon: <FileSearch className="h-6 w-6 text-primary" />,
    title: "SEO Performance Analyzer",
    description: "Tool that evaluates content performance based on SEO metrics and provides recommendations for optimization.",
    technologies: ["Python", "Data Visualization", "SEO Analysis"],
    link: "https://github.com/ananna-biswas/seo-analyzer"
  },
  {
    icon: <Bot className="h-6 w-6 text-primary" />,
    title: "Research Assistant Bot",
    description: "An automated assistant that helps gather preliminary research on specific topics using predefined parameters.",
    technologies: ["AI Integration", "Python", "Web Scraping"],
    link: "https://github.com/ananna-biswas/research-assistant-bot"
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Content Workflow Automation",
    description: "Streamlines the content creation process by automating routine tasks and providing status updates on project milestones.",
    technologies: ["Workflow Automation", "Process Optimization"],
    link: "https://github.com/ananna-biswas/content-workflow"
  }
];

export function DigitalToolsSection() {
  return (
    <section id="digital-tools" className="py-20 bg-gradient-to-b from-muted/0 to-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Digital <span className="text-primary">Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Custom tools and applications I've developed to enhance research and content creation workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalTools.map((tool, index) => (
            <Card key={index} className="hover:shadow-md transition-all border-primary/10 h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="rounded-full bg-primary/10 p-3 mb-4 w-12 h-12 flex items-center justify-center">
                  {tool.icon}
                </div>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {tool.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              {tool.link && (
                <CardFooter className="pt-0 mt-auto">
                  <Button size="sm" variant="outline" asChild className="w-full">
                    <a href={tool.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}