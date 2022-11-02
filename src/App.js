import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Animes from "./components/Animes";
import Anime from "./components/Anime";
import WatchList from "./components/WatchList";

function App() {
  const handleAddToWatchList = () => {};

  return (
    <div>
      <Header />
      <Animes handleAddToWatchList={() => handleAddToWatchList()} />
      <Footer />
    </div>
  );
}

export default App;
