import {
    ADD_TO_CART,
    CHANGE_QUANTITY,
    REMOVE_FROM_CART
} from "../actions/cartConstants";

const cartState = {
    addedItems: [],
    total: 0,
    totalItems: 0
};

const cartReducer = (state = cartState, action) => {
    if (action.type === ADD_TO_CART) {
      let addedItem = action.addedItem;
      //check if the action id exists in the addedItems
      let existed_item = state.addedItems.find(item => addedItem._id === item._id)

      if (existed_item) {
        existed_item.quantity += 1;
        return {
          ...state,
          total: parseFloat((state.total + existed_item.price).toFixed(2)),
          totalItems: state.totalItems + 1
        };
      } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = parseFloat((state.total + addedItem.price).toFixed(2));
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
          totalItems: state.totalItems + 1
        };
      }
    } else if (action.type === CHANGE_QUANTITY) {
      
      // get added item
      let addedItem = state.addedItems.find(
        item => item._id === action.payload.id
      );

      // calculate total without added item
      let totalWithoutItem = parseFloat(
        (state.total - addedItem.price * addedItem.quantity).toFixed(2)
      );
      let totalItemsWithoutItem = state.totalItems - addedItem.quantity;
      addedItem.quantity = action.payload.quantity;

      // calculate new total with added item
      let newTotal = parseFloat(
        (totalWithoutItem + addedItem.price * addedItem.quantity).toFixed(2)
      );
      let newTotalItems = totalItemsWithoutItem + addedItem.quantity;

      return {
        ...state,
        addedItems: [...state.addedItems],
        total: newTotal,
        totalItems: newTotalItems 
      };
    } else if (action.type === REMOVE_FROM_CART) {

      // find the item to be removed
      let removedItem = state.addedItems.find(
        item => item._id === action.id
      );

      // calculate new total
      let newTotal = parseFloat(
        (state.total - removedItem.price * removedItem.quantity).toFixed(2)
      );

      // remove item from array
      let newItems = state.addedItems.filter(
        item => item._id !== action.id
      );

      return {
        ...state,
        addedItems: newItems,
        total: newTotal,
        totalItems: state.totalItems - removedItem.quantity
      };
    } else {
      return state;
    }
  };
  
  export default cartReducer;