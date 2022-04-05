import { useSelector } from "react-redux";
import { Stack } from "react-bootstrap";
import { useState } from "react";

import Navigation from "../components/Navigation";
import Activity from "../components/Activity";
import FilterBar from "../components/FilterBar";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);
  const [filteredResults, setFilteredResults] = useState([]);
  const [applyFilter, setApplyFilter] = useState(false);
  const searchItems = (searchValue) => {
    if (searchValue !== "") {
      setApplyFilter(true);
      const filteredData = favorites.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setApplyFilter(false);
      setFilteredResults(favorites);
    }
  };
  return (
    <>
      <Navigation />
      <Stack gap={5}>
        <FilterBar searchItems={searchItems} />
        <Stack gap={5}>
          {applyFilter
            ? filteredResults.map(
                ({
                  id,
                  title,
                  accessibility,
                  type,
                  participants,
                  price,
                  link,
                }) => (
                  <Activity
                    key={id}
                    id={id}
                    title={title}
                    accessibility={accessibility}
                    type={type}
                    participants={participants}
                    price={price}
                    link={link}
                  />
                )
              )
            : favorites.map(
                ({
                  id,
                  title,
                  accessibility,
                  type,
                  participants,
                  price,
                  link,
                }) => (
                  <Activity
                    key={id}
                    id={id}
                    title={title}
                    accessibility={accessibility}
                    type={type}
                    participants={participants}
                    price={price}
                    link={link}
                  />
                )
              )}
        </Stack>
      </Stack>
    </>
  );
};

export default Favorites;
