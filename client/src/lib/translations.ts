export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      personalInfo: "Personal Info",
      skillsExperience: "Skills & Experience",
      projects: "Projects",
      achievements: "Achievements",
    },
    // Home Page
    home: {
      title: "Nasemul Hasan Roni",
      subtitle: "Full Stack Developer & AI Enthusiast",
      location: "Dhaka, Bangladesh",
      email: "nasemulrona0661@gmail.com",
      cta: "Get in Touch",
      github: "GitHub",
    },
    // Personal Info Page
    personalInfo: {
      title: "Personal Information",
      subtitle: "Get to know more about my background and personal details",
      contactInfo: "Contact Information",
      email: "Email",
      phone: "Phone",
      address: "Current Address",
      github: "GitHub",
      linkedin: "LinkedIn",
      education: "Education",
      degree: "BSC in Computer Science",
      field: "Computer Science",
      university: "Green University of Bangladesh",
      status: "Currently Pursuing",
      languages: "Languages",
      bangla: "Bangla",
      english: "English",
      hindi: "Hindi",
      native: "Native",
      fluent: "Fluent",
    },
    // Skills Page
    skills: {
      title: "Skills & Expertise",
      subtitle: "Technologies and expertise I've developed through projects and learning",
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      tools: "Tools & Platforms",
      concepts: "Core Concepts",
      experience: "Professional Experience",
      internTitle: "Intern Web Developer",
      internCompany: "BARAKAH IT",
      internDuration: "3 months",
      internDesc: "Developed and maintained web applications using modern technologies. Collaborated with team members on frontend and backend development tasks.",
    },
    // Projects Page
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of projects I've worked on and contributed to",
      viewProject: "View Project",
      stack: "Stack",
    },
    // Achievements Page
    achievements: {
      title: "Achievements",
      subtitle: "Career highlights, certifications, and accomplishments",
      careerHighlights: "Career Highlights",
      competitions: "Competition Participations",
      championships: "Championships",
      certifications: "Certifications",
      publications: "Publications",
      training: "Training & Certifications",
      ostadCourse: "Full Stack Web Development with Python, Django & React",
      ostadProvider: "Ostad",
      ostadDesc: "Comprehensive training in full-stack web development",
    },
    // Footer
    footer: {
      contactInfo: "Contact Information",
      quickLinks: "Quick Links",
      copyright: "© 2025 Nasemul Hasan Roni. All rights reserved.",
    },
  },
  ja: {
    // Navigation
    nav: {
      home: "ホーム",
      personalInfo: "個人情報",
      skillsExperience: "スキル・経験",
      projects: "プロジェクト",
      achievements: "実績",
    },
    // Home Page
    home: {
      title: "Nasemul Hasan Roni",
      subtitle: "フルスタック開発者 & AI愛好家",
      location: "ダッカ、バングラデシュ",
      email: "nasemulrona0661@gmail.com",
      cta: "お問い合わせ",
      github: "GitHub",
    },
    // Personal Info Page
    personalInfo: {
      title: "個人情報",
      subtitle: "私の背景と個人的な詳細についてもっと知る",
      contactInfo: "連絡先情報",
      email: "メール",
      phone: "電話",
      address: "現在の住所",
      github: "GitHub",
      linkedin: "LinkedIn",
      education: "学歴",
      degree: "コンピュータサイエンスのBSC",
      field: "コンピュータサイエンス",
      university: "Green University of Bangladesh",
      status: "現在進行中",
      languages: "言語",
      bangla: "ベンガル語",
      english: "英語",
      hindi: "ヒンディー語",
      native: "ネイティブ",
      fluent: "流暢",
    },
    // Skills Page
    skills: {
      title: "スキル・専門知識",
      subtitle: "プロジェクトと学習を通じて開発したテクノロジーと専門知識",
      languages: "言語",
      frontend: "フロントエンド",
      backend: "バックエンド",
      databases: "データベース",
      tools: "ツール・プラットフォーム",
      concepts: "コアコンセプト",
      experience: "職務経歴",
      internTitle: "インターンシップ ウェブ開発者",
      internCompany: "BARAKAH IT",
      internDuration: "3ヶ月",
      internDesc: "最新のテクノロジーを使用したウェブアプリケーションの開発と保守。フロントエンドとバックエンド開発タスクでチームメンバーと協力。",
    },
    // Projects Page
    projects: {
      title: "注目プロジェクト",
      subtitle: "私が取り組んだプロジェクトの選択",
      viewProject: "プロジェクトを見る",
      stack: "スタック",
    },
    // Achievements Page
    achievements: {
      title: "実績",
      subtitle: "キャリアハイライト、認定資格、および成就",
      careerHighlights: "キャリアハイライト",
      competitions: "競技会参加",
      championships: "チャンピオンシップ",
      certifications: "認定資格",
      publications: "出版物",
      training: "研修・認定資格",
      ostadCourse: "Python、Django、Reactを使用したフルスタックウェブ開発",
      ostadProvider: "Ostad",
      ostadDesc: "フルスタックウェブ開発の包括的なトレーニング",
    },
    // Footer
    footer: {
      contactInfo: "連絡先情報",
      quickLinks: "クイックリンク",
      copyright: "© 2025 Nasemul Hasan Roni. All rights reserved.",
    },
  },
};

export type Language = 'en' | 'ja';
export type TranslationKey = keyof typeof translations.en;
