import Color from "./Color";
import type { Meta, StoryObj } from "@storybook/react";

//css
import "@cswithen/scss/lib/Utilities.css";

const meta: Meta<typeof Color> = {
  component: Color,
  title: "Atoms/Color",
  tags: ['autodocs'],
  argTypes: {
    hexCode: {
      control: {
        type: "color",
      },
    },
  },
}

export default meta;

type Story = StoryObj<typeof Color>;

export const Medium: Story = {
  args: {
    hexCode: "pink",
    height: "md",
    width: "md",
  }
}

export const CustomDimensions: Story = {
  args: {
    hexCode: "pink",
    height: "xxl",
    width: "xxl",
  }
}