import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  ArrowUpRight,
  Star,
  GitFork,
  Clock3,
  Code,
} from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  stars?: number;
  forks?: number;
  updated?: string;
  github?: string;
  demo?: string;
  coverImage?: string

}

export function ProjectCard({
  title,
  description,
  technologies,
  stars,
  forks,
  updated,
  github,
  demo,
  coverImage
}: ProjectCardProps) {
  return (
    <Card className="pt-0 group w-full overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {coverImage && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Dark gradient for a more polished look */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

          {/* Floating icon */}
          <div className="absolute right-4 top-4 rounded-lg bg-background/70 p-2 backdrop-blur-md">
            <Code className="h-5 w-5 text-primary" />
          </div>
        </div>
      )}

      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-2 line-clamp-3">
              {description}
            </CardDescription>
          </div>

          <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
            <Code className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {stars !== undefined && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {stars}
            </div>
          )}

          {forks !== undefined && (
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              {forks}
            </div>
          )}

          {updated && (
            <div className="flex items-center gap-1">
              <Clock3 className="h-4 w-4" />
              {updated}
            </div>
          )}
        </div>
      </CardContent>

      {(github || demo) && (
        <CardFooter className="flex gap-2">
          {github && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1"
            >
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}

          {demo && (
            <Button
              size="sm"
              asChild
              className="flex-1"
            >
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}