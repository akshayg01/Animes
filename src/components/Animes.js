import { TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Anime from "./Anime";
import Genres from "./Genres";

const Animes = ({ handleAddToWatchList }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [content, setContent] = useState([]);
  const [filter, setFilter] = useState("");

  const handleAddToWatchListByAnimes = () => {
    handleAddToWatchList();
  };

  const genersToString = () => {
    let s = "";

    for (const iterator of selectedGenres) {
      s += iterator.mal_id + ",";
    }
    return s;
  };

  const fetchAnimes = async () => {
    try {
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${filter ? filter : ""}&genres=${
          selectedGenres ? genersToString() : ""
        }&order_by=title`
      );

      setContent(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAnimes();
  }, [filter, selectedGenres]);

  return (
    <div>
      <Genres
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
      />
      <label for="Search">Search:</label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        id="search"
        name="serach"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="flex flex-wrap">
        {content &&
          content.map((c) => (
            <Anime
              key={c.mal_id}
              id={c.mal_id}
              images={c.images}
              title={c.title}
              rating={c.rating}
              handleAddToWatchList={() => handleAddToWatchListByAnimes()}
            />
          ))}
      </div>
    </div>
  );
};

export default Animes;
