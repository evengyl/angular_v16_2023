import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {


  @Output() banPlayer : EventEmitter<number> = new EventEmitter<number>()

  @Input() id : number = 0
  @Input() ranked : number = 0
  @Input() pseudo : string = ""
  @Input() win : number = 0
  @Input() loose : number = 0
  @Input() money : number = 0

  bannir(idPlayerInChild : number)
  {
    this.banPlayer.emit(idPlayerInChild);
  }
}
