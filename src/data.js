import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Daydreamer",
      cover: "https://i.scdn.co/image/ab67616d00001e02ddc43da988dc80fac12c53ac",
      artist: "AURORA",
      audio:
        "https://www.dropbox.com/s/pfanatfpiwld32q/AURORA%20-%20Daydreamer%20%28Music%20Video%20%26%29.mp3?dl=1",
      color: ["#DD7672", "#D99484"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "So Am I",
      cover: "https://i.scdn.co/image/ab67616d00001e029a95e89d24214b94de36ccf7",
      artist: "Ava Max",
      audio:
        "https://www.dropbox.com/s/nj9oy94xm2ongh8/Ava%20Max%20-%20So%20Am%20I.mp3?dl=1",
      color: ["#C5411A", "#0A0808"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Thunderclouds (feat. Sia, Diplo, and Labrinth)",
      cover: "https://i.scdn.co/image/ab67616d00001e023f159ae07dd556323f39f47b",
      artist: "Sia, Diplo, Labrinth, LSD",
      audio:
        "https://www.dropbox.com/s/ijzewsktct0ff0s/LSD%20-%20Thunderclouds%20ft.%20Sia%2C%20Diplo%2C%20Labrinth.mp3?dl=1",
      color: ["#51AADE", "#EAC539"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Got the Feeling",
      cover: "https://i.scdn.co/image/ab67616d00001e020424b4126d728e688dfba08a",
      artist: "Syn Cole, kirstin",
      audio:
        "https://www.dropbox.com/s/7uctsq6trkxa6ug/Syn%20Cole%20-%20Got%20the%20Feeling%20%28Audio%29%20ft.%20kirstin.mp3?dl=1",
      color: ["#536894", "#DF915E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Good Day for Dreaming",
      cover: "https://i.scdn.co/image/ab67616d00001e02a6de26a824ef5f64569be17b",
      artist: "Ruelle",
      audio:
        "https://www.dropbox.com/s/8im60wh2dnr651b/Ruelle%20-%20Good%20Day%20for%20Dreaming.mp3?dl=1",
      color: ["#7A5B3B", "#A9C1D9"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Fly Away",
      cover: "https://i.scdn.co/image/ab67616d00001e028fb79948870fc9314eccac4b",
      artist: "Tones And I",
      audio:
        "https://www.dropbox.com/s/eliw87uukxvqbmr/TONES%20AND%20I%20-%20FLY%20AWAY.mp3?dl=1",
      color: ["#9FC878", "#f5bcba"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
