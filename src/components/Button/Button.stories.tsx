import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonColor } from './BaseButton';
import { Button as ButtonComponent } from './Button';

type Meta = ComponentMeta<typeof ButtonComponent>;
type Story = ComponentStory<typeof ButtonComponent>;

const meta: Meta = {
  title: 'Button/Button',
  component: ButtonComponent,
  argTypes: { onClick: { action: 'clicked' } },
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
