import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ImageList from "./ImageList.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="titleText">
        <h1>Memory Card</h1>
      </div>
      <div className="displayCards">
        <ImageList />
      </div>
    </>
  );
}

export default App;
