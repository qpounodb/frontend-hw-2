import { ComponentMeta, ComponentStory } from '@storybook/react';

import { GitRepoTile as GitRepoTileComponent } from './GitRepoTile';

type Meta = ComponentMeta<typeof GitRepoTileComponent>;
type Story = ComponentStory<typeof GitRepoTileComponent>;

const meta: Meta = {
  title: 'Card/Git-Repo-Tile',
  component: GitRepoTileComponent,
  argTypes: { onClick: { action: 'clicked' } },
};

export default meta;

export const GitRepoTile: Story = (args) => <GitRepoTileComponent {...args} />;
GitRepoTile.args = {
  placeholder: 'К',
  apiData: {
    name: 'kts-school-frontend',
    html_url: 'https://github.com/ktsstudio/kts-school-frontend',
    updated_at: '2021-06-21T19:14:43Z',
    stargazers_count: 123,
    owner: {
      login: 'ktsstudio',
      html_url: 'https://github.com/ktsstudio',
      avatar_url: 'https://picsum.photos/150/150',
    },
  },
};
