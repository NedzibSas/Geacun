import { Component, OnInit } from '@angular/core';
import { AquariumsService } from '../services/aquarium.service';
import { aquarium } from '../models/aquarium';

@Component({
  selector: 'app-acuarios',
  templateUrl: './acuarios.component.html',
  styleUrls: ['./acuarios.component.css']
})
export class AcuariosComponent implements OnInit {

  aquariums: aquarium[];

  constructor(private AquariumsService: AquariumsService) { }

  ngOnInit() {
    this.AquariumsService.getItems().subscribe(
      aquariums => this.aquariums = aquariums
    );
  }
}