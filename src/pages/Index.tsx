import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { ContactForm } from "@/components/ContactForm";
import { ModeToggle } from "@/components/mode-toggle";
import { FadeIn } from "@/components/FadeIn";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Code,
  Palette,
  Zap,
  Users,
  ArrowDown,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const skills = [
    { name: "React", level: "expert" as const },
    { name: "TypeScript", level: "advanced" as const },
    { name: "JavaScript", level: "expert" as const },
    { name: "Next.js", level: "advanced" as const },
    { name: "Vue.js", level: "intermediate" as const },
    { name: "HTML5", level: "expert" as const },
    { name: "CSS3", level: "expert" as const },
    { name: "TailwindCSS", level: "advanced" as const },
    { name: "Node.js", level: "intermediate" as const },
    { name: "MongoDB", level: "intermediate" as const },
    { name: "Git", level: "advanced" as const },
    { name: "REST APIs", level: "intermediate" as const },
  ];

  const projects = [
    {
      title: "AGC News Platform",
      description:
        "A comprehensive African news portal delivering breaking stories across politics, business, sports, and entertainment with multimedia content including photos, videos, and audio.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Node.js"],
      liveUrl: "https://agc-news-network.vercel.app/",
      githubUrl: "https://github.com/Osinachi-Joel/news-test",
      image: "/agc-news.png",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/yourusername/task-manager",
      image: "/placeholder.svg",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard that provides detailed weather information with interactive charts and location-based forecasts.",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      liveUrl: "https://example-weather.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      image: "/placeholder.svg",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 -z-0 h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frontend Developer
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Osinachi Chinedu
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating beautiful, accessible, and performant
              web experiences. I turn designs into reality with clean,
              maintainable code.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center gap-4 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                variant="ghost"
                className="h-12 w-12 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
                asChild
              >
                <a
                  href="https://github.com/Osinachi-Joel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Github className="h-8 w-8" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant="ghost"
                className="h-12 w-12 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/osinachi-chinedu-45b147195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="ghost"
                className="h-12 w-12 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
                asChild
              >
                <a
                  href="mailto:osinachij161@gmail.com"
                  className="flex items-center justify-center"
                >
                  <Mail className="h-8 w-8" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="absolute bottom-8 animate-bounce z-10"
          onClick={() => scrollToSection("about")}
        >
          <ArrowDown className="h-4 w-4" />
        </Button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Get to know more about my background, skills, and what drives my
                passion for frontend development.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  Hello! I'm Osinachi Chinedu
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate frontend developer with over 5 years of
                    experience creating digital experiences that users love. My
                    journey started with a curiosity about how websites work, and
                    it has evolved into a career dedicated to crafting beautiful,
                    functional, and accessible web applications.
                  </p>
                  <p>
                    I specialize in React, TypeScript, and modern CSS frameworks,
                    always staying up-to-date with the latest trends and best
                    practices in web development. I believe in writing clean,
                    maintainable code and creating intuitive user interfaces.
                  </p>
                  <p>
                    When I'm not coding, you can find me contributing to
                    open-source projects, personal projects, or exploring new
                    technologies and frameworks.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Lagos, NG</span>
                </div>

                <Button
                  variant="outline"
                  className="w-fit"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/CHINEDU, OSINACHI .J. CV.pdf";
                    link.download = "CHINEDU, OSINACHI .J. CV.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 gap-6">
              <FadeIn delay={0.2} direction="left">
                <Card>
                  <CardHeader className="pb-4">
                    <Code className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Clean Code</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Writing maintainable, scalable, and well-documented code
                      that stands the test of time.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3} direction="left">
                <Card>
                  <CardHeader className="pb-4">
                    <Palette className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">UI/UX Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Creating beautiful interfaces with great user experience and
                      accessibility in mind.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.4} direction="left">
                <Card>
                  <CardHeader className="pb-4">
                    <Zap className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Optimizing applications for speed, efficiency, and excellent
                      Core Web Vitals scores.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.5} direction="left">
                <Card>
                  <CardHeader className="pb-4">
                    <Users className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Working effectively with designers, backend developers, and
                      stakeholders.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Skills & Technologies
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Here are the main technologies and tools I work with to bring
                ideas to life.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex gap-4 w-max"
                animate={{ x: "-50%" }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 30,
                }}
              >
                {[...skills, ...skills, ...skills, ...skills].map(
                  (skill, index) => (
                    <SkillBadge
                      key={`${skill.name}-${index}`}
                      name={skill.name}
                      level={skill.level}
                      className="text-sm px-4 py-2 flex-shrink-0"
                    />
                  )
                )}
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A selection of projects I've worked on recently. Each project
                showcases different skills and technologies.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.1}>
                <ProjectCard {...project} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/Osinachi-Joel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View All Projects
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects.
                Let's discuss how we can bring your ideas to life.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="mailto:osinachij161@gmail.com"
                        className="hover:text-primary transition-colors"
                      >
                        osinachij161@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Lagos, NG</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Find Me Online</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com/Osinachi-Joel"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://www.linkedin.com/in/osinachi-chinedu-45b147195/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Available for Work</CardTitle>
                    <CardDescription>
                      I'm currently open to freelance projects and full-time
                      opportunities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        Available
                      </Badge>
                      <Badge variant="outline">Remote Friendly</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>
            &copy; 2024 Osinachi Chinedu. Built with React, TypeScript, ShadCN UI,
            and TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

