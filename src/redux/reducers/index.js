const initialState = {
  albums: {},
  artistSongs: {},
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
    case "SET_CURRENT_SONG":
      return {
        ...state,
        selectedSong: action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
