import React from 'react';

import ListCard from './ListCard';
import { ClockIcon } from '../../assets/svg';

export default {
  title: 'Moléculas/ListCard',
  component: ListCard,
  decorators: [
    (Story) => (
      <div style={{ width: '33%', padding: '20px', backgroundColor: '#F8F9FB' }}>
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
  title: 'TÍTULO que ReSpEiTa casing',
  content: (
    <span>
      React NODE com um
      <strong>{` conteúdo `}</strong>
      para o card.
    </span>
  ),
  actionText: 'Clicando aqui você navega!',
  actionLink: '',
  fillColor: 'white',
  detailColor: '#71D0A4',
  icon: <ClockIcon />,
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  content: <span>Você pode usar apenas texto, sem título, links, ícone ou área de detalhe.</span>,
};
