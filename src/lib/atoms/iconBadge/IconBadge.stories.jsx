import React from 'react';
// import { action } from '@storybook/addon-actions';

import IconBadge from './IconBadge';
import { ClockIcon } from '../../assets/svg';

export default {
  title: 'Átomos/IconBadge',
  component: IconBadge,
  decorators: [
    (Story) => (
      <div style={{ width: '80px', height: '80px', overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <IconBadge {...args} />;

export const Padrao = Template.bind({});
Padrao.args = { backgroundColor: '#F86C72', text: 'Dispensar', icon: <ClockIcon /> };

export const Arredondado = Template.bind({});
Arredondado.args = {
  backgroundColor: '#5C6FD9',
  text: 'Arredondado',
  icon: <ClockIcon />,
};
Arredondado.decorators = [
  (Story) => (
    <div
      style={{
        width: '80px',
        height: '80px',
        overflow: 'hidden',
        borderRadius: '0 28px 0 28px',
      }}
    >
      <Story />
    </div>
  ),
];
