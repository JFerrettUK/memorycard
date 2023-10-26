/* eslint-disable react/prop-types */
import { useEffect } from "react";

function FillFalseArray({ clickedItems, setClickedItems }) {
  useEffect(() => {
    const itemsNoClicks = Array(12).fill(false);
    setClickedItems(itemsNoClicks);
  }, []);

  useEffect(() => {
    console.log(clickedItems);
  }, [clickedItems]);
  return null;
}

export default FillFalseArray;
