import { Code2, Database, Wrench, Brain } from "lucide-react";

/**
 * SkillsPage Component
 * Design Philosophy: Modern Dark Gradient with Neon Accents
 * - Skills organized by category
 * - Proficiency indicators
 * - Experience section
 */
export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "TypeScript", "C++", "JavaScript"],
    },
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Django", "FastAPI", "Node.js", "REST APIs"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git/GitHub", "Docker", "Linux", "VS Code"],
    },
    {
      title: "Core Concepts",
      icon: Brain,
      skills: ["OOP", "Data Structures", "Algorithms", "System Design"],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Technologies and expertise I've developed through projects and learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-magenta-500" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Section */}
        <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/20 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>

          <div className="space-y-6">
            {/* Experience Item */}
            <div className="p-6 rounded-lg bg-purple-900/40 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Intern Web Developer</h3>
                  <p className="text-cyan-400 font-medium">BARAKAH IT</p>
                </div>
                <span className="text-gray-500 text-sm">3 months</span>
              </div>
              <p className="text-gray-400">
                Developed and maintained web applications using modern technologies. 
                Collaborated with team members on frontend and backend development tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
