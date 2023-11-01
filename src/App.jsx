// App.jsx
import { useState, useEffect } from "react";
import ImageList from "./ImageList.jsx";
import Scorecard from "./Scorecard.jsx";

import "./App.css";

function App() {
  const [lose, setLose] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const [clickedItems, setClickedItems] = useState([]);
  const [prevScore, setPrevScore] = useState([]);

  // Move the logic directly into the component
  useEffect(() => {
    const fillFalseArray = () => {
      const itemsNoClicks = Array(12).fill(false);
      setClickedItems(itemsNoClicks);
    };

    if (lose) {
      fillFalseArray();
    }
  }, [lose]);

  return (
    <>
      <div className="titleText">
        <h1>Memory Card</h1>
      </div>
      <Scorecard
        clickedItems={clickedItems}
        setClickedItems={setClickedItems}
        firstTime={firstTime}
        setFirstTime={setFirstTime}
        prevScore={prevScore}
        setPrevScore={setPrevScore}
      />
      <div className="displayCards">
        <ImageList
          clickedItems={clickedItems}
          setClickedItems={setClickedItems}
          lose={lose}
          setLose={setLose}
          prevScore={prevScore}
        />
      </div>
    </>
  );
}

export default App;
