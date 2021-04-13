import React from 'react';
import { action } from '@storybook/addon-actions';

import IconBadge from './IconBadge';
// import { ClockIcon } from '../../assets/svg';

export default {
  title: 'Átomos/IconBadge',
  component: IconBadge,
  decorators: [
    (Story) => (
      <div style={{ width: '60px', height: '60px', backgroundColor: 'pink', overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <IconBadge {...args} />;

export const Default = Template.bind({});
Default.args = { backgroundColor: '#F86C72' };

export const RoundedLeft = Template.bind({});
RoundedLeft.args = { backgroundColor: '#F86C72', text: 'Parcialmente Arredondado' };

export const RoundedRight = Template.bind({});
RoundedRight.args = { backgroundColor: '#F86C72', text: 'Parcialmente Arredondado' };

export const FullyRound = Template.bind({});
FullyRound.args = { backgroundColor: '#F86C72', text: 'Arredondado' };

export const Full = Template.bind({});
Full.args = { backgroundColor: '#F86C72' };

export const Clickable = Template.bind({});
Clickable.args = { backgroundColor: '#71D0A4', onClick: action('Fui clicado!') };
