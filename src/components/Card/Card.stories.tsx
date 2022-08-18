import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card as CardComponent } from './Card';

type Meta = ComponentMeta<typeof CardComponent>;
type Story = ComponentStory<typeof CardComponent>;

const meta: Meta = {
  title: 'Card',
  component: CardComponent,
};

export default meta;

export const Card: Story = (args) => <CardComponent {...args} />;
Card.args = {
  image: 'https://picsum.photos/100/300',
  title: 'kts-school-frontend',
  subtitle: 'ktsstudio',
  content: (
    <>
      <span>⭐ 123</span> <span>Updated 21 Jul</span>
    </>
  ),
};
