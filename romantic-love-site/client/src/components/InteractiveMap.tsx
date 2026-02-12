import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';

export function InteractiveMap() {
  const { language } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    // Carregar Leaflet dinamicamente
    if (!(window as any).L) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  }, []);

  const initializeMap = () => {
    if (!mapContainer.current || map.current) return;

    const L = (window as any).L as any;

    // Coordenadas: Recife, Brasil e Linares, Chile
    const recife = [-8.0476, -34.8770];
    const linares = [-35.8502, -71.6147];

    // Criar mapa centrado entre os dois pontos
    const center = [
      (recife[0] + linares[0]) / 2,
      (recife[1] + linares[1]) / 2,
    ];

    map.current = L.map(mapContainer.current).setView(center, 3);

    // Adicionar tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Marcador para Recife
    L.circleMarker(recife, {
      radius: 10,
      fillColor: '#ff6b9d',
      color: '#ffffff',
      weight: 3,
      opacity: 1,
      fillOpacity: 0.9,
    })
      .bindPopup(
        `<div class="text-center"><strong style="color: #ff6b9d;">Recife, Brasil</strong><br><span style="color: #ff1493;">❤️ Aqui estou</span></div>`
      )
      .addTo(map.current);

    // Marcador para Linares
    L.circleMarker(linares, {
      radius: 10,
      fillColor: '#ff1493',
      color: '#ffffff',
      weight: 3,
      opacity: 1,
      fillOpacity: 0.9,
    })
      .bindPopup(
        `<div class="text-center"><strong style="color: #ff1493;">Linares, Chile</strong><br><span style="color: #ff6b9d;">❤️ Aqui estás</span></div>`
      )
      .addTo(map.current);

    // Linha conectando os dois pontos
    L.polyline([recife, linares], {
      color: '#ff6b9d',
      weight: 3,
      opacity: 0.7,
      dashArray: '5, 5',
    }).addTo(map.current);

    // Ajustar zoom para mostrar ambos os pontos
    const group = new L.featureGroup([
      L.marker(recife),
      L.marker(linares),
    ]);
    map.current.fitBounds(group.getBounds().pad(0.1));
  };

  return (
    <div className="w-full py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-accent">
        {t('map.title', language)}
      </h2>
      <p className="text-center text-foreground/70 mb-8">
        {t('map.description', language)}
      </p>

      <div className="max-w-4xl mx-auto">
        <div
          ref={mapContainer}
          className="w-full h-96 rounded-3xl border-2 border-pink-200 overflow-hidden shadow-soft"
          style={{ minHeight: '400px' }}
        />

        <div className="mt-6 text-center">
          <p className="text-lg text-accent italic font-semibold">
            {t('map.distance', language)}
          </p>
        </div>
      </div>
    </div>
  );
}
