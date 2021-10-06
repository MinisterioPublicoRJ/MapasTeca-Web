import React from 'react';
import { action } from '@storybook/addon-actions';

import SearchFilters from './SearchFilters';

export default {
  title: 'Organismos/SearchFilters',
  component: SearchFilters,
  decorators: [
    (Story) => (
      <div style={{ width: '40%' }}>
        <Story />
      </div>
    ),
  ],
};
const Template = (args) => <SearchFilters {...args} />;

export const Padrao = Template.bind({});
Padrao.args = {
  buttonText: "Buscar base de dados",
  onSearch: action('Callback foi chamado!'),
  filters: [
    {
      nome: "Nome da base",
      status: true
    },
    {
      nome: "Repositório",
      status: false
    },
    {
      nome: "Qualidade da base",
      status: true
    },
    {
      nome: "Última Atualização",
      status: false
    }
  ]
};
