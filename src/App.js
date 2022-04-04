import { useEffect, useState } from "react";
import axios from "axios";

import Activity from "./components/Activity";
import Navigation from "./components/Navigation";

function App() {
  const [activity, setActivity] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://www.boredapi.com/api/activity/"
        );
        setActivity(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Activity
        title={activity?.activity}
        accessibility={activity?.accessibility}
        type={activity?.type}
        participants={activity?.participants}
        price={activity?.price}
        link={activity?.link}
      />
    </div>
  );
}

export default App;
