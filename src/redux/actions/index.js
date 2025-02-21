export const SET_ALBUMS = "SET_ALBUMS";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";

export const setAlbums = (artistName, data) => ({
  type: SET_ALBUMS,
  payload: { artistName, data },
});

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});
