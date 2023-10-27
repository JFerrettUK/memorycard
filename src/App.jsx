// App.jsx
import { useState } from "react";
import ImageList from "./ImageList.jsx";
import FillFalseArray from "./FillFalseArray.jsx";

import "./App.css";

function App() {
  const [clickedItems, setClickedItems] = useState([]);
  <FillFalseArray
    clickedItems={clickedItems}
    setClickedItems={setClickedItems}
  />;

  return (
    <>
      <div className="titleText">
        <h1>Memory Card</h1>
      </div>
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
