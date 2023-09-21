import React, { useState, useRef, useEffect } from 'react';
import Text from '../../atoms/Text/Text.js';

const KEY_CODES = {
    ENTER: "Enter",
    ESCAPE: "Escape",
    SPACE: "Space",
    UP_ARROW: "ArrowUp",
    DOWN_ARROW: "ArrowDown",
};
const getPreviousOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === 0) {
        return options.length - 1;
    }
    return currentIndex - 1;
};
const getNextOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === options.length - 1) {
        return 0;
    }
    return currentIndex + 1;
};
const Select = ({ options = [], label = "Please select an option...", onOptionSelected: handler, renderOption, }) => {
    var _a;
    const [isOpen, setIsOpen] = useState(false);
    const labelRef = useRef(null);
    const [optionRefs, setOptionRefs] = useState([]);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [highlightedIndex, setHighlightedIndex] = useState(null);
    const onOptionSelected = (option, optionIndex) => {
        setIsOpen(!isOpen);
        if (handler) {
            handler(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        var _a;
        setOverlayTop((((_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0) + 10);
    }, [(_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight]);
    let selectedOption = null;
    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex];
    }
    const highlightOption = (optionIndex) => {
        setHighlightedIndex(optionIndex);
    };
    const onButtonKeyDown = (event) => {
        event.preventDefault();
        if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(event.code)) {
            setIsOpen(true);
            // set focus on the list item
            highlightOption(highlightedIndex ? highlightedIndex : 0);
        }
    };
    useEffect(() => {
        setOptionRefs(options.map(() => React.createRef()));
    }, [options.length]);
    useEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex];
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, highlightedIndex]);
    const onOptionKeyDown = (event) => {
        var _a;
        event.preventDefault();
        if (event.code === KEY_CODES.ESCAPE) {
            setIsOpen(false);
            (_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            return;
        }
        if (event.code === KEY_CODES.UP_ARROW) {
            highlightOption(getPreviousOptionIndex(highlightedIndex, options));
        }
        if (event.code === KEY_CODES.DOWN_ARROW) {
            highlightOption(getNextOptionIndex(highlightedIndex, options));
        }
        if (event.code === KEY_CODES.ENTER) {
            if (highlightedIndex !== null) {
                onOptionSelected(options[highlightedIndex], highlightedIndex);
            }
        }
    };
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { "data-testid": "dse-select-button", onKeyDown: onButtonKeyDown, "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, "aria-controls": "dse-select-list", ref: labelRef, className: "dse-select__label", onClick: () => onLabelClick() },
            React.createElement(Text, null, selectedOption === null ? label : selectedOption.label),
            React.createElement("svg", { className: `dse-select__caret ${isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"}`, width: "1rem", height: "1rem", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", stroke: "currentColor" },
                React.createElement("path", { d: "M19 9l-7 7-7-7" }))),
        React.createElement("ul", { role: "menu", id: "dse-select-list", style: { top: overlayTop }, className: `dse-select__overlay ${isOpen ? "dse-select__overlay--open" : ""}` }, options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            const isHighlighted = highlightedIndex === optionIndex;
            const ref = optionRefs[optionIndex];
            const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => {
                    return Object.assign({ ref, role: "menuitemradio", "aria-label": option.label, "aria-selected": isSelected ? true : undefined, "aria-checked": isSelected ? true : false, onKeyDown: onOptionKeyDown, tabIndex: isHighlighted ? -1 : 0, onMouseEnter: () => highlightOption(optionIndex), onMouseLeave: () => highlightOption(null), className: `dse-select__option
                      ${isSelected ? "dse-select__option--selected" : ""}
                      ${isHighlighted ? "dse-select__option--highlighted" : ""}
                  `, key: option.value, onClick: () => onOptionSelected(option, optionIndex) }, overrideProps);
                },
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return (React.createElement("li", Object.assign({}, renderOptionProps.getOptionRecommendedProps()),
                React.createElement(Text, null, option.label),
                isSelected ? (React.createElement("svg", { width: "1rem", height: "1rem", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", stroke: "currentColor" },
                    React.createElement("path", { d: "M5 13l4 4L19 7" }))) : null));
        }))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
