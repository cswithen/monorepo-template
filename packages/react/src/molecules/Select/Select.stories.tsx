import React from "react";
import Select from "./Select";

//css
import "@cswithen/scss/lib/Select.css";
import { Meta, StoryObj } from "@storybook/react";

const options = [
  {
    label: "Strict Black",
    value: "black",
  },
  {
    label: "Heavenly Green",
    value: "green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

const meta: Meta<typeof Select> = {
  title: "Molecules/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: {
        type: "array",
      },
    },
    label: {
      control: {
        type: "text",
      },
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  args: {
    options: options,
  },
};

export const RenderOption: Story = {
  args: {
    options: options,
    renderOption: ({ option, getOptionRecommendedProps, isSelected }) => {
      return (
        <span className="custom-render-option" {...getOptionRecommendedProps()}>
          {option.label} {isSelected && "✅"}
        </span>
      );
    },
  },
}

export const CustomLabel: Story = {
  args: {
    options: options,
    label: "Select your favorite color",
  },
};