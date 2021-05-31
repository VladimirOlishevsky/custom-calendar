import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { DatePicker } from '..';


export default {
  title: 'Blocks/DatePicker',
  component: DatePicker,
} as Meta;

export const DatePickerTemplate: Story = () => <DatePicker />;
