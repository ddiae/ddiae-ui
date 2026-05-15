import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: { children: <p className="text-gray-600">카드 내용이 들어가요.</p> },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const White: Story = {
  args: { variant: 'white' },
};

export const GradientPurple: Story = {
  args: { variant: 'gradient', color: 'purple' },
};

export const GradientPink: Story = {
  args: { variant: 'gradient', color: 'pink' },
};

export const AllGradients: Story = {
  render: () => (
    <div className="flex flex-col gap-3 p-4 max-w-xs">
      {(['purple', 'pink', 'sky', 'green', 'yellow'] as const).map((color) => (
        <Card key={color} variant="gradient" color={color}>
          <p className="font-bold text-sm">{color} 카드</p>
        </Card>
      ))}
    </div>
  ),
};
