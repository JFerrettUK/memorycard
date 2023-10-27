/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function ImageList({ clickedItems, setClickedItems }) {
  const [imageOrder, setImageOrder] = useState([...Array(12).keys()]);

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
    setImageOrder(shuffledOrder);
    console.log(clickedItems);
  }, [clickedItems]); // Run once on mount to shuffle the order

  return (
    <div className="image-container">
      {imageOrder.map((index) => (
        <div
          key={index}
          className={`image-item imageItem${index}`}
          onClick={() => {
            setClickedItems((prevClickedItems) => {
              const newClickedItems = [...prevClickedItems];
              newClickedItems[index] = true;
              return newClickedItems;
            });
            console.log(`Clicked on an element with class: ${captains[index]}`);
          }}
        >
          <img
            src={`/src/image${index}.jpg`}
            alt={`Image ${index}`}
            className="trekImage"
          />
          <div className="imageText">{captains[index]}</div>
        </div>
      ))}
    </div>
  );
}

export default ImageList;
