function productReducer(state, action) {

  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };

    case "FETCH_DATA":
      let fetureData = action.payload.filter((data) => {
        return data.featured === true;
      });
      return {
        ...state,
        loading: false,
        products: action.payload,
        fetured_Data: fetureData,
      };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_LOADING":
      return { ...state, isSingleLoading: true };
    case "FETCH_SINGLE_DATA":
      return { ...state, isSingleLoading: false, singleProduct: action.payload };
    case "SET_ERROR":
      return { ...state, isSingleLoading: true, error: action.payload };

    default:
      return state;
  }
}
export default productReducer;
