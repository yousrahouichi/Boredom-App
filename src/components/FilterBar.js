import { useState } from "react";

import { InputGroup, FormControl, Button } from "react-bootstrap";
const FilterBar = ({ searchItems }) => {
  const [searchInput, setSearchInput] = useState("");

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
    </>
  );
};

export default FilterBar;
