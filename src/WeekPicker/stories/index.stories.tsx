import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { WeekPicker } from '..';


export default {
  title: 'Blocks/WeekPicker',
  component: WeekPicker,
} as Meta;

export const WeekPickerTemplate: Story = () => <WeekPicker />;
