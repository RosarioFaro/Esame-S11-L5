const initialState = {
  albums: {},
  artistSongs: {},
  favoritedSongs: [],
  selectedSong: null,
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALBUMS":
      return {
        ...state,
        albums: {
          ...state.albums,
          [action.payload.artistName]: action.payload.data,
        },
      };

    case "SET_ARTIST_SONGS":
      return {
        ...state,
        artistSongs: {
          ...state.artistSongs,
          [action.payload.artistName]: action.payload.data,
        },
      };

    case "SET_CURRENT_SONG":
      return {
        ...state,
        selectedSong: action.payload,
      };

    case "TOGGLE_FAVORITE_SONG": {
      const song = action.payload;
      const isFavorited = state.favoritedSongs.some((fav) => fav.id === song.id);

      return {
        ...state,
        favoritedSongs: isFavorited
          ? state.favoritedSongs.filter((fav) => fav.id !== song.id)
          : [...state.favoritedSongs, song],
      };
    }

    default:
      return state;
  }
};

export default albumReducer;
