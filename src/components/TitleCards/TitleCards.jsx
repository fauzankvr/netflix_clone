import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import card_title from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category }) => {
  
  const [apiData,setApiData] = useState([])
  const cardRef = useRef()
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWZlM2VjMjMwNzYzMmU1MmM5Yjk0N2VkMGU4OGYxOCIsIm5iZiI6MTczNDY3NTI1MS43OTcsInN1YiI6IjY3NjUwYjMzNTJhYjEyZGZlYTVkZTUzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZfhS_IhBTNsDykLNDm8AauPOcO_-_63Qvzgv5p0GZuo",
  },
};

const handileWheel = (e) => {
  e.preventDefault()
  cardRef.current.scrollLeft += e.deltaY
}

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  cardRef.current.addEventListener("wheel",handileWheel)
},[])

  return (
    <div className='titleCards'>
      <h2>{ title ? title : "Trending Now"}</h2>
      <div className='card-list' ref={cardRef} >
        {apiData.map((card,index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  )
}



export default TitleCards