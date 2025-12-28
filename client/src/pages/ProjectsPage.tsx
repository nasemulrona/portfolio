import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * ProjectsPage Component
 * Design Philosophy: Modern Dark Gradient with Neon Accents
 * - Featured projects with descriptions
 * - Technology stacks
 * - Project links
 */
export default function ProjectsPage() {
  const projects = [
    {
      title: "GUBHCS-AI",
      year: "2025",
      description:
        "Full-stack AI-powered hospital management system with appointment booking, patient records, billing, and AI chatbot for medical queries.",
      stack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma",
        "Clerk Auth",
      ],
      link: "#",
    },
    {
      title: "AI-KEIBA",
      year: "2025",
      description:
        "AI-based horse race outcome prediction platform with probability models, frontend in React, and backend ML logic with Python.",
      stack: ["React", "Next.js", "Bootstrap", "Python", "PostgreSQL", "Docker"],
      link: "#",
    },
    {
      title: "Blood-For-Life",
      year: "2025",
      description:
        "Full-stack blood donation platform with user authentication, role-based access, donation requests, and donor profile management.",
      stack: [
        "Django",
        "Django REST",
        "React.js",
        "PostgreSQL",
        "Bootstrap",
        "Docker",
      ],
      link: "https://blood-for-life.onrender.com/",
    },
    {
      title: "Lawyer Trent",
      year: "2025",
      description:
        "Professional platform for legal services. Contributed to UI/UX design, lawyer profile layouts, backend API development, and frontend-backend integration for authentication systems.",
      stack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            A selection of projects I've worked on and contributed to
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-max">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm group flex flex-col h-full"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{project.year}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-magenta-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technology Stack */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-3">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-xs text-cyan-400 hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Button */}
              <a
                href={project.link}
                target={project.link !== "#" ? "_blank" : undefined}
                rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Button className="w-full mt-auto bg-gradient-to-r from-magenta-500 to-magenta-600 hover:from-magenta-600 hover:to-magenta-700 text-white font-semibold rounded-lg transition-all duration-300">
                  View Project
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
