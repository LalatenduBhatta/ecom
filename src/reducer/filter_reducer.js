const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      //here i am taking array because i dont want to use orignal array i want to return new array
      //finding a highest price
      let arr = action.payload.map((data) => {
        return data.price;
      });
      let priceValue = Math.max(...arr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filter: { ...state.filter, maxPrice: priceValue, price: priceValue },
      };
    //this reducer for the showing grid view
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SORT_VALUE":
      console.log(action.payload);
      return {
        ...state,
        sorting_value: action.payload,
      };
    case "SORTING_PRODUCTS":
      let newsortData;
      let tempsortProduct = [...state.filter_products];
      let sortingProducts = (a, b) => {
        if (state.sorting_value === "A-Z") {
          return a.name.localeCompare(b.name);
        }
        if (state.sorting_value === "Z-A") {
          return b.name.localeCompare(a.name);
        }
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }
      };
      newsortData = tempsortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newsortData,
      };
    case "SET_FILTER_TEXT":
      let { name, value } = action.payload;

      {
        return {
          ...state,
          filter: { ...state.filter, [name]: value },
        };
      }
    case "FILTER_PRODUCT": {
      let tempsortProduct = [...state.all_products];
      if (state.filter.text) {
        tempsortProduct = tempsortProduct.filter((data) => {
          return data.name.toLowerCase().includes(state.filter.text);
        });
      }
      if (state.filter.category) {
        tempsortProduct = tempsortProduct.filter((data) => {
          if (data.category === state.filter.category) {
            return data;
          } else if (state.filter.category === "All") {
            return data;
          } else {
            return null
          }
        });
      }
      if (state.filter.company) {
        tempsortProduct = tempsortProduct.filter((data) => {
          if (data.company === state.filter.company) {
            return data;
          } else if (state.filter.company === "All") {
            return data;
          }
          else {
            return null
          }
        });
      }
      if (state.filter.color) {
        tempsortProduct = tempsortProduct.filter((item) => {
          if (item.colors.includes(state.filter.color)) {
            return item;
          } else if (state.filter.color === "All") {
            return item;
          } else {
            return null
          }
        });
      }
      if (state.filter.price) {
        tempsortProduct = tempsortProduct.filter((item) => {
          return item.price <= state.filter.price;
        });
      }

      return {
        ...state,
        filter_products: tempsortProduct,
      };
    }
    case "CLEAR_FILTER":
      let arr1 = state.all_products.map((data) => {
        return data.price;
      });
      let priceValue1 = Math.max(...arr1);
      return {
        ...state,
        filter: {
          text: "",
          category: "All",
          company: "All",
          color: "All",
          price: priceValue1,
          maxPrice: priceValue1,
          minPrice: 0,
        },
      };

    default:
      return state;
  }
};
export default filterReducer;
