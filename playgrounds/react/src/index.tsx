import React from "react";
import { createRoot } from "react-dom/client";

import { Select } from "@cswithen/react";

import "@cswithen/scss/lib/Utilities.css";
// import "@cswithen/scss/lib/Text.css";
// import "@cswithen/scss/lib/Margin.css";
import "@cswithen/scss/lib/Select.css";
import "@cswithen/scss/lib/global.css";

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

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <div style={{ padding: "16px" }}>
    <Select
      options={options}
      renderOption={({ option, getOptionRecommendedProps }) => (
        <p {...getOptionRecommendedProps()}>{option.label}</p>
      )}
    />
  </div>
);
