import '../src/lib/variables.css';

export const parameters = {
  options: {
    storySort: {
      order: [
        'Intro',
        'CSS',
        ['Variáveis', 'Utilização'],
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
