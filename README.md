# Grid Maker

Gerador de grids modulares para design gráfico e pré-impressão. Roda inteiramente no navegador, sem back-end.

## O que faz

- **Formas** — 13 pré-definidas (quadrado, folha, círculo, anel, hexágono, estrela, entre outras) mais upload de SVG próprio
- **Malha** — colunas, linhas, tamanho do módulo e espaçamento independentes, com encaixe automático
- **Ocupação** — qualquer módulo pode cobrir várias células: proporcional (3×3), horizontal, vertical ou personalizada (3×7)
- **Atributos** — rotação, opacidade e escalonamento progressivo por linhas, colunas, diagonal ou radial
- **Cor** — preenchimento e contorno com cores e opacidades separadas, globais ou por módulo
- **Suporte** — presets de A4 a Stories, ou tamanho personalizado em px, mm, cm ou polegadas com DPI ajustável
- **Exportação** — SVG vetorial e PNG até 4×

## Detalhes técnicos

O SVG é montado no DOM e serializado direto, então o que aparece na tela é exatamente o que sai no arquivo. O PNG é rasterizado num `<canvas>` a partir desse mesmo SVG.

Formas com cantos arredondados são paramétricas: o path é recalculado no tamanho real do bloco, de modo que o raio permanece constante mesmo em módulos esticados. Contornos usam `vector-effect: non-scaling-stroke`, então a espessura definida é a espessura do arquivo final.

Cada combinação de cores vira uma classe CSS no SVG em vez de atributos inline por objeto — o arquivo abre no Illustrator com poucos grupos de estilo.

## Rodando localmente

```bash
npm install
npm run dev
```

## Publicando

O workflow em `.github/workflows/deploy.yml` publica no GitHub Pages a cada push na `main`. Ative em **Settings › Pages › Source: GitHub Actions**.

O campo `base` em `vite.config.js` precisa bater com o nome do repositório.

## Licença

MIT
