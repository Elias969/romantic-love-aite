# 💕 Nossa História de Amor - Site Romântico Interativo

Um site romântico em página única (One Page) totalmente responsivo, com sistema de internacionalização (Português BR / Espanhol CL), galeria de fotos, desenhos, contador de relacionamento, mapa interativo, player de música e narrativa do casal.

## 🎨 Design

**Estética: Gótico Romântico Moderno**

- **Paleta de Cores**: Preto profundo (#0a0a0a), Ouro (#d4af37), Rose Gold (#b76e79)
- **Tipografia**: Playfair Display (títulos) + Lora (corpo)
- **Animações**: Partículas flutuantes, corações pulsantes, brilhos suaves
- **Elementos Temáticos**: Gatos, vampiros, bandeiras Brasil/Chile
- **Responsividade**: Otimizado para mobile, tablet e desktop

## 🚀 Funcionalidades

- ✅ **Internacionalização Dinâmica**: Português BR e Espanhol CL com troca sem recarregar
- ✅ **Seção Hero**: Com animações de partículas, corações e indicador de scroll
- ✅ **Galeria de Fotos**: 4 fotos com modal/lightbox e mensagens românticas
- ✅ **Galeria de Desenhos**: 2 ilustrações com descrição e simbolismo
- ✅ **Cartas Românticas**: Carta principal + mensagens aleatórias
- ✅ **Contador de Relacionamento**: Dias, horas, minutos, segundos em tempo real
- ✅ **Player de Música**: Moderno e discreto com botão play/pause
- ✅ **Narrativa do Casal**: Como se conheceram, qualidades admiradas, sonhos futuros
- ✅ **Mapa Interativo**: Marcações de Recife (Brasil) e Linares (Chile)
- ✅ **Design Responsivo**: Perfeito para QR Code em mobile

## 📋 Stack Tecnológico

- **React 19** - Framework UI
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Estilização
- **Framer Motion** - Animações (integrado via Tailwind)
- **Leaflet** - Mapa interativo
- **Wouter** - Roteamento leve
- **shadcn/ui** - Componentes UI

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 22+
- pnpm 10+

### Setup Local

```bash
# Clonar repositório
git clone <seu-repo-url>
cd romantic-love-site

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:3000`

## 📝 Customização

### 1. Alterar Data de Início do Relacionamento

Abra `client/src/pages/Home.tsx` e altere:

```tsx
<RelationshipCounter startDate={new Date('2023-06-15')} />
```

Substitua `2023-06-15` pela data desejada.

### 2. Adicionar Fotos do Casal

Abra `client/src/components/PhotoGallery.tsx` e substitua os URLs das fotos:

```tsx
const photos: Photo[] = [
  {
    id: 1,
    src: 'COLOQUE_URL_DA_FOTO_AQUI',
    title: 'Título da foto',
    message: 'Mensagem romântica',
  },
  // ... mais fotos
];
```

### 3. Adicionar Música

Abra `client/src/components/MusicPlayer.tsx` e altere:

```tsx
<audio ref={audioRef} onEnded={() => setIsPlaying(false)} className="hidden">
  <source src="COLOQUE_URL_DA_MUSICA_AQUI" type="audio/mpeg" />
</audio>
```

### 4. Personalizar Textos

Todos os textos estão em `client/src/lib/i18n.ts`. Edite os valores em português e espanhol conforme desejado.

### 5. Alterar Cores

Abra `client/src/index.css` e modifique as variáveis CSS na seção `:root`:

```css
:root {
  --primary: #d4af37; /* Ouro */
  --secondary: #2d1b4e; /* Roxo escuro */
  /* ... mais cores */
}
```

## 🗺️ Mapa Interativo

O mapa mostra automaticamente Recife (Brasil) e Linares (Chile). Para alterar as coordenadas, edite `client/src/components/InteractiveMap.tsx`:

```tsx
const recife = [-8.0476, -34.8770]; // Latitude, Longitude
const linares = [-35.8502, -71.6147];
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+

Todos os breakpoints usam Tailwind CSS padrão (sm, md, lg, xl).

## 🔗 Deploy

### Opção 1: Manus (Recomendado)

1. Crie um checkpoint: `git add . && git commit -m "Initial commit"`
2. Clique em "Publish" no painel de controle do Manus
3. Seu site estará disponível em `https://seu-dominio.manus.space`

### Opção 2: GitHub Pages

```bash
# Build para produção
pnpm build

# Fazer deploy do conteúdo de dist/public
```

### Opção 3: Vercel/Netlify

```bash
# Fazer push para GitHub
git push origin main

# Conectar repositório no Vercel/Netlify
# Configurar build command: pnpm build
# Configurar output directory: dist/public
```

## 📸 Captura de Tela

[Hero Section com animações de partículas, corações e bandeiras Brasil/Chile]

## 🎯 Próximos Passos

1. ✅ Substituir fotos de exemplo por fotos reais do casal
2. ✅ Adicionar URL da música favorita
3. ✅ Personalizar textos e datas
4. ✅ Testar em diferentes dispositivos
5. ✅ Gerar QR Code apontando para o site
6. ✅ Fazer deploy

## 💡 Dicas

- **Fotos**: Use URLs de alta qualidade (min. 1000px)
- **Música**: Hospede em serviço de streaming ou use URL pública
- **QR Code**: Use ferramentas online como qr-server.com
- **Domínio Customizado**: Configure no painel de controle do Manus

## 📄 Licença

Feito com ❤️ para sua namorada

## 🤝 Suporte

Para dúvidas ou problemas, verifique:

1. Console do navegador (F12)
2. Logs do servidor de desenvolvimento
3. Documentação do Tailwind CSS
4. Documentação do Leaflet

---

**Desenvolvido com amor** 💕🇧🇷❤️🇨🇱
