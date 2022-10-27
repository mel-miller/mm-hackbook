import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Primary UI component for user interaction',
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
