import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetails } from "../utils/utilities";
import './style.css';
import Navbar from "../navbar";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io"; 
import Footer from "../footer";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const MovieDetails = () => {
  const { movie_id } = useParams();
  const [moviedetail, setMoviedetail] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false); 

  useEffect(() => {
    const view = async () => {
      try {
        const viewMovie = await getMovieDetails(movie_id);
        setMoviedetail(viewMovie);
      } catch (error) {
        console.log(error);
      }
    };
    view();
  }, [movie_id]);

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState); 
  };

  return (
    <>
      <Navbar />
      {moviedetail && (
        <div className="movie-details-div">
          <div className="movie-botton">
            <img
              src={`${IMAGE_BASE_URL}${moviedetail.poster_path}`}
              alt={moviedetail.title}
            />
            <br />
            <button>Watch Now</button>
          </div>
          <div className="movie-details">
            <h2>{moviedetail.title}</h2>
            <span className="favorite-icon" onClick={toggleFavorite}>
              {isFavorite ? (
                <IoIosHeart className="fav-icon" style={{ color: "#f0ad27e4" }} />
              ) : (
                <IoIosHeartEmpty className="fav-icon" style={{ color: "gray" }} />
              )}
            </span>
            <div className="three-divs">
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MovieDetails;
