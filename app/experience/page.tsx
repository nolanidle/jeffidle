import { Navbar } from "@/components/nav/Navbar";
import { FloatingInstruments } from "@/components/animations/FloatingInstruments";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RetroButton } from "@/components/ui/RetroButton";
import { RetroCard } from "@/components/ui/RetroCard";
import { jeffData } from "@/lib/data";

export default function Experience() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingInstruments />
      
      {/* Page Header */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="font-retro text-3xl md:text-4xl text-primary mb-2">CAREER TIMELINE</h1>
            <div className="h-1 w-32 bg-primary"></div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-text-secondary mt-4">
              Four Industries. Four Teams Built. Twenty Years of Executive-Level Impact.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary ml-4 pl-8">
            {jeffData.experience.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 0.2}>
                <div className="relative mb-12">
                  <div className="absolute -left-10 top-2 w-4 h-4 bg-primary border-2 border-bg-dark"></div>
                  
                  {exp.current && (
                    <div className="inline-block mb-2">
                      <span className="bg-primary text-bg-dark font-mono text-xs px-3 py-1">
                        CURRENT ROLE
                      </span>
                    </div>
                  )}
                  
                  <RetroCard className="mb-4">
                    <h3 className="font-display text-2xl text-text-primary mb-1">{exp.company}</h3>
                    <p className="font-mono text-sm text-primary mb-2">{exp.title}</p>
                    {exp.location && (
                      <p className="font-mono text-xs text-text-muted mb-3">📍 {exp.location}</p>
                    )}
                    <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
                      {exp.highlight}
                    </p>
                    {exp.quote && (
                      <p className="font-body text-text-primary italic text-sm border-l-2 border-primary pl-4">
                        "{exp.quote}"
                      </p>
                    )}
                    <div className="mt-4">
                      <span className="inline-block border-2 border-border px-3 py-1 font-mono text-xs text-text-secondary">
                        {exp.industry}
                      </span>
                    </div>
                  </RetroCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Four Tracks */}
      <section className="py-12 px-4 bg-bg-card/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-retro text-xl text-primary mb-8">THE FOUR TRACKS — BUILT FROM SCRATCH</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 gap-4">
            {jeffData.teamsBuilt.map((team, index) => (
              <ScrollReveal key={team.company} delay={index * 0.15}>
                <RetroCard className="text-center">
                  <div className="font-display text-4xl text-primary mb-2">#{team.number}</div>
                  <div className="font-mono text-xs text-text-secondary mb-1">{team.company}</div>
                  <div className="font-body text-sm text-text-primary">{team.team}</div>
                </RetroCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-retro text-xl text-primary mb-8">INDUSTRIES SERVED</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              {jeffData.industries.map((industry) => (
                <span
                  key={industry}
                  className="border-2 border-border bg-bg-card px-4 py-2 font-mono text-sm text-text-secondary hover:border-primary hover:text-primary hover:-translate-y-1 transition-all cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="py-12 px-4 bg-bg-card/50">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <RetroCard className="border-primary shadow-glow-gold">
              <h2 className="font-retro text-xl text-primary mb-6">WHAT I'M LOOKING FOR</h2>
              <ul className="space-y-3 mb-6">
                {jeffData.whatLookingFor.map((item, index) => (
                  <li key={index} className="font-body text-text-secondary flex items-start">
                    <span className="text-primary mr-2">▶</span>
                    {item}
                  </li>
                ))}
              </ul>
              <RetroButton asChild>
                <a href="/contact">LET'S TALK</a>
              </RetroButton>
            </RetroCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-2 border-border bg-bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs text-text-muted">
            © 2025 Jeff Idle
          </p>
        </div>
      </footer>
    </div>
  );
}
