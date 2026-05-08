import { Navbar } from "@/components/nav/Navbar";
import { FloatingInstruments } from "@/components/animations/FloatingInstruments";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RetroButton } from "@/components/ui/RetroButton";
import { RetroCard } from "@/components/ui/RetroCard";
import { jeffData } from "@/lib/data";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingInstruments />
      
      {/* Page Header */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="font-retro text-3xl md:text-4xl text-primary mb-2">ABOUT.EXE</h1>
            <div className="h-1 w-32 bg-primary"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-retro text-xl text-primary mb-6">THE ORIGIN STORY</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="relative border-l-4 border-primary pl-6 mb-8">
              <p className="font-body text-text-secondary leading-relaxed mb-4 italic">
                "We had forty-five minutes scheduled, but we finished in thirty-five. He smiled and said, 'I think I know what I just decided.'"
              </p>
              <p className="font-mono text-xs text-text-muted">— Dave Raisbeck, Vice Chairman, Cargill</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <RetroCard>
              <p className="font-body text-text-secondary leading-relaxed whitespace-pre-line">
                {jeffData.about}
              </p>
            </RetroCard>
          </ScrollReveal>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-12 px-4 bg-bg-card/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-retro text-xl text-primary mb-8">THE PHILOSOPHY</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6">
            {jeffData.philosophy.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.2}>
                <RetroCard>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-xl text-text-primary mb-2">{item.title}</h3>
                  <p className="font-body text-text-secondary text-sm leading-relaxed">
                    {item.text}
                  </p>
                </RetroCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Education Track */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-retro text-xl text-primary mb-8">THE EDUCATION TRACK</h2>
          </ScrollReveal>
          
          <div className="relative border-l-2 border-primary ml-4 pl-8">
            {jeffData.education.map((edu, index) => (
              <ScrollReveal key={edu.degree} delay={index * 0.2}>
                <div className="relative mb-8">
                  <div className="absolute -left-10 top-0 w-4 h-4 bg-primary border-2 border-bg-dark"></div>
                  <div className="mb-2">
                    <span className="text-2xl mr-2">🎓</span>
                    <span className="font-display text-2xl text-text-primary">{edu.degree}</span>
                  </div>
                  <p className="font-mono text-sm text-text-secondary mb-1">{edu.school}</p>
                  <p className="font-mono text-xs text-primary">{edu.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* On AI */}
      <section className="py-12 px-4 bg-bg-card/50">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="border-2 border-primary bg-bg-card p-6 shadow-glow-gold">
              <h2 className="font-retro text-xl text-primary mb-4">ON AI</h2>
              <p className="font-body text-text-secondary leading-relaxed italic">
                {jeffData.aiView}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Volunteer Causes */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-retro text-xl text-primary mb-8">VOLUNTEER INTERESTS</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              {jeffData.volunteerInterests.map((interest) => (
                <span
                  key={interest}
                  className="border-2 border-border bg-bg-card px-4 py-2 font-mono text-sm text-text-secondary hover:border-primary hover:text-primary transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>
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
