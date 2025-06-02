import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  image,
}: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {image && (
        <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
          <img
            src={image}
            alt={`${title} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <div className="flex gap-2">
            {githubUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
