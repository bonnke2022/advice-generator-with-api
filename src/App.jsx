import { useEffect, useState } from "react";
import Dice from "./images/Dice";
import DividerMobile from "./images/DividerMobile";
import DividerDesktop from "./images/DividerDesktop";

const url = "https://api.adviceslip.com/advice";

const App = () => {
  const [data, setData] = useState(0);
  const { id, advice } = data;
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.slip);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="bg-body flex">
      <div className="container bg-container flex ff-manrope fs-280 text-color fw-800">
        <h1 className="uppercase text-neon">advice #{id}</h1>
        <p className="fw-800">{`"${advice}"`}</p>
        <DividerMobile />
        <DividerDesktop />
        <button onClick={fetchData} className="dice">
          <Dice />
        </button>
      </div>
    </main>
  );
};

export default App;
