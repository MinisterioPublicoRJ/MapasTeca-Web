## Como adicionar a MapasTeca a um projeto  React?
Nossa biblioteca está registrada no [NPM Registry!](https://www.npmjs.com/package/mapasteca-web). Para adicioná-la a um projeto com React >=17.0.1, é śo rodar:
`npm i --save mapasteca-web`

A MapasTeca agora utiliza variáveis de CSS.
Para alterar o valor de uma variável da MapasTeca em um projeto que a utiliza, basta declarar a variável correspondente e o valor desejado em um lugar acima do componente da MapasTeca.


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

### Explicação dos Scripts
- `npm run build`: roda o script de build que o Babel para gerar os arquivos estáticos pro pacote.
- `npm run build-storybook`: faz o build dos arquivos do Storybook, para que [nossa página no GitHub pages](https://ministeriopublicorj.github.io/MapasTeca-Web/) reflita as mudanças feitas nos componentes. Nosso GitHub Pages já está configurado pra ler os arquivos da pasta `/docs` para a criação da página.
- `npm run build-win`: versão alternativa do comado de build para quem usa Windows.
- `npm run prepub` e `npm run prepub-win`: roda o build correspondente e o build do storybook.

### Passo a passo
Para lançar uma nova versão, você precisa:

1] Buildar os arquivos do pacote pra produção, com `npm run prepub` ou `npm run prepub-win`;

2] Commitar todos os arquivos e a mudança de versão e dar push pro GitHub. Essa etapa vai atualizar o GitHub pages.

3] Publicar a nova versão do pacote com `npm publish`.
