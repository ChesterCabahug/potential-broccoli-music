import "./styles/app.scss"
import Player from "./components/Player";
import Song from "./components/Song"

function App() {
  return (
    <div className="App">
    <audio src="https://www.dropbox.com/s/pfanatfpiwld32q/AURORA%20-%20Daydreamer%20%28Music%20Video%20%26%29.mp3?dl=0"></audio>
      <Song/>
      <Player />
    </div>
  );
}

export default App;
