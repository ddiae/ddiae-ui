import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { children: '뱃지' },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 p-4">
      {(['purple', 'pink', 'sky', 'green', 'yellow'] as const).map((color) => (
        <Badge key={color} color={color}>{color}</Badge>
      ))}
    </div>
  ),
};
