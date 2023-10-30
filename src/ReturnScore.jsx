function ReturnScore(clickedItems, setClickedItems, firstTime, setFirstTime) {
  const trueCount = clickedItems.filter((value) => value === true).length;

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
    return "You win!";
  }

  // Display the regular score
  return `Score: ${trueCount}`;
}

export default ReturnScore;
