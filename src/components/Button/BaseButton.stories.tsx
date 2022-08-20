import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BaseButton as BaseButtonComponent, ButtonColor } from './BaseButton';

type Meta = ComponentMeta<typeof BaseButtonComponent>;
type Story = ComponentStory<typeof BaseButtonComponent>;

const meta: Meta = {
  title: 'Button/BaseButton',
  component: BaseButtonComponent,
  argTypes: { onClick: { action: 'clicked' } },
};

export default meta;

export const BaseButton: Story = (args) => (
  <BaseButtonComponent {...args}>Отправить</BaseButtonComponent>
);
BaseButton.args = {
  color: ButtonColor.primary,
  disabled: false,
};
