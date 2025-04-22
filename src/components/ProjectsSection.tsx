
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Badge } from "./Badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  category: "ui" | "ux" | "web" | "mobile";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mindful Finance Dashboard",
    description: "A finance management dashboard with intuitive visualizations and calming interface to reduce financial anxiety.",
    tags: ["UI Design", "Dashboard", "Finance"],
    imageUrl: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Finance+Dashboard",
    category: "ui"
  },
  {
    id: 2,
    title: "Eco Travel Mobile App",
    description: "Sustainable travel planning app that helps users reduce their carbon footprint while exploring the world.",
    tags: ["UX Research", "Mobile App", "Eco-friendly"],
    imageUrl: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Travel+App",
    category: "mobile"
  },
  {
    id: 3,
    title: "Artisan Marketplace",
    description: "E-commerce platform connecting traditional artisans with global customers to preserve cultural crafts.",
    tags: ["Web Design", "E-commerce", "Marketplace"],
    imageUrl: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Marketplace",
    category: "web"
  },
  {
    id: 4,
    title: "Health Tracking Wearable",
    description: "Interface design for a health monitoring wearable focused on mental wellness and stress management.",
    tags: ["UI Design", "Wearable", "Healthcare"],
    imageUrl: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Health+Wearable",
    category: "ux"
  },
  {
    id: 5,
    title: "Creative Portfolio Template",
    description: "Customizable portfolio template for designers and artists with innovative layout options.",
    tags: ["Web Design", "Templates", "Creative"],
    imageUrl: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Portfolio+Template",
    category: "web"
  },
  {
    id: 6,
    title: "Smart Home Control Center",
    description: "Unified interface for managing home automation with contextual awareness and accessibility features.",
    tags: ["UI/UX", "IoT", "Smart Home"],
    imageUrl: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Smart+Home",
    category: "ui"
  },
];

export function ProjectsSection() {
  const [filter, setFilter] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter)
    : projects;

  const filters = [
    { label: "All", value: null },
    { label: "UI Design", value: "ui" },
    { label: "UX Design", value: "ux" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
  ];

  return (
    <section id="projects" className="section bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <Badge variant="default" size="md" className="mb-4">My Projects</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Work</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mb-12">
            Explore my recent design projects and creative explorations.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((item) => (
              <Button
                key={item.label}
                variant={filter === item.value ? "default" : "outline"}
                className={
                  filter === item.value 
                    ? "bg-designer-primary hover:bg-designer-primary/90" 
                    : "hover:bg-designer-primary/10 hover:text-designer-primary border-designer-primary/20"
                }
                onClick={() => setFilter(item.value)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal 
              key={project.id}
              direction="up" 
              delay={150 * (index % 3)} 
              className="h-full"
            >
              <div 
                className="group relative overflow-hidden rounded-xl h-full"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-designer-primary/40 to-designer-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" size="sm" className="border-white/30 text-white">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="default" size="sm" className="bg-white text-designer-primary hover:bg-white/90">
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
