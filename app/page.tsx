import { Navbar } from "@/components/nav/Navbar";
import { FloatingInstruments } from "@/components/animations/FloatingInstruments";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RetroButton } from "@/components/ui/RetroButton";
import { StatCounter } from "@/components/ui/StatCounter";
import { RetroCard } from "@/components/ui/RetroCard";
import { jeffData } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingInstruments />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center z-10">
          <ScrollReveal>
            <h1 className="font-retro text-4xl md:text-6xl lg:text-7xl text-primary mb-6 leading-tight">
              JEFF IDLE
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="font-display text-2xl md:text-3xl text-text-secondary mb-4">
              Strategic Workforce Leader
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <p className="font-body text-lg md:text-xl text-text-muted mb-6">
              JD · MBA · 20+ Years Building Analytics Functions Executives Rely On
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6}>
            <div className="flex items-center justify-center gap-2 text-text-secondary mb-8">
              <span>📍</span>
              <span className="font-mono text-sm">{jeffData.location}</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RetroButton asChild>
                <a href="#experience">VIEW MY WORK</a>
              </RetroButton>
              <RetroButton asChild>
                <a href="/contact">GET IN TOUCH</a>
              </RetroButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-bg-card border-y-2 border-border py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={jeffData.stats.yearsExperience} label="YEARS EXPERIENCE" delay={0} />
            <StatCounter value={jeffData.stats.teamsBuilt} label="TEAMS BUILT" delay={0.2} />
            <StatCounter value={jeffData.stats.connections} label="CONNECTIONS" delay={0.4} />
            <StatCounter value={jeffData.stats.instruments} label="INSTRUMENTS" delay={0.6} />
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-retro text-2xl text-primary mb-8">THE OPENING ACT</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <RetroCard>
              <p className="font-body text-text-secondary leading-relaxed mb-6">
                The simplest way to explain my job is that I help people feel good about their decisions. 
                I'm a strategic workforce leader with over twenty years of experience. I've built analytics 
                and planning functions that turn workforce data into executive judgment.
              </p>
              <RetroButton asChild>
                <a href="/about">READ MORE</a>
              </RetroButton>
            </RetroCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4 bg-bg-card/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-retro text-2xl text-primary mb-8">THE SETLIST</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {jeffData.skills.map((skill, index) => (
                <div
                  key={skill}
                  className="border-2 border-border bg-bg-card px-4 py-3 text-center font-mono text-sm text-text-secondary hover:border-primary hover:text-primary transition-colors cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Track - Blattner */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-retro text-2xl text-primary mb-8">FEATURED TRACK</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <RetroCard className="border-primary shadow-glow-gold">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-2xl text-text-primary mb-2">
                    {jeffData.currentRole.company}
                  </h3>
                  <p className="font-mono text-sm text-text-secondary">
                    {jeffData.currentRole.title}
                  </p>
                </div>
                <div className="text-4xl">⚡</div>
              </div>
              
              <p className="font-body text-text-secondary leading-relaxed mb-4">
                {jeffData.currentRole.description}
              </p>
              
              <p className="font-mono text-sm text-primary">
                {jeffData.currentRole.mission}
              </p>
            </RetroCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-2 border-border bg-bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs text-text-muted">
            © 2025 Jeff Idle · Built with retro vibes and data-driven decisions
          </p>
        </div>
      </footer>
    </div>
  );
}
