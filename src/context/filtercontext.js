import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductData } from "./product";
import reducer from "../reducer/filter_reducer";

const FilterContext = createContext();
const intialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filter: {
        text: "",
        category: "All",
        company: "All",
        color:'All',
        price:0,
        maxPrice:0,
        minPrice:0
    }
};
export const FilterContextProvider = ({ children }) => {
    // we are getting this data form the product because we already got this data in product.js context
    let { products } = useProductData();
    const [state, dispatch] = useReducer(reducer, intialState);
    //this is the for showing the grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRIDVIEW" });
    };
    const setListView = () => {
        return dispatch({ type: "SET_LISTVIEW" });
    };
    //sorting function
    function sorting(event) {
        return dispatch({ type: "SORT_VALUE", payload: event.target.value });
    }

    //serching function
    function updateHandler(e) {

        let name = e.target.name
        let value = e.target.value
     
        return dispatch({ type: "SET_FILTER_TEXT", payload: { name, value } })
    }
      //function cleaarHandler
      function clearHandler()
      {
        return dispatch({type:"CLEAR_FILTER"})
      }
    //for   categry serach
    //to sort the filter project
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCT" })
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [state.sorting_value, products, state.filter])
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);
    return (
        <FilterContext.Provider
            value={{ ...state, setGridView, setListView, sorting, updateHandler,clearHandler  }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
