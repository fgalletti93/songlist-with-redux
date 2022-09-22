import { combineReducers } from "redux";

//Song list reducer
const songsReducer = () => {
  return [
    {
      title: "Miracle Man",
      artist: "Olivar Tree",
    },
    {
      title: "No Scrubs",
      artist: "TLC",
    },
    {
      title: "Macarena",
      artist: "Los del Rio",
    },
    {
      title: "Allstar",
      artist: "Smash Mouth",
    },
  ];
};

//Selected song reducer
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
