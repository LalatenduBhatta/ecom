import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
let productProvider = createContext()


let ProductContext = ({ children }) => {
    let initialState = {
        loading: false,
        products: [],
        featured_Data: [],
        error: '',
        singleProduct: {},
        isSingleLoading: false

    }
    //this is reducer
    let [state, dispatch] = useReducer(reducer, initialState)
    //this function for the getting product data 
    const url = 'https://api.pujakaitem.com/api/products'
    async function getProducts() {
        dispatch({ type: "LOADING" })
        try {
            let res = await axios.get(url)
            let products = await res.data;
            
            dispatch({ type: "FETCH_DATA", payload: products })
        } catch (error) {
            dispatch({ type: "ERROR", payload: error })
        }

    }
    //this is for the getting single data
   async function singleProductFetch(url)
    {
            dispatch({type:"SET_LOADING"})
           try {
             let res=await axios.get(url)
             let singleProduct=await res.data;
             dispatch({type:"FETCH_SINGLE_DATA",payload:singleProduct})
           } catch (error) {
            dispatch({ type: "SET_ERROR", payload: error })
           }
    }
    //useEffect for run only ones
    useEffect(() => {
        getProducts()
    }, [])
    return <productProvider.Provider value={{ ...state,singleProductFetch }}>{children}</productProvider.Provider>
}

//custom hook for useContex
let useProductData = () => {
    return useContext(productProvider)
}
export { ProductContext, useProductData }