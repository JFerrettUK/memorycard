import HandleClick from "./HandleClick";
import { useEffect, useState } from "react";

function ImageList() {
  const [imageOrder, setImageOrder] = useState([...Array(12).keys()]);

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
  }, []); // Run once on mount to shuffle the order

  return (
    <div className="image-container">
      {imageOrder.map((index) => (
        <div
          key={index}
          className={`image-item imageItem${index}`}
          onClick={(e) => HandleClick(e, `imageItem${index}`)}
        >
          <img src={`image${index}.jpg`} alt={`Image ${index}`} />
          <div className="imageText">image {index}</div>
        </div>
      ))}
    </div>
  );
}

export default ImageList;
