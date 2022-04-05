import React from 'react';
import { action } from '@storybook/addon-actions';

import SearchBox from './SearchBox';
import SectionHeader from '../../molecules/sectionHeader/SectionHeader';

export default {
  title: 'Organismos/SearchBox',
  component: SearchBox,
  decorators: [
    (Story) => (
      <div style={{ width: '40%', backgroundColor: 'white' }}>
        <Story />
      </div>
    ),
  ],
};
const Template = (args) => <SearchBox {...args} />;

export const Padrao = Template.bind({});
Padrao.args = {
  children: <SectionHeader title="Título da Área Título da Área Título da Área Título da Área" />,
  onSearch: action('Callback foi chamado!'),
  backgroundColor: '#BDDFF0',
  textColor: '#000',
};
