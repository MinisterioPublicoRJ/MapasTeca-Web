import '../src/lib/variables.css';

export const parameters = {
  options: {
    storySort: {
      order: [
        'Intro',
        ['Introdução', 'Como usar?'],
        'CSS',
        ['Variáveis', 'Utilização'],
        'Exemplos de código funcional',
        ['A MapasTeca no meio do seu projeto'],
        'Átomos',
        'Moléculas',
        'Organismos',
      ],
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <Story />
  ),
];
