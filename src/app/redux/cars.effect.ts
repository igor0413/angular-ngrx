import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {AddCar} from './cars.action';
import * as carsActions from './cars.action';
import {Car} from '../car.model';
import {CarsService} from '../cars.service';
import {switchMap, mergeMap} from 'rxjs/operators';

@Injectable()
export class CarsEffect {

  constructor(private actions$: Actions, private service: CarsService) {}

  @Effect()
  loadCars$ = this.actions$.pipe(
    ofType(carsActions.ADD_CAR),
    switchMap((action: AddCar) => {
      return this.service.preloadCars();
    }),
    mergeMap((cars: Car[]) => {
      return [ new carsActions.LoadCars(cars)];
    })
  );
}
