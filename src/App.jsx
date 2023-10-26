// App.jsx
import { useState } from "react";
import ImageList from "./ImageList.jsx";
import FillFalseArray from "./FillFalseArray.jsx";

import "./App.css";

function App() {
  const [clickedItems, setClickedItems] = useState([]);

  return (
    <>
      <div className="titleText">
        <h1>Memory Card</h1>
      </div>
      <div className="displayCards">
        <ImageList />
        <FillFalseArray
          clickedItems={clickedItems}
          setClickedItems={setClickedItems}
        />
        ;
      </div>
    </>
  );
}

export default App;
