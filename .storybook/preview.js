import { ThemeProvider } from '../src/lib/theming/ThemeContext/ThemeContext';
import '../src/lib/variables.css';

export const parameters = {
  options: {
    storySort: {
      order: [
        'Intro',
        'Temas',
        ['Temas e personalização', 'Tema Padrão'],
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
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
