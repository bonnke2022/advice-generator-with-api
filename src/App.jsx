import { useEffect, useState } from "react";
import dice from "./images/Dice.svg";
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
        <span className="uppercase text-neon">advice #{id}</span>
        <p className="fw-800">{`"${advice}"`}</p>
        <DividerMobile />
        <DividerDesktop />
        <button onClick={fetchData} id="dice-btn">
          <img src={dice} alt="dice" className="dice" />
        </button>
      </div>
    </main>
  );
};

export default App;
