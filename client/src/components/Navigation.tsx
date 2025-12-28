import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

/**
 * Navigation Component
 * Design Philosophy: Modern Dark Gradient with Neon Accents
 * - Sticky header with navigation links
 * - Active page highlighting with magenta color
 * - Mobile responsive menu
 * - Language switcher dropdown (EN/JA only)
 */
export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language as 'en' | 'ja'] || translations.en;

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.personalInfo, href: "/personal-info" },
    { label: t.nav.skillsExperience, href: "/skills" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.achievements, href: "/achievements" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-gray-900/95 to-gray-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Full Name */}
          <Link href="/">
            <Button variant="ghost" className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent hover:bg-transparent">
              Nasemul Hasan Roni
            </Button>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`transition-all duration-300 px-4 py-2 ${
                    isActive(item.href)
                      ? "text-magenta-400 border-b-2 border-magenta-400 bg-magenta-400/5"
                      : "text-gray-400 hover:text-magenta-400 hover:bg-magenta-400/5"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Language Switcher Dropdown and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher Dropdown */}
            <div className="relative border-l border-purple-500/20 pl-4">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-4 py-2 rounded text-sm font-medium text-magenta-400 border border-magenta-400/50 bg-magenta-400/20 hover:bg-magenta-400/30 transition-all duration-300"
              >
                {language === "en" ? "EN" : "JA"}
                <ChevronDown size={16} className={`transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 bg-gray-800 border border-magenta-400/30 rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setIsLangOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-all duration-300 ${
                      language === "en"
                        ? "bg-magenta-400/20 text-magenta-400"
                        : "text-gray-400 hover:text-magenta-400 hover:bg-magenta-400/5"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("ja");
                      setIsLangOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-all duration-300 ${
                      language === "ja"
                        ? "bg-magenta-400/20 text-magenta-400"
                        : "text-gray-400 hover:text-magenta-400 hover:bg-magenta-400/5"
                    }`}
                  >
                    日本語
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-400 hover:text-magenta-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-purple-500/20">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-magenta-400 bg-magenta-400/10"
                      : "text-gray-400 hover:text-magenta-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            {/* Mobile Language Switcher */}
            <div className="space-y-2 border-t border-purple-500/20 pt-2 mt-2">
              <button
                onClick={() => {
                  setLanguage("en");
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm rounded transition-all duration-300 ${
                  language === "en"
                    ? "bg-magenta-400/20 text-magenta-400"
                    : "text-gray-400 hover:text-magenta-400 hover:bg-magenta-400/5"
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage("ja");
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm rounded transition-all duration-300 ${
                  language === "ja"
                    ? "bg-magenta-400/20 text-magenta-400"
                    : "text-gray-400 hover:text-magenta-400 hover:bg-magenta-400/5"
                }`}
              >
                日本語
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
