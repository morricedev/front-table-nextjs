import { Meta, Story } from '@storybook/react/types-6-0';

import { Home } from '.';
import { IDefaultProps } from '../../../types/default';
import mock from '../../components/EmployeesList/mock';

export default {
  title: 'Templates/Home',
  component: Home,
  args: {
    employees: mock,
  },
} as Meta;

export const Template: Story<IDefaultProps> = (args) => {
  return (
    <div>
      <Home {...args} />
    </div>
  );
};
