import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartreducer";
let cartContext = createContext()
function CartProvider({ children }) {
    //this is for the getting the data form localStorage
    function getItem()
    {
      let x=localStorage.getItem('utsavEcom')?JSON.parse(localStorage.getItem('utsavEcom')):[]
      return x;
    }
    let initalState = {
        cart: getItem(),
        total_item: '',
        total_amount: '',
        shipping_fee: 5000
    }
    let [state, dispatch] = useReducer(reducer, initalState)
    let addToCart = (id, color, cartCount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, cartCount, product } })
    }

    function delteCartHandler(id) {
        return dispatch({ type: "DELETE_CART_ITEM", payload: id })
    }
    function clearAllCart()
    {
        dispatch({type:"CLEARALLCART"})
    }
    function incToggler(id) {
        dispatch({type:'INC_TOGGLER',payload:id})
      }
      function decToggler(id) {
          dispatch({type:'DEC_TOGGLER',payload:id})
      }

    //this is for the set item in localStorage
    useEffect(()=>{
        dispatch({type:"TOTAL_AMMOUNT"})
        dispatch({type:"CART_COUNT_VALUE"})
            localStorage.setItem('utsavEcom',JSON.stringify(state.cart))
    },[state.cart])
    return <cartContext.Provider value={{ ...state, addToCart, delteCartHandler,clearAllCart,incToggler,decToggler}}>
        {children}
    </cartContext.Provider>

}

let useCart = () => {
    return useContext(cartContext)
}
export { CartProvider, useCart }