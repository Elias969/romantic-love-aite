import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';

interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface RelationshipCounterProps {
  startDate?: Date;
}

export function RelationshipCounter({ startDate = new Date('2023-06-15') }: RelationshipCounterProps) {
  const { language } = useLanguage();
  const [time, setTime] = useState<TimeUnits>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="w-full py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-accent">
        {t('counter.title', language)}
      </h2>
      <p className="text-center text-foreground/70 mb-8">
        Desde 15 de junho de 2023
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {[
          { value: time.days, label: t('counter.days', language) },
          { value: time.hours, label: t('counter.hours', language) },
          { value: time.minutes, label: t('counter.minutes', language) },
          { value: time.seconds, label: t('counter.seconds', language) },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-4 text-center hover:shadow-lg transition-all border-2 border-pink-200 hover:border-red-400 shadow-soft"
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-foreground/70 uppercase tracking-wider font-semibold">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
