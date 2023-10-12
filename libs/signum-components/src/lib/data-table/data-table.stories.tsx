import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './data-table';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DataTable> = {
  component: DataTable,
  title: 'DataTable',
};
export default meta;
type Story = StoryObj<typeof DataTable>;

export const Primary = {
  args: {
    title: '',
  },
};

export const Heading: Story = {
  args: {
    title: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to DataTable!/gi)).toBeTruthy();
  },
};
