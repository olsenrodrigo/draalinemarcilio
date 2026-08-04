# Arte de compartilhamento (og:image)

`card.html` é o gabarito de `client/public/opengraph.jpg` — a imagem que WhatsApp,
Instagram, Facebook e Twitter mostram quando alguém manda o link do site.

Formato: **1200 × 630** (proporção que essas plataformas esperam).

## Como regerar

1. Sirva a pasta (as fontes vêm do Google Fonts, então precisa de rede):

   ```bash
   python3 -m http.server 4455 --directory script/og-card
   ```

2. Abra `http://127.0.0.1:4455/card.html`, capture o `.og` em 1200 × 630 e salve
   como `client/public/opengraph.jpg` (JPEG, qualidade ~92, alvo < 300 KB para o
   WhatsApp baixar sem tropeço).

3. **Suba o `?v=` em `client/index.html`.** Sem isso, as plataformas continuam
   servindo a arte antiga do cache delas:

   ```html
   <meta property="og:image" content="https://draalinemarcilio.com.br/opengraph.jpg?v=3" />
   <meta name="twitter:image"  content="https://draalinemarcilio.com.br/opengraph.jpg?v=3" />
   ```

4. Depois do deploy, force a releitura no
   [Sharing Debugger do Facebook](https://developers.facebook.com/tools/debug/)
   (vale para Facebook e Instagram). O WhatsApp tem cache próprio: para conferir
   na hora, mande o link com um sufixo novo (`?x=1`).

## Onde mexer

- **Tipografia do logo** — `logo-paths.json` traz os mesmos caminhos vetoriais de
  `client/src/components/Logo.tsx`. Se o logo mudar, regere este arquivo a partir
  de lá.
- **Paleta** — os tokens no topo do `<style>` espelham `client/src/index.css`.
- **Foto** — `client/src/assets/images/aline-hero.jpg`.
