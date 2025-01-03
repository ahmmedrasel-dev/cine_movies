import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { MovieContext } from "../contexts/MovieContext";
import { getUrl } from "../utills/CineUtills";
import MovieDetailsModal from "./MovieDetailsModal";
import Ratting from "./Ratting";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);
  const handleModalClose = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();

    const found = state.cartData.find((item) => item.id === movie.id);

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...movie },
      });
      toast.success(`The movie ${movie.title} Add To Cart`);
    } else {
      toast.error(`Alreday The Movie has been added to the cart!`);
    }
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={movie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Ratting value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
