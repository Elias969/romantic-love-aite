import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';
import { X } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  title: string;
  message: string;
  tilt: number;
}

export function PhotoGallery() {
  const { language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Fotos de exemplo com inclinação estilo álbum
  const photos: Photo[] = [
    {
      id: 1,
      src: '/images/primeiro.jpeg.',
      title: t('gallery.photo1', language),
      message: 'O dia em que nossos corações se encontraram. Você mudou minha vida para sempre.',
      tilt: -5,
    },
    {
      id: 2,
      src: '/images/rir.jpeg',
      title: t('gallery.photo2', language),
      message: 'Cada momento com você é um presente. Seu sorriso é minha razão de ser feliz.',
      tilt: 4,
    },
    {
      id: 3,
      src: '/images/kata.jpeg',
      title: t('gallery.photo3', language),
      message: 'No detalhe está a beleza. Você é meu detalhe favorito da vida.',
      tilt: -3,
    },
    {
      id: 4,
      src: '/images/nos.jpeg',
      title: t('gallery.photo4', language),
      message: 'Juntos, somos invencíveis. Você é meu para sempre.',
      tilt: 5,
    },
  ];

  return (
    <div className="w-full py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-accent">
        {t('gallery.title', language)}
      </h2>
      <p className="text-center text-foreground/70 mb-12">
        {t('gallery.description', language)}
      </p>

      <div className="max-w-6xl mx-auto space-y-12">
        {photos.map((photo, idx) => (
          <div
            key={photo.id}
            className={`flex items-center gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            {/* Foto inclinada estilo álbum */}
            <div className="flex-1 flex justify-center">
              <button
                onClick={() => setSelectedPhoto(photo)}
                className="relative group cursor-pointer"
                style={{
                  transform: `rotate(${photo.tilt}deg)`,
                }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-300 to-red-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="relative bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-lg transition-shadow">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-64 h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            </div>

            {/* Texto ao lado */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-accent mb-3">
                {photo.title}
              </h3>
              <p className="text-foreground text-lg leading-relaxed italic">
                "{photo.message}"
              </p>
              <button
                onClick={() => setSelectedPhoto(photo)}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-400 to-red-400 text-white font-semibold rounded-full hover:shadow-lg transition-all hover:scale-105"
              >
                Ver Foto
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-white hover:bg-gray-100 p-2 rounded-full z-10 shadow-lg"
              >
                <X className="w-6 h-6 text-accent" />
              </button>

              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-accent mb-4">
                  {selectedPhoto.title}
                </h3>
                <p className="text-foreground text-lg leading-relaxed italic">
                  "{selectedPhoto.message}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
