import React from "react";
import { Dropdown } from "semantic-ui-react";

const Category = [
  {
    key: "bussiness",
    text: "bussiness",
    value: "bussiness",
  },
  {
    key: "entertainment",
    text: "entertainment",
    value: "entertainment",
  },
  {
    key: "general",
    text: "general",
    value: "general",
  },
  {
    key: "health",
    text: "health",
    value: "health",
  },
  {
    key: "science",
    text: "science",
    value: "science",
  },
  {
    key: "sports",
    text: "sports",
    value: "sports",
  },
  {
    key: "technology",
    text: "technology",
    value: "technology",
  },
];

const DropdownCategory = ({ change }) => (
  <Dropdown
    placeholder="Select Category"
    fluid
    selection
    options={Category}
    onChange={change}
  />
);

export default DropdownCategory;
