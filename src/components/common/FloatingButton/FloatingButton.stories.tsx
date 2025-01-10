import { Meta, StoryObj } from "@storybook/react";
import FloatingButton from ".";
import { Moon, Plus } from "lucide-react";

const iconOptions = {
  Plus: <Plus className="w-6 h-6" />,
  Moon: <Moon className="w-6 h-6" />,
};

const meta: Meta<typeof FloatingButton> = {
  title: "Components/Common/FloatingButton",
  component: FloatingButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      description: "아이콘",
    },
    position: {
      control: "text",
      description: "위치",
    },
    animation: {
      control: "boolean",
      description: "애니메이션 여부",
    },
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {
  args: {
    position: "bottom-10 right-10",
    animation: true,
    onClick: () => {
      console.log("clicked");
    },
  },
};
