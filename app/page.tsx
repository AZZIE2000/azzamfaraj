"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Brain,
  Zap,
  Globe,
  Server,
  Cpu,
  Bot,
} from "lucide-react";
import Link from "next/link";

// Three.js animated background component
function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
        transparent
        opacity={0.1}
      />
    </Sphere>
  );
}

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => (
    <Sphere
      key={i}
      args={[0.02]}
      position={[
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ]}
    >
      <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} />
    </Sphere>
  ));

  return <>{particles}</>;
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "skills",
        "projects",
        "experience",
        "certifications",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = {
    "Programming Languages": [
      { name: "TypeScript", icon: Code, level: 95 },
      { name: "JavaScript", icon: Code, level: 95 },
      { name: "Python", icon: Code, level: 90 },
      { name: "PHP", icon: Code, level: 80 },
      { name: "HTML/CSS", icon: Globe, level: 95 },
    ],
    "Frameworks & Libraries": [
      { name: "Next.js", icon: Globe, level: 95 },
      { name: "NestJS", icon: Server, level: 85 },
      { name: "FastAPI", icon: Zap, level: 90 },
      { name: "LangChain", icon: Brain, level: 90 },
      { name: "React", icon: Code, level: 95 },
    ],
    "Databases & Storage": [
      { name: "PostgreSQL", icon: Database, level: 90 },
      { name: "MySQL", icon: Database, level: 85 },
      { name: "Redis", icon: Database, level: 80 },
      { name: "Oracle", icon: Database, level: 75 },
      { name: "Prisma", icon: Database, level: 90 },
    ],
    "AI & ML Tools": [
      { name: "OpenAI", icon: Brain, level: 95 },
      { name: "Gemini", icon: Brain, level: 90 },
      { name: "DeepSeek", icon: Brain, level: 85 },
      { name: "Cohere", icon: Brain, level: 85 },
      { name: "Chroma", icon: Cpu, level: 90 },
      { name: "Milvus", icon: Cpu, level: 85 },
      { name: "HNSWlib", icon: Cpu, level: 80 },
    ],
    "DevOps & Tools": [
      { name: "Git/GitHub", icon: Code, level: 95 },
      { name: "Docker", icon: Server, level: 85 },
      { name: "Linux", icon: Server, level: 85 },
      { name: "Nginx", icon: Server, level: 80 },
      { name: "Vercel", icon: Globe, level: 90 },
      { name: "Azure", icon: Globe, level: 70 },
      { name: "AWS", icon: Globe, level: 70 },
    ],
  };

  const projects = [
    {
      title: "Chatbot Builder Platform",
      company: "Infotointell",
      period: "January 2023 - Present",
      description:
        "Led development of searchat.com, a comprehensive chatbot builder platform enabling users to create intelligent conversational agents.",
      technologies: [
        "TypeScript",
        "Next.js",
        "LangChain",
        "Vector Databases",
        "OpenAI",
      ],
      link: "https://searchat.com",
      highlights: [
        "Led team in building and maintaining core features",
        "Integrated multiple LLM providers for enhanced flexibility",
        "Implemented advanced RAG capabilities for knowledge retrieval",
      ],
    },
    {
      title: "Purchase Orders Management System",
      company: "Freelance",
      period: "December 2024 - February 2025",
      description:
        "Engineered a comprehensive purchase order system for 16thofmay event organizer company with real-time notifications.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Socket.io",
        "TRPC",
      ],
      highlights: [
        "Implemented real-time notification service using Socket.io",
        "Built email notification system using SMTP",
        "Deployed on Vercel with optimized performance",
      ],
    },
    {
      title: "Agnostic RAG Service",
      company: "Infotointell",
      period: "October 2024 - February 2025",
      description:
        "Developed a flexible RAG service supporting multiple LLMs and vector databases for document processing and querying.",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "OpenAI",
        "Gemini",
        "DeepSeek",
        "Chroma",
        "Milvus",
      ],
      highlights: [
        "Support for multiple LLM providers (OpenAI, Cohere, Gemini, DeepSeek)",
        "Flexible vector store integration (Chroma, Milvus)",
        "Conversation history and structured output generation",
      ],
    },
    {
      title: "NLP Date Extractor",
      company: "Open Source",
      period: "October 2023 - December 2023",
      description:
        "Created an NPM package for extracting date and time intents from Arabic and English text using NLP techniques.",
      technologies: ["JavaScript", "NLP", "CI/CD", "NPM"],
      link: "https://www.npmjs.com/package/date-extractor",
      highlights: [
        "1K+ NPM downloads achieved",
        "98% accuracy in date extraction",
        "Bilingual support (Arabic and English)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Azzam Majdi Faraj
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "about",
                "skills",
                "projects",
                "experience",
                "certifications",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedSphere />
            <FloatingParticles />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Azzam Majdi Faraj
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Software Engineer specializing in{" "}
              <span className="text-blue-400">Generative AI</span>,
              <span className="text-purple-400"> Agentic Workflows</span>, and
              <span className="text-pink-400"> Full-Stack Development</span>
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              2+ years of experience building intelligent systems with
              LangChain, vector databases, and modern web technologies.
              Passionate about creating AI-powered solutions that solve
              real-world problems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge
              variant="secondary"
              className="bg-blue-500/20 text-blue-300 border-blue-500/30"
            >
              <Brain className="w-4 h-4 mr-2" />
              Generative AI
            </Badge>
            <Badge
              variant="secondary"
              className="bg-purple-500/20 text-purple-300 border-purple-500/30"
            >
              <Bot className="w-4 h-4 mr-2" />
              LangChain Expert
            </Badge>
            <Badge
              variant="secondary"
              className="bg-pink-500/20 text-pink-300 border-pink-500/30"
            >
              <Database className="w-4 h-4 mr-2" />
              Vector Databases
            </Badge>
            <Badge
              variant="secondary"
              className="bg-green-500/20 text-green-300 border-green-500/30"
            >
              <Code className="w-4 h-4 mr-2" />
              Full-Stack
            </Badge>
          </div>

          <div className="flex justify-center space-x-6">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              <Mail className="w-5 h-5 mr-2" />
              azzam.faraj0@gmail.com
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Software Engineer with 2+ years of experience specializing
                    in full-stack development with a focus on{" "}
                    <strong className="text-blue-400">Generative AI</strong> and
                    <strong className="text-purple-400">
                      {" "}
                      intelligent systems
                    </strong>
                    .
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I have led the development of several successful projects,
                    including chatbot builders, RAG services, and custom AI
                    solutions. My expertise spans from traditional web
                    development to cutting-edge AI technologies like LangChain,
                    vector databases, and multiple LLM providers.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Passionate about learning new technologies, critical
                    thinking, and delivering efficient solutions that bridge the
                    gap between AI capabilities and real-world applications.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Amman, Jordan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>0778086316</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-pink-400" />
                    <span>azzam.faraj0@gmail.com</span>
                  </div>
                  <Separator className="my-4 bg-white/10" />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-400">
                      Key Strengths
                    </h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Fast learner and critical thinker</li>
                      <li>• Team player with leadership experience</li>
                      <li>• Expert in AI/ML integration</li>
                      <li>• Full-stack development proficiency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card
                key={category}
                className="bg-white/5 border-white/10 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillList.map((skill) => {
                      const IconComponent = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="group p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <IconComponent className="w-5 h-5 text-blue-400 group-hover:text-purple-400 transition-colors" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-500 group-hover:from-purple-400 group-hover:to-pink-400"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-400 mt-1 block">
                            {skill.level}%
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-blue-400/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-400 mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-purple-400 font-medium">
                        {project.company} • {project.period}
                      </CardDescription>
                    </div>
                    {project.link && (
                      <Link href={project.link} target="_blank">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-400 mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1 text-gray-300">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-blue-400">
                    Software Engineer
                  </CardTitle>
                  <CardDescription className="text-purple-400 font-medium text-lg">
                    Infotointell • January 2023 - Present • Amman, Jordan
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">
                    Key Responsibilities & Achievements:
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      • <strong>Led team development</strong> of chatbot builder
                      platform (searchat.com) with advanced AI capabilities
                    </li>
                    <li>
                      • <strong>Spearheaded ETL service creation</strong>{" "}
                      integrating 5+ databases, significantly improving data
                      processing speed
                    </li>
                    <li>
                      • <strong>Enhanced company services</strong> by
                      integrating new features aligned with business
                      requirements
                    </li>
                    <li>
                      • <strong>Deployed solutions on client servers</strong>{" "}
                      with performance optimization and customization
                    </li>
                    <li>
                      • <strong>Developed custom AI solutions</strong> for
                      clients including data processing and document censoring
                      systems
                    </li>
                    <li>
                      • <strong>Architected RAG services</strong> supporting
                      multiple LLM providers and vector databases
                    </li>
                  </ul>
                </div>

                <Separator className="my-6 bg-white/10" />

                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">
                    Technical Impact:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <div>
                      <p>• Built scalable AI-powered chatbot infrastructure</p>
                      <p>
                        • Integrated multiple LLM providers (OpenAI, Gemini,
                        DeepSeek)
                      </p>
                      <p>
                        • Implemented vector database solutions (Chroma, Milvus)
                      </p>
                    </div>
                    <div>
                      <p>• Optimized data processing workflows</p>
                      <p>• Delivered custom client solutions</p>
                      <p>• Enhanced system performance and reliability</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications & Education
          </h2>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">
                Full-stack Bootcamp
              </CardTitle>
              <CardDescription className="text-purple-400 font-medium">
                Coding Academy by Orange • 2023
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Intensive course in Full Stack Web Development in collaboration
                with Simplon.co and Princess Sumaya University for Technology
                (PSUT).
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">
                    Core Curriculum:
                  </h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Modern JavaScript & TypeScript</li>
                    <li>• React & Next.js Development</li>
                    <li>• Backend Development with Node.js</li>
                    <li>• Database Design & Management</li>
                    <li>• API Development & Integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">
                    Skills Developed:
                  </h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Full-stack architecture design</li>
                    <li>• Modern development workflows</li>
                    <li>• Team collaboration & Git</li>
                    <li>• Project management</li>
                    <li>• Industry best practices</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to discuss your next AI-powered project or full-stack
            development needs?
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Azzam Majdi Faraj
          </p>
        </div>
      </footer>
    </div>
  );
}
