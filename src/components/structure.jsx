import PropTypes from "prop-types";

function Structure({ images }) {
  return (
    <div className="main">
      {images.slice(0, 12).map((image, index) => (
        <button className="card" key={index}>
          <img src={image} alt={`Pokemon ${index + 1}`} />
        </button>
      ))}
    </div>
  );
}

Structure.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // Expect images to be an array of strings and required
};

export default Structure;
