
export type Language = 'pt-BR' | 'es-CL';

export const translations: Record<Language, Record<string, string>> = {
  'pt-BR': {
    // Header
    'header.title': 'Nossa História de Amor',
    'header.language': 'Idioma',
    
    // Hero Section
    'hero.title': 'Te Amo',
    'hero.subtitle': 'Uma história de amor que transcende distâncias',
    'hero.scroll': 'Role para descobrir nossa história',
    
    // Gallery Photos
    'gallery.title': 'Nossos Momentos',
    'gallery.description': 'Cada foto conta uma história de amor',
    'gallery.photo1': 'Nosso primeiro encontro',
    'gallery.photo2': 'Momentos de pura felicidade',
    'gallery.photo3': 'Amor em cada detalhe',
    'gallery.photo4': 'Juntos para sempre',
    
    // Gallery Drawings
    'drawings.title': 'Nossos Desenhos',
    'drawings.description': 'Ilustrações que representam nossa história',
    'drawing1.title': 'Almas Gêmeas',
    'drawing1.desc': 'Dois corações unidos por um fio invisível de amor. Representam a conexão profunda entre nós, como se fossemos feitos um para o outro.',
    'drawing2.title': 'Eternidade',
    'drawing2.desc': 'Símbolo do amor infinito e da continuidade. Cada volta representa um dia ao seu lado, cada momento precioso que compartilhamos.',
    
    // Love Letters
    'letters.title': 'Cartas de Amor',
    'letters.main': 'Meu Amor,\n\nCada dia ao seu lado é uma bênção. Seus olhos me fazem acreditar em magia, seu sorriso é minha razão de acordar. Você é meu amor, meu sonho, minha eternidade.\n\nPara sempre seu,\nCom todo meu coração ❤️',
    'letters.message1': 'Você é a razão pela qual acredito em amor verdadeiro.',
    'letters.message2': 'Cada momento com você é um presente que atesouro.',
    'letters.message3': 'Meu coração é seu, agora e para sempre.',
    'letters.message4': 'Você me faz querer ser uma pessoa melhor todos os dias.',
    
    // Counter
    'counter.title': 'Nosso Tempo Junto',
    'counter.days': 'Dias',
    'counter.hours': 'Horas',
    'counter.minutes': 'Minutos',
    'counter.seconds': 'Segundos',
    
    // Music Player
    'music.title': 'Nossa Música',
    'music.description': 'A trilha sonora do nosso amor',
    'music.play': 'Reproduzir',
    'music.pause': 'Pausar',
    
    // Story Section
    'story.title': 'Nossa História',
    'story.subtitle': 'Como tudo começou',
    'story.intro': 'Era uma vez dois corações que se encontraram e descobriram que o amor verdadeiro existe...',
    'story.meeting': 'Como Nos Conhecemos',
    'story.meetingText': 'Nosso encontro foi como um destino. Desde o primeiro momento, soube que você era especial. Seus olhos, seu sorriso, sua forma de ser... tudo em você me conquistou. Aquele dia mudou minha vida para sempre.',
    'story.qualities': 'O Que Admiro em Você',
    'story.qualitiesText': 'Admiro sua força, sua bondade, sua forma de amar incondicionalmente. Você tem um coração puro e generoso. Sua inteligência, criatividade e paixão pela vida me inspiram diariamente. Você é meu espelho, minha melhor versão.',
    'story.future': 'Nossos Sonhos',
    'story.futureText': 'Sonho em construir uma vida ao seu lado. Sonho em viajar pelo mundo com você, em criar memórias inesquecíveis, em envelhecer ao seu lado. Você é meu futuro, meu para sempre. Juntos, somos invencíveis.',
    
    // Map Section
    'map.title': 'Nos Dois Lados do Mundo',
    'map.description': 'Recife, Brasil ❤️ Linares, Chile',
    'map.recife': 'Recife, Pernambuco, Brasil',
    'map.linares': 'Linares, Región del Maule, Chile',
    'map.distance': 'Distância não importa quando o coração está unido',
    
    // Footer
    'footer.text': 'Feito com amor para você ❤️',
    'footer.year': new Date().getFullYear().toString(),
  },
  'es-CL': {
    // Header
    'header.title': 'Nuestra Historia de Amor',
    'header.language': 'Idioma',
    
    // Hero Section
    'hero.title': 'Te Amo',
    'hero.subtitle': 'Una historia de amor que trasciende las distancias',
    'hero.scroll': 'Desplázate para descubrir nuestra historia',
    
    // Gallery Photos
    'gallery.title': 'Nuestros Momentos',
    'gallery.description': 'Cada foto cuenta una historia de amor',
    'gallery.photo1': 'Nuestro primer encuentro',
    'gallery.photo2': 'Momentos de pura felicidad',
    'gallery.photo3': 'Amor en cada detalle',
    'gallery.photo4': 'Juntos para siempre',
    
    // Gallery Drawings
    'drawings.title': 'Nuestros Dibujos',
    'drawings.description': 'Ilustraciones que representan nuestra historia',
    'drawing1.title': 'Almas Gemelas',
    'drawing1.desc': 'Dos corazones unidos por un hilo invisible de amor. Representan la conexión profunda entre nosotros, como si fuéramos hechos el uno para el otro.',
    'drawing2.title': 'Eternidad',
    'drawing2.desc': 'Símbolo del amor infinito y la continuidad. Cada vuelta representa un día a tu lado, cada momento precioso que compartimos.',
    
    // Love Letters
    'letters.title': 'Cartas de Amor',
    'letters.main': 'Mi Amor,\n\nCada día a tu lado es una bendición. Tus ojos me hacen creer en la magia, tu sonrisa es mi razón para despertar. Eres mi amor, mi sueño, mi eternidad.\n\nPara siempre tuyo,\nCon todo mi corazón ❤️',
    'letters.message1': 'Eres la razón por la que creo en el amor verdadero.',
    'letters.message2': 'Cada momento contigo es un regalo que atesoro.',
    'letters.message3': 'Mi corazón es tuyo, ahora y para siempre.',
    'letters.message4': 'Me haces querer ser una mejor persona cada día.',
    
    // Counter
    'counter.title': 'Nuestro Tiempo Juntos',
    'counter.days': 'Días',
    'counter.hours': 'Horas',
    'counter.minutes': 'Minutos',
    'counter.seconds': 'Segundos',
    
    // Music Player
    'music.title': 'Nuestra Música',
    'music.description': 'La banda sonora de nuestro amor',
    'music.play': 'Reproducir',
    'music.pause': 'Pausar',
    
    // Story Section
    'story.title': 'Nuestra Historia',
    'story.subtitle': 'Cómo todo comenzó',
    'story.intro': 'Érase una vez dos corazones que se encontraron y descubrieron que el amor verdadero existe...',
    'story.meeting': 'Cómo Nos Conocimos',
    'story.meetingText': 'Nuestro encuentro fue como un destino. Desde el primer momento, supe que eras especial. Tus ojos, tu sonrisa, tu forma de ser... todo en ti me conquistó. Ese día cambió mi vida para siempre.',
    'story.qualities': 'Lo Que Admiro de Ti',
    'story.qualitiesText': 'Admiro tu fortaleza, tu bondad, tu forma de amar incondicionalmente. Tienes un corazón puro y generoso. Tu inteligencia, creatividad y pasión por la vida me inspiran diariamente. Eres mi espejo, mi mejor versión.',
    'story.future': 'Nuestros Sueños',
    'story.futureText': 'Sueño en construir una vida a tu lado. Sueño en viajar por el mundo contigo, en crear recuerdos inolvidables, en envejecer a tu lado. Eres mi futuro, mi para siempre. Juntos, somos invencibles.',
    
    // Map Section
    'map.title': 'En los Dos Lados del Mundo',
    'map.description': 'Recife, Brasil ❤️ Linares, Chile',
    'map.recife': 'Recife, Pernambuco, Brasil',
    'map.linares': 'Linares, Región del Maule, Chile',
    'map.distance': 'La distancia no importa cuando el corazón está unido',
    
    // Footer
    'footer.text': 'Hecho con amor para ti ❤️',
    'footer.year': new Date().getFullYear().toString(),
  },
};

export function t(key: string, language: Language): string {
  return translations[language][key] || key;
}
