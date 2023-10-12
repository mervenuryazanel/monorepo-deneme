import type { Meta, StoryObj } from '@storybook/react';
import { SignumComponents } from './signum-components';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SignumComponents> = {
  component: SignumComponents,
  title: 'SignumComponents',
};
export default meta;
type Story = StoryObj<typeof SignumComponents>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SignumComponents!/gi)).toBeTruthy();
  },
};
