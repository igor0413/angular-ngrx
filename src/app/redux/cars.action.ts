import {Action} from '@ngrx/store';
import {Car} from '../car.model';

export const ADD_CAR = 'ADD_CAR';
export const DELETE_CAR = 'DELETE_CAR';
export const UPDATE_CAR = 'UPDATE_CAR';
export const LOAD_CARS = 'LOAD_CARS';

export class AddCar implements Action {
  readonly type = ADD_CAR;

  constructor(public payload: Car) {}
}

export class DeleteCar implements Action {
  readonly type = DELETE_CAR;

  constructor(public payload: Car) {}
}

export class UpdateCar implements Action {
  readonly type = UPDATE_CAR;

  constructor(public payload: Car) {}
}

export class LoadCars implements Action {
  readonly type = LOAD_CARS;

  constructor(public payload: Car[]) {}
}

export type CarsAction = AddCar | DeleteCar | UpdateCar | LoadCars;
