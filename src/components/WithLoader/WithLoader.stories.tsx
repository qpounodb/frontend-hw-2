import { ComponentMeta, ComponentStory } from '@storybook/react';

import { WithLoader as WithLoaderComponent } from './WithLoader';

type Meta = ComponentMeta<typeof WithLoaderComponent>;
type Story = ComponentStory<typeof WithLoaderComponent>;

export default {
  title: 'Loader/WithLoader',
  component: WithLoaderComponent,
} as Meta;

export const WithLoader: Story = (args) => (
  <WithLoaderComponent {...args}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fugit
    repudiandae, quidem ab ad odio praesentium illo provident adipisci delectus
    aperiam distinctio ut tenetur consequuntur nam architecto soluta nulla? In?
    Totam inventore libero esse modi quisquam doloribus quia, commodi, nesciunt
    nulla, perferendis reprehenderit rerum! Debitis praesentium atque quis
    cumque suscipit numquam est soluta sit at, eos quibusdam. Rem, saepe
    tenetur. Cupiditate est quis ut. Similique odit corrupti architecto expedita
    laboriosam labore alias dignissimos nisi quia? Exercitationem placeat veniam
    ullam ea consectetur, quibusdam pariatur possimus doloremque necessitatibus,
    odio quasi porro nostrum! Non at deleniti doloribus quod mollitia amet
    placeat, eos nihil temporibus tempora numquam itaque harum repudiandae ut
    ducimus laborum facilis tenetur ratione sint. Consequatur adipisci, quam
    incidunt accusamus cumque facere? Harum corporis optio accusamus magnam
    reprehenderit ipsam, repellendus repellat facilis, et officia atque animi?
    Quos harum ducimus suscipit totam odit aperiam, sequi a nam, distinctio
    quasi eum molestiae dolor non?
  </WithLoaderComponent>
);

WithLoader.args = {
  loading: true,
};
