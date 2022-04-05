import React from 'react';

import SmallBadge from './SmallBadge';

export default {
  title: 'Átomos/SmallBadge',
  component: SmallBadge,
};

const Template = (args) => <SmallBadge {...args} />;

export const Primary = Template.bind({});
Primary.args = { innerText: 'Primário', backgroundColor: '#F86C72', textColor: '#fff' };

export const Secondary = Template.bind({});
Secondary.args = {
  innerText: 'Eu sou muito secundário :o',
  backgroundColor: '#F86C72',
  textColor: '#fff',
};
