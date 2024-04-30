function cartreducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let {
        product: { price, image, name, stock },
        color,
        id,
        cartCount,
      } = action.payload;
      let findItem = state.cart.find((data) => {
        return data.id == id + color;
      });
      if (findItem) {
        let updateFindData = state.cart.map((data) => {
          if (data.id == id + color) {
            let newAmmount = data.quantity + cartCount;
            return {
              ...data,
              quantity: newAmmount,
            };
          } else {
            return {
              ...data,
            };
          }
        });

        return {
          ...state,
          cart: updateFindData,
        };
      } else {
        let productData = {
          name,
          id: id + color,
          image: image[0].url,
          color,
          quantity: cartCount,
          price,
          stock,
        };
        return {
          ...state,
          cart: [productData, ...state.cart],
        };
      }

    case "DELETE_CART_ITEM":
      let filterItem = state.cart.filter((data) => {
        return data.id !== action.payload;
      });
      return {
        ...state,
        cart: filterItem,
      };
    case "CLEARALLCART":
      return {
        ...state,
        cart: [],
      };
    case "INC_TOGGLER":
      let updatedData = state.cart.map((data) => {
        if (data.id == action.payload) {
          let newData =
            data.stock > data.quantity ? data.quantity + 1 : data.stock;

          return {
            ...data,
            quantity: newData,
          };
        } else {
          return {
            ...data,
          };
        }
      });
      return {
        ...state,
        cart: updatedData,
      };
      case "DEC_TOGGLER":
        let updatedDatas = state.cart.map((data) => {
          if (data.id == action.payload) {
            let newData =
              data.stock < 1? data.quantity - 1 : 1;
  
            return {
              ...data,
              quantity: newData,
            };
          } else {
            return {
              ...data,
            };
          }
        });
        return {
          ...state,
          cart: updatedDatas,
        };
         case "TOTAL_AMMOUNT":
          let ammount=state.cart.reduce((acc,index)=>{
            return acc+(index.price*index.quantity)},0)
         return {
                 ...state,
                 total_amount:ammount
         }
         case "CART_COUNT_VALUE":
          let item_count=state.cart.reduce((acc,index)=>{
              return acc+index.quantity
          },0)
          return{
            ...state,
            total_item:item_count
          }
    default:
      return state;
  }
}
export default cartreducer;
