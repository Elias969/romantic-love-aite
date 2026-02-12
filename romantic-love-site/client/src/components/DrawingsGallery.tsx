import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Drawing {
  id: number;
  title: string;
  description: string;
  image: string;
  tilt: number;
}

export function DrawingsGallery() {
  const { language } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const drawings: Drawing[] = [
    {
      id: 1,
      title: t('drawing1.title', language),
      description: t('drawing1.desc', language),
      image: '/images/roblox2.jpeg',
      tilt: -4,
    },
    {
      id: 2,
      title: t('drawing2.title', language),
      description: t('drawing2.desc', language),
      image: '/images/mine.jpeg',
      tilt: 3,
    },
  ];

  return (
    <div className="w-full py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-accent">
        {t('drawings.title', language)}
      </h2>
      <p className="text-center text-foreground/70 mb-12">
        {t('drawings.description', language)}
      </p>

      <div className="max-w-6xl mx-auto space-y-8">
        {drawings.map((drawing, idx) => (
          <div
            key={drawing.id}
            className={`flex items-center gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            {/* Desenho inclinado estilo álbum */}
            <div className="flex-1 flex justify-center">
              <button
                onClick={() => setExpandedId(expandedId === drawing.id ? null : drawing.id)}
                className="relative group cursor-pointer"
                style={{
                  transform: `rotate(${drawing.tilt}deg)`,
                }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-300 to-red-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="relative bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-lg transition-all">
                  <img
                    src={drawing.image}
                    alt={drawing.title}
                    className="w-64 h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </button>
            </div>

            {/* Texto ao lado */}
            <div className="flex-1">
              <button
                onClick={() => setExpandedId(expandedId === drawing.id ? null : drawing.id)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-accent">
                    {drawing.title}
                  </h3>
                  {expandedId === drawing.id ? (
                    <ChevronUp className="w-6 h-6 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-accent flex-shrink-0" />
                  )}
                </div>
              </button>

              {expandedId === drawing.id && (
                <div className="animate-fade-in-up">
                  <p className="text-foreground text-lg leading-relaxed">
                    {drawing.description}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-2xl">💕</span>
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
