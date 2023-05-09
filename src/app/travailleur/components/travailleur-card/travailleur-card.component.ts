import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Travailleur } from '../../models/travailleur';

@Component({
  selector: 'app-travailleur-card',
  templateUrl: './travailleur-card.component.html',
  styleUrls: ['./travailleur-card.component.scss']
})
export class TravailleurCardComponent implements OnInit {
  
  @Input() selectedTravailleur: Travailleur | undefined;

  @Output() received: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    if (this.selectedTravailleur) {
      // la propriété est définie, on peut l'utiliser en toute sécurité
      this.received.emit(true);
    }
  }
}
