import React, { useEffect, useState } from 'react';
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWZlM2VjMjMwNzYzMmU1MmM5Yjk0N2VkMGU4OGYxOCIsIm5iZiI6MTczNDY3NTI1MS43OTcsInN1YiI6IjY3NjUwYjMzNTJhYjEyZGZlYTVkZTUzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZfhS_IhBTNsDykLNDm8AauPOcO_-_63Qvzgv5p0GZuo'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        } else {
          console.error('No video results found');
          setApiData(null);
        }
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow} alt="Back" onClick={() => navigate(-1)} />
      {apiData ? (
        <>
          <iframe
            width="90%"
            height="90%"
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title="Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="player-info">
            <p>Publish Date: {apiData.published_at.slice(0, 10)}</p>
            <p>Name: {apiData.name}</p>
            <p>Type: {apiData.type}</p>
          </div>
        </>
      ) : (
        <p>Loading please wait...</p>
      )}
    </div>
  );
};

export default Player;
