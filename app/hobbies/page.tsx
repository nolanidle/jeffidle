import { Navbar } from "@/components/nav/Navbar";
import { FloatingInstruments } from "@/components/animations/FloatingInstruments";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RetroCard } from "@/components/ui/RetroCard";
import { DrumIcon, TrumpetIcon, GuitarIcon } from "@/components/icons";
import { jeffData } from "@/lib/data";

export default function Hobbies() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingInstruments show={false} />
      
      {/* Music Note Particles Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-10 animate-music-note"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {["♩", "♪", "♫", "♬"][i % 4]}
          </div>
        ))}
      </div>

      {/* Page Header */}
      <section className="relative z-10 pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="font-retro text-3xl md:text-4xl text-primary mb-2">THE SETLIST</h1>
            <div className="h-1 w-32 bg-primary mb-4"></div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-text-secondary">
              When I'm Not Turning Data Into Decisions, I'm Making Music
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Instruments */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {jeffData.instruments.map((instrument, index) => {
              const Icon = instrument.name === "Drums" ? DrumIcon : 
                          instrument.name === "Trumpet" ? TrumpetIcon : GuitarIcon;
              return (
                <ScrollReveal key={instrument.name} delay={index * 0.2}>
                  <RetroCard className="h-full hover:shadow-glow-gold transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-5xl">{instrument.icon}</div>
                      <Icon className="w-16 h-16 text-primary opacity-50" />
                    </div>
                    <h3 className="font-display text-2xl text-text-primary mb-3">{instrument.name.toUpperCase()}</h3>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      {instrument.description}
                    </p>
                  </RetroCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Sound of Data */}
      <section className="relative z-10 py-12 px-4 bg-bg-card/50">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-retro text-xl text-primary mb-8">THE SOUND OF DATA</h2>
          </ScrollReveal>
          
          <div className="space-y-4">
            {jeffData.musicPhilosophy.map((item, index) => (
              <ScrollReveal key={item.music} delay={index * 0.15}>
                <div className="flex items-center border-b border-border pb-3">
                  <div className="w-1/3 font-mono text-sm text-primary">{item.music}</div>
                  <div className="text-text-muted mx-4">→</div>
                  <div className="w-2/3 font-body text-sm text-text-secondary">{item.work}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Presence */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-retro text-xl text-primary mb-8">COMMUNITY PRESENCE</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              {jeffData.volunteerInterests.map((interest) => (
                <div
                  key={interest}
                  className="border-2 border-border bg-bg-card px-4 py-3 flex items-center gap-2 hover:border-primary hover:shadow-retro transition-all"
                >
                  <span className="text-xl">
                    {interest.includes("Child") ? "👶" :
                     interest.includes("Community") ? "🏘️" :
                     interest.includes("Education") ? "📚" :
                     interest.includes("Employment") ? "💼" :
                     interest.includes("Science") ? "🔬" :
                     interest.includes("Veteran") ? "🎖️" : "❤️"}
                  </span>
                  <span className="font-mono text-sm text-text-secondary">{interest}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t-2 border-border bg-bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4">
            <span className="text-2xl hover:scale-125 transition-transform cursor-pointer">🥁</span>
            <span className="text-2xl hover:scale-125 transition-transform cursor-pointer">🎺</span>
            <span className="text-2xl hover:scale-125 transition-transform cursor-pointer">🎸</span>
          </div>
          <p className="font-mono text-xs text-text-muted">
            © 2025 Jeff Idle
          </p>
        </div>
      </footer>
    </div>
  );
}
