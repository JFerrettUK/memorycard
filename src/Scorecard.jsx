/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import ReturnScore from "./ReturnScore.jsx";

function Scorecard({
  clickedItems,
  setClickedItems,
  firstTime,
  setFirstTime,
  prevScore,
  setPrevScore,
}) {
  const score = ReturnScore(
    clickedItems,
    setClickedItems,
    firstTime,
    setFirstTime,
    prevScore,
    setPrevScore
  );

  return (
    <div className="score-container">
      <div className="explText">
        Get points by clicking on an image... but never click on the same image
        twice!
      </div>
      <div className="score">{score}</div>
    </div>
  );
}

export default Scorecard;
