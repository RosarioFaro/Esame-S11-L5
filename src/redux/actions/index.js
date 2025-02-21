export const SET_ALBUMS = "SET_ALBUMS";

export const setAlbums = (artistName, data) => ({
  type: SET_ALBUMS,
  payload: { artistName, data },
});
