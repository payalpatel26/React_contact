import PropTypes from "prop-types";
import ImageCard from "../image/ImageCard";

const ContactCards = (props) => {
  const { contact, imageUrl, id } = props;

  return (
    <>
      <figure
        className="bg-slate-100 text-white h-80 rounded-lg shadow-md"
        key={id}
      >
        <ImageCard desc={contact.name} srcUrl={imageUrl} />

        <figcaption className="text-center mt-5">
          <p className="text-gray-700 font-semibold text-xl mb-2">
            {contact.name}
          </p>
          <p className="text-gray-500">
            <span className="font-small font-serif text-ellipsis overflow-hidden">
              email:
            </span>
            {contact.email}
          </p>
          <p className="text-gray-500">
            <span className="font-small font-serif">phone: </span>
            {contact.phone}
          </p>
          <p className="text-gray-500">
            <span className="font-small font-serif">city: </span>
            {contact.address.city}
          </p>
        </figcaption>
      </figure>
    </>
  );
};

export default ContactCards;

ContactCards.prototype = {
  contact: PropTypes.array.isRequired,
  imageUrl: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};
