/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function ImageList({
  clickedItems,
  setClickedItems,
  lose,
  setLose,
  prevScore,
}) {
  // State to manage the order of images
  const [imageOrder, setImageOrder] = useState([...Array(12).keys()]);

  // Map of captains with their corresponding index
  const captains = {
    0: "Chakotay",
    1: "Sisko",
    2: "Picard",
    3: "Pike",
    4: "Kirk",
    5: "Archer",
    6: "Janeway",
    7: "Riker",
    8: "Spock",
    9: "T'Pol",
    10: "Kira",
    11: "Burnham",
  };

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffledOrder = [...imageOrder];
    for (let i = shuffledOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOrder[i], shuffledOrder[j]] = [
        shuffledOrder[j],
        shuffledOrder[i],
      ];
    }
    // Set the shuffled order
    setImageOrder(shuffledOrder);
  }, [clickedItems, lose]); // Include lose as a dependency

  useEffect(() => {
    // Reset clickedItems when the user loses
    if (lose) {
      const itemsNoClicks = Array(12).fill(false);
      setClickedItems(itemsNoClicks);
    }
  }, [lose]);
  return (
    <div>
      {lose && (
        <div className="loseText"> You lose - your score was {prevScore}</div>
      )}

      <div className="image-container">
        {/* Map through the shuffled imageOrder to render images */}
        {imageOrder.map((index) => (
          <div
            key={index}
            className={`image-item imageItem${index}`}
            onClick={() => {
              // Update clickedItems when an image is clicked
              setClickedItems((prevClickedItems) => {
                const newClickedItems = [...prevClickedItems];
                newClickedItems[index] = true;
                return newClickedItems;
              });
              console.log(
                `Clicked on an element with class: ${captains[index]}`
              );
              if (lose === true) {
                setLose(false);
              }
              if (clickedItems[index] === true) {
                console.log("already clicked");
                setLose(true);
                console.log("Lose: ", lose);
              }
            }}
          >
            {/* Display the image with the corresponding index */}
            <img
              src={`/src/image${index}.jpg`}
              alt={`Image ${index}`}
              className="trekImage"
            />
            {/* Display the captain's name */}
            <div className="imageText">{captains[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageList;
