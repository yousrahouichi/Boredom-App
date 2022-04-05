import { useState } from "react";

import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
const FilterBar = ({ searchItems, filterItems }) => {
  const [searchInput, setSearchInput] = useState("");
  const [type, setType] = useState("");

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Title"
          aria-label="Title"
          aria-describedby="basic-addon2"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            searchItems(searchInput);
          }}
        >
          Search
        </Button>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Select
          aria-label="Default select example"
          value={type}
          onChange={(e) => {
            if (e.target.value === "Type") {
              setType(null);
            } else {
              setType(e.target.value);
            }
          }}
        >
          <option>Type</option>
          <option value="education">education</option>
          <option value="recreational">recreational</option>
          <option value="social">social</option>
          <option value="diy">diy</option>
          <option value="charity">charity</option>
          <option value="cooking">cooking</option>
          <option value="relaxation">relaxation</option>
          <option value="music">music</option>
          <option value="busywork">busywork</option>
        </Form.Select>
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            filterItems(type);
          }}
        >
          Filter
        </Button>
      </InputGroup>
    </>
  );
};

export default FilterBar;
