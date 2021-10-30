import { Meta, Story } from '@storybook/react/types-6-0';

import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
