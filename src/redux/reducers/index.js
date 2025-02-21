const initialState = {
  albums: {},
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
    default:
      return state;
  }
};

export default albumReducer;
