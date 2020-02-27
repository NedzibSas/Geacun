import { Component, OnInit } from '@angular/core';
import { AquariumsService } from '../services/aquarium.service';
import { aquarium } from '../models/aquarium';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-acuarios',
  templateUrl: './acuarios.component.html',
  styleUrls: ['./acuarios.component.css']
})
export class AcuariosComponent implements OnInit {

  aquariums: aquarium[];

  constructor(private AquariumsService: AquariumsService) { }

  aqua: aquarium={
    id: "",
    ubication: "string",
    fish: 0,
    temperature: 0,
    ph: 0,
    food: "string",
    subtype: "string",
    age: "string",
    lvl: 0
};

  ngOnInit() {
    this.AquariumsService.getAquarium().subscribe(data => {
      this.aquariums = data.map(e => {
        return {
          id: e.payload.doc.id,
          ubication: e.payload.doc.data()['ubication'],
          fish: e.payload.doc.data()['fish'],
          temperature: e.payload.doc.data()['temperature'],
          ph: e.payload.doc.data()['ph'],
          food: e.payload.doc.data()['food'],
          subtype: e.payload.doc.data()['subtype'],
          age: e.payload.doc.data()['age'],
          lvl: e.payload.doc.data()['lvl']
        } as aquarium;
      })
    });
  }

  ubication = new FormControl('');
  fish = new FormControl('');
  temperature = new FormControl('');
  ph = new FormControl('');
  food = new FormControl('');
  subtype = new FormControl('');
  age = new FormControl('');
  lvl = new FormControl('');


  delete(id: string){
    this.AquariumsService.deleteAquarium(id);
  }

  create(){
    this.aqua.ubication = this.ubication.value;
    this.aqua.fish = this.fish.value;
    this.aqua.temperature = this.temperature.value;
    this.aqua.ph = this.ph.value;
    this.aqua.food = this.food.value;
    this.aqua.subtype = this.subtype.value;
    this.aqua.age = this.age.value;
    this.aqua.lvl = this.lvl.value;

    this.AquariumsService.createAquarium(this.aqua);

    this.ubication.setValue("");
    this.fish.setValue("");
    this.temperature.setValue("");
    this.ph.setValue("");
    this.food.setValue("");
    this.subtype.setValue("");
    this.age.setValue("");
    this.lvl.setValue("");
  }


}