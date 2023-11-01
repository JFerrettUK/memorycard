/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

function ReturnScore(
  clickedItems,
  setClickedItems,
  firstTime,
  setFirstTime,
  prevScore,
  setPrevScore
) {
  const trueCount = clickedItems.filter((value) => value === true).length;

  useEffect(() => {
    // Save the previous score before any changes
    setPrevScore((prev) => (trueCount > prev ? trueCount : prev));
  }, [trueCount, setPrevScore]);

  if (trueCount === 12) {
    const itemsNoClicks = Array(12).fill(false);
    setClickedItems(itemsNoClicks);

    // Set firstTime to false once the score reaches 12
    setFirstTime(false);
    return "You win!";
  }

  // Display 0 on the first time when the score is 0
  if (firstTime && trueCount === 0) {
    return "Score: 0";
  }

  // Display "You win!" on subsequent times when the score is 0
  if (!firstTime && trueCount === 0) {
    return `You win!`;
  }

  // Display the regular score
  return `Score: ${trueCount}`;
}

export default ReturnScore;
