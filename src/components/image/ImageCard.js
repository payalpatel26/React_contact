import PropTypes from "prop-types";

const ImageCard = ({ srcUrl, desc }) => {
  return (
    <>
      <img
        alt={desc}
        className="w-32 h-32 rounded-full mx-auto mt-7"
        src={srcUrl}
      />
    </>
  );
};

export default ImageCard;
ImageCard.prototype = {
  desc: PropTypes.string.isRequired,
  srcUrl: PropTypes.string.isRequired,
};
