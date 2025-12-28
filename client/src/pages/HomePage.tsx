import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

/**
 * HomePage Component
 * Design Philosophy: Modern Dark Gradient with Neon Accents
 * - Hero section with full name and title
 * - Call-to-action buttons
 * - No duplicate navigation or paragraph
 */
export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language as 'en' | 'ja'] || translations.en;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent pointer-events-none" />

        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-magenta-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Logo/Initials */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-cyan-400 flex items-center justify-center bg-gradient-to-br from-cyan-400/10 to-magenta-500/10 shadow-lg shadow-cyan-500/50">
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
                NR
              </span>
            </div>
          </div>

          {/* Full Name - Professional Color Gradient */}
          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nasemul Hasan Roni
            </span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            {t.home.subtitle}
          </p>

          {/* Location and Email */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-cyan-400" />
              <span>{t.home.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-magenta-400" />
              <span>{t.home.email}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/personal-info">
              <Button className="bg-gradient-to-r from-magenta-500 to-magenta-600 hover:from-magenta-600 hover:to-magenta-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-magenta-500/50">
                {t.home.cta}
                <Mail className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="https://github.com/nasemulrona" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300">
                {t.home.github}
                <Github className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
