import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {AppState} from './redux/app.state';
import {AddCar, DeleteCar, LoadCars, UpdateCar} from './redux/cars.action';
import {Observable} from 'rxjs/internal/Observable';
import {Car} from './car.model';
import {map} from 'rxjs/operators';

@Injectable()
export class CarsService {

  static BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  preloadCars(): Observable<Car[]> {
    return this.http.get(CarsService.BASE_URL + 'cars').pipe(
      map((response: Car[]) => response)
    );
  }

  loadCars(): void {
    this.preloadCars()
      .toPromise()
      .then((cars: Car[]) => {
        this.store.dispatch(new LoadCars(cars));
      });
  }

  addCar(newCar: Car) {
    this.http.post<Car>(CarsService.BASE_URL + 'cars', newCar)
      .toPromise()
      .then((car: Car) => {
        this.store.dispatch(new AddCar(car));
      });
  }

  deleteCar(car: Car) {
    this.http.delete(CarsService.BASE_URL + 'cars/' + car.id)
      .toPromise()
      .then(() => {
        this.store.dispatch(new DeleteCar(car));
      });
  }

  updateCar(carForUpdate: Car) {
    this.http.put<Car>(CarsService.BASE_URL + 'cars/' + carForUpdate.id, carForUpdate)
      .toPromise()
      .then((car: Car) => {
        this.store.dispatch(new UpdateCar(car));
      });
  }
}
