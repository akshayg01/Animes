import { useState, useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import Anime from "./Anime";

const WatchList = () => {
  const [items, setItems] = useState([]);

  const fetchWatchList = () => {
    const items = JSON.parse(localStorage.getItem("watchList"));
    if (items) {
      setItems(items);
    }
  };

  useEffect(() => {
    // localStorage.clear();
    fetchWatchList();
  }, []);

  const handleAddToWatchList = () => {
    console.log("handleAddtoWatchList");
    fetchWatchList();
  };

  return (
    <div>
      watch List
      {items && items.map((c) => <div> c.title </div>)}
    </div>
  );
  //<Anime key={c.id} id={c.id} images={c.images} />
};

export default WatchList;
