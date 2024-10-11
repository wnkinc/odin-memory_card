import PropTypes from "prop-types";

function Structure({ images, handleCardClick }) {
  return (
    <div className="main">
      {images.slice(0, 12).map((image) => (
        <button
          className="card"
          key={image.name}
          onClick={() => handleCardClick(image.name)}
        >
          <img src={image.imgUrl} alt={`Pokemon ${image.name}`} />
        </button>
      ))}
    </div>
  );
}

Structure.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleCardClick: PropTypes.func.isRequired, // Expect handleCardClick to be a function
};

export default Structure;
