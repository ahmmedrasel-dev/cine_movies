import { useState } from "react";
import { getUrl } from "../utills/CineUtills";
import MovieDetailsModal from "./MovieDetailsModal";
import Ratting from "./Ratting";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <MovieDetailsModal />
      <figure className="p-4 border border-black shadow-sm dark:border-white/10 rounded-xl">
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
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
