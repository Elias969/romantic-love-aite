import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PhotoGallery } from '@/components/PhotoGallery';
import { DrawingsGallery } from '@/components/DrawingsGallery';
import { LoveLetters } from '@/components/LoveLetters';
import { RelationshipCounter } from '@/components/RelationshipCounter';
import { MusicPlayer } from '@/components/MusicPlayer';
import { StorySection } from '@/components/StorySection';
import { InteractiveMap } from '@/components/InteractiveMap';
import { Footer } from '@/components/Footer';

/**
 * Design: Romântico Vivo e Fofo
 * - Paleta: Rosa vibrante (#ff6b9d), Vermelho (#ff1493), Branco puro, Tons pastéis
 * - Tipografia: Playfair Display (títulos) + Lora (corpo)
 * - Animações: Partículas, corações flutuantes, brilhos suaves
 * - Layout: One Page com rolagem suave, fotos inclinadas estilo álbum
 * - Elementos: Gatos, vampiros, bandeiras Brasil/Chile, emojis fofos
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Photo Gallery */}
      <section id="gallery" className="w-full bg-white py-12 px-4">
        <div className="section-divider" />
        <PhotoGallery />
        <div className="section-divider" />
      </section>

      {/* Drawings Gallery */}
      <section className="w-full bg-gradient-to-b from-pink-50 to-white py-12 px-4">
        <DrawingsGallery />
        <div className="section-divider" />
      </section>

      {/* Love Letters */}
      <section className="w-full bg-white py-12 px-4">
        <LoveLetters />
        <div className="section-divider" />
      </section>

      {/* Relationship Counter */}
      <section className="w-full bg-gradient-to-b from-red-50 to-white py-12 px-4">
        <RelationshipCounter startDate={new Date('2023-06-15')} />
        <div className="section-divider" />
      </section>

      {/* Music Player */}
      <section className="w-full bg-white py-12 px-4">
        <MusicPlayer />
        <div className="section-divider" />
      </section>

      {/* Story Section */}
      <section className="w-full bg-gradient-to-b from-pink-50 to-white py-12 px-4">
        <StorySection />
        <div className="section-divider" />
      </section>

      {/* Interactive Map */}
      <section className="w-full bg-white py-12 px-4">
        <InteractiveMap />
        <div className="section-divider" />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
