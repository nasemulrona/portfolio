import { Github, Linkedin, Mail, MapPin, MailIcon } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

/**
 * Footer Component
 * Design Philosophy: Modern Dark Gradient with Neon Accents
 * - Three-column layout: Name/Social, Contact Info, Quick Links
 * - Professional styling matching reference design
 */
export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language as 'en' | 'ja'] || translations.en;

  return (
    <footer className="bg-gradient-to-b from-transparent to-gray-900/50 border-t border-purple-500/20 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column: Name and Social Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Nasemul Hasan Roni</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/nasemulrona"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-purple-900/40 border border-purple-500/20 flex items-center justify-center text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nasemul-hasan-roni-82b4a3399"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-purple-900/40 border border-purple-500/20 flex items-center justify-center text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nasemulrona0661@gmail.com"
                className="w-10 h-10 rounded-lg bg-purple-900/40 border border-purple-500/20 flex items-center justify-center text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Middle Column: Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t.footer.contactInfo}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MailIcon size={18} className="text-cyan-400" />
                <a
                  href="mailto:nasemulrona0661@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  nasemulrona0661@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-cyan-400" />
                <span>{language === "en" ? "Dhaka, Bangladesh" : "ダッカ、バングラデシュ"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t.footer.quickLinks}</h3>
            <nav className="space-y-2">
              {[
                { label: t.nav.home, href: "/" },
                { label: t.nav.personalInfo, href: "/personal-info" },
                { label: t.nav.skillsExperience, href: "/skills" },
                { label: t.nav.projects, href: "/projects" },
                { label: t.nav.achievements, href: "/achievements" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>


      </div>
    </footer>
  );
}
