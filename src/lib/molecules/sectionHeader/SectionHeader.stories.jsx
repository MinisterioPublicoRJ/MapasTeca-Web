import React from 'react';

import SectionHeader from './SectionHeader';

export default {
  title: 'Moléculas/SectionHeader',
  component: SectionHeader,
  decorators: [
    (Story) => (
      <div style={{ width: '50%', padding: '20px', backgroundColor: '#F8F9FB' }}>
        <Story />
      </div>
    ),
  ],
};
const Template = (args) => <SectionHeader {...args} />;

export const Complete = Template.bind({});
Complete.args = {
  title: 'Título que não respeita casing',
  count: 20,
  subtitle: 'subtítulo que não respeita casing',
};

export const ComSubtitulo = Template.bind({});
ComSubtitulo.args = {
  title: 'Seu título',
  subtitle: 'subtítulo',
};

export const ComDetalhe = Template.bind({});
ComDetalhe.args = {
  title: 'Seu título',
  count: '20',
};
