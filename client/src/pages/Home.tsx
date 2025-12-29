import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl font-bold gradient-text">NR</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
            <a href="#skills" className="text-sm hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">Projects</a>
            <a href="#education" className="text-sm hover:text-accent transition-colors">Education</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/images/hero-bg.png)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        
        <div className="relative container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent text-sm font-semibold">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">Nasemul Hasan Roni</span>
              </h1>
              <p className="text-2xl text-muted-foreground font-light">Full Stack Developer & AI Enthusiast</p>
            </div>
            
            <p className="text-foreground/80 text-lg leading-relaxed max-w-lg">
              Computer Science undergraduate with expertise in web development, AI, and modern technologies. 
              Building innovative solutions with React, Django, and Next.js.
            </p>

            <div className="flex gap-4 pt-4">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#contact" className="flex items-center gap-2">
                  Get in Touch <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <a href="https://github.com/nasemulrona" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  GitHub <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="flex gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Dhaka, Bangladesh
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                nasemulrona0661@gmail.com
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-accent/20 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute inset-0 border-2 border-accent/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 border border-accent/20 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="w-32 h-32 text-accent/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                I'm a passionate developer with a strong foundation in software development, web technologies, and artificial intelligence. 
                Currently pursuing my Bachelor's degree in Computer Science at Green University of Bangladesh.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                With hands-on experience in full-stack development, I've worked on diverse projects ranging from healthcare systems to AI-powered platforms. 
                I'm particularly interested in building scalable applications and exploring the intersection of AI and web development.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When I'm not coding, I enjoy participating in competitive programming contests and contributing to open-source projects.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="p-6 border-border bg-card/50 backdrop-blur neon-glow-cyan">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Education</h3>
                    <p className="text-sm text-muted-foreground mt-1">BS in Computer Science</p>
                    <p className="text-xs text-muted-foreground">Green University of Bangladesh</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-border bg-card/50 backdrop-blur neon-glow-magenta">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Experience</h3>
                    <p className="text-sm text-muted-foreground mt-1">Intern Web Developer</p>
                    <p className="text-xs text-muted-foreground">BARAKAH IT (3 months)</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <Card className="p-6 border-border bg-card/50 backdrop-blur hover:neon-glow-cyan transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-accent" />
                Languages
              </h3>
              <div className="space-y-2">
                {['Python', 'TypeScript', 'C++', 'JavaScript'].map((lang) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="text-sm">{lang}</span>
                    <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-accent to-accent/50" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Frontend */}
            <Card className="p-6 border-border bg-card/50 backdrop-blur hover:neon-glow-magenta transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-accent" />
                Frontend
              </h3>
              <div className="space-y-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* Backend */}
            <Card className="p-6 border-border bg-card/50 backdrop-blur hover:neon-glow-cyan transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-accent" />
                Backend
              </h3>
              <div className="space-y-2">
                {['Django', 'FastAPI', 'Node.js', 'REST APIs'].map((tech) => (
                  <span key={tech} className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* Databases */}
            <Card className="p-6 border-border bg-card/50 backdrop-blur hover:neon-glow-magenta transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-accent" />
                Databases
              </h3>
              <div className="space-y-2">
                {['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM'].map((tech) => (
                  <span key={tech} className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* Tools */}
            <Card className="p-6 border-border bg-card/50 backdrop-blur hover:neon-glow-cyan transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-accent" />
                Tools & Platforms
              </h3>
              <div className="space-y-2">
                {['Git/GitHub', 'Docker', 'Linux', 'VS Code'].map((tech) => (
                  <span key={tech} className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* Concepts */}
            <Card className="p-6 border-border bg-card/50 backdrop-blur hover:neon-glow-magenta transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-accent" />
                Core Concepts
              </h3>
              <div className="space-y-2">
                {['OOP', 'Data Structures', 'Algorithms', 'System Design'].map((tech) => (
                  <span key={tech} className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* GUBHCS-AI */}
            <Card className="p-8 border-border bg-card/50 backdrop-blur neon-glow hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">GUBHCS-AI</h3>
                  <p className="text-sm text-muted-foreground mt-1">2025</p>
                </div>
                <ExternalLink className="w-5 h-5 text-accent" />
              </div>
              <p className="text-foreground/80 mb-4">
                Full-stack AI-powered hospital management system with appointment booking, patient records, billing, and AI chatbot for medical queries.
              </p>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Clerk Auth'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent/10 border border-accent/30 rounded text-xs text-accent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                View Project
              </Button>
            </Card>

            {/* AI-KEIBA */}
            <Card className="p-8 border-border bg-card/50 backdrop-blur neon-glow hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">AI-KEIBA</h3>
                  <p className="text-sm text-muted-foreground mt-1">2024</p>
                </div>
                <ExternalLink className="w-5 h-5 text-accent" />
              </div>
              <p className="text-foreground/80 mb-4">
                AI-based horse race outcome prediction platform with probability models, frontend in React, and backend ML logic with Python.
              </p>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Bootstrap', 'Python', 'PostgreSQL', 'Docker'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent/10 border border-accent/30 rounded text-xs text-accent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                View Project
              </Button>
            </Card>

            {/* Blood-For-Life */}
            <Card className="p-8 border-border bg-card/50 backdrop-blur neon-glow hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Blood-For-Life</h3>
                  <p className="text-sm text-muted-foreground mt-1">2025</p>
                </div>
                <ExternalLink className="w-5 h-5 text-accent" />
              </div>
              <p className="text-foreground/80 mb-4">
                Full-stack blood donation platform with user authentication, role-based access, donation requests, and donor profile management.
              </p>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {['Django', 'Django REST', 'React.js', 'PostgreSQL', 'Bootstrap', 'Docker'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent/10 border border-accent/30 rounded text-xs text-accent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                View Project
              </Button>
            </Card>

            {/* Lawyer Trent */}
            <Card className="p-8 border-border bg-card/50 backdrop-blur neon-glow hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Lawyer Trent</h3>
                  <p className="text-sm text-muted-foreground mt-1">Professional Experience</p>
                </div>
                <ExternalLink className="w-5 h-5 text-accent" />
              </div>
              <p className="text-foreground/80 mb-4">
                Contributed to UI/UX design, lawyer profile layouts, backend API development, and frontend-backend integration for authentication systems.
              </p>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Contributions</p>
                  <div className="flex flex-wrap gap-2">
                    {['UI/UX Design', 'Frontend', 'Backend APIs', 'Authentication'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent/10 border border-accent/30 rounded text-xs text-accent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Education & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-accent" />
                Education
              </h3>
              <Card className="p-6 border-border bg-card/50 backdrop-blur">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                  <span className="text-xs text-accent">Present</span>
                </div>
                <p className="text-sm text-muted-foreground">Green University of Bangladesh</p>
                <p className="text-xs text-muted-foreground mt-2">CGPA: 2.85</p>
              </Card>

              <Card className="p-6 border-border bg-card/50 backdrop-blur">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Higher Secondary Certificate (HSC)</h4>
                  <span className="text-xs text-accent">2021</span>
                </div>
                <p className="text-sm text-muted-foreground">Rajbari Govt. College, Dhaka Board</p>
                <p className="text-xs text-muted-foreground mt-2">GPA: 4.25</p>
              </Card>

              <Card className="p-6 border-border bg-card/50 backdrop-blur">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">Secondary School Certificate (SSC)</h4>
                  <span className="text-xs text-accent">2018</span>
                </div>
                <p className="text-sm text-muted-foreground">Majbari High School, Dhaka Board</p>
                <p className="text-xs text-muted-foreground mt-2">GPA: 4.50</p>
              </Card>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Trophy className="w-6 h-6 text-accent" />
                Achievements & Activities
              </h3>
              <Card className="p-6 border-border bg-card/50 backdrop-blur">
                <h4 className="font-semibold mb-3">Competitions & Awards</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>2022 ICPC Asia Dhaka Regional Contest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>2023 ICPC Asia Dhaka Regional Contest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Inter-University Problem-Solving Competitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Active Open-Source Contributor</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-border bg-card/50 backdrop-blur">
                <h4 className="font-semibold mb-3">Training & Certifications</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Ostad: Full Stack Web Development with Python, Django & React</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Coursework: Data Structures, Algorithms, Machine Learning, Database Systems</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-12 border-border bg-card/50 backdrop-blur neon-glow text-center">
              <p className="text-foreground/80 mb-8">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
              </p>
              <div className="space-y-4 mb-8">
                <a href="mailto:nasemulrona0661@gmail.com" className="flex items-center justify-center gap-3 text-accent hover:text-accent/80 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>nasemulrona0661@gmail.com</span>
                </a>
                <a href="tel:+8801758101881" className="flex items-center justify-center gap-3 text-accent hover:text-accent/80 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+880 1758-101881</span>
                </a>
                <div className="flex items-center justify-center gap-3 text-accent">
                  <MapPin className="w-5 h-5" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="mailto:nasemulrona0661@gmail.com">Send Email</a>
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  <a href="https://github.com/nasemulrona" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    GitHub <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  <a href="https://www.linkedin.com/in/nasemul-hasan-roni-82b4a3399" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    LinkedIn <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Nasemul Hasan Roni. All rights reserved.</p>
          <p className="mt-2">Designed & Built with React, Tailwind CSS, and a passion for clean code.</p>
        </div>
      </footer>
    </div>
  );
}
