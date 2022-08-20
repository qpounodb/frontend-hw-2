import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input as InputComponent } from './Input';

type Meta = ComponentMeta<typeof InputComponent>;
type Story = ComponentStory<typeof InputComponent>;

const meta: Meta = {
  title: 'Input/Input',
  component: InputComponent,
};

export default meta;

export const Input: Story = (args) => <InputComponent {...args} />;
Input.args = {
  disabled: false,
  placeholder: 'Введите название организации',
};
