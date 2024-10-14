import type { Meta, StoryObj } from "@storybook/react";
import { Captions, CaptionsIcon } from "lucide-react";
import { Button } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "The variant of the button.",
      control: {
        type: "select",
      },
      options: ["default", "outline", "secondary", "ghost", "link"],
    },
    size: {
      description: "The size of the button.",
      control: {
        type: "select",
      },
      options: ["default", "sm", "lg", "icon"],
    },
  },
  args: {
    size: "default",
    asChild: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const Icon: Story = {
  args: {
    variant: "default",
    children: <CaptionsIcon />,
  },
};
