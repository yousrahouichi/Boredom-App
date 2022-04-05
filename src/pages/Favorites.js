import { useSelector } from "react-redux";
import { Stack } from "react-bootstrap";

import Navigation from "../components/Navigation";
import Activity from "../components/Activity";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);
  return (
    <>
      <Navigation />
      <Stack gap={5}>
        {favorites.map(
          ({ id, title, accessibility, type, participants, price, link }) => (
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
    </>
  );
};

export default Favorites;
