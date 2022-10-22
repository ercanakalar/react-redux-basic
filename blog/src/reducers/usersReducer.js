const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      console.log([...state, action.payload], 'when FETCH_USER');
      return [...state, action.payload];
    default:
      return state;
  }
};

export default usersReducer;
