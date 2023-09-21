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

const Margin: React.FC<MarginProps> = ({
  space = "xxxs",
  children,
  left,
  right,
  top,
  bottom,
}) => {
  let className = ``;

  if (!left && !right && !top && !bottom) {
    className += ` dse-margin-${space}`;
  }

  if (left) className += ` dse-margin-left-${left}`;
  if (right) className += ` dse-margin-right-${right}`;
  if (top) className += ` dse-margin-top-${top}`;
  if (bottom) className += ` dse-margin-bottom-${bottom}`;

  return <div className={className}>{children}</div>;
};

export default Margin;
