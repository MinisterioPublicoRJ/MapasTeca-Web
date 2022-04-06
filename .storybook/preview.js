import '../src/lib/variables.css';

export const parameters = {
  options: {
    storySort: {
      order: [
        'Intro',
        ['Introdução', 'Como usar?', 'Log de versões'],
        'CSS',
        ['Variáveis', 'Utilização'],
        'Código funcional',
        ['Small Badge'],
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
