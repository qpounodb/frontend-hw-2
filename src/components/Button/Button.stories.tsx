import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button as ButtonComponent, ButtonColor } from './Button';

type Meta = ComponentMeta<typeof ButtonComponent>;
type Story = ComponentStory<typeof ButtonComponent>;

const meta: Meta = {
  title: 'Button',
  component: ButtonComponent,
};

export default meta;

export const Button: Story = (args) => (
  <ButtonComponent {...args}>Отправить</ButtonComponent>
);
Button.args = {
  color: ButtonColor.primary,
  disabled: false,
  loading: false,
};
