import PropTypes from "prop-types";

export const Number = ({ number, rating, setRating }) => {
  return (
    <article
      className={
        "rounded-full bg-gray-500/30 w-12 h-12 flex justify-center items-center text-gray-400 hover:bg-orange-500 hover:text-white cursor-pointer duration-150 " +
        (rating === number ? " bg-gray-300 text-black" : "")
      }
      onClick={() => setRating(number)}
      style={{
        backgroundColor: rating === number ? "hsl(217, 12%, 63%)" : "",
        color: rating === number ? "#FFFF" : "",
      }}
    >
      <span className='pointer-events-none'>{number}</span>
    </article>
  );
};

Number.propTypes = {
  number: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};
