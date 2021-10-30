import { Meta, Story } from '@storybook/react/types-6-0';

import { EmployeeListProps, EmployeesList } from '.';
import mock from './mock';

export default {
  title: 'Components/EmployeesList',
  component: EmployeesList,
  args: {
    employees: mock,
  },
} as Meta;

export const Template: Story<EmployeeListProps> = (args) => {
  return (
    <div>
      <EmployeesList {...args} />
    </div>
  );
};

export const NotFound: Story<EmployeeListProps> = (args) => {
  return (
    <div>
      <EmployeesList {...args} />
    </div>
  );
};

NotFound.args = {
  employees: [],
};
