import { Award, BookOpen, Trophy } from "lucide-react";

/**
 * AchievementsPage Component
 * Design Philosophy: Modern Dark Gradient with Neon Accents
 * - Career highlights statistics
 * - Training and certifications
 */
export default function AchievementsPage() {
  const careerHighlights = [
    { label: "Competition Participations", value: 2 },
    { label: "Championships", value: 0 },
    { label: "Certifications", value: 1 },
    { label: "Publications", value: 0 },
  ];

  const certifications = [
    {
      title: "Full Stack Web Development with Python, Django & React",
      provider: "Ostad",
      description: "Comprehensive training in full-stack web development",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Career highlights, certifications, and accomplishments
          </p>
        </div>

        {/* Career Highlights Section */}
        <div className="mb-16 p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/20 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Career Highlights</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {careerHighlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-purple-900/40 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent mb-2">
                  {highlight.value}
                </div>
                <p className="text-gray-400 text-sm">{highlight.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Training & Certifications Section */}
        <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/20 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Training & Certifications</h2>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-purple-900/40 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-magenta-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-magenta-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">{cert.provider}</p>
                    <p className="text-gray-400">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
