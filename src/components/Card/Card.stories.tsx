import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card as CardComponent } from './Card';

type Meta = ComponentMeta<typeof CardComponent>;
type Story = ComponentStory<typeof CardComponent>;

const meta: Meta = {
  title: 'Card/Card',
  component: CardComponent,
  argTypes: { onClick: { action: 'clicked' } },
};

export default meta;

export const Card: Story = (args) => <CardComponent {...args} />;
Card.args = {
  image: 'https://picsum.photos/100/100',
  placeholder: 'S',
  title: 'Title',
  subtitle: 'Subtitle',
  content: 'Content',
};
