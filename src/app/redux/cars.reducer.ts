import * as fromCarsAction from './cars.action';

const initialState = {
  cars: []
};

export function carsReducer(state = initialState, action: fromCarsAction.CarsAction) {
  switch (action.type) {
    case fromCarsAction.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case fromCarsAction.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)]
      };
    case fromCarsAction.UPDATE_CAR:
      const idx = state.cars.findIndex(c => c.id === action.payload.id);
      state.cars[idx].isSold = true;
      return {
        ...state,
        cars: [...state.cars]
      };
    case fromCarsAction.LOAD_CARS:
      return {
        ...state,
        cars: [...action.payload]
      };
    default:
      return state;
  }
}
