// App.jsx
import { useState } from "react";
import ImageList from "./ImageList.jsx";
import FillFalseArray from "./FillFalseArray.jsx";
import Scorecard from "./Scorecard.jsx";

import "./App.css";

function App() {
  const [firstTime, setfirstTime] = useState(true);
  const [clickedItems, setClickedItems] = useState([]);
  FillFalseArray(clickedItems, setClickedItems);

  return (
    <>
      <div className="titleText">
        <h1>Memory Card</h1>
      </div>
      <Scorecard
        clickedItems={clickedItems}
        setClickedItems={setClickedItems}
        firstTime={firstTime}
        setFirstTime={setfirstTime}
      />
      <div className="displayCards">
        <ImageList
          clickedItems={clickedItems}
          setClickedItems={setClickedItems}
        />
      </div>
    </>
  );
}

export default App;
