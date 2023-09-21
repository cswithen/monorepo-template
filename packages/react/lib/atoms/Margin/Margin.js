import React from 'react';

const Margin = ({ space = "xxxs", children, left, right, top, bottom, }) => {
    let className = ``;
    if (!left && !right && !top && !bottom) {
        className += ` dse-margin-${space}`;
    }
    if (left)
        className += ` dse-margin-left-${left}`;
    if (right)
        className += ` dse-margin-right-${right}`;
    if (top)
        className += ` dse-margin-top-${top}`;
    if (bottom)
        className += ` dse-margin-bottom-${bottom}`;
    return React.createElement("div", { className: className }, children);
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
