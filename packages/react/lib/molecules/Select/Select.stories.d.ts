import Select from "./Select";
import "@cswithen/scss/lib/Select.css";
import { Meta, StoryObj } from "@storybook/react";
declare const meta: Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Common: Story;
export declare const RenderOption: Story;
export declare const CustomLabel: Story;
