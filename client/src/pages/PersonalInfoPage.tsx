import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";

/**
 * PersonalInfoPage Component
 * Design Philosophy: Modern Dark Gradient with Neon Accents
 * - Contact information section with icons
 * - Education details
 * - Languages proficiency
 */
export default function PersonalInfoPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
              Personal Information
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Get to know more about my background and personal details
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="mb-12 p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/20 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="p-4 rounded-lg bg-purple-900/40 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-400">Email</span>
              </div>
              <p className="text-white font-medium">nasemulrona0661@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="p-4 rounded-lg bg-purple-900/40 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-magenta-400" />
                <span className="text-sm text-gray-400">Phone</span>
              </div>
              <p className="text-white font-medium">+880 1758-101881</p>
            </div>

            {/* Location */}
            <div className="p-4 rounded-lg bg-purple-900/40 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-400">Current Address</span>
              </div>
              <p className="text-white font-medium">Dhaka, Bangladesh</p>
            </div>

            {/* GitHub */}
            <div className="p-4 rounded-lg bg-purple-900/40 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-2">
                <Github className="w-5 h-5 text-magenta-400" />
                <span className="text-sm text-gray-400">GitHub</span>
              </div>
              <a href="https://github.com/nasemulrona" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-medium">
                github.com/nasemulrona
              </a>
            </div>

            {/* LinkedIn */}
            <div className="p-4 rounded-lg bg-purple-900/40 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-2">
                <Linkedin className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-400">LinkedIn</span>
              </div>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-medium">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12 p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/20 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <Globe className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>

          <div className="p-6 rounded-lg bg-purple-900/40 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-cyan-400 font-medium mb-2">Computer Science</p>
            <p className="text-gray-300 mb-1">Green University of Bangladesh</p>
            <p className="text-gray-500 text-sm">Currently Pursuing</p>
          </div>
        </div>

        {/* Languages Section */}
        <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/20 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <span className="text-lg">🌐</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Languages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Bangla", level: "Native" },
              { name: "English", level: "Fluent" },
              { name: "Hindi", level: "Fluent" },
            ].map((lang) => (
              <div
                key={lang.name}
                className="p-6 rounded-lg bg-purple-900/40 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-bold text-white mb-2">{lang.name}</h3>
                <p className="text-cyan-400 font-medium">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
