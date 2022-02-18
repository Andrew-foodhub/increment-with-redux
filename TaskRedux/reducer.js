const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
