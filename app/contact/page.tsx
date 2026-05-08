import { Navbar } from "@/components/nav/Navbar";
import { FloatingInstruments } from "@/components/animations/FloatingInstruments";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RetroButton } from "@/components/ui/RetroButton";
import { RetroCard } from "@/components/ui/RetroCard";
import { DrumIcon, TrumpetIcon, GuitarIcon } from "@/components/icons";
import { jeffData } from "@/lib/data";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingInstruments />
      
      {/* Page Header */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="font-retro text-3xl md:text-4xl text-primary mb-2">LET'S JAM</h1>
            <div className="h-1 w-32 bg-primary mb-4"></div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-text-secondary max-w-2xl">
              Ready to discuss how I can help build the analytics function your executives rely on.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.2}>
              <RetroCard className="hover:shadow-glow-gold transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">in</span>
                  <h3 className="font-display text-xl text-text-primary">LinkedIn</h3>
                </div>
                <p className="font-mono text-sm text-text-secondary mb-4 break-all">
                  {jeffData.linkedin.replace("https://www.", "")}
                </p>
                <RetroButton asChild className="w-full">
                  <a href={jeffData.linkedin} target="_blank" rel="noopener noreferrer">
                    CONNECT ON LINKEDIN
                  </a>
                </RetroButton>
              </RetroCard>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <RetroCard>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">💬</span>
                  <h3 className="font-display text-xl text-text-primary">Direct Message</h3>
                </div>
                <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
                  Send a message directly through LinkedIn — I respond to serious inquiries about strategic HR analytics and workforce planning roles.
                </p>
                <RetroButton asChild className="w-full">
                  <a href={`${jeffData.linkedin}messaging/`} target="_blank" rel="noopener noreferrer">
                    SEND A MESSAGE
                  </a>
                </RetroButton>
              </RetroCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="py-12 px-4 bg-bg-card/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-retro text-xl text-primary mb-8">WHAT I'M LOOKING FOR</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-4">
            {jeffData.whatLookingFor.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <RetroCard>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">🎯</span>
                    <p className="font-body text-text-secondary text-sm">{item}</p>
                  </div>
                </RetroCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Pitch */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <RetroCard className="border-primary shadow-glow-gold bg-bg-card">
              <div className="text-4xl mb-4 text-center">🎸</div>
              <blockquote className="font-body text-text-secondary text-lg leading-relaxed text-center mb-6">
                "If that sounds like a conversation worth having, I'd love to hear about your company's current situation and the challenges you're facing."
              </blockquote>
              <p className="font-mono text-sm text-primary text-center">— Jeff Idle</p>
            </RetroCard>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="mt-8 text-center">
              <RetroButton asChild size="lg">
                <a href={jeffData.linkedin} target="_blank" rel="noopener noreferrer">
                  VIEW MY LINKEDIN
                </a>
              </RetroButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-2 border-border bg-bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6">
              <div className="hover:scale-125 transition-transform cursor-pointer">
                <DrumIcon className="w-8 h-8 text-primary" />
              </div>
              <div className="hover:scale-125 transition-transform cursor-pointer">
                <TrumpetIcon className="w-8 h-8 text-primary" />
              </div>
              <div className="hover:scale-125 transition-transform cursor-pointer">
                <GuitarIcon className="w-8 h-8 text-primary" />
              </div>
            </div>
            <p className="font-mono text-xs text-text-muted">
              © 2025 Jeff Idle
            </p>
            <a
              href={jeffData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-primary hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
