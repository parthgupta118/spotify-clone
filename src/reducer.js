export const initialState = {
  user: null,
  categories: [],
  category: null,
  playlists: [],
  playlist: null,
  playing: false,
  item: null,
  token: null,
  // token: 'BQBxxPkcDPaYD-J_73Zhq-ZNqG9gKFujYxa8AlWOdyzu1EOgpL9fu2zcPsBYdW8cUxNMqm9_uljcFMi7Jb7v1fybzDCjqd28v9Iv5ayG9x_UbfFfW0vtbu3xZp34p9wmhtx_yoLik5ra_Dk_Oj0qveRHFpgycCxNIpXzX-f3CwgNHY7K',
};

const reducer = (state, action) => {
  console.log(action);

  //Action --> type, [payload] (dynamic)

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };

    // case "SET_CATEGORIES":
    //   return {
    //     ...state,
    //     categories: action.categories,
    //   };

    // case "SET_CATEGORY":
    //   return {
    //     ...state,
    //     category: action.category
    //   };

    default:
      return state;
  }
};

export default reducer;
