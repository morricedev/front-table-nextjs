import { Meta, Story } from '@storybook/react/types-6-0';

import { SearchContainer } from '.';

export default {
  title: 'Components/SearchContainer',
  component: SearchContainer,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <SearchContainer {...args} />
    </div>
  );
};
