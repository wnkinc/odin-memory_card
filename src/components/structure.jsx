import PropTypes from "prop-types"; // Import PropTypes

function Structure({ image }) {
  return (
    <>
      <div className="main">
        <div className="card">
          <img src={image} alt="Pokemon" />
        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </>
  );
}

Structure.propTypes = {
  image: PropTypes.string.isRequired, // Expect image to be a string and required
};

export default Structure;
