import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur border-b-2 border-pink-200 z-40 shadow-soft">
      <div className="container py-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          {t('header.title', language)}
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gradient-to-r from-pink-100 to-red-100 border-2 border-pink-300 rounded-full p-2">
            <Globe className="w-4 h-4 text-red-500" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="bg-transparent text-foreground text-sm font-medium cursor-pointer outline-none"
            >
              <option value="pt-BR">Português</option>
              <option value="es-CL">Español</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
