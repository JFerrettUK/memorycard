const ImageList = () => {
  return (
    <div className="image-container">
      {[...Array(12)].map((_, index) => (
        <div key={index} className={`image-item imageItem${index}`}>
          <img src={`image${index}.jpg`} alt={`Image ${index}`} />
          <div className="imageText">image {index}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
