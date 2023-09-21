import React from "react";
import { Spacing } from "@cswithen/foundation";
interface MarginProps {
    space?: keyof typeof Spacing;
    left?: keyof typeof Spacing;
    right?: keyof typeof Spacing;
    top?: keyof typeof Spacing;
    bottom?: keyof typeof Spacing;
    children: React.ReactNode;
}
declare const Margin: React.FC<MarginProps>;
export default Margin;
