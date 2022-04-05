import { useEffect, useState } from "react";
import axios from "axios";

import Activity from "./components/Activity";
import Navigation from "./components/Navigation";
import AskActivity from "./components/AskActivity";

function App() {
  const [activity, setActivity] = useState({});

  const fetchData = async (params) => {
    try {
      const response = await axios.get(
        "http://www.boredapi.com/api/activity/",
        { params }
      );
      setActivity(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Activity
        id={activity?.key}
        title={activity?.activity}
        accessibility={activity?.accessibility}
        type={activity?.type}
        participants={activity?.participants}
        price={activity?.price}
        link={activity?.link}
      />
      <AskActivity fetchData={fetchData} />
    </div>
  );
}

export default App;
