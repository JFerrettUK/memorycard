/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import ReturnScore from "./ReturnScore.jsx";

function ImageList({ clickedItems, setClickedItems, firstTime, setFirstTime }) {
  // Call the ReturnScore function to calculate the score
  const score = ReturnScore(
    clickedItems,
    setClickedItems,
    firstTime,
    setFirstTime
  );

  return (
    <div className="score-container">
      {/* Explanation: Display instructions */}
      <div className="explText">
        Get points by clicking on an image... but never click on the same image
        twice!
      </div>

      {/* Explanation: Display the calculated score / win */}
      <div className="score">{score}</div>
    </div>
  );
}

export default ImageList;
