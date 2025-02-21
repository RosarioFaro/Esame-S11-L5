export const SET_ALBUMS = "SET_ALBUMS";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const SET_ARTIST_SONGS = "SET_ARTIST_SONGS";
export const TOGGLE_FAVORITE_SONG = "TOGGLE_FAVORITE_SONG";

export const setAlbums = (artistName, data) => ({
  type: SET_ALBUMS,
  payload: { artistName, data },
});

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});

export const setArtistSongs = (artistName, data) => ({
  type: SET_ARTIST_SONGS,
  payload: { artistName, data },
});

export const toggleFavoriteSong = (song) => ({
  type: TOGGLE_FAVORITE_SONG,
  payload: song,
});
