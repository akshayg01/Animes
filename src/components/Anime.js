import { reactLocalStorage } from "reactjs-localstorage";

const Anime = ({ id, title, images, rating, handleAddToWatchList }) => {
  const addToWatchList = (e) => {
    e.preventDefault();

    let watchList = [];
    const savedItem = localStorage.getItem("watchList");
    if (savedItem) {
      watchList = JSON.parse(savedItem).split(",");
    }
    //Need to check if item already present..
    watchList.push({ id, title, images });

    reactLocalStorage.setObject("watchList", JSON.stringify(watchList));

    // console.log(watchList);
    handleAddToWatchList();
  };

  return (
    <div className="border-2 w-40 text-center">
      <div className="text-xs">{title} </div>
      <img
        src={images?.jpg?.image_url}
        height="100px"
        width="120px"
        className="ml-4"
      />
      <div className="text-xs">{rating} </div>
    </div>
  );
};

export default Anime;
