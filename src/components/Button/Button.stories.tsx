import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: JSX.IntrinsicAttributes & ButtonProps) => <Button {...args} />;

export const Primitive = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primitive.args = {
  label: 'Button',
  type: 'primitive',
};

export const Simple = Template.bind({});
Simple.args = {
  label: 'Button',
  type: 'simple',
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Button',
  type: 'rounded',
};
