import { Chip } from "@mui/material";
import Badge from "@mui/material/Badge";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({ selectedGenres, setSelectedGenres, genres, setGenres }) => {
  const fetchGenres = async () => {
    const { data } = await axios.get(`https://api.jikan.moe/v4/genres/anime`);
    setGenres(data?.data);
  };

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.mal_id !== genre.mal_id));
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.mal_id !== genre.mal_id)
    );
    setGenres([...genres, genre]);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="flex flex-shrink flex-wrap" style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Badge badgeContent={genre.count} color="primary">
          <Chip
            style={{ margin: 1 }}
            label={genre.name}
            key={genre.mal_id}
            color="primary"
            clickable
            size="small"
            onDelete={() => handleRemove(genre)}
          />
        </Badge>
      ))}

      {genres.map((genre) => (
        <Chip
          style={{ margin: 1 }}
          label={genre.name}
          key={genre.mal_id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
