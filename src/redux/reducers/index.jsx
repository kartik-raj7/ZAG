import { data } from "../../utils/data";

const initialState = {
  data: data,
  filteredData: [],
  filterKey:'',
  selectedProduct: null,
};

const rootReducer = (state = initialState, action) => {
  let category=[];
  let filteredData =[];
  let filterKey = '';
  switch (action.type) {
    case 'FILTER_BY_CATEGORY':
      category = action.payload; // Declare category using const
      filteredData = state.data.filter(item => item.category === category);
      filterKey = category;
      return {
        ...state,
        filteredData,
        filterKey,

      };
      case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
