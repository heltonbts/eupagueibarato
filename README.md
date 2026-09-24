# eupagueibarato

Pagina de captura estatica, em portugues, para o grupo de achadinhos no WhatsApp.

Abra `index.html` diretamente no navegador. Nao precisa instalar dependencias ou iniciar um servidor.

## Publicacao

Site: https://heltonbts.github.io/eupagueibarato/

O workflow `.github/workflows/pages.yml` publica automaticamente no GitHub Pages a cada push na branch `main`. Tambem pode ser executado manualmente em Actions. A origem em Settings > Pages deve ser GitHub Actions.

A publicacao inclui apenas o HTML, CSS, JavaScript e a pasta `assets`. Capturas de teste e documentacao ficam fora do site.

## Convite do grupo

Em `config.js`, preencha `whatsappGroupUrl` com o convite oficial no formato `https://chat.whatsapp.com/CODIGO`.
Todos os botoes e categorias passam a abrir esse convite. Sem o link, a pagina exibe um aviso de indisponibilidade.

## Arquivos

- `index.html`: conteudo e estrutura.
- `styles.css`: identidade visual e layout responsivo.
- `script.js`: convite, modais, icones e chamada fixa no celular.
- `config.js`: link do grupo.
- `assets/`: logo enviada pelo usuario, capa, fotografias e Lucide (ISC).

## Meta Pixel

Pixel instalado: `1108211248829028`.

- `PageView`: uma visita por carregamento da pagina, com alternativa `noscript`.
- `Lead`: evento padrao disparado a cada clique em um convite valido do grupo, para otimizacao de campanhas.
- `WhatsAppClick`: evento personalizado ao clicar em um convite valido do grupo, incluindo botoes e categorias. Ambos medem a abertura do convite, nao a entrada efetiva no grupo.

O codigo base esta em `index.html` e carrega `https://connect.facebook.net/en_US/fbevents.js` de forma assincrona. Os eventos de clique ficam em `script.js`. O aviso de privacidade informa o rastreamento. Nao ha formulario de coleta de dados.

## TikTok Pixel

Pixel instalado: `DAO8P63C77UF5LAHGPMG`.

O snippet fornecido pelo usuario esta em `index.html`, junto ao Pixel da Meta. Carrega `https://analytics.tiktok.com/i18n/pixel/events.js` de forma assincrona e chama `ttq.page()` uma vez por carregamento. Nao foram adicionados eventos personalizados do TikTok. O aviso de privacidade informa o uso dos dois pixels.

## Imagens

Logo: fornecida pelo usuario, preservada em `assets/logo.png`.
Capa: criada com a ferramenta integrada image_gen, salva em `assets/hero.png`.
Fotos ilustrativas das categorias: Unsplash, IDs 1600210492486-724fe5c67fb0, 1556229010-6c3f2c9ca5f8, 1505740420928-5e560c06d30e e 1542291026-7eec264c27ff.

Prompt da capa:

> Use case: product-mockup. Asset type: full bleed website hero background for Brazilian shopping finds WhatsApp community. Create a premium photorealistic studio still life, landscape 1536x1024. Seamless pale mint green background #e7f0e9 with very soft natural shadows, not gradient design. Left 55% of image must be completely empty pale mint for dark green HTML headline overlay. Right 45% has playful beautifully styled bargain shopping products: blush pink over-ear wireless headphones, pale pink insulated tumbler, small white retro toaster, folded sage towel, pink skincare tube and a bright tomato red paper shopping bag behind. Products arranged on low pale mint geometric studio plinths, all entirely on right half, realistic matte surfaces and crisp ecommerce lighting. A small lime-yellow paper price tag hangs from bag without any writing. Premium contemporary editorial art direction, bright optimistic, thoughtful physical composition, entire products visible. No text, no letters, no watermark, no logos, no people. Objects concentrated x=60% to 95%, y=22% to 86%. Background is uniform pastel mint edge to edge.
