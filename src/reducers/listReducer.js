export const listReducer = (state, action) => {
  switch (action.type) {
    case "start":
      return {
        ...state,
        loading: true,
      };
    case "loaded":
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        more: action.newData.length === action.perPage,
        after: state.after + action.newData.length,
      };
    default:
      throw new Error("Don't understand action");
  }
};
