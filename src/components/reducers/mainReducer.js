import { DATA_INITIALIZED } from "../actions/mainConstants";
import { initializeData } from '../actions/mainActions';

const mainState = {
  categories: [],
  menuData: [],
  isDataInitialized: false
}

export const mainReducer = (state = mainState, action) => {
  if (action.type === DATA_INITIALIZED) {
    return {
      ...state,
      categories: [...action.data.categories],
      menuData: [...action.data.products],
      isDataInitialized: true
    }
  } else {
    return state;
  }  
}

export const getInitialData = () => async dispatch => {
  try {
    let [productData, categoryData] = await Promise.all([
      fetch('/api/products').then(res => res.json()),
      fetch('/api/categories').then(res => res.json())
    ]); 
    console.log('this is being tryed')
    dispatch(initializeData(productData, categoryData));

  } catch (error) {
    // throw Error(metadata.message)
    console.log(error);
  }
};