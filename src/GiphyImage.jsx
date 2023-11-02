import { useEffect, useState } from "react";

function GiphyImage() {
  const apiKey = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log(
      "https://api.giphy.com/v1/gifs/search?q=star_trek&api_key=9AYuLDQ6CpsARu2ZGb4PLL4SgkRFOBD5"
    );
    // Fetch GIFs when the component mounts
    fetch(`https://api.giphy.com/v1/gifs/search?q=star_trek&api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        // Update the state with the fetched GIFs
        setGifs(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiKey]); // Make sure to include apiKey in the dependency array to re-run the effect if apiKey changes

  // JSX to be rendered
  return (
    <div className="apiHolder">
      {gifs.length > 0 && (
        <img
          className="apiKey"
          src={gifs[0].images.fixed_height.url}
          alt={gifs[0].title}
        />
      )}
    </div>
  );
}

export default GiphyImage;
