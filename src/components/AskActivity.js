import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
const AskActivity = ({ fetchData }) => {
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1);

  return (
    <Form style={{ width: "18rem" }}>
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

      <Form.Label>Min Price</Form.Label>
      <RangeSlider
        value={minPrice}
        onChange={(e) => {
          setMinPrice(e.target.value);
        }}
        step={0.1}
        min={0}
        max={1}
      />
      <Form.Label>Max Price</Form.Label>
      <RangeSlider
        value={maxPrice}
        onChange={(e) => {
          setMaxPrice(e.target.value);
        }}
        step={0.1}
        min={0}
        max={1}
      />

      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          fetchData({ type, minprice: minPrice, maxprice: maxPrice });
        }}
      >
        Ask for activity
      </Button>
    </Form>
  );
};

export default AskActivity;
