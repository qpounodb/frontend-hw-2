import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonColor } from './BaseButton';
import { SearchButton as SearchButtonComponent } from './SearchButton';

type Meta = ComponentMeta<typeof SearchButtonComponent>;
type Story = ComponentStory<typeof SearchButtonComponent>;

const meta: Meta = {
  title: 'Button/SearchButton',
  component: SearchButtonComponent,
  argTypes: { onClick: { action: 'clicked' } },
};

export default meta;

export const SearchButton: Story = (args) => (
  <SearchButtonComponent {...args}>Отправить</SearchButtonComponent>
);
SearchButton.args = {
  color: ButtonColor.primary,
  disabled: false,
};
