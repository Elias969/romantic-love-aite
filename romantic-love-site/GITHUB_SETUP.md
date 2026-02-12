# 📤 Instruções para Upload no GitHub

## Passo 1: Criar Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Preencha os dados:
   - **Repository name**: `romantic-love-site` (ou outro nome desejado)
   - **Description**: "Site romântico interativo para presentear minha namorada"
   - **Visibility**: Public (para QR Code funcionar)
3. Clique em "Create repository"

## Passo 2: Configurar Git Localmente

```bash
# Navegar para o diretório do projeto
cd /home/ubuntu/romantic-love-site

# Inicializar git (se não estiver inicializado)
git init

# Adicionar remote origin
git remote add origin https://github.com/SEU_USUARIO/romantic-love-site.git

# Configurar branch padrão
git branch -M main

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit: Romantic love story website with i18n, gallery, counter, map and music"

# Fazer push para GitHub
git push -u origin main
```

## Passo 3: Verificar no GitHub

1. Acesse seu repositório: `https://github.com/SEU_USUARIO/romantic-love-site`
2. Verifique se todos os arquivos foram enviados
3. Leia o README.md para confirmar

## Passo 4: Gerar QR Code

1. Acesse [qr-server.com](https://qr-server.com/qr-code-generator/)
2. Cole a URL do seu site (ex: `https://seu-dominio.manus.space`)
3. Customize o design (opcional)
4. Baixe a imagem do QR Code
5. Compartilhe com sua namorada! 💕

## 📋 Arquivos Inclusos

```
romantic-love-site/
├── client/
│   ├── public/               # Assets estáticos
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PhotoGallery.tsx
│   │   │   ├── DrawingsGallery.tsx
│   │   │   ├── LoveLetters.tsx
│   │   │   ├── RelationshipCounter.tsx
│   │   │   ├── MusicPlayer.tsx
│   │   │   ├── StorySection.tsx
│   │   │   ├── InteractiveMap.tsx
│   │   │   ├── ParticleBackground.tsx
│   │   │   └── Footer.tsx
│   │   ├── contexts/         # Contextos React
│   │   │   ├── LanguageContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── lib/
│   │   │   └── i18n.ts       # Internacionalização
│   │   ├── pages/
│   │   │   └── Home.tsx      # Página principal
│   │   ├── App.tsx           # Componente raiz
│   │   ├── main.tsx          # Entry point
│   │   └── index.css         # Estilos globais
│   └── index.html            # HTML template
├── server/                   # Servidor (não usado em static)
├── package.json              # Dependências
├── README.md                 # Documentação
├── GITHUB_SETUP.md          # Este arquivo
└── ideas.md                  # Brainstorming de design
```

## 🔄 Atualizações Futuras

Para fazer atualizações no site:

```bash
# Fazer alterações no código

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Fazer push
git push origin main
```

## 🚀 Deploy Automático

Se usar Vercel ou Netlify:

1. Conecte seu repositório GitHub
2. Configure build command: `pnpm build`
3. Configure output directory: `dist/public`
4. Cada push para `main` fará deploy automático

## 📝 Notas Importantes

- ✅ O site é totalmente estático (sem backend necessário)
- ✅ Funciona perfeitamente em QR Code
- ✅ Responsivo para todos os dispositivos
- ✅ Suporta Português BR e Espanhol CL
- ✅ Todas as animações funcionam offline

## ❓ Dúvidas Comuns

**P: Posso alterar as cores?**
R: Sim! Edite `client/src/index.css` e altere as variáveis CSS.

**P: Como adiciono mais fotos?**
R: Edite `client/src/components/PhotoGallery.tsx` e adicione mais items ao array `photos`.

**P: Posso usar minha própria música?**
R: Sim! Edite `client/src/components/MusicPlayer.tsx` e coloque a URL da sua música.

**P: O site funciona offline?**
R: Parcialmente. O mapa precisa de conexão, mas tudo mais funciona offline.

---

Feito com ❤️ para sua namorada! 💕🇧🇷❤️🇨🇱
