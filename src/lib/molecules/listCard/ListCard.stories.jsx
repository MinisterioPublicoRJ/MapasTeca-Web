import React from 'react';

import ListCard from './ListCard';

export default {
  title: 'Moléculas/ListCard',
  component: ListCard,
  decorators: [
    (Story) => (
      <div style={{ width: '33%', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
  // argTypes: {
  //   fillColor: { control: 'color' },
  //   detailColor: { control: 'color' },
  // },
};

const Template = (args) => <ListCard {...args} />;

export const Complete = Template.bind({});
Complete.args = {
  title: 'CASE Respecting TiTlE',
  text: <span>hello, there</span>,
  actionText: 'Clicando aqui você navega!',
  actionLink: '',
  fillColor: 'white',
  detailColor: '#71D0A4',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: <span>Você pode usar apenas texto, sem título, links, ícone ou área de detalhe.</span>,
};
