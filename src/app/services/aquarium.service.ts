import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AQUARIUMS } from '../services/aquarium.json';
import { aquarium } from '../models/aquarium';

@Injectable({
  providedIn: 'root'
})
export class AquariumsService {

  constructor() { }

  getItems(): Observable<aquarium[]>{
    return of(AQUARIUMS);
  }

}