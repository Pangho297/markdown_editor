import { Meta, StoryObj } from "@storybook/react";
import H2 from ".";
import useProcessor from "@/hooks/useProcessor";

const H2WithProcessor = ({ children }: { children: string }) => {
  const Content = useProcessor(children);
  return <H2>{Content}</H2>;
};

const meta: Meta<typeof H2WithProcessor> = {
  title: "Components/Section/Preview/H2",
  component: H2WithProcessor,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof H2WithProcessor>;

export const Default: Story = {
  args: {
    children: "## 제목 2",
  },
};
