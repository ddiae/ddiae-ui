import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: '버튼 텍스트' },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', color: 'purple' },
};

export const PrimarySky: Story = {
  args: { variant: 'primary', color: 'sky' },
};

export const Confirm: Story = {
  args: { variant: 'confirm', color: 'purple' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-3 p-4 max-w-xs">
      {(['purple', 'pink', 'sky', 'green', 'yellow'] as const).map((color) => (
        <Button key={color} variant="primary" color={color}>
          {color}
        </Button>
      ))}
    </div>
  ),
};
