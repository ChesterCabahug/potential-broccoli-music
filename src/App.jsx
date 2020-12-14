import { useState } from "react";

import "./styles/app.scss";

import Player from "./components/Player";
import Song from "./components/Song";

import data from "./util";

function App() {
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <audio src="https://www.dropbox.com/s/pfanatfpiwld32q/AURORA%20-%20Daydreamer%20%28Music%20Video%20%26%29.mp3?dl=0"></audio>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
