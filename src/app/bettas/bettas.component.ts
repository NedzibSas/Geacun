import { Component, OnInit } from '@angular/core';
import { BettasService } from '../services/betta.service';
import { betta } from '../models/betta';

@Component({
  selector: 'app-bettas',
  templateUrl: './bettas.component.html',
  styleUrls: ['./bettas.component.css']
})
export class BettasComponent implements OnInit {

  bettas: betta[];

  constructor(private BettasService: BettasService) { }

  ngOnInit() {
    this.BettasService.getItems().subscribe(
      bettas => this.bettas = bettas
    );
  }
}