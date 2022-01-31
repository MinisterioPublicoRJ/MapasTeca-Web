## Como adicionar a MapasTeca a um projeto  React?
Nossa biblioteca está registrada no [NPM Registry!](https://www.npmjs.com/package/mapasteca-web). Para adicioná-la a um projeto com React >=17.0.1, é śo rodar:
`npm i --save mapasteca-web`

## Requerimentos
- Node 14 ou mais recente, e npm compatível

## Como rodar o projeto?
```
git clone git@github.com:MinisterioPublicoRJ/MapasTeca-Web.git
cd mapasteca-web
npm i
npm start
```
O servidor do StoryBook estará rodando em modo desenvolvimento em [http://localhost:6006](http://localhost:6006).

## Preparando para produção
- É preciso fazer login na sua conta do npm pelo terminal (`npm login`).
- Altere a versão do pacote no `package.json`.

### Versão rápida
Ao rodar `npm publish`, o script de `prepublishOnly` vai ser chamado antes e fazer todas as etapas necessárias.

### Explicação dos Scripts
- `npm run build`: roda o script de build que o Babel para gerar os arquivos estáticos pro pacote.
- `npm run build-storybook`: faz o build dos arquivos do Storybook, para que [nossa página no GitHub pages](https://ministeriopublicorj.github.io/MapasTeca-Web/) reflita as mudanças feitas nos componentes. Nosso GitHub Pages já está configurado pra ler os arquivos da pasta `/docs` para a criação da página.
- `npm run build-win`: versão alternativa do comado de build para quem usa Windows, não é chamada por padrão no prepublish mas pode ser chamada manualmente.

### Passo a passo detalhado
Para lançar uma nova versão manualmente, você precisa:
1] Buildar os arquivos do pacote pra produção, com `npm run build` ou `npm run build-win`;
2] Buildar os arquivos do StoryBook com `npm run build-storybook`;
3] Commitar todos os arquivos e a mudança de versão e dar push pro GitHub. Essa etapa vai atualizar o GitHub pages.
4] Publicar a nova versão do pacote com `npm publish`. Caso você tenha feito o build manual do pacote, antes de rodar o comando você precisa retirar o script de pre-publish do `package.json`, ou ele vai tentar buildar tudo de novo.
