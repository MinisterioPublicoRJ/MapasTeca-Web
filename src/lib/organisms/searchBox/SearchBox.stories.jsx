import React from 'react';

import SearchBox from './SearchBox';
import SectionHeader from '../../molecules/sectionHeader/SectionHeader';

export default {
  title: 'Organismos/SectionHeader',
  component: SearchBox,
  decorators: [
    (Story) => (
      <div style={{ width: '50%', padding: '20px', backgroundColor: '#F8F9FB' }}>
        <Story />
      </div>
    ),
  ],
};
const Template = (args) => <SearchBox {...args} />;

export const Complete = Template.bind({});
Complete.args = {
  children: <SectionHeader title="Título da Área" />
  // title: 'Título que não respeita casing',
  // count: 20,
  // subtitle: 'subtítulo que não respeita casing',
};
