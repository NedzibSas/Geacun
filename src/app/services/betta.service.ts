import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BETTAS } from '../services/betta.json';
import { betta } from '../models/betta';

@Injectable({
  providedIn: 'root'
})
export class BettasService {

  constructor() { }

  getItems(): Observable<betta[]>{
    return of(BETTAS);
  }

}
